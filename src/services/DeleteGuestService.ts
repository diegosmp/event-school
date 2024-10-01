import { prismaClient } from '../prisma'

class DeleteGuestService {
  async execute(id: string) {
    const guest = await prismaClient.guest.delete({ where: { id } })
    return guest
  }
}

export { DeleteGuestService }
