
class Persona {
    private _nombre: string = "";
    public get nombre(): string {
        return this._nombre;
    }
    public set nombre(value: string) {
        //if (value > 0 && value < 13) {
            this._nombre = value;
        //} else {
        //    this._nombre = "";

        //}
    }
    private _edad: number = 0;
    public get edad(): number {
        return this._edad;
    }
    public set edad(value: number) {
        if (value > 0 && value < 99) {
            this._edad = value;
        } else {
            alert(` ${this._nombre} El valor de la edad para debe estar entre 1 y 99. Si no es correcto aparece 0`);
            this._edad = 0;
        }
    }
    private _dni: string = "";
    public get dni(): string {
        return this._dni;
    }
    public set dni(value: string) {
        //if (value > 1999 && value < 2025) {
        this._dni = value;
    //    } else {
    //        alert(` ${this.nombre} El valor del año para debe estar entre 2000 y 2024. Si no es correcto aparece 0`);
    //        this._dni = 0;
    //    }
    }

    private _sexo: string = "hombre";
    public get sexo(): string {
        return this._sexo;
    }
    public set sexo(value: string) {
            this._sexo = value;
    }
    private _peso: number = 0;
    public get peso(): number {
        return this._peso;
    }
    public set peso(value: number) {
    //    if (value > 0 && value < 99) {
            this._peso = value;
    //    } else {
    //        alert(` ${this._nombre} El valor de la edad para debe estar entre 1 y 99. Si no es correcto aparece 0`);
    //        this._peso = 0;
    //    }
    }
    private _altura: number = 0;
    public get altura(): number {
        return this._altura;
    }
    public set altura(value: number) {
    //    if (value > 0 && value < 99) {
            this._altura = value;
    //    } else {
    //        alert(` ${this._nombre} El valor de la edad para debe estar entre 1 y 99. Si no es correcto aparece 0`);
    //        this._altura = 0;
    //    }
    }
    private _validador: string = "true";
    public get validador(): string {
        return this._validador;
    }
    public set validador(value: string) {
        //    if (value > 0 && value < 99) {
        this._validador = value;
        //    } else {
        //        alert(` ${this._nombre} El valor de la edad para debe estar entre 1 y 99. Si no es correcto aparece 0`);
        //        this._altura = 0;
        //    }
    }

    constructor(nombre: string, edad: number, generarDNI: string , sexo: string, peso: number, altura: number) {
        this.nombre = nombre;
        this.edad = edad;
        this.dni = this.generarDNI();
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
        // , validador: ISexoSpecification
        //this.Validador = validador;
        //if (validador) {

        //}
    }
    toString(): string {
        return `<b>${this.nombre}</b>, de edad: <b> ${this.edad.toString()}</b>, por lo que es <b>${this.textoMayorEdad()}</b>, con DNI: <b>${this.dni}</b> <b>${this.mostrarSexo() }</b>. 
        Tiene un peso de <b>${this.peso} kg</b> y altura de <b>${this.altura} m</b>  y un IMC de "<b> ${this.calcularIMC()}</b> " por lo que es <b>${this.mostrarIMC()}</b><br />`;
    }
    //
    calcularIMC() {
        let imc = this.peso / (this.altura * this.altura);
        let delgado = -1;
        let normal = 0;
        let sobrepeso = 1;
        if (imc < 20) {
            return delgado;
        }
        if (imc < 26 ) {
            return normal;
        }
        if (imc > 25 ) {
            return sobrepeso;
        }
    }
    mostrarIMC() {
        let imcStatus = this.calcularIMC();
        if (imcStatus === 1) {
            return "Esta por ENCIMA de su peso ideal.";
        } if (imcStatus === 0) {
            return "Esta en su peso IDEAL.";
        } else {
            return "Esta por DEBAJO de su peso ideal.";
        }
    }
    esMayorDeEdad(): boolean {
        return this.edad > 17;
        //if (this.edad > 17) {
        //    return true;
        //} else {
        //    return false;
        //}
    }
    textoMayorEdad() {
        if (this.esMayorDeEdad() == true ) {
            return 'mayor de edad';
    } return `menor de edad`;
    }
    comprobarSexo(): boolean {
        if (this.sexo === "H" || this.sexo === "M") {
            return true;
        } else {
            return false;
        }
    }
    mostrarSexo() {
        if (this.comprobarSexo() === true) {
            if (this.sexo === "M") {
                return `y el genero es M - Mujer`;
            } return `y el genero es H - Hombre`;     
        } else {
            return "";
        }
    }
    generarDNI(): string {
        const numero = Math.floor(Math.random() * 100000000);
        const resto = numero % 23;
        const tablaLetras = "ABCDEFGHIJKLMNOPQRSTVWZ";
        const letra = tablaLetras.charAt(resto);
        return `${numero}-${letra}`;
    }

}

interface ISexoSpecification {
    isValid(persona: Persona): boolean;
}
class ComprobacionGeneroPersona implements ISexoSpecification {
    isValid(persona: Persona): boolean {
        return (persona.sexo === "H" || persona.sexo === "M");
    }
}

let comprobacionGeneroPersona = new ComprobacionGeneroPersona();
//let resultado = document.getElementById("resultado",);

let persona1 = new Persona("Santiago", 6, "76456123A", "H", 35, 1.2);
if (comprobacionGeneroPersona.isValid(persona1)) {
    document.writeln(persona1.toString());
} else {
    document.writeln(persona1 + "Genero no es valido <br/>");
}
let persona2 = new Persona("Pablo", 16, "76564123B", "FLuido", 95, 1.7);
if (comprobacionGeneroPersona.isValid(persona2)) {
    document.writeln(persona2.toString());
} else {
    document.writeln(persona2 + "el Genero de la persona de arriba de este texto, no es valido <br/>");
}
let persona3 = new Persona("Ana", 26, "76456123A", "M", 35, 1.55);
if (comprobacionGeneroPersona.isValid(persona3)) {
    document.writeln(persona3.toString());
} else {
    document.writeln(persona3 + "Genero no es valido <br/>");
}

//let persona3 = new Persona("Ana", 26, "76456123A", "M", 35, 1.55, new ComprobacionGeneroPersona());
let persona4 = new Persona("Luis", 18, "76456123A", "H", 60, 1.65);
if (comprobacionGeneroPersona.isValid(persona4)) {
    document.writeln(persona4.toString());
} else {
    document.writeln(persona4 + "Genero no es valido <br/>");
}




//document.writeln(persona1.toString() + "<br />");
//document.writeln(persona2.toString() + "<br />");
//document.writeln(persona3.toString() + "<br />");

