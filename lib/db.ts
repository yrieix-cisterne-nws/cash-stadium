import sqlite3 from 'sqlite3'
import path from 'path'
import fs from 'fs'

const dataDir = path.join(process.cwd(), 'data')
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir);
}

const dbPath = path.join(dataDir, 'database.db')

const db = new sqlite3.Database(dbPath)

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS tank (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        image TEXT,
        dmgSquishie REAL,
        dmgTank REAL,
        selfHeal REAL,
        healSquishie REAL,
        healTank REAL
  )
    `)
    db.run(`
    CREATE TABLE IF NOT EXISTS dps (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        image TEXT,
        dmgSquishie REAL,
        dmgTank REAL,
        selfHeal REAL,
        healSquishie REAL,
        healTank REAL
    )
  `)
  db.run(`
    CREATE TABLE IF NOT EXISTS support (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        image TEXT,
        dmgSquishie REAL,
        dmgTank REAL,
        selfHeal REAL,
        healSquishie REAL,
        healTank REAL
  )
    `)
})

export async function query(sql: string, values: (string | number | null)[] = []): Promise<unknown> {
  return new Promise((resolve, reject) => {
    if (sql.trim().toUpperCase().startsWith('SELECT')) {
      db.all(sql, values, (err, rows) => {
        if (err) {
          console.error('Database Error:', err);
          reject(err);
        } else {
          resolve(rows);
        }
      });
    } else {
      db.run(sql, values, function(err) {
        if (err) {
          console.error('Database Error:', err);
          reject(err);
        } else {
          resolve({ lastID: this.lastID, changes: this.changes });
        }
      });
    }
  });
}

export default db

