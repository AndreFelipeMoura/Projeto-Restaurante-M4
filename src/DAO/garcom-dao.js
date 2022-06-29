export class GarçomDAO{
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

    inserirGarcom(novaInsersao){
        return new Promise((reject, resolve)=>{
            this.bd.run("INSERT INTO GARÇOM (nome, cpf, telefone, turno, praca, comissao) VALUES(?, ?, ?, ?, ?, ?)", [novaInsersao.nome, novaInsersao.cpf, novaInsersao.telefone, novaInsersao.turno, novaInsersao.praca, novaInsersao.comissao], (error)=>{
                console.log(novaInsersao)
                if(error){
                    reject("Erro ao inserir garçom")
                }else{
                    resolve("Garçom inserido com sucesso")
                }
            })
        })
    }
}