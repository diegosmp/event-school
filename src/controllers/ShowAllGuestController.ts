import { Request, Response } from 'express'
import { ShowAllGuestService } from '../services/ShowAllGuestService'

class ShowAllGuestController {
  async handle(req: Request, res: Response) {
    try {
      const showAllGuestService = new ShowAllGuestService()
      const guest = await showAllGuestService.execute()
      return res.json(guest)
    } catch (error) {
      return
    }
  }
}

export { ShowAllGuestController }
