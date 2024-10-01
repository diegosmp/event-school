import { prismaClient } from '../prisma'

interface GuestRequest {
  id: string
  firstname: string
  lastname: string
  tel: string
  email?: string
  type: string
  local: string
  employee: string
}

class EditGuestService {
  async execute({
    id,
    firstname,
    lastname,
    tel,
    email,
    type,
    local,
    employee,
  }: GuestRequest) {
    const guest = await prismaClient.guest.update({
      where: { id },
      data: {
        firstname,
        lastname,
        tel,
        email,
        type,
        local,
        employee,
      },
    })

    return guest
  }
}

export { EditGuestService }
