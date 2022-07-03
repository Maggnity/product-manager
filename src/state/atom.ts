import { atom } from "recoil";
import { IBusca } from "../interfaces/IBusca";
import { IItem } from "../interfaces/IItem";

export const listaDeProdutosState = atom<IItem[]>(
    {
        key: 'listaDeProdutosState',
        default: [
            {
                "id": 1,
                "nome": "Casaco",
                "marca": "Adidas",
                "preco": 100
            },
            {
                "id": 2,
                "nome": "Tênis",
                "marca": "Umbro",
                "preco": 30
            },
            {
                "id": 3,
                "nome": "Calça",
                "marca": "Lacoste",
                "preco": 25
            },
            {
                "id": 4,
                "nome": "Touca",
                "marca": "Umbro",
                "preco": 30
            },
            {
                "id": 5,
                "nome": "Tênis",
                "marca": "Umbro",
                "preco": 25
            },
            {
                "id": 6,
                "nome": "Calça",
                "marca": "Nike",
                "preco": 30
            },
            {
                "id": 7,
                "nome": "Tênis",
                "marca": "Lacoste",
                "preco": 25
            },
            {
                "id": 8,
                "nome": "Camiseta",
                "marca": "Topper",
                "preco": 100
            },
            {
                "id": 9,
                "nome": "Jaqueta",
                "marca": "Lacoste",
                "preco": 250
            },
            {
                "id": 10,
                "nome": "Nike",
                "marca": "Tênis",
                "preco": 30
            },
        ]
    }
)

export const buscaState = atom<IBusca>(
    {
        key: 'buscaState',
    }
)