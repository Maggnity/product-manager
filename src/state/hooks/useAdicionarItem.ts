import { useSetRecoilState } from "recoil"
import { IItem } from "../../interfaces/IItem"
import { listaDeProdutosState } from "../atom"

const useAdicionarItem = () => {
    const setListaDeItens = useSetRecoilState<IItem[]>(listaDeProdutosState)

    return (evento: IItem) => {
        return setListaDeItens(listaAntiga => [...listaAntiga, evento])
    } 
}

export default useAdicionarItem