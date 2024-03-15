//concatenação, interpolação, literal templates

//Propriedades de um carro

// 1- declaração, 2-indenticação da variavel 3- tipo de variavel
//padrão de escrita= camelCase primeiraPalavraEscrita
//comentario

const corDoCarro = "Vermelho"
const modeloDoCarro = "Sandero"
const marcaDoCarro = "Renault"
const chassiDoCarro = 7986344162839
const anoDoCarro = 2012

console.log(" cor predominante: "+ corDoCarro + " Modelo do carro: " + modeloDoCarro + " Marca do carro: " + marcaDoCarro +
 " chassi do carro: " + chassiDoCarro + " Ano: " + anoDoCarro)

 //segunda forma de interpolação

 console.log(`cor predominante: ${corDoCarro}, Modelo: ${modeloDoCarro},
  Marca: ${marcaDoCarro}, chassi:${chassiDoCarro}, Ano: ${anoDoCarro}`)

  
// sem literal templates

console.log("Bem vindo ao bar do Guilherme:",
"1-Litrão,",
"2- pitão,",
"3- Refri,",
"4- água,",
)

// terceira forma literal templates

console.log(`Bem vindo ao bar do Guilherme. Escolha uma opção:
    1-Água
    2-Coca
    3-Pepsi
    4Litrão
`,);

