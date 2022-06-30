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

    selectGarcomEspecifico(id){
        return new Promise((reject, resolve)=>{
            this.bd.all("SELECT * FROM GARÇOM WHERE ID = ?", [id], (error, result)=>{
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
                if(error){
                    reject("Erro ao inserir garçom")
                }else{
                    resolve("Garçom inserido com sucesso")
                }
            })
        })
    }

    atualizarGarcom(novaInsersao, id){
        return new Promise((reject, resolve)=>{
            this.bd.run("UPDATE GARÇOM SET NOME = ?, CPF = ?, TELEFONE = ?, TURNO = ?, PRACA = ?, COMISSAO = ? WHERE ID = ?", [novaInsersao, id], (error)=>{
                if(error){
                    reject("Não foi possível atualizar o garçom")
                }else{
                    resolve("Garçom atualizado com sucesso")
                }
            })
        })
    }

    apagarGarcom(id){
        return new Promise((reject, resolve)=>{
            this.bd.run("DELETE FROM GARÇOM WHERE ID = ?", [id], (error)=>{
                if(error){
                    reject("Erro ao apagar garçom")
                }else{
                    resolve("Garçom apagado com sucesso")
                }
            })
        })
    }
}