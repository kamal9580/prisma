
import { PrismaClient } from '@prisma/client'
import { skip } from 'node:test';

const prisma = new PrismaClient({
    log: ['info', 'query']
})

async function main() {
  let res = await prisma.post.findMany({
    take: 3,
    skip: 10
  })
    console.log(res);//ye jo take aur skip hai ye pagenation me madd karta hai ki
    //take 3 and skip 10 ek page me 3 dikhao baki ko skip dusre page me dikhao
    //isi ko gar sql me likhege to SELECT * FROM question OFFSET 0 LIMIT 10;
    
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