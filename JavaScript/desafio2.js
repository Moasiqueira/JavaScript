// exemplo de cadastro de sistema 

// const email = 'monique'
// const senha = 123456


// VERDADEIRO
// if (email == 'monique' && senha == 123456) {
//     console.log("login aprovado");
// } else {
//     console.log("login reprovado");
// }

//  FALSO (SENHA OU EMAIL ERRADOS)
// if (email == 'monique' && senha == 12346) {
//     console.log("login aprovado");
// } else {
//     console.log("login reprovado");
// }

// EXEMPLO FINAL

const identidade = true
const bemTrajado = true
const vip = false

if (identidade && bemTrajado || vip) {
    console.log("Sua entrada vais ser no camarote A");
} else {
    console.log("sua entrada será apenas na pista");
}