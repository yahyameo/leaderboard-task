// src/users/user.model.ts
import { Table, Column, Model, HasMany, DataType } from 'sequelize-typescript';
import { Score } from 'src/scores/score.entity';

@Table
export class User extends Model<User> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  username: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password: string;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  isAdmin: boolean;

  @HasMany(() => Score)
  scores: Score[];
}

export const userProviders = [{ provide: 'UserRepository', useValue: User }];
