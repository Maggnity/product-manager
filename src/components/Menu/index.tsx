import styles from "./Menu.module.scss";
import Produtos from "../../assets/img/produtos.png"
import { Link } from "react-router-dom";

export default function Menu() {
    
    const rotas = [
        {
            label: 'Inicio',
            to: "/"
        },
        {
            label: 'Produtos',
            to: "/lista-de-itens"
        },
        {
            label: 'Formulário',
            to: "/formulario"
        },
        {
            label: 'Sobre',
            to: "/sobre"
        },
    ]
    
    
    return (
        <header className={styles.header}>
            <nav>
                <ul className={styles.menu}>
                    {rotas.map((rota, index) => (
                        <li key={index} className={styles.menu__link}>
                            <Link to={rota.to}>{rota.label}</Link>
                        </li>
                    ))}
                </ul>
                <img className={styles.header__img} src={Produtos} alt="" />
                
            </nav>
        </header>
    )
}