import React, { useState } from "react";
import useAdicionarItem from "../../state/hooks/useAdicionarItem";
import styles from './Formulario.module.scss'

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
        <div>
            <h1 className={styles.form__title}>Adicionar Produto</h1>
            <form className={styles.form} onSubmit={newItem}>
                <span className={styles.input}>
                    <label className={styles.input__label} htmlFor="id">Id</label>
                        <input 
                            title="id" 
                            value={id}
                            type="number" 
                            onChange={(event) => {setId(event.target.value)}}
                            required
                        />
                </span>
                <span className={styles.input}>
                    <label className={styles.input__label} htmlFor="nome">Nome</label>
                        <input 
                            title="nome" 
                            value={nome}
                            type="text" 
                            onChange={(event) => {setNome(event.target.value)}}
                            required
                        />
                    </span>
                <span className={styles.input}>
                    <label className={styles.input__label} htmlFor="marca">Marca</label>
                        <input 
                            title="marca" 
                            value={marca}
                            type="text" 
                            onChange={(event) => {setMarca(event.target.value)}}
                            required
                        />
                </span>
                <span className={styles.input}>
                    <label className={styles.input__label} htmlFor="preco">Valor</label>
                        <input 
                            title="preco" 
                            value={preco}
                            type="number" 
                            onChange={(event) => {setPreco(event.target.value)}}
                            required
                        />
                </span>
                <button className={styles.send}>
                    Adicionar Item
                </button>
            </form>
        </div>
    )
}

export default Formulario