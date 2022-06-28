import sqlite3 from 'sqlite3';
export const bd = new sqlite3.Database('./src/infra/database.db');

// esse é o arquivo base para puxarmos nosso bd em outros arquivos

//Processamento de sinal
process.on('SIGINT', () =>
    bd.close(() => {
        console.log('BD encerrado!');
        process.exit(0);
    })
);