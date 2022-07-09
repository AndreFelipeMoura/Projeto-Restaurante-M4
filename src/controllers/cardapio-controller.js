import { cardapio } from '../models/cardapio-models'
import { bd } from '../infra/sqlite-bd'
import { cardapioDAO } from '../DAO/cardapio-dao'


export const cardapio = (app) => {
    const DAOcardapio = new cardapioDAO(bd);

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

    app.post('/cardapio', (req, res) => {
        body = req.body;
        const novoItem = new Cardapio(body.ingredientes, body.pratos, body.bebidas, body.preco, body.numvendas)
        const data = async () => {
            try {
                const cardapio = await DAOcardapio.insereCardapio(novoItem);
                res.status(201).json(cardapio)
            } catch (error) {
                res.status(200).json(error)
            }
        }
        data();
    })

    app.put('/cardapio/:id', (req, res) => {
        body = req.body;
        id = req.params.id;

        const data = async () => {
            try {
                const itemAntigo = await DAOcardapio.listarCardapioID(id)
                const NovoItemAtualizado = new Cardapio
                (
                    body.ingredientes || itemAntigo.ingredientes[0],
                    body.pratos || itemAntigo.pratos[0],
                    body.bebidas || itemAntigo.bebidas[0],
                    body.preco || itemAntigo.preco[0],
                    body.numvendas || itemAntigo.numvendas[0]
                )

                const cardapio = await DAOcardapio.alterarCardapio(NovoItemAtualizado, id);
                res.status(200).json(cardapio)
            } catch (error) {
                res.status(404).json(error)
            }
        }
        data();
    })

    app.delete('/cardapio/:id', (req, res) => {
        const data = async () => {
            try {
                const cardapio = await DAOcardapio.deleteCardapio(req.params.id);
                res.status(201).json(cardapio)
            } catch (error) {
                res.status(200).json(error)
            }
        }
        data();
    })
}

module.exports = cardapio;