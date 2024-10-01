import { Request, Response } from 'express'
import { CreateGuestService } from '../services/CreateGuestService'
import { isValidEmail } from '../libs/isValidadEmail'
import { isFormatedCpf } from '../libs/isFormatedCpf'
import { isFormatedPhone } from '../libs/isFormatedPhone'

class CreateGuestController {
  async handle(req: Request, res: Response) {
    const { firstname, lastname, cpf, tel, email, type, local, employee } =
      req.body
    if (email) {
      const isValidEmailChecked = isValidEmail(email)
      if (!isValidEmailChecked) throw Error('E-mail is invalided!')
    }
    if (!firstname) throw Error('Firstname is required!')
    if (!lastname) throw Error('Lastname is required!')
    if (!cpf) throw Error('Cpf is required!')
    const cpfFormated = isFormatedCpf(cpf)
    if (cpfFormated.length !== 11) throw Error('CPF is invalided!')
    if (!tel) throw Error('Phone is required!')
    const phoneFormated = isFormatedPhone(tel)
    if (phoneFormated.length !== 11) throw Error('Phone is invalided!')
    if (!type) throw Error('Type is required!')
    if (!local) throw Error('Local is required!')
    if (!employee) throw Error('Name employee is required!')

    try {
      const createGuestService = new CreateGuestService()
      const guest = await createGuestService.execute({
        firstname,
        lastname,
        cpf: cpfFormated,
        tel: phoneFormated,
        email,
        type,
        local,
        employee,
      })
      return res.status(201).json(guest)
    } catch (error) {
      return
    }
  }
}

export { CreateGuestController }
