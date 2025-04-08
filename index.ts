import { Veiculo } from "./Veiculo";
import prompt from "prompt-sync";

const teclado = prompt();

console.log('Criação de veículo');
const carro: Veiculo = criaVeiculo();

while (true) {
    console.log("########### MENU ###########");
    console.log("1 - Acelerar");
    console.log("2 - Frear");
    console.log("3 - Subir marcha");
    console.log("4 - Descer marcha");
    console.log("5 - Imprimir dados do veículo");
    console.log("0 - Sair");
    console.log("6 - Ligar veículo");
    console.log("7 - Desligar veículo");

    const opcao = +teclado('Escolha uma opção: ');
    if (opcao === 0) {
        break;
    }
    switch (opcao) {
        case 1:
            acelerar(carro);
            break;
        case 2:
            frear(carro);
            break;
        case 6:
            ligar(carro);
            break;
        case 7:
            desligar(carro);
            break;
        default:
            console.log("Opção inválida.");
            break;
    }

}

console.table(carro);

function acelerar(veiculo: Veiculo): void {
    if (!veiculo.ligado) {
        console.log("Não é possível acelerar. O veículo está desligado.");
        return;
    }

    if (veiculo.marchaAtual != 0) {
        veiculo.velocidade += veiculo.potencia * 0.1;
        console.log(`Velocidade atual: ${veiculo.velocidade}`);
    } else {
        console.log("A marcha está em ponto morto.");
    }
}

function frear(veiculo: Veiculo): void {
    if (!veiculo.ligado) {
        console.log("Não é possível frear. O veículo está desligado.");
        return;
    }

    if (veiculo.velocidade > 0) {
        veiculo.velocidade -= veiculo.potencia * 0.1;
        if (veiculo.velocidade < 0) {
            veiculo.velocidade = 0;
        }
        console.log(`Velocidade atual: ${veiculo.velocidade}`);
    } else {
        console.log('O veículo já está parado.');
    }
}


function criaVeiculo(): Veiculo {
    const veiculo: Veiculo = new Veiculo();
    veiculo.marca = teclado('Marca: ');
    veiculo.modelo = teclado('Modelo: ');
    veiculo.potencia = +teclado('Potência: ');
    veiculo.numeroMarchas = +teclado('Número de marchas: ');
    return veiculo;
}

function ligar(veiculo: Veiculo): void {
    if (!veiculo.ligado) {
        veiculo.ligado = true;
        console.log("Veículo ligado.");
    } else {
        console.log("O veículo já está ligado.");
    }
}

function desligar(veiculo: Veiculo): void {
    if (veiculo.ligado) {
        veiculo.ligado = false;
        veiculo.velocidade = 0;
        veiculo.marchaAtual = 0;
        console.log("Veículo desligado.");
    } else {
        console.log("O veículo já está desligado.");
    }
}
