import { Request, Response } from 'express'
import { DeleteGuestService } from '../services/DeleteGuestService'

class DeleteGuestController {
  async handle(req: Request, res: Response) {
    const { id } = req.body
    if (!id) throw Error('Id is required!')

    try {
      const deleteGuestService = new DeleteGuestService()
      const guest = await deleteGuestService.execute(id)
      return res.json(guest)
    } catch (error) {
      return
    }
  }
}

export { DeleteGuestController }
