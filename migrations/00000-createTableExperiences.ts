import { Sql } from 'postgres';

export type Experience = {
  id: number;
  title: string;
  workshop_date: string;
  timeframe: string;
  startingpoint: string | null;
  category: string | null;
  image: string;
  description: string;
};

export async function up(sql: Sql) {
  await sql`
    CREATE TABLE experiences (
      id integer PRIMARY key generated always AS identity,
      title varchar(70) NOT NULL,
      workshop_date varchar(40) NOT NULL,
      timeframe varchar(40) NOT NULL,
      meetingpoint varchar(40),
      category varchar(40),
      image varchar(50) NOT NULL,
      description varchar NOT NULL
    )
  `;
}

export async function down(sql: Sql) {
  await sql`DROP TABLE experiences`;
}
