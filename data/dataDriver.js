import sqlite3 from "sqlite3";
sqlite3.verbose();
import { open } from 'sqlite';


const getData = async (table) => {
    const sql = `SELECT * FROM ${table}`
    const db = await open({
        filename: './data/data.db',
        driver: sqlite3.Database
    })
    return await db.all(sql);
}

export default getData;