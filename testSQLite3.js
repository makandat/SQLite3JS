/* SQLite3 モジュールのテスト */
const sql3 = require("./SQLite3.js");
const DbPath = "./data.db";

async function main() {
  const db = await sql3.connect(DbPath);
  const rows = await sql3.query(db, "SELECT * FROM table1");
  for (const row of rows) {
    console.log(row);
  }
  let row = await sql3.getRow(db, "SELECT * FROM table1 WHERE n=?", [1]);
  console.log(row);
  row = await sql3.getRow(db, "SELECT max(n) as maxn FROM table1");
  console.log(row.maxn);
  let n = row.maxn + 1;
  await sql3.execute(db, "INSERT INTO table1 VALUES(?, ?)", [n, 'A'.repeat(n)]);
  sql3.close(db);
}

main();
