import { ClienteDAO } from "../DAO/clientes-dao.js"
import { ClienteModels } from "../models/cliente-models.js"

export  const clientes = (app, db) => {
    const DAO = new ClienteDAO(db);
    app.get("/clientes",async(req, res)=>{
        try {
            const listaDeCliente = await DAO.listarClientes()
            res.send(listaDeCliente)
        } catch (error) {
            res.send(error)
            console.log(error)
        }

    })
    app.post("/clientes",async(req,res)=>{
        const body = req.body
        const novoCliente = new ClienteModels( body.nome, body.cpf, body.email, body.mesa)
        try {
            await DAO.inserirClientes(novoCliente)
            res.send("deu certo")
            
        } catch (error) {
            res.send(error)
            console.log(error)
        }
    })
}


