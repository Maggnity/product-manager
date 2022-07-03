import React, { useState } from "react";
import useAdicionarItem from "../../state/hooks/useAdicionarItem";
import styles from './Formulario.module.scss'
import { Form } from "react-bootstrap";


const Formulario: React.FC = () => {
    
    const adicionarItem = useAdicionarItem()

    const [id, setId]= useState("")
    const [nome, setNome] = useState("")
    const [marca, setMarca] = useState("")
    const [preco, setPreco] = useState("")
        
    function newItem(event: React.FormEvent<HTMLFormElement>) {
        event?.preventDefault()
        
        const item = {
            id: id,
            nome: nome,
            marca: marca,
            preco: preco,
        }
        console.log(item);

        adicionarItem(item)
        setId("")
        setNome("")
        setMarca("")
        setPreco("")
        
    } 
        
    
    return (
        
        <section>
            <h1 className={styles.form__title}>Adicionar Produto</h1>
            <form className={styles.form} onSubmit={newItem}>
                
                <Form.Label className={styles.form__label} htmlFor="id">Id</Form.Label>
                <Form.Control
                    className={styles.form__input}
                    title="id"
                    type="text"
                    id="id"
                    value={id}
                    onChange={(event) => {setId(event.target.value)}}
                />

                <Form.Label className={styles.form__label} htmlFor="marca">Marca</Form.Label>
                <Form.Control
                    className={styles.form__input}
                    title="marca"
                    type="text"
                    value={marca}
                    onChange={(event) => {setMarca(event.target.value)}}
                />

                <Form.Label className={styles.form__label} htmlFor="nome">Nome</Form.Label>
                <Form.Control
                    className={styles.form__input}
                    title="nome"
                    type="text"
                    value={nome}
                    onChange={(event) => {setNome(event.target.value)}}
                />

                <Form.Label className={styles.form__label} htmlFor="preco">Preço</Form.Label>
                <Form.Control
                    className={styles.form__input}
                    title="preco"
                    type="text"
                    id="id"
                    value={preco}
                    onChange={(event) => {setPreco(event.target.value)}}
                />

                <button className={styles.send}>
                    Adicionar Item
                </button>
            </form>

        </section>
    )
}

export default Formulario