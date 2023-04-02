/* SQLite3.js モジュール v1.0.0 */
/*   sqlite3 がインストールされていること。 (npm install sqlite3) */
"use strict";
var sqlite3 = require("sqlite3");

// データベースに接続する。
exports.connect = async (dbPath) => {
  return new Promise((resolve, reject) => {
    const db = new sqlite3.Database(dbPath, (err) => {
      if (err)
        reject(err);
      else
        resolve(db);
    });
  });
}

// クエリーを行い結果をすべて返す。。
exports.query = async (db, sql, parameters=[]) => {
  return new Promise((resolve, reject) => {
    db.all(sql, parameters, (err, rows) => {
      if (err)
        reject(err);
      else
        resolve(rows);
    });
  });
}

// １行を返すクエリーを行いその行を返す。。
exports.getRow= async (db, sql, parameters=[]) => {
  return new Promise((resolve, reject) => {
    db.get(sql, parameters, (err, row) => {
      if (err)
        reject(err);
      else
        resolve(row);
    });
  });
}

// 非 SELECT クエリーを実行する。
exports.execute = async (db, sql, parameters=[]) => {
  return new Promise((resolve, reject) => {
    db.run(sql, parameters, (err) => {
      if (err)
        reject(err);
      else
        resolve();
    });
  });
}

// 接続を閉じる。
exports.close = (db) => {
  db.close();
}