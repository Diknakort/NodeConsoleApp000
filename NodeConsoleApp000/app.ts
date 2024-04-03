

//Generamos la Clase que contiene objetos del mismo tipo
class Coche {
    matricula: string = "";
    potencia: number;
    velocidad: number;
    modelo:  string = ""
    // generamos un constructor de objetos
    constructor(matricula: string, potencia: number, velocidad: number, modelo: string) {
        this.matricula = matricula;
        this.potencia = potencia;
        this.velocidad = velocidad;
        this.modelo = modelo;
    }
    velocidadCrucero(): number {
        // si no se pone " : number " se pone así:
        //let velocidadCoche = this.velocidad;
        //let velocidadVehiculo = parseFloat(velocidadCoche.toString());
        //let potenciaCoche = this.potencia;
        //let potenciaVehiculo = parseFloat(potenciaCoche.toString());
        return this.velocidad / this.potencia;
    }

    imprimeVel(): string {
        return `${this.velocidadCrucero()}`;
    }
    imprime(): string {
        return `El coche con matricula ${this.matricula}, del modelo ${this.matricula}, tiene una velocidad de ${this.velocidad.toString()} para una potencia de ${this.potencia.toString()}. Con una relacion de Velocidad/Pontencia de: ${this.velocidadCrucero()}<br />`;
    }

}


// === generamos un objeto asignado a una clase ===
//// Forma basica
//let Maria = new Persona();
//Maria.edad = 28 as unknown as BigInt;
//Maria.nombre = "Maria";
//Maria.apellido = "Lozano";
//Maria.sexo = "mujer";

//let Adrian = new Persona();
//Adrian.edad = 21 as unknown as BigInt;
//Adrian.nombre = "Adrian";
//Adrian.apellido = "Cósta";
//Adrian.sexo = "hombre";

// generamos un objeto asignado a una clase con CONSTRUCTOR

let zaader = new Coche("zaader", 120.5, 110, "Seat 600");
let ZZ2443 = new Coche("ZZ-2443", 130.3, 125, "Volvo 678");
let iuhsuahs = new Coche("iuhsuahs", 150.8, 135.6, "Mercedes 500");

function velocidadMedia() {
    return (zaader.velocidad + ZZ2443.velocidad + iuhsuahs.velocidad) / 3;
}
function potenciaMedia() {
    return (zaader.potencia + ZZ2443.potencia + iuhsuahs.potencia) / 3;
}

document.writeln(zaader.imprime()  + "<br />");
document.writeln(ZZ2443.imprime()   + "<br />");
document.writeln(iuhsuahs.imprime()  + "<br />");
document.writeln("la velocidad media es: " + velocidadMedia().toString() + "<br />");
document.writeln("la potencia media es: " + potenciaMedia().toString() + "<br />");

//document.writeln("Objeto de nombre: " + Maria.nombre + " " + Maria.apellido + ", que tiene una edad de: " + Maria.edad.toString() + " y es de sexo es: " + Maria.sexo + "<br />");
//document.writeln("Objeto de nombre: " + Adrian.nombre + " " + Adrian.apellido + ", que tiene una edad de: " + Adrian.edad.toString() + " y es de sexo es: " + Adrian.sexo + "<br />");