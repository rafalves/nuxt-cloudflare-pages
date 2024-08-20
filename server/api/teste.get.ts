export default defineEventHandler(async ({ context }) => {
  const { DB } = context.cloudflare.env;

  // console.log(context.cloudflare.env.DB)
  const stmt = DB.prepare("SELECT * FROM Customers  LIMIT 3");
  const { results } = await stmt.all();

  console.log(results)

  return {
    data: results
  }
});