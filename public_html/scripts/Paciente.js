var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define(["require", "exports", "./Persona"], function (require, exports, Persona_1) {
    "use strict";
    exports.__esModule = true;
    var Paciente = /** @class */ (function (_super) {
        __extends(Paciente, _super);
        function Paciente(numSS, nombre, fechaNacimiento, sexo) {
            var _this = _super.call(this, numSS, nombre, fechaNacimiento) || this;
            _this.sexo = sexo;
            return _this;
        }
        ;
        Paciente.prototype.getSexo = function () {
            return this.sexo;
        };
        ;
        Paciente.prototype.setSexo = function (sexo) {
            this.sexo = sexo;
        };
        ;
        return Paciente;
    }(Persona_1.Persona));
    exports.Paciente = Paciente;
});
