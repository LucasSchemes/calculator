# ⚛️ Calculadora Simples com React

Uma calculadora funcional e estilosa desenvolvida como um projeto prático para aprimorar habilidades em **React Hooks (`useState`)** e **lógica de aplicação**.

  ## ✨ Funcionalidades

* **Operações Básicas:** Adição (`+`), Subtração (`-`), Multiplicação (`*`), Divisão (`/`).
* **Limpeza Total:** Botão `AC` (All Clear) para resetar o estado.
* **Deletar Caractere:** Botão `DEL` para apagar o último dígito inserido.
* **Sinal:** Botão `+/-` para alternar entre números positivos e negativos.
* **Porcentagem:** Botão `%` para calcular o valor percentual (tanto de um número quanto em relação ao número anterior na operação).
* **Suporte a Números Decimais:** Utilização do ponto `.` para valores não inteiros.
* **Cálculo Contínuo:** Permite encadear operações sem a necessidade de pressionar `=` a cada passo.

## 🛠️ Tecnologias Utilizadas

O projeto foi construído utilizando as seguintes tecnologias:

* **React:** Para a construção da interface de usuário.
* **JavaScript (ES6+):** Para a lógica da calculadora.
* **CSS:** Para o design e layout estiloso (incluindo Grid para os botões).

## 🚀 Como Executar Localmente

Siga os passos abaixo para ter uma cópia do projeto rodando em sua máquina local:

### Pré-requisitos

Você precisará ter o **Node.js** e o **npm** (ou yarn) instalados.

### Instalação

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git](https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git)
    cd SEU_REPOSITORIO
    ```
2.  **Instale as dependências:**
    ```bash
    npm install
    # ou
    # yarn install
    ```
3.  **Inicie o projeto:**
    ```bash
    npm start
    # ou
    # yarn start
    ```

O aplicativo deve abrir automaticamente no seu navegador em `http://localhost:3000`.

## 📂 Estrutura do Projeto

O projeto é composto por dois arquivos principais que implementam toda a funcionalidade e estilo:

| Arquivo | Descrição |
| :--- | :--- |
| `Calculator.jsx` | Componente React principal que contém toda a lógica de estado (`useState`) e as funções de manipulação de botões e cálculo. |
| `Calculator.css` | Arquivo de estilo que define o visual moderno e escuro da calculadora. |

## 💡 Destaques da Implementação

* A lógica central é gerenciada pela função `handleButtonClick`, que direciona as ações para as funções específicas como `compute`, `calculate`, `percentage`, etc.
* O estado da calculadora é controlado por: `number` (o valor atual em exibição), `operator` (a operação selecionada, e.g., '+') e `previousNumber` (o primeiro operando da operação).
* A função `compute` utiliza um `switch` para realizar as diferentes operações aritméticas e inclui uma checagem para divisão por zero.


---

Feito com ❤️ por [Seu Nome/GitHub Username]
