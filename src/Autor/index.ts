import { MetodosLivros } from "../Interface";
import { Livro } from "../Livro";
import { Pessoa } from "../Pessoa";

export class Autor extends Pessoa implements MetodosLivros{
    private _dataNascimento: Date;
    private _nacionalidade: string;
    private listaLivros: Array<Livro> = [];
    private _id: number;

    constructor(id: number, nome: string, dataNascimento: Date, nacionalidade: string){
        super(nome);
        this.id = id;
        this.dataNascimento = dataNascimento;
        this.nacionalidade = nacionalidade;
    }

    removerPorId(id: number): Livro {
        let livro: Livro;
        for (let i: number = 0; i < this.listaLivros.length; i++) {
            if(this.listaLivros[i].id === id){
                this.listaLivros.splice(i, 1);
                livro = this.listaLivros[i];
            }
        }
        return livro;
    }

    listarLivros(): Livro[] {
        this.listaLivros.forEach(livro => {
            console.log(livro.titulo);
        });;
        return this.listaLivros;
    }
    
    public addLivro(livro: Livro){
        this.listaLivros.push(livro);
    }

    public removerUltimoLivro(livro: Livro): Livro{
        return this.listaLivros.pop();
    }

    public removerTodosLivros(){
        this.listaLivros.splice(0);
    }

    public removerPrimeiroLivro(): Livro {
        return this.listaLivros.shift();
    }
    
    get dataNascimento(): Date{
        return this._dataNascimento;
    }

    get nacionalidade(): string{
        return this._nacionalidade;
    }

    set dataNascimento(dataNascimento: Date){
        this._dataNascimento = dataNascimento;
    }

    set nacionalidade(nacionalidade: string){
        this._nacionalidade = nacionalidade;
    }

    get id(): number{
        return this._id;
    }

    set id(id: number){
        this._id = id;
    }

    

}