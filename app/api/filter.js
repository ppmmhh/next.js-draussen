import { getClient } from '../../database/connect'; // Import your PostgreSQL connection

export default async function handler(req, res) {
  const { categories } = req.query;

  let query = 'SELECT * FROM experiences';
  const values = [];

  if (categories) {
    const categoriesArray = categories.split(',');
    query += ' WHERE category IN (';

    categoriesArray.forEach((category, index) => {
      switch (category.trim().toLowerCase()) {
        case 'hike':
          values.push('Hike');
          break;
        case 'ride':
          values.push('Ride');
          break;
        case 'walk':
          values.push('Walk');
          break;
        default:
          return;
      }

      query += `$${index + 1}`;

      if (index !== categoriesArray.length - 1) {
        query += ', ';
      }
    });

    query += ')';
  }

  try {
    const client = getClient(); // Get a single database connection instance
    const result = await client.query(query, values);

    res.status(200).json(result.rows);
  } catch (error) {
    console.error('Error fetching items:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
