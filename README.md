# Projeto Exemplo

Este é um projeto exemplo que demonstra como configurar e utilizar vários serviços da AWS para hospedar e gerenciar uma aplicação web estática feita com React.js.

## Clonando e Rodando o Projeto Localmente

### Pré-requisitos

- Git
- Node.js
- AWS CLI configurado

### Passo a Passo

1. **Clone o repositório:**

    ```bash
    git clone https://github.com/leopesi/leopesi.git
    ```

2. **Navegue até o diretório do projeto:**

    ```bash
    cd seu-repositorio
    ```

3. **Instale as dependências:**

    ```bash
    npm install
    ```

4. **Inicie o servidor de desenvolvimento:**

    ```bash
    npm start
    ```

    O projeto estará rodando em `http://localhost:3000`.

## Configurando os Serviços da AWS

### AWS Certificate Manager

1. **Solicite um certificado SSL:**

    - Acesse o console do AWS Certificate Manager.
    - Clique em "Request a certificate".
    - Selecione "Request a public certificate" e clique em "Request a certificate".
    - Insira o nome do domínio e clique em "Next".
    - Escolha o método de validação e siga as instruções para validar o domínio.

### Route 53

1. **Configure o domínio no Route 53:**

    - Acesse o console do Route 53.
    - Clique em "Hosted zones" e depois em "Create Hosted Zone".
    - Insira o nome do domínio e clique em "Create".
    - Adicione os registros DNS necessários para apontar para a distribuição CloudFront.

### AWS S3

1. **Crie um bucket no S3:**

    - Acesse o console do S3.
    - Clique em "Create bucket".
    - Dê um nome ao bucket e selecione a região.
    - Deixe as configurações padrão e clique em "Create bucket".

2. **Faça o upload dos arquivos da aplicação para o bucket:**

    - No console do S3, clique no bucket criado.
    - Clique em "Upload" e selecione os arquivos da sua aplicação.

### AWS CodePipeline

1. **Crie um pipeline no CodePipeline:**

    - Acesse o console do CodePipeline.
    - Clique em "Create pipeline".
    - Dê um nome ao pipeline e clique em "Next".
    - Configure a origem do código (por exemplo, GitHub) e clique em "Next".
    - Configure a fase de build usando o AWS CodeBuild e clique em "Next".
    - Configure a fase de deploy para o bucket do S3 e clique em "Next".
    - Revise as configurações e clique em "Create pipeline".

### AWS CodeBuild

1. **Configure um projeto no CodeBuild:**

    - Acesse o console do CodeBuild.
    - Clique em "Create build project".
    - Dê um nome ao projeto e configure a origem do código (por exemplo, GitHub).
    - Configure o ambiente de build (por exemplo, Node.js).
    - Configure as fases de build e post-build conforme necessário.
    - Clique em "Create build project".

## Fluxo de Trabalho da Aplicação

A aplicação foi feita utilizando uma série de tecnologias da AWS. Começando pelo AWS CodePipeline, a aplicação inicia seu ciclo de vida buscando o código no repositório GitHub. Depois, o AWS CodeBuild é acionado para compilar, preparar e gerar os artefatos da aplicação. Uma vez que a construção está completa, os artefatos são armazenados em um bucket do Amazon S3. O Amazon CloudFront é utilizado para criar uma entrega rápida e eficiente do site, que é acessado pelo domínio configurado no Route 53. O CloudFront também é configurado com um certificado SSL gerenciado pelo AWS Certificate Manager, garantindo segurança nas requisições.