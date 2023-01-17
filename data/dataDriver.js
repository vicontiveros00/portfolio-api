import sqlite3 from "sqlite3";
sqlite3.verbose();
import { open } from 'sqlite';

const db = await open({
    filename: './data/data.db',
    driver: sqlite3.Database
})

const deconstructObjectValues = (object) => {
    let formattedString = '';
    for (const property in object) {
        formattedString += `"${object[property]}", `;
    }
    return formattedString.slice(0, -2)
}

const findEntryById = async (table, id) => {
    try {
        const sql = `SELECT * FROM ${table} WHERE id = ${id}`;
        const entry = await db.get(sql, (err) => {
            return err.message
        });
        return entry;
    } catch (err) {
        return err.message;
    }
}

export const getData = async (table) => {
    const sql = `SELECT * FROM ${table}`
    return await db.all(sql);
}

export const addNewEntry = async (table, data) => {
    const sql = `INSERT INTO ${table} (${Object.keys(data)}) VALUES(${deconstructObjectValues(data)})`
    await db.run(sql, (err) => {
        return {
            error: err.message
        }
    });
    return {
        message: `Operation successful, added new entry to ${table} table.`
    }
}

export const deleteEntry = async(table, id) => {
    const entry = await findEntryById(table, id);
    if (typeof entry === 'object') {
        const sql = `DELETE FROM ${table} WHERE id = ${id}`;
        await db.run(sql, (err) => {
            return {
                message: err.message
            }
        })
        return {
            message: `Deletion successful. Deleted ID ${id} from ${table} table.`
        }
    } else {
        return {
            message: `Entry with ID ${id} does not exist in ${table} table.`
        }
    }
}