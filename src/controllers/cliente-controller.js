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

    app.get("/clientes/:id",async(req,res)=>{
        const id = req.params.id
        try {
            const result = await DAO.listarClientesId(id)
            res.send(result)
        } catch (error) {
            console.log(error)
            
        }
    } )
    app.put("/clientes/:id", async(req,res)=>{
        const body = req.body;
        const id = req.params.id;
        const clienteAntigo = await DAO.listarClientesId(id);
        const clienteNovo = new ClienteModels(
            body.NOME || clienteAntigo[0].NOME,
            body.CPF|| clienteAntigo[0].CPF,
            body.EMAIL || clienteAntigo[0].EMAIL,
            body.MESA || clienteAntigo[0].MESA                           
        )
        
        try {
            await DAO.atualizarClientes(clienteNovo, id)
            res.json({
                "Dado antigo" : clienteAntigo, 
                "Dado novo": await DAO.listarClientesId(id)
            })
        } catch (error) {
            res.json({
                "Error" : error.message 
            })
        }


    })
    app.delete("/clientes/:id", async(req,res)=>{
        const id = req.params.id;

        try {
            const clienteDeletado = await DAO.removerClientes(id)
            res.send("Cliente Deletado")

        } catch (error) {
            res.json({
                "Error" : error.message 
            })
            
        }

    })
}


