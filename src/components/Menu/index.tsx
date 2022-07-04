import styles from "./Menu.module.scss";
import Produtos from "../../assets/img/produtos.png"
import { Link } from "react-router-dom";
import MenuLogo from "../../assets/img/menu.png";
import { useState } from "react";


export default function Menu() {
    
    const rotas = [
        {
            label: 'Inicio',
            to: "/"
        },
        {
            label: 'Sobre',
            to: "/sobre"
        },
        {
            label: 'Produtos',
            to: "/lista-de-itens"
        },
        {
            label: 'Adicionar',
            to: "/adicionar"
        },
        
    ]
    

    const [isActive, setIsActive] = useState(false)

    const dropdown = () => {
        let ativo = isActive
        
        if (ativo === true){
        setIsActive(!ativo)

            return true
        } else {
            setIsActive(true)
            return false
        }
    }

    return (
            <div className={styles.container}>
                <div className={styles.menu}>
                    <img className={styles.menu__img} src={Produtos} alt="Logo Gerenciador" />
                    <div className={styles.menu__button}>
                        <button
                            type="button"
                            onClick={dropdown}
                        >
                            <img src={MenuLogo} alt="Menu"></img>
                        </button>
                    </div>
                </div>
                
                <nav className={styles.menu__list}>
                    <ul className={isActive ? styles.menu__list__open : styles.menu__list__close}>
                        {rotas.map((rota, index) => (
                            <li key={index} className={styles.menu__link}>
                                <Link onClick={() => setIsActive(false)} to={rota.to}>{rota.label}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
    )
}
