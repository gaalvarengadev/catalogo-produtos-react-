import { useEffect, useState } from 'react'
import ProdutoCard from '../components/ProdutoCard.jsx'
import FormProduto from '../components/FormProduto.jsx'
import { produtosMock } from '../data/produtos.js'
import './CatalogoPage.css'

function CatalogoPage() {
  const [produtos, setProdutos] = useState([])
  const [carregando, setCarregando] = useState(true)

  // Simula o carregamento inicial de uma API
  useEffect(() => {
    const timer = setTimeout(() => {
      setProdutos(produtosMock)
      setCarregando(false)
    }, 1500)

    // Cancela o timer se o componente for desmontado antes do fim
    return () => clearTimeout(timer)
  }, [])

  const adicionarProduto = (dados) => {
    setProdutos((anteriores) => [
      ...anteriores,
      { ...dados, id: Date.now() },
    ])
  }

  return (
    <main className="catalogo">
      <header className="catalogo__cabecalho">
        <h1>Catálogo de produtos</h1>
        <p>{carregando ? 'Carregando...' : `${produtos.length} produto(s) disponível(is)`}</p>
      </header>

      <div className="catalogo__layout">
        <section className="catalogo__lista">
          {carregando ? (
            <p className="catalogo__carregando">Carregando produtos...</p>
          ) : (
            produtos.map((produto) => (
              <ProdutoCard
                key={produto.id}
                nome={produto.nome}
                preco={produto.preco}
                imagem={produto.imagem}
                descricao={produto.descricao}
              />
            ))
          )}
        </section>

        <aside>
          <FormProduto onCadastrar={adicionarProduto} />
        </aside>
      </div>
    </main>
  )
}

export default CatalogoPage
