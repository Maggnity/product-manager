import React from "react"
import { useState } from "react"
import db from "../../db/db.json"



export default function AdicionaItem() {
    const [id, setId]= useState("")
    const [nome, setNome] = useState("")
    const [marca, setMarca] = useState("")
    const [preco, setPreco] = useState("")

    const [lista, setLista] = useState(db)
        
    function newItem(){
        const item = {
            id: id,
            nome: nome,
            marca: marca,
            preco: preco,
        }
        console.log(item);

        setId("")
        setNome("")
        setMarca("")
        setPreco("")
        
        return setLista(lista + newItem)
    } 
        
    
    return (
        <div>
            <form onSubmit={(event)=>{
                event.preventDefault()
                newItem({id, nome, marca, preco})
            }}>
                <label htmlFor="id">Id</label>
                    <input 
                        title="id" 
                        value={id}
                        type="text" 
                        onChange={(event) => {setId(event.target.value)}}
                    />
                <label htmlFor="nome">Nome</label>
                    <input 
                        title="nome" 
                        value={nome}
                        type="text" 
                        onChange={(event) => {setNome(event.target.value)}}

                    />
                <label htmlFor="marca">Marca</label>
                    <input 
                        title="marca" 
                        value={marca}
                        type="text" 
                        onChange={(event) => {setMarca(event.target.value)}}
                    />
                <label htmlFor="preco">Valor</label>
                    <input 
                        title="preco" 
                        value={preco}
                        type="number" 
                        onChange={(event) => {setPreco(event.target.value)}}
                    />
                <button 
                    onSubmit={newItem}
                >
                    Adicionar Item
                </button>
            </form>
        </div>
    )
}