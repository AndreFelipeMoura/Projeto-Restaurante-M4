class GarçomDAO{
    constructor(bd){
        this.bd = bd
    }
    listarGarcons(){
        return new Promise((reject, resolve)=>{
            this.bd.all("SELECT * FROM GARÇOM", (error, result)=>{
                if(error){
                    reject("Erro ao listar garçons.")
                }else{
                    resolve({result})
                }
            })
        })
    }
}