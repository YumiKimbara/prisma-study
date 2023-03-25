// This code allows me to access client
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()


const main = async() => {
    // this prisma.user came from the User model I created
    const user = await prisma.user.create({data: {name: "Kyle"}})
    //user.findMany -> will show all user I created
    console.log("user", user)
}

main().catch(e => {
    console.error(e.message)
}).finally(async () => {
    // it is not a must to disconnect
    await prisma.$disconnect();
})