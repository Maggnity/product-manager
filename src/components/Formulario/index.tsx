import React, { useState } from "react";
import useAdicionarItem from "../../state/hooks/useAdicionarItem";

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
            <form onSubmit={newItem}>
                <label htmlFor="id">Id</label>
                    <input 
                        title="id" 
                        value={id}
                        type="number" 
                        onChange={(event) => {setId(event.target.value)}}
                        required
                    />
                <label htmlFor="nome">Nome</label>
                    <input 
                        title="nome" 
                        value={nome}
                        type="text" 
                        onChange={(event) => {setNome(event.target.value)}}
                        required
                    />
                <label htmlFor="marca">Marca</label>
                    <input 
                        title="marca" 
                        value={marca}
                        type="text" 
                        onChange={(event) => {setMarca(event.target.value)}}
                        required
                    />
                <label htmlFor="preco">Valor</label>
                    <input 
                        title="preco" 
                        value={preco}
                        type="number" 
                        onChange={(event) => {setPreco(event.target.value)}}
                        required
                    />
                <button>
                    Adicionar Item
                </button>
            </form>
        </div>
    )
}

export default Formulario