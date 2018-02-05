export class Persona {
    private numSS: number;
    private nombre: string;
    private fechaNacimiento: Date;

    constructor(numSS: number, nombre: string, fechaNacimiento: Date) {
        this.numSS = numSS;
        this.nombre = nombre;
        this.fechaNacimiento = fechaNacimiento;
    };

    public getNumSS(): number {
        return this.numSS;
    };

    public setNumSS(numSS: number) {
        this.numSS = numSS;
    };

    public getNombre(): string {
        return this.nombre;
    };

    public setNombre(nombre: string) {
        this.nombre = nombre;
    };

    public getFechaNacimiento(): Date {
        return this.fechaNacimiento;
    };

    public setFechaNacimiento(fechaNacimiento: Date) {
        this.fechaNacimiento = fechaNacimiento;
    };
}
