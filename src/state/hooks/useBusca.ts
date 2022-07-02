
import { useRecoilState, useSetRecoilState } from "recoil"
import { IBusca } from "../../interfaces/IBusca"
import { buscaState } from "../atom"

export const useBusca = () => {

    const setBusca = useSetRecoilState<IBusca>(buscaState)
    
    return( busca: IBusca) => {
        return setBusca((busca))
    }
}