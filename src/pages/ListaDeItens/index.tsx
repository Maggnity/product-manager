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
            <h1>Produtos</h1>
            <Buscador />
            <table className={styles.lista}>
                    <tr className={styles.lista__head}>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Marca</th>
                        <th>Preço</th>
                    </tr>    
                {itens.map((item, index) => (
                    <Item 
                        item={item}
                        key={item.id}
                    />
                ))}
            </table>
        </section>
    )
}

export default ListaDeItens