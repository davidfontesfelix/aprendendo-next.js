import Navegador from "../components/Navegador"

export default function Inicio() {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            height: '100vh'
        }}>
            <Navegador cor="crimson" destino="/estiloso" texto="Estiloso"/>
            <Navegador destino="/jsx" texto="Jsx"/>
            <Navegador destino="/navegacao" texto="Navegação #01"/>
            <Navegador destino="/cliente/123" texto="Navegação #02" cor="blue"/>
            <Navegador destino="/estado" texto="estado" cor="green"/>
            <Navegador destino="/integracao_1" texto="API" cor="green"/>
            <Navegador destino="/estatico" texto="Conteudo estatico" cor=""/>
            <Navegador destino="/dinamico" texto="Conteudo dinamico" cor=""/>
            
            
        </div>
    )
}