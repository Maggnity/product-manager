import { useState } from "react"
import db from "../../../db/db.json"
import AdicionaItem from "../../AdicionaItem"
import styles from "./Item.module.scss"

export default function Item() {
    const [listaItem, setListaItem] = useState(db)
    
    
    console.log(db);
    
    return (
        <div>
            <ul className={styles.lista}>
            {listaItem.map((item, key) => (
                <li key={key} className={styles.lista__item}>
                    <p>{item.id}</p>
                    <p>{item.nome}</p>
                    <p>{item.marca}</p>
                    <p>{item.preco}</p>
                </li>
            ))}
            </ul>
            <AdicionaItem />
        </div>
    )
}