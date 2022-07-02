import { atom } from "recoil";
import { IBusca } from "../interfaces/IBusca";
import { IItem } from "../interfaces/IItem";

export const listaDeProdutosState = atom<IItem[]>(
    {
        key: 'listaDeProdutosState',
        default: [
            {
                "id": 1,
                "nome": "teste_nome",
                "marca": "teste_marca",
                "preco": 25
            },
            {
                "id": 2,
                "nome": "teste_nome2",
                "marca": "teste_marca2",
                "preco": 30
            },
            {
                "id": 3,
                "nome": "teste_nome",
                "marca": "teste_marca",
                "preco": 25
            },
            {
                "id": 4,
                "nome": "teste_nome2",
                "marca": "teste_marca2",
                "preco": 30
            },
            {
                "id": 5,
                "nome": "teste_nome",
                "marca": "teste_marca",
                "preco": 25
            },
            {
                "id": 6,
                "nome": "teste_nome2",
                "marca": "teste_marca2",
                "preco": 30
            },
            {
                "id": 7,
                "nome": "teste_nome",
                "marca": "teste_marca",
                "preco": 25
            },
            {
                "id": 8,
                "nome": "teste_nome2",
                "marca": "teste_marca2",
                "preco": 30
            },
            {
                "id": 9,
                "nome": "teste_nome",
                "marca": "teste_marca",
                "preco": 25
            },
            {
                "id": 10,
                "nome": "teste_nome2",
                "marca": "teste_marca2",
                "preco": 30
            },
        ]
    }
)

export const buscaState = atom<IBusca>(
    {
        key: 'buscaState',
        default: {}
    }
)