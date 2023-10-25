import { AiFillLinkedin, AiOutlineMail } from "react-icons/Ai";
import { BsWhatsapp } from "react-icons/Bs";
import { BiLogoGit } from "react-icons/Bi";
import style from "./style.module.scss";

export const AboutSection = () => {
    return (
        <section className="container">
            <div className={style.box}>
                <div className={style.boxInfo}>
                    <div className={style.boxLinks}>
                        <ul>
                            <li>
                                <a href="https://www.linkedin.com/in/luis-filipe-guimar%C3%A3es-costa-784a2a81/" target="_blank">
                                    {<AiFillLinkedin size={20} />}
                                </a>
                            </li>
                            <li>
                                <a href="luisfilipegc@hotmail.com" title="luisfilipegc@hotmail.com">
                                    {<AiOutlineMail size={20} />}
                                </a>
                            </li>
                            <li>
                                <a href="" alt="+55 (61) 98207-2433" title="+55 (61) 98207-2433">

                                    {<BsWhatsapp size={20} />}
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/luisfilipe21" target="_blank">

                                    {<BiLogoGit size={20} />}
                                </a>
                            </li>
                        </ul>
                    </div>
                    <h1 className="title-1">I am Luis Filipe</h1>
                    <p className="paragraph">
                    As a web developer, I come with a robust expertise in vital technologies for crafting top-notch web applications. Additionally, I have a genuine passion for crafting exceptional products, seeking solutions, and tackling challenges. I'm also skilled at engaging with people and thrive as a team player.</p>
                </div>

                <div className={style.img}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_pCsO9a48vB15ItHsErQ51-ZDhDs0FFFYDknQeZkM8STf92m0gbDffWt8VUdtdZdlUtM&usqp=CAU" alt="Img"></img>
                </div>
            </div>
        </section>
    )
}