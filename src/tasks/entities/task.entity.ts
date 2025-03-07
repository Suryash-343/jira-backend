import { BaseEntity, Column, Entity, ObjectIdColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity() 
export class Task extends BaseEntity {
   @ObjectIdColumn()
   id: Object

  @Column()
  title: string; //todo's title 

  @Column()
  status: string; //todo's status 
}