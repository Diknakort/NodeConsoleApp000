const regexIdEnvio = /^[A-H][A-H][0-9][0-9][I-Z][I-Z]/;
const matchId = "AA00II";
class Envio {
    idEnvio: string = "";
    numEnvio: BigInt;
    precioEnvio: number;
    recibidoEnvio: boolean = false;
    private _edad: number = 0;

    public get edad() {
        return this._edad;
    }

    public set edad(edadAux: number) {
        if (edadAux > 100) {
            this._edad = 100;
        } else {
            this._edad = edadAux;
        }          

    }



    constructor(idEnvio: string, numEnvio: BigInt, precioEnvio: number, recibidoEnvio: boolean, edadAux: number) {
        this.idEnvio = idEnvio;
        this.numEnvio = numEnvio;
        this.precioEnvio = precioEnvio;
        this.recibidoEnvio = recibidoEnvio;
        this.edad = edadAux
    }

    ivaEnvio(): string {
        let ivaEnvioValor = this.precioEnvio * 0.21;
        return ivaEnvioValor.toString();
    }


    imprimeEnvio(): string {
        return `El id del envio es ${this.idEnvio}, el numeros de envio ${this.numEnvio}, tiene un precio de ${this.precioEnvio.toString()} y, ha sido recibido?: ${this.recibidoEnvio.toString()}. <br />`;
        }

}

//function validarId(idEnvio: string, regexIdEnvio: string) {

//    let idEnvioTest = idEnvio;
//    let pattern = regexIdEnvio;
//    return pattern.test(idEnvioTest);
//    //var regex = regexIdEnvio;
//    //return regex.test(idEnvio);


//}

    // Se comprueba si el valor del campo está vacío
    //if (this.idEnvio) {
    //let rexexp = regexIdEnvio;
    //return (rexexp.test(envio1.idEnvio));

        //if (!idEnvio.valueOf) {
        //return true;
    //}


let envio1 = new Envio("AA01IZ", 1 as unknown as BigInt, 110.5, true, 1);
let envio2 = new Envio("AB21ZZ", 2 as unknown as BigInt, 85.5, false, 2);
let envio3 = new Envio("AC000ZIZ", 3 as unknown as BigInt, 49, true, 3);

document.writeln("<br />" + envio1.imprimeEnvio() + "<br />");
document.writeln("<br />" + envio2.imprimeEnvio() + "<br />");
document.writeln("<br />" + envio3.imprimeEnvio() + "<br />");

//+ validarId(envio1.toString(), regexIdEnvio.toString()) + "<br />"