import { Autor } from "../Autor";
import { MetodosLivros } from "../Interface";

export class Livro{
    private _id: number;
    private _titulo: string;
    private _autor: Autor; 
    private _anoPublicacao: string;
    private _genero: string;

    constructor(id: number, titulo: string, autor: Autor, anoPublicacao: string, genero: string){
        this.id = id;
        this.titulo =  titulo;
        this.autor = autor; 
        this.anoPublicacao = anoPublicacao;
        this.genero =  genero;
    }

    get id(): number{
        return this._id;
    }

    set id(id: number){
        this._id = id;
    }

    get titulo(): string{
        return this._titulo;
    }

    get autor(): Autor{
        return this._autor;
    }

    get anoPublicacao(): string{
        return this._anoPublicacao;
    }

    get genero(): string{
        return this._genero;
    }

    set titulo(titulo: string){
        this._titulo = titulo;
    }

    set autor(autor: Autor){
        this._autor = autor;
    }

    set anoPublicacao(anoPublicacao: string){
        this._anoPublicacao = anoPublicacao;
    }

    set genero(genero: string){
        this._genero = genero;
    }

}