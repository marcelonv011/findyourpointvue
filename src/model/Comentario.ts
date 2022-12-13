import { AbstractEntity } from "./AbstractEntity";
import { Local } from "./Local";
import { User } from "./User";

export class Comentario extends AbstractEntity{
    descricaoComentario!: string
    data!: Date
    local!: Local
    user!: User

    constructor() {
        super()
        this.local = new Local
        this.user = new User
    

    }
}

    