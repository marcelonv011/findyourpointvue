import { AbstractEntity } from "./AbstractEntity";
import { Comentario } from "./Comentario";
import { Favoritado } from "./Favoritado";

export class User extends AbstractEntity {

    nome!: string
    senha!: string
    email!: string
    listaComentario!: Comentario
    listaFavoritado!: Favoritado

}