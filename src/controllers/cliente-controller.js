import { ClienteDAO } from "../DAO/clientes-dao.js"
import { ClienteModels } from "../models/cliente-models.js"

export  const clientes = (app, db) => {
    const DAO = new ClienteDAO();
    app.get("/clientes",async(req, res)=>{
        try {
            const listaDeCliente = await DAO.listarClientes()
            res.send(listaDeCliente)
        } catch (error) {
            res.send(error)
        }

    })

}