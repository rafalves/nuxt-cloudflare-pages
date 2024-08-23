import { customers } from '../database/schema';

export default defineEventHandler(async ({ context }) => {

  // const stmt = DB.prepare("SELECT * FROM Customers  LIMIT 3");
  // const { results } = await stmt.all();


  // const db = drizzle(DB)
  const results = await context.db.select().from(customers).all()

  console.log(context.db)

  return {
    data: results
  }
});