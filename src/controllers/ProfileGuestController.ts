import { Request, Response } from 'express'
import { ProfileGuestService } from '../services/ProfileGuestService'

class ProfileGuestController {
  async handle(req: Request, res: Response) {
    const id = req.query.id as string
    if (!id) throw Error('Id is required!')
    try {
      const profileGuestService = new ProfileGuestService()
      const guest = await profileGuestService.execute(id)
      return res.json(guest)
    } catch (error) {
      return
    }
  }
}
export { ProfileGuestController }
