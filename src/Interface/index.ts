import { Livro } from "../Livro";

export interface MetodosLivros{
    addLivro(livro: Livro): void;

    removerUltimoLivro(livro: Livro): Livro;

    removerTodosLivros(): void;

    removerPrimeiroLivro(): Livro;

    removerPorId(id: number): Livro;

    listarLivros(): Array<Livro>;
}