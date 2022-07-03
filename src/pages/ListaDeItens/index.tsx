import useListaDeItens from "../../state/hooks/useListaDeItens";
import { Item } from "../../components/Item";
import styles from "./ListaDeItens.module.scss"
import { Buscador } from "./Buscador";


const ListaDeItens: React.FC = () => {
    const itens = useListaDeItens();

    
    return(
        <section className={styles.container}>
            <h1>Produtos</h1>
            <Buscador />
            <br />
            <br />
            <table className={styles.lista}>
                    <tr className={styles.lista__head}>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Marca</th>
                        <th>Preço</th>
                    </tr>    
                {itens.map((item,) => (
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