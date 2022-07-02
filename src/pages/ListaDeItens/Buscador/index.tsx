import { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { IBusca } from '../../../interfaces/IBusca';
import { buscaState } from '../../../state/atom';
import styles from './Buscador.module.scss';

export const Buscador: React.FC= () => {
    const [pesquisa, setPesquisa] = useState('')
    const setBusca = useSetRecoilState<IBusca>(buscaState)

    const filtro: IBusca = {} ;

    if(pesquisa) {
        filtro.busca = pesquisa
    } else {
    }
    setBusca(filtro)

    
    
    return (
        <div>
            <label htmlFor="search"></label>
            <input 
                className={styles.busca} 
                value={pesquisa}
                onChange={(evento) => setPesquisa(evento.target.value)}
                title="search" 
                type="text" 
                placeholder="Buscar..."
            />
        </div>
    )
}