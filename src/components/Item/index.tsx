import React from 'react';
import { IItem } from "../../interfaces/IItem"
import useAtualizarItem from '../../state/hooks/useAtualizarItem';
import useDeletarItem from '../../state/hooks/useDeletarItem';
import styles from "./Item.module.scss";

export const Item: React.FC<{ item: IItem }> = ({ item })  => {
    
    const excluirItem = useDeletarItem()
    const atualizarItem = useAtualizarItem()
    
    return (
            <>

                <ul className={styles.item}>
                    <li className={styles.item__id}>#id: {item.id}</li>
                    <li className={styles.item__marca}>Marca: {item.marca}</li>
                    <li className={styles.item__nome}>Nome: {item.nome}</li>
                    <li className={styles.item__preco}>$ {item.preco}</li>
                    <li>
                        <button className={styles.item__excluir} onClick={() => excluirItem(item)}>Excluir</button>
                        <button className={styles.item__atualizar} onClick={() => atualizarItem(item)}>Atualizar</button>
                    </li>
                </ul>
                
            </>
    )
}

export default Item