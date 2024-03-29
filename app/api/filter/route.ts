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

    const experiencesPromises = body.categories.map((category: string) => {
      console.log(category, 'singlecategory');
      return getExperiencesByCategoryInsecure(category);
    });

    // Wait for all experiences to be fetched
    const experiences = await Promise.all(experiencesPromises);

    // Flatten the array of arrays of experiences into a single array
    const flattenedExperiences = experiences.flat();

    // Return the fetched experiences in the response
    console.log(flattenedExperiences, 'experiences');
    return NextResponse.json({ experiences: flattenedExperiences });
  } catch (error) {
    // Handle errors gracefully and return an error response
    console.error('Error fetching experiences by category:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 },
    );
  }
}
