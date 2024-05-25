import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from './schema'
const sql = neon('postgresql://expense_owner:o1O4ZYktKuQP@ep-crimson-haze-a50638dw.us-east-2.aws.neon.tech/Expense-Tracker?sslmode=require');
export const db = drizzle(sql,{schema});