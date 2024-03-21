import { Sql } from 'postgres';

const experiences = [
  {
    id: 1,
    title: 'Wienfluss Ride',
    workshop_date: '2030-04-30',
    timeframe: '10:00 - 14:00',
    meetingpoint: 'string',
    category: 'Ride',
    image: `/images/ex01.jpeg`,
    fullyBooked: false,
    description: `Join us for a bike ride along Wientalradweg! Enjoy the scenery and good company!`,
  },
  {
    id: 2,
    title: 'Sophienalpe Group Hike',
    workshop_date: '2030-05-14',
    timeframe: '08:00 - 14:00',
    meetingpoint: 'string',
    category: 'Hike',
    image: `/images/ex02.jpeg`,
    fullyBooked: false,
    description: `Lets embark on a group hike to Sophienalpe and discover the beauty of nature together!`,
  },
  {
    id: 4,
    title: 'Insel Bike Rave',
    workshop_date: '2030-05-01',
    timeframe: ' 16:00 - 23:00',
    meetingpoint: 'string',
    category: 'Ride',
    image: `/images/ex03.jpeg`,
    fullyBooked: false,
    description: `Gear up for a party ride across Donauinsel - dont forget your helmets!`,
  },
  {
    id: 5,
    title: 'Leopoldstadt Art Walk',
    workshop_date: '2030-05-17',
    timeframe: '11:30 - 13:30',
    meetingpoint: 'string',
    category: 'Walk',
    image: `/images/ex04.jpeg`,
    fullyBooked: false,
    description: `Discover captivating art in Viennas 2nd districts public spaces!`,
  },
  {
    id: 6,
    title: ' Hameau Group Hike ',
    workshop_date: '2030-06-02',
    timeframe: '9:30 - 15:00',
    meetingpoint: 'string',
    category: 'Hike',
    image: `/images/ex05.jpeg`,
    fullyBooked: false,
    description: `Lets conquer Hameau together on a group hike, embracing the adventure and breathtaking views!`,
  },
];

export async function up(sql: Sql) {
  for (const experience of experiences) {
    await sql`
      INSERT INTO
        experiences (
          title,
          workshop_date,
          timeframe,
          meetingpoint,
          category,
          image,
          description
        )
      VALUES
        (
          ${experience.title},
          ${experience.workshop_date},
          ${experience.timeframe},
          ${experience.meetingpoint},
          ${experience.category},
          ${experience.image},
          ${experience.description}
        )
    `;
  }
}

export async function down(sql: Sql) {
  for (const experience of experiences) {
    await sql`
      DELETE FROM experiences
      WHERE
        id = ${experience.id}
    `;
  }
}
