import { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { IBusca } from '../../../interfaces/IBusca';
import { buscaState } from '../../../state/atom';
import styles from './Buscador.module.scss';

export const Buscador: React.FC= () => {
    const buscador = useSetRecoilState<IBusca>(buscaState)
    const [busca, setBusca] = useState("")
    const filtro: IBusca = {} ;


    function Busca(busca: string){
        
    }

    
    
    return (
        <div>
            <label htmlFor="search"></label>
            <input 
                className={styles.busca} 
                title="search" 
                type="text" 
                placeholder="Buscar..."
                onChange={(event) => {setBusca(event?.target.value)}}
            />
        </div>
    )
}