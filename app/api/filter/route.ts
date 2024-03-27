import { NextRequest, NextResponse } from 'next/server';
import { getExperiencesByCategoryInsecure } from '../../../database/experiences';
import { Experience } from '../../../migrations/00000-createTableExperiences';

type ExperiencesResponseBody = {
  experiences: Experience[];
};

export async function POST(
  request: NextRequest,
): Promise<NextResponse<ExperiencesResponseBody>> {
  console.log('active');
  try {
    // Extract the category from the request body
    const body = await request.json();
    console.log(body.categories, 'category');
    let experiences;
    for (const category of body.categories) {
      console.log(category, 'singlecategory');
      experiences = await getExperiencesByCategoryInsecure(category);
    }
    // Fetch experiences by the provided category
    console.log(experiences, 'experiences');
    // Return the fetched experiences in the response
    return NextResponse.json({ experiences });
  } catch (error) {
    // Handle errors gracefully and return an error response
    console.error('Error fetching experiences by category:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 },
    );
  }
}
