import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, ObjectIdColumn } from 'typeorm';

@Entity('exception_logs')
export class ExceptionLog  extends BaseEntity {
      @ObjectIdColumn()
      _id: Object

  @Column()
  ip: string;

  @Column()
  path: string;

  @Column()
  method: string;

  @Column()
  authorization: string;

  @Column()
  statusCode: number;
  @Column()
  payload: any;

  @Column()
  message: string;
  @Column()
  controllerName: string;
  @Column()
  handlerName: string;

  @Column('text', { nullable: true })
  stack?: string;

  @Column({ type: 'int', default: 1 })
  count: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  timestamp: Date;
}
