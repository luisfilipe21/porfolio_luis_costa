import style from "./style.module.scss";

export const Header = () => {
    return (
        <header className="container">
            <div className={style.container}>
                <h1 className="title-3">Luis Filipe</h1>
                <div className={style.divList}>
                    <nav>
                        <ul>
                            <li className="paragraph">About me</li>
                            <li className="paragraph">Projects</li>
                            <li className="paragraph">Contat</li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}