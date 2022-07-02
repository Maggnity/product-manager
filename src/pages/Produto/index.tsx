import { useNavigate, useParams } from "react-router-dom"
import { useRecoilValue } from "recoil";
import { listaDeProdutosState } from "../../state/atom";
import styles from "./Produto.module.scss";
import NotFound from "../NotFound";

export default function Produto() {
    
    const { id } = useParams();
    const navigate = useNavigate();
    const lista = useRecoilValue(listaDeProdutosState);
    console.log(lista);
    
    const produto = lista.find((item) => item.id === Number(id))
    console.log(produto);
    

    if(!produto) {
        return <NotFound />;
    }
    return (
        <div className={styles.page__produto}>
            <button className={styles.page__button} onClick={() => navigate(-1)}>
                {'< Voltar'}
            </button>
            <section className={styles.produto}>
                <h1 className={styles.produto__id}>{produto.id}</h1>
                <div>
                    <img src="" alt="" />
                </div>
                    <h1 className={styles.produto__nome}>{produto.nome}</h1>
                    <h1 className={styles.produto__marca}>{produto.marca}</h1>
                    <h1 className={styles.produto__preco}>$ {produto.preco}</h1>
            </section>
        </div>
    )
}