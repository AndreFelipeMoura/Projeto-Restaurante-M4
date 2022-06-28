import express from 'express'
const app = express()
const port = 3000;
app.use(express.json())

import {garçom} from './controller/garcom-controller.js'
garçom(app)

app.listen(port, ()=>{
    console.log("Rodando na porta 3000")
})