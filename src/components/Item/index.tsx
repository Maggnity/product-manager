import React from 'react';
import { IItem } from "../../interfaces/IItem"
import styles from "./Item.module.scss";
import { useNavigate } from 'react-router-dom';
import Edit from "../../assets/img/edit.png"
import Close from "../../assets/img/close.png"
import useAtualizarItem from '../../state/hooks/useAtualizarItem';
import useDeletarItem from '../../state/hooks/useDeletarItem';

export const Item: React.FC<{ item: IItem }> = ({ item })  => {
    
    const navigate = useNavigate();
    const id = item.id

    const atualizarItem = useAtualizarItem()
    const excluirItem = useDeletarItem()

    function DeletarItem(item: IItem){
        excluirItem(item)
    }
    function AtualizarItem(item:IItem) {
        
        atualizarItem(item)
    }
    
    return (
            <div className={styles.lista}>
                <span className={styles.buttons}>
                <button className={styles.button} onClick={() => DeletarItem(item)}>
                    <img className={styles.button_img} src={Close} alt="Apagar" />
                </button>
                <button 
                    className={styles.button} 
                    onClick={() => AtualizarItem(item)}>
                    <img className={styles.button__img} src={Edit} alt="Editar" />
                </button>
                </span>
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
            </div>
    )
}

export default Item