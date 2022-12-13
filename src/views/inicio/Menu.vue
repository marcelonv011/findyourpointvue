<template>
  <div id="home">
    <div class="background-img">
      <img
        alt="telainicial"
        class="img1-background"
        src="../../assets/Tela inicial 01.png"
      />
      <img
        alt="telainicial2"
        class="img2-background"
        src="../../assets/Tela inicial 02.png"
      />
      <img
        alt="telainicialcentro"
        class="img3-background"
        src="../../assets/Tela inicial centro.png"
      />
      <img
        alt="telacentroesquerda"
        class="img4-background"
        src="../../assets/tela centro esquerda.png"
      />
      <img
        alt="telacentrodereito"
        class="img5-background"
        src="../../assets/tela centro direito.png"
      />
      <img
        alt="footerdereito"
        class="img6-background"
        src="../../assets/tela footer direito.png"
      />
    </div>
    <section>
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
          <a href="../cadastro"
            ><button class="b-cadastro">Cadastre-se</button></a
          >
        </div>
      </div>

      <div class="Pag1-header">
        <div class="Pag1-opcoes">
          <div><a href="../favoritos">Favoritos</a></div>
          <div><a href="../eventos">Eventos</a></div>
          <div>Categorias</div>
          <a href="#faleconosco">
            <div>Fale Conosco</div>
          </a>
        </div>
      </div>

      <div>
        <div class="Pai-cards">
          <div class="cards">
            <div class="detalhes">
              <div>
                <img class="balaoimg" src="../../assets/pubs.gif" />
                <span>
                  <h2>PUB's</h2>
                </span>
              </div>
              <div class="conteudo">
                <div class="textocards">
                  <h2>Que tal uma bebida?</h2>
                </div>
                <div class="cards-icons">
                  <div class="icones-class">
                    <ion-icon name="beer-outline"></ion-icon>
                  </div>
                  <div class="icones-class">
                    <ion-icon name="fast-food-outline"></ion-icon>
                  </div>

                  <div class="icones-class">
                    <ion-icon name="musical-notes-outline"></ion-icon>
                  </div>
                </div>
                <div class="cards-botton">
                  <button class="explorebtn">
                    <a href="#explore">Explore</a>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div class="cards">
            <div class="detalhes">
              <div>
                <img class="balaoimg passeio" src="../../assets/passeios.gif" />
                <span>
                  <h2>Passeios</h2>
                </span>
              </div>
              <div class="conteudo">
                <div class="textocards">
                  <h2>Viva momentos únicos</h2>
                </div>
                <div class="cards-icons">
                  <div class="icones-class">
                    <ion-icon name="happy-outline"></ion-icon>
                  </div>
                  <div class="icones-class">
                    <ion-icon name="fast-food-outline"></ion-icon>
                  </div>
                </div>
                <div class="cards-botton">
                  <button class="explorebtn">
                    <a href="#explore">Explore</a>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div class="cards">
            <div class="detalhes">
              <div>
                <img class="balaoimg passeio" src="../../assets/evetno.gif" />
                <span>
                  <h2>Eventos</h2>
                </span>
              </div>
              <div class="conteudo">
                <div class="textocards">
                  <h2>Veja o que está acontecendo na cidade</h2>
                </div>
                <div class="cards-icons">
                  <img class="aovivo" src="../../assets/ao vivo.gif" />
                </div>
                <div class="cards-botton">
                  <button class="explorebtn">
                    <a href="../eventos">Explore</a>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div class="cards">
            <div class="detalhes">
              <div>
                <img
                  class="balaoimg passeio"
                  src="../../assets/restaurante.gif"
                />
                <span>
                  <h2>Restaurantes</h2>
                </span>
              </div>
              <div class="conteudo">
                <div class="textocards">
                  <h2>Conheça a variedade de restaurantes</h2>
                </div>
                <div class="cards-icons">
                  <div class="icones-class">
                    <ion-icon name="beer-outline"></ion-icon>
                  </div>
                  <div class="icones-class">
                    <ion-icon name="pizza-outline"></ion-icon>
                  </div>
                </div>
                <div class="cards-botton">
                  <button class="explorebtn">
                    <a href="#explore">Explore</a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="Pag2-Explorar">
      <div class="explorar">
        <div class="titulo-explorar">
          <div id="explore">explorar</div>
        </div>
        <div class="img-explorar">
          <div class="mySlides">
            <a href="../descriptivo"
              ><img class="estab_pic" src="../../assets/marco 2.png"
            /></a>
            <div class="heart">
              <img src="../../assets/heart.png" />
            </div>
            <span class="span">Marco das Três Fronteiras</span>
          </div>

        <!--  <div class="mySlides">
            <a href="../descriptivo"
              ><img class="estab_pic" src="../../assets/pomare 4.png"
            /></a>
            <div class="heart">
              <img src="../../assets/heart.png" />
            </div>
            <span class="span">Pátio Pomare</span>
          </div> -->

         <!-- <div class="mySlides">
            <a href="../descriptivo"
              ><img class="estab_pic" src="../../assets/skydive 5.png"
            /></a>
            <div class="heart">
              <img src="../../assets/heart.png" />
            </div>
            <span class="span">Passeio de Skydive</span>
          </div>
          -->
        </div>
      </div>
    </section>

    <section class="footerpag" id="faleconosco">
      <footer>
        <div class="footerelementos">
          <div class="container-footer">
            <div class="row-footer">
              <div class="footer-col">
                <div class="flexdisplay">
                  <img class="imagem1" src="../../assets/atendimento.png" />
                  <h4>Fale Conosco</h4>
                </div>
                <ul class="ajuste">
                  <li><a href="#"> +55 (45) 9 9962-3158 </a></li>
                  <li><a href=""> Devteccompany@gmail.com </a></li>
                  <li><a href=""> 3565-3161 </a></li>
                </ul>
              </div>
              <div class="footer-col">
                <div class="flexdisplay">
                  <img class="imagem1" src="../../assets/equipe.png" />
                  <h4>Equipe</h4>
                </div>

                <ul class="ajuste">
                  <li><a href="#">Marcelo Nicolas Villalba</a></li>
                  <li><a href="#">Maria Damo</a></li>
                  <li><a href="#">Diuary Machado</a></li>
                </ul>
              </div>
              <div class="footer-col">
                <div class="flexdisplay">
                  <img class="imagem1" src="../../assets/asd.png" />
                  <h4>Sobre nós</h4>
                </div>
                <ul class="ajuste">
                  <li><a href="../equipe">Sobre a Empresa</a></li>

                  <li><a href="#">Segurança</a></li>
                  <li><a href="#">Ajuda</a></li>
                </ul>
              </div>
              <div class="footerComentario">
                <div class="footer-col">
                  <div class="flexdisplay">
                    <img class="imagem1" src="../../assets/coments.png" />

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
                    <button class="button-enviar" @click="onClickCadastrar()">
                      Enviar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  </div>
</template>

<script lang="ts">
import { ComentarioClient } from "@/client/Comentario.client";
import { UserClient } from "@/client/User.client";
import { LocalClient } from "@/client/Local.client";
import { Local } from "@/model/Local";
import { Comentario } from "@/model/Comentario";
import { User } from "@/model/User";
import { Vue, Component } from "vue-property-decorator";

@Component
export default class Menu extends Vue {
  private comentarioClient: ComentarioClient = new ComentarioClient();
  private userClient: UserClient = new UserClient();
  private localClient: LocalClient = new LocalClient();

  public comentario: Comentario = new Comentario();
  public userList: User[] = [];
  public localList: Local[] = [];

  public mounted(): void {
    this.selectUserList();
    this.selectLocalList();
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
template {
  background-color: white;
  font-family: "Poppins";
  width: 100%;
  padding: 0;
  margin: 0;
  overflow-x: hidden;
  position: relative;
}
.background-img {
  z-index: -99;
  position: absolute;
  height: 100%;
  width: 100%;
  flex-wrap: nowrap;
}

.img1-background {
  position: absolute;
  left: -10%;
}

.img2-background {
  position: absolute;
  left: 80%;
}

.img3-background {
  position: absolute;
  top: 55%;
  left: 40%;
}

.img4-background {
  position: absolute;
  left: -1%;
  top: 75%;
}

.img5-background {
  position: absolute;
  left: 82%;
  top: 75%;
}

.img6-background {
  position: absolute;
  left: 85%;
  top: 160%;
}

.img7-background {
  position: absolute;
  left: -2%;
  top: 80%;
}

a {
  color: #ffffff;
  text-decoration: none;
}

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
  font-size: 28px;
  font-weight: 600;
  flex-grow: 2;
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

.aovivo {
  height: 35px;
}

.Pai-cards {
  display: flex;
  margin-top: 50px;
  flex-direction: row;
  position: relative;
  width: 100%;
  justify-content: space-around;
}

.detalhes {
  display: flex;
  flex-direction: column;
  margin-top: -85px;
  align-items: center;
  /* gap: 15px; */
}

.detalhes h2 {
  display: flex;
  flex-direction: column;
  margin-top: px;
  align-items: center;
  /* gap: 15px; */
}

.Pag1-TelaInicial {
  height: 100vh;
  width: 100%;
}

.cards:hover {
  height: 430px;
  display: flex;
  flex-direction: row;
  -webkit-filter: drop-shadow(15px 10px 5px rgba(0, 0, 0, 0.5));
  filter: drop-shadow(15px 10px 5px rgba(0, 0, 0, 0.5));
}

.cards:hover .detalhes {
  margin-top: 20px;
}

.cards:hover .balaoimg {
  transition: 0.5s;
  margin-top: 0px;
}

.cards {
  display: flex;
  flex-direction: row;
  justify-content: center;
  /* align-items: flex-start; */
  width: 315px;
  /* height: 338px; */
  height: 250px;
  /* height: 500px; */
  overflow: hidden;
  transition: 0.5s;
  background: #f5f5f5;
  border: 1px solid rgba(0, 0, 0, 0.6);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 8px 8px rgba(0, 0, 0, 0.25);
}

.cards:hover .balaoimg {
  left: 50%;
  top: -50px;
  width: 200px;
  height: 200px;
}

.balaoimg {
  width: 160px;
  object-fit: cover;
  height: 160px;
  border: 1px;
  border-radius: 125px;
  font-weight: 600;
  color: #555;
  margin-top: 110px;
}

.cards .conteudo {
  position: relative;
  height: 70px;
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  gap: 50px;
}

.cards .conteudo .textocards {
  display: flex;
  align-items: center;
  transition: 0.5s;
}

.cards .conteudo .textocards h2 {
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Poppins";
  font-weight: 400;
  font-size: 15px;
}

.cards .conteudo .textocards h2 span {
  font-family: "Poppins";
  font-size: 15px;
}

.cards-botton {
  display: flex;
  justify-content: center;
  /* margin-top: 100px; */
}

.explorebtn {
  width: 100px;
  height: 30px;
  cursor: pointer;
  font-size: 15px;
  border: 1px solid rgba(103, 150, 103, 0.52);
  transition: all 0.3s ease;
  background-color: rgba(103, 150, 103, 0.52);
  color: white;
  border-radius: 20px;
  font-weight: 600;
}

.explorebtn:hover {
  background-color: #ffff;
  color: black;
}

.icones-class {
  background: rgba(103, 150, 103, 0.52);
  width: 45px;
  height: 20px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.cards-icons {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
}

/*TELA 02*/

/*TELA 02*/

.Pag2-Explorar {
  background: rgba(217, 217, 217, 0.29);
  border: 2px solid #000000;
  backdrop-filter: blur(4px);
  width: 100%;
  height: 100vh;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: #000000;
  opacity: 0.95;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.titulo-explorar {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3%;
  margin-left: 45%;
  font-family: "Poppins";
  font-size: 31px;
}

.img-explorar {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5%;
  margin-left: 16%;
  position: absolute;
}

.img-explorar img {
  height: 430px;
  width: 1000px;
}

.heart {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
  margin-top: -8%;
  margin-left: -90%;
  /* transition: all 1s; */
  z-index: 7;
}

.heart img {
  height: 50px;
  width: 50px;
}

.span {
  color: #598659;
  font-size: 22px;
  position: absolute;
  text-align: center;
  margin-top: -4%;
  margin-left: 10%;
  text-shadow: -1px -1px 0px #000, -1px 1px 0px #000, 1px -1px 0px #000,
    1px 0px 0px #000;
}

.estab_pic {
  margin-top: 5%;
}

.explorar {
  display: flex;
  gap: 100px;
  /* flex-direction: column; */
}

/* .estab_pic:hover {
    -webkit-filter: drop-shadow(15px 10px 5px rgba(0, 0, 0, 0.5));
    filter: drop-shadow(15px 10px 5px rgba(0, 0, 0, 0.5));
} */

.pai {
  position: relative;
  top: 0;
  left: 0;
}

.flexdisplay {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
}

.imagem1 {
  position: block;
  margin-right: 8px;
  border: 1px solid #ffffff;
}

.imagem2 {
  position: relative;
  top: 100px;
  left: 68px;
  border: 1px solid #ffffff;
}

.imagem3 {
  position: relative;
  top: 130px;
  left: 44px;
  border: 1px solid #ffffff;
}

.imagem4 {
  position: relative;
  top: 155px;
  left: 20px;
  border: 1px solid #ffffff;
}

.imagem5 {
  position: relative;
  top: 73px;
  left: 300px;
  border: 1px solid #ffffff;
}

.imagem6 {
  position: relative;
  top: 73px;
  left: 600px;
  border: 1px solid #ffffff;
}

.imagem7 {
  position: relative;
  top: 73px;
  left: 880px;
  border: 1px solid #ffffff;
}

.footerpag {
  width: 100%;
  height: 50vh;
}

footer {
  background-color: #ffffff;
  /* padding: 45px 0; */
  width: 100%;
}

.container-footer {
  max-width: 1400px;
  padding: 0 4%;
  margin: auto;
}

.row-footer {
  display: flex;
  /* flex-wrap: wrap; */
}

.footer-col {
  width: 25%;
  /* padding: 0 15px; */
}

.footer-col h4 {
  font-size: 15px;
  color: rgb(0, 0, 0);
  margin-bottom: 20px;
  font-weight: 500;
  white-space: nowrap;
  position: relative;
  text-transform: uppercase;
}

.footer-col ul {
  list-style: none;
}

.footer-col ul li {
  margin: 10px 0;
}

.footer-col ul li a {
  font-size: 15px;
  text-transform: capitalize;
  color: rgb(140, 75, 75);
  text-decoration: none;
  font-weight: 300;
  display: block;
  transition: all 0.3s ease;
}

.footer-col ul li a:hover {
  color: #cecdcd;
  padding-left: 10px;
}

.footer-col .medias-socias {
  margin-top: 30px;
}

.ajuste {
  display: flex;
  margin-left: -200px;
  flex-direction: column;
}

.form-email {
  display: flex;
  flex-direction: row;
}

input {
  outline: none;
  border: 0 none;
}

.footerComentario {
  display: flex;
  flex-direction: column;
  position: relative;
  /* margin-left: 150px; */
  /* width: 100%; */
  gap: 15px;
}

@media only screen and (min-width: 414px) and (max-width: 896px) {
  /* .Pag1-TelaInicial{
        width: 414px;
    } */
  /* body{
        width: 50%;
    } */
  .Pag1-imglogo {
    margin-left: -8%;
  }
  .Pag1-Titulo {
    font-size: 17px;
    margin-left: -10%;
  }
  .pesquisar-m {
    margin-left: -13%;
  }
  .pesquisar-btn {
    width: 35px;
  }
  .Pag1-Botoes {
    gap: 2px;
  }
  .b-login {
    width: 122%;
    font-size: 12px;
    margin-left: -35%;
  }
  .b-cadastro {
    width: 108%;
    font-size: 12px;
    /* margin-left: 20%; */
  }
  .Pag1-header {
    font-size: 13px;
  }
  .Pag1-opcoes {
    gap: 30px;
  }
  .Pai-cards {
    justify-content: center;
    flex-direction: column;
  }
  .cards {
    width: 287px;
    height: 376px;
    overflow: visible;
    align-content: space-around;
    margin-top: 10%;
    margin-left: 15%;
  }
  .cards:hover {
    width: 400px;
    height: 400px;
  }
  .Pag2-Explorar {
    align-items: center;
    justify-content: center;
    margin-top: 250%;
    height: 70vh;
  }
  .titulo-explorar {
    margin-left: 30%;
    margin-top: 10%;
  }
  .img-explorar {
    margin-left: 0%;
    margin-top: 30%;
  }
  .img-explorar img {
    height: 240px;
    width: 414px;
  }
  .heart {
    margin-top: -13%;
  }
  .heart img {
    height: 30px;
    width: 30px;
  }
  .span {
    font-size: 18px;
    margin-top: -6%;
  }
  /* .footer-col .imagem1{
        margin-left: 5%;
    } */
  .footer-col h4 {
    font-size: 11px;
    margin-left: 5%;
  }
  .footer-col img {
    height: 14px;
    margin-top: -5%;
    margin-left: -9%;
  }
  .footer-col ul li a {
    font-size: 12px;
    width: 50px;
  }
  .pic1 {
    padding: 5px;
  }
  .msg {
    font-size: 12px;
    margin-top: 32%;
  }
  .button-enviar {
    margin-left: -100%;
    margin-top: 130%;
  }
}
</style>
