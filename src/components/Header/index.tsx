import styles from "./Header.module.scss";
import Produtos from "../../assets/img/produtos.png"

export default function Header() {
    return (
        <header className={styles.header}>
            <h1>Produtos</h1>
            <nav>
                <img className={styles.header__img} src={Produtos} alt="" />
                <label htmlFor="search"></label>
                <input className={styles.header__busca} title="search" type="text" placeholder="Buscar..."/>
            </nav>
        </header>
    )
}