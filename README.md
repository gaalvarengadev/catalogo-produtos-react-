# Catálogo de Produtos (React + Vite)

Exercício do módulo 17: aplicação React que exibe um catálogo de produtos, com componentes reutilizáveis, props, state, formulário controlado e `useEffect`.

## Como rodar

```bash
npm install
npm run dev
```

## Estrutura

```
src/
├── components/   # ProdutoCard e FormProduto (com seus CSS)
├── pages/        # CatalogoPage: estado, carregamento e listagem
├── data/         # produtos mockados
├── assets/       # imagens dos produtos
├── App.jsx
└── main.jsx
```

## Conceitos aplicados

- **Props**: `ProdutoCard` recebe nome, preço, imagem e descrição.
- **State**: a lista de produtos fica em `useState` e é renderizada com `.map()`.
- **useEffect**: simula o carregamento inicial com `setTimeout` (com `clearTimeout` no cleanup).
- **Formulário controlado**: campos nome, preço e descrição são obrigatórios e validados antes de cadastrar.
