"use strict";
class Animal {
    get mes() {
        return this._mes;
    }
    set mes(value) {
        if (value > 0 && value < 13) {
            this._mes = value;
        }
        else {
            this._mes = 0;
        }
    }
    get dia() {
        return this._dia;
    }
    set dia(value) {
        if (value > 0 && value < 32) {
            this._dia = value;
        }
        else {
            this._dia = 0;
        }
    }
    get year() {
        return this._year;
    }
    set year(value) {
        if (value > 0 && value < 13) {
            this._year = value;
        }
        else {
            this._year = 0;
        }
    }
    get nombre() {
        return this._nombre;
    }
    set nombre(value) {
        if (value.length > 2) {
            this._nombre = value;
        }
        else {
            this._nombre = "";
        }
    }
    constructor(mes, dia, year, nombre) {
        this._mes = 0;
        this._dia = 0;
        this._year = 0;
        this._nombre = "";
        this.mes = mes;
        this.dia = dia;
        this.year = year;
        this.nombre = nombre;
    }
    imprimeFigura() {
        return `El animal: ${this.nombre}, nacio el ${this.dia} de  ${this.mes.toString()} de ${this.year} y tiene  ${this.dameEdad()}. <br />`;
    }
    dameEdad() {
        return 2024 - this.year;
    }
}
let animal1 = new Animal(5, 10, 2012, "Alabastro");
let animal2 = new Animal(25, 13, 2008, "Madera");
let animal3 = new Animal(50, 6, 2020, "Plastico");
let animal4 = new Animal(10, 6, 2025, "Ne");
document.writeln(animal1.imprimeFigura() + "<br />");
document.writeln(animal2.imprimeFigura() + "<br />");
document.writeln(animal3.imprimeFigura() + "<br />");
document.writeln(animal4.imprimeFigura() + "<br />");
//# sourceMappingURL=herenciasAnimal.js.map