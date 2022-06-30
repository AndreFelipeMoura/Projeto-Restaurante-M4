import {Garçom} from '../models/garcom-models.js'
import {bd} from '../infra/sqlite-bd.js'
import {GarçomDAO} from '../DAO/garcom-dao.js'

export const garçom = (app) =>{
const newGarcomDAO = new GarçomDAO(bd)

    app.get("/garcom", async (req, res)=>{
        try{
            const garcom = await newGarcomDAO.listarGarcons()
            res.send(garcom)
        }
        catch(error){
            res.send(error)
        }
    })

    app.get("/garcom/:id", async(req, res)=>{
        try{
            const garcom = await newGarcomDAO.selectGarcomEspecifico(req.params.id)
            res.send(garcom)
        }
        catch(error){
            res.send(error)
        }
    })

    app.post("/garcom", async(req, res)=>{
        const body = req.body
        const newGarcom = new Garçom(body.nome, body.cpf, body.telefone, body.turno, body.praca, body.comissao)
        try{
            const garcom = await newGarcomDAO.inserirGarcom(newGarcom)
            res.send(garcom)
        }
        catch(error){
            res.send(error)
        }
    })

    app.put("/garcom/:id", async(req, res)=>{

    })

    app.delete("/garcom/:id", async(req, res)=>{
        const id = req.params.id
        try{
            const garcom = await newGarcomDAO.apagarGarcom(id)
            res.send(garcom)
        }
        catch(error){
            res.send(error)
        }
    })
}