import { useNavigate } from "react-router-dom"
import { useSetRecoilState } from "recoil"
import { IItem } from "../../interfaces/IItem"
import { listaDeProdutosState } from "../atom"

const useDeletarItem = () => {
    const navigate = useNavigate()
    const setListaDeItens = useSetRecoilState<IItem[]>(listaDeProdutosState)
    
    return (item: IItem) => {
        navigate(-1)
        return setListaDeItens((listaAntiga) => [
            ...listaAntiga.filter(evt => item.id !== evt.id)
        ])
    }
}

export default useDeletarItem;