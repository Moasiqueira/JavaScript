# Operadores em JavaScript

Apredendo a utilizar os operadores na linguagem JavaScript.

## operadores-aritmeticos.js 

Inicialmente, declaramos as variaveis com a palavra `Const`.

~~~js
const numero1 = 30;
const numero2 = 20;
~~~

Depois, realizamos as operaçoes utilizando os operadores aritméticos:

* `+`: Soma dois números
* `-`: Subtrai dois números
* `*`: Multiplica dois números
* `/`: Divide dois números
* `%`: Obtem o resto da divisão de  dois números

~~~js
console.log(`A soma dos numeros é: ${numero1 + numero2}`);
console.log(`A subtração dos numeros é: ${numero1 - numero2}`);
console.log(`A multiplicação dos numeros é: ${numero1 * numero2}`);
console.log(`A divisão dos numeros é: ${numero1 / numero2}`);
console.log(`O resto da divisão dos numeros é: ${numero1 % numero2}`);
~~~

As operaçoes são realizadas no momento da impressão do resultado e 
não necesitam ser armazenadas  em variáveis.

## Operadores-atribuicao.js

~~~js
let numero = 10;
~~~

Declaramos a variável `numero` usando a palavra reservada `let`,
 pois essa variável será reatribuida ao longo do nosso código.

 Em seguida, fazemos uma série de reatribuições utilizando os operadores de atribuição.

 ~~~js
 console.log(`O numero inicial é: ${numero}`);
console.log(`Somando 10: ${numero += 10}`);
console.log(`Subtraindo 10: ${numero -= 10}`);
console.log(`Multiplicando por 10: ${numero *= 10}`);
console.log(`Dividindo por 10: ${numero /= 10}`);
console.log(`Elevando à potência de  10: ${numero **= 10}`);
console.log(`Obtendo o resto da divisão por  10: ${numero %= 10}`);
console.log(`Incrementando 1: ${++numero}`);
console.log(`Decrementando 1: ${--numero}`);
console.log(`O numero final é: ${numero}`);
 ~~~

 Operadores de atribuição:

* `=` -> atribui um novo valor para a variável
* `+=` -> atribuição do próprio valor somado ao novo valor
* `*=` -> O próprio valor multiplicado pelo novo valor
* `/=` -> O próprio valor dividido pelo novo valor
* `**=` -> O próprio valor elevado a potência do novo valor
* `%=` -> O resto da divisão do próprio valor pelo do novo valor
* `++` -> O próprio valor **incrementado (somado) com 1** (pode ser um _pré-incrimento_ ou _pós-incremento_)
* `--` -> O próprio valor **decrementado (subtraido) com 1** (pode ser um _pré-decremento_ ou _pós-decremento_)