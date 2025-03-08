import { BaseEntity, Column, CreateDateColumn, Entity, ObjectIdColumn, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity() 
export class Task extends BaseEntity {

  @ObjectIdColumn()
  id: Object

  @Column()
  title: string; 

  @Column()
  description: string; 

  @Column()
  priority: number;

  @Column({
    default: 'pending',
  })
  status: string;

  @Column()
  dueDate: Date;

  @Column()
  createdBy: string;

  @Column()
  assignedTo: string;

  @CreateDateColumn({
    type: 'timestamp',
    default: ()=> 'CURRENT_TIMESTAMP(6)'
  })
  createdAt: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    default: ()=> 'CURRENT_TIMESTAMP(6)',
    onUpdate: 'CURRENT_TIMESTAMP(6)'
  })
  updatedAt: Date;
}