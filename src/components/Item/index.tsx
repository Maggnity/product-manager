import React from 'react';
import { IItem } from "../../interfaces/IItem"
/* import styles from "./Item.module.scss";
 */
export const Item: React.FC<{ item: IItem }> = ({ item })  => {
    
    
    return (
        <div>
            <div>
                <h3>{item.id}</h3>
                <h3>{item.marca}</h3>
                <h3>{item.nome}</h3>
                <h3>{item.preco}</h3>
            </div>
        </div>
    )
}

export default Item