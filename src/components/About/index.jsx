import { AiFillLinkedin, AiOutlineMail } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import { BiLogoGithub } from "react-icons/bi";
import style from "./style.module.scss";
import Foto from "../../assets/eu.jpg";

export const AboutSection = () => {
    return (
        <section className="container" id="about">
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
                                <a href="mailto: luisfilipegc@hotmail.com" target="_blank" title="luisfilipegc@hotmail.com">
                                    {<AiOutlineMail size={20} />}
                                </a>
                            </li>
                            <li>
                            <a href="https://wa.me/5561982072433" target="_blank">
                                    {<BsWhatsapp size={20} />}
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/luisfilipe21" target="_blank">

                                    {<BiLogoGithub size={20} />}
                                </a>
                            </li>
                        </ul>
                    </div>
                    <h1 className="title-1">I am Luis Filipe</h1>
                    <p className="paragraph">
                    As a web developer, I come with a robust expertise in vital technologies for crafting top-notch web applications. Additionally, I have a genuine passion for crafting exceptional products, seeking solutions, and tackling challenges. I'm also skilled at engaging with people and thrive as a team player.</p>
                </div>

                <div className={style.img}>
                    <img src={Foto} alt="Img"></img>
                </div>
            </div>
        </section>
    )
}