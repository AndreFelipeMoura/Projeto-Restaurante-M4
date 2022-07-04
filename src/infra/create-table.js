import * as sqlite3 from 'sqlite3'
export const db = new sqlite3.default.Database('./src/infra/database.db');

// Quem quiser, pode usar esse arquivo pra criar as tabelas das entidades, aí na hora do merge a gente coloca pra deixar tudo, e nenhuma alteração se perde :D

const tableCliente = `
 CREATE TABLE IF NOT EXISTS "CLIENTES"(
    "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "NOME" varchar(70),
    "CPF" varchar(11),
    "EMAIL" varchar(50),
    "MESA" int
 )`
 function criaTabelaCliente(){
    db.run(tableCliente, (error)=>{
        if(error)console.log(error)
    })
 }
 const inserirDados = `
    INSERT INTO clientes (nome,cpf,email,mesa)
    values 
    ("Orlando Bernardi", "12345678900", "orlando@gmail.com",1),
    ("Gadiel Machado", "12345678901", "gadiel@gmail.com",2),
    ("Beatriz Araujo", "12345678902", "beatriz@gmail.com",3)
    
 `
 function criaDados(){
    db.run(inserirDados, (error)=>{
        if(error)console.log(error)
    })
 }
 
 db.serialize(()=>{
    criaTabelaCliente()
    criaDados()
 })