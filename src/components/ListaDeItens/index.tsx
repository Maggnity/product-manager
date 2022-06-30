import useListaDeItens from "../../state/hooks/useListaDeItens";
import { Item } from "../Item";
/* import styles from "./ListaDeItens.module.scss"
 */
const ListaDeItens: React.FC = () => {
    const itens = useListaDeItens();

    return(
        <section>
            <ul>
                {itens.map(item => (
                    <li >
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