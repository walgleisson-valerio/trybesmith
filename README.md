# TrybeSmith

Este projeto consiste no desenvolvimento de uma API utilizando Typescript de uma loja de itens medievais. 

Nele foi utilizado a arquitetura MSC (*Models*, *Service* e *Controllers* ) para organização do código. Com esta aplicação é possível realizar as operações básicas que se pode fazer em um determinado banco de dados: Criação, Leitura, Atualização e Exclusão (ou `CRUD`, para as pessoas mais íntimas - *Create, Read, Update* e *Delete*).

> ⚠️ Este projeto foi realizado durante o curso de desenvolvimento da [Trybe](https://www.betrybe.com/). Portanto, a configuração inicial, e alguns arquivos necessários para a entrega e avaliação do desempenho da pessoa estudante, foram feitos pela própria escola. O desenvolvimento deste projeto por parte das pessoas estudantes, como eu, foram feitos dentro da pasta `src`. Mas se quiser tirar mais dúvidas, fique a vontade para clicar [aqui](https://github.com/walgleisson-valerio/trybesmith/commits/main) e dá uma olhadinha no histórico de commits 😉.
> 

### 🛠️ Tecnologias Utilizadas

- [Typescript](https://www.typescriptlang.org/pt/docs/)
- [Node.js](https://nodejs.org/pt-br/docs/)
- [MySql](https://dev.mysql.com/doc/)
- [Express](https://expressjs.com/pt-br/)
- [Docker](https://docs.docker.com/)
- [JWT](https://jwt.io/introduction)

[⬆️](#trybesmith)

### ⚡ Como Executar

- Para executar esse projeto, você deve clonar esse repositório. Para isso, execute o comando abaixo:

```bash
git clone repositório
```

- Entre na pasta criada

```sh
cd repositório
```
<details id=bd>
<summary><strong>⚠️ Banco de Dados MySQL</strong></summary>

⚠️ Para rodar essa aplicação você precisar ter o Mysql instalado e rodando em sua máquina.

- Use o comando abaixo, substituindo onde necessário pelas suas credencias do Mysql.
    
    ```sh
    mysql -r <your-username> -p
    ```
    
- Crie o banco, as tabelas e popule-as copiando o script no terminal. Esse script também está disponível no arquivo `trybesmith.sql`.
    
    ```sql
    DROP SCHEMA IF EXISTS Trybesmith;
    CREATE SCHEMA IF NOT EXISTS Trybesmith;
    
    CREATE TABLE Trybesmith.Users (
      id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
      username TEXT NOT NULL,
      classe TEXT NOT NULL,
      level INTEGER NOT NULL,
      password TEXT NOT NULL
    );
    
    CREATE TABLE Trybesmith.Orders (
      id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
      userId INTEGER,
      FOREIGN KEY (userId) REFERENCES Trybesmith.Users (id)
    );
    
    CREATE TABLE Trybesmith.Products (
      id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
      name TEXT NOT NULL,
      amount TEXT NOT NULL,
      orderId INTEGER,
      FOREIGN KEY (orderId) REFERENCES Trybesmith.Orders (id)
    );
    
    INSERT INTO
      Trybesmith.Users (username, classe, level, password)
    VALUES
      ("reigal", "Guerreiro", 10, "1dragaonoceu");
    
    INSERT INTO
      Trybesmith.Users (username, classe, level, password)
    VALUES
      ("vyrion", "Inventor", 8, "pagandodividas");
    
    INSERT INTO
      Trybesmith.Users (username, classe, level, password)
    VALUES
      ("yraa", "Ladina", 5, "valarmorg");
    
    INSERT INTO
      Trybesmith.Orders (userId)
    VALUES
      (1);
    
    INSERT INTO
      Trybesmith.Orders (userId)
    VALUES
      (3);
    
    INSERT INTO
      Trybesmith.Orders (userId)
    VALUES
      (2);
    
    INSERT INTO
      Trybesmith.Products (name, amount)
    VALUES
      ("Espada curta", "10 peças de ouro");
    
    INSERT INTO
      Trybesmith.Products (name, amount, orderId)
    VALUES
      (
        "Escudo desnecessariamente grande",
        "20 peças de ouro",
        1
      );
    
    INSERT INTO
      Trybesmith.Products (name, amount, orderId)
    VALUES
      ("Adaga de Aço Valírico", "1 peça de ouro", 2);
    
    INSERT INTO
      Trybesmith.Products (name, amount, orderId)
    VALUES
      ("Colar de fogo", "1 peça de ouro", 2);
    
    INSERT INTO
      Trybesmith.Products (name, amount, orderId)
    VALUES
      ("Engenhoca aleatória", "15 peças de ouro", 3);
    ```
    
    > 💡 Você pode optar por usar o workbench ao invés do terminal.
    > 

⚠️ Além disso, será necessário a criação do arquivo `.env` na pasta do backend, para adicionar as informações necessárias sobre o banco de dados, conforme o arquivo `.env.exemplo`

[⬆️](#trybesmith)
</details>

<details>
<summary><strong>💻 Rodando Localmente</strong></summary>

- Instale as dependências, caso existam, com:
    
    ```sh
    npm install
    ```
    
- Execute o comando para iniciar a aplicação
    
    ```sh
    npm start
    ```
    
- Dentro do arquivo `package.json`existem alguns scripts úteis para desenvolvimento. Não se esqueça de dar um conferida nele caso se interesse 😉.

[⬆️](#trybesmith)
</details>

<details>
<summary><strong>🐳 Rodando com Docker</strong></summary>

- ⚠️ Importante ⚠️
    
    ⚠️ Seu **docker-compose** precisa estar na versão **1.29** ou **superior**. [Veja aqui](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-compose-on-ubuntu-20-04-pt) ou [na documentação](https://docs.docker.com/compose/install/) como instalá-lo. No primeiro artigo, você pode substituir onde está com `1.26.0` por `1.29.2`.
    
- Lembre-se de parar o `mysql` se estiver usando localmente na porta padrão (`3306`), ou adapte, caso queria fazer uso da aplicação em containers.
- Rode os serviços do node e mysql com o comando:
    
    ```sh
    docker-compose up -d
    ```
    

> Esses serviços irão inicializar um container chamado `trybesmith` e outro chamado `trybesmith_db`.
> 
- Entre no terminal do container`trybesmith_db` via CLI ou abra-o no VS Code com o comando abaixo. E siga o passo a passo descrito [aqui](#bd) para configuração do banco de dados.
    
    ```sh
    docker exec -it trybesmith_db bash
    ```
    
- A partir daqui você pode rodar o container `trybesmith`, responsável pela execução do servidor node, via CLI ou abri-lo no VS Code.
    
    ```sh
    docker exec -it trybesmith bash
    ```
    
- Ele te dará acesso ao terminal interativo do container criado pelo compose, que está rodando em segundo plano.
- Instale as dependências, caso existam, com:
    
    ```sh
    npm install
    ```
    
- Execute o comando para iniciar a aplicação
    
    ```sh
    npm start
    ```
    
- ⚠️ Atenção ⚠️ Caso opte por utilizar o Docker, **TODOS** os comandos disponíveis no `package.json`devem ser executados **DENTRO** do container, ou seja, no terminal que aparece após a execução do comando `docker exec`citado acima.

[⬆️](#trybesmith)
</details>

---

Desenvolvido por [Walgleisson Valerio](https://github.com/walgleisson-valerio)
