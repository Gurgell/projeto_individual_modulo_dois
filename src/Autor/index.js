"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Autor = void 0;
var Pessoa_1 = require("../Pessoa");
var Autor = /** @class */ (function (_super) {
    __extends(Autor, _super);
    function Autor(id, nome, dataNascimento, nacionalidade) {
        var _this = _super.call(this, nome) || this;
        _this.listaLivros = [];
        _this.id = id;
        _this.dataNascimento = dataNascimento;
        _this.nacionalidade = nacionalidade;
        return _this;
    }
    Autor.prototype.removerPorId = function (id) {
        var livro;
        for (var i = 0; i < this.listaLivros.length; i++) {
            if (this.listaLivros[i].id === id) {
                this.listaLivros.splice(i, 1);
                livro = this.listaLivros[i];
            }
        }
        return livro;
    };
    Autor.prototype.listarLivros = function () {
        this.listaLivros.forEach(function (livro) {
            console.log(livro.titulo);
        });
        ;
        return this.listaLivros;
    };
    Autor.prototype.addLivro = function (livro) {
        this.listaLivros.push(livro);
    };
    Autor.prototype.removerUltimoLivro = function (livro) {
        return this.listaLivros.pop();
    };
    Autor.prototype.removerTodosLivros = function () {
        this.listaLivros.splice(0);
    };
    Autor.prototype.removerPrimeiroLivro = function () {
        return this.listaLivros.shift();
    };
    Object.defineProperty(Autor.prototype, "dataNascimento", {
        get: function () {
            return this._dataNascimento;
        },
        set: function (dataNascimento) {
            this._dataNascimento = dataNascimento;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Autor.prototype, "nacionalidade", {
        get: function () {
            return this._nacionalidade;
        },
        set: function (nacionalidade) {
            this._nacionalidade = nacionalidade;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Autor.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (id) {
            this._id = id;
        },
        enumerable: false,
        configurable: true
    });
    return Autor;
}(Pessoa_1.Pessoa));
exports.Autor = Autor;
