import { Router } from 'express'
import { CreateGuestController } from './controllers/CreateGuestController'
import { EditGuestController } from './controllers/EditGuestController'
import { DeleteGuestController } from './controllers/DeleteGuestController'
import { ShowAllGuestController } from './controllers/ShowAllGuestController'
import { ProfileGuestController } from './controllers/ProfileGuestController'

const routes = Router()

routes.get('/guest', new ShowAllGuestController().handle)
routes.post('/guest/signup', new CreateGuestController().handle)
routes.patch('/guest/profile', new EditGuestController().handle)
routes.get('/guest/profile', new ProfileGuestController().handle)
routes.delete('/guest/profile/delete', new DeleteGuestController().handle)

export default routes
