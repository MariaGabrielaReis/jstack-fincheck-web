<div align="center"> <img src="https://github.com/MariaGabrielaReis/jstack-fincheck-api/assets/69374340/e2aca505-b920-449c-9f30-b6f840761096" /> </div>

Frontend para o projeto Fincheck, um app para gerenciamento de finanças pessoais! 💸 <br>
**Aplicação construída em um evento do JStack** :fire:

> :hammer_and_wrench: Tecnologias e ferramentas: **TypeScript, Vite, React, Tailwindcss, Axios**

## :gear: Como rodar

Com o [Node](https://nodejs.org/en/), [Yarn](https://yarnpkg.com/) e [Git](https://git-scm.com/) instalados, siga o tutorial abaixo:

<details>
 <summary>Para iniciar o <b>servidor</b>:</summary>
 <br>

```bash
# Clone esse repositório
$ git clone https://github.com/MariaGabrielaReis/jstack-fincheck-api.git

# Instale as dependências do projeto, assim como suas tipagens
$ yarn
```

Antes de rodar o projeto, crie o arquivo `.env` (na raíz do projeto) com as seguintes variáveis:

```bash
# DATABASE
DATABASE_URL="postgresql://<USER>:<PASSWORD>@localhost:5432/fincheck?schema=public"
JWT_SECRET=
```

Agora execute a aplicação com o comando abaixo, assim o servidor inciará na porta:3333:

```bash
# Execute a aplicação
$ yarn dev
```

</details>

<details>
 <summary>Para iniciar <b>este projeto</b>:</summary>
 <br>

```bash
# Clone esse repositório
$ git clone https://github.com/MariaGabrielaReis/jstack-fincheck-web.git

# Instale as dependências do projeto, assim como suas tipagens
$ yarn
```

Antes de rodar o projeto, crie o arquivo `.env` (na raíz do projeto) com as seguintes variáveis:

```bash
# URL do servidor (será usada como "baseURL" pelo Axios)
VITE_API_URL=
```

Agora execute a aplicação com o comando abaixo, assim o site inciará na porta:5173:

```bash
# Execute a aplicação
$ yarn dev
```

</details>

<br>

> Desmontração em breve...

[![image](https://img.shields.io/badge/✨%20Maria%20Gabriela%20Reis,%202023-LinkedIn-009973?style=flat-square)](https://www.linkedin.com/in/mariagabrielareis/)
