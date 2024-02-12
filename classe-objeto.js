console.log("Desafio DIO - Classes e Objetos! (:")

class heroi{
    constructor(nome, idade, tipo, ataque){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
        
    }
    atacar(){
        if(this.tipo == "mago"){
            console.log(`${this.nome} atacou usando magia!`)
        } else if (this.tipo == "guerreiro"){
            console.log(`${this.nome} atacou usando espada!`)
        } else if (this.tipo == "monge"){
            console.log(`${this.nome} atacou usando artes marciais!`)
        } else {
            console.log(`${this.nome} atacou usando shurikens!`)
        }
        //usar ` e não '
        //chamar tipo usando this.tipo para se referir corretamente aos métodos criados, o mesmo para "this.nome" dentro do "console.log"
        //na comparação do if/else, não esquecer de colocar o tipo entre parênteses, pois queremos comparar strings
    }
}

let heroi1 = new heroi("Pedro", "32", "Ninja")

heroi1.atacar()
console.log(`${heroi1.nome} é um(a) herói(heroína) do tipo: ${heroi1.tipo}`);
//não esquecer de colocar o parâmetro por ser uma função dentro de "heroi1"

let heroi2 = new heroi("Anna", "28", "monge")
heroi2.atacar()
console.log(`${heroi2.nome} é um(a) herói(heroína) do tipo: ${heroi2.tipo}`);