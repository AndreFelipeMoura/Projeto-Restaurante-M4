const Cardapio = require('../models/cardapio-models');
const cardapioDAO = require('../DAO/cardapio-dao');

const cardapio = (app, bdsqlite) => {
    const DAOcardapio = new cardapioDAO(bdsqlite);

    app.get('/cardapio', (req, res) => {
        const data = async () => {
            try {
                const cardapio = await DAOcardapio.listarCardapio();
                res.status(200).json(cardapio)

            } catch (error) {
                res.status(200).json(error)
            }

        }
        data();

    })

    app.get('/cardapio/:id', (req, res) => {        
        const data = async () => {
            try {
                const cardapio = await DAOcardapio.listarCardapioID(req.params.id);
                res.status(200).json(cardapio)
            } catch (error) {
                res.status(200).json(error)
            }
        }
        data();
    })
}

module.exports = cardapio;
