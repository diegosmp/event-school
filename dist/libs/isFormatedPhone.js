"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isFormatedPhone = isFormatedPhone;
function isFormatedPhone(tel) {
    const phoneNumberFormated = tel.replace(/\D/g, '');
    return phoneNumberFormated;
}
