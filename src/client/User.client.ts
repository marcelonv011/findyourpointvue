import { User } from "@/model/User";
import axios ,{ AxiosInstance } from "axios";


export class UserClient {

    private axiosClient: AxiosInstance

    constructor(){
        this.axiosClient = axios.create({
            baseURL: 'http://localhost:8080/api/users',
            headers: {
                'Content-type' : 'application/json'
            }
        })
    }

    public async findById(id: number) : Promise<User> {
        try {
            return (await this.axiosClient.get<User>(`/${id}`)).data
        }
        catch(error:any){
            return Promise.reject(error.response)
        }
    }

    public async findAll() : Promise<User[]> {
        try {
            return (await this.axiosClient.get<User[]>(``)).data
        }
        catch(error:any){
            return Promise.reject(error.response)
        }
    }

    public async cadastrar(user: User) : Promise<void> {
        try {
            return (await this.axiosClient.post(``, user)).data
        }
        catch(error:any){
            return Promise.reject(error.response)
        }
    }

    public async atualizar(user: User) : Promise<void> {
        try {
            return (await this.axiosClient.put(`/${user.id}`, user)).data
        }
        catch(error:any){
            return Promise.reject(error.response)
        }
    }

    public async excluir(user: User) : Promise<void> {
        try {
            return (await this.axiosClient.delete(`/${user.id}`)).data
        }
        catch(error:any){
            return Promise.reject(error.response)
        }
    }

}