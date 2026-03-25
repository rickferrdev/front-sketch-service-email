## 🚀 Sobre o Projeto
O frontend é uma Single Page Application (SPA) focada em conversão, permitindo que usuários se inscrevam em uma lista de e-mails. Ele possui validação de campos, estados de carregamento/erro e uma interface responsiva com animações fluidas.

---

## 🛠️ Tecnologias Utilizadas
* **Core:** React 19 + TypeScript.
* **Build Tool:** Vite 8.
* **Estilização:** Tailwind CSS 4 (via `@tailwindcss/vite`).
* **Animações:** Motion (Framer Motion).
* **Ícones:** Lucide React.
* **Requisições:** Axios.

---

## 📂 Estrutura de Arquivos Principal
* `src/main.tsx`: Contém a lógica principal do componente `App`, gerenciamento de estado do formulário e chamadas à API.
* `src/index.css`: Importação global do Tailwind CSS.
* `vite.config.ts`: Configuração do ambiente e Proxy reverso para a API.
* `.proxyrc`: Configuração adicional de proxy para facilitar o desenvolvimento.

---

## ⚙️ Configuração do Proxy
Para evitar erros de CORS durante o desenvolvimento, o Vite está configurado para redirecionar chamadas de `/api` para o backend oficial:
* **Target:** `https://sketch-service-email.onrender.com`

---

## 🏃 Como Rodar Localmente

1.  **Instale as dependências:**
    ```bash
    bun install
    ```

2.  **Inicie o servidor de desenvolvimento:**
    ```bash
    bun run dev
    ```
    *O projeto estará disponível em `http://localhost:5173`.*

3.  **Build para produção:**
    ```bash
    bun run build
    ```

---

## 📧 Integração com API
O formulário envia os dados para o endpoint:
`POST /api/v1/subs`

**Corpo da requisição (JSON):**
```json
{
  "email": "usuario@exemplo.com"
}
```

---

## ✨ Funcionalidades Implementadas
* **Feedback Visual:** Lista de vantagens com animação de entrada.
* **Validação:** Campo de e-mail obrigatório com validação nativa de tipo.
* **Tratamento de Erros:** Mensagem de erro caso o servidor esteja indisponível.
* **Estado de Sucesso:** Tela de confirmação após a inscrição bem-sucedida.

---
