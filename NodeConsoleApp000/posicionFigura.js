"use strict";
class Figura {
    get xPosition() {
        return this._xPosition;
    }
    set xPosition(value) {
        if (value > 200 || value < 0) {
            this._xPosition = 0;
        }
        else {
            this._xPosition = value;
        }
    }
    get yPosition() {
        return this._yPosition;
    }
    set yPosition(value) {
        if (value > 0 && value < 200) {
            this._yPosition = value;
        }
        else {
            this._yPosition = 0;
        }
    }
    get material() {
        let mayusculas = this._material;
        return mayusculas.toUpperCase();
    }
    set material(value) {
        this._material = value;
    }
    constructor(xPosition, yPosition, material) {
        this._xPosition = 0;
        this._yPosition = 0;
        this._material = "";
        this.xPosition = xPosition;
        this.yPosition = yPosition;
        this.material = material;
    }
    imprimeFigura() {
        return `la posicion X de la figura de material  ${this.material}, es ${this.xPosition}, y la posicion Y es ${this.yPosition.toString()}. <br />`;
    }
}
let figura1 = new Figura(50, 120, "Alabastro");
let figura2 = new Figura(250, 120, "Madera");
let figura3 = new Figura(50, 1120, "Plastico");
document.writeln(figura1.imprimeFigura() + "<br />");
document.writeln(figura2.imprimeFigura() + "<br />");
document.writeln(figura3.imprimeFigura() + "<br />");
//# sourceMappingURL=posicionFigura.js.map