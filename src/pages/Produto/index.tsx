import { useNavigate, useParams } from "react-router-dom"
import { useRecoilValue } from "recoil";
import { listaDeProdutosState } from "../../state/atom";
import ArrowBack from "../../assets/img/arrow_back.png"
import Edit from "../../assets/img/edit.png"
import Close from "../../assets/img/close.png"
import ReactIcon from "../../assets/img/react-icon.png"
import styles from "./Produto.module.scss";
import NotFound from "../NotFound";
import useDeletarItem from "../../state/hooks/useDeletarItem";
import useAtualizarItem from "../../state/hooks/useAtualizarItem";
import { Card } from "react-bootstrap";


export default function Produto() {
    
    const { id } = useParams();
    const navigate = useNavigate();
    const lista = useRecoilValue(listaDeProdutosState);
    
    const atualizarItem = useAtualizarItem()
    const excluirItem = useDeletarItem()

    const produto = lista.find((item) => item.id === Number(id))
    console.log(produto);
    

    if(!produto) {
        return <NotFound />;
    }
    return (
        <section className={styles.page__produto}>
            <h1>Produto</h1>
            <button className={styles.page__button__left} onClick={() => navigate(-1)}>
                <img className={styles.page__button_img} src={ArrowBack} alt="Voltar" />
            </button>
            <Card className={styles.produto} style={{ width: '18rem' }}>
                <button className={styles.page__button__rigth} onClick={() => excluirItem}>
                    <img className={styles.page__button_img} src={Close} alt="Apagar" />
                </button>
                <button className={styles.page__button__rigth} onClick={() => atualizarItem}>
                    <img className={styles.page__button_img} src={Edit} alt="Editar" />
                </button>
                <Card.Img className={styles.produto__img} src={ReactIcon}></Card.Img>
                <Card.Body>
                    <Card.Text className={styles.produto__id}>{produto.id}</Card.Text>
                    <Card.Title className={styles.produto__nome}>{produto.nome}</Card.Title>
                    <Card.Text className={styles.produto__marca}>{produto.marca}</Card.Text>
                    <Card.Text className={styles.produto__preco}>$ {produto.preco}</Card.Text>
                </Card.Body>
            </Card>
        </section>
    )
}