function livro(titulo,autor,paginas){
    this.titulo= titulo;
    this.autor= autor;
    this.paginas= paginas;
    this.ler= function(){
        theHobbit.info();
    }
}
livro.prototype.info= function(){
    return "Título: " + this.titulo + ", Autor: " + this.autor + ", Páginas: " + this.paginas;
}

var theHobbit= new livro("O Hobbit","J.R.R Tolkien",310);

theHobbit.ler();
console.log(theHobbit.info());

function Player(player1, player2){
this.player1=player1;
this.player2= player2;
}
return
var player1= new Player("Jorge", "John");
var player2= new Player("Alice", "Bob");

Object.getPrototypeOf(player1) === Player.prototype; // returns true
Object.getPrototypeOf(player2) === Player.prototype; // returns true


