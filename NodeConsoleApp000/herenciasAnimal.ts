
class Animal {
    private _mes: number = 0;
    public get mes(): number {
        return this._mes;
    }
    public set mes(value: number) {
        if (value > 0 && value < 13) {
            this._mes = value;
        } else {
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
            this._dia = 0;
        }
    }
    private _year: number = 0;
    public get year(): number {
        return this._year;
    }
    public set year(value: number) {
        if (value > 0 && value < 13) {
            this._year = value;
        } else {
            this._year = 0;
        }
    }

    private _nombre: string = "";
    public get nombre() {
        return this._nombre;
    }
    public set nombre(value: string) {
        if (value.length > 2) {
            this._nombre = value;
        } else {
            this._nombre = "";
        }
    }
    constructor(mes: number, dia: number, year: number, nombre: string) {
        this.mes = mes;
        this.dia = dia;
        this.year = year;
        this.nombre = nombre;
    }
    imprimeFigura(): string {
        return `El animal: ${this.nombre}, nacio el ${this.dia} de  ${this.mes.toString()} de ${this.year} y tiene  ${this.dameEdad()}. <br />`;
    }
    dameEdad() : number {
        return 2024 - this.year;
    }
        
}


let animal1 = new Animal(5, 10, 2012, "Alabastro");
let animal2 = new Animal(25, 13, 2008, "Madera");
let animal3 = new Animal(50, 6, 2020, "Plastico");
let animal4 = new Animal(10, 6, 2025, "Ne");



document.writeln(animal1.imprimeFigura()  + "<br />");
document.writeln(animal2.imprimeFigura()   + "<br />");
document.writeln(animal3.imprimeFigura()  + "<br />");
document.writeln(animal4.imprimeFigura() + "<br />");
