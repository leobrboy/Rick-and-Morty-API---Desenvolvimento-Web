# 🛸 Portal Interdimensional — Rick and Morty

Uma aplicação web desenvolvida em **HTML, CSS e JavaScript puro** para explorar personagens do universo de *Rick and Morty* através da [Rick and Morty API](https://rickandmortyapi.com/).

O projeto foi desenvolvido como uma aplicação acadêmica com foco no consumo de uma API externa, manipulação do DOM, filtros, paginação e criação dinâmica de componentes utilizando JavaScript.

---

## 🚀 Demonstração

> 🌌 Explore o multiverso e encontre seus personagens favoritos de *Rick and Morty*.

**Funcionalidades disponíveis:**

- 🔎 Busca de personagens por nome
- 🟢 Filtro por status
- 📄 Paginação dos resultados
- ❤️ Sistema visual de favoritos
- 🖼️ Carregamento das imagens dos personagens diretamente da API
- ⏳ Indicador de carregamento
- ⚠️ Tratamento de erros da API
- 📭 Mensagem quando nenhum personagem é encontrado
- 📱 Interface responsiva para dispositivos móveis
- 🎨 Interface inspirada no universo de *Rick and Morty*

---

## 🧪 Tecnologias utilizadas

| Tecnologia | Utilização |
|---|---|
| **HTML5** | Estrutura da aplicação |
| **CSS3** | Estilização, layout e responsividade |
| **JavaScript** | Lógica da aplicação e manipulação do DOM |
| **Fetch API** | Comunicação com a API |
| **Rick and Morty API** | Fonte dos dados dos personagens |
| **Google Fonts** | Tipografia da interface |

O projeto não utiliza frameworks ou bibliotecas JavaScript externas.

---

## 🔌 API

Os dados dos personagens são obtidos através da:

**Rick and Morty API**

https://rickandmortyapi.com/

Endpoint utilizado:

```text
https://rickandmortyapi.com/api/character
```

A aplicação utiliza parâmetros de consulta para realizar filtros e paginação, como:

```text
?page=1
&name=rick
&status=alive
```

---

## ✨ Funcionalidades

### 🔎 Busca por personagem

É possível pesquisar personagens pelo nome utilizando o campo de busca.

Exemplo:

```text
Rick
```

A aplicação envia a consulta para a API e retorna os personagens correspondentes.

### 🧬 Filtro por status

Os personagens podem ser filtrados de acordo com seu status:

- 🟢 Vivo
- 🔴 Morto
- ⚪ Desconhecido

### 📄 Paginação

A API fornece os resultados divididos em páginas.

A aplicação possui controles para:

- Página anterior
- Próxima página
- Indicador da página atual
- Bloqueio automático dos botões quando necessário

### ❤️ Favoritos

Cada personagem possui um botão de favorito.

O botão alterna visualmente entre:

```text
♡
```

e

```text
♥
```

> Atualmente, o sistema de favoritos possui apenas comportamento visual e não utiliza persistência de dados.

### ⏳ Estados da aplicação

A aplicação também trata diferentes estados durante a comunicação com a API:

**Carregamento**

```text
Carregando personagens...
```

**Nenhum resultado**

```text
Nenhum personagem encontrado.
```

**Erro**

```text
Não foi possível carregar os personagens agora. Tente de novo.
```

---

## 📁 Estrutura do projeto

```text
rick-and-morty-app/
│
├── index.html
├── style.css
└── script.js
```

### `index.html`

Responsável pela estrutura da aplicação:

- Cabeçalho
- Apresentação da série
- Formulário de filtros
- Área dos personagens
- Paginação
- Rodapé

Os cards dos personagens são criados dinamicamente pelo JavaScript.

### `style.css`

Responsável pela interface visual da aplicação.

Inclui:

- Tema inspirado em *Rick and Morty*
- Grid responsivo
- Cards de personagens
- Estados visuais
- Botões
- Formulários
- Efeitos de hover
- Responsividade para dispositivos móveis

### `script.js`

Contém toda a lógica da aplicação.

Entre suas responsabilidades estão:

- Consumo da API
- Construção das URLs
- Busca dos personagens
- Aplicação dos filtros
- Paginação
- Criação dinâmica dos cards
- Sistema visual de favoritos
- Tratamento de erros
- Atualização dos estados da interface

---

## 🖥️ Como executar

Como o projeto utiliza apenas HTML, CSS e JavaScript, não é necessário instalar dependências.

### 1. Clone o repositório

```bash
git clone https://github.com/SEU-USUARIO/rick-and-morty-app.git
```

### 2. Entre na pasta

```bash
cd rick-and-morty-app
```

### 3. Execute o projeto

Você pode abrir o arquivo:

```text
index.html
```

diretamente no navegador.

Para uma experiência de desenvolvimento melhor, também é possível utilizar uma extensão como **Live Server** no VS Code.

---

## 🎨 Interface

A interface utiliza uma identidade visual inspirada no universo de *Rick and Morty*, combinando:

- Fundo escuro com temática espacial
- Verde inspirado nos portais dimensionais
- Amarelo para elementos de destaque
- Cards com efeito de elevação
- Tipografia `Bangers` para títulos
- Tipografia `Rubik` para textos

---

## 🧠 Conceitos praticados

Este projeto foi desenvolvido com o objetivo de praticar conceitos fundamentais do desenvolvimento web front-end, incluindo:

- Estruturação semântica com HTML5
- CSS Grid e Flexbox
- Design responsivo
- Manipulação do DOM
- Eventos em JavaScript
- Funções assíncronas
- `async/await`
- `fetch()`
- Consumo de API REST
- Tratamento de erros
- Parâmetros de URL
- Renderização dinâmica de elementos
- Paginação
- Estados de interface

---

## 📚 Projeto acadêmico

Projeto desenvolvido para fins acadêmicos e de aprendizado, utilizando tecnologias fundamentais do desenvolvimento web.

O objetivo principal é demonstrar a capacidade de construir uma aplicação front-end capaz de consumir dados externos e apresentá-los de maneira organizada e interativa.

---

## ⚠️ Observações

- A aplicação depende da disponibilidade da **Rick and Morty API**.
- Os dados dos personagens não são armazenados localmente.
- O sistema de favoritos é apenas visual e é resetado ao recarregar a página.
- Não existe backend próprio para este projeto.
- Não foram utilizadas frameworks JavaScript.

---

## 👨‍💻 Autor

**Leonardo Ramiro Santos do Nascimento**

Projeto desenvolvido como parte da formação acadêmica em **Engenharia da Computação**.

---

## 📄 Licença

Este projeto foi desenvolvido para fins acadêmicos e educacionais.

Os personagens, imagens e demais elementos relacionados a *Rick and Morty* pertencem aos seus respectivos detentores de direitos.

Os dados utilizados pela aplicação são fornecidos pela **Rick and Morty API**.
