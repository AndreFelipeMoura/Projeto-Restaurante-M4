
const Cozinha = require('../models/cozinha-models')
const cozinhaDAO = require('../DAO/cozinhaDAO')

const cozinha = (app, bdSQLite) =>{

const DAOCozinha = new cozinhaDAO(bdSQLite)

app.get('/cozinha',(req,res)=>{
   const data = async() =>{
    try{
        const cozinha = await DAOCozinha.listarCozinha();
        res.status(200).json(cozinha)    
    }catch(error){
        res.status(200).json(error)
    }
   }
   data();
})


app.get('/cozinha/:id', (req,res) =>{
    const data = async() =>{
        try{
            const cozinha = await DAOCozinha.listarCozinhaID(req.params.id);
            res.status(200).json(cozinha)    
        }catch(error){
            res.status(200).json(error)
        }
       }
       data();
})
    
app.post('/cozinha', (req,res) =>{
    body = req.body
    const NovoItem = new Cozinha(body.nome, body.cpf, body.ingredientes,body.insumo, body.funcionarios)
    const data = async() =>{
        try{
            const cozinha = await DAOCozinha.insereCozinha(NovoItem);
            res.status(201).json(cozinha)    
        }catch(error){
            res.status(200).json(error)
        }
       }
       data();
   })

app.put('/cozinha/:id', (req,res) =>{
   body = req.body
   id = req.params.id

   const data = async() =>{
    try{
        const ItemAntigo= await DAOCozinha.listarCozinhaID(id)
        const NovoItemAtualizado = new 
   Cozinha(body.nome || ItemAntigo.nome[0], body.cpf || ItemAntigo.cpf[0], body.ingredientes || ItemAntigo.ingredientes[0], body.insumo || ItemAntigo.insumo[0], body.funcionarios || ItemAntigo.funcionarios[0])
   
        const cozinha = await DAOCozinha.altereCozinha(NovoItemAtualizado,id);
        res.status(200).json(cozinha)    
    }catch(error){
        res.status(404).json(error)
    }
   }
   data();
})

app.delete('/cozinha/:id', (req,res) =>{
    const data = async() =>{
        try{
            const cozinha = await DAOCozinha.deleteCozinha(req.params.id);
            res.status(201).json(cozinha)    
        }catch(error){
            res.status(200).json(error)
        }
       }
       data();
   })
}

module.exports = cozinha;