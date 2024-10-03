"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isFormatedCpf = isFormatedCpf;
function isFormatedCpf(cpf) {
    const cpfFormat = cpf.replace(/\D/g, '');
    return cpfFormat;
}
