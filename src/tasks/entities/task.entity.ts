import { BaseEntity, Column, CreateDateColumn, Entity, ObjectIdColumn, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { Transform } from 'class-transformer';

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

  @Transform(value => {
    return new Date(String(value))
  })
  @Column()
  dueDate: Date;

  @Column()
  createdBy: string;

  @Column()
  createdByEmail: string;

  @Column()
  assignedTo: string;

  @Column()
  assignedToEmail: string;

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