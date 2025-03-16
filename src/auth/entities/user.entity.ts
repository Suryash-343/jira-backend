
import { BaseEntity, Column, CreateDateColumn, Entity, ObjectIdColumn, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { Transform } from 'class-transformer';

@Entity()
export class User extends BaseEntity {

  @ObjectIdColumn()
  id: Object


  @Column()
  fullName: string;

  @Column({unique: true})
  email: string;

  @Column()
  password: string;

  @Column()
  role: string;
  
  @Column()
  managerName: string;

  @Column()
  managerEmail: string;

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