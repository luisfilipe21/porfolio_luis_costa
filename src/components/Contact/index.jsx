import { BsWhatsapp } from "react-icons/bs";
import { BiPaperPlane } from "react-icons/bi";
import style from "./style.module.scss";

export const Contact = () => {
    return (
        <section className="container" id="contacts">
            <div className={style.box}>
                <div className={style.info}>
                    <p>Send me a DM</p>
                    <h1 className="title-2">Get in touch</h1>
                </div>
                <div className={style.contacts}>
                    <div className={style.whats}>
                    <a href="https://wa.me/5561982072433" target="_blank">
                        <button> <BsWhatsapp size={35} /> Message</button>
                        </a>
                    </div>
                    <div className={style.mail}>
                        <BiPaperPlane size={35} color="#F95842" />
                        <h3>E-mail:</h3>
                        <p>luisfilipegc@hotmail.com</p>
                    </div>
                </div>
            </div>
        </section>
    )
}