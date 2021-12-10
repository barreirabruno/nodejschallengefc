const db = require('../db')

!async function createTable() {
    const tableQuery = `
    CREATE TABLE IF NOT EXISTS people (
        id INT PRIMARY KEY AUTO_INCREMENT,
        name VARCHAR(255) NOT NULL
    )`

    await db.query(tableQuery)
}()

exports.findAll = async function() {
    const results = await db.query("SELECT * FROM people")
    return results[0]
}

exports.create = async function(name) {
    await db.query("INSERT INTO people (name) VALUES (?)", [name])
}

exports.findOne = async function(id) {
    const result = await db.query("SELECT * FROM people WHERE id=?", id)
    return result[0]
}