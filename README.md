
## Introdução:
Para realizar este exercício, você deve instalar as dependências e configurar o Jest para rodar os testes. Utilize os seguintes comandos:
Instale as dependências:
``` bash
npm install  
```
Para rodar os testes uma única vez:
``` bash
npm run test    
```

Para rodar os testes no modo de observação (watch mode):
Para rodar os testes uma única vez:
``` bash
npm run test:watch    
```

## Descrição:
Este exercício propõe que você desenvolva testes unitários para uma classe de Carrinho de Compras (Cart), implementada em TypeScript. O objetivo é exercitar a utilização de técnicas importantes de teste: criação de mocks, uso de spies e validação de comportamentos esperados de métodos.

Você deve implementar um conjunto de testes que assegurem a funcionalidade correta do carrinho, verificando tanto a adição e remoção de produtos quanto o cálculo do valor total e a limpeza do carrinho. Além disso, será necessário simular uma dependência externa — o NotificationService — e garantir que ele seja chamado adequadamente quando um produto for adicionado.

A atividade também inclui a criação de um spy sobre o método reduce do protótipo de Array, garantindo que a lógica de soma do total seja corretamente acionada durante o teste.

## O que você deve implementar:

1. Testes para adicionar um produto ao carrinho:
    - Validar se o produto foi adicionado corretamente
    - Garantir que o serviço de notificação foi chamado ao adicionar o produto

2. Testes para remover um produto do carrinho:
    - Confirmar que o produto foi removido corretamente após a chamada ao método de remoção

3. Testes para o cálculo do total de itens:
    - Adicionar múltiplos produtos e verificar se o total calculado está correto
    - Criar um spy para garantir que o método reduce foi utilizado no cálculo

4. Testes para limpar o carrinho:
    - Certificar-se de que, ao limpar o carrinho, não restem produtos na lista
    - Para completar a atividade, será necessário criar mocks para o NotificationService e aplicar spies sobre métodos internos, utilizando as funcionalidades oferecidas pelo Jest.

### Referências
- [Jest - Documentação oficial](https://jestjs.io/docs/getting-started)
- [TypeScript - Documentação oficial](https://www.typescriptlang.org/docs/)

## Vídeos recomendados:
### Introdução aos testes unitários com Jest
https://www.youtube.com/watch?v=7r4xVDI2vho

### Como usar mocks e spies no Jest
https://www.youtube.com/watch?v=FgnxcUQ5vho

Ao finalizar, execute os testes para verificar se o comportamento esperado foi atingido.

Dica importante:Lembre-se de restaurar qualquer spy criado após a execução do teste, evitando que ele afete outros testes no mesmo arquivo.