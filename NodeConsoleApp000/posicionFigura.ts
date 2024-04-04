
class Figura {
    private _xPosition: number = 0;
    public get xPosition(): number {
        return this._xPosition;
    }
    public set xPosition(value: number) {
        if (value > 200 || value < 0) {
            this._xPosition = 0;
        } else {
            this._xPosition = value;
        }  
    }
    private _yPosition: number = 0;
    public get yPosition(): number {
        return this._yPosition;
    }
    public set yPosition(value: number) {
        if (value > 0 && value < 200) {
            this._yPosition = value;
        } else {
            this._yPosition = 0;
        }
    }
    private _material: string = "";
    public get material(): string {
        let mayusculas = this._material;
        return mayusculas.toUpperCase();
    }
    public set material(value: string) {
        this._material = value;
    }
    constructor(xPosition: number, yPosition: number, material: string) {
        this.xPosition = xPosition;
        this.yPosition = yPosition;
        this.material = material;
    }
    imprimeFigura(): string {
        return `la posicion X de la figura de material  ${this.material}, es ${this.xPosition}, y la posicion Y es ${this.yPosition.toString()}. <br />`;
    }


}


let figura1 = new Figura(50, 120, "Alabastro");
let figura2 = new Figura(250, 120, "Madera");
let figura3 = new Figura(50, 1120, "Plastico");



document.writeln(figura1.imprimeFigura()  + "<br />");
document.writeln(figura2.imprimeFigura()   + "<br />");
document.writeln(figura3.imprimeFigura()  + "<br />");
