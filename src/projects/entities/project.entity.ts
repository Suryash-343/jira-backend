import { BaseEntity, Column, CreateDateColumn, Entity, ObjectIdColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Project extends BaseEntity {
    @ObjectIdColumn()
    _id: Object

    @Column()
    organizationId: string;

    @Column()
    projectName: string;

    @Column()
    projectKey: string;

    @Column()
    projectDesc: string;

    @Column()
    projectAdmin: string;

    @Column()
    projectMembers: Array<any>;

    @CreateDateColumn({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP(6)'
    })
    createdAt: Date;

    @UpdateDateColumn({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP(6)',
        onUpdate: 'CURRENT_TIMESTAMP(6)'
    })
    updatedAt: Date;
}
