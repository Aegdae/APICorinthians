# API do Corinthians

Bem-vindo à API do Corinthians! Este projeto fornece dados sobre o elenco atual, elenco de 2024, e informações separadas por posições, como atacantes, meias, defensores e goleiros.

## 📝 Funcionalidades

- **Elenco Atual**: Listagem completa do elenco atual do Corinthians.
- **Elenco 2024**: Dados sobre os jogadores do elenco de 2024.
- **Divisão por posições**:
  - Atacantes
  - Meias
  - Defensores
  - Goleiros

## 🚀 Tecnologias Utilizadas

- **Node.js**: Ambiente de execução para JavaScript.
- **Express.js**: Framework para criação de APIs rápidas e minimalistas.
- **JavaScript ES6+**: Para código mais moderno e legível.

## 📂 Estrutura do Projeto
```plaintext
APICorinthinas/
├── node_modules/
├── routes/
│    ├── atacantes.js 
│    ├── defensores.js 
│    ├── goleiros.js 
│    ├── meias.js 
│    ├── elenco.js 
│    └── elenco2024.js 
├── app.js
├── package.json
└── package-lock.json
```


- **`/data`**: Contém os arquivos de dados do elenco e suas divisões por posições.
- **`app.js`**: Arquivo principal que inicializa o servidor e define as rotas.

## 📖 Como Usar

### 1. Clone o repositório
```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
```

### 2. Instale as dependências
Certifique-se de ter o Node.js instalado. Em seguida, execute:
```bash
npm install
```

### 3. Inicie o servidor
```bash
node app.js
```



### 4. Teste os Endpoints

Para testar os endpoints da API, você pode usar ferramentas como **Postman**, **Insomnia**, ou simplesmente abrir no navegador. Aqui estão os endpoints disponíveis:

#### **GET /**  
Retorna o elenco atual do Corinthians.  
- **Exemplo de Resposta**:
  ```json
  [
    {
      "nome": "Jogador 1",
      "idade": "32 anos",
      "jogos": 10,
      "gols": 2,
      "assistencias": 3,
    },
    {
      "nome": "Jogador 2",
      "idade": "27 anos",
      "jogos": 20,
      "gols": 0,
      "assistencias": 2,
    }
  ]

### **GET /2024 **
Retorna o elenco e os numeros de 2024.

### **GET /atacantes **
Retorna os atacantes do elenco atual.

### **GET /meias **
Retorna os atacantes do elenco atual.

### **GET /defensores **
Retorna os atacantes do elenco atual.

### **GET /goleiros **
Retorna os goleiros do elenco atual.

---

## 📝 Licença

Este projeto está licenciado sob a [LICENSE](LICENSE).

---

### 💬 Contato

Se tiver dúvidas ou sugestões, entre em contato:
- **Email**: jonnathasg@gmail.com
- **GitHub**: [Aegdae](https://github.com/Aegdae)
