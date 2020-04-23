# Form Animation

## Desafio 01
- Fazer o formulário aparcer suavimente quando a página abrir.
### Resolução
</> Criado animation com name: fade; onde faz com que o formulário apareca na tela lentamente.

## Desafio 02
- Faxer os campos entrarem da esquerda para a direita, suavizando a entrada e fazendo-os entrar em momentos distintos.
### Resolução
</> Criado animation com name: move; onde pus tempo para a entrada dos campos, bem como o botão de login.

## Desafio 03
- Quando clicar em login, fazer o formulário ir para baixo.
### Resolução
</> Criado eventos no JavaScript adicionando uma class: "form-hide"; fazendo com que esta classe receba os animation-name: down com o movimento nescessário para sumir com o form da tela.

## Desafio 04
- Remover formulário do HTML e não mostrar rolagem enquanto o formulário está saindo da tela.
### Resolução
</> Adicionado evento no body quando o formulário for clicado e iniciado o a animação por nome "down". o body recebe o style: "overflow: hidden", mas logo ao termino da animação "down" este style é removido.

## Desafio 05
- Adicionar um efeito diferente de timing para a saida do formulário. 
### Resolução
</> Atravéz do JavaScript adiciono a "class = 'form-hide'" que adicionei uma animação de timing para fazer com que o form saia com tempo diferenciado.

## Desafio 06
- Fazer o formulário vibrar caso haja campos vazios, como resposta 'não-não'.
### Resolução
</> Apliquei uma animação com nome de "nono" com quatro estagios de acões, 0%, 30%, 70% e 100% da animação estará em uma posição do "eixo x", fazendo um gento de negação em caso de algum dos campos vazios.

## Desafio 07
- Criar alguns quadrados animados que fiquem girando, que saiam de baixo da tela (fora do campo de visão) e vão para cima da tela. _Detalhes_: devem ter tamanhos diferentes, sairem em momentos diferentes, terem timing diferentes e animação continua.

### Resolução
</> Ciando uma lista em html, estilizei a animação pondo o inicio da animação e o final dela. Utilzei no JavaScript um "for" para repetir até onze vezes a configuração dinâmica para vários quadrados diferentes, pondo de forma também dinâmica o tamanho, movimento, duração e direção para cada um deles.