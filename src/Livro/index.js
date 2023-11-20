"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Livro = void 0;
var Livro = /** @class */ (function () {
    function Livro(id, titulo, autor, anoPublicacao, genero) {
        this.id = id;
        this.titulo = titulo;
        this.autor = autor;
        this.anoPublicacao = anoPublicacao;
        this.genero = genero;
    }
    Object.defineProperty(Livro.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (id) {
            this._id = id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Livro.prototype, "titulo", {
        get: function () {
            return this._titulo;
        },
        set: function (titulo) {
            this._titulo = titulo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Livro.prototype, "autor", {
        get: function () {
            return this._autor;
        },
        set: function (autor) {
            this._autor = autor;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Livro.prototype, "anoPublicacao", {
        get: function () {
            return this._anoPublicacao;
        },
        set: function (anoPublicacao) {
            this._anoPublicacao = anoPublicacao;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Livro.prototype, "genero", {
        get: function () {
            return this._genero;
        },
        set: function (genero) {
            this._genero = genero;
        },
        enumerable: false,
        configurable: true
    });
    return Livro;
}());
exports.Livro = Livro;
