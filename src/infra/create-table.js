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

 const inserirDados = `
    INSERT INTO clientes (nome,cpf,email,mesa)
    values 
    ("Orlando Bernardi", "12345678900", "orlando@gmail.com",1),
    ("Gadiel Machado", "12345678901", "gadiel@gmail.com",2),
    ("Beatriz Araujo", "12345678902", "beatriz@gmail.com",3)
    
 `
 const tabela_garcom = `
CREATE TABLE IF NOT EXISTS "GARÇOM"(
    "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "NOME" varchar(64),
    "CPF" varchar(11),
    "TELEFONE" varchar(11),
    "TURNO" varchar(7),
    "PRACA" tinyint,
    "COMISSAO" varchar(3)
)`

function criaTabelaCliente(){
    db.run(tableCliente, (error)=>{
        if(error)console.log(error)
    })
 }

 function cria_tabela_garcom(){
    db.run(tabela_garcom, (error)=>{
        if(error) console.log("Erro ao criar tabela garçom")
    })
}

 function criaDados(){
    db.run(inserirDados, (error)=>{
        if(error)console.log(error)
    })
 }
 
 db.serialize(()=>{
    criaTabelaCliente()
    criaDados()
    cria_tabela_garcom()
 })







