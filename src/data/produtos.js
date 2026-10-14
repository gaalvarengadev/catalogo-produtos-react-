import notebook from '../assets/produtos/notebook.svg'
import fone from '../assets/produtos/fone.svg'
import mochila from '../assets/produtos/mochila.svg'
import caneca from '../assets/produtos/caneca.svg'

// Dados mockados: simulam a resposta de uma API
export const produtosMock = [
  {
    id: 1,
    nome: 'Notebook Ultrafino',
    preco: 4299.9,
    imagem: notebook,
    descricao: 'Tela de 14 polegadas, 16 GB de memória e bateria para o dia todo.',
  },
  {
    id: 2,
    nome: 'Fone sem fio',
    preco: 349.0,
    imagem: fone,
    descricao: 'Cancelamento de ruído ativo e até 30 horas de autonomia.',
  },
  {
    id: 3,
    nome: 'Mochila Urbana',
    preco: 189.5,
    imagem: mochila,
    descricao: 'Compartimento acolchoado para notebook e bolso externo com zíper.',
  },
  {
    id: 4,
    nome: 'Caneca Térmica',
    preco: 59.9,
    imagem: caneca,
    descricao: 'Aço inoxidável que mantém a bebida quente por até 6 horas.',
  },
]
