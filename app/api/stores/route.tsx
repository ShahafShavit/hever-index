import { NextRequest, NextResponse } from 'next/server';
import { openDb } from '../../../database';

// Define the handler for GET requests
export async function GET(req: NextRequest) {
    const db = await openDb();
    try {
        const stores = await db.all('SELECT * FROM scraped_data WHERE title IS NOT NULL');
        return NextResponse.json(stores);
    } catch (error) {
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
