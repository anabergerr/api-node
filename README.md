# 🚀 Microserviços de Cadastro e Obtenção de Usuários

Este é um projeto simples que demonstra a implementação de dois microserviços em Node.js usando o Express. Um microserviço é responsável por cadastrar usuários, enquanto o outro microserviço é responsável por obter a lista de usuários.

## 🏃‍♂️ Como Executar

### 1. Instale as Dependências

Em cada diretório (`nodejs-api-users` e `nodejs-api-getusers`), execute o seguinte comando para instalar as dependências:

```bash
npm install
```

## 2. Inicie os Microserviços

Microserviço de Cadastro de Usuários

```bash
cd nodejs-api-users
node users.js
```

O servidor estará disponível em `http://localhost:3001`.

Microserviço de Obtenção de Usuários

```bash
cd nodejs-api-getusers
node getusers.js
```

O servidor estará disponível em `http://localhost:3002`.

## 🛠️ Detalhes da Implementação

`nodejs-api-users`: Microserviço de cadastro de usuários.
`nodejs-api-getusers`: Microserviço de obtenção de usuários.

O Axios foi utilizado para permitir a comunicação entre os dois microserviços, garantindo que o array de usuários seja atualizado em ambos os lados.
