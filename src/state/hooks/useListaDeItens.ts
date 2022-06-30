import { useRecoilValue } from "recoil";
import { listaDeProdutosState } from "../atom";

const useListaDeItens = () => {
    return useRecoilValue(listaDeProdutosState)
}

export default useListaDeItens