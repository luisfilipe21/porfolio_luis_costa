import style from "./style.module.scss";
import { AiFillLinkedin, AiOutlineMail } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import { BiLogoGithub } from "react-icons/bi";

export const Footer = () => {
    return (
        <footer className="container">
            <div className={style.div}>
                <div className={style.divName}>
                    <h2>Copyright &#169; - Luis Filipe 2023</h2>
                </div>
                <div className={style.divLinks}>
                    <ul>
                        <li>
                            <a href="https://www.linkedin.com/in/luis-filipe-guimar%C3%A3es-costa-784a2a81/" target="_blank">
                                {<AiFillLinkedin size={40} color="#F95842" />}
                            </a>
                        </li>
                        <li>
                            <a href="mailto: luisfilipegc@hotmail.com" target="_blank" title="luisfilipegc@hotmail.com">
                                {<AiOutlineMail size={40} color="#F95842" />}
                            </a>
                        </li>
                        <li>
                            <a href="" alt="+55 (61) 98207-2433" title="+55 (61) 98207-2433">
                                {<BsWhatsapp size={40} color="#F95842" />}
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/luisfilipe21" target="_blank">
                                {<BiLogoGithub size={40} color="#F95842" />}
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}