import { Request, Response } from 'express'
import { CreateGuestService } from '../services/CreateGuestService'

class CreateGuestController {
  async handle(req: Request, res: Response) {
    const { firstname, lastname, cpf, tel, email, type, local, employee } =
      req.body

    if (!firstname) throw Error('Firstname is required!')
    if (!lastname) throw Error('Lastname is required!')
    if (!cpf) throw Error('Cpf is required!')
    if (!tel) throw Error('Phone is required!')
    if (!type) throw Error('Type is required!')
    if (!local) throw Error('Local is required!')
    if (!employee) throw Error('Name employee is required!')

    try {
      const createGuestService = new CreateGuestService()
      const guest = await createGuestService.execute({
        firstname,
        lastname,
        cpf,
        tel,
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
