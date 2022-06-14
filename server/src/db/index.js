import sqlite3 from "sqlite3";

const Sqlite = sqlite3.verbose();

const db = new Sqlite.Database(
  ":memory:",
  Sqlite.OPEN_READWRITE,
  (err) => {
    if (err) {
      console.log(err);
    }
  }
);

db.serialize(() => {
  db.run(
    "create table if not exists calender (id integer primary key, date text, note text)"
  );
})


export const getAllNotes = () => {
  return new Promise((resolve, reject) => {
    db.all("select * from calender", (err, rows) => {
      if (err) {
        reject(err);
      } else {
        resolve(rows);
      }
    });
  }
  );
}

export const addNote = (date, note) => {
  return new Promise((resolve, reject) => {
    db.run(
      "insert into calender (date, note) values (?, ?)",
      [date, note],
      (err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      }
    );
  }
  );
}

export const modifyNote = (date, note) => {
  return new Promise((resolve, reject) => {
    db.run(
      "update calender set date = ?, note = ? where date = ?",
      [date, note, date],
      (err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      }
    );
  }
  );
}



export default db;
