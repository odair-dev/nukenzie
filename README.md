# Nu Kenzie

Nu Kenzie é uma aplicação web desenvolvida em React para controle financeiro pessoal. O usuário pode adicionar lançamentos de entrada e saída, visualizar o saldo total e gerenciar seus lançamentos de forma simples e intuitiva.

## Funcionalidades
- Adicionar lançamentos (entrada ou saída) com descrição e valor
- Listar todos os lançamentos cadastrados
- Excluir lançamentos
- Visualizar o saldo total atualizado

## Tecnologias Utilizadas
- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [uuid](https://www.npmjs.com/package/uuid) para geração de IDs únicos
- CSS modularizado

## Instalação
1. Clone o repositório:
   ```bash
   git clone https://github.com/odair-dev/nukenzie.git
   ```
2. Acesse a pasta do projeto:
   ```bash
   cd nukenzie
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```

## Uso
Para rodar o projeto em modo de desenvolvimento:
```bash
npm run dev
```
Acesse `http://localhost:5173` no navegador para visualizar a aplicação.

## Estrutura de Pastas
- `src/` - Código-fonte principal
  - `assets/components/` - Componentes reutilizáveis (Formulário, Card, Header, Total)
  - `assets/styles/` - Estilos CSS
  - `img/` - Imagens


## Licença
Este projeto é apenas para fins educacionais.
