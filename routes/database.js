// database.js
// 连接Mysql

var mysql = require('mysql');
// 数据库连接配置
// var pool = mysql.createPool({
//   host: 'localhost',    // 数据库的地址
//   user: 'root',         // 数据库用户名
//   password: '123456',     // 数据库密码
//   database: 'express'   // 数据库名称   
// })
var pool = mysql.createPool({
  host: '119.45.12.238',    // 数据库的地址
  port: '3307',
  user: 'root',         // 数据库用户名
  password: '84529563f',     // 数据库密码
  database: 'wenlx'   // 数据库名称   
})

// 对数据库进行增删改查操作的基础
// function query(sql, callback) {
//   pool.getConnection((err, connection) => {
//     connection.query(sql, (err, rows) => {
//       callback(err, rows)
//       connection.release()
//     })
//   })
// }

function query(sql, values) {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) {
        reject(err)
      } else {
        connection.query(sql, values, (err, rows) => {
          if (err) {
            reject(err)
          } else {
            resolve(rows)
          }
          connection.release()
        })
      }
    })
  })
}

exports.query = query