export class ClienteDAO{
    constructor(bd){
        this.bd = bd;
    }
    async listarClientes(){
        return new Promise((resolve, reject) => {
            this.bd.all("SELECT * FROM clientes", (error, result)=>{
                if(error){
                    reject(error);
                }else{
                    resolve(result)
                }

            })
        })
    }
    async inserirClientes(cliente){
        return new Promise((resolve, reject) => {
            this.bd.run("INSERT INTO clientes (nome, cpf, email, mesa) values (?, ?, ?, ?, ?)", [cliente.nome, cliente.cpf,cliente.email, cliente.mesa], (error)=>{
                if (error){
                    reject(error)
                }else{
                    resolve('Cliente Inserido!!')
                }
            } )
        })
    }

    async listarClientesId(id){
        return new Promise((resolve, reject) => {
            this.bd.all(`SELECT * FROM clientes where id = ?`, [id] , (error, result)=>{
                if(error){
                    reject(error);
                }else{
                    resolve(result)
                }

            })
        })
    }

   async atualizarClientes(cliente, id){
    return new Promise((resolve, reject) => {
        this.bd.run(`UPDATE clientes set nome = ?, email = ?, cpf = ?, mesa = ? where id = ?`,[cliente.nome, cliente.email, cliente.cpf, cliente.mesa, id ],(error)=>{
            if(error){
                reject(error)
            }else{
                resolve("Cliente atualizado com sucesso!!")
            }
        })
    })
   }

   async  removerClientes(id){
    return new Promise((resolve, reject) => {
        this.bd.run(`DElETE FROM clientes where id = ?`,id,(error)=>{
            if (error){
                reject(error)
            }else{
                resolve("Cliente deletado com sucesso!!")
            }


        })
        
    })
   }

   async  adicionarClientes(cliente){
    return new Promise((resolve, reject) => {
        this.bd.run(`INSERT INTO clientes (nome, cpf, email, mesa) values (?,?,?,?)` , [cliente.nome, cliente.email, cliente.cpf, cliente.mesa], (error)=>{
            if (error){
                reject(error)
            }else{
                resolve("Cliente adicionado com sucesso!!")
            }
        })    
    })

   }
}
