import { Sql } from 'postgres';
import { z } from 'zod';

export type User = {
  id: number;
  email: string;
  username: string;
  passwordHash: string;
};

export const userSchema = z.object({
  email: z.string().email(),
  username: z.string(),
  password: z.string().min(3),
});

export async function up(sql: Sql) {
  await sql`
    CREATE TABLE users (
      id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
      email varchar(80) NOT NULL UNIQUE,
      username varchar(100) NOT NULL UNIQUE,
      password_hash varchar(80) NOT NULL
    )
  `;
}

export async function down(sql: Sql) {
  await sql`DROP TABLE users`;
}
