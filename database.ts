import sqlite3 from 'sqlite3';
import { open, Database } from 'sqlite';

export const openDb = async (): Promise<Database> => {
    return open({
        filename: './scraped_data.db',
        driver: sqlite3.Database
    });
};
