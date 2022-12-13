import { Local } from "@/model/Local";
import axios ,{ AxiosInstance } from "axios";


export class LocalClient {

    private axiosClient: AxiosInstance

    constructor(){
        this.axiosClient = axios.create({
            baseURL: 'http://localhost:8080/api/local',
            headers: {
                'Content-type' : 'application/json'
            }
        })
    }

    public async findById(id: number) : Promise<Local> {
        try {
            return (await this.axiosClient.get<Local>(`/${id}`)).data
        }
        catch(error:any){
            return Promise.reject(error.response)
        }
    }

    public async findAll() : Promise<Local[]> {
        try {
            return (await this.axiosClient.get<Local[]>(``)).data
        }
        catch(error:any){
            return Promise.reject(error.response)
        }
    }

    public async cadastrar(local: Local) : Promise<void> {
        try {
            return (await this.axiosClient.post(``, local)).data
        }
        catch(error:any){
            return Promise.reject(error.response)
        }
    }

    public async atualizar(local: Local) : Promise<void> {
        try {
            return (await this.axiosClient.put(`/${local.id}`, local)).data
        }
        catch(error:any){
            return Promise.reject(error.response)
        }
    }

    public async excluir(local: Local) : Promise<void> {
        try {
            return (await this.axiosClient.delete(`/${local.id}`)).data
        }
        catch(error:any){
            return Promise.reject(error.response)
        }
    }

}