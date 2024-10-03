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
exports.EditGuestController = void 0;
const EditGuestService_1 = require("../services/EditGuestService");
const isFormatedPhone_1 = require("../libs/isFormatedPhone");
const isValidadEmail_1 = require("../libs/isValidadEmail");
class EditGuestController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { firstname, lastname, tel, email, type, local, employee } = req.body;
            const id = req.query.id;
            if (email) {
                const isValidEmailChecked = (0, isValidadEmail_1.isValidEmail)(email);
                if (!isValidEmailChecked)
                    throw Error('E-mail is invalided!');
            }
            if (!firstname)
                throw Error('Firstname is required!');
            if (!lastname)
                throw Error('Lastname is required!');
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
                const editGuestService = new EditGuestService_1.EditGuestService();
                const guest = yield editGuestService.execute({
                    firstname,
                    lastname,
                    tel: phoneFormated,
                    email,
                    type,
                    local,
                    employee,
                    id,
                });
                return res.json(guest);
            }
            catch (error) {
                return;
            }
        });
    }
}
exports.EditGuestController = EditGuestController;
