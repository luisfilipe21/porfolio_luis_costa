import style from "./style.module.scss";

export const Header = () => {
    return (
        <header className="container">
            <div className={style.container}>
                <h1 className="title-3">Luis Filipe</h1>
                <div className={style.divList}>
                    <nav>
                        <ul>
                            <li><a className="paragraph" href="#projects">Projects</a></li>
                            <li><a className="paragraph" href="#techs">Techs</a></li>
                            <li><a className="paragraph" href="#contacts">Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}