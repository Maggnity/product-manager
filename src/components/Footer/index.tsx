import styles from "./Footer.module.scss"

export default function Footer(){
    return (
        <footer className={styles.footer}>
            <h1 className={styles.footer__nome}>Maggnity</h1>
            <ul className={styles.footer__contato}>
                <li className={styles.footer__nome__item}>Email: mag.nando07@gmail.com</li>
                <li className={styles.footer__nome__item}>Github: @Maggnity</li>
                <li className={styles.footer__nome__item}></li>
            </ul>
        </footer>
    )
}