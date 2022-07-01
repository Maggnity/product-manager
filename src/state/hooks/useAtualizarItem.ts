import { useSetRecoilState } from "recoil"
import { IItem } from "../../interfaces/IItem"
import { listaDeProdutosState } from "../atom"

const useAtualizarItem = () => {
    const setListaDeItens = useSetRecoilState<IItem[]>(listaDeProdutosState)
    return (item : IItem) => {
        return setListaDeItens(listaAntiga => {
            const indice = listaAntiga.findIndex( evento => evento.id === item.id)
            return [...listaAntiga.slice(0, indice), item, ...listaAntiga.slice(indice + 1)]
        })
    }
}

export default useAtualizarItem