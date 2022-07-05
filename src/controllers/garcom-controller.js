import { Garçom } from '../models/garcom-models.js'
import { bd } from '../infra/sqlite-bd.js'
import { GarçomDAO } from '../DAO/garcom-dao.js'

export const garçom = (app) => {
    const newGarcomDAO = new GarçomDAO(bd)

    app.get("/garcom", async (req, res) => {
        try {
            const garcom = await newGarcomDAO.listarGarcons()
            res.send(garcom)
        }
        catch (error) {
            res.send(error)
        }
    })

    app.get("/garcom/:id", async (req, res) => {
        try {
            const garcom = await newGarcomDAO.selectGarcomEspecifico(req.params.id)
            res.send(garcom)
        }
        catch (error) {
            res.send(error)
        }
    })

    app.post("/garcom", async (req, res) => {
        const body = req.body
        const newGarcom = new Garçom(body.nome, body.cpf, body.telefone, body.turno, body.praca, body.comissao)
        try {
            const garcom = await newGarcomDAO.inserirGarcom(newGarcom)
            res.send(garcom)
        }
        catch (error) {
            res.send(error)
        }
    })

    app.put("/garcom/:id", async (req, res) => {
        const novaInsersao = req.body
        const id = parseInt(req.params.id)
        // console.log(novaInsersao)
        try {
            console.log(id)
            const dadoAtual = await newGarcomDAO.selectGarcomEspecifico(id)
            console.log("oi")
            console.log(dadoAtual)
            const novosAtributos = new Garçom(novaInsersao.nome || dadoAtual.result[0].NOME, novaInsersao.cpf || dadoAtual.result[0].CPF, novaInsersao.telefone || dadoAtual.result[0].TELEFONE, novaInsersao.turno || dadoAtual.result[0].TURNO, novaInsersao.praca || dadoAtual.result[0].PRACA, novaInsersao.comissao || dadoAtual.result[0].COMISSAO)
            console.log(novosAtributos)
            const garcomAtualizado = await newGarcomDAO.atualizarGarcom(novosAtributos, id)
            res.send(garcomAtualizado)
        }
        catch (error) {
            console.log(error)
            res.send(error)
        }
    })

    app.delete("/garcom/:id", async (req, res) => {
        const id = req.params.id
        try {
            const garcom = await newGarcomDAO.apagarGarcom(id)
            res.send(garcom)
        }
        catch (error) {
            res.send(error)
        }
    })
}