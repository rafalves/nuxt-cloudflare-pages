import { drizzle } from 'drizzle-orm/d1';

export default defineEventHandler(async (event) => {
  const { DB } = event.context.cloudflare.env

  event.context.db = drizzle(DB)
})

