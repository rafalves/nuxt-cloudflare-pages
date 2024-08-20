import{d as o}from"../../runtime.mjs";const e=o((async({context:o})=>{const{DB:e}=o.cloudflare.env,t=e.prepare("SELECT * FROM comments LIMIT 3"),s=await t.all();return console.log("antes"),console.log(s),console.log("depois"),{data:"teste"}}));export{e as default};
//# sourceMappingURL=teste.get.mjs.map
