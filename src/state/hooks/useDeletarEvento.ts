import { useSetRecoilState } from "recoil"
import { IItem } from "../../interfaces/IItem"
import { listaDeProdutosState } from "../atom"

const useDeletarItem = () => {
    
    const setListaDeItens = useSetRecoilState<IItem[]>(listaDeProdutosState)
    
    return (item: IItem) => {
        return setListaDeItens((listaAntiga) => [
            ...listaAntiga.filter(evt => item.id !== evt.id)
        ])
    }
}

export default useDeletarItem;