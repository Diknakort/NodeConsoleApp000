class Animal {
    private _mes: number = 0;
    public get mes(): number {
        return this._mes;
    }
    public set mes(value: number) {
        if (value > 0 && value < 13) {
            this._mes = value;
        } else {
            alert(` ${this._nombre} El valor del mes debe estar entre 1 y 31. Si no es correcto aparece 0`);
            this._mes = 0;

        }
    }
    private _dia: number = 0;
    public get dia(): number {
        return this._dia;
    }
    public set dia(value: number) {
        if (value > 0 && value < 32) {
            this._dia = value;
        } else {
            alert(` ${this._nombre} El valor del día para debe estar entre 1 y 31. Si no es correcto aparece 0`);
            this._dia = 0;
        }
    }
    private _year: number = 0;
    public get year(): number {
        return this._year;
    }
    public set year(value: number) {
        if (value > 1999 && value < 2025) {
            this._year = value;
        } else {
            alert(` ${this.nombre} El valor del año para debe estar entre 2000 y 2024. Si no es correcto aparece 0`);
            this._year = 0;
        }
    }

    private _nombre: string = "";
    public get nombre(): string {
        return this._nombre;
    }
    public set nombre(value: string) {
        if (value.length > 2) {
            this._nombre = value;
        } else {
            this._nombre = "";
        }
    }
    constructor(dia: number, mes: number, year: number, nombre: string) {
        this.mes = mes;
        this.dia = dia;
        this.year = year;
        this.nombre = nombre;
    }
    dameDatos(): string {
        return `El animal: ${this.nombre}, nacio el ${this.dia.toString()} de  ${this.mes.toString()} de ${this.year} y tiene una edad de ${this.dameEdad()}. <br />`;
    }
    dameEdad(): number {
        //return 2024 - this.year;
        let fechaActual = new Date();
        let fechaNacimiento = new Date(this.year, this.mes, this.dia);
        let diff = Math.abs(fechaActual.getTime() - fechaNacimiento.getTime());
        return Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
    }
}
class Mamifero extends Animal {

    private _mesesGestacion: number = 0;
    public get mesesGestacion(): number {
        return this._mesesGestacion;
    }
    public set mesesGestacion(value: number) {
        if (value > 0 && value < 18) {

            this._mesesGestacion = value;
        } else {
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
    constructor(mes: number, dia: number, year: number, nombre: string, mesesGestacion: number) {
        super(mes, dia, year, nombre);
        this.mesesGestacion = mesesGestacion;
    }
    dameDatos(): string {
        return `El Mamifero: ${this.nombre}, nacio el ${this.dia.toString()} de ${this.mes.toString()} de ${this.year.toString()} y tiene una edad de  ${this.dameEdad()}. Y nace despues de ${this.mesesGestacion} meses.<br />`;
    }
}

class Primate extends Mamifero {

    private _masaCerebral: number = 0;
    public get masaCerebral(): number {
        return this._masaCerebral;
    }
    public set masaCerebral(value: number) {
        if (value > 100 && value < 2000) {
            this._masaCerebral = value;
        } else {
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
    constructor(mes: number, dia: number, year: number, nombre: string, mesesGestacion: number, masaCerebral: number) {
        super(mes, dia, year, nombre, mesesGestacion);
        this.masaCerebral = masaCerebral;
    }
    dameDatos(): string {
        return `El Primate: ${this.nombre}, nacio el ${this.dia.toString()} de ${this.mes.toString()} de ${this.year.toString()} y tiene una edad de ${this.dameEdad()}. Y nace despues de ${this.mesesGestacion} meses. con una proporcion de Masa cerebral/gestacion de ${this.proporcionMasa()}. <br />`;
    }
    proporcionMasa(): number {
        return this.masaCerebral % this.mesesGestacion;
    }
}
class Humano extends Primate {

    apellidos: string = "";


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
    constructor(mes: number, dia: number, year: number, nombre: string, mesesGestacion: number, masaCerebral: number, apellidos: string) {
        super(mes, dia, year, nombre, mesesGestacion, masaCerebral);
        this.apellidos = apellidos;
    }
    dameDatos(): string {
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



