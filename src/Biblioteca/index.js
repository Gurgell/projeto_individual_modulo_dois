"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Biblioteca = void 0;
var Biblioteca = /** @class */ (function () {
    function Biblioteca() {
    }
    Biblioteca.cadastrarLivro = function (livro) {
        Biblioteca.listaLivros.push(livro);
        livro.autor.addLivro(livro);
        return livro;
    };
    Biblioteca.emprestarLivro = function (id, usuario) {
        Biblioteca.listaLivros.forEach(function (livro) {
            if (livro.id === id) {
                usuario.addLivro(livro);
            }
        });
    };
    Biblioteca.devolverLivro = function (id, usuario) {
        Biblioteca.listaLivros.forEach(function (livro) {
            if (livro.id === id) {
                usuario.removerPorId(livro.id);
            }
        });
    };
    Biblioteca.listarLivros = function () {
        console.log("\nTodos os livros: ");
        Biblioteca.listaLivros.forEach(function (livro) {
            console.log("\nTitulo: " + livro.titulo +
                "\nGênero: " + livro.genero +
                "\nAutor: " + livro.autor.nome);
        });
    };
    Biblioteca.listarLivrosEmprestados = function () {
        console.log("\nLivros emprestados: ");
        Biblioteca.listaUsuarios.forEach(function (usuario) {
            usuario.listarLivros();
        });
    };
    Biblioteca.listarLivrosPorAutor = function () {
        console.log("\nLivros por autor: ");
        Biblioteca.listaAutores.forEach(function (autor) {
            autor.listarLivros();
        });
    };
    Biblioteca.adicionarAutor = function (autor) {
        Biblioteca.listaAutores.push(autor);
        return autor;
    };
    Biblioteca.removerAutor = function (id) {
        Biblioteca.listaAutores.forEach(function (autor) {
            if (autor.id === id) {
                autor.removerPorId(autor.id);
            }
        });
    };
    Biblioteca.adicionarUsuario = function (usuario) {
        Biblioteca.listaUsuarios.push(usuario);
        return usuario;
    };
    Biblioteca.removerUsuario = function (id) {
        Biblioteca.listaAutores.forEach(function (usuario) {
            if (usuario.id === id) {
                usuario.removerPorId(usuario.id);
            }
        });
    };
    Biblioteca.listarLivrosPorUsuario = function () {
        console.log("\nLivros por Usuário: ");
        Biblioteca.listaAutores.forEach(function (usuario) {
            usuario.listarLivros();
        });
    };
    Biblioteca.relatorio = function () {
        this.listarLivrosEmprestados();
        this.listarLivrosPorAutor();
        this.listarLivrosPorUsuario();
    };
    Biblioteca.listaLivros = [];
    Biblioteca.listaAutores = [];
    Biblioteca.listaUsuarios = [];
    return Biblioteca;
}());
exports.Biblioteca = Biblioteca;
