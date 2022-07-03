import React from 'react';
import { IItem } from "../../interfaces/IItem"
import styles from "./Item.module.scss";
import { useNavigate } from 'react-router-dom';

export const Item: React.FC<{ item: IItem }> = ({ item })  => {
    
    const navigate = useNavigate();
    const id = item.id
    
    return (
            <div className={styles.lista}>
                <tr className={styles.lista__item} onClick={() => navigate(`/produto/${id}`)}>
                    <th className={styles.lista__id}>
                        {item.id}
                    </th>
                    <th className={styles.lista__nome}> 
                        {item.nome}
                    </th>
                    <th className={styles.lista__marca}>
                        {item.marca}
                    </th>
                    <th className={styles.lista__preco}>
                        $ {item.preco}
                    </th>
                </tr>

{/*                         <img src={Reload} className={styles.item__atualizar} alt="" onClick={() => atualizarItem(item)}/>
 */}                        
{/*                         <img src={Remove} className={styles.item__excluir} onClick={() => excluirItem(item)}>Excluir</img>
 */}                        {/* <button className={styles.item__atualizar} onClick={() => atualizarItem(item)}>Atualizar</button> */}
            </div>
    )
}

export default Item