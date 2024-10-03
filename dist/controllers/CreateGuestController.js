"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateGuestController = void 0;
const CreateGuestService_1 = require("../services/CreateGuestService");
const isValidadEmail_1 = require("../libs/isValidadEmail");
const isFormatedCpf_1 = require("../libs/isFormatedCpf");
const isFormatedPhone_1 = require("../libs/isFormatedPhone");
class CreateGuestController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { firstname, lastname, cpf, tel, email, type, local, employee } = req.body;
            if (email) {
                const isValidEmailChecked = (0, isValidadEmail_1.isValidEmail)(email);
                if (!isValidEmailChecked)
                    throw Error('E-mail is invalided!');
            }
            if (!firstname)
                throw Error('Firstname is required!');
            if (!lastname)
                throw Error('Lastname is required!');
            if (!cpf)
                throw Error('Cpf is required!');
            const cpfFormated = (0, isFormatedCpf_1.isFormatedCpf)(cpf);
            if (cpfFormated.length !== 11)
                throw Error('CPF is invalided!');
            if (!tel)
                throw Error('Phone is required!');
            const phoneFormated = (0, isFormatedPhone_1.isFormatedPhone)(tel);
            if (phoneFormated.length !== 11)
                throw Error('Phone is invalided!');
            if (!type)
                throw Error('Type is required!');
            if (!local)
                throw Error('Local is required!');
            if (!employee)
                throw Error('Name employee is required!');
            try {
                const createGuestService = new CreateGuestService_1.CreateGuestService();
                const guest = yield createGuestService.execute({
                    firstname,
                    lastname,
                    cpf: cpfFormated,
                    tel: phoneFormated,
                    email,
                    type,
                    local,
                    employee,
                });
                return res.status(201).json(guest);
            }
            catch (error) {
                return;
            }
        });
    }
}
exports.CreateGuestController = CreateGuestController;
