import React from 'react';
import { IItem } from "../../interfaces/IItem"
import useDeletarItem from '../../state/hooks/useDeletarEvento';
/* import styles from "./Item.module.scss";
 */
export const Item: React.FC<{ item: IItem }> = ({ item })  => {
    
    const excluirItem = useDeletarItem()
    
    return (
        <div>
            <div>
                <h3>{item.id}</h3>
                <h3>{item.marca}</h3>
                <h3>{item.nome}</h3>
                <h3>{item.preco}</h3>
            </div>

            <button  onClick={() => excluirItem(item)}>Excluir</button>

        </div>
    )
}

export default Item