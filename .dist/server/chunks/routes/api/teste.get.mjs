import { d as defineEventHandler } from '../../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';

const teste_get = defineEventHandler(async ({ context }) => {
  const { DB } = context.cloudflare.env;
  const stmt = DB.prepare("SELECT * FROM comments LIMIT 3");
  const { results } = await stmt.all();
  console.log("antes");
  console.log(results);
  console.log("depois");
  return {
    data: "teste"
  };
});

export { teste_get as default };
//# sourceMappingURL=teste.get.mjs.map
