import { prismaClient } from '../prisma'

class ShowAllGuestService {
  async execute() {
    const guest = await prismaClient.guest.findMany()
    return guest
  }
}

export { ShowAllGuestService }
