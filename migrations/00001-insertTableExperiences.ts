import { Sql } from 'postgres';

const experiences = [
  {
    id: 1,
    title: 'Wienfluss Ride',
    workshop_date: '2030-04-30',
    timeframe: '10:00 - 14:00',
    meetingpoint: 'Schönbrunn',
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
    meetingpoint: 'Kasgraben',
    category: 'Hike',
    image: `/images/ex02.jpeg`,
    fullyBooked: false,
    description: `Lets embark on a group hike to Sophienalpe and discover the beauty of nature together!`,
  },
  {
    id: 3,
    title: 'Insel Bike Rave',
    workshop_date: '2030-05-01',
    timeframe: ' 16:00 - 23:00',
    meetingpoint: 'Reichsbrücke',
    category: 'Ride',
    image: `/images/ex03.jpeg`,
    fullyBooked: false,
    description: `Gear up for a party ride across Donauinsel - dont forget your helmets!`,
  },
  {
    id: 4,
    title: 'Leopoldstadt Art Walk',
    workshop_date: '2030-05-17',
    timeframe: '11:30 - 13:30',
    meetingpoint: 'Nestroyplatz',
    category: 'Walk',
    image: `/images/ex04.jpeg`,
    fullyBooked: false,
    description: `Discover captivating art in Viennas 2nd districts public spaces!`,
  },
  {
    id: 5,
    title: ' Hameau Group Hike ',
    workshop_date: '2030-06-02',
    timeframe: '9:30 - 15:00',
    meetingpoint: 'Endstation Neuwaldegg',
    category: 'Hike',
    image: `/images/ex05.jpeg`,
    fullyBooked: false,
    description: `Lets conquer Hameau together on a group hike, embracing the adventure and breathtaking views!`,
  },
  {
    id: 6,
    title: 'Hainburger Weg Walk',
    workshop_date: '2030-06-13',
    timeframe: '14:00 - 16:00',
    meetingpoint: 'Endstation Neuwaldegg',
    category: 'Hike',
    image: `/images/ex06.jpeg`,
    fullyBooked: false,
    description: ``,
  },
  {
    id: 7,
    title: 'Lainzer Tiergarten Family Hike',
    workshop_date: '2030-07-01',
    timeframe: '09:00 - 13:00',
    meetingpoint: 'Gütenbachtor',
    category: 'Hike',
    image: `/images/ex07.jpeg`,
    fullyBooked: false,
    description: ``,
  },
  {
    id: 8,
    title: 'EuroVelo 9 Ride',
    workshop_date: '2030-07-09',
    timeframe: '08:00 - 19:00',
    meetingpoint: 'Volksgarten',
    category: 'Ride',
    image: `/images/ex08.jpeg`,
    fullyBooked: false,
    description: ``,
  },
  {
    id: 9,
    title: 'Johannesbachklamm Group Hike',
    workshop_date: '2030-07-31',
    timeframe: '10:00 - 16:00',
    meetingpoint: 'Matzleinsdorfer Platz',
    category: 'Hike',
    image: `/images/ex09.jpeg`,
    fullyBooked: false,
    description: ``,
  },
  {
    id: 10,
    title: 'Heurigen Tour',
    workshop_date: '2030-08-09',
    timeframe: '14:00 - 22:00',
    meetingpoint: 'Bisamberg',
    category: 'Walk',
    image: `/images/ex10.jpeg`,
    fullyBooked: false,
    description: ``,
  },
  {
    id: 11,
    title: 'Liesigbachroute Ride',
    workshop_date: '2030-08-28',
    timeframe: '15:00 - 17:00',
    meetingpoint: 'Atzgersdorf',
    category: 'Ride',
    image: `/images/ex11.jpeg`,
    fullyBooked: false,
    description: ``,
  },
  {
    id: 12,
    title: 'Rundumadum Family Hike',
    workshop_date: '2030-09-02',
    timeframe: '08:30 - 13:00',
    meetingpoint: 'Marswiese',
    category: 'Hike',
    image: `/images/ex12.jpeg`,
    fullyBooked: false,
    description: ``,
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
