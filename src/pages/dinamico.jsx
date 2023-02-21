import Layout from "../components/Layout"

export async function getServerSideProps(){
  const res = await fetch('https://api.adviceslip.com/advice')
  const data = await res.json()

  return(
    {
      props: {
        content: data.slip.advice
      }
    }
  )
}

export default function Estatico(props){
  return(
    <Layout titulo="Conteudo Estatico">
      <div>
        {props.content}
      </div>
    </Layout>
  )
}