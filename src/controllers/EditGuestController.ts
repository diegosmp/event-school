import { Request, Response } from 'express'
import { EditGuestService } from '../services/EditGuestService'
import { isFormatedPhone } from '../libs/isFormatedPhone'
import { isValidEmail } from '../libs/isValidadEmail'

class EditGuestController {
  async handle(req: Request, res: Response) {
    const { firstname, lastname, tel, email, type, local, employee } = req.body
    const id = req.query.id as string

    if (email) {
      const isValidEmailChecked = isValidEmail(email)
      if (!isValidEmailChecked) throw Error('E-mail is invalided!')
    }
    if (!firstname) throw Error('Firstname is required!')
    if (!lastname) throw Error('Lastname is required!')
    if (!tel) throw Error('Phone is required!')
    const phoneFormated = isFormatedPhone(tel)
    if (phoneFormated.length !== 11) throw Error('Phone is invalided!')
    if (!type) throw Error('Type is required!')
    if (!local) throw Error('Local is required!')
    if (!employee) throw Error('Name employee is required!')

    try {
      const editGuestService = new EditGuestService()
      const guest = await editGuestService.execute({
        firstname,
        lastname,
        tel: phoneFormated,
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
