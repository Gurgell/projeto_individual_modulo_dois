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
exports.Usuario = void 0;
var Pessoa_1 = require("../Pessoa");
var Usuario = /** @class */ (function (_super) {
    __extends(Usuario, _super);
    function Usuario(nome) {
        var _this = _super.call(this, nome) || this;
        _this.listaLivrosEmprestados = [];
        return _this;
    }
    Usuario.prototype.removerPorId = function (id) {
        var livro;
        for (var i = 0; i < this.listaLivrosEmprestados.length; i++) {
            if (this.listaLivrosEmprestados[i].id === id) {
                this.listaLivrosEmprestados.splice(i, 1);
                livro = this.listaLivrosEmprestados[i];
            }
        }
        return livro;
    };
    Object.defineProperty(Usuario.prototype, "email", {
        get: function () {
            return this._email;
        },
        set: function (email) {
            this._email = email;
        },
        enumerable: false,
        configurable: true
    });
    Usuario.prototype.listarLivros = function () {
        this.listaLivrosEmprestados.forEach(function (livro) {
            console.log(livro.titulo);
        });
        ;
        return this.listaLivrosEmprestados;
    };
    Usuario.prototype.addLivro = function (livro) {
        this.listaLivrosEmprestados.push(livro);
    };
    Usuario.prototype.removerUltimoLivro = function (livro) {
        return this.listaLivrosEmprestados.pop();
    };
    Usuario.prototype.removerTodosLivros = function () {
        this.listaLivrosEmprestados.splice(0);
    };
    Usuario.prototype.removerPrimeiroLivro = function () {
        return this.listaLivrosEmprestados.shift();
    };
    return Usuario;
}(Pessoa_1.Pessoa));
exports.Usuario = Usuario;
