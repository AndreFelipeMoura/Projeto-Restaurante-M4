class cardapioDAO {

    construcotr(bd) {
        this.bd = bd;
    }

    listarCardapio() {
        return new Promise((resolve, reject) => {
            this.bd.all(`SELECT * FROM CARDAPIO`, (error, resultado) => {
                if (error) reject(error);
                else resolve(resultado)
                //     if (error) res.status(404).json(error);
                // else res.status(200).json(resultado)
            })
        })
    }

    listarCardapioID(id) {
        return new Promise((resolve, reject) => {
            this.bd.all(`SELECT * FROM CARDAPIO WHERE id = ${id}`, (error, resultado) => {
                if (error) res.status(404).json(error);
                else res.status(200).json(resultado)
            })
        })

    }

    insereCardapio(item) {
        return new Promise((resolve, reject) => {
            this.bd.run(`INSERT INTO CARDAPIO (ingredientes, pratos, bebidas, preco, numvendas)
            VALUES (?, ?, ?, ?, ?)`,
                [item.ingredientes, item.pratos, item.bebidas, item.preco, item.numvendas], (error) => {
                    if (error) res.status(404).json(error);
                    else res.status(200).json('INSERT INSERIDO')
                })

        })

    }
}

module.exports = cardapioDAO;