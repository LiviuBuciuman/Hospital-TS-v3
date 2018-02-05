import {Persona} from './Persona'

export class Paciente extends Persona {
    private sexo: string;

    constructor(numSS: number, nombre: string, fechaNacimiento: Date, sexo: string) {
        super(numSS, nombre, fechaNacimiento);
        this.sexo = sexo;
    };

    public getSexo(): string {
        return this.sexo;
    };

    public setSexo(sexo: string) {
        this.sexo = sexo;
    };
}
