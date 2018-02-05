define(["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    var Persona = /** @class */ (function () {
        function Persona(numSS, nombre, fechaNacimiento) {
            this.numSS = numSS;
            this.nombre = nombre;
            this.fechaNacimiento = fechaNacimiento;
        }
        ;
        Persona.prototype.getNumSS = function () {
            return this.numSS;
        };
        ;
        Persona.prototype.setNumSS = function (numSS) {
            this.numSS = numSS;
        };
        ;
        Persona.prototype.getNombre = function () {
            return this.nombre;
        };
        ;
        Persona.prototype.setNombre = function (nombre) {
            this.nombre = nombre;
        };
        ;
        Persona.prototype.getFechaNacimiento = function () {
            return this.fechaNacimiento;
        };
        ;
        Persona.prototype.setFechaNacimiento = function (fechaNacimiento) {
            this.fechaNacimiento = fechaNacimiento;
        };
        ;
        return Persona;
    }());
    exports.Persona = Persona;
});
