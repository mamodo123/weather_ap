
# Weather Expo

  

Esse é um app simples para mostrar informações sobre o clima, feito com **Expo** e integração com uma API de clima. O foco do projeto foi manter as coisas simples, mas bem organizadas, explorando boas práticas em **React Native**.

  

---

  

## Bibliotecas usadas e por quê

  

-  **axios**: Para fazer requisições à API de clima.

-  **expo**: Facilita o desenvolvimento no React Native, desde o setup até a execução.

-  **expo-linking**: Gerencia links para navegação profunda no app.

-  **expo-location**: Para pegar a localização do usuário (com permissão, claro!).

-  **expo-router**: Navegação estilo web com rotas.

-  **react** e **react-native**: A base do app.  

### Dependências de desenvolvimento

  

-  **@babel/core**: Para converter o código moderno do JavaScript.

-  **@types/react**: Para dar tipagem ao React usando TypeScript.

-  **typescript**: Adiciona tipagem estática ao código.

  

---

  

## Observação importante

  

Infelizmente, não consegui testar o app em dispositivos Apple porque não tenho um disponível.

  

---

  

## Como rodar o projeto

  

1.  **Requisitos**:

- Node.js instalado.

- Expo CLI configurado.

- Um emulador Android/iOS ou um dispositivo físico com o app **Expo Go**.

  

2.  **Passo a passo**:

  

```bash

# Clone o projeto

git clone <URL_DO_REPOSITÓRIO>

  

# Vá até o diretório do app

cd weather-expo

  

# Instale as dependências

npm install

  

# Rode o app

npx expo start

```

3.  **Rodar em plataformas específicas**:

Dentro do console do Expo é possível escolher onde irá rodar a aplicação. Para rodar no android, basta aperta a tecla A.

  

---

  

## Sobre o desafio

  

Eu sou mais experiente com **Flutter**, mas já mexi com React Native em outros projetos. Fazer esse app foi uma experiência bacana, principalmente porque comecei sem usar o **Expo** e depois migrei para ele, percebendo o quanto facilita o desenvolvimento.

  

Tentei organizar o app no estilo do que faço no Flutter:

- Usei um **MVC simples**.

- Separei os componentes em uma pasta específica.

- Implementei um gerenciamento de estado global.

  

**Funcionalidades legais do app**:

- Ele trata erros de maneira simples:

- Se falhar ao pegar a localização do usuário, aparece uma mensagem na tela.

- Se der erro na API, o app avisa também.

- O plano de fundo muda dinamicamente com base no clima. Criei cinco cenários diferentes, usando imagens que gerei com o ChatGPT.

  

**O que poderia melhorar?**

- Adicionar uma alternativa para pegar a localização pelo **IP** do usuário (a WeatherAPI suporta isso).

- Deixar o CSS mais organizado. Foi desafiador entender como separar bem os estilos dos componentes e escolher o padrão certo.

  

---

  

## Próximos passos

  

- Adicionar suporte a localização por IP como alternativa.

- Melhorar o design e separar os estilos de forma mais organizada.

- Expandir os cenários de plano de fundo para climas mais específicos.

- Testar e otimizar para dispositivos iOS quando possível.

  

---