export default defineEventHandler(async ({ context }) => {
  const { DB } = context.cloudflare.env;

  const stmt = DB.prepare("SELECT * FROM comments LIMIT 3");
  const { results } = await stmt.all();

  console.log('antes')
  console.log(results)
  console.log('depois')

  return {
    data: 'teste'
  }
});