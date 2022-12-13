import { AbstractEntity } from "./AbstractEntity";
import { RedeSocial } from "./RedeSocial";

export class Local extends AbstractEntity {

    nome!: string
    descricaoLocal!: string
    favoritado!: boolean
    endereco!: string
    numero!: string
    cep!: string
    redeSocial!: RedeSocial

}