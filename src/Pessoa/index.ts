export abstract class Pessoa{
    private _nome: string;
    
    constructor(nome: string){
        this._nome = nome;
    }

    get nome(){
        return this._nome;
    }

    set nome(nome: string){
        this.nome = nome;
    }
}