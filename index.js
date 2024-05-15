//Desafio do projeto  - 03
//Dev. nível noob: Thiago Mello
//Data: 15/05/2024

//Traços do herói

class Heroi {

    constructor(tipo) {
        this.tipo = tipo;

        // Definir características padrão com base no tipo do herói
        switch (tipo) {
            case "Guerreiro":
                this.nome = "Felipe";
                this.idade = 28;
                this.ataque = "Espada.";
                break;
            case "Mago":
                this.nome = "Gandalf";
                this.idade = "Incalculável";
                this.ataque = "Magia.";
                break;
            case "Monge":
                this.nome = "Lee Sin";
                this.idade = 35;
                this.ataque = "Artes marciais.";
                break;
            case "Ninja":
                this.nome = "Hattori Hanzo";
                this.idade = 30;
                this.ataque = "Shuriken e Katana.";
                break;
          
        }
    }

//Padrão de log.
 
    informacoes() {
        console.log(`O ${this.tipo} chamado ${this.nome} de ${this.idade} anos atacou usando ${this.ataque}`);
    }

}

// Criando uma instância de um Guerreiro
let guerreiro = new Heroi("Guerreiro");
guerreiro.informacoes(); 

// Criando uma instância de um Mago
let mago = new Heroi("Mago");
mago.informacoes();

// Criando uma instância de um Monge
let monge = new Heroi("Monge");
monge.informacoes();

// Criando uma instância de um Ninja
let ninja = new Heroi("Ninja");
ninja.informacoes();