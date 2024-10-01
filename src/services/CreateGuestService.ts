import { prismaClient } from '../prisma'

interface GuestRequest {
  firstname: string
  lastname: string
  cpf: string
  tel: string
  email?: string
  type: string
  local: string
  employee: string
}

class CreateGuestService {
  async execute({
    firstname,
    lastname,
    cpf,
    tel,
    email,
    type,
    local,
    employee,
  }: GuestRequest) {
    const guest = await prismaClient.guest.create({
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
    })

    return guest
  }
}

export { CreateGuestService }
