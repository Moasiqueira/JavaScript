// &&  E
// || OU

//CORREÇÃO DO DESAFIO 1

const nomeAluno = "Monique"

const nota1 = 7;
const nota2 = 6;
const nota3 = 5;

const mediaFinal = (nota1 + nota2 + nota3) / 3;

if(mediaFinal >= 7) {
    console.log("Aluno Aprovado");
} else if(mediaFinal >= 5 && mediaFinal <= 6){
    console.log(`aluno está de recuperação(exame) ${mediaFinal}`);
} else{
    console.log(`Aluno foi reprovado ${mediaFinal}`);
}

