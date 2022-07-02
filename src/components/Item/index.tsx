import React from 'react';
import { IItem } from "../../interfaces/IItem"
import useAtualizarItem from '../../state/hooks/useAtualizarItem';
import useDeletarItem from '../../state/hooks/useDeletarItem';
import styles from "./Item.module.scss";
import Remove from "../../assets/img/remove.png"
import Reload from "../../assets/img/reload.png"
import { useNavigate } from 'react-router-dom';

export const Item: React.FC<{ item: IItem }> = ({ item })  => {
    
    const navigate = useNavigate();
    const id = item.id

    const excluirItem = useDeletarItem()
    const atualizarItem = useAtualizarItem()
    
    return (
            <>
                <ul className={styles.item} onClick={() => navigate(`/produto/${id}`)}>
                    <li className={styles.item__id}><strong>#id: {item.id}</strong></li>
                    <li className={styles.item__nome}>Nome: {item.nome}</li>
                    <li className={styles.item__marca}>Marca: {item.marca}</li>
                    <li className={styles.item__preco}>$ {item.preco}</li>
                    <li>
                        <img src={Remove} className={styles.item__excluir} alt="" onClick={() => excluirItem(item)}/>

                        <img src={Reload} className={styles.item__atualizar} alt="" onClick={() => atualizarItem(item)}/>
                        
{/*                         <img src={Remove} className={styles.item__excluir} onClick={() => excluirItem(item)}>Excluir</img>
 */}                        {/* <button className={styles.item__atualizar} onClick={() => atualizarItem(item)}>Atualizar</button> */}
                    </li>
                </ul>
                
            </>
    )
}

export default Item