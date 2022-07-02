import useListaDeItens from "../../state/hooks/useListaDeItens";
import { Item } from "../../components/Item";
import styles from "./ListaDeItens.module.scss"
import { Buscador } from "./Buscador";
import { IBusca } from "../../interfaces/IBusca";
import { useSetRecoilState } from "recoil";
import { buscaState } from "../../state/atom";


const ListaDeItens: React.FC = () => {
    const itens = useListaDeItens();
    const setBusca = useSetRecoilState<IBusca>(buscaState)
    
    /* function testaBusca(item: string) {
        const regex = new RegExp(setBusca, 'i'); 
        return regex.test(item);
    } */

    

    return(
        <section>
            <ul className={styles.head}>
                <li className={styles.head__item}>
                    <h1>Produtos</h1>
                </li>
                <li>
            <Buscador />

                </li>
            </ul>
            <ul className={styles.lista}>
                {itens.map((item, index) => (
                    <li className={styles.lista__item}>
                        <Item 
                            item={item}
                            key={item.id}
                        />
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default ListaDeItens