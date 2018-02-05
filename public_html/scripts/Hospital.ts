import {Medico} from './Medico'
import {Paciente} from './Paciente'
import {Ingreso} from './Ingreso'

export class Hospital {
    private idIngreso: number;
    public pacientes: Array<Paciente> = [];
    public ingresos: Array<Ingreso> = [];
    public medicos: Array<Medico> = [];

    constructor() {
        this.idIngreso = 1;
    };

    public getIdIngreso(): number {
        return this.idIngreso++;
    };

    public NuevoMedico(numSS: number, nombre: string, fechaNacimiento: Date, numColegiado: number) {
        let medico = new Medico(numSS, nombre, fechaNacimiento, numColegiado);
        this.medicos.push(medico);
    };

    public NuevoPaciente(numSS: number, nombre: string, fechaNacimiento: Date, sexo: string) {
        let paciente = new Paciente(numSS, nombre, fechaNacimiento, sexo);
        this.pacientes.push(paciente);
    };

    public NuevoIngreso(fechaHora: Date, sintomas: string[], diagnostico: string, estado: string, paciente: Paciente) {
        let ingreso = new Ingreso(this.getIdIngreso(), fechaHora, sintomas, diagnostico, estado, paciente);
        this.ingresos.push(ingreso);
    };

    public getNumSSPaciente(numSS: number): number {
        let exit = true;
        while (exit) {
            for (let i = 0; i < this.pacientes.length; i++) {
                if (numSS == this.pacientes[i].getNumSS()) {
                    return i;
                }
            }
        }
        return -1;
    };

    public getIndexCodigoIngreso(codigo: number): number {
        for (let i = 0; i < this.ingresos.length; i++) {
            if (codigo == this.ingresos[i].getCodigo()) {
                return i;
            }
        }
        return -1;
    };

    public isMedicExist(num: number): boolean {
        for (let i = 0; i < this.medicos.length; i++) {
            if (num == this.medicos[i].getNumeroColegiado()) {
                return true;
            }
        }
        return false;
    };

    public calcularEdad(date): number {
        let diff_ms = Date.now() - date.getTime();
        let age_dt = new Date(diff_ms);

        return Math.abs(age_dt.getUTCFullYear() - 1970);
    };

    public getListaIngresosPendiente() {
        for (let i = 0; i < this.ingresos.length; i++) {
            if (this.ingresos[i].getEstado() == "Pendiente") {
                let dia = this.ingresos[i].getFechaHora().getDate();
                let mes = this.ingresos[i].getFechaHora().getMonth();
                let anyo = this.ingresos[i].getFechaHora().getFullYear();
                alert(
                    "Nombre: " + this.ingresos[i].getPaciente().getNombre() + "\n" +
                    "Fecha ingreso: " + dia + "/" + (mes + 1) + "/" + anyo + "\n" +
                    "Edad: " + this.calcularEdad(this.ingresos[i].getPaciente().getFechaNacimiento()) + "\n" +
                    "Sexo: " + this.ingresos[i].getPaciente().getSexo()
                )
            }
        }
    };

    public getListaMedicos() {
        for (let i = 0; i < this.medicos.length; i++) {
            let dia = this.medicos[i].getFechaNacimiento().getDate();
            let mes = this.medicos[i].getFechaNacimiento().getMonth();
            let anyo = this.medicos[i].getFechaNacimiento().getFullYear();

            alert("#" + (i + 1) + "\n" +
                "Número SS: " + this.medicos[i].getNumSS() + "\n" +
                "Nombre: " + this.medicos[i].getNombre() + "\n" +
                "Fecha nacimiento: " + dia + "/" + mes + "/" + anyo + "\n" +
                "Número colegiado: " + this.medicos[i].getNumeroColegiado()
            )
        }
    };

    public getMedico(numColegiado: number): Medico {
        for (let i = 0; i < this.medicos.length; i++) {
            if (numColegiado == this.medicos[i].getNumeroColegiado()) {
                return this.medicos[i];
            }
        }
        return null;
    };
}

let hospital = new Hospital();
hospital.NuevoMedico(1111, "Dr. Pepe", new Date('2 / 10 / 1950'), 11);
hospital.NuevoMedico(2222, "Dr. Jose", new Date('3 / 15 / 1960'), 22);
hospital.NuevoMedico(3333, "Dr. Anna", new Date('4 / 20 / 1970'), 33);
hospital.NuevoMedico(4444, "Dr. Juan", new Date('5 / 25 / 1980'), 44);
hospital.NuevoMedico(5555, "Dr. Oriol", new Date('5 / 30 / 1990'), 55);


function NuevoPaciente() {
    let numSS: number = parseInt(prompt("Número SS"));
    let nombre: string = prompt("Nombre");
    let fechaNacimiento: Date = new Date(prompt("Fecha nacimiento (mm/dd/yyyy)"));
    let sexo: string = prompt("Sexo");

    hospital.NuevoPaciente(numSS, nombre, fechaNacimiento, sexo);

    let dia = fechaNacimiento.getDate();
    let mes = fechaNacimiento.getMonth();
    let anyo = fechaNacimiento.getFullYear();

    alert("El paciente " + nombre + " nacido en " + dia + "/" + (mes + 1) + "/" + anyo + " con sexo " + sexo + " ha sido creado con éxito");
}

function NuevoIngreso() {
    let numSS = hospital.getNumSSPaciente(parseInt(prompt("Número SS")));
    if (numSS >= 0) {
        let fechaHora: Date = new Date(prompt("Fecha y hora ingreso(mm/dd/yyyy)(hh:mm:ss)"));
        let sintomas: Array<string> = [];

        let ok = true;
        while (ok) {
            let sintoma = prompt("Sintomas");
            if (sintoma == "") {
                ok = false;
            }
            else {
                sintomas.push(sintoma);
            }
        }
        let estado: string = "Pendiente";

        hospital.NuevoIngreso(fechaHora, sintomas, "", estado, hospital.pacientes[numSS]);

        alert("Nuevo ingreso realizado con éxito");
    } else {
        alert("El número de SS no existe");
    }
}

function ListaIngresosPendientes() {
    hospital.getListaIngresosPendiente();
};

function AsignarIngresoMedico() {
    let codigoIngreso = parseInt(prompt("Código de ingreso"));
    let indexCodigoIngreso = hospital.getIndexCodigoIngreso(codigoIngreso);
    if (indexCodigoIngreso >= 0) {
        let numColegiado = parseInt(prompt("Número colegiado"));
        if (hospital.isMedicExist(numColegiado)) {
            let medico = hospital.getMedico(numColegiado);
            if (medico != null) {
                hospital.ingresos[indexCodigoIngreso].setMedico(medico);
                hospital.ingresos[indexCodigoIngreso].setEstado("En curso");
                alert(
                    "El médico " + hospital.ingresos[indexCodigoIngreso].getMedico().getNombre() + " se ha asignado con éxito al ingreso"
                );
            } else {
                alert("El medico no existe");
            }
        } else {
            alert("El número de colegiado no existe");
        }
    } else {
        alert("El código de ingreso no existe");
    }

};

function DiagnosticarIngreso() {
    let codigoIngreso = parseInt(prompt("Código de ingreso"));
    let indexCodigoIngreso = hospital.getIndexCodigoIngreso(codigoIngreso);
    if (indexCodigoIngreso >= 0) {
        let diagnostico = prompt("Diagnostico");
        hospital.ingresos[indexCodigoIngreso].setDiagnostico(diagnostico);
    } else {
        alert("El código de ingreso no existe");
    }
};

function DarAlta() {
    let codigoIngreso = parseInt(prompt("Código de ingreso"));
    let indexCodigoIngreso = hospital.getIndexCodigoIngreso(codigoIngreso);
    if (indexCodigoIngreso >= 0) {
        let diagnostico = hospital.ingresos[indexCodigoIngreso].getDiagnostico();
        if (diagnostico != "") {
            hospital.ingresos[indexCodigoIngreso].setEstado("Alta");
        } else {
            if (hospital.ingresos[indexCodigoIngreso].getEstado() == "Pendiente" || diagnostico == "") {
                alert("El paciente no se puede dar de alta");
            }
        }
    } else {
        alert("El código de ingreso no existe");
    }
};

function ConsultarHistorialPaciente() {
    let numSS = parseInt(prompt("Número SS"));
    let pacienteExist = false;
    for (let i = 0; i < hospital.ingresos.length; i++) {
        if (numSS == hospital.ingresos[i].getPaciente().getNumSS()) {
            pacienteExist = true;
            alert(
                "Código ingreso: " + hospital.ingresos[i].getCodigo() + "\n" +
                "Nombre: " + hospital.ingresos[i].getPaciente().getNombre() + "\n" +
                "Sexo: " + hospital.ingresos[i].getPaciente().getSexo() + "\n" +
                "Fecha nacimiento: " + hospital.ingresos[i].getPaciente().getFechaNacimiento() + "\n" +
                "Fecha ingreso: " + hospital.ingresos[i].getFechaHora() + "\n" +
                "Diagnostico: " + hospital.ingresos[i].getDiagnostico() + "\n" +
                "Síntomas: " + hospital.ingresos[i].getSintomas() + "\n" +
                "Medico asignado: " + hospital.ingresos[i].getMedico().getNombre()
            );
        }
    }
    if (!pacienteExist) {
        alert("El paciente no existe");
    }
};

function ListadoMedicos() {
    hospital.getListaMedicos();
};

function BuscarPaciente() {
    let nom = prompt("Buscar paciente").toLowerCase();
    for (let i = 0; i < hospital.ingresos.length; i++) {
        if (nom == hospital.ingresos[i].getPaciente().getNombre().toLowerCase()) {
            alert(
                "Nombre: " + hospital.ingresos[i].getPaciente().getNombre() + "\n" +
                "Sexo: " + hospital.ingresos[i].getPaciente().getSexo() + "\n" +
                "Fecha nacimiento: " + hospital.ingresos[i].getPaciente().getFechaNacimiento() + "\n" +
                "Fecha ingreso: " + hospital.ingresos[i].getFechaHora() + "\n" +
                "Diagnostico: " + hospital.ingresos[i].getDiagnostico() + "\n" +
                "Síntomas: " + hospital.ingresos[i].getSintomas() + "\n" +
                "Medico asignado: " + hospital.ingresos[i].getMedico().getNombre()
            );
        } else {
            alert("El paciente no existe");
        }
    }
}

document.getElementById("nuevoPaciente").onclick = NuevoPaciente;
document.getElementById("nuevoIngreso").onclick = NuevoIngreso;
document.getElementById("listaIngresosPendientes").onclick = ListaIngresosPendientes;
document.getElementById("asignarIngresoMedico").onclick = AsignarIngresoMedico;
document.getElementById("listadoMedicos").onclick = ListadoMedicos;
document.getElementById("ConsultarHistorialPaciente").onclick = ConsultarHistorialPaciente;
document.getElementById("diagnosticarIngreso").onclick = DiagnosticarIngreso;
document.getElementById("darAlta").onclick = DarAlta;
document.getElementById("buscarPaciente").onclick = BuscarPaciente;
