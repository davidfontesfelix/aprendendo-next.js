import Layout from "../components/Layout"

export default function Jsx() {
    const a = 6
    const b = 3
    console.log(a * b)
    return (
        <Layout>
        <div>
            <h1>JSX é um conceito central.</h1>
            {/* const a = 1
            const b = 2
            console.log(a * b) isso não funciona */}  
            { a * b}
            {" muito legal".toUpperCase()}
        </div>
        </Layout>
    )
}