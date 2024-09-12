/* 
    Autor: Arthur Augusto Tsutiya da Silva
    Data de criação: 11/09/2024

    Solução para o projeto de certificação 2 – Dados dos Atletas
*/


// Definição da classe 

class Atleta {
    constructor(nome, idade, peso, altura, notas) {
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
        this.notas = notas;

        this.categoria = undefined;
        this.media = undefined;
        this.imc = undefined;
    }

    calculaCategoria() {
        if (this.idade >= 9 && this.idade <= 11) {
            this.categoria = "Infantil";
        }
        else if (this.idade === 12 || this.idade === 13) {
            this.categoria = "Juvenil";
        }
        else if (this.idade === 14 || this.idade === 15) {
            this.categoria = "Intermediário";
        }
        else if (this.idade >= 16 && this.idade <= 30) {
            this.categoria = "Adulto";
        }
        else {
            this.categoria = "Sem categoria";
        }
    }

    calculaIMC() {
        this.imc = this.peso / (this.altura * this.altura);
    }

    calculaMediaValida() {
        const notas = this.notas.slice();
     
        notas.sort((a, b) => a - b);
        const notasFinais = notas.slice(1, notas.length - 1);
        const soma = notasFinais.reduce((total, nota) => total + nota, 0);    
      
        this.media = soma / notasFinais.length;
    }

    obtemNomeAtleta() {
        return this.nome;
    }

    obtemIdadeAtleta() {
        return this.idade;
    }

    obtemPesoAtleta() {
        return this.peso;
    }

    obtemNotasAtleta() {
        return this.notas;
    }

    obtemCategoria() {
        if (this.categoria === undefined) {
            this.calculaCategoria();
        }

        return this.categoria;
    }

    obtemIMC() {
        if (this.imc === undefined) {
            this.calculaIMC();
        }

        return this.imc;
    }

    obtemMediaValida() {
        if (this.media === undefined) {
            this.calculaMediaValida();
        }

        return this.media;
    }

    // Funções adicionais abaixo

    obtemAlturaAtleta() {
        return this.altura;
    }

    mostrarDadosNoConsole() {
        console.log("*** Dados do(a) atleta ***\n");
        console.log(`Nome: ${this.obtemNomeAtleta()}`);
        console.log(`Idade: ${this.obtemIdadeAtleta()}`);
        console.log(`Peso: ${this.obtemPesoAtleta()}`);
        console.log(`Altura: ${this.obtemAlturaAtleta()}`);
        console.log(`Notas: ${this.obtemNotasAtleta()}`);
        console.log(`Categoria: ${this.obtemCategoria()}`);
        console.log(`IMC: ${this.obtemIMC()}`);
        console.log(`Média Válida: ${this.obtemMediaValida()}`);
        console.log('');
    }
}

// Exemplos de funcionamento da classe

const atleta = new Atleta("Cesar Abascal", 30, 80, 1.70, [10, 9.34, 8.42, 10, 7.88]);
atleta.mostrarDadosNoConsole();

const atleta2 = new Atleta("Enzo Miguel", 10, 58, 1.57, [8.2, 7.6, 7.4, 8, 9.1]);
atleta2.mostrarDadosNoConsole();


