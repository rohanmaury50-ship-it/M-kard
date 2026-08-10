const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main() {
  await prisma.product.createMany({
    data: [
      { name: 'Classic T-Shirt', description: 'Comfortable cotton t-shirt', price: 1999 },
      { name: 'Sneakers', description: 'Stylish everyday sneakers', price: 5999 },
      { name: 'Coffee Mug', description: 'Ceramic mug, 350ml', price: 999 }
    ],
    skipDuplicates: true
  })
  console.log('Seed finished.')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
