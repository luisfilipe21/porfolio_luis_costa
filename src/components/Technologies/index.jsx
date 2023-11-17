import { BiLogoSass, BiLogoJavascript, BiLogoReact, BiLogoGit, BiLogoGithub, BiLogoHtml5, BiLogoCss3, BiLogoTailwindCss } from "react-icons/bi";
import style from "./style.module.scss";


export const Technologies = () => {
    return (
        <section className="container" id="techs">
            <div className={style.info}>
                <div className={style.infoBox}>
                    <div className={style.line}>
                        <p className="specialText">techs</p>
                        <h2 className="title-2">Technologies</h2>
                    </div>
                    <div className={style.infoText}>
                        <p className="paragraph">I have a high level of proficiency in HTML and CSS, which I use to build sturdy structures and stylish designs. My in-depth knowledge of Sass further enhances the styling process. Additionally, my advanced expertise in React enables me to craft dynamic and captivating interfaces. Also, my proficiency in JavaScript enables me to implement advanced features and address any challenges. Furthermore, my solid experience in Git and GitHub, I ensure effective version control and efficient collaboration within the team.</p>
                    </div>
                </div>

                <div className={style.techs}>
                    <ul>
                        <li >
                            <BiLogoHtml5 size={80} title="HTML" />
                            <p className="paragraph">HTML</p>
                        </li>
                        <li >
                            <BiLogoCss3 size={80} title="CSS" />
                            <p className="paragraph">CSS</p>
                        </li>
                        <li >
                            <BiLogoJavascript size={80} title="Javascript" />
                            <p className="paragraph">Javascript</p>
                        </li>
                        <li >
                            <BiLogoReact size={80} title="ReactJs" />
                            <p className="paragraph">ReactJs</p>
                        </li>
                        <li >
                            <BiLogoSass size={80} title="SASS" />
                            <p className="paragraph">SASS</p>
                        </li>
                        <li >
                            <BiLogoTailwindCss size={80} title="Tailwind" />
                            <p className="paragraph">Tailwind</p>
                        </li>
                        <li >
                            <BiLogoGit size={80} title="Git" />
                            <p className="paragraph">Git</p>
                        </li>
                        <li >
                            <BiLogoGithub size={80} title="GitHub" />
                            <p className="paragraph">GitHub</p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}