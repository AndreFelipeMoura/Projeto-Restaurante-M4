import sqlite3 from 'sqlite3';
export const db = new sqlite3.Database('./database.db');

// Quem quiser, pode usar esse arquivo pra criar as tabelas das entidades, aí na hora do merge a gente coloca pra deixar tudo, e nenhuma alteração se perde :D