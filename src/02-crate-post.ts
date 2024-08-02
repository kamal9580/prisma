
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

  
// const prisma = new PrismaClient( {log: ['info' , 'query'],})
//{log: ['info' , 'query'],} if we write this then it will show the what the sql command running in my prisma orm

async function main() {
  await prisma.post.create({
    data: {
     title: "title of post",
     author: {
        connect: {
            id: 1 //we create the user table here we write 1 means this post connect to user 1
        }
     }
    }
  })
}

main()
  .then(async () => {
    console.log("done");
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })