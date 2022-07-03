import { useSetRecoilState } from 'recoil';
import { IBusca } from '../../../interfaces/IBusca';
import { buscaState } from '../../../state/atom';
import styles from './Buscador.module.scss';

export const Buscador: React.FC= () => {
    const setBusca = useSetRecoilState<IBusca>(buscaState)

    const filtro: IBusca = {} ;
    
    console.log(filtro.busca);
    setBusca(filtro)

    
    
    return (
        <div>
            <label htmlFor="search"></label>
            <input 
                className={styles.busca} 
                title="search" 
                type="text" 
                placeholder="Buscar..."
            />
        </div>
    )
}