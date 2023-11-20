import { MetodosLivros } from "../Interface";
import { Livro } from "../Livro";
import { Pessoa } from "../Pessoa";

export class Usuario extends Pessoa implements MetodosLivros{

    private _email: string;
    private listaLivrosEmprestados: Array<Livro> = [];

    constructor(nome: string){
        super(nome);
    }

    removerPorId(id: number): Livro {
        let livro: Livro;
        for (let i: number = 0; i < this.listaLivrosEmprestados.length; i++) {
            if(this.listaLivrosEmprestados[i].id === id){
                this.listaLivrosEmprestados.splice(i, 1);
                livro = this.listaLivrosEmprestados[i];
            }
        }
        return livro;
    }

    get email(): string{
        return this._email;
    }

    set email(email: string){
        this._email = email;
    }

    listarLivros(): Livro[] {
        this.listaLivrosEmprestados.forEach(livro => {
            console.log(livro.titulo)
        });;
        return this.listaLivrosEmprestados;
    }

    public addLivro(livro: Livro){
        this.listaLivrosEmprestados.push(livro);
    }

    public removerUltimoLivro(livro: Livro): Livro{
        return this.listaLivrosEmprestados.pop();
    }

    public removerTodosLivros(){
        this.listaLivrosEmprestados.splice(0)
    }

    public removerPrimeiroLivro(): Livro {
        return this.listaLivrosEmprestados.shift()
    }
    
}