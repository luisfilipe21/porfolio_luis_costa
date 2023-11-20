import style from "./style.module.scss";
import { BiLogoSass, BiLogoJavascript, BiLogoReact, BiLogoHtml5, BiLogoCss3, BiLogoGit } from "react-icons/bi";
import { CgWebsite } from "react-icons/cg";

export const ProjectCard = ({ name, description, site, img, technologies }) => {
    const reactLogo = <BiLogoReact size={50} color="#F95842" />;
    const jsLogo = <BiLogoJavascript size={50} color="#F95842"/>;
    const htmlLogo = <BiLogoHtml5 size={50} color="#F95842"/>;
    const scssLogo = <BiLogoSass size={50} color="#F95842"/>
    const css3Logo = <BiLogoCss3 size={50} color="#F95842"/>

    return (
        <li>
            <div className={style.card}>
                <div className={style.projectImg} >
                    <div 
                    className={style.bgImage}
                    style={{
                        backgroundImage: `url(${img})`,
                        width: '100%',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                    }}>
                        <div className={style.title}>
                            <h3 className="title-2">{name}</h3>
                            <div className={style.logos}>
                                {technologies.includes("React") ? reactLogo : null }
                                {technologies.includes("Javascript") ? jsLogo : null }
                                {technologies.includes("HTML") ? htmlLogo : null }
                                {technologies.includes("SCSS") ? scssLogo : null }
                                {technologies.includes("CSS") ? css3Logo : null }
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.projectInfo}>
                    <p className="paragraph">{description}</p>
                    <div className={style.links}>
                        <a href={site} target="_blank"><CgWebsite size={50} /></a>
                    </div>
                </div>
            </div>
        </li>
    )
}