import styles from '../styles/Estiloso.module.scss'
import Link from 'next/link'
import Layout from '../components/Layout'


export default function Estiloso() {
    return(
        <Layout titulo="Exemplo de CSS Modularizado.">
            <div className={styles.roxo}>
                <h1>Estilo usando Modulos</h1>
            </div>
        </Layout>
    )
}