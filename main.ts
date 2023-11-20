import { Autor } from "./src/Autor";
import { Livro } from "./src/Livro";
import { Biblioteca } from './src/Biblioteca/index';
import { Usuario } from "./src/Usuario";

const autor1 = Biblioteca.adicionarAutor(new Autor(1, "Gabriel", new Date(10,10,1999), "Brasileiro"));
const livro1 = Biblioteca.cadastrarLivro(new Livro(1, "Corrida assassina", autor1,  "1988", "Suspense"))
const livro2 = Biblioteca.cadastrarLivro(new Livro(2, "Jogos vorazes", autor1,  "2003", "Terror"))

const usuario = Biblioteca.adicionarUsuario(new Usuario("Rafael"))
const usuario2 = Biblioteca.adicionarUsuario(new Usuario("Lucas"))
Biblioteca.emprestarLivro(livro1.id, usuario)
Biblioteca.emprestarLivro(livro2.id, usuario)

Biblioteca.relatorio()



 
