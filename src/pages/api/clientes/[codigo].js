export default function handler(req, res){
  const codigo = req.query.codigo
  res.status(200).json({
    id: codigo,
    nome: `joão ${codigo}`,
    email: `juaum${codigo}@gmaker.com.br`
  })
}