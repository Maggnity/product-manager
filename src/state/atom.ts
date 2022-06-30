import { atom } from "recoil";
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
        ]
    }
)