// Definindo variáveis
let nomeHeroi = "Super Programador M";
let xpHeroi = 7930; // Substitua esse valor com a quantidade de XP do seu herói

// Utilizando uma estrutura de decisão
let nivelHeroi;

if (xpHeroi < 1000) {
    nivelHeroi = "Ferro";
} else if (xpHeroi <= 2000) {
    nivelHeroi = "Bronze";
} else if (xpHeroi <= 5000) {
    nivelHeroi = "Prata";
} else if (xpHeroi <= 7000) {
    nivelHeroi = "Ouro";
} else if (xpHeroi <= 8000) {
    nivelHeroi = "Platina";
} else if (xpHeroi <= 9000) {
    nivelHeroi = "Ascendente";
} else if (xpHeroi <= 10000) {
    nivelHeroi = "Imortal";
} else {
    nivelHeroi = "Radiante";
}

// Exibindo a mensagem de saída
console.log("O Herói de nome " + nomeHeroi + " está no nível de " + nivelHeroi);
