import {Garçom} from '../models/garcom-models.js'
import {bd} from '../infra/sqlite-bd.js'
import {GarçomDAO} from '../DAO/garcom-dao.js'

export const garçom = (app) =>{
const newGarcomDAO = new GarçomDAO(bd)

    app.get("./garcom")
}