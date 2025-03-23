import { BaseEntity, Column, CreateDateColumn, Entity, ObjectIdColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Organization extends BaseEntity {
    @ObjectIdColumn()
    _id: Object

    @Column()
    organizationName: string;
    @Column()
    organizationKey: string;
    @Column()
    organizationDesc: string;
    @Column()
    organizationAdmin: string;
    @Column()
    organizationProfilePic: string;
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
