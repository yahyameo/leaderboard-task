
import { Sequelize } from 'sequelize-typescript';
import { User } from 'src/users/user.entity';
import { Score } from 'src/scores/score.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'postgres',
        host: process.env.DATABASE_HOST,
        port: process.env.DATABASE_PORT?parseInt(process.env.DATABASE_PORT):5432,
        username: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_DATABASE,
      });
      sequelize.addModels([
        User, Score,
      ]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
