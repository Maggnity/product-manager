import * as React from 'react';
import { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import useAtualizarItem from '../../../state/hooks/useAtualizarItem';
import styles from '../../Formulario/Formulario.module.scss'


const Editar: React.FC = ()  => {
    
    const atualizarItem = useAtualizarItem()
    const [marca, setMarca] = useState("")
    const [nome, setNome] = useState("")
    const [preco, setPreco] = useState("")

    const navigate = useNavigate()

    function AtualizarItem(event:React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        navigate(-1)
        alert("item Atualizado")
        
        const item = {
            nome: nome,
            marca: marca,
            preco: preco, 
        }
        console.log('ok');
        
        atualizarItem(item)
    }
    
    return (
        <section className={styles.container}>
            <h1 className={styles.form__title}>Editar Produto</h1>
            <Form 
                action="Editar" 
                className={styles.form}
                onSubmit={AtualizarItem}
            >
                <Form.Label 
                    htmlFor="nome" 
                    className={styles.form__label} 
                    value={"Nome"}
                >
                    Nome
                </Form.Label>
                <Form.Control 
                    className={styles.form__input}
                    type="text"
                    title='nome'
                    value={nome}
                    onChange={(event) => {
                        setNome(event?.target.value)}}
                />
                <Form.Label 
                    className={styles.form__label}
                    htmlFor="marca" 
                    value={"Marca"}
                >
                    Marca
                </Form.Label>
                <Form.Control 
                    className={styles.form__input}
                    type="text"
                    title='marca'
                    value={marca}
                    onChange={(event) => {
                        setMarca(event?.target.value)}}
                />
                <Form.Label 
                    className={styles.form__label}
                    htmlFor="preco" 
                    value={"Preco"}
                >
                    Preço
                </Form.Label>
                <Form.Control 
                    className={styles.form__input}
                    type="text"
                    title='preco'
                    value={preco}
                    onChange={(event) => {
                        setPreco(event?.target.value)}}
                />
                <button 
                    type='button'
                    className={styles.send}
                >
                    Atualizar Item
                </button>
            </Form>
        </section>
    )
}

export default Editar
