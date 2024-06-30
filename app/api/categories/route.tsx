import { NextApiRequest, NextApiResponse } from 'next';
import { openDb } from '../../../database';

export async function GET(req: Request) {
    const db = await openDb();
    const categories = await db.all('SELECT DISTINCT main_category, sub_category FROM scraped_data WHERE title IS NOT NULL');

    const categoryMap: Record<string, string[]> = {};

    categories.forEach(({ main_category, sub_category }) => {
        if (!categoryMap[main_category]) {
            categoryMap[main_category] = [];
        }
        if (sub_category && !categoryMap[main_category].includes(sub_category)) {
            categoryMap[main_category].push(sub_category);
        }
    });

    return new Response(JSON.stringify(categoryMap), {
        status: 200,
        headers: {
            'Content-Type': 'application/json',
        },
    });
}
