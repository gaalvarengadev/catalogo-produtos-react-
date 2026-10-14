import './ProdutoCard.css'

const formatarPreco = (valor) =>
  Number(valor).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

function ProdutoCard({ nome, preco, imagem, descricao }) {
  return (
    <article className="produto-card">
      <img
        className="produto-card__imagem"
        src={imagem || '/placeholder.svg'}
        alt={nome}
      />
      <div className="produto-card__corpo">
        <h3 className="produto-card__nome">{nome}</h3>
        <p className="produto-card__descricao">{descricao}</p>
        <p className="produto-card__preco">{formatarPreco(preco)}</p>
      </div>
    </article>
  )
}

export default ProdutoCard
