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
}
