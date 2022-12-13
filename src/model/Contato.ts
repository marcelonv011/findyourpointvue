import { AbstractEntity } from "./AbstractEntity";
import { StatusContato } from "./enum/StatusContato";

export class Contato extends AbstractEntity {

    email!: string
    telefone!: string
    statuscontato!: StatusContato

}