import {db} from "./infra/create-table.js"
import {db} from "./infra/create-table-cardapio"
import {clientes} from "./controllers/cliente-controller.js"
import {garçom} from './controller/garcom-controller.js'
import {cardapio} from './controllers/cardapio-controller'
import express from 'express'
const app = express()
const port = 3000;
app.use(express.json())

garçom(app)
clientes(app, db)
cardapio(app)

app.listen(port, ()=>{
    console.log("funcionando")
})