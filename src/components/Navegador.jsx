import Link from "next/link"
import style from '../styles/Navegador.module.scss'

export default function Navegador(props) {
  return(
    <div className={style.navegador} style={{
      backgroundColor: props.cor ?? 'dodgerblue'
    }}>
        <Link href={props.destino}>
      {props.texto}

    </Link>
      </div>
  )
}