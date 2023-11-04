import { Connection } from 'mongoose';
import { LeadSchema } from 'src/schemas/lead/lead.schemas';

export const leadProvider = [
  {
    provide: 'LEAD_MODEL',
    useFactory: (connection: Connection) => connection.model('Lead', LeadSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];