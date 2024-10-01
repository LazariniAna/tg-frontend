This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Test jest

```bash
# unit tests
$ npm run test

# watch tests
$ npm run test:watch

```
## Variáveis de Ambiente (Environment Vars)
Para rodar localmente, é necessário apenas preencher o arquivo .env, conforme o modelo disponível em .env.example.

### Criação de Novas Variáveis
Caso seja necessário criar uma nova variável de ambiente utilizada na aplicação, alguns procedimentos são necessários para garantir a integridade do código nos ambientes de desenvolvimento e produção, além de facilitar a configuração de um projeto local ou diretamente em um servidor:

* tualizar o .env.example: Sempre atualize este arquivo para garantir a comunicação clara sobre quais variáveis estão sendo utilizadas na aplicação.
* Atualizar os task definitions no Amazon ECS: No momento do build da aplicação, os valores das variáveis serão resgatados através das variáveis definidas no task definition. Por isso, é necessário ajustar os ambientes para que forneçam os valores corretos.
* Atualizar o Dockerfile: Para que as variáveis estejam disponíveis no momento da criação da imagem que será submetida para os ambientes de desenvolvimento e produção, nas sessões "Set build-time environment variables" e "Set runtime environment variables" adicione as variáveis conforme está sendo feito atualmente.


## Design e Arquitetura
Optamos por utilizar a nova arquitetura padrão do NextJS (App) (https://nextjs.org/docs), com estilização formatada com tailwind (https://tailwindcss.com/docs/installation) que pode trazer uma estilização simplificada. O diretorio principal onde será feito as crtiações das telas é src/app contendo um layout padrao que aparecerá em todas as paginas, a herança desse layout é feito de forma automática.

Para facilitar a estrutura dos compoenentes foi criado uma pasta src/components para armazenar todos as pequenas partes do sistema que podem ser utilizadas em mais de um lugar visando o reaproveitamento de código.

Além disso, para controle de estados globais que são acessíveis em todas as partes/telas do sistema, está sendo utilizado para isso o redux localizado em src/redux, onde é possível criar um estado inicial e funções de tratamento desse estado.

Para conectar com o backend foi criado src/server que fornece essa comunicação, utilizando como biblioteca o axios;

Caso queira criar um novo tema padrão no sistema, utilize o theme.ts na raiz do projeto para criar uma constante com os valores desejados, logo após adicione o tema criado em tailwind.config.ts para poder ser utilizado no sistema. 


Em caso de dúvidas, consulte as documentações.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
