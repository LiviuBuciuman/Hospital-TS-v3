import {Persona} from './Persona'

export class Medico extends Persona {
    private numeroColegiado: number;

    constructor(numSS: number, nombre: string, fechaNacimiento: Date, numeroColegiado: number) {
        super(numSS, nombre, fechaNacimiento);
        this.numeroColegiado = numeroColegiado;
    };

    public getNumeroColegiado(): number {
        return this.numeroColegiado;
    };

    public setNumeroColegiado(numeroColegiado: number) {
        this.numeroColegiado = numeroColegiado;
    }
}
