import { useState } from "react";
import Layout from "../components/Layout";

export default function Estado() {
  const [Number, setNumber] = useState(0) // React hooks

  const incrementar = () => {
    setNumber(Number + 1)
  }
  
  return(
    <Layout titulo="Componente com Estado">
      <span>{Number}</span>
      <button onClick={incrementar}>incrementar</button>
    </Layout>
  )
}