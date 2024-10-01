import { Request, Response } from 'express'
import { EditGuestService } from '../services/EditGuestService'

class EditGuestController {
  async handle(req: Request, res: Response) {
    const { firstname, lastname, tel, email, type, local, employee } = req.body
    const id = req.query.id as string

    if (!firstname) throw Error('Firstname is required!')
    if (!lastname) throw Error('Lastname is required!')
    if (!tel) throw Error('Phone is required!')
    if (!type) throw Error('Type is required!')
    if (!local) throw Error('Local is required!')
    if (!employee) throw Error('Name employee is required!')

    try {
      const editGuestService = new EditGuestService()
      const guest = await editGuestService.execute({
        firstname,
        lastname,
        tel,
        email,
        type,
        local,
        employee,
        id,
      })

      return res.json(guest)
    } catch (error) {
      return
    }
  }
}

export { EditGuestController }
