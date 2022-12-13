<template>
    <div class="register">
        <div class="container">
            <form class="formulario" id="formulario">
                <h1 class="titulo-formulario" id="tituloForm">CADASTRO</h1>
                <div id="msgError"></div>
                <div id="msgSuccess"></div>

                <div class="esquerda">
                <label class="username" id="labelNome" for="username">Nome de usuário</label>
                <input
                    class="username"
                    id="nome"
                    type="text"
                    v-model="user.nome"
                    placeholder="inisira seu nome..."
                    required/>
                </div>

                <div class="direita">
                <label class="email" id="labelEmail" for="email">Email</label>
                <input class="email" id="email" type="email" v-model="user.email" placeholder="inisira seu email..." required />
                </div>

                <div class="esquerda">
                <label class="password" id="labelSenha" for="password">Senha<i id="verSenha" class="fa fa-eye" aria-hidden="true"></i></label>
                <input class="password" id="senha" type="password" v-model="user.senha" placeholder="inisira sua senha..." required />
                </div>

                <div class="direita">
                <label class="cpf" id="labelCpf" for="cpf">CPF</label>
                <input class="cpf" id="cpf" type="" v-model="user.cpf" placeholder="inisira seu cpf..." required maxlength="14" />
                </div>

                <div class="esquerda">
                <label class="password-confirmation" id="labelConfirmSenha" for="password-confirmation">Confirmação de senha<i
                    id="verConfirmSenha"
                    class="fa fa-eye"
                    aria-hidden="true"></i></label>
                <input class="password-confirmation" id="confirmSenha" type="password" v-model="user.confirmacaoSenha" placeholder="inisira sua senha novamente..." required />
                </div>

                <input class="button" type="submit" value="Cadastrar" @click="onClickCadastrar()" />

                <h6 class="login">
                Já posuí cadastro? Faça seu
                <a href="../../LOGIN/Find-Your-Point/index.html"><span>Login</span></a>
                </h6>
                <h6 class="tela-inicial">
                Ou explore nossa<a href="../../index.html">
                <span>Tela inicial</span></a>
                </h6>
            </form>
        </div>
    </div>
    
</template>
    
<script lang="ts">
  
import { Vue, Component } from "vue-property-decorator";
import { UserClient } from "@/client/User.client";
import { User } from "@/model/User";


@Component
export default class Registro extends Vue {

    private userClient: UserClient = new UserClient()

    public user: User = new User()

    public onClickCadastrar(): void{

        this.userClient.cadastrar(this.user).then(
            success => { alert("Usuario Cadastrado com sucesso!")},
            error => {
                alert("erro ao cadastrar usuario")
            }
        )
    }

}
    
</script>
    
<style>

* {
    margin: 0;
    padding: 0;
}

body {
    width: 100%;
    height: 100%;
    background-color: white;
}

template{
    background-image: url(./Imagens/Frame\ 1.png);
    background-size: cover;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.container{
    margin-left: 15%;
}
span {
    color: #598659;
}

a {
    text-decoration: none;
}

h1 {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 30px;
    line-height: 45px;

    color: #000000;
}

h6 {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 21px;

    color: #000000;
}

label {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 19px;
    line-height: 28px;

    color: #000000;
}

.esquerda {
    position: relative;
    top: 5%;
    right: 22.5%;
}

.direita {
    position: relative;
    top: 5%;
    left: 22.5%;
}

.formulario {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    box-sizing: border-box;

    width: 993px;
    height: 471px;

    background: rgba(211, 211, 211, 0.1);
    border: 1px solid #000000;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(4px);

    border-radius: 20px;
}

.titulo-formulario {
    position: absolute;
    top: 7.43%;
}

.esquerda label {
    position: relative;
    left: 2%;
    display: inherit;
}

.esquerda input {
    position: relative;
    padding: 5px;
    display: inherit;
    box-sizing: border-box;
    border: 1px solid #000000;
    width: 348px;
    height: 45px;
    border-radius: 5px;
}

.username {
    position: absolute;
    top: 40%;
}

.password {
    position: absolute;
    bottom: 30%;
}

.password-confirmation {
    position: absolute;
    bottom: 100%;
}

.direita label {
    position: relative;
    left: 2%;
    display: inherit;
}

.direita input {
    position: relative;
    padding: 5px;
    display: inherit;
    box-sizing: border-box;
    border: 1px solid #000000;
    width: 348px;
    height: 45px;
    border-radius: 5px;
}

.email {
    position: absolute;
    top: 5%;

}

.cpf {
    position: absolute;
    bottom: 65%;
}

.button {
    position: absolute;
    box-sizing: border-box;
    width: 231px;
    height: 57px;
    margin-top: 37.37%;
    margin-left: 33%;
    border-radius: 10px;
    background: rgba(0, 0, 0, 0.75);
    border: 1px solid #000000;
    cursor: pointer;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 22px;
    line-height: 33px;
    color: #FFFFFF;
}

.button:hover {
    color: white;
    background-color: rgba(10, 80, 8, 0.685);
    transition: all 0.3s ease;
    border: 1px solid rgba(9, 131, 9, 0.52);

    cursor: pointer;
}

.login {
    position: absolute;
    margin-top: 35.37%;
    margin-right: 34.5%;
}

.tela-inicial {
    position: absolute;
    margin-top: 40%;
    margin-right: 34.5%;
}

.fa-eye {
    position: absolute;
    top: 150%;
    left: 90%;
    cursor: pointer;
    color: #000000;
    z-index: 1;
}

#msgError {
    position: absolute;
    text-align: center;
    width: 500px;
    height: 100px;
    bottom: 75%;
    color: #ff0000;
    border-radius: 5px;
    display: none;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 30px;
    line-height: 45px;
}

#msgSuccess {
    position: absolute;
    text-align: center;
    width: 500px;
    height: 100px;
    bottom: 75%;
    color: green;
    border-radius: 5px;
    display: none;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 30px;
    line-height: 45px;
}
@media only screen and (min-width: 300px) and (max-width: 896px) {
    .formulario{
        width: 295px;
        height: 471px;
    }
    .titulo-formulario{
        top: 3.43%;
    }
    label{
        font-size: 15px;
    }
    .esquerda{
        
        top: -6%;
        right: 0.5%;
    }
    .esquerda input{
        width: 243px;
        height: 35px;
    }
    .username{
        top: 24%;
    }
    .password{
        bottom: 81%;
    }
    .password-confirmation{
        bottom: 186%;
    }
    .direita input{
        width: 243px;
        height: 35px;
    }
    .direita {
        top: 22%;
        left: -0.5%;
    }
    .email{
        top: 2%;
    }
    .cpf{
        bottom: 102%;
    }
    .button{
        width: 141px;
        height: 41px;
        margin-top: 111.37%;
        margin-left: 34%;
        font-size: 17px;
    }
    .login {
        margin-top: 112.37%;
        margin-right: 46.5%;
        width: 37%;
    }


    h6 {
        font-size: 10px;
    }
    .tela-inicial {
        position: absolute;
        margin-top: 139%;
        margin-right: 5.5%;
    }
}
    
</style>