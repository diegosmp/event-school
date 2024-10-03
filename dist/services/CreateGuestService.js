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
exports.CreateGuestService = void 0;
const prisma_1 = require("../prisma");
class CreateGuestService {
    execute(_a) {
        return __awaiter(this, arguments, void 0, function* ({ firstname, lastname, cpf, tel, email, type, local, employee, }) {
            const guest = yield prisma_1.prismaClient.guest.create({
                data: {
                    firstname,
                    lastname,
                    cpf,
                    tel,
                    email,
                    type,
                    local,
                    employee,
                },
            });
            return guest;
        });
    }
}
exports.CreateGuestService = CreateGuestService;
