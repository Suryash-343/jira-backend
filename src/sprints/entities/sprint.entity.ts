import { BaseEntity, Column, CreateDateColumn, Entity, ObjectIdColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Sprint extends BaseEntity {
    @ObjectIdColumn()
    id: Object
    
    @Column()
    projectId: string;

    @Column()
    name: string;

    @Column()
    startDate: Date;
    @Column()
    endDate: Date;
    @Column()
    members: Array<any>;
    @Column()
    status: string;
    @Column()
    sprintAdmin: string;
    @Column()
    description: string;
    @Column()
    sprintKey: string;

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
