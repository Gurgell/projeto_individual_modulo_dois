import { Autor } from "../Autor";
import { Livro } from "../Livro";
import { Usuario } from "../Usuario";

export class Biblioteca{
    private static listaLivros: Array<Livro> = [];
    private static listaAutores: Array<Autor> = [];
    private static listaUsuarios: Array<Usuario> = [];

    public static cadastrarLivro(livro: Livro): Livro{
        Biblioteca.listaLivros.push(livro)
        livro.autor.addLivro(livro)
        return livro;
    }

    public static emprestarLivro(id: number, usuario: Usuario): void{
        Biblioteca.listaLivros.forEach(livro => {
            if (livro.id === id){
                usuario.addLivro(livro)
            }
        });
    }

    public static devolverLivro (id: number, usuario: Usuario): void{
        Biblioteca.listaLivros.forEach(livro => {
            if (livro.id === id){
                usuario.removerPorId(livro.id)
            }
        });
    }

    public static listarLivros(): void{
        console.log("\nTodos os livros: ")
        Biblioteca.listaLivros.forEach(livro => {
            console.log("\nTitulo: " + livro.titulo + 
            "\nGênero: "+ livro.genero + 
            "\nAutor: " + livro.autor.nome);
        });
    }

    public static listarLivrosEmprestados(): void{
        console.log("\nLivros emprestados: ")
        Biblioteca.listaUsuarios.forEach(usuario => {
            usuario.listarLivros()
        });
    }

    public static listarLivrosPorAutor(): void{
        console.log("\nLivros por autor: ")
        Biblioteca.listaAutores.forEach(autor => {
            autor.listarLivros()
        });
    }

    public static adicionarAutor(autor: Autor): Autor{
        Biblioteca.listaAutores.push(autor);
        return autor;
    }

    public static removerAutor(id: number){
        Biblioteca.listaAutores.forEach(autor => {
            if (autor.id === id){
                autor.removerPorId(autor.id)
            }
        });
    }

    public static adicionarUsuario(usuario: Usuario): Usuario{
        Biblioteca.listaUsuarios.push(usuario);
        return usuario;
    }

    public static removerUsuario(id: number){
        Biblioteca.listaAutores.forEach(usuario => {
            if (usuario.id === id){
                usuario.removerPorId(usuario.id)
            }
        });
    }

    public static listarLivrosPorUsuario(): void{
        console.log("\nLivros por Usuário: ")
        Biblioteca.listaAutores.forEach(usuario => {
            usuario.listarLivros()
        });
    }

    public static relatorio(): void{
        this.listarLivrosEmprestados()
        this.listarLivrosPorAutor()
        this.listarLivrosPorUsuario()
    }


}