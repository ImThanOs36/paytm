import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  const alice = await prisma.user.upsert({
    where: { number: '9999999991' },
    update: {},
    create: {
      number: '9999999991',
      password: '$2b$10$Q/o3Dd6jcv4i9/CZaACqY.tuxzsX335.nLK1KmHTcERoP4ygNtMwO',
      name: 'ThanOsdemo', 
      OnRampTransaction: {
        create: {
          startTime: new Date(),
          status: "Success",
          amount: 20000,
          token: "122",
          provider: "HDFC Bank",
        },
      },
    },
  })

}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })