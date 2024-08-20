				import worker, * as OTHER_EXPORTS from "C:\\Users\\rafal\\Desktop\\Projetos\\_nuxt\\nuxt-cloudflare-auth\\.wrangler\\tmp\\pages-hK0FiF\\8v4u4srjpb3.js";
				import * as __MIDDLEWARE_0__ from "C:\\Users\\rafal\\Desktop\\Projetos\\_nuxt\\nuxt-cloudflare-auth\\node_modules\\wrangler\\templates\\middleware\\middleware-ensure-req-body-drained.ts";
import * as __MIDDLEWARE_1__ from "C:\\Users\\rafal\\Desktop\\Projetos\\_nuxt\\nuxt-cloudflare-auth\\node_modules\\wrangler\\templates\\middleware\\middleware-miniflare3-json-error.ts";
				
				worker.middleware = [
					__MIDDLEWARE_0__.default,__MIDDLEWARE_1__.default,
					...(worker.middleware ?? []),
				].filter(Boolean);
				
				export * from "C:\\Users\\rafal\\Desktop\\Projetos\\_nuxt\\nuxt-cloudflare-auth\\.wrangler\\tmp\\pages-hK0FiF\\8v4u4srjpb3.js";
				export default worker;