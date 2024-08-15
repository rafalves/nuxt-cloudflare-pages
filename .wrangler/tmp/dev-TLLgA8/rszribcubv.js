var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __esm = (fn2, res) => function __init() {
  return fn2 && (res = (0, fn2[__getOwnPropNames(fn2)[0]])(fn2 = 0)), res;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// .wrangler/tmp/bundle-uU6433/checked-fetch.js
function checkURL(request, init) {
  const url = request instanceof URL ? request : new URL(
    (typeof request === "string" ? new Request(request, init) : request).url
  );
  if (url.port && url.port !== "443" && url.protocol === "https:") {
    if (!urls.has(url.toString())) {
      urls.add(url.toString());
      console.warn(
        `WARNING: known issue with \`fetch()\` requests to custom HTTPS ports in published Workers:
 - ${url.toString()} - the custom port will be ignored when the Worker is published using the \`wrangler deploy\` command.
`
      );
    }
  }
}
var urls;
var init_checked_fetch = __esm({
  ".wrangler/tmp/bundle-uU6433/checked-fetch.js"() {
    "use strict";
    urls = /* @__PURE__ */ new Set();
    globalThis.fetch = new Proxy(globalThis.fetch, {
      apply(target, thisArg, argArray) {
        const [request, init] = argArray;
        checkURL(request, init);
        return Reflect.apply(target, thisArg, argArray);
      }
    });
  }
});

// wrangler-modules-watch:wrangler:modules-watch
var init_wrangler_modules_watch = __esm({
  "wrangler-modules-watch:wrangler:modules-watch"() {
    init_checked_fetch();
    init_modules_watch_stub();
  }
});

// node_modules/wrangler/templates/modules-watch-stub.js
var init_modules_watch_stub = __esm({
  "node_modules/wrangler/templates/modules-watch-stub.js"() {
    init_wrangler_modules_watch();
  }
});

// .wrangler/tmp/pages-WENPGt/chunks/_/error-500.mjs
var error_500_exports = {};
__export(error_500_exports, {
  template: () => template
});
var e, template;
var init_error_500 = __esm({
  ".wrangler/tmp/pages-WENPGt/chunks/_/error-500.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    e = { appName: "Nuxt", version: "", statusCode: 500, statusMessage: "Server error", description: "This page is temporarily unavailable." };
    template = (t5) => '<!DOCTYPE html><html lang="en"><head><title>' + (t5 = { ...e, ...t5 }).statusCode + " - " + t5.statusMessage + " | " + t5.appName + `</title><meta charset="utf-8"><meta content="width=device-width,initial-scale=1,minimum-scale=1" name="viewport"><style>.spotlight{background:linear-gradient(45deg, #00DC82 0%, #36E4DA 50%, #0047E1 100%);filter:blur(20vh)}*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:var(--un-default-border-color, #e5e7eb)}:before,:after{--un-content:""}html{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{margin:0;line-height:inherit}h1{font-size:inherit;font-weight:inherit}h1,p{margin:0}*,:before,:after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / .5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }.fixed{position:fixed}.-bottom-1\\/2{bottom:-50%}.left-0{left:0}.right-0{right:0}.grid{display:grid}.mb-16{margin-bottom:4rem}.mb-8{margin-bottom:2rem}.h-1\\/2{height:50%}.max-w-520px{max-width:520px}.min-h-screen{min-height:100vh}.place-content-center{place-content:center}.overflow-hidden{overflow:hidden}.bg-white{--un-bg-opacity:1;background-color:rgb(255 255 255 / var(--un-bg-opacity))}.px-8{padding-left:2rem;padding-right:2rem}.text-center{text-align:center}.text-8xl{font-size:6rem;line-height:1}.text-xl{font-size:1.25rem;line-height:1.75rem}.text-black{--un-text-opacity:1;color:rgb(0 0 0 / var(--un-text-opacity))}.font-light{font-weight:300}.font-medium{font-weight:500}.leading-tight{line-height:1.25}.font-sans{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji"}.antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}@media (prefers-color-scheme: dark){.dark\\:bg-black{--un-bg-opacity:1;background-color:rgb(0 0 0 / var(--un-bg-opacity))}.dark\\:text-white{--un-text-opacity:1;color:rgb(255 255 255 / var(--un-text-opacity))}}@media (min-width: 640px){.sm\\:px-0{padding-left:0;padding-right:0}.sm\\:text-4xl{font-size:2.25rem;line-height:2.5rem}}</style><script>(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();<\/script></head><body class="font-sans antialiased bg-white dark:bg-black text-black dark:text-white grid min-h-screen place-content-center overflow-hidden"><div class="fixed -bottom-1/2 left-0 right-0 h-1/2 spotlight"></div><div class="max-w-520px text-center"><h1 class="text-8xl sm:text-10xl font-medium mb-8">` + t5.statusCode + '</h1><p class="text-xl px-8 sm:px-0 sm:text-4xl font-light mb-16 leading-tight">' + t5.description + "</p></div></body></html>";
  }
});

// .wrangler/tmp/pages-WENPGt/chunks/build/client.manifest.mjs
var client_manifest_exports = {};
__export(client_manifest_exports, {
  default: () => e2
});
var e2;
var init_client_manifest = __esm({
  ".wrangler/tmp/pages-WENPGt/chunks/build/client.manifest.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    e2 = { "node_modules/nuxt/dist/app/components/error-404.vue": { resourceType: "script", module: true, prefetch: true, preload: true, file: "B6hI22md.js", name: "error-404", src: "node_modules/nuxt/dist/app/components/error-404.vue", isDynamicEntry: true, imports: ["node_modules/nuxt/dist/app/entry.js"], css: [] }, "error-404.CjGVuf6H.css": { file: "error-404.CjGVuf6H.css", resourceType: "style", prefetch: true, preload: true }, "node_modules/nuxt/dist/app/components/error-500.vue": { resourceType: "script", module: true, prefetch: true, preload: true, file: "BHSjwYJc.js", name: "error-500", src: "node_modules/nuxt/dist/app/components/error-500.vue", isDynamicEntry: true, imports: ["node_modules/nuxt/dist/app/entry.js"], css: [] }, "error-500.DFBAsgKS.css": { file: "error-500.DFBAsgKS.css", resourceType: "style", prefetch: true, preload: true }, "node_modules/nuxt/dist/app/entry.js": { resourceType: "script", module: true, prefetch: true, preload: true, file: "Dg5t7qGw.js", name: "entry", src: "node_modules/nuxt/dist/app/entry.js", isEntry: true, dynamicImports: ["node_modules/nuxt/dist/app/components/error-404.vue", "node_modules/nuxt/dist/app/components/error-500.vue"], css: ["entry.ASuS4Yfc.css"], _globalCSS: true }, "entry.ASuS4Yfc.css": { file: "entry.ASuS4Yfc.css", resourceType: "style", prefetch: true, preload: true } };
  }
});

// .wrangler/tmp/pages-WENPGt/chunks/build/entry-styles-1.mjs-Cl74qY_t.mjs
var a;
var init_entry_styles_1_mjs_Cl74qY_t = __esm({
  ".wrangler/tmp/pages-WENPGt/chunks/build/entry-styles-1.mjs-Cl74qY_t.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    a = "@media (prefers-color-scheme:light){.get-started-gradient-border[data-v-8526c2ef]{background:linear-gradient(90deg,#fff,#fff),linear-gradient(90deg,#00dc82,#1de0b1,#36e4da)}.gradient-border-modules[data-v-8526c2ef]{background:linear-gradient(var(--gradient-angle),#f7d14c,rgba(247,209,76,.6),hsla(0,0%,100%,.8),#f7d14c)}.gradient-border-examples[data-v-8526c2ef]{background:linear-gradient(var(--gradient-angle),#8deaff,rgba(141,234,255,.6),hsla(0,0%,100%,.8),#8deaff)}.gradient-border-documentation[data-v-8526c2ef]{background:linear-gradient(var(--gradient-angle),#00dc82,rgba(0,220,130,.6),hsla(0,0%,100%,.8),#00dc82)}}@media (prefers-color-scheme:dark){.get-started-gradient-border[data-v-8526c2ef]{background:linear-gradient(90deg,#18181b,#18181b),linear-gradient(90deg,#00dc82,#1de0b1,#36e4da)}.gradient-border-modules[data-v-8526c2ef]{background:linear-gradient(var(--gradient-angle),#f7d14c,#a38108,hsla(0,0%,100%,.3),#a38108)}.gradient-border-examples[data-v-8526c2ef]{background:linear-gradient(var(--gradient-angle),#8deaff,#008aa9,hsla(0,0%,100%,.3),#008aa9)}.gradient-border-documentation[data-v-8526c2ef]{background:linear-gradient(var(--gradient-angle),#00dc82,#003f25,hsla(0,0%,100%,.2),#003f25)}}.get-started-gradient-border[data-v-8526c2ef]{background-clip:padding-box,border-box;background-origin:padding-box,border-box;border-color:transparent;border-radius:12px;border-width:1px}.get-started-gradient-border[data-v-8526c2ef]:hover>:is(.get-started-gradient-left,.get-started-gradient-right){opacity:.2}.get-started-gradient-left[data-v-8526c2ef],.get-started-gradient-right[data-v-8526c2ef]{opacity:0}.gradient-border[data-v-8526c2ef]{border-radius:12px;left:0;opacity:0;position:absolute;top:0;transform:translate(-1px,-1px);width:calc(100% + 2px);z-index:-1}.gradient-border-rect[data-v-8526c2ef]{height:calc(100% + 2px)}@media (min-width:1024px){.gradient-border-rect[data-v-8526c2ef]{height:calc(100% + 1px)}}.gradient-border-square[data-v-8526c2ef]{height:calc(100% + 2px)}.modules-gradient-right[data-v-8526c2ef]{opacity:0}.documentation-container:hover>.gradient-border[data-v-8526c2ef],.examples-container:hover>.gradient-border[data-v-8526c2ef],.modules-container:hover>.gradient-border[data-v-8526c2ef]{animation:gradient-rotate 5s linear 0s infinite reverse;opacity:1;transition:all .3s linear}.examples-container:hover>.examples-gradient-right[data-v-8526c2ef],.modules-container:hover>.modules-gradient-right[data-v-8526c2ef]{opacity:.2}.examples-gradient-right[data-v-8526c2ef]{opacity:0}.documentation-image-color-dark[data-v-8526c2ef],.documentation-image-color-light[data-v-8526c2ef],.examples-image-color-dark[data-v-8526c2ef],.examples-image-color-light[data-v-8526c2ef],.modules-image-color-dark[data-v-8526c2ef],.modules-image-color-light[data-v-8526c2ef]{display:none}@media (prefers-color-scheme:light){.modules-image-light[data-v-8526c2ef]{display:block}.modules-container:hover>a>.modules-image-light[data-v-8526c2ef],.modules-image-dark[data-v-8526c2ef]{display:none}.examples-image-light[data-v-8526c2ef],.modules-container:hover>a>.modules-image-color-light[data-v-8526c2ef]{display:block}.examples-container:hover>a>.examples-image-light[data-v-8526c2ef],.examples-image-dark[data-v-8526c2ef]{display:none}.documentation-image-light[data-v-8526c2ef],.examples-container:hover>a>.examples-image-color-light[data-v-8526c2ef]{display:block}.documentation-container:hover>a>div>.documentation-image-light[data-v-8526c2ef],.documentation-image-dark[data-v-8526c2ef]{display:none}.documentation-container:hover>a>div>.documentation-image-color-light[data-v-8526c2ef]{display:block}}@media (prefers-color-scheme:dark){.modules-image-dark[data-v-8526c2ef]{display:block}.modules-image-light[data-v-8526c2ef]{display:none}.modules-container:hover>a>.modules-image-color-dark[data-v-8526c2ef]{display:block}.modules-container:hover>a>.modules-image-dark[data-v-8526c2ef]{display:none}.examples-image-dark[data-v-8526c2ef]{display:block}.examples-image-light[data-v-8526c2ef]{display:none}.examples-container:hover>a>.examples-image-color-dark[data-v-8526c2ef]{display:block}.examples-container:hover>a>.examples-image-dark[data-v-8526c2ef]{display:none}.documentation-image-dark[data-v-8526c2ef]{display:block}.documentation-image-light[data-v-8526c2ef]{display:none}.documentation-container:hover>a>div>.documentation-image-color-dark[data-v-8526c2ef]{display:block}.documentation-container:hover>a>div>.documentation-image-dark[data-v-8526c2ef]{display:none}}.sr-only[data-v-8526c2ef]{height:1px;margin:-1px;overflow:hidden;padding:0;width:1px;clip:rect(0,0,0,0);border-width:0;white-space:nowrap}.absolute[data-v-8526c2ef],.sr-only[data-v-8526c2ef]{position:absolute}.relative[data-v-8526c2ef]{position:relative}.inset-x-0[data-v-8526c2ef]{left:0;right:0}.inset-y-0[data-v-8526c2ef]{bottom:0;top:0}.-top-\\[58px\\][data-v-8526c2ef]{top:-58px}.-top-3[data-v-8526c2ef]{top:-.75rem}.left-0[data-v-8526c2ef]{left:0}.right-0[data-v-8526c2ef]{right:0}.z-1[data-v-8526c2ef]{z-index:1}.z-10[data-v-8526c2ef]{z-index:10}.order-last[data-v-8526c2ef]{order:9999}.grid[data-v-8526c2ef]{display:grid}.col-span-2[data-v-8526c2ef]{grid-column:span 2/span 2}.row-span-2[data-v-8526c2ef]{grid-row:span 2/span 2}.grid-cols-2[data-v-8526c2ef]{grid-template-columns:repeat(2,minmax(0,1fr))}.mx-auto[data-v-8526c2ef]{margin-left:auto;margin-right:auto}.mb-2[data-v-8526c2ef]{margin-bottom:.5rem}.hidden[data-v-8526c2ef]{display:none}.h-\\[70px\\][data-v-8526c2ef]{height:70px}.h-32[data-v-8526c2ef]{height:8rem}.max-w-\\[960px\\][data-v-8526c2ef]{max-width:960px}.min-h-screen[data-v-8526c2ef]{min-height:100vh}.w-\\[20\\%\\][data-v-8526c2ef]{width:20%}.w-full[data-v-8526c2ef]{width:100%}.flex[data-v-8526c2ef]{display:flex}.flex-1[data-v-8526c2ef]{flex:1 1 0%}.flex-col[data-v-8526c2ef]{flex-direction:column}.flex-col-reverse[data-v-8526c2ef]{flex-direction:column-reverse}.place-content-center[data-v-8526c2ef]{place-content:center}.items-center[data-v-8526c2ef]{align-items:center}.justify-end[data-v-8526c2ef]{justify-content:flex-end}.justify-center[data-v-8526c2ef]{justify-content:center}.gap-3[data-v-8526c2ef]{gap:.75rem}.gap-6[data-v-8526c2ef]{gap:1.5rem}.gap-x-4[data-v-8526c2ef]{-moz-column-gap:1rem;column-gap:1rem}.gap-y-16[data-v-8526c2ef]{row-gap:4rem}.gap-y-2[data-v-8526c2ef]{row-gap:.5rem}.gap-y-4[data-v-8526c2ef]{row-gap:1rem}.border[data-v-8526c2ef]{border-width:1px}.border-t[data-v-8526c2ef]{border-top-width:1px}.border-gray-200[data-v-8526c2ef]{--un-border-opacity:1;border-color:rgb(224 224 224/var(--un-border-opacity))}.hover\\:border-transparent[data-v-8526c2ef]:hover{border-color:transparent}.rounded[data-v-8526c2ef]{border-radius:.25rem}.rounded-xl[data-v-8526c2ef]{border-radius:.75rem}.bg-gray-100[data-v-8526c2ef]{--un-bg-opacity:1;background-color:rgb(238 238 238/var(--un-bg-opacity))}.bg-white[data-v-8526c2ef]{--un-bg-opacity:1;background-color:rgb(255 255 255/var(--un-bg-opacity))}.from-blue-400[data-v-8526c2ef]{--un-gradient-from-position:0%;--un-gradient-from:rgb(96 165 250/var(--un-from-opacity,1)) var(--un-gradient-from-position);--un-gradient-to-position:100%;--un-gradient-to:rgba(96,165,250,0) var(--un-gradient-to-position);--un-gradient-stops:var(--un-gradient-from),var(--un-gradient-to)}.from-green-400[data-v-8526c2ef]{--un-gradient-from-position:0%;--un-gradient-from:rgb(55 233 144/var(--un-from-opacity,1)) var(--un-gradient-from-position);--un-gradient-to-position:100%;--un-gradient-to:rgba(55,233,144,0) var(--un-gradient-to-position);--un-gradient-stops:var(--un-gradient-from),var(--un-gradient-to)}.from-yellow-400[data-v-8526c2ef]{--un-gradient-from-position:0%;--un-gradient-from:rgb(250 204 21/var(--un-from-opacity,1)) var(--un-gradient-from-position);--un-gradient-to-position:100%;--un-gradient-to:rgba(250,204,21,0) var(--un-gradient-to-position);--un-gradient-stops:var(--un-gradient-from),var(--un-gradient-to)}.to-transparent[data-v-8526c2ef]{--un-gradient-to-position:100%;--un-gradient-to:transparent var(--un-gradient-to-position)}.bg-gradient-to-l[data-v-8526c2ef]{--un-gradient-shape:to left;--un-gradient:var(--un-gradient-shape),var(--un-gradient-stops)}.bg-gradient-to-l[data-v-8526c2ef],.bg-gradient-to-r[data-v-8526c2ef]{background-image:linear-gradient(var(--un-gradient))}.bg-gradient-to-r[data-v-8526c2ef]{--un-gradient-shape:to right;--un-gradient:var(--un-gradient-shape),var(--un-gradient-stops)}.p-1[data-v-8526c2ef]{padding:.25rem}.px-4[data-v-8526c2ef]{padding-left:1rem;padding-right:1rem}.px-5[data-v-8526c2ef]{padding-left:1.25rem;padding-right:1.25rem}.py-14[data-v-8526c2ef]{padding-bottom:3.5rem;padding-top:3.5rem}.py-6[data-v-8526c2ef]{padding-top:1.5rem}.pb-6[data-v-8526c2ef],.py-6[data-v-8526c2ef]{padding-bottom:1.5rem}.pt-\\[58px\\][data-v-8526c2ef]{padding-top:58px}.text-center[data-v-8526c2ef]{text-align:center}.text-2xl[data-v-8526c2ef]{font-size:1.5rem;line-height:2rem}.text-4xl[data-v-8526c2ef]{font-size:2.25rem;line-height:2.5rem}.text-sm[data-v-8526c2ef]{font-size:.875rem;line-height:1.25rem}.text-xl[data-v-8526c2ef]{font-size:1.25rem;line-height:1.75rem}.text-black[data-v-8526c2ef]{--un-text-opacity:1;color:rgb(0 0 0/var(--un-text-opacity))}.text-gray-700[data-v-8526c2ef]{--un-text-opacity:1;color:rgb(66 66 66/var(--un-text-opacity))}.hover\\:text-black[data-v-8526c2ef]:hover{--un-text-opacity:1;color:rgb(0 0 0/var(--un-text-opacity))}.font-bold[data-v-8526c2ef]{font-weight:700}.font-semibold[data-v-8526c2ef]{font-weight:600}.font-mono[data-v-8526c2ef]{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace}.antialiased[data-v-8526c2ef]{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.focus-visible\\:ring-2[data-v-8526c2ef]:focus-visible{--un-ring-width:2px;--un-ring-offset-shadow:var(--un-ring-inset) 0 0 0 var(--un-ring-offset-width) var(--un-ring-offset-color);--un-ring-shadow:var(--un-ring-inset) 0 0 0 calc(var(--un-ring-width) + var(--un-ring-offset-width)) var(--un-ring-color);box-shadow:var(--un-ring-offset-shadow),var(--un-ring-shadow),var(--un-shadow)}.transition-opacity[data-v-8526c2ef]{transition-duration:.15s;transition-property:opacity;transition-timing-function:cubic-bezier(.4,0,.2,1)}.duration-300[data-v-8526c2ef]{transition-duration:.3s}@media (prefers-color-scheme:dark){.dark\\:block[data-v-8526c2ef]{display:block}.dark\\:hidden[data-v-8526c2ef]{display:none}.dark\\:border-gray-900[data-v-8526c2ef]{--un-border-opacity:1;border-color:rgb(24 24 27/var(--un-border-opacity))}.dark\\:border-transparent[data-v-8526c2ef]{border-color:transparent}.dark\\:border-none[data-v-8526c2ef]{border-style:none}.dark\\:bg-black[data-v-8526c2ef]{--un-bg-opacity:1;background-color:rgb(0 0 0/var(--un-bg-opacity))}.dark\\:bg-gray-900[data-v-8526c2ef]{--un-bg-opacity:1;background-color:rgb(24 24 27/var(--un-bg-opacity))}.dark\\:bg-white\\/10[data-v-8526c2ef]{background-color:#ffffff1a}.dark\\:text-gray-300[data-v-8526c2ef]{--un-text-opacity:1;color:rgb(189 189 189/var(--un-text-opacity))}.dark\\:hover\\:text-white[data-v-8526c2ef]:hover,.dark\\:text-white[data-v-8526c2ef]{--un-text-opacity:1;color:rgb(255 255 255/var(--un-text-opacity))}}@media (min-width:640px){.sm\\:col-span-1[data-v-8526c2ef]{grid-column:span 1/span 1}.sm\\:h-34[data-v-8526c2ef]{height:8.5rem}.sm\\:min-h-\\[220px\\][data-v-8526c2ef]{min-height:220px}.sm\\:flex-row[data-v-8526c2ef]{flex-direction:row}.sm\\:justify-between[data-v-8526c2ef]{justify-content:space-between}.sm\\:px-28[data-v-8526c2ef]{padding-left:7rem;padding-right:7rem}.sm\\:px-6[data-v-8526c2ef]{padding-left:1.5rem;padding-right:1.5rem}.sm\\:text-5xl[data-v-8526c2ef]{font-size:3rem;line-height:1}.sm\\:text-base[data-v-8526c2ef]{font-size:1rem;line-height:1.5rem}}@media (min-width:768px){.md\\:min-h-\\[180px\\][data-v-8526c2ef]{min-height:180px}}@media (min-width:1024px){.lg\\:order-none[data-v-8526c2ef]{order:0}.lg\\:col-span-10[data-v-8526c2ef]{grid-column:span 10/span 10}.lg\\:col-span-4[data-v-8526c2ef]{grid-column:span 4/span 4}.lg\\:col-span-6[data-v-8526c2ef]{grid-column:span 6/span 6}.lg\\:grid-cols-10[data-v-8526c2ef]{grid-template-columns:repeat(10,minmax(0,1fr))}.lg\\:min-h-min[data-v-8526c2ef]{min-height:-moz-min-content;min-height:min-content}.lg\\:flex-col[data-v-8526c2ef]{flex-direction:column}.lg\\:px-8[data-v-8526c2ef]{padding-left:2rem;padding-right:2rem}.lg\\:py-7[data-v-8526c2ef]{padding-bottom:1.75rem;padding-top:1.75rem}}";
  }
});

// .wrangler/tmp/pages-WENPGt/chunks/build/entry-styles.BaOfaCjO.mjs
var entry_styles_BaOfaCjO_exports = {};
__export(entry_styles_BaOfaCjO_exports, {
  default: () => t
});
var t;
var init_entry_styles_BaOfaCjO = __esm({
  ".wrangler/tmp/pages-WENPGt/chunks/build/entry-styles.BaOfaCjO.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    init_entry_styles_1_mjs_Cl74qY_t();
    t = [a];
  }
});

// .wrangler/tmp/pages-WENPGt/chunks/build/error-404-styles-1.mjs-DaBoFDuU.mjs
var a2;
var init_error_404_styles_1_mjs_DaBoFDuU = __esm({
  ".wrangler/tmp/pages-WENPGt/chunks/build/error-404-styles-1.mjs-DaBoFDuU.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    a2 = '.spotlight[data-v-922baad2]{background:linear-gradient(45deg,#00dc82,#36e4da 50%,#0047e1);bottom:-30vh;filter:blur(20vh);height:40vh}.gradient-border[data-v-922baad2]{-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);border-radius:.5rem;position:relative}@media (prefers-color-scheme:light){.gradient-border[data-v-922baad2]{background-color:hsla(0,0%,100%,.3)}.gradient-border[data-v-922baad2]:before{background:linear-gradient(90deg,#e2e2e2,#e2e2e2 25%,#00dc82 50%,#36e4da 75%,#0047e1)}}@media (prefers-color-scheme:dark){.gradient-border[data-v-922baad2]{background-color:hsla(0,0%,8%,.3)}.gradient-border[data-v-922baad2]:before{background:linear-gradient(90deg,#303030,#303030 25%,#00dc82 50%,#36e4da 75%,#0047e1)}}.gradient-border[data-v-922baad2]:before{background-size:400% auto;border-radius:.5rem;bottom:0;content:"";left:0;-webkit-mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);-webkit-mask-composite:xor;mask-composite:exclude;opacity:.5;padding:2px;position:absolute;right:0;top:0;transition:background-position .3s ease-in-out,opacity .2s ease-in-out;width:100%}.gradient-border[data-v-922baad2]:hover:before{background-position:-50% 0;opacity:1}.fixed[data-v-922baad2]{position:fixed}.left-0[data-v-922baad2]{left:0}.right-0[data-v-922baad2]{right:0}.z-10[data-v-922baad2]{z-index:10}.z-20[data-v-922baad2]{z-index:20}.grid[data-v-922baad2]{display:grid}.mb-16[data-v-922baad2]{margin-bottom:4rem}.mb-8[data-v-922baad2]{margin-bottom:2rem}.max-w-520px[data-v-922baad2]{max-width:520px}.min-h-screen[data-v-922baad2]{min-height:100vh}.w-full[data-v-922baad2]{width:100%}.flex[data-v-922baad2]{display:flex}.cursor-pointer[data-v-922baad2]{cursor:pointer}.place-content-center[data-v-922baad2]{place-content:center}.items-center[data-v-922baad2]{align-items:center}.justify-center[data-v-922baad2]{justify-content:center}.overflow-hidden[data-v-922baad2]{overflow:hidden}.bg-white[data-v-922baad2]{--un-bg-opacity:1;background-color:rgb(255 255 255/var(--un-bg-opacity))}.px-4[data-v-922baad2]{padding-left:1rem;padding-right:1rem}.px-8[data-v-922baad2]{padding-left:2rem;padding-right:2rem}.py-2[data-v-922baad2]{padding-bottom:.5rem;padding-top:.5rem}.text-center[data-v-922baad2]{text-align:center}.text-8xl[data-v-922baad2]{font-size:6rem;line-height:1}.text-xl[data-v-922baad2]{font-size:1.25rem;line-height:1.75rem}.text-black[data-v-922baad2]{--un-text-opacity:1;color:rgb(0 0 0/var(--un-text-opacity))}.font-light[data-v-922baad2]{font-weight:300}.font-medium[data-v-922baad2]{font-weight:500}.leading-tight[data-v-922baad2]{line-height:1.25}.font-sans[data-v-922baad2]{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji}.antialiased[data-v-922baad2]{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}@media (prefers-color-scheme:dark){.dark\\:bg-black[data-v-922baad2]{--un-bg-opacity:1;background-color:rgb(0 0 0/var(--un-bg-opacity))}.dark\\:text-white[data-v-922baad2]{--un-text-opacity:1;color:rgb(255 255 255/var(--un-text-opacity))}}@media (min-width:640px){.sm\\:px-0[data-v-922baad2]{padding-left:0;padding-right:0}.sm\\:px-6[data-v-922baad2]{padding-left:1.5rem;padding-right:1.5rem}.sm\\:py-3[data-v-922baad2]{padding-bottom:.75rem;padding-top:.75rem}.sm\\:text-4xl[data-v-922baad2]{font-size:2.25rem;line-height:2.5rem}.sm\\:text-xl[data-v-922baad2]{font-size:1.25rem;line-height:1.75rem}}';
  }
});

// .wrangler/tmp/pages-WENPGt/chunks/build/error-404-styles.WpyeoFtc.mjs
var error_404_styles_WpyeoFtc_exports = {};
__export(error_404_styles_WpyeoFtc_exports, {
  default: () => o
});
var o;
var init_error_404_styles_WpyeoFtc = __esm({
  ".wrangler/tmp/pages-WENPGt/chunks/build/error-404-styles.WpyeoFtc.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    init_error_404_styles_1_mjs_DaBoFDuU();
    o = [a2, a2];
  }
});

// .wrangler/tmp/pages-WENPGt/chunks/build/error-500-styles-1.mjs-D_pjx06j.mjs
var t2;
var init_error_500_styles_1_mjs_D_pjx06j = __esm({
  ".wrangler/tmp/pages-WENPGt/chunks/build/error-500-styles-1.mjs-D_pjx06j.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    t2 = ".spotlight[data-v-1e3620c9]{background:linear-gradient(45deg,#00dc82,#36e4da 50%,#0047e1);filter:blur(20vh)}.fixed[data-v-1e3620c9]{position:fixed}.-bottom-1\\/2[data-v-1e3620c9]{bottom:-50%}.left-0[data-v-1e3620c9]{left:0}.right-0[data-v-1e3620c9]{right:0}.grid[data-v-1e3620c9]{display:grid}.mb-16[data-v-1e3620c9]{margin-bottom:4rem}.mb-8[data-v-1e3620c9]{margin-bottom:2rem}.h-1\\/2[data-v-1e3620c9]{height:50%}.max-w-520px[data-v-1e3620c9]{max-width:520px}.min-h-screen[data-v-1e3620c9]{min-height:100vh}.place-content-center[data-v-1e3620c9]{place-content:center}.overflow-hidden[data-v-1e3620c9]{overflow:hidden}.bg-white[data-v-1e3620c9]{--un-bg-opacity:1;background-color:rgb(255 255 255/var(--un-bg-opacity))}.px-8[data-v-1e3620c9]{padding-left:2rem;padding-right:2rem}.text-center[data-v-1e3620c9]{text-align:center}.text-8xl[data-v-1e3620c9]{font-size:6rem;line-height:1}.text-xl[data-v-1e3620c9]{font-size:1.25rem;line-height:1.75rem}.text-black[data-v-1e3620c9]{--un-text-opacity:1;color:rgb(0 0 0/var(--un-text-opacity))}.font-light[data-v-1e3620c9]{font-weight:300}.font-medium[data-v-1e3620c9]{font-weight:500}.leading-tight[data-v-1e3620c9]{line-height:1.25}.font-sans[data-v-1e3620c9]{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji}.antialiased[data-v-1e3620c9]{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}@media (prefers-color-scheme:dark){.dark\\:bg-black[data-v-1e3620c9]{--un-bg-opacity:1;background-color:rgb(0 0 0/var(--un-bg-opacity))}.dark\\:text-white[data-v-1e3620c9]{--un-text-opacity:1;color:rgb(255 255 255/var(--un-text-opacity))}}@media (min-width:640px){.sm\\:px-0[data-v-1e3620c9]{padding-left:0;padding-right:0}.sm\\:text-4xl[data-v-1e3620c9]{font-size:2.25rem;line-height:2.5rem}}";
  }
});

// .wrangler/tmp/pages-WENPGt/chunks/build/error-500-styles.BFuVBFDJ.mjs
var error_500_styles_BFuVBFDJ_exports = {};
__export(error_500_styles_BFuVBFDJ_exports, {
  default: () => r
});
var r;
var init_error_500_styles_BFuVBFDJ = __esm({
  ".wrangler/tmp/pages-WENPGt/chunks/build/error-500-styles.BFuVBFDJ.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    init_error_500_styles_1_mjs_D_pjx06j();
    r = [t2, t2];
  }
});

// .wrangler/tmp/pages-WENPGt/chunks/build/error-404-styles.CibK9Qn2.mjs
var error_404_styles_CibK9Qn2_exports = {};
__export(error_404_styles_CibK9Qn2_exports, {
  default: () => o2
});
var o2;
var init_error_404_styles_CibK9Qn2 = __esm({
  ".wrangler/tmp/pages-WENPGt/chunks/build/error-404-styles.CibK9Qn2.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    init_error_404_styles_1_mjs_DaBoFDuU();
    o2 = [a2];
  }
});

// .wrangler/tmp/pages-WENPGt/chunks/build/error-500-styles.JhxDD0mW.mjs
var error_500_styles_JhxDD0mW_exports = {};
__export(error_500_styles_JhxDD0mW_exports, {
  default: () => r2
});
var r2;
var init_error_500_styles_JhxDD0mW = __esm({
  ".wrangler/tmp/pages-WENPGt/chunks/build/error-500-styles.JhxDD0mW.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    init_error_500_styles_1_mjs_D_pjx06j();
    r2 = [t2];
  }
});

// .wrangler/tmp/pages-WENPGt/chunks/build/welcome-styles.4gegXg62.mjs
var welcome_styles_4gegXg62_exports = {};
__export(welcome_styles_4gegXg62_exports, {
  default: () => t3
});
var t3;
var init_welcome_styles_4gegXg62 = __esm({
  ".wrangler/tmp/pages-WENPGt/chunks/build/welcome-styles.4gegXg62.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    init_entry_styles_1_mjs_Cl74qY_t();
    t3 = [a, a];
  }
});

// .wrangler/tmp/pages-WENPGt/chunks/build/styles.mjs
var styles_exports = {};
__export(styles_exports, {
  default: () => e3
});
var interopDefault, e3;
var init_styles = __esm({
  ".wrangler/tmp/pages-WENPGt/chunks/build/styles.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    interopDefault = (e6) => e6.default || e6 || [];
    e3 = { "node_modules/nuxt/dist/app/entry.js": () => Promise.resolve().then(() => (init_entry_styles_BaOfaCjO(), entry_styles_BaOfaCjO_exports)).then(interopDefault), "node_modules/nuxt/dist/app/components/error-404.vue": () => Promise.resolve().then(() => (init_error_404_styles_WpyeoFtc(), error_404_styles_WpyeoFtc_exports)).then(interopDefault), "node_modules/nuxt/dist/app/components/error-500.vue": () => Promise.resolve().then(() => (init_error_500_styles_BFuVBFDJ(), error_500_styles_BFuVBFDJ_exports)).then(interopDefault), "node_modules/nuxt/dist/app/components/error-404.vue?vue&type=style&index=0&scoped=922baad2&lang.css": () => Promise.resolve().then(() => (init_error_404_styles_CibK9Qn2(), error_404_styles_CibK9Qn2_exports)).then(interopDefault), "node_modules/nuxt/dist/app/components/error-500.vue?vue&type=style&index=0&scoped=1e3620c9&lang.css": () => Promise.resolve().then(() => (init_error_500_styles_JhxDD0mW(), error_500_styles_JhxDD0mW_exports)).then(interopDefault), "node_modules/nuxt/dist/app/components/welcome.vue": () => Promise.resolve().then(() => (init_welcome_styles_4gegXg62(), welcome_styles_4gegXg62_exports)).then(interopDefault), "node_modules/nuxt/dist/app/components/welcome.vue?vue&type=style&index=0&scoped=8526c2ef&lang.css": () => Promise.resolve().then(() => (init_entry_styles_BaOfaCjO(), entry_styles_BaOfaCjO_exports)).then(interopDefault) };
  }
});

// .wrangler/tmp/pages-WENPGt/chunks/build/error-404-Bd4Y14dE.mjs
var error_404_Bd4Y14dE_exports = {};
__export(error_404_Bd4Y14dE_exports, {
  default: () => z
});
function defineNuxtLink(r4) {
  const n2 = r4.componentName || "NuxtLink";
  function resolveTrailingSlashBehavior(e6, t5) {
    if (!e6 || "append" !== r4.trailingSlash && "remove" !== r4.trailingSlash)
      return e6;
    if ("string" == typeof e6)
      return applyTrailingSlashBehavior(e6, r4.trailingSlash);
    const a4 = "path" in e6 && void 0 !== e6.path ? e6.path : t5(e6).path;
    return { ...e6, name: void 0, path: applyTrailingSlashBehavior(a4, r4.trailingSlash) };
  }
  function useNuxtLink(e6) {
    var r5, n3, i6;
    const o10 = useRouter(), l3 = useRuntimeConfig(), p3 = computed(() => !!e6.target && "_self" !== e6.target), v4 = computed(() => {
      const a4 = e6.to || e6.href || "";
      return "string" == typeof a4 && hasProtocol(a4, { acceptRelative: true });
    }), f3 = resolveComponent("RouterLink"), h4 = f3 && "string" != typeof f3 ? f3.useLink : void 0, g3 = computed(() => {
      if (e6.external)
        return true;
      const t5 = e6.to || e6.href || "";
      return "object" != typeof t5 && ("" === t5 || v4.value);
    }), m6 = computed(() => {
      const t5 = e6.to || e6.href || "";
      return g3.value ? t5 : resolveTrailingSlashBehavior(t5, o10.resolve);
    }), b4 = g3.value || null == h4 ? void 0 : h4({ ...e6, to: m6 }), x4 = computed(() => {
      var e7, t5;
      if (!m6.value || v4.value)
        return m6.value;
      if (g3.value) {
        const e8 = "object" == typeof m6.value && "path" in m6.value ? resolveRouteObject(m6.value) : m6.value;
        return resolveTrailingSlashBehavior("object" == typeof e8 ? o10.resolve(e8).href : e8, o10.resolve);
      }
      return "object" == typeof m6.value ? null != (e7 = null == (t5 = o10.resolve(m6.value)) ? void 0 : t5.href) ? e7 : null : resolveTrailingSlashBehavior(joinURL(l3.app.baseURL, m6.value), o10.resolve);
    });
    return { to: m6, hasTarget: p3, isAbsoluteUrl: v4, isExternal: g3, href: x4, isActive: null != (r5 = null == b4 ? void 0 : b4.isActive) ? r5 : computed(() => m6.value === o10.currentRoute.value.path), isExactActive: null != (n3 = null == b4 ? void 0 : b4.isExactActive) ? n3 : computed(() => m6.value === o10.currentRoute.value.path), route: null != (i6 = null == b4 ? void 0 : b4.route) ? i6 : computed(() => o10.resolve(m6.value)), async navigate() {
      await navigateTo(x4.value, { replace: e6.replace, external: g3.value || p3.value });
    } };
  }
  return defineComponent({ name: n2, props: { to: { type: [String, Object], default: void 0, required: false }, href: { type: [String, Object], default: void 0, required: false }, target: { type: String, default: void 0, required: false }, rel: { type: String, default: void 0, required: false }, noRel: { type: Boolean, default: void 0, required: false }, prefetch: { type: Boolean, default: void 0, required: false }, noPrefetch: { type: Boolean, default: void 0, required: false }, activeClass: { type: String, default: void 0, required: false }, exactActiveClass: { type: String, default: void 0, required: false }, prefetchedClass: { type: String, default: void 0, required: false }, replace: { type: Boolean, default: void 0, required: false }, ariaCurrentValue: { type: String, default: void 0, required: false }, external: { type: Boolean, default: void 0, required: false }, custom: { type: Boolean, default: void 0, required: false } }, useLink: useNuxtLink, setup(t5, { slots: a4 }) {
    useRouter();
    const { to: n3, href: i6, navigate: o10, isExternal: l3, hasTarget: u4, isAbsoluteUrl: d3 } = useNuxtLink(t5), c3 = ref(false);
    return () => {
      var s4;
      if (!l3.value && !u4.value) {
        const e6 = { ref: void 0, to: n3.value, activeClass: t5.activeClass || r4.activeClass, exactActiveClass: t5.exactActiveClass || r4.exactActiveClass, replace: t5.replace, ariaCurrentValue: t5.ariaCurrentValue, custom: t5.custom };
        return t5.custom || (c3.value && (e6.class = t5.prefetchedClass || r4.prefetchedClass), e6.rel = t5.rel || void 0), h(resolveComponent("RouterLink"), e6, a4.default);
      }
      const p3 = t5.target || null, v4 = ((...e6) => e6.find((e7) => void 0 !== e7))(t5.noRel ? "" : t5.rel, r4.externalRelAttribute, d3.value || u4.value ? "noopener noreferrer" : "") || null;
      return t5.custom ? a4.default ? a4.default({ href: i6.value, navigate: o10, get route() {
        if (!i6.value)
          return;
        const t6 = new URL(i6.value, "http://localhost");
        return { path: t6.pathname, fullPath: t6.pathname, get query() {
          return parseQuery(t6.search);
        }, hash: t6.hash, params: {}, name: void 0, matched: [], redirectedFrom: void 0, meta: {}, href: i6.value };
      }, rel: v4, target: p3, isExternal: l3.value || u4.value, isActive: false, isExactActive: false }) : null : h("a", { ref: void 0, href: i6.value || null, rel: v4, target: p3 }, null == (s4 = a4.default) ? void 0 : s4.call(a4));
    };
  } });
}
function applyTrailingSlashBehavior(e6, a4) {
  const i6 = "append" === a4 ? withTrailingSlash : withoutTrailingSlash;
  return hasProtocol(e6) && !e6.startsWith("http") ? e6 : i6(e6, true);
}
var j, q, N, z;
var init_error_404_Bd4Y14dE = __esm({
  ".wrangler/tmp/pages-WENPGt/chunks/build/error-404-Bd4Y14dE.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    init_runtime();
    init_server();
    init_renderer();
    j = defineNuxtLink(re);
    q = { __name: "error-404", __ssrInlineRender: true, props: { appName: { type: String, default: "Nuxt" }, version: { type: String, default: "" }, statusCode: { type: Number, default: 404 }, statusMessage: { type: String, default: "Not Found" }, description: { type: String, default: "Sorry, the page you are looking for could not be found." }, backHome: { type: String, default: "Go back home" } }, setup(e6) {
      const t5 = e6;
      return useHead({ title: `${t5.statusCode} - ${t5.statusMessage} | ${t5.appName}`, script: [], style: [{ children: '*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:var(--un-default-border-color, #e5e7eb)}:before,:after{--un-content:""}html{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{margin:0;line-height:inherit}h1{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}h1,p{margin:0}*,:before,:after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / .5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }' }] }), (t6, a4, r4, n2) => {
        const i6 = j;
        a4(`<div${ssrRenderAttrs(mergeProps({ class: "font-sans antialiased bg-white dark:bg-black text-black dark:text-white grid min-h-screen place-content-center overflow-hidden" }, n2))} data-v-922baad2><div class="fixed left-0 right-0 spotlight z-10" data-v-922baad2></div><div class="max-w-520px text-center z-20" data-v-922baad2><h1 class="text-8xl sm:text-10xl font-medium mb-8" data-v-922baad2>${ssrInterpolate(e6.statusCode)}</h1><p class="text-xl px-8 sm:px-0 sm:text-4xl font-light mb-16 leading-tight" data-v-922baad2>${ssrInterpolate(e6.description)}</p><div class="w-full flex items-center justify-center" data-v-922baad2>`), a4(ssrRenderComponent(i6, { to: "/", class: "gradient-border text-md sm:text-xl py-2 px-4 sm:py-3 sm:px-6 cursor-pointer" }, { default: withCtx((t7, a5, r5, n3) => {
          if (!a5)
            return [createTextVNode(toDisplayString(e6.backHome), 1)];
          a5(`${ssrInterpolate(e6.backHome)}`);
        }), _: 1 }, r4)), a4("</div></div></div>");
      };
    } };
    N = q.setup;
    q.setup = (e6, t5) => {
      const a4 = useSSRContext();
      return (a4.modules || (a4.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt/dist/app/components/error-404.vue"), N ? N(e6, t5) : void 0;
    };
    z = _export_sfc(q, [["__scopeId", "data-v-922baad2"]]);
  }
});

// .wrangler/tmp/pages-WENPGt/chunks/build/error-500-DiazK33y.mjs
var error_500_DiazK33y_exports = {};
__export(error_500_DiazK33y_exports, {
  default: () => u
});
var o3, i, u;
var init_error_500_DiazK33y = __esm({
  ".wrangler/tmp/pages-WENPGt/chunks/build/error-500-DiazK33y.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    init_server();
    init_renderer();
    init_runtime();
    o3 = { __name: "error-500", __ssrInlineRender: true, props: { appName: { type: String, default: "Nuxt" }, version: { type: String, default: "" }, statusCode: { type: Number, default: 500 }, statusMessage: { type: String, default: "Server error" }, description: { type: String, default: "This page is temporarily unavailable." } }, setup(e6) {
      const s4 = e6;
      return useHead({ title: `${s4.statusCode} - ${s4.statusMessage} | ${s4.appName}`, script: [], style: [{ children: '*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:var(--un-default-border-color, #e5e7eb)}:before,:after{--un-content:""}html{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{margin:0;line-height:inherit}h1{font-size:inherit;font-weight:inherit}h1,p{margin:0}*,:before,:after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / .5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }' }] }), (t5, s5, o10, i6) => {
        s5(`<div${ssrRenderAttrs(mergeProps({ class: "font-sans antialiased bg-white dark:bg-black text-black dark:text-white grid min-h-screen place-content-center overflow-hidden" }, i6))} data-v-1e3620c9><div class="fixed -bottom-1/2 left-0 right-0 h-1/2 spotlight" data-v-1e3620c9></div><div class="max-w-520px text-center" data-v-1e3620c9><h1 class="text-8xl sm:text-10xl font-medium mb-8" data-v-1e3620c9>${ssrInterpolate(e6.statusCode)}</h1><p class="text-xl px-8 sm:px-0 sm:text-4xl font-light mb-16 leading-tight" data-v-1e3620c9>${ssrInterpolate(e6.description)}</p></div></div>`);
      };
    } };
    i = o3.setup;
    o3.setup = (e6, t5) => {
      const n2 = useSSRContext();
      return (n2.modules || (n2.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt/dist/app/components/error-500.vue"), i ? i(e6, t5) : void 0;
    };
    u = _export_sfc(o3, [["__scopeId", "data-v-1e3620c9"]]);
  }
});

// .wrangler/tmp/pages-WENPGt/chunks/build/server.mjs
var server_exports = {};
__export(server_exports, {
  _: () => _export_sfc,
  a: () => navigateTo,
  b: () => useRuntimeConfig,
  c: () => useHead,
  default: () => entry$1,
  n: () => re,
  r: () => resolveRouteObject,
  u: () => useRouter
});
function getNuxtAppCtx(e6 = oe) {
  return getContext(e6, { asyncContext: false });
}
function registerPluginHooks(e6, t5) {
  t5.hooks && e6.hooks.addHooks(t5.hooks);
}
function defineNuxtPlugin(e6) {
  if ("function" == typeof e6)
    return e6;
  const t5 = e6._name || e6.name;
  return delete e6.name, Object.assign(e6.setup || (() => {
  }), e6, { [ie]: true, _name: t5 });
}
function callWithNuxt(e6, t5, a4) {
  const fn2 = () => t5(), r4 = getNuxtAppCtx(e6._name);
  return e6.vueApp.runWithContext(() => r4.callAsync(e6, fn2));
}
function useNuxtApp(e6) {
  const t5 = function(e7) {
    var t6;
    let a4;
    return hasInjectionContext() && (a4 = null == (t6 = getCurrentInstance()) ? void 0 : t6.appContext.app.$nuxt), a4 = a4 || getNuxtAppCtx(e7).tryUse(), a4 || null;
  }(e6);
  if (!t5)
    throw new Error("[nuxt] instance unavailable");
  return t5;
}
function useRuntimeConfig(e6) {
  return useNuxtApp().$config;
}
function defineGetter(e6, t5, a4) {
  Object.defineProperty(e6, t5, { get: () => a4 });
}
function defineNuxtRouteMiddleware(e6) {
  return e6;
}
function resolveRouteObject(e6) {
  return withQuery(e6.path || "", e6.query || {}) + (e6.hash || "");
}
function resolveUnrefHeadInput(e6, t5 = "") {
  if (e6 instanceof Promise)
    return e6;
  const a4 = "function" == typeof (r4 = e6) ? r4() : unref(r4);
  var r4;
  return e6 && a4 ? Array.isArray(a4) ? a4.map((e7) => resolveUnrefHeadInput(e7, t5)) : "object" == typeof a4 ? Object.fromEntries(Object.entries(a4).map(([e7, t6]) => "titleTemplate" === e7 || e7.startsWith("on") ? [e7, unref(t6)] : [e7, resolveUnrefHeadInput(t6, e7)])) : a4 : a4;
}
function useHead(e6, t5 = {}) {
  const a4 = t5.head || function() {
    if (de in Ce)
      return Ce[de]();
    const e7 = inject(le);
    return e7 || getActiveHead();
  }();
  if (a4)
    return a4.ssr ? a4.push(e6, t5) : function(e7, t6, a5 = {}) {
      const r4 = ref(false), o10 = ref({});
      watchEffect(() => {
        o10.value = r4.value ? {} : resolveUnrefHeadInput(t6);
      });
      const i6 = e7.push(o10.value, a5);
      return watch(o10, (e8) => {
        i6.patch(e8);
      }), getCurrentInstance(), i6;
    }(a4, e6, t5);
}
function getRouteFromPath(e6) {
  "object" == typeof e6 && (e6 = stringifyParsedURL({ pathname: e6.path || "", search: stringifyQuery(e6.query || {}), hash: e6.hash || "" }));
  const t5 = new URL(e6.toString(), "http://localhost");
  return { path: t5.pathname, fullPath: e6, query: parseQuery(t5.search), hash: t5.hash, params: {}, name: void 0, matched: [], redirectedFrom: void 0, meta: {}, href: e6 };
}
var Q, X, ee, getContext, te2, ae, re, oe, ie, ne, useRouter, navigateTo, se, useError, showError, createError2, le, Ce, de, De, ce, pe, ue, fe, he, Ee, ge, Ae, _export_sfc, xe, Fe, me, ve, _e, ye, we, Le, ke, be, Me, entry$1;
var init_server = __esm({
  ".wrangler/tmp/pages-WENPGt/chunks/build/server.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    init_runtime();
    init_renderer();
    Q = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof global ? global : {};
    X = "__unctx__";
    ee = Q[X] || (Q[X] = function(e6 = {}) {
      const t5 = {};
      return { get: (a4, r4 = {}) => (t5[a4] || (t5[a4] = function(e7 = {}) {
        let t6, a5 = false;
        const checkConflict = (e8) => {
          if (t6 && t6 !== e8)
            throw new Error("Context conflict");
        };
        let r5;
        if (e7.asyncContext) {
          const t7 = e7.AsyncLocalStorage || globalThis.AsyncLocalStorage;
          t7 ? r5 = new t7() : console.warn("[unctx] `AsyncLocalStorage` is not provided.");
        }
        const _getCurrentInstance = () => {
          if (r5 && void 0 === t6) {
            const e8 = r5.getStore();
            if (void 0 !== e8)
              return e8;
          }
          return t6;
        };
        return { use: () => {
          const e8 = _getCurrentInstance();
          if (void 0 === e8)
            throw new Error("Context is not available");
          return e8;
        }, tryUse: () => _getCurrentInstance(), set: (e8, r6) => {
          r6 || checkConflict(e8), t6 = e8, a5 = true;
        }, unset: () => {
          t6 = void 0, a5 = false;
        }, call: (e8, o10) => {
          checkConflict(e8), t6 = e8;
          try {
            return r5 ? r5.run(e8, o10) : o10();
          } finally {
            a5 || (t6 = void 0);
          }
        }, async callAsync(e8, o10) {
          t6 = e8;
          const onRestore = () => {
            t6 = e8;
          }, onLeave = () => t6 === e8 ? onRestore : void 0;
          ae.add(onLeave);
          try {
            const i6 = r5 ? r5.run(e8, o10) : o10();
            return a5 || (t6 = void 0), await i6;
          } finally {
            ae.delete(onLeave);
          }
        } };
      }({ ...e6, ...r4 })), t5[a4], t5[a4]) };
    }());
    getContext = (e6, t5 = {}) => ee.get(e6, t5);
    te2 = "__unctx_async_handlers__";
    ae = Q[te2] || (Q[te2] = /* @__PURE__ */ new Set());
    globalThis.$fetch || (globalThis.$fetch = Ne.create({ baseURL: baseURL() }));
    re = { componentName: "NuxtLink" };
    oe = "nuxt-app";
    ie = "__nuxt_plugin";
    ne = Symbol("route");
    useRouter = () => {
      var e6;
      return null == (e6 = useNuxtApp()) ? void 0 : e6.$router;
    };
    navigateTo = (e6, o10) => {
      e6 || (e6 = "/");
      const n2 = "string" == typeof e6 ? e6 : "path" in e6 ? resolveRouteObject(e6) : useRouter().resolve(e6).href, s4 = hasProtocol(n2, { acceptRelative: true }), l3 = (null == o10 ? void 0 : o10.external) || s4;
      if (l3) {
        if (!(null == o10 ? void 0 : o10.external))
          throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");
        const { protocol: e7 } = new URL(n2, "http://localhost");
        if (e7 && isScriptProtocol(e7))
          throw new Error(`Cannot navigate to a URL with '${e7}' protocol.`);
      }
      const C4 = (() => {
        try {
          if (useNuxtApp()._processingMiddleware)
            return true;
        } catch {
          return false;
        }
        return false;
      })(), d3 = useRouter(), D4 = useNuxtApp();
      if (D4.ssrContext) {
        const t5 = "string" == typeof e6 || l3 ? n2 : d3.resolve(e6).fullPath || "/", a4 = l3 ? n2 : joinURL(useRuntimeConfig().app.baseURL, t5), redirect = async function(e7) {
          await D4.callHook("app:redirected");
          const t6 = a4.replace(/"/g, "%22"), r4 = function(e8, t7 = false) {
            const a5 = new URL(e8, "http://localhost");
            if (!t7)
              return a5.pathname + a5.search + a5.hash;
            if (e8.startsWith("//"))
              return a5.toString().replace(a5.protocol, "");
            return a5.toString();
          }(a4, s4);
          return D4.ssrContext._renderResponse = { statusCode: sanitizeStatusCode((null == o10 ? void 0 : o10.redirectCode) || 302, 302), body: `<!DOCTYPE html><html><head><meta http-equiv="refresh" content="0; url=${t6}"></head></html>`, headers: { location: r4 } }, e7;
        };
        return !l3 && C4 ? (d3.afterEach((e7) => e7.fullPath === t5 ? redirect(false) : void 0), e6) : redirect(!C4 && void 0);
      }
      return l3 ? (D4._scope.stop(), (null == o10 ? void 0 : o10.replace) ? (void 0).replace(n2) : (void 0).href = n2, C4 ? !!D4.isHydrating && new Promise(() => {
      }) : Promise.resolve()) : (null == o10 ? void 0 : o10.replace) ? d3.replace(e6) : d3.push(e6);
    };
    se = "__nuxt_error";
    useError = () => toRef(useNuxtApp().payload, "error");
    showError = (e6) => {
      const t5 = createError2(e6);
      try {
        useNuxtApp();
        const e7 = useError();
        0, e7.value = e7.value || t5;
      } catch {
        throw t5;
      }
      return t5;
    };
    createError2 = (e6) => {
      const t5 = createError(e6);
      return Object.defineProperty(t5, se, { value: true, configurable: false, writable: false }), t5;
    };
    le = "usehead";
    Ce = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
    de = "__unhead_injection_handler__";
    De = defineNuxtPlugin({ name: "nuxt:head", enforce: "pre", setup(e6) {
      const t5 = e6.ssrContext.head;
      var a4;
      a4 = () => useNuxtApp().vueApp._context.provides.usehead, Ce[de] = a4, e6.vueApp.use(t5);
    } });
    ce = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof global ? global : {};
    pe = "__unctx__";
    ce[pe] || (ce[pe] = function(e6 = {}) {
      const t5 = {};
      return { get: (a4, r4 = {}) => (t5[a4] || (t5[a4] = function(e7 = {}) {
        let t6, a5 = false;
        const checkConflict = (e8) => {
          if (t6 && t6 !== e8)
            throw new Error("Context conflict");
        };
        let r5;
        if (e7.asyncContext) {
          const t7 = e7.AsyncLocalStorage || globalThis.AsyncLocalStorage;
          t7 ? r5 = new t7() : console.warn("[unctx] `AsyncLocalStorage` is not provided.");
        }
        const _getCurrentInstance = () => {
          if (r5 && void 0 === t6) {
            const e8 = r5.getStore();
            if (void 0 !== e8)
              return e8;
          }
          return t6;
        };
        return { use: () => {
          const e8 = _getCurrentInstance();
          if (void 0 === e8)
            throw new Error("Context is not available");
          return e8;
        }, tryUse: () => _getCurrentInstance(), set: (e8, r6) => {
          r6 || checkConflict(e8), t6 = e8, a5 = true;
        }, unset: () => {
          t6 = void 0, a5 = false;
        }, call: (e8, o10) => {
          checkConflict(e8), t6 = e8;
          try {
            return r5 ? r5.run(e8, o10) : o10();
          } finally {
            a5 || (t6 = void 0);
          }
        }, async callAsync(e8, o10) {
          t6 = e8;
          const onRestore = () => {
            t6 = e8;
          }, onLeave = () => t6 === e8 ? onRestore : void 0;
          fe.add(onLeave);
          try {
            const i6 = r5 ? r5.run(e8, o10) : o10();
            return a5 || (t6 = void 0), await i6;
          } finally {
            fe.delete(onLeave);
          }
        } };
      }({ ...e6, ...r4 })), t5[a4], t5[a4]) };
    }());
    ue = "__unctx_async_handlers__";
    fe = ce[ue] || (ce[ue] = /* @__PURE__ */ new Set());
    he = [defineNuxtRouteMiddleware(async (e6) => {
    })];
    Ee = { NuxtError: (e6) => {
      return !!(t5 = e6) && "object" == typeof t5 && se in t5 && e6.toJSON();
      var t5;
    }, EmptyShallowRef: (e6) => isRef(e6) && isShallow(e6) && !e6.value && ("bigint" == typeof e6.value ? "0n" : JSON.stringify(e6.value) || "_"), EmptyRef: (e6) => isRef(e6) && !e6.value && ("bigint" == typeof e6.value ? "0n" : JSON.stringify(e6.value) || "_"), ShallowRef: (e6) => isRef(e6) && isShallow(e6) && e6.value, ShallowReactive: (e6) => isReactive(e6) && isShallow(e6) && toRaw(e6), Ref: (e6) => isRef(e6) && e6.value, Reactive: (e6) => isReactive(e6) && toRaw(e6) };
    ge = [De, defineNuxtPlugin({ name: "nuxt:router", enforce: "pre", setup(e6) {
      const t5 = e6.ssrContext.url, a4 = [], r4 = { "navigate:before": [], "resolve:before": [], "navigate:after": [], error: [] }, registerHook = (e7, t6) => (r4[e7].push(t6), () => r4[e7].splice(r4[e7].indexOf(t6), 1));
      useRuntimeConfig().app.baseURL;
      const o10 = reactive(getRouteFromPath(t5));
      async function handleNavigation(e7, t6) {
        try {
          const t7 = getRouteFromPath(e7);
          for (const e8 of r4["navigate:before"]) {
            const a5 = await e8(t7, o10);
            if (false === a5 || a5 instanceof Error)
              return;
            if ("string" == typeof a5 && a5.length)
              return handleNavigation(a5, true);
          }
          for (const e8 of r4["resolve:before"])
            await e8(t7, o10);
          Object.assign(o10, t7);
          for (const e8 of r4["navigate:after"])
            await e8(t7, o10);
        } catch (e8) {
          for (const t7 of r4.error)
            await t7(e8);
        }
      }
      const i6 = { currentRoute: computed(() => o10), isReady: () => Promise.resolve(), options: {}, install: () => Promise.resolve(), push: (e7) => handleNavigation(e7), replace: (e7) => handleNavigation(e7), back: () => (void 0).history.go(-1), go: (e7) => (void 0).history.go(e7), forward: () => (void 0).history.go(1), beforeResolve: (e7) => registerHook("resolve:before", e7), beforeEach: (e7) => registerHook("navigate:before", e7), afterEach: (e7) => registerHook("navigate:after", e7), onError: (e7) => registerHook("error", e7), resolve: getRouteFromPath, addRoute: (e7, t6) => {
        a4.push(t6);
      }, getRoutes: () => a4, hasRoute: (e7) => a4.some((t6) => t6.name === e7), removeRoute: (e7) => {
        const t6 = a4.findIndex((t7) => t7.name === e7);
        -1 !== t6 && a4.splice(t6, 1);
      } };
      e6.vueApp.component("RouterLink", defineComponent({ functional: true, props: { to: { type: String, required: true }, custom: Boolean, replace: Boolean, activeClass: String, exactActiveClass: String, ariaCurrentValue: String }, setup: (e7, { slots: t6 }) => {
        const navigate = () => handleNavigation(e7.to, e7.replace);
        return () => {
          var a5;
          const r5 = i6.resolve(e7.to);
          return e7.custom ? null == (a5 = t6.default) ? void 0 : a5.call(t6, { href: e7.to, navigate, route: r5 }) : h("a", { href: e7.to, onClick: (e8) => (e8.preventDefault(), navigate()) }, t6);
        };
      } })), e6._route = o10, e6._middleware = e6._middleware || { global: [], named: {} };
      const n2 = e6.payload.state._layout;
      return e6.hooks.hookOnce("app:created", async () => {
        i6.beforeEach(async (a5, r5) => {
          var o11;
          if (a5.meta = reactive(a5.meta || {}), e6.isHydrating && n2 && !isReadonly(a5.meta.layout) && (a5.meta.layout = n2), e6._processingMiddleware = true, !(null == (o11 = e6.ssrContext) ? void 0 : o11.islandContext)) {
            const o12 = /* @__PURE__ */ new Set([...he, ...e6._middleware.global]);
            {
              const t6 = await e6.runWithContext(() => async function(e7) {
                {
                  const t7 = toRouteMatcher(createRouter$1({ routes: useRuntimeConfig().nitro.routeRules }));
                  return te({}, ...t7.matchAll(e7).reverse());
                }
              }(a5.path));
              if (t6.appMiddleware)
                for (const a6 in t6.appMiddleware) {
                  const r6 = e6._middleware.named[a6];
                  if (!r6)
                    return;
                  t6.appMiddleware[a6] ? o12.add(r6) : o12.delete(r6);
                }
            }
            for (const i7 of o12) {
              const o13 = await e6.runWithContext(() => i7(a5, r5));
              if (false === o13 || o13 instanceof Error) {
                const a6 = o13 || createError({ statusCode: 404, statusMessage: `Page Not Found: ${t5}`, data: { path: t5 } });
                return delete e6._processingMiddleware, e6.runWithContext(() => showError(a6));
              }
              if (true !== o13 && (o13 || false === o13))
                return o13;
            }
          }
        }), i6.afterEach(() => {
          delete e6._processingMiddleware;
        }), await i6.replace(t5), isEqual(o10.fullPath, t5) || await e6.runWithContext(() => navigateTo(o10.fullPath));
      }), { provide: { route: o10, router: i6 } };
    } }), defineNuxtPlugin({ name: "nuxt:revive-payload:server", setup() {
      for (const a4 in Ee)
        e6 = a4, t5 = Ee[a4], useNuxtApp().ssrContext._payloadReducers[e6] = t5;
      var e6, t5;
    } }), defineNuxtPlugin({ name: "nuxt:global-components" })];
    Ae = defineComponent({ name: "ServerPlaceholder", render: () => createElementBlock("div") });
    _export_sfc = (e6, t5) => {
      const a4 = e6.__vccOpts || e6;
      for (const [e7, r4] of t5)
        a4[e7] = r4;
      return a4;
    };
    xe = { __name: "welcome", __ssrInlineRender: true, props: { appName: { type: String, default: "Nuxt" }, version: { type: String, default: "" }, title: { type: String, default: "Welcome to Nuxt!" }, readDocs: { type: String, default: "We highly recommend you take a look at the Nuxt documentation, whether you are new or have previous experience with the framework." }, followTwitter: { type: String, default: "Follow the Nuxt Twitter account to get latest news about releases, new modules, tutorials and tips." }, starGitHub: { type: String, default: "Nuxt is open source and the code is available on GitHub, feel free to star it, participate in discussions or dive into the source." } }, setup: (e6) => (useHead({ title: `${e6.title}`, script: [], style: [{ children: `@property --gradient-angle{syntax:'<angle>';inherits:false;initial-value:180deg}@keyframes gradient-rotate{0%{--gradient-angle:0deg}100%{--gradient-angle:360deg}}*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:var(--un-default-border-color, #e5e7eb)}:before,:after{--un-content:""}html{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{margin:0;line-height:inherit}h1,h2,h3{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}h1,h2,h3,p{margin:0}ul{list-style:none;margin:0;padding:0}img,svg{display:block;vertical-align:middle}img{max-width:100%;height:auto}*,:before,:after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / .5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }` }] }), (e7, t5, a4, r4) => {
      t5(`<div${ssrRenderAttrs(mergeProps({ class: "antialiased bg-white dark:bg-black text-black dark:text-white min-h-screen place-content-center flex flex-col items-center justify-center text-sm sm:text-base" }, r4))} data-v-8526c2ef><div class="flex-1 flex flex-col gap-y-16 py-14" data-v-8526c2ef><div class="flex flex-col gap-y-4 items-center justify-center" data-v-8526c2ef><a href="https://nuxt.com" target="_blank" aria-label="Nuxt" data-v-8526c2ef><svg width="61" height="42" viewBox="0 0 61 42" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-8526c2ef><path d="M33.9869 41.2211H56.412C57.1243 41.2212 57.824 41.0336 58.4408 40.6772C59.0576 40.3209 59.5698 39.8083 59.9258 39.191C60.2818 38.5737 60.469 37.8736 60.4687 37.1609C60.4684 36.4482 60.2805 35.7482 59.924 35.1313L44.864 9.03129C44.508 8.41416 43.996 7.90168 43.3793 7.54537C42.7626 7.18906 42.063 7.00147 41.3509 7.00147C40.6387 7.00147 39.9391 7.18906 39.3225 7.54537C38.7058 7.90168 38.1937 8.41416 37.8377 9.03129L33.9869 15.7093L26.458 2.65061C26.1018 2.03354 25.5895 1.52113 24.9726 1.16489C24.3557 0.808639 23.656 0.621094 22.9438 0.621094C22.2316 0.621094 21.5318 0.808639 20.915 1.16489C20.2981 1.52113 19.7858 2.03354 19.4296 2.65061L0.689224 35.1313C0.332704 35.7482 0.144842 36.4482 0.144532 37.1609C0.144222 37.8736 0.331476 38.5737 0.687459 39.191C1.04344 39.8083 1.5556 40.3209 2.17243 40.6772C2.78925 41.0336 3.48899 41.2212 4.20126 41.2211H18.2778C23.8551 41.2211 27.9682 38.7699 30.7984 33.9876L37.6694 22.0813L41.3498 15.7093L52.3951 34.8492H37.6694L33.9869 41.2211ZM18.0484 34.8426L8.2247 34.8404L22.9504 9.32211L30.2979 22.0813L25.3784 30.6092C23.4989 33.7121 21.3637 34.8426 18.0484 34.8426Z" fill="#00DC82" data-v-8526c2ef></path></svg></a><h1 class="text-black dark:text-white text-4xl sm:text-5xl font-semibold text-center" data-v-8526c2ef>Welcome to Nuxt!</h1></div><div class="grid grid-cols-2 lg:grid-cols-10 gap-6 max-w-[960px] px-4" data-v-8526c2ef><div class="col-span-2 lg:col-span-10 relative get-started-gradient-border" data-v-8526c2ef><div class="get-started-gradient-left absolute left-0 inset-y-0 w-[20%] bg-gradient-to-r to-transparent from-green-400 rounded-xl z-1 transition-opacity duration-300" data-v-8526c2ef></div><div class="get-started-gradient-right absolute right-0 inset-y-0 w-[20%] bg-gradient-to-l to-transparent from-blue-400 rounded-xl z-1 transition-opacity duration-300" data-v-8526c2ef></div><div class="w-full absolute inset-x-0 flex justify-center -top-[58px]" data-v-8526c2ef><img alt src="data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22105%22%20height%3D%22116%22%20fill%3D%22none%22%3E%3Cg%20filter%3D%22url(%23a)%22%20shape-rendering%3D%22geometricPrecision%22%3E%3Cpath%20fill%3D%22%2318181B%22%20d%3D%22M17.203%2033.223%2046.9%2014.286a8.416%208.416%200%200%201%208.64-.18L87.38%2031.97c2.68%201.527%204.365%204.409%204.428%207.571l.191%2034.944c.063%203.151-1.491%206.104-4.091%207.776l-30.143%2019.383a8.417%208.417%200%200%201-8.75.251l-31.126-17.73C15.135%2082.595%2012.98%2079.6%2013%2076.35V40.828c.02-3.111%201.614-5.994%204.203-7.605Z%22%2F%3E%3Cpath%20stroke%3D%22url(%23b)%22%20stroke-width%3D%222%22%20d%3D%22M46.9%2014.286%2017.202%2033.223c-2.59%201.61-4.183%204.494-4.203%207.605V76.35m33.9-62.064a8.416%208.416%200%200%201%208.64-.18m-8.64.18a8.435%208.435%200%200%201%208.64-.18M13%2076.35c-.02%203.25%202.135%206.246%204.888%207.814M13%2076.35c-.02%203.233%202.136%206.247%204.888%207.814m0%200%2031.126%2017.731m0%200a8.417%208.417%200%200%200%208.75-.251m-8.75.251a8.438%208.438%200%200%200%208.75-.251m0%200%2030.143-19.383m0%200c2.598-1.67%204.154-4.627%204.091-7.776m-4.091%207.776c2.6-1.672%204.154-4.625%204.091-7.776m0%200-.19-34.944m0%200c-.064-3.162-1.75-6.044-4.43-7.571m4.43%207.571c-.063-3.147-1.75-6.045-4.43-7.571m0%200L55.54%2014.105%22%2F%3E%3C%2Fg%3E%3Cpath%20fill%3D%22url(%23c)%22%20d%3D%22M48.669%2067.696c-.886%202.69-3.02%204.659-6.153%205.709-1.41.465-2.88.72-4.364.755a1.313%201.313%200%200%201-1.312-1.313c.035-1.484.29-2.954.754-4.364%201.05-3.133%203.02-5.266%205.71-6.152a1.312%201.312%200%201%201%20.836%202.477c-3.232%201.083-4.232%204.577-4.544%206.595%202.018-.311%205.512-1.312%206.595-4.544a1.313%201.313%200%200%201%202.477.837Zm16.39-12.486-1.46%201.477v10.057a2.657%202.657%200%200%201-.772%201.854l-5.316%205.3a2.559%202.559%200%200%201-1.853.77%202.413%202.413%200%200%201-.755-.115%202.624%202.624%200%200%201-1.821-2.001l-1.296-6.48-6.858-6.858-6.48-1.297a2.625%202.625%200%200%201-2.002-1.82%202.609%202.609%200%200%201%20.656-2.61l5.3-5.315a2.658%202.658%200%200%201%201.853-.771h10.057l1.477-1.46c4.692-4.692%209.499-4.561%2011.353-4.282a2.576%202.576%200%200%201%202.198%202.198c.28%201.854.41%206.661-4.282%2011.353Zm-26.103.132%206.185%201.23%206.546-6.546h-7.432l-5.299%205.316Zm8.482%202.657L53%2063.561l10.205-10.205c1.28-1.28%204.2-4.724%203.543-9.105-4.38-.656-7.826%202.264-9.105%203.544L47.438%2057.999Zm13.535%201.313-6.546%206.546%201.23%206.185%205.316-5.299v-7.432Z%22%20shape-rendering%3D%22geometricPrecision%22%2F%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22b%22%20x1%3D%2257.994%22%20x2%3D%2292%22%20y1%3D%2258%22%20y2%3D%2258%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%3Cstop%20stop-color%3D%22%2300DC82%22%2F%3E%3Cstop%20offset%3D%22.5%22%20stop-color%3D%22%231DE0B1%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%2336E4DA%22%2F%3E%3C%2FlinearGradient%3E%3ClinearGradient%20id%3D%22c%22%20x1%3D%2255.197%22%20x2%3D%2269.453%22%20y1%3D%2258.107%22%20y2%3D%2258.107%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%3Cstop%20stop-color%3D%22%2300DC82%22%2F%3E%3Cstop%20offset%3D%22.5%22%20stop-color%3D%22%231DE0B1%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%2336E4DA%22%2F%3E%3C%2FlinearGradient%3E%3Cfilter%20id%3D%22a%22%20width%3D%22104.897%22%20height%3D%22115.897%22%20x%3D%22.052%22%20y%3D%22.052%22%20color-interpolation-filters%3D%22sRGB%22%20filterUnits%3D%22userSpaceOnUse%22%3E%3CfeFlood%20flood-opacity%3D%220%22%20result%3D%22BackgroundImageFix%22%2F%3E%3CfeColorMatrix%20in%3D%22SourceAlpha%22%20result%3D%22hardAlpha%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200%22%2F%3E%3CfeOffset%2F%3E%3CfeGaussianBlur%20stdDeviation%3D%225.974%22%2F%3E%3CfeComposite%20in2%3D%22hardAlpha%22%20operator%3D%22out%22%2F%3E%3CfeColorMatrix%20values%3D%220%200%200%200%201%200%200%200%200%201%200%200%200%200%201%200%200%200%200.07%200%22%2F%3E%3CfeBlend%20in2%3D%22BackgroundImageFix%22%20result%3D%22effect1_dropShadow_2724_4091%22%2F%3E%3CfeBlend%20in%3D%22SourceGraphic%22%20in2%3D%22effect1_dropShadow_2724_4091%22%20result%3D%22shape%22%2F%3E%3C%2Ffilter%3E%3C%2Fdefs%3E%3C%2Fsvg%3E%0A" class="hidden dark:block" data-v-8526c2ef> <img alt src="data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22105%22%20height%3D%22116%22%20fill%3D%22none%22%3E%3Cg%20filter%3D%22url(%23a)%22%3E%3Cpath%20fill%3D%22%23fff%22%20d%3D%22M17.203%2033.223%2046.9%2014.286a8.416%208.416%200%200%201%208.64-.18L87.38%2031.97c2.68%201.527%204.365%204.409%204.428%207.571l.191%2034.944c.063%203.151-1.491%206.104-4.091%207.776l-30.143%2019.383a8.417%208.417%200%200%201-8.75.251l-31.126-17.73C15.135%2082.595%2012.98%2079.6%2013%2076.35V40.828c.02-3.111%201.614-5.994%204.203-7.605Z%22%2F%3E%3Cpath%20stroke%3D%22url(%23b)%22%20stroke-width%3D%222%22%20d%3D%22M46.9%2014.286%2017.202%2033.223c-2.59%201.61-4.183%204.494-4.203%207.605V76.35m33.9-62.064a8.416%208.416%200%200%201%208.64-.18m-8.64.18a8.435%208.435%200%200%201%208.64-.18M13%2076.35c-.02%203.25%202.135%206.246%204.888%207.814M13%2076.35c-.02%203.233%202.136%206.247%204.888%207.814m0%200%2031.126%2017.731m0%200a8.417%208.417%200%200%200%208.75-.251m-8.75.251a8.438%208.438%200%200%200%208.75-.251m0%200%2030.143-19.383m0%200c2.598-1.67%204.154-4.627%204.091-7.776m-4.091%207.776c2.6-1.672%204.154-4.625%204.091-7.776m0%200-.19-34.944m0%200c-.064-3.162-1.75-6.044-4.43-7.571m4.43%207.571c-.063-3.147-1.75-6.045-4.43-7.571m0%200L55.54%2014.105%22%2F%3E%3C%2Fg%3E%3Cpath%20fill%3D%22%23fff%22%20d%3D%22M32%2037h42v42H32z%22%2F%3E%3Cpath%20fill%3D%22url(%23c)%22%20d%3D%22M48.669%2067.697c-.886%202.69-3.02%204.659-6.153%205.709-1.41.465-2.88.72-4.364.755a1.313%201.313%200%200%201-1.312-1.313c.035-1.484.29-2.954.754-4.364%201.05-3.134%203.02-5.266%205.71-6.152a1.314%201.314%200%201%201%20.836%202.477c-3.232%201.083-4.232%204.577-4.544%206.595%202.018-.311%205.512-1.312%206.595-4.544a1.313%201.313%200%200%201%202.477.837Zm16.39-12.486-1.46%201.477v10.057a2.657%202.657%200%200%201-.772%201.854l-5.316%205.3a2.559%202.559%200%200%201-1.853.77%202.413%202.413%200%200%201-.755-.115%202.626%202.626%200%200%201-1.821-2.001l-1.296-6.48-6.858-6.858-6.48-1.297a2.625%202.625%200%200%201-2.002-1.82%202.609%202.609%200%200%201%20.656-2.61l5.3-5.315a2.658%202.658%200%200%201%201.853-.771h10.057l1.477-1.46c4.692-4.692%209.499-4.561%2011.353-4.282a2.576%202.576%200%200%201%202.198%202.198c.28%201.854.41%206.661-4.282%2011.353Zm-26.103.132%206.185%201.23%206.546-6.546h-7.432l-5.299%205.316ZM47.438%2058%2053%2063.562l10.205-10.204c1.28-1.28%204.2-4.725%203.543-9.106-4.38-.656-7.826%202.264-9.105%203.544L47.438%2058Zm13.535%201.313-6.546%206.546%201.23%206.185%205.316-5.299v-7.432Z%22%2F%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22b%22%20x1%3D%2257.994%22%20x2%3D%2292%22%20y1%3D%2258%22%20y2%3D%2258%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%3Cstop%20stop-color%3D%22%2300DC82%22%2F%3E%3Cstop%20offset%3D%22.5%22%20stop-color%3D%22%231DE0B1%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%2336E4DA%22%2F%3E%3C%2FlinearGradient%3E%3ClinearGradient%20id%3D%22c%22%20x1%3D%2255.197%22%20x2%3D%2269.453%22%20y1%3D%2258.108%22%20y2%3D%2258.108%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%3Cstop%20stop-color%3D%22%2300DC82%22%2F%3E%3Cstop%20offset%3D%22.5%22%20stop-color%3D%22%231DE0B1%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%2336E4DA%22%2F%3E%3C%2FlinearGradient%3E%3Cfilter%20id%3D%22a%22%20width%3D%22104.897%22%20height%3D%22115.897%22%20x%3D%22.052%22%20y%3D%22.052%22%20color-interpolation-filters%3D%22sRGB%22%20filterUnits%3D%22userSpaceOnUse%22%3E%3CfeFlood%20flood-opacity%3D%220%22%20result%3D%22BackgroundImageFix%22%2F%3E%3CfeColorMatrix%20in%3D%22SourceAlpha%22%20result%3D%22hardAlpha%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200%22%2F%3E%3CfeOffset%2F%3E%3CfeGaussianBlur%20stdDeviation%3D%225.974%22%2F%3E%3CfeComposite%20in2%3D%22hardAlpha%22%20operator%3D%22out%22%2F%3E%3CfeColorMatrix%20values%3D%220%200%200%200%201%200%200%200%200%201%200%200%200%200%201%200%200%200%200.07%200%22%2F%3E%3CfeBlend%20in2%3D%22BackgroundImageFix%22%20result%3D%22effect1_dropShadow_2726_4054%22%2F%3E%3CfeBlend%20in%3D%22SourceGraphic%22%20in2%3D%22effect1_dropShadow_2726_4054%22%20result%3D%22shape%22%2F%3E%3C%2Ffilter%3E%3C%2Fdefs%3E%3C%2Fsvg%3E%0A" class="dark:hidden" data-v-8526c2ef></div><div class="flex flex-col rounded-xl items-center gap-y-4 pt-[58px] px-4 sm:px-28 pb-6 z-10" data-v-8526c2ef><h2 class="font-semibold text-2xl text-black dark:text-white" data-v-8526c2ef>Get started</h2><p class="mb-2 text-center" data-v-8526c2ef>Remove this welcome page by replacing <a class="bg-gray-100 dark:bg-white/10 rounded font-mono p-1 font-bold" data-v-8526c2ef>&lt;NuxtWelcome /&gt;</a> in <a href="https://nuxt.com/docs/guide/directory-structure/app" target="_blank" rel="noopener" class="bg-gray-100 dark:bg-white/10 rounded font-mono p-1 font-bold" data-v-8526c2ef>app.vue</a> with your own code, or creating your own <span class="bg-gray-100 dark:bg-white/10 rounded font-mono p-1 font-bold" data-v-8526c2ef>app.vue</span> if it doesn&#39;t exist.</p></div></div><div class="lg:min-h-min sm:min-h-[220px] md:min-h-[180px] col-span-2 sm:col-span-1 lg:col-span-6 text-black dark:text-white rounded-xl modules-container relative items-center justify-center border border-gray-200 dark:border-transparent hover:border-transparent" data-v-8526c2ef><div class="gradient-border gradient-border-modules gradient-border-rect" data-v-8526c2ef></div><div class="modules-gradient-right absolute right-0 inset-y-0 w-[20%] bg-gradient-to-l to-transparent from-yellow-400 rounded-xl z-1 transition-opacity duration-300" data-v-8526c2ef></div><a href="https://nuxt.com/modules" target="_blank" class="py-6 px-5 rounded-xl flex items-center justify-center gap-x-4 dark:border-none bg-white dark:bg-gray-900 sm:min-h-[220px] md:min-h-[180px] lg:min-h-min" data-v-8526c2ef><img src="data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%2253%22%20height%3D%2258%22%20viewBox%3D%220%200%2053%2058%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cg%20clip-path%3D%22url(%23clip0_2613_3853)%22%3E%0A%3Cpath%20d%3D%22M51.1519%2039.8821C51.154%2039.9844%2051.1527%2040.0863%2051.148%2040.1877C51.0782%2041.7091%2050.2566%2043.1165%2048.9325%2043.9357L29.0918%2056.2117C27.6504%2057.1035%2025.8212%2057.1564%2024.3387%2056.3439L3.85107%2045.1148C2.27157%2044.2491%201.14238%2042.6366%201.15291%2041.0494L1.15293%2041.0427L1.153%2018.552C1.15301%2018.5509%201.15302%2018.5499%201.15302%2018.5488C1.16485%2016.9324%202.02611%2015.4289%203.43319%2014.5869L3.43322%2014.587L3.44269%2014.5812L22.9844%202.59084C24.4169%201.73583%2026.2139%201.69824%2027.6729%202.49791L27.6729%202.49792L27.6784%202.50094L48.6303%2013.8121C48.6313%2013.8126%2048.6322%2013.8131%2048.6331%2013.8136C50.0797%2014.6078%2050.9898%2016.1132%2051.026%2017.7438L51.1517%2039.8672L51.1517%2039.8746L51.1519%2039.8821Z%22%20fill%3D%22white%22%20stroke%3D%22url(%23paint0_linear_2613_3853)%22%20stroke-width%3D%222%22%2F%3E%0A%3Cpath%20d%3D%22M33.8193%2042.2552H17.8193C16.7585%2042.2552%2015.7411%2041.8337%2014.9909%2041.0836C14.2408%2040.3334%2013.8193%2039.316%2013.8193%2038.2552V24.9218C13.8193%2023.861%2014.2408%2022.8435%2014.9909%2022.0934C15.7411%2021.3433%2016.7585%2020.9218%2017.8193%2020.9218H19.1527C19.1751%2019.792%2019.5558%2018.6985%2020.2399%2017.7991C20.924%2016.8996%2021.8761%2016.2407%2022.9589%2015.9173C24.0416%2015.594%2025.1992%2015.6229%2026.2644%2016C27.3297%2016.377%2028.2477%2017.0827%2028.886%2018.0152C29.4839%2018.8674%2029.8094%2019.8808%2029.8193%2020.9218H33.8193C34.173%2020.9218%2034.5121%2021.0623%2034.7621%2021.3124C35.0122%2021.5624%2035.1527%2021.9015%2035.1527%2022.2552V26.2552C36.2825%2026.2776%2037.376%2026.6583%2038.2754%2027.3424C39.1749%2028.0265%2039.8338%2028.9786%2040.1572%2030.0613C40.4805%2031.1441%2040.4516%2032.3016%2040.0745%2033.3669C39.6975%2034.4322%2038.9918%2035.3502%2038.0593%2035.9885C37.2071%2036.5864%2036.1937%2036.9118%2035.1527%2036.9218V36.9218V40.9218C35.1527%2041.2755%2035.0122%2041.6146%2034.7621%2041.8646C34.5121%2042.1147%2034.173%2042.2552%2033.8193%2042.2552ZM17.8193%2023.5885C17.4657%2023.5885%2017.1266%2023.729%2016.8765%2023.979C16.6265%2024.2291%2016.486%2024.5682%2016.486%2024.9218V38.2552C16.486%2038.6088%2016.6265%2038.9479%2016.8765%2039.198C17.1266%2039.448%2017.4657%2039.5885%2017.8193%2039.5885H32.486V35.3485C32.4849%2035.1347%2032.5351%2034.9238%2032.6326%2034.7335C32.7301%2034.5432%2032.8718%2034.3792%2033.046%2034.2552C33.2196%2034.1313%2033.4204%2034.051%2033.6316%2034.0208C33.8427%2033.9907%2034.058%2034.0116%2034.2593%2034.0818C34.6393%2034.2368%2035.0532%2034.2901%2035.46%2034.2363C35.8669%2034.1825%2036.2527%2034.0236%2036.5793%2033.7752C36.9045%2033.5769%2037.1834%2033.3113%2037.3973%2032.9962C37.6111%2032.6811%2037.7551%2032.3239%2037.8193%2031.9485C37.8708%2031.5699%2037.8402%2031.1847%2037.7298%2030.8189C37.6194%2030.4532%2037.4317%2030.1154%2037.1793%2029.8285C36.8381%2029.414%2036.3734%2029.1193%2035.8529%2028.9874C35.3325%2028.8555%2034.7835%2028.8932%2034.286%2029.0952C34.0846%2029.1654%2033.8694%2029.1863%2033.6582%2029.1562C33.4471%2029.126%2033.2463%2029.0457%2033.0727%2028.9218C32.8985%2028.7978%2032.7567%2028.6338%2032.6593%2028.4435C32.5618%2028.2532%2032.5115%2028.0423%2032.5127%2027.8285V23.5885H28.246C28.0269%2023.6009%2027.8081%2023.559%2027.609%2023.4666C27.4099%2023.3742%2027.2368%2023.234%2027.1049%2023.0586C26.973%2022.8832%2026.8864%2022.6779%2026.8529%2022.461C26.8194%2022.2441%2026.8399%2022.0222%2026.9127%2021.8152C27.0677%2021.4352%2027.1209%2021.0213%2027.0671%2020.6145C27.0134%2020.2076%2026.8544%2019.8218%2026.606%2019.4952C26.4091%2019.1607%2026.1395%2018.8749%2025.8172%2018.6588C25.4948%2018.4427%2025.128%2018.3019%2024.7438%2018.2468C24.3597%2018.1917%2023.9681%2018.2238%2023.598%2018.3407C23.2279%2018.4575%2022.8889%2018.6561%2022.606%2018.9218C22.3433%2019.1824%2022.1377%2019.4948%2022.0023%2019.8391C21.8668%2020.1834%2021.8045%2020.5521%2021.8193%2020.9218C21.8224%2021.2277%2021.8812%2021.5304%2021.9927%2021.8152C22.0632%2022.0168%2022.0842%2022.2324%2022.054%2022.4438C22.0237%2022.6553%2021.9432%2022.8564%2021.819%2023.0302C21.6949%2023.204%2021.5308%2023.3454%2021.3406%2023.4426C21.1504%2023.5397%2020.9396%2023.5898%2020.726%2023.5885H17.8193Z%22%20fill%3D%22url(%23paint1_linear_2613_3853)%22%2F%3E%0A%3C%2Fg%3E%0A%3Cdefs%3E%0A%3ClinearGradient%20id%3D%22paint0_linear_2613_3853%22%20x1%3D%220.662695%22%20y1%3D%2218.4025%22%20x2%3D%2251.7209%22%20y2%3D%2244.2212%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22%23F7D14C%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23A38108%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3ClinearGradient%20id%3D%22paint1_linear_2613_3853%22%20x1%3D%2213.7453%22%20y1%3D%2221.3705%22%20x2%3D%2240.3876%22%20y2%3D%2235.7024%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22%23F7D14C%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23A38108%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3CclipPath%20id%3D%22clip0_2613_3853%22%3E%0A%3Crect%20width%3D%2252%22%20height%3D%2257%22%20fill%3D%22white%22%20transform%3D%22translate(0.152832%200.920898)%22%2F%3E%0A%3C%2FclipPath%3E%0A%3C%2Fdefs%3E%0A%3C%2Fsvg%3E%0A" alt="modules icon" class="modules-image-color-light" data-v-8526c2ef> <img src="data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%2253%22%20height%3D%2258%22%20viewBox%3D%220%200%2053%2058%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M3.43319%2014.5869L3.43322%2014.587L3.44269%2014.5812L22.9844%202.59084C24.4246%201.73116%2026.2124%201.69742%2027.6729%202.49791L27.6729%202.49792L27.6784%202.50094L48.6303%2013.8121C48.6313%2013.8126%2048.6322%2013.8131%2048.6331%2013.8137C50.0812%2014.6086%2050.9896%2016.1043%2051.026%2017.7437L51.1517%2039.8672L51.1517%2039.8746L51.1519%2039.8821C51.1856%2041.5204%2050.346%2043.0611%2048.9325%2043.9357L29.0918%2056.2117C27.6424%2057.1085%2025.8227%2057.1572%2024.3387%2056.3439L3.85107%2045.1148C2.26984%2044.2481%201.14232%2042.646%201.15293%2041.0494V41.0427L1.153%2018.552C1.15301%2018.5509%201.15302%2018.5499%201.15302%2018.5488C1.16485%2016.9324%202.02611%2015.4289%203.43319%2014.5869Z%22%20fill%3D%22%2318181B%22%20stroke%3D%22url(%23paint0_linear_2595_7337)%22%20stroke-width%3D%222%22%2F%3E%0A%3Cpath%20d%3D%22M33.8193%2042.2542H17.8193C16.7585%2042.2542%2015.7411%2041.8328%2014.9909%2041.0826C14.2408%2040.3325%2013.8193%2039.3151%2013.8193%2038.2542V24.9209C13.8193%2023.86%2014.2408%2022.8426%2014.9909%2022.0924C15.7411%2021.3423%2016.7585%2020.9209%2017.8193%2020.9209H19.1527C19.1751%2019.791%2019.5558%2018.6975%2020.2399%2017.7981C20.924%2016.8986%2021.8761%2016.2397%2022.9589%2015.9164C24.0416%2015.593%2025.1992%2015.6219%2026.2644%2015.999C27.3297%2016.376%2028.2477%2017.0817%2028.886%2018.0142C29.4839%2018.8664%2029.8094%2019.8799%2029.8193%2020.9209H33.8193C34.173%2020.9209%2034.5121%2021.0613%2034.7621%2021.3114C35.0122%2021.5614%2035.1527%2021.9006%2035.1527%2022.2542V26.2542C36.2825%2026.2766%2037.376%2026.6573%2038.2754%2027.3414C39.1749%2028.0255%2039.8338%2028.9776%2040.1572%2030.0604C40.4805%2031.1432%2040.4516%2032.3007%2040.0745%2033.366C39.6975%2034.4312%2038.9918%2035.3492%2038.0593%2035.9875C37.2071%2036.5854%2036.1937%2036.9109%2035.1527%2036.9209V40.9209C35.1527%2041.2745%2035.0122%2041.6136%2034.7621%2041.8637C34.5121%2042.1137%2034.173%2042.2542%2033.8193%2042.2542ZM17.8193%2023.5875C17.4657%2023.5875%2017.1266%2023.728%2016.8765%2023.978C16.6265%2024.2281%2016.486%2024.5672%2016.486%2024.9209V38.2542C16.486%2038.6078%2016.6265%2038.9469%2016.8765%2039.197C17.1266%2039.447%2017.4657%2039.5875%2017.8193%2039.5875H32.486V35.3475C32.4849%2035.1337%2032.5351%2034.9228%2032.6326%2034.7325C32.7301%2034.5422%2032.8718%2034.3782%2033.046%2034.2542C33.2196%2034.1304%2033.4205%2034.05%2033.6316%2034.0198C33.8427%2033.9897%2034.058%2034.0106%2034.2593%2034.0809C34.6393%2034.2359%2035.0532%2034.2891%2035.46%2034.2353C35.8669%2034.1816%2036.2527%2034.0226%2036.5793%2033.7742C36.9045%2033.5759%2037.1834%2033.3103%2037.3973%2032.9952C37.6111%2032.6801%2037.7551%2032.3229%2037.8193%2031.9475C37.8708%2031.5689%2037.8402%2031.1837%2037.7298%2030.8179C37.6194%2030.4522%2037.4317%2030.1144%2037.1793%2029.8275C36.8381%2029.413%2036.3734%2029.1183%2035.8529%2028.9864C35.3325%2028.8545%2034.7835%2028.8923%2034.286%2029.0942C34.0846%2029.1644%2033.8694%2029.1854%2033.6582%2029.1552C33.4471%2029.125%2033.2463%2029.0447%2033.0727%2028.9209C32.8985%2028.7969%2032.7567%2028.6328%2032.6593%2028.4425C32.5618%2028.2522%2032.5115%2028.0413%2032.5127%2027.8275V23.5875H28.246C28.0269%2023.5999%2027.8081%2023.5581%2027.609%2023.4656C27.4099%2023.3732%2027.2368%2023.233%2027.1049%2023.0576C26.973%2022.8822%2026.8864%2022.6769%2026.8529%2022.46C26.8194%2022.2431%2026.8399%2022.0213%2026.9127%2021.8142C27.0677%2021.4342%2027.1209%2021.0204%2027.0671%2020.6135C27.0134%2020.2066%2026.8544%2019.8208%2026.606%2019.4942C26.4091%2019.1597%2026.1395%2018.8739%2025.8172%2018.6578C25.4948%2018.4417%2025.128%2018.3009%2024.7438%2018.2458C24.3597%2018.1908%2023.9681%2018.2228%2023.598%2018.3397C23.2279%2018.4565%2022.8889%2018.6552%2022.606%2018.9209C22.3433%2019.1814%2022.1377%2019.4938%2022.0023%2019.8381C21.8668%2020.1824%2021.8045%2020.5512%2021.8193%2020.9209C21.8224%2021.2267%2021.8812%2021.5294%2021.9927%2021.8142C22.0632%2022.0158%2022.0842%2022.2314%2022.054%2022.4429C22.0237%2022.6543%2021.9432%2022.8554%2021.819%2023.0292C21.6949%2023.203%2021.5308%2023.3444%2021.3406%2023.4416C21.1504%2023.5388%2020.9396%2023.5888%2020.726%2023.5875H17.8193Z%22%20fill%3D%22url(%23paint1_linear_2595_7337)%22%2F%3E%0A%3Cdefs%3E%0A%3ClinearGradient%20id%3D%22paint0_linear_2595_7337%22%20x1%3D%220.662695%22%20y1%3D%2218.4025%22%20x2%3D%2251.7209%22%20y2%3D%2244.2212%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22%23F7D14C%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23A38108%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3ClinearGradient%20id%3D%22paint1_linear_2595_7337%22%20x1%3D%2213.7453%22%20y1%3D%2221.3695%22%20x2%3D%2240.3876%22%20y2%3D%2235.7015%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22%23F7D14C%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23A38108%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3C%2Fdefs%3E%0A%3C%2Fsvg%3E%0A" alt="modules icon" class="modules-image-color-dark" data-v-8526c2ef> <img src="data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%2253%22%20height%3D%2258%22%20viewBox%3D%220%200%2053%2058%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cg%20clip-path%3D%22url(%23clip0_2691_4389)%22%3E%0A%3Cpath%20d%3D%22M51.1519%2039.8821C51.154%2039.9844%2051.1527%2040.0863%2051.148%2040.1877C51.0782%2041.7091%2050.2566%2043.1165%2048.9325%2043.9357L29.0918%2056.2117C27.6504%2057.1035%2025.8212%2057.1564%2024.3387%2056.3439L3.85107%2045.1148C2.27157%2044.2491%201.14238%2042.6366%201.15291%2041.0494L1.15293%2041.0427L1.153%2018.552C1.15301%2018.5509%201.15302%2018.5499%201.15302%2018.5488C1.16485%2016.9324%202.02611%2015.4289%203.43319%2014.5869L3.43322%2014.587L3.44269%2014.5812L22.9844%202.59084C24.4169%201.73583%2026.2139%201.69824%2027.6729%202.49791L27.6729%202.49792L27.6784%202.50094L48.6303%2013.8121C48.6313%2013.8126%2048.6322%2013.8131%2048.6331%2013.8136C50.0797%2014.6078%2050.9898%2016.1132%2051.026%2017.7438L51.1517%2039.8672L51.1517%2039.8746L51.1519%2039.8821Z%22%20fill%3D%22white%22%20stroke%3D%22url(%23paint0_linear_2691_4389)%22%20stroke-width%3D%222%22%2F%3E%0A%3Cpath%20d%3D%22M33.8193%2042.2542H17.8193C16.7585%2042.2542%2015.7411%2041.8328%2014.9909%2041.0826C14.2408%2040.3325%2013.8193%2039.3151%2013.8193%2038.2542V24.9209C13.8193%2023.86%2014.2408%2022.8426%2014.9909%2022.0924C15.7411%2021.3423%2016.7585%2020.9209%2017.8193%2020.9209H19.1527C19.1751%2019.791%2019.5558%2018.6975%2020.2399%2017.7981C20.924%2016.8986%2021.8761%2016.2397%2022.9589%2015.9164C24.0416%2015.593%2025.1992%2015.6219%2026.2644%2015.999C27.3297%2016.376%2028.2477%2017.0817%2028.886%2018.0142C29.4839%2018.8664%2029.8094%2019.8799%2029.8193%2020.9209H33.8193C34.173%2020.9209%2034.5121%2021.0613%2034.7621%2021.3114C35.0122%2021.5614%2035.1527%2021.9006%2035.1527%2022.2542V26.2542C36.2825%2026.2766%2037.376%2026.6573%2038.2754%2027.3414C39.1749%2028.0255%2039.8338%2028.9776%2040.1572%2030.0604C40.4805%2031.1432%2040.4516%2032.3007%2040.0745%2033.366C39.6975%2034.4312%2038.9918%2035.3492%2038.0593%2035.9875C37.2071%2036.5854%2036.1937%2036.9109%2035.1527%2036.9209V36.9209V40.9209C35.1527%2041.2745%2035.0122%2041.6136%2034.7621%2041.8637C34.5121%2042.1137%2034.173%2042.2542%2033.8193%2042.2542ZM17.8193%2023.5875C17.4657%2023.5875%2017.1266%2023.728%2016.8765%2023.978C16.6265%2024.2281%2016.486%2024.5672%2016.486%2024.9209V38.2542C16.486%2038.6078%2016.6265%2038.9469%2016.8765%2039.197C17.1266%2039.447%2017.4657%2039.5875%2017.8193%2039.5875H32.486V35.3475C32.4849%2035.1337%2032.5351%2034.9228%2032.6326%2034.7325C32.7301%2034.5422%2032.8718%2034.3782%2033.046%2034.2542C33.2196%2034.1304%2033.4204%2034.05%2033.6316%2034.0198C33.8427%2033.9897%2034.058%2034.0106%2034.2593%2034.0809C34.6393%2034.2359%2035.0532%2034.2891%2035.46%2034.2353C35.8669%2034.1816%2036.2527%2034.0226%2036.5793%2033.7742C36.9045%2033.5759%2037.1834%2033.3103%2037.3973%2032.9952C37.6111%2032.6801%2037.7551%2032.3229%2037.8193%2031.9475C37.8708%2031.5689%2037.8402%2031.1837%2037.7298%2030.8179C37.6194%2030.4522%2037.4317%2030.1144%2037.1793%2029.8275C36.8381%2029.413%2036.3734%2029.1183%2035.8529%2028.9864C35.3325%2028.8545%2034.7835%2028.8923%2034.286%2029.0942C34.0846%2029.1644%2033.8694%2029.1854%2033.6582%2029.1552C33.4471%2029.125%2033.2463%2029.0447%2033.0727%2028.9209C32.8985%2028.7969%2032.7567%2028.6328%2032.6593%2028.4425C32.5618%2028.2522%2032.5115%2028.0413%2032.5127%2027.8275V23.5875H28.246C28.0269%2023.5999%2027.8081%2023.5581%2027.609%2023.4656C27.4099%2023.3732%2027.2368%2023.233%2027.1049%2023.0576C26.973%2022.8822%2026.8864%2022.6769%2026.8529%2022.46C26.8194%2022.2431%2026.8399%2022.0213%2026.9127%2021.8142C27.0677%2021.4342%2027.1209%2021.0204%2027.0671%2020.6135C27.0134%2020.2066%2026.8544%2019.8208%2026.606%2019.4942C26.4091%2019.1597%2026.1395%2018.8739%2025.8172%2018.6578C25.4948%2018.4417%2025.128%2018.3009%2024.7438%2018.2458C24.3597%2018.1908%2023.9681%2018.2228%2023.598%2018.3397C23.2279%2018.4565%2022.8889%2018.6552%2022.606%2018.9209C22.3433%2019.1814%2022.1377%2019.4938%2022.0023%2019.8381C21.8668%2020.1824%2021.8045%2020.5512%2021.8193%2020.9209C21.8224%2021.2267%2021.8812%2021.5294%2021.9927%2021.8142C22.0632%2022.0158%2022.0842%2022.2314%2022.054%2022.4429C22.0237%2022.6543%2021.9432%2022.8554%2021.819%2023.0292C21.6949%2023.203%2021.5308%2023.3444%2021.3406%2023.4416C21.1504%2023.5388%2020.9396%2023.5888%2020.726%2023.5875H17.8193Z%22%20fill%3D%22url(%23paint1_linear_2691_4389)%22%2F%3E%0A%3C%2Fg%3E%0A%3Cdefs%3E%0A%3ClinearGradient%20id%3D%22paint0_linear_2691_4389%22%20x1%3D%220.662695%22%20y1%3D%2218.4025%22%20x2%3D%2251.7209%22%20y2%3D%2244.2212%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22%23D4D4D8%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22%2371717A%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3ClinearGradient%20id%3D%22paint1_linear_2691_4389%22%20x1%3D%2213.7453%22%20y1%3D%2221.3695%22%20x2%3D%2240.3876%22%20y2%3D%2235.7015%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22%23D4D4D8%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22%2371717A%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3CclipPath%20id%3D%22clip0_2691_4389%22%3E%0A%3Crect%20width%3D%2252%22%20height%3D%2257%22%20fill%3D%22white%22%20transform%3D%22translate(0.152832%200.920898)%22%2F%3E%0A%3C%2FclipPath%3E%0A%3C%2Fdefs%3E%0A%3C%2Fsvg%3E%0A" alt="modules icon" class="modules-image-light" data-v-8526c2ef> <img src="data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%2253%22%20height%3D%2258%22%20viewBox%3D%220%200%2053%2058%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M3.43319%2014.5869L3.43322%2014.587L3.44269%2014.5812L22.9844%202.59084C24.4246%201.73116%2026.2124%201.69742%2027.6729%202.49791L27.6729%202.49792L27.6784%202.50094L48.6303%2013.8121C48.6313%2013.8126%2048.6322%2013.8131%2048.6331%2013.8137C50.0812%2014.6086%2050.9896%2016.1043%2051.026%2017.7437L51.1517%2039.8672L51.1517%2039.8746L51.1519%2039.8821C51.1856%2041.5203%2050.346%2043.0611%2048.9325%2043.9357L29.0918%2056.2117C27.6424%2057.1085%2025.8227%2057.1572%2024.3387%2056.3439L3.85107%2045.1148C2.26984%2044.2481%201.14232%2042.646%201.15293%2041.0494V41.0427L1.153%2018.552C1.15301%2018.5509%201.15302%2018.5499%201.15302%2018.5488C1.16485%2016.9324%202.02611%2015.4289%203.43319%2014.5869Z%22%20fill%3D%22%2318181B%22%20stroke%3D%22url(%23paint0_linear_2595_7175)%22%20stroke-width%3D%222%22%2F%3E%0A%3Cpath%20d%3D%22M33.8193%2042.2542H17.8193C16.7585%2042.2542%2015.7411%2041.8328%2014.9909%2041.0826C14.2408%2040.3325%2013.8193%2039.3151%2013.8193%2038.2542V24.9209C13.8193%2023.86%2014.2408%2022.8426%2014.9909%2022.0924C15.7411%2021.3423%2016.7585%2020.9209%2017.8193%2020.9209H19.1527C19.1751%2019.791%2019.5558%2018.6975%2020.2399%2017.7981C20.924%2016.8986%2021.8761%2016.2397%2022.9589%2015.9164C24.0416%2015.593%2025.1992%2015.6219%2026.2644%2015.999C27.3297%2016.376%2028.2477%2017.0817%2028.886%2018.0142C29.4839%2018.8664%2029.8094%2019.8799%2029.8193%2020.9209H33.8193C34.173%2020.9209%2034.5121%2021.0613%2034.7621%2021.3114C35.0122%2021.5614%2035.1527%2021.9006%2035.1527%2022.2542V26.2542C36.2825%2026.2766%2037.376%2026.6573%2038.2754%2027.3414C39.1749%2028.0255%2039.8338%2028.9776%2040.1572%2030.0604C40.4805%2031.1432%2040.4516%2032.3007%2040.0745%2033.366C39.6975%2034.4312%2038.9918%2035.3492%2038.0593%2035.9875C37.2071%2036.5854%2036.1937%2036.9109%2035.1527%2036.9209V40.9209C35.1527%2041.2745%2035.0122%2041.6136%2034.7621%2041.8637C34.5121%2042.1137%2034.173%2042.2542%2033.8193%2042.2542ZM17.8193%2023.5875C17.4657%2023.5875%2017.1266%2023.728%2016.8765%2023.978C16.6265%2024.2281%2016.486%2024.5672%2016.486%2024.9209V38.2542C16.486%2038.6078%2016.6265%2038.9469%2016.8765%2039.197C17.1266%2039.447%2017.4657%2039.5875%2017.8193%2039.5875H32.486V35.3475C32.4849%2035.1337%2032.5351%2034.9228%2032.6326%2034.7325C32.7301%2034.5422%2032.8718%2034.3782%2033.046%2034.2542C33.2196%2034.1304%2033.4205%2034.05%2033.6316%2034.0198C33.8427%2033.9897%2034.058%2034.0106%2034.2593%2034.0809C34.6393%2034.2359%2035.0532%2034.2891%2035.46%2034.2353C35.8669%2034.1816%2036.2527%2034.0226%2036.5793%2033.7742C36.9045%2033.5759%2037.1834%2033.3103%2037.3973%2032.9952C37.6111%2032.6801%2037.7551%2032.3229%2037.8193%2031.9475C37.8708%2031.5689%2037.8402%2031.1837%2037.7298%2030.8179C37.6194%2030.4522%2037.4317%2030.1144%2037.1793%2029.8275C36.8381%2029.413%2036.3734%2029.1183%2035.8529%2028.9864C35.3325%2028.8545%2034.7835%2028.8923%2034.286%2029.0942C34.0846%2029.1644%2033.8694%2029.1854%2033.6582%2029.1552C33.4471%2029.125%2033.2463%2029.0447%2033.0727%2028.9209C32.8985%2028.7969%2032.7567%2028.6328%2032.6593%2028.4425C32.5618%2028.2522%2032.5115%2028.0413%2032.5127%2027.8275V23.5875H28.246C28.0269%2023.5999%2027.8081%2023.5581%2027.609%2023.4656C27.4099%2023.3732%2027.2368%2023.233%2027.1049%2023.0576C26.973%2022.8822%2026.8864%2022.6769%2026.8529%2022.46C26.8194%2022.2431%2026.8399%2022.0213%2026.9127%2021.8142C27.0677%2021.4342%2027.1209%2021.0204%2027.0671%2020.6135C27.0134%2020.2066%2026.8544%2019.8208%2026.606%2019.4942C26.4091%2019.1597%2026.1395%2018.8739%2025.8172%2018.6578C25.4948%2018.4417%2025.128%2018.3009%2024.7438%2018.2458C24.3597%2018.1908%2023.9681%2018.2228%2023.598%2018.3397C23.2279%2018.4565%2022.8889%2018.6552%2022.606%2018.9209C22.3433%2019.1814%2022.1377%2019.4938%2022.0023%2019.8381C21.8668%2020.1824%2021.8045%2020.5512%2021.8193%2020.9209C21.8224%2021.2267%2021.8812%2021.5294%2021.9927%2021.8142C22.0632%2022.0158%2022.0842%2022.2314%2022.054%2022.4429C22.0237%2022.6543%2021.9432%2022.8554%2021.819%2023.0292C21.6949%2023.203%2021.5308%2023.3444%2021.3406%2023.4416C21.1504%2023.5388%2020.9396%2023.5888%2020.726%2023.5875H17.8193Z%22%20fill%3D%22url(%23paint1_linear_2595_7175)%22%2F%3E%0A%3Cdefs%3E%0A%3ClinearGradient%20id%3D%22paint0_linear_2595_7175%22%20x1%3D%220.662695%22%20y1%3D%2218.4025%22%20x2%3D%2251.7209%22%20y2%3D%2244.2212%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22white%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22%2371717A%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3ClinearGradient%20id%3D%22paint1_linear_2595_7175%22%20x1%3D%2213.7453%22%20y1%3D%2221.3695%22%20x2%3D%2240.3876%22%20y2%3D%2235.7015%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22white%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22%2371717A%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3C%2Fdefs%3E%0A%3C%2Fsvg%3E%0A" alt="modules icon" class="modules-image-dark" data-v-8526c2ef><div class="flex flex-col space-y text-black dark:text-white" data-v-8526c2ef><h3 class="font-semibold text-xl" data-v-8526c2ef>Modules</h3><p class="text-gray-700 dark:text-gray-300" data-v-8526c2ef>Discover our list of modules to supercharge your Nuxt project. Created by the Nuxt team and community.</p></div></a></div><div class="row-span-2 col-span-2 order-last lg:order-none lg:col-span-4 text-black dark:text-white documentation-container rounded-xl relative items-center justify-center border border-gray-200 dark:border-transparent hover:border-transparent" data-v-8526c2ef><div class="gradient-border gradient-border-square gradient-border-documentation" data-v-8526c2ef></div><a href="https://nuxt.com/docs" target="_blank" class="rounded-xl flex lg:flex-col items-center justify-center gap-y-4 bg-white dark:bg-gray-900" data-v-8526c2ef><div class="py-6 lg:py-7 px-5 rounded-xl flex flex-col sm:flex-row lg:flex-col items-center justify-center gap-y-2" data-v-8526c2ef><div class="flex flex-col space-y text-black dark:text-white" data-v-8526c2ef><h3 class="font-semibold text-xl" data-v-8526c2ef>Documentation</h3><p class="text-gray-700 dark:text-gray-300" data-v-8526c2ef>We highly recommend you take a look at the Nuxt documentation to level up.</p></div><img src="data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%22342%22%20height%3D%22165%22%20viewBox%3D%220%200%20342%20165%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cg%20clip-path%3D%22url(%23clip0_2687_3947)%22%3E%0A%3Cpath%20d%3D%22M0.152832%20131.851H154.28%22%20stroke%3D%22%23E4E4E7%22%2F%3E%0A%3Cpath%20d%3D%22M215.399%20107.359H349.153%22%20stroke%3D%22%23E4E4E7%22%2F%3E%0A%3Cpath%20d%3D%22M0.152832%2077.2178L116.191%2077.2178%22%20stroke%3D%22%23E4E4E7%22%2F%3E%0A%3Cpath%20d%3D%22M36.1528%20106.921L152.191%20106.921%22%20stroke%3D%22%23E4E4E7%22%2F%3E%0A%3Cpath%20d%3D%22M202.153%2042.9209L317.305%2042.9209%22%20stroke%3D%22%23E4E4E7%22%2F%3E%0A%3Cpath%20d%3D%22M218.153%2076.9209L345.305%2076.9209%22%20stroke%3D%22%23E4E4E7%22%2F%3E%0A%3Cpath%20d%3D%22M285.947%208.45605V166.979%22%20stroke%3D%22%23E4E4E7%22%2F%3E%0A%3Cpath%20d%3D%22M252.602%2016.8311V107.36%22%20stroke%3D%22%23E4E4E7%22%2F%3E%0A%3Cpath%20d%3D%22M171.153%2016.9209V107.45%22%20stroke%3D%22%23E4E4E7%22%2F%3E%0A%3Cpath%20d%3D%22M218.153%2016.9209V43.4501%22%20stroke%3D%22%23E4E4E7%22%2F%3E%0A%3Cpath%20d%3D%22M122.153%2016.9211L327.45%2016.9209%22%20stroke%3D%22%23E4E4E7%22%2F%3E%0A%3Cpath%20d%3D%22M1.92432%2043.3086H148.163%22%20stroke%3D%22%23E4E4E7%22%2F%3E%0A%3Cpath%20d%3D%22M122.392%2016.4209V55.3659%22%20stroke%3D%22%23E4E4E7%22%2F%3E%0A%3Cpath%20d%3D%22M36.084%200.920898L36.084%20176.921%22%20stroke%3D%22%23E4E4E7%22%2F%3E%0A%3Cpath%20d%3D%22M75.4448%2043.249V175.152%22%20stroke%3D%22%23E4E4E7%22%2F%3E%0A%3Ccircle%20opacity%3D%220.7%22%20cx%3D%2275.4448%22%20cy%3D%2277.2178%22%20r%3D%223.5%22%20fill%3D%22%2300DC82%22%2F%3E%0A%3Ccircle%20opacity%3D%220.7%22%20cx%3D%2236.1528%22%20cy%3D%22131.85%22%20r%3D%223.5%22%20fill%3D%22%2300DC82%22%2F%3E%0A%3Ccircle%20opacity%3D%220.7%22%20cx%3D%22285.947%22%20cy%3D%2242.9209%22%20r%3D%223.5%22%20fill%3D%22%2300DC82%22%2F%3E%0A%3Ccircle%20opacity%3D%220.7%22%20cx%3D%22252.602%22%20cy%3D%22107.359%22%20r%3D%223.5%22%20fill%3D%22%2300DC82%22%2F%3E%0A%3Cg%20filter%3D%22url(%23filter0_d_2687_3947)%22%3E%0A%3Cpath%20d%3D%22M122.846%2050.7109L163.067%2026.0929C166.656%2023.9507%20171.117%2023.8611%20174.77%2025.8579L217.894%2049.0819C221.524%2051.0665%20223.807%2054.8133%20223.892%2058.9246L224.15%20104.352C224.235%20108.448%20222.13%20112.287%20218.609%20114.46L177.783%20139.658C174.174%20141.886%20169.638%20142.011%20165.931%20139.984L123.774%20116.935C120.045%20114.896%20117.125%20111.001%20117.153%20106.776L117.153%2060.5974C117.18%2056.5529%20119.338%2052.8048%20122.846%2050.7109Z%22%20fill%3D%22white%22%2F%3E%0A%3Cpath%20d%3D%22M222.151%20104.393C222.22%20107.764%20220.487%20110.944%20217.571%20112.75C217.567%20112.753%20217.563%20112.755%20217.559%20112.758L176.733%20137.956C173.748%20139.798%20169.96%20139.907%20166.89%20138.229L124.733%20115.18C121.469%20113.395%20119.131%20110.069%20119.153%20106.79L119.153%20106.776L119.153%2060.6107C119.153%2060.6086%20119.153%2060.6065%20119.153%2060.6044C119.178%2057.2703%20120.958%2054.1669%20123.871%2052.4282L123.881%2052.4225L123.89%2052.4167L164.101%2027.8047C164.101%2027.8047%20164.101%2027.8047%20164.101%2027.8047C164.106%2027.8022%20164.11%2027.7997%20164.114%2027.7972C167.078%2026.0385%20170.793%2025.9632%20173.81%2027.6128L173.81%2027.6128L173.821%2027.6188L216.934%2050.8367C216.936%2050.8377%20216.938%2050.8387%20216.94%2050.8397C219.935%2052.4801%20221.817%2055.5878%20221.892%2058.9515L222.15%20104.363L222.15%20104.378L222.151%20104.393Z%22%20stroke%3D%22url(%23paint0_linear_2687_3947)%22%20stroke-width%3D%224%22%2F%3E%0A%3C%2Fg%3E%0A%3Cpath%20d%3D%22M192.349%2096.9158L190.63%2090.5186L183.778%2064.9088C183.55%2064.0605%20182.994%2063.3375%20182.233%2062.8988C181.472%2062.4601%20180.568%2062.3416%20179.72%2062.5693L173.323%2064.2877L173.116%2064.3498C172.807%2063.945%20172.409%2063.6168%20171.953%2063.3906C171.497%2063.1644%20170.995%2063.0463%20170.486%2063.0455H163.861C163.279%2063.0471%20162.707%2063.2043%20162.205%2063.501C161.703%2063.2043%20161.132%2063.0471%20160.549%2063.0455H153.924C153.045%2063.0455%20152.203%2063.3945%20151.582%2064.0157C150.96%2064.6369%20150.611%2065.4795%20150.611%2066.358V99.483C150.611%20100.362%20150.96%20101.204%20151.582%20101.825C152.203%20102.447%20153.045%20102.796%20153.924%20102.796H160.549C161.132%20102.794%20161.703%20102.637%20162.205%20102.34C162.707%20102.637%20163.279%20102.794%20163.861%20102.796H170.486C171.365%20102.796%20172.207%20102.447%20172.829%20101.825C173.45%20101.204%20173.799%20100.362%20173.799%2099.483V78.8627L177.836%2093.9346L179.554%20100.332C179.742%20101.039%20180.158%20101.665%20180.739%20102.11C181.32%20102.556%20182.031%20102.797%20182.763%20102.796C183.049%20102.791%20183.334%20102.756%20183.612%20102.692L190.009%20100.974C190.43%20100.861%20190.824%20100.665%20191.169%20100.399C191.514%20100.132%20191.802%2099.7997%20192.018%2099.4209C192.238%2099.047%20192.381%2098.6325%20192.438%2098.2021C192.495%2097.7717%20192.465%2097.3342%20192.349%2096.9158V96.9158ZM176.325%2075.4881L182.722%2073.7697L187.007%2089.7732L180.61%2091.4916L176.325%2075.4881ZM180.569%2065.7783L181.873%2070.5607L175.476%2072.2791L174.171%2067.4967L180.569%2065.7783ZM170.486%2066.358V91.2018H163.861V66.358H170.486ZM160.549%2066.358V71.3268H153.924V66.358H160.549ZM153.924%2099.483V74.6393H160.549V99.483H153.924ZM170.486%2099.483H163.861V94.5143H170.486V99.483ZM189.161%2097.7646L182.763%2099.483L181.459%2094.6799L187.877%2092.9615L189.161%2097.7646V97.7646Z%22%20fill%3D%22url(%23paint1_linear_2687_3947)%22%2F%3E%0A%3Crect%20x%3D%222.15283%22%20y%3D%22-3.0791%22%20width%3D%22327%22%20height%3D%2223%22%20fill%3D%22url(%23paint2_linear_2687_3947)%22%2F%3E%0A%3Crect%20width%3D%22327%22%20height%3D%2225%22%20transform%3D%22matrix(1%200%200%20-1%202.15283%20166.921)%22%20fill%3D%22url(%23paint3_linear_2687_3947)%22%2F%3E%0A%3Crect%20width%3D%22327%22%20height%3D%2225%22%20transform%3D%22matrix(0%201%201%200%200.152832%20-17.0791)%22%20fill%3D%22url(%23paint4_linear_2687_3947)%22%2F%3E%0A%3Crect%20x%3D%22342.153%22%20y%3D%22-17.0791%22%20width%3D%22327%22%20height%3D%2225%22%20transform%3D%22rotate(90%20342.153%20-17.0791)%22%20fill%3D%22url(%23paint5_linear_2687_3947)%22%2F%3E%0A%3C%2Fg%3E%0A%3Cdefs%3E%0A%3Cfilter%20id%3D%22filter0_d_2687_3947%22%20x%3D%2286.1528%22%20y%3D%22-6.5791%22%20width%3D%22169%22%20height%3D%22179%22%20filterUnits%3D%22userSpaceOnUse%22%20color-interpolation-filters%3D%22sRGB%22%3E%0A%3CfeFlood%20flood-opacity%3D%220%22%20result%3D%22BackgroundImageFix%22%2F%3E%0A%3CfeColorMatrix%20in%3D%22SourceAlpha%22%20type%3D%22matrix%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200%22%20result%3D%22hardAlpha%22%2F%3E%0A%3CfeOffset%2F%3E%0A%3CfeGaussianBlur%20stdDeviation%3D%2215.5%22%2F%3E%0A%3CfeComposite%20in2%3D%22hardAlpha%22%20operator%3D%22out%22%2F%3E%0A%3CfeColorMatrix%20type%3D%22matrix%22%20values%3D%220%200%200%200%201%200%200%200%200%201%200%200%200%200%201%200%200%200%200.07%200%22%2F%3E%0A%3CfeBlend%20mode%3D%22normal%22%20in2%3D%22BackgroundImageFix%22%20result%3D%22effect1_dropShadow_2687_3947%22%2F%3E%0A%3CfeBlend%20mode%3D%22normal%22%20in%3D%22SourceGraphic%22%20in2%3D%22effect1_dropShadow_2687_3947%22%20result%3D%22shape%22%2F%3E%0A%3C%2Ffilter%3E%0A%3ClinearGradient%20id%3D%22paint0_linear_2687_3947%22%20x1%3D%22118.202%22%20y1%3D%2260.3042%22%20x2%3D%22223.159%22%20y2%3D%22113.509%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22%2300DC82%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23003F25%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3ClinearGradient%20id%3D%22paint1_linear_2687_3947%22%20x1%3D%22150.495%22%20y1%3D%2271.0767%22%20x2%3D%22191.769%22%20y2%3D%2294.1139%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22%2300DC82%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23003F25%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3ClinearGradient%20id%3D%22paint2_linear_2687_3947%22%20x1%3D%22165.653%22%20y1%3D%22-3.0791%22%20x2%3D%22166.153%22%20y2%3D%2219.9209%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22white%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22white%22%20stop-opacity%3D%220%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3ClinearGradient%20id%3D%22paint3_linear_2687_3947%22%20x1%3D%22163.5%22%20y1%3D%22-2.30278e-07%22%20x2%3D%22164.091%22%20y2%3D%2224.9979%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22white%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22white%22%20stop-opacity%3D%220%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3ClinearGradient%20id%3D%22paint4_linear_2687_3947%22%20x1%3D%22163.5%22%20y1%3D%22-2.30278e-07%22%20x2%3D%22164.091%22%20y2%3D%2224.9979%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22white%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22white%22%20stop-opacity%3D%220%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3ClinearGradient%20id%3D%22paint5_linear_2687_3947%22%20x1%3D%22505.653%22%20y1%3D%22-17.0791%22%20x2%3D%22506.244%22%20y2%3D%227.91876%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22white%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22white%22%20stop-opacity%3D%220%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3CclipPath%20id%3D%22clip0_2687_3947%22%3E%0A%3Crect%20width%3D%22341%22%20height%3D%22164%22%20fill%3D%22white%22%20transform%3D%22translate(0.152832%200.920898)%22%2F%3E%0A%3C%2FclipPath%3E%0A%3C%2Fdefs%3E%0A%3C%2Fsvg%3E%0A" alt="documentation icon" class="documentation-image-color-light h-32 sm:h-34" data-v-8526c2ef> <img src="data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%22342%22%20height%3D%22165%22%20viewBox%3D%220%200%20342%20165%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cg%20clip-path%3D%22url(%23clip0_2595_7273)%22%3E%0A%3Cpath%20d%3D%22M0.152832%20131.851H154.28%22%20stroke%3D%22%2327272A%22%2F%3E%0A%3Cpath%20d%3D%22M215.399%20107.359H349.153%22%20stroke%3D%22%2327272A%22%2F%3E%0A%3Cpath%20d%3D%22M0.152832%2077.2178L116.191%2077.2178%22%20stroke%3D%22%2327272A%22%2F%3E%0A%3Cpath%20d%3D%22M36.1528%20106.921L152.191%20106.921%22%20stroke%3D%22%2327272A%22%2F%3E%0A%3Cpath%20d%3D%22M202.153%2042.9209L317.305%2042.9209%22%20stroke%3D%22%2327272A%22%2F%3E%0A%3Cpath%20d%3D%22M218.153%2076.9209L345.305%2076.9209%22%20stroke%3D%22%2327272A%22%2F%3E%0A%3Cpath%20d%3D%22M285.947%208.45605V166.979%22%20stroke%3D%22%2327272A%22%2F%3E%0A%3Cpath%20d%3D%22M252.602%2016.8311V107.36%22%20stroke%3D%22%2327272A%22%2F%3E%0A%3Cpath%20d%3D%22M171.153%2016.9209V107.45%22%20stroke%3D%22%2327272A%22%2F%3E%0A%3Cpath%20d%3D%22M218.153%2016.9209V43.4501%22%20stroke%3D%22%2327272A%22%2F%3E%0A%3Cpath%20d%3D%22M122.153%2016.9211L327.45%2016.9209%22%20stroke%3D%22%2327272A%22%2F%3E%0A%3Cpath%20d%3D%22M1.92432%2043.3086H148.163%22%20stroke%3D%22%2327272A%22%2F%3E%0A%3Cpath%20d%3D%22M122.392%2016.4209V55.3659%22%20stroke%3D%22%2327272A%22%2F%3E%0A%3Cpath%20d%3D%22M36.084%200.920898L36.084%20176.921%22%20stroke%3D%22%2327272A%22%2F%3E%0A%3Cpath%20d%3D%22M75.4448%2043.249V175.152%22%20stroke%3D%22%2327272A%22%2F%3E%0A%3Ccircle%20opacity%3D%220.14%22%20cx%3D%2275.4448%22%20cy%3D%2277.2178%22%20r%3D%223.5%22%20fill%3D%22%2300DC82%22%2F%3E%0A%3Ccircle%20opacity%3D%220.14%22%20cx%3D%2236.1528%22%20cy%3D%22131.85%22%20r%3D%223.5%22%20fill%3D%22%2300DC82%22%2F%3E%0A%3Ccircle%20opacity%3D%220.14%22%20cx%3D%22285.947%22%20cy%3D%2242.9209%22%20r%3D%223.5%22%20fill%3D%22%2300DC82%22%2F%3E%0A%3Ccircle%20opacity%3D%220.14%22%20cx%3D%22252.602%22%20cy%3D%22107.359%22%20r%3D%223.5%22%20fill%3D%22%2300DC82%22%2F%3E%0A%3Cg%20filter%3D%22url(%23filter0_d_2595_7273)%22%3E%0A%3Cpath%20d%3D%22M122.846%2050.7109L163.067%2026.0929C166.656%2023.9507%20171.117%2023.8611%20174.77%2025.8579L217.894%2049.0819C221.524%2051.0665%20223.807%2054.8133%20223.892%2058.9246L224.15%20104.352C224.235%20108.448%20222.13%20112.287%20218.609%20114.46L177.783%20139.658C174.174%20141.886%20169.638%20142.011%20165.931%20139.984L123.774%20116.935C120.045%20114.896%20117.125%20111.001%20117.153%20106.776L117.153%2060.5974C117.18%2056.5529%20119.338%2052.8048%20122.846%2050.7109Z%22%20fill%3D%22%2318181B%22%2F%3E%0A%3Cpath%20d%3D%22M123.871%2052.4282L123.881%2052.4225L123.89%2052.4167L164.101%2027.8047C167.083%2026.0291%20170.786%2025.9592%20173.81%2027.6128L173.81%2027.6128L173.821%2027.6188L216.934%2050.8367C216.936%2050.8376%20216.938%2050.8386%20216.939%2050.8395C219.938%2052.4814%20221.817%2055.5694%20221.892%2058.9515L222.15%20104.363L222.15%20104.378L222.151%20104.393C222.221%20107.772%20220.485%20110.952%20217.559%20112.758L176.733%20137.956C173.732%20139.808%20169.963%20139.909%20166.89%20138.229L124.733%20115.18C121.465%20113.393%20119.131%20110.089%20119.153%20106.79L119.153%20106.776L119.153%2060.6107C119.153%2060.6086%20119.153%2060.6065%20119.153%2060.6044C119.178%2057.2703%20120.958%2054.1669%20123.871%2052.4282Z%22%20stroke%3D%22url(%23paint0_linear_2595_7273)%22%20stroke-width%3D%224%22%2F%3E%0A%3C%2Fg%3E%0A%3Cpath%20d%3D%22M192.349%2096.9158L190.63%2090.5186L183.778%2064.9088C183.55%2064.0605%20182.994%2063.3375%20182.233%2062.8988C181.472%2062.4601%20180.568%2062.3416%20179.72%2062.5693L173.323%2064.2877L173.116%2064.3498C172.807%2063.945%20172.409%2063.6168%20171.953%2063.3906C171.497%2063.1644%20170.995%2063.0463%20170.486%2063.0455H163.861C163.279%2063.0471%20162.707%2063.2043%20162.205%2063.501C161.703%2063.2043%20161.132%2063.0471%20160.549%2063.0455H153.924C153.045%2063.0455%20152.203%2063.3945%20151.582%2064.0157C150.96%2064.6369%20150.611%2065.4795%20150.611%2066.358V99.483C150.611%20100.362%20150.96%20101.204%20151.582%20101.825C152.203%20102.447%20153.045%20102.796%20153.924%20102.796H160.549C161.132%20102.794%20161.703%20102.637%20162.205%20102.34C162.707%20102.637%20163.279%20102.794%20163.861%20102.796H170.486C171.365%20102.796%20172.207%20102.447%20172.829%20101.825C173.45%20101.204%20173.799%20100.362%20173.799%2099.483V78.8627L177.836%2093.9346L179.554%20100.332C179.742%20101.039%20180.158%20101.665%20180.739%20102.11C181.32%20102.556%20182.031%20102.797%20182.763%20102.796C183.049%20102.791%20183.334%20102.756%20183.612%20102.692L190.009%20100.974C190.43%20100.861%20190.824%20100.665%20191.169%20100.399C191.514%20100.132%20191.802%2099.7998%20192.018%2099.4209C192.238%2099.047%20192.381%2098.6325%20192.438%2098.2021C192.495%2097.7717%20192.465%2097.3342%20192.349%2096.9158ZM176.325%2075.4881L182.722%2073.7697L187.007%2089.7732L180.61%2091.4916L176.325%2075.4881ZM180.569%2065.7783L181.873%2070.5607L175.476%2072.2791L174.171%2067.4967L180.569%2065.7783ZM170.486%2066.358V91.2018H163.861V66.358H170.486ZM160.549%2066.358V71.3268H153.924V66.358H160.549ZM153.924%2099.483V74.6393H160.549V99.483H153.924ZM170.486%2099.483H163.861V94.5143H170.486V99.483ZM189.161%2097.7646L182.763%2099.483L181.459%2094.6799L187.877%2092.9615L189.161%2097.7646Z%22%20fill%3D%22url(%23paint1_linear_2595_7273)%22%2F%3E%0A%3Crect%20x%3D%222.15283%22%20y%3D%22-3.0791%22%20width%3D%22327%22%20height%3D%2223%22%20fill%3D%22url(%23paint2_linear_2595_7273)%22%2F%3E%0A%3Crect%20width%3D%22327%22%20height%3D%2225%22%20transform%3D%22matrix(1%200%200%20-1%202.15283%20166.921)%22%20fill%3D%22url(%23paint3_linear_2595_7273)%22%2F%3E%0A%3Crect%20width%3D%22327%22%20height%3D%2225%22%20transform%3D%22matrix(0%201%201%200%200.152832%20-17.0791)%22%20fill%3D%22url(%23paint4_linear_2595_7273)%22%2F%3E%0A%3Crect%20x%3D%22342.153%22%20y%3D%22-17.0791%22%20width%3D%22327%22%20height%3D%2225%22%20transform%3D%22rotate(90%20342.153%20-17.0791)%22%20fill%3D%22url(%23paint5_linear_2595_7273)%22%2F%3E%0A%3C%2Fg%3E%0A%3Cdefs%3E%0A%3Cfilter%20id%3D%22filter0_d_2595_7273%22%20x%3D%2286.1528%22%20y%3D%22-6.5791%22%20width%3D%22169%22%20height%3D%22179%22%20filterUnits%3D%22userSpaceOnUse%22%20color-interpolation-filters%3D%22sRGB%22%3E%0A%3CfeFlood%20flood-opacity%3D%220%22%20result%3D%22BackgroundImageFix%22%2F%3E%0A%3CfeColorMatrix%20in%3D%22SourceAlpha%22%20type%3D%22matrix%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200%22%20result%3D%22hardAlpha%22%2F%3E%0A%3CfeOffset%2F%3E%0A%3CfeGaussianBlur%20stdDeviation%3D%2215.5%22%2F%3E%0A%3CfeComposite%20in2%3D%22hardAlpha%22%20operator%3D%22out%22%2F%3E%0A%3CfeColorMatrix%20type%3D%22matrix%22%20values%3D%220%200%200%200%201%200%200%200%200%201%200%200%200%200%201%200%200%200%200.07%200%22%2F%3E%0A%3CfeBlend%20mode%3D%22normal%22%20in2%3D%22BackgroundImageFix%22%20result%3D%22effect1_dropShadow_2595_7273%22%2F%3E%0A%3CfeBlend%20mode%3D%22normal%22%20in%3D%22SourceGraphic%22%20in2%3D%22effect1_dropShadow_2595_7273%22%20result%3D%22shape%22%2F%3E%0A%3C%2Ffilter%3E%0A%3ClinearGradient%20id%3D%22paint0_linear_2595_7273%22%20x1%3D%22118.202%22%20y1%3D%2260.3042%22%20x2%3D%22223.159%22%20y2%3D%22113.509%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22%2300DC82%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23003F25%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3ClinearGradient%20id%3D%22paint1_linear_2595_7273%22%20x1%3D%22150.495%22%20y1%3D%2271.0767%22%20x2%3D%22191.769%22%20y2%3D%2294.1139%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22%2300DC82%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23003F25%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3ClinearGradient%20id%3D%22paint2_linear_2595_7273%22%20x1%3D%22165.653%22%20y1%3D%22-3.0791%22%20x2%3D%22166.153%22%20y2%3D%2219.9209%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22%2318181B%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22%2318181B%22%20stop-opacity%3D%220%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3ClinearGradient%20id%3D%22paint3_linear_2595_7273%22%20x1%3D%22163.5%22%20y1%3D%22-2.30278e-07%22%20x2%3D%22164.091%22%20y2%3D%2224.9979%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22%2318181B%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22%2318181B%22%20stop-opacity%3D%220%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3ClinearGradient%20id%3D%22paint4_linear_2595_7273%22%20x1%3D%22163.5%22%20y1%3D%22-2.30278e-07%22%20x2%3D%22164.091%22%20y2%3D%2224.9979%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22%2318181B%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22%2318181B%22%20stop-opacity%3D%220%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3ClinearGradient%20id%3D%22paint5_linear_2595_7273%22%20x1%3D%22505.653%22%20y1%3D%22-17.0791%22%20x2%3D%22506.244%22%20y2%3D%227.91876%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22%2318181B%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22%2318181B%22%20stop-opacity%3D%220%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3CclipPath%20id%3D%22clip0_2595_7273%22%3E%0A%3Crect%20width%3D%22341%22%20height%3D%22164%22%20fill%3D%22white%22%20transform%3D%22translate(0.152832%200.920898)%22%2F%3E%0A%3C%2FclipPath%3E%0A%3C%2Fdefs%3E%0A%3C%2Fsvg%3E%0A" alt="documentation icon" class="documentation-image-color-dark h-32 sm:h-34" data-v-8526c2ef> <img src="data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%22342%22%20height%3D%22165%22%20viewBox%3D%220%200%20342%20165%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cg%20clip-path%3D%22url(%23clip0_2687_3977)%22%3E%0A%3Cpath%20d%3D%22M0.152832%20131.851H154.28%22%20stroke%3D%22%23E4E4E7%22%2F%3E%0A%3Cpath%20d%3D%22M215.399%20107.359H349.153%22%20stroke%3D%22%23E4E4E7%22%2F%3E%0A%3Cpath%20d%3D%22M0.152832%2077.2178L116.191%2077.2178%22%20stroke%3D%22%23E4E4E7%22%2F%3E%0A%3Cpath%20d%3D%22M36.1528%20106.921L152.191%20106.921%22%20stroke%3D%22%23E4E4E7%22%2F%3E%0A%3Cpath%20d%3D%22M202.153%2042.9209L317.305%2042.9209%22%20stroke%3D%22%23E4E4E7%22%2F%3E%0A%3Cpath%20d%3D%22M218.153%2076.9209L345.305%2076.9209%22%20stroke%3D%22%23E4E4E7%22%2F%3E%0A%3Cpath%20d%3D%22M285.947%208.45605V166.979%22%20stroke%3D%22%23E4E4E7%22%2F%3E%0A%3Cpath%20d%3D%22M252.602%2016.8311V107.36%22%20stroke%3D%22%23E4E4E7%22%2F%3E%0A%3Cpath%20d%3D%22M171.153%2016.9209V107.45%22%20stroke%3D%22%23E4E4E7%22%2F%3E%0A%3Cpath%20d%3D%22M218.153%2016.9209V43.4501%22%20stroke%3D%22%23E4E4E7%22%2F%3E%0A%3Cpath%20d%3D%22M122.153%2016.9211L327.45%2016.9209%22%20stroke%3D%22%23E4E4E7%22%2F%3E%0A%3Cpath%20d%3D%22M1.92432%2043.3086H148.163%22%20stroke%3D%22%23E4E4E7%22%2F%3E%0A%3Cpath%20d%3D%22M122.392%2016.4209V55.3659%22%20stroke%3D%22%23E4E4E7%22%2F%3E%0A%3Cpath%20d%3D%22M36.084%200.920898L36.084%20176.921%22%20stroke%3D%22%23E4E4E7%22%2F%3E%0A%3Cpath%20d%3D%22M75.4448%2043.249V175.152%22%20stroke%3D%22%23E4E4E7%22%2F%3E%0A%3Ccircle%20opacity%3D%220.7%22%20cx%3D%2275.4448%22%20cy%3D%2277.2178%22%20r%3D%223.5%22%20fill%3D%22%23A1A1AA%22%2F%3E%0A%3Ccircle%20opacity%3D%220.7%22%20cx%3D%2236.1528%22%20cy%3D%22131.85%22%20r%3D%223.5%22%20fill%3D%22%23A1A1AA%22%2F%3E%0A%3Ccircle%20opacity%3D%220.7%22%20cx%3D%22285.947%22%20cy%3D%2242.9209%22%20r%3D%223.5%22%20fill%3D%22%23A1A1AA%22%2F%3E%0A%3Ccircle%20opacity%3D%220.7%22%20cx%3D%22252.602%22%20cy%3D%22107.359%22%20r%3D%223.5%22%20fill%3D%22%23A1A1AA%22%2F%3E%0A%3Cg%20filter%3D%22url(%23filter0_d_2687_3977)%22%3E%0A%3Cpath%20d%3D%22M122.846%2050.7109L163.067%2026.0929C166.656%2023.9507%20171.117%2023.8611%20174.77%2025.8579L217.894%2049.0819C221.524%2051.0665%20223.807%2054.8133%20223.892%2058.9246L224.15%20104.352C224.235%20108.448%20222.13%20112.287%20218.609%20114.46L177.783%20139.658C174.174%20141.886%20169.638%20142.011%20165.931%20139.984L123.774%20116.935C120.045%20114.896%20117.125%20111.001%20117.153%20106.776L117.153%2060.5974C117.18%2056.5529%20119.338%2052.8048%20122.846%2050.7109Z%22%20fill%3D%22white%22%2F%3E%0A%3Cpath%20d%3D%22M222.151%20104.393C222.22%20107.764%20220.487%20110.944%20217.571%20112.75C217.567%20112.753%20217.563%20112.755%20217.559%20112.758L176.733%20137.956C173.748%20139.798%20169.96%20139.907%20166.89%20138.229L124.733%20115.18C121.469%20113.395%20119.131%20110.069%20119.153%20106.79L119.153%20106.776L119.153%2060.6107C119.153%2060.6086%20119.153%2060.6065%20119.153%2060.6044C119.178%2057.2703%20120.958%2054.1669%20123.871%2052.4282L123.881%2052.4225L123.89%2052.4167L164.101%2027.8047C164.101%2027.8047%20164.101%2027.8047%20164.101%2027.8047C164.106%2027.8022%20164.11%2027.7997%20164.114%2027.7972C167.078%2026.0385%20170.793%2025.9632%20173.81%2027.6128L173.81%2027.6128L173.821%2027.6188L216.934%2050.8367C216.936%2050.8377%20216.938%2050.8387%20216.94%2050.8397C219.935%2052.4801%20221.817%2055.5878%20221.892%2058.9515L222.15%20104.363L222.15%20104.378L222.151%20104.393Z%22%20stroke%3D%22url(%23paint0_linear_2687_3977)%22%20stroke-width%3D%224%22%2F%3E%0A%3C%2Fg%3E%0A%3Cpath%20d%3D%22M192.349%2096.9158L190.63%2090.5186L183.778%2064.9088C183.55%2064.0605%20182.994%2063.3375%20182.233%2062.8988C181.472%2062.4601%20180.568%2062.3416%20179.72%2062.5693L173.323%2064.2877L173.116%2064.3498C172.807%2063.945%20172.409%2063.6168%20171.953%2063.3906C171.497%2063.1644%20170.995%2063.0463%20170.486%2063.0455H163.861C163.279%2063.0471%20162.707%2063.2043%20162.205%2063.501C161.703%2063.2043%20161.132%2063.0471%20160.549%2063.0455H153.924C153.045%2063.0455%20152.203%2063.3945%20151.582%2064.0157C150.96%2064.6369%20150.611%2065.4795%20150.611%2066.358V99.483C150.611%20100.362%20150.96%20101.204%20151.582%20101.825C152.203%20102.447%20153.045%20102.796%20153.924%20102.796H160.549C161.132%20102.794%20161.703%20102.637%20162.205%20102.34C162.707%20102.637%20163.279%20102.794%20163.861%20102.796H170.486C171.365%20102.796%20172.207%20102.447%20172.829%20101.825C173.45%20101.204%20173.799%20100.362%20173.799%2099.483V78.8627L177.836%2093.9346L179.554%20100.332C179.742%20101.039%20180.158%20101.665%20180.739%20102.11C181.32%20102.556%20182.031%20102.797%20182.763%20102.796C183.049%20102.791%20183.334%20102.756%20183.612%20102.692L190.009%20100.974C190.43%20100.861%20190.824%20100.665%20191.169%20100.399C191.514%20100.132%20191.802%2099.7997%20192.018%2099.4209C192.238%2099.047%20192.381%2098.6325%20192.438%2098.2021C192.495%2097.7717%20192.465%2097.3342%20192.349%2096.9158V96.9158ZM176.325%2075.4881L182.722%2073.7697L187.007%2089.7732L180.61%2091.4916L176.325%2075.4881ZM180.569%2065.7783L181.873%2070.5607L175.476%2072.2791L174.171%2067.4967L180.569%2065.7783ZM170.486%2066.358V91.2018H163.861V66.358H170.486ZM160.549%2066.358V71.3268H153.924V66.358H160.549ZM153.924%2099.483V74.6393H160.549V99.483H153.924ZM170.486%2099.483H163.861V94.5143H170.486V99.483ZM189.161%2097.7646L182.763%2099.483L181.459%2094.6799L187.877%2092.9615L189.161%2097.7646V97.7646Z%22%20fill%3D%22url(%23paint1_linear_2687_3977)%22%2F%3E%0A%3Crect%20x%3D%222.15283%22%20y%3D%22-3.0791%22%20width%3D%22327%22%20height%3D%2223%22%20fill%3D%22url(%23paint2_linear_2687_3977)%22%2F%3E%0A%3Crect%20width%3D%22327%22%20height%3D%2225%22%20transform%3D%22matrix(1%200%200%20-1%202.15283%20166.921)%22%20fill%3D%22url(%23paint3_linear_2687_3977)%22%2F%3E%0A%3Crect%20width%3D%22327%22%20height%3D%2225%22%20transform%3D%22matrix(0%201%201%200%200.152832%20-17.0791)%22%20fill%3D%22url(%23paint4_linear_2687_3977)%22%2F%3E%0A%3Crect%20x%3D%22342.153%22%20y%3D%22-17.0791%22%20width%3D%22327%22%20height%3D%2225%22%20transform%3D%22rotate(90%20342.153%20-17.0791)%22%20fill%3D%22url(%23paint5_linear_2687_3977)%22%2F%3E%0A%3C%2Fg%3E%0A%3Cdefs%3E%0A%3Cfilter%20id%3D%22filter0_d_2687_3977%22%20x%3D%2286.1528%22%20y%3D%22-6.5791%22%20width%3D%22169%22%20height%3D%22179%22%20filterUnits%3D%22userSpaceOnUse%22%20color-interpolation-filters%3D%22sRGB%22%3E%0A%3CfeFlood%20flood-opacity%3D%220%22%20result%3D%22BackgroundImageFix%22%2F%3E%0A%3CfeColorMatrix%20in%3D%22SourceAlpha%22%20type%3D%22matrix%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200%22%20result%3D%22hardAlpha%22%2F%3E%0A%3CfeOffset%2F%3E%0A%3CfeGaussianBlur%20stdDeviation%3D%2215.5%22%2F%3E%0A%3CfeComposite%20in2%3D%22hardAlpha%22%20operator%3D%22out%22%2F%3E%0A%3CfeColorMatrix%20type%3D%22matrix%22%20values%3D%220%200%200%200%200.831373%200%200%200%200%200.831373%200%200%200%200%200.847059%200%200%200%200.07%200%22%2F%3E%0A%3CfeBlend%20mode%3D%22normal%22%20in2%3D%22BackgroundImageFix%22%20result%3D%22effect1_dropShadow_2687_3977%22%2F%3E%0A%3CfeBlend%20mode%3D%22normal%22%20in%3D%22SourceGraphic%22%20in2%3D%22effect1_dropShadow_2687_3977%22%20result%3D%22shape%22%2F%3E%0A%3C%2Ffilter%3E%0A%3ClinearGradient%20id%3D%22paint0_linear_2687_3977%22%20x1%3D%22118.202%22%20y1%3D%2260.3042%22%20x2%3D%22223.159%22%20y2%3D%22113.509%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22%23D4D4D8%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22%233F3F46%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3ClinearGradient%20id%3D%22paint1_linear_2687_3977%22%20x1%3D%22150.495%22%20y1%3D%2271.0767%22%20x2%3D%22191.769%22%20y2%3D%2294.1139%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22%23D4D4D8%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22%233F3F46%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3ClinearGradient%20id%3D%22paint2_linear_2687_3977%22%20x1%3D%22165.653%22%20y1%3D%22-3.0791%22%20x2%3D%22166.153%22%20y2%3D%2219.9209%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22white%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22white%22%20stop-opacity%3D%220%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3ClinearGradient%20id%3D%22paint3_linear_2687_3977%22%20x1%3D%22163.5%22%20y1%3D%22-2.30278e-07%22%20x2%3D%22164.091%22%20y2%3D%2224.9979%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22white%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22white%22%20stop-opacity%3D%220%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3ClinearGradient%20id%3D%22paint4_linear_2687_3977%22%20x1%3D%22163.5%22%20y1%3D%22-2.30278e-07%22%20x2%3D%22164.091%22%20y2%3D%2224.9979%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22white%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22white%22%20stop-opacity%3D%220%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3ClinearGradient%20id%3D%22paint5_linear_2687_3977%22%20x1%3D%22505.653%22%20y1%3D%22-17.0791%22%20x2%3D%22506.244%22%20y2%3D%227.91876%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22white%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22white%22%20stop-opacity%3D%220%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3CclipPath%20id%3D%22clip0_2687_3977%22%3E%0A%3Crect%20width%3D%22341%22%20height%3D%22164%22%20fill%3D%22white%22%20transform%3D%22translate(0.152832%200.920898)%22%2F%3E%0A%3C%2FclipPath%3E%0A%3C%2Fdefs%3E%0A%3C%2Fsvg%3E%0A" alt="documentation icon" class="documentation-image-light h-32 sm:h-34" data-v-8526c2ef> <img src="data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%22342%22%20height%3D%22165%22%20viewBox%3D%220%200%20342%20165%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cg%20clip-path%3D%22url(%23clip0_2595_7193)%22%3E%0A%3Cpath%20d%3D%22M0.152832%20131.851H154.28%22%20stroke%3D%22%2327272A%22%2F%3E%0A%3Cpath%20d%3D%22M215.399%20107.359H349.153%22%20stroke%3D%22%2327272A%22%2F%3E%0A%3Cpath%20d%3D%22M0.152832%2077.2178L116.191%2077.2178%22%20stroke%3D%22%2327272A%22%2F%3E%0A%3Cpath%20d%3D%22M36.1528%20106.921L152.191%20106.921%22%20stroke%3D%22%2327272A%22%2F%3E%0A%3Cpath%20d%3D%22M202.153%2042.9209L317.305%2042.9209%22%20stroke%3D%22%2327272A%22%2F%3E%0A%3Cpath%20d%3D%22M218.153%2076.9209L345.305%2076.9209%22%20stroke%3D%22%2327272A%22%2F%3E%0A%3Cpath%20d%3D%22M285.947%208.45605V166.979%22%20stroke%3D%22%2327272A%22%2F%3E%0A%3Cpath%20d%3D%22M252.602%2016.8311V107.36%22%20stroke%3D%22%2327272A%22%2F%3E%0A%3Cpath%20d%3D%22M171.153%2016.9209V107.45%22%20stroke%3D%22%2327272A%22%2F%3E%0A%3Cpath%20d%3D%22M218.153%2016.9209V43.4501%22%20stroke%3D%22%2327272A%22%2F%3E%0A%3Cpath%20d%3D%22M122.153%2016.9211L327.45%2016.9209%22%20stroke%3D%22%2327272A%22%2F%3E%0A%3Cpath%20d%3D%22M1.92432%2043.3086H148.163%22%20stroke%3D%22%2327272A%22%2F%3E%0A%3Cpath%20d%3D%22M122.392%2016.4209V55.3659%22%20stroke%3D%22%2327272A%22%2F%3E%0A%3Cpath%20d%3D%22M36.084%200.920898L36.084%20176.921%22%20stroke%3D%22%2327272A%22%2F%3E%0A%3Cpath%20d%3D%22M75.4448%2043.249V175.152%22%20stroke%3D%22%2327272A%22%2F%3E%0A%3Ccircle%20opacity%3D%220.14%22%20cx%3D%2275.4448%22%20cy%3D%2277.2178%22%20r%3D%223.5%22%20fill%3D%22white%22%2F%3E%0A%3Ccircle%20opacity%3D%220.14%22%20cx%3D%2236.1528%22%20cy%3D%22131.85%22%20r%3D%223.5%22%20fill%3D%22white%22%2F%3E%0A%3Ccircle%20opacity%3D%220.14%22%20cx%3D%22285.947%22%20cy%3D%2242.9209%22%20r%3D%223.5%22%20fill%3D%22white%22%2F%3E%0A%3Ccircle%20opacity%3D%220.14%22%20cx%3D%22252.602%22%20cy%3D%22107.359%22%20r%3D%223.5%22%20fill%3D%22white%22%2F%3E%0A%3Cg%20filter%3D%22url(%23filter0_d_2595_7193)%22%3E%0A%3Cpath%20d%3D%22M122.846%2050.7109L163.067%2026.0929C166.656%2023.9507%20171.117%2023.8611%20174.77%2025.8579L217.894%2049.0819C221.524%2051.0665%20223.807%2054.8133%20223.892%2058.9246L224.15%20104.352C224.235%20108.448%20222.13%20112.287%20218.609%20114.46L177.783%20139.658C174.174%20141.886%20169.638%20142.011%20165.931%20139.984L123.774%20116.935C120.045%20114.896%20117.125%20111.001%20117.153%20106.776L117.153%2060.5974C117.18%2056.5529%20119.338%2052.8048%20122.846%2050.7109Z%22%20fill%3D%22%2318181B%22%2F%3E%0A%3Cpath%20d%3D%22M123.871%2052.4282L123.881%2052.4225L123.89%2052.4167L164.101%2027.8047C167.083%2026.0291%20170.786%2025.9592%20173.81%2027.6128L173.81%2027.6128L173.821%2027.6188L216.934%2050.8367C216.936%2050.8376%20216.938%2050.8386%20216.939%2050.8395C219.938%2052.4814%20221.817%2055.5694%20221.892%2058.9515L222.15%20104.363L222.15%20104.378L222.151%20104.393C222.221%20107.772%20220.485%20110.952%20217.559%20112.758L176.733%20137.956C173.732%20139.808%20169.963%20139.909%20166.89%20138.229L124.733%20115.18C121.465%20113.393%20119.131%20110.089%20119.153%20106.79L119.153%20106.776L119.153%2060.6107C119.153%2060.6086%20119.153%2060.6065%20119.153%2060.6044C119.178%2057.2703%20120.958%2054.1669%20123.871%2052.4282Z%22%20stroke%3D%22url(%23paint0_linear_2595_7193)%22%20stroke-width%3D%224%22%2F%3E%0A%3C%2Fg%3E%0A%3Cpath%20d%3D%22M192.349%2096.9158L190.63%2090.5186L183.778%2064.9088C183.55%2064.0605%20182.994%2063.3375%20182.233%2062.8988C181.472%2062.4601%20180.568%2062.3416%20179.72%2062.5693L173.323%2064.2877L173.116%2064.3498C172.807%2063.945%20172.409%2063.6168%20171.953%2063.3906C171.497%2063.1644%20170.995%2063.0463%20170.486%2063.0455H163.861C163.279%2063.0471%20162.707%2063.2043%20162.205%2063.501C161.703%2063.2043%20161.132%2063.0471%20160.549%2063.0455H153.924C153.045%2063.0455%20152.203%2063.3945%20151.582%2064.0157C150.96%2064.6369%20150.611%2065.4795%20150.611%2066.358V99.483C150.611%20100.362%20150.96%20101.204%20151.582%20101.825C152.203%20102.447%20153.045%20102.796%20153.924%20102.796H160.549C161.132%20102.794%20161.703%20102.637%20162.205%20102.34C162.707%20102.637%20163.279%20102.794%20163.861%20102.796H170.486C171.365%20102.796%20172.207%20102.447%20172.829%20101.825C173.45%20101.204%20173.799%20100.362%20173.799%2099.483V78.8627L177.836%2093.9346L179.554%20100.332C179.742%20101.039%20180.158%20101.665%20180.739%20102.11C181.32%20102.556%20182.031%20102.797%20182.763%20102.796C183.049%20102.791%20183.334%20102.756%20183.612%20102.692L190.009%20100.974C190.43%20100.861%20190.824%20100.665%20191.169%20100.399C191.514%20100.132%20191.802%2099.7998%20192.018%2099.4209C192.238%2099.047%20192.381%2098.6325%20192.438%2098.2021C192.495%2097.7717%20192.465%2097.3342%20192.349%2096.9158ZM176.325%2075.4881L182.722%2073.7697L187.007%2089.7732L180.61%2091.4916L176.325%2075.4881ZM180.569%2065.7783L181.873%2070.5607L175.476%2072.2791L174.171%2067.4967L180.569%2065.7783ZM170.486%2066.358V91.2018H163.861V66.358H170.486ZM160.549%2066.358V71.3268H153.924V66.358H160.549ZM153.924%2099.483V74.6393H160.549V99.483H153.924ZM170.486%2099.483H163.861V94.5143H170.486V99.483ZM189.161%2097.7646L182.763%2099.483L181.459%2094.6799L187.877%2092.9615L189.161%2097.7646Z%22%20fill%3D%22url(%23paint1_linear_2595_7193)%22%2F%3E%0A%3Crect%20x%3D%222.15283%22%20y%3D%22-3.0791%22%20width%3D%22327%22%20height%3D%2223%22%20fill%3D%22url(%23paint2_linear_2595_7193)%22%2F%3E%0A%3Crect%20width%3D%22327%22%20height%3D%2225%22%20transform%3D%22matrix(1%200%200%20-1%202.15283%20166.921)%22%20fill%3D%22url(%23paint3_linear_2595_7193)%22%2F%3E%0A%3Crect%20width%3D%22327%22%20height%3D%2225%22%20transform%3D%22matrix(0%201%201%200%200.152832%20-17.0791)%22%20fill%3D%22url(%23paint4_linear_2595_7193)%22%2F%3E%0A%3Crect%20x%3D%22342.153%22%20y%3D%22-17.0791%22%20width%3D%22327%22%20height%3D%2225%22%20transform%3D%22rotate(90%20342.153%20-17.0791)%22%20fill%3D%22url(%23paint5_linear_2595_7193)%22%2F%3E%0A%3C%2Fg%3E%0A%3Cdefs%3E%0A%3Cfilter%20id%3D%22filter0_d_2595_7193%22%20x%3D%2286.1528%22%20y%3D%22-6.5791%22%20width%3D%22169%22%20height%3D%22179%22%20filterUnits%3D%22userSpaceOnUse%22%20color-interpolation-filters%3D%22sRGB%22%3E%0A%3CfeFlood%20flood-opacity%3D%220%22%20result%3D%22BackgroundImageFix%22%2F%3E%0A%3CfeColorMatrix%20in%3D%22SourceAlpha%22%20type%3D%22matrix%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200%22%20result%3D%22hardAlpha%22%2F%3E%0A%3CfeOffset%2F%3E%0A%3CfeGaussianBlur%20stdDeviation%3D%2215.5%22%2F%3E%0A%3CfeComposite%20in2%3D%22hardAlpha%22%20operator%3D%22out%22%2F%3E%0A%3CfeColorMatrix%20type%3D%22matrix%22%20values%3D%220%200%200%200%201%200%200%200%200%201%200%200%200%200%201%200%200%200%200.07%200%22%2F%3E%0A%3CfeBlend%20mode%3D%22normal%22%20in2%3D%22BackgroundImageFix%22%20result%3D%22effect1_dropShadow_2595_7193%22%2F%3E%0A%3CfeBlend%20mode%3D%22normal%22%20in%3D%22SourceGraphic%22%20in2%3D%22effect1_dropShadow_2595_7193%22%20result%3D%22shape%22%2F%3E%0A%3C%2Ffilter%3E%0A%3ClinearGradient%20id%3D%22paint0_linear_2595_7193%22%20x1%3D%22118.202%22%20y1%3D%2260.3042%22%20x2%3D%22223.159%22%20y2%3D%22113.509%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22white%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22%2371717A%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3ClinearGradient%20id%3D%22paint1_linear_2595_7193%22%20x1%3D%22150.495%22%20y1%3D%2271.0767%22%20x2%3D%22191.769%22%20y2%3D%2294.1139%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22white%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22%2371717A%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3ClinearGradient%20id%3D%22paint2_linear_2595_7193%22%20x1%3D%22165.653%22%20y1%3D%22-3.0791%22%20x2%3D%22166.153%22%20y2%3D%2219.9209%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22%2318181B%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22%2318181B%22%20stop-opacity%3D%220%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3ClinearGradient%20id%3D%22paint3_linear_2595_7193%22%20x1%3D%22163.5%22%20y1%3D%22-2.30278e-07%22%20x2%3D%22164.091%22%20y2%3D%2224.9979%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22%2318181B%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22%2318181B%22%20stop-opacity%3D%220%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3ClinearGradient%20id%3D%22paint4_linear_2595_7193%22%20x1%3D%22163.5%22%20y1%3D%22-2.30278e-07%22%20x2%3D%22164.091%22%20y2%3D%2224.9979%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22%2318181B%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22%2318181B%22%20stop-opacity%3D%220%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3ClinearGradient%20id%3D%22paint5_linear_2595_7193%22%20x1%3D%22505.653%22%20y1%3D%22-17.0791%22%20x2%3D%22506.244%22%20y2%3D%227.91876%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22%2318181B%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22%2318181B%22%20stop-opacity%3D%220%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3CclipPath%20id%3D%22clip0_2595_7193%22%3E%0A%3Crect%20width%3D%22341%22%20height%3D%22164%22%20fill%3D%22white%22%20transform%3D%22translate(0.152832%200.920898)%22%2F%3E%0A%3C%2FclipPath%3E%0A%3C%2Fdefs%3E%0A%3C%2Fsvg%3E%0A" alt="documentation icon" class="documentation-image-dark h-32 sm:h-34" data-v-8526c2ef></div></a></div><div class="lg:min-h-min sm:min-h-[220px] md:min-h-[180px] col-span-2 sm:col-span-1 lg:col-span-6 text-black dark:text-white rounded-xl examples-container relative items-center justify-center border border-gray-200 dark:border-transparent hover:border-transparent" data-v-8526c2ef><div class="gradient-border gradient-border-examples gradient-border-rect" data-v-8526c2ef></div><div class="examples-gradient-right absolute right-0 inset-y-0 w-[20%] bg-gradient-to-l to-transparent from-blue-400 rounded-xl z-1 transition-opacity duration-300" data-v-8526c2ef></div><a href="https://nuxt.com/docs/examples" target="_blank" class="py-6 px-5 rounded-xl flex items-center justify-center gap-x-4 bg-white dark:bg-gray-900 sm:min-h-[220px] md:min-h-[180px] lg:min-h-min" data-v-8526c2ef><img src="data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%2253%22%20height%3D%2258%22%20viewBox%3D%220%200%2053%2058%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M49.1971%2043.7595C49.1113%2043.8209%2049.0231%2043.8796%2048.9325%2043.9357L29.0918%2056.2117C27.6504%2057.1035%2025.8212%2057.1564%2024.3387%2056.3439L3.85107%2045.1148C2.27157%2044.2491%201.14238%2042.6366%201.15291%2041.0494L1.15293%2041.0427L1.153%2018.552C1.15301%2018.5509%201.15302%2018.5499%201.15302%2018.5488C1.16485%2016.9324%202.02611%2015.4289%203.43319%2014.5869L3.43322%2014.587L3.44269%2014.5812L22.9844%202.59084C24.4169%201.73583%2026.2139%201.69824%2027.6729%202.49791L27.6729%202.49792L27.6784%202.50094L48.6303%2013.8121C48.6313%2013.8126%2048.6322%2013.8131%2048.6331%2013.8136C50.0797%2014.6078%2050.9898%2016.1132%2051.026%2017.7438L51.1517%2039.8672L51.1517%2039.8746L51.1519%2039.8821C51.1834%2041.4138%2050.4491%2042.8635%2049.1971%2043.7595Z%22%20fill%3D%22white%22%20stroke%3D%22url(%23paint0_linear_2613_3941)%22%20stroke-width%3D%222%22%2F%3E%0A%3Cpath%20d%3D%22M37.1528%2017.9209H15.1528C14.6224%2017.9209%2014.1137%2018.1316%2013.7386%2018.5067C13.3635%2018.8818%2013.1528%2019.3905%2013.1528%2019.9209V37.9209C13.1528%2038.4513%2013.3635%2038.96%2013.7386%2039.3351C14.1137%2039.7102%2014.6224%2039.9209%2015.1528%2039.9209H37.1528C37.6833%2039.9209%2038.192%2039.7102%2038.567%2039.3351C38.9421%2038.96%2039.1528%2038.4513%2039.1528%2037.9209V19.9209C39.1528%2019.3905%2038.9421%2018.8818%2038.567%2018.5067C38.192%2018.1316%2037.6833%2017.9209%2037.1528%2017.9209V17.9209ZM15.1528%2019.9209H37.1528V24.9209H15.1528V19.9209ZM15.1528%2026.9209H22.1528V37.9209H15.1528V26.9209ZM37.1528%2037.9209H24.1528V26.9209H37.1528V37.9209Z%22%20fill%3D%22url(%23paint1_linear_2613_3941)%22%2F%3E%0A%3Cdefs%3E%0A%3ClinearGradient%20id%3D%22paint0_linear_2613_3941%22%20x1%3D%220.662695%22%20y1%3D%2218.4025%22%20x2%3D%2251.7209%22%20y2%3D%2244.2212%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22%238DEAFF%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23008AA9%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3ClinearGradient%20id%3D%22paint1_linear_2613_3941%22%20x1%3D%2213.0804%22%20y1%3D%2222.6224%22%20x2%3D%2237.028%22%20y2%3D%2237.847%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22%238DEAFF%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23008AA9%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3C%2Fdefs%3E%0A%3C%2Fsvg%3E%0A" alt="examples icon" class="examples-image-color-light" data-v-8526c2ef> <img src="data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%2253%22%20height%3D%2258%22%20viewBox%3D%220%200%2053%2058%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M3.43319%2014.5869L3.43322%2014.587L3.44269%2014.5812L22.9844%202.59084C24.4246%201.73116%2026.2124%201.69742%2027.6729%202.49791L27.6729%202.49792L27.6784%202.50094L48.6303%2013.8121C48.6313%2013.8126%2048.6322%2013.8131%2048.6331%2013.8137C50.0812%2014.6086%2050.9896%2016.1043%2051.026%2017.7437L51.1517%2039.8672L51.1517%2039.8746L51.1519%2039.8821C51.1856%2041.5203%2050.346%2043.0611%2048.9325%2043.9357L29.0918%2056.2117C27.6424%2057.1085%2025.8227%2057.1572%2024.3387%2056.3439L3.85107%2045.1148C2.26984%2044.2481%201.14232%2042.646%201.15293%2041.0494V41.0427L1.153%2018.552C1.15301%2018.5509%201.15302%2018.5499%201.15302%2018.5488C1.16485%2016.9324%202.02611%2015.4289%203.43319%2014.5869Z%22%20fill%3D%22%2318181B%22%20stroke%3D%22url(%23paint0_linear_2595_7426)%22%20stroke-width%3D%222%22%2F%3E%0A%3Cpath%20d%3D%22M37.1528%2017.9209H15.1528C14.6224%2017.9209%2014.1137%2018.1316%2013.7386%2018.5067C13.3635%2018.8818%2013.1528%2019.3905%2013.1528%2019.9209V37.9209C13.1528%2038.4513%2013.3635%2038.96%2013.7386%2039.3351C14.1137%2039.7102%2014.6224%2039.9209%2015.1528%2039.9209H37.1528C37.6833%2039.9209%2038.192%2039.7102%2038.567%2039.3351C38.9421%2038.96%2039.1528%2038.4513%2039.1528%2037.9209V19.9209C39.1528%2019.3905%2038.9421%2018.8818%2038.567%2018.5067C38.192%2018.1316%2037.6833%2017.9209%2037.1528%2017.9209ZM15.1528%2019.9209H37.1528V24.9209H15.1528V19.9209ZM15.1528%2026.9209H22.1528V37.9209H15.1528V26.9209ZM37.1528%2037.9209H24.1528V26.9209H37.1528V37.9209Z%22%20fill%3D%22url(%23paint1_linear_2595_7426)%22%2F%3E%0A%3Cdefs%3E%0A%3ClinearGradient%20id%3D%22paint0_linear_2595_7426%22%20x1%3D%220.662695%22%20y1%3D%2218.4025%22%20x2%3D%2251.7209%22%20y2%3D%2244.2212%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22%238DEAFF%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23008AA9%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3ClinearGradient%20id%3D%22paint1_linear_2595_7426%22%20x1%3D%2213.0804%22%20y1%3D%2222.6224%22%20x2%3D%2237.028%22%20y2%3D%2237.847%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22%238DEAFF%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23008AA9%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3C%2Fdefs%3E%0A%3C%2Fsvg%3E%0A" alt="examples icon" class="examples-image-color-dark" data-v-8526c2ef> <img src="data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%2253%22%20height%3D%2258%22%20viewBox%3D%220%200%2053%2058%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M49.1971%2043.7595C49.1113%2043.8209%2049.0231%2043.8796%2048.9325%2043.9357L29.0918%2056.2117C27.6504%2057.1035%2025.8212%2057.1564%2024.3387%2056.3439L3.85107%2045.1148C2.27157%2044.2491%201.14238%2042.6366%201.15291%2041.0494L1.15293%2041.0427L1.153%2018.552C1.15301%2018.5509%201.15302%2018.5499%201.15302%2018.5488C1.16485%2016.9324%202.02611%2015.4289%203.43319%2014.5869L3.43322%2014.587L3.44269%2014.5812L22.9844%202.59084C24.4169%201.73583%2026.2139%201.69824%2027.6729%202.49791L27.6729%202.49792L27.6784%202.50094L48.6303%2013.8121C48.6313%2013.8126%2048.6322%2013.8131%2048.6331%2013.8136C50.0797%2014.6078%2050.9898%2016.1132%2051.026%2017.7438L51.1517%2039.8672L51.1517%2039.8746L51.1519%2039.8821C51.1834%2041.4138%2050.4491%2042.8635%2049.1971%2043.7595Z%22%20fill%3D%22white%22%20stroke%3D%22url(%23paint0_linear_2691_4397)%22%20stroke-width%3D%222%22%2F%3E%0A%3Cpath%20d%3D%22M37.1528%2017.9209H15.1528C14.6224%2017.9209%2014.1137%2018.1316%2013.7386%2018.5067C13.3635%2018.8818%2013.1528%2019.3905%2013.1528%2019.9209V37.9209C13.1528%2038.4513%2013.3635%2038.96%2013.7386%2039.3351C14.1137%2039.7102%2014.6224%2039.9209%2015.1528%2039.9209H37.1528C37.6833%2039.9209%2038.192%2039.7102%2038.567%2039.3351C38.9421%2038.96%2039.1528%2038.4513%2039.1528%2037.9209V19.9209C39.1528%2019.3905%2038.9421%2018.8818%2038.567%2018.5067C38.192%2018.1316%2037.6833%2017.9209%2037.1528%2017.9209V17.9209ZM15.1528%2019.9209H37.1528V24.9209H15.1528V19.9209ZM15.1528%2026.9209H22.1528V37.9209H15.1528V26.9209ZM37.1528%2037.9209H24.1528V26.9209H37.1528V37.9209Z%22%20fill%3D%22url(%23paint1_linear_2691_4397)%22%2F%3E%0A%3Cdefs%3E%0A%3ClinearGradient%20id%3D%22paint0_linear_2691_4397%22%20x1%3D%220.662695%22%20y1%3D%2218.4025%22%20x2%3D%2251.7209%22%20y2%3D%2244.2212%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22%23D4D4D8%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22%2371717A%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3ClinearGradient%20id%3D%22paint1_linear_2691_4397%22%20x1%3D%2213.0804%22%20y1%3D%2222.6224%22%20x2%3D%2237.028%22%20y2%3D%2237.847%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22%23D4D4D8%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22%2371717A%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3C%2Fdefs%3E%0A%3C%2Fsvg%3E%0A" alt="examples icon" class="examples-image-light" data-v-8526c2ef> <img src="data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%2253%22%20height%3D%2258%22%20viewBox%3D%220%200%2053%2058%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M3.43319%2014.5869L3.43322%2014.587L3.44269%2014.5812L22.9844%202.59084C24.4246%201.73116%2026.2124%201.69742%2027.6729%202.49791L27.6729%202.49792L27.6784%202.50094L48.6303%2013.8121C48.6313%2013.8126%2048.6322%2013.8131%2048.6331%2013.8137C50.0812%2014.6086%2050.9896%2016.1043%2051.026%2017.7437L51.1517%2039.8672L51.1517%2039.8746L51.1519%2039.8821C51.1856%2041.5203%2050.346%2043.0611%2048.9325%2043.9357L29.0918%2056.2117C27.6424%2057.1085%2025.8227%2057.1572%2024.3387%2056.3439L3.85107%2045.1148C2.26984%2044.2481%201.14232%2042.646%201.15293%2041.0494V41.0427L1.153%2018.552C1.15301%2018.5509%201.15302%2018.5499%201.15302%2018.5488C1.16485%2016.9324%202.02611%2015.4289%203.43319%2014.5869Z%22%20fill%3D%22%2318181B%22%20stroke%3D%22url(%23paint0_linear_2595_7182)%22%20stroke-width%3D%222%22%2F%3E%0A%3Cpath%20d%3D%22M37.1528%2017.9209H15.1528C14.6224%2017.9209%2014.1137%2018.1316%2013.7386%2018.5067C13.3635%2018.8818%2013.1528%2019.3905%2013.1528%2019.9209V37.9209C13.1528%2038.4513%2013.3635%2038.96%2013.7386%2039.3351C14.1137%2039.7102%2014.6224%2039.9209%2015.1528%2039.9209H37.1528C37.6833%2039.9209%2038.192%2039.7102%2038.567%2039.3351C38.9421%2038.96%2039.1528%2038.4513%2039.1528%2037.9209V19.9209C39.1528%2019.3905%2038.9421%2018.8818%2038.567%2018.5067C38.192%2018.1316%2037.6833%2017.9209%2037.1528%2017.9209ZM15.1528%2019.9209H37.1528V24.9209H15.1528V19.9209ZM15.1528%2026.9209H22.1528V37.9209H15.1528V26.9209ZM37.1528%2037.9209H24.1528V26.9209H37.1528V37.9209Z%22%20fill%3D%22url(%23paint1_linear_2595_7182)%22%2F%3E%0A%3Cdefs%3E%0A%3ClinearGradient%20id%3D%22paint0_linear_2595_7182%22%20x1%3D%220.662695%22%20y1%3D%2218.4025%22%20x2%3D%2251.7209%22%20y2%3D%2244.2212%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22white%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22%2371717A%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3ClinearGradient%20id%3D%22paint1_linear_2595_7182%22%20x1%3D%2213.0804%22%20y1%3D%2222.6224%22%20x2%3D%2237.028%22%20y2%3D%2237.847%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22white%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22%2371717A%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3C%2Fdefs%3E%0A%3C%2Fsvg%3E%0A" alt="examples icon" class="examples-image-dark" data-v-8526c2ef><div class="flex flex-col space-y text-black dark:text-white" data-v-8526c2ef><h3 class="font-semibold text-xl" data-v-8526c2ef>Examples</h3><p class="text-gray-700 dark:text-gray-300" data-v-8526c2ef>Explore different way of using Nuxt features and get inspired with our list of examples.</p></div></a></div></div></div><footer class="relative border-t bg-white dark:bg-black border-gray-200 dark:border-gray-900 w-full h-[70px] flex items-center" data-v-8526c2ef><div class="absolute inset-x-0 flex items-center justify-center -top-3" data-v-8526c2ef><a href="https://nuxt.com" target="_blank" aria-label="Nuxt" data-v-8526c2ef><svg width="70" height="20" viewBox="0 0 70 20" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-8526c2ef><ellipse cx="34.6528" cy="10.4209" rx="34.5" ry="9.5" fill="white" class="dark:hidden" data-v-8526c2ef></ellipse><ellipse cx="34.6528" cy="10.4209" rx="34.5" ry="9.5" fill="black" class="hidden dark:block" data-v-8526c2ef></ellipse><path d="M36.0605 15.9209H42.6256C42.8341 15.9209 43.0389 15.8655 43.2195 15.7602C43.4001 15.6548 43.55 15.5033 43.6543 15.3209C43.7585 15.1384 43.8133 14.9315 43.8132 14.7208C43.8131 14.5102 43.7581 14.3033 43.6537 14.1209L39.2448 6.40667C39.1406 6.22427 38.9907 6.0728 38.8101 5.96748C38.6296 5.86217 38.4248 5.80672 38.2163 5.80672C38.0078 5.80672 37.803 5.86217 37.6225 5.96748C37.4419 6.0728 37.292 6.22427 37.1878 6.40667L36.0605 8.38048L33.8563 4.52076C33.752 4.33837 33.602 4.18692 33.4214 4.08163C33.2409 3.97633 33.036 3.9209 32.8275 3.9209C32.619 3.9209 32.4141 3.97633 32.2335 4.08163C32.053 4.18692 31.903 4.33837 31.7987 4.52076L26.3123 14.1209C26.2079 14.3033 26.1529 14.5102 26.1528 14.7208C26.1527 14.9315 26.2076 15.1384 26.3118 15.3209C26.416 15.5033 26.5659 15.6548 26.7465 15.7602C26.9271 15.8655 27.1319 15.9209 27.3405 15.9209H31.4615C33.0943 15.9209 34.2984 15.1964 35.127 13.7829L37.1385 10.2638L38.216 8.38048L41.4496 14.0376H37.1385L36.0605 15.9209ZM31.3943 14.0356L28.5184 14.035L32.8294 6.49263L34.9805 10.2638L33.5402 12.7844C32.99 13.7015 32.3649 14.0356 31.3943 14.0356Z" fill="#00DC82" data-v-8526c2ef></path></svg></a></div><div class="mx-auto sm:px-6 lg:px-8 px-4 w-full" data-v-8526c2ef><div class="flex flex-col items-center gap-3 sm:flex-row sm:justify-between" data-v-8526c2ef><div class="flex flex-col-reverse items-center gap-3 sm:flex-row" data-v-8526c2ef><span class="text-sm text-gray-700 dark:text-gray-300" data-v-8526c2ef>\xA9 2016-${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())} Nuxt - MIT License</span></div><ul class="flex items-center justify-end gap-3" data-v-8526c2ef><li data-v-8526c2ef><a href="https://chat.nuxt.dev" target="_blank" class="focus-visible:ring-2 text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white" data-v-8526c2ef><span class="sr-only" data-v-8526c2ef>Nuxt Discord Server</span> <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-8526c2ef><path d="M13.3705 1.07322C13.3663 1.06497 13.3594 1.05851 13.351 1.05499C12.3785 0.599487 11.3522 0.274675 10.2978 0.0886873C10.2882 0.0868693 10.2783 0.0881809 10.2695 0.0924354C10.2607 0.0966899 10.2534 0.103671 10.2487 0.112385C10.109 0.371315 9.98212 0.637279 9.86863 0.909263C8.73205 0.733138 7.57595 0.733138 6.43938 0.909263C6.32514 0.636589 6.19624 0.370559 6.05328 0.112385C6.04838 0.10386 6.04107 0.0970401 6.03232 0.0928132C6.02356 0.0885863 6.01377 0.0871486 6.0042 0.0886873C4.9497 0.274285 3.92333 0.599121 2.95092 1.05502C2.9426 1.05862 2.93558 1.06477 2.93082 1.07262C0.986197 4.03716 0.453491 6.92881 0.714819 9.78465C0.715554 9.79165 0.71766 9.79843 0.721013 9.80458C0.724365 9.81073 0.728896 9.81613 0.734334 9.82046C1.86667 10.6763 3.1332 11.3296 4.47988 11.7525C4.48937 11.7554 4.49949 11.7552 4.5089 11.7521C4.51831 11.7489 4.52655 11.7429 4.53251 11.7349C4.82175 11.3331 5.07803 10.9077 5.29876 10.4629C5.3018 10.4568 5.30353 10.4501 5.30384 10.4433C5.30416 10.4365 5.30305 10.4296 5.3006 10.4233C5.29814 10.4169 5.29439 10.4111 5.2896 10.4064C5.2848 10.4016 5.27906 10.3979 5.27277 10.3955C4.86862 10.2377 4.47736 10.0474 4.10266 9.82645C4.09586 9.82236 4.09014 9.81663 4.08602 9.80976C4.0819 9.80288 4.0795 9.79508 4.07903 9.78703C4.07856 9.77899 4.08004 9.77095 4.08334 9.76362C4.08664 9.7563 4.09166 9.74992 4.09794 9.74504C4.17657 9.68491 4.25524 9.62236 4.33032 9.55918C4.33699 9.55358 4.34506 9.54998 4.35362 9.5488C4.36218 9.54762 4.3709 9.54891 4.37879 9.55252C6.83362 10.6962 9.4913 10.6962 11.9171 9.55252C11.925 9.54868 11.9338 9.54721 11.9425 9.54829C11.9512 9.54936 11.9594 9.55293 11.9662 9.55858C12.0413 9.62176 12.1199 9.68491 12.1991 9.74504C12.2054 9.74987 12.2105 9.75621 12.2138 9.7635C12.2172 9.7708 12.2187 9.77882 12.2183 9.78687C12.2179 9.79492 12.2156 9.80274 12.2115 9.80964C12.2074 9.81654 12.2018 9.82232 12.195 9.82645C11.8211 10.0492 11.4295 10.2394 11.0243 10.3949C11.018 10.3974 11.0123 10.4012 11.0075 10.406C11.0028 10.4109 10.9991 10.4167 10.9967 10.4231C10.9943 10.4295 10.9932 10.4364 10.9936 10.4433C10.9939 10.4501 10.9957 10.4568 10.9988 10.4629C11.2232 10.9052 11.4791 11.3301 11.7645 11.7342C11.7703 11.7425 11.7785 11.7487 11.7879 11.7519C11.7974 11.7552 11.8076 11.7554 11.8171 11.7524C13.1662 11.331 14.4349 10.6776 15.5687 9.82046C15.5742 9.81635 15.5788 9.81108 15.5822 9.80501C15.5855 9.79893 15.5876 9.7922 15.5882 9.78525C15.9011 6.4836 15.0644 3.61565 13.3705 1.07322ZM5.66537 8.04574C4.92629 8.04574 4.31731 7.35337 4.31731 6.50305C4.31731 5.65274 4.91448 4.96032 5.66537 4.96032C6.42213 4.96032 7.02522 5.65875 7.01341 6.503C7.01341 7.35337 6.41622 8.04574 5.66537 8.04574ZM10.6496 8.04574C9.91051 8.04574 9.30153 7.35337 9.30153 6.50305C9.30153 5.65274 9.8987 4.96032 10.6496 4.96032C11.4064 4.96032 12.0094 5.65875 11.9976 6.503C11.9976 7.35337 11.4064 8.04574 10.6496 8.04574Z" fill="currentColor" data-v-8526c2ef></path></svg></a></li><li data-v-8526c2ef><a href="https://twitter.nuxt.dev" target="_blank" class="focus-visible:ring-2 text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white" data-v-8526c2ef><span class="sr-only" data-v-8526c2ef>Nuxt Twitter</span> <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-8526c2ef><path d="M17.486 1.75441C16.8596 2.02615 16.1972 2.20579 15.5193 2.28774C16.2345 1.86051 16.7704 1.18839 17.0277 0.396073C16.3556 0.796126 15.62 1.07799 14.8527 1.22941C14.3398 0.673216 13.6568 0.302987 12.9108 0.176783C12.1649 0.0505786 11.3981 0.175539 10.7308 0.532064C10.0635 0.88859 9.53345 1.45652 9.2237 2.14677C8.91396 2.83702 8.84208 3.61056 9.01934 4.34607C7.66053 4.27734 6.33137 3.92353 5.11822 3.30762C3.90506 2.69171 2.83504 1.82748 1.97767 0.771073C1.67695 1.29621 1.51894 1.89093 1.51934 2.49607C1.51827 3.05806 1.65618 3.61159 1.9208 4.10738C2.18541 4.60317 2.56852 5.02583 3.036 5.33774C2.49265 5.32296 1.96091 5.17716 1.486 4.91274V4.95441C1.49008 5.74182 1.766 6.50365 2.2671 7.11104C2.7682 7.71844 3.46372 8.13411 4.236 8.28774C3.93872 8.37821 3.63007 8.42591 3.31934 8.42941C3.10424 8.42689 2.88969 8.40739 2.67767 8.37107C2.89759 9.04842 3.32319 9.64036 3.89523 10.0645C4.46728 10.4887 5.15732 10.724 5.86934 10.7377C4.66701 11.6838 3.18257 12.2001 1.65267 12.2044C1.37412 12.2053 1.09578 12.1886 0.819336 12.1544C2.38136 13.163 4.20168 13.6983 6.061 13.6961C7.34408 13.7094 8.61695 13.4669 9.80527 12.9828C10.9936 12.4987 12.0735 11.7826 12.982 10.8765C13.8905 9.97033 14.6093 8.89223 15.0965 7.70516C15.5836 6.51809 15.8294 5.24585 15.8193 3.96274C15.8193 3.82107 15.8193 3.67107 15.8193 3.52107C16.4732 3.03342 17.0372 2.43559 17.486 1.75441Z" fill="currentColor" data-v-8526c2ef></path></svg></a></li><li data-v-8526c2ef><a href="https://github.nuxt.dev" target="_blank" class="focus-visible:ring-2 text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white" data-v-8526c2ef><span class="sr-only" data-v-8526c2ef>Nuxt GitHub Repository</span> <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-8526c2ef><path d="M9.15269 0.792969C7.17392 0.793051 5.25974 1.49723 3.75266 2.77951C2.24558 4.06179 1.24394 5.83849 0.92697 7.7917C0.609997 9.74492 0.998373 11.7472 2.02261 13.4403C3.04684 15.1333 4.6401 16.4067 6.51729 17.0325C6.93396 17.1055 7.09021 16.8555 7.09021 16.6367C7.09021 16.4388 7.07978 15.7825 7.07978 15.0846C4.98603 15.47 4.44436 14.5742 4.27769 14.1055C4.09276 13.6496 3.79959 13.2456 3.42353 12.9284C3.13186 12.7721 2.71519 12.3867 3.4131 12.3763C3.67959 12.4052 3.93518 12.498 4.15822 12.6467C4.38125 12.7953 4.56516 12.9956 4.69436 13.2305C4.80833 13.4352 4.96159 13.6155 5.14535 13.7609C5.32911 13.9063 5.53975 14.014 5.76522 14.0779C5.99068 14.1418 6.22653 14.1605 6.45926 14.1331C6.69198 14.1056 6.917 14.0325 7.12143 13.918C7.1575 13.4943 7.34631 13.0982 7.65269 12.8034C5.79853 12.5951 3.86103 11.8763 3.86103 8.68883C3.84931 7.86062 4.15493 7.05931 4.71519 6.44924C4.46043 5.72943 4.49024 4.93948 4.79853 4.24091C4.79853 4.24091 5.49642 4.02215 7.09019 5.09508C8.45376 4.72005 9.89328 4.72005 11.2569 5.09508C12.8506 4.01174 13.5485 4.24091 13.5485 4.24091C13.8569 4.93947 13.8867 5.72943 13.6319 6.44924C14.1938 7.05826 14.4997 7.86027 14.486 8.68883C14.486 11.8867 12.5381 12.5951 10.6839 12.8034C10.8828 13.005 11.036 13.247 11.133 13.513C11.2301 13.779 11.2688 14.0628 11.2464 14.3451C11.2464 15.4597 11.236 16.3555 11.236 16.6367C11.236 16.8555 11.3923 17.1159 11.8089 17.0326C13.6828 16.4016 15.2715 15.1253 16.2914 13.4313C17.3112 11.7374 17.6959 9.73616 17.3768 7.78483C17.0576 5.83351 16.0553 4.05911 14.5489 2.77839C13.0425 1.49768 11.1299 0.793998 9.15269 0.792969Z" fill="currentColor" data-v-8526c2ef></path></svg></a></li></ul></div></div></footer></div>`);
    }) };
    Fe = xe.setup;
    xe.setup = (e6, t5) => {
      const a4 = useSSRContext();
      return (a4.modules || (a4.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt/dist/app/components/welcome.vue"), Fe ? Fe(e6, t5) : void 0;
    };
    me = _export_sfc(xe, [["__scopeId", "data-v-8526c2ef"]]);
    ve = {};
    _e = ve.setup;
    ve.setup = (e6, t5) => {
      const a4 = useSSRContext();
      return (a4.modules || (a4.modules = /* @__PURE__ */ new Set())).add("app.vue"), _e ? _e(e6, t5) : void 0;
    };
    ye = _export_sfc(ve, [["ssrRender", function(e6, t5, a4, r4) {
      const o10 = Ae, i6 = me;
      t5(`<div${ssrRenderAttrs(r4)}>`), t5(ssrRenderComponent(o10, null, null, a4)), t5(ssrRenderComponent(i6, null, null, a4)), t5("</div>");
    }]]);
    we = { __name: "nuxt-error-page", __ssrInlineRender: true, props: { error: Object }, setup(e6) {
      const t5 = e6.error;
      t5.stack && t5.stack.split("\n").splice(1).map((e7) => ({ text: e7.replace("webpack:/", "").replace(".vue", ".js").trim(), internal: e7.includes("node_modules") && !e7.includes(".cache") || e7.includes("internal") || e7.includes("new Promise") })).map((e7) => `<span class="stack${e7.internal ? " internal" : ""}">${e7.text}</span>`).join("\n");
      const a4 = Number(t5.statusCode || 500), r4 = 404 === a4, o10 = t5.statusMessage ?? (r4 ? "Page Not Found" : "Internal Server Error"), i6 = t5.message || t5.toString(), n2 = defineAsyncComponent(() => Promise.resolve().then(() => (init_error_404_Bd4Y14dE(), error_404_Bd4Y14dE_exports)).then((e7) => e7.default || e7)), s4 = defineAsyncComponent(() => Promise.resolve().then(() => (init_error_500_DiazK33y(), error_500_DiazK33y_exports)).then((e7) => e7.default || e7)), l3 = r4 ? n2 : s4;
      return (e7, t6, r5, n3) => {
        t6(ssrRenderComponent(unref(l3), mergeProps({ statusCode: unref(a4), statusMessage: unref(o10), description: unref(i6), stack: unref(void 0) }, n3), null, r5));
      };
    } };
    Le = we.setup;
    we.setup = (e6, t5) => {
      const a4 = useSSRContext();
      return (a4.modules || (a4.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt/dist/app/components/nuxt-error-page.vue"), Le ? Le(e6, t5) : void 0;
    };
    ke = { __name: "nuxt-root", __ssrInlineRender: true, setup(e6) {
      const IslandRenderer = () => null, t5 = useNuxtApp();
      t5.deferHydration(), t5.ssrContext.url;
      const a4 = false;
      provide(ne, hasInjectionContext() ? inject(ne, useNuxtApp()._route) : useNuxtApp()._route), t5.hooks.callHookWith((e7) => e7.map((e8) => e8()), "vue:setup");
      const r4 = useError(), o10 = r4.value && !t5.ssrContext.error;
      onErrorCaptured((e7, a5, r5) => {
        t5.hooks.callHook("vue:error", e7, a5, r5).catch((e8) => console.error("[nuxt] Error in `vue:error` hook", e8));
        {
          const a6 = t5.runWithContext(() => showError(e7));
          return ze(() => a6), false;
        }
      });
      const i6 = t5.ssrContext.islandContext;
      return (e7, t6, n2, s4) => {
        ssrRenderSuspense(t6, { default: () => {
          unref(o10) ? t6("<div></div>") : unref(r4) ? t6(ssrRenderComponent(unref(we), { error: unref(r4) }, null, n2)) : unref(i6) ? t6(ssrRenderComponent(unref(IslandRenderer), { context: unref(i6) }, null, n2)) : unref(a4) ? renderVNode(t6, createVNode(resolveDynamicComponent(unref(a4)), null, null), n2) : t6(ssrRenderComponent(unref(ye), null, null, n2));
        }, _: 1 });
      };
    } };
    be = ke.setup;
    ke.setup = (e6, t5) => {
      const a4 = useSSRContext();
      return (a4.modules || (a4.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt/dist/app/components/nuxt-root.vue"), be ? be(e6, t5) : void 0;
    }, Me = async function(e6) {
      const t5 = createApp(ke), a4 = function(e7) {
        let t6 = 0;
        const a5 = { _name: oe, _scope: effectScope(), provide: void 0, globalName: "nuxt", versions: { get nuxt() {
          return "3.12.4";
        }, get vue() {
          return a5.vueApp.version;
        } }, payload: shallowReactive({ data: shallowReactive({}), state: reactive({}), once: /* @__PURE__ */ new Set(), _errors: shallowReactive({}) }), static: { data: {} }, runWithContext: (e8) => a5._scope.active && !getCurrentScope() ? a5._scope.run(() => callWithNuxt(a5, e8)) : callWithNuxt(a5, e8), isHydrating: false, deferHydration() {
          if (!a5.isHydrating)
            return () => {
            };
          t6++;
          let e8 = false;
          return () => {
            if (!e8)
              return e8 = true, t6--, 0 === t6 ? (a5.isHydrating = false, a5.callHook("app:suspense:resolve")) : void 0;
          };
        }, _asyncDataPromises: {}, _asyncData: shallowReactive({}), _payloadRevivers: {}, ...e7 };
        a5.payload.serverRendered = true, a5.hooks = createHooks(), a5.hook = a5.hooks.hook;
        {
          const contextCaller = async function(e8, t7) {
            for (const r5 of e8)
              await a5.runWithContext(() => r5(...t7));
          };
          a5.hooks.callHook = (e8, ...t7) => a5.hooks.callHookWith(contextCaller, e8, ...t7);
        }
        a5.callHook = a5.hooks.callHook, a5.provide = (e8, t7) => {
          const r5 = "$" + e8;
          defineGetter(a5, r5, t7), defineGetter(a5.vueApp.config.globalProperties, r5, t7);
        }, defineGetter(a5.vueApp, "$nuxt", a5), defineGetter(a5.vueApp.config.globalProperties, "$nuxt", a5), a5.ssrContext && (a5.ssrContext.nuxt = a5, a5.ssrContext._payloadReducers = {}, a5.payload.path = a5.ssrContext.url), a5.ssrContext = a5.ssrContext || {}, a5.ssrContext.payload && Object.assign(a5.payload, a5.ssrContext.payload), a5.ssrContext.payload = a5.payload, a5.ssrContext.config = { public: e7.ssrContext.runtimeConfig.public, app: e7.ssrContext.runtimeConfig.app };
        const r4 = e7.ssrContext.runtimeConfig;
        return a5.provide("config", r4), a5;
      }({ vueApp: t5, ssrContext: e6 });
      try {
        await async function(e7, t6) {
          var a5, r4, o10, i6;
          const n2 = [], s4 = [], l3 = [], C4 = [];
          let d3 = 0;
          async function executePlugin(a6) {
            var r5;
            const o11 = (null == (r5 = a6.dependsOn) ? void 0 : r5.filter((e8) => t6.some((t7) => t7._name === e8) && !n2.includes(e8))) ?? [];
            if (o11.length > 0)
              s4.push([new Set(o11), a6]);
            else {
              const t7 = async function(e8, t8) {
                if ("function" == typeof t8) {
                  const { provide: a7 } = await e8.runWithContext(() => t8(e8)) || {};
                  if (a7 && "object" == typeof a7)
                    for (const t9 in a7)
                      e8.provide(t9, a7[t9]);
                }
              }(e7, a6).then(async () => {
                a6._name && (n2.push(a6._name), await Promise.all(s4.map(async ([e8, t8]) => {
                  e8.has(a6._name) && (e8.delete(a6._name), 0 === e8.size && (d3++, await executePlugin(t8)));
                })));
              });
              a6.parallel ? l3.push(t7.catch((e8) => C4.push(e8))) : await t7;
            }
          }
          for (const o11 of t6)
            (null == (a5 = e7.ssrContext) ? void 0 : a5.islandContext) && false === (null == (r4 = o11.env) ? void 0 : r4.islands) || registerPluginHooks(e7, o11);
          for (const a6 of t6)
            (null == (o10 = e7.ssrContext) ? void 0 : o10.islandContext) && false === (null == (i6 = a6.env) ? void 0 : i6.islands) || await executePlugin(a6);
          if (await Promise.all(l3), d3)
            for (let e8 = 0; e8 < d3; e8++)
              await Promise.all(l3);
          if (C4.length)
            throw C4[0];
        }(a4, ge), await a4.hooks.callHook("app:created", t5);
      } catch (e7) {
        await a4.hooks.callHook("app:error", e7), a4.payload.error = a4.payload.error || createError2(e7);
      }
      if (null == e6 ? void 0 : e6._renderResponse)
        throw new Error("skipping render");
      return t5;
    };
    entry$1 = (e6) => Me(e6);
  }
});

// .wrangler/tmp/pages-WENPGt/chunks/virtual/_virtual_spa-template.mjs
var virtual_spa_template_exports = {};
__export(virtual_spa_template_exports, {
  template: () => o4
});
var o4;
var init_virtual_spa_template = __esm({
  ".wrangler/tmp/pages-WENPGt/chunks/virtual/_virtual_spa-template.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    o4 = "";
  }
});

// .wrangler/tmp/pages-WENPGt/chunks/routes/renderer.mjs
var renderer_exports = {};
__export(renderer_exports, {
  A: () => renderVNode,
  B: () => createVNode,
  C: () => resolveDynamicComponent,
  D: () => h,
  E: () => isRef,
  F: () => isShallow,
  G: () => isReactive,
  H: () => toRaw,
  I: () => ze,
  J: () => defineAsyncComponent,
  K: () => createElementBlock,
  L: () => withCtx,
  M: () => createTextVNode,
  N: () => toDisplayString,
  O: () => resolveComponent,
  P: () => Mn,
  a: () => watch,
  b: () => baseURL,
  c: () => getActiveHead,
  d: () => createApp,
  e: () => effectScope,
  f: () => reactive,
  g: () => getCurrentInstance,
  h: () => getCurrentScope,
  i: () => hasInjectionContext,
  j: () => inject,
  k: () => ssrRenderAttrs,
  l: () => ssrInterpolate,
  m: () => mergeProps,
  n: () => unref,
  o: () => onErrorCaptured,
  p: () => provide,
  q: () => ssrRenderSuspense,
  r: () => ref,
  s: () => shallowReactive,
  t: () => toRef,
  u: () => useSSRContext,
  v: () => computed,
  w: () => watchEffect,
  x: () => defineComponent,
  y: () => isReadonly,
  z: () => ssrRenderComponent
});
function baseURL() {
  return useRuntimeConfig2().app.baseURL;
}
function buildAssetsURL(...t5) {
  return joinRelativeURL(publicAssetsURL(), useRuntimeConfig2().app.buildAssetsDir, ...t5);
}
function publicAssetsURL(...t5) {
  const n2 = useRuntimeConfig2().app, r4 = n2.cdnURL || n2.baseURL;
  return t5.length ? joinRelativeURL(r4, ...t5) : r4;
}
function getModuleDependencies(e6, t5) {
  if (t5._dependencies[e6])
    return t5._dependencies[e6];
  const n2 = t5._dependencies[e6] = { scripts: {}, styles: {}, preload: {}, prefetch: {} }, r4 = t5.manifest[e6];
  if (!r4)
    return n2;
  r4.file && (n2.preload[e6] = r4, (r4.isEntry || r4.sideEffects) && (n2.scripts[e6] = r4));
  for (const e7 of r4.css || [])
    n2.styles[e7] = n2.preload[e7] = n2.prefetch[e7] = t5.manifest[e7];
  for (const e7 of r4.assets || [])
    n2.preload[e7] = n2.prefetch[e7] = t5.manifest[e7];
  for (const e7 of r4.imports || []) {
    const r5 = getModuleDependencies(e7, t5);
    Object.assign(n2.styles, r5.styles), Object.assign(n2.preload, r5.preload), Object.assign(n2.prefetch, r5.prefetch);
  }
  const o10 = {};
  for (const e7 in n2.preload) {
    const t6 = n2.preload[e7];
    t6.preload && (o10[e7] = t6);
  }
  return n2.preload = o10, n2;
}
function getRequestDependencies(e6, t5) {
  if (e6._requestDependencies)
    return e6._requestDependencies;
  const n2 = function(e7, t6) {
    const n3 = Array.from(e7).sort().join(",");
    if (t6._dependencySets[n3])
      return t6._dependencySets[n3];
    const r4 = { scripts: {}, styles: {}, preload: {}, prefetch: {} };
    for (const n4 of e7) {
      const e8 = getModuleDependencies(n4, t6);
      Object.assign(r4.scripts, e8.scripts), Object.assign(r4.styles, e8.styles), Object.assign(r4.preload, e8.preload), Object.assign(r4.prefetch, e8.prefetch);
      for (const e9 of t6.manifest[n4]?.dynamicImports || []) {
        const n5 = getModuleDependencies(e9, t6);
        Object.assign(r4.prefetch, n5.scripts), Object.assign(r4.prefetch, n5.styles), Object.assign(r4.prefetch, n5.preload);
      }
    }
    const o10 = {};
    for (const e8 in r4.prefetch) {
      const t7 = r4.prefetch[e8];
      t7.prefetch && (o10[e8] = t7);
    }
    r4.prefetch = o10;
    for (const e8 in r4.preload)
      delete r4.prefetch[e8];
    for (const e8 in r4.styles)
      delete r4.preload[e8], delete r4.prefetch[e8];
    return t6._dependencySets[n3] = r4, r4;
  }(new Set(Array.from([...t5._entrypoints, ...e6.modules || e6._registeredComponents || []])), t5);
  return e6._requestDependencies = n2, n2;
}
function renderStyles(e6, t5) {
  const { styles: n2 } = getRequestDependencies(e6, t5);
  return Object.values(n2).map((e7) => renderLinkToString({ rel: "stylesheet", href: t5.buildAssetsURL(e7.file) })).join("");
}
function getResources(e6, t5) {
  return [...getPreloadLinks(e6, t5), ...getPrefetchLinks(e6, t5)];
}
function renderResourceHints(e6, t5) {
  return getResources(e6, t5).map(renderLinkToString).join("");
}
function renderResourceHeaders(e6, t5) {
  return { link: getResources(e6, t5).map(renderLinkToHeader).join(", ") };
}
function getPreloadLinks(e6, t5) {
  const { preload: n2 } = getRequestDependencies(e6, t5);
  return Object.values(n2).map((e7) => ({ rel: e7.module ? "modulepreload" : "preload", as: e7.resourceType, type: e7.mimeType ?? null, crossorigin: "font" === e7.resourceType || "script" === e7.resourceType || e7.module ? "" : null, href: t5.buildAssetsURL(e7.file) }));
}
function getPrefetchLinks(e6, t5) {
  const { prefetch: n2 } = getRequestDependencies(e6, t5);
  return Object.values(n2).map((e7) => ({ rel: "prefetch", as: e7.resourceType, type: e7.mimeType ?? null, crossorigin: "font" === e7.resourceType || "script" === e7.resourceType || e7.module ? "" : null, href: t5.buildAssetsURL(e7.file) }));
}
function renderScripts(e6, t5) {
  const { scripts: n2 } = getRequestDependencies(e6, t5);
  return Object.values(n2).map((e7) => {
    return n3 = { type: e7.module ? "module" : null, src: t5.buildAssetsURL(e7.file), defer: e7.module ? null : "", crossorigin: "" }, `<script${Object.entries(n3).map(([e8, t6]) => null === t6 ? "" : t6 ? ` ${e8}="${t6}"` : " " + e8).join("")}><\/script>`;
    var n3;
  }).join("");
}
function createRenderer$1(e6, t5) {
  const n2 = function({ manifest: e7, buildAssetsURL: t6 }) {
    const n3 = { buildAssetsURL: t6 || withLeadingSlash, manifest: void 0, updateManifest, _dependencies: void 0, _dependencySets: void 0, _entrypoints: void 0 };
    function updateManifest(e8) {
      const t7 = Object.entries(e8);
      n3.manifest = e8, n3._dependencies = {}, n3._dependencySets = {}, n3._entrypoints = t7.filter((e9) => e9[1].isEntry).map(([e9]) => e9);
    }
    return updateManifest(e7), n3;
  }(t5);
  return { rendererContext: n2, async renderToString(r4) {
    r4._registeredComponents = r4._registeredComponents || /* @__PURE__ */ new Set();
    const o10 = await Promise.resolve(e6).then((e7) => "default" in e7 ? e7.default : e7), s4 = await o10(r4), wrap = (e7) => () => e7(r4, n2);
    return { html: await t5.renderToString(s4, r4), renderResourceHeaders: wrap(renderResourceHeaders), renderResourceHints: wrap(renderResourceHints), renderStyles: wrap(renderStyles), renderScripts: wrap(renderScripts) };
  } };
}
function renderLinkToString(e6) {
  return `<link${Object.entries(e6).map(([e7, t5]) => null === t5 ? "" : t5 ? ` ${e7}="${t5}"` : " " + e7).join("")}>`;
}
function renderLinkToHeader(e6) {
  return `<${e6.href}>${Object.entries(e6).map(([e7, t5]) => "href" === e7 || null === t5 ? "" : t5 ? `; ${e7}="${t5}"` : `; ${e7}`).join("")}`;
}
function is_primitive(e6) {
  return Object(e6) !== e6;
}
function is_plain_object(e6) {
  const t5 = Object.getPrototypeOf(e6);
  return t5 === Object.prototype || null === t5 || Object.getOwnPropertyNames(t5).sort().join("\0") === y;
}
function get_type(e6) {
  return Object.prototype.toString.call(e6).slice(8, -1);
}
function get_escaped_char(e6) {
  switch (e6) {
    case '"':
      return '\\"';
    case "<":
      return "\\u003C";
    case "\\":
      return "\\\\";
    case "\n":
      return "\\n";
    case "\r":
      return "\\r";
    case "	":
      return "\\t";
    case "\b":
      return "\\b";
    case "\f":
      return "\\f";
    case "\u2028":
      return "\\u2028";
    case "\u2029":
      return "\\u2029";
    default:
      return e6 < " " ? `\\u${e6.charCodeAt(0).toString(16).padStart(4, "0")}` : "";
  }
}
function stringify_string(e6) {
  let t5 = "", n2 = 0;
  const r4 = e6.length;
  for (let o10 = 0; o10 < r4; o10 += 1) {
    const r5 = get_escaped_char(e6[o10]);
    r5 && (t5 += e6.slice(n2, o10) + r5, n2 = o10 + 1);
  }
  return `"${0 === n2 ? e6 : t5 + e6.slice(n2)}"`;
}
function enumerable_symbols(e6) {
  return Object.getOwnPropertySymbols(e6).filter((t5) => Object.getOwnPropertyDescriptor(e6, t5).enumerable);
}
function uneval(e6, t5) {
  const n2 = /* @__PURE__ */ new Map(), r4 = [], o10 = /* @__PURE__ */ new Map();
  !function walk(e7) {
    if ("function" == typeof e7)
      throw new DevalueError("Cannot stringify a function", r4);
    if (!is_primitive(e7)) {
      if (n2.has(e7))
        return void n2.set(e7, n2.get(e7) + 1);
      n2.set(e7, 1);
      switch (get_type(e7)) {
        case "Number":
        case "BigInt":
        case "String":
        case "Boolean":
        case "Date":
        case "RegExp":
          return;
        case "Array":
          e7.forEach((e8, t6) => {
            r4.push(`[${t6}]`), walk(e8), r4.pop();
          });
          break;
        case "Set":
          Array.from(e7).forEach(walk);
          break;
        case "Map":
          for (const [t6, n3] of e7)
            r4.push(`.get(${is_primitive(t6) ? stringify_primitive$1(t6) : "..."})`), walk(n3), r4.pop();
          break;
        default:
          if (!is_plain_object(e7))
            throw new DevalueError("Cannot stringify arbitrary non-POJOs", r4);
          if (enumerable_symbols(e7).length > 0)
            throw new DevalueError("Cannot stringify POJOs with symbolic keys", r4);
          for (const t6 in e7)
            r4.push(`.${t6}`), walk(e7[t6]), r4.pop();
      }
    }
  }(e6);
  const s4 = /* @__PURE__ */ new Map();
  function stringify3(e7) {
    if (s4.has(e7))
      return s4.get(e7);
    if (is_primitive(e7))
      return stringify_primitive$1(e7);
    if (o10.has(e7))
      return o10.get(e7);
    const t6 = get_type(e7);
    switch (t6) {
      case "Number":
      case "String":
      case "Boolean":
        return `Object(${stringify3(e7.valueOf())})`;
      case "RegExp":
        return `new RegExp(${stringify_string(e7.source)}, "${e7.flags}")`;
      case "Date":
        return `new Date(${e7.getTime()})`;
      case "Array":
        const n3 = e7.map((t7, n4) => n4 in e7 ? stringify3(t7) : ""), r5 = 0 === e7.length || e7.length - 1 in e7 ? "" : ",";
        return `[${n3.join(",")}${r5}]`;
      case "Set":
      case "Map":
        return `new ${t6}([${Array.from(e7).map(stringify3).join(",")}])`;
      default:
        const o11 = `{${Object.keys(e7).map((t7) => `${function(e8) {
          return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(e8) ? e8 : escape_unsafe_chars(JSON.stringify(e8));
        }(t7)}:${stringify3(e7[t7])}`).join(",")}}`;
        return null === Object.getPrototypeOf(e7) ? Object.keys(e7).length > 0 ? `Object.assign(Object.create(null),${o11})` : "Object.create(null)" : o11;
    }
  }
  Array.from(n2).filter((e7) => e7[1] > 1).sort((e7, t6) => t6[1] - e7[1]).forEach((e7, t6) => {
    s4.set(e7[0], function(e8) {
      let t7 = "";
      do {
        t7 = v[e8 % v.length] + t7, e8 = ~~(e8 / v.length) - 1;
      } while (e8 >= 0);
      return b.test(t7) ? `${t7}0` : t7;
    }(t6));
  });
  const i6 = stringify3(e6);
  if (s4.size) {
    const e7 = [], t6 = [], n3 = [];
    return s4.forEach((r5, s5) => {
      if (e7.push(r5), o10.has(s5))
        return void n3.push(o10.get(s5));
      if (is_primitive(s5))
        return void n3.push(stringify_primitive$1(s5));
      switch (get_type(s5)) {
        case "Number":
        case "String":
        case "Boolean":
          n3.push(`Object(${stringify3(s5.valueOf())})`);
          break;
        case "RegExp":
          n3.push(s5.toString());
          break;
        case "Date":
          n3.push(`new Date(${s5.getTime()})`);
          break;
        case "Array":
          n3.push(`Array(${s5.length})`), s5.forEach((e8, n4) => {
            t6.push(`${r5}[${n4}]=${stringify3(e8)}`);
          });
          break;
        case "Set":
          n3.push("new Set"), t6.push(`${r5}.${Array.from(s5).map((e8) => `add(${stringify3(e8)})`).join(".")}`);
          break;
        case "Map":
          n3.push("new Map"), t6.push(`${r5}.${Array.from(s5).map(([e8, t7]) => `set(${stringify3(e8)}, ${stringify3(t7)})`).join(".")}`);
          break;
        default:
          n3.push(null === Object.getPrototypeOf(s5) ? "Object.create(null)" : "{}"), Object.keys(s5).forEach((e8) => {
            t6.push(`${r5}${function(e9) {
              return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(e9) ? `.${e9}` : `[${escape_unsafe_chars(JSON.stringify(e9))}]`;
            }(e8)}=${stringify3(s5[e8])}`);
          });
      }
    }), t6.push(`return ${i6}`), `(function(${e7.join(",")}){${t6.join(";")}}(${n3.join(",")}))`;
  }
  return i6;
}
function escape_unsafe_char(e6) {
  return m[e6] || e6;
}
function escape_unsafe_chars(e6) {
  return e6.replace(_, escape_unsafe_char);
}
function stringify_primitive$1(e6) {
  if ("string" == typeof e6)
    return stringify_string(e6);
  if (void 0 === e6)
    return "void 0";
  if (0 === e6 && 1 / e6 < 0)
    return "-0";
  const t5 = String(e6);
  return "number" == typeof e6 ? t5.replace(/^(-)?0\./, "$1.") : "bigint" == typeof e6 ? e6 + "n" : t5;
}
function stringify(e6, t5) {
  const n2 = [], r4 = /* @__PURE__ */ new Map(), o10 = [];
  for (const e7 in t5)
    o10.push({ key: e7, fn: t5[e7] });
  const s4 = [];
  let i6 = 0;
  const a4 = function flatten(e7) {
    if ("function" == typeof e7)
      throw new DevalueError("Cannot stringify a function", s4);
    if (r4.has(e7))
      return r4.get(e7);
    if (void 0 === e7)
      return k;
    if (Number.isNaN(e7))
      return R;
    if (e7 === 1 / 0)
      return w;
    if (e7 === -1 / 0)
      return C;
    if (0 === e7 && 1 / e7 < 0)
      return x;
    const t6 = i6++;
    r4.set(e7, t6);
    for (const { key: r5, fn: s5 } of o10) {
      const o11 = s5(e7);
      if (o11)
        return n2[t6] = `["${r5}",${flatten(o11)}]`, t6;
    }
    let a5 = "";
    if (is_primitive(e7))
      a5 = stringify_primitive(e7);
    else {
      switch (get_type(e7)) {
        case "Number":
        case "String":
        case "Boolean":
          a5 = `["Object",${stringify_primitive(e7)}]`;
          break;
        case "BigInt":
          a5 = `["BigInt",${e7}]`;
          break;
        case "Date":
          a5 = `["Date","${!isNaN(e7.getDate()) ? e7.toISOString() : ""}"]`;
          break;
        case "RegExp":
          const { source: t7, flags: n3 } = e7;
          a5 = n3 ? `["RegExp",${stringify_string(t7)},"${n3}"]` : `["RegExp",${stringify_string(t7)}]`;
          break;
        case "Array":
          a5 = "[";
          for (let t8 = 0; t8 < e7.length; t8 += 1)
            t8 > 0 && (a5 += ","), t8 in e7 ? (s4.push(`[${t8}]`), a5 += flatten(e7[t8]), s4.pop()) : a5 += S;
          a5 += "]";
          break;
        case "Set":
          a5 = '["Set"';
          for (const t8 of e7)
            a5 += `,${flatten(t8)}`;
          a5 += "]";
          break;
        case "Map":
          a5 = '["Map"';
          for (const [t8, n4] of e7)
            s4.push(`.get(${is_primitive(t8) ? stringify_primitive(t8) : "..."})`), a5 += `,${flatten(t8)},${flatten(n4)}`, s4.pop();
          a5 += "]";
          break;
        default:
          if (!is_plain_object(e7))
            throw new DevalueError("Cannot stringify arbitrary non-POJOs", s4);
          if (enumerable_symbols(e7).length > 0)
            throw new DevalueError("Cannot stringify POJOs with symbolic keys", s4);
          if (null === Object.getPrototypeOf(e7)) {
            a5 = '["null"';
            for (const t8 in e7)
              s4.push(`.${t8}`), a5 += `,${stringify_string(t8)},${flatten(e7[t8])}`, s4.pop();
            a5 += "]";
          } else {
            a5 = "{";
            let t8 = false;
            for (const n4 in e7)
              t8 && (a5 += ","), t8 = true, s4.push(`.${n4}`), a5 += `${stringify_string(n4)}:${flatten(e7[n4])}`, s4.pop();
            a5 += "}";
          }
      }
    }
    return n2[t6] = a5, t6;
  }(e6);
  return a4 < 0 ? `${a4}` : `[${n2.join(",")}]`;
}
function stringify_primitive(e6) {
  const t5 = typeof e6;
  return "string" === t5 ? stringify_string(e6) : e6 instanceof String ? stringify_string(e6.toString()) : void 0 === e6 ? k.toString() : 0 === e6 && 1 / e6 < 0 ? x.toString() : "bigint" === t5 ? `["BigInt","${e6}"]` : String(e6);
}
function makeMap(e6, t5) {
  const n2 = new Set(e6.split(","));
  return (e7) => n2.has(e7);
}
function normalizeStyle(e6) {
  if (E(e6)) {
    const t5 = {};
    for (let n2 = 0; n2 < e6.length; n2++) {
      const r4 = e6[n2], o10 = isString(r4) ? parseStringStyle(r4) : normalizeStyle(r4);
      if (o10)
        for (const e7 in o10)
          t5[e7] = o10[e7];
    }
    return t5;
  }
  if (isString(e6) || isObject(e6))
    return e6;
}
function parseStringStyle(e6) {
  const t5 = {};
  return e6.replace(B, "").split(D).forEach((e7) => {
    if (e7) {
      const n2 = e7.split(U);
      n2.length > 1 && (t5[n2[0].trim()] = n2[1].trim());
    }
  }), t5;
}
function normalizeClass(e6) {
  let t5 = "";
  if (isString(e6))
    t5 = e6;
  else if (E(e6))
    for (let n2 = 0; n2 < e6.length; n2++) {
      const r4 = normalizeClass(e6[n2]);
      r4 && (t5 += r4 + " ");
    }
  else if (isObject(e6))
    for (const n2 in e6)
      e6[n2] && (t5 += n2 + " ");
  return t5.trim();
}
function includeBooleanAttr(e6) {
  return !!e6 || "" === e6;
}
function escapeHtml$1(e6) {
  const t5 = "" + e6, n2 = Y.exec(t5);
  if (!n2)
    return t5;
  let r4, o10, s4 = "", i6 = 0;
  for (o10 = n2.index; o10 < t5.length; o10++) {
    switch (t5.charCodeAt(o10)) {
      case 34:
        r4 = "&quot;";
        break;
      case 38:
        r4 = "&amp;";
        break;
      case 39:
        r4 = "&#39;";
        break;
      case 60:
        r4 = "&lt;";
        break;
      case 62:
        r4 = "&gt;";
        break;
      default:
        continue;
    }
    i6 !== o10 && (s4 += t5.slice(i6, o10)), i6 = o10 + 1, s4 += r4;
  }
  return i6 !== o10 ? s4 + t5.slice(i6, o10) : s4;
}
function effectScope(e6) {
  return new EffectScope(e6);
}
function getCurrentScope() {
  return ee2;
}
function triggerComputed(e6) {
  return e6.value;
}
function preCleanupEffect(e6) {
  e6._trackId++, e6._depsLength = 0;
}
function postCleanupEffect(e6) {
  if (e6.deps.length > e6._depsLength) {
    for (let t5 = e6._depsLength; t5 < e6.deps.length; t5++)
      cleanupDepEffect(e6.deps[t5], e6);
    e6.deps.length = e6._depsLength;
  }
}
function cleanupDepEffect(e6, t5) {
  const n2 = e6.get(t5);
  void 0 !== n2 && t5._trackId !== n2 && (e6.delete(t5), 0 === e6.size && e6.cleanup());
}
function pauseTracking() {
  oe2.push(ne2), ne2 = false;
}
function resetTracking() {
  const e6 = oe2.pop();
  ne2 = void 0 === e6 || e6;
}
function pauseScheduling() {
  re2++;
}
function resetScheduling() {
  for (re2--; !re2 && se2.length; )
    se2.shift()();
}
function trackEffect(e6, t5, n2) {
  if (t5.get(e6) !== e6._trackId) {
    t5.set(e6, e6._trackId);
    const n3 = e6.deps[e6._depsLength];
    n3 !== t5 ? (n3 && cleanupDepEffect(n3, e6), e6.deps[e6._depsLength++] = t5) : e6._depsLength++;
  }
}
function triggerEffects(e6, t5, n2) {
  pauseScheduling();
  for (const n3 of e6.keys()) {
    let r4;
    n3._dirtyLevel < t5 && (null != r4 ? r4 : r4 = e6.get(n3) === n3._trackId) && (n3._shouldSchedule || (n3._shouldSchedule = 0 === n3._dirtyLevel), n3._dirtyLevel = t5), n3._shouldSchedule && (null != r4 ? r4 : r4 = e6.get(n3) === n3._trackId) && (n3.trigger(), n3._runnings && !n3.allowRecurse || 2 === n3._dirtyLevel || (n3._shouldSchedule = false, n3.scheduler && se2.push(n3.scheduler)));
  }
  resetScheduling();
}
function track(e6, t5, n2) {
  if (ne2 && te3) {
    let t6 = ie2.get(e6);
    t6 || ie2.set(e6, t6 = /* @__PURE__ */ new Map());
    let r4 = t6.get(n2);
    r4 || t6.set(n2, r4 = createDep(() => t6.delete(n2))), trackEffect(te3, r4);
  }
}
function trigger(e6, t5, n2, r4, o10, s4) {
  const i6 = ie2.get(e6);
  if (!i6)
    return;
  let a4 = [];
  if ("clear" === t5)
    a4 = [...i6.values()];
  else if ("length" === n2 && E(e6)) {
    const e7 = Number(r4);
    i6.forEach((t6, n3) => {
      ("length" === n3 || !isSymbol(n3) && n3 >= e7) && a4.push(t6);
    });
  } else
    switch (void 0 !== n2 && a4.push(i6.get(n2)), t5) {
      case "add":
        E(e6) ? isIntegerKey(n2) && a4.push(i6.get("length")) : (a4.push(i6.get(ae2)), isMap(e6) && a4.push(i6.get(le2)));
        break;
      case "delete":
        E(e6) || (a4.push(i6.get(ae2)), isMap(e6) && a4.push(i6.get(le2)));
        break;
      case "set":
        isMap(e6) && a4.push(i6.get(ae2));
    }
  pauseScheduling();
  for (const e7 of a4)
    e7 && triggerEffects(e7, 4);
  resetScheduling();
}
function createArrayInstrumentations() {
  const e6 = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t5) => {
    e6[t5] = function(...e7) {
      const n2 = toRaw(this);
      for (let e8 = 0, t6 = this.length; e8 < t6; e8++)
        track(n2, 0, e8 + "");
      const r4 = n2[t5](...e7);
      return -1 === r4 || false === r4 ? n2[t5](...e7.map(toRaw)) : r4;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((t5) => {
    e6[t5] = function(...e7) {
      pauseTracking(), pauseScheduling();
      const n2 = toRaw(this)[t5].apply(this, e7);
      return resetScheduling(), resetTracking(), n2;
    };
  }), e6;
}
function hasOwnProperty(e6) {
  isSymbol(e6) || (e6 = String(e6));
  const t5 = toRaw(this);
  return track(t5, 0, e6), t5.hasOwnProperty(e6);
}
function get(e6, t5, n2 = false, r4 = false) {
  const o10 = toRaw(e6 = e6.__v_raw), s4 = toRaw(t5);
  n2 || (hasChanged(t5, s4) && track(o10, 0, t5), track(o10, 0, s4));
  const { has: i6 } = getProto(o10), a4 = r4 ? toShallow : n2 ? toReadonly : toReactive;
  return i6.call(o10, t5) ? a4(e6.get(t5)) : i6.call(o10, s4) ? a4(e6.get(s4)) : void (e6 !== o10 && e6.get(t5));
}
function has(e6, t5 = false) {
  const n2 = this.__v_raw, r4 = toRaw(n2), o10 = toRaw(e6);
  return t5 || (hasChanged(e6, o10) && track(r4, 0, e6), track(r4, 0, o10)), e6 === o10 ? n2.has(e6) : n2.has(e6) || n2.has(o10);
}
function size(e6, t5 = false) {
  return e6 = e6.__v_raw, !t5 && track(toRaw(e6), 0, ae2), Reflect.get(e6, "size", e6);
}
function add(e6, t5 = false) {
  t5 || isShallow(e6) || isReadonly(e6) || (e6 = toRaw(e6));
  const n2 = toRaw(this);
  return getProto(n2).has.call(n2, e6) || (n2.add(e6), trigger(n2, "add", e6, e6)), this;
}
function set(e6, t5, n2 = false) {
  n2 || isShallow(t5) || isReadonly(t5) || (t5 = toRaw(t5));
  const r4 = toRaw(this), { has: o10, get: s4 } = getProto(r4);
  let i6 = o10.call(r4, e6);
  i6 || (e6 = toRaw(e6), i6 = o10.call(r4, e6));
  const a4 = s4.call(r4, e6);
  return r4.set(e6, t5), i6 ? hasChanged(t5, a4) && trigger(r4, "set", e6, t5) : trigger(r4, "add", e6, t5), this;
}
function deleteEntry(e6) {
  const t5 = toRaw(this), { has: n2, get: r4 } = getProto(t5);
  let o10 = n2.call(t5, e6);
  o10 || (e6 = toRaw(e6), o10 = n2.call(t5, e6)), r4 && r4.call(t5, e6);
  const s4 = t5.delete(e6);
  return o10 && trigger(t5, "delete", e6, void 0), s4;
}
function clear() {
  const e6 = toRaw(this), t5 = 0 !== e6.size, n2 = e6.clear();
  return t5 && trigger(e6, "clear", void 0, void 0), n2;
}
function createForEach(e6, t5) {
  return function(n2, r4) {
    const o10 = this, s4 = o10.__v_raw, i6 = toRaw(s4), a4 = t5 ? toShallow : e6 ? toReadonly : toReactive;
    return !e6 && track(i6, 0, ae2), s4.forEach((e7, t6) => n2.call(r4, a4(e7), a4(t6), o10));
  };
}
function createIterableMethod(e6, t5, n2) {
  return function(...r4) {
    const o10 = this.__v_raw, s4 = toRaw(o10), i6 = isMap(s4), a4 = "entries" === e6 || e6 === Symbol.iterator && i6, l3 = "keys" === e6 && i6, c3 = o10[e6](...r4), u4 = n2 ? toShallow : t5 ? toReadonly : toReactive;
    return !t5 && track(s4, 0, l3 ? le2 : ae2), { next() {
      const { value: e7, done: t6 } = c3.next();
      return t6 ? { value: e7, done: t6 } : { value: a4 ? [u4(e7[0]), u4(e7[1])] : u4(e7), done: t6 };
    }, [Symbol.iterator]() {
      return this;
    } };
  };
}
function createReadonlyMethod(e6) {
  return function(...t5) {
    return "delete" !== e6 && ("clear" === e6 ? void 0 : this);
  };
}
function createInstrumentations() {
  const e6 = { get(e7) {
    return get(this, e7);
  }, get size() {
    return size(this);
  }, has, add, set, delete: deleteEntry, clear, forEach: createForEach(false, false) }, t5 = { get(e7) {
    return get(this, e7, false, true);
  }, get size() {
    return size(this);
  }, has, add(e7) {
    return add.call(this, e7, true);
  }, set(e7, t6) {
    return set.call(this, e7, t6, true);
  }, delete: deleteEntry, clear, forEach: createForEach(false, true) }, n2 = { get(e7) {
    return get(this, e7, true);
  }, get size() {
    return size(this, true);
  }, has(e7) {
    return has.call(this, e7, true);
  }, add: createReadonlyMethod("add"), set: createReadonlyMethod("set"), delete: createReadonlyMethod("delete"), clear: createReadonlyMethod("clear"), forEach: createForEach(true, false) }, r4 = { get(e7) {
    return get(this, e7, true, true);
  }, get size() {
    return size(this, true);
  }, has(e7) {
    return has.call(this, e7, true);
  }, add: createReadonlyMethod("add"), set: createReadonlyMethod("set"), delete: createReadonlyMethod("delete"), clear: createReadonlyMethod("clear"), forEach: createForEach(true, true) };
  return ["keys", "values", "entries", Symbol.iterator].forEach((o10) => {
    e6[o10] = createIterableMethod(o10, false, false), n2[o10] = createIterableMethod(o10, true, false), t5[o10] = createIterableMethod(o10, false, true), r4[o10] = createIterableMethod(o10, true, true);
  }), [e6, n2, t5, r4];
}
function createInstrumentationGetter(e6, t5) {
  const n2 = t5 ? e6 ? ve2 : ye2 : e6 ? me2 : ge2;
  return (t6, r4, o10) => "__v_isReactive" === r4 ? !e6 : "__v_isReadonly" === r4 ? e6 : "__v_raw" === r4 ? t6 : Reflect.get(hasOwn(n2, r4) && r4 in t6 ? n2 : t6, r4, o10);
}
function reactive(e6) {
  return isReadonly(e6) ? e6 : createReactiveObject(e6, false, fe2, _e2, Se);
}
function shallowReactive(e6) {
  return createReactiveObject(e6, false, he2, be2, Re2);
}
function readonly(e6) {
  return createReactiveObject(e6, true, de2, ke2, we2);
}
function createReactiveObject(e6, t5, n2, r4, o10) {
  if (!isObject(e6))
    return e6;
  if (e6.__v_raw && (!t5 || !e6.__v_isReactive))
    return e6;
  const s4 = o10.get(e6);
  if (s4)
    return s4;
  const i6 = (a4 = e6).__v_skip || !Object.isExtensible(a4) ? 0 : function(e7) {
    switch (e7) {
      case "Object":
      case "Array":
        return 1;
      case "Map":
      case "Set":
      case "WeakMap":
      case "WeakSet":
        return 2;
      default:
        return 0;
    }
  }(toRawType(a4));
  var a4;
  if (0 === i6)
    return e6;
  const l3 = new Proxy(e6, 2 === i6 ? r4 : n2);
  return o10.set(e6, l3), l3;
}
function isReactive(e6) {
  return isReadonly(e6) ? isReactive(e6.__v_raw) : !(!e6 || !e6.__v_isReactive);
}
function isReadonly(e6) {
  return !(!e6 || !e6.__v_isReadonly);
}
function isShallow(e6) {
  return !(!e6 || !e6.__v_isShallow);
}
function isProxy(e6) {
  return !!e6 && !!e6.__v_raw;
}
function toRaw(e6) {
  const t5 = e6 && e6.__v_raw;
  return t5 ? toRaw(t5) : e6;
}
function trackRefValue(e6) {
  var t5;
  ne2 && te3 && (e6 = toRaw(e6), trackEffect(te3, null != (t5 = e6.dep) ? t5 : e6.dep = createDep(() => e6.dep = void 0, e6 instanceof ComputedRefImpl ? e6 : void 0)));
}
function triggerRefValue(e6, t5 = 4, n2, r4) {
  const o10 = (e6 = toRaw(e6)).dep;
  o10 && triggerEffects(o10, t5);
}
function isRef(e6) {
  return !(!e6 || true !== e6.__v_isRef);
}
function ref(e6) {
  return function(e7, t5) {
    if (isRef(e7))
      return e7;
    return new RefImpl(e7, t5);
  }(e6, false);
}
function unref(e6) {
  return isRef(e6) ? e6.value : e6;
}
function proxyRefs(e6) {
  return isReactive(e6) ? e6 : new Proxy(e6, xe2);
}
function toRef(e6, t5, n2) {
  return isRef(e6) ? e6 : isFunction(e6) ? new GetterRefImpl(e6) : isObject(e6) && arguments.length > 1 ? function(e7, t6, n3) {
    const r4 = e7[t6];
    return isRef(r4) ? r4 : new ObjectRefImpl(e7, t6, n3);
  }(e6, t5, n2) : ref(e6);
}
function callWithErrorHandling(e6, t5, n2, r4) {
  try {
    return r4 ? e6(...r4) : e6();
  } catch (e7) {
    handleError(e7, t5, n2);
  }
}
function callWithAsyncErrorHandling(e6, t5, n2, r4) {
  if (isFunction(e6)) {
    const o10 = callWithErrorHandling(e6, t5, n2, r4);
    return o10 && isPromise(o10) && o10.catch((e7) => {
      handleError(e7, t5, n2);
    }), o10;
  }
  if (E(e6)) {
    const o10 = [];
    for (let s4 = 0; s4 < e6.length; s4++)
      o10.push(callWithAsyncErrorHandling(e6[s4], t5, n2, r4));
    return o10;
  }
}
function handleError(e6, t5, n2, r4 = true) {
  t5 && t5.vnode;
  if (t5) {
    let r5 = t5.parent;
    const o10 = t5.proxy, s4 = `https://vuejs.org/error-reference/#runtime-${n2}`;
    for (; r5; ) {
      const t6 = r5.ec;
      if (t6) {
        for (let n3 = 0; n3 < t6.length; n3++)
          if (false === t6[n3](e6, o10, s4))
            return;
      }
      r5 = r5.parent;
    }
    const i6 = t5.appContext.config.errorHandler;
    if (i6)
      return pauseTracking(), callWithErrorHandling(i6, null, 10, [e6, o10, s4]), void resetTracking();
  }
  !function(e7) {
    console.error(e7);
  }(e6, 0, 0, r4);
}
function nextTick(e6) {
  const t5 = Me2 || He;
  return e6 ? t5.then(this ? e6.bind(this) : e6) : t5;
}
function queueJob(e6) {
  $e.length && $e.includes(e6, Ae2 && e6.allowRecurse ? Te + 1 : Te) || (null == e6.id ? $e.push(e6) : $e.splice(function(e7) {
    let t5 = Te + 1, n2 = $e.length;
    for (; t5 < n2; ) {
      const r4 = t5 + n2 >>> 1, o10 = $e[r4], s4 = getId(o10);
      s4 < e7 || s4 === e7 && o10.pre ? t5 = r4 + 1 : n2 = r4;
    }
    return t5;
  }(e6.id), 0, e6), queueFlush());
}
function queueFlush() {
  Ae2 || Oe || (Oe = true, Me2 = He.then(flushJobs));
}
function flushPreFlushCbs(e6, t5, n2 = Ae2 ? Te + 1 : 0) {
  for (; n2 < $e.length; n2++) {
    const t6 = $e[n2];
    if (t6 && t6.pre) {
      if (e6 && t6.id !== e6.uid)
        continue;
      $e.splice(n2, 1), n2--, t6();
    }
  }
}
function flushPostFlushCbs(e6) {
  if (Ee2.length) {
    const e7 = [...new Set(Ee2)].sort((e8, t5) => getId(e8) - getId(t5));
    if (Ee2.length = 0, Pe)
      return void Pe.push(...e7);
    for (Pe = e7, je = 0; je < Pe.length; je++) {
      const e8 = Pe[je];
      false !== e8.active && e8();
    }
    Pe = null, je = 0;
  }
}
function flushJobs(e6) {
  Oe = false, Ae2 = true, $e.sort(comparator);
  try {
    for (Te = 0; Te < $e.length; Te++) {
      const e7 = $e[Te];
      e7 && false !== e7.active && callWithErrorHandling(e7, e7.i, e7.i ? 15 : 14);
    }
  } finally {
    Te = 0, $e.length = 0, flushPostFlushCbs(), Ae2 = false, Me2 = null, ($e.length || Ee2.length) && flushJobs();
  }
}
function setCurrentRenderingInstance$1(e6) {
  const t5 = Ie;
  return Ie = e6, Ne2 = e6 && e6.type.__scopeId || null, t5;
}
function withCtx(e6, t5 = Ie, n2) {
  if (!t5)
    return e6;
  if (e6._n)
    return e6;
  const renderFnWithContext = (...n3) => {
    renderFnWithContext._d && setBlockTracking(-1);
    const r4 = setCurrentRenderingInstance$1(t5);
    let o10;
    try {
      o10 = e6(...n3);
    } finally {
      setCurrentRenderingInstance$1(r4), renderFnWithContext._d && setBlockTracking(1);
    }
    return o10;
  };
  return renderFnWithContext._n = true, renderFnWithContext._c = true, renderFnWithContext._d = true, renderFnWithContext;
}
function invokeDirectiveHook(e6, t5, n2, r4) {
  const o10 = e6.dirs, s4 = t5 && t5.dirs;
  for (let i6 = 0; i6 < o10.length; i6++) {
    const a4 = o10[i6];
    s4 && (a4.oldValue = s4[i6].value);
    let l3 = a4.dir[r4];
    l3 && (pauseTracking(), callWithAsyncErrorHandling(l3, n2, 8, [e6.el, a4, e6, t5]), resetTracking());
  }
}
function setTransitionHooks(e6, t5) {
  6 & e6.shapeFlag && e6.component ? setTransitionHooks(e6.component.subTree, t5) : 128 & e6.shapeFlag ? (e6.ssContent.transition = t5.clone(e6.ssContent), e6.ssFallback.transition = t5.clone(e6.ssFallback)) : e6.transition = t5;
}
function defineComponent(e6, t5) {
  return isFunction(e6) ? (() => $({ name: e6.name }, t5, { setup: e6 }))() : e6;
}
function defineAsyncComponent(e6) {
  isFunction(e6) && (e6 = { loader: e6 });
  const { loader: t5, loadingComponent: n2, errorComponent: r4, delay: o10 = 200, timeout: s4, suspensible: i6 = true, onError: a4 } = e6;
  let l3, c3 = null, u4 = 0;
  const load = () => {
    let e7;
    return c3 || (e7 = c3 = t5().catch((e8) => {
      if (e8 = e8 instanceof Error ? e8 : new Error(String(e8)), a4)
        return new Promise((t6, n3) => {
          a4(e8, () => t6((u4++, c3 = null, load())), () => n3(e8), u4 + 1);
        });
      throw e8;
    }).then((t6) => e7 !== c3 && c3 ? c3 : (t6 && (t6.__esModule || "Module" === t6[Symbol.toStringTag]) && (t6 = t6.default), l3 = t6, t6)));
  };
  return defineComponent({ name: "AsyncComponentWrapper", __asyncLoader: load, get __asyncResolved() {
    return l3;
  }, setup() {
    const e7 = gt;
    if (l3)
      return () => createInnerComp(l3, e7);
    const onError = (t7) => {
      c3 = null, handleError(t7, e7, 13, !r4);
    };
    if (i6 && e7.suspense || _t)
      return load().then((t7) => () => createInnerComp(t7, e7)).catch((e8) => (onError(e8), () => r4 ? createVNode(r4, { error: e8 }) : null));
    const t6 = ref(false), a5 = ref(), u5 = ref(!!o10);
    return o10 && setTimeout(() => {
      u5.value = false;
    }, o10), null != s4 && setTimeout(() => {
      if (!t6.value && !a5.value) {
        const e8 = new Error(`Async component timed out after ${s4}ms.`);
        onError(e8), a5.value = e8;
      }
    }, s4), load().then(() => {
      t6.value = true, e7.parent && isKeepAlive(e7.parent.vnode) && (e7.parent.effect.dirty = true, queueJob(e7.parent.update));
    }).catch((e8) => {
      onError(e8), a5.value = e8;
    }), () => t6.value && l3 ? createInnerComp(l3, e7) : a5.value && r4 ? createVNode(r4, { error: a5.value }) : n2 && !u5.value ? createVNode(n2) : void 0;
  } });
}
function createInnerComp(e6, t5) {
  const { ref: n2, props: r4, children: o10, ce: s4 } = t5.vnode, i6 = createVNode(e6, r4, o10);
  return i6.ref = n2, i6.ce = s4, delete t5.vnode.ce, i6;
}
function onActivated(e6, t5) {
  registerKeepAliveHook(e6, "a", t5);
}
function onDeactivated(e6, t5) {
  registerKeepAliveHook(e6, "da", t5);
}
function registerKeepAliveHook(e6, t5, n2 = gt) {
  const r4 = e6.__wdc || (e6.__wdc = () => {
    let t6 = n2;
    for (; t6; ) {
      if (t6.isDeactivated)
        return;
      t6 = t6.parent;
    }
    return e6();
  });
  if (injectHook(t5, r4, n2), n2) {
    let e7 = n2.parent;
    for (; e7 && e7.parent; )
      isKeepAlive(e7.parent.vnode) && injectToKeepAliveRoot(r4, t5, n2, e7), e7 = e7.parent;
  }
}
function injectToKeepAliveRoot(e6, t5, n2, r4) {
  const o10 = injectHook(t5, e6, r4, true);
  Be(() => {
    remove(r4[t5], o10);
  }, n2);
}
function injectHook(e6, t5, n2 = gt, r4 = false) {
  if (n2) {
    const o10 = n2[e6] || (n2[e6] = []), s4 = t5.__weh || (t5.__weh = (...r5) => {
      pauseTracking();
      const o11 = setCurrentInstance(n2), s5 = callWithAsyncErrorHandling(t5, n2, e6, r5);
      return o11(), resetTracking(), s5;
    });
    return r4 ? o10.unshift(s4) : o10.push(s4), s4;
  }
}
function onErrorCaptured(e6, t5 = gt) {
  injectHook("ec", e6, t5);
}
function resolveComponent(e6, t5) {
  return resolveAsset(Je, e6, true, t5) || e6;
}
function resolveDynamicComponent(e6) {
  return isString(e6) ? resolveAsset(Je, e6, false) || e6 : e6 || Ge;
}
function resolveAsset(e6, t5, n2 = true, r4 = false) {
  const o10 = Ie || gt;
  if (o10) {
    const n3 = o10.type;
    {
      const e7 = getComponentName(n3, false);
      if (e7 && (e7 === t5 || e7 === M(t5) || e7 === L(M(t5))))
        return n3;
    }
    const s4 = resolve(o10[e6] || n3[e6], t5) || resolve(o10.appContext[e6], t5);
    return !s4 && r4 ? n3 : s4;
  }
}
function resolve(e6, t5) {
  return e6 && (e6[t5] || e6[M(t5)] || e6[L(M(t5))]);
}
function normalizePropsOrEmits(e6) {
  return E(e6) ? e6.reduce((e7, t5) => (e7[t5] = null, e7), {}) : e6;
}
function applyOptions(e6) {
  const t5 = resolveMergedOptions(e6), n2 = e6.proxy, r4 = e6.ctx;
  Xe = false, t5.beforeCreate && callHook(t5.beforeCreate, e6, "bc");
  const { data: o10, computed: s4, methods: i6, watch: a4, provide: l3, inject: c3, created: u4, beforeMount: p3, mounted: f3, beforeUpdate: d3, updated: g3, activated: m6, deactivated: y4, beforeDestroy: v4, beforeUnmount: _5, destroyed: b4, unmounted: k4, render: S4, renderTracked: R4, renderTriggered: w4, errorCaptured: C4, serverPrefetch: x4, expose: A4, inheritAttrs: O4, components: $5, directives: T5, filters: P4 } = t5;
  if (c3 && function(e7, t6) {
    E(e7) && (e7 = normalizeInject(e7));
    for (const n3 in e7) {
      const r5 = e7[n3];
      let o11;
      o11 = isObject(r5) ? "default" in r5 ? inject(r5.from || n3, r5.default, true) : inject(r5.from || n3) : inject(r5), isRef(o11) ? Object.defineProperty(t6, n3, { enumerable: true, configurable: true, get: () => o11.value, set: (e8) => o11.value = e8 }) : t6[n3] = o11;
    }
  }(c3, r4, null), i6)
    for (const e7 in i6) {
      const t6 = i6[e7];
      isFunction(t6) && (r4[e7] = t6.bind(n2));
    }
  if (o10) {
    const t6 = o10.call(n2, n2);
    isObject(t6) && (e6.data = reactive(t6));
  }
  if (Xe = true, s4)
    for (const e7 in s4) {
      const t6 = s4[e7], o11 = isFunction(t6) ? t6.bind(n2, n2) : isFunction(t6.get) ? t6.get.bind(n2, n2) : NOOP, i7 = !isFunction(t6) && isFunction(t6.set) ? t6.set.bind(n2) : NOOP, a5 = computed({ get: o11, set: i7 });
      Object.defineProperty(r4, e7, { enumerable: true, configurable: true, get: () => a5.value, set: (e8) => a5.value = e8 });
    }
  if (a4)
    for (const e7 in a4)
      createWatcher(a4[e7], r4, n2, e7);
  if (l3) {
    const e7 = isFunction(l3) ? l3.call(n2) : l3;
    Reflect.ownKeys(e7).forEach((t6) => {
      provide(t6, e7[t6]);
    });
  }
  function registerLifecycleHook(e7, t6) {
    E(t6) ? t6.forEach((t7) => e7(t7.bind(n2))) : t6 && e7(t6.bind(n2));
  }
  if (u4 && callHook(u4, e6, "c"), registerLifecycleHook(Le2, p3), registerLifecycleHook(Ve, f3), registerLifecycleHook(Fe2, d3), registerLifecycleHook(De2, g3), registerLifecycleHook(onActivated, m6), registerLifecycleHook(onDeactivated, y4), registerLifecycleHook(onErrorCaptured, C4), registerLifecycleHook(qe, R4), registerLifecycleHook(We, w4), registerLifecycleHook(Ue, _5), registerLifecycleHook(Be, k4), registerLifecycleHook(ze, x4), E(A4))
    if (A4.length) {
      const t6 = e6.exposed || (e6.exposed = {});
      A4.forEach((e7) => {
        Object.defineProperty(t6, e7, { get: () => n2[e7], set: (t7) => n2[e7] = t7 });
      });
    } else
      e6.exposed || (e6.exposed = {});
  S4 && e6.render === NOOP && (e6.render = S4), null != O4 && (e6.inheritAttrs = O4), $5 && (e6.components = $5), T5 && (e6.directives = T5);
}
function callHook(e6, t5, n2) {
  callWithAsyncErrorHandling(E(e6) ? e6.map((e7) => e7.bind(t5.proxy)) : e6.bind(t5.proxy), t5, n2);
}
function createWatcher(e6, t5, n2, r4) {
  const o10 = r4.includes(".") ? createPathGetter(n2, r4) : () => n2[r4];
  if (isString(e6)) {
    const n3 = t5[e6];
    isFunction(n3) && watch(o10, n3);
  } else if (isFunction(e6))
    watch(o10, e6.bind(n2));
  else if (isObject(e6))
    if (E(e6))
      e6.forEach((e7) => createWatcher(e7, t5, n2, r4));
    else {
      const r5 = isFunction(e6.handler) ? e6.handler.bind(n2) : t5[e6.handler];
      isFunction(r5) && watch(o10, r5, e6);
    }
}
function resolveMergedOptions(e6) {
  const t5 = e6.type, { mixins: n2, extends: r4 } = t5, { mixins: o10, optionsCache: s4, config: { optionMergeStrategies: i6 } } = e6.appContext, a4 = s4.get(t5);
  let l3;
  return a4 ? l3 = a4 : o10.length || n2 || r4 ? (l3 = {}, o10.length && o10.forEach((e7) => mergeOptions(l3, e7, i6, true)), mergeOptions(l3, t5, i6)) : l3 = t5, isObject(t5) && s4.set(t5, l3), l3;
}
function mergeOptions(e6, t5, n2, r4 = false) {
  const { mixins: o10, extends: s4 } = t5;
  s4 && mergeOptions(e6, s4, n2, true), o10 && o10.forEach((t6) => mergeOptions(e6, t6, n2, true));
  for (const o11 in t5)
    if (r4 && "expose" === o11)
      ;
    else {
      const r5 = Ye[o11] || n2 && n2[o11];
      e6[o11] = r5 ? r5(e6[o11], t5[o11]) : t5[o11];
    }
  return e6;
}
function mergeDataFn(e6, t5) {
  return t5 ? e6 ? function() {
    return $(isFunction(e6) ? e6.call(this, this) : e6, isFunction(t5) ? t5.call(this, this) : t5);
  } : t5 : e6;
}
function normalizeInject(e6) {
  if (E(e6)) {
    const t5 = {};
    for (let n2 = 0; n2 < e6.length; n2++)
      t5[e6[n2]] = e6[n2];
    return t5;
  }
  return e6;
}
function mergeAsArray(e6, t5) {
  return e6 ? [...new Set([].concat(e6, t5))] : t5;
}
function mergeObjectOptions(e6, t5) {
  return e6 ? $(/* @__PURE__ */ Object.create(null), e6, t5) : t5;
}
function mergeEmitsOrPropsOptions(e6, t5) {
  return e6 ? E(e6) && E(t5) ? [.../* @__PURE__ */ new Set([...e6, ...t5])] : $(/* @__PURE__ */ Object.create(null), normalizePropsOrEmits(e6), normalizePropsOrEmits(null != t5 ? t5 : {})) : t5;
}
function createAppContext() {
  return { app: null, config: { isNativeTag: NO, performance: false, globalProperties: {}, optionMergeStrategies: {}, errorHandler: void 0, warnHandler: void 0, compilerOptions: {} }, mixins: [], components: {}, directives: {}, provides: /* @__PURE__ */ Object.create(null), optionsCache: /* @__PURE__ */ new WeakMap(), propsCache: /* @__PURE__ */ new WeakMap(), emitsCache: /* @__PURE__ */ new WeakMap() };
}
function createAppAPI(e6, t5) {
  return function(n2, r4 = null) {
    isFunction(n2) || (n2 = $({}, n2)), null == r4 || isObject(r4) || (r4 = null);
    const o10 = createAppContext(), s4 = /* @__PURE__ */ new WeakSet();
    let i6 = false;
    const a4 = o10.app = { _uid: Qe++, _component: n2, _props: r4, _container: null, _context: o10, _instance: null, version: kt, get config() {
      return o10.config;
    }, set config(e7) {
    }, use: (e7, ...t6) => (s4.has(e7) || (e7 && isFunction(e7.install) ? (s4.add(e7), e7.install(a4, ...t6)) : isFunction(e7) && (s4.add(e7), e7(a4, ...t6))), a4), mixin: (e7) => (__VUE_OPTIONS_API__ && (o10.mixins.includes(e7) || o10.mixins.push(e7)), a4), component: (e7, t6) => t6 ? (o10.components[e7] = t6, a4) : o10.components[e7], directive: (e7, t6) => t6 ? (o10.directives[e7] = t6, a4) : o10.directives[e7], mount(s5, l3, c3) {
      if (!i6) {
        const u4 = createVNode(n2, r4);
        return u4.appContext = o10, true === c3 ? c3 = "svg" : false === c3 && (c3 = void 0), l3 && t5 ? t5(u4, s5) : e6(u4, s5, c3), i6 = true, a4._container = s5, s5.__vue_app__ = a4, getComponentPublicInstance(u4.component);
      }
    }, unmount() {
      i6 && (e6(null, a4._container), delete a4._container.__vue_app__);
    }, provide: (e7, t6) => (o10.provides[e7] = t6, a4), runWithContext(e7) {
      const t6 = et;
      et = a4;
      try {
        return e7();
      } finally {
        et = t6;
      }
    } };
    return a4;
  };
}
function provide(e6, t5) {
  if (gt) {
    let n2 = gt.provides;
    const r4 = gt.parent && gt.parent.provides;
    r4 === n2 && (n2 = gt.provides = Object.create(r4)), n2[e6] = t5;
  } else
    ;
}
function inject(e6, t5, n2 = false) {
  const r4 = gt || Ie;
  if (r4 || et) {
    const o10 = et ? et._context.provides : r4 ? null == r4.parent ? r4.vnode.appContext && r4.vnode.appContext.provides : r4.parent.provides : void 0;
    if (o10 && e6 in o10)
      return o10[e6];
    if (arguments.length > 1)
      return n2 && isFunction(t5) ? t5.call(r4 && r4.proxy) : t5;
  }
}
function hasInjectionContext() {
  return !!(gt || Ie || et);
}
function setFullProps(e6, t5, n2, r4) {
  const [o10, s4] = e6.propsOptions;
  let i6, a4 = false;
  if (t5)
    for (let l3 in t5) {
      if (j2(l3))
        continue;
      const c3 = t5[l3];
      let u4;
      o10 && hasOwn(o10, u4 = M(l3)) ? s4 && s4.includes(u4) ? (i6 || (i6 = {}))[u4] = c3 : n2[u4] = c3 : isEmitListener(e6.emitsOptions, l3) || l3 in r4 && c3 === r4[l3] || (r4[l3] = c3, a4 = true);
    }
  if (s4) {
    const t6 = toRaw(n2), r5 = i6 || A;
    for (let i7 = 0; i7 < s4.length; i7++) {
      const a5 = s4[i7];
      n2[a5] = resolvePropValue(o10, t6, a5, r5[a5], e6, !hasOwn(r5, a5));
    }
  }
  return a4;
}
function resolvePropValue(e6, t5, n2, r4, o10, s4) {
  const i6 = e6[n2];
  if (null != i6) {
    const e7 = hasOwn(i6, "default");
    if (e7 && void 0 === r4) {
      const e8 = i6.default;
      if (i6.type !== Function && !i6.skipFactory && isFunction(e8)) {
        const { propsDefaults: s5 } = o10;
        if (n2 in s5)
          r4 = s5[n2];
        else {
          const i7 = setCurrentInstance(o10);
          r4 = s5[n2] = e8.call(null, t5), i7();
        }
      } else
        r4 = e8;
    }
    i6[0] && (s4 && !e7 ? r4 = false : !i6[1] || "" !== r4 && r4 !== N2(n2) || (r4 = true));
  }
  return r4;
}
function normalizePropsOptions(e6, t5, n2 = false) {
  const r4 = __VUE_OPTIONS_API__ && n2 ? nt : t5.propsCache, o10 = r4.get(e6);
  if (o10)
    return o10;
  const s4 = e6.props, i6 = {}, a4 = [];
  let l3 = false;
  if (__VUE_OPTIONS_API__ && !isFunction(e6)) {
    const extendProps = (e7) => {
      l3 = true;
      const [n3, r5] = normalizePropsOptions(e7, t5, true);
      $(i6, n3), r5 && a4.push(...r5);
    };
    !n2 && t5.mixins.length && t5.mixins.forEach(extendProps), e6.extends && extendProps(e6.extends), e6.mixins && e6.mixins.forEach(extendProps);
  }
  if (!s4 && !l3)
    return isObject(e6) && r4.set(e6, O), O;
  if (E(s4))
    for (let e7 = 0; e7 < s4.length; e7++) {
      const t6 = M(s4[e7]);
      validatePropName(t6) && (i6[t6] = A);
    }
  else if (s4)
    for (const e7 in s4) {
      const t6 = M(e7);
      if (validatePropName(t6)) {
        const n3 = s4[e7], r5 = i6[t6] = E(n3) || isFunction(n3) ? { type: n3 } : $({}, n3), o11 = r5.type;
        let l4 = false, c4 = true;
        if (E(o11))
          for (let e8 = 0; e8 < o11.length; ++e8) {
            const t7 = o11[e8], n4 = isFunction(t7) && t7.name;
            if ("Boolean" === n4) {
              l4 = true;
              break;
            }
            "String" === n4 && (c4 = false);
          }
        else
          l4 = isFunction(o11) && "Boolean" === o11.name;
        r5[0] = l4, r5[1] = c4, (l4 || hasOwn(r5, "default")) && a4.push(t6);
      }
    }
  const c3 = [i6, a4];
  return isObject(e6) && r4.set(e6, c3), c3;
}
function validatePropName(e6) {
  return "$" !== e6[0] && !j2(e6);
}
function setRef(e6, t5, n2, r4, o10 = false) {
  if (E(e6))
    return void e6.forEach((e7, s5) => setRef(e7, t5 && (E(t5) ? t5[s5] : t5), n2, r4, o10));
  if (isAsyncWrapper(r4) && !o10)
    return;
  const s4 = 4 & r4.shapeFlag ? getComponentPublicInstance(r4.component) : r4.el, i6 = o10 ? null : s4, { i: a4, r: l3 } = e6, c3 = t5 && t5.r, u4 = a4.refs === A ? a4.refs = {} : a4.refs, p3 = a4.setupState;
  if (null != c3 && c3 !== l3 && (isString(c3) ? (u4[c3] = null, hasOwn(p3, c3) && (p3[c3] = null)) : isRef(c3) && (c3.value = null)), isFunction(l3))
    callWithErrorHandling(l3, a4, 12, [i6, u4]);
  else {
    const t6 = isString(l3), r5 = isRef(l3);
    if (t6 || r5) {
      const doSet = () => {
        if (e6.f) {
          const n3 = t6 ? hasOwn(p3, l3) ? p3[l3] : u4[l3] : l3.value;
          o10 ? E(n3) && remove(n3, s4) : E(n3) ? n3.includes(s4) || n3.push(s4) : t6 ? (u4[l3] = [s4], hasOwn(p3, l3) && (p3[l3] = u4[l3])) : (l3.value = [s4], e6.k && (u4[e6.k] = l3.value));
        } else
          t6 ? (u4[l3] = i6, hasOwn(p3, l3) && (p3[l3] = i6)) : r5 && (l3.value = i6, e6.k && (u4[e6.k] = i6));
      };
      i6 ? (doSet.id = -1, queuePostRenderEffect(doSet, n2)) : doSet();
    }
  }
}
function createRenderer(e6) {
  return function(e7) {
    "boolean" != typeof __VUE_OPTIONS_API__ && (getGlobalThis().__VUE_OPTIONS_API__ = true), "boolean" != typeof __VUE_PROD_HYDRATION_MISMATCH_DETAILS__ && (getGlobalThis().__VUE_PROD_HYDRATION_MISMATCH_DETAILS__ = false);
    getGlobalThis().__VUE__ = true;
    const { insert: t5, remove: n2, patchProp: r4, createElement: o10, createText: s4, createComment: i6, setText: a4, setElementText: l3, parentNode: c3, nextSibling: u4, setScopeId: p3 = NOOP, insertStaticContent: f3 } = e7, patch = (e8, t6, n3, r5 = null, o11 = null, s5 = null, i7 = void 0, a5 = null, l4 = !!t6.dynamicChildren) => {
      if (e8 === t6)
        return;
      e8 && !isSameVNodeType(e8, t6) && (r5 = getNextHostNode(e8), unmount(e8, o11, s5, true), e8 = null), -2 === t6.patchFlag && (l4 = false, t6.dynamicChildren = null);
      const { type: c4, ref: u5, shapeFlag: p4 } = t6;
      switch (c4) {
        case at:
          processText(e8, t6, n3, r5);
          break;
        case lt:
          processCommentNode(e8, t6, n3, r5);
          break;
        case ct:
          null == e8 && mountStaticNode(t6, n3, r5, i7);
          break;
        case it:
          processFragment(e8, t6, n3, r5, o11, s5, i7, a5, l4);
          break;
        default:
          1 & p4 ? processElement(e8, t6, n3, r5, o11, s5, i7, a5, l4) : 6 & p4 ? processComponent(e8, t6, n3, r5, o11, s5, i7, a5, l4) : (64 & p4 || 128 & p4) && c4.process(e8, t6, n3, r5, o11, s5, i7, a5, l4, g3);
      }
      null != u5 && o11 && setRef(u5, e8 && e8.ref, s5, t6 || e8, !t6);
    }, processText = (e8, n3, r5, o11) => {
      if (null == e8)
        t5(n3.el = s4(n3.children), r5, o11);
      else {
        const t6 = n3.el = e8.el;
        n3.children !== e8.children && a4(t6, n3.children);
      }
    }, processCommentNode = (e8, n3, r5, o11) => {
      null == e8 ? t5(n3.el = i6(n3.children || ""), r5, o11) : n3.el = e8.el;
    }, mountStaticNode = (e8, t6, n3, r5) => {
      [e8.el, e8.anchor] = f3(e8.children, t6, n3, r5, e8.el, e8.anchor);
    }, moveStaticNode = ({ el: e8, anchor: n3 }, r5, o11) => {
      let s5;
      for (; e8 && e8 !== n3; )
        s5 = u4(e8), t5(e8, r5, o11), e8 = s5;
      t5(n3, r5, o11);
    }, removeStaticNode = ({ el: e8, anchor: t6 }) => {
      let r5;
      for (; e8 && e8 !== t6; )
        r5 = u4(e8), n2(e8), e8 = r5;
      n2(t6);
    }, processElement = (e8, t6, n3, r5, o11, s5, i7, a5, l4) => {
      "svg" === t6.type ? i7 = "svg" : "math" === t6.type && (i7 = "mathml"), null == e8 ? mountElement(t6, n3, r5, o11, s5, i7, a5, l4) : patchElement(e8, t6, o11, s5, i7, a5, l4);
    }, mountElement = (e8, n3, s5, i7, a5, c4, u5, p4) => {
      let f4, d4;
      const { props: g4, shapeFlag: m7, transition: y5, dirs: v4 } = e8;
      if (f4 = e8.el = o10(e8.type, c4, g4 && g4.is, g4), 8 & m7 ? l3(f4, e8.children) : 16 & m7 && mountChildren(e8.children, f4, null, i7, a5, resolveChildrenNamespace(e8, c4), u5, p4), v4 && invokeDirectiveHook(e8, null, i7, "created"), setScopeId(f4, e8, e8.scopeId, u5, i7), g4) {
        for (const e9 in g4)
          "value" === e9 || j2(e9) || r4(f4, e9, null, g4[e9], c4, i7);
        "value" in g4 && r4(f4, "value", null, g4.value, c4), (d4 = g4.onVnodeBeforeMount) && invokeVNodeHook(d4, i7, e8);
      }
      v4 && invokeDirectiveHook(e8, null, i7, "beforeMount");
      const _5 = function(e9, t6) {
        return (!e9 || e9 && !e9.pendingBranch) && t6 && !t6.persisted;
      }(a5, y5);
      _5 && y5.beforeEnter(f4), t5(f4, n3, s5), ((d4 = g4 && g4.onVnodeMounted) || _5 || v4) && queuePostRenderEffect(() => {
        d4 && invokeVNodeHook(d4, i7, e8), _5 && y5.enter(f4), v4 && invokeDirectiveHook(e8, null, i7, "mounted");
      }, a5);
    }, setScopeId = (e8, t6, n3, r5, o11) => {
      if (n3 && p3(e8, n3), r5)
        for (let t7 = 0; t7 < r5.length; t7++)
          p3(e8, r5[t7]);
      if (o11) {
        if (t6 === o11.subTree) {
          const t7 = o11.vnode;
          setScopeId(e8, t7, t7.scopeId, t7.slotScopeIds, o11.parent);
        }
      }
    }, mountChildren = (e8, t6, n3, r5, o11, s5, i7, a5, l4 = 0) => {
      for (let c4 = l4; c4 < e8.length; c4++) {
        const l5 = e8[c4] = a5 ? cloneIfMounted(e8[c4]) : normalizeVNode$1(e8[c4]);
        patch(null, l5, t6, n3, r5, o11, s5, i7, a5);
      }
    }, patchElement = (e8, t6, n3, o11, s5, i7, a5) => {
      const c4 = t6.el = e8.el;
      let { patchFlag: u5, dynamicChildren: p4, dirs: f4 } = t6;
      u5 |= 16 & e8.patchFlag;
      const d4 = e8.props || A, g4 = t6.props || A;
      let m7;
      if (n3 && toggleRecurse(n3, false), (m7 = g4.onVnodeBeforeUpdate) && invokeVNodeHook(m7, n3, t6, e8), f4 && invokeDirectiveHook(t6, e8, n3, "beforeUpdate"), n3 && toggleRecurse(n3, true), (d4.innerHTML && null == g4.innerHTML || d4.textContent && null == g4.textContent) && l3(c4, ""), p4 ? patchBlockChildren(e8.dynamicChildren, p4, c4, n3, o11, resolveChildrenNamespace(t6, s5), i7) : a5 || patchChildren(e8, t6, c4, null, n3, o11, resolveChildrenNamespace(t6, s5), i7, false), u5 > 0) {
        if (16 & u5)
          patchProps(c4, d4, g4, n3, s5);
        else if (2 & u5 && d4.class !== g4.class && r4(c4, "class", null, g4.class, s5), 4 & u5 && r4(c4, "style", d4.style, g4.style, s5), 8 & u5) {
          const e9 = t6.dynamicProps;
          for (let t7 = 0; t7 < e9.length; t7++) {
            const o12 = e9[t7], i8 = d4[o12], a6 = g4[o12];
            a6 === i8 && "value" !== o12 || r4(c4, o12, i8, a6, s5, n3);
          }
        }
        1 & u5 && e8.children !== t6.children && l3(c4, t6.children);
      } else
        a5 || null != p4 || patchProps(c4, d4, g4, n3, s5);
      ((m7 = g4.onVnodeUpdated) || f4) && queuePostRenderEffect(() => {
        m7 && invokeVNodeHook(m7, n3, t6, e8), f4 && invokeDirectiveHook(t6, e8, n3, "updated");
      }, o11);
    }, patchBlockChildren = (e8, t6, n3, r5, o11, s5, i7) => {
      for (let a5 = 0; a5 < t6.length; a5++) {
        const l4 = e8[a5], u5 = t6[a5], p4 = l4.el && (l4.type === it || !isSameVNodeType(l4, u5) || 70 & l4.shapeFlag) ? c3(l4.el) : n3;
        patch(l4, u5, p4, null, r5, o11, s5, i7, true);
      }
    }, patchProps = (e8, t6, n3, o11, s5) => {
      if (t6 !== n3) {
        if (t6 !== A)
          for (const i7 in t6)
            j2(i7) || i7 in n3 || r4(e8, i7, t6[i7], null, s5, o11);
        for (const i7 in n3) {
          if (j2(i7))
            continue;
          const a5 = n3[i7], l4 = t6[i7];
          a5 !== l4 && "value" !== i7 && r4(e8, i7, l4, a5, s5, o11);
        }
        "value" in n3 && r4(e8, "value", t6.value, n3.value, s5);
      }
    }, processFragment = (e8, n3, r5, o11, i7, a5, l4, c4, u5) => {
      const p4 = n3.el = e8 ? e8.el : s4(""), f4 = n3.anchor = e8 ? e8.anchor : s4("");
      let { patchFlag: d4, dynamicChildren: g4, slotScopeIds: m7 } = n3;
      m7 && (c4 = c4 ? c4.concat(m7) : m7), null == e8 ? (t5(p4, r5, o11), t5(f4, r5, o11), mountChildren(n3.children || [], r5, f4, i7, a5, l4, c4, u5)) : d4 > 0 && 64 & d4 && g4 && e8.dynamicChildren ? (patchBlockChildren(e8.dynamicChildren, g4, r5, i7, a5, l4, c4), (null != n3.key || i7 && n3 === i7.subTree) && traverseStaticChildren(e8, n3, true)) : patchChildren(e8, n3, r5, f4, i7, a5, l4, c4, u5);
    }, processComponent = (e8, t6, n3, r5, o11, s5, i7, a5, l4) => {
      t6.slotScopeIds = a5, null == e8 ? 512 & t6.shapeFlag ? o11.ctx.activate(t6, n3, r5, i7, l4) : mountComponent(t6, n3, r5, o11, s5, i7, l4) : updateComponent(e8, t6, l4);
    }, mountComponent = (e8, t6, n3, r5, o11, s5, i7) => {
      const a5 = e8.component = createComponentInstance$1(e8, r5, o11);
      if (isKeepAlive(e8) && (a5.ctx.renderer = g3), setupComponent$1(a5, false, i7), a5.asyncDep) {
        if (o11 && o11.registerDep(a5, setupRenderEffect, i7), !e8.el) {
          const e9 = a5.subTree = createVNode(lt);
          processCommentNode(null, e9, t6, n3);
        }
      } else
        setupRenderEffect(a5, e8, t6, n3, o11, s5, i7);
    }, updateComponent = (e8, t6, n3) => {
      const r5 = t6.component = e8.component;
      if (function(e9, t7, n4) {
        const { props: r6, children: o11, component: s5 } = e9, { props: i7, children: a5, patchFlag: l4 } = t7, c4 = s5.emitsOptions;
        if (t7.dirs || t7.transition)
          return true;
        if (!(n4 && l4 >= 0))
          return !(!o11 && !a5 || a5 && a5.$stable) || r6 !== i7 && (r6 ? !i7 || hasPropsChanged(r6, i7, c4) : !!i7);
        if (1024 & l4)
          return true;
        if (16 & l4)
          return r6 ? hasPropsChanged(r6, i7, c4) : !!i7;
        if (8 & l4) {
          const e10 = t7.dynamicProps;
          for (let t8 = 0; t8 < e10.length; t8++) {
            const n5 = e10[t8];
            if (i7[n5] !== r6[n5] && !isEmitListener(c4, n5))
              return true;
          }
        }
        return false;
      }(e8, t6, n3)) {
        if (r5.asyncDep && !r5.asyncResolved)
          return void updateComponentPreRender(r5, t6, n3);
        r5.next = t6, function(e9) {
          const t7 = $e.indexOf(e9);
          t7 > Te && $e.splice(t7, 1);
        }(r5.update), r5.effect.dirty = true, r5.update();
      } else
        t6.el = e8.el, r5.vnode = t6;
    }, setupRenderEffect = (e8, t6, n3, r5, o11, s5, i7) => {
      const componentUpdateFn = () => {
        if (e8.isMounted) {
          let { next: t7, bu: n4, u: r6, parent: a6, vnode: l5 } = e8;
          {
            const n5 = locateNonHydratedAsyncRoot(e8);
            if (n5)
              return t7 && (t7.el = l5.el, updateComponentPreRender(e8, t7, i7)), void n5.asyncDep.then(() => {
                e8.isUnmounted || componentUpdateFn();
              });
          }
          let u5, p4 = t7;
          toggleRecurse(e8, false), t7 ? (t7.el = l5.el, updateComponentPreRender(e8, t7, i7)) : t7 = l5, n4 && invokeArrayFns(n4), (u5 = t7.props && t7.props.onVnodeBeforeUpdate) && invokeVNodeHook(u5, a6, t7, l5), toggleRecurse(e8, true);
          const f4 = renderComponentRoot$1(e8), d4 = e8.subTree;
          e8.subTree = f4, patch(d4, f4, c3(d4.el), getNextHostNode(d4), e8, o11, s5), t7.el = f4.el, null === p4 && function({ vnode: e9, parent: t8 }, n5) {
            for (; t8; ) {
              const r7 = t8.subTree;
              if (r7.suspense && r7.suspense.activeBranch === e9 && (r7.el = e9.el), r7 !== e9)
                break;
              (e9 = t8.vnode).el = n5, t8 = t8.parent;
            }
          }(e8, f4.el), r6 && queuePostRenderEffect(r6, o11), (u5 = t7.props && t7.props.onVnodeUpdated) && queuePostRenderEffect(() => invokeVNodeHook(u5, a6, t7, l5), o11);
        } else {
          let i8;
          const { el: a6, props: l5 } = t6, { bm: c4, m: u5, parent: p4 } = e8, f4 = isAsyncWrapper(t6);
          if (toggleRecurse(e8, false), c4 && invokeArrayFns(c4), !f4 && (i8 = l5 && l5.onVnodeBeforeMount) && invokeVNodeHook(i8, p4, t6), toggleRecurse(e8, true), a6 && y4) {
            const hydrateSubTree = () => {
              e8.subTree = renderComponentRoot$1(e8), y4(a6, e8.subTree, e8, o11, null);
            };
            f4 ? t6.type.__asyncLoader().then(() => !e8.isUnmounted && hydrateSubTree()) : hydrateSubTree();
          } else {
            const i9 = e8.subTree = renderComponentRoot$1(e8);
            patch(null, i9, n3, r5, e8, o11, s5), t6.el = i9.el;
          }
          if (u5 && queuePostRenderEffect(u5, o11), !f4 && (i8 = l5 && l5.onVnodeMounted)) {
            const e9 = t6;
            queuePostRenderEffect(() => invokeVNodeHook(i8, p4, e9), o11);
          }
          (256 & t6.shapeFlag || p4 && isAsyncWrapper(p4.vnode) && 256 & p4.vnode.shapeFlag) && e8.a && queuePostRenderEffect(e8.a, o11), e8.isMounted = true, t6 = n3 = r5 = null;
        }
      }, a5 = e8.effect = new ReactiveEffect(componentUpdateFn, NOOP, () => queueJob(l4), e8.scope), l4 = e8.update = () => {
        a5.dirty && a5.run();
      };
      l4.i = e8, l4.id = e8.uid, toggleRecurse(e8, true), l4();
    }, updateComponentPreRender = (e8, t6, n3) => {
      t6.component = e8;
      const r5 = e8.vnode.props;
      e8.vnode = t6, e8.next = null, function(e9, t7, n4, r6) {
        const { props: o11, attrs: s5, vnode: { patchFlag: i7 } } = e9, a5 = toRaw(o11), [l4] = e9.propsOptions;
        let c4 = false;
        if (!(r6 || i7 > 0) || 16 & i7) {
          let r7;
          setFullProps(e9, t7, o11, s5) && (c4 = true);
          for (const s6 in a5)
            t7 && (hasOwn(t7, s6) || (r7 = N2(s6)) !== s6 && hasOwn(t7, r7)) || (l4 ? !n4 || void 0 === n4[s6] && void 0 === n4[r7] || (o11[s6] = resolvePropValue(l4, a5, s6, void 0, e9, true)) : delete o11[s6]);
          if (s5 !== a5)
            for (const e10 in s5)
              t7 && hasOwn(t7, e10) || (delete s5[e10], c4 = true);
        } else if (8 & i7) {
          const n5 = e9.vnode.dynamicProps;
          for (let r7 = 0; r7 < n5.length; r7++) {
            let i8 = n5[r7];
            if (isEmitListener(e9.emitsOptions, i8))
              continue;
            const u5 = t7[i8];
            if (l4)
              if (hasOwn(s5, i8))
                u5 !== s5[i8] && (s5[i8] = u5, c4 = true);
              else {
                const t8 = M(i8);
                o11[t8] = resolvePropValue(l4, a5, t8, u5, e9, false);
              }
            else
              u5 !== s5[i8] && (s5[i8] = u5, c4 = true);
          }
        }
        c4 && trigger(e9.attrs, "set", "");
      }(e8, t6.props, r5, n3), updateSlots(e8, t6.children, n3), pauseTracking(), flushPreFlushCbs(e8), resetTracking();
    }, patchChildren = (e8, t6, n3, r5, o11, s5, i7, a5, c4 = false) => {
      const u5 = e8 && e8.children, p4 = e8 ? e8.shapeFlag : 0, f4 = t6.children, { patchFlag: d4, shapeFlag: g4 } = t6;
      if (d4 > 0) {
        if (128 & d4)
          return void patchKeyedChildren(u5, f4, n3, r5, o11, s5, i7, a5, c4);
        if (256 & d4)
          return void patchUnkeyedChildren(u5, f4, n3, r5, o11, s5, i7, a5, c4);
      }
      8 & g4 ? (16 & p4 && unmountChildren(u5, o11, s5), f4 !== u5 && l3(n3, f4)) : 16 & p4 ? 16 & g4 ? patchKeyedChildren(u5, f4, n3, r5, o11, s5, i7, a5, c4) : unmountChildren(u5, o11, s5, true) : (8 & p4 && l3(n3, ""), 16 & g4 && mountChildren(f4, n3, r5, o11, s5, i7, a5, c4));
    }, patchUnkeyedChildren = (e8, t6, n3, r5, o11, s5, i7, a5, l4) => {
      t6 = t6 || O;
      const c4 = (e8 = e8 || O).length, u5 = t6.length, p4 = Math.min(c4, u5);
      let f4;
      for (f4 = 0; f4 < p4; f4++) {
        const r6 = t6[f4] = l4 ? cloneIfMounted(t6[f4]) : normalizeVNode$1(t6[f4]);
        patch(e8[f4], r6, n3, null, o11, s5, i7, a5, l4);
      }
      c4 > u5 ? unmountChildren(e8, o11, s5, true, false, p4) : mountChildren(t6, n3, r5, o11, s5, i7, a5, l4, p4);
    }, patchKeyedChildren = (e8, t6, n3, r5, o11, s5, i7, a5, l4) => {
      let c4 = 0;
      const u5 = t6.length;
      let p4 = e8.length - 1, f4 = u5 - 1;
      for (; c4 <= p4 && c4 <= f4; ) {
        const r6 = e8[c4], u6 = t6[c4] = l4 ? cloneIfMounted(t6[c4]) : normalizeVNode$1(t6[c4]);
        if (!isSameVNodeType(r6, u6))
          break;
        patch(r6, u6, n3, null, o11, s5, i7, a5, l4), c4++;
      }
      for (; c4 <= p4 && c4 <= f4; ) {
        const r6 = e8[p4], c5 = t6[f4] = l4 ? cloneIfMounted(t6[f4]) : normalizeVNode$1(t6[f4]);
        if (!isSameVNodeType(r6, c5))
          break;
        patch(r6, c5, n3, null, o11, s5, i7, a5, l4), p4--, f4--;
      }
      if (c4 > p4) {
        if (c4 <= f4) {
          const e9 = f4 + 1, p5 = e9 < u5 ? t6[e9].el : r5;
          for (; c4 <= f4; )
            patch(null, t6[c4] = l4 ? cloneIfMounted(t6[c4]) : normalizeVNode$1(t6[c4]), n3, p5, o11, s5, i7, a5, l4), c4++;
        }
      } else if (c4 > f4)
        for (; c4 <= p4; )
          unmount(e8[c4], o11, s5, true), c4++;
      else {
        const d4 = c4, g4 = c4, m7 = /* @__PURE__ */ new Map();
        for (c4 = g4; c4 <= f4; c4++) {
          const e9 = t6[c4] = l4 ? cloneIfMounted(t6[c4]) : normalizeVNode$1(t6[c4]);
          null != e9.key && m7.set(e9.key, c4);
        }
        let y5, v4 = 0;
        const _5 = f4 - g4 + 1;
        let b4 = false, k4 = 0;
        const S4 = new Array(_5);
        for (c4 = 0; c4 < _5; c4++)
          S4[c4] = 0;
        for (c4 = d4; c4 <= p4; c4++) {
          const r6 = e8[c4];
          if (v4 >= _5) {
            unmount(r6, o11, s5, true);
            continue;
          }
          let u6;
          if (null != r6.key)
            u6 = m7.get(r6.key);
          else
            for (y5 = g4; y5 <= f4; y5++)
              if (0 === S4[y5 - g4] && isSameVNodeType(r6, t6[y5])) {
                u6 = y5;
                break;
              }
          void 0 === u6 ? unmount(r6, o11, s5, true) : (S4[u6 - g4] = c4 + 1, u6 >= k4 ? k4 = u6 : b4 = true, patch(r6, t6[u6], n3, null, o11, s5, i7, a5, l4), v4++);
        }
        const R4 = b4 ? function(e9) {
          const t7 = e9.slice(), n4 = [0];
          let r6, o12, s6, i8, a6;
          const l5 = e9.length;
          for (r6 = 0; r6 < l5; r6++) {
            const l6 = e9[r6];
            if (0 !== l6) {
              if (o12 = n4[n4.length - 1], e9[o12] < l6) {
                t7[r6] = o12, n4.push(r6);
                continue;
              }
              for (s6 = 0, i8 = n4.length - 1; s6 < i8; )
                a6 = s6 + i8 >> 1, e9[n4[a6]] < l6 ? s6 = a6 + 1 : i8 = a6;
              l6 < e9[n4[s6]] && (s6 > 0 && (t7[r6] = n4[s6 - 1]), n4[s6] = r6);
            }
          }
          s6 = n4.length, i8 = n4[s6 - 1];
          for (; s6-- > 0; )
            n4[s6] = i8, i8 = t7[i8];
          return n4;
        }(S4) : O;
        for (y5 = R4.length - 1, c4 = _5 - 1; c4 >= 0; c4--) {
          const e9 = g4 + c4, p5 = t6[e9], f5 = e9 + 1 < u5 ? t6[e9 + 1].el : r5;
          0 === S4[c4] ? patch(null, p5, n3, f5, o11, s5, i7, a5, l4) : b4 && (y5 < 0 || c4 !== R4[y5] ? move(p5, n3, f5, 2) : y5--);
        }
      }
    }, move = (e8, n3, r5, o11, s5 = null) => {
      const { el: i7, type: a5, transition: l4, children: c4, shapeFlag: u5 } = e8;
      if (6 & u5)
        return void move(e8.component.subTree, n3, r5, o11);
      if (128 & u5)
        return void e8.suspense.move(n3, r5, o11);
      if (64 & u5)
        return void a5.move(e8, n3, r5, g3);
      if (a5 === it) {
        t5(i7, n3, r5);
        for (let e9 = 0; e9 < c4.length; e9++)
          move(c4[e9], n3, r5, o11);
        return void t5(e8.anchor, n3, r5);
      }
      if (a5 === ct)
        return void moveStaticNode(e8, n3, r5);
      if (2 !== o11 && 1 & u5 && l4)
        if (0 === o11)
          l4.beforeEnter(i7), t5(i7, n3, r5), queuePostRenderEffect(() => l4.enter(i7), s5);
        else {
          const { leave: e9, delayLeave: o12, afterLeave: s6 } = l4, remove22 = () => t5(i7, n3, r5), performLeave = () => {
            e9(i7, () => {
              remove22(), s6 && s6();
            });
          };
          o12 ? o12(i7, remove22, performLeave) : performLeave();
        }
      else
        t5(i7, n3, r5);
    }, unmount = (e8, t6, n3, r5 = false, o11 = false) => {
      const { type: s5, props: i7, ref: a5, children: l4, dynamicChildren: c4, shapeFlag: u5, patchFlag: p4, dirs: f4, cacheIndex: d4 } = e8;
      if (-2 === p4 && (o11 = false), null != a5 && setRef(a5, null, n3, e8, true), null != d4 && (t6.renderCache[d4] = void 0), 256 & u5)
        return void t6.ctx.deactivate(e8);
      const m7 = 1 & u5 && f4, y5 = !isAsyncWrapper(e8);
      let v4;
      if (y5 && (v4 = i7 && i7.onVnodeBeforeUnmount) && invokeVNodeHook(v4, t6, e8), 6 & u5)
        unmountComponent(e8.component, n3, r5);
      else {
        if (128 & u5)
          return void e8.suspense.unmount(n3, r5);
        m7 && invokeDirectiveHook(e8, null, t6, "beforeUnmount"), 64 & u5 ? e8.type.remove(e8, t6, n3, g3, r5) : c4 && !c4.hasOnce && (s5 !== it || p4 > 0 && 64 & p4) ? unmountChildren(c4, t6, n3, false, true) : (s5 === it && 384 & p4 || !o11 && 16 & u5) && unmountChildren(l4, t6, n3), r5 && remove2(e8);
      }
      (y5 && (v4 = i7 && i7.onVnodeUnmounted) || m7) && queuePostRenderEffect(() => {
        v4 && invokeVNodeHook(v4, t6, e8), m7 && invokeDirectiveHook(e8, null, t6, "unmounted");
      }, n3);
    }, remove2 = (e8) => {
      const { type: t6, el: r5, anchor: o11, transition: s5 } = e8;
      if (t6 === it)
        return void removeFragment(r5, o11);
      if (t6 === ct)
        return void removeStaticNode(e8);
      const performRemove = () => {
        n2(r5), s5 && !s5.persisted && s5.afterLeave && s5.afterLeave();
      };
      if (1 & e8.shapeFlag && s5 && !s5.persisted) {
        const { leave: t7, delayLeave: n3 } = s5, performLeave = () => t7(r5, performRemove);
        n3 ? n3(e8.el, performRemove, performLeave) : performLeave();
      } else
        performRemove();
    }, removeFragment = (e8, t6) => {
      let r5;
      for (; e8 !== t6; )
        r5 = u4(e8), n2(e8), e8 = r5;
      n2(t6);
    }, unmountComponent = (e8, t6, n3) => {
      const { bum: r5, scope: o11, update: s5, subTree: i7, um: a5, m: l4, a: c4 } = e8;
      invalidateMount(l4), invalidateMount(c4), r5 && invokeArrayFns(r5), o11.stop(), s5 && (s5.active = false, unmount(i7, e8, t6, n3)), a5 && queuePostRenderEffect(a5, t6), queuePostRenderEffect(() => {
        e8.isUnmounted = true;
      }, t6), t6 && t6.pendingBranch && !t6.isUnmounted && e8.asyncDep && !e8.asyncResolved && e8.suspenseId === t6.pendingId && (t6.deps--, 0 === t6.deps && t6.resolve());
    }, unmountChildren = (e8, t6, n3, r5 = false, o11 = false, s5 = 0) => {
      for (let i7 = s5; i7 < e8.length; i7++)
        unmount(e8[i7], t6, n3, r5, o11);
    }, getNextHostNode = (e8) => {
      if (6 & e8.shapeFlag)
        return getNextHostNode(e8.component.subTree);
      if (128 & e8.shapeFlag)
        return e8.suspense.next();
      const t6 = u4(e8.anchor || e8.el), n3 = t6 && t6[rt];
      return n3 ? u4(n3) : t6;
    };
    let d3 = false;
    const render = (e8, t6, n3) => {
      null == e8 ? t6._vnode && unmount(t6._vnode, null, null, true) : patch(t6._vnode || null, e8, t6, null, null, null, n3), t6._vnode = e8, d3 || (d3 = true, flushPreFlushCbs(), flushPostFlushCbs(), d3 = false);
    }, g3 = { p: patch, um: unmount, m: move, r: remove2, mt: mountComponent, mc: mountChildren, pc: patchChildren, pbc: patchBlockChildren, n: getNextHostNode, o: e7 };
    let m6, y4;
    return { render, hydrate: m6, createApp: createAppAPI(render, m6) };
  }(e6);
}
function resolveChildrenNamespace({ type: e6, props: t5 }, n2) {
  return "svg" === n2 && "foreignObject" === e6 || "mathml" === n2 && "annotation-xml" === e6 && t5 && t5.encoding && t5.encoding.includes("html") ? void 0 : n2;
}
function toggleRecurse({ effect: e6, update: t5 }, n2) {
  e6.allowRecurse = t5.allowRecurse = n2;
}
function traverseStaticChildren(e6, t5, n2 = false) {
  const r4 = e6.children, o10 = t5.children;
  if (E(r4) && E(o10))
    for (let e7 = 0; e7 < r4.length; e7++) {
      const t6 = r4[e7];
      let s4 = o10[e7];
      1 & s4.shapeFlag && !s4.dynamicChildren && ((s4.patchFlag <= 0 || 32 === s4.patchFlag) && (s4 = o10[e7] = cloneIfMounted(o10[e7]), s4.el = t6.el), n2 || -2 === s4.patchFlag || traverseStaticChildren(t6, s4)), s4.type === at && (s4.el = t6.el);
    }
}
function locateNonHydratedAsyncRoot(e6) {
  const t5 = e6.subTree.component;
  if (t5)
    return t5.asyncDep && !t5.asyncResolved ? t5 : locateNonHydratedAsyncRoot(t5);
}
function invalidateMount(e6) {
  if (e6)
    for (let t5 = 0; t5 < e6.length; t5++)
      e6[t5].active = false;
}
function watchEffect(e6, t5) {
  return doWatch(e6, null, t5);
}
function watch(e6, t5, n2) {
  return doWatch(e6, t5, n2);
}
function doWatch(e6, t5, { immediate: n2, deep: r4, flush: o10, once: s4, onTrack: i6, onTrigger: a4 } = A) {
  if (t5 && s4) {
    const e7 = t5;
    t5 = (...t6) => {
      e7(...t6), unwatch();
    };
  }
  const l3 = gt, reactiveGetter = (e7) => true === r4 ? e7 : traverse(e7, false === r4 ? 1 : void 0);
  let c3, u4, p3 = false, f3 = false;
  if (isRef(e6) ? (c3 = () => e6.value, p3 = isShallow(e6)) : isReactive(e6) ? (c3 = () => reactiveGetter(e6), p3 = true) : E(e6) ? (f3 = true, p3 = e6.some((e7) => isReactive(e7) || isShallow(e7)), c3 = () => e6.map((e7) => isRef(e7) ? e7.value : isReactive(e7) ? reactiveGetter(e7) : isFunction(e7) ? callWithErrorHandling(e7, l3, 2) : void 0)) : c3 = isFunction(e6) ? t5 ? () => callWithErrorHandling(e6, l3, 2) : () => (u4 && u4(), callWithAsyncErrorHandling(e6, l3, 3, [onCleanup])) : NOOP, t5 && r4) {
    const e7 = c3;
    c3 = () => traverse(e7());
  }
  let d3, onCleanup = (e7) => {
    u4 = y4.onStop = () => {
      callWithErrorHandling(e7, l3, 4), u4 = y4.onStop = void 0;
    };
  };
  if (_t) {
    if (onCleanup = NOOP, t5 ? n2 && callWithAsyncErrorHandling(t5, l3, 3, [c3(), f3 ? [] : void 0, onCleanup]) : c3(), "sync" !== o10)
      return NOOP;
    {
      const e7 = useSSRContext();
      d3 = e7.__watcherHandles || (e7.__watcherHandles = []);
    }
  }
  let g3 = f3 ? new Array(e6.length).fill(st) : st;
  const job = () => {
    if (y4.active && y4.dirty)
      if (t5) {
        const e7 = y4.run();
        (r4 || p3 || (f3 ? e7.some((e8, t6) => hasChanged(e8, g3[t6])) : hasChanged(e7, g3))) && (u4 && u4(), callWithAsyncErrorHandling(t5, l3, 3, [e7, g3 === st ? void 0 : f3 && g3[0] === st ? [] : g3, onCleanup]), g3 = e7);
      } else
        y4.run();
  };
  let m6;
  job.allowRecurse = !!t5, "sync" === o10 ? m6 = job : "post" === o10 ? m6 = () => queuePostRenderEffect(job, l3 && l3.suspense) : (job.pre = true, l3 && (job.id = l3.uid), m6 = () => queueJob(job));
  const y4 = new ReactiveEffect(c3, NOOP, m6), v4 = getCurrentScope(), unwatch = () => {
    y4.stop(), v4 && remove(v4.effects, y4);
  };
  return t5 ? n2 ? job() : g3 = y4.run() : "post" === o10 ? queuePostRenderEffect(y4.run.bind(y4), l3 && l3.suspense) : y4.run(), d3 && d3.push(unwatch), unwatch;
}
function instanceWatch(e6, t5, n2) {
  const r4 = this.proxy, o10 = isString(e6) ? e6.includes(".") ? createPathGetter(r4, e6) : () => r4[e6] : e6.bind(r4, r4);
  let s4;
  isFunction(t5) ? s4 = t5 : (s4 = t5.handler, n2 = t5);
  const i6 = setCurrentInstance(this), a4 = doWatch(o10, s4.bind(r4), n2);
  return i6(), a4;
}
function createPathGetter(e6, t5) {
  const n2 = t5.split(".");
  return () => {
    let t6 = e6;
    for (let e7 = 0; e7 < n2.length && t6; e7++)
      t6 = t6[n2[e7]];
    return t6;
  };
}
function traverse(e6, t5 = 1 / 0, n2) {
  if (t5 <= 0 || !isObject(e6) || e6.__v_skip)
    return e6;
  if ((n2 = n2 || /* @__PURE__ */ new Set()).has(e6))
    return e6;
  if (n2.add(e6), t5--, isRef(e6))
    traverse(e6.value, t5, n2);
  else if (E(e6))
    for (let r4 = 0; r4 < e6.length; r4++)
      traverse(e6[r4], t5, n2);
  else if (isSet(e6) || isMap(e6))
    e6.forEach((e7) => {
      traverse(e7, t5, n2);
    });
  else if (isPlainObject(e6)) {
    for (const r4 in e6)
      traverse(e6[r4], t5, n2);
    for (const r4 of Object.getOwnPropertySymbols(e6))
      Object.prototype.propertyIsEnumerable.call(e6, r4) && traverse(e6[r4], t5, n2);
  }
  return e6;
}
function emit(e6, t5, ...n2) {
  if (e6.isUnmounted)
    return;
  const r4 = e6.vnode.props || A;
  let o10 = n2;
  const s4 = t5.startsWith("update:"), i6 = s4 && getModelModifiers(r4, t5.slice(7));
  let a4;
  i6 && (i6.trim && (o10 = n2.map((e7) => isString(e7) ? e7.trim() : e7)), i6.number && (o10 = n2.map(looseToNumber)));
  let l3 = r4[a4 = V(t5)] || r4[a4 = V(M(t5))];
  !l3 && s4 && (l3 = r4[a4 = V(N2(t5))]), l3 && callWithAsyncErrorHandling(l3, e6, 6, o10);
  const c3 = r4[a4 + "Once"];
  if (c3) {
    if (e6.emitted) {
      if (e6.emitted[a4])
        return;
    } else
      e6.emitted = {};
    e6.emitted[a4] = true, callWithAsyncErrorHandling(c3, e6, 6, o10);
  }
}
function normalizeEmitsOptions(e6, t5, n2 = false) {
  const r4 = t5.emitsCache, o10 = r4.get(e6);
  if (void 0 !== o10)
    return o10;
  const s4 = e6.emits;
  let i6 = {}, a4 = false;
  if (__VUE_OPTIONS_API__ && !isFunction(e6)) {
    const extendEmits = (e7) => {
      const n3 = normalizeEmitsOptions(e7, t5, true);
      n3 && (a4 = true, $(i6, n3));
    };
    !n2 && t5.mixins.length && t5.mixins.forEach(extendEmits), e6.extends && extendEmits(e6.extends), e6.mixins && e6.mixins.forEach(extendEmits);
  }
  return s4 || a4 ? (E(s4) ? s4.forEach((e7) => i6[e7] = null) : $(i6, s4), isObject(e6) && r4.set(e6, i6), i6) : (isObject(e6) && r4.set(e6, null), null);
}
function isEmitListener(e6, t5) {
  return !(!e6 || !isOn(t5)) && (t5 = t5.slice(2).replace(/Once$/, ""), hasOwn(e6, t5[0].toLowerCase() + t5.slice(1)) || hasOwn(e6, N2(t5)) || hasOwn(e6, t5));
}
function renderComponentRoot$1(e6) {
  const { type: t5, vnode: n2, proxy: r4, withProxy: o10, propsOptions: [s4], slots: i6, attrs: a4, emit: l3, render: c3, renderCache: u4, props: p3, data: f3, setupState: d3, ctx: g3, inheritAttrs: m6 } = e6, y4 = setCurrentRenderingInstance$1(e6);
  let v4, _5;
  try {
    if (4 & n2.shapeFlag) {
      const e7 = o10 || r4, t6 = e7;
      v4 = normalizeVNode$1(c3.call(t6, e7, u4, p3, d3, f3, g3)), _5 = a4;
    } else {
      const e7 = t5;
      0, v4 = normalizeVNode$1(e7.length > 1 ? e7(p3, { attrs: a4, slots: i6, emit: l3 }) : e7(p3, null)), _5 = t5.props ? a4 : getFunctionalFallthrough(a4);
    }
  } catch (t6) {
    ut.length = 0, handleError(t6, e6, 1), v4 = createVNode(lt);
  }
  let b4 = v4;
  if (_5 && false !== m6) {
    const e7 = Object.keys(_5), { shapeFlag: t6 } = b4;
    e7.length && 7 & t6 && (s4 && e7.some(isModelListener) && (_5 = filterModelListeners(_5, s4)), b4 = cloneVNode(b4, _5, false, true));
  }
  return n2.dirs && (b4 = cloneVNode(b4, null, false, true), b4.dirs = b4.dirs ? b4.dirs.concat(n2.dirs) : n2.dirs), n2.transition && (b4.transition = n2.transition), v4 = b4, setCurrentRenderingInstance$1(y4), v4;
}
function hasPropsChanged(e6, t5, n2) {
  const r4 = Object.keys(t5);
  if (r4.length !== Object.keys(e6).length)
    return true;
  for (let o10 = 0; o10 < r4.length; o10++) {
    const s4 = r4[o10];
    if (t5[s4] !== e6[s4] && !isEmitListener(n2, s4))
      return true;
  }
  return false;
}
function setBlockTracking(e6) {
  ft += e6, e6 < 0 && pt && (pt.hasOnce = true);
}
function setupBlock(e6) {
  return e6.dynamicChildren = ft > 0 ? pt || O : null, ut.pop(), pt = ut[ut.length - 1] || null, ft > 0 && pt && pt.push(e6), e6;
}
function createElementBlock(e6, t5, n2, r4, o10, s4) {
  return setupBlock(createBaseVNode(e6, t5, n2, r4, o10, s4, true));
}
function isVNode(e6) {
  return !!e6 && true === e6.__v_isVNode;
}
function isSameVNodeType(e6, t5) {
  return e6.type === t5.type && e6.key === t5.key;
}
function createBaseVNode(e6, t5 = null, n2 = null, r4 = 0, o10 = null, s4 = e6 === it ? 0 : 1, i6 = false, a4 = false) {
  const l3 = { __v_isVNode: true, __v_skip: true, type: e6, props: t5, key: t5 && normalizeKey(t5), ref: t5 && normalizeRef(t5), scopeId: Ne2, slotScopeIds: null, children: n2, component: null, suspense: null, ssContent: null, ssFallback: null, dirs: null, transition: null, el: null, anchor: null, target: null, targetStart: null, targetAnchor: null, staticCount: 0, shapeFlag: s4, patchFlag: r4, dynamicProps: o10, dynamicChildren: null, appContext: null, ctx: Ie };
  return a4 ? (normalizeChildren(l3, n2), 128 & s4 && e6.normalize(l3)) : n2 && (l3.shapeFlag |= isString(n2) ? 8 : 16), ft > 0 && !i6 && pt && (l3.patchFlag > 0 || 6 & s4) && 32 !== l3.patchFlag && pt.push(l3), l3;
}
function cloneVNode(e6, t5, n2 = false, r4 = false) {
  const { props: o10, ref: s4, patchFlag: i6, children: a4, transition: l3 } = e6, c3 = t5 ? mergeProps(o10 || {}, t5) : o10, u4 = { __v_isVNode: true, __v_skip: true, type: e6.type, props: c3, key: c3 && normalizeKey(c3), ref: t5 && t5.ref ? n2 && s4 ? E(s4) ? s4.concat(normalizeRef(t5)) : [s4, normalizeRef(t5)] : normalizeRef(t5) : s4, scopeId: e6.scopeId, slotScopeIds: e6.slotScopeIds, children: a4, target: e6.target, targetStart: e6.targetStart, targetAnchor: e6.targetAnchor, staticCount: e6.staticCount, shapeFlag: e6.shapeFlag, patchFlag: t5 && e6.type !== it ? -1 === i6 ? 16 : 16 | i6 : i6, dynamicProps: e6.dynamicProps, dynamicChildren: e6.dynamicChildren, appContext: e6.appContext, dirs: e6.dirs, transition: l3, component: e6.component, suspense: e6.suspense, ssContent: e6.ssContent && cloneVNode(e6.ssContent), ssFallback: e6.ssFallback && cloneVNode(e6.ssFallback), el: e6.el, anchor: e6.anchor, ctx: e6.ctx, ce: e6.ce };
  return l3 && r4 && setTransitionHooks(u4, l3.clone(u4)), u4;
}
function createTextVNode(e6 = " ", t5 = 0) {
  return createVNode(at, null, e6, t5);
}
function normalizeVNode$1(e6) {
  return null == e6 || "boolean" == typeof e6 ? createVNode(lt) : E(e6) ? createVNode(it, null, e6.slice()) : "object" == typeof e6 ? cloneIfMounted(e6) : createVNode(at, null, String(e6));
}
function cloneIfMounted(e6) {
  return null === e6.el && -1 !== e6.patchFlag || e6.memo ? e6 : cloneVNode(e6);
}
function normalizeChildren(e6, t5) {
  let n2 = 0;
  const { shapeFlag: r4 } = e6;
  if (null == t5)
    t5 = null;
  else if (E(t5))
    n2 = 16;
  else if ("object" == typeof t5) {
    if (65 & r4) {
      const n3 = t5.default;
      return void (n3 && (n3._c && (n3._d = false), normalizeChildren(e6, n3()), n3._c && (n3._d = true)));
    }
    {
      n2 = 32;
      const r5 = t5._;
      r5 || isInternalObject(t5) ? 3 === r5 && Ie && (1 === Ie.slots._ ? t5._ = 1 : (t5._ = 2, e6.patchFlag |= 1024)) : t5._ctx = Ie;
    }
  } else
    isFunction(t5) ? (t5 = { default: t5, _ctx: Ie }, n2 = 32) : (t5 = String(t5), 64 & r4 ? (n2 = 16, t5 = [createTextVNode(t5)]) : n2 = 8);
  e6.children = t5, e6.shapeFlag |= n2;
}
function mergeProps(...e6) {
  const t5 = {};
  for (let n2 = 0; n2 < e6.length; n2++) {
    const r4 = e6[n2];
    for (const e7 in r4)
      if ("class" === e7)
        t5.class !== r4.class && (t5.class = normalizeClass([t5.class, r4.class]));
      else if ("style" === e7)
        t5.style = normalizeStyle([t5.style, r4.style]);
      else if (isOn(e7)) {
        const n3 = t5[e7], o10 = r4[e7];
        !o10 || n3 === o10 || E(n3) && n3.includes(o10) || (t5[e7] = n3 ? [].concat(n3, o10) : o10);
      } else
        "" !== e7 && (t5[e7] = r4[e7]);
  }
  return t5;
}
function invokeVNodeHook(e6, t5, n2, r4 = null) {
  callWithAsyncErrorHandling(e6, t5, 7, [n2, r4]);
}
function createComponentInstance$1(e6, t5, n2) {
  const r4 = e6.type, o10 = (t5 ? t5.appContext : e6.appContext) || dt, s4 = { uid: ht++, vnode: e6, type: r4, parent: t5, appContext: o10, root: null, next: null, subTree: null, effect: null, update: null, scope: new EffectScope(true), render: null, proxy: null, exposed: null, exposeProxy: null, withProxy: null, provides: t5 ? t5.provides : Object.create(o10.provides), accessCache: null, renderCache: [], components: null, directives: null, propsOptions: normalizePropsOptions(r4, o10), emitsOptions: normalizeEmitsOptions(r4, o10), emit: null, emitted: null, propsDefaults: A, inheritAttrs: r4.inheritAttrs, ctx: A, data: A, props: A, attrs: A, slots: A, refs: A, setupState: A, setupContext: null, suspense: n2, suspenseId: n2 ? n2.pendingId : 0, asyncDep: null, asyncResolved: false, isMounted: false, isUnmounted: false, isDeactivated: false, bc: null, c: null, bm: null, m: null, bu: null, u: null, um: null, bum: null, da: null, a: null, rtg: null, rtc: null, ec: null, sp: null };
  return s4.ctx = { _: s4 }, s4.root = t5 ? t5.root : s4, s4.emit = emit.bind(null, s4), e6.ce && e6.ce(s4), s4;
}
function isStatefulComponent(e6) {
  return 4 & e6.vnode.shapeFlag;
}
function setupComponent$1(e6, t5 = false, n2 = false) {
  t5 && yt(t5);
  const { props: r4, children: o10 } = e6.vnode, s4 = isStatefulComponent(e6);
  !function(e7, t6, n3, r5 = false) {
    const o11 = {}, s5 = createInternalObject();
    e7.propsDefaults = /* @__PURE__ */ Object.create(null), setFullProps(e7, t6, o11, s5);
    for (const t7 in e7.propsOptions[0])
      t7 in o11 || (o11[t7] = void 0);
    n3 ? e7.props = r5 ? o11 : shallowReactive(o11) : e7.type.props ? e7.props = o11 : e7.props = s5, e7.attrs = s5;
  }(e6, r4, s4, t5), initSlots(e6, o10, n2);
  const i6 = s4 ? function(e7, t6) {
    const n3 = e7.type;
    e7.accessCache = /* @__PURE__ */ Object.create(null), e7.proxy = new Proxy(e7.ctx, Ze);
    const { setup: r5 } = n3;
    if (r5) {
      const n4 = e7.setupContext = r5.length > 1 ? function(e8) {
        const expose = (t7) => {
          e8.exposed = t7 || {};
        };
        return { attrs: new Proxy(e8.attrs, bt), slots: e8.slots, emit: e8.emit, expose };
      }(e7) : null, o11 = setCurrentInstance(e7);
      pauseTracking();
      const s5 = callWithErrorHandling(r5, e7, 0, [e7.props, n4]);
      if (resetTracking(), o11(), isPromise(s5)) {
        if (s5.then(unsetCurrentInstance, unsetCurrentInstance), t6)
          return s5.then((n5) => {
            handleSetupResult(e7, n5, t6);
          }).catch((t7) => {
            handleError(t7, e7, 0);
          });
        e7.asyncDep = s5;
      } else
        handleSetupResult(e7, s5, t6);
    } else
      finishComponentSetup(e7, t6);
  }(e6, t5) : void 0;
  return t5 && yt(false), i6;
}
function handleSetupResult(e6, t5, n2) {
  isFunction(t5) ? e6.type.__ssrInlineRender ? e6.ssrRender = t5 : e6.render = t5 : isObject(t5) && (e6.setupState = proxyRefs(t5)), finishComponentSetup(e6, n2);
}
function finishComponentSetup(e6, t5, n2) {
  const r4 = e6.type;
  if (!e6.render) {
    if (!t5 && vt && !r4.render) {
      const t6 = r4.template || resolveMergedOptions(e6).template;
      if (t6) {
        const { isCustomElement: n3, compilerOptions: o10 } = e6.appContext.config, { delimiters: s4, compilerOptions: i6 } = r4, a4 = $($({ isCustomElement: n3, delimiters: s4 }, o10), i6);
        r4.render = vt(t6, a4);
      }
    }
    e6.render = r4.render || NOOP;
  }
  if (__VUE_OPTIONS_API__) {
    const t6 = setCurrentInstance(e6);
    pauseTracking();
    try {
      applyOptions(e6);
    } finally {
      resetTracking(), t6();
    }
  }
}
function getComponentPublicInstance(e6) {
  return e6.exposed ? e6.exposeProxy || (e6.exposeProxy = new Proxy(proxyRefs((t5 = e6.exposed, Object.isExtensible(t5) && def(t5, "__v_skip", true), t5)), { get: (t6, n2) => n2 in t6 ? t6[n2] : n2 in Ke ? Ke[n2](e6) : void 0, has: (e7, t6) => t6 in e7 || t6 in Ke })) : e6.proxy;
  var t5;
}
function getComponentName(e6, t5 = true) {
  return isFunction(e6) ? e6.displayName || e6.name : e6.name || t5 && e6.__name;
}
function h(e6, t5, n2) {
  const r4 = arguments.length;
  return 2 === r4 ? isObject(t5) && !E(t5) ? isVNode(t5) ? createVNode(e6, null, [t5]) : createVNode(e6, t5) : createVNode(e6, null, t5) : (r4 > 3 ? n2 = Array.prototype.slice.call(arguments, 2) : 3 === r4 && isVNode(n2) && (n2 = [n2]), createVNode(e6, t5, n2));
}
function setStyle(e6, t5, n2) {
  if (E(n2))
    n2.forEach((n3) => setStyle(e6, t5, n3));
  else if (null == n2 && (n2 = ""), t5.startsWith("--"))
    e6.setProperty(t5, n2);
  else {
    const r4 = function(e7, t6) {
      const n3 = Ht[t6];
      if (n3)
        return n3;
      let r5 = M(t6);
      if ("filter" !== r5 && r5 in e7)
        return Ht[t6] = r5;
      r5 = L(r5);
      for (let n4 = 0; n4 < jt.length; n4++) {
        const o10 = jt[n4] + r5;
        if (o10 in e7)
          return Ht[t6] = o10;
      }
      return t6;
    }(e6, t5);
    Pt.test(n2) ? e6.setProperty(N2(r4), n2.replace(Pt, ""), "important") : e6[r4] = n2;
  }
}
function patchAttr(e6, t5, n2, r4, o10, s4 = J(t5)) {
  r4 && t5.startsWith("xlink:") ? null == n2 ? e6.removeAttributeNS(Mt, t5.slice(6, t5.length)) : e6.setAttributeNS(Mt, t5, n2) : null == n2 || s4 && !includeBooleanAttr(n2) ? e6.removeAttribute(t5) : e6.setAttribute(t5, s4 ? "" : isSymbol(n2) ? String(n2) : n2);
}
function patchEvent(e6, t5, n2, r4, o10 = null) {
  const s4 = e6[It] || (e6[It] = {}), i6 = s4[t5];
  if (r4 && i6)
    i6.value = r4;
  else {
    const [n3, a4] = function(e7) {
      let t6;
      if (Nt.test(e7)) {
        let n5;
        for (t6 = {}; n5 = e7.match(Nt); )
          e7 = e7.slice(0, e7.length - n5[0].length), t6[n5[0].toLowerCase()] = true;
      }
      const n4 = ":" === e7[2] ? e7.slice(3) : N2(e7.slice(2));
      return [n4, t6];
    }(t5);
    if (r4) {
      const i7 = s4[t5] = function(e7, t6) {
        const invoker = (e8) => {
          if (e8._vts) {
            if (e8._vts <= invoker.attached)
              return;
          } else
            e8._vts = Date.now();
          callWithAsyncErrorHandling(function(e9, t7) {
            if (E(t7)) {
              const n4 = e9.stopImmediatePropagation;
              return e9.stopImmediatePropagation = () => {
                n4.call(e9), e9._stopped = true;
              }, t7.map((e10) => (t8) => !t8._stopped && e10 && e10(t8));
            }
            return t7;
          }(e8, invoker.value), t6, 5, [e8]);
        };
        return invoker.value = e7, invoker.attached = getNow(), invoker;
      }(r4, o10);
      !function(e7, t6, n4, r5) {
        e7.addEventListener(t6, n4, r5);
      }(e6, n3, i7, a4);
    } else
      i6 && (!function(e7, t6, n4, r5) {
        e7.removeEventListener(t6, n4, r5);
      }(e6, n3, i6, a4), s4[t5] = void 0);
  }
}
function ssrRenderAttrs(e6, t5) {
  let n2 = "";
  for (const o10 in e6) {
    if (Ut(o10) || isOn(o10) || "textarea" === t5 && "value" === o10)
      continue;
    const s4 = e6[o10];
    n2 += "class" === o10 ? ` class="${r4 = s4, escapeHtml$1(normalizeClass(r4))}"` : "style" === o10 ? ` style="${ssrRenderStyle(s4)}"` : ssrRenderDynamicAttr(o10, s4, t5);
  }
  var r4;
  return n2;
}
function ssrRenderDynamicAttr(e6, t5, n2) {
  if (!function(e7) {
    if (null == e7)
      return false;
    const t6 = typeof e7;
    return "string" === t6 || "number" === t6 || "boolean" === t6;
  }(t5))
    return "";
  const r4 = n2 && (n2.indexOf("-") > 0 || z2(n2)) ? e6 : X2[e6] || e6.toLowerCase();
  return G(r4) ? includeBooleanAttr(t5) ? ` ${r4}` : "" : function(e7) {
    if (Z.hasOwnProperty(e7))
      return Z[e7];
    const t6 = K.test(e7);
    return t6 && console.error(`unsafe attribute name: ${e7}`), Z[e7] = !t6;
  }(r4) ? "" === t5 ? ` ${r4}` : ` ${r4}="${escapeHtml$1(t5)}"` : (console.warn(`[@vue/server-renderer] Skipped rendering unsafe attribute name: ${r4}`), "");
}
function ssrRenderStyle(e6) {
  if (!e6)
    return "";
  if (isString(e6))
    return escapeHtml$1(e6);
  return escapeHtml$1(function(e7) {
    let t5 = "";
    if (!e7 || isString(e7))
      return t5;
    for (const n2 in e7) {
      const r4 = e7[n2];
      (isString(r4) || "number" == typeof r4) && (t5 += `${n2.startsWith("--") ? n2 : N2(n2)}:${r4};`);
    }
    return t5;
  }(normalizeStyle(e6)));
}
function ssrRenderComponent(e6, t5 = null, n2 = null, r4 = null, o10) {
  return renderComponentVNode(createVNode(e6, t5, n2), r4, o10);
}
function ssrInterpolate(e6) {
  return escapeHtml$1(toDisplayString(e6));
}
async function ssrRenderSuspense(e6, { default: t5 }) {
  t5 ? t5() : e6("<!---->");
}
function createBuffer() {
  let e6 = false;
  const t5 = [];
  return { getBuffer: () => t5, push(n2) {
    const r4 = isString(n2);
    e6 && r4 ? t5[t5.length - 1] += n2 : (t5.push(n2), e6 = r4, (isPromise(n2) || E(n2) && n2.hasAsync) && (t5.hasAsync = true));
  } };
}
function renderComponentVNode(e6, t5 = null, n2) {
  const r4 = Bt(e6, t5, null), o10 = Wt(r4, true), s4 = isPromise(o10), i6 = r4.sp;
  if (s4 || i6) {
    let e7 = s4 ? o10 : Promise.resolve();
    return i6 && (e7 = e7.then(() => Promise.all(i6.map((e8) => e8.call(r4.proxy)))).catch(NOOP)), e7.then(() => renderComponentSubTree(r4, n2));
  }
  return renderComponentSubTree(r4, n2);
}
function renderComponentSubTree(e6, t5) {
  const n2 = e6.type, { getBuffer: r4, push: o10 } = createBuffer();
  if (isFunction(n2)) {
    let r5 = qt(e6);
    if (!n2.props)
      for (const t6 in e6.attrs)
        t6.startsWith("data-v-") && ((r5.props || (r5.props = {}))[t6] = "");
    renderVNode(o10, e6.subTree = r5, e6, t5);
  } else {
    e6.render && e6.render !== NOOP || e6.ssrRender || n2.ssrRender || !isString(n2.template) || (n2.ssrRender = function() {
      throw new Error("On-the-fly template compilation is not supported in the ESM build of @vue/server-renderer. All templates must be pre-compiled into render functions.");
    }(n2.template));
    for (const t6 of e6.scope.effects)
      t6.computed && (t6.computed._dirty = true, t6.computed._cacheable = true);
    const r5 = e6.ssrRender || n2.ssrRender;
    if (r5) {
      let n3 = false !== e6.inheritAttrs ? e6.attrs : void 0, s4 = false, i6 = e6;
      for (; ; ) {
        const e7 = i6.vnode.scopeId;
        e7 && (s4 || (n3 = { ...n3 }, s4 = true), n3[e7] = "");
        const t6 = i6.parent;
        if (!t6 || !t6.subTree || t6.subTree !== i6.vnode)
          break;
        i6 = t6;
      }
      if (t5) {
        s4 || (n3 = { ...n3 });
        const e7 = t5.trim().split(" ");
        for (let t6 = 0; t6 < e7.length; t6++)
          n3[e7[t6]] = "";
      }
      const a4 = zt(e6);
      try {
        r5(e6.proxy, o10, e6, n3, e6.props, e6.setupState, e6.data, e6.ctx);
      } finally {
        zt(a4);
      }
    } else
      e6.render && e6.render !== NOOP ? renderVNode(o10, e6.subTree = qt(e6), e6, t5) : (n2.name || n2.__file, o10("<!---->"));
  }
  return r4();
}
function renderVNode(e6, t5, n2, r4) {
  const { type: o10, shapeFlag: s4, children: i6 } = t5;
  switch (o10) {
    case at:
      e6(escapeHtml$1(i6));
      break;
    case lt:
      e6(i6 ? `<!--${a4 = i6, a4.replace(Q2, "")}-->` : "<!---->");
      break;
    case ct:
      e6(i6);
      break;
    case it:
      t5.slotScopeIds && (r4 = (r4 ? r4 + " " : "") + t5.slotScopeIds.join(" ")), e6("<!--[-->"), renderVNodeChildren(e6, i6, n2, r4), e6("<!--]-->");
      break;
    default:
      1 & s4 ? function(e7, t6, n3, r5) {
        const o11 = t6.type;
        let { props: s5, children: i7, shapeFlag: a5, scopeId: l3, dirs: c3 } = t6, u4 = `<${o11}`;
        c3 && (s5 = function(e8, t7, n4) {
          const r6 = [];
          for (let t8 = 0; t8 < n4.length; t8++) {
            const o12 = n4[t8], { dir: { getSSRProps: s6 } } = o12;
            if (s6) {
              const t9 = s6(o12, e8);
              t9 && r6.push(t9);
            }
          }
          return mergeProps(t7 || {}, ...r6);
        }(t6, s5, c3));
        s5 && (u4 += ssrRenderAttrs(s5, o11));
        l3 && (u4 += ` ${l3}`);
        let p3 = n3, f3 = t6;
        for (; p3 && f3 === p3.subTree; )
          f3 = p3.vnode, f3.scopeId && (u4 += ` ${f3.scopeId}`), p3 = p3.parent;
        r5 && (u4 += ` ${r5}`);
        if (e7(u4 + ">"), !W(o11)) {
          let t7 = false;
          s5 && (s5.innerHTML ? (t7 = true, e7(s5.innerHTML)) : s5.textContent ? (t7 = true, e7(escapeHtml$1(s5.textContent))) : "textarea" === o11 && s5.value && (t7 = true, e7(escapeHtml$1(s5.value)))), t7 || (8 & a5 ? e7(escapeHtml$1(i7)) : 16 & a5 && renderVNodeChildren(e7, i7, n3, r5)), e7(`</${o11}>`);
        }
      }(e6, t5, n2, r4) : 6 & s4 ? e6(renderComponentVNode(t5, n2, r4)) : 64 & s4 ? function(e7, t6, n3, r5) {
        const o11 = t6.props && t6.props.to, s5 = t6.props && t6.props.disabled;
        if (!o11)
          return [];
        if (!isString(o11))
          return [];
        !function(e8, t7, n4, r6, o12) {
          e8("<!--teleport start-->");
          const s6 = o12.appContext.provides[ot], i7 = s6.__teleportBuffers || (s6.__teleportBuffers = {}), a5 = i7[n4] || (i7[n4] = []), l3 = a5.length;
          let c3;
          if (r6)
            t7(e8), c3 = "<!--teleport start anchor--><!--teleport anchor-->";
          else {
            const { getBuffer: e9, push: n5 } = createBuffer();
            n5("<!--teleport start anchor-->"), t7(n5), n5("<!--teleport anchor-->"), c3 = e9();
          }
          a5.splice(l3, 0, c3), e8("<!--teleport end-->");
        }(e7, (e8) => {
          renderVNodeChildren(e8, t6.children, n3, r5);
        }, o11, s5 || "" === s5, n3);
      }(e6, t5, n2, r4) : 128 & s4 && renderVNode(e6, t5.ssContent, n2, r4);
  }
  var a4;
}
function renderVNodeChildren(e6, t5, n2, r4) {
  for (let o10 = 0; o10 < t5.length; o10++)
    renderVNode(e6, Jt(t5[o10]), n2, r4);
}
function nestedUnrollBuffer(e6, t5, n2) {
  if (!e6.hasAsync)
    return t5 + unrollBufferSync$1(e6);
  let r4 = t5;
  for (let t6 = n2; t6 < e6.length; t6 += 1) {
    const n3 = e6[t6];
    if (isString(n3)) {
      r4 += n3;
      continue;
    }
    if (isPromise(n3))
      return n3.then((n4) => (e6[t6] = n4, nestedUnrollBuffer(e6, r4, t6)));
    const o10 = nestedUnrollBuffer(n3, r4, 0);
    if (isPromise(o10))
      return o10.then((n4) => (e6[t6] = n4, nestedUnrollBuffer(e6, "", t6)));
    r4 = o10;
  }
  return r4;
}
function unrollBuffer$1(e6) {
  return nestedUnrollBuffer(e6, "", 0);
}
function unrollBufferSync$1(e6) {
  let t5 = "";
  for (let n2 = 0; n2 < e6.length; n2++) {
    let r4 = e6[n2];
    isString(r4) ? t5 += r4 : t5 += unrollBufferSync$1(r4);
  }
  return t5;
}
async function renderToString(e6, t5 = {}) {
  if (Gt(e6))
    return renderToString(createApp({ render: () => e6 }), t5);
  const n2 = createVNode(e6._component, e6._props);
  n2.appContext = e6._context, e6.provide(ot, t5);
  const r4 = await renderComponentVNode(n2), o10 = await unrollBuffer$1(r4);
  if (await async function(e7) {
    if (e7.__teleportBuffers) {
      e7.teleports = e7.teleports || {};
      for (const t6 in e7.__teleportBuffers)
        e7.teleports[t6] = await unrollBuffer$1(await Promise.all([e7.__teleportBuffers[t6]]));
    }
  }(t5), t5.__watcherHandles)
    for (const e7 of t5.__watcherHandles)
      e7();
  return o10;
}
function hashCode(e6) {
  let t5 = 9;
  for (let n2 = 0; n2 < e6.length; )
    t5 = Math.imul(t5 ^ e6.charCodeAt(n2++), 9 ** 9);
  return (65536 + (t5 ^ t5 >>> 9)).toString(16).substring(1, 8).toLowerCase();
}
function resolveTitleTemplate(e6, t5) {
  return null == e6 ? t5 || null : "function" == typeof e6 ? e6(t5) : e6;
}
function normaliseStyleClassProps(e6, t5) {
  const n2 = "class" === e6 ? " " : ";";
  return "object" != typeof t5 || Array.isArray(t5) || (t5 = Object.entries(t5).filter(([, e7]) => e7).map(([t6, n3]) => "style" === e6 ? `${t6}:${n3}` : t6)), String(Array.isArray(t5) ? t5.join(n2) : t5)?.split(n2).filter((e7) => e7.trim()).filter(Boolean).join(n2);
}
async function normaliseProps(e6, t5) {
  for (const n2 of Object.keys(e6))
    if (["class", "style"].includes(n2))
      e6[n2] = normaliseStyleClassProps(n2, e6[n2]);
    else if (e6[n2] instanceof Promise && (e6[n2] = await e6[n2]), !t5 && !en.includes(n2)) {
      const t6 = String(e6[n2]), r4 = n2.startsWith("data-");
      "true" === t6 || "" === t6 ? e6[n2] = !r4 || "true" : e6[n2] || (r4 && "false" === t6 ? e6[n2] = "false" : delete e6[n2]);
    }
  return e6;
}
async function normaliseEntryTags(e6) {
  const t5 = [];
  return Object.entries(e6.resolvedInput).filter(([e7, t6]) => void 0 !== t6 && Yt.includes(e7)).forEach(([n2, r4]) => {
    const o10 = function(e7) {
      return Array.isArray(e7) ? e7 : [e7];
    }(r4);
    t5.push(...o10.map((t6) => async function(e7, t7, n3) {
      const r5 = { tag: e7, props: await normaliseProps("object" != typeof t7 || "function" == typeof t7 || t7 instanceof Promise ? { [["script", "noscript", "style"].includes(e7) ? "innerHTML" : "textContent"]: t7 } : { ...t7 }, ["templateParams", "titleTemplate"].includes(e7)) };
      return en.forEach((e8) => {
        const t8 = void 0 !== r5.props[e8] ? r5.props[e8] : n3[e8];
        void 0 !== t8 && (["innerHTML", "textContent", "children"].includes(e8) && !Zt.includes(r5.tag) || (r5["children" === e8 ? "innerHTML" : e8] = t8), delete r5.props[e8]);
      }), r5.props.body && (r5.tagPosition = "bodyClose", delete r5.props.body), "script" === r5.tag && "object" == typeof r5.innerHTML && (r5.innerHTML = JSON.stringify(r5.innerHTML), r5.props.type = r5.props.type || "application/json"), Array.isArray(r5.props.content) ? r5.props.content.map((e8) => ({ ...r5, props: { ...r5.props, content: e8 } })) : r5;
    }(n2, t6, e6)).flat());
  }), (await Promise.all(t5)).flat().filter(Boolean).map((t6, n2) => (t6._e = e6._i, e6.mode && (t6._m = e6.mode), t6._p = (e6._i << tn) + n2, t6));
}
function tagWeight(e6) {
  let t5 = 100;
  const n2 = e6.tagPriority;
  return "number" == typeof n2 ? n2 : ("meta" === e6.tag ? ("content-security-policy" === e6.props["http-equiv"] && (t5 = -30), e6.props.charset && (t5 = -20), "viewport" === e6.props.name && (t5 = -15)) : "link" === e6.tag && "preconnect" === e6.props.rel ? t5 = 20 : e6.tag in nn && (t5 = nn[e6.tag]), "string" == typeof n2 && n2 in rn ? t5 + rn[n2] : t5);
}
function processTemplateParams(e6, t5, n2) {
  if ("string" != typeof e6 || !e6.includes("%"))
    return e6;
  let r4 = e6;
  try {
    r4 = decodeURI(e6);
  } catch {
  }
  return (r4.match(/%(\w+\.+\w+)|%(\w+)/g) || []).sort().reverse().forEach((n3) => {
    const r5 = function(e7) {
      let n4;
      return n4 = ["s", "pageTitle"].includes(e7) ? t5.pageTitle : e7.includes(".") ? e7.split(".").reduce((e8, t6) => e8 && e8[t6] || void 0, t5) : t5[e7], void 0 !== n4 && (n4 || "").replace(/"/g, '\\"');
    }(n3.slice(1));
    "string" == typeof r5 && (e6 = e6.replace(new RegExp(`\\${n3}(\\W|$)`, "g"), (e7, t6) => `${r5}${t6}`).trim());
  }), e6.includes(an) && (e6.endsWith(an) && (e6 = e6.slice(0, -10).trim()), e6.startsWith(an) && (e6 = e6.slice(10).trim()), e6 = processTemplateParams(e6 = e6.replace(new RegExp(`\\${an}\\s*\\${an}`, "g"), an), { separator: n2 }, n2)), e6;
}
function encodeAttribute(e6) {
  return String(e6).replace(/"/g, "&quot;");
}
function propsToString(e6) {
  const t5 = [];
  for (const [n2, r4] of Object.entries(e6))
    false !== r4 && null !== r4 && t5.push(true === r4 ? n2 : `${n2}="${encodeAttribute(r4)}"`);
  return `${t5.length > 0 ? " " : ""}${t5.join(" ")}`;
}
function tagToString(e6) {
  const t5 = propsToString(e6.props), n2 = `<${e6.tag}${t5}>`;
  if (!Zt.includes(e6.tag))
    return Kt.includes(e6.tag) ? n2 : `${n2}</${e6.tag}>`;
  let r4 = String(e6.innerHTML || "");
  return e6.textContent && (r4 = String(e6.textContent).replace(/[&<>"'/]/g, (e7) => {
    switch (e7) {
      case "&":
        return "&amp;";
      case "<":
        return "&lt;";
      case ">":
        return "&gt;";
      case '"':
        return "&quot;";
      case "'":
        return "&#x27;";
      case "/":
        return "&#x2F;";
      default:
        return e7;
    }
  })), Kt.includes(e6.tag) ? n2 : `${n2}${r4}</${e6.tag}>`;
}
async function renderSSRHead(e6, t5) {
  const n2 = { shouldRender: true };
  if (await e6.hooks.callHook("ssr:beforeRender", n2), !n2.shouldRender)
    return { headTags: "", bodyTags: "", bodyTagsOpen: "", htmlAttrs: "", bodyAttrs: "" };
  const r4 = { tags: await e6.resolveTags() };
  await e6.hooks.callHook("ssr:render", r4);
  const o10 = function(e7) {
    const t6 = { htmlAttrs: {}, bodyAttrs: {}, tags: { head: [], bodyClose: [], bodyOpen: [] } };
    for (const n3 of e7)
      "htmlAttrs" !== n3.tag && "bodyAttrs" !== n3.tag ? t6.tags[n3.tagPosition || "head"].push(tagToString(n3)) : t6[n3.tag] = { ...t6[n3.tag], ...n3.props };
    return { headTags: t6.tags.head.join("\n"), bodyTags: t6.tags.bodyClose.join("\n"), bodyTagsOpen: t6.tags.bodyOpen.join("\n"), htmlAttrs: propsToString(t6.htmlAttrs), bodyAttrs: propsToString(t6.bodyAttrs) };
  }(r4.tags), s4 = { tags: r4.tags, html: o10 };
  return await e6.hooks.callHook("ssr:rendered", s4), s4.html;
}
function createServerHead$1(e6 = {}) {
  return vn = function(e7 = {}) {
    const t5 = createHooks();
    t5.addHooks(e7.hooks || {}), e7.document = e7.document || void 0;
    const n2 = !e7.document, updated = () => {
      i6.dirty = true, t5.callHook("entries:updated", i6);
    };
    let r4 = 0, o10 = [];
    const s4 = [], i6 = { plugins: s4, dirty: false, resolvedOptions: e7, hooks: t5, headEntries: () => o10, use(e8) {
      const r5 = "function" == typeof e8 ? e8(i6) : e8;
      r5.key && s4.some((e9) => e9.key === r5.key) || (s4.push(r5), filterMode(r5.mode, n2) && t5.addHooks(r5.hooks || {}));
    }, push(e8, s5) {
      delete s5?.head;
      const a4 = { _i: r4++, input: e8, ...s5 };
      return filterMode(a4.mode, n2) && (o10.push(a4), updated()), { dispose() {
        o10 = o10.filter((e9) => e9._i !== a4._i), t5.callHook("entries:updated", i6), updated();
      }, patch(e9) {
        o10 = o10.map((t6) => (t6._i === a4._i && (t6.input = a4.input = e9), t6)), updated();
      } };
    }, async resolveTags() {
      const e8 = { tags: [], entries: [...o10] };
      await t5.callHook("entries:resolve", e8);
      for (const n3 of e8.entries) {
        const r5 = n3.resolvedInput || n3.input;
        if (n3.resolvedInput = await (n3.transform ? n3.transform(r5) : r5), n3.resolvedInput)
          for (const r6 of await normaliseEntryTags(n3)) {
            const o11 = { tag: r6, entry: n3, resolvedOptions: i6.resolvedOptions };
            await t5.callHook("tag:normalise", o11), e8.tags.push(o11.tag);
          }
      }
      return await t5.callHook("tags:beforeResolve", e8), await t5.callHook("tags:resolve", e8), await t5.callHook("tags:afterResolve", e8), e8.tags;
    }, ssr: n2 };
    return [cn, un, EventHandlersPlugin, dn, hn, TemplateParamsPlugin, mn, yn, ...e7?.plugins || []].forEach((e8) => i6.use(e8)), i6.hooks.callHook("init", i6), i6;
  }(e6);
}
function filterMode(e6, t5) {
  return !e6 || "server" === e6 && t5 || "client" === e6 && !t5;
}
function getActiveHead() {
  return vn;
}
function resolveUnrefHeadInput2(e6, t5 = "") {
  if (e6 instanceof Promise)
    return e6;
  const n2 = "function" == typeof (r4 = e6) ? r4() : unref(r4);
  var r4;
  return e6 && n2 ? Array.isArray(n2) ? n2.map((e7) => resolveUnrefHeadInput2(e7, t5)) : "object" == typeof n2 ? Object.fromEntries(Object.entries(n2).map(([e7, t6]) => "titleTemplate" === e7 || e7.startsWith("on") ? [e7, unref(t6)] : [e7, resolveUnrefHeadInput2(t6, e7)])) : n2 : n2;
}
function createServerHead(e6 = {}) {
  const t5 = createServerHead$1(e6);
  return t5.use(kn), t5.install = function(e7) {
    return { install(t6) {
      bn && (t6.config.globalProperties.$unhead = e7, t6.config.globalProperties.$head = e7, t6.provide(Sn, e7));
    } }.install;
  }(t5), t5;
}
function lazyCachedFunction(e6) {
  let t5 = null;
  return () => (null === t5 && (t5 = e6().catch((e7) => {
    throw t5 = null, e7;
  })), t5);
}
function normalizeChunks(e6) {
  return e6.filter(Boolean).map((e7) => e7.trim());
}
function joinTags(e6) {
  return e6.join("");
}
function joinAttrs(e6) {
  return 0 === e6.length ? "" : " " + e6.join(" ");
}
function renderPayloadJsonScript(e6) {
  const t5 = e6.data ? stringify(e6.data, e6.ssrContext._payloadReducers) : "", n2 = { type: "application/json", id: e6.id, innerHTML: t5, "data-ssr": !e6.ssrContext.noSSR };
  return e6.src && (n2["data-src"] = e6.src), [n2, { innerHTML: `window.__NUXT__={};window.__NUXT__.config=${uneval(e6.ssrContext.config)}` }];
}
function splitPayload(e6) {
  const { data: t5, prerenderedAt: n2, ...r4 } = e6.payload;
  return { initial: { ...r4, prerenderedAt: n2 }, payload: { data: t5, prerenderedAt: n2 } };
}
var m, DevalueError, y, v, _, b, k, S, R, w, C, x, A, O, NOOP, NO, isOn, isModelListener, $, remove, T, hasOwn, E, isMap, isSet, isFunction, isString, isSymbol, isObject, isPromise, P, toTypeString, toRawType, isPlainObject, isIntegerKey, j2, cacheStringFunction, H, M, I, N2, L, V, hasChanged, invokeArrayFns, def, looseToNumber, F, getGlobalThis, D, U, B, z2, W, q2, J, G, K, Z, X2, Y, Q2, isRef$1, toDisplayString, replacer, stringifySymbol, ee2, te3, EffectScope, ReactiveEffect, ne2, re2, oe2, se2, createDep, ie2, ae2, le2, ce2, ue2, pe2, BaseReactiveHandler, MutableReactiveHandler, ReadonlyReactiveHandler, fe2, de2, he2, toShallow, getProto, ge2, me2, ye2, ve2, _e2, be2, ke2, Se, Re2, we2, Ce2, toReactive, toReadonly, ComputedRefImpl, RefImpl, xe2, ObjectRefImpl, GetterRefImpl, Ae2, Oe, $e, Te, Ee2, Pe, je, He, Me2, getId, comparator, Ie, Ne2, isAsyncWrapper, isKeepAlive, createHook, Le2, Ve, Fe2, De2, Ue, Be, ze, We, qe, Je, Ge, getPublicInstance, Ke, hasSetupBinding, Ze, Xe, Ye, Qe, et, tt, createInternalObject, isInternalObject, nt, isInternalKey, normalizeSlotValue, normalizeSlot, normalizeObjectSlots, normalizeVNodeSlots, assignSlots, initSlots, updateSlots, rt, queuePostRenderEffect, ot, useSSRContext, st, getModelModifiers, getFunctionalFallthrough, filterModelListeners, it, at, lt, ct, ut, pt, ft, normalizeKey, normalizeRef, createVNode, dt, ht, gt, getCurrentInstance, mt, yt, setCurrentInstance, unsetCurrentInstance, vt, _t, bt, computed, kt, St, Rt, wt, Ct, xt, At, Ot, $t, Tt, Et, Pt, jt, Ht, Mt, It, Nt, Lt, Vt, getNow, isNativeOn, Ft, Dt, createApp, Ut, Bt, zt, Wt, qt, Jt, Gt, Kt, Zt, Xt, Yt, Qt, en, tn, nn, rn, on, sn, an, ln, cn, un, pn, EventHandlersPlugin, fn, dn, hn, gn, TemplateParamsPlugin, mn, yn, vn, _n, bn, kn, Sn, Rn, wn, Cn, xn, getClientManifest, An, On, $n, Tn, En, Pn, jn, Hn, Mn;
var init_renderer = __esm({
  ".wrangler/tmp/pages-WENPGt/chunks/routes/renderer.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    init_runtime();
    globalThis._importMeta_ = globalThis._importMeta_ || { url: "file:///_entry.js", env: {} };
    m = { "<": "\\u003C", "\\": "\\\\", "\b": "\\b", "\f": "\\f", "\n": "\\n", "\r": "\\r", "	": "\\t", "\u2028": "\\u2028", "\u2029": "\\u2029" };
    DevalueError = class extends Error {
      constructor(e6, t5) {
        super(e6), this.name = "DevalueError", this.path = t5.join("");
      }
    };
    y = Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
    v = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_$";
    _ = /[<\b\f\n\r\t\0\u2028\u2029]/g;
    b = /^(?:do|if|in|for|int|let|new|try|var|byte|case|char|else|enum|goto|long|this|void|with|await|break|catch|class|const|final|float|short|super|throw|while|yield|delete|double|export|import|native|return|switch|throws|typeof|boolean|default|extends|finally|package|private|abstract|continue|debugger|function|volatile|interface|protected|transient|implements|instanceof|synchronized)$/;
    k = -1;
    S = -2;
    R = -3;
    w = -4;
    C = -5;
    x = -6;
    A = {};
    O = [];
    NOOP = () => {
    };
    NO = () => false;
    isOn = (e6) => 111 === e6.charCodeAt(0) && 110 === e6.charCodeAt(1) && (e6.charCodeAt(2) > 122 || e6.charCodeAt(2) < 97);
    isModelListener = (e6) => e6.startsWith("onUpdate:");
    $ = Object.assign;
    remove = (e6, t5) => {
      const n2 = e6.indexOf(t5);
      n2 > -1 && e6.splice(n2, 1);
    };
    T = Object.prototype.hasOwnProperty;
    hasOwn = (e6, t5) => T.call(e6, t5);
    E = Array.isArray;
    isMap = (e6) => "[object Map]" === toTypeString(e6);
    isSet = (e6) => "[object Set]" === toTypeString(e6);
    isFunction = (e6) => "function" == typeof e6;
    isString = (e6) => "string" == typeof e6;
    isSymbol = (e6) => "symbol" == typeof e6;
    isObject = (e6) => null !== e6 && "object" == typeof e6;
    isPromise = (e6) => (isObject(e6) || isFunction(e6)) && isFunction(e6.then) && isFunction(e6.catch);
    P = Object.prototype.toString;
    toTypeString = (e6) => P.call(e6);
    toRawType = (e6) => toTypeString(e6).slice(8, -1);
    isPlainObject = (e6) => "[object Object]" === toTypeString(e6);
    isIntegerKey = (e6) => isString(e6) && "NaN" !== e6 && "-" !== e6[0] && "" + parseInt(e6, 10) === e6;
    j2 = makeMap(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted");
    cacheStringFunction = (e6) => {
      const t5 = /* @__PURE__ */ Object.create(null);
      return (n2) => t5[n2] || (t5[n2] = e6(n2));
    };
    H = /-(\w)/g;
    M = cacheStringFunction((e6) => e6.replace(H, (e7, t5) => t5 ? t5.toUpperCase() : ""));
    I = /\B([A-Z])/g;
    N2 = cacheStringFunction((e6) => e6.replace(I, "-$1").toLowerCase());
    L = cacheStringFunction((e6) => e6.charAt(0).toUpperCase() + e6.slice(1));
    V = cacheStringFunction((e6) => e6 ? `on${L(e6)}` : "");
    hasChanged = (e6, t5) => !Object.is(e6, t5);
    invokeArrayFns = (e6, ...t5) => {
      for (let n2 = 0; n2 < e6.length; n2++)
        e6[n2](...t5);
    };
    def = (e6, t5, n2, r4 = false) => {
      Object.defineProperty(e6, t5, { configurable: true, enumerable: false, writable: r4, value: n2 });
    };
    looseToNumber = (e6) => {
      const t5 = parseFloat(e6);
      return isNaN(t5) ? e6 : t5;
    };
    getGlobalThis = () => F || (F = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof global ? global : {});
    D = /;(?![^(]*\))/g;
    U = /:([^]+)/;
    B = /\/\*[^]*?\*\//g;
    z2 = makeMap("svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view");
    W = makeMap("area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr");
    q2 = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly";
    J = makeMap(q2);
    G = makeMap(q2 + ",async,autofocus,autoplay,controls,default,defer,disabled,hidden,inert,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected");
    K = /[>/="'\u0009\u000a\u000c\u0020]/;
    Z = {};
    X2 = { acceptCharset: "accept-charset", className: "class", htmlFor: "for", httpEquiv: "http-equiv" };
    Y = /["'&<>]/;
    Q2 = /^-?>|<!--|-->|--!>|<!-$/g;
    isRef$1 = (e6) => !(!e6 || true !== e6.__v_isRef);
    toDisplayString = (e6) => isString(e6) ? e6 : null == e6 ? "" : E(e6) || isObject(e6) && (e6.toString === P || !isFunction(e6.toString)) ? isRef$1(e6) ? toDisplayString(e6.value) : JSON.stringify(e6, replacer, 2) : String(e6);
    replacer = (e6, t5) => isRef$1(t5) ? replacer(e6, t5.value) : isMap(t5) ? { [`Map(${t5.size})`]: [...t5.entries()].reduce((e7, [t6, n2], r4) => (e7[stringifySymbol(t6, r4) + " =>"] = n2, e7), {}) } : isSet(t5) ? { [`Set(${t5.size})`]: [...t5.values()].map((e7) => stringifySymbol(e7)) } : isSymbol(t5) ? stringifySymbol(t5) : !isObject(t5) || E(t5) || isPlainObject(t5) ? t5 : String(t5);
    stringifySymbol = (e6, t5 = "") => {
      var n2;
      return isSymbol(e6) ? `Symbol(${null != (n2 = e6.description) ? n2 : t5})` : e6;
    };
    EffectScope = class {
      constructor(e6 = false) {
        this.detached = e6, this._active = true, this.effects = [], this.cleanups = [], this.parent = ee2, !e6 && ee2 && (this.index = (ee2.scopes || (ee2.scopes = [])).push(this) - 1);
      }
      get active() {
        return this._active;
      }
      run(e6) {
        if (this._active) {
          const t5 = ee2;
          try {
            return ee2 = this, e6();
          } finally {
            ee2 = t5;
          }
        }
      }
      on() {
        ee2 = this;
      }
      off() {
        ee2 = this.parent;
      }
      stop(e6) {
        if (this._active) {
          let t5, n2;
          for (t5 = 0, n2 = this.effects.length; t5 < n2; t5++)
            this.effects[t5].stop();
          for (t5 = 0, n2 = this.cleanups.length; t5 < n2; t5++)
            this.cleanups[t5]();
          if (this.scopes)
            for (t5 = 0, n2 = this.scopes.length; t5 < n2; t5++)
              this.scopes[t5].stop(true);
          if (!this.detached && this.parent && !e6) {
            const e7 = this.parent.scopes.pop();
            e7 && e7 !== this && (this.parent.scopes[this.index] = e7, e7.index = this.index);
          }
          this.parent = void 0, this._active = false;
        }
      }
    };
    ReactiveEffect = class {
      constructor(e6, t5, n2, r4) {
        this.fn = e6, this.trigger = t5, this.scheduler = n2, this.active = true, this.deps = [], this._dirtyLevel = 4, this._trackId = 0, this._runnings = 0, this._shouldSchedule = false, this._depsLength = 0, function(e7, t6 = ee2) {
          t6 && t6.active && t6.effects.push(e7);
        }(this, r4);
      }
      get dirty() {
        if (2 === this._dirtyLevel || 3 === this._dirtyLevel) {
          this._dirtyLevel = 1, pauseTracking();
          for (let e6 = 0; e6 < this._depsLength; e6++) {
            const t5 = this.deps[e6];
            if (t5.computed && (triggerComputed(t5.computed), this._dirtyLevel >= 4))
              break;
          }
          1 === this._dirtyLevel && (this._dirtyLevel = 0), resetTracking();
        }
        return this._dirtyLevel >= 4;
      }
      set dirty(e6) {
        this._dirtyLevel = e6 ? 4 : 0;
      }
      run() {
        if (this._dirtyLevel = 0, !this.active)
          return this.fn();
        let e6 = ne2, t5 = te3;
        try {
          return ne2 = true, te3 = this, this._runnings++, preCleanupEffect(this), this.fn();
        } finally {
          postCleanupEffect(this), this._runnings--, te3 = t5, ne2 = e6;
        }
      }
      stop() {
        this.active && (preCleanupEffect(this), postCleanupEffect(this), this.onStop && this.onStop(), this.active = false);
      }
    };
    ne2 = true;
    re2 = 0;
    oe2 = [];
    se2 = [];
    createDep = (e6, t5) => {
      const n2 = /* @__PURE__ */ new Map();
      return n2.cleanup = e6, n2.computed = t5, n2;
    };
    ie2 = /* @__PURE__ */ new WeakMap();
    ae2 = Symbol("");
    le2 = Symbol("");
    ce2 = makeMap("__proto__,__v_isRef,__isVue");
    ue2 = new Set(Object.getOwnPropertyNames(Symbol).filter((e6) => "arguments" !== e6 && "caller" !== e6).map((e6) => Symbol[e6]).filter(isSymbol));
    pe2 = createArrayInstrumentations();
    BaseReactiveHandler = class {
      constructor(e6 = false, t5 = false) {
        this._isReadonly = e6, this._isShallow = t5;
      }
      get(e6, t5, n2) {
        const r4 = this._isReadonly, o10 = this._isShallow;
        if ("__v_isReactive" === t5)
          return !r4;
        if ("__v_isReadonly" === t5)
          return r4;
        if ("__v_isShallow" === t5)
          return o10;
        if ("__v_raw" === t5)
          return n2 === (r4 ? o10 ? Ce2 : we2 : o10 ? Re2 : Se).get(e6) || Object.getPrototypeOf(e6) === Object.getPrototypeOf(n2) ? e6 : void 0;
        const s4 = E(e6);
        if (!r4) {
          if (s4 && hasOwn(pe2, t5))
            return Reflect.get(pe2, t5, n2);
          if ("hasOwnProperty" === t5)
            return hasOwnProperty;
        }
        const i6 = Reflect.get(e6, t5, n2);
        return (isSymbol(t5) ? ue2.has(t5) : ce2(t5)) ? i6 : (r4 || track(e6, 0, t5), o10 ? i6 : isRef(i6) ? s4 && isIntegerKey(t5) ? i6 : i6.value : isObject(i6) ? r4 ? readonly(i6) : reactive(i6) : i6);
      }
    };
    MutableReactiveHandler = class extends BaseReactiveHandler {
      constructor(e6 = false) {
        super(false, e6);
      }
      set(e6, t5, n2, r4) {
        let o10 = e6[t5];
        if (!this._isShallow) {
          const t6 = isReadonly(o10);
          if (isShallow(n2) || isReadonly(n2) || (o10 = toRaw(o10), n2 = toRaw(n2)), !E(e6) && isRef(o10) && !isRef(n2))
            return !t6 && (o10.value = n2, true);
        }
        const s4 = E(e6) && isIntegerKey(t5) ? Number(t5) < e6.length : hasOwn(e6, t5), i6 = Reflect.set(e6, t5, n2, r4);
        return e6 === toRaw(r4) && (s4 ? hasChanged(n2, o10) && trigger(e6, "set", t5, n2) : trigger(e6, "add", t5, n2)), i6;
      }
      deleteProperty(e6, t5) {
        const n2 = hasOwn(e6, t5);
        e6[t5];
        const r4 = Reflect.deleteProperty(e6, t5);
        return r4 && n2 && trigger(e6, "delete", t5, void 0), r4;
      }
      has(e6, t5) {
        const n2 = Reflect.has(e6, t5);
        return isSymbol(t5) && ue2.has(t5) || track(e6, 0, t5), n2;
      }
      ownKeys(e6) {
        return track(e6, 0, E(e6) ? "length" : ae2), Reflect.ownKeys(e6);
      }
    };
    ReadonlyReactiveHandler = class extends BaseReactiveHandler {
      constructor(e6 = false) {
        super(true, e6);
      }
      set(e6, t5) {
        return true;
      }
      deleteProperty(e6, t5) {
        return true;
      }
    };
    fe2 = new MutableReactiveHandler();
    de2 = new ReadonlyReactiveHandler();
    he2 = new MutableReactiveHandler(true);
    toShallow = (e6) => e6;
    getProto = (e6) => Reflect.getPrototypeOf(e6);
    [ge2, me2, ye2, ve2] = createInstrumentations();
    _e2 = { get: createInstrumentationGetter(false, false) };
    be2 = { get: createInstrumentationGetter(false, true) };
    ke2 = { get: createInstrumentationGetter(true, false) };
    Se = /* @__PURE__ */ new WeakMap();
    Re2 = /* @__PURE__ */ new WeakMap();
    we2 = /* @__PURE__ */ new WeakMap();
    Ce2 = /* @__PURE__ */ new WeakMap();
    toReactive = (e6) => isObject(e6) ? reactive(e6) : e6;
    toReadonly = (e6) => isObject(e6) ? readonly(e6) : e6;
    ComputedRefImpl = class {
      constructor(e6, t5, n2, r4) {
        this.getter = e6, this._setter = t5, this.dep = void 0, this.__v_isRef = true, this.__v_isReadonly = false, this.effect = new ReactiveEffect(() => e6(this._value), () => triggerRefValue(this, 2 === this.effect._dirtyLevel ? 2 : 3)), this.effect.computed = this, this.effect.active = this._cacheable = !r4, this.__v_isReadonly = n2;
      }
      get value() {
        const e6 = toRaw(this);
        return e6._cacheable && !e6.effect.dirty || !hasChanged(e6._value, e6._value = e6.effect.run()) || triggerRefValue(e6, 4), trackRefValue(e6), e6.effect._dirtyLevel >= 2 && triggerRefValue(e6, 2), e6._value;
      }
      set value(e6) {
        this._setter(e6);
      }
      get _dirty() {
        return this.effect.dirty;
      }
      set _dirty(e6) {
        this.effect.dirty = e6;
      }
    };
    RefImpl = class {
      constructor(e6, t5) {
        this.__v_isShallow = t5, this.dep = void 0, this.__v_isRef = true, this._rawValue = t5 ? e6 : toRaw(e6), this._value = t5 ? e6 : toReactive(e6);
      }
      get value() {
        return trackRefValue(this), this._value;
      }
      set value(e6) {
        const t5 = this.__v_isShallow || isShallow(e6) || isReadonly(e6);
        e6 = t5 ? e6 : toRaw(e6), hasChanged(e6, this._rawValue) && (this._rawValue, this._rawValue = e6, this._value = t5 ? e6 : toReactive(e6), triggerRefValue(this, 4));
      }
    };
    xe2 = { get: (e6, t5, n2) => unref(Reflect.get(e6, t5, n2)), set: (e6, t5, n2, r4) => {
      const o10 = e6[t5];
      return isRef(o10) && !isRef(n2) ? (o10.value = n2, true) : Reflect.set(e6, t5, n2, r4);
    } };
    ObjectRefImpl = class {
      constructor(e6, t5, n2) {
        this._object = e6, this._key = t5, this._defaultValue = n2, this.__v_isRef = true;
      }
      get value() {
        const e6 = this._object[this._key];
        return void 0 === e6 ? this._defaultValue : e6;
      }
      set value(e6) {
        this._object[this._key] = e6;
      }
      get dep() {
        return function(e6, t5) {
          const n2 = ie2.get(e6);
          return n2 && n2.get(t5);
        }(toRaw(this._object), this._key);
      }
    };
    GetterRefImpl = class {
      constructor(e6) {
        this._getter = e6, this.__v_isRef = true, this.__v_isReadonly = true;
      }
      get value() {
        return this._getter();
      }
    };
    Ae2 = false;
    Oe = false;
    $e = [];
    Te = 0;
    Ee2 = [];
    Pe = null;
    je = 0;
    He = Promise.resolve();
    Me2 = null;
    getId = (e6) => null == e6.id ? 1 / 0 : e6.id;
    comparator = (e6, t5) => {
      const n2 = getId(e6) - getId(t5);
      if (0 === n2) {
        if (e6.pre && !t5.pre)
          return -1;
        if (t5.pre && !e6.pre)
          return 1;
      }
      return n2;
    };
    Ie = null;
    Ne2 = null;
    isAsyncWrapper = (e6) => !!e6.type.__asyncLoader;
    isKeepAlive = (e6) => e6.type.__isKeepAlive;
    createHook = (e6) => (t5, n2 = gt) => {
      _t && "sp" !== e6 || injectHook(e6, (...e7) => t5(...e7), n2);
    };
    Le2 = createHook("bm");
    Ve = createHook("m");
    Fe2 = createHook("bu");
    De2 = createHook("u");
    Ue = createHook("bum");
    Be = createHook("um");
    ze = createHook("sp");
    We = createHook("rtg");
    qe = createHook("rtc");
    Je = "components";
    Ge = Symbol.for("v-ndc");
    getPublicInstance = (e6) => e6 ? isStatefulComponent(e6) ? getComponentPublicInstance(e6) : getPublicInstance(e6.parent) : null;
    Ke = $(/* @__PURE__ */ Object.create(null), { $: (e6) => e6, $el: (e6) => e6.vnode.el, $data: (e6) => e6.data, $props: (e6) => e6.props, $attrs: (e6) => e6.attrs, $slots: (e6) => e6.slots, $refs: (e6) => e6.refs, $parent: (e6) => getPublicInstance(e6.parent), $root: (e6) => getPublicInstance(e6.root), $emit: (e6) => e6.emit, $options: (e6) => __VUE_OPTIONS_API__ ? resolveMergedOptions(e6) : e6.type, $forceUpdate: (e6) => e6.f || (e6.f = () => {
      e6.effect.dirty = true, queueJob(e6.update);
    }), $nextTick: (e6) => e6.n || (e6.n = nextTick.bind(e6.proxy)), $watch: (e6) => __VUE_OPTIONS_API__ ? instanceWatch.bind(e6) : NOOP });
    hasSetupBinding = (e6, t5) => e6 !== A && !e6.__isScriptSetup && hasOwn(e6, t5);
    Ze = { get({ _: e6 }, t5) {
      if ("__v_skip" === t5)
        return true;
      const { ctx: n2, setupState: r4, data: o10, props: s4, accessCache: i6, type: a4, appContext: l3 } = e6;
      let c3;
      if ("$" !== t5[0]) {
        const a5 = i6[t5];
        if (void 0 !== a5)
          switch (a5) {
            case 1:
              return r4[t5];
            case 2:
              return o10[t5];
            case 4:
              return n2[t5];
            case 3:
              return s4[t5];
          }
        else {
          if (hasSetupBinding(r4, t5))
            return i6[t5] = 1, r4[t5];
          if (o10 !== A && hasOwn(o10, t5))
            return i6[t5] = 2, o10[t5];
          if ((c3 = e6.propsOptions[0]) && hasOwn(c3, t5))
            return i6[t5] = 3, s4[t5];
          if (n2 !== A && hasOwn(n2, t5))
            return i6[t5] = 4, n2[t5];
          __VUE_OPTIONS_API__ && !Xe || (i6[t5] = 0);
        }
      }
      const u4 = Ke[t5];
      let p3, f3;
      return u4 ? ("$attrs" === t5 && track(e6.attrs, 0, ""), u4(e6)) : (p3 = a4.__cssModules) && (p3 = p3[t5]) ? p3 : n2 !== A && hasOwn(n2, t5) ? (i6[t5] = 4, n2[t5]) : (f3 = l3.config.globalProperties, hasOwn(f3, t5) ? f3[t5] : void 0);
    }, set({ _: e6 }, t5, n2) {
      const { data: r4, setupState: o10, ctx: s4 } = e6;
      return hasSetupBinding(o10, t5) ? (o10[t5] = n2, true) : r4 !== A && hasOwn(r4, t5) ? (r4[t5] = n2, true) : !hasOwn(e6.props, t5) && (("$" !== t5[0] || !(t5.slice(1) in e6)) && (s4[t5] = n2, true));
    }, has({ _: { data: e6, setupState: t5, accessCache: n2, ctx: r4, appContext: o10, propsOptions: s4 } }, i6) {
      let a4;
      return !!n2[i6] || e6 !== A && hasOwn(e6, i6) || hasSetupBinding(t5, i6) || (a4 = s4[0]) && hasOwn(a4, i6) || hasOwn(r4, i6) || hasOwn(Ke, i6) || hasOwn(o10.config.globalProperties, i6);
    }, defineProperty(e6, t5, n2) {
      return null != n2.get ? e6._.accessCache[t5] = 0 : hasOwn(n2, "value") && this.set(e6, t5, n2.value, null), Reflect.defineProperty(e6, t5, n2);
    } };
    Xe = true;
    Ye = { data: mergeDataFn, props: mergeEmitsOrPropsOptions, emits: mergeEmitsOrPropsOptions, methods: mergeObjectOptions, computed: mergeObjectOptions, beforeCreate: mergeAsArray, created: mergeAsArray, beforeMount: mergeAsArray, mounted: mergeAsArray, beforeUpdate: mergeAsArray, updated: mergeAsArray, beforeDestroy: mergeAsArray, beforeUnmount: mergeAsArray, destroyed: mergeAsArray, unmounted: mergeAsArray, activated: mergeAsArray, deactivated: mergeAsArray, errorCaptured: mergeAsArray, serverPrefetch: mergeAsArray, components: mergeObjectOptions, directives: mergeObjectOptions, watch: function(e6, t5) {
      if (!e6)
        return t5;
      if (!t5)
        return e6;
      const n2 = $(/* @__PURE__ */ Object.create(null), e6);
      for (const r4 in t5)
        n2[r4] = mergeAsArray(e6[r4], t5[r4]);
      return n2;
    }, provide: mergeDataFn, inject: function(e6, t5) {
      return mergeObjectOptions(normalizeInject(e6), normalizeInject(t5));
    } };
    Qe = 0;
    et = null;
    tt = {};
    createInternalObject = () => Object.create(tt);
    isInternalObject = (e6) => Object.getPrototypeOf(e6) === tt;
    nt = /* @__PURE__ */ new WeakMap();
    isInternalKey = (e6) => "_" === e6[0] || "$stable" === e6;
    normalizeSlotValue = (e6) => E(e6) ? e6.map(normalizeVNode$1) : [normalizeVNode$1(e6)];
    normalizeSlot = (e6, t5, n2) => {
      if (t5._n)
        return t5;
      const r4 = withCtx((...e7) => normalizeSlotValue(t5(...e7)), n2);
      return r4._c = false, r4;
    };
    normalizeObjectSlots = (e6, t5, n2) => {
      const r4 = e6._ctx;
      for (const n3 in e6) {
        if (isInternalKey(n3))
          continue;
        const o10 = e6[n3];
        if (isFunction(o10))
          t5[n3] = normalizeSlot(0, o10, r4);
        else if (null != o10) {
          const e7 = normalizeSlotValue(o10);
          t5[n3] = () => e7;
        }
      }
    };
    normalizeVNodeSlots = (e6, t5) => {
      const n2 = normalizeSlotValue(t5);
      e6.slots.default = () => n2;
    };
    assignSlots = (e6, t5, n2) => {
      for (const r4 in t5)
        (n2 || "_" !== r4) && (e6[r4] = t5[r4]);
    };
    initSlots = (e6, t5, n2) => {
      const r4 = e6.slots = createInternalObject();
      if (32 & e6.vnode.shapeFlag) {
        const e7 = t5._;
        e7 ? (assignSlots(r4, t5, n2), n2 && def(r4, "_", e7, true)) : normalizeObjectSlots(t5, r4);
      } else
        t5 && normalizeVNodeSlots(e6, t5);
    };
    updateSlots = (e6, t5, n2) => {
      const { vnode: r4, slots: o10 } = e6;
      let s4 = true, i6 = A;
      if (32 & r4.shapeFlag) {
        const e7 = t5._;
        e7 ? n2 && 1 === e7 ? s4 = false : assignSlots(o10, t5, n2) : (s4 = !t5.$stable, normalizeObjectSlots(t5, o10)), i6 = t5;
      } else
        t5 && (normalizeVNodeSlots(e6, t5), i6 = { default: 1 });
      if (s4)
        for (const e7 in o10)
          isInternalKey(e7) || null != i6[e7] || delete o10[e7];
    };
    rt = Symbol("_vte");
    queuePostRenderEffect = function(e6, t5) {
      t5 && t5.pendingBranch ? E(e6) ? t5.effects.push(...e6) : t5.effects.push(e6) : (E(n2 = e6) ? Ee2.push(...n2) : Pe && Pe.includes(n2, n2.allowRecurse ? je + 1 : je) || Ee2.push(n2), queueFlush());
      var n2;
    };
    ot = Symbol.for("v-scx");
    useSSRContext = () => inject(ot);
    st = {};
    getModelModifiers = (e6, t5) => "modelValue" === t5 || "model-value" === t5 ? e6.modelModifiers : e6[`${t5}Modifiers`] || e6[`${M(t5)}Modifiers`] || e6[`${N2(t5)}Modifiers`];
    getFunctionalFallthrough = (e6) => {
      let t5;
      for (const n2 in e6)
        ("class" === n2 || "style" === n2 || isOn(n2)) && ((t5 || (t5 = {}))[n2] = e6[n2]);
      return t5;
    };
    filterModelListeners = (e6, t5) => {
      const n2 = {};
      for (const r4 in e6)
        isModelListener(r4) && r4.slice(9) in t5 || (n2[r4] = e6[r4]);
      return n2;
    };
    it = Symbol.for("v-fgt");
    at = Symbol.for("v-txt");
    lt = Symbol.for("v-cmt");
    ct = Symbol.for("v-stc");
    ut = [];
    pt = null;
    ft = 1;
    normalizeKey = ({ key: e6 }) => null != e6 ? e6 : null;
    normalizeRef = ({ ref: e6, ref_key: t5, ref_for: n2 }) => ("number" == typeof e6 && (e6 = "" + e6), null != e6 ? isString(e6) || isRef(e6) || isFunction(e6) ? { i: Ie, r: e6, k: t5, f: !!n2 } : e6 : null);
    createVNode = function(e6, t5 = null, n2 = null, r4 = 0, o10 = null, s4 = false) {
      e6 && e6 !== Ge || (e6 = lt);
      if (isVNode(e6)) {
        const r5 = cloneVNode(e6, t5, true);
        return n2 && normalizeChildren(r5, n2), ft > 0 && !s4 && pt && (6 & r5.shapeFlag ? pt[pt.indexOf(e6)] = r5 : pt.push(r5)), r5.patchFlag = -2, r5;
      }
      i6 = e6, isFunction(i6) && "__vccOpts" in i6 && (e6 = e6.__vccOpts);
      var i6;
      if (t5) {
        t5 = function(e8) {
          return e8 ? isProxy(e8) || isInternalObject(e8) ? $({}, e8) : e8 : null;
        }(t5);
        let { class: e7, style: n3 } = t5;
        e7 && !isString(e7) && (t5.class = normalizeClass(e7)), isObject(n3) && (isProxy(n3) && !E(n3) && (n3 = $({}, n3)), t5.style = normalizeStyle(n3));
      }
      const a4 = isString(e6) ? 1 : ((e7) => e7.__isSuspense)(e6) ? 128 : ((e7) => e7.__isTeleport)(e6) ? 64 : isObject(e6) ? 4 : isFunction(e6) ? 2 : 0;
      return createBaseVNode(e6, t5, n2, r4, o10, a4, s4, true);
    };
    dt = createAppContext();
    ht = 0;
    gt = null;
    getCurrentInstance = () => gt || Ie;
    {
      const e6 = getGlobalThis(), registerGlobalSetter = (t5, n2) => {
        let r4;
        return (r4 = e6[t5]) || (r4 = e6[t5] = []), r4.push(n2), (e7) => {
          r4.length > 1 ? r4.forEach((t6) => t6(e7)) : r4[0](e7);
        };
      };
      mt = registerGlobalSetter("__VUE_INSTANCE_SETTERS__", (e7) => gt = e7), yt = registerGlobalSetter("__VUE_SSR_SETTERS__", (e7) => _t = e7);
    }
    setCurrentInstance = (e6) => {
      const t5 = gt;
      return mt(e6), e6.scope.on(), () => {
        e6.scope.off(), mt(t5);
      };
    };
    unsetCurrentInstance = () => {
      gt && gt.scope.off(), mt(null);
    };
    _t = false;
    bt = { get: (e6, t5) => (track(e6, 0, ""), e6[t5]) };
    computed = (e6, t5) => {
      const n2 = function(e7, t6, n3 = false) {
        let r4, o10;
        const s4 = isFunction(e7);
        return s4 ? (r4 = e7, o10 = NOOP) : (r4 = e7.get, o10 = e7.set), new ComputedRefImpl(r4, o10, s4 || !o10, n3);
      }(e6, 0, _t);
      return n2;
    };
    kt = "3.4.37";
    St = { createComponentInstance: createComponentInstance$1, setupComponent: setupComponent$1, renderComponentRoot: renderComponentRoot$1, setCurrentRenderingInstance: setCurrentRenderingInstance$1, isVNode, normalizeVNode: normalizeVNode$1, getComponentPublicInstance, ensureValidVNode: function ensureValidVNode(e6) {
      return e6.some((e7) => !isVNode(e7) || e7.type !== lt && !(e7.type === it && !ensureValidVNode(e7.children))) ? e6 : null;
    } };
    Rt = St;
    wt = "undefined" != typeof document ? document : null;
    Ct = wt && wt.createElement("template");
    xt = { insert: (e6, t5, n2) => {
      t5.insertBefore(e6, n2 || null);
    }, remove: (e6) => {
      const t5 = e6.parentNode;
      t5 && t5.removeChild(e6);
    }, createElement: (e6, t5, n2, r4) => {
      const o10 = "svg" === t5 ? wt.createElementNS("http://www.w3.org/2000/svg", e6) : "mathml" === t5 ? wt.createElementNS("http://www.w3.org/1998/Math/MathML", e6) : n2 ? wt.createElement(e6, { is: n2 }) : wt.createElement(e6);
      return "select" === e6 && r4 && null != r4.multiple && o10.setAttribute("multiple", r4.multiple), o10;
    }, createText: (e6) => wt.createTextNode(e6), createComment: (e6) => wt.createComment(e6), setText: (e6, t5) => {
      e6.nodeValue = t5;
    }, setElementText: (e6, t5) => {
      e6.textContent = t5;
    }, parentNode: (e6) => e6.parentNode, nextSibling: (e6) => e6.nextSibling, querySelector: (e6) => wt.querySelector(e6), setScopeId(e6, t5) {
      e6.setAttribute(t5, "");
    }, insertStaticContent(e6, t5, n2, r4, o10, s4) {
      const i6 = n2 ? n2.previousSibling : t5.lastChild;
      if (o10 && (o10 === s4 || o10.nextSibling))
        for (; t5.insertBefore(o10.cloneNode(true), n2), o10 !== s4 && (o10 = o10.nextSibling); )
          ;
      else {
        Ct.innerHTML = "svg" === r4 ? `<svg>${e6}</svg>` : "mathml" === r4 ? `<math>${e6}</math>` : e6;
        const o11 = Ct.content;
        if ("svg" === r4 || "mathml" === r4) {
          const e7 = o11.firstChild;
          for (; e7.firstChild; )
            o11.appendChild(e7.firstChild);
          o11.removeChild(e7);
        }
        t5.insertBefore(o11, n2);
      }
      return [i6 ? i6.nextSibling : t5.firstChild, n2 ? n2.previousSibling : t5.lastChild];
    } };
    At = Symbol("_vtc");
    Ot = Symbol("_vod");
    $t = Symbol("_vsh");
    Tt = Symbol("");
    Et = /(^|;)\s*display\s*:/;
    Pt = /\s*!important$/;
    jt = ["Webkit", "Moz", "ms"];
    Ht = {};
    Mt = "http://www.w3.org/1999/xlink";
    It = Symbol("_vei");
    Nt = /(?:Once|Passive|Capture)$/;
    Lt = 0;
    Vt = Promise.resolve();
    getNow = () => Lt || (Vt.then(() => Lt = 0), Lt = Date.now());
    isNativeOn = (e6) => 111 === e6.charCodeAt(0) && 110 === e6.charCodeAt(1) && e6.charCodeAt(2) > 96 && e6.charCodeAt(2) < 123;
    Ft = $({ patchProp: (e6, t5, n2, r4, o10, s4) => {
      const i6 = "svg" === o10;
      "class" === t5 ? function(e7, t6, n3) {
        const r5 = e7[At];
        r5 && (t6 = (t6 ? [t6, ...r5] : [...r5]).join(" ")), null == t6 ? e7.removeAttribute("class") : n3 ? e7.setAttribute("class", t6) : e7.className = t6;
      }(e6, r4, i6) : "style" === t5 ? function(e7, t6, n3) {
        const r5 = e7.style, o11 = isString(n3);
        let s5 = false;
        if (n3 && !o11) {
          if (t6)
            if (isString(t6))
              for (const e8 of t6.split(";")) {
                const t7 = e8.slice(0, e8.indexOf(":")).trim();
                null == n3[t7] && setStyle(r5, t7, "");
              }
            else
              for (const e8 in t6)
                null == n3[e8] && setStyle(r5, e8, "");
          for (const e8 in n3)
            "display" === e8 && (s5 = true), setStyle(r5, e8, n3[e8]);
        } else if (o11) {
          if (t6 !== n3) {
            const e8 = r5[Tt];
            e8 && (n3 += ";" + e8), r5.cssText = n3, s5 = Et.test(n3);
          }
        } else
          t6 && e7.removeAttribute("style");
        Ot in e7 && (e7[Ot] = s5 ? r5.display : "", e7[$t] && (r5.display = "none"));
      }(e6, n2, r4) : isOn(t5) ? isModelListener(t5) || patchEvent(e6, t5, 0, r4, s4) : ("." === t5[0] ? (t5 = t5.slice(1), 1) : "^" === t5[0] ? (t5 = t5.slice(1), 0) : function(e7, t6, n3, r5) {
        if (r5)
          return "innerHTML" === t6 || "textContent" === t6 || !!(t6 in e7 && isNativeOn(t6) && isFunction(n3));
        if ("spellcheck" === t6 || "draggable" === t6 || "translate" === t6)
          return false;
        if ("form" === t6)
          return false;
        if ("list" === t6 && "INPUT" === e7.tagName)
          return false;
        if ("type" === t6 && "TEXTAREA" === e7.tagName)
          return false;
        if ("width" === t6 || "height" === t6) {
          const t7 = e7.tagName;
          if ("IMG" === t7 || "VIDEO" === t7 || "CANVAS" === t7 || "SOURCE" === t7)
            return false;
        }
        if (isNativeOn(t6) && isString(n3))
          return false;
        return t6 in e7;
      }(e6, t5, r4, i6)) ? (!function(e7, t6, n3) {
        if ("innerHTML" === t6 || "textContent" === t6) {
          if (null == n3)
            return;
          return void (e7[t6] = n3);
        }
        const r5 = e7.tagName;
        if ("value" === t6 && "PROGRESS" !== r5 && !r5.includes("-")) {
          const o12 = "OPTION" === r5 ? e7.getAttribute("value") || "" : e7.value, s5 = null == n3 ? "" : String(n3);
          return o12 === s5 && "_value" in e7 || (e7.value = s5), null == n3 && e7.removeAttribute(t6), void (e7._value = n3);
        }
        let o11 = false;
        if ("" === n3 || null == n3) {
          const r6 = typeof e7[t6];
          "boolean" === r6 ? n3 = includeBooleanAttr(n3) : null == n3 && "string" === r6 ? (n3 = "", o11 = true) : "number" === r6 && (n3 = 0, o11 = true);
        }
        try {
          e7[t6] = n3;
        } catch (e8) {
        }
        o11 && e7.removeAttribute(t6);
      }(e6, t5, r4), e6.tagName.includes("-") || "value" !== t5 && "checked" !== t5 && "selected" !== t5 || patchAttr(e6, t5, r4, i6, 0, "value" !== t5)) : ("true-value" === t5 ? e6._trueValue = r4 : "false-value" === t5 && (e6._falseValue = r4), patchAttr(e6, t5, r4, i6));
    } }, xt);
    createApp = (...e6) => {
      const t5 = (Dt || (Dt = createRenderer(Ft))).createApp(...e6), { mount: n2 } = t5;
      return t5.mount = (e7) => {
        const r4 = function(e8) {
          if (isString(e8)) {
            return document.querySelector(e8);
          }
          return e8;
        }(e7);
        if (!r4)
          return;
        const o10 = t5._component;
        isFunction(o10) || o10.render || o10.template || (o10.template = r4.innerHTML), r4.innerHTML = "";
        const s4 = n2(r4, false, function(e8) {
          if (e8 instanceof SVGElement)
            return "svg";
          if ("function" == typeof MathMLElement && e8 instanceof MathMLElement)
            return "mathml";
        }(r4));
        return r4 instanceof Element && (r4.removeAttribute("v-cloak"), r4.setAttribute("data-v-app", "")), s4;
      }, t5;
    };
    Ut = makeMap(",key,ref,innerHTML,textContent,ref_key,ref_for");
    {
      const e6 = getGlobalThis(), registerGlobalSetter = (t5, n2) => {
        let r4;
        return (r4 = e6[t5]) || (r4 = e6[t5] = []), r4.push(n2), (e7) => {
          r4.length > 1 ? r4.forEach((t6) => t6(e7)) : r4[0](e7);
        };
      };
      registerGlobalSetter("__VUE_INSTANCE_SETTERS__", (e7) => e7), registerGlobalSetter("__VUE_SSR_SETTERS__", (e7) => e7);
    }
    ({ createComponentInstance: Bt, setCurrentRenderingInstance: zt, setupComponent: Wt, renderComponentRoot: qt, normalizeVNode: Jt } = Rt);
    ({ isVNode: Gt } = Rt);
    Kt = ["meta", "link", "base"];
    Zt = ["title", "titleTemplate", "script", "style", "noscript"];
    Xt = ["base", "meta", "link", "style", "script", "noscript"];
    Yt = ["title", "titleTemplate", "templateParams", "base", "htmlAttrs", "bodyAttrs", "meta", "link", "style", "script", "noscript"];
    Qt = ["base", "title", "titleTemplate", "bodyAttrs", "htmlAttrs", "templateParams"];
    en = ["tagPosition", "tagPriority", "tagDuplicateStrategy", "children", "innerHTML", "textContent", "processTemplateParams"];
    tn = 10;
    nn = { base: -10, title: 10 };
    rn = { critical: -80, high: -10, low: 20 };
    on = [{ prefix: "before:", offset: -1 }, { prefix: "after:", offset: 1 }];
    sn = ["onload", "onerror", "onabort", "onprogress", "onloadstart"];
    an = "%separator";
    ln = ["templateParams", "htmlAttrs", "bodyAttrs"];
    cn = { hooks: { "tag:normalise": function({ tag: e6 }) {
      ["hid", "vmid", "key"].forEach((t6) => {
        e6.props[t6] && (e6.key = e6.props[t6], delete e6.props[t6]);
      });
      const t5 = function(e7) {
        const { props: t6, tag: n3 } = e7;
        if (Qt.includes(n3))
          return n3;
        if ("link" === n3 && "canonical" === t6.rel)
          return "canonical";
        if (t6.charset)
          return "charset";
        const r4 = ["id"];
        "meta" === n3 && r4.push("name", "property", "http-equiv");
        for (const e8 of r4)
          if (void 0 !== t6[e8])
            return `${n3}:${e8}:${String(t6[e8])}`;
        return false;
      }(e6), n2 = t5 || !!e6.key && `${e6.tag}:${e6.key}`;
      n2 && (e6._d = n2);
    }, "tags:resolve": function(e6) {
      const t5 = {};
      e6.tags.forEach((e7) => {
        const n3 = (e7.key ? `${e7.tag}:${e7.key}` : e7._d) || e7._p, r4 = t5[n3];
        if (r4) {
          let o11 = e7?.tagDuplicateStrategy;
          if (!o11 && ln.includes(e7.tag) && (o11 = "merge"), "merge" === o11) {
            const o12 = r4.props;
            return ["class", "style"].forEach((t6) => {
              o12[t6] && (e7.props[t6] ? ("style" !== t6 || o12[t6].endsWith(";") || (o12[t6] += ";"), e7.props[t6] = `${o12[t6]} ${e7.props[t6]}`) : e7.props[t6] = o12[t6]);
            }), void (t5[n3].props = { ...o12, ...e7.props });
          }
          if (e7._e === r4._e)
            return r4._duped = r4._duped || [], e7._d = `${r4._d}:${r4._duped.length + 1}`, void r4._duped.push(e7);
          if (tagWeight(e7) > tagWeight(r4))
            return;
        }
        const o10 = Object.keys(e7.props).length + (e7.innerHTML ? 1 : 0) + (e7.textContent ? 1 : 0);
        Xt.includes(e7.tag) && 0 === o10 ? delete t5[n3] : t5[n3] = e7;
      });
      const n2 = [];
      Object.values(t5).forEach((e7) => {
        const t6 = e7._duped;
        delete e7._duped, n2.push(e7), t6 && n2.push(...t6);
      }), e6.tags = n2, e6.tags = e6.tags.filter((e7) => !("meta" === e7.tag && (e7.props.name || e7.props.property) && !e7.props.content));
    } } };
    un = { mode: "server", hooks: { "tags:resolve": function(e6) {
      const t5 = {};
      e6.tags.filter((e7) => ["titleTemplate", "templateParams", "title"].includes(e7.tag) && "server" === e7._m).forEach((e7) => {
        t5[e7.tag] = e7.tag.startsWith("title") ? e7.textContent : e7.props;
      }), Object.keys(t5).length && e6.tags.push({ tag: "script", innerHTML: JSON.stringify(t5), props: { id: "unhead:payload", type: "application/json" } });
    } } };
    pn = ["script", "link", "bodyAttrs"];
    EventHandlersPlugin = (e6) => ({ hooks: { "tags:resolve": function(t5) {
      for (const n2 of t5.tags.filter((e7) => pn.includes(e7.tag)))
        Object.entries(n2.props).forEach(([t6, r4]) => {
          t6.startsWith("on") && "function" == typeof r4 && (e6.ssr && sn.includes(t6) ? n2.props[t6] = `this.dataset.${t6}fired = true` : delete n2.props[t6], n2._eventHandlers = n2._eventHandlers || {}, n2._eventHandlers[t6] = r4);
        }), e6.ssr && n2._eventHandlers && (n2.props.src || n2.props.href) && (n2.key = n2.key || hashCode(n2.props.src || n2.props.href));
    }, "dom:renderTag": function({ $el: e7, tag: t5 }) {
      for (const n2 of Object.keys(e7?.dataset || {}).filter((e8) => sn.some((t6) => `${t6}fired` === e8))) {
        const r4 = n2.replace("fired", "");
        t5._eventHandlers?.[r4]?.call(e7, new Event(r4.replace("on", "")));
      }
    } } });
    fn = ["link", "style", "script", "noscript"];
    dn = { hooks: { "tag:normalise": ({ tag: e6 }) => {
      e6.key && fn.includes(e6.tag) && (e6.props["data-hid"] = e6._h = hashCode(e6.key));
    } } };
    hn = { hooks: { "tags:resolve": (e6) => {
      const tagPositionForKey = (t5) => e6.tags.find((e7) => e7._d === t5)?._p;
      for (const { prefix: t5, offset: n2 } of on)
        for (const r4 of e6.tags.filter((e7) => "string" == typeof e7.tagPriority && e7.tagPriority.startsWith(t5))) {
          const e7 = tagPositionForKey(r4.tagPriority.replace(t5, ""));
          void 0 !== e7 && (r4._p = e7 + n2);
        }
      e6.tags.sort((e7, t5) => e7._p - t5._p).sort((e7, t5) => tagWeight(e7) - tagWeight(t5));
    } } };
    gn = { meta: "content", link: "href", htmlAttrs: "lang" };
    TemplateParamsPlugin = (e6) => ({ hooks: { "tags:resolve": (t5) => {
      const { tags: n2 } = t5, r4 = n2.find((e7) => "title" === e7.tag)?.textContent, o10 = n2.findIndex((e7) => "templateParams" === e7.tag), s4 = -1 !== o10 ? n2[o10].props : {}, i6 = s4.separator || "|";
      delete s4.separator, s4.pageTitle = processTemplateParams(s4.pageTitle || r4 || "", s4, i6);
      for (const e7 of n2.filter((e8) => false !== e8.processTemplateParams)) {
        const t6 = gn[e7.tag];
        t6 && "string" == typeof e7.props[t6] ? e7.props[t6] = processTemplateParams(e7.props[t6], s4, i6) : (true === e7.processTemplateParams || ["titleTemplate", "title"].includes(e7.tag)) && ["innerHTML", "textContent"].forEach((t7) => {
          "string" == typeof e7[t7] && (e7[t7] = processTemplateParams(e7[t7], s4, i6));
        });
      }
      e6._templateParams = s4, e6._separator = i6, t5.tags = n2.filter((e7) => "templateParams" !== e7.tag);
    } } });
    mn = { hooks: { "tags:resolve": (e6) => {
      const { tags: t5 } = e6;
      let n2 = t5.findIndex((e7) => "titleTemplate" === e7.tag);
      const r4 = t5.findIndex((e7) => "title" === e7.tag);
      if (-1 !== r4 && -1 !== n2) {
        const e7 = resolveTitleTemplate(t5[n2].textContent, t5[r4].textContent);
        null !== e7 ? t5[r4].textContent = e7 || t5[r4].textContent : delete t5[r4];
      } else if (-1 !== n2) {
        const e7 = resolveTitleTemplate(t5[n2].textContent);
        null !== e7 && (t5[n2].textContent = e7, t5[n2].tag = "title", n2 = -1);
      }
      -1 !== n2 && delete t5[n2], e6.tags = t5.filter(Boolean);
    } } };
    yn = { hooks: { "tags:afterResolve": function(e6) {
      for (const t5 of e6.tags)
        "string" == typeof t5.innerHTML && (t5.innerHTML && ["application/ld+json", "application/json"].includes(t5.props.type) ? t5.innerHTML = t5.innerHTML.replace(/</g, "\\u003C") : t5.innerHTML = t5.innerHTML.replace(new RegExp(`</${t5.tag}`, "g"), `<\\/${t5.tag}`));
    } } };
    _n = /@import/;
    bn = kt.startsWith("3");
    kn = { hooks: { "entries:resolve": function(e6) {
      for (const t5 of e6.entries)
        t5.resolvedInput = resolveUnrefHeadInput2(t5.input);
    } } };
    Sn = "usehead";
    Rn = [(wn = { track: true }, { hooks: { "tags:beforeResolve": function({ tags: e6 }) {
      for (const t5 of e6) {
        if (t5.tagPosition && "head" !== t5.tagPosition)
          continue;
        if (t5.tagPriority = t5.tagPriority || tagWeight(t5), 100 !== t5.tagPriority)
          continue;
        const isTruthy = (e8) => "" === e8 || true === e8, e7 = "script" === t5.tag, n2 = "link" === t5.tag;
        e7 && isTruthy(t5.props.async) ? t5.tagPriority = 30 : "style" === t5.tag && t5.innerHTML && _n.test(t5.innerHTML) ? t5.tagPriority = 40 : !e7 || !t5.props.src || isTruthy(t5.props.defer) || isTruthy(t5.props.async) || "module" === t5.props.type || t5.props.type?.endsWith("json") ? n2 && "stylesheet" === t5.props.rel || "style" === t5.tag ? t5.tagPriority = 60 : n2 && ["preload", "modulepreload"].includes(t5.props.rel) ? t5.tagPriority = 70 : e7 && isTruthy(t5.props.defer) && t5.props.src && !isTruthy(t5.props.async) ? t5.tagPriority = 80 : n2 && ["prefetch", "dns-prefetch", "prerender"].includes(t5.props.rel) && (t5.tagPriority = 90) : t5.tagPriority = 50;
      }
      wn?.track && e6.push({ tag: "htmlAttrs", props: { "data-capo": "" } });
    } } })];
    Cn = { meta: [{ name: "viewport", content: "width=device-width, initial-scale=1" }, { charset: "utf-8" }], link: [], style: [], script: [], noscript: [] };
    xn = { id: "teleports" };
    globalThis.__buildAssetsURL = buildAssetsURL, globalThis.__publicAssetsURL = publicAssetsURL;
    getClientManifest = () => Promise.resolve().then(() => (init_client_manifest(), client_manifest_exports)).then((e6) => e6.default || e6).then((e6) => "function" == typeof e6 ? e6() : e6);
    An = lazyCachedFunction(() => Promise.resolve().then(() => (init_styles(), styles_exports)).then((e6) => e6.default || e6));
    On = lazyCachedFunction(async () => {
      const e6 = await getClientManifest();
      if (!e6)
        throw new Error("client.manifest is not available");
      const t5 = await Promise.resolve().then(() => (init_server(), server_exports)).then((e7) => e7.default || e7);
      if (!t5)
        throw new Error("Server bundle is not available");
      return createRenderer$1(t5, { manifest: e6, renderToString: async function(e7, t6) {
        const n2 = await renderToString(e7, t6);
        return En + n2 + Pn;
      }, buildAssetsURL });
    });
    $n = lazyCachedFunction(async () => {
      const t5 = await getClientManifest(), n2 = await Promise.resolve().then(() => (init_virtual_spa_template(), virtual_spa_template_exports)).then((e6) => e6.template).catch(() => "").then((e6) => En + e6 + Pn), r4 = createRenderer$1(() => () => {
      }, { manifest: t5, renderToString: () => n2, buildAssetsURL }), o10 = await r4.renderToString({});
      return { rendererContext: r4.rendererContext, renderToString: (t6) => {
        const n3 = useRuntimeConfig2(t6.event);
        return t6.modules = t6.modules || /* @__PURE__ */ new Set(), t6.payload = { serverRendered: false }, t6.config = { public: n3.public, app: n3.app }, Promise.resolve(o10);
      } };
    });
    Tn = `<div${propsToString(xn)}>`;
    En = `<div${propsToString({ id: "__nuxt" })}>`;
    Pn = "</div>";
    jn = /\/_payload.json(\?.*)?$/;
    Hn = function(l3) {
      const c3 = useRuntimeConfig2();
      return Re(async (e6) => {
        if (e6.path === `${c3.app.baseURL}favicon.ico`)
          return setResponseHeader(e6, "Content-Type", "image/x-icon"), send(e6, "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");
        const t5 = await l3(e6);
        if (!t5) {
          const t6 = getResponseStatus(e6);
          return setResponseStatus(e6, 200 === t6 ? 500 : t6), send(e6, "No response returned from render handler: " + e6.path);
        }
        const u4 = useNitroApp();
        return await u4.hooks.callHook("render:response", t5, { event: e6 }), t5.headers && setResponseHeaders(e6, t5.headers), (t5.statusCode || t5.statusMessage) && setResponseStatus(e6, t5.statusCode, t5.statusMessage), t5.body;
      });
    }(async (t5) => {
      const n2 = useNitroApp(), r4 = t5.path.startsWith("/__nuxt_error") ? getQuery(t5) : null;
      if (r4 && r4.statusCode && (r4.statusCode = Number.parseInt(r4.statusCode)), r4 && !("__unenv__" in t5.node.req))
        throw createError({ statusCode: 404, statusMessage: "Page Not Found: /__nuxt_error" });
      const s4 = false, i6 = void 0;
      let l3 = r4?.url || t5.path;
      const c3 = jn.test(l3) && true;
      c3 && (l3 = l3.substring(0, l3.lastIndexOf("/")) || "/", t5._path = l3, t5.node.req.url = l3);
      const u4 = getRouteRules(t5), m6 = createServerHead({ plugins: Rn }), y4 = { mode: "server" };
      m6.push(Cn, y4);
      const v4 = { url: l3, event: t5, runtimeConfig: useRuntimeConfig2(t5), noSSR: t5.context.nuxt?.noSSR || false === u4.ssr && true || false, head: m6, error: !!r4, nuxt: void 0, payload: r4 ? { error: r4 } : {}, _payloadReducers: {}, modules: /* @__PURE__ */ new Set(), islandContext: i6 }, _5 = v4.noSSR ? await $n() : await On();
      for (const e6 of await getClientManifest().then((e7) => Object.values(e7).filter((e8) => e8._globalCSS).map((e8) => e8.src)))
        v4.modules.add(e6);
      const b4 = await _5.renderToString(v4).catch(async (e6) => {
        if (v4._renderResponse && "skipping render" === e6.message)
          return {};
        const t6 = !r4 && v4.payload?.error || e6;
        throw await v4.nuxt?.hooks.callHook("app:error", t6), t6;
      });
      if (await v4.nuxt?.hooks.callHook("app:rendered", { ssrContext: v4, renderResult: b4 }), v4._renderResponse)
        return v4._renderResponse;
      if (v4.payload?.error && !r4)
        throw v4.payload.error;
      if (c3) {
        const e6 = function(e7) {
          return { body: stringify(splitPayload(e7).payload, e7._payloadReducers), statusCode: getResponseStatus(e7.event), statusMessage: getResponseStatusText(e7.event), headers: { "content-type": "application/json;charset=utf-8", "x-powered-by": "Nuxt" } };
        }(v4);
        return e6;
      }
      const k4 = await async function(e6) {
        const t6 = await An(), n3 = /* @__PURE__ */ new Set();
        for (const r5 of e6)
          if (r5 in t6)
            for (const e7 of await t6[r5]())
              n3.add(e7);
        return Array.from(n3).map((e7) => ({ innerHTML: e7 }));
      }(v4.modules ?? []), S4 = u4.experimentalNoScripts, { styles: R4, scripts: w4 } = getRequestDependencies(v4, _5.rendererContext);
      m6.push({ style: k4 });
      {
        const e6 = [];
        for (const t6 in R4) {
          const n3 = R4[t6];
          e6.push({ rel: "stylesheet", href: _5.rendererContext.buildAssetsURL(n3.file) });
        }
        m6.push({ link: e6 }, y4);
      }
      S4 || (m6.push({ link: getPreloadLinks(v4, _5.rendererContext) }, y4), m6.push({ link: getPrefetchLinks(v4, _5.rendererContext) }, y4), m6.push({ script: renderPayloadJsonScript({ id: "__NUXT_DATA__", ssrContext: v4, data: v4.payload }) }, { ...y4, tagPosition: "bodyClose", tagPriority: "high" })), u4.experimentalNoScripts || m6.push({ script: Object.values(w4).map((e6) => ({ type: e6.module ? "module" : null, src: _5.rendererContext.buildAssetsURL(e6.file), defer: !e6.module || null, tagPosition: "head", crossorigin: "" })) }, y4);
      const { headTags: C4, bodyTags: x4, bodyTagsOpen: A4, htmlAttrs: O4, bodyAttrs: $5 } = await renderSSRHead(m6), T5 = { island: s4, htmlAttrs: O4 ? [O4] : [], head: normalizeChunks([C4]), bodyAttrs: $5 ? [$5] : [], bodyPrepend: normalizeChunks([A4, v4.teleports?.body]), body: [b4.html, Tn + joinTags([v4.teleports?.[`#${xn.id}`]]) + "</div>"], bodyAppend: [x4] };
      await n2.hooks.callHook("render:html", T5, { event: t5 });
      var E4;
      return { body: (E4 = T5, `<!DOCTYPE html><html${joinAttrs(E4.htmlAttrs)}><head>${joinTags(E4.head)}</head><body${joinAttrs(E4.bodyAttrs)}>${joinTags(E4.bodyPrepend)}${joinTags(E4.body)}${joinTags(E4.bodyAppend)}</body></html>`), statusCode: getResponseStatus(t5), statusMessage: getResponseStatusText(t5), headers: { "content-type": "text/html;charset=utf-8", "x-powered-by": "Nuxt" } };
    });
    Mn = Object.freeze(Object.defineProperty({ __proto__: null, default: Hn }, Symbol.toStringTag, { value: "Module" }));
  }
});

// .wrangler/tmp/pages-WENPGt/chunks/_/features.mjs
function requireNuxtHubFeature(a4) {
  const n2 = useRuntimeConfig2().hub;
  if (!n2[a4])
    throw createError({ statusCode: 422, statusMessage: "Unprocessable Entity", message: s[a4] });
  if (n2.remote && !n2.remoteManifest?.features?.[a4] && !n2.remoteManifest?.storage?.[a4]) {
    throw createError({ statusCode: 422, statusMessage: "Unprocessable Entity", message: `NuxtHub \`${a4}\` is not enabled in the remote project. Deploy a new version with \`${a4}\` enabled and try again.
Read more at \`https://hub.nuxt.com/docs/getting-started/remote-storage\`` });
  }
}
var s;
var init_features = __esm({
  ".wrangler/tmp/pages-WENPGt/chunks/_/features.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    init_runtime();
    s = { analytics: ["NuxtHub Analytics is not enabled, set `hub.analytics = true` in your `nuxt.config.ts`"].join("\n"), blob: ["NuxtHub Blob is not enabled, set `hub.blob = true` in your `nuxt.config.ts`", "Read more at `https://hub.nuxt.com/docs/storage/blob`"].join("\n"), cache: ["NuxtHub Cache is not enabled, set `hub.cache = true` in your `nuxt.config.ts`"].join("\n"), database: ["NuxtHub Database is not enabled, set `hub.database = true` in your `nuxt.config.ts`", "Read more at `https://hub.nuxt.com/docs/storage/database`"].join("\n"), kv: ["NuxtHub KV is not enabled, set `hub.kv = true` in your `nuxt.config.ts`", "Read more at `https://hub.nuxt.com/docs/storage/kv`"].join("\n") };
  }
});

// .wrangler/tmp/pages-WENPGt/chunks/routes/api/_hub/_...feature_.mjs
var feature_exports = {};
__export(feature_exports, {
  default: () => o5
});
var o5;
var init_feature = __esm({
  ".wrangler/tmp/pages-WENPGt/chunks/routes/api/_hub/_...feature_.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    init_runtime();
    init_features();
    o5 = Re((t5) => {
      const [o10] = (t5.context.params?.feature || "").split("/");
      throw requireNuxtHubFeature(o10), createError({ statusCode: 404, message: "Not found" });
    });
  }
});

// .wrangler/tmp/pages-WENPGt/chunks/_/auth.mjs
async function requireNuxtHubAuthorization(r4) {
  const o10 = (he3(r4, "authorization") || "").split(" ")[1];
  if (!o10)
    throw createError({ statusCode: 403, message: "Missing Authorization header" });
  const n2 = B2.env.NUXT_HUB_PROJECT_KEY, u4 = B2.env.NUXT_HUB_PROJECT_SECRET_KEY;
  if (!u4 || o10 !== u4) {
    if (u4 && !n2)
      throw createError({ statusCode: 401, message: "Invalid secret key" });
    if (n2) {
      if (s2.has(o10))
        return;
      return await Ne(`/api/projects/${n2}`, { baseURL: B2.env.NUXT_HUB_URL || "https://admin.hub.nuxt.com", method: "HEAD", headers: { authorization: `Bearer ${o10}` } }), void s2.set(o10, true);
    }
    throw createError({ statusCode: 401, message: "Missing NUXT_HUB_PROJECT_SECRET_KEY envrionment variable or NUXT_HUB_PROJECT_KEY envrionment variable" });
  }
}
var s2;
var init_auth = __esm({
  ".wrangler/tmp/pages-WENPGt/chunks/_/auth.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    init_runtime();
    s2 = /* @__PURE__ */ new Map();
  }
});

// .wrangler/tmp/pages-WENPGt/chunks/routes/api/index.head.mjs
var index_head_exports = {};
__export(index_head_exports, {
  default: () => m2
});
var m2;
var init_index_head = __esm({
  ".wrangler/tmp/pages-WENPGt/chunks/routes/api/index.head.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    init_runtime();
    init_auth();
    m2 = Re(async (a4) => (await requireNuxtHubAuthorization(a4), sendNoContent(a4)));
  }
});

// .wrangler/tmp/pages-WENPGt/chunks/_/index.mjs
function hubDatabase() {
  if (requireNuxtHubFeature("database"), i2)
    return i2;
  const o10 = useRuntimeConfig2().hub, d3 = B2.env.DB || globalThis.__env__?.DB || globalThis.DB;
  if (o10.remote && o10.projectUrl && !d3)
    return i2 = function(e6, t5) {
      requireNuxtHubFeature("database");
      const a4 = Le3.create({ baseURL: joinURL(e6, "/api/_hub/database"), method: "POST", headers: { Authorization: `Bearer ${t5}` } });
      return { exec: async (e7) => a4("/exec", { body: { query: e7 } }).catch(handleProxyError), dump: async () => a4("/dump").catch(handleProxyError), prepare(e7) {
        const t6 = { _body: { query: e7, params: [] }, bind: (...a5) => ({ ...t6, _body: { query: e7, params: a5 } }), async all() {
          return a4("/all", { body: this._body }).catch(handleProxyError);
        }, async raw(e8) {
          return a4("/raw", { body: { ...this._body, ...e8 } }).catch(handleProxyError);
        }, async run() {
          return a4("/run", { body: this._body }).catch(handleProxyError);
        }, async first(e8) {
          return a4("/first", { body: { ...this._body, colName: e8 } }).catch(handleProxyError).then((e9) => e9 || null);
        } };
        return t6;
      }, batch: (e7) => a4("/batch", { body: e7.map((e8) => e8._body) }) };
    }(o10.projectUrl, o10.projectSecretKey || o10.userToken), i2;
  if (d3)
    return i2 = d3, i2;
  throw createError("Missing Cloudflare DB binding (D1)");
}
function handleProxyError(e6) {
  throw createError({ statusCode: e6.statusCode, message: e6.data?.message || e6.message });
}
function getErrorMap() {
  return l;
}
function addIssueToContext(e6, t5) {
  const a4 = getErrorMap(), s4 = makeIssue({ issueData: t5, data: e6.data, path: e6.path, errorMaps: [e6.common.contextualErrorMap, e6.schemaErrorMap, a4, a4 === errorMap ? void 0 : errorMap].filter((e7) => !!e7) });
  e6.common.issues.push(s4);
}
function __classPrivateFieldGet(e6, t5, a4, s4) {
  if ("function" == typeof t5 ? e6 !== t5 || !s4 : !t5.has(e6))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return t5.get(e6);
}
function __classPrivateFieldSet(e6, t5, a4, s4, r4) {
  if ("function" == typeof t5 ? e6 !== t5 || !r4 : !t5.has(e6))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return t5.set(e6, a4), a4;
}
function processCreateParams(e6) {
  if (!e6)
    return {};
  const { errorMap: t5, invalid_type_error: a4, required_error: s4, description: r4 } = e6;
  if (t5 && (a4 || s4))
    throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  if (t5)
    return { errorMap: t5, description: r4 };
  return { errorMap: (t6, r5) => {
    var n2, i6;
    const { message: o10 } = e6;
    return "invalid_enum_value" === t6.code ? { message: null != o10 ? o10 : r5.defaultError } : void 0 === r5.data ? { message: null !== (n2 = null != o10 ? o10 : s4) && void 0 !== n2 ? n2 : r5.defaultError } : "invalid_type" !== t6.code ? { message: r5.defaultError } : { message: null !== (i6 = null != o10 ? o10 : a4) && void 0 !== i6 ? i6 : r5.defaultError };
  }, description: r4 };
}
function timeRegexSource(e6) {
  let t5 = "([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d";
  return e6.precision ? t5 = `${t5}\\.\\d{${e6.precision}}` : null == e6.precision && (t5 = `${t5}(\\.\\d+)?`), t5;
}
function datetimeRegex(e6) {
  let t5 = `${P2}T${timeRegexSource(e6)}`;
  const a4 = [];
  return a4.push(e6.local ? "Z?" : "Z"), e6.offset && a4.push("([+-]\\d{2}:?\\d{2})"), t5 = `${t5}(${a4.join("|")})`, new RegExp(`^${t5}$`);
}
function floatSafeRemainder(e6, t5) {
  const a4 = (e6.toString().split(".")[1] || "").length, s4 = (t5.toString().split(".")[1] || "").length, r4 = a4 > s4 ? a4 : s4;
  return parseInt(e6.toFixed(r4).replace(".", "")) % parseInt(t5.toFixed(r4).replace(".", "")) / Math.pow(10, r4);
}
function deepPartialify(e6) {
  if (e6 instanceof ZodObject) {
    const t5 = {};
    for (const a4 in e6.shape) {
      const s4 = e6.shape[a4];
      t5[a4] = ZodOptional.create(deepPartialify(s4));
    }
    return new ZodObject({ ...e6._def, shape: () => t5 });
  }
  return e6 instanceof ZodArray ? new ZodArray({ ...e6._def, type: deepPartialify(e6.element) }) : e6 instanceof ZodOptional ? ZodOptional.create(deepPartialify(e6.unwrap())) : e6 instanceof ZodNullable ? ZodNullable.create(deepPartialify(e6.unwrap())) : e6 instanceof ZodTuple ? ZodTuple.create(e6.items.map((e7) => deepPartialify(e7))) : e6;
}
function mergeValues(e6, t5) {
  const a4 = getParsedType(e6), s4 = getParsedType(t5);
  if (e6 === t5)
    return { valid: true, data: e6 };
  if (a4 === u2.object && s4 === u2.object) {
    const a5 = o6.objectKeys(t5), s5 = o6.objectKeys(e6).filter((e7) => -1 !== a5.indexOf(e7)), r4 = { ...e6, ...t5 };
    for (const a6 of s5) {
      const s6 = mergeValues(e6[a6], t5[a6]);
      if (!s6.valid)
        return { valid: false };
      r4[a6] = s6.data;
    }
    return { valid: true, data: r4 };
  }
  if (a4 === u2.array && s4 === u2.array) {
    if (e6.length !== t5.length)
      return { valid: false };
    const a5 = [];
    for (let s5 = 0; s5 < e6.length; s5++) {
      const r4 = mergeValues(e6[s5], t5[s5]);
      if (!r4.valid)
        return { valid: false };
      a5.push(r4.data);
    }
    return { valid: true, data: a5 };
  }
  return a4 === u2.date && s4 === u2.date && +e6 == +t5 ? { valid: true, data: e6 } : { valid: false };
}
function createZodEnum(e6, t5) {
  return new ZodEnum({ values: e6, typeName: O2.ZodEnum, ...processCreateParams(t5) });
}
function custom(e6, t5 = {}, a4) {
  return e6 ? ZodAny.create().superRefine((s4, r4) => {
    var n2, i6;
    if (!e6(s4)) {
      const e7 = "function" == typeof t5 ? t5(s4) : "string" == typeof t5 ? { message: t5 } : t5, o10 = null === (i6 = null !== (n2 = e7.fatal) && void 0 !== n2 ? n2 : a4) || void 0 === i6 || i6, d3 = "string" == typeof e7 ? { message: e7 } : e7;
      r4.addIssue({ code: "custom", ...d3, fatal: o10 });
    }
  }) : ZodAny.create();
}
var i2, o6, d, u2, getParsedType, c, ZodError, errorMap, l, makeIssue, ParseStatus, p, DIRTY, OK, isAborted, isDirty, isValid, isAsync, h2, m3, f, ParseInputLazyPath, handleResult, ZodType, y2, _2, v2, g, Z2, x2, b2, k2, T2, C2, w2, P2, I2, ZodString, ZodNumber, ZodBigInt, ZodBoolean, ZodDate, ZodSymbol, ZodUndefined, ZodNull, ZodAny, ZodUnknown, ZodNever, ZodVoid, ZodArray, ZodObject, ZodUnion, getDiscriminator, ZodDiscriminatedUnion, ZodIntersection, ZodTuple, ZodRecord, ZodMap, ZodSet, ZodFunction, ZodLazy, ZodLiteral, ZodEnum, ZodNativeEnum, ZodPromise, ZodEffects, ZodOptional, ZodNullable, ZodDefault, ZodCatch, ZodNaN, N3, ZodBranded, ZodPipeline, ZodReadonly, S2, O2, E2, j3, R2, A2, L2, M2, $2, D2, U2, z3, V2, B3, F2, K2, W2, q3, G2, J2, Y2, H2, X3, Q3, ee3, te4, ae3, se3, re3, ne3, ie3, oe3, de3, ue3, ce3, le3, pe3, he4, me3;
var init__ = __esm({
  ".wrangler/tmp/pages-WENPGt/chunks/_/index.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    init_runtime();
    init_features();
    !function(e6) {
      e6.assertEqual = (e7) => e7, e6.assertIs = function(e7) {
      }, e6.assertNever = function(e7) {
        throw new Error();
      }, e6.arrayToEnum = (e7) => {
        const t5 = {};
        for (const a4 of e7)
          t5[a4] = a4;
        return t5;
      }, e6.getValidEnumValues = (t5) => {
        const a4 = e6.objectKeys(t5).filter((e7) => "number" != typeof t5[t5[e7]]), s4 = {};
        for (const e7 of a4)
          s4[e7] = t5[e7];
        return e6.objectValues(s4);
      }, e6.objectValues = (t5) => e6.objectKeys(t5).map(function(e7) {
        return t5[e7];
      }), e6.objectKeys = "function" == typeof Object.keys ? (e7) => Object.keys(e7) : (e7) => {
        const t5 = [];
        for (const a4 in e7)
          Object.prototype.hasOwnProperty.call(e7, a4) && t5.push(a4);
        return t5;
      }, e6.find = (e7, t5) => {
        for (const a4 of e7)
          if (t5(a4))
            return a4;
      }, e6.isInteger = "function" == typeof Number.isInteger ? (e7) => Number.isInteger(e7) : (e7) => "number" == typeof e7 && isFinite(e7) && Math.floor(e7) === e7, e6.joinValues = function(e7, t5 = " | ") {
        return e7.map((e8) => "string" == typeof e8 ? `'${e8}'` : e8).join(t5);
      }, e6.jsonStringifyReplacer = (e7, t5) => "bigint" == typeof t5 ? t5.toString() : t5;
    }(o6 || (o6 = {})), function(e6) {
      e6.mergeShapes = (e7, t5) => ({ ...e7, ...t5 });
    }(d || (d = {}));
    u2 = o6.arrayToEnum(["string", "nan", "number", "integer", "float", "boolean", "date", "bigint", "symbol", "function", "undefined", "null", "array", "object", "unknown", "promise", "void", "never", "map", "set"]);
    getParsedType = (e6) => {
      switch (typeof e6) {
        case "undefined":
          return u2.undefined;
        case "string":
          return u2.string;
        case "number":
          return isNaN(e6) ? u2.nan : u2.number;
        case "boolean":
          return u2.boolean;
        case "function":
          return u2.function;
        case "bigint":
          return u2.bigint;
        case "symbol":
          return u2.symbol;
        case "object":
          return Array.isArray(e6) ? u2.array : null === e6 ? u2.null : e6.then && "function" == typeof e6.then && e6.catch && "function" == typeof e6.catch ? u2.promise : "undefined" != typeof Map && e6 instanceof Map ? u2.map : "undefined" != typeof Set && e6 instanceof Set ? u2.set : "undefined" != typeof Date && e6 instanceof Date ? u2.date : u2.object;
        default:
          return u2.unknown;
      }
    };
    c = o6.arrayToEnum(["invalid_type", "invalid_literal", "custom", "invalid_union", "invalid_union_discriminator", "invalid_enum_value", "unrecognized_keys", "invalid_arguments", "invalid_return_type", "invalid_date", "invalid_string", "too_small", "too_big", "invalid_intersection_types", "not_multiple_of", "not_finite"]);
    ZodError = class extends Error {
      constructor(e6) {
        super(), this.issues = [], this.addIssue = (e7) => {
          this.issues = [...this.issues, e7];
        }, this.addIssues = (e7 = []) => {
          this.issues = [...this.issues, ...e7];
        };
        const t5 = new.target.prototype;
        Object.setPrototypeOf ? Object.setPrototypeOf(this, t5) : this.__proto__ = t5, this.name = "ZodError", this.issues = e6;
      }
      get errors() {
        return this.issues;
      }
      format(e6) {
        const t5 = e6 || function(e7) {
          return e7.message;
        }, a4 = { _errors: [] }, processError = (e7) => {
          for (const s4 of e7.issues)
            if ("invalid_union" === s4.code)
              s4.unionErrors.map(processError);
            else if ("invalid_return_type" === s4.code)
              processError(s4.returnTypeError);
            else if ("invalid_arguments" === s4.code)
              processError(s4.argumentsError);
            else if (0 === s4.path.length)
              a4._errors.push(t5(s4));
            else {
              let e8 = a4, r4 = 0;
              for (; r4 < s4.path.length; ) {
                const a5 = s4.path[r4];
                r4 === s4.path.length - 1 ? (e8[a5] = e8[a5] || { _errors: [] }, e8[a5]._errors.push(t5(s4))) : e8[a5] = e8[a5] || { _errors: [] }, e8 = e8[a5], r4++;
              }
            }
        };
        return processError(this), a4;
      }
      static assert(e6) {
        if (!(e6 instanceof ZodError))
          throw new Error(`Not a ZodError: ${e6}`);
      }
      toString() {
        return this.message;
      }
      get message() {
        return JSON.stringify(this.issues, o6.jsonStringifyReplacer, 2);
      }
      get isEmpty() {
        return 0 === this.issues.length;
      }
      flatten(e6 = (e7) => e7.message) {
        const t5 = {}, a4 = [];
        for (const s4 of this.issues)
          s4.path.length > 0 ? (t5[s4.path[0]] = t5[s4.path[0]] || [], t5[s4.path[0]].push(e6(s4))) : a4.push(e6(s4));
        return { formErrors: a4, fieldErrors: t5 };
      }
      get formErrors() {
        return this.flatten();
      }
    };
    ZodError.create = (e6) => new ZodError(e6);
    errorMap = (e6, t5) => {
      let a4;
      switch (e6.code) {
        case c.invalid_type:
          a4 = e6.received === u2.undefined ? "Required" : `Expected ${e6.expected}, received ${e6.received}`;
          break;
        case c.invalid_literal:
          a4 = `Invalid literal value, expected ${JSON.stringify(e6.expected, o6.jsonStringifyReplacer)}`;
          break;
        case c.unrecognized_keys:
          a4 = `Unrecognized key(s) in object: ${o6.joinValues(e6.keys, ", ")}`;
          break;
        case c.invalid_union:
          a4 = "Invalid input";
          break;
        case c.invalid_union_discriminator:
          a4 = `Invalid discriminator value. Expected ${o6.joinValues(e6.options)}`;
          break;
        case c.invalid_enum_value:
          a4 = `Invalid enum value. Expected ${o6.joinValues(e6.options)}, received '${e6.received}'`;
          break;
        case c.invalid_arguments:
          a4 = "Invalid function arguments";
          break;
        case c.invalid_return_type:
          a4 = "Invalid function return type";
          break;
        case c.invalid_date:
          a4 = "Invalid date";
          break;
        case c.invalid_string:
          "object" == typeof e6.validation ? "includes" in e6.validation ? (a4 = `Invalid input: must include "${e6.validation.includes}"`, "number" == typeof e6.validation.position && (a4 = `${a4} at one or more positions greater than or equal to ${e6.validation.position}`)) : "startsWith" in e6.validation ? a4 = `Invalid input: must start with "${e6.validation.startsWith}"` : "endsWith" in e6.validation ? a4 = `Invalid input: must end with "${e6.validation.endsWith}"` : o6.assertNever(e6.validation) : a4 = "regex" !== e6.validation ? `Invalid ${e6.validation}` : "Invalid";
          break;
        case c.too_small:
          a4 = "array" === e6.type ? `Array must contain ${e6.exact ? "exactly" : e6.inclusive ? "at least" : "more than"} ${e6.minimum} element(s)` : "string" === e6.type ? `String must contain ${e6.exact ? "exactly" : e6.inclusive ? "at least" : "over"} ${e6.minimum} character(s)` : "number" === e6.type ? `Number must be ${e6.exact ? "exactly equal to " : e6.inclusive ? "greater than or equal to " : "greater than "}${e6.minimum}` : "date" === e6.type ? `Date must be ${e6.exact ? "exactly equal to " : e6.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(e6.minimum))}` : "Invalid input";
          break;
        case c.too_big:
          a4 = "array" === e6.type ? `Array must contain ${e6.exact ? "exactly" : e6.inclusive ? "at most" : "less than"} ${e6.maximum} element(s)` : "string" === e6.type ? `String must contain ${e6.exact ? "exactly" : e6.inclusive ? "at most" : "under"} ${e6.maximum} character(s)` : "number" === e6.type ? `Number must be ${e6.exact ? "exactly" : e6.inclusive ? "less than or equal to" : "less than"} ${e6.maximum}` : "bigint" === e6.type ? `BigInt must be ${e6.exact ? "exactly" : e6.inclusive ? "less than or equal to" : "less than"} ${e6.maximum}` : "date" === e6.type ? `Date must be ${e6.exact ? "exactly" : e6.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(e6.maximum))}` : "Invalid input";
          break;
        case c.custom:
          a4 = "Invalid input";
          break;
        case c.invalid_intersection_types:
          a4 = "Intersection results could not be merged";
          break;
        case c.not_multiple_of:
          a4 = `Number must be a multiple of ${e6.multipleOf}`;
          break;
        case c.not_finite:
          a4 = "Number must be finite";
          break;
        default:
          a4 = t5.defaultError, o6.assertNever(e6);
      }
      return { message: a4 };
    };
    l = errorMap;
    makeIssue = (e6) => {
      const { data: t5, path: a4, errorMaps: s4, issueData: r4 } = e6, n2 = [...a4, ...r4.path || []], i6 = { ...r4, path: n2 };
      if (void 0 !== r4.message)
        return { ...r4, path: n2, message: r4.message };
      let o10 = "";
      const d3 = s4.filter((e7) => !!e7).slice().reverse();
      for (const e7 of d3)
        o10 = e7(i6, { data: t5, defaultError: o10 }).message;
      return { ...r4, path: n2, message: o10 };
    };
    ParseStatus = class {
      constructor() {
        this.value = "valid";
      }
      dirty() {
        "valid" === this.value && (this.value = "dirty");
      }
      abort() {
        "aborted" !== this.value && (this.value = "aborted");
      }
      static mergeArray(e6, t5) {
        const a4 = [];
        for (const s4 of t5) {
          if ("aborted" === s4.status)
            return p;
          "dirty" === s4.status && e6.dirty(), a4.push(s4.value);
        }
        return { status: e6.value, value: a4 };
      }
      static async mergeObjectAsync(e6, t5) {
        const a4 = [];
        for (const e7 of t5) {
          const t6 = await e7.key, s4 = await e7.value;
          a4.push({ key: t6, value: s4 });
        }
        return ParseStatus.mergeObjectSync(e6, a4);
      }
      static mergeObjectSync(e6, t5) {
        const a4 = {};
        for (const s4 of t5) {
          const { key: t6, value: r4 } = s4;
          if ("aborted" === t6.status)
            return p;
          if ("aborted" === r4.status)
            return p;
          "dirty" === t6.status && e6.dirty(), "dirty" === r4.status && e6.dirty(), "__proto__" === t6.value || void 0 === r4.value && !s4.alwaysSet || (a4[t6.value] = r4.value);
        }
        return { status: e6.value, value: a4 };
      }
    };
    p = Object.freeze({ status: "aborted" });
    DIRTY = (e6) => ({ status: "dirty", value: e6 });
    OK = (e6) => ({ status: "valid", value: e6 });
    isAborted = (e6) => "aborted" === e6.status;
    isDirty = (e6) => "dirty" === e6.status;
    isValid = (e6) => "valid" === e6.status;
    isAsync = (e6) => "undefined" != typeof Promise && e6 instanceof Promise;
    "function" == typeof SuppressedError && SuppressedError, function(e6) {
      e6.errToObj = (e7) => "string" == typeof e7 ? { message: e7 } : e7 || {}, e6.toString = (e7) => "string" == typeof e7 ? e7 : null == e7 ? void 0 : e7.message;
    }(h2 || (h2 = {}));
    ParseInputLazyPath = class {
      constructor(e6, t5, a4, s4) {
        this._cachedPath = [], this.parent = e6, this.data = t5, this._path = a4, this._key = s4;
      }
      get path() {
        return this._cachedPath.length || (this._key instanceof Array ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath;
      }
    };
    handleResult = (e6, t5) => {
      if (isValid(t5))
        return { success: true, data: t5.value };
      if (!e6.common.issues.length)
        throw new Error("Validation failed but no issues detected.");
      return { success: false, get error() {
        if (this._error)
          return this._error;
        const t6 = new ZodError(e6.common.issues);
        return this._error = t6, this._error;
      } };
    };
    ZodType = class {
      constructor(e6) {
        this.spa = this.safeParseAsync, this._def = e6, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.readonly = this.readonly.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this);
      }
      get description() {
        return this._def.description;
      }
      _getType(e6) {
        return getParsedType(e6.data);
      }
      _getOrReturnCtx(e6, t5) {
        return t5 || { common: e6.parent.common, data: e6.data, parsedType: getParsedType(e6.data), schemaErrorMap: this._def.errorMap, path: e6.path, parent: e6.parent };
      }
      _processInputParams(e6) {
        return { status: new ParseStatus(), ctx: { common: e6.parent.common, data: e6.data, parsedType: getParsedType(e6.data), schemaErrorMap: this._def.errorMap, path: e6.path, parent: e6.parent } };
      }
      _parseSync(e6) {
        const t5 = this._parse(e6);
        if (isAsync(t5))
          throw new Error("Synchronous parse encountered promise.");
        return t5;
      }
      _parseAsync(e6) {
        const t5 = this._parse(e6);
        return Promise.resolve(t5);
      }
      parse(e6, t5) {
        const a4 = this.safeParse(e6, t5);
        if (a4.success)
          return a4.data;
        throw a4.error;
      }
      safeParse(e6, t5) {
        var a4;
        const s4 = { common: { issues: [], async: null !== (a4 = null == t5 ? void 0 : t5.async) && void 0 !== a4 && a4, contextualErrorMap: null == t5 ? void 0 : t5.errorMap }, path: (null == t5 ? void 0 : t5.path) || [], schemaErrorMap: this._def.errorMap, parent: null, data: e6, parsedType: getParsedType(e6) }, r4 = this._parseSync({ data: e6, path: s4.path, parent: s4 });
        return handleResult(s4, r4);
      }
      async parseAsync(e6, t5) {
        const a4 = await this.safeParseAsync(e6, t5);
        if (a4.success)
          return a4.data;
        throw a4.error;
      }
      async safeParseAsync(e6, t5) {
        const a4 = { common: { issues: [], contextualErrorMap: null == t5 ? void 0 : t5.errorMap, async: true }, path: (null == t5 ? void 0 : t5.path) || [], schemaErrorMap: this._def.errorMap, parent: null, data: e6, parsedType: getParsedType(e6) }, s4 = this._parse({ data: e6, path: a4.path, parent: a4 }), r4 = await (isAsync(s4) ? s4 : Promise.resolve(s4));
        return handleResult(a4, r4);
      }
      refine(e6, t5) {
        const getIssueProperties = (e7) => "string" == typeof t5 || void 0 === t5 ? { message: t5 } : "function" == typeof t5 ? t5(e7) : t5;
        return this._refinement((t6, a4) => {
          const s4 = e6(t6), setError = () => a4.addIssue({ code: c.custom, ...getIssueProperties(t6) });
          return "undefined" != typeof Promise && s4 instanceof Promise ? s4.then((e7) => !!e7 || (setError(), false)) : !!s4 || (setError(), false);
        });
      }
      refinement(e6, t5) {
        return this._refinement((a4, s4) => !!e6(a4) || (s4.addIssue("function" == typeof t5 ? t5(a4, s4) : t5), false));
      }
      _refinement(e6) {
        return new ZodEffects({ schema: this, typeName: O2.ZodEffects, effect: { type: "refinement", refinement: e6 } });
      }
      superRefine(e6) {
        return this._refinement(e6);
      }
      optional() {
        return ZodOptional.create(this, this._def);
      }
      nullable() {
        return ZodNullable.create(this, this._def);
      }
      nullish() {
        return this.nullable().optional();
      }
      array() {
        return ZodArray.create(this, this._def);
      }
      promise() {
        return ZodPromise.create(this, this._def);
      }
      or(e6) {
        return ZodUnion.create([this, e6], this._def);
      }
      and(e6) {
        return ZodIntersection.create(this, e6, this._def);
      }
      transform(e6) {
        return new ZodEffects({ ...processCreateParams(this._def), schema: this, typeName: O2.ZodEffects, effect: { type: "transform", transform: e6 } });
      }
      default(e6) {
        const t5 = "function" == typeof e6 ? e6 : () => e6;
        return new ZodDefault({ ...processCreateParams(this._def), innerType: this, defaultValue: t5, typeName: O2.ZodDefault });
      }
      brand() {
        return new ZodBranded({ typeName: O2.ZodBranded, type: this, ...processCreateParams(this._def) });
      }
      catch(e6) {
        const t5 = "function" == typeof e6 ? e6 : () => e6;
        return new ZodCatch({ ...processCreateParams(this._def), innerType: this, catchValue: t5, typeName: O2.ZodCatch });
      }
      describe(e6) {
        return new (0, this.constructor)({ ...this._def, description: e6 });
      }
      pipe(e6) {
        return ZodPipeline.create(this, e6);
      }
      readonly() {
        return ZodReadonly.create(this);
      }
      isOptional() {
        return this.safeParse(void 0).success;
      }
      isNullable() {
        return this.safeParse(null).success;
      }
    };
    y2 = /^c[^\s-]{8,}$/i;
    _2 = /^[0-9a-z]+$/;
    v2 = /^[0-9A-HJKMNP-TV-Z]{26}$/;
    g = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i;
    Z2 = /^[a-z0-9_-]{21}$/i;
    x2 = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/;
    b2 = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;
    T2 = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/;
    C2 = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/;
    w2 = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
    P2 = "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))";
    I2 = new RegExp(`^${P2}$`);
    ZodString = class extends ZodType {
      _parse(e6) {
        this._def.coerce && (e6.data = String(e6.data));
        if (this._getType(e6) !== u2.string) {
          const t6 = this._getOrReturnCtx(e6);
          return addIssueToContext(t6, { code: c.invalid_type, expected: u2.string, received: t6.parsedType }), p;
        }
        const t5 = new ParseStatus();
        let a4;
        for (const n2 of this._def.checks)
          if ("min" === n2.kind)
            e6.data.length < n2.value && (a4 = this._getOrReturnCtx(e6, a4), addIssueToContext(a4, { code: c.too_small, minimum: n2.value, type: "string", inclusive: true, exact: false, message: n2.message }), t5.dirty());
          else if ("max" === n2.kind)
            e6.data.length > n2.value && (a4 = this._getOrReturnCtx(e6, a4), addIssueToContext(a4, { code: c.too_big, maximum: n2.value, type: "string", inclusive: true, exact: false, message: n2.message }), t5.dirty());
          else if ("length" === n2.kind) {
            const s5 = e6.data.length > n2.value, r5 = e6.data.length < n2.value;
            (s5 || r5) && (a4 = this._getOrReturnCtx(e6, a4), s5 ? addIssueToContext(a4, { code: c.too_big, maximum: n2.value, type: "string", inclusive: true, exact: true, message: n2.message }) : r5 && addIssueToContext(a4, { code: c.too_small, minimum: n2.value, type: "string", inclusive: true, exact: true, message: n2.message }), t5.dirty());
          } else if ("email" === n2.kind)
            b2.test(e6.data) || (a4 = this._getOrReturnCtx(e6, a4), addIssueToContext(a4, { validation: "email", code: c.invalid_string, message: n2.message }), t5.dirty());
          else if ("emoji" === n2.kind)
            k2 || (k2 = new RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$", "u")), k2.test(e6.data) || (a4 = this._getOrReturnCtx(e6, a4), addIssueToContext(a4, { validation: "emoji", code: c.invalid_string, message: n2.message }), t5.dirty());
          else if ("uuid" === n2.kind)
            g.test(e6.data) || (a4 = this._getOrReturnCtx(e6, a4), addIssueToContext(a4, { validation: "uuid", code: c.invalid_string, message: n2.message }), t5.dirty());
          else if ("nanoid" === n2.kind)
            Z2.test(e6.data) || (a4 = this._getOrReturnCtx(e6, a4), addIssueToContext(a4, { validation: "nanoid", code: c.invalid_string, message: n2.message }), t5.dirty());
          else if ("cuid" === n2.kind)
            y2.test(e6.data) || (a4 = this._getOrReturnCtx(e6, a4), addIssueToContext(a4, { validation: "cuid", code: c.invalid_string, message: n2.message }), t5.dirty());
          else if ("cuid2" === n2.kind)
            _2.test(e6.data) || (a4 = this._getOrReturnCtx(e6, a4), addIssueToContext(a4, { validation: "cuid2", code: c.invalid_string, message: n2.message }), t5.dirty());
          else if ("ulid" === n2.kind)
            v2.test(e6.data) || (a4 = this._getOrReturnCtx(e6, a4), addIssueToContext(a4, { validation: "ulid", code: c.invalid_string, message: n2.message }), t5.dirty());
          else if ("url" === n2.kind)
            try {
              new URL(e6.data);
            } catch (s5) {
              a4 = this._getOrReturnCtx(e6, a4), addIssueToContext(a4, { validation: "url", code: c.invalid_string, message: n2.message }), t5.dirty();
            }
          else if ("regex" === n2.kind) {
            n2.regex.lastIndex = 0;
            n2.regex.test(e6.data) || (a4 = this._getOrReturnCtx(e6, a4), addIssueToContext(a4, { validation: "regex", code: c.invalid_string, message: n2.message }), t5.dirty());
          } else if ("trim" === n2.kind)
            e6.data = e6.data.trim();
          else if ("includes" === n2.kind)
            e6.data.includes(n2.value, n2.position) || (a4 = this._getOrReturnCtx(e6, a4), addIssueToContext(a4, { code: c.invalid_string, validation: { includes: n2.value, position: n2.position }, message: n2.message }), t5.dirty());
          else if ("toLowerCase" === n2.kind)
            e6.data = e6.data.toLowerCase();
          else if ("toUpperCase" === n2.kind)
            e6.data = e6.data.toUpperCase();
          else if ("startsWith" === n2.kind)
            e6.data.startsWith(n2.value) || (a4 = this._getOrReturnCtx(e6, a4), addIssueToContext(a4, { code: c.invalid_string, validation: { startsWith: n2.value }, message: n2.message }), t5.dirty());
          else if ("endsWith" === n2.kind)
            e6.data.endsWith(n2.value) || (a4 = this._getOrReturnCtx(e6, a4), addIssueToContext(a4, { code: c.invalid_string, validation: { endsWith: n2.value }, message: n2.message }), t5.dirty());
          else if ("datetime" === n2.kind) {
            datetimeRegex(n2).test(e6.data) || (a4 = this._getOrReturnCtx(e6, a4), addIssueToContext(a4, { code: c.invalid_string, validation: "datetime", message: n2.message }), t5.dirty());
          } else if ("date" === n2.kind) {
            I2.test(e6.data) || (a4 = this._getOrReturnCtx(e6, a4), addIssueToContext(a4, { code: c.invalid_string, validation: "date", message: n2.message }), t5.dirty());
          } else if ("time" === n2.kind) {
            new RegExp(`^${timeRegexSource(n2)}$`).test(e6.data) || (a4 = this._getOrReturnCtx(e6, a4), addIssueToContext(a4, { code: c.invalid_string, validation: "time", message: n2.message }), t5.dirty());
          } else
            "duration" === n2.kind ? x2.test(e6.data) || (a4 = this._getOrReturnCtx(e6, a4), addIssueToContext(a4, { validation: "duration", code: c.invalid_string, message: n2.message }), t5.dirty()) : "ip" === n2.kind ? (s4 = e6.data, ("v4" !== (r4 = n2.version) && r4 || !T2.test(s4)) && ("v6" !== r4 && r4 || !C2.test(s4)) && (a4 = this._getOrReturnCtx(e6, a4), addIssueToContext(a4, { validation: "ip", code: c.invalid_string, message: n2.message }), t5.dirty())) : "base64" === n2.kind ? w2.test(e6.data) || (a4 = this._getOrReturnCtx(e6, a4), addIssueToContext(a4, { validation: "base64", code: c.invalid_string, message: n2.message }), t5.dirty()) : o6.assertNever(n2);
        var s4, r4;
        return { status: t5.value, value: e6.data };
      }
      _regex(e6, t5, a4) {
        return this.refinement((t6) => e6.test(t6), { validation: t5, code: c.invalid_string, ...h2.errToObj(a4) });
      }
      _addCheck(e6) {
        return new ZodString({ ...this._def, checks: [...this._def.checks, e6] });
      }
      email(e6) {
        return this._addCheck({ kind: "email", ...h2.errToObj(e6) });
      }
      url(e6) {
        return this._addCheck({ kind: "url", ...h2.errToObj(e6) });
      }
      emoji(e6) {
        return this._addCheck({ kind: "emoji", ...h2.errToObj(e6) });
      }
      uuid(e6) {
        return this._addCheck({ kind: "uuid", ...h2.errToObj(e6) });
      }
      nanoid(e6) {
        return this._addCheck({ kind: "nanoid", ...h2.errToObj(e6) });
      }
      cuid(e6) {
        return this._addCheck({ kind: "cuid", ...h2.errToObj(e6) });
      }
      cuid2(e6) {
        return this._addCheck({ kind: "cuid2", ...h2.errToObj(e6) });
      }
      ulid(e6) {
        return this._addCheck({ kind: "ulid", ...h2.errToObj(e6) });
      }
      base64(e6) {
        return this._addCheck({ kind: "base64", ...h2.errToObj(e6) });
      }
      ip(e6) {
        return this._addCheck({ kind: "ip", ...h2.errToObj(e6) });
      }
      datetime(e6) {
        var t5, a4;
        return "string" == typeof e6 ? this._addCheck({ kind: "datetime", precision: null, offset: false, local: false, message: e6 }) : this._addCheck({ kind: "datetime", precision: void 0 === (null == e6 ? void 0 : e6.precision) ? null : null == e6 ? void 0 : e6.precision, offset: null !== (t5 = null == e6 ? void 0 : e6.offset) && void 0 !== t5 && t5, local: null !== (a4 = null == e6 ? void 0 : e6.local) && void 0 !== a4 && a4, ...h2.errToObj(null == e6 ? void 0 : e6.message) });
      }
      date(e6) {
        return this._addCheck({ kind: "date", message: e6 });
      }
      time(e6) {
        return "string" == typeof e6 ? this._addCheck({ kind: "time", precision: null, message: e6 }) : this._addCheck({ kind: "time", precision: void 0 === (null == e6 ? void 0 : e6.precision) ? null : null == e6 ? void 0 : e6.precision, ...h2.errToObj(null == e6 ? void 0 : e6.message) });
      }
      duration(e6) {
        return this._addCheck({ kind: "duration", ...h2.errToObj(e6) });
      }
      regex(e6, t5) {
        return this._addCheck({ kind: "regex", regex: e6, ...h2.errToObj(t5) });
      }
      includes(e6, t5) {
        return this._addCheck({ kind: "includes", value: e6, position: null == t5 ? void 0 : t5.position, ...h2.errToObj(null == t5 ? void 0 : t5.message) });
      }
      startsWith(e6, t5) {
        return this._addCheck({ kind: "startsWith", value: e6, ...h2.errToObj(t5) });
      }
      endsWith(e6, t5) {
        return this._addCheck({ kind: "endsWith", value: e6, ...h2.errToObj(t5) });
      }
      min(e6, t5) {
        return this._addCheck({ kind: "min", value: e6, ...h2.errToObj(t5) });
      }
      max(e6, t5) {
        return this._addCheck({ kind: "max", value: e6, ...h2.errToObj(t5) });
      }
      length(e6, t5) {
        return this._addCheck({ kind: "length", value: e6, ...h2.errToObj(t5) });
      }
      nonempty(e6) {
        return this.min(1, h2.errToObj(e6));
      }
      trim() {
        return new ZodString({ ...this._def, checks: [...this._def.checks, { kind: "trim" }] });
      }
      toLowerCase() {
        return new ZodString({ ...this._def, checks: [...this._def.checks, { kind: "toLowerCase" }] });
      }
      toUpperCase() {
        return new ZodString({ ...this._def, checks: [...this._def.checks, { kind: "toUpperCase" }] });
      }
      get isDatetime() {
        return !!this._def.checks.find((e6) => "datetime" === e6.kind);
      }
      get isDate() {
        return !!this._def.checks.find((e6) => "date" === e6.kind);
      }
      get isTime() {
        return !!this._def.checks.find((e6) => "time" === e6.kind);
      }
      get isDuration() {
        return !!this._def.checks.find((e6) => "duration" === e6.kind);
      }
      get isEmail() {
        return !!this._def.checks.find((e6) => "email" === e6.kind);
      }
      get isURL() {
        return !!this._def.checks.find((e6) => "url" === e6.kind);
      }
      get isEmoji() {
        return !!this._def.checks.find((e6) => "emoji" === e6.kind);
      }
      get isUUID() {
        return !!this._def.checks.find((e6) => "uuid" === e6.kind);
      }
      get isNANOID() {
        return !!this._def.checks.find((e6) => "nanoid" === e6.kind);
      }
      get isCUID() {
        return !!this._def.checks.find((e6) => "cuid" === e6.kind);
      }
      get isCUID2() {
        return !!this._def.checks.find((e6) => "cuid2" === e6.kind);
      }
      get isULID() {
        return !!this._def.checks.find((e6) => "ulid" === e6.kind);
      }
      get isIP() {
        return !!this._def.checks.find((e6) => "ip" === e6.kind);
      }
      get isBase64() {
        return !!this._def.checks.find((e6) => "base64" === e6.kind);
      }
      get minLength() {
        let e6 = null;
        for (const t5 of this._def.checks)
          "min" === t5.kind && (null === e6 || t5.value > e6) && (e6 = t5.value);
        return e6;
      }
      get maxLength() {
        let e6 = null;
        for (const t5 of this._def.checks)
          "max" === t5.kind && (null === e6 || t5.value < e6) && (e6 = t5.value);
        return e6;
      }
    };
    ZodString.create = (e6) => {
      var t5;
      return new ZodString({ checks: [], typeName: O2.ZodString, coerce: null !== (t5 = null == e6 ? void 0 : e6.coerce) && void 0 !== t5 && t5, ...processCreateParams(e6) });
    };
    ZodNumber = class extends ZodType {
      constructor() {
        super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf;
      }
      _parse(e6) {
        this._def.coerce && (e6.data = Number(e6.data));
        if (this._getType(e6) !== u2.number) {
          const t6 = this._getOrReturnCtx(e6);
          return addIssueToContext(t6, { code: c.invalid_type, expected: u2.number, received: t6.parsedType }), p;
        }
        let t5;
        const a4 = new ParseStatus();
        for (const s4 of this._def.checks)
          if ("int" === s4.kind)
            o6.isInteger(e6.data) || (t5 = this._getOrReturnCtx(e6, t5), addIssueToContext(t5, { code: c.invalid_type, expected: "integer", received: "float", message: s4.message }), a4.dirty());
          else if ("min" === s4.kind) {
            (s4.inclusive ? e6.data < s4.value : e6.data <= s4.value) && (t5 = this._getOrReturnCtx(e6, t5), addIssueToContext(t5, { code: c.too_small, minimum: s4.value, type: "number", inclusive: s4.inclusive, exact: false, message: s4.message }), a4.dirty());
          } else if ("max" === s4.kind) {
            (s4.inclusive ? e6.data > s4.value : e6.data >= s4.value) && (t5 = this._getOrReturnCtx(e6, t5), addIssueToContext(t5, { code: c.too_big, maximum: s4.value, type: "number", inclusive: s4.inclusive, exact: false, message: s4.message }), a4.dirty());
          } else
            "multipleOf" === s4.kind ? 0 !== floatSafeRemainder(e6.data, s4.value) && (t5 = this._getOrReturnCtx(e6, t5), addIssueToContext(t5, { code: c.not_multiple_of, multipleOf: s4.value, message: s4.message }), a4.dirty()) : "finite" === s4.kind ? Number.isFinite(e6.data) || (t5 = this._getOrReturnCtx(e6, t5), addIssueToContext(t5, { code: c.not_finite, message: s4.message }), a4.dirty()) : o6.assertNever(s4);
        return { status: a4.value, value: e6.data };
      }
      gte(e6, t5) {
        return this.setLimit("min", e6, true, h2.toString(t5));
      }
      gt(e6, t5) {
        return this.setLimit("min", e6, false, h2.toString(t5));
      }
      lte(e6, t5) {
        return this.setLimit("max", e6, true, h2.toString(t5));
      }
      lt(e6, t5) {
        return this.setLimit("max", e6, false, h2.toString(t5));
      }
      setLimit(e6, t5, a4, s4) {
        return new ZodNumber({ ...this._def, checks: [...this._def.checks, { kind: e6, value: t5, inclusive: a4, message: h2.toString(s4) }] });
      }
      _addCheck(e6) {
        return new ZodNumber({ ...this._def, checks: [...this._def.checks, e6] });
      }
      int(e6) {
        return this._addCheck({ kind: "int", message: h2.toString(e6) });
      }
      positive(e6) {
        return this._addCheck({ kind: "min", value: 0, inclusive: false, message: h2.toString(e6) });
      }
      negative(e6) {
        return this._addCheck({ kind: "max", value: 0, inclusive: false, message: h2.toString(e6) });
      }
      nonpositive(e6) {
        return this._addCheck({ kind: "max", value: 0, inclusive: true, message: h2.toString(e6) });
      }
      nonnegative(e6) {
        return this._addCheck({ kind: "min", value: 0, inclusive: true, message: h2.toString(e6) });
      }
      multipleOf(e6, t5) {
        return this._addCheck({ kind: "multipleOf", value: e6, message: h2.toString(t5) });
      }
      finite(e6) {
        return this._addCheck({ kind: "finite", message: h2.toString(e6) });
      }
      safe(e6) {
        return this._addCheck({ kind: "min", inclusive: true, value: Number.MIN_SAFE_INTEGER, message: h2.toString(e6) })._addCheck({ kind: "max", inclusive: true, value: Number.MAX_SAFE_INTEGER, message: h2.toString(e6) });
      }
      get minValue() {
        let e6 = null;
        for (const t5 of this._def.checks)
          "min" === t5.kind && (null === e6 || t5.value > e6) && (e6 = t5.value);
        return e6;
      }
      get maxValue() {
        let e6 = null;
        for (const t5 of this._def.checks)
          "max" === t5.kind && (null === e6 || t5.value < e6) && (e6 = t5.value);
        return e6;
      }
      get isInt() {
        return !!this._def.checks.find((e6) => "int" === e6.kind || "multipleOf" === e6.kind && o6.isInteger(e6.value));
      }
      get isFinite() {
        let e6 = null, t5 = null;
        for (const a4 of this._def.checks) {
          if ("finite" === a4.kind || "int" === a4.kind || "multipleOf" === a4.kind)
            return true;
          "min" === a4.kind ? (null === t5 || a4.value > t5) && (t5 = a4.value) : "max" === a4.kind && (null === e6 || a4.value < e6) && (e6 = a4.value);
        }
        return Number.isFinite(t5) && Number.isFinite(e6);
      }
    };
    ZodNumber.create = (e6) => new ZodNumber({ checks: [], typeName: O2.ZodNumber, coerce: (null == e6 ? void 0 : e6.coerce) || false, ...processCreateParams(e6) });
    ZodBigInt = class extends ZodType {
      constructor() {
        super(...arguments), this.min = this.gte, this.max = this.lte;
      }
      _parse(e6) {
        this._def.coerce && (e6.data = BigInt(e6.data));
        if (this._getType(e6) !== u2.bigint) {
          const t6 = this._getOrReturnCtx(e6);
          return addIssueToContext(t6, { code: c.invalid_type, expected: u2.bigint, received: t6.parsedType }), p;
        }
        let t5;
        const a4 = new ParseStatus();
        for (const s4 of this._def.checks)
          if ("min" === s4.kind) {
            (s4.inclusive ? e6.data < s4.value : e6.data <= s4.value) && (t5 = this._getOrReturnCtx(e6, t5), addIssueToContext(t5, { code: c.too_small, type: "bigint", minimum: s4.value, inclusive: s4.inclusive, message: s4.message }), a4.dirty());
          } else if ("max" === s4.kind) {
            (s4.inclusive ? e6.data > s4.value : e6.data >= s4.value) && (t5 = this._getOrReturnCtx(e6, t5), addIssueToContext(t5, { code: c.too_big, type: "bigint", maximum: s4.value, inclusive: s4.inclusive, message: s4.message }), a4.dirty());
          } else
            "multipleOf" === s4.kind ? e6.data % s4.value !== BigInt(0) && (t5 = this._getOrReturnCtx(e6, t5), addIssueToContext(t5, { code: c.not_multiple_of, multipleOf: s4.value, message: s4.message }), a4.dirty()) : o6.assertNever(s4);
        return { status: a4.value, value: e6.data };
      }
      gte(e6, t5) {
        return this.setLimit("min", e6, true, h2.toString(t5));
      }
      gt(e6, t5) {
        return this.setLimit("min", e6, false, h2.toString(t5));
      }
      lte(e6, t5) {
        return this.setLimit("max", e6, true, h2.toString(t5));
      }
      lt(e6, t5) {
        return this.setLimit("max", e6, false, h2.toString(t5));
      }
      setLimit(e6, t5, a4, s4) {
        return new ZodBigInt({ ...this._def, checks: [...this._def.checks, { kind: e6, value: t5, inclusive: a4, message: h2.toString(s4) }] });
      }
      _addCheck(e6) {
        return new ZodBigInt({ ...this._def, checks: [...this._def.checks, e6] });
      }
      positive(e6) {
        return this._addCheck({ kind: "min", value: BigInt(0), inclusive: false, message: h2.toString(e6) });
      }
      negative(e6) {
        return this._addCheck({ kind: "max", value: BigInt(0), inclusive: false, message: h2.toString(e6) });
      }
      nonpositive(e6) {
        return this._addCheck({ kind: "max", value: BigInt(0), inclusive: true, message: h2.toString(e6) });
      }
      nonnegative(e6) {
        return this._addCheck({ kind: "min", value: BigInt(0), inclusive: true, message: h2.toString(e6) });
      }
      multipleOf(e6, t5) {
        return this._addCheck({ kind: "multipleOf", value: e6, message: h2.toString(t5) });
      }
      get minValue() {
        let e6 = null;
        for (const t5 of this._def.checks)
          "min" === t5.kind && (null === e6 || t5.value > e6) && (e6 = t5.value);
        return e6;
      }
      get maxValue() {
        let e6 = null;
        for (const t5 of this._def.checks)
          "max" === t5.kind && (null === e6 || t5.value < e6) && (e6 = t5.value);
        return e6;
      }
    };
    ZodBigInt.create = (e6) => {
      var t5;
      return new ZodBigInt({ checks: [], typeName: O2.ZodBigInt, coerce: null !== (t5 = null == e6 ? void 0 : e6.coerce) && void 0 !== t5 && t5, ...processCreateParams(e6) });
    };
    ZodBoolean = class extends ZodType {
      _parse(e6) {
        this._def.coerce && (e6.data = Boolean(e6.data));
        if (this._getType(e6) !== u2.boolean) {
          const t5 = this._getOrReturnCtx(e6);
          return addIssueToContext(t5, { code: c.invalid_type, expected: u2.boolean, received: t5.parsedType }), p;
        }
        return OK(e6.data);
      }
    };
    ZodBoolean.create = (e6) => new ZodBoolean({ typeName: O2.ZodBoolean, coerce: (null == e6 ? void 0 : e6.coerce) || false, ...processCreateParams(e6) });
    ZodDate = class extends ZodType {
      _parse(e6) {
        this._def.coerce && (e6.data = new Date(e6.data));
        if (this._getType(e6) !== u2.date) {
          const t6 = this._getOrReturnCtx(e6);
          return addIssueToContext(t6, { code: c.invalid_type, expected: u2.date, received: t6.parsedType }), p;
        }
        if (isNaN(e6.data.getTime())) {
          return addIssueToContext(this._getOrReturnCtx(e6), { code: c.invalid_date }), p;
        }
        const t5 = new ParseStatus();
        let a4;
        for (const s4 of this._def.checks)
          "min" === s4.kind ? e6.data.getTime() < s4.value && (a4 = this._getOrReturnCtx(e6, a4), addIssueToContext(a4, { code: c.too_small, message: s4.message, inclusive: true, exact: false, minimum: s4.value, type: "date" }), t5.dirty()) : "max" === s4.kind ? e6.data.getTime() > s4.value && (a4 = this._getOrReturnCtx(e6, a4), addIssueToContext(a4, { code: c.too_big, message: s4.message, inclusive: true, exact: false, maximum: s4.value, type: "date" }), t5.dirty()) : o6.assertNever(s4);
        return { status: t5.value, value: new Date(e6.data.getTime()) };
      }
      _addCheck(e6) {
        return new ZodDate({ ...this._def, checks: [...this._def.checks, e6] });
      }
      min(e6, t5) {
        return this._addCheck({ kind: "min", value: e6.getTime(), message: h2.toString(t5) });
      }
      max(e6, t5) {
        return this._addCheck({ kind: "max", value: e6.getTime(), message: h2.toString(t5) });
      }
      get minDate() {
        let e6 = null;
        for (const t5 of this._def.checks)
          "min" === t5.kind && (null === e6 || t5.value > e6) && (e6 = t5.value);
        return null != e6 ? new Date(e6) : null;
      }
      get maxDate() {
        let e6 = null;
        for (const t5 of this._def.checks)
          "max" === t5.kind && (null === e6 || t5.value < e6) && (e6 = t5.value);
        return null != e6 ? new Date(e6) : null;
      }
    };
    ZodDate.create = (e6) => new ZodDate({ checks: [], coerce: (null == e6 ? void 0 : e6.coerce) || false, typeName: O2.ZodDate, ...processCreateParams(e6) });
    ZodSymbol = class extends ZodType {
      _parse(e6) {
        if (this._getType(e6) !== u2.symbol) {
          const t5 = this._getOrReturnCtx(e6);
          return addIssueToContext(t5, { code: c.invalid_type, expected: u2.symbol, received: t5.parsedType }), p;
        }
        return OK(e6.data);
      }
    };
    ZodSymbol.create = (e6) => new ZodSymbol({ typeName: O2.ZodSymbol, ...processCreateParams(e6) });
    ZodUndefined = class extends ZodType {
      _parse(e6) {
        if (this._getType(e6) !== u2.undefined) {
          const t5 = this._getOrReturnCtx(e6);
          return addIssueToContext(t5, { code: c.invalid_type, expected: u2.undefined, received: t5.parsedType }), p;
        }
        return OK(e6.data);
      }
    };
    ZodUndefined.create = (e6) => new ZodUndefined({ typeName: O2.ZodUndefined, ...processCreateParams(e6) });
    ZodNull = class extends ZodType {
      _parse(e6) {
        if (this._getType(e6) !== u2.null) {
          const t5 = this._getOrReturnCtx(e6);
          return addIssueToContext(t5, { code: c.invalid_type, expected: u2.null, received: t5.parsedType }), p;
        }
        return OK(e6.data);
      }
    };
    ZodNull.create = (e6) => new ZodNull({ typeName: O2.ZodNull, ...processCreateParams(e6) });
    ZodAny = class extends ZodType {
      constructor() {
        super(...arguments), this._any = true;
      }
      _parse(e6) {
        return OK(e6.data);
      }
    };
    ZodAny.create = (e6) => new ZodAny({ typeName: O2.ZodAny, ...processCreateParams(e6) });
    ZodUnknown = class extends ZodType {
      constructor() {
        super(...arguments), this._unknown = true;
      }
      _parse(e6) {
        return OK(e6.data);
      }
    };
    ZodUnknown.create = (e6) => new ZodUnknown({ typeName: O2.ZodUnknown, ...processCreateParams(e6) });
    ZodNever = class extends ZodType {
      _parse(e6) {
        const t5 = this._getOrReturnCtx(e6);
        return addIssueToContext(t5, { code: c.invalid_type, expected: u2.never, received: t5.parsedType }), p;
      }
    };
    ZodNever.create = (e6) => new ZodNever({ typeName: O2.ZodNever, ...processCreateParams(e6) });
    ZodVoid = class extends ZodType {
      _parse(e6) {
        if (this._getType(e6) !== u2.undefined) {
          const t5 = this._getOrReturnCtx(e6);
          return addIssueToContext(t5, { code: c.invalid_type, expected: u2.void, received: t5.parsedType }), p;
        }
        return OK(e6.data);
      }
    };
    ZodVoid.create = (e6) => new ZodVoid({ typeName: O2.ZodVoid, ...processCreateParams(e6) });
    ZodArray = class extends ZodType {
      _parse(e6) {
        const { ctx: t5, status: a4 } = this._processInputParams(e6), s4 = this._def;
        if (t5.parsedType !== u2.array)
          return addIssueToContext(t5, { code: c.invalid_type, expected: u2.array, received: t5.parsedType }), p;
        if (null !== s4.exactLength) {
          const e7 = t5.data.length > s4.exactLength.value, r5 = t5.data.length < s4.exactLength.value;
          (e7 || r5) && (addIssueToContext(t5, { code: e7 ? c.too_big : c.too_small, minimum: r5 ? s4.exactLength.value : void 0, maximum: e7 ? s4.exactLength.value : void 0, type: "array", inclusive: true, exact: true, message: s4.exactLength.message }), a4.dirty());
        }
        if (null !== s4.minLength && t5.data.length < s4.minLength.value && (addIssueToContext(t5, { code: c.too_small, minimum: s4.minLength.value, type: "array", inclusive: true, exact: false, message: s4.minLength.message }), a4.dirty()), null !== s4.maxLength && t5.data.length > s4.maxLength.value && (addIssueToContext(t5, { code: c.too_big, maximum: s4.maxLength.value, type: "array", inclusive: true, exact: false, message: s4.maxLength.message }), a4.dirty()), t5.common.async)
          return Promise.all([...t5.data].map((e7, a5) => s4.type._parseAsync(new ParseInputLazyPath(t5, e7, t5.path, a5)))).then((e7) => ParseStatus.mergeArray(a4, e7));
        const r4 = [...t5.data].map((e7, a5) => s4.type._parseSync(new ParseInputLazyPath(t5, e7, t5.path, a5)));
        return ParseStatus.mergeArray(a4, r4);
      }
      get element() {
        return this._def.type;
      }
      min(e6, t5) {
        return new ZodArray({ ...this._def, minLength: { value: e6, message: h2.toString(t5) } });
      }
      max(e6, t5) {
        return new ZodArray({ ...this._def, maxLength: { value: e6, message: h2.toString(t5) } });
      }
      length(e6, t5) {
        return new ZodArray({ ...this._def, exactLength: { value: e6, message: h2.toString(t5) } });
      }
      nonempty(e6) {
        return this.min(1, e6);
      }
    };
    ZodArray.create = (e6, t5) => new ZodArray({ type: e6, minLength: null, maxLength: null, exactLength: null, typeName: O2.ZodArray, ...processCreateParams(t5) });
    ZodObject = class extends ZodType {
      constructor() {
        super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend;
      }
      _getCached() {
        if (null !== this._cached)
          return this._cached;
        const e6 = this._def.shape(), t5 = o6.objectKeys(e6);
        return this._cached = { shape: e6, keys: t5 };
      }
      _parse(e6) {
        if (this._getType(e6) !== u2.object) {
          const t6 = this._getOrReturnCtx(e6);
          return addIssueToContext(t6, { code: c.invalid_type, expected: u2.object, received: t6.parsedType }), p;
        }
        const { status: t5, ctx: a4 } = this._processInputParams(e6), { shape: s4, keys: r4 } = this._getCached(), n2 = [];
        if (!(this._def.catchall instanceof ZodNever && "strip" === this._def.unknownKeys))
          for (const e7 in a4.data)
            r4.includes(e7) || n2.push(e7);
        const i6 = [];
        for (const e7 of r4) {
          const t6 = s4[e7], r5 = a4.data[e7];
          i6.push({ key: { status: "valid", value: e7 }, value: t6._parse(new ParseInputLazyPath(a4, r5, a4.path, e7)), alwaysSet: e7 in a4.data });
        }
        if (this._def.catchall instanceof ZodNever) {
          const e7 = this._def.unknownKeys;
          if ("passthrough" === e7)
            for (const e8 of n2)
              i6.push({ key: { status: "valid", value: e8 }, value: { status: "valid", value: a4.data[e8] } });
          else if ("strict" === e7)
            n2.length > 0 && (addIssueToContext(a4, { code: c.unrecognized_keys, keys: n2 }), t5.dirty());
          else if ("strip" !== e7)
            throw new Error("Internal ZodObject error: invalid unknownKeys value.");
        } else {
          const e7 = this._def.catchall;
          for (const t6 of n2) {
            const s5 = a4.data[t6];
            i6.push({ key: { status: "valid", value: t6 }, value: e7._parse(new ParseInputLazyPath(a4, s5, a4.path, t6)), alwaysSet: t6 in a4.data });
          }
        }
        return a4.common.async ? Promise.resolve().then(async () => {
          const e7 = [];
          for (const t6 of i6) {
            const a5 = await t6.key, s5 = await t6.value;
            e7.push({ key: a5, value: s5, alwaysSet: t6.alwaysSet });
          }
          return e7;
        }).then((e7) => ParseStatus.mergeObjectSync(t5, e7)) : ParseStatus.mergeObjectSync(t5, i6);
      }
      get shape() {
        return this._def.shape();
      }
      strict(e6) {
        return h2.errToObj, new ZodObject({ ...this._def, unknownKeys: "strict", ...void 0 !== e6 ? { errorMap: (t5, a4) => {
          var s4, r4, n2, i6;
          const o10 = null !== (n2 = null === (r4 = (s4 = this._def).errorMap) || void 0 === r4 ? void 0 : r4.call(s4, t5, a4).message) && void 0 !== n2 ? n2 : a4.defaultError;
          return "unrecognized_keys" === t5.code ? { message: null !== (i6 = h2.errToObj(e6).message) && void 0 !== i6 ? i6 : o10 } : { message: o10 };
        } } : {} });
      }
      strip() {
        return new ZodObject({ ...this._def, unknownKeys: "strip" });
      }
      passthrough() {
        return new ZodObject({ ...this._def, unknownKeys: "passthrough" });
      }
      extend(e6) {
        return new ZodObject({ ...this._def, shape: () => ({ ...this._def.shape(), ...e6 }) });
      }
      merge(e6) {
        return new ZodObject({ unknownKeys: e6._def.unknownKeys, catchall: e6._def.catchall, shape: () => ({ ...this._def.shape(), ...e6._def.shape() }), typeName: O2.ZodObject });
      }
      setKey(e6, t5) {
        return this.augment({ [e6]: t5 });
      }
      catchall(e6) {
        return new ZodObject({ ...this._def, catchall: e6 });
      }
      pick(e6) {
        const t5 = {};
        return o6.objectKeys(e6).forEach((a4) => {
          e6[a4] && this.shape[a4] && (t5[a4] = this.shape[a4]);
        }), new ZodObject({ ...this._def, shape: () => t5 });
      }
      omit(e6) {
        const t5 = {};
        return o6.objectKeys(this.shape).forEach((a4) => {
          e6[a4] || (t5[a4] = this.shape[a4]);
        }), new ZodObject({ ...this._def, shape: () => t5 });
      }
      deepPartial() {
        return deepPartialify(this);
      }
      partial(e6) {
        const t5 = {};
        return o6.objectKeys(this.shape).forEach((a4) => {
          const s4 = this.shape[a4];
          e6 && !e6[a4] ? t5[a4] = s4 : t5[a4] = s4.optional();
        }), new ZodObject({ ...this._def, shape: () => t5 });
      }
      required(e6) {
        const t5 = {};
        return o6.objectKeys(this.shape).forEach((a4) => {
          if (e6 && !e6[a4])
            t5[a4] = this.shape[a4];
          else {
            let e7 = this.shape[a4];
            for (; e7 instanceof ZodOptional; )
              e7 = e7._def.innerType;
            t5[a4] = e7;
          }
        }), new ZodObject({ ...this._def, shape: () => t5 });
      }
      keyof() {
        return createZodEnum(o6.objectKeys(this.shape));
      }
    };
    ZodObject.create = (e6, t5) => new ZodObject({ shape: () => e6, unknownKeys: "strip", catchall: ZodNever.create(), typeName: O2.ZodObject, ...processCreateParams(t5) }), ZodObject.strictCreate = (e6, t5) => new ZodObject({ shape: () => e6, unknownKeys: "strict", catchall: ZodNever.create(), typeName: O2.ZodObject, ...processCreateParams(t5) }), ZodObject.lazycreate = (e6, t5) => new ZodObject({ shape: e6, unknownKeys: "strip", catchall: ZodNever.create(), typeName: O2.ZodObject, ...processCreateParams(t5) });
    ZodUnion = class extends ZodType {
      _parse(e6) {
        const { ctx: t5 } = this._processInputParams(e6), a4 = this._def.options;
        if (t5.common.async)
          return Promise.all(a4.map(async (e7) => {
            const a5 = { ...t5, common: { ...t5.common, issues: [] }, parent: null };
            return { result: await e7._parseAsync({ data: t5.data, path: t5.path, parent: a5 }), ctx: a5 };
          })).then(function(e7) {
            for (const t6 of e7)
              if ("valid" === t6.result.status)
                return t6.result;
            for (const a6 of e7)
              if ("dirty" === a6.result.status)
                return t5.common.issues.push(...a6.ctx.common.issues), a6.result;
            const a5 = e7.map((e8) => new ZodError(e8.ctx.common.issues));
            return addIssueToContext(t5, { code: c.invalid_union, unionErrors: a5 }), p;
          });
        {
          let e7;
          const s4 = [];
          for (const r5 of a4) {
            const a5 = { ...t5, common: { ...t5.common, issues: [] }, parent: null }, n2 = r5._parseSync({ data: t5.data, path: t5.path, parent: a5 });
            if ("valid" === n2.status)
              return n2;
            "dirty" !== n2.status || e7 || (e7 = { result: n2, ctx: a5 }), a5.common.issues.length && s4.push(a5.common.issues);
          }
          if (e7)
            return t5.common.issues.push(...e7.ctx.common.issues), e7.result;
          const r4 = s4.map((e8) => new ZodError(e8));
          return addIssueToContext(t5, { code: c.invalid_union, unionErrors: r4 }), p;
        }
      }
      get options() {
        return this._def.options;
      }
    };
    ZodUnion.create = (e6, t5) => new ZodUnion({ options: e6, typeName: O2.ZodUnion, ...processCreateParams(t5) });
    getDiscriminator = (e6) => e6 instanceof ZodLazy ? getDiscriminator(e6.schema) : e6 instanceof ZodEffects ? getDiscriminator(e6.innerType()) : e6 instanceof ZodLiteral ? [e6.value] : e6 instanceof ZodEnum ? e6.options : e6 instanceof ZodNativeEnum ? o6.objectValues(e6.enum) : e6 instanceof ZodDefault ? getDiscriminator(e6._def.innerType) : e6 instanceof ZodUndefined ? [void 0] : e6 instanceof ZodNull ? [null] : e6 instanceof ZodOptional ? [void 0, ...getDiscriminator(e6.unwrap())] : e6 instanceof ZodNullable ? [null, ...getDiscriminator(e6.unwrap())] : e6 instanceof ZodBranded || e6 instanceof ZodReadonly ? getDiscriminator(e6.unwrap()) : e6 instanceof ZodCatch ? getDiscriminator(e6._def.innerType) : [];
    ZodDiscriminatedUnion = class extends ZodType {
      _parse(e6) {
        const { ctx: t5 } = this._processInputParams(e6);
        if (t5.parsedType !== u2.object)
          return addIssueToContext(t5, { code: c.invalid_type, expected: u2.object, received: t5.parsedType }), p;
        const a4 = this.discriminator, s4 = t5.data[a4], r4 = this.optionsMap.get(s4);
        return r4 ? t5.common.async ? r4._parseAsync({ data: t5.data, path: t5.path, parent: t5 }) : r4._parseSync({ data: t5.data, path: t5.path, parent: t5 }) : (addIssueToContext(t5, { code: c.invalid_union_discriminator, options: Array.from(this.optionsMap.keys()), path: [a4] }), p);
      }
      get discriminator() {
        return this._def.discriminator;
      }
      get options() {
        return this._def.options;
      }
      get optionsMap() {
        return this._def.optionsMap;
      }
      static create(e6, t5, a4) {
        const s4 = /* @__PURE__ */ new Map();
        for (const a5 of t5) {
          const t6 = getDiscriminator(a5.shape[e6]);
          if (!t6.length)
            throw new Error(`A discriminator value for key \`${e6}\` could not be extracted from all schema options`);
          for (const r4 of t6) {
            if (s4.has(r4))
              throw new Error(`Discriminator property ${String(e6)} has duplicate value ${String(r4)}`);
            s4.set(r4, a5);
          }
        }
        return new ZodDiscriminatedUnion({ typeName: O2.ZodDiscriminatedUnion, discriminator: e6, options: t5, optionsMap: s4, ...processCreateParams(a4) });
      }
    };
    ZodIntersection = class extends ZodType {
      _parse(e6) {
        const { status: t5, ctx: a4 } = this._processInputParams(e6), handleParsed = (e7, s4) => {
          if (isAborted(e7) || isAborted(s4))
            return p;
          const r4 = mergeValues(e7.value, s4.value);
          return r4.valid ? ((isDirty(e7) || isDirty(s4)) && t5.dirty(), { status: t5.value, value: r4.data }) : (addIssueToContext(a4, { code: c.invalid_intersection_types }), p);
        };
        return a4.common.async ? Promise.all([this._def.left._parseAsync({ data: a4.data, path: a4.path, parent: a4 }), this._def.right._parseAsync({ data: a4.data, path: a4.path, parent: a4 })]).then(([e7, t6]) => handleParsed(e7, t6)) : handleParsed(this._def.left._parseSync({ data: a4.data, path: a4.path, parent: a4 }), this._def.right._parseSync({ data: a4.data, path: a4.path, parent: a4 }));
      }
    };
    ZodIntersection.create = (e6, t5, a4) => new ZodIntersection({ left: e6, right: t5, typeName: O2.ZodIntersection, ...processCreateParams(a4) });
    ZodTuple = class extends ZodType {
      _parse(e6) {
        const { status: t5, ctx: a4 } = this._processInputParams(e6);
        if (a4.parsedType !== u2.array)
          return addIssueToContext(a4, { code: c.invalid_type, expected: u2.array, received: a4.parsedType }), p;
        if (a4.data.length < this._def.items.length)
          return addIssueToContext(a4, { code: c.too_small, minimum: this._def.items.length, inclusive: true, exact: false, type: "array" }), p;
        !this._def.rest && a4.data.length > this._def.items.length && (addIssueToContext(a4, { code: c.too_big, maximum: this._def.items.length, inclusive: true, exact: false, type: "array" }), t5.dirty());
        const s4 = [...a4.data].map((e7, t6) => {
          const s5 = this._def.items[t6] || this._def.rest;
          return s5 ? s5._parse(new ParseInputLazyPath(a4, e7, a4.path, t6)) : null;
        }).filter((e7) => !!e7);
        return a4.common.async ? Promise.all(s4).then((e7) => ParseStatus.mergeArray(t5, e7)) : ParseStatus.mergeArray(t5, s4);
      }
      get items() {
        return this._def.items;
      }
      rest(e6) {
        return new ZodTuple({ ...this._def, rest: e6 });
      }
    };
    ZodTuple.create = (e6, t5) => {
      if (!Array.isArray(e6))
        throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
      return new ZodTuple({ items: e6, typeName: O2.ZodTuple, rest: null, ...processCreateParams(t5) });
    };
    ZodRecord = class extends ZodType {
      get keySchema() {
        return this._def.keyType;
      }
      get valueSchema() {
        return this._def.valueType;
      }
      _parse(e6) {
        const { status: t5, ctx: a4 } = this._processInputParams(e6);
        if (a4.parsedType !== u2.object)
          return addIssueToContext(a4, { code: c.invalid_type, expected: u2.object, received: a4.parsedType }), p;
        const s4 = [], r4 = this._def.keyType, n2 = this._def.valueType;
        for (const e7 in a4.data)
          s4.push({ key: r4._parse(new ParseInputLazyPath(a4, e7, a4.path, e7)), value: n2._parse(new ParseInputLazyPath(a4, a4.data[e7], a4.path, e7)), alwaysSet: e7 in a4.data });
        return a4.common.async ? ParseStatus.mergeObjectAsync(t5, s4) : ParseStatus.mergeObjectSync(t5, s4);
      }
      get element() {
        return this._def.valueType;
      }
      static create(e6, t5, a4) {
        return new ZodRecord(t5 instanceof ZodType ? { keyType: e6, valueType: t5, typeName: O2.ZodRecord, ...processCreateParams(a4) } : { keyType: ZodString.create(), valueType: e6, typeName: O2.ZodRecord, ...processCreateParams(t5) });
      }
    };
    ZodMap = class extends ZodType {
      get keySchema() {
        return this._def.keyType;
      }
      get valueSchema() {
        return this._def.valueType;
      }
      _parse(e6) {
        const { status: t5, ctx: a4 } = this._processInputParams(e6);
        if (a4.parsedType !== u2.map)
          return addIssueToContext(a4, { code: c.invalid_type, expected: u2.map, received: a4.parsedType }), p;
        const s4 = this._def.keyType, r4 = this._def.valueType, n2 = [...a4.data.entries()].map(([e7, t6], n3) => ({ key: s4._parse(new ParseInputLazyPath(a4, e7, a4.path, [n3, "key"])), value: r4._parse(new ParseInputLazyPath(a4, t6, a4.path, [n3, "value"])) }));
        if (a4.common.async) {
          const e7 = /* @__PURE__ */ new Map();
          return Promise.resolve().then(async () => {
            for (const a5 of n2) {
              const s5 = await a5.key, r5 = await a5.value;
              if ("aborted" === s5.status || "aborted" === r5.status)
                return p;
              "dirty" !== s5.status && "dirty" !== r5.status || t5.dirty(), e7.set(s5.value, r5.value);
            }
            return { status: t5.value, value: e7 };
          });
        }
        {
          const e7 = /* @__PURE__ */ new Map();
          for (const a5 of n2) {
            const s5 = a5.key, r5 = a5.value;
            if ("aborted" === s5.status || "aborted" === r5.status)
              return p;
            "dirty" !== s5.status && "dirty" !== r5.status || t5.dirty(), e7.set(s5.value, r5.value);
          }
          return { status: t5.value, value: e7 };
        }
      }
    };
    ZodMap.create = (e6, t5, a4) => new ZodMap({ valueType: t5, keyType: e6, typeName: O2.ZodMap, ...processCreateParams(a4) });
    ZodSet = class extends ZodType {
      _parse(e6) {
        const { status: t5, ctx: a4 } = this._processInputParams(e6);
        if (a4.parsedType !== u2.set)
          return addIssueToContext(a4, { code: c.invalid_type, expected: u2.set, received: a4.parsedType }), p;
        const s4 = this._def;
        null !== s4.minSize && a4.data.size < s4.minSize.value && (addIssueToContext(a4, { code: c.too_small, minimum: s4.minSize.value, type: "set", inclusive: true, exact: false, message: s4.minSize.message }), t5.dirty()), null !== s4.maxSize && a4.data.size > s4.maxSize.value && (addIssueToContext(a4, { code: c.too_big, maximum: s4.maxSize.value, type: "set", inclusive: true, exact: false, message: s4.maxSize.message }), t5.dirty());
        const r4 = this._def.valueType;
        function finalizeSet(e7) {
          const a5 = /* @__PURE__ */ new Set();
          for (const s5 of e7) {
            if ("aborted" === s5.status)
              return p;
            "dirty" === s5.status && t5.dirty(), a5.add(s5.value);
          }
          return { status: t5.value, value: a5 };
        }
        const n2 = [...a4.data.values()].map((e7, t6) => r4._parse(new ParseInputLazyPath(a4, e7, a4.path, t6)));
        return a4.common.async ? Promise.all(n2).then((e7) => finalizeSet(e7)) : finalizeSet(n2);
      }
      min(e6, t5) {
        return new ZodSet({ ...this._def, minSize: { value: e6, message: h2.toString(t5) } });
      }
      max(e6, t5) {
        return new ZodSet({ ...this._def, maxSize: { value: e6, message: h2.toString(t5) } });
      }
      size(e6, t5) {
        return this.min(e6, t5).max(e6, t5);
      }
      nonempty(e6) {
        return this.min(1, e6);
      }
    };
    ZodSet.create = (e6, t5) => new ZodSet({ valueType: e6, minSize: null, maxSize: null, typeName: O2.ZodSet, ...processCreateParams(t5) });
    ZodFunction = class extends ZodType {
      constructor() {
        super(...arguments), this.validate = this.implement;
      }
      _parse(e6) {
        const { ctx: t5 } = this._processInputParams(e6);
        if (t5.parsedType !== u2.function)
          return addIssueToContext(t5, { code: c.invalid_type, expected: u2.function, received: t5.parsedType }), p;
        function makeArgsIssue(e7, a5) {
          return makeIssue({ data: e7, path: t5.path, errorMaps: [t5.common.contextualErrorMap, t5.schemaErrorMap, getErrorMap(), errorMap].filter((e8) => !!e8), issueData: { code: c.invalid_arguments, argumentsError: a5 } });
        }
        function makeReturnsIssue(e7, a5) {
          return makeIssue({ data: e7, path: t5.path, errorMaps: [t5.common.contextualErrorMap, t5.schemaErrorMap, getErrorMap(), errorMap].filter((e8) => !!e8), issueData: { code: c.invalid_return_type, returnTypeError: a5 } });
        }
        const a4 = { errorMap: t5.common.contextualErrorMap }, s4 = t5.data;
        if (this._def.returns instanceof ZodPromise) {
          const e7 = this;
          return OK(async function(...t6) {
            const r4 = new ZodError([]), n2 = await e7._def.args.parseAsync(t6, a4).catch((e8) => {
              throw r4.addIssue(makeArgsIssue(t6, e8)), r4;
            }), i6 = await Reflect.apply(s4, this, n2);
            return await e7._def.returns._def.type.parseAsync(i6, a4).catch((e8) => {
              throw r4.addIssue(makeReturnsIssue(i6, e8)), r4;
            });
          });
        }
        {
          const e7 = this;
          return OK(function(...t6) {
            const r4 = e7._def.args.safeParse(t6, a4);
            if (!r4.success)
              throw new ZodError([makeArgsIssue(t6, r4.error)]);
            const n2 = Reflect.apply(s4, this, r4.data), i6 = e7._def.returns.safeParse(n2, a4);
            if (!i6.success)
              throw new ZodError([makeReturnsIssue(n2, i6.error)]);
            return i6.data;
          });
        }
      }
      parameters() {
        return this._def.args;
      }
      returnType() {
        return this._def.returns;
      }
      args(...e6) {
        return new ZodFunction({ ...this._def, args: ZodTuple.create(e6).rest(ZodUnknown.create()) });
      }
      returns(e6) {
        return new ZodFunction({ ...this._def, returns: e6 });
      }
      implement(e6) {
        return this.parse(e6);
      }
      strictImplement(e6) {
        return this.parse(e6);
      }
      static create(e6, t5, a4) {
        return new ZodFunction({ args: e6 || ZodTuple.create([]).rest(ZodUnknown.create()), returns: t5 || ZodUnknown.create(), typeName: O2.ZodFunction, ...processCreateParams(a4) });
      }
    };
    ZodLazy = class extends ZodType {
      get schema() {
        return this._def.getter();
      }
      _parse(e6) {
        const { ctx: t5 } = this._processInputParams(e6);
        return this._def.getter()._parse({ data: t5.data, path: t5.path, parent: t5 });
      }
    };
    ZodLazy.create = (e6, t5) => new ZodLazy({ getter: e6, typeName: O2.ZodLazy, ...processCreateParams(t5) });
    ZodLiteral = class extends ZodType {
      _parse(e6) {
        if (e6.data !== this._def.value) {
          const t5 = this._getOrReturnCtx(e6);
          return addIssueToContext(t5, { received: t5.data, code: c.invalid_literal, expected: this._def.value }), p;
        }
        return { status: "valid", value: e6.data };
      }
      get value() {
        return this._def.value;
      }
    };
    ZodLiteral.create = (e6, t5) => new ZodLiteral({ value: e6, typeName: O2.ZodLiteral, ...processCreateParams(t5) });
    ZodEnum = class extends ZodType {
      constructor() {
        super(...arguments), m3.set(this, void 0);
      }
      _parse(e6) {
        if ("string" != typeof e6.data) {
          const t5 = this._getOrReturnCtx(e6), a4 = this._def.values;
          return addIssueToContext(t5, { expected: o6.joinValues(a4), received: t5.parsedType, code: c.invalid_type }), p;
        }
        if (__classPrivateFieldGet(this, m3) || __classPrivateFieldSet(this, m3, new Set(this._def.values)), !__classPrivateFieldGet(this, m3).has(e6.data)) {
          const t5 = this._getOrReturnCtx(e6), a4 = this._def.values;
          return addIssueToContext(t5, { received: t5.data, code: c.invalid_enum_value, options: a4 }), p;
        }
        return OK(e6.data);
      }
      get options() {
        return this._def.values;
      }
      get enum() {
        const e6 = {};
        for (const t5 of this._def.values)
          e6[t5] = t5;
        return e6;
      }
      get Values() {
        const e6 = {};
        for (const t5 of this._def.values)
          e6[t5] = t5;
        return e6;
      }
      get Enum() {
        const e6 = {};
        for (const t5 of this._def.values)
          e6[t5] = t5;
        return e6;
      }
      extract(e6, t5 = this._def) {
        return ZodEnum.create(e6, { ...this._def, ...t5 });
      }
      exclude(e6, t5 = this._def) {
        return ZodEnum.create(this.options.filter((t6) => !e6.includes(t6)), { ...this._def, ...t5 });
      }
    };
    m3 = /* @__PURE__ */ new WeakMap(), ZodEnum.create = createZodEnum;
    ZodNativeEnum = class extends ZodType {
      constructor() {
        super(...arguments), f.set(this, void 0);
      }
      _parse(e6) {
        const t5 = o6.getValidEnumValues(this._def.values), a4 = this._getOrReturnCtx(e6);
        if (a4.parsedType !== u2.string && a4.parsedType !== u2.number) {
          const e7 = o6.objectValues(t5);
          return addIssueToContext(a4, { expected: o6.joinValues(e7), received: a4.parsedType, code: c.invalid_type }), p;
        }
        if (__classPrivateFieldGet(this, f) || __classPrivateFieldSet(this, f, new Set(o6.getValidEnumValues(this._def.values))), !__classPrivateFieldGet(this, f).has(e6.data)) {
          const e7 = o6.objectValues(t5);
          return addIssueToContext(a4, { received: a4.data, code: c.invalid_enum_value, options: e7 }), p;
        }
        return OK(e6.data);
      }
      get enum() {
        return this._def.values;
      }
    };
    f = /* @__PURE__ */ new WeakMap(), ZodNativeEnum.create = (e6, t5) => new ZodNativeEnum({ values: e6, typeName: O2.ZodNativeEnum, ...processCreateParams(t5) });
    ZodPromise = class extends ZodType {
      unwrap() {
        return this._def.type;
      }
      _parse(e6) {
        const { ctx: t5 } = this._processInputParams(e6);
        if (t5.parsedType !== u2.promise && false === t5.common.async)
          return addIssueToContext(t5, { code: c.invalid_type, expected: u2.promise, received: t5.parsedType }), p;
        const a4 = t5.parsedType === u2.promise ? t5.data : Promise.resolve(t5.data);
        return OK(a4.then((e7) => this._def.type.parseAsync(e7, { path: t5.path, errorMap: t5.common.contextualErrorMap })));
      }
    };
    ZodPromise.create = (e6, t5) => new ZodPromise({ type: e6, typeName: O2.ZodPromise, ...processCreateParams(t5) });
    ZodEffects = class extends ZodType {
      innerType() {
        return this._def.schema;
      }
      sourceType() {
        return this._def.schema._def.typeName === O2.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
      }
      _parse(e6) {
        const { status: t5, ctx: a4 } = this._processInputParams(e6), s4 = this._def.effect || null, r4 = { addIssue: (e7) => {
          addIssueToContext(a4, e7), e7.fatal ? t5.abort() : t5.dirty();
        }, get path() {
          return a4.path;
        } };
        if (r4.addIssue = r4.addIssue.bind(r4), "preprocess" === s4.type) {
          const e7 = s4.transform(a4.data, r4);
          if (a4.common.async)
            return Promise.resolve(e7).then(async (e8) => {
              if ("aborted" === t5.value)
                return p;
              const s5 = await this._def.schema._parseAsync({ data: e8, path: a4.path, parent: a4 });
              return "aborted" === s5.status ? p : "dirty" === s5.status || "dirty" === t5.value ? DIRTY(s5.value) : s5;
            });
          {
            if ("aborted" === t5.value)
              return p;
            const s5 = this._def.schema._parseSync({ data: e7, path: a4.path, parent: a4 });
            return "aborted" === s5.status ? p : "dirty" === s5.status || "dirty" === t5.value ? DIRTY(s5.value) : s5;
          }
        }
        if ("refinement" === s4.type) {
          const executeRefinement = (e7) => {
            const t6 = s4.refinement(e7, r4);
            if (a4.common.async)
              return Promise.resolve(t6);
            if (t6 instanceof Promise)
              throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
            return e7;
          };
          if (false === a4.common.async) {
            const e7 = this._def.schema._parseSync({ data: a4.data, path: a4.path, parent: a4 });
            return "aborted" === e7.status ? p : ("dirty" === e7.status && t5.dirty(), executeRefinement(e7.value), { status: t5.value, value: e7.value });
          }
          return this._def.schema._parseAsync({ data: a4.data, path: a4.path, parent: a4 }).then((e7) => "aborted" === e7.status ? p : ("dirty" === e7.status && t5.dirty(), executeRefinement(e7.value).then(() => ({ status: t5.value, value: e7.value }))));
        }
        if ("transform" === s4.type) {
          if (false === a4.common.async) {
            const e7 = this._def.schema._parseSync({ data: a4.data, path: a4.path, parent: a4 });
            if (!isValid(e7))
              return e7;
            const n2 = s4.transform(e7.value, r4);
            if (n2 instanceof Promise)
              throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
            return { status: t5.value, value: n2 };
          }
          return this._def.schema._parseAsync({ data: a4.data, path: a4.path, parent: a4 }).then((e7) => isValid(e7) ? Promise.resolve(s4.transform(e7.value, r4)).then((e8) => ({ status: t5.value, value: e8 })) : e7);
        }
        o6.assertNever(s4);
      }
    };
    ZodEffects.create = (e6, t5, a4) => new ZodEffects({ schema: e6, typeName: O2.ZodEffects, effect: t5, ...processCreateParams(a4) }), ZodEffects.createWithPreprocess = (e6, t5, a4) => new ZodEffects({ schema: t5, effect: { type: "preprocess", transform: e6 }, typeName: O2.ZodEffects, ...processCreateParams(a4) });
    ZodOptional = class extends ZodType {
      _parse(e6) {
        return this._getType(e6) === u2.undefined ? OK(void 0) : this._def.innerType._parse(e6);
      }
      unwrap() {
        return this._def.innerType;
      }
    };
    ZodOptional.create = (e6, t5) => new ZodOptional({ innerType: e6, typeName: O2.ZodOptional, ...processCreateParams(t5) });
    ZodNullable = class extends ZodType {
      _parse(e6) {
        return this._getType(e6) === u2.null ? OK(null) : this._def.innerType._parse(e6);
      }
      unwrap() {
        return this._def.innerType;
      }
    };
    ZodNullable.create = (e6, t5) => new ZodNullable({ innerType: e6, typeName: O2.ZodNullable, ...processCreateParams(t5) });
    ZodDefault = class extends ZodType {
      _parse(e6) {
        const { ctx: t5 } = this._processInputParams(e6);
        let a4 = t5.data;
        return t5.parsedType === u2.undefined && (a4 = this._def.defaultValue()), this._def.innerType._parse({ data: a4, path: t5.path, parent: t5 });
      }
      removeDefault() {
        return this._def.innerType;
      }
    };
    ZodDefault.create = (e6, t5) => new ZodDefault({ innerType: e6, typeName: O2.ZodDefault, defaultValue: "function" == typeof t5.default ? t5.default : () => t5.default, ...processCreateParams(t5) });
    ZodCatch = class extends ZodType {
      _parse(e6) {
        const { ctx: t5 } = this._processInputParams(e6), a4 = { ...t5, common: { ...t5.common, issues: [] } }, s4 = this._def.innerType._parse({ data: a4.data, path: a4.path, parent: { ...a4 } });
        return isAsync(s4) ? s4.then((e7) => ({ status: "valid", value: "valid" === e7.status ? e7.value : this._def.catchValue({ get error() {
          return new ZodError(a4.common.issues);
        }, input: a4.data }) })) : { status: "valid", value: "valid" === s4.status ? s4.value : this._def.catchValue({ get error() {
          return new ZodError(a4.common.issues);
        }, input: a4.data }) };
      }
      removeCatch() {
        return this._def.innerType;
      }
    };
    ZodCatch.create = (e6, t5) => new ZodCatch({ innerType: e6, typeName: O2.ZodCatch, catchValue: "function" == typeof t5.catch ? t5.catch : () => t5.catch, ...processCreateParams(t5) });
    ZodNaN = class extends ZodType {
      _parse(e6) {
        if (this._getType(e6) !== u2.nan) {
          const t5 = this._getOrReturnCtx(e6);
          return addIssueToContext(t5, { code: c.invalid_type, expected: u2.nan, received: t5.parsedType }), p;
        }
        return { status: "valid", value: e6.data };
      }
    };
    ZodNaN.create = (e6) => new ZodNaN({ typeName: O2.ZodNaN, ...processCreateParams(e6) });
    N3 = Symbol("zod_brand");
    ZodBranded = class extends ZodType {
      _parse(e6) {
        const { ctx: t5 } = this._processInputParams(e6), a4 = t5.data;
        return this._def.type._parse({ data: a4, path: t5.path, parent: t5 });
      }
      unwrap() {
        return this._def.type;
      }
    };
    ZodPipeline = class extends ZodType {
      _parse(e6) {
        const { status: t5, ctx: a4 } = this._processInputParams(e6);
        if (a4.common.async) {
          return (async () => {
            const e7 = await this._def.in._parseAsync({ data: a4.data, path: a4.path, parent: a4 });
            return "aborted" === e7.status ? p : "dirty" === e7.status ? (t5.dirty(), DIRTY(e7.value)) : this._def.out._parseAsync({ data: e7.value, path: a4.path, parent: a4 });
          })();
        }
        {
          const e7 = this._def.in._parseSync({ data: a4.data, path: a4.path, parent: a4 });
          return "aborted" === e7.status ? p : "dirty" === e7.status ? (t5.dirty(), { status: "dirty", value: e7.value }) : this._def.out._parseSync({ data: e7.value, path: a4.path, parent: a4 });
        }
      }
      static create(e6, t5) {
        return new ZodPipeline({ in: e6, out: t5, typeName: O2.ZodPipeline });
      }
    };
    ZodReadonly = class extends ZodType {
      _parse(e6) {
        const t5 = this._def.innerType._parse(e6), freeze = (e7) => (isValid(e7) && (e7.value = Object.freeze(e7.value)), e7);
        return isAsync(t5) ? t5.then((e7) => freeze(e7)) : freeze(t5);
      }
      unwrap() {
        return this._def.innerType;
      }
    };
    ZodReadonly.create = (e6, t5) => new ZodReadonly({ innerType: e6, typeName: O2.ZodReadonly, ...processCreateParams(t5) });
    S2 = { object: ZodObject.lazycreate };
    !function(e6) {
      e6.ZodString = "ZodString", e6.ZodNumber = "ZodNumber", e6.ZodNaN = "ZodNaN", e6.ZodBigInt = "ZodBigInt", e6.ZodBoolean = "ZodBoolean", e6.ZodDate = "ZodDate", e6.ZodSymbol = "ZodSymbol", e6.ZodUndefined = "ZodUndefined", e6.ZodNull = "ZodNull", e6.ZodAny = "ZodAny", e6.ZodUnknown = "ZodUnknown", e6.ZodNever = "ZodNever", e6.ZodVoid = "ZodVoid", e6.ZodArray = "ZodArray", e6.ZodObject = "ZodObject", e6.ZodUnion = "ZodUnion", e6.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", e6.ZodIntersection = "ZodIntersection", e6.ZodTuple = "ZodTuple", e6.ZodRecord = "ZodRecord", e6.ZodMap = "ZodMap", e6.ZodSet = "ZodSet", e6.ZodFunction = "ZodFunction", e6.ZodLazy = "ZodLazy", e6.ZodLiteral = "ZodLiteral", e6.ZodEnum = "ZodEnum", e6.ZodEffects = "ZodEffects", e6.ZodNativeEnum = "ZodNativeEnum", e6.ZodOptional = "ZodOptional", e6.ZodNullable = "ZodNullable", e6.ZodDefault = "ZodDefault", e6.ZodCatch = "ZodCatch", e6.ZodPromise = "ZodPromise", e6.ZodBranded = "ZodBranded", e6.ZodPipeline = "ZodPipeline", e6.ZodReadonly = "ZodReadonly";
    }(O2 || (O2 = {}));
    E2 = ZodString.create;
    j3 = ZodNumber.create;
    R2 = ZodNaN.create;
    A2 = ZodBigInt.create;
    L2 = ZodBoolean.create;
    M2 = ZodDate.create;
    $2 = ZodSymbol.create;
    D2 = ZodUndefined.create;
    U2 = ZodNull.create;
    z3 = ZodAny.create;
    V2 = ZodUnknown.create;
    B3 = ZodNever.create;
    F2 = ZodVoid.create;
    K2 = ZodArray.create;
    W2 = ZodObject.create;
    q3 = ZodObject.strictCreate;
    G2 = ZodUnion.create;
    J2 = ZodDiscriminatedUnion.create;
    Y2 = ZodIntersection.create;
    H2 = ZodTuple.create;
    X3 = ZodRecord.create;
    Q3 = ZodMap.create;
    ee3 = ZodSet.create;
    te4 = ZodFunction.create;
    ae3 = ZodLazy.create;
    se3 = ZodLiteral.create;
    re3 = ZodEnum.create;
    ne3 = ZodNativeEnum.create;
    ie3 = ZodPromise.create;
    oe3 = ZodEffects.create;
    de3 = ZodOptional.create;
    ue3 = ZodNullable.create;
    ce3 = ZodEffects.createWithPreprocess;
    le3 = ZodPipeline.create;
    pe3 = { string: (e6) => ZodString.create({ ...e6, coerce: true }), number: (e6) => ZodNumber.create({ ...e6, coerce: true }), boolean: (e6) => ZodBoolean.create({ ...e6, coerce: true }), bigint: (e6) => ZodBigInt.create({ ...e6, coerce: true }), date: (e6) => ZodDate.create({ ...e6, coerce: true }) };
    he4 = p;
    me3 = Object.freeze({ __proto__: null, defaultErrorMap: errorMap, setErrorMap: function(e6) {
      l = e6;
    }, getErrorMap, makeIssue, EMPTY_PATH: [], addIssueToContext, ParseStatus, INVALID: p, DIRTY, OK, isAborted, isDirty, isValid, isAsync, get util() {
      return o6;
    }, get objectUtil() {
      return d;
    }, ZodParsedType: u2, getParsedType, ZodType, datetimeRegex, ZodString, ZodNumber, ZodBigInt, ZodBoolean, ZodDate, ZodSymbol, ZodUndefined, ZodNull, ZodAny, ZodUnknown, ZodNever, ZodVoid, ZodArray, ZodObject, ZodUnion, ZodDiscriminatedUnion, ZodIntersection, ZodTuple, ZodRecord, ZodMap, ZodSet, ZodFunction, ZodLazy, ZodLiteral, ZodEnum, ZodNativeEnum, ZodPromise, ZodEffects, ZodTransformer: ZodEffects, ZodOptional, ZodNullable, ZodDefault, ZodCatch, ZodNaN, BRAND: N3, ZodBranded, ZodPipeline, ZodReadonly, custom, Schema: ZodType, ZodSchema: ZodType, late: S2, get ZodFirstPartyTypeKind() {
      return O2;
    }, coerce: pe3, any: z3, array: K2, bigint: A2, boolean: L2, date: M2, discriminatedUnion: J2, effect: oe3, enum: re3, function: te4, instanceof: (e6, t5 = { message: `Input not instance of ${e6.name}` }) => custom((t6) => t6 instanceof e6, t5), intersection: Y2, lazy: ae3, literal: se3, map: Q3, nan: R2, nativeEnum: ne3, never: B3, null: U2, nullable: ue3, number: j3, object: W2, oboolean: () => L2().optional(), onumber: () => j3().optional(), optional: de3, ostring: () => E2().optional(), pipeline: le3, preprocess: ce3, promise: ie3, record: X3, set: ee3, strictObject: q3, string: E2, symbol: $2, transformer: oe3, tuple: H2, undefined: D2, union: G2, unknown: V2, void: F2, NEVER: he4, ZodIssueCode: c, quotelessJson: (e6) => JSON.stringify(e6, null, 2).replace(/"([^"]+)":/g, "$1:"), ZodError });
  }
});

// .wrangler/tmp/pages-WENPGt/chunks/routes/api/_hub/manifest.get.mjs
var manifest_get_exports = {};
__export(manifest_get_exports, {
  default: () => B4
});
function normalizeKey2(a4) {
  return a4 ? a4.replace(/[/\\]/g, ":").replace(/^:|:$/g, "") : "";
}
function createError3(a4, i6, t5) {
  return new Error(`[unstorage] [${a4}] ${i6}`, t5);
}
function getKVBinding(a4 = "STORAGE") {
  return function(a5) {
    let i6 = "[binding]";
    if ("string" == typeof a5 && (i6 = a5, a5 = globalThis[i6] || globalThis.__env__?.[i6]), !a5)
      throw createError3("cloudflare", `Invalid binding \`${i6}\`: \`${a5}\``);
    for (const t5 of ["get", "put", "delete"])
      if (!(t5 in a5))
        throw createError3("cloudflare", `Invalid binding \`${i6}\`: \`${t5}\` key is missing`);
    return a5;
  }(a4);
}
function hubKV() {
  if (requireNuxtHubFeature("kv"), z4)
    return z4;
  const a4 = useRuntimeConfig2().hub, o10 = B2.env.KV || globalThis.__env__?.KV || globalThis.KV;
  if (a4.remote && a4.projectUrl && !o10)
    return function(a5, t5) {
      requireNuxtHubFeature("kv");
      const p3 = createStorage({ driver: httpDriver({ base: joinURL(a5, "/api/_hub/kv/"), headers: { Authorization: `Bearer ${t5}` } }) });
      return { keys: p3.getKeys, get: p3.getItem, set: p3.setItem, has: p3.hasItem, del: p3.removeItem, ...p3 };
    }(a4.projectUrl, a4.projectSecretKey || a4.userToken);
  if (o10) {
    const a5 = createStorage({ driver: cloudflareKVBindingDriver({ binding: o10 }) });
    return z4 = { keys: a5.getKeys, get: a5.getItem, set: a5.setItem, has: a5.hasItem, del: a5.removeItem, ...a5 }, z4;
  }
  throw createError("Missing Cloudflare KV binding (KV)");
}
function getDefaultExportFromCjs(a4) {
  return a4 && a4.__esModule && Object.prototype.hasOwnProperty.call(a4, "default") ? a4.default : a4;
}
function Mime$1() {
  this._types = /* @__PURE__ */ Object.create(null), this._extensions = /* @__PURE__ */ Object.create(null);
  for (let a4 = 0; a4 < arguments.length; a4++)
    this.define(arguments[a4]);
  this.define = this.define.bind(this), this.getType = this.getType.bind(this), this.getExtension = this.getExtension.bind(this);
}
function normalizeWindowsPath(a4 = "") {
  return a4 ? a4.replace(/\\/g, "/").replace(I3, (a5) => a5.toUpperCase()) : a4;
}
function getBlobBinding(a4 = "BLOB") {
  return B2.env[a4] || globalThis.__env__?.[a4] || globalThis[a4];
}
function hubBlob() {
  requireNuxtHubFeature("blob");
  const a4 = useRuntimeConfig2().hub, p3 = getBlobBinding();
  if (a4.remote && a4.projectUrl && !p3)
    return function(a5, t5) {
      requireNuxtHubFeature("blob");
      const p4 = Le3.create({ baseURL: joinURL(a5, "/api/_hub/blob"), headers: { Authorization: `Bearer ${t5}` } }), e7 = { list: async (a6 = { limit: 1e3 }) => p4("/", { method: "GET", query: a6 }), serve: async (a6, i6) => p4(decodeURI(i6), { method: "GET" }), async put(a6, i6, t6 = {}) {
        const { contentType: e8, contentLength: n2, ...o10 } = t6, l4 = {};
        return e8 && (l4["content-type"] = e8), n2 && (l4["content-length"] = n2), await p4(decodeURI(a6), { method: "PUT", headers: l4, body: i6, query: o10 });
      }, head: async (a6) => await p4(`/head/${decodeURI(a6)}`, { method: "GET" }), async del(a6) {
        Array.isArray(a6) ? await p4("/delete", { method: "POST", body: { pathnames: a6.map((a7) => decodeURI(a7)) } }) : await p4(decodeURI(a6), { method: "DELETE" });
      }, createMultipartUpload: async (a6, i6 = {}) => await p4(`/multipart/${decodeURI(a6)}`, { method: "POST", body: i6 }), resumeMultipartUpload: (a6, i6) => ({ pathname: a6, uploadId: i6, uploadPart: async (t6, e8) => await p4(`/multipart/${decodeURI(a6)}`, { method: "PUT", query: { uploadId: i6, partNumber: t6 }, body: e8 }), async abort() {
        await p4(`/multipart/${decodeURI(a6)}`, { method: "DELETE", query: { uploadId: i6 } });
      }, complete: async (t6) => await p4("/multipart/complete", { method: "POST", query: { pathname: a6, uploadId: i6 }, body: { parts: t6 } }) }), handleUpload: async (a6, i6 = {}) => await p4("/", { method: "POST", body: await readFormData(a6), query: i6 }) };
      return { ...e7, delete: e7.del, handleMultipartUpload: createMultipartUploadHandler(e7) };
    }(a4.projectUrl, a4.projectSecretKey || a4.userToken);
  const e6 = function(a5 = "BLOB") {
    if ($3[a5])
      return $3[a5];
    const i6 = getBlobBinding(a5);
    if (i6)
      return $3[a5] = i6, $3[a5];
    throw createError(`Missing Cloudflare ${a5} binding (R2)`);
  }(), l3 = { async list(a5) {
    const i6 = te(a5, { limit: 1e3, include: ["httpMetadata", "customMetadata"], delimiter: a5?.folded ? "/" : void 0 }), t5 = await e6.list(i6), p4 = t5.truncated, n2 = t5.truncated ? t5.cursor : void 0;
    return { blobs: t5.objects.map(mapR2ObjectToBlob), hasMore: p4, cursor: n2, folders: i6.delimiter ? t5.delimitedPrefixes : void 0 };
  }, async serve(a5, i6) {
    const t5 = await e6.get(decodeURI(i6));
    if (!t5)
      throw createError({ message: "File not found", statusCode: 404 });
    return _e3(a5, "Content-Type", t5.httpMetadata?.contentType || getContentType(i6)), _e3(a5, "Content-Length", t5.size), _e3(a5, "etag", t5.httpEtag), t5.body;
  }, async put(a5, t5, p4 = {}) {
    a5 = decodeURI(a5);
    const { contentType: n2, contentLength: o10, addRandomSuffix: l4, prefix: c3, customMetadata: s4 } = p4, d3 = n2 || t5.type || getContentType(a5), { dir: m6, ext: x4, name: v4 } = parse(a5);
    a5 = joinURL("." === m6 ? "" : m6, l4 ? `${v4}-${randomUUID().split("-")[0]}${x4}` : `${v4}${x4}`), c3 && (a5 = joinURL(c3, a5).replace(/\/+/g, "/").replace(/^\/+/, ""));
    const u4 = { contentType: d3 };
    o10 && (u4.contentLength = o10);
    return mapR2ObjectToBlob(await e6.put(a5, t5, { httpMetadata: u4, customMetadata: s4 }));
  }, async head(a5) {
    const i6 = await e6.head(decodeURI(a5));
    if (!i6)
      throw createError({ message: "Blob not found", statusCode: 404 });
    return mapR2ObjectToBlob(i6);
  }, del: async (a5) => Array.isArray(a5) ? await e6.delete(a5.map((a6) => decodeURI(a6))) : await e6.delete(decodeURI(a5)), async createMultipartUpload(a5, t5 = {}) {
    a5 = decodeURI(a5);
    const { contentType: p4, contentLength: n2, addRandomSuffix: o10, prefix: l4, customMetadata: c3 } = t5, s4 = p4 || getContentType(a5), { dir: d3, ext: m6, name: x4 } = parse(a5);
    a5 = joinURL("." === d3 ? "" : d3, o10 ? `${x4}-${randomUUID().split("-")[0]}${m6}` : `${x4}${m6}`), l4 && (a5 = joinURL(l4, a5).replace(/\/+/g, "/").replace(/^\/+/, ""));
    const v4 = { contentType: s4 };
    n2 && (v4.contentLength = n2);
    return mapR2MpuToBlobMpu(await e6.createMultipartUpload(a5, { httpMetadata: v4, customMetadata: c3 }));
  }, resumeMultipartUpload: (a5, i6) => mapR2MpuToBlobMpu(e6.resumeMultipartUpload(a5, i6)), async handleUpload(a5, i6 = {}) {
    assertMethod(a5, ["POST", "PUT", "PATCH"]), i6 = te(i6, { formKey: "files", multiple: true });
    const t5 = (await readFormData(a5)).getAll(i6.formKey);
    if (!t5)
      throw createError({ statusCode: 400, message: "Missing files" });
    if (!i6.multiple && t5.length > 1)
      throw createError({ statusCode: 400, message: "Multiple files are not allowed" });
    const p4 = [];
    try {
      if (i6.maxSize || i6.types?.length)
        for (const a6 of t5)
          ensureBlob(a6, i6.ensure);
      for (const a6 of t5) {
        const t6 = await l3.put(a6.name, a6, i6.put);
        p4.push(t6);
      }
    } catch (a6) {
      throw createError({ statusCode: 500, message: `Storage error: ${a6.message}` });
    }
    return p4;
  } };
  return { ...l3, delete: l3.del, handleMultipartUpload: createMultipartUploadHandler(l3) };
}
function createMultipartUploadHandler(a4) {
  const { createMultipartUpload: i6, resumeMultipartUpload: t5 } = a4, createHandler = async (a5, t6) => {
    const { pathname: p3 } = await getValidatedRouterParams(a5, me3.object({ pathname: me3.string().min(1) }).parse);
    try {
      const a6 = await i6(p3, t6);
      return { uploadId: a6.uploadId, pathname: a6.pathname };
    } catch (a6) {
      throw createError({ statusCode: 400, message: a6.message });
    }
  }, uploadHandler = async (a5) => {
    const { pathname: i7 } = await getValidatedRouterParams(a5, me3.object({ pathname: me3.string().min(1) }).parse), { uploadId: p3, partNumber: e6 } = await getValidatedQuery(a5, me3.object({ uploadId: me3.string(), partNumber: me3.coerce.number() }).parse), o10 = Number(he3(a5, "content-length") || "0"), l3 = getRequestWebStream(a5), c3 = await async function(a6, i8) {
      const t6 = new Uint8Array(i8);
      let p4 = 0;
      const e7 = a6.getReader();
      for (; ; ) {
        const { done: a7, value: i9 } = await e7.read();
        if (a7)
          break;
        t6.set(i9, p4), p4 += i9.length;
      }
      return t6;
    }(l3, o10), s4 = t5(i7, p3);
    try {
      return await s4.uploadPart(e6, c3);
    } catch (a6) {
      throw createError({ status: 400, message: a6.message });
    }
  }, completeHandler = async (a5) => {
    const { pathname: i7 } = await getValidatedRouterParams(a5, me3.object({ pathname: me3.string().min(1) }).parse), { uploadId: p3 } = await getValidatedQuery(a5, me3.object({ uploadId: me3.string().min(1) }).parse), { parts: e6 } = await readValidatedBody(a5, me3.object({ parts: me3.array(me3.object({ partNumber: me3.number(), etag: me3.string() })) }).parse), o10 = t5(i7, p3);
    try {
      return await o10.complete(e6);
    } catch (a6) {
      throw createError({ status: 400, message: a6.message });
    }
  }, abortHandler = async (a5) => {
    const { pathname: i7 } = await getValidatedRouterParams(a5, me3.object({ pathname: me3.string().min(1) }).parse), { uploadId: p3 } = await getValidatedQuery(a5, me3.object({ uploadId: me3.string().min(1) }).parse), e6 = t5(i7, p3);
    try {
      await e6.abort();
    } catch (a6) {
      throw createError({ status: 400, message: a6.message });
    }
  };
  return async (a5, i7) => {
    const t6 = await (async (a6, i8) => {
      const t7 = a6.method, { action: p3 } = await getValidatedRouterParams(a6, me3.object({ action: me3.enum(["create", "upload", "complete", "abort"]) }).parse);
      if ("create" === p3 && "POST" === t7)
        return { action: p3, data: await createHandler(a6, i8) };
      if ("upload" === p3 && "PUT" === t7)
        return { action: p3, data: await uploadHandler(a6) };
      if ("complete" === p3 && "POST" === t7)
        return { action: p3, data: await completeHandler(a6) };
      if ("abort" === p3 && "DELETE" === t7)
        return { action: p3, data: await abortHandler(a6) };
      throw createError({ status: 405 });
    })(a5, i7);
    return t6.data ? a5.respondWith(Response.json(t6.data)) : sendNoContent(a5), t6;
  };
}
function getContentType(a4) {
  return a4 && T3.getType(a4) || "application/octet-stream";
}
function mapR2ObjectToBlob(a4) {
  return { pathname: a4.key, contentType: a4.httpMetadata?.contentType, size: a4.size, uploadedAt: a4.uploaded, customMetadata: a4.customMetadata || {} };
}
function mapR2MpuToBlobMpu(a4) {
  return { pathname: a4.key, uploadId: a4.uploadId, uploadPart: async (i6, t5) => await a4.uploadPart(i6, t5), abort: a4.abort, complete: async (i6) => mapR2ObjectToBlob(await a4.complete(i6)) };
}
function ensureBlob(a4, i6 = {}) {
  if (requireNuxtHubFeature("blob"), !i6.maxSize && !i6.types?.length)
    throw createError({ statusCode: 400, message: "ensureBlob() requires at least one of maxSize or types to be set." });
  if (i6.maxSize) {
    const t6 = function(a5) {
      const i7 = new RegExp(`^(\\d+)(\\.\\d+)?\\s*(${_3.join("|")})$`, "i"), t7 = a5.match(i7);
      if (!t7)
        throw createError({ statusCode: 400, message: `Invalid file size format: ${a5}` });
      const p3 = Number.parseFloat(t7[1]), e6 = t7[3].toUpperCase();
      if (!_3.includes(e6))
        throw createError({ statusCode: 400, message: `Invalid file size unit: ${e6}` });
      const o10 = p3 * Math.pow(1024, _3.indexOf(e6));
      return Math.floor(o10);
    }(i6.maxSize);
    if (a4.size > t6)
      throw createError({ statusCode: 400, message: `File size must be less than ${i6.maxSize}` });
  }
  const t5 = a4.type.split("/")[0];
  if (i6.types?.length && !i6.types.includes(a4.type) && !i6.types.includes(t5))
    throw createError({ statusCode: 400, message: `File type is invalid, must be: ${i6.types.join(", ")}` });
}
async function falseIfFail(a4) {
  try {
    const i6 = a4();
    return i6 instanceof Promise ? i6.catch(() => false) : i6;
  } catch (a5) {
    return false;
  }
}
var j4, randomUUID, httpDriver, cloudflareKVBindingDriver, z4, T3, noop, I3, q4, M3, U3, dirname, parse, $3, _3, B4;
var init_manifest_get = __esm({
  ".wrangler/tmp/pages-WENPGt/chunks/routes/api/_hub/manifest.get.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    init_runtime();
    init__();
    init_features();
    init_auth();
    j4 = globalThis.crypto;
    randomUUID = () => j4.randomUUID();
    httpDriver = (t5) => {
      const r4 = (a4 = "") => joinURL(t5.base, a4.replace(/:/g, "/")), rBase = (a4 = "") => joinURL(t5.base, (a4 || "/").replace(/:/g, "/"), ":"), catchFetchError = (a4, i6 = null) => {
        if (404 === a4?.response?.status)
          return i6;
        throw a4;
      };
      return { name: "http", options: t5, hasItem: (i6, p3) => Ne(r4(i6), { method: "HEAD", headers: { ...t5.headers, ...p3.headers } }).then(() => true).catch((a4) => catchFetchError(a4, false)), getItem: async (i6, p3 = {}) => await Ne(r4(i6), { headers: { ...t5.headers, ...p3.headers } }).catch(catchFetchError), getItemRaw: async (i6, p3) => await Ne(r4(i6), { headers: { accept: "application/octet-stream", ...t5.headers, ...p3.headers } }).catch(catchFetchError), async getMeta(i6, p3) {
        const e6 = await Ne.raw(r4(i6), { method: "HEAD", headers: { ...t5.headers, ...p3.headers } });
        let n2;
        const o10 = e6.headers.get("last-modified");
        return o10 && (n2 = new Date(o10)), { status: e6.status, mtime: n2 };
      }, async setItem(i6, p3, e6) {
        await Ne(r4(i6), { method: "PUT", body: p3, headers: { ...t5.headers, ...e6?.headers } });
      }, async setItemRaw(i6, p3, e6) {
        await Ne(r4(i6), { method: "PUT", body: p3, headers: { "content-type": "application/octet-stream", ...t5.headers, ...e6.headers } });
      }, async removeItem(i6, p3) {
        await Ne(r4(i6), { method: "DELETE", headers: { ...t5.headers, ...p3.headers } });
      }, async getKeys(i6, p3) {
        const e6 = await Ne(rBase(i6), { headers: { ...t5.headers, ...p3.headers } });
        return Array.isArray(e6) ? e6 : [];
      }, async clear(i6, p3) {
        await Ne(rBase(i6), { method: "DELETE", headers: { ...t5.headers, ...p3.headers } });
      } };
    };
    cloudflareKVBindingDriver = (a4) => {
      const r4 = (i6 = "") => a4.base ? function(...a5) {
        return a5.map(normalizeKey2).filter(Boolean).join(":");
      }(a4.base, i6) : i6;
      async function getKeys(i6 = "") {
        i6 = r4(i6);
        const t5 = getKVBinding(a4.binding);
        return (await t5.list(i6 ? { prefix: i6 } : void 0)).keys.map((a5) => a5.name);
      }
      return { name: "cloudflare-kv-binding", options: a4, async hasItem(i6) {
        i6 = r4(i6);
        const t5 = getKVBinding(a4.binding);
        return null !== await t5.get(i6);
      }, getItem(i6) {
        i6 = r4(i6);
        return getKVBinding(a4.binding).get(i6);
      }, setItem(i6, t5) {
        i6 = r4(i6);
        return getKVBinding(a4.binding).put(i6, t5);
      }, removeItem(i6) {
        i6 = r4(i6);
        return getKVBinding(a4.binding).delete(i6);
      }, getKeys: () => getKeys().then((i6) => i6.map((i7) => a4.base ? i7.slice(a4.base.length) : i7)), async clear(i6) {
        const t5 = getKVBinding(a4.binding), p3 = await getKeys(i6);
        await Promise.all(p3.map((a5) => t5.delete(a5)));
      } };
    };
    Mime$1.prototype.define = function(a4, i6) {
      for (let t5 in a4) {
        let p3 = a4[t5].map(function(a5) {
          return a5.toLowerCase();
        });
        t5 = t5.toLowerCase();
        for (let a5 = 0; a5 < p3.length; a5++) {
          const e6 = p3[a5];
          if ("*" !== e6[0]) {
            if (!i6 && e6 in this._types)
              throw new Error('Attempt to change mapping for "' + e6 + '" extension from "' + this._types[e6] + '" to "' + t5 + '". Pass `force=true` to allow this, otherwise remove "' + e6 + '" from the list of extensions for "' + t5 + '".');
            this._types[e6] = t5;
          }
        }
        if (i6 || !this._extensions[t5]) {
          const a5 = p3[0];
          this._extensions[t5] = "*" !== a5[0] ? a5 : a5.substr(1);
        }
      }
    }, Mime$1.prototype.getType = function(a4) {
      let i6 = (a4 = String(a4)).replace(/^.*[/\\]/, "").toLowerCase(), t5 = i6.replace(/^.*\./, "").toLowerCase(), p3 = i6.length < a4.length;
      return (t5.length < i6.length - 1 || !p3) && this._types[t5] || null;
    }, Mime$1.prototype.getExtension = function(a4) {
      return (a4 = /^\s*([^;\s]*)/.test(a4) && RegExp.$1) && this._extensions[a4.toLowerCase()] || null;
    };
    T3 = { ...getDefaultExportFromCjs(new Mime$1({ "application/andrew-inset": ["ez"], "application/applixware": ["aw"], "application/atom+xml": ["atom"], "application/atomcat+xml": ["atomcat"], "application/atomdeleted+xml": ["atomdeleted"], "application/atomsvc+xml": ["atomsvc"], "application/atsc-dwd+xml": ["dwd"], "application/atsc-held+xml": ["held"], "application/atsc-rsat+xml": ["rsat"], "application/bdoc": ["bdoc"], "application/calendar+xml": ["xcs"], "application/ccxml+xml": ["ccxml"], "application/cdfx+xml": ["cdfx"], "application/cdmi-capability": ["cdmia"], "application/cdmi-container": ["cdmic"], "application/cdmi-domain": ["cdmid"], "application/cdmi-object": ["cdmio"], "application/cdmi-queue": ["cdmiq"], "application/cu-seeme": ["cu"], "application/dash+xml": ["mpd"], "application/davmount+xml": ["davmount"], "application/docbook+xml": ["dbk"], "application/dssc+der": ["dssc"], "application/dssc+xml": ["xdssc"], "application/ecmascript": ["es", "ecma"], "application/emma+xml": ["emma"], "application/emotionml+xml": ["emotionml"], "application/epub+zip": ["epub"], "application/exi": ["exi"], "application/express": ["exp"], "application/fdt+xml": ["fdt"], "application/font-tdpfr": ["pfr"], "application/geo+json": ["geojson"], "application/gml+xml": ["gml"], "application/gpx+xml": ["gpx"], "application/gxf": ["gxf"], "application/gzip": ["gz"], "application/hjson": ["hjson"], "application/hyperstudio": ["stk"], "application/inkml+xml": ["ink", "inkml"], "application/ipfix": ["ipfix"], "application/its+xml": ["its"], "application/java-archive": ["jar", "war", "ear"], "application/java-serialized-object": ["ser"], "application/java-vm": ["class"], "application/javascript": ["js", "mjs"], "application/json": ["json", "map"], "application/json5": ["json5"], "application/jsonml+json": ["jsonml"], "application/ld+json": ["jsonld"], "application/lgr+xml": ["lgr"], "application/lost+xml": ["lostxml"], "application/mac-binhex40": ["hqx"], "application/mac-compactpro": ["cpt"], "application/mads+xml": ["mads"], "application/manifest+json": ["webmanifest"], "application/marc": ["mrc"], "application/marcxml+xml": ["mrcx"], "application/mathematica": ["ma", "nb", "mb"], "application/mathml+xml": ["mathml"], "application/mbox": ["mbox"], "application/mediaservercontrol+xml": ["mscml"], "application/metalink+xml": ["metalink"], "application/metalink4+xml": ["meta4"], "application/mets+xml": ["mets"], "application/mmt-aei+xml": ["maei"], "application/mmt-usd+xml": ["musd"], "application/mods+xml": ["mods"], "application/mp21": ["m21", "mp21"], "application/mp4": ["mp4s", "m4p"], "application/msword": ["doc", "dot"], "application/mxf": ["mxf"], "application/n-quads": ["nq"], "application/n-triples": ["nt"], "application/node": ["cjs"], "application/octet-stream": ["bin", "dms", "lrf", "mar", "so", "dist", "distz", "pkg", "bpk", "dump", "elc", "deploy", "exe", "dll", "deb", "dmg", "iso", "img", "msi", "msp", "msm", "buffer"], "application/oda": ["oda"], "application/oebps-package+xml": ["opf"], "application/ogg": ["ogx"], "application/omdoc+xml": ["omdoc"], "application/onenote": ["onetoc", "onetoc2", "onetmp", "onepkg"], "application/oxps": ["oxps"], "application/p2p-overlay+xml": ["relo"], "application/patch-ops-error+xml": ["xer"], "application/pdf": ["pdf"], "application/pgp-encrypted": ["pgp"], "application/pgp-signature": ["asc", "sig"], "application/pics-rules": ["prf"], "application/pkcs10": ["p10"], "application/pkcs7-mime": ["p7m", "p7c"], "application/pkcs7-signature": ["p7s"], "application/pkcs8": ["p8"], "application/pkix-attr-cert": ["ac"], "application/pkix-cert": ["cer"], "application/pkix-crl": ["crl"], "application/pkix-pkipath": ["pkipath"], "application/pkixcmp": ["pki"], "application/pls+xml": ["pls"], "application/postscript": ["ai", "eps", "ps"], "application/provenance+xml": ["provx"], "application/pskc+xml": ["pskcxml"], "application/raml+yaml": ["raml"], "application/rdf+xml": ["rdf", "owl"], "application/reginfo+xml": ["rif"], "application/relax-ng-compact-syntax": ["rnc"], "application/resource-lists+xml": ["rl"], "application/resource-lists-diff+xml": ["rld"], "application/rls-services+xml": ["rs"], "application/route-apd+xml": ["rapd"], "application/route-s-tsid+xml": ["sls"], "application/route-usd+xml": ["rusd"], "application/rpki-ghostbusters": ["gbr"], "application/rpki-manifest": ["mft"], "application/rpki-roa": ["roa"], "application/rsd+xml": ["rsd"], "application/rss+xml": ["rss"], "application/rtf": ["rtf"], "application/sbml+xml": ["sbml"], "application/scvp-cv-request": ["scq"], "application/scvp-cv-response": ["scs"], "application/scvp-vp-request": ["spq"], "application/scvp-vp-response": ["spp"], "application/sdp": ["sdp"], "application/senml+xml": ["senmlx"], "application/sensml+xml": ["sensmlx"], "application/set-payment-initiation": ["setpay"], "application/set-registration-initiation": ["setreg"], "application/shf+xml": ["shf"], "application/sieve": ["siv", "sieve"], "application/smil+xml": ["smi", "smil"], "application/sparql-query": ["rq"], "application/sparql-results+xml": ["srx"], "application/srgs": ["gram"], "application/srgs+xml": ["grxml"], "application/sru+xml": ["sru"], "application/ssdl+xml": ["ssdl"], "application/ssml+xml": ["ssml"], "application/swid+xml": ["swidtag"], "application/tei+xml": ["tei", "teicorpus"], "application/thraud+xml": ["tfi"], "application/timestamped-data": ["tsd"], "application/toml": ["toml"], "application/trig": ["trig"], "application/ttml+xml": ["ttml"], "application/ubjson": ["ubj"], "application/urc-ressheet+xml": ["rsheet"], "application/urc-targetdesc+xml": ["td"], "application/voicexml+xml": ["vxml"], "application/wasm": ["wasm"], "application/widget": ["wgt"], "application/winhlp": ["hlp"], "application/wsdl+xml": ["wsdl"], "application/wspolicy+xml": ["wspolicy"], "application/xaml+xml": ["xaml"], "application/xcap-att+xml": ["xav"], "application/xcap-caps+xml": ["xca"], "application/xcap-diff+xml": ["xdf"], "application/xcap-el+xml": ["xel"], "application/xcap-ns+xml": ["xns"], "application/xenc+xml": ["xenc"], "application/xhtml+xml": ["xhtml", "xht"], "application/xliff+xml": ["xlf"], "application/xml": ["xml", "xsl", "xsd", "rng"], "application/xml-dtd": ["dtd"], "application/xop+xml": ["xop"], "application/xproc+xml": ["xpl"], "application/xslt+xml": ["*xsl", "xslt"], "application/xspf+xml": ["xspf"], "application/xv+xml": ["mxml", "xhvml", "xvml", "xvm"], "application/yang": ["yang"], "application/yin+xml": ["yin"], "application/zip": ["zip"], "audio/3gpp": ["*3gpp"], "audio/adpcm": ["adp"], "audio/amr": ["amr"], "audio/basic": ["au", "snd"], "audio/midi": ["mid", "midi", "kar", "rmi"], "audio/mobile-xmf": ["mxmf"], "audio/mp3": ["*mp3"], "audio/mp4": ["m4a", "mp4a"], "audio/mpeg": ["mpga", "mp2", "mp2a", "mp3", "m2a", "m3a"], "audio/ogg": ["oga", "ogg", "spx", "opus"], "audio/s3m": ["s3m"], "audio/silk": ["sil"], "audio/wav": ["wav"], "audio/wave": ["*wav"], "audio/webm": ["weba"], "audio/xm": ["xm"], "font/collection": ["ttc"], "font/otf": ["otf"], "font/ttf": ["ttf"], "font/woff": ["woff"], "font/woff2": ["woff2"], "image/aces": ["exr"], "image/apng": ["apng"], "image/avif": ["avif"], "image/bmp": ["bmp"], "image/cgm": ["cgm"], "image/dicom-rle": ["drle"], "image/emf": ["emf"], "image/fits": ["fits"], "image/g3fax": ["g3"], "image/gif": ["gif"], "image/heic": ["heic"], "image/heic-sequence": ["heics"], "image/heif": ["heif"], "image/heif-sequence": ["heifs"], "image/hej2k": ["hej2"], "image/hsj2": ["hsj2"], "image/ief": ["ief"], "image/jls": ["jls"], "image/jp2": ["jp2", "jpg2"], "image/jpeg": ["jpeg", "jpg", "jpe"], "image/jph": ["jph"], "image/jphc": ["jhc"], "image/jpm": ["jpm"], "image/jpx": ["jpx", "jpf"], "image/jxr": ["jxr"], "image/jxra": ["jxra"], "image/jxrs": ["jxrs"], "image/jxs": ["jxs"], "image/jxsc": ["jxsc"], "image/jxsi": ["jxsi"], "image/jxss": ["jxss"], "image/ktx": ["ktx"], "image/ktx2": ["ktx2"], "image/png": ["png"], "image/sgi": ["sgi"], "image/svg+xml": ["svg", "svgz"], "image/t38": ["t38"], "image/tiff": ["tif", "tiff"], "image/tiff-fx": ["tfx"], "image/webp": ["webp"], "image/wmf": ["wmf"], "message/disposition-notification": ["disposition-notification"], "message/global": ["u8msg"], "message/global-delivery-status": ["u8dsn"], "message/global-disposition-notification": ["u8mdn"], "message/global-headers": ["u8hdr"], "message/rfc822": ["eml", "mime"], "model/3mf": ["3mf"], "model/gltf+json": ["gltf"], "model/gltf-binary": ["glb"], "model/iges": ["igs", "iges"], "model/mesh": ["msh", "mesh", "silo"], "model/mtl": ["mtl"], "model/obj": ["obj"], "model/step+xml": ["stpx"], "model/step+zip": ["stpz"], "model/step-xml+zip": ["stpxz"], "model/stl": ["stl"], "model/vrml": ["wrl", "vrml"], "model/x3d+binary": ["*x3db", "x3dbz"], "model/x3d+fastinfoset": ["x3db"], "model/x3d+vrml": ["*x3dv", "x3dvz"], "model/x3d+xml": ["x3d", "x3dz"], "model/x3d-vrml": ["x3dv"], "text/cache-manifest": ["appcache", "manifest"], "text/calendar": ["ics", "ifb"], "text/coffeescript": ["coffee", "litcoffee"], "text/css": ["css"], "text/csv": ["csv"], "text/html": ["html", "htm", "shtml"], "text/jade": ["jade"], "text/jsx": ["jsx"], "text/less": ["less"], "text/markdown": ["markdown", "md"], "text/mathml": ["mml"], "text/mdx": ["mdx"], "text/n3": ["n3"], "text/plain": ["txt", "text", "conf", "def", "list", "log", "in", "ini"], "text/richtext": ["rtx"], "text/rtf": ["*rtf"], "text/sgml": ["sgml", "sgm"], "text/shex": ["shex"], "text/slim": ["slim", "slm"], "text/spdx": ["spdx"], "text/stylus": ["stylus", "styl"], "text/tab-separated-values": ["tsv"], "text/troff": ["t", "tr", "roff", "man", "me", "ms"], "text/turtle": ["ttl"], "text/uri-list": ["uri", "uris", "urls"], "text/vcard": ["vcard"], "text/vtt": ["vtt"], "text/xml": ["*xml"], "text/yaml": ["yaml", "yml"], "video/3gpp": ["3gp", "3gpp"], "video/3gpp2": ["3g2"], "video/h261": ["h261"], "video/h263": ["h263"], "video/h264": ["h264"], "video/iso.segment": ["m4s"], "video/jpeg": ["jpgv"], "video/jpm": ["*jpm", "jpgm"], "video/mj2": ["mj2", "mjp2"], "video/mp2t": ["ts"], "video/mp4": ["mp4", "mp4v", "mpg4"], "video/mpeg": ["mpeg", "mpg", "mpe", "m1v", "m2v"], "video/ogg": ["ogv"], "video/quicktime": ["qt", "mov"], "video/webm": ["webm"] }, { "application/prs.cww": ["cww"], "application/vnd.1000minds.decision-model+xml": ["1km"], "application/vnd.3gpp.pic-bw-large": ["plb"], "application/vnd.3gpp.pic-bw-small": ["psb"], "application/vnd.3gpp.pic-bw-var": ["pvb"], "application/vnd.3gpp2.tcap": ["tcap"], "application/vnd.3m.post-it-notes": ["pwn"], "application/vnd.accpac.simply.aso": ["aso"], "application/vnd.accpac.simply.imp": ["imp"], "application/vnd.acucobol": ["acu"], "application/vnd.acucorp": ["atc", "acutc"], "application/vnd.adobe.air-application-installer-package+zip": ["air"], "application/vnd.adobe.formscentral.fcdt": ["fcdt"], "application/vnd.adobe.fxp": ["fxp", "fxpl"], "application/vnd.adobe.xdp+xml": ["xdp"], "application/vnd.adobe.xfdf": ["xfdf"], "application/vnd.ahead.space": ["ahead"], "application/vnd.airzip.filesecure.azf": ["azf"], "application/vnd.airzip.filesecure.azs": ["azs"], "application/vnd.amazon.ebook": ["azw"], "application/vnd.americandynamics.acc": ["acc"], "application/vnd.amiga.ami": ["ami"], "application/vnd.android.package-archive": ["apk"], "application/vnd.anser-web-certificate-issue-initiation": ["cii"], "application/vnd.anser-web-funds-transfer-initiation": ["fti"], "application/vnd.antix.game-component": ["atx"], "application/vnd.apple.installer+xml": ["mpkg"], "application/vnd.apple.keynote": ["key"], "application/vnd.apple.mpegurl": ["m3u8"], "application/vnd.apple.numbers": ["numbers"], "application/vnd.apple.pages": ["pages"], "application/vnd.apple.pkpass": ["pkpass"], "application/vnd.aristanetworks.swi": ["swi"], "application/vnd.astraea-software.iota": ["iota"], "application/vnd.audiograph": ["aep"], "application/vnd.balsamiq.bmml+xml": ["bmml"], "application/vnd.blueice.multipass": ["mpm"], "application/vnd.bmi": ["bmi"], "application/vnd.businessobjects": ["rep"], "application/vnd.chemdraw+xml": ["cdxml"], "application/vnd.chipnuts.karaoke-mmd": ["mmd"], "application/vnd.cinderella": ["cdy"], "application/vnd.citationstyles.style+xml": ["csl"], "application/vnd.claymore": ["cla"], "application/vnd.cloanto.rp9": ["rp9"], "application/vnd.clonk.c4group": ["c4g", "c4d", "c4f", "c4p", "c4u"], "application/vnd.cluetrust.cartomobile-config": ["c11amc"], "application/vnd.cluetrust.cartomobile-config-pkg": ["c11amz"], "application/vnd.commonspace": ["csp"], "application/vnd.contact.cmsg": ["cdbcmsg"], "application/vnd.cosmocaller": ["cmc"], "application/vnd.crick.clicker": ["clkx"], "application/vnd.crick.clicker.keyboard": ["clkk"], "application/vnd.crick.clicker.palette": ["clkp"], "application/vnd.crick.clicker.template": ["clkt"], "application/vnd.crick.clicker.wordbank": ["clkw"], "application/vnd.criticaltools.wbs+xml": ["wbs"], "application/vnd.ctc-posml": ["pml"], "application/vnd.cups-ppd": ["ppd"], "application/vnd.curl.car": ["car"], "application/vnd.curl.pcurl": ["pcurl"], "application/vnd.dart": ["dart"], "application/vnd.data-vision.rdz": ["rdz"], "application/vnd.dbf": ["dbf"], "application/vnd.dece.data": ["uvf", "uvvf", "uvd", "uvvd"], "application/vnd.dece.ttml+xml": ["uvt", "uvvt"], "application/vnd.dece.unspecified": ["uvx", "uvvx"], "application/vnd.dece.zip": ["uvz", "uvvz"], "application/vnd.denovo.fcselayout-link": ["fe_launch"], "application/vnd.dna": ["dna"], "application/vnd.dolby.mlp": ["mlp"], "application/vnd.dpgraph": ["dpg"], "application/vnd.dreamfactory": ["dfac"], "application/vnd.ds-keypoint": ["kpxx"], "application/vnd.dvb.ait": ["ait"], "application/vnd.dvb.service": ["svc"], "application/vnd.dynageo": ["geo"], "application/vnd.ecowin.chart": ["mag"], "application/vnd.enliven": ["nml"], "application/vnd.epson.esf": ["esf"], "application/vnd.epson.msf": ["msf"], "application/vnd.epson.quickanime": ["qam"], "application/vnd.epson.salt": ["slt"], "application/vnd.epson.ssf": ["ssf"], "application/vnd.eszigno3+xml": ["es3", "et3"], "application/vnd.ezpix-album": ["ez2"], "application/vnd.ezpix-package": ["ez3"], "application/vnd.fdf": ["fdf"], "application/vnd.fdsn.mseed": ["mseed"], "application/vnd.fdsn.seed": ["seed", "dataless"], "application/vnd.flographit": ["gph"], "application/vnd.fluxtime.clip": ["ftc"], "application/vnd.framemaker": ["fm", "frame", "maker", "book"], "application/vnd.frogans.fnc": ["fnc"], "application/vnd.frogans.ltf": ["ltf"], "application/vnd.fsc.weblaunch": ["fsc"], "application/vnd.fujitsu.oasys": ["oas"], "application/vnd.fujitsu.oasys2": ["oa2"], "application/vnd.fujitsu.oasys3": ["oa3"], "application/vnd.fujitsu.oasysgp": ["fg5"], "application/vnd.fujitsu.oasysprs": ["bh2"], "application/vnd.fujixerox.ddd": ["ddd"], "application/vnd.fujixerox.docuworks": ["xdw"], "application/vnd.fujixerox.docuworks.binder": ["xbd"], "application/vnd.fuzzysheet": ["fzs"], "application/vnd.genomatix.tuxedo": ["txd"], "application/vnd.geogebra.file": ["ggb"], "application/vnd.geogebra.tool": ["ggt"], "application/vnd.geometry-explorer": ["gex", "gre"], "application/vnd.geonext": ["gxt"], "application/vnd.geoplan": ["g2w"], "application/vnd.geospace": ["g3w"], "application/vnd.gmx": ["gmx"], "application/vnd.google-apps.document": ["gdoc"], "application/vnd.google-apps.presentation": ["gslides"], "application/vnd.google-apps.spreadsheet": ["gsheet"], "application/vnd.google-earth.kml+xml": ["kml"], "application/vnd.google-earth.kmz": ["kmz"], "application/vnd.grafeq": ["gqf", "gqs"], "application/vnd.groove-account": ["gac"], "application/vnd.groove-help": ["ghf"], "application/vnd.groove-identity-message": ["gim"], "application/vnd.groove-injector": ["grv"], "application/vnd.groove-tool-message": ["gtm"], "application/vnd.groove-tool-template": ["tpl"], "application/vnd.groove-vcard": ["vcg"], "application/vnd.hal+xml": ["hal"], "application/vnd.handheld-entertainment+xml": ["zmm"], "application/vnd.hbci": ["hbci"], "application/vnd.hhe.lesson-player": ["les"], "application/vnd.hp-hpgl": ["hpgl"], "application/vnd.hp-hpid": ["hpid"], "application/vnd.hp-hps": ["hps"], "application/vnd.hp-jlyt": ["jlt"], "application/vnd.hp-pcl": ["pcl"], "application/vnd.hp-pclxl": ["pclxl"], "application/vnd.hydrostatix.sof-data": ["sfd-hdstx"], "application/vnd.ibm.minipay": ["mpy"], "application/vnd.ibm.modcap": ["afp", "listafp", "list3820"], "application/vnd.ibm.rights-management": ["irm"], "application/vnd.ibm.secure-container": ["sc"], "application/vnd.iccprofile": ["icc", "icm"], "application/vnd.igloader": ["igl"], "application/vnd.immervision-ivp": ["ivp"], "application/vnd.immervision-ivu": ["ivu"], "application/vnd.insors.igm": ["igm"], "application/vnd.intercon.formnet": ["xpw", "xpx"], "application/vnd.intergeo": ["i2g"], "application/vnd.intu.qbo": ["qbo"], "application/vnd.intu.qfx": ["qfx"], "application/vnd.ipunplugged.rcprofile": ["rcprofile"], "application/vnd.irepository.package+xml": ["irp"], "application/vnd.is-xpr": ["xpr"], "application/vnd.isac.fcs": ["fcs"], "application/vnd.jam": ["jam"], "application/vnd.jcp.javame.midlet-rms": ["rms"], "application/vnd.jisp": ["jisp"], "application/vnd.joost.joda-archive": ["joda"], "application/vnd.kahootz": ["ktz", "ktr"], "application/vnd.kde.karbon": ["karbon"], "application/vnd.kde.kchart": ["chrt"], "application/vnd.kde.kformula": ["kfo"], "application/vnd.kde.kivio": ["flw"], "application/vnd.kde.kontour": ["kon"], "application/vnd.kde.kpresenter": ["kpr", "kpt"], "application/vnd.kde.kspread": ["ksp"], "application/vnd.kde.kword": ["kwd", "kwt"], "application/vnd.kenameaapp": ["htke"], "application/vnd.kidspiration": ["kia"], "application/vnd.kinar": ["kne", "knp"], "application/vnd.koan": ["skp", "skd", "skt", "skm"], "application/vnd.kodak-descriptor": ["sse"], "application/vnd.las.las+xml": ["lasxml"], "application/vnd.llamagraphics.life-balance.desktop": ["lbd"], "application/vnd.llamagraphics.life-balance.exchange+xml": ["lbe"], "application/vnd.lotus-1-2-3": ["123"], "application/vnd.lotus-approach": ["apr"], "application/vnd.lotus-freelance": ["pre"], "application/vnd.lotus-notes": ["nsf"], "application/vnd.lotus-organizer": ["org"], "application/vnd.lotus-screencam": ["scm"], "application/vnd.lotus-wordpro": ["lwp"], "application/vnd.macports.portpkg": ["portpkg"], "application/vnd.mapbox-vector-tile": ["mvt"], "application/vnd.mcd": ["mcd"], "application/vnd.medcalcdata": ["mc1"], "application/vnd.mediastation.cdkey": ["cdkey"], "application/vnd.mfer": ["mwf"], "application/vnd.mfmp": ["mfm"], "application/vnd.micrografx.flo": ["flo"], "application/vnd.micrografx.igx": ["igx"], "application/vnd.mif": ["mif"], "application/vnd.mobius.daf": ["daf"], "application/vnd.mobius.dis": ["dis"], "application/vnd.mobius.mbk": ["mbk"], "application/vnd.mobius.mqy": ["mqy"], "application/vnd.mobius.msl": ["msl"], "application/vnd.mobius.plc": ["plc"], "application/vnd.mobius.txf": ["txf"], "application/vnd.mophun.application": ["mpn"], "application/vnd.mophun.certificate": ["mpc"], "application/vnd.mozilla.xul+xml": ["xul"], "application/vnd.ms-artgalry": ["cil"], "application/vnd.ms-cab-compressed": ["cab"], "application/vnd.ms-excel": ["xls", "xlm", "xla", "xlc", "xlt", "xlw"], "application/vnd.ms-excel.addin.macroenabled.12": ["xlam"], "application/vnd.ms-excel.sheet.binary.macroenabled.12": ["xlsb"], "application/vnd.ms-excel.sheet.macroenabled.12": ["xlsm"], "application/vnd.ms-excel.template.macroenabled.12": ["xltm"], "application/vnd.ms-fontobject": ["eot"], "application/vnd.ms-htmlhelp": ["chm"], "application/vnd.ms-ims": ["ims"], "application/vnd.ms-lrm": ["lrm"], "application/vnd.ms-officetheme": ["thmx"], "application/vnd.ms-outlook": ["msg"], "application/vnd.ms-pki.seccat": ["cat"], "application/vnd.ms-pki.stl": ["*stl"], "application/vnd.ms-powerpoint": ["ppt", "pps", "pot"], "application/vnd.ms-powerpoint.addin.macroenabled.12": ["ppam"], "application/vnd.ms-powerpoint.presentation.macroenabled.12": ["pptm"], "application/vnd.ms-powerpoint.slide.macroenabled.12": ["sldm"], "application/vnd.ms-powerpoint.slideshow.macroenabled.12": ["ppsm"], "application/vnd.ms-powerpoint.template.macroenabled.12": ["potm"], "application/vnd.ms-project": ["mpp", "mpt"], "application/vnd.ms-word.document.macroenabled.12": ["docm"], "application/vnd.ms-word.template.macroenabled.12": ["dotm"], "application/vnd.ms-works": ["wps", "wks", "wcm", "wdb"], "application/vnd.ms-wpl": ["wpl"], "application/vnd.ms-xpsdocument": ["xps"], "application/vnd.mseq": ["mseq"], "application/vnd.musician": ["mus"], "application/vnd.muvee.style": ["msty"], "application/vnd.mynfc": ["taglet"], "application/vnd.neurolanguage.nlu": ["nlu"], "application/vnd.nitf": ["ntf", "nitf"], "application/vnd.noblenet-directory": ["nnd"], "application/vnd.noblenet-sealer": ["nns"], "application/vnd.noblenet-web": ["nnw"], "application/vnd.nokia.n-gage.ac+xml": ["*ac"], "application/vnd.nokia.n-gage.data": ["ngdat"], "application/vnd.nokia.n-gage.symbian.install": ["n-gage"], "application/vnd.nokia.radio-preset": ["rpst"], "application/vnd.nokia.radio-presets": ["rpss"], "application/vnd.novadigm.edm": ["edm"], "application/vnd.novadigm.edx": ["edx"], "application/vnd.novadigm.ext": ["ext"], "application/vnd.oasis.opendocument.chart": ["odc"], "application/vnd.oasis.opendocument.chart-template": ["otc"], "application/vnd.oasis.opendocument.database": ["odb"], "application/vnd.oasis.opendocument.formula": ["odf"], "application/vnd.oasis.opendocument.formula-template": ["odft"], "application/vnd.oasis.opendocument.graphics": ["odg"], "application/vnd.oasis.opendocument.graphics-template": ["otg"], "application/vnd.oasis.opendocument.image": ["odi"], "application/vnd.oasis.opendocument.image-template": ["oti"], "application/vnd.oasis.opendocument.presentation": ["odp"], "application/vnd.oasis.opendocument.presentation-template": ["otp"], "application/vnd.oasis.opendocument.spreadsheet": ["ods"], "application/vnd.oasis.opendocument.spreadsheet-template": ["ots"], "application/vnd.oasis.opendocument.text": ["odt"], "application/vnd.oasis.opendocument.text-master": ["odm"], "application/vnd.oasis.opendocument.text-template": ["ott"], "application/vnd.oasis.opendocument.text-web": ["oth"], "application/vnd.olpc-sugar": ["xo"], "application/vnd.oma.dd2+xml": ["dd2"], "application/vnd.openblox.game+xml": ["obgx"], "application/vnd.openofficeorg.extension": ["oxt"], "application/vnd.openstreetmap.data+xml": ["osm"], "application/vnd.openxmlformats-officedocument.presentationml.presentation": ["pptx"], "application/vnd.openxmlformats-officedocument.presentationml.slide": ["sldx"], "application/vnd.openxmlformats-officedocument.presentationml.slideshow": ["ppsx"], "application/vnd.openxmlformats-officedocument.presentationml.template": ["potx"], "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": ["xlsx"], "application/vnd.openxmlformats-officedocument.spreadsheetml.template": ["xltx"], "application/vnd.openxmlformats-officedocument.wordprocessingml.document": ["docx"], "application/vnd.openxmlformats-officedocument.wordprocessingml.template": ["dotx"], "application/vnd.osgeo.mapguide.package": ["mgp"], "application/vnd.osgi.dp": ["dp"], "application/vnd.osgi.subsystem": ["esa"], "application/vnd.palm": ["pdb", "pqa", "oprc"], "application/vnd.pawaafile": ["paw"], "application/vnd.pg.format": ["str"], "application/vnd.pg.osasli": ["ei6"], "application/vnd.picsel": ["efif"], "application/vnd.pmi.widget": ["wg"], "application/vnd.pocketlearn": ["plf"], "application/vnd.powerbuilder6": ["pbd"], "application/vnd.previewsystems.box": ["box"], "application/vnd.proteus.magazine": ["mgz"], "application/vnd.publishare-delta-tree": ["qps"], "application/vnd.pvi.ptid1": ["ptid"], "application/vnd.quark.quarkxpress": ["qxd", "qxt", "qwd", "qwt", "qxl", "qxb"], "application/vnd.rar": ["rar"], "application/vnd.realvnc.bed": ["bed"], "application/vnd.recordare.musicxml": ["mxl"], "application/vnd.recordare.musicxml+xml": ["musicxml"], "application/vnd.rig.cryptonote": ["cryptonote"], "application/vnd.rim.cod": ["cod"], "application/vnd.rn-realmedia": ["rm"], "application/vnd.rn-realmedia-vbr": ["rmvb"], "application/vnd.route66.link66+xml": ["link66"], "application/vnd.sailingtracker.track": ["st"], "application/vnd.seemail": ["see"], "application/vnd.sema": ["sema"], "application/vnd.semd": ["semd"], "application/vnd.semf": ["semf"], "application/vnd.shana.informed.formdata": ["ifm"], "application/vnd.shana.informed.formtemplate": ["itp"], "application/vnd.shana.informed.interchange": ["iif"], "application/vnd.shana.informed.package": ["ipk"], "application/vnd.simtech-mindmapper": ["twd", "twds"], "application/vnd.smaf": ["mmf"], "application/vnd.smart.teacher": ["teacher"], "application/vnd.software602.filler.form+xml": ["fo"], "application/vnd.solent.sdkm+xml": ["sdkm", "sdkd"], "application/vnd.spotfire.dxp": ["dxp"], "application/vnd.spotfire.sfs": ["sfs"], "application/vnd.stardivision.calc": ["sdc"], "application/vnd.stardivision.draw": ["sda"], "application/vnd.stardivision.impress": ["sdd"], "application/vnd.stardivision.math": ["smf"], "application/vnd.stardivision.writer": ["sdw", "vor"], "application/vnd.stardivision.writer-global": ["sgl"], "application/vnd.stepmania.package": ["smzip"], "application/vnd.stepmania.stepchart": ["sm"], "application/vnd.sun.wadl+xml": ["wadl"], "application/vnd.sun.xml.calc": ["sxc"], "application/vnd.sun.xml.calc.template": ["stc"], "application/vnd.sun.xml.draw": ["sxd"], "application/vnd.sun.xml.draw.template": ["std"], "application/vnd.sun.xml.impress": ["sxi"], "application/vnd.sun.xml.impress.template": ["sti"], "application/vnd.sun.xml.math": ["sxm"], "application/vnd.sun.xml.writer": ["sxw"], "application/vnd.sun.xml.writer.global": ["sxg"], "application/vnd.sun.xml.writer.template": ["stw"], "application/vnd.sus-calendar": ["sus", "susp"], "application/vnd.svd": ["svd"], "application/vnd.symbian.install": ["sis", "sisx"], "application/vnd.syncml+xml": ["xsm"], "application/vnd.syncml.dm+wbxml": ["bdm"], "application/vnd.syncml.dm+xml": ["xdm"], "application/vnd.syncml.dmddf+xml": ["ddf"], "application/vnd.tao.intent-module-archive": ["tao"], "application/vnd.tcpdump.pcap": ["pcap", "cap", "dmp"], "application/vnd.tmobile-livetv": ["tmo"], "application/vnd.trid.tpt": ["tpt"], "application/vnd.triscape.mxs": ["mxs"], "application/vnd.trueapp": ["tra"], "application/vnd.ufdl": ["ufd", "ufdl"], "application/vnd.uiq.theme": ["utz"], "application/vnd.umajin": ["umj"], "application/vnd.unity": ["unityweb"], "application/vnd.uoml+xml": ["uoml"], "application/vnd.vcx": ["vcx"], "application/vnd.visio": ["vsd", "vst", "vss", "vsw"], "application/vnd.visionary": ["vis"], "application/vnd.vsf": ["vsf"], "application/vnd.wap.wbxml": ["wbxml"], "application/vnd.wap.wmlc": ["wmlc"], "application/vnd.wap.wmlscriptc": ["wmlsc"], "application/vnd.webturbo": ["wtb"], "application/vnd.wolfram.player": ["nbp"], "application/vnd.wordperfect": ["wpd"], "application/vnd.wqd": ["wqd"], "application/vnd.wt.stf": ["stf"], "application/vnd.xara": ["xar"], "application/vnd.xfdl": ["xfdl"], "application/vnd.yamaha.hv-dic": ["hvd"], "application/vnd.yamaha.hv-script": ["hvs"], "application/vnd.yamaha.hv-voice": ["hvp"], "application/vnd.yamaha.openscoreformat": ["osf"], "application/vnd.yamaha.openscoreformat.osfpvg+xml": ["osfpvg"], "application/vnd.yamaha.smaf-audio": ["saf"], "application/vnd.yamaha.smaf-phrase": ["spf"], "application/vnd.yellowriver-custom-menu": ["cmp"], "application/vnd.zul": ["zir", "zirz"], "application/vnd.zzazz.deck+xml": ["zaz"], "application/x-7z-compressed": ["7z"], "application/x-abiword": ["abw"], "application/x-ace-compressed": ["ace"], "application/x-apple-diskimage": ["*dmg"], "application/x-arj": ["arj"], "application/x-authorware-bin": ["aab", "x32", "u32", "vox"], "application/x-authorware-map": ["aam"], "application/x-authorware-seg": ["aas"], "application/x-bcpio": ["bcpio"], "application/x-bdoc": ["*bdoc"], "application/x-bittorrent": ["torrent"], "application/x-blorb": ["blb", "blorb"], "application/x-bzip": ["bz"], "application/x-bzip2": ["bz2", "boz"], "application/x-cbr": ["cbr", "cba", "cbt", "cbz", "cb7"], "application/x-cdlink": ["vcd"], "application/x-cfs-compressed": ["cfs"], "application/x-chat": ["chat"], "application/x-chess-pgn": ["pgn"], "application/x-chrome-extension": ["crx"], "application/x-cocoa": ["cco"], "application/x-conference": ["nsc"], "application/x-cpio": ["cpio"], "application/x-csh": ["csh"], "application/x-debian-package": ["*deb", "udeb"], "application/x-dgc-compressed": ["dgc"], "application/x-director": ["dir", "dcr", "dxr", "cst", "cct", "cxt", "w3d", "fgd", "swa"], "application/x-doom": ["wad"], "application/x-dtbncx+xml": ["ncx"], "application/x-dtbook+xml": ["dtb"], "application/x-dtbresource+xml": ["res"], "application/x-dvi": ["dvi"], "application/x-envoy": ["evy"], "application/x-eva": ["eva"], "application/x-font-bdf": ["bdf"], "application/x-font-ghostscript": ["gsf"], "application/x-font-linux-psf": ["psf"], "application/x-font-pcf": ["pcf"], "application/x-font-snf": ["snf"], "application/x-font-type1": ["pfa", "pfb", "pfm", "afm"], "application/x-freearc": ["arc"], "application/x-futuresplash": ["spl"], "application/x-gca-compressed": ["gca"], "application/x-glulx": ["ulx"], "application/x-gnumeric": ["gnumeric"], "application/x-gramps-xml": ["gramps"], "application/x-gtar": ["gtar"], "application/x-hdf": ["hdf"], "application/x-httpd-php": ["php"], "application/x-install-instructions": ["install"], "application/x-iso9660-image": ["*iso"], "application/x-iwork-keynote-sffkey": ["*key"], "application/x-iwork-numbers-sffnumbers": ["*numbers"], "application/x-iwork-pages-sffpages": ["*pages"], "application/x-java-archive-diff": ["jardiff"], "application/x-java-jnlp-file": ["jnlp"], "application/x-keepass2": ["kdbx"], "application/x-latex": ["latex"], "application/x-lua-bytecode": ["luac"], "application/x-lzh-compressed": ["lzh", "lha"], "application/x-makeself": ["run"], "application/x-mie": ["mie"], "application/x-mobipocket-ebook": ["prc", "mobi"], "application/x-ms-application": ["application"], "application/x-ms-shortcut": ["lnk"], "application/x-ms-wmd": ["wmd"], "application/x-ms-wmz": ["wmz"], "application/x-ms-xbap": ["xbap"], "application/x-msaccess": ["mdb"], "application/x-msbinder": ["obd"], "application/x-mscardfile": ["crd"], "application/x-msclip": ["clp"], "application/x-msdos-program": ["*exe"], "application/x-msdownload": ["*exe", "*dll", "com", "bat", "*msi"], "application/x-msmediaview": ["mvb", "m13", "m14"], "application/x-msmetafile": ["*wmf", "*wmz", "*emf", "emz"], "application/x-msmoney": ["mny"], "application/x-mspublisher": ["pub"], "application/x-msschedule": ["scd"], "application/x-msterminal": ["trm"], "application/x-mswrite": ["wri"], "application/x-netcdf": ["nc", "cdf"], "application/x-ns-proxy-autoconfig": ["pac"], "application/x-nzb": ["nzb"], "application/x-perl": ["pl", "pm"], "application/x-pilot": ["*prc", "*pdb"], "application/x-pkcs12": ["p12", "pfx"], "application/x-pkcs7-certificates": ["p7b", "spc"], "application/x-pkcs7-certreqresp": ["p7r"], "application/x-rar-compressed": ["*rar"], "application/x-redhat-package-manager": ["rpm"], "application/x-research-info-systems": ["ris"], "application/x-sea": ["sea"], "application/x-sh": ["sh"], "application/x-shar": ["shar"], "application/x-shockwave-flash": ["swf"], "application/x-silverlight-app": ["xap"], "application/x-sql": ["sql"], "application/x-stuffit": ["sit"], "application/x-stuffitx": ["sitx"], "application/x-subrip": ["srt"], "application/x-sv4cpio": ["sv4cpio"], "application/x-sv4crc": ["sv4crc"], "application/x-t3vm-image": ["t3"], "application/x-tads": ["gam"], "application/x-tar": ["tar"], "application/x-tcl": ["tcl", "tk"], "application/x-tex": ["tex"], "application/x-tex-tfm": ["tfm"], "application/x-texinfo": ["texinfo", "texi"], "application/x-tgif": ["*obj"], "application/x-ustar": ["ustar"], "application/x-virtualbox-hdd": ["hdd"], "application/x-virtualbox-ova": ["ova"], "application/x-virtualbox-ovf": ["ovf"], "application/x-virtualbox-vbox": ["vbox"], "application/x-virtualbox-vbox-extpack": ["vbox-extpack"], "application/x-virtualbox-vdi": ["vdi"], "application/x-virtualbox-vhd": ["vhd"], "application/x-virtualbox-vmdk": ["vmdk"], "application/x-wais-source": ["src"], "application/x-web-app-manifest+json": ["webapp"], "application/x-x509-ca-cert": ["der", "crt", "pem"], "application/x-xfig": ["fig"], "application/x-xliff+xml": ["*xlf"], "application/x-xpinstall": ["xpi"], "application/x-xz": ["xz"], "application/x-zmachine": ["z1", "z2", "z3", "z4", "z5", "z6", "z7", "z8"], "audio/vnd.dece.audio": ["uva", "uvva"], "audio/vnd.digital-winds": ["eol"], "audio/vnd.dra": ["dra"], "audio/vnd.dts": ["dts"], "audio/vnd.dts.hd": ["dtshd"], "audio/vnd.lucent.voice": ["lvp"], "audio/vnd.ms-playready.media.pya": ["pya"], "audio/vnd.nuera.ecelp4800": ["ecelp4800"], "audio/vnd.nuera.ecelp7470": ["ecelp7470"], "audio/vnd.nuera.ecelp9600": ["ecelp9600"], "audio/vnd.rip": ["rip"], "audio/x-aac": ["aac"], "audio/x-aiff": ["aif", "aiff", "aifc"], "audio/x-caf": ["caf"], "audio/x-flac": ["flac"], "audio/x-m4a": ["*m4a"], "audio/x-matroska": ["mka"], "audio/x-mpegurl": ["m3u"], "audio/x-ms-wax": ["wax"], "audio/x-ms-wma": ["wma"], "audio/x-pn-realaudio": ["ram", "ra"], "audio/x-pn-realaudio-plugin": ["rmp"], "audio/x-realaudio": ["*ra"], "audio/x-wav": ["*wav"], "chemical/x-cdx": ["cdx"], "chemical/x-cif": ["cif"], "chemical/x-cmdf": ["cmdf"], "chemical/x-cml": ["cml"], "chemical/x-csml": ["csml"], "chemical/x-xyz": ["xyz"], "image/prs.btif": ["btif"], "image/prs.pti": ["pti"], "image/vnd.adobe.photoshop": ["psd"], "image/vnd.airzip.accelerator.azv": ["azv"], "image/vnd.dece.graphic": ["uvi", "uvvi", "uvg", "uvvg"], "image/vnd.djvu": ["djvu", "djv"], "image/vnd.dvb.subtitle": ["*sub"], "image/vnd.dwg": ["dwg"], "image/vnd.dxf": ["dxf"], "image/vnd.fastbidsheet": ["fbs"], "image/vnd.fpx": ["fpx"], "image/vnd.fst": ["fst"], "image/vnd.fujixerox.edmics-mmr": ["mmr"], "image/vnd.fujixerox.edmics-rlc": ["rlc"], "image/vnd.microsoft.icon": ["ico"], "image/vnd.ms-dds": ["dds"], "image/vnd.ms-modi": ["mdi"], "image/vnd.ms-photo": ["wdp"], "image/vnd.net-fpx": ["npx"], "image/vnd.pco.b16": ["b16"], "image/vnd.tencent.tap": ["tap"], "image/vnd.valve.source.texture": ["vtf"], "image/vnd.wap.wbmp": ["wbmp"], "image/vnd.xiff": ["xif"], "image/vnd.zbrush.pcx": ["pcx"], "image/x-3ds": ["3ds"], "image/x-cmu-raster": ["ras"], "image/x-cmx": ["cmx"], "image/x-freehand": ["fh", "fhc", "fh4", "fh5", "fh7"], "image/x-icon": ["*ico"], "image/x-jng": ["jng"], "image/x-mrsid-image": ["sid"], "image/x-ms-bmp": ["*bmp"], "image/x-pcx": ["*pcx"], "image/x-pict": ["pic", "pct"], "image/x-portable-anymap": ["pnm"], "image/x-portable-bitmap": ["pbm"], "image/x-portable-graymap": ["pgm"], "image/x-portable-pixmap": ["ppm"], "image/x-rgb": ["rgb"], "image/x-tga": ["tga"], "image/x-xbitmap": ["xbm"], "image/x-xpixmap": ["xpm"], "image/x-xwindowdump": ["xwd"], "message/vnd.wfa.wsc": ["wsc"], "model/vnd.collada+xml": ["dae"], "model/vnd.dwf": ["dwf"], "model/vnd.gdl": ["gdl"], "model/vnd.gtw": ["gtw"], "model/vnd.mts": ["mts"], "model/vnd.opengex": ["ogex"], "model/vnd.parasolid.transmit.binary": ["x_b"], "model/vnd.parasolid.transmit.text": ["x_t"], "model/vnd.sap.vds": ["vds"], "model/vnd.usdz+zip": ["usdz"], "model/vnd.valve.source.compiled-map": ["bsp"], "model/vnd.vtu": ["vtu"], "text/prs.lines.tag": ["dsc"], "text/vnd.curl": ["curl"], "text/vnd.curl.dcurl": ["dcurl"], "text/vnd.curl.mcurl": ["mcurl"], "text/vnd.curl.scurl": ["scurl"], "text/vnd.dvb.subtitle": ["sub"], "text/vnd.fly": ["fly"], "text/vnd.fmi.flexstor": ["flx"], "text/vnd.graphviz": ["gv"], "text/vnd.in3d.3dml": ["3dml"], "text/vnd.in3d.spot": ["spot"], "text/vnd.sun.j2me.app-descriptor": ["jad"], "text/vnd.wap.wml": ["wml"], "text/vnd.wap.wmlscript": ["wmls"], "text/x-asm": ["s", "asm"], "text/x-c": ["c", "cc", "cxx", "cpp", "h", "hh", "dic"], "text/x-component": ["htc"], "text/x-fortran": ["f", "for", "f77", "f90"], "text/x-handlebars-template": ["hbs"], "text/x-java-source": ["java"], "text/x-lua": ["lua"], "text/x-markdown": ["mkd"], "text/x-nfo": ["nfo"], "text/x-opml": ["opml"], "text/x-org": ["*org"], "text/x-pascal": ["p", "pas"], "text/x-processing": ["pde"], "text/x-sass": ["sass"], "text/x-scss": ["scss"], "text/x-setext": ["etx"], "text/x-sfv": ["sfv"], "text/x-suse-ymp": ["ymp"], "text/x-uuencode": ["uu"], "text/x-vcalendar": ["vcs"], "text/x-vcard": ["vcf"], "video/vnd.dece.hd": ["uvh", "uvvh"], "video/vnd.dece.mobile": ["uvm", "uvvm"], "video/vnd.dece.pd": ["uvp", "uvvp"], "video/vnd.dece.sd": ["uvs", "uvvs"], "video/vnd.dece.video": ["uvv", "uvvv"], "video/vnd.dvb.file": ["dvb"], "video/vnd.fvt": ["fvt"], "video/vnd.mpegurl": ["mxu", "m4u"], "video/vnd.ms-playready.media.pyv": ["pyv"], "video/vnd.uvvu.mp4": ["uvu", "uvvu"], "video/vnd.vivo": ["viv"], "video/x-f4v": ["f4v"], "video/x-fli": ["fli"], "video/x-flv": ["flv"], "video/x-m4v": ["m4v"], "video/x-matroska": ["mkv", "mk3d", "mks"], "video/x-mng": ["mng"], "video/x-ms-asf": ["asf", "asx"], "video/x-ms-vob": ["vob"], "video/x-ms-wm": ["wm"], "video/x-ms-wmv": ["wmv"], "video/x-ms-wmx": ["wmx"], "video/x-ms-wvx": ["wvx"], "video/x-msvideo": ["avi"], "video/x-sgi-movie": ["movie"], "video/x-smv": ["smv"], "x-conference/x-cooltalk": ["ice"] })) };
    T3.lookup = T3.getType, T3.extension = T3.getExtension;
    noop = () => {
    };
    T3.define = noop, T3.load = noop, T3.default_type = "application/octet-stream", T3.charsets = { lookup: () => "UTF-8" };
    I3 = /^[A-Za-z]:\//;
    q4 = /^[/\\](?![/\\])|^[/\\]{2}(?!\.)|^[A-Za-z]:[/\\]/;
    M3 = /^[A-Za-z]:$/;
    U3 = /.(\.[^./]+)$/;
    dirname = function(a4) {
      const i6 = normalizeWindowsPath(a4).replace(/\/$/, "").split("/").slice(0, -1);
      return 1 === i6.length && M3.test(i6[0]) && (i6[0] += "/"), i6.join("/") || (function(a5) {
        return q4.test(a5);
      }(a4) ? "/" : ".");
    };
    parse = function(a4) {
      const i6 = normalizeWindowsPath(a4).split("/").shift() || "/", t5 = function(a5, i7) {
        const t6 = normalizeWindowsPath(a5).split("/").pop();
        return i7 && t6.endsWith(i7) ? t6.slice(0, -i7.length) : t6;
      }(a4), p3 = function(a5) {
        const i7 = U3.exec(normalizeWindowsPath(a5));
        return i7 && i7[1] || "";
      }(t5);
      return { root: i6, dir: dirname(a4), base: t5, ext: p3, name: t5.slice(0, t5.length - p3.length) };
    };
    $3 = {};
    _3 = ["B", "KB", "MB", "GB"];
    B4 = Re(async (a4) => {
      await requireNuxtHubAuthorization(a4);
      const { version: i6, cache: p3, analytics: e6, blob: n2, kv: o10, database: l3 } = useRuntimeConfig2().hub, [c3, s4, d3] = await Promise.all([falseIfFail(() => l3 && hubDatabase().exec("PRAGMA table_list")), falseIfFail(() => o10 && hubKV().getKeys("__check__")), falseIfFail(() => n2 && hubBlob().list({ prefix: "__check__" }))]);
      return { version: i6, storage: { database: Boolean(c3), kv: Array.isArray(s4), blob: Array.isArray(d3?.blobs) }, features: { analytics: e6, cache: p3 } };
    });
  }
});

// .wrangler/tmp/pages-WENPGt/chunks/_/openapi.mjs
var openapi_exports = {};
__export(openapi_exports, {
  default: () => openapi
});
var openapi;
var init_openapi = __esm({
  ".wrangler/tmp/pages-WENPGt/chunks/_/openapi.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    openapi = () => ({});
  }
});

// .wrangler/tmp/pages-WENPGt/chunks/routes/api/_hub/openapi.get.mjs
var openapi_get_exports = {};
__export(openapi_get_exports, {
  default: () => e4
});
var e4;
var init_openapi_get = __esm({
  ".wrangler/tmp/pages-WENPGt/chunks/routes/api/_hub/openapi.get.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    init_runtime();
    init_auth();
    e4 = Re(async (t5) => {
      await requireNuxtHubAuthorization(t5);
      if (!useRuntimeConfig2().hub.openapi)
        throw createError({ statusCode: 422, message: "OpenAPI not configured" });
      const e6 = await Promise.resolve().then(() => (init_openapi(), openapi_exports)).then((t6) => t6.default).catch(() => {
      });
      if ("function" != typeof e6)
        throw createError({ statusCode: 404, message: "not found" });
      return e6(t5);
    });
  }
});

// .wrangler/tmp/pages-WENPGt/chunks/routes/api/_hub/database/_command_.post.mjs
var command_post_exports = {};
__export(command_post_exports, {
  default: () => o7
});
var i3, o7;
var init_command_post = __esm({
  ".wrangler/tmp/pages-WENPGt/chunks/routes/api/_hub/database/_command_.post.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    init_runtime();
    init__();
    init_auth();
    init_features();
    i3 = me3.object({ query: me3.string().min(1).max(1e6).trim(), params: me3.any().array().default([]) });
    o7 = Re(async (a4) => {
      await requireNuxtHubAuthorization(a4), requireNuxtHubFeature("database");
      const { command: o10 } = await getValidatedRouterParams(a4, me3.object({ command: me3.enum(["first", "all", "raw", "run", "dump", "exec", "batch"]) }).parse), p3 = hubDatabase();
      if ("exec" === o10) {
        const { query: r4 } = await readValidatedBody(a4, i3.pick({ query: true }).parse);
        return p3.exec(r4);
      }
      if ("dump" === o10)
        return p3.dump();
      if ("first" === o10) {
        const { query: r4, params: s4, colName: m6 } = await readValidatedBody(a4, me3.intersection(i3, me3.object({ colName: me3.string().optional() })).parse);
        return m6 ? p3.prepare(r4).bind(...s4).first(m6) : p3.prepare(r4).bind(...s4).first();
      }
      if ("batch" === o10) {
        const r4 = await readValidatedBody(a4, me3.array(i3).parse);
        return p3.batch(r4.map((a5) => p3.prepare(a5.query).bind(...a5.params)));
      }
      if ("raw" === o10) {
        const { query: r4, params: s4, columnNames: m6 } = await readValidatedBody(a4, me3.intersection(i3, me3.object({ columnNames: me3.boolean().default(false) })).parse);
        return p3.prepare(r4).bind(...s4).raw({ columnNames: m6 });
      }
      const { query: c3, params: u4 } = await readValidatedBody(a4, i3.parse);
      return p3.prepare(c3).bind(...u4)[o10]();
    });
  }
});

// .wrangler/tmp/pages-WENPGt/chunks/routes/api/_hub/database/query.options.mjs
var query_options_exports = {};
__export(query_options_exports, {
  default: () => m4
});
var m4;
var init_query_options = __esm({
  ".wrangler/tmp/pages-WENPGt/chunks/routes/api/_hub/database/query.options.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    init_runtime();
    init_auth();
    m4 = Re(async (a4) => (await requireNuxtHubAuthorization(a4), sendNoContent(a4)));
  }
});

// .wrangler/tmp/pages-WENPGt/chunks/routes/api/_hub/database/query.post.mjs
var query_post_exports = {};
__export(query_post_exports, {
  default: () => i4
});
var o8, i4;
var init_query_post = __esm({
  ".wrangler/tmp/pages-WENPGt/chunks/routes/api/_hub/database/query.post.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    init_runtime();
    init__();
    init_auth();
    init_features();
    o8 = me3.object({ query: me3.string().min(1).max(1e6).trim(), params: me3.any().array().optional().default([]), mode: me3.enum(["raw", "all"]).optional().default("all") });
    i4 = Re(async (a4) => {
      await requireNuxtHubAuthorization(a4), requireNuxtHubFeature("database");
      const { query: e6, params: i6, mode: n2 } = await readValidatedBody(a4, o8.parse);
      return hubDatabase().prepare(e6).bind(...i6)["raw" === n2 ? "raw" : "all"]({ columnNames: true });
    });
  }
});

// .wrangler/tmp/pages-WENPGt/chunks/runtime.mjs
function createNotImplementedError(e6) {
  throw new Error(`[unenv] ${e6} is not implemented yet!`);
}
function notImplemented(e6) {
  return Object.assign(() => {
    throw createNotImplementedError(e6);
  }, { __unenv__: true });
}
function toByteArray(e6) {
  let n2;
  const o10 = function(e7) {
    const t5 = e7.length;
    if (t5 % 4 > 0)
      throw new Error("Invalid string. Length must be a multiple of 4");
    let r4 = e7.indexOf("=");
    return -1 === r4 && (r4 = t5), [r4, r4 === t5 ? 0 : 4 - r4 % 4];
  }(e6), s4 = o10[0], i6 = o10[1], a4 = new r3(function(e7, t5, r4) {
    return 3 * (t5 + r4) / 4 - r4;
  }(0, s4, i6));
  let u4 = 0;
  const c3 = i6 > 0 ? s4 - 4 : s4;
  let f3;
  for (f3 = 0; f3 < c3; f3 += 4)
    n2 = t4[e6.charCodeAt(f3)] << 18 | t4[e6.charCodeAt(f3 + 1)] << 12 | t4[e6.charCodeAt(f3 + 2)] << 6 | t4[e6.charCodeAt(f3 + 3)], a4[u4++] = n2 >> 16 & 255, a4[u4++] = n2 >> 8 & 255, a4[u4++] = 255 & n2;
  return 2 === i6 && (n2 = t4[e6.charCodeAt(f3)] << 2 | t4[e6.charCodeAt(f3 + 1)] >> 4, a4[u4++] = 255 & n2), 1 === i6 && (n2 = t4[e6.charCodeAt(f3)] << 10 | t4[e6.charCodeAt(f3 + 1)] << 4 | t4[e6.charCodeAt(f3 + 2)] >> 2, a4[u4++] = n2 >> 8 & 255, a4[u4++] = 255 & n2), a4;
}
function encodeChunk(t5, r4, n2) {
  let o10;
  const s4 = [];
  for (let a4 = r4; a4 < n2; a4 += 3)
    o10 = (t5[a4] << 16 & 16711680) + (t5[a4 + 1] << 8 & 65280) + (255 & t5[a4 + 2]), s4.push(e5[(i6 = o10) >> 18 & 63] + e5[i6 >> 12 & 63] + e5[i6 >> 6 & 63] + e5[63 & i6]);
  var i6;
  return s4.join("");
}
function fromByteArray(t5) {
  let r4;
  const n2 = t5.length, o10 = n2 % 3, s4 = [], i6 = 16383;
  for (let e6 = 0, r5 = n2 - o10; e6 < r5; e6 += i6)
    s4.push(encodeChunk(t5, e6, e6 + i6 > r5 ? r5 : e6 + i6));
  return 1 === o10 ? (r4 = t5[n2 - 1], s4.push(e5[r4 >> 2] + e5[r4 << 4 & 63] + "==")) : 2 === o10 && (r4 = (t5[n2 - 2] << 8) + t5[n2 - 1], s4.push(e5[r4 >> 10] + e5[r4 >> 4 & 63] + e5[r4 << 2 & 63] + "=")), s4.join("");
}
function read(e6, t5, r4, n2, o10) {
  let s4, i6;
  const a4 = 8 * o10 - n2 - 1, u4 = (1 << a4) - 1, c3 = u4 >> 1;
  let f3 = -7, l3 = r4 ? o10 - 1 : 0;
  const h4 = r4 ? -1 : 1;
  let d3 = e6[t5 + l3];
  for (l3 += h4, s4 = d3 & (1 << -f3) - 1, d3 >>= -f3, f3 += a4; f3 > 0; )
    s4 = 256 * s4 + e6[t5 + l3], l3 += h4, f3 -= 8;
  for (i6 = s4 & (1 << -f3) - 1, s4 >>= -f3, f3 += n2; f3 > 0; )
    i6 = 256 * i6 + e6[t5 + l3], l3 += h4, f3 -= 8;
  if (0 === s4)
    s4 = 1 - c3;
  else {
    if (s4 === u4)
      return i6 ? Number.NaN : (d3 ? -1 : 1) * Number.POSITIVE_INFINITY;
    i6 += Math.pow(2, n2), s4 -= c3;
  }
  return (d3 ? -1 : 1) * i6 * Math.pow(2, s4 - n2);
}
function write(e6, t5, r4, n2, o10, s4) {
  let i6, a4, u4, c3 = 8 * s4 - o10 - 1;
  const f3 = (1 << c3) - 1, l3 = f3 >> 1, h4 = 23 === o10 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
  let d3 = n2 ? 0 : s4 - 1;
  const p3 = n2 ? 1 : -1, y4 = t5 < 0 || 0 === t5 && 1 / t5 < 0 ? 1 : 0;
  for (t5 = Math.abs(t5), Number.isNaN(t5) || t5 === Number.POSITIVE_INFINITY ? (a4 = Number.isNaN(t5) ? 1 : 0, i6 = f3) : (i6 = Math.floor(Math.log2(t5)), t5 * (u4 = Math.pow(2, -i6)) < 1 && (i6--, u4 *= 2), (t5 += i6 + l3 >= 1 ? h4 / u4 : h4 * Math.pow(2, 1 - l3)) * u4 >= 2 && (i6++, u4 /= 2), i6 + l3 >= f3 ? (a4 = 0, i6 = f3) : i6 + l3 >= 1 ? (a4 = (t5 * u4 - 1) * Math.pow(2, o10), i6 += l3) : (a4 = t5 * Math.pow(2, l3 - 1) * Math.pow(2, o10), i6 = 0)); o10 >= 8; )
    e6[r4 + d3] = 255 & a4, d3 += p3, a4 /= 256, o10 -= 8;
  for (i6 = i6 << o10 | a4, c3 += o10; c3 > 0; )
    e6[r4 + d3] = 255 & i6, d3 += p3, i6 /= 256, c3 -= 8;
  e6[r4 + d3 - p3] |= 128 * y4;
}
function createBuffer2(e6) {
  if (e6 > s3)
    throw new RangeError('The value "' + e6 + '" is invalid for option "size"');
  const t5 = new Uint8Array(e6);
  return Object.setPrototypeOf(t5, Buffer$1.prototype), t5;
}
function Buffer$1(e6, t5, r4) {
  if ("number" == typeof e6) {
    if ("string" == typeof t5)
      throw new TypeError('The "string" argument must be of type string. Received type number');
    return allocUnsafe(e6);
  }
  return from(e6, t5, r4);
}
function from(e6, t5, r4) {
  if ("string" == typeof e6)
    return function(e7, t6) {
      "string" == typeof t6 && "" !== t6 || (t6 = "utf8");
      if (!Buffer$1.isEncoding(t6))
        throw new TypeError("Unknown encoding: " + t6);
      const r5 = 0 | byteLength(e7, t6);
      let n3 = createBuffer2(r5);
      const o11 = n3.write(e7, t6);
      o11 !== r5 && (n3 = n3.slice(0, o11));
      return n3;
    }(e6, t5);
  if (ArrayBuffer.isView(e6))
    return function(e7) {
      if (isInstance(e7, Uint8Array)) {
        const t6 = new Uint8Array(e7);
        return fromArrayBuffer(t6.buffer, t6.byteOffset, t6.byteLength);
      }
      return fromArrayLike(e7);
    }(e6);
  if (null == e6)
    throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e6);
  if (isInstance(e6, ArrayBuffer) || e6 && isInstance(e6.buffer, ArrayBuffer))
    return fromArrayBuffer(e6, t5, r4);
  if ("undefined" != typeof SharedArrayBuffer && (isInstance(e6, SharedArrayBuffer) || e6 && isInstance(e6.buffer, SharedArrayBuffer)))
    return fromArrayBuffer(e6, t5, r4);
  if ("number" == typeof e6)
    throw new TypeError('The "value" argument must not be of type number. Received type number');
  const n2 = e6.valueOf && e6.valueOf();
  if (null != n2 && n2 !== e6)
    return Buffer$1.from(n2, t5, r4);
  const o10 = function(e7) {
    if (Buffer$1.isBuffer(e7)) {
      const t6 = 0 | checked(e7.length), r5 = createBuffer2(t6);
      return 0 === r5.length || e7.copy(r5, 0, 0, t6), r5;
    }
    if (void 0 !== e7.length)
      return "number" != typeof e7.length || numberIsNaN(e7.length) ? createBuffer2(0) : fromArrayLike(e7);
    if ("Buffer" === e7.type && Array.isArray(e7.data))
      return fromArrayLike(e7.data);
  }(e6);
  if (o10)
    return o10;
  if ("undefined" != typeof Symbol && null != Symbol.toPrimitive && "function" == typeof e6[Symbol.toPrimitive])
    return Buffer$1.from(e6[Symbol.toPrimitive]("string"), t5, r4);
  throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e6);
}
function assertSize(e6) {
  if ("number" != typeof e6)
    throw new TypeError('"size" argument must be of type number');
  if (e6 < 0)
    throw new RangeError('The value "' + e6 + '" is invalid for option "size"');
}
function allocUnsafe(e6) {
  return assertSize(e6), createBuffer2(e6 < 0 ? 0 : 0 | checked(e6));
}
function fromArrayLike(e6) {
  const t5 = e6.length < 0 ? 0 : 0 | checked(e6.length), r4 = createBuffer2(t5);
  for (let n2 = 0; n2 < t5; n2 += 1)
    r4[n2] = 255 & e6[n2];
  return r4;
}
function fromArrayBuffer(e6, t5, r4) {
  if (t5 < 0 || e6.byteLength < t5)
    throw new RangeError('"offset" is outside of buffer bounds');
  if (e6.byteLength < t5 + (r4 || 0))
    throw new RangeError('"length" is outside of buffer bounds');
  let n2;
  return n2 = void 0 === t5 && void 0 === r4 ? new Uint8Array(e6) : void 0 === r4 ? new Uint8Array(e6, t5) : new Uint8Array(e6, t5, r4), Object.setPrototypeOf(n2, Buffer$1.prototype), n2;
}
function checked(e6) {
  if (e6 >= s3)
    throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + s3.toString(16) + " bytes");
  return 0 | e6;
}
function byteLength(e6, t5) {
  if (Buffer$1.isBuffer(e6))
    return e6.length;
  if (ArrayBuffer.isView(e6) || isInstance(e6, ArrayBuffer))
    return e6.byteLength;
  if ("string" != typeof e6)
    throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof e6);
  const r4 = e6.length, n2 = arguments.length > 2 && true === arguments[2];
  if (!n2 && 0 === r4)
    return 0;
  let o10 = false;
  for (; ; )
    switch (t5) {
      case "ascii":
      case "latin1":
      case "binary":
        return r4;
      case "utf8":
      case "utf-8":
        return utf8ToBytes(e6).length;
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return 2 * r4;
      case "hex":
        return r4 >>> 1;
      case "base64":
        return base64ToBytes(e6).length;
      default:
        if (o10)
          return n2 ? -1 : utf8ToBytes(e6).length;
        t5 = ("" + t5).toLowerCase(), o10 = true;
    }
}
function slowToString(e6, t5, r4) {
  let n2 = false;
  if ((void 0 === t5 || t5 < 0) && (t5 = 0), t5 > this.length)
    return "";
  if ((void 0 === r4 || r4 > this.length) && (r4 = this.length), r4 <= 0)
    return "";
  if ((r4 >>>= 0) <= (t5 >>>= 0))
    return "";
  for (e6 || (e6 = "utf8"); ; )
    switch (e6) {
      case "hex":
        return hexSlice(this, t5, r4);
      case "utf8":
      case "utf-8":
        return utf8Slice(this, t5, r4);
      case "ascii":
        return asciiSlice(this, t5, r4);
      case "latin1":
      case "binary":
        return latin1Slice(this, t5, r4);
      case "base64":
        return base64Slice(this, t5, r4);
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return utf16leSlice(this, t5, r4);
      default:
        if (n2)
          throw new TypeError("Unknown encoding: " + e6);
        e6 = (e6 + "").toLowerCase(), n2 = true;
    }
}
function swap(e6, t5, r4) {
  const n2 = e6[t5];
  e6[t5] = e6[r4], e6[r4] = n2;
}
function bidirectionalIndexOf(e6, t5, r4, n2, o10) {
  if (0 === e6.length)
    return -1;
  if ("string" == typeof r4 ? (n2 = r4, r4 = 0) : r4 > 2147483647 ? r4 = 2147483647 : r4 < -2147483648 && (r4 = -2147483648), numberIsNaN(r4 = +r4) && (r4 = o10 ? 0 : e6.length - 1), r4 < 0 && (r4 = e6.length + r4), r4 >= e6.length) {
    if (o10)
      return -1;
    r4 = e6.length - 1;
  } else if (r4 < 0) {
    if (!o10)
      return -1;
    r4 = 0;
  }
  if ("string" == typeof t5 && (t5 = Buffer$1.from(t5, n2)), Buffer$1.isBuffer(t5))
    return 0 === t5.length ? -1 : arrayIndexOf(e6, t5, r4, n2, o10);
  if ("number" == typeof t5)
    return t5 &= 255, "function" == typeof Uint8Array.prototype.indexOf ? o10 ? Uint8Array.prototype.indexOf.call(e6, t5, r4) : Uint8Array.prototype.lastIndexOf.call(e6, t5, r4) : arrayIndexOf(e6, [t5], r4, n2, o10);
  throw new TypeError("val must be string, number or Buffer");
}
function arrayIndexOf(e6, t5, r4, n2, o10) {
  let s4, i6 = 1, a4 = e6.length, u4 = t5.length;
  if (void 0 !== n2 && ("ucs2" === (n2 = String(n2).toLowerCase()) || "ucs-2" === n2 || "utf16le" === n2 || "utf-16le" === n2)) {
    if (e6.length < 2 || t5.length < 2)
      return -1;
    i6 = 2, a4 /= 2, u4 /= 2, r4 /= 2;
  }
  function read2(e7, t6) {
    return 1 === i6 ? e7[t6] : e7.readUInt16BE(t6 * i6);
  }
  if (o10) {
    let n3 = -1;
    for (s4 = r4; s4 < a4; s4++)
      if (read2(e6, s4) === read2(t5, -1 === n3 ? 0 : s4 - n3)) {
        if (-1 === n3 && (n3 = s4), s4 - n3 + 1 === u4)
          return n3 * i6;
      } else
        -1 !== n3 && (s4 -= s4 - n3), n3 = -1;
  } else
    for (r4 + u4 > a4 && (r4 = a4 - u4), s4 = r4; s4 >= 0; s4--) {
      let r5 = true;
      for (let n3 = 0; n3 < u4; n3++)
        if (read2(e6, s4 + n3) !== read2(t5, n3)) {
          r5 = false;
          break;
        }
      if (r5)
        return s4;
    }
  return -1;
}
function hexWrite(e6, t5, r4, n2) {
  r4 = Number(r4) || 0;
  const o10 = e6.length - r4;
  n2 ? (n2 = Number(n2)) > o10 && (n2 = o10) : n2 = o10;
  const s4 = t5.length;
  let i6;
  for (n2 > s4 / 2 && (n2 = s4 / 2), i6 = 0; i6 < n2; ++i6) {
    const n3 = Number.parseInt(t5.slice(2 * i6, 2 * i6 + 2), 16);
    if (numberIsNaN(n3))
      return i6;
    e6[r4 + i6] = n3;
  }
  return i6;
}
function utf8Write(e6, t5, r4, n2) {
  return blitBuffer(utf8ToBytes(t5, e6.length - r4), e6, r4, n2);
}
function asciiWrite(e6, t5, r4, n2) {
  return blitBuffer(function(e7) {
    const t6 = [];
    for (let r5 = 0; r5 < e7.length; ++r5)
      t6.push(255 & e7.charCodeAt(r5));
    return t6;
  }(t5), e6, r4, n2);
}
function base64Write(e6, t5, r4, n2) {
  return blitBuffer(base64ToBytes(t5), e6, r4, n2);
}
function ucs2Write(e6, t5, r4, n2) {
  return blitBuffer(function(e7, t6) {
    let r5, n3, o10;
    const s4 = [];
    for (let i6 = 0; i6 < e7.length && !((t6 -= 2) < 0); ++i6)
      r5 = e7.charCodeAt(i6), n3 = r5 >> 8, o10 = r5 % 256, s4.push(o10, n3);
    return s4;
  }(t5, e6.length - r4), e6, r4, n2);
}
function base64Slice(e6, t5, r4) {
  return 0 === t5 && r4 === e6.length ? fromByteArray(e6) : fromByteArray(e6.slice(t5, r4));
}
function utf8Slice(e6, t5, r4) {
  r4 = Math.min(e6.length, r4);
  const n2 = [];
  let o10 = t5;
  for (; o10 < r4; ) {
    const t6 = e6[o10];
    let s4 = null, i6 = t6 > 239 ? 4 : t6 > 223 ? 3 : t6 > 191 ? 2 : 1;
    if (o10 + i6 <= r4) {
      let r5, n3, a4, u4;
      switch (i6) {
        case 1:
          t6 < 128 && (s4 = t6);
          break;
        case 2:
          r5 = e6[o10 + 1], 128 == (192 & r5) && (u4 = (31 & t6) << 6 | 63 & r5, u4 > 127 && (s4 = u4));
          break;
        case 3:
          r5 = e6[o10 + 1], n3 = e6[o10 + 2], 128 == (192 & r5) && 128 == (192 & n3) && (u4 = (15 & t6) << 12 | (63 & r5) << 6 | 63 & n3, u4 > 2047 && (u4 < 55296 || u4 > 57343) && (s4 = u4));
          break;
        case 4:
          r5 = e6[o10 + 1], n3 = e6[o10 + 2], a4 = e6[o10 + 3], 128 == (192 & r5) && 128 == (192 & n3) && 128 == (192 & a4) && (u4 = (15 & t6) << 18 | (63 & r5) << 12 | (63 & n3) << 6 | 63 & a4, u4 > 65535 && u4 < 1114112 && (s4 = u4));
      }
    }
    null === s4 ? (s4 = 65533, i6 = 1) : s4 > 65535 && (s4 -= 65536, n2.push(s4 >>> 10 & 1023 | 55296), s4 = 56320 | 1023 & s4), n2.push(s4), o10 += i6;
  }
  return function(e7) {
    const t6 = e7.length;
    if (t6 <= i5)
      return String.fromCharCode.apply(String, e7);
    let r5 = "", n3 = 0;
    for (; n3 < t6; )
      r5 += String.fromCharCode.apply(String, e7.slice(n3, n3 += i5));
    return r5;
  }(n2);
}
function asciiSlice(e6, t5, r4) {
  let n2 = "";
  r4 = Math.min(e6.length, r4);
  for (let o10 = t5; o10 < r4; ++o10)
    n2 += String.fromCharCode(127 & e6[o10]);
  return n2;
}
function latin1Slice(e6, t5, r4) {
  let n2 = "";
  r4 = Math.min(e6.length, r4);
  for (let o10 = t5; o10 < r4; ++o10)
    n2 += String.fromCharCode(e6[o10]);
  return n2;
}
function hexSlice(e6, t5, r4) {
  const n2 = e6.length;
  (!t5 || t5 < 0) && (t5 = 0), (!r4 || r4 < 0 || r4 > n2) && (r4 = n2);
  let o10 = "";
  for (let n3 = t5; n3 < r4; ++n3)
    o10 += c2[e6[n3]];
  return o10;
}
function utf16leSlice(e6, t5, r4) {
  const n2 = e6.slice(t5, r4);
  let o10 = "";
  for (let e7 = 0; e7 < n2.length - 1; e7 += 2)
    o10 += String.fromCharCode(n2[e7] + 256 * n2[e7 + 1]);
  return o10;
}
function checkOffset(e6, t5, r4) {
  if (e6 % 1 != 0 || e6 < 0)
    throw new RangeError("offset is not uint");
  if (e6 + t5 > r4)
    throw new RangeError("Trying to access beyond buffer length");
}
function checkInt(e6, t5, r4, n2, o10, s4) {
  if (!Buffer$1.isBuffer(e6))
    throw new TypeError('"buffer" argument must be a Buffer instance');
  if (t5 > o10 || t5 < s4)
    throw new RangeError('"value" argument is out of bounds');
  if (r4 + n2 > e6.length)
    throw new RangeError("Index out of range");
}
function wrtBigUInt64LE(e6, t5, r4, n2, o10) {
  checkIntBI(t5, n2, o10, e6, r4, 7);
  let s4 = Number(t5 & BigInt(4294967295));
  e6[r4++] = s4, s4 >>= 8, e6[r4++] = s4, s4 >>= 8, e6[r4++] = s4, s4 >>= 8, e6[r4++] = s4;
  let i6 = Number(t5 >> BigInt(32) & BigInt(4294967295));
  return e6[r4++] = i6, i6 >>= 8, e6[r4++] = i6, i6 >>= 8, e6[r4++] = i6, i6 >>= 8, e6[r4++] = i6, r4;
}
function wrtBigUInt64BE(e6, t5, r4, n2, o10) {
  checkIntBI(t5, n2, o10, e6, r4, 7);
  let s4 = Number(t5 & BigInt(4294967295));
  e6[r4 + 7] = s4, s4 >>= 8, e6[r4 + 6] = s4, s4 >>= 8, e6[r4 + 5] = s4, s4 >>= 8, e6[r4 + 4] = s4;
  let i6 = Number(t5 >> BigInt(32) & BigInt(4294967295));
  return e6[r4 + 3] = i6, i6 >>= 8, e6[r4 + 2] = i6, i6 >>= 8, e6[r4 + 1] = i6, i6 >>= 8, e6[r4] = i6, r4 + 8;
}
function checkIEEE754(e6, t5, r4, n2, o10, s4) {
  if (r4 + n2 > e6.length)
    throw new RangeError("Index out of range");
  if (r4 < 0)
    throw new RangeError("Index out of range");
}
function writeFloat(e6, t5, r4, n2, o10) {
  return t5 = +t5, r4 >>>= 0, o10 || checkIEEE754(e6, 0, r4, 4), write(e6, t5, r4, n2, 23, 4), r4 + 4;
}
function writeDouble(e6, t5, r4, n2, o10) {
  return t5 = +t5, r4 >>>= 0, o10 || checkIEEE754(e6, 0, r4, 8), write(e6, t5, r4, n2, 52, 8), r4 + 8;
}
function E3(e6, t5, r4) {
  a3[e6] = class extends r4 {
    constructor() {
      super(), Object.defineProperty(this, "message", { value: Reflect.apply(t5, this, arguments), writable: true, configurable: true }), this.name = `${this.name} [${e6}]`, this.stack, delete this.name;
    }
    get code() {
      return e6;
    }
    set code(e7) {
      Object.defineProperty(this, "code", { configurable: true, enumerable: true, value: e7, writable: true });
    }
    toString() {
      return `${this.name} [${e6}]: ${this.message}`;
    }
  };
}
function addNumericalSeparator(e6) {
  let t5 = "", r4 = e6.length;
  const n2 = "-" === e6[0] ? 1 : 0;
  for (; r4 >= n2 + 4; r4 -= 3)
    t5 = `_${e6.slice(r4 - 3, r4)}${t5}`;
  return `${e6.slice(0, r4)}${t5}`;
}
function checkIntBI(e6, t5, r4, n2, o10, s4) {
  if (e6 > r4 || e6 < t5) {
    const r5 = "bigint" == typeof t5 ? "n" : "";
    let n3;
    throw n3 = 0 === t5 || t5 === BigInt(0) ? `>= 0${r5} and < 2${r5} ** ${8 * (s4 + 1)}${r5}` : `>= -(2${r5} ** ${8 * (s4 + 1) - 1}${r5}) and < 2 ** ${8 * (s4 + 1) - 1}${r5}`, new a3.ERR_OUT_OF_RANGE("value", n3, e6);
  }
  !function(e7, t6, r5) {
    validateNumber(t6, "offset"), void 0 !== e7[t6] && void 0 !== e7[t6 + r5] || boundsError(t6, e7.length - (r5 + 1));
  }(n2, o10, s4);
}
function validateNumber(e6, t5) {
  if ("number" != typeof e6)
    throw new a3.ERR_INVALID_ARG_TYPE(t5, "number", e6);
}
function boundsError(e6, t5, r4) {
  if (Math.floor(e6) !== e6)
    throw validateNumber(e6, r4), new a3.ERR_OUT_OF_RANGE("offset", "an integer", e6);
  if (t5 < 0)
    throw new a3.ERR_BUFFER_OUT_OF_BOUNDS();
  throw new a3.ERR_OUT_OF_RANGE("offset", `>= 0 and <= ${t5}`, e6);
}
function utf8ToBytes(e6, t5) {
  let r4;
  t5 = t5 || Number.POSITIVE_INFINITY;
  const n2 = e6.length;
  let o10 = null;
  const s4 = [];
  for (let i6 = 0; i6 < n2; ++i6) {
    if (r4 = e6.charCodeAt(i6), r4 > 55295 && r4 < 57344) {
      if (!o10) {
        if (r4 > 56319) {
          (t5 -= 3) > -1 && s4.push(239, 191, 189);
          continue;
        }
        if (i6 + 1 === n2) {
          (t5 -= 3) > -1 && s4.push(239, 191, 189);
          continue;
        }
        o10 = r4;
        continue;
      }
      if (r4 < 56320) {
        (t5 -= 3) > -1 && s4.push(239, 191, 189), o10 = r4;
        continue;
      }
      r4 = 65536 + (o10 - 55296 << 10 | r4 - 56320);
    } else
      o10 && (t5 -= 3) > -1 && s4.push(239, 191, 189);
    if (o10 = null, r4 < 128) {
      if ((t5 -= 1) < 0)
        break;
      s4.push(r4);
    } else if (r4 < 2048) {
      if ((t5 -= 2) < 0)
        break;
      s4.push(r4 >> 6 | 192, 63 & r4 | 128);
    } else if (r4 < 65536) {
      if ((t5 -= 3) < 0)
        break;
      s4.push(r4 >> 12 | 224, r4 >> 6 & 63 | 128, 63 & r4 | 128);
    } else {
      if (!(r4 < 1114112))
        throw new Error("Invalid code point");
      if ((t5 -= 4) < 0)
        break;
      s4.push(r4 >> 18 | 240, r4 >> 12 & 63 | 128, r4 >> 6 & 63 | 128, 63 & r4 | 128);
    }
  }
  return s4;
}
function base64ToBytes(e6) {
  return toByteArray(function(e7) {
    if ((e7 = (e7 = e7.split("=")[0]).trim().replace(u3, "")).length < 2)
      return "";
    for (; e7.length % 4 != 0; )
      e7 += "=";
    return e7;
  }(e6));
}
function blitBuffer(e6, t5, r4, n2) {
  let o10;
  for (o10 = 0; o10 < n2 && !(o10 + r4 >= t5.length || o10 >= e6.length); ++o10)
    t5[o10 + r4] = e6[o10];
  return o10;
}
function isInstance(e6, t5) {
  return e6 instanceof t5 || null != e6 && null != e6.constructor && null != e6.constructor.name && e6.constructor.name === t5.name;
}
function numberIsNaN(e6) {
  return e6 != e6;
}
function defineBigIntMethod(e6) {
  return "undefined" == typeof BigInt ? BufferBigIntNotDefined : e6;
}
function BufferBigIntNotDefined() {
  throw new Error("BigInt not supported");
}
function defaultSetTimeout() {
  throw new Error("setTimeout has not been defined");
}
function defaultClearTimeout() {
  throw new Error("clearTimeout has not been defined");
}
function runTimeout(e6) {
  if (h3 === setTimeout)
    return setTimeout(e6, 0);
  if ((h3 === defaultSetTimeout || !h3) && setTimeout)
    return h3 = setTimeout, setTimeout(e6, 0);
  try {
    return h3(e6, 0);
  } catch {
    try {
      return h3.call(null, e6, 0);
    } catch {
      return h3.call(this, e6, 0);
    }
  }
}
function cleanUpNextTick() {
  g2 && p2 && (g2 = false, p2.length > 0 ? y3 = [...p2, ...y3] : m5 = -1, y3.length > 0 && drainQueue());
}
function drainQueue() {
  if (g2)
    return;
  const e6 = runTimeout(cleanUpNextTick);
  g2 = true;
  let t5 = y3.length;
  for (; t5; ) {
    for (p2 = y3, y3 = []; ++m5 < t5; )
      p2 && p2[m5].run();
    m5 = -1, t5 = y3.length;
  }
  p2 = null, g2 = false, function(e7) {
    if (d2 === clearTimeout)
      return clearTimeout(e7);
    if ((d2 === defaultClearTimeout || !d2) && clearTimeout)
      return d2 = clearTimeout, clearTimeout(e7);
    try {
      return d2(e7);
    } catch {
      try {
        return d2.call(null, e7);
      } catch {
        return d2.call(this, e7);
      }
    }
  }(e6);
}
function Item(e6, t5) {
  this.fun = e6, this.array = t5;
}
function noop2() {
  return l2;
}
function encodeQueryValue(e6) {
  return (t5 = "string" == typeof e6 ? e6 : JSON.stringify(e6), encodeURI("" + t5).replace(C3, "|")).replace(k3, "%2B").replace($4, "+").replace(R3, "%23").replace(I4, "%26").replace(T4, "`").replace(A3, "^").replace(x3, "%2F");
  var t5;
}
function encodeQueryKey(e6) {
  return encodeQueryValue(e6).replace(S3, "%3D");
}
function decode(e6 = "") {
  try {
    return decodeURIComponent("" + e6);
  } catch {
    return "" + e6;
  }
}
function decodeQueryValue(e6) {
  return decode(e6.replace(k3, " "));
}
function parseQuery(e6 = "") {
  const t5 = {};
  "?" === e6[0] && (e6 = e6.slice(1));
  for (const r4 of e6.split("&")) {
    const e7 = r4.match(/([^=]+)=?(.*)/) || [];
    if (e7.length < 2)
      continue;
    const n2 = decode(e7[1].replace(k3, " "));
    if ("__proto__" === n2 || "constructor" === n2)
      continue;
    const o10 = decodeQueryValue(e7[2] || "");
    void 0 === t5[n2] ? t5[n2] = o10 : Array.isArray(t5[n2]) ? t5[n2].push(o10) : t5[n2] = [t5[n2], o10];
  }
  return t5;
}
function stringifyQuery(e6) {
  return Object.keys(e6).filter((t5) => void 0 !== e6[t5]).map((t5) => {
    return r4 = t5, "number" != typeof (n2 = e6[t5]) && "boolean" != typeof n2 || (n2 = String(n2)), n2 ? Array.isArray(n2) ? n2.map((e7) => `${encodeQueryKey(r4)}=${encodeQueryValue(e7)}`).join("&") : `${encodeQueryKey(r4)}=${encodeQueryValue(n2)}` : encodeQueryKey(r4);
    var r4, n2;
  }).filter(Boolean).join("&");
}
function hasProtocol(e6, t5 = {}) {
  return "boolean" == typeof t5 && (t5 = { acceptRelative: t5 }), t5.strict ? O3.test(e6) : j5.test(e6) || !!t5.acceptRelative && L3.test(e6);
}
function isScriptProtocol(e6) {
  return !!e6 && N4.test(e6);
}
function hasTrailingSlash(e6 = "", t5) {
  return t5 ? M4.test(e6) : e6.endsWith("/");
}
function withoutTrailingSlash(e6 = "", t5) {
  if (!t5)
    return (hasTrailingSlash(e6) ? e6.slice(0, -1) : e6) || "/";
  if (!hasTrailingSlash(e6, true))
    return e6 || "/";
  let r4 = e6, n2 = "";
  const o10 = e6.indexOf("#");
  o10 >= 0 && (r4 = e6.slice(0, o10), n2 = e6.slice(o10));
  const [s4, ...i6] = r4.split("?");
  return ((s4.endsWith("/") ? s4.slice(0, -1) : s4) || "/") + (i6.length > 0 ? `?${i6.join("?")}` : "") + n2;
}
function withTrailingSlash(e6 = "", t5) {
  if (!t5)
    return e6.endsWith("/") ? e6 : e6 + "/";
  if (hasTrailingSlash(e6, true))
    return e6 || "/";
  let r4 = e6, n2 = "";
  const o10 = e6.indexOf("#");
  if (o10 >= 0 && (r4 = e6.slice(0, o10), n2 = e6.slice(o10), !r4))
    return n2;
  const [s4, ...i6] = r4.split("?");
  return s4 + "/" + (i6.length > 0 ? `?${i6.join("?")}` : "") + n2;
}
function withLeadingSlash(e6 = "") {
  return function(e7 = "") {
    return e7.startsWith("/");
  }(e6) ? e6 : "/" + e6;
}
function withoutBase(e6, t5) {
  if (isEmptyURL(t5))
    return e6;
  const r4 = withoutTrailingSlash(t5);
  if (!e6.startsWith(r4))
    return e6;
  const n2 = e6.slice(r4.length);
  return "/" === n2[0] ? n2 : "/" + n2;
}
function withQuery(e6, t5) {
  const r4 = parseURL(e6), n2 = { ...parseQuery(r4.search), ...t5 };
  return r4.search = stringifyQuery(n2), stringifyParsedURL(r4);
}
function getQuery$1(e6) {
  return parseQuery(parseURL(e6).search);
}
function isEmptyURL(e6) {
  return !e6 || "/" === e6;
}
function joinURL(e6, ...t5) {
  let r4 = e6 || "";
  for (const e7 of t5.filter((e8) => function(e9) {
    return e9 && "/" !== e9;
  }(e8)))
    if (r4) {
      const t6 = e7.replace(U4, "");
      r4 = withTrailingSlash(r4) + t6;
    } else
      r4 = e7;
  return r4;
}
function joinRelativeURL(...e6) {
  const t5 = /\/(?!\/)/, r4 = e6.filter(Boolean), n2 = [];
  let o10 = 0;
  for (const e7 of r4)
    if (e7 && "/" !== e7) {
      for (const [r5, s5] of e7.split(t5).entries())
        if (s5 && "." !== s5)
          if (".." !== s5)
            1 === r5 && n2[n2.length - 1]?.endsWith(":/") ? n2[n2.length - 1] += "/" + s5 : (n2.push(s5), o10++);
          else {
            if (1 === n2.length && hasProtocol(n2[0]))
              continue;
            n2.pop(), o10--;
          }
    }
  let s4 = n2.join("/");
  return o10 >= 0 ? r4[0]?.startsWith("/") && !s4.startsWith("/") ? s4 = "/" + s4 : r4[0]?.startsWith("./") && !s4.startsWith("./") && (s4 = "./" + s4) : s4 = "../".repeat(-1 * o10) + s4, r4[r4.length - 1]?.endsWith("/") && !s4.endsWith("/") && (s4 += "/"), s4;
}
function isEqual(e6, t5, r4 = {}) {
  return r4.trailingSlash || (e6 = withTrailingSlash(e6), t5 = withTrailingSlash(t5)), r4.leadingSlash || (e6 = withLeadingSlash(e6), t5 = withLeadingSlash(t5)), r4.encoding || (e6 = decode(e6), t5 = decode(t5)), e6 === t5;
}
function parseURL(e6 = "", t5) {
  const r4 = e6.match(/^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i);
  if (r4) {
    const [, e7, t6 = ""] = r4;
    return { protocol: e7.toLowerCase(), pathname: t6, href: e7 + t6, auth: "", host: "", search: "", hash: "" };
  }
  if (!hasProtocol(e6, { acceptRelative: true }))
    return parsePath(e6);
  const [, n2 = "", o10, s4 = ""] = e6.replace(/\\/g, "/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/) || [];
  let [, i6 = "", a4 = ""] = s4.match(/([^#/?]*)(.*)?/) || [];
  "file:" === n2 && (a4 = a4.replace(/\/(?=[A-Za-z]:)/, ""));
  const { pathname: u4, search: c3, hash: f3 } = parsePath(a4);
  return { protocol: n2.toLowerCase(), auth: o10 ? o10.slice(0, Math.max(0, o10.length - 1)) : "", host: i6, pathname: u4, search: c3, hash: f3, [H3]: !n2 };
}
function parsePath(e6 = "") {
  const [t5 = "", r4 = "", n2 = ""] = (e6.match(/([^#?]*)(\?[^#]*)?(#.*)?/) || []).splice(1);
  return { pathname: t5, search: r4, hash: n2 };
}
function stringifyParsedURL(e6) {
  const t5 = e6.pathname || "", r4 = e6.search ? (e6.search.startsWith("?") ? "" : "?") + e6.search : "", n2 = e6.hash || "", o10 = e6.auth ? e6.auth + "@" : "", s4 = e6.host || "";
  return (e6.protocol || e6[H3] ? (e6.protocol || "") + "//" : "") + o10 + s4 + t5 + r4 + n2;
}
function objectHash(e6, t5) {
  const r4 = createHasher(t5 = t5 ? { ...P3, ...t5 } : P3);
  return r4.dispatch(e6), r4.toString();
}
function createHasher(e6) {
  let t5 = "", r4 = /* @__PURE__ */ new Map();
  const write2 = (e7) => {
    t5 += e7;
  };
  return { toString: () => t5, getContext: () => r4, dispatch(t6) {
    e6.replacer && (t6 = e6.replacer(t6));
    return this[null === t6 ? "null" : typeof t6](t6);
  }, object(t6) {
    if (t6 && "function" == typeof t6.toJSON)
      return this.object(t6.toJSON());
    const n2 = Object.prototype.toString.call(t6);
    let o10 = "";
    const s4 = n2.length;
    o10 = s4 < 10 ? "unknown:[" + n2 + "]" : n2.slice(8, s4 - 1), o10 = o10.toLowerCase();
    let i6 = null;
    if (void 0 !== (i6 = r4.get(t6)))
      return this.dispatch("[CIRCULAR:" + i6 + "]");
    if (r4.set(t6, r4.size), void 0 !== f2 && f2.isBuffer && f2.isBuffer(t6))
      return write2("buffer:"), write2(t6.toString("utf8"));
    if ("object" !== o10 && "function" !== o10 && "asyncfunction" !== o10)
      this[o10] ? this[o10](t6) : e6.ignoreUnknown || this.unkown(t6, o10);
    else {
      let r5 = Object.keys(t6);
      e6.unorderedObjects && (r5 = r5.sort());
      let n3 = [];
      false === e6.respectType || isNativeFunction(t6) || (n3 = q5), e6.excludeKeys && (r5 = r5.filter((t7) => !e6.excludeKeys(t7)), n3 = n3.filter((t7) => !e6.excludeKeys(t7))), write2("object:" + (r5.length + n3.length) + ":");
      const dispatchForKey = (r6) => {
        this.dispatch(r6), write2(":"), e6.excludeValues || this.dispatch(t6[r6]), write2(",");
      };
      for (const e7 of r5)
        dispatchForKey(e7);
      for (const e7 of n3)
        dispatchForKey(e7);
    }
  }, array(t6, n2) {
    if (n2 = void 0 === n2 ? false !== e6.unorderedArrays : n2, write2("array:" + t6.length + ":"), !n2 || t6.length <= 1) {
      for (const e7 of t6)
        this.dispatch(e7);
      return;
    }
    const o10 = /* @__PURE__ */ new Map(), s4 = t6.map((t7) => {
      const r5 = createHasher(e6);
      r5.dispatch(t7);
      for (const [e7, t8] of r5.getContext())
        o10.set(e7, t8);
      return r5.toString();
    });
    return r4 = o10, s4.sort(), this.array(s4, false);
  }, date: (e7) => write2("date:" + e7.toJSON()), symbol: (e7) => write2("symbol:" + e7.toString()), unkown(e7, t6) {
    if (write2(t6), e7)
      return write2(":"), e7 && "function" == typeof e7.entries ? this.array(Array.from(e7.entries()), true) : void 0;
  }, error: (e7) => write2("error:" + e7.toString()), boolean: (e7) => write2("bool:" + e7), string(e7) {
    write2("string:" + e7.length + ":"), write2(e7);
  }, function(t6) {
    write2("fn:"), isNativeFunction(t6) ? this.dispatch("[native]") : this.dispatch(t6.toString()), false !== e6.respectFunctionNames && this.dispatch("function-name:" + String(t6.name)), e6.respectFunctionProperties && this.object(t6);
  }, number: (e7) => write2("number:" + e7), xml: (e7) => write2("xml:" + e7.toString()), null: () => write2("Null"), undefined: () => write2("Undefined"), regexp: (e7) => write2("regex:" + e7.toString()), uint8array(e7) {
    return write2("uint8array:"), this.dispatch(Array.prototype.slice.call(e7));
  }, uint8clampedarray(e7) {
    return write2("uint8clampedarray:"), this.dispatch(Array.prototype.slice.call(e7));
  }, int8array(e7) {
    return write2("int8array:"), this.dispatch(Array.prototype.slice.call(e7));
  }, uint16array(e7) {
    return write2("uint16array:"), this.dispatch(Array.prototype.slice.call(e7));
  }, int16array(e7) {
    return write2("int16array:"), this.dispatch(Array.prototype.slice.call(e7));
  }, uint32array(e7) {
    return write2("uint32array:"), this.dispatch(Array.prototype.slice.call(e7));
  }, int32array(e7) {
    return write2("int32array:"), this.dispatch(Array.prototype.slice.call(e7));
  }, float32array(e7) {
    return write2("float32array:"), this.dispatch(Array.prototype.slice.call(e7));
  }, float64array(e7) {
    return write2("float64array:"), this.dispatch(Array.prototype.slice.call(e7));
  }, arraybuffer(e7) {
    return write2("arraybuffer:"), this.dispatch(new Uint8Array(e7));
  }, url: (e7) => write2("url:" + e7.toString()), map(t6) {
    write2("map:");
    const r5 = [...t6];
    return this.array(r5, false !== e6.unorderedSets);
  }, set(t6) {
    write2("set:");
    const r5 = [...t6];
    return this.array(r5, false !== e6.unorderedSets);
  }, file(e7) {
    return write2("file:"), this.dispatch([e7.name, e7.size, e7.type, e7.lastModfied]);
  }, blob() {
    if (e6.ignoreUnknown)
      return write2("[blob]");
    throw new Error('Hashing Blob objects is currently not supported\nUse "options.replacer" or "options.ignoreUnknown"\n');
  }, domwindow: () => write2("domwindow"), bigint: (e7) => write2("bigint:" + e7.toString()), process: () => write2("process"), timer: () => write2("timer"), pipe: () => write2("pipe"), tcp: () => write2("tcp"), udp: () => write2("udp"), tty: () => write2("tty"), statwatcher: () => write2("statwatcher"), securecontext: () => write2("securecontext"), connection: () => write2("connection"), zlib: () => write2("zlib"), context: () => write2("context"), nodescript: () => write2("nodescript"), httpparser: () => write2("httpparser"), dataview: () => write2("dataview"), signal: () => write2("signal"), fsevent: () => write2("fsevent"), tlswrap: () => write2("tlswrap") };
}
function isNativeFunction(e6) {
  return "function" == typeof e6 && Function.prototype.toString.call(e6).slice(-W3) === z5;
}
function hash(e6, t5 = {}) {
  const r4 = "string" == typeof e6 ? e6 : objectHash(e6, t5);
  return (n2 = r4, new SHA256().finalize(n2).toString(F3)).slice(0, 10);
  var n2;
}
function createRouter$1(e6 = {}) {
  const t5 = { options: e6, rootNode: createRadixNode(), staticRoutesMap: {} }, normalizeTrailingSlash = (t6) => e6.strictTrailingSlash ? t6 : t6.replace(/\/$/, "") || "/";
  if (e6.routes)
    for (const r4 in e6.routes)
      insert(t5, normalizeTrailingSlash(r4), e6.routes[r4]);
  return { ctx: t5, lookup: (e7) => function(e8, t6) {
    const r4 = e8.staticRoutesMap[t6];
    if (r4)
      return r4.data;
    const n2 = t6.split("/"), o10 = {};
    let s4 = false, i6 = null, a4 = e8.rootNode, u4 = null;
    for (let e9 = 0; e9 < n2.length; e9++) {
      const t7 = n2[e9];
      null !== a4.wildcardChildNode && (i6 = a4.wildcardChildNode, u4 = n2.slice(e9).join("/"));
      const r5 = a4.children.get(t7);
      if (void 0 === r5) {
        if (a4 && a4.placeholderChildren.length > 1) {
          const t8 = n2.length - e9;
          a4 = a4.placeholderChildren.find((e10) => e10.maxDepth === t8) || null;
        } else
          a4 = a4.placeholderChildren[0] || null;
        if (!a4)
          break;
        a4.paramName && (o10[a4.paramName] = t7), s4 = true;
      } else
        a4 = r5;
    }
    null !== a4 && null !== a4.data || null === i6 || (a4 = i6, o10[a4.paramName || "_"] = u4, s4 = true);
    if (!a4)
      return null;
    if (s4)
      return { ...a4.data, params: s4 ? o10 : void 0 };
    return a4.data;
  }(t5, normalizeTrailingSlash(e7)), insert: (e7, r4) => insert(t5, normalizeTrailingSlash(e7), r4), remove: (e7) => function(e8, t6) {
    let r4 = false;
    const n2 = t6.split("/");
    let o10 = e8.rootNode;
    for (const e9 of n2)
      if (o10 = o10.children.get(e9), !o10)
        return r4;
    if (o10.data) {
      const e9 = n2.at(-1) || "";
      o10.data = null, 0 === Object.keys(o10.children).length && o10.parent && (o10.parent.children.delete(e9), o10.parent.wildcardChildNode = null, o10.parent.placeholderChildren = []), r4 = true;
    }
    return r4;
  }(t5, normalizeTrailingSlash(e7)) };
}
function insert(e6, t5, r4) {
  let n2 = true;
  const o10 = t5.split("/");
  let s4 = e6.rootNode, i6 = 0;
  const a4 = [s4];
  for (const e7 of o10) {
    let t6;
    if (t6 = s4.children.get(e7))
      s4 = t6;
    else {
      const r5 = getNodeType(e7);
      t6 = createRadixNode({ type: r5, parent: s4 }), s4.children.set(e7, t6), r5 === G3.PLACEHOLDER ? (t6.paramName = "*" === e7 ? "_" + i6++ : e7.slice(1), s4.placeholderChildren.push(t6), n2 = false) : r5 === G3.WILDCARD && (s4.wildcardChildNode = t6, t6.paramName = e7.slice(3) || "_", n2 = false), a4.push(t6), s4 = t6;
    }
  }
  for (const [e7, t6] of a4.entries())
    t6.maxDepth = Math.max(a4.length - e7, t6.maxDepth || 0);
  return s4.data = r4, true === n2 && (e6.staticRoutesMap[t5] = s4), s4;
}
function createRadixNode(e6 = {}) {
  return { type: e6.type || G3.NORMAL, maxDepth: 0, parent: e6.parent || null, children: /* @__PURE__ */ new Map(), data: e6.data || null, paramName: e6.paramName || null, wildcardChildNode: null, placeholderChildren: [] };
}
function getNodeType(e6) {
  return e6.startsWith("**") ? G3.WILDCARD : ":" === e6[0] || "*" === e6 ? G3.PLACEHOLDER : G3.NORMAL;
}
function toRouteMatcher(e6) {
  return function(e7, t5) {
    return { ctx: { table: e7 }, matchAll: (r4) => _matchRoutes(r4, e7, t5) };
  }(_routerNodeToTable("", e6.ctx.rootNode), e6.ctx.options.strictTrailingSlash);
}
function _matchRoutes(e6, t5, r4) {
  true !== r4 && e6.endsWith("/") && (e6 = e6.slice(0, -1) || "/");
  const n2 = [];
  for (const [r5, o11] of _sortRoutesMap(t5.wildcard))
    (e6 === r5 || e6.startsWith(r5 + "/")) && n2.push(o11);
  for (const [r5, o11] of _sortRoutesMap(t5.dynamic))
    if (e6.startsWith(r5 + "/")) {
      const t6 = "/" + e6.slice(r5.length).split("/").splice(2).join("/");
      n2.push(..._matchRoutes(t6, o11));
    }
  const o10 = t5.static.get(e6);
  return o10 && n2.push(o10), n2.filter(Boolean);
}
function _sortRoutesMap(e6) {
  return [...e6.entries()].sort((e7, t5) => e7[0].length - t5[0].length);
}
function _routerNodeToTable(e6, t5) {
  const r4 = { static: /* @__PURE__ */ new Map(), wildcard: /* @__PURE__ */ new Map(), dynamic: /* @__PURE__ */ new Map() };
  return function _addNode(e7, t6) {
    if (e7)
      if (t6.type !== G3.NORMAL || e7.includes("*") || e7.includes(":")) {
        if (t6.type === G3.WILDCARD)
          r4.wildcard.set(e7.replace("/**", ""), t6.data);
        else if (t6.type === G3.PLACEHOLDER) {
          const n2 = _routerNodeToTable("", t6);
          return t6.data && n2.static.set("/", t6.data), void r4.dynamic.set(e7.replace(/\/\*|\/:\w+/, ""), n2);
        }
      } else
        t6.data && r4.static.set(e7, t6.data);
    for (const [r5, n2] of t6.children.entries())
      _addNode(`${e7}/${r5}`.replace("//", "/"), n2);
  }(e6, t5), r4;
}
function jsonParseTransform(e6, t5) {
  if (!("__proto__" === e6 || "constructor" === e6 && t5 && "object" == typeof t5 && "prototype" in t5))
    return t5;
  !function(e7) {
    console.warn(`[destr] Dropping "${e7}" key to prevent prototype pollution.`);
  }(e6);
}
function destr(e6, t5 = {}) {
  if ("string" != typeof e6)
    return e6;
  const r4 = e6.trim();
  if ('"' === e6[0] && e6.endsWith('"') && !e6.includes("\\"))
    return r4.slice(1, -1);
  if (r4.length <= 9) {
    const e7 = r4.toLowerCase();
    if ("true" === e7)
      return true;
    if ("false" === e7)
      return false;
    if ("undefined" === e7)
      return;
    if ("null" === e7)
      return null;
    if ("nan" === e7)
      return Number.NaN;
    if ("infinity" === e7)
      return Number.POSITIVE_INFINITY;
    if ("-infinity" === e7)
      return Number.NEGATIVE_INFINITY;
  }
  if (!ee4.test(e6)) {
    if (t5.strict)
      throw new SyntaxError("[destr] Invalid JSON");
    return e6;
  }
  try {
    if (Z3.test(e6) || X4.test(e6)) {
      if (t5.strict)
        throw new Error("[destr] Possible prototype pollution");
      return JSON.parse(e6, jsonParseTransform);
    }
    return JSON.parse(e6);
  } catch (r5) {
    if (t5.strict)
      throw r5;
    return e6;
  }
}
function isPlainObject2(e6) {
  if (null === e6 || "object" != typeof e6)
    return false;
  const t5 = Object.getPrototypeOf(e6);
  return (null === t5 || t5 === Object.prototype || null === Object.getPrototypeOf(t5)) && (!(Symbol.iterator in e6) && (!(Symbol.toStringTag in e6) || "[object Module]" === Object.prototype.toString.call(e6)));
}
function _defu(e6, t5, r4 = ".", n2) {
  if (!isPlainObject2(t5))
    return _defu(e6, {}, r4, n2);
  const o10 = Object.assign({}, t5);
  for (const t6 in e6) {
    if ("__proto__" === t6 || "constructor" === t6)
      continue;
    const s4 = e6[t6];
    null != s4 && (n2 && n2(o10, t6, s4, r4) || (Array.isArray(s4) && Array.isArray(o10[t6]) ? o10[t6] = [...s4, ...o10[t6]] : isPlainObject2(s4) && isPlainObject2(o10[t6]) ? o10[t6] = _defu(s4, o10[t6], (r4 ? `${r4}.` : "") + t6.toString(), n2) : o10[t6] = s4));
  }
  return o10;
}
function createDefu(e6) {
  return (...t5) => t5.reduce((t6, r4) => _defu(t6, r4, "", e6), {});
}
function _addListener(e6, t5, r4, n2) {
  _checkListener(r4), void 0 !== e6._events.newListener && e6.emit("newListener", t5, r4.listener || r4), e6._events[t5] || (e6._events[t5] = []), n2 ? e6._events[t5].unshift(r4) : e6._events[t5].push(r4);
  const o10 = _getMaxListeners(e6);
  if (o10 > 0 && e6._events[t5].length > o10 && !e6._events[t5].warned) {
    e6._events[t5].warned = true;
    const r5 = new Error(`[unenv] Possible EventEmitter memory leak detected. ${e6._events[t5].length} ${t5} listeners added. Use emitter.setMaxListeners() to increase limit`);
    r5.name = "MaxListenersExceededWarning", r5.emitter = e6, r5.type = t5, r5.count = e6._events[t5]?.length, console.warn(r5);
  }
  return e6;
}
function _wrapOnce(e6, t5, r4) {
  let n2 = false;
  const wrapper = (...o10) => {
    if (!n2)
      return e6.removeListener(t5, wrapper), n2 = true, 0 === o10.length ? r4.call(e6) : r4.apply(e6, o10);
  };
  return wrapper.listener = r4, wrapper;
}
function _getMaxListeners(e6) {
  return e6._maxListeners ?? oe4.defaultMaxListeners;
}
function _listeners(e6, t5, r4) {
  let n2 = e6._events[t5];
  return "function" == typeof n2 && (n2 = [n2]), r4 ? n2.map((e7) => e7.listener || e7) : n2;
}
function _checkListener(e6) {
  if ("function" != typeof e6)
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e6);
}
function getDuplex() {
  return Object.assign(ue4.prototype, ie4.prototype), Object.assign(ue4.prototype, ae4.prototype), ue4;
}
function _distinct(e6) {
  const t5 = {};
  for (const [r4, n2] of Object.entries(e6))
    r4 && (t5[r4] = (Array.isArray(n2) ? n2 : [n2]).filter(Boolean));
  return t5;
}
function hasProp(e6, t5) {
  try {
    return t5 in e6;
  } catch {
    return false;
  }
}
function createError(e6) {
  if ("string" == typeof e6)
    return new H3Error(e6);
  if (isError(e6))
    return e6;
  const t5 = new H3Error(e6.message ?? e6.statusMessage ?? "", { cause: e6.cause || e6 });
  if (hasProp(e6, "stack"))
    try {
      Object.defineProperty(t5, "stack", { get: () => e6.stack });
    } catch {
      try {
        t5.stack = e6.stack;
      } catch {
      }
    }
  if (e6.data && (t5.data = e6.data), e6.statusCode ? t5.statusCode = sanitizeStatusCode(e6.statusCode, t5.statusCode) : e6.status && (t5.statusCode = sanitizeStatusCode(e6.status, t5.statusCode)), e6.statusMessage ? t5.statusMessage = e6.statusMessage : e6.statusText && (t5.statusMessage = e6.statusText), t5.statusMessage) {
    const e7 = t5.statusMessage;
    sanitizeStatusMessage(t5.statusMessage) !== e7 && console.warn("[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default.");
  }
  return void 0 !== e6.fatal && (t5.fatal = e6.fatal), void 0 !== e6.unhandled && (t5.unhandled = e6.unhandled), t5;
}
function isError(e6) {
  return true === e6?.constructor?.__h3_error__;
}
async function validateData(e6, t5) {
  try {
    const r4 = await t5(e6);
    if (false === r4)
      throw createValidationError();
    return true === r4 ? e6 : r4 ?? e6;
  } catch (e7) {
    throw createValidationError(e7);
  }
}
function createValidationError(e6) {
  throw createError({ status: 400, statusMessage: "Validation Error", message: e6?.message || "Validation Error", data: e6 });
}
function getQuery(e6) {
  return getQuery$1(e6.path || "");
}
function getValidatedQuery(e6, t5) {
  return validateData(getQuery(e6), t5);
}
function getValidatedRouterParams(e6, t5, r4 = {}) {
  const n2 = function(e7, t6 = {}) {
    let r5 = e7.context.params || {};
    if (t6.decode) {
      r5 = { ...r5 };
      for (const e8 in r5)
        r5[e8] = decode(r5[e8]);
    }
    return r5;
  }(e6, r4);
  return validateData(n2, t5);
}
function assertMethod(e6, t5, r4) {
  if (!function(e7, t6) {
    if ("string" == typeof t6) {
      if (e7.method === t6)
        return true;
    } else if (t6.includes(e7.method))
      return true;
    return false;
  }(e6, t5))
    throw createError({ statusCode: 405, statusMessage: "HTTP method is not allowed." });
}
function getRequestHeaders(e6) {
  const t5 = {};
  for (const r4 in e6.node.req.headers) {
    const n2 = e6.node.req.headers[r4];
    t5[r4] = Array.isArray(n2) ? n2.filter(Boolean).join(", ") : n2;
  }
  return t5;
}
function getRequestHeader(e6, t5) {
  return getRequestHeaders(e6)[t5.toLowerCase()];
}
function toWebRequest(e6) {
  return e6.web?.request || new Request(function(e7, t5 = {}) {
    const r4 = function(e8, t6 = {}) {
      if (t6.xForwardedHost) {
        const t7 = e8.node.req.headers["x-forwarded-host"];
        if (t7)
          return t7;
      }
      return e8.node.req.headers.host || "localhost";
    }(e7, t5), n2 = function(e8, t6 = {}) {
      return false !== t6.xForwardedProto && "https" === e8.node.req.headers["x-forwarded-proto"] || e8.node.req.connection?.encrypted ? "https" : "http";
    }(e7, t5), o10 = (e7.node.req.originalUrl || e7.path).replace(/^[/\\]+/g, "/");
    return new URL(o10, `${n2}://${r4}`);
  }(e6), { duplex: "half", method: e6.method, headers: e6.headers, body: getRequestWebStream(e6) });
}
function readRawBody(e6, t5 = "utf8") {
  assertMethod(e6, ye3);
  const r4 = e6._requestBody || e6.web?.request?.body || e6.node.req[de4] || e6.node.req.rawBody || e6.node.req.body;
  if (r4) {
    const e7 = Promise.resolve(r4).then((e8) => f2.isBuffer(e8) ? e8 : "function" == typeof e8.pipeTo ? new Promise((t6, r5) => {
      const n3 = [];
      e8.pipeTo(new WritableStream({ write(e9) {
        n3.push(e9);
      }, close() {
        t6(f2.concat(n3));
      }, abort(e9) {
        r5(e9);
      } })).catch(r5);
    }) : "function" == typeof e8.pipe ? new Promise((t6, r5) => {
      const n3 = [];
      e8.on("data", (e9) => {
        n3.push(e9);
      }).on("end", () => {
        t6(f2.concat(n3));
      }).on("error", r5);
    }) : e8.constructor === Object ? f2.from(JSON.stringify(e8)) : f2.from(e8));
    return t5 ? e7.then((e8) => e8.toString(t5)) : e7;
  }
  if (!Number.parseInt(e6.node.req.headers["content-length"] || "") && !String(e6.node.req.headers["transfer-encoding"] ?? "").split(",").map((e7) => e7.trim()).filter(Boolean).includes("chunked"))
    return Promise.resolve(void 0);
  const n2 = e6.node.req[de4] = new Promise((t6, r5) => {
    const n3 = [];
    e6.node.req.on("error", (e7) => {
      r5(e7);
    }).on("data", (e7) => {
      n3.push(e7);
    }).on("end", () => {
      t6(f2.concat(n3));
    });
  });
  return t5 ? n2.then((e7) => e7.toString(t5)) : n2;
}
async function readBody(e6, t5 = {}) {
  const r4 = e6.node.req;
  if (hasProp(r4, pe4))
    return r4[pe4];
  const n2 = r4.headers["content-type"] || "", o10 = await readRawBody(e6);
  let s4;
  return s4 = "application/json" === n2 ? _parseJSON(o10, t5.strict ?? true) : n2.startsWith("application/x-www-form-urlencoded") ? function(e7) {
    const t6 = new URLSearchParams(e7), r5 = /* @__PURE__ */ Object.create(null);
    for (const [e8, n3] of t6.entries())
      hasProp(r5, e8) ? (Array.isArray(r5[e8]) || (r5[e8] = [r5[e8]]), r5[e8].push(n3)) : r5[e8] = n3;
    return r5;
  }(o10) : n2.startsWith("text/") ? o10 : _parseJSON(o10, t5.strict ?? false), r4[pe4] = s4, s4;
}
async function readValidatedBody(e6, t5) {
  return validateData(await readBody(e6, { strict: true }), t5);
}
async function readFormData(e6) {
  return await toWebRequest(e6).formData();
}
function getRequestWebStream(e6) {
  if (!ye3.includes(e6.method))
    return;
  const t5 = e6.web?.request?.body || e6._requestBody;
  if (t5)
    return t5;
  return de4 in e6.node.req || "rawBody" in e6.node.req || "body" in e6.node.req || "__unenv__" in e6.node.req ? new ReadableStream({ async start(t6) {
    const r4 = await readRawBody(e6, false);
    r4 && t6.enqueue(r4), t6.close();
  } }) : new ReadableStream({ start: (t6) => {
    e6.node.req.on("data", (e7) => {
      t6.enqueue(e7);
    }), e6.node.req.on("end", () => {
      t6.close();
    }), e6.node.req.on("error", (e7) => {
      t6.error(e7);
    });
  } });
}
function _parseJSON(e6 = "", t5) {
  if (e6)
    try {
      return destr(e6, { strict: t5 });
    } catch {
      throw createError({ statusCode: 400, statusMessage: "Bad Request", message: "Invalid JSON body" });
    }
}
function handleCacheHeaders(e6, t5) {
  const r4 = ["public", ...t5.cacheControls || []];
  let n2 = false;
  if (void 0 !== t5.maxAge && r4.push("max-age=" + +t5.maxAge, "s-maxage=" + +t5.maxAge), t5.modifiedTime) {
    const r5 = new Date(t5.modifiedTime), o10 = e6.node.req.headers["if-modified-since"];
    e6.node.res.setHeader("last-modified", r5.toUTCString()), o10 && new Date(o10) >= t5.modifiedTime && (n2 = true);
  }
  if (t5.etag) {
    e6.node.res.setHeader("etag", t5.etag);
    e6.node.req.headers["if-none-match"] === t5.etag && (n2 = true);
  }
  return e6.node.res.setHeader("cache-control", r4.join(", ")), !!n2 && (e6.node.res.statusCode = 304, e6.handled || e6.node.res.end(), true);
}
function sanitizeStatusMessage(e6 = "") {
  return e6.replace(me4, "");
}
function sanitizeStatusCode(e6, t5 = 200) {
  return e6 ? ("string" == typeof e6 && (e6 = Number.parseInt(e6, 10)), e6 < 100 || e6 > 999 ? t5 : e6) : t5;
}
function splitCookiesString(e6) {
  if (Array.isArray(e6))
    return e6.flatMap((e7) => splitCookiesString(e7));
  if ("string" != typeof e6)
    return [];
  const t5 = [];
  let r4, n2, o10, s4, i6, a4 = 0;
  const skipWhitespace = () => {
    for (; a4 < e6.length && /\s/.test(e6.charAt(a4)); )
      a4 += 1;
    return a4 < e6.length;
  };
  for (; a4 < e6.length; ) {
    for (r4 = a4, i6 = false; skipWhitespace(); )
      if (n2 = e6.charAt(a4), "," === n2) {
        for (o10 = a4, a4 += 1, skipWhitespace(), s4 = a4; a4 < e6.length && (n2 = e6.charAt(a4), "=" !== n2 && ";" !== n2 && "," !== n2); )
          a4 += 1;
        a4 < e6.length && "=" === e6.charAt(a4) ? (i6 = true, a4 = s4, t5.push(e6.slice(r4, o10)), r4 = a4) : a4 = o10 + 1;
      } else
        a4 += 1;
    (!i6 || a4 >= e6.length) && t5.push(e6.slice(r4, e6.length));
  }
  return t5;
}
function send(e6, t5, r4) {
  return r4 && function(e7, t6) {
    t6 && 304 !== e7.node.res.statusCode && !e7.node.res.getHeader("content-type") && e7.node.res.setHeader("content-type", t6);
  }(e6, r4), new Promise((r5) => {
    we3(() => {
      e6.handled || e6.node.res.end(t5), r5();
    });
  });
}
function sendNoContent(e6, t5) {
  if (e6.handled)
    return;
  t5 || 200 === e6.node.res.statusCode || (t5 = e6.node.res.statusCode);
  const r4 = sanitizeStatusCode(t5, 204);
  204 === r4 && e6.node.res.removeHeader("content-length"), e6.node.res.writeHead(r4), e6.node.res.end();
}
function setResponseStatus(e6, t5, r4) {
  t5 && (e6.node.res.statusCode = sanitizeStatusCode(t5, e6.node.res.statusCode)), r4 && (e6.node.res.statusMessage = sanitizeStatusMessage(r4));
}
function getResponseStatus(e6) {
  return e6.node.res.statusCode;
}
function getResponseStatusText(e6) {
  return e6.node.res.statusMessage;
}
function setResponseHeaders(e6, t5) {
  for (const [r4, n2] of Object.entries(t5))
    e6.node.res.setHeader(r4, n2);
}
function setResponseHeader(e6, t5, r4) {
  e6.node.res.setHeader(t5, r4);
}
function sendStream(e6, t5) {
  if (!t5 || "object" != typeof t5)
    throw new Error("[h3] Invalid stream provided.");
  if (e6.node.res._data = t5, !e6.node.res.socket)
    return e6._handled = true, Promise.resolve();
  if (hasProp(t5, "pipeTo") && "function" == typeof t5.pipeTo)
    return t5.pipeTo(new WritableStream({ write(t6) {
      e6.node.res.write(t6);
    } })).then(() => {
      e6.node.res.end();
    });
  if (hasProp(t5, "pipe") && "function" == typeof t5.pipe)
    return new Promise((r4, n2) => {
      t5.pipe(e6.node.res), t5.on && (t5.on("end", () => {
        e6.node.res.end(), r4();
      }), t5.on("error", (e7) => {
        n2(e7);
      })), e6.node.res.on("close", () => {
        t5.abort && t5.abort();
      });
    });
  throw new Error("[h3] Invalid or incompatible stream provided.");
}
function sendWebResponse(e6, t5) {
  for (const [r4, n2] of t5.headers)
    "set-cookie" === r4 ? e6.node.res.appendHeader(r4, splitCookiesString(n2)) : e6.node.res.setHeader(r4, n2);
  if (t5.status && (e6.node.res.statusCode = sanitizeStatusCode(t5.status, e6.node.res.statusCode)), t5.statusText && (e6.node.res.statusMessage = sanitizeStatusMessage(t5.statusText)), t5.redirected && e6.node.res.setHeader("location", t5.url), t5.body)
    return sendStream(e6, t5.body);
  e6.node.res.end();
}
async function proxyRequest(e6, t5, r4 = {}) {
  let n2, o10;
  ve3.has(e6.method) && (r4.streamRequest ? (n2 = getRequestWebStream(e6), o10 = "half") : n2 = await readRawBody(e6, false).catch(() => {
  }));
  const s4 = r4.fetchOptions?.method || e6.method, i6 = function(e7, ...t6) {
    const r5 = t6.filter(Boolean);
    if (0 === r5.length)
      return e7;
    const n3 = new Headers(e7);
    for (const e8 of r5)
      for (const [t7, r6] of Object.entries(e8))
        void 0 !== r6 && n3.set(t7, r6);
    return n3;
  }(getProxyRequestHeaders(e6), r4.fetchOptions?.headers, r4.headers);
  return async function(e7, t6, r5 = {}) {
    let n3;
    try {
      n3 = await _getFetch(r5.fetch)(t6, { headers: r5.headers, ignoreResponseError: true, ...r5.fetchOptions });
    } catch (e8) {
      throw createError({ status: 502, statusMessage: "Bad Gateway", cause: e8 });
    }
    e7.node.res.statusCode = sanitizeStatusCode(n3.status, e7.node.res.statusCode), e7.node.res.statusMessage = sanitizeStatusMessage(n3.statusText);
    const o11 = [];
    for (const [t7, r6] of n3.headers.entries())
      "content-encoding" !== t7 && "content-length" !== t7 && ("set-cookie" !== t7 ? e7.node.res.setHeader(t7, r6) : o11.push(...splitCookiesString(r6)));
    o11.length > 0 && e7.node.res.setHeader("set-cookie", o11.map((e8) => (r5.cookieDomainRewrite && (e8 = rewriteCookieProperty(e8, r5.cookieDomainRewrite, "domain")), r5.cookiePathRewrite && (e8 = rewriteCookieProperty(e8, r5.cookiePathRewrite, "path")), e8)));
    r5.onResponse && await r5.onResponse(e7, n3);
    if (void 0 !== n3._data)
      return n3._data;
    if (e7.handled)
      return;
    if (false === r5.sendStream) {
      const t7 = new Uint8Array(await n3.arrayBuffer());
      return e7.node.res.end(t7);
    }
    if (n3.body)
      for await (const t7 of n3.body)
        e7.node.res.write(t7);
    return e7.node.res.end();
  }(e6, t5, { ...r4, fetchOptions: { method: s4, body: n2, duplex: o10, ...r4.fetchOptions, headers: i6 } });
}
function getProxyRequestHeaders(e6) {
  const t5 = /* @__PURE__ */ Object.create(null), r4 = getRequestHeaders(e6);
  for (const e7 in r4)
    Be2.has(e7) || (t5[e7] = r4[e7]);
  return t5;
}
function fetchWithEvent(e6, t5, r4, n2) {
  return _getFetch(n2?.fetch)(t5, { ...r4, context: r4?.context || e6.context, headers: { ...getProxyRequestHeaders(e6), ...r4?.headers } });
}
function _getFetch(e6) {
  if (e6)
    return e6;
  if (globalThis.fetch)
    return globalThis.fetch;
  throw new Error("fetch is not available. Try importing `node-fetch-native/polyfill` for Node.js.");
}
function rewriteCookieProperty(e6, t5, r4) {
  const n2 = "string" == typeof t5 ? { "*": t5 } : t5;
  return e6.replace(new RegExp(`(;\\s*${r4}=)([^;]+)`, "gi"), (e7, t6, r5) => {
    let o10;
    if (r5 in n2)
      o10 = n2[r5];
    else {
      if (!("*" in n2))
        return e7;
      o10 = n2["*"];
    }
    return o10 ? t6 + o10 : "";
  });
}
function isEvent(e6) {
  return hasProp(e6, "__is_event__");
}
function createEvent(e6, t5) {
  return new H3Event(e6, t5);
}
function defineEventHandler(e6) {
  if ("function" == typeof e6)
    return e6.__is_handler__ = true, e6;
  const t5 = { onRequest: _normalizeArray(e6.onRequest), onBeforeResponse: _normalizeArray(e6.onBeforeResponse) }, _handler = (r4) => async function(e7, t6, r5) {
    if (r5.onRequest) {
      for (const t7 of r5.onRequest)
        if (await t7(e7), e7.handled)
          return;
    }
    const n2 = await t6(e7), o10 = { body: n2 };
    if (r5.onBeforeResponse)
      for (const t7 of r5.onBeforeResponse)
        await t7(e7, o10);
    return o10.body;
  }(r4, e6.handler, t5);
  return _handler.__is_handler__ = true, _handler.__resolve__ = e6.handler.__resolve__, _handler.__websocket__ = e6.websocket, _handler;
}
function _normalizeArray(e6) {
  return e6 ? Array.isArray(e6) ? e6 : [e6] : void 0;
}
function isEventHandler(e6) {
  return hasProp(e6, "__is_handler__");
}
function toEventHandler(e6, t5, r4) {
  return isEventHandler(e6) || console.warn("[h3] Implicit event handler conversion is deprecated. Use `eventHandler()` or `fromNodeMiddleware()` to define event handlers.", r4 && "/" !== r4 ? `
     Route: ${r4}` : "", `
     Handler: ${e6}`), e6;
}
function createApp2(e6 = {}) {
  const t5 = [], r4 = function(e7, t6) {
    const r5 = t6.debug ? 2 : void 0;
    return Re(async (n3) => {
      n3.node.req.originalUrl = n3.node.req.originalUrl || n3.node.req.url || "/";
      const o11 = n3._path || n3.node.req.url || "/";
      let s5;
      t6.onRequest && await t6.onRequest(n3);
      for (const i6 of e7) {
        if (i6.route.length > 1) {
          if (!o11.startsWith(i6.route))
            continue;
          s5 = o11.slice(i6.route.length) || "/";
        } else
          s5 = o11;
        if (i6.match && !i6.match(s5, n3))
          continue;
        n3._path = s5, n3.node.req.url = s5;
        const e8 = await i6.handler(n3), a4 = void 0 === e8 ? void 0 : await e8;
        if (void 0 !== a4) {
          const e9 = { body: a4 };
          return t6.onBeforeResponse && (n3._onBeforeResponseCalled = true, await t6.onBeforeResponse(n3, e9)), await handleHandlerResponse(n3, e9.body, r5), void (t6.onAfterResponse && (n3._onAfterResponseCalled = true, await t6.onAfterResponse(n3, e9)));
        }
        if (n3.handled)
          return void (t6.onAfterResponse && (n3._onAfterResponseCalled = true, await t6.onAfterResponse(n3, void 0)));
      }
      if (!n3.handled)
        throw createError({ statusCode: 404, statusMessage: `Cannot find any path matching ${n3.path || "/"}.` });
      t6.onAfterResponse && (n3._onAfterResponseCalled = true, await t6.onAfterResponse(n3, void 0));
    });
  }(t5, e6), n2 = function(e7) {
    return async (t6) => {
      let r5;
      for (const n3 of e7) {
        if ("/" === n3.route && !n3.handler.__resolve__)
          continue;
        if (!t6.startsWith(n3.route))
          continue;
        if (r5 = t6.slice(n3.route.length) || "/", n3.match && !n3.match(r5, void 0))
          continue;
        let e8 = { route: n3.route, handler: n3.handler };
        if (e8.handler.__resolve__) {
          const t7 = await e8.handler.__resolve__(r5);
          if (!t7)
            continue;
          e8 = { ...e8, ...t7, route: joinURL(e8.route || "/", t7.route || "/") };
        }
        return e8;
      }
    };
  }(t5);
  r4.__resolve__ = n2;
  const o10 = function(e7) {
    let t6;
    return () => (t6 || (t6 = e7()), t6);
  }(() => {
    return t6 = n2, { ...e6.websocket, async resolve(e7) {
      const { pathname: r5 } = parseURL(e7.url || "/"), n3 = await t6(r5);
      return n3?.handler?.__websocket__ || {};
    } };
    var t6;
  }), s4 = { use: (e7, t6, r5) => use(s4, e7, t6, r5), resolve: n2, handler: r4, stack: t5, options: e6, get websocket() {
    return o10();
  } };
  return s4;
}
function use(e6, t5, r4, n2) {
  if (Array.isArray(t5))
    for (const o10 of t5)
      use(e6, o10, r4, n2);
  else if (Array.isArray(r4))
    for (const o10 of r4)
      use(e6, t5, o10, n2);
  else
    "string" == typeof t5 ? e6.stack.push(normalizeLayer({ ...n2, route: t5, handler: r4 })) : "function" == typeof t5 ? e6.stack.push(normalizeLayer({ ...r4, handler: t5 })) : e6.stack.push(normalizeLayer({ ...t5 }));
  return e6;
}
function normalizeLayer(e6) {
  let t5 = e6.handler;
  return t5.handler && (t5 = t5.handler), e6.lazy ? t5 = lazyEventHandler(t5) : isEventHandler(t5) || (t5 = toEventHandler(t5, 0, e6.route)), { route: withoutTrailingSlash(e6.route), match: e6.match, handler: t5 };
}
function handleHandlerResponse(e6, t5, r4) {
  if (null === t5)
    return sendNoContent(e6);
  if (t5) {
    if (n2 = t5, "undefined" != typeof Response && n2 instanceof Response)
      return sendWebResponse(e6, t5);
    if (function(e7) {
      if (!e7 || "object" != typeof e7)
        return false;
      if ("function" == typeof e7.pipe) {
        if ("function" == typeof e7._read)
          return true;
        if ("function" == typeof e7.abort)
          return true;
      }
      return "function" == typeof e7.pipeTo;
    }(t5))
      return sendStream(e6, t5);
    if (t5.buffer)
      return send(e6, t5);
    if (t5.arrayBuffer && "function" == typeof t5.arrayBuffer)
      return t5.arrayBuffer().then((r5) => send(e6, f2.from(r5), t5.type));
    if (t5 instanceof Error)
      throw createError(t5);
    if ("function" == typeof t5.end)
      return true;
  }
  var n2;
  const o10 = typeof t5;
  if ("string" === o10)
    return send(e6, t5, ge3.html);
  if ("object" === o10 || "boolean" === o10 || "number" === o10)
    return send(e6, JSON.stringify(t5, void 0, r4), ge3.json);
  if ("bigint" === o10)
    return send(e6, t5.toString(), ge3.json);
  throw createError({ statusCode: 500, statusMessage: `[h3] Cannot send ${o10} as response.` });
}
function toNodeListener(e6) {
  return async function(t5, r4) {
    const n2 = createEvent(t5, r4);
    try {
      await e6.handler(n2);
    } catch (t6) {
      const r5 = createError(t6);
      if (isError(t6) || (r5.unhandled = true), setResponseStatus(n2, r5.statusCode, r5.statusMessage), e6.options.onError && await e6.options.onError(r5, n2), n2.handled)
        return;
      (r5.unhandled || r5.fatal) && console.error("[h3]", r5.fatal ? "[fatal]" : "[unhandled]", r5), e6.options.onBeforeResponse && !n2._onBeforeResponseCalled && await e6.options.onBeforeResponse(n2, { body: r5 }), await function(e7, t7, r6) {
        if (e7.handled)
          return;
        const n3 = isError(t7) ? t7 : createError(t7), o10 = { statusCode: n3.statusCode, statusMessage: n3.statusMessage, stack: [], data: n3.data };
        if (r6 && (o10.stack = (n3.stack || "").split("\n").map((e8) => e8.trim())), e7.handled)
          return;
        setResponseStatus(e7, Number.parseInt(n3.statusCode), n3.statusMessage), e7.node.res.setHeader("content-type", ge3.json), e7.node.res.end(JSON.stringify(o10, void 0, 2));
      }(n2, r5, !!e6.options.debug), e6.options.onAfterResponse && !n2._onAfterResponseCalled && await e6.options.onAfterResponse(n2, { body: r5 });
    }
  };
}
function isPayloadMethod(e6 = "GET") {
  return xe3.has(e6.toUpperCase());
}
function mergeFetchOptions(e6, t5, r4 = globalThis.Headers) {
  const n2 = { ...t5, ...e6 };
  if (t5?.params && e6?.params && (n2.params = { ...t5?.params, ...e6?.params }), t5?.query && e6?.query && (n2.query = { ...t5?.query, ...e6?.query }), t5?.headers && e6?.headers) {
    n2.headers = new r4(t5?.headers || {});
    for (const [t6, o10] of new r4(e6?.headers || {}))
      n2.headers.set(t6, o10);
  }
  return n2;
}
function createFetch$1(e6 = {}) {
  const { fetch: t5 = globalThis.fetch, Headers: r4 = globalThis.Headers, AbortController: n2 = globalThis.AbortController } = e6;
  async function onError(e7) {
    const t6 = e7.error && "AbortError" === e7.error.name && !e7.options.timeout || false;
    if (false !== e7.options.retry && !t6) {
      let t7;
      t7 = "number" == typeof e7.options.retry ? e7.options.retry : isPayloadMethod(e7.options.method) ? 0 : 1;
      const r6 = e7.response && e7.response.status || 500;
      if (t7 > 0 && (Array.isArray(e7.options.retryStatusCodes) ? e7.options.retryStatusCodes.includes(r6) : Ae3.has(r6))) {
        const r7 = e7.options.retryDelay || 0;
        return r7 > 0 && await new Promise((e8) => setTimeout(e8, r7)), $fetchRaw(e7.request, { ...e7.options, retry: t7 - 1 });
      }
    }
    const r5 = function(e8) {
      const t7 = e8.error?.message || e8.error?.toString() || "", r6 = e8.request?.method || e8.options?.method || "GET", n3 = e8.request?.url || String(e8.request) || "/", o10 = `[${r6}] ${JSON.stringify(n3)}`, s4 = e8.response ? `${e8.response.status} ${e8.response.statusText}` : "<no response>", i6 = new FetchError(`${o10}: ${s4}${t7 ? ` ${t7}` : ""}`, e8.error ? { cause: e8.error } : void 0);
      for (const t8 of ["request", "options", "response"])
        Object.defineProperty(i6, t8, { get: () => e8[t8] });
      for (const [t8, r7] of [["data", "_data"], ["status", "status"], ["statusCode", "status"], ["statusText", "statusText"], ["statusMessage", "statusText"]])
        Object.defineProperty(i6, t8, { get: () => e8.response && e8.response[r7] });
      return i6;
    }(e7);
    throw Error.captureStackTrace && Error.captureStackTrace(r5, $fetchRaw), r5;
  }
  const $fetchRaw = async function(o10, s4 = {}) {
    const i6 = { request: o10, options: mergeFetchOptions(s4, e6.defaults, r4), response: void 0, error: void 0 };
    let a4;
    if (i6.options.method = i6.options.method?.toUpperCase(), i6.options.onRequest && await i6.options.onRequest(i6), "string" == typeof i6.request && (i6.options.baseURL && (i6.request = function(e7, t6) {
      if (isEmptyURL(t6) || hasProtocol(e7))
        return e7;
      const r5 = withoutTrailingSlash(t6);
      return e7.startsWith(r5) ? e7 : joinURL(r5, e7);
    }(i6.request, i6.options.baseURL)), (i6.options.query || i6.options.params) && (i6.request = withQuery(i6.request, { ...i6.options.params, ...i6.options.query }))), i6.options.body && isPayloadMethod(i6.options.method) && (!function(e7) {
      if (void 0 === e7)
        return false;
      const t6 = typeof e7;
      return "string" === t6 || "number" === t6 || "boolean" === t6 || null === t6 || "object" === t6 && (!!Array.isArray(e7) || !e7.buffer && (e7.constructor && "Object" === e7.constructor.name || "function" == typeof e7.toJSON));
    }(i6.options.body) ? ("pipeTo" in i6.options.body && "function" == typeof i6.options.body.pipeTo || "function" == typeof i6.options.body.pipe) && ("duplex" in i6.options || (i6.options.duplex = "half")) : (i6.options.body = "string" == typeof i6.options.body ? i6.options.body : JSON.stringify(i6.options.body), i6.options.headers = new r4(i6.options.headers || {}), i6.options.headers.has("content-type") || i6.options.headers.set("content-type", "application/json"), i6.options.headers.has("accept") || i6.options.headers.set("accept", "application/json"))), !i6.options.signal && i6.options.timeout) {
      const e7 = new n2();
      a4 = setTimeout(() => e7.abort(), i6.options.timeout), i6.options.signal = e7.signal;
    }
    try {
      i6.response = await t5(i6.request, i6.options);
    } catch (e7) {
      return i6.error = e7, i6.options.onRequestError && await i6.options.onRequestError(i6), await onError(i6);
    } finally {
      a4 && clearTimeout(a4);
    }
    if (i6.response.body && !Te2.has(i6.response.status) && "HEAD" !== i6.options.method) {
      const e7 = (i6.options.parseResponse ? "json" : i6.options.responseType) || function(e8 = "") {
        if (!e8)
          return "json";
        const t6 = e8.split(";").shift() || "";
        return ke3.test(t6) ? "json" : Se2.has(t6) || t6.startsWith("text/") ? "text" : "blob";
      }(i6.response.headers.get("content-type") || "");
      switch (e7) {
        case "json": {
          const e8 = await i6.response.text(), t6 = i6.options.parseResponse || destr;
          i6.response._data = t6(e8);
          break;
        }
        case "stream":
          i6.response._data = i6.response.body;
          break;
        default:
          i6.response._data = await i6.response[e7]();
      }
    }
    return i6.options.onResponse && await i6.options.onResponse(i6), !i6.options.ignoreResponseError && i6.response.status >= 400 && i6.response.status < 600 ? (i6.options.onResponseError && await i6.options.onResponseError(i6), await onError(i6)) : i6.response;
  }, $fetch = async function(e7, t6) {
    return (await $fetchRaw(e7, t6))._data;
  };
  return $fetch.raw = $fetchRaw, $fetch.native = (...e7) => t5(...e7), $fetch.create = (t6 = {}) => createFetch$1({ ...e6, defaults: { ...e6.defaults, ...t6 } }), $fetch;
}
function flatHooks(e6, t5 = {}, r4) {
  for (const n2 in e6) {
    const o10 = e6[n2], s4 = r4 ? `${r4}:${n2}` : n2;
    "object" == typeof o10 && null !== o10 ? flatHooks(o10, t5, s4) : "function" == typeof o10 && (t5[s4] = o10);
  }
  return t5;
}
function serialTaskCaller(e6, t5) {
  const r4 = t5.shift(), n2 = He2(r4);
  return e6.reduce((e7, r5) => e7.then(() => n2.run(() => r5(...t5))), Promise.resolve());
}
function parallelTaskCaller(e6, t5) {
  const r4 = t5.shift(), n2 = He2(r4);
  return Promise.all(e6.map((e7) => n2.run(() => e7(...t5))));
}
function callEachWith(e6, t5) {
  for (const r4 of [...e6])
    r4(t5);
}
function createHooks() {
  return new Hookable();
}
function klona(e6) {
  if ("object" != typeof e6)
    return e6;
  var t5, r4, n2 = Object.prototype.toString.call(e6);
  if ("[object Object]" === n2) {
    if (e6.constructor !== Object && "function" == typeof e6.constructor)
      for (t5 in r4 = new e6.constructor(), e6)
        e6.hasOwnProperty(t5) && r4[t5] !== e6[t5] && (r4[t5] = klona(e6[t5]));
    else
      for (t5 in r4 = {}, e6)
        "__proto__" === t5 ? Object.defineProperty(r4, t5, { value: klona(e6[t5]), configurable: true, enumerable: true, writable: true }) : r4[t5] = klona(e6[t5]);
    return r4;
  }
  if ("[object Array]" === n2) {
    for (t5 = e6.length, r4 = Array(t5); t5--; )
      r4[t5] = klona(e6[t5]);
    return r4;
  }
  return "[object Set]" === n2 ? (r4 = /* @__PURE__ */ new Set(), e6.forEach(function(e7) {
    r4.add(klona(e7));
  }), r4) : "[object Map]" === n2 ? (r4 = /* @__PURE__ */ new Map(), e6.forEach(function(e7, t6) {
    r4.set(klona(t6), klona(e7));
  }), r4) : "[object Date]" === n2 ? /* @__PURE__ */ new Date(+e6) : "[object RegExp]" === n2 ? ((r4 = new RegExp(e6.source, e6.flags)).lastIndex = e6.lastIndex, r4) : "[object DataView]" === n2 ? new e6.constructor(klona(e6.buffer)) : "[object ArrayBuffer]" === n2 ? e6.slice(0) : "Array]" === n2.slice(-6) ? new e6.constructor(e6) : e6;
}
function isUppercase(e6 = "") {
  if (!Pe2.test(e6))
    return e6 !== e6.toLowerCase();
}
function kebabCase(e6, t5) {
  return e6 ? (Array.isArray(e6) ? e6 : function(e7) {
    const t6 = qe2, r4 = [];
    if (!e7 || "string" != typeof e7)
      return r4;
    let n2, o10, s4 = "";
    for (const i6 of e7) {
      const e8 = t6.includes(i6);
      if (true === e8) {
        r4.push(s4), s4 = "", n2 = void 0;
        continue;
      }
      const a4 = isUppercase(i6);
      if (false === o10) {
        if (false === n2 && true === a4) {
          r4.push(s4), s4 = i6, n2 = a4;
          continue;
        }
        if (true === n2 && false === a4 && s4.length > 1) {
          const e9 = s4.at(-1);
          r4.push(s4.slice(0, Math.max(0, s4.length - 1))), s4 = e9 + i6, n2 = a4;
          continue;
        }
      }
      s4 += i6, n2 = a4, o10 = e8;
    }
    return r4.push(s4), r4;
  }(e6)).map((e7) => e7.toLowerCase()).join(t5) : "";
}
function getEnv(e6, t5) {
  const r4 = (n2 = e6, kebabCase(n2 || "", "_")).toUpperCase();
  var n2;
  return destr(B2.env[t5.prefix + r4] ?? B2.env[t5.altPrefix + r4]);
}
function _isObject(e6) {
  return "object" == typeof e6 && !Array.isArray(e6);
}
function applyEnv(e6, t5, r4 = "") {
  for (const n2 in e6) {
    const o10 = r4 ? `${r4}_${n2}` : n2, s4 = getEnv(o10, t5);
    _isObject(e6[n2]) ? _isObject(s4) ? (e6[n2] = { ...e6[n2], ...s4 }, applyEnv(e6[n2], t5, o10)) : void 0 === s4 ? applyEnv(e6[n2], t5, o10) : e6[n2] = s4 ?? e6[n2] : e6[n2] = s4 ?? e6[n2], t5.envExpansion && "string" == typeof e6[n2] && (e6[n2] = e6[n2].replace(ze2, (e7, t6) => B2.env[t6] || e7));
  }
  return e6;
}
function useRuntimeConfig2(e6) {
  if (!e6)
    return Ke2;
  if (e6.context.nitro.runtimeConfig)
    return e6.context.nitro.runtimeConfig;
  const t5 = klona(De3);
  return applyEnv(t5, Fe3), e6.context.nitro.runtimeConfig = t5, t5;
}
function _deepFreeze(e6) {
  const t5 = Object.getOwnPropertyNames(e6);
  for (const r4 of t5) {
    const t6 = e6[r4];
    t6 && "object" == typeof t6 && _deepFreeze(t6);
  }
  return Object.freeze(e6);
}
function asyncCall(e6, ...t5) {
  try {
    return (r4 = e6(...t5)) && "function" == typeof r4.then ? r4 : Promise.resolve(r4);
  } catch (e7) {
    return Promise.reject(e7);
  }
  var r4;
}
function stringify2(e6) {
  if (function(e7) {
    const t5 = typeof e7;
    return null === e7 || "object" !== t5 && "function" !== t5;
  }(e6))
    return String(e6);
  if (function(e7) {
    const t5 = Object.getPrototypeOf(e7);
    return !t5 || t5.isPrototypeOf(Object);
  }(e6) || Array.isArray(e6))
    return JSON.stringify(e6);
  if ("function" == typeof e6.toJSON)
    return stringify2(e6.toJSON());
  throw new Error("[unstorage] Cannot stringify value!");
}
function checkBufferSupport() {
  if (void 0 === typeof f2)
    throw new TypeError("[unstorage] Buffer is not supported!");
}
function normalizeKey$1(e6) {
  return e6 ? e6.split("?")[0].replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "") : "";
}
function joinKeys(...e6) {
  return normalizeKey$1(e6.join(":"));
}
function normalizeBaseKey(e6) {
  return (e6 = normalizeKey$1(e6)) ? e6 + ":" : "";
}
function createStorage(e6 = {}) {
  const t5 = { mounts: { "": e6.driver || memory() }, mountpoints: [""], watching: false, watchListeners: [], unwatch: {} }, getMount = (e7) => {
    for (const r5 of t5.mountpoints)
      if (e7.startsWith(r5))
        return { base: r5, relativeKey: e7.slice(r5.length), driver: t5.mounts[r5] };
    return { base: "", relativeKey: e7, driver: t5.mounts[""] };
  }, getMounts = (e7, r5) => t5.mountpoints.filter((t6) => t6.startsWith(e7) || r5 && e7.startsWith(t6)).map((r6) => ({ relativeBase: e7.length > r6.length ? e7.slice(r6.length) : void 0, mountpoint: r6, driver: t5.mounts[r6] })), onChange = (e7, r5) => {
    if (t5.watching) {
      r5 = normalizeKey$1(r5);
      for (const n2 of t5.watchListeners)
        n2(e7, r5);
    }
  }, stopWatch = async () => {
    if (t5.watching) {
      for (const e7 in t5.unwatch)
        await t5.unwatch[e7]();
      t5.unwatch = {}, t5.watching = false;
    }
  }, runBatch = (e7, t6, r5) => {
    const n2 = /* @__PURE__ */ new Map(), getBatch = (e8) => {
      let t7 = n2.get(e8.base);
      return t7 || (t7 = { driver: e8.driver, base: e8.base, items: [] }, n2.set(e8.base, t7)), t7;
    };
    for (const r6 of e7) {
      const e8 = "string" == typeof r6, n3 = normalizeKey$1(e8 ? r6 : r6.key), o10 = e8 ? void 0 : r6.value, s4 = e8 || !r6.options ? t6 : { ...t6, ...r6.options }, i6 = getMount(n3);
      getBatch(i6).items.push({ key: n3, value: o10, relativeKey: i6.relativeKey, options: s4 });
    }
    return Promise.all([...n2.values()].map((e8) => r5(e8))).then((e8) => e8.flat());
  }, r4 = { hasItem(e7, t6 = {}) {
    e7 = normalizeKey$1(e7);
    const { relativeKey: r5, driver: n2 } = getMount(e7);
    return asyncCall(n2.hasItem, r5, t6);
  }, getItem(e7, t6 = {}) {
    e7 = normalizeKey$1(e7);
    const { relativeKey: r5, driver: n2 } = getMount(e7);
    return asyncCall(n2.getItem, r5, t6).then((e8) => destr(e8));
  }, getItems: (e7, t6) => runBatch(e7, t6, (e8) => e8.driver.getItems ? asyncCall(e8.driver.getItems, e8.items.map((e9) => ({ key: e9.relativeKey, options: e9.options })), t6).then((t7) => t7.map((t8) => ({ key: joinKeys(e8.base, t8.key), value: destr(t8.value) }))) : Promise.all(e8.items.map((t7) => asyncCall(e8.driver.getItem, t7.relativeKey, t7.options).then((e9) => ({ key: t7.key, value: destr(e9) }))))), getItemRaw(e7, t6 = {}) {
    e7 = normalizeKey$1(e7);
    const { relativeKey: r5, driver: n2 } = getMount(e7);
    return n2.getItemRaw ? asyncCall(n2.getItemRaw, r5, t6) : asyncCall(n2.getItem, r5, t6).then((e8) => function(e9) {
      return "string" != typeof e9 ? e9 : e9.startsWith(Qe2) ? (checkBufferSupport(), f2.from(e9.slice(Qe2.length), "base64")) : e9;
    }(e8));
  }, async setItem(e7, t6, n2 = {}) {
    if (void 0 === t6)
      return r4.removeItem(e7);
    e7 = normalizeKey$1(e7);
    const { relativeKey: o10, driver: s4 } = getMount(e7);
    s4.setItem && (await asyncCall(s4.setItem, o10, stringify2(t6), n2), s4.watch || onChange("update", e7));
  }, async setItems(e7, t6) {
    await runBatch(e7, t6, async (e8) => {
      if (e8.driver.setItems)
        return asyncCall(e8.driver.setItems, e8.items.map((e9) => ({ key: e9.relativeKey, value: stringify2(e9.value), options: e9.options })), t6);
      e8.driver.setItem && await Promise.all(e8.items.map((t7) => asyncCall(e8.driver.setItem, t7.relativeKey, stringify2(t7.value), t7.options)));
    });
  }, async setItemRaw(e7, t6, n2 = {}) {
    if (void 0 === t6)
      return r4.removeItem(e7, n2);
    e7 = normalizeKey$1(e7);
    const { relativeKey: o10, driver: s4 } = getMount(e7);
    if (s4.setItemRaw)
      await asyncCall(s4.setItemRaw, o10, t6, n2);
    else {
      if (!s4.setItem)
        return;
      await asyncCall(s4.setItem, o10, function(e8) {
        if ("string" == typeof e8)
          return e8;
        checkBufferSupport();
        const t7 = f2.from(e8).toString("base64");
        return Qe2 + t7;
      }(t6), n2);
    }
    s4.watch || onChange("update", e7);
  }, async removeItem(e7, t6 = {}) {
    "boolean" == typeof t6 && (t6 = { removeMeta: t6 }), e7 = normalizeKey$1(e7);
    const { relativeKey: r5, driver: n2 } = getMount(e7);
    n2.removeItem && (await asyncCall(n2.removeItem, r5, t6), (t6.removeMeta || t6.removeMata) && await asyncCall(n2.removeItem, r5 + "$", t6), n2.watch || onChange("remove", e7));
  }, async getMeta(e7, t6 = {}) {
    "boolean" == typeof t6 && (t6 = { nativeOnly: t6 }), e7 = normalizeKey$1(e7);
    const { relativeKey: r5, driver: n2 } = getMount(e7), o10 = /* @__PURE__ */ Object.create(null);
    if (n2.getMeta && Object.assign(o10, await asyncCall(n2.getMeta, r5, t6)), !t6.nativeOnly) {
      const e8 = await asyncCall(n2.getItem, r5 + "$", t6).then((e9) => destr(e9));
      e8 && "object" == typeof e8 && ("string" == typeof e8.atime && (e8.atime = new Date(e8.atime)), "string" == typeof e8.mtime && (e8.mtime = new Date(e8.mtime)), Object.assign(o10, e8));
    }
    return o10;
  }, setMeta(e7, t6, r5 = {}) {
    return this.setItem(e7 + "$", t6, r5);
  }, removeMeta(e7, t6 = {}) {
    return this.removeItem(e7 + "$", t6);
  }, async getKeys(e7, t6 = {}) {
    e7 = normalizeBaseKey(e7);
    const r5 = getMounts(e7, true);
    let n2 = [];
    const o10 = [];
    for (const e8 of r5) {
      const r6 = (await asyncCall(e8.driver.getKeys, e8.relativeBase, t6)).map((t7) => e8.mountpoint + normalizeKey$1(t7)).filter((e9) => !n2.some((t7) => e9.startsWith(t7)));
      o10.push(...r6), n2 = [e8.mountpoint, ...n2.filter((t7) => !t7.startsWith(e8.mountpoint))];
    }
    return e7 ? o10.filter((t7) => t7.startsWith(e7) && !t7.endsWith("$")) : o10.filter((e8) => !e8.endsWith("$"));
  }, async clear(e7, t6 = {}) {
    e7 = normalizeBaseKey(e7), await Promise.all(getMounts(e7, false).map(async (e8) => {
      if (e8.driver.clear)
        return asyncCall(e8.driver.clear, e8.relativeBase, t6);
      if (e8.driver.removeItem) {
        const r5 = await e8.driver.getKeys(e8.relativeBase || "", t6);
        return Promise.all(r5.map((r6) => e8.driver.removeItem(r6, t6)));
      }
    }));
  }, async dispose() {
    await Promise.all(Object.values(t5.mounts).map((e7) => dispose(e7)));
  }, watch: async (e7) => (await (async () => {
    if (!t5.watching) {
      t5.watching = true;
      for (const e8 in t5.mounts)
        t5.unwatch[e8] = await watch2(t5.mounts[e8], onChange, e8);
    }
  })(), t5.watchListeners.push(e7), async () => {
    t5.watchListeners = t5.watchListeners.filter((t6) => t6 !== e7), 0 === t5.watchListeners.length && await stopWatch();
  }), async unwatch() {
    t5.watchListeners = [], await stopWatch();
  }, mount(e7, n2) {
    if ((e7 = normalizeBaseKey(e7)) && t5.mounts[e7])
      throw new Error(`already mounted at ${e7}`);
    return e7 && (t5.mountpoints.push(e7), t5.mountpoints.sort((e8, t6) => t6.length - e8.length)), t5.mounts[e7] = n2, t5.watching && Promise.resolve(watch2(n2, onChange, e7)).then((r5) => {
      t5.unwatch[e7] = r5;
    }).catch(console.error), r4;
  }, async unmount(e7, r5 = true) {
    (e7 = normalizeBaseKey(e7)) && t5.mounts[e7] && (t5.watching && e7 in t5.unwatch && (t5.unwatch[e7](), delete t5.unwatch[e7]), r5 && await dispose(t5.mounts[e7]), t5.mountpoints = t5.mountpoints.filter((t6) => t6 !== e7), delete t5.mounts[e7]);
  }, getMount(e7 = "") {
    e7 = normalizeKey$1(e7) + ":";
    const t6 = getMount(e7);
    return { driver: t6.driver, base: t6.base };
  }, getMounts(e7 = "", t6 = {}) {
    e7 = normalizeKey$1(e7);
    return getMounts(e7, t6.parents).map((e8) => ({ driver: e8.driver, base: e8.mountpoint }));
  } };
  return r4;
}
function watch2(e6, t5, r4) {
  return e6.watch ? e6.watch((e7, n2) => t5(e7, r4 + n2)) : () => {
  };
}
async function dispose(e6) {
  "function" == typeof e6.dispose && await asyncCall(e6.dispose);
}
function useStorage(e6 = "") {
  return e6 ? function(e7, t5) {
    if (!(t5 = normalizeBaseKey(t5)))
      return e7;
    const r4 = { ...e7 };
    for (const n2 of Ve2)
      r4[n2] = (r5 = "", ...o10) => e7[n2](t5 + r5, ...o10);
    return r4.getKeys = (r5 = "", ...n2) => e7.getKeys(t5 + r5, ...n2).then((e8) => e8.map((e9) => e9.slice(t5.length))), r4;
  }(Ge2, e6) : Ge2;
}
function getKey(...e6) {
  return e6.length > 0 ? hash(e6, {}) : "";
}
function escapeKey(e6) {
  return String(e6).replace(/\W/g, "");
}
function cloneWithProxy(e6, t5) {
  return new Proxy(e6, { get: (e7, r4, n2) => r4 in t5 ? t5[r4] : Reflect.get(e7, r4, n2), set: (e7, r4, n2, o10) => r4 in t5 ? (t5[r4] = n2, true) : Reflect.set(e7, r4, n2, o10) });
}
function createRouteRulesHandler(e6) {
  return Re((t5) => {
    const r4 = getRouteRules(t5);
    if (r4.headers && be3(t5, r4.headers), r4.redirect) {
      let e7 = r4.redirect.to;
      if (e7.endsWith("/**")) {
        let n2 = t5.path;
        const o10 = r4.redirect._redirectStripBase;
        o10 && (n2 = withoutBase(n2, o10)), e7 = joinURL(e7.slice(0, -3), n2);
      } else if (t5.path.includes("?")) {
        e7 = withQuery(e7, getQuery$1(t5.path));
      }
      return function(e8, t6, r5 = 302) {
        return e8.node.res.statusCode = sanitizeStatusCode(r5, e8.node.res.statusCode), e8.node.res.setHeader("location", t6), send(e8, `<!DOCTYPE html><html><head><meta http-equiv="refresh" content="0; url=${t6.replace(/"/g, "%22")}"></head></html>`, ge3.html);
      }(t5, e7, r4.redirect.statusCode);
    }
    if (r4.proxy) {
      let n2 = r4.proxy.to;
      if (n2.endsWith("/**")) {
        let e7 = t5.path;
        const o10 = r4.proxy._proxyStripBase;
        o10 && (e7 = withoutBase(e7, o10)), n2 = joinURL(n2.slice(0, -3), e7);
      } else if (t5.path.includes("?")) {
        n2 = withQuery(n2, getQuery$1(t5.path));
      }
      return proxyRequest(t5, n2, { fetch: e6.localFetch, ...r4.proxy });
    }
  });
}
function getRouteRules(e6) {
  return e6.context._nitro = e6.context._nitro || {}, e6.context._nitro.routeRules || (e6.context._nitro.routeRules = getRouteRulesForPath(withoutBase(e6.path.split("?")[0], useRuntimeConfig2().app.baseURL))), e6.context._nitro.routeRules;
}
function getRouteRulesForPath(e6) {
  return te({}, ...Xe2.matchAll(e6).reverse());
}
function hasReqHeader(e6, t5, r4) {
  const n2 = getRequestHeader(e6, t5);
  return n2 && "string" == typeof n2 && n2.toLowerCase().includes(r4);
}
function joinHeaders(e6) {
  return Array.isArray(e6) ? e6.join(", ") : String(e6);
}
function normalizeCookieHeader(e6 = "") {
  return splitCookiesString(joinHeaders(e6));
}
function normalizeCookieHeaders(e6) {
  const t5 = new Headers();
  for (const [r4, n2] of e6)
    if ("set-cookie" === r4)
      for (const e7 of normalizeCookieHeader(n2))
        t5.append("set-cookie", e7);
    else
      t5.set(r4, joinHeaders(n2));
  return t5;
}
var e5, t4, r3, n, o9, s3, i5, a3, u3, c2, f2, l2, h3, d2, p2, y3, g2, m5, w3, b3, _getEnv, _4, v3, B2, R3, I4, x3, S3, k3, A3, T4, C3, $4, O3, j5, L3, N4, M4, U4, H3, P3, q5, z5, W3, WordArray, D3, F3, K3, Q4, BufferedBlockAlgorithm, Hasher, V3, J3, Y3, SHA256, G3, Z3, X4, ee4, te, re4, ne4, oe4, se4, _Readable, ie4, ae4, ue4, ce4, fe3, Socket, IncomingMessage, ServerResponse, le4, __publicField$2, H3Error, he3, de4, pe4, ye3, ge3, me4, we3, be3, _e3, ve3, Be2, Ee3, __publicField, H3Event, Re, lazyEventHandler, Ie2, FetchError, xe3, Se2, ke3, Ae3, Te2, Ce3, $e2, Oe2, je2, Le3, Ne, Me3, Ue2, He2, Hookable, Pe2, qe2, ze2, We2, De3, Fe3, Ke2, Qe2, Ve2, memory, Je2, normalizeKey3, Ye2, Ge2, Ze2, cachedFunction, cachedEventHandler, Xe2, et2, errorHandler, _lazy_lFs6nj, tt2, rt2, useNitroApp, nt2, ot2, st2, it2;
var init_runtime = __esm({
  ".wrangler/tmp/pages-WENPGt/chunks/runtime.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    e5 = [];
    t4 = [];
    r3 = "undefined" == typeof Uint8Array ? Array : Uint8Array;
    n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    for (let r4 = 0, o10 = 64; r4 < o10; ++r4)
      e5[r4] = n[r4], t4[n.charCodeAt(r4)] = r4;
    t4["-".charCodeAt(0)] = 62, t4["_".charCodeAt(0)] = 63;
    o9 = "function" == typeof Symbol && "function" == typeof Symbol.for ? Symbol.for("nodejs.util.inspect.custom") : null;
    s3 = 2147483647;
    Buffer$1.TYPED_ARRAY_SUPPORT = function() {
      try {
        const e6 = new Uint8Array(1), t5 = { foo: function() {
          return 42;
        } };
        return Object.setPrototypeOf(t5, Uint8Array.prototype), Object.setPrototypeOf(e6, t5), 42 === e6.foo();
      } catch {
        return false;
      }
    }(), Buffer$1.TYPED_ARRAY_SUPPORT || "undefined" == typeof console || "function" != typeof console.error || console.error("This environment lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."), Object.defineProperty(Buffer$1.prototype, "parent", { enumerable: true, get: function() {
      if (Buffer$1.isBuffer(this))
        return this.buffer;
    } }), Object.defineProperty(Buffer$1.prototype, "offset", { enumerable: true, get: function() {
      if (Buffer$1.isBuffer(this))
        return this.byteOffset;
    } }), Buffer$1.poolSize = 8192, Buffer$1.from = function(e6, t5, r4) {
      return from(e6, t5, r4);
    }, Object.setPrototypeOf(Buffer$1.prototype, Uint8Array.prototype), Object.setPrototypeOf(Buffer$1, Uint8Array), Buffer$1.alloc = function(e6, t5, r4) {
      return function(e7, t6, r5) {
        return assertSize(e7), e7 <= 0 ? createBuffer2(e7) : void 0 !== t6 ? "string" == typeof r5 ? createBuffer2(e7).fill(t6, r5) : createBuffer2(e7).fill(t6) : createBuffer2(e7);
      }(e6, t5, r4);
    }, Buffer$1.allocUnsafe = function(e6) {
      return allocUnsafe(e6);
    }, Buffer$1.allocUnsafeSlow = function(e6) {
      return allocUnsafe(e6);
    }, Buffer$1.isBuffer = function(e6) {
      return null != e6 && true === e6._isBuffer && e6 !== Buffer$1.prototype;
    }, Buffer$1.compare = function(e6, t5) {
      if (isInstance(e6, Uint8Array) && (e6 = Buffer$1.from(e6, e6.offset, e6.byteLength)), isInstance(t5, Uint8Array) && (t5 = Buffer$1.from(t5, t5.offset, t5.byteLength)), !Buffer$1.isBuffer(e6) || !Buffer$1.isBuffer(t5))
        throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
      if (e6 === t5)
        return 0;
      let r4 = e6.length, n2 = t5.length;
      for (let o10 = 0, s4 = Math.min(r4, n2); o10 < s4; ++o10)
        if (e6[o10] !== t5[o10]) {
          r4 = e6[o10], n2 = t5[o10];
          break;
        }
      return r4 < n2 ? -1 : n2 < r4 ? 1 : 0;
    }, Buffer$1.isEncoding = function(e6) {
      switch (String(e6).toLowerCase()) {
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "latin1":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return true;
        default:
          return false;
      }
    }, Buffer$1.concat = function(e6, t5) {
      if (!Array.isArray(e6))
        throw new TypeError('"list" argument must be an Array of Buffers');
      if (0 === e6.length)
        return Buffer$1.alloc(0);
      let r4;
      if (void 0 === t5)
        for (t5 = 0, r4 = 0; r4 < e6.length; ++r4)
          t5 += e6[r4].length;
      const n2 = Buffer$1.allocUnsafe(t5);
      let o10 = 0;
      for (r4 = 0; r4 < e6.length; ++r4) {
        let t6 = e6[r4];
        if (isInstance(t6, Uint8Array))
          o10 + t6.length > n2.length ? (Buffer$1.isBuffer(t6) || (t6 = Buffer$1.from(t6.buffer, t6.byteOffset, t6.byteLength)), t6.copy(n2, o10)) : Uint8Array.prototype.set.call(n2, t6, o10);
        else {
          if (!Buffer$1.isBuffer(t6))
            throw new TypeError('"list" argument must be an Array of Buffers');
          t6.copy(n2, o10);
        }
        o10 += t6.length;
      }
      return n2;
    }, Buffer$1.byteLength = byteLength, Buffer$1.prototype._isBuffer = true, Buffer$1.prototype.swap16 = function() {
      const e6 = this.length;
      if (e6 % 2 != 0)
        throw new RangeError("Buffer size must be a multiple of 16-bits");
      for (let t5 = 0; t5 < e6; t5 += 2)
        swap(this, t5, t5 + 1);
      return this;
    }, Buffer$1.prototype.swap32 = function() {
      const e6 = this.length;
      if (e6 % 4 != 0)
        throw new RangeError("Buffer size must be a multiple of 32-bits");
      for (let t5 = 0; t5 < e6; t5 += 4)
        swap(this, t5, t5 + 3), swap(this, t5 + 1, t5 + 2);
      return this;
    }, Buffer$1.prototype.swap64 = function() {
      const e6 = this.length;
      if (e6 % 8 != 0)
        throw new RangeError("Buffer size must be a multiple of 64-bits");
      for (let t5 = 0; t5 < e6; t5 += 8)
        swap(this, t5, t5 + 7), swap(this, t5 + 1, t5 + 6), swap(this, t5 + 2, t5 + 5), swap(this, t5 + 3, t5 + 4);
      return this;
    }, Buffer$1.prototype.toString = function() {
      const e6 = this.length;
      return 0 === e6 ? "" : 0 === arguments.length ? utf8Slice(this, 0, e6) : Reflect.apply(slowToString, this, arguments);
    }, Buffer$1.prototype.toLocaleString = Buffer$1.prototype.toString, Buffer$1.prototype.equals = function(e6) {
      if (!Buffer$1.isBuffer(e6))
        throw new TypeError("Argument must be a Buffer");
      return this === e6 || 0 === Buffer$1.compare(this, e6);
    }, Buffer$1.prototype.inspect = function() {
      let e6 = "";
      return e6 = this.toString("hex", 0, 50).replace(/(.{2})/g, "$1 ").trim(), this.length > 50 && (e6 += " ... "), "<Buffer " + e6 + ">";
    }, o9 && (Buffer$1.prototype[o9] = Buffer$1.prototype.inspect), Buffer$1.prototype.compare = function(e6, t5, r4, n2, o10) {
      if (isInstance(e6, Uint8Array) && (e6 = Buffer$1.from(e6, e6.offset, e6.byteLength)), !Buffer$1.isBuffer(e6))
        throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof e6);
      if (void 0 === t5 && (t5 = 0), void 0 === r4 && (r4 = e6 ? e6.length : 0), void 0 === n2 && (n2 = 0), void 0 === o10 && (o10 = this.length), t5 < 0 || r4 > e6.length || n2 < 0 || o10 > this.length)
        throw new RangeError("out of range index");
      if (n2 >= o10 && t5 >= r4)
        return 0;
      if (n2 >= o10)
        return -1;
      if (t5 >= r4)
        return 1;
      if (this === e6)
        return 0;
      let s4 = (o10 >>>= 0) - (n2 >>>= 0), i6 = (r4 >>>= 0) - (t5 >>>= 0);
      const a4 = Math.min(s4, i6), u4 = this.slice(n2, o10), c3 = e6.slice(t5, r4);
      for (let e7 = 0; e7 < a4; ++e7)
        if (u4[e7] !== c3[e7]) {
          s4 = u4[e7], i6 = c3[e7];
          break;
        }
      return s4 < i6 ? -1 : i6 < s4 ? 1 : 0;
    }, Buffer$1.prototype.includes = function(e6, t5, r4) {
      return -1 !== this.indexOf(e6, t5, r4);
    }, Buffer$1.prototype.indexOf = function(e6, t5, r4) {
      return bidirectionalIndexOf(this, e6, t5, r4, true);
    }, Buffer$1.prototype.lastIndexOf = function(e6, t5, r4) {
      return bidirectionalIndexOf(this, e6, t5, r4, false);
    }, Buffer$1.prototype.write = function(e6, t5, r4, n2) {
      if (void 0 === t5)
        n2 = "utf8", r4 = this.length, t5 = 0;
      else if (void 0 === r4 && "string" == typeof t5)
        n2 = t5, r4 = this.length, t5 = 0;
      else {
        if (!Number.isFinite(t5))
          throw new TypeError("Buffer.write(string, encoding, offset[, length]) is no longer supported");
        t5 >>>= 0, Number.isFinite(r4) ? (r4 >>>= 0, void 0 === n2 && (n2 = "utf8")) : (n2 = r4, r4 = void 0);
      }
      const o10 = this.length - t5;
      if ((void 0 === r4 || r4 > o10) && (r4 = o10), e6.length > 0 && (r4 < 0 || t5 < 0) || t5 > this.length)
        throw new RangeError("Attempt to write outside buffer bounds");
      n2 || (n2 = "utf8");
      let s4 = false;
      for (; ; )
        switch (n2) {
          case "hex":
            return hexWrite(this, e6, t5, r4);
          case "utf8":
          case "utf-8":
            return utf8Write(this, e6, t5, r4);
          case "ascii":
          case "latin1":
          case "binary":
            return asciiWrite(this, e6, t5, r4);
          case "base64":
            return base64Write(this, e6, t5, r4);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return ucs2Write(this, e6, t5, r4);
          default:
            if (s4)
              throw new TypeError("Unknown encoding: " + n2);
            n2 = ("" + n2).toLowerCase(), s4 = true;
        }
    }, Buffer$1.prototype.toJSON = function() {
      return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) };
    };
    i5 = 4096;
    Buffer$1.prototype.slice = function(e6, t5) {
      const r4 = this.length;
      (e6 = Math.trunc(e6)) < 0 ? (e6 += r4) < 0 && (e6 = 0) : e6 > r4 && (e6 = r4), (t5 = void 0 === t5 ? r4 : Math.trunc(t5)) < 0 ? (t5 += r4) < 0 && (t5 = 0) : t5 > r4 && (t5 = r4), t5 < e6 && (t5 = e6);
      const n2 = this.subarray(e6, t5);
      return Object.setPrototypeOf(n2, Buffer$1.prototype), n2;
    }, Buffer$1.prototype.readUintLE = Buffer$1.prototype.readUIntLE = function(e6, t5, r4) {
      e6 >>>= 0, t5 >>>= 0, r4 || checkOffset(e6, t5, this.length);
      let n2 = this[e6], o10 = 1, s4 = 0;
      for (; ++s4 < t5 && (o10 *= 256); )
        n2 += this[e6 + s4] * o10;
      return n2;
    }, Buffer$1.prototype.readUintBE = Buffer$1.prototype.readUIntBE = function(e6, t5, r4) {
      e6 >>>= 0, t5 >>>= 0, r4 || checkOffset(e6, t5, this.length);
      let n2 = this[e6 + --t5], o10 = 1;
      for (; t5 > 0 && (o10 *= 256); )
        n2 += this[e6 + --t5] * o10;
      return n2;
    }, Buffer$1.prototype.readUint8 = Buffer$1.prototype.readUInt8 = function(e6, t5) {
      return e6 >>>= 0, t5 || checkOffset(e6, 1, this.length), this[e6];
    }, Buffer$1.prototype.readUint16LE = Buffer$1.prototype.readUInt16LE = function(e6, t5) {
      return e6 >>>= 0, t5 || checkOffset(e6, 2, this.length), this[e6] | this[e6 + 1] << 8;
    }, Buffer$1.prototype.readUint16BE = Buffer$1.prototype.readUInt16BE = function(e6, t5) {
      return e6 >>>= 0, t5 || checkOffset(e6, 2, this.length), this[e6] << 8 | this[e6 + 1];
    }, Buffer$1.prototype.readUint32LE = Buffer$1.prototype.readUInt32LE = function(e6, t5) {
      return e6 >>>= 0, t5 || checkOffset(e6, 4, this.length), (this[e6] | this[e6 + 1] << 8 | this[e6 + 2] << 16) + 16777216 * this[e6 + 3];
    }, Buffer$1.prototype.readUint32BE = Buffer$1.prototype.readUInt32BE = function(e6, t5) {
      return e6 >>>= 0, t5 || checkOffset(e6, 4, this.length), 16777216 * this[e6] + (this[e6 + 1] << 16 | this[e6 + 2] << 8 | this[e6 + 3]);
    }, Buffer$1.prototype.readBigUInt64LE = defineBigIntMethod(function(e6) {
      validateNumber(e6 >>>= 0, "offset");
      const t5 = this[e6], r4 = this[e6 + 7];
      void 0 !== t5 && void 0 !== r4 || boundsError(e6, this.length - 8);
      const n2 = t5 + 256 * this[++e6] + 65536 * this[++e6] + this[++e6] * 2 ** 24, o10 = this[++e6] + 256 * this[++e6] + 65536 * this[++e6] + r4 * 2 ** 24;
      return BigInt(n2) + (BigInt(o10) << BigInt(32));
    }), Buffer$1.prototype.readBigUInt64BE = defineBigIntMethod(function(e6) {
      validateNumber(e6 >>>= 0, "offset");
      const t5 = this[e6], r4 = this[e6 + 7];
      void 0 !== t5 && void 0 !== r4 || boundsError(e6, this.length - 8);
      const n2 = t5 * 2 ** 24 + 65536 * this[++e6] + 256 * this[++e6] + this[++e6], o10 = this[++e6] * 2 ** 24 + 65536 * this[++e6] + 256 * this[++e6] + r4;
      return (BigInt(n2) << BigInt(32)) + BigInt(o10);
    }), Buffer$1.prototype.readIntLE = function(e6, t5, r4) {
      e6 >>>= 0, t5 >>>= 0, r4 || checkOffset(e6, t5, this.length);
      let n2 = this[e6], o10 = 1, s4 = 0;
      for (; ++s4 < t5 && (o10 *= 256); )
        n2 += this[e6 + s4] * o10;
      return o10 *= 128, n2 >= o10 && (n2 -= Math.pow(2, 8 * t5)), n2;
    }, Buffer$1.prototype.readIntBE = function(e6, t5, r4) {
      e6 >>>= 0, t5 >>>= 0, r4 || checkOffset(e6, t5, this.length);
      let n2 = t5, o10 = 1, s4 = this[e6 + --n2];
      for (; n2 > 0 && (o10 *= 256); )
        s4 += this[e6 + --n2] * o10;
      return o10 *= 128, s4 >= o10 && (s4 -= Math.pow(2, 8 * t5)), s4;
    }, Buffer$1.prototype.readInt8 = function(e6, t5) {
      return e6 >>>= 0, t5 || checkOffset(e6, 1, this.length), 128 & this[e6] ? -1 * (255 - this[e6] + 1) : this[e6];
    }, Buffer$1.prototype.readInt16LE = function(e6, t5) {
      e6 >>>= 0, t5 || checkOffset(e6, 2, this.length);
      const r4 = this[e6] | this[e6 + 1] << 8;
      return 32768 & r4 ? 4294901760 | r4 : r4;
    }, Buffer$1.prototype.readInt16BE = function(e6, t5) {
      e6 >>>= 0, t5 || checkOffset(e6, 2, this.length);
      const r4 = this[e6 + 1] | this[e6] << 8;
      return 32768 & r4 ? 4294901760 | r4 : r4;
    }, Buffer$1.prototype.readInt32LE = function(e6, t5) {
      return e6 >>>= 0, t5 || checkOffset(e6, 4, this.length), this[e6] | this[e6 + 1] << 8 | this[e6 + 2] << 16 | this[e6 + 3] << 24;
    }, Buffer$1.prototype.readInt32BE = function(e6, t5) {
      return e6 >>>= 0, t5 || checkOffset(e6, 4, this.length), this[e6] << 24 | this[e6 + 1] << 16 | this[e6 + 2] << 8 | this[e6 + 3];
    }, Buffer$1.prototype.readBigInt64LE = defineBigIntMethod(function(e6) {
      validateNumber(e6 >>>= 0, "offset");
      const t5 = this[e6], r4 = this[e6 + 7];
      void 0 !== t5 && void 0 !== r4 || boundsError(e6, this.length - 8);
      const n2 = this[e6 + 4] + 256 * this[e6 + 5] + 65536 * this[e6 + 6] + (r4 << 24);
      return (BigInt(n2) << BigInt(32)) + BigInt(t5 + 256 * this[++e6] + 65536 * this[++e6] + this[++e6] * 2 ** 24);
    }), Buffer$1.prototype.readBigInt64BE = defineBigIntMethod(function(e6) {
      validateNumber(e6 >>>= 0, "offset");
      const t5 = this[e6], r4 = this[e6 + 7];
      void 0 !== t5 && void 0 !== r4 || boundsError(e6, this.length - 8);
      const n2 = (t5 << 24) + 65536 * this[++e6] + 256 * this[++e6] + this[++e6];
      return (BigInt(n2) << BigInt(32)) + BigInt(this[++e6] * 2 ** 24 + 65536 * this[++e6] + 256 * this[++e6] + r4);
    }), Buffer$1.prototype.readFloatLE = function(e6, t5) {
      return e6 >>>= 0, t5 || checkOffset(e6, 4, this.length), read(this, e6, true, 23, 4);
    }, Buffer$1.prototype.readFloatBE = function(e6, t5) {
      return e6 >>>= 0, t5 || checkOffset(e6, 4, this.length), read(this, e6, false, 23, 4);
    }, Buffer$1.prototype.readDoubleLE = function(e6, t5) {
      return e6 >>>= 0, t5 || checkOffset(e6, 8, this.length), read(this, e6, true, 52, 8);
    }, Buffer$1.prototype.readDoubleBE = function(e6, t5) {
      return e6 >>>= 0, t5 || checkOffset(e6, 8, this.length), read(this, e6, false, 52, 8);
    }, Buffer$1.prototype.writeUintLE = Buffer$1.prototype.writeUIntLE = function(e6, t5, r4, n2) {
      if (e6 = +e6, t5 >>>= 0, r4 >>>= 0, !n2) {
        checkInt(this, e6, t5, r4, Math.pow(2, 8 * r4) - 1, 0);
      }
      let o10 = 1, s4 = 0;
      for (this[t5] = 255 & e6; ++s4 < r4 && (o10 *= 256); )
        this[t5 + s4] = e6 / o10 & 255;
      return t5 + r4;
    }, Buffer$1.prototype.writeUintBE = Buffer$1.prototype.writeUIntBE = function(e6, t5, r4, n2) {
      if (e6 = +e6, t5 >>>= 0, r4 >>>= 0, !n2) {
        checkInt(this, e6, t5, r4, Math.pow(2, 8 * r4) - 1, 0);
      }
      let o10 = r4 - 1, s4 = 1;
      for (this[t5 + o10] = 255 & e6; --o10 >= 0 && (s4 *= 256); )
        this[t5 + o10] = e6 / s4 & 255;
      return t5 + r4;
    }, Buffer$1.prototype.writeUint8 = Buffer$1.prototype.writeUInt8 = function(e6, t5, r4) {
      return e6 = +e6, t5 >>>= 0, r4 || checkInt(this, e6, t5, 1, 255, 0), this[t5] = 255 & e6, t5 + 1;
    }, Buffer$1.prototype.writeUint16LE = Buffer$1.prototype.writeUInt16LE = function(e6, t5, r4) {
      return e6 = +e6, t5 >>>= 0, r4 || checkInt(this, e6, t5, 2, 65535, 0), this[t5] = 255 & e6, this[t5 + 1] = e6 >>> 8, t5 + 2;
    }, Buffer$1.prototype.writeUint16BE = Buffer$1.prototype.writeUInt16BE = function(e6, t5, r4) {
      return e6 = +e6, t5 >>>= 0, r4 || checkInt(this, e6, t5, 2, 65535, 0), this[t5] = e6 >>> 8, this[t5 + 1] = 255 & e6, t5 + 2;
    }, Buffer$1.prototype.writeUint32LE = Buffer$1.prototype.writeUInt32LE = function(e6, t5, r4) {
      return e6 = +e6, t5 >>>= 0, r4 || checkInt(this, e6, t5, 4, 4294967295, 0), this[t5 + 3] = e6 >>> 24, this[t5 + 2] = e6 >>> 16, this[t5 + 1] = e6 >>> 8, this[t5] = 255 & e6, t5 + 4;
    }, Buffer$1.prototype.writeUint32BE = Buffer$1.prototype.writeUInt32BE = function(e6, t5, r4) {
      return e6 = +e6, t5 >>>= 0, r4 || checkInt(this, e6, t5, 4, 4294967295, 0), this[t5] = e6 >>> 24, this[t5 + 1] = e6 >>> 16, this[t5 + 2] = e6 >>> 8, this[t5 + 3] = 255 & e6, t5 + 4;
    }, Buffer$1.prototype.writeBigUInt64LE = defineBigIntMethod(function(e6, t5 = 0) {
      return wrtBigUInt64LE(this, e6, t5, BigInt(0), BigInt("0xffffffffffffffff"));
    }), Buffer$1.prototype.writeBigUInt64BE = defineBigIntMethod(function(e6, t5 = 0) {
      return wrtBigUInt64BE(this, e6, t5, BigInt(0), BigInt("0xffffffffffffffff"));
    }), Buffer$1.prototype.writeIntLE = function(e6, t5, r4, n2) {
      if (e6 = +e6, t5 >>>= 0, !n2) {
        const n3 = Math.pow(2, 8 * r4 - 1);
        checkInt(this, e6, t5, r4, n3 - 1, -n3);
      }
      let o10 = 0, s4 = 1, i6 = 0;
      for (this[t5] = 255 & e6; ++o10 < r4 && (s4 *= 256); )
        e6 < 0 && 0 === i6 && 0 !== this[t5 + o10 - 1] && (i6 = 1), this[t5 + o10] = Math.trunc(e6 / s4) - i6 & 255;
      return t5 + r4;
    }, Buffer$1.prototype.writeIntBE = function(e6, t5, r4, n2) {
      if (e6 = +e6, t5 >>>= 0, !n2) {
        const n3 = Math.pow(2, 8 * r4 - 1);
        checkInt(this, e6, t5, r4, n3 - 1, -n3);
      }
      let o10 = r4 - 1, s4 = 1, i6 = 0;
      for (this[t5 + o10] = 255 & e6; --o10 >= 0 && (s4 *= 256); )
        e6 < 0 && 0 === i6 && 0 !== this[t5 + o10 + 1] && (i6 = 1), this[t5 + o10] = Math.trunc(e6 / s4) - i6 & 255;
      return t5 + r4;
    }, Buffer$1.prototype.writeInt8 = function(e6, t5, r4) {
      return e6 = +e6, t5 >>>= 0, r4 || checkInt(this, e6, t5, 1, 127, -128), e6 < 0 && (e6 = 255 + e6 + 1), this[t5] = 255 & e6, t5 + 1;
    }, Buffer$1.prototype.writeInt16LE = function(e6, t5, r4) {
      return e6 = +e6, t5 >>>= 0, r4 || checkInt(this, e6, t5, 2, 32767, -32768), this[t5] = 255 & e6, this[t5 + 1] = e6 >>> 8, t5 + 2;
    }, Buffer$1.prototype.writeInt16BE = function(e6, t5, r4) {
      return e6 = +e6, t5 >>>= 0, r4 || checkInt(this, e6, t5, 2, 32767, -32768), this[t5] = e6 >>> 8, this[t5 + 1] = 255 & e6, t5 + 2;
    }, Buffer$1.prototype.writeInt32LE = function(e6, t5, r4) {
      return e6 = +e6, t5 >>>= 0, r4 || checkInt(this, e6, t5, 4, 2147483647, -2147483648), this[t5] = 255 & e6, this[t5 + 1] = e6 >>> 8, this[t5 + 2] = e6 >>> 16, this[t5 + 3] = e6 >>> 24, t5 + 4;
    }, Buffer$1.prototype.writeInt32BE = function(e6, t5, r4) {
      return e6 = +e6, t5 >>>= 0, r4 || checkInt(this, e6, t5, 4, 2147483647, -2147483648), e6 < 0 && (e6 = 4294967295 + e6 + 1), this[t5] = e6 >>> 24, this[t5 + 1] = e6 >>> 16, this[t5 + 2] = e6 >>> 8, this[t5 + 3] = 255 & e6, t5 + 4;
    }, Buffer$1.prototype.writeBigInt64LE = defineBigIntMethod(function(e6, t5 = 0) {
      return wrtBigUInt64LE(this, e6, t5, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
    }), Buffer$1.prototype.writeBigInt64BE = defineBigIntMethod(function(e6, t5 = 0) {
      return wrtBigUInt64BE(this, e6, t5, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
    }), Buffer$1.prototype.writeFloatLE = function(e6, t5, r4) {
      return writeFloat(this, e6, t5, true, r4);
    }, Buffer$1.prototype.writeFloatBE = function(e6, t5, r4) {
      return writeFloat(this, e6, t5, false, r4);
    }, Buffer$1.prototype.writeDoubleLE = function(e6, t5, r4) {
      return writeDouble(this, e6, t5, true, r4);
    }, Buffer$1.prototype.writeDoubleBE = function(e6, t5, r4) {
      return writeDouble(this, e6, t5, false, r4);
    }, Buffer$1.prototype.copy = function(e6, t5, r4, n2) {
      if (!Buffer$1.isBuffer(e6))
        throw new TypeError("argument should be a Buffer");
      if (r4 || (r4 = 0), n2 || 0 === n2 || (n2 = this.length), t5 >= e6.length && (t5 = e6.length), t5 || (t5 = 0), n2 > 0 && n2 < r4 && (n2 = r4), n2 === r4)
        return 0;
      if (0 === e6.length || 0 === this.length)
        return 0;
      if (t5 < 0)
        throw new RangeError("targetStart out of bounds");
      if (r4 < 0 || r4 >= this.length)
        throw new RangeError("Index out of range");
      if (n2 < 0)
        throw new RangeError("sourceEnd out of bounds");
      n2 > this.length && (n2 = this.length), e6.length - t5 < n2 - r4 && (n2 = e6.length - t5 + r4);
      const o10 = n2 - r4;
      return this === e6 && "function" == typeof Uint8Array.prototype.copyWithin ? this.copyWithin(t5, r4, n2) : Uint8Array.prototype.set.call(e6, this.subarray(r4, n2), t5), o10;
    }, Buffer$1.prototype.fill = function(e6, t5, r4, n2) {
      if ("string" == typeof e6) {
        if ("string" == typeof t5 ? (n2 = t5, t5 = 0, r4 = this.length) : "string" == typeof r4 && (n2 = r4, r4 = this.length), void 0 !== n2 && "string" != typeof n2)
          throw new TypeError("encoding must be a string");
        if ("string" == typeof n2 && !Buffer$1.isEncoding(n2))
          throw new TypeError("Unknown encoding: " + n2);
        if (1 === e6.length) {
          const t6 = e6.charCodeAt(0);
          ("utf8" === n2 && t6 < 128 || "latin1" === n2) && (e6 = t6);
        }
      } else
        "number" == typeof e6 ? e6 &= 255 : "boolean" == typeof e6 && (e6 = Number(e6));
      if (t5 < 0 || this.length < t5 || this.length < r4)
        throw new RangeError("Out of range index");
      if (r4 <= t5)
        return this;
      let o10;
      if (t5 >>>= 0, r4 = void 0 === r4 ? this.length : r4 >>> 0, e6 || (e6 = 0), "number" == typeof e6)
        for (o10 = t5; o10 < r4; ++o10)
          this[o10] = e6;
      else {
        const s4 = Buffer$1.isBuffer(e6) ? e6 : Buffer$1.from(e6, n2), i6 = s4.length;
        if (0 === i6)
          throw new TypeError('The value "' + e6 + '" is invalid for argument "value"');
        for (o10 = 0; o10 < r4 - t5; ++o10)
          this[o10 + t5] = s4[o10 % i6];
      }
      return this;
    };
    a3 = {};
    E3("ERR_BUFFER_OUT_OF_BOUNDS", function(e6) {
      return e6 ? `${e6} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
    }, RangeError), E3("ERR_INVALID_ARG_TYPE", function(e6, t5) {
      return `The "${e6}" argument must be of type number. Received type ${typeof t5}`;
    }, TypeError), E3("ERR_OUT_OF_RANGE", function(e6, t5, r4) {
      let n2 = `The value of "${e6}" is out of range.`, o10 = r4;
      return Number.isInteger(r4) && Math.abs(r4) > 2 ** 32 ? o10 = addNumericalSeparator(String(r4)) : "bigint" == typeof r4 && (o10 = String(r4), (r4 > BigInt(2) ** BigInt(32) || r4 < -(BigInt(2) ** BigInt(32))) && (o10 = addNumericalSeparator(o10)), o10 += "n"), n2 += ` It must be ${t5}. Received ${o10}`, n2;
    }, RangeError);
    u3 = /[^\w+/-]/g;
    c2 = function() {
      const e6 = "0123456789abcdef", t5 = Array.from({ length: 256 });
      for (let r4 = 0; r4 < 16; ++r4) {
        const n2 = 16 * r4;
        for (let o10 = 0; o10 < 16; ++o10)
          t5[n2 + o10] = e6[r4] + e6[o10];
      }
      return t5;
    }();
    f2 = globalThis.Buffer || Buffer$1;
    notImplemented("buffer.resolveObjectURL"), notImplemented("buffer.transcode"), notImplemented("buffer.isUtf8"), notImplemented("buffer.isAscii");
    l2 = {};
    !function() {
      try {
        h3 = "function" == typeof setTimeout ? setTimeout : defaultSetTimeout;
      } catch {
        h3 = defaultSetTimeout;
      }
      try {
        d2 = "function" == typeof clearTimeout ? clearTimeout : defaultClearTimeout;
      } catch {
        d2 = defaultClearTimeout;
      }
    }();
    y3 = [];
    g2 = false;
    m5 = -1;
    l2.nextTick = function(e6) {
      const t5 = Array.from({ length: arguments.length - 1 });
      if (arguments.length > 1)
        for (let e7 = 1; e7 < arguments.length; e7++)
          t5[e7 - 1] = arguments[e7];
      y3.push(new Item(e6, t5)), 1 !== y3.length || g2 || runTimeout(drainQueue);
    }, Item.prototype.run = function() {
      this.fun.apply(null, this.array);
    }, l2.title = "unenv";
    w3 = /* @__PURE__ */ Object.create(null);
    b3 = globalThis.process?.env;
    _getEnv = (e6) => b3 || globalThis.__env__ || (e6 ? w3 : globalThis);
    l2.env = new Proxy(w3, { get: (e6, t5) => _getEnv()[t5] ?? w3[t5], has: (e6, t5) => t5 in _getEnv() || t5 in w3, set: (e6, t5, r4) => (_getEnv(true)[t5] = r4, true), deleteProperty(e6, t5) {
      delete _getEnv(true)[t5];
    }, ownKeys() {
      const e6 = _getEnv();
      return Object.keys(e6);
    } }), l2.argv = [], l2.version = "", l2.versions = {}, l2.on = noop2, l2.addListener = noop2, l2.once = noop2, l2.off = noop2, l2.removeListener = noop2, l2.removeAllListeners = noop2, l2.emit = noop2, l2.prependListener = noop2, l2.prependOnceListener = noop2, l2.listeners = function(e6) {
      return [];
    }, l2.binding = function(e6) {
      throw new Error("[unenv] process.binding is not supported");
    };
    _4 = "/";
    l2.cwd = function() {
      return _4;
    }, l2.chdir = function(e6) {
      _4 = e6;
    }, l2.umask = function() {
      return 0;
    };
    v3 = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof global ? global : {};
    v3.process = v3.process || l2;
    B2 = v3.process;
    R3 = /#/g;
    I4 = /&/g;
    x3 = /\//g;
    S3 = /=/g;
    k3 = /\+/g;
    A3 = /%5e/gi;
    T4 = /%60/gi;
    C3 = /%7c/gi;
    $4 = /%20/gi;
    O3 = /^[\s\w\0+.-]{2,}:([/\\]{1,2})/;
    j5 = /^[\s\w\0+.-]{2,}:([/\\]{2})?/;
    L3 = /^([/\\]\s*){2,}[^/\\]/;
    N4 = /^[\s\0]*(blob|data|javascript|vbscript):$/i;
    M4 = /\/$|\/\?|\/#/;
    U4 = /^\.?\//;
    H3 = Symbol.for("ufo:protocolRelative");
    P3 = Object.freeze({ ignoreUnknown: false, respectType: false, respectFunctionNames: false, respectFunctionProperties: false, unorderedObjects: true, unorderedArrays: false, unorderedSets: false, excludeKeys: void 0, excludeValues: void 0, replacer: void 0 });
    q5 = Object.freeze(["prototype", "__proto__", "constructor"]);
    z5 = "[native code] }";
    W3 = z5.length;
    WordArray = class {
      constructor(e6, t5) {
        e6 = this.words = e6 || [], this.sigBytes = void 0 === t5 ? 4 * e6.length : t5;
      }
      toString(e6) {
        return (e6 || D3).stringify(this);
      }
      concat(e6) {
        if (this.clamp(), this.sigBytes % 4)
          for (let t5 = 0; t5 < e6.sigBytes; t5++) {
            const r4 = e6.words[t5 >>> 2] >>> 24 - t5 % 4 * 8 & 255;
            this.words[this.sigBytes + t5 >>> 2] |= r4 << 24 - (this.sigBytes + t5) % 4 * 8;
          }
        else
          for (let t5 = 0; t5 < e6.sigBytes; t5 += 4)
            this.words[this.sigBytes + t5 >>> 2] = e6.words[t5 >>> 2];
        return this.sigBytes += e6.sigBytes, this;
      }
      clamp() {
        this.words[this.sigBytes >>> 2] &= 4294967295 << 32 - this.sigBytes % 4 * 8, this.words.length = Math.ceil(this.sigBytes / 4);
      }
      clone() {
        return new WordArray([...this.words]);
      }
    };
    D3 = { stringify(e6) {
      const t5 = [];
      for (let r4 = 0; r4 < e6.sigBytes; r4++) {
        const n2 = e6.words[r4 >>> 2] >>> 24 - r4 % 4 * 8 & 255;
        t5.push((n2 >>> 4).toString(16), (15 & n2).toString(16));
      }
      return t5.join("");
    } };
    F3 = { stringify(e6) {
      const t5 = [];
      for (let r4 = 0; r4 < e6.sigBytes; r4 += 3) {
        const n2 = (e6.words[r4 >>> 2] >>> 24 - r4 % 4 * 8 & 255) << 16 | (e6.words[r4 + 1 >>> 2] >>> 24 - (r4 + 1) % 4 * 8 & 255) << 8 | e6.words[r4 + 2 >>> 2] >>> 24 - (r4 + 2) % 4 * 8 & 255;
        for (let o10 = 0; o10 < 4 && 8 * r4 + 6 * o10 < 8 * e6.sigBytes; o10++)
          t5.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(n2 >>> 6 * (3 - o10) & 63));
      }
      return t5.join("");
    } };
    K3 = { parse(e6) {
      const t5 = e6.length, r4 = [];
      for (let n2 = 0; n2 < t5; n2++)
        r4[n2 >>> 2] |= (255 & e6.charCodeAt(n2)) << 24 - n2 % 4 * 8;
      return new WordArray(r4, t5);
    } };
    Q4 = { parse: (e6) => K3.parse(unescape(encodeURIComponent(e6))) };
    BufferedBlockAlgorithm = class {
      constructor() {
        this._data = new WordArray(), this._nDataBytes = 0, this._minBufferSize = 0, this.blockSize = 16;
      }
      reset() {
        this._data = new WordArray(), this._nDataBytes = 0;
      }
      _append(e6) {
        "string" == typeof e6 && (e6 = Q4.parse(e6)), this._data.concat(e6), this._nDataBytes += e6.sigBytes;
      }
      _doProcessBlock(e6, t5) {
      }
      _process(e6) {
        let t5, r4 = this._data.sigBytes / (4 * this.blockSize);
        r4 = e6 ? Math.ceil(r4) : Math.max((0 | r4) - this._minBufferSize, 0);
        const n2 = r4 * this.blockSize, o10 = Math.min(4 * n2, this._data.sigBytes);
        if (n2) {
          for (let e7 = 0; e7 < n2; e7 += this.blockSize)
            this._doProcessBlock(this._data.words, e7);
          t5 = this._data.words.splice(0, n2), this._data.sigBytes -= o10;
        }
        return new WordArray(t5, o10);
      }
    };
    Hasher = class extends BufferedBlockAlgorithm {
      update(e6) {
        return this._append(e6), this._process(), this;
      }
      finalize(e6) {
        e6 && this._append(e6);
      }
    };
    V3 = [1779033703, -1150833019, 1013904242, -1521486534, 1359893119, -1694144372, 528734635, 1541459225];
    J3 = [1116352408, 1899447441, -1245643825, -373957723, 961987163, 1508970993, -1841331548, -1424204075, -670586216, 310598401, 607225278, 1426881987, 1925078388, -2132889090, -1680079193, -1046744716, -459576895, -272742522, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, -1740746414, -1473132947, -1341970488, -1084653625, -958395405, -710438585, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, -2117940946, -1838011259, -1564481375, -1474664885, -1035236496, -949202525, -778901479, -694614492, -200395387, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, -2067236844, -1933114872, -1866530822, -1538233109, -1090935817, -965641998];
    Y3 = [];
    SHA256 = class extends Hasher {
      constructor() {
        super(...arguments), this._hash = new WordArray([...V3]);
      }
      reset() {
        super.reset(), this._hash = new WordArray([...V3]);
      }
      _doProcessBlock(e6, t5) {
        const r4 = this._hash.words;
        let n2 = r4[0], o10 = r4[1], s4 = r4[2], i6 = r4[3], a4 = r4[4], u4 = r4[5], c3 = r4[6], f3 = r4[7];
        for (let r5 = 0; r5 < 64; r5++) {
          if (r5 < 16)
            Y3[r5] = 0 | e6[t5 + r5];
          else {
            const e7 = Y3[r5 - 15], t6 = (e7 << 25 | e7 >>> 7) ^ (e7 << 14 | e7 >>> 18) ^ e7 >>> 3, n3 = Y3[r5 - 2], o11 = (n3 << 15 | n3 >>> 17) ^ (n3 << 13 | n3 >>> 19) ^ n3 >>> 10;
            Y3[r5] = t6 + Y3[r5 - 7] + o11 + Y3[r5 - 16];
          }
          const l3 = n2 & o10 ^ n2 & s4 ^ o10 & s4, h4 = (n2 << 30 | n2 >>> 2) ^ (n2 << 19 | n2 >>> 13) ^ (n2 << 10 | n2 >>> 22), d3 = f3 + ((a4 << 26 | a4 >>> 6) ^ (a4 << 21 | a4 >>> 11) ^ (a4 << 7 | a4 >>> 25)) + (a4 & u4 ^ ~a4 & c3) + J3[r5] + Y3[r5];
          f3 = c3, c3 = u4, u4 = a4, a4 = i6 + d3 | 0, i6 = s4, s4 = o10, o10 = n2, n2 = d3 + (h4 + l3) | 0;
        }
        r4[0] = r4[0] + n2 | 0, r4[1] = r4[1] + o10 | 0, r4[2] = r4[2] + s4 | 0, r4[3] = r4[3] + i6 | 0, r4[4] = r4[4] + a4 | 0, r4[5] = r4[5] + u4 | 0, r4[6] = r4[6] + c3 | 0, r4[7] = r4[7] + f3 | 0;
      }
      finalize(e6) {
        super.finalize(e6);
        const t5 = 8 * this._nDataBytes, r4 = 8 * this._data.sigBytes;
        return this._data.words[r4 >>> 5] |= 128 << 24 - r4 % 32, this._data.words[14 + (r4 + 64 >>> 9 << 4)] = Math.floor(t5 / 4294967296), this._data.words[15 + (r4 + 64 >>> 9 << 4)] = t5, this._data.sigBytes = 4 * this._data.words.length, this._process(), this._hash;
      }
    };
    G3 = { NORMAL: 0, WILDCARD: 1, PLACEHOLDER: 2 };
    Z3 = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/;
    X4 = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/;
    ee4 = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;
    te = createDefu();
    re4 = createDefu((e6, t5, r4) => {
      if (void 0 !== e6[t5] && "function" == typeof r4)
        return e6[t5] = r4(e6[t5]), true;
    });
    ne4 = 10;
    oe4 = class {
      __unenv__ = true;
      _events = /* @__PURE__ */ Object.create(null);
      _maxListeners;
      static get defaultMaxListeners() {
        return ne4;
      }
      static set defaultMaxListeners(e6) {
        if ("number" != typeof e6 || e6 < 0 || Number.isNaN(e6))
          throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e6 + ".");
        ne4 = e6;
      }
      setMaxListeners(e6) {
        if ("number" != typeof e6 || e6 < 0 || Number.isNaN(e6))
          throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e6 + ".");
        return this._maxListeners = e6, this;
      }
      getMaxListeners() {
        return _getMaxListeners(this);
      }
      emit(e6, ...t5) {
        if (!this._events[e6] || 0 === this._events[e6].length)
          return false;
        if ("error" === e6) {
          let e7;
          if (t5.length > 0 && (e7 = t5[0]), e7 instanceof Error)
            throw e7;
          const r4 = new Error("Unhandled error." + (e7 ? " (" + e7.message + ")" : ""));
          throw r4.context = e7, r4;
        }
        for (const r4 of this._events[e6])
          (r4.listener || r4).apply(this, t5);
        return true;
      }
      addListener(e6, t5) {
        return _addListener(this, e6, t5, false);
      }
      on(e6, t5) {
        return _addListener(this, e6, t5, false);
      }
      prependListener(e6, t5) {
        return _addListener(this, e6, t5, true);
      }
      once(e6, t5) {
        return this.on(e6, _wrapOnce(this, e6, t5));
      }
      prependOnceListener(e6, t5) {
        return this.prependListener(e6, _wrapOnce(this, e6, t5));
      }
      removeListener(e6, t5) {
        return function(e7, t6, r4) {
          if (_checkListener(r4), !e7._events[t6] || 0 === e7._events[t6].length)
            return e7;
          const n2 = e7._events[t6].length;
          if (e7._events[t6] = e7._events[t6].filter((e8) => e8 !== r4), n2 === e7._events[t6].length)
            return e7;
          e7._events.removeListener && e7.emit("removeListener", t6, r4.listener || r4);
          0 === e7._events[t6].length && delete e7._events[t6];
          return e7;
        }(this, e6, t5);
      }
      off(e6, t5) {
        return this.removeListener(e6, t5);
      }
      removeAllListeners(e6) {
        return function(e7, t5) {
          if (!e7._events[t5] || 0 === e7._events[t5].length)
            return e7;
          if (e7._events.removeListener)
            for (const r4 of e7._events[t5])
              e7.emit("removeListener", t5, r4.listener || r4);
          return delete e7._events[t5], e7;
        }(this, e6);
      }
      listeners(e6) {
        return _listeners(this, e6, true);
      }
      rawListeners(e6) {
        return _listeners(this, e6, false);
      }
      listenerCount(e6) {
        return this.rawListeners(e6).length;
      }
      eventNames() {
        return Object.keys(this._events);
      }
    };
    se4 = globalThis.EventEmitter || oe4;
    _Readable = class extends se4 {
      __unenv__ = true;
      readableEncoding = null;
      readableEnded = true;
      readableFlowing = false;
      readableHighWaterMark = 0;
      readableLength = 0;
      readableObjectMode = false;
      readableAborted = false;
      readableDidRead = false;
      closed = false;
      errored = null;
      readable = false;
      destroyed = false;
      static from(e6, t5) {
        return new _Readable(t5);
      }
      constructor(e6) {
        super();
      }
      _read(e6) {
      }
      read(e6) {
      }
      setEncoding(e6) {
        return this;
      }
      pause() {
        return this;
      }
      resume() {
        return this;
      }
      isPaused() {
        return true;
      }
      unpipe(e6) {
        return this;
      }
      unshift(e6, t5) {
      }
      wrap(e6) {
        return this;
      }
      push(e6, t5) {
        return false;
      }
      _destroy(e6, t5) {
        this.removeAllListeners();
      }
      destroy(e6) {
        return this.destroyed = true, this._destroy(e6), this;
      }
      pipe(e6, t5) {
        return {};
      }
      compose(e6, t5) {
        throw new Error("[unenv] Method not implemented.");
      }
      [Symbol.asyncDispose]() {
        return this.destroy(), Promise.resolve();
      }
      async *[Symbol.asyncIterator]() {
        throw createNotImplementedError("Readable.asyncIterator");
      }
      iterator(e6) {
        throw createNotImplementedError("Readable.iterator");
      }
      map(e6, t5) {
        throw createNotImplementedError("Readable.map");
      }
      filter(e6, t5) {
        throw createNotImplementedError("Readable.filter");
      }
      forEach(e6, t5) {
        throw createNotImplementedError("Readable.forEach");
      }
      reduce(e6, t5, r4) {
        throw createNotImplementedError("Readable.reduce");
      }
      find(e6, t5) {
        throw createNotImplementedError("Readable.find");
      }
      findIndex(e6, t5) {
        throw createNotImplementedError("Readable.findIndex");
      }
      some(e6, t5) {
        throw createNotImplementedError("Readable.some");
      }
      toArray(e6) {
        throw createNotImplementedError("Readable.toArray");
      }
      every(e6, t5) {
        throw createNotImplementedError("Readable.every");
      }
      flatMap(e6, t5) {
        throw createNotImplementedError("Readable.flatMap");
      }
      drop(e6, t5) {
        throw createNotImplementedError("Readable.drop");
      }
      take(e6, t5) {
        throw createNotImplementedError("Readable.take");
      }
      asIndexedPairs(e6) {
        throw createNotImplementedError("Readable.asIndexedPairs");
      }
    };
    ie4 = globalThis.Readable || _Readable;
    ae4 = globalThis.Writable || class extends se4 {
      __unenv__ = true;
      writable = true;
      writableEnded = false;
      writableFinished = false;
      writableHighWaterMark = 0;
      writableLength = 0;
      writableObjectMode = false;
      writableCorked = 0;
      closed = false;
      errored = null;
      writableNeedDrain = false;
      destroyed = false;
      _data;
      _encoding = "utf-8";
      constructor(e6) {
        super();
      }
      pipe(e6, t5) {
        return {};
      }
      _write(e6, t5, r4) {
        if (this.writableEnded)
          r4 && r4();
        else {
          if (void 0 === this._data)
            this._data = e6;
          else {
            const r5 = "string" == typeof this._data ? f2.from(this._data, this._encoding || t5 || "utf8") : this._data, n2 = "string" == typeof e6 ? f2.from(e6, t5 || this._encoding || "utf8") : e6;
            this._data = f2.concat([r5, n2]);
          }
          this._encoding = t5, r4 && r4();
        }
      }
      _writev(e6, t5) {
      }
      _destroy(e6, t5) {
      }
      _final(e6) {
      }
      write(e6, t5, r4) {
        const n2 = "string" == typeof t5 ? this._encoding : "utf-8", o10 = "function" == typeof t5 ? t5 : "function" == typeof r4 ? r4 : void 0;
        return this._write(e6, n2, o10), true;
      }
      setDefaultEncoding(e6) {
        return this;
      }
      end(e6, t5, r4) {
        const n2 = "function" == typeof e6 ? e6 : "function" == typeof t5 ? t5 : "function" == typeof r4 ? r4 : void 0;
        if (this.writableEnded)
          return n2 && n2(), this;
        const o10 = e6 === n2 ? void 0 : e6;
        if (o10) {
          const e7 = t5 === n2 ? void 0 : t5;
          this.write(o10, e7, n2);
        }
        return this.writableEnded = true, this.writableFinished = true, this.emit("close"), this.emit("finish"), this;
      }
      cork() {
      }
      uncork() {
      }
      destroy(e6) {
        return this.destroyed = true, delete this._data, this.removeAllListeners(), this;
      }
      compose(e6, t5) {
        throw new Error("[h3] Method not implemented.");
      }
    };
    ue4 = class {
      allowHalfOpen = true;
      _destroy;
      constructor(e6 = new ie4(), t5 = new ae4()) {
        Object.assign(this, e6), Object.assign(this, t5), this._destroy = function(...e7) {
          return function(...t6) {
            for (const r4 of e7)
              r4(...t6);
          };
        }(e6._destroy, t5._destroy);
      }
    };
    ce4 = getDuplex();
    fe3 = globalThis.Duplex || ce4;
    Socket = class extends fe3 {
      __unenv__ = true;
      bufferSize = 0;
      bytesRead = 0;
      bytesWritten = 0;
      connecting = false;
      destroyed = false;
      pending = false;
      localAddress = "";
      localPort = 0;
      remoteAddress = "";
      remoteFamily = "";
      remotePort = 0;
      autoSelectFamilyAttemptedAddresses = [];
      readyState = "readOnly";
      constructor(e6) {
        super();
      }
      write(e6, t5, r4) {
        return false;
      }
      connect(e6, t5, r4) {
        return this;
      }
      end(e6, t5, r4) {
        return this;
      }
      setEncoding(e6) {
        return this;
      }
      pause() {
        return this;
      }
      resume() {
        return this;
      }
      setTimeout(e6, t5) {
        return this;
      }
      setNoDelay(e6) {
        return this;
      }
      setKeepAlive(e6, t5) {
        return this;
      }
      address() {
        return {};
      }
      unref() {
        return this;
      }
      ref() {
        return this;
      }
      destroySoon() {
        this.destroy();
      }
      resetAndDestroy() {
        const e6 = new Error("ERR_SOCKET_CLOSED");
        return e6.code = "ERR_SOCKET_CLOSED", this.destroy(e6), this;
      }
    };
    IncomingMessage = class extends ie4 {
      __unenv__ = {};
      aborted = false;
      httpVersion = "1.1";
      httpVersionMajor = 1;
      httpVersionMinor = 1;
      complete = true;
      connection;
      socket;
      headers = {};
      trailers = {};
      method = "GET";
      url = "/";
      statusCode = 200;
      statusMessage = "";
      closed = false;
      errored = null;
      readable = false;
      constructor(e6) {
        super(), this.socket = this.connection = e6 || new Socket();
      }
      get rawHeaders() {
        return function(e6) {
          const t5 = [];
          for (const r4 in e6)
            if (Array.isArray(e6[r4]))
              for (const n2 of e6[r4])
                t5.push(r4, n2);
            else
              t5.push(r4, e6[r4]);
          return t5;
        }(this.headers);
      }
      get rawTrailers() {
        return [];
      }
      setTimeout(e6, t5) {
        return this;
      }
      get headersDistinct() {
        return _distinct(this.headers);
      }
      get trailersDistinct() {
        return _distinct(this.trailers);
      }
    };
    ServerResponse = class extends ae4 {
      __unenv__ = true;
      statusCode = 200;
      statusMessage = "";
      upgrading = false;
      chunkedEncoding = false;
      shouldKeepAlive = false;
      useChunkedEncodingByDefault = false;
      sendDate = false;
      finished = false;
      headersSent = false;
      strictContentLength = false;
      connection = null;
      socket = null;
      req;
      _headers = {};
      constructor(e6) {
        super(), this.req = e6;
      }
      assignSocket(e6) {
        e6._httpMessage = this, this.socket = e6, this.connection = e6, this.emit("socket", e6), this._flush();
      }
      _flush() {
        this.flushHeaders();
      }
      detachSocket(e6) {
      }
      writeContinue(e6) {
      }
      writeHead(e6, t5, r4) {
        e6 && (this.statusCode = e6), "string" == typeof t5 && (this.statusMessage = t5, t5 = void 0);
        const n2 = r4 || t5;
        if (n2)
          if (Array.isArray(n2))
            ;
          else
            for (const e7 in n2)
              this.setHeader(e7, n2[e7]);
        return this.headersSent = true, this;
      }
      writeProcessing() {
      }
      setTimeout(e6, t5) {
        return this;
      }
      appendHeader(e6, t5) {
        e6 = e6.toLowerCase();
        const r4 = this._headers[e6], n2 = [...Array.isArray(r4) ? r4 : [r4], ...Array.isArray(t5) ? t5 : [t5]].filter(Boolean);
        return this._headers[e6] = n2.length > 1 ? n2 : n2[0], this;
      }
      setHeader(e6, t5) {
        return this._headers[e6.toLowerCase()] = t5, this;
      }
      getHeader(e6) {
        return this._headers[e6.toLowerCase()];
      }
      getHeaders() {
        return this._headers;
      }
      getHeaderNames() {
        return Object.keys(this._headers);
      }
      hasHeader(e6) {
        return e6.toLowerCase() in this._headers;
      }
      removeHeader(e6) {
        delete this._headers[e6.toLowerCase()];
      }
      addTrailers(e6) {
      }
      flushHeaders() {
      }
      writeEarlyHints(e6, t5) {
        "function" == typeof t5 && t5();
      }
    };
    le4 = Object.defineProperty;
    __publicField$2 = (e6, t5, r4) => (((e7, t6, r5) => {
      t6 in e7 ? le4(e7, t6, { enumerable: true, configurable: true, writable: true, value: r5 }) : e7[t6] = r5;
    })(e6, "symbol" != typeof t5 ? t5 + "" : t5, r4), r4);
    H3Error = class extends Error {
      constructor(e6, t5 = {}) {
        super(e6, t5), __publicField$2(this, "statusCode", 500), __publicField$2(this, "fatal", false), __publicField$2(this, "unhandled", false), __publicField$2(this, "statusMessage"), __publicField$2(this, "data"), __publicField$2(this, "cause"), t5.cause && !this.cause && (this.cause = t5.cause);
      }
      toJSON() {
        const e6 = { message: this.message, statusCode: sanitizeStatusCode(this.statusCode, 500) };
        return this.statusMessage && (e6.statusMessage = sanitizeStatusMessage(this.statusMessage)), void 0 !== this.data && (e6.data = this.data), e6;
      }
    };
    __publicField$2(H3Error, "__h3_error__", true);
    he3 = getRequestHeader;
    de4 = Symbol.for("h3RawBody");
    pe4 = Symbol.for("h3ParsedBody");
    ye3 = ["PATCH", "POST", "PUT", "DELETE"];
    ge3 = { html: "text/html", json: "application/json" };
    me4 = /[^\u0009\u0020-\u007E]/g;
    we3 = "undefined" == typeof setImmediate ? (e6) => e6() : setImmediate;
    be3 = setResponseHeaders;
    _e3 = setResponseHeader;
    ve3 = /* @__PURE__ */ new Set(["PATCH", "POST", "PUT", "DELETE"]);
    Be2 = /* @__PURE__ */ new Set(["transfer-encoding", "connection", "keep-alive", "upgrade", "expect", "host", "accept"]);
    Ee3 = Object.defineProperty;
    __publicField = (e6, t5, r4) => (((e7, t6, r5) => {
      t6 in e7 ? Ee3(e7, t6, { enumerable: true, configurable: true, writable: true, value: r5 }) : e7[t6] = r5;
    })(e6, "symbol" != typeof t5 ? t5 + "" : t5, r4), r4);
    H3Event = class {
      constructor(e6, t5) {
        __publicField(this, "__is_event__", true), __publicField(this, "node"), __publicField(this, "web"), __publicField(this, "context", {}), __publicField(this, "_method"), __publicField(this, "_path"), __publicField(this, "_headers"), __publicField(this, "_requestBody"), __publicField(this, "_handled", false), __publicField(this, "_onBeforeResponseCalled"), __publicField(this, "_onAfterResponseCalled"), this.node = { req: e6, res: t5 };
      }
      get method() {
        return this._method || (this._method = (this.node.req.method || "GET").toUpperCase()), this._method;
      }
      get path() {
        return this._path || this.node.req.url || "/";
      }
      get headers() {
        return this._headers || (this._headers = function(e6) {
          const t5 = new Headers();
          for (const [r4, n2] of Object.entries(e6))
            if (Array.isArray(n2))
              for (const e7 of n2)
                t5.append(r4, e7);
            else
              n2 && t5.set(r4, n2);
          return t5;
        }(this.node.req.headers)), this._headers;
      }
      get handled() {
        return this._handled || this.node.res.writableEnded || this.node.res.headersSent;
      }
      respondWith(e6) {
        return Promise.resolve(e6).then((e7) => sendWebResponse(this, e7));
      }
      toString() {
        return `[${this.method}] ${this.path}`;
      }
      toJSON() {
        return this.toString();
      }
      get req() {
        return this.node.req;
      }
      get res() {
        return this.node.res;
      }
    };
    Re = defineEventHandler;
    lazyEventHandler = function(e6) {
      let t5, r4;
      const resolveHandler = () => r4 ? Promise.resolve(r4) : (t5 || (t5 = Promise.resolve(e6()).then((e7) => {
        const t6 = e7.default || e7;
        if ("function" != typeof t6)
          throw new TypeError("Invalid lazy handler result. It should be a function:", t6);
        return r4 = { handler: toEventHandler(e7.default || e7) }, r4;
      })), t5), n2 = Re((e7) => r4 ? r4.handler(e7) : resolveHandler().then((t6) => t6.handler(e7)));
      return n2.__resolve__ = resolveHandler, n2;
    };
    Ie2 = ["connect", "delete", "get", "head", "options", "post", "put", "trace", "patch"];
    FetchError = class extends Error {
      constructor(e6, t5) {
        super(e6, t5), this.name = "FetchError", t5?.cause && !this.cause && (this.cause = t5.cause);
      }
    };
    xe3 = new Set(Object.freeze(["PATCH", "POST", "PUT", "DELETE"]));
    Se2 = /* @__PURE__ */ new Set(["image/svg", "application/xml", "application/xhtml", "application/html"]);
    ke3 = /^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;
    Ae3 = /* @__PURE__ */ new Set([408, 409, 425, 429, 500, 502, 503, 504]);
    Te2 = /* @__PURE__ */ new Set([101, 204, 205, 304]);
    Ce3 = function() {
      if ("undefined" != typeof globalThis)
        return globalThis;
      if ("undefined" != typeof self)
        return self;
      if ("undefined" != typeof global)
        return global;
      throw new Error("unable to locate global object");
    }();
    $e2 = Ce3.fetch || (() => Promise.reject(new Error("[ofetch] global.fetch is not supported!")));
    Oe2 = Ce3.Headers;
    je2 = Ce3.AbortController;
    Le3 = createFetch$1({ fetch: $e2, Headers: Oe2, AbortController: je2 });
    Ne = Le3;
    Me3 = /* @__PURE__ */ new Set([101, 204, 205, 304]);
    Ue2 = { run: (e6) => e6() };
    He2 = void 0 !== console.createTask ? console.createTask : () => Ue2;
    Hookable = class {
      constructor() {
        this._hooks = {}, this._before = void 0, this._after = void 0, this._deprecatedMessages = void 0, this._deprecatedHooks = {}, this.hook = this.hook.bind(this), this.callHook = this.callHook.bind(this), this.callHookWith = this.callHookWith.bind(this);
      }
      hook(e6, t5, r4 = {}) {
        if (!e6 || "function" != typeof t5)
          return () => {
          };
        const n2 = e6;
        let o10;
        for (; this._deprecatedHooks[e6]; )
          o10 = this._deprecatedHooks[e6], e6 = o10.to;
        if (o10 && !r4.allowDeprecated) {
          let e7 = o10.message;
          e7 || (e7 = `${n2} hook has been deprecated` + (o10.to ? `, please use ${o10.to}` : "")), this._deprecatedMessages || (this._deprecatedMessages = /* @__PURE__ */ new Set()), this._deprecatedMessages.has(e7) || (console.warn(e7), this._deprecatedMessages.add(e7));
        }
        if (!t5.name)
          try {
            Object.defineProperty(t5, "name", { get: () => "_" + e6.replace(/\W+/g, "_") + "_hook_cb", configurable: true });
          } catch {
          }
        return this._hooks[e6] = this._hooks[e6] || [], this._hooks[e6].push(t5), () => {
          t5 && (this.removeHook(e6, t5), t5 = void 0);
        };
      }
      hookOnce(e6, t5) {
        let r4, _function = (...e7) => ("function" == typeof r4 && r4(), r4 = void 0, _function = void 0, t5(...e7));
        return r4 = this.hook(e6, _function), r4;
      }
      removeHook(e6, t5) {
        if (this._hooks[e6]) {
          const r4 = this._hooks[e6].indexOf(t5);
          -1 !== r4 && this._hooks[e6].splice(r4, 1), 0 === this._hooks[e6].length && delete this._hooks[e6];
        }
      }
      deprecateHook(e6, t5) {
        this._deprecatedHooks[e6] = "string" == typeof t5 ? { to: t5 } : t5;
        const r4 = this._hooks[e6] || [];
        delete this._hooks[e6];
        for (const t6 of r4)
          this.hook(e6, t6);
      }
      deprecateHooks(e6) {
        Object.assign(this._deprecatedHooks, e6);
        for (const t5 in e6)
          this.deprecateHook(t5, e6[t5]);
      }
      addHooks(e6) {
        const t5 = flatHooks(e6), r4 = Object.keys(t5).map((e7) => this.hook(e7, t5[e7]));
        return () => {
          for (const e7 of r4.splice(0, r4.length))
            e7();
        };
      }
      removeHooks(e6) {
        const t5 = flatHooks(e6);
        for (const e7 in t5)
          this.removeHook(e7, t5[e7]);
      }
      removeAllHooks() {
        for (const e6 in this._hooks)
          delete this._hooks[e6];
      }
      callHook(e6, ...t5) {
        return t5.unshift(e6), this.callHookWith(serialTaskCaller, e6, ...t5);
      }
      callHookParallel(e6, ...t5) {
        return t5.unshift(e6), this.callHookWith(parallelTaskCaller, e6, ...t5);
      }
      callHookWith(e6, t5, ...r4) {
        const n2 = this._before || this._after ? { name: t5, args: r4, context: {} } : void 0;
        this._before && callEachWith(this._before, n2);
        const o10 = e6(t5 in this._hooks ? [...this._hooks[t5]] : [], r4);
        return o10 instanceof Promise ? o10.finally(() => {
          this._after && n2 && callEachWith(this._after, n2);
        }) : (this._after && n2 && callEachWith(this._after, n2), o10);
      }
      beforeEach(e6) {
        return this._before = this._before || [], this._before.push(e6), () => {
          if (void 0 !== this._before) {
            const t5 = this._before.indexOf(e6);
            -1 !== t5 && this._before.splice(t5, 1);
          }
        };
      }
      afterEach(e6) {
        return this._after = this._after || [], this._after.push(e6), () => {
          if (void 0 !== this._after) {
            const t5 = this._after.indexOf(e6);
            -1 !== t5 && this._after.splice(t5, 1);
          }
        };
      }
    };
    Pe2 = /\d/;
    qe2 = ["-", "_", "/", "."];
    ze2 = /{{(.*?)}}/g;
    We2 = re4({ nuxt: {} });
    De3 = { app: { baseURL: "/", buildId: "5e32cc99-8cce-4c29-8eb2-841f2b1f7181", buildAssetsDir: "/_nuxt/", cdnURL: "" }, nitro: { envPrefix: "NUXT_", routeRules: { "/__nuxt_error": { cache: false }, "/_nuxt/builds/meta/**": { headers: { "cache-control": "public, max-age=31536000, immutable" } }, "/_nuxt/builds/**": { headers: { "cache-control": "public, max-age=1, immutable" } }, "/_nuxt/**": { headers: { "cache-control": "public, max-age=31536000, immutable" } } } }, public: {}, hub: { projectUrl: "https://nuxt-cloudflare-pages.pages.dev/", projectSecretKey: "53be9438-0575-43c1-9732-419f48fa0ec6", url: "https://admin.hub.nuxt.com", projectKey: "", userToken: "user_CobAczXRekUs73gYkAi2xHb3NPYpus", remote: "", remoteManifest: "", dir: ".data/hub", analytics: false, blob: false, cache: false, database: true, kv: false, version: "0.7.1", env: "production", openapi: false } };
    Fe3 = { prefix: "NITRO_", altPrefix: De3.nitro.envPrefix ?? B2.env.NITRO_ENV_PREFIX ?? "_", envExpansion: De3.nitro.envExpansion ?? B2.env.NITRO_ENV_EXPANSION ?? false };
    Ke2 = _deepFreeze(applyEnv(klona(De3), Fe3));
    _deepFreeze(klona(We2)), new Proxy(/* @__PURE__ */ Object.create(null), { get: (e6, t5) => {
      console.warn("Please use `useRuntimeConfig()` instead of accessing config directly.");
      const r4 = useRuntimeConfig2();
      if (t5 in r4)
        return r4[t5];
    } });
    Qe2 = "base64:";
    Ve2 = ["hasItem", "getItem", "getItemRaw", "setItem", "setItemRaw", "removeItem", "getMeta", "setMeta", "removeMeta", "getKeys", "clear", "mount", "unmount"];
    memory = () => {
      const e6 = /* @__PURE__ */ new Map();
      return { name: "memory", options: {}, hasItem: (t5) => e6.has(t5), getItem: (t5) => e6.get(t5) ?? null, getItemRaw: (t5) => e6.get(t5) ?? null, setItem(t5, r4) {
        e6.set(t5, r4);
      }, setItemRaw(t5, r4) {
        e6.set(t5, r4);
      }, removeItem(t5) {
        e6.delete(t5);
      }, getKeys: () => Array.from(e6.keys()), clear() {
        e6.clear();
      }, dispose() {
        e6.clear();
      } };
    };
    Je2 = {};
    normalizeKey3 = function(e6) {
      return e6 ? e6.split("?")[0].replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "") : "";
    };
    Ye2 = { getKeys: () => Promise.resolve(Object.keys(Je2)), hasItem: (e6) => (e6 = normalizeKey3(e6), Promise.resolve(e6 in Je2)), getItem: (e6) => (e6 = normalizeKey3(e6), Promise.resolve(Je2[e6] ? Je2[e6].import() : null)), getMeta: (e6) => (e6 = normalizeKey3(e6), Promise.resolve(Je2[e6] ? Je2[e6].meta : {})) };
    Ge2 = createStorage({});
    Ge2.mount("/assets", Ye2);
    Ze2 = { name: "_", base: "/cache", swr: true, maxAge: 1 };
    cachedFunction = function(e6, t5 = {}) {
      t5 = { ...Ze2, ...t5 };
      const r4 = {}, n2 = t5.group || "nitro/functions", o10 = t5.name || e6.name || "_", s4 = t5.integrity || hash([e6, t5]), i6 = t5.validate || ((e7) => void 0 !== e7.value);
      return async (...a4) => {
        if (await t5.shouldBypassCache?.(...a4))
          return e6(...a4);
        const u4 = await (t5.getKey || getKey)(...a4), c3 = await t5.shouldInvalidateCache?.(...a4), f3 = await async function(e7, a5, u5, c4) {
          const f4 = [t5.base, n2, o10, e7 + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
          let l4 = await useStorage().getItem(f4) || {};
          if ("object" != typeof l4) {
            l4 = {};
            const e8 = new Error("Malformed data read from cache.");
            console.error("[nitro] [cache]", e8), useNitroApp().captureError(e8, { event: c4, tags: ["cache"] });
          }
          const h4 = 1e3 * (t5.maxAge ?? t5.maxAge ?? 0);
          h4 && (l4.expires = Date.now() + h4);
          const d3 = u5 || l4.integrity !== s4 || h4 && Date.now() - (l4.mtime || 0) > h4 || false === i6(l4), p3 = d3 ? (async () => {
            const n3 = r4[e7];
            n3 || (void 0 !== l4.value && (t5.staleMaxAge || 0) >= 0 && false === t5.swr && (l4.value = void 0, l4.integrity = void 0, l4.mtime = void 0, l4.expires = void 0), r4[e7] = Promise.resolve(a5()));
            try {
              l4.value = await r4[e7];
            } catch (t6) {
              throw n3 || delete r4[e7], t6;
            }
            if (!n3 && (l4.mtime = Date.now(), l4.integrity = s4, delete r4[e7], false !== i6(l4))) {
              const e8 = useStorage().setItem(f4, l4).catch((e9) => {
                console.error("[nitro] [cache] Cache write error.", e9), useNitroApp().captureError(e9, { event: c4, tags: ["cache"] });
              });
              c4 && c4.waitUntil && c4.waitUntil(e8);
            }
          })() : Promise.resolve();
          return void 0 === l4.value ? await p3 : d3 && c4 && c4.waitUntil && c4.waitUntil(p3), t5.swr && false !== i6(l4) ? (p3.catch((e8) => {
            console.error("[nitro] [cache] SWR handler error.", e8), useNitroApp().captureError(e8, { event: c4, tags: ["cache"] });
          }), l4) : p3.then(() => l4);
        }(u4, () => e6(...a4), c3, a4[0] && isEvent(a4[0]) ? a4[0] : void 0);
        let l3 = f3.value;
        return t5.transform && (l3 = await t5.transform(f3, ...a4) || l3), l3;
      };
    };
    cachedEventHandler = function(e6, t5 = Ze2) {
      const r4 = (t5.varies || []).filter(Boolean).map((e7) => e7.toLowerCase()).sort(), n2 = { ...t5, getKey: async (e7) => {
        const n3 = await t5.getKey?.(e7);
        if (n3)
          return escapeKey(n3);
        const o11 = e7.node.req.originalUrl || e7.node.req.url || e7.path;
        return [`${escapeKey(decodeURI(parseURL(o11).pathname)).slice(0, 16) || "index"}.${hash(o11)}`, ...r4.map((t6) => [t6, e7.node.req.headers[t6]]).map(([e8, t6]) => `${escapeKey(e8)}.${hash(t6)}`)].join(":");
      }, validate: (e7) => !!e7.value && (!(e7.value.code >= 400) && (void 0 !== e7.value.body && ("undefined" !== e7.value.headers.etag && "undefined" !== e7.value.headers["last-modified"]))), group: t5.group || "nitro/handlers", integrity: t5.integrity || hash([e6, t5]) }, o10 = cachedFunction(async (o11) => {
        const s4 = {};
        for (const e7 of r4)
          s4[e7] = o11.node.req.headers[e7];
        const i6 = cloneWithProxy(o11.node.req, { headers: s4 }), a4 = {};
        let u4;
        const c3 = createEvent(i6, cloneWithProxy(o11.node.res, { statusCode: 200, writableEnded: false, writableFinished: false, headersSent: false, closed: false, getHeader: (e7) => a4[e7], setHeader(e7, t6) {
          return a4[e7] = t6, this;
        }, getHeaderNames: () => Object.keys(a4), hasHeader: (e7) => e7 in a4, removeHeader(e7) {
          delete a4[e7];
        }, getHeaders: () => a4, end(e7, t6, r5) {
          return "string" == typeof e7 && (u4 = e7), "function" == typeof t6 && t6(), "function" == typeof r5 && r5(), this;
        }, write(e7, t6, r5) {
          return "string" == typeof e7 && (u4 = e7), "function" == typeof t6 && t6(), "function" == typeof r5 && r5(), this;
        }, writeHead(e7, t6) {
          if (this.statusCode = e7, t6)
            for (const e8 in t6)
              this.setHeader(e8, t6[e8]);
          return this;
        } }));
        c3.fetch = (e7, t6) => fetchWithEvent(c3, e7, t6, { fetch: useNitroApp().localFetch }), c3.$fetch = (e7, t6) => fetchWithEvent(c3, e7, t6, { fetch: globalThis.$fetch }), c3.context = o11.context, c3.context.cache = { options: n2 };
        const f3 = await e6(c3) || u4, l3 = c3.node.res.getHeaders();
        l3.etag = String(l3.Etag || l3.etag || `W/"${hash(f3)}"`), l3["last-modified"] = String(l3["Last-Modified"] || l3["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString());
        const h4 = [];
        t5.swr ? (t5.maxAge && h4.push(`s-maxage=${t5.maxAge}`), t5.staleMaxAge ? h4.push(`stale-while-revalidate=${t5.staleMaxAge}`) : h4.push("stale-while-revalidate")) : t5.maxAge && h4.push(`max-age=${t5.maxAge}`), h4.length > 0 && (l3["cache-control"] = h4.join(", "));
        return { code: c3.node.res.statusCode, headers: l3, body: f3 };
      }, n2);
      return defineEventHandler(async (r5) => {
        if (t5.headersOnly) {
          if (handleCacheHeaders(r5, { maxAge: t5.maxAge }))
            return;
          return e6(r5);
        }
        const n3 = await o10(r5);
        if (r5.node.res.headersSent || r5.node.res.writableEnded)
          return n3.body;
        if (!handleCacheHeaders(r5, { modifiedTime: new Date(n3.headers["last-modified"]), etag: n3.headers.etag, maxAge: t5.maxAge })) {
          r5.node.res.statusCode = n3.code;
          for (const e7 in n3.headers) {
            const t6 = n3.headers[e7];
            "set-cookie" === e7 ? r5.node.res.appendHeader(e7, splitCookiesString(t6)) : r5.node.res.setHeader(e7, t6);
          }
          return n3.body;
        }
      });
    };
    Xe2 = toRouteMatcher(createRouter$1({ routes: useRuntimeConfig2().nitro.routeRules }));
    et2 = [];
    errorHandler = async function(e6, t5) {
      const { stack: r4, statusCode: n2, statusMessage: o10, message: s4 } = function(e7) {
        const t6 = "function" == typeof B2.cwd ? B2.cwd() : "/", r5 = (e7.stack || "").split("\n").splice(1).filter((e8) => e8.includes("at ")).map((e8) => ({ text: e8.replace(t6 + "/", "./").replace("webpack:/", "").replace("file://", "").trim(), internal: e8.includes("node_modules") && !e8.includes(".cache") || e8.includes("internal") || e8.includes("new Promise") })), n3 = e7.statusCode || 500, o11 = e7.statusMessage ?? (404 === n3 ? "Not Found" : ""), s5 = e7.message || e7.toString();
        return { stack: r5, statusCode: n3, statusMessage: o11, message: s5 };
      }(e6), i6 = { url: t5.path, statusCode: n2, statusMessage: o10, message: s4, stack: "", data: e6.data };
      if (e6.unhandled || e6.fatal) {
        const t6 = ["[nuxt]", "[request error]", e6.unhandled && "[unhandled]", e6.fatal && "[fatal]", 200 !== Number(i6.statusCode) && `[${i6.statusCode}]`].filter(Boolean).join(" ");
        console.error(t6, i6.message + "\n" + r4.map((e7) => "  " + e7.text).join("  \n"));
      }
      if (t5.handled)
        return;
      if (setResponseStatus(t5, 200 !== i6.statusCode && i6.statusCode || 500, i6.statusMessage), function(e7) {
        if (hasReqHeader(e7, "accept", "text/html"))
          return false;
        return hasReqHeader(e7, "accept", "application/json") || hasReqHeader(e7, "user-agent", "curl/") || hasReqHeader(e7, "user-agent", "httpie/") || hasReqHeader(e7, "sec-fetch-mode", "cors") || e7.path.startsWith("/api/") || e7.path.endsWith(".json");
      }(t5))
        return setResponseHeader(t5, "Content-Type", "application/json"), send(t5, JSON.stringify(i6));
      const a4 = getRequestHeaders(t5), u4 = t5.path.startsWith("/__nuxt_error") || !!a4["x-nuxt-error"] ? null : await useNitroApp().localFetch(withQuery(joinURL(useRuntimeConfig2(t5).app.baseURL, "/__nuxt_error"), i6), { headers: { ...a4, "x-nuxt-error": "true" }, redirect: "manual" }).catch(() => null);
      if (!u4) {
        const { template: e7 } = await Promise.resolve().then(() => (init_error_500(), error_500_exports));
        if (t5.handled)
          return;
        return setResponseHeader(t5, "Content-Type", "text/html;charset=UTF-8"), send(t5, e7(i6));
      }
      const c3 = await u4.text();
      if (!t5.handled) {
        for (const [e7, r5] of u4.headers.entries())
          setResponseHeader(t5, e7, r5);
        return setResponseStatus(t5, u4.status && 200 !== u4.status ? u4.status : void 0, u4.statusText), send(t5, c3);
      }
    };
    _lazy_lFs6nj = () => Promise.resolve().then(() => (init_renderer(), renderer_exports)).then(function(e6) {
      return e6.P;
    });
    tt2 = [{ route: "/api/_hub/**:feature", handler: () => Promise.resolve().then(() => (init_feature(), feature_exports)), lazy: true, middleware: false, method: void 0 }, { route: "/api/_hub", handler: () => Promise.resolve().then(() => (init_index_head(), index_head_exports)), lazy: true, middleware: false, method: "head" }, { route: "/api/_hub/manifest", handler: () => Promise.resolve().then(() => (init_manifest_get(), manifest_get_exports)), lazy: true, middleware: false, method: "get" }, { route: "/api/_hub/openapi", handler: () => Promise.resolve().then(() => (init_openapi_get(), openapi_get_exports)), lazy: true, middleware: false, method: "get" }, { route: "/api/_hub/database/:command", handler: () => Promise.resolve().then(() => (init_command_post(), command_post_exports)), lazy: true, middleware: false, method: "post" }, { route: "/api/_hub/database/query", handler: () => Promise.resolve().then(() => (init_query_options(), query_options_exports)), lazy: true, middleware: false, method: "options" }, { route: "/api/_hub/database/query", handler: () => Promise.resolve().then(() => (init_query_post(), query_post_exports)), lazy: true, middleware: false, method: "post" }, { route: "/__nuxt_error", handler: _lazy_lFs6nj, lazy: true, middleware: false, method: void 0 }, { route: "/**", handler: _lazy_lFs6nj, lazy: true, middleware: false, method: void 0 }];
    rt2 = function() {
      const e6 = useRuntimeConfig2(), t5 = createHooks(), captureError = (e7, r5 = {}) => {
        const n3 = t5.callHookParallel("error", e7, r5).catch((e8) => {
          console.error("Error while capturing another error", e8);
        });
        if (r5.event && isEvent(r5.event)) {
          const t6 = r5.event.context.nitro?.errors;
          t6 && t6.push({ error: e7, context: r5 }), r5.event.waitUntil && r5.event.waitUntil(n3);
        }
      }, r4 = createApp2({ debug: destr(false), onError: (e7, t6) => (captureError(e7, { event: t6, tags: ["request"] }), errorHandler(e7, t6)), onRequest: async (e7) => {
        await rt2.hooks.callHook("request", e7).catch((t6) => {
          captureError(t6, { event: e7, tags: ["request"] });
        });
      }, onBeforeResponse: async (e7, t6) => {
        await rt2.hooks.callHook("beforeResponse", e7, t6).catch((t7) => {
          captureError(t7, { event: e7, tags: ["request", "response"] });
        });
      }, onAfterResponse: async (e7, t6) => {
        await rt2.hooks.callHook("afterResponse", e7, t6).catch((t7) => {
          captureError(t7, { event: e7, tags: ["request", "response"] });
        });
      } }), n2 = function(e7 = {}) {
        const t6 = createRouter$1({}), r5 = {};
        let n3;
        const o11 = {}, addRoute = (e8, n4, s6) => {
          let i7 = r5[e8];
          if (i7 || (r5[e8] = i7 = { path: e8, handlers: {} }, t6.insert(e8, i7)), Array.isArray(s6))
            for (const t7 of s6)
              addRoute(e8, n4, t7);
          else
            i7.handlers[s6] = toEventHandler(n4, 0, e8);
          return o11;
        };
        o11.use = o11.add = (e8, t7, r6) => addRoute(e8, t7, r6 || "all");
        for (const e8 of Ie2)
          o11[e8] = (t7, r6) => o11.add(t7, r6, e8);
        const matchHandler = (e8 = "/", r6 = "get") => {
          const o12 = e8.indexOf("?");
          -1 !== o12 && (e8 = e8.slice(0, Math.max(0, o12)));
          const s6 = t6.lookup(e8);
          if (!s6 || !s6.handlers)
            return { error: createError({ statusCode: 404, name: "Not Found", statusMessage: `Cannot find any route matching ${e8 || "/"}.` }) };
          let i7 = s6.handlers[r6] || s6.handlers.all;
          if (!i7) {
            n3 || (n3 = toRouteMatcher(t6));
            const o13 = n3.matchAll(e8).reverse();
            for (const e9 of o13) {
              if (e9.handlers[r6]) {
                i7 = e9.handlers[r6], s6.handlers[r6] = s6.handlers[r6] || i7;
                break;
              }
              if (e9.handlers.all) {
                i7 = e9.handlers.all, s6.handlers.all = s6.handlers.all || i7;
                break;
              }
            }
          }
          return i7 ? { matched: s6, handler: i7 } : { error: createError({ statusCode: 405, name: "Method Not Allowed", statusMessage: `Method ${r6} is not allowed on this route.` }) };
        }, s5 = e7.preemptive || e7.preemtive;
        return o11.handler = Re((e8) => {
          const t7 = matchHandler(e8.path, e8.method.toLowerCase());
          if ("error" in t7) {
            if (s5)
              throw t7.error;
            return;
          }
          e8.context.matchedRoute = t7.matched;
          const r6 = t7.matched.params || {};
          return e8.context.params = r6, Promise.resolve(t7.handler(e8)).then((e9) => void 0 === e9 && s5 ? null : e9);
        }), o11.handler.__resolve__ = async (e8) => {
          e8 = withLeadingSlash(e8);
          const t7 = matchHandler(e8);
          if ("error" in t7)
            return;
          let r6 = { route: t7.matched.path, handler: t7.handler };
          if (t7.handler.__resolve__) {
            const n4 = await t7.handler.__resolve__(e8);
            if (!n4)
              return;
            r6 = { ...r6, ...n4 };
          }
          return r6;
        }, o11;
      }({ preemptive: true }), o10 = (s4 = toNodeListener(r4), function(e7) {
        const t6 = new IncomingMessage(), r5 = new ServerResponse(t6);
        if (t6.url = e7.url || "/", t6.method = e7.method || "GET", t6.headers = {}, e7.headers) {
          const r6 = "function" == typeof e7.headers.entries ? e7.headers.entries() : Object.entries(e7.headers);
          for (const [e8, n3] of r6)
            n3 && (t6.headers[e8.toLowerCase()] = n3);
        }
        return t6.headers.host = t6.headers.host || e7.host || "localhost", t6.connection.encrypted = t6.connection.encrypted || "https" === e7.protocol, t6.body = e7.body || null, t6.__unenv__ = e7.context, s4(t6, r5).then(() => {
          let e8 = r5._data;
          (Me3.has(r5.statusCode) || "HEAD" === t6.method.toUpperCase()) && (e8 = null, delete r5._headers["content-length"]);
          const n3 = { body: e8, headers: r5._headers, status: r5.statusCode, statusText: r5.statusMessage };
          return t6.destroy(), r5.destroy(), n3;
        });
      });
      var s4;
      const i6 = function(e7, t6 = global.fetch) {
        return async function(r5, n3) {
          const o11 = r5.toString();
          if (!o11.startsWith("/"))
            return t6(o11, n3);
          try {
            const t7 = await e7({ url: o11, ...n3 });
            return new Response(t7.body, { status: t7.status, statusText: t7.statusText, headers: Object.fromEntries(Object.entries(t7.headers).map(([e8, t8]) => [e8, Array.isArray(t8) ? t8.join(",") : String(t8) || ""])) });
          } catch (e8) {
            return new Response(e8.toString(), { status: Number.parseInt(e8.statusCode || e8.code) || 500, statusText: e8.statusText });
          }
        };
      }(o10, globalThis.fetch), localFetch = (e7, t6) => i6(e7, t6).then((e8) => function(e9) {
        if (!e9.headers.has("set-cookie"))
          return e9;
        return new Response(e9.body, { status: e9.status, statusText: e9.statusText, headers: normalizeCookieHeaders(e9.headers) });
      }(e8)), a4 = createFetch$1({ fetch: localFetch, Headers: Oe2, defaults: { baseURL: e6.app.baseURL } });
      globalThis.$fetch = a4, r4.use(createRouteRulesHandler({ localFetch })), r4.use(Re((e7) => {
        e7.context.nitro = e7.context.nitro || { errors: [] };
        const t6 = e7.node.req?.__unenv__;
        t6 && Object.assign(e7.context, t6), e7.fetch = (t7, r5) => fetchWithEvent(e7, t7, r5, { fetch: localFetch }), e7.$fetch = (t7, r5) => fetchWithEvent(e7, t7, r5, { fetch: a4 }), e7.waitUntil = (r5) => {
          e7.context.nitro._waitUntilPromises || (e7.context.nitro._waitUntilPromises = []), e7.context.nitro._waitUntilPromises.push(r5), t6?.waitUntil && t6.waitUntil(r5);
        }, e7.captureError = (t7, r5) => {
          captureError(t7, { event: e7, ...r5 });
        };
      }));
      for (const t6 of tt2) {
        let o11 = t6.lazy ? lazyEventHandler(t6.handler) : t6.handler;
        if (t6.middleware || !t6.route) {
          const n3 = (e6.app.baseURL + (t6.route || "/")).replace(/\/+/g, "/");
          r4.use(n3, o11);
        } else {
          const e7 = getRouteRulesForPath(t6.route.replace(/:\w+|\*\*/g, "_"));
          e7.cache && (o11 = cachedEventHandler(o11, { group: "nitro/routes", ...e7.cache })), n2.use(t6.route, o11, t6.method);
        }
      }
      r4.use(e6.app.baseURL, n2.handler);
      const u4 = { hooks: t5, h3App: r4, router: n2, localCall: o10, localFetch, captureError };
      for (const e7 of et2)
        try {
          e7(u4);
        } catch (e8) {
          throw captureError(e8, { tags: ["plugin"] }), e8;
        }
      return u4;
    }();
    useNitroApp = () => rt2;
    nt2 = /post|put|patch/i;
    ot2 = { "/favicon.ico": { type: "image/vnd.microsoft.icon", etag: '"10be-n8egyE9tcb7sKGr/pYCaQ4uWqxI"', mtime: "2024-08-09T08:56:21.000Z", size: 4286, path: "../favicon.ico" }, "/hub.config.json": { type: "application/json", etag: '"5e-KzUs8g0nS3c1foneV0x/fB06IAY"', mtime: "2024-08-14T23:18:00.822Z", size: 94, path: "../hub.config.json" }, "/robots.txt": { type: "text/plain; charset=utf-8", etag: '"1-rcg7GeeTSRscbqD9i0bNnzLlkvw"', mtime: "2024-08-09T08:56:21.000Z", size: 1, path: "../robots.txt" }, "/_nuxt/B6hI22md.js": { type: "text/javascript; charset=utf-8", etag: '"200e-twzxl4z3I6MGk4KgENhX7UcxlOU"', mtime: "2024-08-14T23:17:59.732Z", size: 8206, path: "../_nuxt/B6hI22md.js" }, "/_nuxt/BHSjwYJc.js": { type: "text/javascript; charset=utf-8", etag: '"ab3-ktbhRE75QnS2bYKEthmjVIEJ4Pg"', mtime: "2024-08-14T23:17:59.730Z", size: 2739, path: "../_nuxt/BHSjwYJc.js" }, "/_nuxt/Dg5t7qGw.js": { type: "text/javascript; charset=utf-8", etag: '"3468f-dzdpvyI0CAcrovZloW33F+Kk5aY"', mtime: "2024-08-14T23:17:59.733Z", size: 214671, path: "../_nuxt/Dg5t7qGw.js" }, "/_nuxt/entry.ASuS4Yfc.css": { type: "text/css; charset=utf-8", etag: '"306b-Ozpy2lrT1zN6CK8aQB6lq3rPLfI"', mtime: "2024-08-14T23:17:59.730Z", size: 12395, path: "../_nuxt/entry.ASuS4Yfc.css" }, "/_nuxt/error-404.CjGVuf6H.css": { type: "text/css; charset=utf-8", etag: '"de4-SLOwa5sHvQIi2t5fYZEgfDusMUc"', mtime: "2024-08-14T23:17:59.729Z", size: 3556, path: "../_nuxt/error-404.CjGVuf6H.css" }, "/_nuxt/error-500.DFBAsgKS.css": { type: "text/css; charset=utf-8", etag: '"75c-I8wgoT19gdl/gPtizNKXfkn+TtQ"', mtime: "2024-08-14T23:17:59.732Z", size: 1884, path: "../_nuxt/error-500.DFBAsgKS.css" }, "/_nuxt/builds/latest.json": { type: "application/json", etag: '"47-mHNCeRkDeir86cbvVoJhbHMyoI8"', mtime: "2024-08-14T23:18:00.783Z", size: 71, path: "../_nuxt/builds/latest.json" }, "/_nuxt/builds/meta/5e32cc99-8cce-4c29-8eb2-841f2b1f7181.json": { type: "application/json", etag: '"8b-yHBOhl++j+O2NSz4ujKVcUWgALY"', mtime: "2024-08-14T23:18:00.783Z", size: 139, path: "../_nuxt/builds/meta/5e32cc99-8cce-4c29-8eb2-841f2b1f7181.json" } };
    st2 = { "/_nuxt/builds/meta/": { maxAge: 31536e3 }, "/_nuxt/builds/": { maxAge: 1 }, "/_nuxt/": { maxAge: 31536e3 } };
    it2 = { async fetch(e6, t5, r4) {
      const n2 = new URL(e6.url);
      if (t5.ASSETS && function(e7 = "") {
        if (ot2[e7])
          return true;
        for (const t6 in st2)
          if (e7.startsWith(t6))
            return true;
        return false;
      }(n2.pathname))
        return t5.ASSETS.fetch(e6);
      let o10;
      return function(e7) {
        return nt2.test(e7.method);
      }(e6) && (o10 = f2.from(await e6.arrayBuffer())), globalThis.__env__ = t5, rt2.localFetch(n2.pathname + n2.search, { context: { cf: e6.cf, waitUntil: (e7) => r4.waitUntil(e7), cloudflare: { request: e6, env: t5, context: r4 } }, host: n2.hostname, protocol: n2.protocol, method: e6.method, headers: e6.headers, body: o10 });
    }, scheduled(e6, t5, r4) {
    } };
  }
});

// .wrangler/tmp/bundle-uU6433/middleware-loader.entry.ts
init_checked_fetch();
init_modules_watch_stub();

// .wrangler/tmp/bundle-uU6433/middleware-insertion-facade.js
init_checked_fetch();
init_modules_watch_stub();

// .wrangler/tmp/pages-WENPGt/rszribcubv.js
init_checked_fetch();
init_modules_watch_stub();

// .wrangler/tmp/pages-WENPGt/bundledWorker-0.6622821316124494.mjs
init_checked_fetch();
init_modules_watch_stub();
init_runtime();
globalThis._importMeta_ = { url: "file:///_entry.js", env: {} };

// node_modules/wrangler/templates/pages-dev-util.ts
init_checked_fetch();
init_modules_watch_stub();
function isRoutingRuleMatch(pathname, routingRule) {
  if (!pathname) {
    throw new Error("Pathname is undefined.");
  }
  if (!routingRule) {
    throw new Error("Routing rule is undefined.");
  }
  const ruleRegExp = transformRoutingRuleToRegExp(routingRule);
  return pathname.match(ruleRegExp) !== null;
}
function transformRoutingRuleToRegExp(rule) {
  let transformedRule;
  if (rule === "/" || rule === "/*") {
    transformedRule = rule;
  } else if (rule.endsWith("/*")) {
    transformedRule = `${rule.substring(0, rule.length - 2)}(/*)?`;
  } else if (rule.endsWith("/")) {
    transformedRule = `${rule.substring(0, rule.length - 1)}(/)?`;
  } else if (rule.endsWith("*")) {
    transformedRule = rule;
  } else {
    transformedRule = `${rule}(/)?`;
  }
  transformedRule = `^${transformedRule.replaceAll(/\./g, "\\.").replaceAll(/\*/g, ".*")}$`;
  return new RegExp(transformedRule);
}

// .wrangler/tmp/pages-WENPGt/rszribcubv.js
var define_ROUTES_default = {
  version: 1,
  include: [
    "/*"
  ],
  exclude: [
    "/_nuxt/*",
    "/favicon.ico",
    "/hub.config.json",
    "/robots.txt"
  ]
};
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
        if (it2.fetch === void 0) {
          throw new TypeError("Entry point missing `fetch` handler");
        }
        return it2.fetch(request, env, context);
      }
    }
    return env.ASSETS.fetch(request);
  }
};

// node_modules/wrangler/templates/middleware/middleware-ensure-req-body-drained.ts
init_checked_fetch();
init_modules_watch_stub();
var drainBody = async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } finally {
    try {
      if (request.body !== null && !request.bodyUsed) {
        const reader = request.body.getReader();
        while (!(await reader.read()).done) {
        }
      }
    } catch (e6) {
      console.error("Failed to drain the unused request body.", e6);
    }
  }
};
var middleware_ensure_req_body_drained_default = drainBody;

// node_modules/wrangler/templates/middleware/middleware-miniflare3-json-error.ts
init_checked_fetch();
init_modules_watch_stub();
function reduceError(e6) {
  return {
    name: e6?.name,
    message: e6?.message ?? String(e6),
    stack: e6?.stack,
    cause: e6?.cause === void 0 ? void 0 : reduceError(e6.cause)
  };
}
var jsonError = async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } catch (e6) {
    const error = reduceError(e6);
    return Response.json(error, {
      status: 500,
      headers: { "MF-Experimental-Error-Stack": "true" }
    });
  }
};
var middleware_miniflare3_json_error_default = jsonError;

// .wrangler/tmp/bundle-uU6433/middleware-insertion-facade.js
var __INTERNAL_WRANGLER_MIDDLEWARE__ = [
  middleware_ensure_req_body_drained_default,
  middleware_miniflare3_json_error_default
];
var middleware_insertion_facade_default = pages_dev_pipeline_default;

// node_modules/wrangler/templates/middleware/common.ts
init_checked_fetch();
init_modules_watch_stub();
var __facade_middleware__ = [];
function __facade_register__(...args) {
  __facade_middleware__.push(...args.flat());
}
function __facade_invokeChain__(request, env, ctx, dispatch, middlewareChain) {
  const [head, ...tail] = middlewareChain;
  const middlewareCtx = {
    dispatch,
    next(newRequest, newEnv) {
      return __facade_invokeChain__(newRequest, newEnv, ctx, dispatch, tail);
    }
  };
  return head(request, env, ctx, middlewareCtx);
}
function __facade_invoke__(request, env, ctx, dispatch, finalMiddleware) {
  return __facade_invokeChain__(request, env, ctx, dispatch, [
    ...__facade_middleware__,
    finalMiddleware
  ]);
}

// .wrangler/tmp/bundle-uU6433/middleware-loader.entry.ts
var __Facade_ScheduledController__ = class {
  constructor(scheduledTime, cron, noRetry) {
    this.scheduledTime = scheduledTime;
    this.cron = cron;
    this.#noRetry = noRetry;
  }
  #noRetry;
  noRetry() {
    if (!(this instanceof __Facade_ScheduledController__)) {
      throw new TypeError("Illegal invocation");
    }
    this.#noRetry();
  }
};
function wrapExportedHandler(worker) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return worker;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  const fetchDispatcher = function(request, env, ctx) {
    if (worker.fetch === void 0) {
      throw new Error("Handler does not export a fetch() function.");
    }
    return worker.fetch(request, env, ctx);
  };
  return {
    ...worker,
    fetch(request, env, ctx) {
      const dispatcher = function(type, init) {
        if (type === "scheduled" && worker.scheduled !== void 0) {
          const controller = new __Facade_ScheduledController__(
            Date.now(),
            init.cron ?? "",
            () => {
            }
          );
          return worker.scheduled(controller, env, ctx);
        }
      };
      return __facade_invoke__(request, env, ctx, dispatcher, fetchDispatcher);
    }
  };
}
function wrapWorkerEntrypoint(klass) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return klass;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  return class extends klass {
    #fetchDispatcher = (request, env, ctx) => {
      this.env = env;
      this.ctx = ctx;
      if (super.fetch === void 0) {
        throw new Error("Entrypoint class does not define a fetch() function.");
      }
      return super.fetch(request);
    };
    #dispatcher = (type, init) => {
      if (type === "scheduled" && super.scheduled !== void 0) {
        const controller = new __Facade_ScheduledController__(
          Date.now(),
          init.cron ?? "",
          () => {
          }
        );
        return super.scheduled(controller);
      }
    };
    fetch(request) {
      return __facade_invoke__(
        request,
        this.env,
        this.ctx,
        this.#dispatcher,
        this.#fetchDispatcher
      );
    }
  };
}
var WRAPPED_ENTRY;
if (typeof middleware_insertion_facade_default === "object") {
  WRAPPED_ENTRY = wrapExportedHandler(middleware_insertion_facade_default);
} else if (typeof middleware_insertion_facade_default === "function") {
  WRAPPED_ENTRY = wrapWorkerEntrypoint(middleware_insertion_facade_default);
}
var middleware_loader_entry_default = WRAPPED_ENTRY;
export {
  __INTERNAL_WRANGLER_MIDDLEWARE__,
  middleware_loader_entry_default as default
};
//# sourceMappingURL=rszribcubv.js.map
