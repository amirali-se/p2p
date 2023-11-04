import * as mongoose from 'mongoose';
import { environment } from '../environment';
export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: () => mongoose.connect(environment.stringConnectionMB) },
];