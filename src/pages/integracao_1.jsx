import { useState } from "react"
import Layout from "../components/Layout"

export default function Integracao(){
  const [code, setCode] = useState(1)
  const [client, setClient] = useState({})


  
  
  async function getClient(id){
    const resp = await fetch(`http://localhost:3000/api/clientes/${id}`)
    const dados = await resp.json()
    setClient(dados)
  }

  return(
    <Layout>
    <div>
      <input type="number" value={code} onChange={e => setCode(e.target.value)} />
      <button onClick={() => getClient(code)}>Obter Informações</button>
      <ul>
        <li>Código: {client.id}</li>
        <li>Nome: {client.nome}</li>
        <li>Email: {client.email} </li>
      </ul>
    </div>
    </Layout>
  )
}