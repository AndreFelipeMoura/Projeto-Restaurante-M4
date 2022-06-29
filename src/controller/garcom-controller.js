import {Garçom} from '../models/garcom-models.js'
import {bd} from '../infra/sqlite-bd.js'
import {GarçomDAO} from '../DAO/garcom-dao.js'

export const garçom = (app) =>{
const newGarcomDAO = new GarçomDAO(bd)

    app.get("/garcom",(req, res)=>{
        newGarcomDAO.listarGarcons()
        .then((result)=>{res.send(result)})
        .catch((error)=>{res.send(error)})
    })

    app.post("/garcom", (req, res)=>{
        const body = req.body
        const newGarcom = new Garçom(body.nome, body.cpf, body.telefone, body.turno, body.praca, body.comissao)
        newGarcomDAO.inserirGarcom(newGarcom)
        .then((result)=>{res.send(result)})
        .catch((error)=>{res.send(error)})
    })
}