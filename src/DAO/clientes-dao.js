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
}
