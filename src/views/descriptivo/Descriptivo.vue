<template>
  <div>
    <section>
      <div>
        <div class="Pag1-pai">
          <div>
            <div class="Pag1-imglogo">
              <img class="Pag1-logo" src="../../assets/find.png" />

              <div class="pesquisar-m">
                <input
                  class="pesquisar-texto"
                  type="text"
                  placeholder="Pesquisar"
                />
                <a class="pesquisar-btn" href="#">
                  <div class="iconPesquisar">
                    <ion-icon name="search-outline"></ion-icon>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div class="Pag1-Titulo">Find Your Point</div>

          <div class="Pag1-Botoes">
            <a href="../login"><button class="b-login">Login</button></a>
            <a href="../register"
              ><button class="b-cadastro">Cadastre-se</button></a
            >
          </div>
        </div>

        <div class="Pag1-header">
          <div class="Pag1-opcoes">
            <div>
              <a href="../favorito">Favoritos</a>
            </div>
            <div><a href="../eventos">Eventos</a></div>
            <div><a href="../inicio">Inicio</a></div>
            <a href="#faleconosco">
              <div>Fale Conosco</div>
            </a>
          </div>
        </div>

        <div class="estab1">
          <div>
            <img class="estab" src="../../assets/-marco-tres-frontei.jpg" />
          </div>

          <div class="heart">
            <a href="#"><img src="../../assets/heart.png" /></a>
          </div>

          <div class="estab-nome">
            <div>
              <span>Marco das Três Fronteiras</span>
            </div>

            <div>Foz do Iguaçu - PR</div>
            <button class="conheça">Conheça agora</button>
          </div>
        </div>
        <div class="Informações">
          <div class="Informativo">
            <div>
              <span class="topicos">Marco das três fronteiras</span> -
              <span class="cidade">Foz do Iguaçu, PR</span>
            </div>

            <div>
              <span class="topicos"> Horário de Funcionamento </span>
              <div>
                <span class="topicos2">Terça a Domingo - 15hrs ás 21hrs.</span>
              </div>
            </div>

            <div>
              <span class="topicos"> Categorias</span>
              <div class="tags">
                <div>
                  <button class="botons">Divertido</button>
                </div>
                <div>
                  <button class="botons">Passeio</button>
                </div>
                <div>
                  <button class="botons">Consumo</button>
                </div>
              </div>
            </div>
          </div>

          <div class="Informativos2">
            <div>
              <div><span class="topicos">Local</span></div>
              <div>
                <span class="topicos2"
                  >Av. Gen. Meira, s/n - Jardim Eldorado, Foz do Iguaçu</span
                >
              </div>
            </div>

            <div>
              <span class="topicos">Descrição</span>
              <div class="descrição">
                O marco das três fronteiras é um obelisco feito de pedra. Essa
                cena emociona o turista, que pode ver Brasil, Argentina e
                Paraguai tão próximos um do outro.
              </div>
            </div>
          </div>
        </div>

        <div class="box">
            <article class="media">
    <div class="media-left">
      <figure class="image is-48x48 avatar">
        <img src="https://bulma.io/images/placeholders/48x48.png" alt="Image">
      </figure>
      <h4>Deixe seu comentario</h4>
                  </div>
                  <div class="form-sub">
                    <form class="form-email">
                      <input
                        class="botaofooter"
                        type="text"
                        v-model="comentario.user.id"
                        placeholder="Digite o seu e-mail"
                      />
                    </form>
                    <label> Local </label>
                    <div class="select is-fullwidth is-rounded">
                      <select v-model="comentario.local">
                        <option hidden disabled selected>
                          Selecione o local
                        </option>
                        <option
                          :value="item"
                          v-for="item in localList"
                          :key="item.id"
                        >
                          {{ item.nome }}
                        </option>
                      </select>
                    </div>
                    <form class="msg">
                      <div class="text">Deixe seu comentario</div>
                      <input
                        class="botaofooter"
                        v-model="comentario.descricaoComentario"
                        placeholder="deixe seu comentario"
                      />
                    </form>
                    <div class="buttons are-small">
                    <button class="button is-dark" @click="onClickCadastrar()">Enviar</button>
                    </div>
    </div>
    <div class="media-content">
        <h1 class="titulocoment">Comentarios</h1>
      <div class="content" v-for="item in comentarioList" :key="item.id">
        <p class="textocomentario" >
            <figure class="image is-48x48 avatar">
        <img src="https://bulma.io/images/placeholders/48x48.png" alt="Image">
      </figure>
          {{ item.user.nome }} <small>{{item.user.email}}</small> <small>31m</small>
        </p>
          {{item.descricaoComentario}}
      </div>
      <nav class="level is-mobile">
        <div class="level-left">
          <a class="level-item" aria-label="reply">
            <span class="icon is-small">
              <i class="fas fa-reply" aria-hidden="true"></i>
            </span>
          </a>
          <a class="level-item" aria-label="retweet">
            <span class="icon is-small">
              <i class="fas fa-retweet" aria-hidden="true"></i>
            </span>
          </a>
          <a class="level-item" aria-label="like">
            <span class="icon is-small">
              <i class="fas fa-heart" aria-hidden="true"></i>
            </span>
          </a>
        </div>
      </nav>
    </div>
  </article>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { ComentarioClient } from "@/client/Comentario.client";
import { Comentario } from "@/model/Comentario";
import { UserClient } from "@/client/User.client";
import { LocalClient } from "@/client/Local.client";
import { Local } from "@/model/Local";
import { User } from "@/model/User";

@Component
export default class Menu extends Vue {

    private comentarioClient: ComentarioClient = new ComentarioClient()
    private userClient: UserClient = new UserClient();
    private localClient: LocalClient = new LocalClient();
    
    public comentario: Comentario = new Comentario();
    public comentarioList: Comentario[] = []
    public userList: User[] = [];
    public localList: Local[] = [];

    public mounted(): void {
        this.selectUserList();
        this.selectLocalList();
        this.listarComentarios()
    }

    private listarComentarios(): void {
            this.comentarioClient.findAll().then(
                success => {
                    this.comentarioList = success
                },
                error => {
                    console.log(error)
                }
            )
    }
    public onClickCadastrar(): void {
    this.comentarioClient.cadastrar(this.comentario).then(
      (success) => {
        console.log("registro cadastrado com sucesso");
        this.comentario = new Comentario();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  private selectUserList(): void {
    this.userClient.findAll().then(
      (success) => (this.userList = success),
      (error) => console.log(error)
    );
  }

  private selectLocalList(): void {
    this.localClient.findAll().then(
      (success) => (this.localList = success),
      (error) => console.log(error)
    );
  }

}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

template {
  font-family: "Poppins";
  background-image: url(../../assets/textura.png);
  background-repeat: no-repeat;
  background-size: 100% 450px;
}

section {
  width: 100%;
  height: 100vh;
}

.textocomentario{
    color: #000000;
    border: 1px solid rgba(53, 53, 53, 0.9);
}

.titulocoment{
    color: #000000;
}

.coment {
  background: rgba(0, 0, 0, 0.31);
  border: 1px solid rgba(53, 53, 53, 0.9);
  margin-top: 40px;
}

.textocoment {
  color: black;
  font-size: 25px;
}

.media-content{
    margin-top: 40px;
    border: solid;
}

.box {
    margin-top: 60px;
    color: hsl(0, 0%, 29%);
    background-color: #b0b0b0;
    border-radius: 6px;
    box-shadow: 0 0.5em 1em -0.125em rgba(0.1), 0 0px 0 1px rgba(0.02);
    padding: 1.25rem;
}



.cidade {
  font-size: 12px;
}

.Informativo {
  font-size: 14px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 10px;
}

.Informações {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}

.Informativos2 {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.descrição {
  max-width: 550px;
}

.topicos {
  font-size: 15px;
  color: black;
}

.topicos2 {
  font-size: 12px;
}

.tags {
  display: flex;
  flex-direction: row;
  gap: 25px;
}

.botons {
  width: 60px;
  height: 20px;
  border-radius: 20px;
  color: #598659;
  font-weight: bold;
  background: #d9d9d9;
  font-size: 10px;
  border: 0 none;
}

/* //header */

.Pag1-pai {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.pesquisar-m {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(116, 211, 116, 0.281);
  height: 40px;
  margin-top: 30px;
  border-radius: 10px;
  flex-grow: 2;
}

.pesquisar-m:hover > .pesquisar-texto {
  width: 290px;
}

.pesquisar-m:hover > .pesquisar-btn {
  background: white;
}

.pesquisar-btn {
  float: right;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 2s;
}

.pesquisar-texto {
  border: none;
  background: none;
  outline: none;
  float: left;
  color: black;
  font-size: 13px;
  width: 0px;
  transition: 0.4s;
}

input {
  height: 23px;
  width: 290px;
  border-radius: 10px;
}

.Pag1-logo {
  height: 100px;
  transition: all 0.5s;
  cursor: pointer;
}

.Pag1-logo:hover {
  -webkit-filter: drop-shadow(15px 10px 5px rgba(0, 0, 0, 0.5));
  filter: drop-shadow(15px 10px 5px rgba(0, 0, 0, 0.5));
}

.iconPesquisar {
  margin-left: 0px;
  margin-top: 3px;
  color: #000000;
}

.Pag1-Titulo {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 2;
  font-size: 30;
  font-weight: 600;
}

.Pag1-imglogo {
  display: flex;
  flex-grow: 1;
  max-width: -10px;
}

.Pag1-Botoes {
  display: flex;
  gap: 5px;
  align-items: center;
  flex-grow: 1;
  justify-content: center;
}

.ordenaPai {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

button {
  width: 20%;
  height: 30px;
}

.button-enviar {
  width: 100%;
}

.b-login {
  border-radius: 25px;
  border: 1px solid black;
  background: white;
  width: 100px;
  height: 35px;
  transition: all 0.3s ease;
  font-family: "Poppins";
}

.b-login:hover {
  background-color: rgba(116, 211, 116, 0.795);
  color: white;
  border: 1px solid rgba(9, 131, 9, 0.52);
  transition: all 0.5s ease;
}

.b-cadastro {
  border: 1px solid #6c6c6c;
  width: 100px;
  border-radius: 25px;
  height: 35px;
  transition: all 0.3s ease;
  font-family: "Poppins";
}

.b-cadastro:hover {
  background-color: rgba(10, 80, 8, 0.685);
  color: white;
  border: 1px solid rgba(160, 203, 158);
  transition: all 0.5s ease;
}

.Pag1-header {
  display: flex;
  justify-content: space-evenly;
  height: 50px;
  width: 100%;
  align-items: center;
  background: rgba(0, 0, 0, 0.31);
  border: 1px solid rgba(53, 53, 53, 0.9);
  backdrop-filter: blur(4px);
  color: white;
}

.Pag1-opcoes {
  display: flex;
  flex-direction: row;
  gap: 90px;
}

.estab {
  width: 100%;
  height: 250px;
  border-radius: 15px;
}

.estab1 {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 3%;
  gap: 25px;
}

span {
  color: #587766;
  font-weight: 600;
  font-size: 45px;
}

.estab-nome {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 10px;
}

a {
  text-decoration: none;
  color: white;
}

.heart {
  position: absolute;
  margin-top: 13%;
  margin-left: -250px;
}

.conheça {
  color: #000000;
  background: #d9d9d9;
  border: 0 none;
  border: 3px solid rgba(9, 131, 9, 0.52);
  border-radius: 10px;
}

.conheça:hover {
  background-color: rgba(116, 211, 116, 0.795);
  color: white;
  border: 1px solid rgba(9, 131, 9, 0.52);
  border-radius: 10px;
  transition: all 0.5s ease;
  font-weight: bold;
}

@media only screen and (min-width: 300px) and (max-width: 896px) {
  .estab {
    width: 100%;
    height: 200px;
    border-radius: 15px;
  }
  .heart {
    position: absolute;
    margin-top: 30%;
    margin-left: -110px;
  }
  .estab-nome {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    gap: 10px;
    font-size: 24px;
  }
  span {
    color: #587766;
    font-weight: 600;
    font-size: 28px;
  }
  .conheça {
    color: #000000;
    background: #d9d9d9;
    border: 0 none;
    border: 3px solid rgba(9, 131, 9, 0.52);
    border-radius: 10px;
  }
  .conheça:hover {
    background-color: rgba(116, 211, 116, 0.795);
    color: white;
    border: 1px solid rgba(9, 131, 9, 0.52);
    border-radius: 10px;
    transition: all 0.5s ease;
    font-weight: bold;
  }
  button {
    width: 50%;
    height: 40px;
  }
  .Informações {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin-top: 25%;
    font-size: 13px;
  }
  .tags {
    display: flex;
    flex-direction: row;
    gap: 5px;
  }
  .descrição {
    max-width: 450px;
  }
}
</style>
