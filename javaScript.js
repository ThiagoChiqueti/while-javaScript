let navName = prompt("Digite o aqui o nome da nave")
let dobras = 0
let yesNo = prompt("Deseja entrar em uma dobra espacial? \n 1-Sim \n 2 - não")

while(yesNo!=1 && yesNo !=2) {
    alert("Resposta Não aceita Por favor responda com 1 ou 2")
    yesNo = prompt(" 1-Sim \n 2 - não")
}

while(yesNo==1){
    dobras += 1
    yesNo = prompt("Deseja entrar em uma nova dobra espacial? \n 1-Sim \n 2 - não")

}

alert("a Nave: "+navName+" entrou em "+dobras+ " dobras espaciais")
