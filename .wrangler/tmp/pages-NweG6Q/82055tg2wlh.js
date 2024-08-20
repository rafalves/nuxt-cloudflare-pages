// <define:__ROUTES__>
var define_ROUTES_default = {
  version: 1,
  include: [
    "/*"
  ],
  exclude: [
    "/_nuxt/*",
    "/favicon.ico",
    "/robots.txt"
  ]
};

// node_modules/wrangler/templates/pages-dev-pipeline.ts
import worker from "C:\\Users\\rafal\\Desktop\\Projetos\\_nuxt\\nuxt-cloudflare-auth\\.wrangler\\tmp\\pages-NweG6Q\\bundledWorker-0.1932087577008581.mjs";
import { isRoutingRuleMatch } from "C:\\Users\\rafal\\Desktop\\Projetos\\_nuxt\\nuxt-cloudflare-auth\\node_modules\\wrangler\\templates\\pages-dev-util.ts";
export * from "C:\\Users\\rafal\\Desktop\\Projetos\\_nuxt\\nuxt-cloudflare-auth\\.wrangler\\tmp\\pages-NweG6Q\\bundledWorker-0.1932087577008581.mjs";
var routes = define_ROUTES_default;
var pages_dev_pipeline_default = {
  fetch(request, env, context) {
    const { pathname } = new URL(request.url);
    for (const exclude of routes.exclude) {
      if (isRoutingRuleMatch(pathname, exclude)) {
        return env.ASSETS.fetch(request);
      }
    }
    for (const include of routes.include) {
      if (isRoutingRuleMatch(pathname, include)) {
        if (worker.fetch === void 0) {
          throw new TypeError("Entry point missing `fetch` handler");
        }
        return worker.fetch(request, env, context);
      }
    }
    return env.ASSETS.fetch(request);
  }
};
export {
  pages_dev_pipeline_default as default
};
//# sourceMappingURL=82055tg2wlh.js.map
