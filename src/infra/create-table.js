import sqlite3 from 'sqlite3';
export const db = new sqlite3.Database('./database.db');

// Quem quiser, pode usar esse arquivo pra criar as tabelas das entidades, aí na hora do merge a gente coloca pra deixar tudo, e nenhuma alteração se perde :D

const tabela_garcom = `
CREATE TABLE IF NOT EXISTS "GARÇOM"(
    "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "NOME" varchar(64),
    "CPF" varchar(11),
    "TELEFONE" varchar(11),
    "TURNO" varchar(7),
    "PRAÇA" tinyint,
    "COMISSÃO" varchar(3)
)`

function cria_tabela_garcom(){
    db.run(tabela_garcom, (error)=>{
        if(error) console.log("Erro ao criar tabela garçom")
    })
}

cria_tabela_garcom()