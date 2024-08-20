import{d as e}from"../../runtime.mjs";const o=e((async({context:e})=>{e.cloudflare.env;const o=e.cloudflare.env.DB.prepare("SELECT * FROM comments LIMIT 3"),t=await o.all();return console.log("antes"),console.log(t),console.log("depois"),{data:"teste"}}));export{o as default};
//# sourceMappingURL=teste.get.mjs.map
