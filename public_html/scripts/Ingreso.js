define(["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    var Ingreso = /** @class */ (function () {
        function Ingreso(codigo, fechaHora, sintomas, diagnostico, estado, paciente) {
            this.sintomas = new Array();
            this.codigo = codigo;
            this.fechaHora = fechaHora;
            this.sintomas = sintomas;
            this.diagnostico = diagnostico;
            this.estado = estado;
            this.paciente = paciente;
            this.medico = null;
        }
        ;
        Ingreso.prototype.getCodigo = function () {
            return this.codigo;
        };
        ;
        Ingreso.prototype.setCodigo = function (codigo) {
            this.codigo = codigo;
        };
        ;
        Ingreso.prototype.getFechaHora = function () {
            return this.fechaHora;
        };
        ;
        Ingreso.prototype.setFechaHora = function (fechaHora) {
            this.fechaHora = fechaHora;
        };
        ;
        Ingreso.prototype.getSintomas = function () {
            return this.sintomas;
        };
        ;
        Ingreso.prototype.setSintomas = function (sintomas) {
            this.sintomas = sintomas;
        };
        ;
        Ingreso.prototype.getDiagnostico = function () {
            return this.diagnostico;
        };
        ;
        Ingreso.prototype.setDiagnostico = function (diagnostico) {
            this.diagnostico = diagnostico;
        };
        ;
        Ingreso.prototype.getEstado = function () {
            return this.estado;
        };
        ;
        Ingreso.prototype.setEstado = function (estado) {
            this.estado = estado;
        };
        ;
        Ingreso.prototype.getPaciente = function () {
            return this.paciente;
        };
        ;
        Ingreso.prototype.setPaciente = function (paciente) {
            this.paciente = paciente;
        };
        ;
        Ingreso.prototype.getMedico = function () {
            return this.medico;
        };
        ;
        Ingreso.prototype.setMedico = function (medico) {
            this.medico = medico;
        };
        ;
        return Ingreso;
    }());
    exports.Ingreso = Ingreso;
});
