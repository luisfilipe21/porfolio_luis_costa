import { BiLogoSass, BiLogoJavascript, BiLogoReact, BiLogoHtml5, BiLogoCss3, BiLogoGit } from "react-icons/Bi";
import { CgWebsite } from "react-icons/Cg";
import style from "./style.module.scss";

export const Projects = () => {
    return (

        <section className="container">
            <div className={style.bigBox}>
                <div className={style.info}>
                    <p className="specialText">Projects</p>
                    <h2 className="title-2">My Projects</h2>
                </div>
                <div className={style.boxProjects}>
                    <ul>
                        <div className={style.project}>
                            <li>
                                <div className={style.card}>
                                    <div className={style.projectImg}>
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_pCsO9a48vB15ItHsErQ51-ZDhDs0FFFYDknQeZkM8STf92m0gbDffWt8VUdtdZdlUtM&usqp=CAU" />
                                        <div className={style.logos}>
                                            <BiLogoReact size={50}/>
                                            <BiLogoJavascript size={50} />
                                            <BiLogoHtml5 size={50} />
                                            <BiLogoSass size={50} />
                                        </div>
                                    </div>
                                    <div className={style.projectInfo}>
                                        <h3 className="title-3">Hamburgueria</h3>
                                        <p className="paragraph">Apresento uma página de Hamburgueria responsiva que tem funções de filtragem por nome, adição, exclusão e soma de valores do lanche escolhido além de dark mode. Este projeto é responsivo que foi realizado com React e SCSS.</p>
                                        <div className={style.links}>
                                            <a href="https://hamburger-kenzie-lyart.vercel.app/" target="_blank"><CgWebsite size={50} /> </a>
                                            <a href="" target="_blank"><BiLogoGit size={50} /></a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </div>
                        <div className={style.project}>
                            <li>
                                <div className={style.project}>
                                    <div className={style.card}>
                                        <div className={style.projectImg}>
                                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_pCsO9a48vB15ItHsErQ51-ZDhDs0FFFYDknQeZkM8STf92m0gbDffWt8VUdtdZdlUtM&usqp=CAU" />

                                            <div className={style.logos}>
                                                <BiLogoJavascript size={50} />
                                                <BiLogoHtml5 size={50} />
                                                <BiLogoCss3 size={50} />
                                            </div>
                                        </div>
                                        <div className={style.projectInfo}>
                                            <h3 className="title-3">Open Music</h3>
                                            <p className="paragraph">Apresento um projeto de aplicativo de venda de álbuns de música com filtros silmultâneos de gênero musical e preço por álbum, também podendo ser usados separadamente, além de ter modo escuro. As téecnologias usadas foram Javascript, HTML e CSS.</p>
                                            <div className={style.links}>
                                                <a href="https://kenzie-academy-brasil-developers-open-music-templa-luisfilipe21.vercel.app/" target="_blank"><CgWebsite size={50} /> </a>
                                            <a href="" target="_blank"><BiLogoGit size={50} /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </div>
                        <div className={style.project}>
                            <li>
                                <div className={style.card}>
                                    <div className={style.projectImg}>
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_pCsO9a48vB15ItHsErQ51-ZDhDs0FFFYDknQeZkM8STf92m0gbDffWt8VUdtdZdlUtM&usqp=CAU" />
                                        <div className={style.logos}>
                                            <BiLogoJavascript size={50} />
                                            <BiLogoHtml5 size={50} />
                                            <BiLogoCss3 size={50} />
                                        </div>
                                    </div>
                                    <div className={style.projectInfo}>
                                        <h3 className="title-3">Pokedex</h3>
                                        <p className="paragraph">Este projeto foi realizado acessando a API do Pokemon com Javascript puro, estilizado com CSS e responsivo à diversos tamanhos de tela. Algumas de suas funcionalidades são o modo escuro e escolher seus pokemons preferidos.</p>
                                        <div className={style.links}>
                                            <a href="https://pokedex-6w6zorbf0-luisfilipe21.vercel.app" target="_blank"><CgWebsite size={50} /> </a>
                                            <a href="" target="_blank"><BiLogoGit size={50} /></a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </div>
                        <div className={style.project}>
                            <li>
                                <div className={style.card}>
                                    <div className={style.projectImg}>
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_pCsO9a48vB15ItHsErQ51-ZDhDs0FFFYDknQeZkM8STf92m0gbDffWt8VUdtdZdlUtM&usqp=CAU" />
                                        <div className={style.logos}>
                                            <BiLogoJavascript size={50} />
                                            <BiLogoHtml5 size={50} />
                                            <BiLogoCss3 size={50} />
                                        </div>
                                    </div>
                                    <div className={style.projectInfo}>
                                        <h3 className="title-3">Pet Info</h3>
                                        <p className="paragraph">Este projeto apresenta uma réplica de uma rede social para pets. Usando uma API local, Javascript puro, CSS e a biblioteca Tostify, este projedo apresenta interatividade, validação de login, cadastro de novo usuário, criação, edição e deleção de posts de sua autoria e vizualização de post de outros usuários.</p>
                                        <div className={style.links}>
                                            <a href="https://kenzie-academy-brasil-developers-pet-info-template-luisfilipe21.vercel.app/" target="_blank"><CgWebsite size={50} /> </a>
                                            <a href="" target="_blank"><BiLogoGit size={50} /></a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </div>
                    </ul>
                </div>
            </div >
        </section >
    )
}