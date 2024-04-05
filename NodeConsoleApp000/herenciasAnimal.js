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
            alert(` ${this._nombre} El valor del mes debe estar entre 1 y 31. Si no es correcto aparece 0`);
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
            alert(` ${this._nombre} El valor del d�a para debe estar entre 1 y 31. Si no es correcto aparece 0`);
            this._dia = 0;
        }
    }
    get year() {
        return this._year;
    }
    set year(value) {
        if (value > 1999 && value < 2025) {
            this._year = value;
        }
        else {
            alert(` ${this.nombre} El valor del a�o para debe estar entre 2000 y 2024. Si no es correcto aparece 0`);
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
    constructor(dia, mes, year, nombre) {
        this._mes = 0;
        this._dia = 0;
        this._year = 0;
        this._nombre = "";
        this.mes = mes;
        this.dia = dia;
        this.year = year;
        this.nombre = nombre;
    }
    dameDatos() {
        return `El animal: ${this.nombre}, nacio el ${this.dia.toString()} de  ${this.mes.toString()} de ${this.year} y tiene una edad de ${this.dameEdad()}. <br />`;
    }
    dameEdad() {
        //return 2024 - this.year;
        let fechaActual = new Date();
        let fechaNacimiento = new Date(this.year, this.mes, this.dia);
        let diff = Math.abs(fechaActual.getTime() - fechaNacimiento.getTime());
        return Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
    }
}
class Mamifero extends Animal {
    get mesesGestacion() {
        return this._mesesGestacion;
    }
    set mesesGestacion(value) {
        if (value > 0 && value < 18) {
            this._mesesGestacion = value;
        }
        else {
            this._mesesGestacion = 0;
        }
    }
    //public get mesesGestacion(): number {
    //    return this._mesesGestacion;
    //}
    //public set mesesGestacion(value: number) {
    //if (value > 0 && value < 13) {
    //    this._mesesGestacion = value;
    //} else {
    //    this._mesesGestacion = 0;
    //}
    //}
    constructor(mes, dia, year, nombre, mesesGestacion) {
        super(mes, dia, year, nombre);
        this._mesesGestacion = 0;
        this.mesesGestacion = mesesGestacion;
    }
    dameDatos() {
        return `El Mamifero: ${this.nombre}, nacio el ${this.dia.toString()} de ${this.mes.toString()} de ${this.year.toString()} y tiene una edad de  ${this.dameEdad()}. Y nace despues de ${this.mesesGestacion} meses.<br />`;
    }
}
class Primate extends Mamifero {
    get masaCerebral() {
        return this._masaCerebral;
    }
    set masaCerebral(value) {
        if (value > 100 && value < 2000) {
            this._masaCerebral = value;
        }
        else {
            alert(` ${this.nombre} El valor de la Masa Cerebral para debe estar entre 100gr y 2000gr. Si no es correcto aparece 0`);
            this._masaCerebral = 0;
        }
    }
    //public get mesesGestacion(): number {
    //    return this._mesesGestacion;
    //}
    //public set mesesGestacion(value: number) {
    //if (value > 0 && value < 13) {
    //    this._mesesGestacion = value;
    //} else {
    //    this._mesesGestacion = 0;
    //}
    //}
    constructor(mes, dia, year, nombre, mesesGestacion, masaCerebral) {
        super(mes, dia, year, nombre, mesesGestacion);
        this._masaCerebral = 0;
        this.masaCerebral = masaCerebral;
    }
    dameDatos() {
        return `El Primate: ${this.nombre}, nacio el ${this.dia.toString()} de ${this.mes.toString()} de ${this.year.toString()} y tiene una edad de ${this.dameEdad()}. Y nace despues de ${this.mesesGestacion} meses. con una proporcion de Masa cerebral/gestacion de ${this.proporcionMasa()}. <br />`;
    }
    proporcionMasa() {
        return this.masaCerebral % this.mesesGestacion;
    }
}
class Humano extends Primate {
    //public get mesesGestacion(): number {
    //    return this._mesesGestacion;
    //}
    //public set mesesGestacion(value: number) {
    //if (value > 0 && value < 13) {
    //    this._mesesGestacion = value;
    //} else {
    //    this._mesesGestacion = 0;
    //}
    //}
    constructor(mes, dia, year, nombre, mesesGestacion, masaCerebral, apellidos) {
        super(mes, dia, year, nombre, mesesGestacion, masaCerebral);
        this.apellidos = "";
        this.apellidos = apellidos;
    }
    dameDatos() {
        return `El Humano: ${this.nombre} ${this.apellidos}, nacio el ${this.dia.toString()} de  ${this.mes.toString()} de ${this.year.toString()} y tiene una edad de  ${this.dameEdad()}. Y nace despues de ${this.mesesGestacion} meses. con una proporcion de Masa cerebral/gestacion de ${this.proporcionMasa()}. <br />`;
    }
}
let animal1 = new Animal(10, 6, 2021, "Ana");
let animal2 = new Mamifero(5, 10, 2012, "Alabastro", 4);
let animal3 = new Primate(25, 2, 2018, "Madera", 13, 500);
let animal4 = new Humano(5, 3, 2020, "Plastico", 9, 750, "Lopez Hernandez");
//document.writeln(animal1.dameDatos() + "<br />");
//document.writeln(animal2.dameDatos() + "<br />");
//document.writeln(animal3.dameDatos() + "<br />");
//document.writeln(animal4.dameDatos() + "<br />");
//# sourceMappingURL=herenciasAnimal.js.map