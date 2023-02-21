import Layout from "../../components/Layout"
import { useRouter } from "next/router"

export default function ClienteProCodigo(){
  const router = useRouter()

  return(
    <Layout titulo="Navegação dinâmica">
        <span>Código = {router.query.codigo}</span>
    </Layout>
  )
}
