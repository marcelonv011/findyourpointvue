import { Comentario } from "@/model/Comentario";
import axios ,{ AxiosInstance } from "axios";


export class ComentarioClient {

    private axiosClient: AxiosInstance

    constructor(){
        this.axiosClient = axios.create({
            baseURL: 'http://localhost:8080/api/comentarios',
            headers: {
                'Content-type' : 'application/json'
            }
        })
    }

    public async findById(id: number) : Promise<Comentario> {
        try {
            return (await this.axiosClient.get<Comentario>(`/${id}`)).data
        }
        catch(error:any){
            return Promise.reject(error.response)
        }
    }

    public async findAll() : Promise<Comentario[]> {
        try {
            return (await this.axiosClient.get<Comentario[]>(``)).data
        }
        catch(error:any){
            return Promise.reject(error.response)
        }
    }

    public async cadastrar(comentario: Comentario) : Promise<void> {
        try {
            return (await this.axiosClient.post(``, comentario)).data
        }
        catch(error:any){
            return Promise.reject(error.response)
        }
    }

    public async atualizar(comentario: Comentario) : Promise<void> {
        try {
            return (await this.axiosClient.put(`/${comentario.id}`, comentario)).data
        }
        catch(error:any){
            return Promise.reject(error.response)
        }
    }

    public async excluir(comentario: Comentario) : Promise<void> {
        try {
            return (await this.axiosClient.delete(`/${comentario.id}`)).data
        }
        catch(error:any){
            return Promise.reject(error.response)
        }
    }

}