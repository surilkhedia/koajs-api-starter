// optional mysql config file

const mysql = require('mysql2')

const dbHost = process.env.DB_HOST || 'localhost'
const dbUser = process.env.DB_USER || 'dbuser'
const dbPass = process.env.DB_PASS || 'dbpass'
const dbName = process.env.DB_NAME || 'dbname'

const pool = mysql.createPool({
    host: dbHost,
    user: dbUser,
    password: dbPass,
    database: dbName
})

const poolPromise = pool.promise()

module.exports = poolPromise