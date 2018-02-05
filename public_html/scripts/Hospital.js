define(["require", "exports", "./Medico", "./Paciente", "./Ingreso"], function (require, exports, Medico_1, Paciente_1, Ingreso_1) {
    "use strict";
    exports.__esModule = true;
    var Hospital = /** @class */ (function () {
        function Hospital() {
            this.pacientes = [];
            this.ingresos = [];
            this.medicos = [];
            this.idIngreso = 1;
        }
        ;
        Hospital.prototype.getIdIngreso = function () {
            return this.idIngreso++;
        };
        ;
        Hospital.prototype.NuevoMedico = function (numSS, nombre, fechaNacimiento, numColegiado) {
            var medico = new Medico_1.Medico(numSS, nombre, fechaNacimiento, numColegiado);
            this.medicos.push(medico);
        };
        ;
        Hospital.prototype.NuevoPaciente = function (numSS, nombre, fechaNacimiento, sexo) {
            var paciente = new Paciente_1.Paciente(numSS, nombre, fechaNacimiento, sexo);
            this.pacientes.push(paciente);
        };
        ;
        Hospital.prototype.NuevoIngreso = function (fechaHora, sintomas, diagnostico, estado, paciente) {
            var ingreso = new Ingreso_1.Ingreso(this.getIdIngreso(), fechaHora, sintomas, diagnostico, estado, paciente);
            this.ingresos.push(ingreso);
        };
        ;
        Hospital.prototype.getNumSSPaciente = function (numSS) {
            var exit = true;
            while (exit) {
                for (var i = 0; i < this.pacientes.length; i++) {
                    if (numSS == this.pacientes[i].getNumSS()) {
                        return i;
                    }
                }
            }
            return -1;
        };
        ;
        Hospital.prototype.getIndexCodigoIngreso = function (codigo) {
            for (var i = 0; i < this.ingresos.length; i++) {
                if (codigo == this.ingresos[i].getCodigo()) {
                    return i;
                }
            }
            return -1;
        };
        ;
        Hospital.prototype.isMedicExist = function (num) {
            for (var i = 0; i < this.medicos.length; i++) {
                if (num == this.medicos[i].getNumeroColegiado()) {
                    return true;
                }
            }
            return false;
        };
        ;
        Hospital.prototype.calcularEdad = function (date) {
            var diff_ms = Date.now() - date.getTime();
            var age_dt = new Date(diff_ms);
            return Math.abs(age_dt.getUTCFullYear() - 1970);
        };
        ;
        Hospital.prototype.getListaIngresosPendiente = function () {
            for (var i = 0; i < this.ingresos.length; i++) {
                if (this.ingresos[i].getEstado() == "Pendiente") {
                    var dia = this.ingresos[i].getFechaHora().getDate();
                    var mes = this.ingresos[i].getFechaHora().getMonth();
                    var anyo = this.ingresos[i].getFechaHora().getFullYear();
                    alert("Nombre: " + this.ingresos[i].getPaciente().getNombre() + "\n" +
                        "Fecha ingreso: " + dia + "/" + (mes + 1) + "/" + anyo + "\n" +
                        "Edad: " + this.calcularEdad(this.ingresos[i].getPaciente().getFechaNacimiento()) + "\n" +
                        "Sexo: " + this.ingresos[i].getPaciente().getSexo());
                }
            }
        };
        ;
        Hospital.prototype.getListaMedicos = function () {
            for (var i = 0; i < this.medicos.length; i++) {
                var dia = this.medicos[i].getFechaNacimiento().getDate();
                var mes = this.medicos[i].getFechaNacimiento().getMonth();
                var anyo = this.medicos[i].getFechaNacimiento().getFullYear();
                alert("#" + (i + 1) + "\n" +
                    "Número SS: " + this.medicos[i].getNumSS() + "\n" +
                    "Nombre: " + this.medicos[i].getNombre() + "\n" +
                    "Fecha nacimiento: " + dia + "/" + mes + "/" + anyo + "\n" +
                    "Número colegiado: " + this.medicos[i].getNumeroColegiado());
            }
        };
        ;
        Hospital.prototype.getMedico = function (numColegiado) {
            for (var i = 0; i < this.medicos.length; i++) {
                if (numColegiado == this.medicos[i].getNumeroColegiado()) {
                    return this.medicos[i];
                }
            }
            return null;
        };
        ;
        return Hospital;
    }());
    exports.Hospital = Hospital;
    var hospital = new Hospital();
    hospital.NuevoMedico(1111, "Dr. Pepe", new Date('2 / 10 / 1950'), 11);
    hospital.NuevoMedico(2222, "Dr. Jose", new Date('3 / 15 / 1960'), 22);
    hospital.NuevoMedico(3333, "Dr. Anna", new Date('4 / 20 / 1970'), 33);
    hospital.NuevoMedico(4444, "Dr. Juan", new Date('5 / 25 / 1980'), 44);
    hospital.NuevoMedico(5555, "Dr. Oriol", new Date('5 / 30 / 1990'), 55);
    function NuevoPaciente() {
        var numSS = parseInt(prompt("Número SS"));
        var nombre = prompt("Nombre");
        var fechaNacimiento = new Date(prompt("Fecha nacimiento (mm/dd/yyyy)"));
        var sexo = prompt("Sexo");
        hospital.NuevoPaciente(numSS, nombre, fechaNacimiento, sexo);
        var dia = fechaNacimiento.getDate();
        var mes = fechaNacimiento.getMonth();
        var anyo = fechaNacimiento.getFullYear();
        alert("El paciente " + nombre + " nacido en " + dia + "/" + (mes + 1) + "/" + anyo + " con sexo " + sexo + " ha sido creado con éxito");
    }
    function NuevoIngreso() {
        var numSS = hospital.getNumSSPaciente(parseInt(prompt("Número SS")));
        if (numSS >= 0) {
            var fechaHora = new Date(prompt("Fecha y hora ingreso(mm/dd/yyyy)(hh:mm:ss)"));
            var sintomas = [];
            var ok = true;
            while (ok) {
                var sintoma = prompt("Sintomas");
                if (sintoma == "") {
                    ok = false;
                }
                else {
                    sintomas.push(sintoma);
                }
            }
            var estado = "Pendiente";
            hospital.NuevoIngreso(fechaHora, sintomas, "", estado, hospital.pacientes[numSS]);
            alert("Nuevo ingreso realizado con éxito");
        }
        else {
            alert("El número de SS no existe");
        }
    }
    function ListaIngresosPendientes() {
        hospital.getListaIngresosPendiente();
    }
    ;
    function AsignarIngresoMedico() {
        var codigoIngreso = parseInt(prompt("Código de ingreso"));
        var indexCodigoIngreso = hospital.getIndexCodigoIngreso(codigoIngreso);
        if (indexCodigoIngreso >= 0) {
            var numColegiado = parseInt(prompt("Número colegiado"));
            if (hospital.isMedicExist(numColegiado)) {
                var medico = hospital.getMedico(numColegiado);
                if (medico != null) {
                    hospital.ingresos[indexCodigoIngreso].setMedico(medico);
                    hospital.ingresos[indexCodigoIngreso].setEstado("En curso");
                    alert("El médico " + hospital.ingresos[indexCodigoIngreso].getMedico().getNombre() + " se ha asignado con éxito al ingreso");
                }
                else {
                    alert("El medico no existe");
                }
            }
            else {
                alert("El número de colegiado no existe");
            }
        }
        else {
            alert("El código de ingreso no existe");
        }
    }
    ;
    function DiagnosticarIngreso() {
        var codigoIngreso = parseInt(prompt("Código de ingreso"));
        var indexCodigoIngreso = hospital.getIndexCodigoIngreso(codigoIngreso);
        if (indexCodigoIngreso >= 0) {
            var diagnostico = prompt("Diagnostico");
            hospital.ingresos[indexCodigoIngreso].setDiagnostico(diagnostico);
        }
        else {
            alert("El código de ingreso no existe");
        }
    }
    ;
    function DarAlta() {
        var codigoIngreso = parseInt(prompt("Código de ingreso"));
        var indexCodigoIngreso = hospital.getIndexCodigoIngreso(codigoIngreso);
        if (indexCodigoIngreso >= 0) {
            var diagnostico = hospital.ingresos[indexCodigoIngreso].getDiagnostico();
            if (diagnostico != "") {
                hospital.ingresos[indexCodigoIngreso].setEstado("Alta");
            }
            else {
                if (hospital.ingresos[indexCodigoIngreso].getEstado() == "Pendiente" || diagnostico == "") {
                    alert("El paciente no se puede dar de alta");
                }
            }
        }
        else {
            alert("El código de ingreso no existe");
        }
    }
    ;
    function ConsultarHistorialPaciente() {
        var numSS = parseInt(prompt("Número SS"));
        var pacienteExist = false;
        for (var i = 0; i < hospital.ingresos.length; i++) {
            if (numSS == hospital.ingresos[i].getPaciente().getNumSS()) {
                pacienteExist = true;
                alert("Código ingreso: " + hospital.ingresos[i].getCodigo() + "\n" +
                    "Nombre: " + hospital.ingresos[i].getPaciente().getNombre() + "\n" +
                    "Sexo: " + hospital.ingresos[i].getPaciente().getSexo() + "\n" +
                    "Fecha nacimiento: " + hospital.ingresos[i].getPaciente().getFechaNacimiento() + "\n" +
                    "Fecha ingreso: " + hospital.ingresos[i].getFechaHora() + "\n" +
                    "Diagnostico: " + hospital.ingresos[i].getDiagnostico() + "\n" +
                    "Síntomas: " + hospital.ingresos[i].getSintomas() + "\n" +
                    "Medico asignado: " + hospital.ingresos[i].getMedico().getNombre());
            }
        }
        if (!pacienteExist) {
            alert("El paciente no existe");
        }
    }
    ;
    function ListadoMedicos() {
        hospital.getListaMedicos();
    }
    ;
    function BuscarPaciente() {
        var nom = prompt("Buscar paciente").toLowerCase();
        for (var i = 0; i < hospital.ingresos.length; i++) {
            if (nom == hospital.ingresos[i].getPaciente().getNombre().toLowerCase()) {
                alert("Nombre: " + hospital.ingresos[i].getPaciente().getNombre() + "\n" +
                    "Sexo: " + hospital.ingresos[i].getPaciente().getSexo() + "\n" +
                    "Fecha nacimiento: " + hospital.ingresos[i].getPaciente().getFechaNacimiento() + "\n" +
                    "Fecha ingreso: " + hospital.ingresos[i].getFechaHora() + "\n" +
                    "Diagnostico: " + hospital.ingresos[i].getDiagnostico() + "\n" +
                    "Síntomas: " + hospital.ingresos[i].getSintomas() + "\n" +
                    "Medico asignado: " + hospital.ingresos[i].getMedico().getNombre());
            }
            else {
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
});
