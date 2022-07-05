import {db} from "./infra/create-table.js"
import {clientes} from "./controllers/cliente-controller.js"
import {garçom} from './controller/garcom-controller.js'
import express from 'express'
const app = express()
const port = 3000;
app.use(express.json())

garçom(app)
clientes(app, db)
app.listen(port, ()=>{
    console.log("funcionando")
})