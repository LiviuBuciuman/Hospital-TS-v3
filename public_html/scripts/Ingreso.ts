import {Paciente} from './Paciente'
import {Medico} from './Medico'

export class Ingreso {
    private codigo: number;
    private fechaHora: Date;
    private sintomas: string[] = new Array();
    private diagnostico: string;
    private estado: string;
    private paciente: Paciente;
    private medico: Medico;

    constructor(codigo: number, fechaHora: Date, sintomas: string[], diagnostico: string, estado: string, paciente: Paciente) {
        this.codigo = codigo;
        this.fechaHora = fechaHora;
        this.sintomas = sintomas;
        this.diagnostico = diagnostico;
        this.estado = estado;
        this.paciente=paciente;
        this.medico=null;
    };

    public getCodigo(): number {
        return this.codigo;
    };

    public setCodigo(codigo: number) {
        this.codigo = codigo;
    };

    public getFechaHora(): Date {
        return this.fechaHora;
    };

    public setFechaHora(fechaHora: Date) {
        this.fechaHora = fechaHora;
    };

    public getSintomas(): string[] {
        return this.sintomas;
    };

    public setSintomas(sintomas: string[]) {
        this.sintomas = sintomas;
    };

    public getDiagnostico(): string {
        return this.diagnostico;
    };

    public setDiagnostico(diagnostico: string) {
        this.diagnostico = diagnostico;
    };

    public getEstado(): string {
        return this.estado;
    };

    public setEstado(estado: string) {
        this.estado = estado;
    };

    public getPaciente(): Paciente {
        return this.paciente;
    };

    public setPaciente(paciente: Paciente) {
        this.paciente = paciente;
    };

    public getMedico(): Medico {
        return this.medico;
    };

    public setMedico(medico: Medico) {
        this.medico = medico;
    };
}
