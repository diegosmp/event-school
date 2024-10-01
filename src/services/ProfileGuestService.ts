import { prismaClient } from '../prisma'

class ProfileGuestService {
  async execute(id: string) {
    const guest = await prismaClient.guest.findFirst({ where: { id } })
    return guest
  }
}

export { ProfileGuestService }
