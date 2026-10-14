import { useState } from 'react'
import './FormProduto.css'

const estadoInicial = { nome: '', preco: '', descricao: '', imagem: '' }

function FormProduto({ onCadastrar }) {
  const [valores, setValores] = useState(estadoInicial)
  const [erros, setErros] = useState({})

  const handleChange = (evento) => {
    const { name, value } = evento.target
    setValores((anterior) => ({ ...anterior, [name]: value }))
    setErros((anterior) => ({ ...anterior, [name]: undefined }))
  }

  const validar = () => {
    const novosErros = {}

    if (!valores.nome.trim()) novosErros.nome = 'Informe o nome do produto.'

    const precoNumerico = Number(valores.preco)
    if (!valores.preco.trim()) {
      novosErros.preco = 'Informe o preço.'
    } else if (Number.isNaN(precoNumerico) || precoNumerico <= 0) {
      novosErros.preco = 'Informe um preço válido maior que zero.'
    }

    if (!valores.descricao.trim()) novosErros.descricao = 'Informe a descrição.'

    return novosErros
  }

  const handleSubmit = (evento) => {
    evento.preventDefault()

    const novosErros = validar()
    setErros(novosErros)
    if (Object.keys(novosErros).length > 0) return

    onCadastrar({
      nome: valores.nome.trim(),
      preco: Number(valores.preco),
      descricao: valores.descricao.trim(),
      imagem: valores.imagem.trim(),
    })
    setValores(estadoInicial)
    setErros({})
  }

  return (
    <form className="form-produto" onSubmit={handleSubmit} noValidate>
      <h2 className="form-produto__titulo">Cadastrar produto</h2>

      <div className="form-produto__campo">
        <label htmlFor="nome">Nome *</label>
        <input
          id="nome"
          name="nome"
          type="text"
          value={valores.nome}
          onChange={handleChange}
        />
        {erros.nome && <span className="form-produto__erro">{erros.nome}</span>}
      </div>

      <div className="form-produto__campo">
        <label htmlFor="preco">Preço (R$) *</label>
        <input
          id="preco"
          name="preco"
          type="number"
          step="0.01"
          min="0"
          value={valores.preco}
          onChange={handleChange}
        />
        {erros.preco && <span className="form-produto__erro">{erros.preco}</span>}
      </div>

      <div className="form-produto__campo">
        <label htmlFor="descricao">Descrição *</label>
        <textarea
          id="descricao"
          name="descricao"
          rows="3"
          value={valores.descricao}
          onChange={handleChange}
        />
        {erros.descricao && (
          <span className="form-produto__erro">{erros.descricao}</span>
        )}
      </div>

      <div className="form-produto__campo">
        <label htmlFor="imagem">URL da imagem (opcional)</label>
        <input
          id="imagem"
          name="imagem"
          type="url"
          value={valores.imagem}
          onChange={handleChange}
        />
      </div>

      <button type="submit" className="form-produto__botao">
        Adicionar produto
      </button>
    </form>
  )
}

export default FormProduto
