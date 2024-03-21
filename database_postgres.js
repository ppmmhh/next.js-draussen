import dotenv from 'dotenv-safe';
import postgres from 'postgres';

dotenv.config();

const sql = postgres();

console.log(
  await sql`
    SELECT
      *
    FROM
      experiences
  `,
);
