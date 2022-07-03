import styles from './Sobre.module.scss'

export default function Sobre() {
    return (
        <section className={styles.container}>
            <h1 className={styles.titulo}>Sobre</h1>
            <h2 className={styles.subtitulo}>Aplicativo gerenciador de arquivos</h2>
            <p className={styles.paragrafo}>Moderno ecompacto, este aplicativo permite que você possa gerenciar seus produtos</p>
            <br />
            <h2 className={styles.subtitulo}>Vantagens</h2>
            <ul className={styles.lista}>
                <li className={styles.lista__item}>Crie e edite itens</li>
                <li className={styles.lista__item}>Pesquise seus produtos</li>
                <li className={styles.lista__item}>Fácil e moderno</li>
            
            </ul>
        </section>
    )
}