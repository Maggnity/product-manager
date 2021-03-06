import React, { useState } from "react";
import useAdicionarItem from "../../state/hooks/useAdicionarItem";
import styles from './Formulario.module.scss'
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


const Formulario: React.FC = () => {
    
    const adicionarItem = useAdicionarItem()

    const [nome, setNome] = useState("")
    const [marca, setMarca] = useState("")
    const [preco, setPreco] = useState("")
    const navigate = useNavigate()

    const NovoItem = (event: React.FormEvent<HTMLFormElement>) => {
        
        console.log("ckmcsomc");
        event?.preventDefault()
        try {
            navigate(-1)
            alert("Item adicionado")
            
            const item = {
                id: getId(),
                nome: nome,
                marca: marca,
                preco: preco,
            }
            
            adicionarItem(item)
            setNome("")
            setMarca("")
            setPreco("")
        } catch (erro){
            alert(erro)
        }
        
    } 

    let id = 0;
    function getId() {
        return id++;
    }

    return (
        <section className={styles.container}>
            <h1 className={styles.form__title}>Adicionar Produto</h1>
            <form 
                className={styles.form} 
                onSubmit={NovoItem}>
                
                <Form.Label 
                    className={styles.form__label} 
                    htmlFor="marca"
                >
                    Marca
                </Form.Label>
                <Form.Control
                    className={styles.form__input}
                    title="marca"
                    type="text"
                    value={marca}
                    onChange={(event) => {
                        setMarca(event.target.value)}}
                    required
                />
                <Form.Label 
                    className={styles.form__label} 
                    htmlFor="nome"
                >
                    Nome
                </Form.Label>
                <Form.Control
                    className={styles.form__input}
                    title="nome"
                    type="text"
                    value={nome}
                    onChange={(event) => {
                        setNome(event.target.value)}}
                    required
                />
                <Form.Label 
                    className={styles.form__label} 
                    htmlFor="preco"
                >
                    Pre??o
                </Form.Label>
                <Form.Control
                    className={styles.form__input}
                    title="preco"
                    type="number"
                    id="id"
                    value={preco}
                    onChange={(event) => {
                        setPreco(event.target.value)}}
                    required
                />
                <button 
                    type="button"
                    className={styles.send}
                >
                    Adicionar Item
                </button>
            </form>
        </section>
    )
}

export default Formulario