const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./src/infra/database.db');

const CREATE = `
CREATE TABLE IF NOT EXISTS "CARDAPIO"(
    "id" INTEGER PRIMARY KEY AUTOINCREMENT,
    "ingredientes" varchar(64),
    "pratos" varchar(64),
    "bebidas" varchar(64),
    "preco" varchar(64),
    "numvendas" varchar(64)

)`;

const INSERT = `INSERT INTO CARDAPIO (id, ingredientes, pratos, bebidas, preco, numvendas)
VALUES (1, 'bacon', 'feijoada', 'agua', '10', '414')`;

function create() {
    db.run(CREATE, (error) => {
        if (error)
            console.log('ERROU NA CRIA', error)
    })
}

function insert() {
    db.run(INSERT, (error) => {
        if (error)
            console.log('ERROU NO INSERT', error)
    })
}

db.serialize(() => {
    create();
    insert();
})