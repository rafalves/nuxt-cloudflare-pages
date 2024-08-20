var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __esm = (fn2, res) => function __init() {
  return fn2 && (res = (0, fn2[__getOwnPropNames(fn2)[0]])(fn2 = 0)), res;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// .wrangler/tmp/bundle-VlRZIB/checked-fetch.js
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
  ".wrangler/tmp/bundle-VlRZIB/checked-fetch.js"() {
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

// .wrangler/tmp/pages-FEt2Fg/chunks/_/error-500.mjs
var error_500_exports = {};
__export(error_500_exports, {
  template: () => template
});
var e, template;
var init_error_500 = __esm({
  ".wrangler/tmp/pages-FEt2Fg/chunks/_/error-500.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    e = { appName: "Nuxt", version: "", statusCode: 500, statusMessage: "Server error", description: "This page is temporarily unavailable." };
    template = (t4) => '<!DOCTYPE html><html lang="en"><head><title>' + (t4 = { ...e, ...t4 }).statusCode + " - " + t4.statusMessage + " | " + t4.appName + `</title><meta charset="utf-8"><meta content="width=device-width,initial-scale=1,minimum-scale=1" name="viewport"><style>.spotlight{background:linear-gradient(45deg, #00DC82 0%, #36E4DA 50%, #0047E1 100%);filter:blur(20vh)}*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:var(--un-default-border-color, #e5e7eb)}:before,:after{--un-content:""}html{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{margin:0;line-height:inherit}h1{font-size:inherit;font-weight:inherit}h1,p{margin:0}*,:before,:after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / .5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }.fixed{position:fixed}.-bottom-1\\/2{bottom:-50%}.left-0{left:0}.right-0{right:0}.grid{display:grid}.mb-16{margin-bottom:4rem}.mb-8{margin-bottom:2rem}.h-1\\/2{height:50%}.max-w-520px{max-width:520px}.min-h-screen{min-height:100vh}.place-content-center{place-content:center}.overflow-hidden{overflow:hidden}.bg-white{--un-bg-opacity:1;background-color:rgb(255 255 255 / var(--un-bg-opacity))}.px-8{padding-left:2rem;padding-right:2rem}.text-center{text-align:center}.text-8xl{font-size:6rem;line-height:1}.text-xl{font-size:1.25rem;line-height:1.75rem}.text-black{--un-text-opacity:1;color:rgb(0 0 0 / var(--un-text-opacity))}.font-light{font-weight:300}.font-medium{font-weight:500}.leading-tight{line-height:1.25}.font-sans{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji"}.antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}@media (prefers-color-scheme: dark){.dark\\:bg-black{--un-bg-opacity:1;background-color:rgb(0 0 0 / var(--un-bg-opacity))}.dark\\:text-white{--un-text-opacity:1;color:rgb(255 255 255 / var(--un-text-opacity))}}@media (min-width: 640px){.sm\\:px-0{padding-left:0;padding-right:0}.sm\\:text-4xl{font-size:2.25rem;line-height:2.5rem}}</style><script>(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();<\/script></head><body class="font-sans antialiased bg-white dark:bg-black text-black dark:text-white grid min-h-screen place-content-center overflow-hidden"><div class="fixed -bottom-1/2 left-0 right-0 h-1/2 spotlight"></div><div class="max-w-520px text-center"><h1 class="text-8xl sm:text-10xl font-medium mb-8">` + t4.statusCode + '</h1><p class="text-xl px-8 sm:px-0 sm:text-4xl font-light mb-16 leading-tight">' + t4.description + "</p></div></body></html>";
  }
});

// .wrangler/tmp/pages-FEt2Fg/chunks/build/client.manifest.mjs
var client_manifest_exports = {};
__export(client_manifest_exports, {
  default: () => e2
});
var e2;
var init_client_manifest = __esm({
  ".wrangler/tmp/pages-FEt2Fg/chunks/build/client.manifest.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    e2 = { "_BAKNzro0.js": { resourceType: "script", module: true, prefetch: true, preload: true, file: "BAKNzro0.js", name: "_plugin-vue_export-helper", imports: ["node_modules/nuxt/dist/app/entry.js"] }, "node_modules/nuxt/dist/app/components/error-404.vue": { resourceType: "script", module: true, prefetch: true, preload: true, file: "BWTkOzGX.js", name: "error-404", src: "node_modules/nuxt/dist/app/components/error-404.vue", isDynamicEntry: true, imports: ["node_modules/nuxt/dist/app/entry.js", "_BAKNzro0.js"], css: [] }, "error-404.CjGVuf6H.css": { file: "error-404.CjGVuf6H.css", resourceType: "style", prefetch: true, preload: true }, "node_modules/nuxt/dist/app/components/error-500.vue": { resourceType: "script", module: true, prefetch: true, preload: true, file: "COS2-k3p.js", name: "error-500", src: "node_modules/nuxt/dist/app/components/error-500.vue", isDynamicEntry: true, imports: ["_BAKNzro0.js", "node_modules/nuxt/dist/app/entry.js"], css: [] }, "error-500.DFBAsgKS.css": { file: "error-500.DFBAsgKS.css", resourceType: "style", prefetch: true, preload: true }, "node_modules/nuxt/dist/app/entry.js": { resourceType: "script", module: true, prefetch: true, preload: true, file: "BT_PhuNT.js", name: "entry", src: "node_modules/nuxt/dist/app/entry.js", isEntry: true, dynamicImports: ["node_modules/nuxt/dist/app/components/error-404.vue", "node_modules/nuxt/dist/app/components/error-500.vue"], _globalCSS: true } };
  }
});

// .wrangler/tmp/pages-FEt2Fg/chunks/build/entry-styles.C-NqyOLw.mjs
var entry_styles_C_NqyOLw_exports = {};
__export(entry_styles_C_NqyOLw_exports, {
  default: () => t
});
var t;
var init_entry_styles_C_NqyOLw = __esm({
  ".wrangler/tmp/pages-FEt2Fg/chunks/build/entry-styles.C-NqyOLw.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    t = ['/*! tailwindcss v3.4.10 | MIT License | https://tailwindcss.com*/*,:after,:before{border:0 solid #e5e7eb;box-sizing:border-box}:after,:before{--tw-content:""}:host,html{line-height:1.5;-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-feature-settings:normal;font-variation-settings:normal;tab-size:4;-webkit-tap-highlight-color:transparent}body{line-height:inherit;margin:0}hr{border-top-width:1px;color:inherit;height:0}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-feature-settings:normal;font-size:1em;font-variation-settings:normal}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:initial}sub{bottom:-.25em}sup{top:-.5em}table{border-collapse:collapse;border-color:inherit;text-indent:0}button,input,optgroup,select,textarea{color:inherit;font-family:inherit;font-feature-settings:inherit;font-size:100%;font-variation-settings:inherit;font-weight:inherit;letter-spacing:inherit;line-height:inherit;margin:0;padding:0}button,select{text-transform:none}button,input:where([type=button]),input:where([type=reset]),input:where([type=submit]){-webkit-appearance:button;background-color:initial;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:initial}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset{margin:0}fieldset,legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::placeholder,textarea::placeholder{color:#9ca3af;opacity:1}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{height:auto;max-width:100%}[hidden]{display:none}*,::backdrop,:after,:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:#3b82f680;--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }.mt-32{margin-top:8rem}.flex{display:flex}.h-96{height:24rem}.flex-col{flex-direction:column}.items-center{align-items:center}.justify-center{justify-content:center}.text-4xl{font-size:2.25rem;line-height:2.5rem}.font-semibold{font-weight:600}.text-red-600{--tw-text-opacity:1;color:rgb(220 38 38/var(--tw-text-opacity))}.underline{text-decoration-line:underline}'];
  }
});

// .wrangler/tmp/pages-FEt2Fg/chunks/build/error-404-styles-1.mjs-DaBoFDuU.mjs
var a;
var init_error_404_styles_1_mjs_DaBoFDuU = __esm({
  ".wrangler/tmp/pages-FEt2Fg/chunks/build/error-404-styles-1.mjs-DaBoFDuU.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    a = '.spotlight[data-v-922baad2]{background:linear-gradient(45deg,#00dc82,#36e4da 50%,#0047e1);bottom:-30vh;filter:blur(20vh);height:40vh}.gradient-border[data-v-922baad2]{-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);border-radius:.5rem;position:relative}@media (prefers-color-scheme:light){.gradient-border[data-v-922baad2]{background-color:hsla(0,0%,100%,.3)}.gradient-border[data-v-922baad2]:before{background:linear-gradient(90deg,#e2e2e2,#e2e2e2 25%,#00dc82 50%,#36e4da 75%,#0047e1)}}@media (prefers-color-scheme:dark){.gradient-border[data-v-922baad2]{background-color:hsla(0,0%,8%,.3)}.gradient-border[data-v-922baad2]:before{background:linear-gradient(90deg,#303030,#303030 25%,#00dc82 50%,#36e4da 75%,#0047e1)}}.gradient-border[data-v-922baad2]:before{background-size:400% auto;border-radius:.5rem;bottom:0;content:"";left:0;-webkit-mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);-webkit-mask-composite:xor;mask-composite:exclude;opacity:.5;padding:2px;position:absolute;right:0;top:0;transition:background-position .3s ease-in-out,opacity .2s ease-in-out;width:100%}.gradient-border[data-v-922baad2]:hover:before{background-position:-50% 0;opacity:1}.fixed[data-v-922baad2]{position:fixed}.left-0[data-v-922baad2]{left:0}.right-0[data-v-922baad2]{right:0}.z-10[data-v-922baad2]{z-index:10}.z-20[data-v-922baad2]{z-index:20}.grid[data-v-922baad2]{display:grid}.mb-16[data-v-922baad2]{margin-bottom:4rem}.mb-8[data-v-922baad2]{margin-bottom:2rem}.max-w-520px[data-v-922baad2]{max-width:520px}.min-h-screen[data-v-922baad2]{min-height:100vh}.w-full[data-v-922baad2]{width:100%}.flex[data-v-922baad2]{display:flex}.cursor-pointer[data-v-922baad2]{cursor:pointer}.place-content-center[data-v-922baad2]{place-content:center}.items-center[data-v-922baad2]{align-items:center}.justify-center[data-v-922baad2]{justify-content:center}.overflow-hidden[data-v-922baad2]{overflow:hidden}.bg-white[data-v-922baad2]{--un-bg-opacity:1;background-color:rgb(255 255 255/var(--un-bg-opacity))}.px-4[data-v-922baad2]{padding-left:1rem;padding-right:1rem}.px-8[data-v-922baad2]{padding-left:2rem;padding-right:2rem}.py-2[data-v-922baad2]{padding-bottom:.5rem;padding-top:.5rem}.text-center[data-v-922baad2]{text-align:center}.text-8xl[data-v-922baad2]{font-size:6rem;line-height:1}.text-xl[data-v-922baad2]{font-size:1.25rem;line-height:1.75rem}.text-black[data-v-922baad2]{--un-text-opacity:1;color:rgb(0 0 0/var(--un-text-opacity))}.font-light[data-v-922baad2]{font-weight:300}.font-medium[data-v-922baad2]{font-weight:500}.leading-tight[data-v-922baad2]{line-height:1.25}.font-sans[data-v-922baad2]{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji}.antialiased[data-v-922baad2]{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}@media (prefers-color-scheme:dark){.dark\\:bg-black[data-v-922baad2]{--un-bg-opacity:1;background-color:rgb(0 0 0/var(--un-bg-opacity))}.dark\\:text-white[data-v-922baad2]{--un-text-opacity:1;color:rgb(255 255 255/var(--un-text-opacity))}}@media (min-width:640px){.sm\\:px-0[data-v-922baad2]{padding-left:0;padding-right:0}.sm\\:px-6[data-v-922baad2]{padding-left:1.5rem;padding-right:1.5rem}.sm\\:py-3[data-v-922baad2]{padding-bottom:.75rem;padding-top:.75rem}.sm\\:text-4xl[data-v-922baad2]{font-size:2.25rem;line-height:2.5rem}.sm\\:text-xl[data-v-922baad2]{font-size:1.25rem;line-height:1.75rem}}';
  }
});

// .wrangler/tmp/pages-FEt2Fg/chunks/build/error-404-styles.WpyeoFtc.mjs
var error_404_styles_WpyeoFtc_exports = {};
__export(error_404_styles_WpyeoFtc_exports, {
  default: () => o
});
var o;
var init_error_404_styles_WpyeoFtc = __esm({
  ".wrangler/tmp/pages-FEt2Fg/chunks/build/error-404-styles.WpyeoFtc.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    init_error_404_styles_1_mjs_DaBoFDuU();
    o = [a, a];
  }
});

// .wrangler/tmp/pages-FEt2Fg/chunks/build/error-500-styles-1.mjs-D_pjx06j.mjs
var t2;
var init_error_500_styles_1_mjs_D_pjx06j = __esm({
  ".wrangler/tmp/pages-FEt2Fg/chunks/build/error-500-styles-1.mjs-D_pjx06j.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    t2 = ".spotlight[data-v-1e3620c9]{background:linear-gradient(45deg,#00dc82,#36e4da 50%,#0047e1);filter:blur(20vh)}.fixed[data-v-1e3620c9]{position:fixed}.-bottom-1\\/2[data-v-1e3620c9]{bottom:-50%}.left-0[data-v-1e3620c9]{left:0}.right-0[data-v-1e3620c9]{right:0}.grid[data-v-1e3620c9]{display:grid}.mb-16[data-v-1e3620c9]{margin-bottom:4rem}.mb-8[data-v-1e3620c9]{margin-bottom:2rem}.h-1\\/2[data-v-1e3620c9]{height:50%}.max-w-520px[data-v-1e3620c9]{max-width:520px}.min-h-screen[data-v-1e3620c9]{min-height:100vh}.place-content-center[data-v-1e3620c9]{place-content:center}.overflow-hidden[data-v-1e3620c9]{overflow:hidden}.bg-white[data-v-1e3620c9]{--un-bg-opacity:1;background-color:rgb(255 255 255/var(--un-bg-opacity))}.px-8[data-v-1e3620c9]{padding-left:2rem;padding-right:2rem}.text-center[data-v-1e3620c9]{text-align:center}.text-8xl[data-v-1e3620c9]{font-size:6rem;line-height:1}.text-xl[data-v-1e3620c9]{font-size:1.25rem;line-height:1.75rem}.text-black[data-v-1e3620c9]{--un-text-opacity:1;color:rgb(0 0 0/var(--un-text-opacity))}.font-light[data-v-1e3620c9]{font-weight:300}.font-medium[data-v-1e3620c9]{font-weight:500}.leading-tight[data-v-1e3620c9]{line-height:1.25}.font-sans[data-v-1e3620c9]{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji}.antialiased[data-v-1e3620c9]{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}@media (prefers-color-scheme:dark){.dark\\:bg-black[data-v-1e3620c9]{--un-bg-opacity:1;background-color:rgb(0 0 0/var(--un-bg-opacity))}.dark\\:text-white[data-v-1e3620c9]{--un-text-opacity:1;color:rgb(255 255 255/var(--un-text-opacity))}}@media (min-width:640px){.sm\\:px-0[data-v-1e3620c9]{padding-left:0;padding-right:0}.sm\\:text-4xl[data-v-1e3620c9]{font-size:2.25rem;line-height:2.5rem}}";
  }
});

// .wrangler/tmp/pages-FEt2Fg/chunks/build/error-500-styles.BFuVBFDJ.mjs
var error_500_styles_BFuVBFDJ_exports = {};
__export(error_500_styles_BFuVBFDJ_exports, {
  default: () => r
});
var r;
var init_error_500_styles_BFuVBFDJ = __esm({
  ".wrangler/tmp/pages-FEt2Fg/chunks/build/error-500-styles.BFuVBFDJ.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    init_error_500_styles_1_mjs_D_pjx06j();
    r = [t2, t2];
  }
});

// .wrangler/tmp/pages-FEt2Fg/chunks/build/error-404-styles.CibK9Qn2.mjs
var error_404_styles_CibK9Qn2_exports = {};
__export(error_404_styles_CibK9Qn2_exports, {
  default: () => o2
});
var o2;
var init_error_404_styles_CibK9Qn2 = __esm({
  ".wrangler/tmp/pages-FEt2Fg/chunks/build/error-404-styles.CibK9Qn2.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    init_error_404_styles_1_mjs_DaBoFDuU();
    o2 = [a];
  }
});

// .wrangler/tmp/pages-FEt2Fg/chunks/build/error-500-styles.JhxDD0mW.mjs
var error_500_styles_JhxDD0mW_exports = {};
__export(error_500_styles_JhxDD0mW_exports, {
  default: () => r2
});
var r2;
var init_error_500_styles_JhxDD0mW = __esm({
  ".wrangler/tmp/pages-FEt2Fg/chunks/build/error-500-styles.JhxDD0mW.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    init_error_500_styles_1_mjs_D_pjx06j();
    r2 = [t2];
  }
});

// .wrangler/tmp/pages-FEt2Fg/chunks/build/styles.mjs
var styles_exports = {};
__export(styles_exports, {
  default: () => e3
});
var interopDefault, e3;
var init_styles = __esm({
  ".wrangler/tmp/pages-FEt2Fg/chunks/build/styles.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    interopDefault = (e5) => e5.default || e5 || [];
    e3 = { "node_modules/nuxt/dist/app/entry.js": () => Promise.resolve().then(() => (init_entry_styles_C_NqyOLw(), entry_styles_C_NqyOLw_exports)).then(interopDefault), "node_modules/nuxt/dist/app/components/error-404.vue": () => Promise.resolve().then(() => (init_error_404_styles_WpyeoFtc(), error_404_styles_WpyeoFtc_exports)).then(interopDefault), "node_modules/nuxt/dist/app/components/error-500.vue": () => Promise.resolve().then(() => (init_error_500_styles_BFuVBFDJ(), error_500_styles_BFuVBFDJ_exports)).then(interopDefault), "node_modules/nuxt/dist/app/components/error-404.vue?vue&type=style&index=0&scoped=922baad2&lang.css": () => Promise.resolve().then(() => (init_error_404_styles_CibK9Qn2(), error_404_styles_CibK9Qn2_exports)).then(interopDefault), "node_modules/nuxt/dist/app/components/error-500.vue?vue&type=style&index=0&scoped=1e3620c9&lang.css": () => Promise.resolve().then(() => (init_error_500_styles_JhxDD0mW(), error_500_styles_JhxDD0mW_exports)).then(interopDefault) };
  }
});

// .wrangler/tmp/pages-FEt2Fg/chunks/build/_plugin-vue_export-helper-rOXEZKYo.mjs
function useHead(a3, n2 = {}) {
  const u3 = n2.head || injectHead();
  if (u3)
    return u3.ssr ? u3.push(a3, n2) : function(s2, a4, n3 = {}) {
      const u4 = ref(false), c2 = ref({});
      watchEffect(() => {
        c2.value = u4.value ? {} : resolveUnrefHeadInput(a4);
      });
      const f2 = s2.push(c2.value, n3);
      return watch(c2, (s3) => {
        f2.patch(s3);
      }), f2;
    }(u3, a3, n2);
}
var _export_sfc;
var init_plugin_vue_export_helper_rOXEZKYo = __esm({
  ".wrangler/tmp/pages-FEt2Fg/chunks/build/_plugin-vue_export-helper-rOXEZKYo.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    init_server();
    init_renderer();
    _export_sfc = (s2, r4) => {
      const e5 = s2.__vccOpts || s2;
      for (const [s3, t4] of r4)
        e5[s3] = t4;
      return e5;
    };
  }
});

// .wrangler/tmp/pages-FEt2Fg/chunks/build/error-404-CcUH1itg.mjs
var error_404_CcUH1itg_exports = {};
__export(error_404_CcUH1itg_exports, {
  default: () => A
});
function defineNuxtLink(r4) {
  const n2 = r4.componentName || "NuxtLink";
  function resolveTrailingSlashBehavior(e5, t4) {
    if (!e5 || "append" !== r4.trailingSlash && "remove" !== r4.trailingSlash)
      return e5;
    if ("string" == typeof e5)
      return applyTrailingSlashBehavior(e5, r4.trailingSlash);
    const a3 = "path" in e5 && void 0 !== e5.path ? e5.path : t4(e5).path;
    return { ...e5, name: void 0, path: applyTrailingSlashBehavior(a3, r4.trailingSlash) };
  }
  function useNuxtLink(e5) {
    var r5, n3, o7;
    const d2 = useRouter(), c2 = useRuntimeConfig(), p2 = computed(() => !!e5.target && "_self" !== e5.target), v3 = computed(() => {
      const a3 = e5.to || e5.href || "";
      return "string" == typeof a3 && hasProtocol(a3, { acceptRelative: true });
    }), f2 = resolveComponent("RouterLink"), h3 = f2 && "string" != typeof f2 ? f2.useLink : void 0, g2 = computed(() => {
      if (e5.external)
        return true;
      const t4 = e5.to || e5.href || "";
      return "object" != typeof t4 && ("" === t4 || v3.value);
    }), m3 = computed(() => {
      const t4 = e5.to || e5.href || "";
      return g2.value ? t4 : resolveTrailingSlashBehavior(t4, d2.resolve);
    }), b3 = g2.value || null == h3 ? void 0 : h3({ ...e5, to: m3 }), x3 = computed(() => {
      var e6, t4;
      if (!m3.value || v3.value)
        return m3.value;
      if (g2.value) {
        const e7 = "object" == typeof m3.value && "path" in m3.value ? resolveRouteObject(m3.value) : m3.value;
        return resolveTrailingSlashBehavior("object" == typeof e7 ? d2.resolve(e7).href : e7, d2.resolve);
      }
      return "object" == typeof m3.value ? null != (e6 = null == (t4 = d2.resolve(m3.value)) ? void 0 : t4.href) ? e6 : null : resolveTrailingSlashBehavior(joinURL(c2.app.baseURL, m3.value), d2.resolve);
    });
    return { to: m3, hasTarget: p2, isAbsoluteUrl: v3, isExternal: g2, href: x3, isActive: null != (r5 = null == b3 ? void 0 : b3.isActive) ? r5 : computed(() => m3.value === d2.currentRoute.value.path), isExactActive: null != (n3 = null == b3 ? void 0 : b3.isExactActive) ? n3 : computed(() => m3.value === d2.currentRoute.value.path), route: null != (o7 = null == b3 ? void 0 : b3.route) ? o7 : computed(() => d2.resolve(m3.value)), async navigate() {
      await navigateTo(x3.value, { replace: e5.replace, external: g2.value || p2.value });
    } };
  }
  return defineComponent({ name: n2, props: { to: { type: [String, Object], default: void 0, required: false }, href: { type: [String, Object], default: void 0, required: false }, target: { type: String, default: void 0, required: false }, rel: { type: String, default: void 0, required: false }, noRel: { type: Boolean, default: void 0, required: false }, prefetch: { type: Boolean, default: void 0, required: false }, noPrefetch: { type: Boolean, default: void 0, required: false }, activeClass: { type: String, default: void 0, required: false }, exactActiveClass: { type: String, default: void 0, required: false }, prefetchedClass: { type: String, default: void 0, required: false }, replace: { type: Boolean, default: void 0, required: false }, ariaCurrentValue: { type: String, default: void 0, required: false }, external: { type: Boolean, default: void 0, required: false }, custom: { type: Boolean, default: void 0, required: false } }, useLink: useNuxtLink, setup(t4, { slots: a3 }) {
    useRouter();
    const { to: n3, href: o7, navigate: s2, isExternal: u3, hasTarget: l2, isAbsoluteUrl: d2 } = useNuxtLink(t4), c2 = ref(false);
    return () => {
      var i3;
      if (!u3.value && !l2.value) {
        const e5 = { ref: void 0, to: n3.value, activeClass: t4.activeClass || r4.activeClass, exactActiveClass: t4.exactActiveClass || r4.exactActiveClass, replace: t4.replace, ariaCurrentValue: t4.ariaCurrentValue, custom: t4.custom };
        return t4.custom || (c2.value && (e5.class = t4.prefetchedClass || r4.prefetchedClass), e5.rel = t4.rel || void 0), h(resolveComponent("RouterLink"), e5, a3.default);
      }
      const p2 = t4.target || null, v3 = ((...e5) => e5.find((e6) => void 0 !== e6))(t4.noRel ? "" : t4.rel, r4.externalRelAttribute, d2.value || l2.value ? "noopener noreferrer" : "") || null;
      return t4.custom ? a3.default ? a3.default({ href: o7.value, navigate: s2, get route() {
        if (!o7.value)
          return;
        const t5 = new URL(o7.value, "http://localhost");
        return { path: t5.pathname, fullPath: t5.pathname, get query() {
          return parseQuery(t5.search);
        }, hash: t5.hash, params: {}, name: void 0, matched: [], redirectedFrom: void 0, meta: {}, href: o7.value };
      }, rel: v3, target: p2, isExternal: u3.value || l2.value, isActive: false, isExactActive: false }) : null : h("a", { ref: void 0, href: o7.value || null, rel: v3, target: p2 }, null == (i3 = a3.default) ? void 0 : i3.call(a3));
    };
  } });
}
function applyTrailingSlashBehavior(e5, a3) {
  const i3 = "append" === a3 ? withTrailingSlash : withoutTrailingSlash;
  return hasProtocol(e5) && !e5.startsWith("http") ? e5 : i3(e5, true);
}
var j, q, z, A;
var init_error_404_CcUH1itg = __esm({
  ".wrangler/tmp/pages-FEt2Fg/chunks/build/error-404-CcUH1itg.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    init_runtime();
    init_server();
    init_plugin_vue_export_helper_rOXEZKYo();
    init_renderer();
    j = defineNuxtLink(oe);
    q = { __name: "error-404", __ssrInlineRender: true, props: { appName: { type: String, default: "Nuxt" }, version: { type: String, default: "" }, statusCode: { type: Number, default: 404 }, statusMessage: { type: String, default: "Not Found" }, description: { type: String, default: "Sorry, the page you are looking for could not be found." }, backHome: { type: String, default: "Go back home" } }, setup(e5) {
      const t4 = e5;
      return useHead({ title: `${t4.statusCode} - ${t4.statusMessage} | ${t4.appName}`, script: [], style: [{ children: '*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:var(--un-default-border-color, #e5e7eb)}:before,:after{--un-content:""}html{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{margin:0;line-height:inherit}h1{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}h1,p{margin:0}*,:before,:after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / .5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }' }] }), (t5, a3, r4, n2) => {
        const i3 = j;
        a3(`<div${ssrRenderAttrs(mergeProps({ class: "font-sans antialiased bg-white dark:bg-black text-black dark:text-white grid min-h-screen place-content-center overflow-hidden" }, n2))} data-v-922baad2><div class="fixed left-0 right-0 spotlight z-10" data-v-922baad2></div><div class="max-w-520px text-center z-20" data-v-922baad2><h1 class="text-8xl sm:text-10xl font-medium mb-8" data-v-922baad2>${ssrInterpolate(e5.statusCode)}</h1><p class="text-xl px-8 sm:px-0 sm:text-4xl font-light mb-16 leading-tight" data-v-922baad2>${ssrInterpolate(e5.description)}</p><div class="w-full flex items-center justify-center" data-v-922baad2>`), a3(ssrRenderComponent(i3, { to: "/", class: "gradient-border text-md sm:text-xl py-2 px-4 sm:py-3 sm:px-6 cursor-pointer" }, { default: withCtx((t6, a4, r5, n3) => {
          if (!a4)
            return [createTextVNode(toDisplayString(e5.backHome), 1)];
          a4(`${ssrInterpolate(e5.backHome)}`);
        }), _: 1 }, r4)), a3("</div></div></div>");
      };
    } };
    z = q.setup;
    q.setup = (e5, t4) => {
      const a3 = useSSRContext();
      return (a3.modules || (a3.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt/dist/app/components/error-404.vue"), z ? z(e5, t4) : void 0;
    };
    A = _export_sfc(q, [["__scopeId", "data-v-922baad2"]]);
  }
});

// .wrangler/tmp/pages-FEt2Fg/chunks/build/error-500-CTl04f3M.mjs
var error_500_CTl04f3M_exports = {};
__export(error_500_CTl04f3M_exports, {
  default: () => u
});
var o3, i, u;
var init_error_500_CTl04f3M = __esm({
  ".wrangler/tmp/pages-FEt2Fg/chunks/build/error-500-CTl04f3M.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    init_plugin_vue_export_helper_rOXEZKYo();
    init_renderer();
    init_server();
    init_runtime();
    o3 = { __name: "error-500", __ssrInlineRender: true, props: { appName: { type: String, default: "Nuxt" }, version: { type: String, default: "" }, statusCode: { type: Number, default: 500 }, statusMessage: { type: String, default: "Server error" }, description: { type: String, default: "This page is temporarily unavailable." } }, setup(e5) {
      const r4 = e5;
      return useHead({ title: `${r4.statusCode} - ${r4.statusMessage} | ${r4.appName}`, script: [], style: [{ children: '*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:var(--un-default-border-color, #e5e7eb)}:before,:after{--un-content:""}html{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{margin:0;line-height:inherit}h1{font-size:inherit;font-weight:inherit}h1,p{margin:0}*,:before,:after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / .5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }' }] }), (t4, r5, o7, i3) => {
        r5(`<div${ssrRenderAttrs(mergeProps({ class: "font-sans antialiased bg-white dark:bg-black text-black dark:text-white grid min-h-screen place-content-center overflow-hidden" }, i3))} data-v-1e3620c9><div class="fixed -bottom-1/2 left-0 right-0 h-1/2 spotlight" data-v-1e3620c9></div><div class="max-w-520px text-center" data-v-1e3620c9><h1 class="text-8xl sm:text-10xl font-medium mb-8" data-v-1e3620c9>${ssrInterpolate(e5.statusCode)}</h1><p class="text-xl px-8 sm:px-0 sm:text-4xl font-light mb-16 leading-tight" data-v-1e3620c9>${ssrInterpolate(e5.description)}</p></div></div>`);
      };
    } };
    i = o3.setup;
    o3.setup = (e5, t4) => {
      const n2 = useSSRContext();
      return (n2.modules || (n2.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt/dist/app/components/error-500.vue"), i ? i(e5, t4) : void 0;
    };
    u = _export_sfc(o3, [["__scopeId", "data-v-1e3620c9"]]);
  }
});

// .wrangler/tmp/pages-FEt2Fg/chunks/build/server.mjs
var server_exports = {};
__export(server_exports, {
  a: () => navigateTo,
  b: () => useRuntimeConfig,
  c: () => resolveUnrefHeadInput,
  default: () => entry$1,
  i: () => injectHead,
  n: () => oe,
  r: () => resolveRouteObject,
  u: () => useRouter
});
function getNuxtAppCtx(e5 = ie) {
  return getContext(e5, { asyncContext: false });
}
function registerPluginHooks(e5, t4) {
  t4.hooks && e5.hooks.addHooks(t4.hooks);
}
function defineNuxtPlugin(e5) {
  if ("function" == typeof e5)
    return e5;
  const t4 = e5._name || e5.name;
  return delete e5.name, Object.assign(e5.setup || (() => {
  }), e5, { [le]: true, _name: t4 });
}
function callWithNuxt(e5, t4, n2) {
  const fn2 = () => t4(), a3 = getNuxtAppCtx(e5._name);
  return e5.vueApp.runWithContext(() => a3.callAsync(e5, fn2));
}
function useNuxtApp(e5) {
  const t4 = function(e6) {
    var t5;
    let n2;
    return hasInjectionContext() && (n2 = null == (t5 = getCurrentInstance()) ? void 0 : t5.appContext.app.$nuxt), n2 = n2 || getNuxtAppCtx(e6).tryUse(), n2 || null;
  }(e5);
  if (!t4)
    throw new Error("[nuxt] instance unavailable");
  return t4;
}
function useRuntimeConfig(e5) {
  return useNuxtApp().$config;
}
function defineGetter(e5, t4, n2) {
  Object.defineProperty(e5, t4, { get: () => n2 });
}
function defineNuxtRouteMiddleware(e5) {
  return e5;
}
function resolveRouteObject(e5) {
  return withQuery(e5.path || "", e5.query || {}) + (e5.hash || "");
}
function resolveUnrefHeadInput(e5, t4 = "") {
  if (e5 instanceof Promise)
    return e5;
  const n2 = "function" == typeof (a3 = e5) ? a3() : unref(a3);
  var a3;
  return e5 && n2 ? Array.isArray(n2) ? n2.map((e6) => resolveUnrefHeadInput(e6, t4)) : "object" == typeof n2 ? Object.fromEntries(Object.entries(n2).map(([e6, t5]) => "titleTemplate" === e6 || e6.startsWith("on") ? [e6, unref(t5)] : [e6, resolveUnrefHeadInput(t5, e6)])) : n2 : n2;
}
function injectHead() {
  if (pe in de)
    return de[pe]();
  const e5 = inject("usehead");
  return e5 || getActiveHead();
}
function getRouteFromPath(e5) {
  "object" == typeof e5 && (e5 = stringifyParsedURL({ pathname: e5.path || "", search: stringifyQuery(e5.query || {}), hash: e5.hash || "" }));
  const t4 = new URL(e5.toString(), "http://localhost");
  return { path: t4.pathname, fullPath: e5, query: parseQuery(t4.search), hash: t4.hash, params: {}, name: void 0, matched: [], redirectedFrom: void 0, meta: {}, href: e5 };
}
function useRequestFetch() {
  var e5;
  return (null == (e5 = function(e6 = useNuxtApp()) {
    var t4;
    return null == (t4 = e6.ssrContext) ? void 0 : t4.event;
  }()) ? void 0 : e5.$fetch) || globalThis.$fetch;
}
function useAsyncData(...e5) {
  var t4;
  const n2 = "string" == typeof e5[e5.length - 1] ? e5.pop() : void 0;
  "string" != typeof e5[0] && e5.unshift(n2);
  let [a3, o7, r4 = {}] = e5;
  if ("string" != typeof a3)
    throw new TypeError("[nuxt] [asyncData] key must be a string.");
  if ("function" != typeof o7)
    throw new TypeError("[nuxt] [asyncData] handler must be a function.");
  const s2 = useNuxtApp(), i3 = o7;
  r4.server = r4.server ?? true, r4.default = r4.default ?? (() => re.value), r4.getCachedData = r4.getCachedData ?? (() => s2.isHydrating ? s2.payload.data[a3] : s2.static.data[a3]), r4.lazy = r4.lazy ?? false, r4.immediate = r4.immediate ?? true, r4.deep = r4.deep ?? re.deep, r4.dedupe = r4.dedupe ?? "cancel";
  const hasCachedData = () => null != r4.getCachedData(a3, s2);
  if (!s2._asyncData[a3] || !r4.immediate) {
    (t4 = s2.payload._errors)[a3] ?? (t4[a3] = re.errorValue);
    const e6 = r4.deep ? ref : shallowRef;
    s2._asyncData[a3] = { data: e6(r4.getCachedData(a3, s2) ?? r4.default()), pending: ref(!hasCachedData()), error: toRef(s2.payload._errors, a3), status: ref("idle"), _default: r4.default };
  }
  const l2 = { ...s2._asyncData[a3] };
  delete l2._default, l2.refresh = l2.execute = (e6 = {}) => {
    if (s2._asyncDataPromises[a3]) {
      if (isDefer(e6.dedupe ?? r4.dedupe))
        return s2._asyncDataPromises[a3];
      s2._asyncDataPromises[a3].cancelled = true;
    }
    if ((e6._initial || s2.isHydrating && false !== e6._initial) && hasCachedData())
      return Promise.resolve(r4.getCachedData(a3, s2));
    l2.pending.value = true, l2.status.value = "pending";
    const t5 = new Promise((e7, t6) => {
      try {
        e7(i3(s2));
      } catch (e8) {
        t6(e8);
      }
    }).then(async (e7) => {
      if (t5.cancelled)
        return s2._asyncDataPromises[a3];
      let n3 = e7;
      r4.transform && (n3 = await r4.transform(e7)), r4.pick && (n3 = function(e8, t6) {
        const n4 = {};
        for (const a4 of t6)
          n4[a4] = e8[a4];
        return n4;
      }(n3, r4.pick)), s2.payload.data[a3] = n3, l2.data.value = n3, l2.error.value = re.errorValue, l2.status.value = "success";
    }).catch((e7) => {
      if (t5.cancelled)
        return s2._asyncDataPromises[a3];
      l2.error.value = createError2(e7), l2.data.value = unref(r4.default()), l2.status.value = "error";
    }).finally(() => {
      t5.cancelled || (l2.pending.value = false, delete s2._asyncDataPromises[a3]);
    });
    return s2._asyncDataPromises[a3] = t5, s2._asyncDataPromises[a3];
  }, l2.clear = () => function(e6, t5) {
    t5 in e6.payload.data && (e6.payload.data[t5] = void 0);
    t5 in e6.payload._errors && (e6.payload._errors[t5] = re.errorValue);
    e6._asyncData[t5] && (e6._asyncData[t5].data.value = void 0, e6._asyncData[t5].error.value = re.errorValue, e6._asyncData[t5].pending.value = false, e6._asyncData[t5].status.value = "idle");
    t5 in e6._asyncDataPromises && (e6._asyncDataPromises[t5] && (e6._asyncDataPromises[t5].cancelled = true), e6._asyncDataPromises[t5] = void 0);
  }(s2, a3);
  if (false !== r4.server && s2.payload.serverRendered && r4.immediate) {
    const e6 = l2.refresh({ _initial: true });
    getCurrentInstance() ? Be(() => e6) : s2.hook("app:created", async () => {
      await e6;
    });
  }
  const u3 = Promise.resolve(s2._asyncDataPromises[a3]).then(() => l2);
  return Object.assign(u3, l2), u3;
}
function generateOptionSegments(e5) {
  var t4;
  const n2 = [(null == (t4 = toValue(e5.method)) ? void 0 : t4.toUpperCase()) || "GET", toValue(e5.baseURL)];
  for (const t5 of [e5.params || e5.query]) {
    const e6 = toValue(t5);
    if (!e6)
      continue;
    const a3 = {};
    for (const [t6, n3] of Object.entries(e6))
      a3[toValue(t6)] = toValue(n3);
    n2.push(a3);
  }
  return n2;
}
var Z, ee, te2, getContext, ne, ae, oe, re, se, ie, le, ue, useRouter, navigateTo, ce, useError, showError, createError2, de, pe, fe, ve, he, ye, ge, me, xe, _e, isDefer, we, be, Ce2, Re, Pe, ke, Ae, entry$1;
var init_server = __esm({
  ".wrangler/tmp/pages-FEt2Fg/chunks/build/server.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    init_runtime();
    init_renderer();
    Z = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof global ? global : {};
    ee = "__unctx__";
    te2 = Z[ee] || (Z[ee] = function(e5 = {}) {
      const t4 = {};
      return { get: (n2, a3 = {}) => (t4[n2] || (t4[n2] = function(e6 = {}) {
        let t5, n3 = false;
        const checkConflict = (e7) => {
          if (t5 && t5 !== e7)
            throw new Error("Context conflict");
        };
        let a4;
        if (e6.asyncContext) {
          const t6 = e6.AsyncLocalStorage || globalThis.AsyncLocalStorage;
          t6 ? a4 = new t6() : console.warn("[unctx] `AsyncLocalStorage` is not provided.");
        }
        const _getCurrentInstance = () => {
          if (a4 && void 0 === t5) {
            const e7 = a4.getStore();
            if (void 0 !== e7)
              return e7;
          }
          return t5;
        };
        return { use: () => {
          const e7 = _getCurrentInstance();
          if (void 0 === e7)
            throw new Error("Context is not available");
          return e7;
        }, tryUse: () => _getCurrentInstance(), set: (e7, a5) => {
          a5 || checkConflict(e7), t5 = e7, n3 = true;
        }, unset: () => {
          t5 = void 0, n3 = false;
        }, call: (e7, o7) => {
          checkConflict(e7), t5 = e7;
          try {
            return a4 ? a4.run(e7, o7) : o7();
          } finally {
            n3 || (t5 = void 0);
          }
        }, async callAsync(e7, o7) {
          t5 = e7;
          const onRestore = () => {
            t5 = e7;
          }, onLeave = () => t5 === e7 ? onRestore : void 0;
          ae.add(onLeave);
          try {
            const r4 = a4 ? a4.run(e7, o7) : o7();
            return n3 || (t5 = void 0), await r4;
          } finally {
            ae.delete(onLeave);
          }
        } };
      }({ ...e5, ...a3 })), t4[n2], t4[n2]) };
    }());
    getContext = (e5, t4 = {}) => te2.get(e5, t4);
    ne = "__unctx_async_handlers__";
    ae = Z[ne] || (Z[ne] = /* @__PURE__ */ new Set());
    globalThis.$fetch || (globalThis.$fetch = Ce.create({ baseURL: baseURL() }));
    oe = { componentName: "NuxtLink" };
    re = { value: null, errorValue: null, deep: true };
    se = {};
    ie = "nuxt-app";
    le = "__nuxt_plugin";
    ue = Symbol("route");
    useRouter = () => {
      var e5;
      return null == (e5 = useNuxtApp()) ? void 0 : e5.$router;
    };
    navigateTo = (e5, o7) => {
      e5 || (e5 = "/");
      const s2 = "string" == typeof e5 ? e5 : "path" in e5 ? resolveRouteObject(e5) : useRouter().resolve(e5).href, i3 = hasProtocol(s2, { acceptRelative: true }), l2 = (null == o7 ? void 0 : o7.external) || i3;
      if (l2) {
        if (!(null == o7 ? void 0 : o7.external))
          throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");
        const { protocol: e6 } = new URL(s2, "http://localhost");
        if (e6 && isScriptProtocol(e6))
          throw new Error(`Cannot navigate to a URL with '${e6}' protocol.`);
      }
      const u3 = (() => {
        try {
          if (useNuxtApp()._processingMiddleware)
            return true;
        } catch {
          return false;
        }
        return false;
      })(), c2 = useRouter(), d2 = useNuxtApp();
      if (d2.ssrContext) {
        const t4 = "string" == typeof e5 || l2 ? s2 : c2.resolve(e5).fullPath || "/", n2 = l2 ? s2 : joinURL(useRuntimeConfig().app.baseURL, t4), redirect = async function(e6) {
          await d2.callHook("app:redirected");
          const t5 = n2.replace(/"/g, "%22"), a3 = function(e7, t6 = false) {
            const n3 = new URL(e7, "http://localhost");
            if (!t6)
              return n3.pathname + n3.search + n3.hash;
            if (e7.startsWith("//"))
              return n3.toString().replace(n3.protocol, "");
            return n3.toString();
          }(n2, i3);
          return d2.ssrContext._renderResponse = { statusCode: sanitizeStatusCode((null == o7 ? void 0 : o7.redirectCode) || 302, 302), body: `<!DOCTYPE html><html><head><meta http-equiv="refresh" content="0; url=${t5}"></head></html>`, headers: { location: a3 } }, e6;
        };
        return !l2 && u3 ? (c2.afterEach((e6) => e6.fullPath === t4 ? redirect(false) : void 0), e5) : redirect(!u3 && void 0);
      }
      return l2 ? (d2._scope.stop(), (null == o7 ? void 0 : o7.replace) ? (void 0).replace(s2) : (void 0).href = s2, u3 ? !!d2.isHydrating && new Promise(() => {
      }) : Promise.resolve()) : (null == o7 ? void 0 : o7.replace) ? c2.replace(e5) : c2.push(e5);
    };
    ce = "__nuxt_error";
    useError = () => toRef(useNuxtApp().payload, "error");
    showError = (e5) => {
      const t4 = createError2(e5);
      try {
        useNuxtApp();
        const e6 = useError();
        0, e6.value = e6.value || t4;
      } catch {
        throw t4;
      }
      return t4;
    };
    createError2 = (e5) => {
      const t4 = createError(e5);
      return Object.defineProperty(t4, ce, { value: true, configurable: false, writable: false }), t4;
    };
    de = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
    pe = "__unhead_injection_handler__";
    fe = defineNuxtPlugin({ name: "nuxt:head", enforce: "pre", setup(e5) {
      const t4 = e5.ssrContext.head;
      var n2;
      n2 = () => useNuxtApp().vueApp._context.provides.usehead, de[pe] = n2, e5.vueApp.use(t4);
    } });
    ve = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof global ? global : {};
    he = "__unctx__";
    ve[he] || (ve[he] = function(e5 = {}) {
      const t4 = {};
      return { get: (n2, a3 = {}) => (t4[n2] || (t4[n2] = function(e6 = {}) {
        let t5, n3 = false;
        const checkConflict = (e7) => {
          if (t5 && t5 !== e7)
            throw new Error("Context conflict");
        };
        let a4;
        if (e6.asyncContext) {
          const t6 = e6.AsyncLocalStorage || globalThis.AsyncLocalStorage;
          t6 ? a4 = new t6() : console.warn("[unctx] `AsyncLocalStorage` is not provided.");
        }
        const _getCurrentInstance = () => {
          if (a4 && void 0 === t5) {
            const e7 = a4.getStore();
            if (void 0 !== e7)
              return e7;
          }
          return t5;
        };
        return { use: () => {
          const e7 = _getCurrentInstance();
          if (void 0 === e7)
            throw new Error("Context is not available");
          return e7;
        }, tryUse: () => _getCurrentInstance(), set: (e7, a5) => {
          a5 || checkConflict(e7), t5 = e7, n3 = true;
        }, unset: () => {
          t5 = void 0, n3 = false;
        }, call: (e7, o7) => {
          checkConflict(e7), t5 = e7;
          try {
            return a4 ? a4.run(e7, o7) : o7();
          } finally {
            n3 || (t5 = void 0);
          }
        }, async callAsync(e7, o7) {
          t5 = e7;
          const onRestore = () => {
            t5 = e7;
          }, onLeave = () => t5 === e7 ? onRestore : void 0;
          ge.add(onLeave);
          try {
            const r4 = a4 ? a4.run(e7, o7) : o7();
            return n3 || (t5 = void 0), await r4;
          } finally {
            ge.delete(onLeave);
          }
        } };
      }({ ...e5, ...a3 })), t4[n2], t4[n2]) };
    }());
    ye = "__unctx_async_handlers__";
    ge = ve[ye] || (ve[ye] = /* @__PURE__ */ new Set());
    me = [defineNuxtRouteMiddleware(async (e5) => {
    })];
    xe = { NuxtError: (e5) => {
      return !!(t4 = e5) && "object" == typeof t4 && ce in t4 && e5.toJSON();
      var t4;
    }, EmptyShallowRef: (e5) => isRef(e5) && isShallow(e5) && !e5.value && ("bigint" == typeof e5.value ? "0n" : JSON.stringify(e5.value) || "_"), EmptyRef: (e5) => isRef(e5) && !e5.value && ("bigint" == typeof e5.value ? "0n" : JSON.stringify(e5.value) || "_"), ShallowRef: (e5) => isRef(e5) && isShallow(e5) && e5.value, ShallowReactive: (e5) => isReactive(e5) && isShallow(e5) && toRaw(e5), Ref: (e5) => isRef(e5) && e5.value, Reactive: (e5) => isReactive(e5) && toRaw(e5) };
    _e = [fe, defineNuxtPlugin({ name: "nuxt:router", enforce: "pre", setup(e5) {
      const t4 = e5.ssrContext.url, n2 = [], a3 = { "navigate:before": [], "resolve:before": [], "navigate:after": [], error: [] }, registerHook = (e6, t5) => (a3[e6].push(t5), () => a3[e6].splice(a3[e6].indexOf(t5), 1));
      useRuntimeConfig().app.baseURL;
      const o7 = reactive(getRouteFromPath(t4));
      async function handleNavigation(e6, t5) {
        try {
          const t6 = getRouteFromPath(e6);
          for (const e7 of a3["navigate:before"]) {
            const n3 = await e7(t6, o7);
            if (false === n3 || n3 instanceof Error)
              return;
            if ("string" == typeof n3 && n3.length)
              return handleNavigation(n3, true);
          }
          for (const e7 of a3["resolve:before"])
            await e7(t6, o7);
          Object.assign(o7, t6);
          for (const e7 of a3["navigate:after"])
            await e7(t6, o7);
        } catch (e7) {
          for (const t6 of a3.error)
            await t6(e7);
        }
      }
      const r4 = { currentRoute: computed(() => o7), isReady: () => Promise.resolve(), options: {}, install: () => Promise.resolve(), push: (e6) => handleNavigation(e6), replace: (e6) => handleNavigation(e6), back: () => (void 0).history.go(-1), go: (e6) => (void 0).history.go(e6), forward: () => (void 0).history.go(1), beforeResolve: (e6) => registerHook("resolve:before", e6), beforeEach: (e6) => registerHook("navigate:before", e6), afterEach: (e6) => registerHook("navigate:after", e6), onError: (e6) => registerHook("error", e6), resolve: getRouteFromPath, addRoute: (e6, t5) => {
        n2.push(t5);
      }, getRoutes: () => n2, hasRoute: (e6) => n2.some((t5) => t5.name === e6), removeRoute: (e6) => {
        const t5 = n2.findIndex((t6) => t6.name === e6);
        -1 !== t5 && n2.splice(t5, 1);
      } };
      e5.vueApp.component("RouterLink", defineComponent({ functional: true, props: { to: { type: String, required: true }, custom: Boolean, replace: Boolean, activeClass: String, exactActiveClass: String, ariaCurrentValue: String }, setup: (e6, { slots: t5 }) => {
        const navigate = () => handleNavigation(e6.to, e6.replace);
        return () => {
          var n3;
          const a4 = r4.resolve(e6.to);
          return e6.custom ? null == (n3 = t5.default) ? void 0 : n3.call(t5, { href: e6.to, navigate, route: a4 }) : h("a", { href: e6.to, onClick: (e7) => (e7.preventDefault(), navigate()) }, t5);
        };
      } })), e5._route = o7, e5._middleware = e5._middleware || { global: [], named: {} };
      const s2 = e5.payload.state._layout;
      return e5.hooks.hookOnce("app:created", async () => {
        r4.beforeEach(async (n3, a4) => {
          var o8;
          if (n3.meta = reactive(n3.meta || {}), e5.isHydrating && s2 && !isReadonly(n3.meta.layout) && (n3.meta.layout = s2), e5._processingMiddleware = true, !(null == (o8 = e5.ssrContext) ? void 0 : o8.islandContext)) {
            const o9 = /* @__PURE__ */ new Set([...me, ...e5._middleware.global]);
            {
              const t5 = await e5.runWithContext(() => async function(e6) {
                {
                  const t6 = toRouteMatcher(createRouter$1({ routes: useRuntimeConfig().nitro.routeRules }));
                  return te({}, ...t6.matchAll(e6).reverse());
                }
              }(n3.path));
              if (t5.appMiddleware)
                for (const n4 in t5.appMiddleware) {
                  const a5 = e5._middleware.named[n4];
                  if (!a5)
                    return;
                  t5.appMiddleware[n4] ? o9.add(a5) : o9.delete(a5);
                }
            }
            for (const r5 of o9) {
              const o10 = await e5.runWithContext(() => r5(n3, a4));
              if (false === o10 || o10 instanceof Error) {
                const n4 = o10 || createError({ statusCode: 404, statusMessage: `Page Not Found: ${t4}`, data: { path: t4 } });
                return delete e5._processingMiddleware, e5.runWithContext(() => showError(n4));
              }
              if (true !== o10 && (o10 || false === o10))
                return o10;
            }
          }
        }), r4.afterEach(() => {
          delete e5._processingMiddleware;
        }), await r4.replace(t4), isEqual(o7.fullPath, t4) || await e5.runWithContext(() => navigateTo(o7.fullPath));
      }), { provide: { route: o7, router: r4 } };
    } }), defineNuxtPlugin({ name: "nuxt:revive-payload:server", setup() {
      for (const n2 in xe)
        e5 = n2, t4 = xe[n2], useNuxtApp().ssrContext._payloadReducers[e5] = t4;
      var e5, t4;
    } }), defineNuxtPlugin({ name: "nuxt:global-components" })];
    isDefer = (e5) => "defer" === e5 || false === e5;
    we = defineComponent({ __name: "app", __ssrInlineRender: true, async setup(e5) {
      let t4, n2;
      const { data: a3 } = ([t4, n2] = withAsyncContext(() => function(e6, t5) {
        const [n3 = {}, a4] = [{}, t5], o7 = computed(() => toValue(e6)), r4 = n3.key || hash([a4, "string" == typeof o7.value ? o7.value : "", ...generateOptionSegments(n3)]);
        if (!r4 || "string" != typeof r4)
          throw new TypeError("[nuxt] [useFetch] key must be a string: " + r4);
        const s2 = r4 === a4 ? "$f" + r4 : r4;
        if (!n3.baseURL && "string" == typeof o7.value && "/" === o7.value[0] && "/" === o7.value[1])
          throw new Error('[nuxt] [useFetch] the request URL must not start with "//".');
        const { server: i3, lazy: l2, default: c2, transform: d2, pick: p2, watch: f2, immediate: v3, getCachedData: h3, deep: y3, dedupe: g2, ...m3 } = n3, x3 = reactive({ ...se, ...m3, cache: "boolean" == typeof n3.cache ? void 0 : n3.cache });
        let _3;
        return useAsyncData(s2, () => {
          var e7;
          null == (e7 = null == _3 ? void 0 : _3.abort) || e7.call(_3), _3 = "undefined" != typeof AbortController ? new AbortController() : {};
          const t6 = toValue(n3.timeout);
          let a5;
          t6 && (a5 = setTimeout(() => _3.abort(), t6), _3.signal.onabort = () => clearTimeout(a5));
          let r5 = n3.$fetch || globalThis.$fetch;
          return n3.$fetch || "string" == typeof o7.value && "/" === o7.value[0] && (!toValue(n3.baseURL) || "/" === toValue(n3.baseURL)[0]) && (r5 = useRequestFetch()), r5(o7.value, { signal: _3.signal, ...x3 }).finally(() => {
            clearTimeout(a5);
          });
        }, { server: i3, lazy: l2, default: c2, transform: d2, pick: p2, immediate: v3, getCachedData: h3, deep: y3, dedupe: g2, watch: false === f2 ? [] : [x3, o7, ...f2 || []] });
      }("/api/teste", "$siNM9WAguS")), t4 = await t4, n2(), t4);
      return (e6, t5, n3, o7) => {
        t5(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col h-96 justify-center items-center" }, o7))}><div class="text-4xl font-semibold">Hi with <span class="underline text-red-600">TailwindCSS</span></div><pre class="mt-32"><code> ${ssrInterpolate(unref(a3) || "vazio")}</code></pre></div>`);
      };
    } });
    be = we.setup;
    we.setup = (e5, t4) => {
      const n2 = useSSRContext();
      return (n2.modules || (n2.modules = /* @__PURE__ */ new Set())).add("app.vue"), be ? be(e5, t4) : void 0;
    };
    Ce2 = { __name: "nuxt-error-page", __ssrInlineRender: true, props: { error: Object }, setup(e5) {
      const t4 = e5.error;
      t4.stack && t4.stack.split("\n").splice(1).map((e6) => ({ text: e6.replace("webpack:/", "").replace(".vue", ".js").trim(), internal: e6.includes("node_modules") && !e6.includes(".cache") || e6.includes("internal") || e6.includes("new Promise") })).map((e6) => `<span class="stack${e6.internal ? " internal" : ""}">${e6.text}</span>`).join("\n");
      const n2 = Number(t4.statusCode || 500), a3 = 404 === n2, o7 = t4.statusMessage ?? (a3 ? "Page Not Found" : "Internal Server Error"), r4 = t4.message || t4.toString(), s2 = defineAsyncComponent(() => Promise.resolve().then(() => (init_error_404_CcUH1itg(), error_404_CcUH1itg_exports)).then((e6) => e6.default || e6)), i3 = defineAsyncComponent(() => Promise.resolve().then(() => (init_error_500_CTl04f3M(), error_500_CTl04f3M_exports)).then((e6) => e6.default || e6)), l2 = a3 ? s2 : i3;
      return (e6, t5, a4, s3) => {
        t5(ssrRenderComponent(unref(l2), mergeProps({ statusCode: unref(n2), statusMessage: unref(o7), description: unref(r4), stack: unref(void 0) }, s3), null, a4));
      };
    } };
    Re = Ce2.setup;
    Ce2.setup = (e5, t4) => {
      const n2 = useSSRContext();
      return (n2.modules || (n2.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt/dist/app/components/nuxt-error-page.vue"), Re ? Re(e5, t4) : void 0;
    };
    Pe = { __name: "nuxt-root", __ssrInlineRender: true, setup(e5) {
      const IslandRenderer = () => null, t4 = useNuxtApp();
      t4.deferHydration(), t4.ssrContext.url;
      const n2 = false;
      provide(ue, hasInjectionContext() ? inject(ue, useNuxtApp()._route) : useNuxtApp()._route), t4.hooks.callHookWith((e6) => e6.map((e7) => e7()), "vue:setup");
      const a3 = useError(), o7 = a3.value && !t4.ssrContext.error;
      onErrorCaptured((e6, n3, a4) => {
        t4.hooks.callHook("vue:error", e6, n3, a4).catch((e7) => console.error("[nuxt] Error in `vue:error` hook", e7));
        {
          const n4 = t4.runWithContext(() => showError(e6));
          return Be(() => n4), false;
        }
      });
      const r4 = t4.ssrContext.islandContext;
      return (e6, t5, s2, i3) => {
        ssrRenderSuspense(t5, { default: () => {
          unref(o7) ? t5("<div></div>") : unref(a3) ? t5(ssrRenderComponent(unref(Ce2), { error: unref(a3) }, null, s2)) : unref(r4) ? t5(ssrRenderComponent(unref(IslandRenderer), { context: unref(r4) }, null, s2)) : unref(n2) ? renderVNode(t5, createVNode(resolveDynamicComponent(unref(n2)), null, null), s2) : t5(ssrRenderComponent(unref(we), null, null, s2));
        }, _: 1 });
      };
    } };
    ke = Pe.setup;
    Pe.setup = (e5, t4) => {
      const n2 = useSSRContext();
      return (n2.modules || (n2.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt/dist/app/components/nuxt-root.vue"), ke ? ke(e5, t4) : void 0;
    }, Ae = async function(e5) {
      const t4 = createApp(Pe), n2 = function(e6) {
        let t5 = 0;
        const n3 = { _name: ie, _scope: effectScope(), provide: void 0, globalName: "nuxt", versions: { get nuxt() {
          return "3.12.4";
        }, get vue() {
          return n3.vueApp.version;
        } }, payload: shallowReactive({ data: shallowReactive({}), state: reactive({}), once: /* @__PURE__ */ new Set(), _errors: shallowReactive({}) }), static: { data: {} }, runWithContext: (e7) => n3._scope.active && !getCurrentScope() ? n3._scope.run(() => callWithNuxt(n3, e7)) : callWithNuxt(n3, e7), isHydrating: false, deferHydration() {
          if (!n3.isHydrating)
            return () => {
            };
          t5++;
          let e7 = false;
          return () => {
            if (!e7)
              return e7 = true, t5--, 0 === t5 ? (n3.isHydrating = false, n3.callHook("app:suspense:resolve")) : void 0;
          };
        }, _asyncDataPromises: {}, _asyncData: shallowReactive({}), _payloadRevivers: {}, ...e6 };
        n3.payload.serverRendered = true, n3.hooks = createHooks(), n3.hook = n3.hooks.hook;
        {
          const contextCaller = async function(e7, t6) {
            for (const a4 of e7)
              await n3.runWithContext(() => a4(...t6));
          };
          n3.hooks.callHook = (e7, ...t6) => n3.hooks.callHookWith(contextCaller, e7, ...t6);
        }
        n3.callHook = n3.hooks.callHook, n3.provide = (e7, t6) => {
          const a4 = "$" + e7;
          defineGetter(n3, a4, t6), defineGetter(n3.vueApp.config.globalProperties, a4, t6);
        }, defineGetter(n3.vueApp, "$nuxt", n3), defineGetter(n3.vueApp.config.globalProperties, "$nuxt", n3), n3.ssrContext && (n3.ssrContext.nuxt = n3, n3.ssrContext._payloadReducers = {}, n3.payload.path = n3.ssrContext.url), n3.ssrContext = n3.ssrContext || {}, n3.ssrContext.payload && Object.assign(n3.payload, n3.ssrContext.payload), n3.ssrContext.payload = n3.payload, n3.ssrContext.config = { public: e6.ssrContext.runtimeConfig.public, app: e6.ssrContext.runtimeConfig.app };
        const a3 = e6.ssrContext.runtimeConfig;
        return n3.provide("config", a3), n3;
      }({ vueApp: t4, ssrContext: e5 });
      try {
        await async function(e6, t5) {
          var n3, a3, o7, r4;
          const s2 = [], i3 = [], l2 = [], u3 = [];
          let c2 = 0;
          async function executePlugin(n4) {
            var a4;
            const o8 = (null == (a4 = n4.dependsOn) ? void 0 : a4.filter((e7) => t5.some((t6) => t6._name === e7) && !s2.includes(e7))) ?? [];
            if (o8.length > 0)
              i3.push([new Set(o8), n4]);
            else {
              const t6 = async function(e7, t7) {
                if ("function" == typeof t7) {
                  const { provide: n5 } = await e7.runWithContext(() => t7(e7)) || {};
                  if (n5 && "object" == typeof n5)
                    for (const t8 in n5)
                      e7.provide(t8, n5[t8]);
                }
              }(e6, n4).then(async () => {
                n4._name && (s2.push(n4._name), await Promise.all(i3.map(async ([e7, t7]) => {
                  e7.has(n4._name) && (e7.delete(n4._name), 0 === e7.size && (c2++, await executePlugin(t7)));
                })));
              });
              n4.parallel ? l2.push(t6.catch((e7) => u3.push(e7))) : await t6;
            }
          }
          for (const o8 of t5)
            (null == (n3 = e6.ssrContext) ? void 0 : n3.islandContext) && false === (null == (a3 = o8.env) ? void 0 : a3.islands) || registerPluginHooks(e6, o8);
          for (const n4 of t5)
            (null == (o7 = e6.ssrContext) ? void 0 : o7.islandContext) && false === (null == (r4 = n4.env) ? void 0 : r4.islands) || await executePlugin(n4);
          if (await Promise.all(l2), c2)
            for (let e7 = 0; e7 < c2; e7++)
              await Promise.all(l2);
          if (u3.length)
            throw u3[0];
        }(n2, _e), await n2.hooks.callHook("app:created", t4);
      } catch (e6) {
        await n2.hooks.callHook("app:error", e6), n2.payload.error = n2.payload.error || createError2(e6);
      }
      if (null == e5 ? void 0 : e5._renderResponse)
        throw new Error("skipping render");
      return t4;
    };
    entry$1 = (e5) => Ae(e5);
  }
});

// .wrangler/tmp/pages-FEt2Fg/chunks/virtual/_virtual_spa-template.mjs
var virtual_spa_template_exports = {};
__export(virtual_spa_template_exports, {
  template: () => o4
});
var o4;
var init_virtual_spa_template = __esm({
  ".wrangler/tmp/pages-FEt2Fg/chunks/virtual/_virtual_spa-template.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    o4 = "";
  }
});

// .wrangler/tmp/pages-FEt2Fg/chunks/routes/renderer.mjs
var renderer_exports = {};
__export(renderer_exports, {
  A: () => renderVNode,
  B: () => createVNode,
  C: () => resolveDynamicComponent,
  D: () => isRef,
  E: () => isShallow,
  F: () => isReactive,
  G: () => toRaw,
  H: () => ref,
  I: () => shallowRef,
  J: () => Be,
  K: () => defineAsyncComponent,
  L: () => withCtx,
  M: () => createTextVNode,
  N: () => toDisplayString,
  O: () => resolveComponent,
  P: () => watchEffect,
  Q: () => watch,
  R: () => Hn,
  a: () => useSSRContext,
  b: () => baseURL,
  c: () => createApp,
  d: () => defineComponent,
  e: () => effectScope,
  f: () => getCurrentScope,
  g: () => getActiveHead,
  h: () => ssrRenderAttrs,
  i: () => inject,
  j: () => ssrInterpolate,
  k: () => hasInjectionContext,
  l: () => getCurrentInstance,
  m: () => mergeProps,
  n: () => ssrRenderSuspense,
  o: () => onErrorCaptured,
  p: () => provide,
  q: () => computed,
  r: () => reactive,
  s: () => shallowReactive,
  t: () => toRef,
  u: () => unref,
  v: () => h,
  w: () => withAsyncContext,
  x: () => isReadonly,
  y: () => toValue,
  z: () => ssrRenderComponent
});
function getModuleDependencies(e5, t4) {
  if (t4._dependencies[e5])
    return t4._dependencies[e5];
  const n2 = t4._dependencies[e5] = { scripts: {}, styles: {}, preload: {}, prefetch: {} }, r4 = t4.manifest[e5];
  if (!r4)
    return n2;
  r4.file && (n2.preload[e5] = r4, (r4.isEntry || r4.sideEffects) && (n2.scripts[e5] = r4));
  for (const e6 of r4.css || [])
    n2.styles[e6] = n2.preload[e6] = n2.prefetch[e6] = t4.manifest[e6];
  for (const e6 of r4.assets || [])
    n2.preload[e6] = n2.prefetch[e6] = t4.manifest[e6];
  for (const e6 of r4.imports || []) {
    const r5 = getModuleDependencies(e6, t4);
    Object.assign(n2.styles, r5.styles), Object.assign(n2.preload, r5.preload), Object.assign(n2.prefetch, r5.prefetch);
  }
  const o7 = {};
  for (const e6 in n2.preload) {
    const t5 = n2.preload[e6];
    t5.preload && (o7[e6] = t5);
  }
  return n2.preload = o7, n2;
}
function getRequestDependencies(e5, t4) {
  if (e5._requestDependencies)
    return e5._requestDependencies;
  const n2 = function(e6, t5) {
    const n3 = Array.from(e6).sort().join(",");
    if (t5._dependencySets[n3])
      return t5._dependencySets[n3];
    const r4 = { scripts: {}, styles: {}, preload: {}, prefetch: {} };
    for (const n4 of e6) {
      const e7 = getModuleDependencies(n4, t5);
      Object.assign(r4.scripts, e7.scripts), Object.assign(r4.styles, e7.styles), Object.assign(r4.preload, e7.preload), Object.assign(r4.prefetch, e7.prefetch);
      for (const e8 of t5.manifest[n4]?.dynamicImports || []) {
        const n5 = getModuleDependencies(e8, t5);
        Object.assign(r4.prefetch, n5.scripts), Object.assign(r4.prefetch, n5.styles), Object.assign(r4.prefetch, n5.preload);
      }
    }
    const o7 = {};
    for (const e7 in r4.prefetch) {
      const t6 = r4.prefetch[e7];
      t6.prefetch && (o7[e7] = t6);
    }
    r4.prefetch = o7;
    for (const e7 in r4.preload)
      delete r4.prefetch[e7];
    for (const e7 in r4.styles)
      delete r4.preload[e7], delete r4.prefetch[e7];
    return t5._dependencySets[n3] = r4, r4;
  }(new Set(Array.from([...t4._entrypoints, ...e5.modules || e5._registeredComponents || []])), t4);
  return e5._requestDependencies = n2, n2;
}
function renderStyles(e5, t4) {
  const { styles: n2 } = getRequestDependencies(e5, t4);
  return Object.values(n2).map((e6) => renderLinkToString({ rel: "stylesheet", href: t4.buildAssetsURL(e6.file) })).join("");
}
function getResources(e5, t4) {
  return [...getPreloadLinks(e5, t4), ...getPrefetchLinks(e5, t4)];
}
function renderResourceHints(e5, t4) {
  return getResources(e5, t4).map(renderLinkToString).join("");
}
function renderResourceHeaders(e5, t4) {
  return { link: getResources(e5, t4).map(renderLinkToHeader).join(", ") };
}
function getPreloadLinks(e5, t4) {
  const { preload: n2 } = getRequestDependencies(e5, t4);
  return Object.values(n2).map((e6) => ({ rel: e6.module ? "modulepreload" : "preload", as: e6.resourceType, type: e6.mimeType ?? null, crossorigin: "font" === e6.resourceType || "script" === e6.resourceType || e6.module ? "" : null, href: t4.buildAssetsURL(e6.file) }));
}
function getPrefetchLinks(e5, t4) {
  const { prefetch: n2 } = getRequestDependencies(e5, t4);
  return Object.values(n2).map((e6) => ({ rel: "prefetch", as: e6.resourceType, type: e6.mimeType ?? null, crossorigin: "font" === e6.resourceType || "script" === e6.resourceType || e6.module ? "" : null, href: t4.buildAssetsURL(e6.file) }));
}
function renderScripts(e5, t4) {
  const { scripts: n2 } = getRequestDependencies(e5, t4);
  return Object.values(n2).map((e6) => {
    return n3 = { type: e6.module ? "module" : null, src: t4.buildAssetsURL(e6.file), defer: e6.module ? null : "", crossorigin: "" }, `<script${Object.entries(n3).map(([e7, t5]) => null === t5 ? "" : t5 ? ` ${e7}="${t5}"` : " " + e7).join("")}><\/script>`;
    var n3;
  }).join("");
}
function createRenderer$1(e5, t4) {
  const n2 = function({ manifest: e6, buildAssetsURL: t5 }) {
    const n3 = { buildAssetsURL: t5 || withLeadingSlash, manifest: void 0, updateManifest, _dependencies: void 0, _dependencySets: void 0, _entrypoints: void 0 };
    function updateManifest(e7) {
      const t6 = Object.entries(e7);
      n3.manifest = e7, n3._dependencies = {}, n3._dependencySets = {}, n3._entrypoints = t6.filter((e8) => e8[1].isEntry).map(([e8]) => e8);
    }
    return updateManifest(e6), n3;
  }(t4);
  return { rendererContext: n2, async renderToString(r4) {
    r4._registeredComponents = r4._registeredComponents || /* @__PURE__ */ new Set();
    const o7 = await Promise.resolve(e5).then((e6) => "default" in e6 ? e6.default : e6), s2 = await o7(r4), wrap = (e6) => () => e6(r4, n2);
    return { html: await t4.renderToString(s2, r4), renderResourceHeaders: wrap(renderResourceHeaders), renderResourceHints: wrap(renderResourceHints), renderStyles: wrap(renderStyles), renderScripts: wrap(renderScripts) };
  } };
}
function renderLinkToString(e5) {
  return `<link${Object.entries(e5).map(([e6, t4]) => null === t4 ? "" : t4 ? ` ${e6}="${t4}"` : " " + e6).join("")}>`;
}
function renderLinkToHeader(e5) {
  return `<${e5.href}>${Object.entries(e5).map(([e6, t4]) => "href" === e6 || null === t4 ? "" : t4 ? `; ${e6}="${t4}"` : `; ${e6}`).join("")}`;
}
function is_primitive(e5) {
  return Object(e5) !== e5;
}
function is_plain_object(e5) {
  const t4 = Object.getPrototypeOf(e5);
  return t4 === Object.prototype || null === t4 || Object.getOwnPropertyNames(t4).sort().join("\0") === y;
}
function get_type(e5) {
  return Object.prototype.toString.call(e5).slice(8, -1);
}
function get_escaped_char(e5) {
  switch (e5) {
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
      return e5 < " " ? `\\u${e5.charCodeAt(0).toString(16).padStart(4, "0")}` : "";
  }
}
function stringify_string(e5) {
  let t4 = "", n2 = 0;
  const r4 = e5.length;
  for (let o7 = 0; o7 < r4; o7 += 1) {
    const r5 = get_escaped_char(e5[o7]);
    r5 && (t4 += e5.slice(n2, o7) + r5, n2 = o7 + 1);
  }
  return `"${0 === n2 ? e5 : t4 + e5.slice(n2)}"`;
}
function enumerable_symbols(e5) {
  return Object.getOwnPropertySymbols(e5).filter((t4) => Object.getOwnPropertyDescriptor(e5, t4).enumerable);
}
function uneval(e5, t4) {
  const n2 = /* @__PURE__ */ new Map(), r4 = [], o7 = /* @__PURE__ */ new Map();
  !function walk(e6) {
    if ("function" == typeof e6)
      throw new DevalueError("Cannot stringify a function", r4);
    if (!is_primitive(e6)) {
      if (n2.has(e6))
        return void n2.set(e6, n2.get(e6) + 1);
      n2.set(e6, 1);
      switch (get_type(e6)) {
        case "Number":
        case "BigInt":
        case "String":
        case "Boolean":
        case "Date":
        case "RegExp":
          return;
        case "Array":
          e6.forEach((e7, t5) => {
            r4.push(`[${t5}]`), walk(e7), r4.pop();
          });
          break;
        case "Set":
          Array.from(e6).forEach(walk);
          break;
        case "Map":
          for (const [t5, n3] of e6)
            r4.push(`.get(${is_primitive(t5) ? stringify_primitive$1(t5) : "..."})`), walk(n3), r4.pop();
          break;
        default:
          if (!is_plain_object(e6))
            throw new DevalueError("Cannot stringify arbitrary non-POJOs", r4);
          if (enumerable_symbols(e6).length > 0)
            throw new DevalueError("Cannot stringify POJOs with symbolic keys", r4);
          for (const t5 in e6)
            r4.push(`.${t5}`), walk(e6[t5]), r4.pop();
      }
    }
  }(e5);
  const s2 = /* @__PURE__ */ new Map();
  function stringify3(e6) {
    if (s2.has(e6))
      return s2.get(e6);
    if (is_primitive(e6))
      return stringify_primitive$1(e6);
    if (o7.has(e6))
      return o7.get(e6);
    const t5 = get_type(e6);
    switch (t5) {
      case "Number":
      case "String":
      case "Boolean":
        return `Object(${stringify3(e6.valueOf())})`;
      case "RegExp":
        return `new RegExp(${stringify_string(e6.source)}, "${e6.flags}")`;
      case "Date":
        return `new Date(${e6.getTime()})`;
      case "Array":
        const n3 = e6.map((t6, n4) => n4 in e6 ? stringify3(t6) : ""), r5 = 0 === e6.length || e6.length - 1 in e6 ? "" : ",";
        return `[${n3.join(",")}${r5}]`;
      case "Set":
      case "Map":
        return `new ${t5}([${Array.from(e6).map(stringify3).join(",")}])`;
      default:
        const o8 = `{${Object.keys(e6).map((t6) => `${function(e7) {
          return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(e7) ? e7 : escape_unsafe_chars(JSON.stringify(e7));
        }(t6)}:${stringify3(e6[t6])}`).join(",")}}`;
        return null === Object.getPrototypeOf(e6) ? Object.keys(e6).length > 0 ? `Object.assign(Object.create(null),${o8})` : "Object.create(null)" : o8;
    }
  }
  Array.from(n2).filter((e6) => e6[1] > 1).sort((e6, t5) => t5[1] - e6[1]).forEach((e6, t5) => {
    s2.set(e6[0], function(e7) {
      let t6 = "";
      do {
        t6 = v[e7 % v.length] + t6, e7 = ~~(e7 / v.length) - 1;
      } while (e7 >= 0);
      return b.test(t6) ? `${t6}0` : t6;
    }(t5));
  });
  const i3 = stringify3(e5);
  if (s2.size) {
    const e6 = [], t5 = [], n3 = [];
    return s2.forEach((r5, s3) => {
      if (e6.push(r5), o7.has(s3))
        return void n3.push(o7.get(s3));
      if (is_primitive(s3))
        return void n3.push(stringify_primitive$1(s3));
      switch (get_type(s3)) {
        case "Number":
        case "String":
        case "Boolean":
          n3.push(`Object(${stringify3(s3.valueOf())})`);
          break;
        case "RegExp":
          n3.push(s3.toString());
          break;
        case "Date":
          n3.push(`new Date(${s3.getTime()})`);
          break;
        case "Array":
          n3.push(`Array(${s3.length})`), s3.forEach((e7, n4) => {
            t5.push(`${r5}[${n4}]=${stringify3(e7)}`);
          });
          break;
        case "Set":
          n3.push("new Set"), t5.push(`${r5}.${Array.from(s3).map((e7) => `add(${stringify3(e7)})`).join(".")}`);
          break;
        case "Map":
          n3.push("new Map"), t5.push(`${r5}.${Array.from(s3).map(([e7, t6]) => `set(${stringify3(e7)}, ${stringify3(t6)})`).join(".")}`);
          break;
        default:
          n3.push(null === Object.getPrototypeOf(s3) ? "Object.create(null)" : "{}"), Object.keys(s3).forEach((e7) => {
            t5.push(`${r5}${function(e8) {
              return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(e8) ? `.${e8}` : `[${escape_unsafe_chars(JSON.stringify(e8))}]`;
            }(e7)}=${stringify3(s3[e7])}`);
          });
      }
    }), t5.push(`return ${i3}`), `(function(${e6.join(",")}){${t5.join(";")}}(${n3.join(",")}))`;
  }
  return i3;
}
function escape_unsafe_char(e5) {
  return m[e5] || e5;
}
function escape_unsafe_chars(e5) {
  return e5.replace(_, escape_unsafe_char);
}
function stringify_primitive$1(e5) {
  if ("string" == typeof e5)
    return stringify_string(e5);
  if (void 0 === e5)
    return "void 0";
  if (0 === e5 && 1 / e5 < 0)
    return "-0";
  const t4 = String(e5);
  return "number" == typeof e5 ? t4.replace(/^(-)?0\./, "$1.") : "bigint" == typeof e5 ? e5 + "n" : t4;
}
function stringify(e5, t4) {
  const n2 = [], r4 = /* @__PURE__ */ new Map(), o7 = [];
  for (const e6 in t4)
    o7.push({ key: e6, fn: t4[e6] });
  const s2 = [];
  let i3 = 0;
  const a3 = function flatten(e6) {
    if ("function" == typeof e6)
      throw new DevalueError("Cannot stringify a function", s2);
    if (r4.has(e6))
      return r4.get(e6);
    if (void 0 === e6)
      return k;
    if (Number.isNaN(e6))
      return w;
    if (e6 === 1 / 0)
      return S;
    if (e6 === -1 / 0)
      return C;
    if (0 === e6 && 1 / e6 < 0)
      return x;
    const t5 = i3++;
    r4.set(e6, t5);
    for (const { key: r5, fn: s3 } of o7) {
      const o8 = s3(e6);
      if (o8)
        return n2[t5] = `["${r5}",${flatten(o8)}]`, t5;
    }
    let a4 = "";
    if (is_primitive(e6))
      a4 = stringify_primitive(e6);
    else {
      switch (get_type(e6)) {
        case "Number":
        case "String":
        case "Boolean":
          a4 = `["Object",${stringify_primitive(e6)}]`;
          break;
        case "BigInt":
          a4 = `["BigInt",${e6}]`;
          break;
        case "Date":
          a4 = `["Date","${!isNaN(e6.getDate()) ? e6.toISOString() : ""}"]`;
          break;
        case "RegExp":
          const { source: t6, flags: n3 } = e6;
          a4 = n3 ? `["RegExp",${stringify_string(t6)},"${n3}"]` : `["RegExp",${stringify_string(t6)}]`;
          break;
        case "Array":
          a4 = "[";
          for (let t7 = 0; t7 < e6.length; t7 += 1)
            t7 > 0 && (a4 += ","), t7 in e6 ? (s2.push(`[${t7}]`), a4 += flatten(e6[t7]), s2.pop()) : a4 += R;
          a4 += "]";
          break;
        case "Set":
          a4 = '["Set"';
          for (const t7 of e6)
            a4 += `,${flatten(t7)}`;
          a4 += "]";
          break;
        case "Map":
          a4 = '["Map"';
          for (const [t7, n4] of e6)
            s2.push(`.get(${is_primitive(t7) ? stringify_primitive(t7) : "..."})`), a4 += `,${flatten(t7)},${flatten(n4)}`, s2.pop();
          a4 += "]";
          break;
        default:
          if (!is_plain_object(e6))
            throw new DevalueError("Cannot stringify arbitrary non-POJOs", s2);
          if (enumerable_symbols(e6).length > 0)
            throw new DevalueError("Cannot stringify POJOs with symbolic keys", s2);
          if (null === Object.getPrototypeOf(e6)) {
            a4 = '["null"';
            for (const t7 in e6)
              s2.push(`.${t7}`), a4 += `,${stringify_string(t7)},${flatten(e6[t7])}`, s2.pop();
            a4 += "]";
          } else {
            a4 = "{";
            let t7 = false;
            for (const n4 in e6)
              t7 && (a4 += ","), t7 = true, s2.push(`.${n4}`), a4 += `${stringify_string(n4)}:${flatten(e6[n4])}`, s2.pop();
            a4 += "}";
          }
      }
    }
    return n2[t5] = a4, t5;
  }(e5);
  return a3 < 0 ? `${a3}` : `[${n2.join(",")}]`;
}
function stringify_primitive(e5) {
  const t4 = typeof e5;
  return "string" === t4 ? stringify_string(e5) : e5 instanceof String ? stringify_string(e5.toString()) : void 0 === e5 ? k.toString() : 0 === e5 && 1 / e5 < 0 ? x.toString() : "bigint" === t4 ? `["BigInt","${e5}"]` : String(e5);
}
function makeMap(e5, t4) {
  const n2 = new Set(e5.split(","));
  return (e6) => n2.has(e6);
}
function normalizeStyle(e5) {
  if (E(e5)) {
    const t4 = {};
    for (let n2 = 0; n2 < e5.length; n2++) {
      const r4 = e5[n2], o7 = isString(r4) ? parseStringStyle(r4) : normalizeStyle(r4);
      if (o7)
        for (const e6 in o7)
          t4[e6] = o7[e6];
    }
    return t4;
  }
  if (isString(e5) || isObject(e5))
    return e5;
}
function parseStringStyle(e5) {
  const t4 = {};
  return e5.replace(z2, "").split(D).forEach((e6) => {
    if (e6) {
      const n2 = e6.split(U);
      n2.length > 1 && (t4[n2[0].trim()] = n2[1].trim());
    }
  }), t4;
}
function normalizeClass(e5) {
  let t4 = "";
  if (isString(e5))
    t4 = e5;
  else if (E(e5))
    for (let n2 = 0; n2 < e5.length; n2++) {
      const r4 = normalizeClass(e5[n2]);
      r4 && (t4 += r4 + " ");
    }
  else if (isObject(e5))
    for (const n2 in e5)
      e5[n2] && (t4 += n2 + " ");
  return t4.trim();
}
function includeBooleanAttr(e5) {
  return !!e5 || "" === e5;
}
function escapeHtml$1(e5) {
  const t4 = "" + e5, n2 = Y.exec(t4);
  if (!n2)
    return t4;
  let r4, o7, s2 = "", i3 = 0;
  for (o7 = n2.index; o7 < t4.length; o7++) {
    switch (t4.charCodeAt(o7)) {
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
    i3 !== o7 && (s2 += t4.slice(i3, o7)), i3 = o7 + 1, s2 += r4;
  }
  return i3 !== o7 ? s2 + t4.slice(i3, o7) : s2;
}
function effectScope(e5) {
  return new EffectScope(e5);
}
function getCurrentScope() {
  return ee2;
}
function triggerComputed(e5) {
  return e5.value;
}
function preCleanupEffect(e5) {
  e5._trackId++, e5._depsLength = 0;
}
function postCleanupEffect(e5) {
  if (e5.deps.length > e5._depsLength) {
    for (let t4 = e5._depsLength; t4 < e5.deps.length; t4++)
      cleanupDepEffect(e5.deps[t4], e5);
    e5.deps.length = e5._depsLength;
  }
}
function cleanupDepEffect(e5, t4) {
  const n2 = e5.get(t4);
  void 0 !== n2 && t4._trackId !== n2 && (e5.delete(t4), 0 === e5.size && e5.cleanup());
}
function pauseTracking() {
  oe2.push(ne2), ne2 = false;
}
function resetTracking() {
  const e5 = oe2.pop();
  ne2 = void 0 === e5 || e5;
}
function pauseScheduling() {
  re2++;
}
function resetScheduling() {
  for (re2--; !re2 && se2.length; )
    se2.shift()();
}
function trackEffect(e5, t4, n2) {
  if (t4.get(e5) !== e5._trackId) {
    t4.set(e5, e5._trackId);
    const n3 = e5.deps[e5._depsLength];
    n3 !== t4 ? (n3 && cleanupDepEffect(n3, e5), e5.deps[e5._depsLength++] = t4) : e5._depsLength++;
  }
}
function triggerEffects(e5, t4, n2) {
  pauseScheduling();
  for (const n3 of e5.keys()) {
    let r4;
    n3._dirtyLevel < t4 && (null != r4 ? r4 : r4 = e5.get(n3) === n3._trackId) && (n3._shouldSchedule || (n3._shouldSchedule = 0 === n3._dirtyLevel), n3._dirtyLevel = t4), n3._shouldSchedule && (null != r4 ? r4 : r4 = e5.get(n3) === n3._trackId) && (n3.trigger(), n3._runnings && !n3.allowRecurse || 2 === n3._dirtyLevel || (n3._shouldSchedule = false, n3.scheduler && se2.push(n3.scheduler)));
  }
  resetScheduling();
}
function track(e5, t4, n2) {
  if (ne2 && te3) {
    let t5 = ie2.get(e5);
    t5 || ie2.set(e5, t5 = /* @__PURE__ */ new Map());
    let r4 = t5.get(n2);
    r4 || t5.set(n2, r4 = createDep(() => t5.delete(n2))), trackEffect(te3, r4);
  }
}
function trigger(e5, t4, n2, r4, o7, s2) {
  const i3 = ie2.get(e5);
  if (!i3)
    return;
  let a3 = [];
  if ("clear" === t4)
    a3 = [...i3.values()];
  else if ("length" === n2 && E(e5)) {
    const e6 = Number(r4);
    i3.forEach((t5, n3) => {
      ("length" === n3 || !isSymbol(n3) && n3 >= e6) && a3.push(t5);
    });
  } else
    switch (void 0 !== n2 && a3.push(i3.get(n2)), t4) {
      case "add":
        E(e5) ? isIntegerKey(n2) && a3.push(i3.get("length")) : (a3.push(i3.get(ae2)), isMap(e5) && a3.push(i3.get(le2)));
        break;
      case "delete":
        E(e5) || (a3.push(i3.get(ae2)), isMap(e5) && a3.push(i3.get(le2)));
        break;
      case "set":
        isMap(e5) && a3.push(i3.get(ae2));
    }
  pauseScheduling();
  for (const e6 of a3)
    e6 && triggerEffects(e6, 4);
  resetScheduling();
}
function createArrayInstrumentations() {
  const e5 = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t4) => {
    e5[t4] = function(...e6) {
      const n2 = toRaw(this);
      for (let e7 = 0, t5 = this.length; e7 < t5; e7++)
        track(n2, 0, e7 + "");
      const r4 = n2[t4](...e6);
      return -1 === r4 || false === r4 ? n2[t4](...e6.map(toRaw)) : r4;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((t4) => {
    e5[t4] = function(...e6) {
      pauseTracking(), pauseScheduling();
      const n2 = toRaw(this)[t4].apply(this, e6);
      return resetScheduling(), resetTracking(), n2;
    };
  }), e5;
}
function hasOwnProperty(e5) {
  isSymbol(e5) || (e5 = String(e5));
  const t4 = toRaw(this);
  return track(t4, 0, e5), t4.hasOwnProperty(e5);
}
function get(e5, t4, n2 = false, r4 = false) {
  const o7 = toRaw(e5 = e5.__v_raw), s2 = toRaw(t4);
  n2 || (hasChanged(t4, s2) && track(o7, 0, t4), track(o7, 0, s2));
  const { has: i3 } = getProto(o7), a3 = r4 ? toShallow : n2 ? toReadonly : toReactive;
  return i3.call(o7, t4) ? a3(e5.get(t4)) : i3.call(o7, s2) ? a3(e5.get(s2)) : void (e5 !== o7 && e5.get(t4));
}
function has(e5, t4 = false) {
  const n2 = this.__v_raw, r4 = toRaw(n2), o7 = toRaw(e5);
  return t4 || (hasChanged(e5, o7) && track(r4, 0, e5), track(r4, 0, o7)), e5 === o7 ? n2.has(e5) : n2.has(e5) || n2.has(o7);
}
function size(e5, t4 = false) {
  return e5 = e5.__v_raw, !t4 && track(toRaw(e5), 0, ae2), Reflect.get(e5, "size", e5);
}
function add(e5, t4 = false) {
  t4 || isShallow(e5) || isReadonly(e5) || (e5 = toRaw(e5));
  const n2 = toRaw(this);
  return getProto(n2).has.call(n2, e5) || (n2.add(e5), trigger(n2, "add", e5, e5)), this;
}
function set(e5, t4, n2 = false) {
  n2 || isShallow(t4) || isReadonly(t4) || (t4 = toRaw(t4));
  const r4 = toRaw(this), { has: o7, get: s2 } = getProto(r4);
  let i3 = o7.call(r4, e5);
  i3 || (e5 = toRaw(e5), i3 = o7.call(r4, e5));
  const a3 = s2.call(r4, e5);
  return r4.set(e5, t4), i3 ? hasChanged(t4, a3) && trigger(r4, "set", e5, t4) : trigger(r4, "add", e5, t4), this;
}
function deleteEntry(e5) {
  const t4 = toRaw(this), { has: n2, get: r4 } = getProto(t4);
  let o7 = n2.call(t4, e5);
  o7 || (e5 = toRaw(e5), o7 = n2.call(t4, e5)), r4 && r4.call(t4, e5);
  const s2 = t4.delete(e5);
  return o7 && trigger(t4, "delete", e5, void 0), s2;
}
function clear() {
  const e5 = toRaw(this), t4 = 0 !== e5.size, n2 = e5.clear();
  return t4 && trigger(e5, "clear", void 0, void 0), n2;
}
function createForEach(e5, t4) {
  return function(n2, r4) {
    const o7 = this, s2 = o7.__v_raw, i3 = toRaw(s2), a3 = t4 ? toShallow : e5 ? toReadonly : toReactive;
    return !e5 && track(i3, 0, ae2), s2.forEach((e6, t5) => n2.call(r4, a3(e6), a3(t5), o7));
  };
}
function createIterableMethod(e5, t4, n2) {
  return function(...r4) {
    const o7 = this.__v_raw, s2 = toRaw(o7), i3 = isMap(s2), a3 = "entries" === e5 || e5 === Symbol.iterator && i3, l2 = "keys" === e5 && i3, c2 = o7[e5](...r4), u3 = n2 ? toShallow : t4 ? toReadonly : toReactive;
    return !t4 && track(s2, 0, l2 ? le2 : ae2), { next() {
      const { value: e6, done: t5 } = c2.next();
      return t5 ? { value: e6, done: t5 } : { value: a3 ? [u3(e6[0]), u3(e6[1])] : u3(e6), done: t5 };
    }, [Symbol.iterator]() {
      return this;
    } };
  };
}
function createReadonlyMethod(e5) {
  return function(...t4) {
    return "delete" !== e5 && ("clear" === e5 ? void 0 : this);
  };
}
function createInstrumentations() {
  const e5 = { get(e6) {
    return get(this, e6);
  }, get size() {
    return size(this);
  }, has, add, set, delete: deleteEntry, clear, forEach: createForEach(false, false) }, t4 = { get(e6) {
    return get(this, e6, false, true);
  }, get size() {
    return size(this);
  }, has, add(e6) {
    return add.call(this, e6, true);
  }, set(e6, t5) {
    return set.call(this, e6, t5, true);
  }, delete: deleteEntry, clear, forEach: createForEach(false, true) }, n2 = { get(e6) {
    return get(this, e6, true);
  }, get size() {
    return size(this, true);
  }, has(e6) {
    return has.call(this, e6, true);
  }, add: createReadonlyMethod("add"), set: createReadonlyMethod("set"), delete: createReadonlyMethod("delete"), clear: createReadonlyMethod("clear"), forEach: createForEach(true, false) }, r4 = { get(e6) {
    return get(this, e6, true, true);
  }, get size() {
    return size(this, true);
  }, has(e6) {
    return has.call(this, e6, true);
  }, add: createReadonlyMethod("add"), set: createReadonlyMethod("set"), delete: createReadonlyMethod("delete"), clear: createReadonlyMethod("clear"), forEach: createForEach(true, true) };
  return ["keys", "values", "entries", Symbol.iterator].forEach((o7) => {
    e5[o7] = createIterableMethod(o7, false, false), n2[o7] = createIterableMethod(o7, true, false), t4[o7] = createIterableMethod(o7, false, true), r4[o7] = createIterableMethod(o7, true, true);
  }), [e5, n2, t4, r4];
}
function createInstrumentationGetter(e5, t4) {
  const n2 = t4 ? e5 ? ve3 : ye2 : e5 ? me2 : ge2;
  return (t5, r4, o7) => "__v_isReactive" === r4 ? !e5 : "__v_isReadonly" === r4 ? e5 : "__v_raw" === r4 ? t5 : Reflect.get(hasOwn(n2, r4) && r4 in t5 ? n2 : t5, r4, o7);
}
function reactive(e5) {
  return isReadonly(e5) ? e5 : createReactiveObject(e5, false, fe2, _e2, Re2);
}
function shallowReactive(e5) {
  return createReactiveObject(e5, false, he2, be2, we2);
}
function readonly(e5) {
  return createReactiveObject(e5, true, de2, ke2, Se);
}
function createReactiveObject(e5, t4, n2, r4, o7) {
  if (!isObject(e5))
    return e5;
  if (e5.__v_raw && (!t4 || !e5.__v_isReactive))
    return e5;
  const s2 = o7.get(e5);
  if (s2)
    return s2;
  const i3 = (a3 = e5).__v_skip || !Object.isExtensible(a3) ? 0 : function(e6) {
    switch (e6) {
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
  }(toRawType(a3));
  var a3;
  if (0 === i3)
    return e5;
  const l2 = new Proxy(e5, 2 === i3 ? r4 : n2);
  return o7.set(e5, l2), l2;
}
function isReactive(e5) {
  return isReadonly(e5) ? isReactive(e5.__v_raw) : !(!e5 || !e5.__v_isReactive);
}
function isReadonly(e5) {
  return !(!e5 || !e5.__v_isReadonly);
}
function isShallow(e5) {
  return !(!e5 || !e5.__v_isShallow);
}
function isProxy(e5) {
  return !!e5 && !!e5.__v_raw;
}
function toRaw(e5) {
  const t4 = e5 && e5.__v_raw;
  return t4 ? toRaw(t4) : e5;
}
function trackRefValue(e5) {
  var t4;
  ne2 && te3 && (e5 = toRaw(e5), trackEffect(te3, null != (t4 = e5.dep) ? t4 : e5.dep = createDep(() => e5.dep = void 0, e5 instanceof ComputedRefImpl ? e5 : void 0)));
}
function triggerRefValue(e5, t4 = 4, n2, r4) {
  const o7 = (e5 = toRaw(e5)).dep;
  o7 && triggerEffects(o7, t4);
}
function isRef(e5) {
  return !(!e5 || true !== e5.__v_isRef);
}
function ref(e5) {
  return createRef(e5, false);
}
function shallowRef(e5) {
  return createRef(e5, true);
}
function createRef(e5, t4) {
  return isRef(e5) ? e5 : new RefImpl(e5, t4);
}
function unref(e5) {
  return isRef(e5) ? e5.value : e5;
}
function toValue(e5) {
  return isFunction(e5) ? e5() : unref(e5);
}
function proxyRefs(e5) {
  return isReactive(e5) ? e5 : new Proxy(e5, xe2);
}
function toRef(e5, t4, n2) {
  return isRef(e5) ? e5 : isFunction(e5) ? new GetterRefImpl(e5) : isObject(e5) && arguments.length > 1 ? function(e6, t5, n3) {
    const r4 = e6[t5];
    return isRef(r4) ? r4 : new ObjectRefImpl(e6, t5, n3);
  }(e5, t4, n2) : ref(e5);
}
function callWithErrorHandling(e5, t4, n2, r4) {
  try {
    return r4 ? e5(...r4) : e5();
  } catch (e6) {
    handleError(e6, t4, n2);
  }
}
function callWithAsyncErrorHandling(e5, t4, n2, r4) {
  if (isFunction(e5)) {
    const o7 = callWithErrorHandling(e5, t4, n2, r4);
    return o7 && isPromise(o7) && o7.catch((e6) => {
      handleError(e6, t4, n2);
    }), o7;
  }
  if (E(e5)) {
    const o7 = [];
    for (let s2 = 0; s2 < e5.length; s2++)
      o7.push(callWithAsyncErrorHandling(e5[s2], t4, n2, r4));
    return o7;
  }
}
function handleError(e5, t4, n2, r4 = true) {
  t4 && t4.vnode;
  if (t4) {
    let r5 = t4.parent;
    const o7 = t4.proxy, s2 = `https://vuejs.org/error-reference/#runtime-${n2}`;
    for (; r5; ) {
      const t5 = r5.ec;
      if (t5) {
        for (let n3 = 0; n3 < t5.length; n3++)
          if (false === t5[n3](e5, o7, s2))
            return;
      }
      r5 = r5.parent;
    }
    const i3 = t4.appContext.config.errorHandler;
    if (i3)
      return pauseTracking(), callWithErrorHandling(i3, null, 10, [e5, o7, s2]), void resetTracking();
  }
  !function(e6) {
    console.error(e6);
  }(e5, 0, 0, r4);
}
function nextTick(e5) {
  const t4 = Me || He;
  return e5 ? t4.then(this ? e5.bind(this) : e5) : t4;
}
function queueJob(e5) {
  $e.length && $e.includes(e5, Ae2 && e5.allowRecurse ? Te + 1 : Te) || (null == e5.id ? $e.push(e5) : $e.splice(function(e6) {
    let t4 = Te + 1, n2 = $e.length;
    for (; t4 < n2; ) {
      const r4 = t4 + n2 >>> 1, o7 = $e[r4], s2 = getId(o7);
      s2 < e6 || s2 === e6 && o7.pre ? t4 = r4 + 1 : n2 = r4;
    }
    return t4;
  }(e5.id), 0, e5), queueFlush());
}
function queueFlush() {
  Ae2 || Oe || (Oe = true, Me = He.then(flushJobs));
}
function flushPreFlushCbs(e5, t4, n2 = Ae2 ? Te + 1 : 0) {
  for (; n2 < $e.length; n2++) {
    const t5 = $e[n2];
    if (t5 && t5.pre) {
      if (e5 && t5.id !== e5.uid)
        continue;
      $e.splice(n2, 1), n2--, t5();
    }
  }
}
function flushPostFlushCbs(e5) {
  if (Ee.length) {
    const e6 = [...new Set(Ee)].sort((e7, t4) => getId(e7) - getId(t4));
    if (Ee.length = 0, Pe2)
      return void Pe2.push(...e6);
    for (Pe2 = e6, je = 0; je < Pe2.length; je++) {
      const e7 = Pe2[je];
      false !== e7.active && e7();
    }
    Pe2 = null, je = 0;
  }
}
function flushJobs(e5) {
  Oe = false, Ae2 = true, $e.sort(comparator);
  try {
    for (Te = 0; Te < $e.length; Te++) {
      const e6 = $e[Te];
      e6 && false !== e6.active && callWithErrorHandling(e6, e6.i, e6.i ? 15 : 14);
    }
  } finally {
    Te = 0, $e.length = 0, flushPostFlushCbs(), Ae2 = false, Me = null, ($e.length || Ee.length) && flushJobs();
  }
}
function setCurrentRenderingInstance$1(e5) {
  const t4 = Ie;
  return Ie = e5, Ne = e5 && e5.type.__scopeId || null, t4;
}
function withCtx(e5, t4 = Ie, n2) {
  if (!t4)
    return e5;
  if (e5._n)
    return e5;
  const renderFnWithContext = (...n3) => {
    renderFnWithContext._d && setBlockTracking(-1);
    const r4 = setCurrentRenderingInstance$1(t4);
    let o7;
    try {
      o7 = e5(...n3);
    } finally {
      setCurrentRenderingInstance$1(r4), renderFnWithContext._d && setBlockTracking(1);
    }
    return o7;
  };
  return renderFnWithContext._n = true, renderFnWithContext._c = true, renderFnWithContext._d = true, renderFnWithContext;
}
function invokeDirectiveHook(e5, t4, n2, r4) {
  const o7 = e5.dirs, s2 = t4 && t4.dirs;
  for (let i3 = 0; i3 < o7.length; i3++) {
    const a3 = o7[i3];
    s2 && (a3.oldValue = s2[i3].value);
    let l2 = a3.dir[r4];
    l2 && (pauseTracking(), callWithAsyncErrorHandling(l2, n2, 8, [e5.el, a3, e5, t4]), resetTracking());
  }
}
function setTransitionHooks(e5, t4) {
  6 & e5.shapeFlag && e5.component ? setTransitionHooks(e5.component.subTree, t4) : 128 & e5.shapeFlag ? (e5.ssContent.transition = t4.clone(e5.ssContent), e5.ssFallback.transition = t4.clone(e5.ssFallback)) : e5.transition = t4;
}
function defineComponent(e5, t4) {
  return isFunction(e5) ? (() => $({ name: e5.name }, t4, { setup: e5 }))() : e5;
}
function defineAsyncComponent(e5) {
  isFunction(e5) && (e5 = { loader: e5 });
  const { loader: t4, loadingComponent: n2, errorComponent: r4, delay: o7 = 200, timeout: s2, suspensible: i3 = true, onError: a3 } = e5;
  let l2, c2 = null, u3 = 0;
  const load = () => {
    let e6;
    return c2 || (e6 = c2 = t4().catch((e7) => {
      if (e7 = e7 instanceof Error ? e7 : new Error(String(e7)), a3)
        return new Promise((t5, n3) => {
          a3(e7, () => t5((u3++, c2 = null, load())), () => n3(e7), u3 + 1);
        });
      throw e7;
    }).then((t5) => e6 !== c2 && c2 ? c2 : (t5 && (t5.__esModule || "Module" === t5[Symbol.toStringTag]) && (t5 = t5.default), l2 = t5, t5)));
  };
  return defineComponent({ name: "AsyncComponentWrapper", __asyncLoader: load, get __asyncResolved() {
    return l2;
  }, setup() {
    const e6 = ht;
    if (l2)
      return () => createInnerComp(l2, e6);
    const onError = (t6) => {
      c2 = null, handleError(t6, e6, 13, !r4);
    };
    if (i3 && e6.suspense || vt)
      return load().then((t6) => () => createInnerComp(t6, e6)).catch((e7) => (onError(e7), () => r4 ? createVNode(r4, { error: e7 }) : null));
    const t5 = ref(false), a4 = ref(), u4 = ref(!!o7);
    return o7 && setTimeout(() => {
      u4.value = false;
    }, o7), null != s2 && setTimeout(() => {
      if (!t5.value && !a4.value) {
        const e7 = new Error(`Async component timed out after ${s2}ms.`);
        onError(e7), a4.value = e7;
      }
    }, s2), load().then(() => {
      t5.value = true, e6.parent && isKeepAlive(e6.parent.vnode) && (e6.parent.effect.dirty = true, queueJob(e6.parent.update));
    }).catch((e7) => {
      onError(e7), a4.value = e7;
    }), () => t5.value && l2 ? createInnerComp(l2, e6) : a4.value && r4 ? createVNode(r4, { error: a4.value }) : n2 && !u4.value ? createVNode(n2) : void 0;
  } });
}
function createInnerComp(e5, t4) {
  const { ref: n2, props: r4, children: o7, ce: s2 } = t4.vnode, i3 = createVNode(e5, r4, o7);
  return i3.ref = n2, i3.ce = s2, delete t4.vnode.ce, i3;
}
function onActivated(e5, t4) {
  registerKeepAliveHook(e5, "a", t4);
}
function onDeactivated(e5, t4) {
  registerKeepAliveHook(e5, "da", t4);
}
function registerKeepAliveHook(e5, t4, n2 = ht) {
  const r4 = e5.__wdc || (e5.__wdc = () => {
    let t5 = n2;
    for (; t5; ) {
      if (t5.isDeactivated)
        return;
      t5 = t5.parent;
    }
    return e5();
  });
  if (injectHook(t4, r4, n2), n2) {
    let e6 = n2.parent;
    for (; e6 && e6.parent; )
      isKeepAlive(e6.parent.vnode) && injectToKeepAliveRoot(r4, t4, n2, e6), e6 = e6.parent;
  }
}
function injectToKeepAliveRoot(e5, t4, n2, r4) {
  const o7 = injectHook(t4, e5, r4, true);
  ze(() => {
    remove(r4[t4], o7);
  }, n2);
}
function injectHook(e5, t4, n2 = ht, r4 = false) {
  if (n2) {
    const o7 = n2[e5] || (n2[e5] = []), s2 = t4.__weh || (t4.__weh = (...r5) => {
      pauseTracking();
      const o8 = setCurrentInstance(n2), s3 = callWithAsyncErrorHandling(t4, n2, e5, r5);
      return o8(), resetTracking(), s3;
    });
    return r4 ? o7.unshift(s2) : o7.push(s2), s2;
  }
}
function onErrorCaptured(e5, t4 = ht) {
  injectHook("ec", e5, t4);
}
function resolveComponent(e5, t4) {
  return resolveAsset(Je, e5, true, t4) || e5;
}
function resolveDynamicComponent(e5) {
  return isString(e5) ? resolveAsset(Je, e5, false) || e5 : e5 || Ge;
}
function resolveAsset(e5, t4, n2 = true, r4 = false) {
  const o7 = Ie || ht;
  if (o7) {
    const n3 = o7.type;
    {
      const e6 = getComponentName(n3, false);
      if (e6 && (e6 === t4 || e6 === M(t4) || e6 === L(M(t4))))
        return n3;
    }
    const s2 = resolve(o7[e5] || n3[e5], t4) || resolve(o7.appContext[e5], t4);
    return !s2 && r4 ? n3 : s2;
  }
}
function resolve(e5, t4) {
  return e5 && (e5[t4] || e5[M(t4)] || e5[L(M(t4))]);
}
function normalizePropsOrEmits(e5) {
  return E(e5) ? e5.reduce((e6, t4) => (e6[t4] = null, e6), {}) : e5;
}
function withAsyncContext(e5) {
  const t4 = getCurrentInstance();
  let n2 = e5();
  return unsetCurrentInstance(), isPromise(n2) && (n2 = n2.catch((e6) => {
    throw setCurrentInstance(t4), e6;
  })), [n2, () => setCurrentInstance(t4)];
}
function applyOptions(e5) {
  const t4 = resolveMergedOptions(e5), n2 = e5.proxy, r4 = e5.ctx;
  Xe = false, t4.beforeCreate && callHook(t4.beforeCreate, e5, "bc");
  const { data: o7, computed: s2, methods: i3, watch: a3, provide: l2, inject: c2, created: u3, beforeMount: p2, mounted: f2, beforeUpdate: d2, updated: g2, activated: m3, deactivated: y3, beforeDestroy: v3, beforeUnmount: _3, destroyed: b3, unmounted: k3, render: R3, renderTracked: w3, renderTriggered: S3, errorCaptured: C3, serverPrefetch: x3, expose: A4, inheritAttrs: O3, components: $3, directives: T3, filters: P3 } = t4;
  if (c2 && function(e6, t5) {
    E(e6) && (e6 = normalizeInject(e6));
    for (const n3 in e6) {
      const r5 = e6[n3];
      let o8;
      o8 = isObject(r5) ? "default" in r5 ? inject(r5.from || n3, r5.default, true) : inject(r5.from || n3) : inject(r5), isRef(o8) ? Object.defineProperty(t5, n3, { enumerable: true, configurable: true, get: () => o8.value, set: (e7) => o8.value = e7 }) : t5[n3] = o8;
    }
  }(c2, r4, null), i3)
    for (const e6 in i3) {
      const t5 = i3[e6];
      isFunction(t5) && (r4[e6] = t5.bind(n2));
    }
  if (o7) {
    const t5 = o7.call(n2, n2);
    isObject(t5) && (e5.data = reactive(t5));
  }
  if (Xe = true, s2)
    for (const e6 in s2) {
      const t5 = s2[e6], o8 = isFunction(t5) ? t5.bind(n2, n2) : isFunction(t5.get) ? t5.get.bind(n2, n2) : NOOP, i4 = !isFunction(t5) && isFunction(t5.set) ? t5.set.bind(n2) : NOOP, a4 = computed({ get: o8, set: i4 });
      Object.defineProperty(r4, e6, { enumerable: true, configurable: true, get: () => a4.value, set: (e7) => a4.value = e7 });
    }
  if (a3)
    for (const e6 in a3)
      createWatcher(a3[e6], r4, n2, e6);
  if (l2) {
    const e6 = isFunction(l2) ? l2.call(n2) : l2;
    Reflect.ownKeys(e6).forEach((t5) => {
      provide(t5, e6[t5]);
    });
  }
  function registerLifecycleHook(e6, t5) {
    E(t5) ? t5.forEach((t6) => e6(t6.bind(n2))) : t5 && e6(t5.bind(n2));
  }
  if (u3 && callHook(u3, e5, "c"), registerLifecycleHook(Le, p2), registerLifecycleHook(Ve, f2), registerLifecycleHook(Fe, d2), registerLifecycleHook(De, g2), registerLifecycleHook(onActivated, m3), registerLifecycleHook(onDeactivated, y3), registerLifecycleHook(onErrorCaptured, C3), registerLifecycleHook(qe, w3), registerLifecycleHook(We, S3), registerLifecycleHook(Ue, _3), registerLifecycleHook(ze, k3), registerLifecycleHook(Be, x3), E(A4))
    if (A4.length) {
      const t5 = e5.exposed || (e5.exposed = {});
      A4.forEach((e6) => {
        Object.defineProperty(t5, e6, { get: () => n2[e6], set: (t6) => n2[e6] = t6 });
      });
    } else
      e5.exposed || (e5.exposed = {});
  R3 && e5.render === NOOP && (e5.render = R3), null != O3 && (e5.inheritAttrs = O3), $3 && (e5.components = $3), T3 && (e5.directives = T3);
}
function callHook(e5, t4, n2) {
  callWithAsyncErrorHandling(E(e5) ? e5.map((e6) => e6.bind(t4.proxy)) : e5.bind(t4.proxy), t4, n2);
}
function createWatcher(e5, t4, n2, r4) {
  const o7 = r4.includes(".") ? createPathGetter(n2, r4) : () => n2[r4];
  if (isString(e5)) {
    const n3 = t4[e5];
    isFunction(n3) && watch(o7, n3);
  } else if (isFunction(e5))
    watch(o7, e5.bind(n2));
  else if (isObject(e5))
    if (E(e5))
      e5.forEach((e6) => createWatcher(e6, t4, n2, r4));
    else {
      const r5 = isFunction(e5.handler) ? e5.handler.bind(n2) : t4[e5.handler];
      isFunction(r5) && watch(o7, r5, e5);
    }
}
function resolveMergedOptions(e5) {
  const t4 = e5.type, { mixins: n2, extends: r4 } = t4, { mixins: o7, optionsCache: s2, config: { optionMergeStrategies: i3 } } = e5.appContext, a3 = s2.get(t4);
  let l2;
  return a3 ? l2 = a3 : o7.length || n2 || r4 ? (l2 = {}, o7.length && o7.forEach((e6) => mergeOptions(l2, e6, i3, true)), mergeOptions(l2, t4, i3)) : l2 = t4, isObject(t4) && s2.set(t4, l2), l2;
}
function mergeOptions(e5, t4, n2, r4 = false) {
  const { mixins: o7, extends: s2 } = t4;
  s2 && mergeOptions(e5, s2, n2, true), o7 && o7.forEach((t5) => mergeOptions(e5, t5, n2, true));
  for (const o8 in t4)
    if (r4 && "expose" === o8)
      ;
    else {
      const r5 = Ye[o8] || n2 && n2[o8];
      e5[o8] = r5 ? r5(e5[o8], t4[o8]) : t4[o8];
    }
  return e5;
}
function mergeDataFn(e5, t4) {
  return t4 ? e5 ? function() {
    return $(isFunction(e5) ? e5.call(this, this) : e5, isFunction(t4) ? t4.call(this, this) : t4);
  } : t4 : e5;
}
function normalizeInject(e5) {
  if (E(e5)) {
    const t4 = {};
    for (let n2 = 0; n2 < e5.length; n2++)
      t4[e5[n2]] = e5[n2];
    return t4;
  }
  return e5;
}
function mergeAsArray(e5, t4) {
  return e5 ? [...new Set([].concat(e5, t4))] : t4;
}
function mergeObjectOptions(e5, t4) {
  return e5 ? $(/* @__PURE__ */ Object.create(null), e5, t4) : t4;
}
function mergeEmitsOrPropsOptions(e5, t4) {
  return e5 ? E(e5) && E(t4) ? [.../* @__PURE__ */ new Set([...e5, ...t4])] : $(/* @__PURE__ */ Object.create(null), normalizePropsOrEmits(e5), normalizePropsOrEmits(null != t4 ? t4 : {})) : t4;
}
function createAppContext() {
  return { app: null, config: { isNativeTag: NO, performance: false, globalProperties: {}, optionMergeStrategies: {}, errorHandler: void 0, warnHandler: void 0, compilerOptions: {} }, mixins: [], components: {}, directives: {}, provides: /* @__PURE__ */ Object.create(null), optionsCache: /* @__PURE__ */ new WeakMap(), propsCache: /* @__PURE__ */ new WeakMap(), emitsCache: /* @__PURE__ */ new WeakMap() };
}
function createAppAPI(e5, t4) {
  return function(n2, r4 = null) {
    isFunction(n2) || (n2 = $({}, n2)), null == r4 || isObject(r4) || (r4 = null);
    const o7 = createAppContext(), s2 = /* @__PURE__ */ new WeakSet();
    let i3 = false;
    const a3 = o7.app = { _uid: Qe++, _component: n2, _props: r4, _container: null, _context: o7, _instance: null, version: bt, get config() {
      return o7.config;
    }, set config(e6) {
    }, use: (e6, ...t5) => (s2.has(e6) || (e6 && isFunction(e6.install) ? (s2.add(e6), e6.install(a3, ...t5)) : isFunction(e6) && (s2.add(e6), e6(a3, ...t5))), a3), mixin: (e6) => (__VUE_OPTIONS_API__ && (o7.mixins.includes(e6) || o7.mixins.push(e6)), a3), component: (e6, t5) => t5 ? (o7.components[e6] = t5, a3) : o7.components[e6], directive: (e6, t5) => t5 ? (o7.directives[e6] = t5, a3) : o7.directives[e6], mount(s3, l2, c2) {
      if (!i3) {
        const u3 = createVNode(n2, r4);
        return u3.appContext = o7, true === c2 ? c2 = "svg" : false === c2 && (c2 = void 0), l2 && t4 ? t4(u3, s3) : e5(u3, s3, c2), i3 = true, a3._container = s3, s3.__vue_app__ = a3, getComponentPublicInstance(u3.component);
      }
    }, unmount() {
      i3 && (e5(null, a3._container), delete a3._container.__vue_app__);
    }, provide: (e6, t5) => (o7.provides[e6] = t5, a3), runWithContext(e6) {
      const t5 = et;
      et = a3;
      try {
        return e6();
      } finally {
        et = t5;
      }
    } };
    return a3;
  };
}
function provide(e5, t4) {
  if (ht) {
    let n2 = ht.provides;
    const r4 = ht.parent && ht.parent.provides;
    r4 === n2 && (n2 = ht.provides = Object.create(r4)), n2[e5] = t4;
  } else
    ;
}
function inject(e5, t4, n2 = false) {
  const r4 = ht || Ie;
  if (r4 || et) {
    const o7 = et ? et._context.provides : r4 ? null == r4.parent ? r4.vnode.appContext && r4.vnode.appContext.provides : r4.parent.provides : void 0;
    if (o7 && e5 in o7)
      return o7[e5];
    if (arguments.length > 1)
      return n2 && isFunction(t4) ? t4.call(r4 && r4.proxy) : t4;
  }
}
function hasInjectionContext() {
  return !!(ht || Ie || et);
}
function setFullProps(e5, t4, n2, r4) {
  const [o7, s2] = e5.propsOptions;
  let i3, a3 = false;
  if (t4)
    for (let l2 in t4) {
      if (j2(l2))
        continue;
      const c2 = t4[l2];
      let u3;
      o7 && hasOwn(o7, u3 = M(l2)) ? s2 && s2.includes(u3) ? (i3 || (i3 = {}))[u3] = c2 : n2[u3] = c2 : isEmitListener(e5.emitsOptions, l2) || l2 in r4 && c2 === r4[l2] || (r4[l2] = c2, a3 = true);
    }
  if (s2) {
    const t5 = toRaw(n2), r5 = i3 || A2;
    for (let i4 = 0; i4 < s2.length; i4++) {
      const a4 = s2[i4];
      n2[a4] = resolvePropValue(o7, t5, a4, r5[a4], e5, !hasOwn(r5, a4));
    }
  }
  return a3;
}
function resolvePropValue(e5, t4, n2, r4, o7, s2) {
  const i3 = e5[n2];
  if (null != i3) {
    const e6 = hasOwn(i3, "default");
    if (e6 && void 0 === r4) {
      const e7 = i3.default;
      if (i3.type !== Function && !i3.skipFactory && isFunction(e7)) {
        const { propsDefaults: s3 } = o7;
        if (n2 in s3)
          r4 = s3[n2];
        else {
          const i4 = setCurrentInstance(o7);
          r4 = s3[n2] = e7.call(null, t4), i4();
        }
      } else
        r4 = e7;
    }
    i3[0] && (s2 && !e6 ? r4 = false : !i3[1] || "" !== r4 && r4 !== N(n2) || (r4 = true));
  }
  return r4;
}
function normalizePropsOptions(e5, t4, n2 = false) {
  const r4 = __VUE_OPTIONS_API__ && n2 ? nt : t4.propsCache, o7 = r4.get(e5);
  if (o7)
    return o7;
  const s2 = e5.props, i3 = {}, a3 = [];
  let l2 = false;
  if (__VUE_OPTIONS_API__ && !isFunction(e5)) {
    const extendProps = (e6) => {
      l2 = true;
      const [n3, r5] = normalizePropsOptions(e6, t4, true);
      $(i3, n3), r5 && a3.push(...r5);
    };
    !n2 && t4.mixins.length && t4.mixins.forEach(extendProps), e5.extends && extendProps(e5.extends), e5.mixins && e5.mixins.forEach(extendProps);
  }
  if (!s2 && !l2)
    return isObject(e5) && r4.set(e5, O), O;
  if (E(s2))
    for (let e6 = 0; e6 < s2.length; e6++) {
      const t5 = M(s2[e6]);
      validatePropName(t5) && (i3[t5] = A2);
    }
  else if (s2)
    for (const e6 in s2) {
      const t5 = M(e6);
      if (validatePropName(t5)) {
        const n3 = s2[e6], r5 = i3[t5] = E(n3) || isFunction(n3) ? { type: n3 } : $({}, n3), o8 = r5.type;
        let l3 = false, c3 = true;
        if (E(o8))
          for (let e7 = 0; e7 < o8.length; ++e7) {
            const t6 = o8[e7], n4 = isFunction(t6) && t6.name;
            if ("Boolean" === n4) {
              l3 = true;
              break;
            }
            "String" === n4 && (c3 = false);
          }
        else
          l3 = isFunction(o8) && "Boolean" === o8.name;
        r5[0] = l3, r5[1] = c3, (l3 || hasOwn(r5, "default")) && a3.push(t5);
      }
    }
  const c2 = [i3, a3];
  return isObject(e5) && r4.set(e5, c2), c2;
}
function validatePropName(e5) {
  return "$" !== e5[0] && !j2(e5);
}
function setRef(e5, t4, n2, r4, o7 = false) {
  if (E(e5))
    return void e5.forEach((e6, s3) => setRef(e6, t4 && (E(t4) ? t4[s3] : t4), n2, r4, o7));
  if (isAsyncWrapper(r4) && !o7)
    return;
  const s2 = 4 & r4.shapeFlag ? getComponentPublicInstance(r4.component) : r4.el, i3 = o7 ? null : s2, { i: a3, r: l2 } = e5, c2 = t4 && t4.r, u3 = a3.refs === A2 ? a3.refs = {} : a3.refs, p2 = a3.setupState;
  if (null != c2 && c2 !== l2 && (isString(c2) ? (u3[c2] = null, hasOwn(p2, c2) && (p2[c2] = null)) : isRef(c2) && (c2.value = null)), isFunction(l2))
    callWithErrorHandling(l2, a3, 12, [i3, u3]);
  else {
    const t5 = isString(l2), r5 = isRef(l2);
    if (t5 || r5) {
      const doSet = () => {
        if (e5.f) {
          const n3 = t5 ? hasOwn(p2, l2) ? p2[l2] : u3[l2] : l2.value;
          o7 ? E(n3) && remove(n3, s2) : E(n3) ? n3.includes(s2) || n3.push(s2) : t5 ? (u3[l2] = [s2], hasOwn(p2, l2) && (p2[l2] = u3[l2])) : (l2.value = [s2], e5.k && (u3[e5.k] = l2.value));
        } else
          t5 ? (u3[l2] = i3, hasOwn(p2, l2) && (p2[l2] = i3)) : r5 && (l2.value = i3, e5.k && (u3[e5.k] = i3));
      };
      i3 ? (doSet.id = -1, queuePostRenderEffect(doSet, n2)) : doSet();
    }
  }
}
function createRenderer(e5) {
  return function(e6) {
    "boolean" != typeof __VUE_OPTIONS_API__ && (getGlobalThis().__VUE_OPTIONS_API__ = true), "boolean" != typeof __VUE_PROD_HYDRATION_MISMATCH_DETAILS__ && (getGlobalThis().__VUE_PROD_HYDRATION_MISMATCH_DETAILS__ = false);
    getGlobalThis().__VUE__ = true;
    const { insert: t4, remove: n2, patchProp: r4, createElement: o7, createText: s2, createComment: i3, setText: a3, setElementText: l2, parentNode: c2, nextSibling: u3, setScopeId: p2 = NOOP, insertStaticContent: f2 } = e6, patch = (e7, t5, n3, r5 = null, o8 = null, s3 = null, i4 = void 0, a4 = null, l3 = !!t5.dynamicChildren) => {
      if (e7 === t5)
        return;
      e7 && !isSameVNodeType(e7, t5) && (r5 = getNextHostNode(e7), unmount(e7, o8, s3, true), e7 = null), -2 === t5.patchFlag && (l3 = false, t5.dynamicChildren = null);
      const { type: c3, ref: u4, shapeFlag: p3 } = t5;
      switch (c3) {
        case at:
          processText(e7, t5, n3, r5);
          break;
        case lt:
          processCommentNode(e7, t5, n3, r5);
          break;
        case ct:
          null == e7 && mountStaticNode(t5, n3, r5, i4);
          break;
        case it:
          processFragment(e7, t5, n3, r5, o8, s3, i4, a4, l3);
          break;
        default:
          1 & p3 ? processElement(e7, t5, n3, r5, o8, s3, i4, a4, l3) : 6 & p3 ? processComponent(e7, t5, n3, r5, o8, s3, i4, a4, l3) : (64 & p3 || 128 & p3) && c3.process(e7, t5, n3, r5, o8, s3, i4, a4, l3, g2);
      }
      null != u4 && o8 && setRef(u4, e7 && e7.ref, s3, t5 || e7, !t5);
    }, processText = (e7, n3, r5, o8) => {
      if (null == e7)
        t4(n3.el = s2(n3.children), r5, o8);
      else {
        const t5 = n3.el = e7.el;
        n3.children !== e7.children && a3(t5, n3.children);
      }
    }, processCommentNode = (e7, n3, r5, o8) => {
      null == e7 ? t4(n3.el = i3(n3.children || ""), r5, o8) : n3.el = e7.el;
    }, mountStaticNode = (e7, t5, n3, r5) => {
      [e7.el, e7.anchor] = f2(e7.children, t5, n3, r5, e7.el, e7.anchor);
    }, moveStaticNode = ({ el: e7, anchor: n3 }, r5, o8) => {
      let s3;
      for (; e7 && e7 !== n3; )
        s3 = u3(e7), t4(e7, r5, o8), e7 = s3;
      t4(n3, r5, o8);
    }, removeStaticNode = ({ el: e7, anchor: t5 }) => {
      let r5;
      for (; e7 && e7 !== t5; )
        r5 = u3(e7), n2(e7), e7 = r5;
      n2(t5);
    }, processElement = (e7, t5, n3, r5, o8, s3, i4, a4, l3) => {
      "svg" === t5.type ? i4 = "svg" : "math" === t5.type && (i4 = "mathml"), null == e7 ? mountElement(t5, n3, r5, o8, s3, i4, a4, l3) : patchElement(e7, t5, o8, s3, i4, a4, l3);
    }, mountElement = (e7, n3, s3, i4, a4, c3, u4, p3) => {
      let f3, d3;
      const { props: g3, shapeFlag: m4, transition: y4, dirs: v3 } = e7;
      if (f3 = e7.el = o7(e7.type, c3, g3 && g3.is, g3), 8 & m4 ? l2(f3, e7.children) : 16 & m4 && mountChildren(e7.children, f3, null, i4, a4, resolveChildrenNamespace(e7, c3), u4, p3), v3 && invokeDirectiveHook(e7, null, i4, "created"), setScopeId(f3, e7, e7.scopeId, u4, i4), g3) {
        for (const e8 in g3)
          "value" === e8 || j2(e8) || r4(f3, e8, null, g3[e8], c3, i4);
        "value" in g3 && r4(f3, "value", null, g3.value, c3), (d3 = g3.onVnodeBeforeMount) && invokeVNodeHook(d3, i4, e7);
      }
      v3 && invokeDirectiveHook(e7, null, i4, "beforeMount");
      const _3 = function(e8, t5) {
        return (!e8 || e8 && !e8.pendingBranch) && t5 && !t5.persisted;
      }(a4, y4);
      _3 && y4.beforeEnter(f3), t4(f3, n3, s3), ((d3 = g3 && g3.onVnodeMounted) || _3 || v3) && queuePostRenderEffect(() => {
        d3 && invokeVNodeHook(d3, i4, e7), _3 && y4.enter(f3), v3 && invokeDirectiveHook(e7, null, i4, "mounted");
      }, a4);
    }, setScopeId = (e7, t5, n3, r5, o8) => {
      if (n3 && p2(e7, n3), r5)
        for (let t6 = 0; t6 < r5.length; t6++)
          p2(e7, r5[t6]);
      if (o8) {
        if (t5 === o8.subTree) {
          const t6 = o8.vnode;
          setScopeId(e7, t6, t6.scopeId, t6.slotScopeIds, o8.parent);
        }
      }
    }, mountChildren = (e7, t5, n3, r5, o8, s3, i4, a4, l3 = 0) => {
      for (let c3 = l3; c3 < e7.length; c3++) {
        const l4 = e7[c3] = a4 ? cloneIfMounted(e7[c3]) : normalizeVNode$1(e7[c3]);
        patch(null, l4, t5, n3, r5, o8, s3, i4, a4);
      }
    }, patchElement = (e7, t5, n3, o8, s3, i4, a4) => {
      const c3 = t5.el = e7.el;
      let { patchFlag: u4, dynamicChildren: p3, dirs: f3 } = t5;
      u4 |= 16 & e7.patchFlag;
      const d3 = e7.props || A2, g3 = t5.props || A2;
      let m4;
      if (n3 && toggleRecurse(n3, false), (m4 = g3.onVnodeBeforeUpdate) && invokeVNodeHook(m4, n3, t5, e7), f3 && invokeDirectiveHook(t5, e7, n3, "beforeUpdate"), n3 && toggleRecurse(n3, true), (d3.innerHTML && null == g3.innerHTML || d3.textContent && null == g3.textContent) && l2(c3, ""), p3 ? patchBlockChildren(e7.dynamicChildren, p3, c3, n3, o8, resolveChildrenNamespace(t5, s3), i4) : a4 || patchChildren(e7, t5, c3, null, n3, o8, resolveChildrenNamespace(t5, s3), i4, false), u4 > 0) {
        if (16 & u4)
          patchProps(c3, d3, g3, n3, s3);
        else if (2 & u4 && d3.class !== g3.class && r4(c3, "class", null, g3.class, s3), 4 & u4 && r4(c3, "style", d3.style, g3.style, s3), 8 & u4) {
          const e8 = t5.dynamicProps;
          for (let t6 = 0; t6 < e8.length; t6++) {
            const o9 = e8[t6], i5 = d3[o9], a5 = g3[o9];
            a5 === i5 && "value" !== o9 || r4(c3, o9, i5, a5, s3, n3);
          }
        }
        1 & u4 && e7.children !== t5.children && l2(c3, t5.children);
      } else
        a4 || null != p3 || patchProps(c3, d3, g3, n3, s3);
      ((m4 = g3.onVnodeUpdated) || f3) && queuePostRenderEffect(() => {
        m4 && invokeVNodeHook(m4, n3, t5, e7), f3 && invokeDirectiveHook(t5, e7, n3, "updated");
      }, o8);
    }, patchBlockChildren = (e7, t5, n3, r5, o8, s3, i4) => {
      for (let a4 = 0; a4 < t5.length; a4++) {
        const l3 = e7[a4], u4 = t5[a4], p3 = l3.el && (l3.type === it || !isSameVNodeType(l3, u4) || 70 & l3.shapeFlag) ? c2(l3.el) : n3;
        patch(l3, u4, p3, null, r5, o8, s3, i4, true);
      }
    }, patchProps = (e7, t5, n3, o8, s3) => {
      if (t5 !== n3) {
        if (t5 !== A2)
          for (const i4 in t5)
            j2(i4) || i4 in n3 || r4(e7, i4, t5[i4], null, s3, o8);
        for (const i4 in n3) {
          if (j2(i4))
            continue;
          const a4 = n3[i4], l3 = t5[i4];
          a4 !== l3 && "value" !== i4 && r4(e7, i4, l3, a4, s3, o8);
        }
        "value" in n3 && r4(e7, "value", t5.value, n3.value, s3);
      }
    }, processFragment = (e7, n3, r5, o8, i4, a4, l3, c3, u4) => {
      const p3 = n3.el = e7 ? e7.el : s2(""), f3 = n3.anchor = e7 ? e7.anchor : s2("");
      let { patchFlag: d3, dynamicChildren: g3, slotScopeIds: m4 } = n3;
      m4 && (c3 = c3 ? c3.concat(m4) : m4), null == e7 ? (t4(p3, r5, o8), t4(f3, r5, o8), mountChildren(n3.children || [], r5, f3, i4, a4, l3, c3, u4)) : d3 > 0 && 64 & d3 && g3 && e7.dynamicChildren ? (patchBlockChildren(e7.dynamicChildren, g3, r5, i4, a4, l3, c3), (null != n3.key || i4 && n3 === i4.subTree) && traverseStaticChildren(e7, n3, true)) : patchChildren(e7, n3, r5, f3, i4, a4, l3, c3, u4);
    }, processComponent = (e7, t5, n3, r5, o8, s3, i4, a4, l3) => {
      t5.slotScopeIds = a4, null == e7 ? 512 & t5.shapeFlag ? o8.ctx.activate(t5, n3, r5, i4, l3) : mountComponent(t5, n3, r5, o8, s3, i4, l3) : updateComponent(e7, t5, l3);
    }, mountComponent = (e7, t5, n3, r5, o8, s3, i4) => {
      const a4 = e7.component = createComponentInstance$1(e7, r5, o8);
      if (isKeepAlive(e7) && (a4.ctx.renderer = g2), setupComponent$1(a4, false, i4), a4.asyncDep) {
        if (o8 && o8.registerDep(a4, setupRenderEffect, i4), !e7.el) {
          const e8 = a4.subTree = createVNode(lt);
          processCommentNode(null, e8, t5, n3);
        }
      } else
        setupRenderEffect(a4, e7, t5, n3, o8, s3, i4);
    }, updateComponent = (e7, t5, n3) => {
      const r5 = t5.component = e7.component;
      if (function(e8, t6, n4) {
        const { props: r6, children: o8, component: s3 } = e8, { props: i4, children: a4, patchFlag: l3 } = t6, c3 = s3.emitsOptions;
        if (t6.dirs || t6.transition)
          return true;
        if (!(n4 && l3 >= 0))
          return !(!o8 && !a4 || a4 && a4.$stable) || r6 !== i4 && (r6 ? !i4 || hasPropsChanged(r6, i4, c3) : !!i4);
        if (1024 & l3)
          return true;
        if (16 & l3)
          return r6 ? hasPropsChanged(r6, i4, c3) : !!i4;
        if (8 & l3) {
          const e9 = t6.dynamicProps;
          for (let t7 = 0; t7 < e9.length; t7++) {
            const n5 = e9[t7];
            if (i4[n5] !== r6[n5] && !isEmitListener(c3, n5))
              return true;
          }
        }
        return false;
      }(e7, t5, n3)) {
        if (r5.asyncDep && !r5.asyncResolved)
          return void updateComponentPreRender(r5, t5, n3);
        r5.next = t5, function(e8) {
          const t6 = $e.indexOf(e8);
          t6 > Te && $e.splice(t6, 1);
        }(r5.update), r5.effect.dirty = true, r5.update();
      } else
        t5.el = e7.el, r5.vnode = t5;
    }, setupRenderEffect = (e7, t5, n3, r5, o8, s3, i4) => {
      const componentUpdateFn = () => {
        if (e7.isMounted) {
          let { next: t6, bu: n4, u: r6, parent: a5, vnode: l4 } = e7;
          {
            const n5 = locateNonHydratedAsyncRoot(e7);
            if (n5)
              return t6 && (t6.el = l4.el, updateComponentPreRender(e7, t6, i4)), void n5.asyncDep.then(() => {
                e7.isUnmounted || componentUpdateFn();
              });
          }
          let u4, p3 = t6;
          toggleRecurse(e7, false), t6 ? (t6.el = l4.el, updateComponentPreRender(e7, t6, i4)) : t6 = l4, n4 && invokeArrayFns(n4), (u4 = t6.props && t6.props.onVnodeBeforeUpdate) && invokeVNodeHook(u4, a5, t6, l4), toggleRecurse(e7, true);
          const f3 = renderComponentRoot$1(e7), d3 = e7.subTree;
          e7.subTree = f3, patch(d3, f3, c2(d3.el), getNextHostNode(d3), e7, o8, s3), t6.el = f3.el, null === p3 && function({ vnode: e8, parent: t7 }, n5) {
            for (; t7; ) {
              const r7 = t7.subTree;
              if (r7.suspense && r7.suspense.activeBranch === e8 && (r7.el = e8.el), r7 !== e8)
                break;
              (e8 = t7.vnode).el = n5, t7 = t7.parent;
            }
          }(e7, f3.el), r6 && queuePostRenderEffect(r6, o8), (u4 = t6.props && t6.props.onVnodeUpdated) && queuePostRenderEffect(() => invokeVNodeHook(u4, a5, t6, l4), o8);
        } else {
          let i5;
          const { el: a5, props: l4 } = t5, { bm: c3, m: u4, parent: p3 } = e7, f3 = isAsyncWrapper(t5);
          if (toggleRecurse(e7, false), c3 && invokeArrayFns(c3), !f3 && (i5 = l4 && l4.onVnodeBeforeMount) && invokeVNodeHook(i5, p3, t5), toggleRecurse(e7, true), a5 && y3) {
            const hydrateSubTree = () => {
              e7.subTree = renderComponentRoot$1(e7), y3(a5, e7.subTree, e7, o8, null);
            };
            f3 ? t5.type.__asyncLoader().then(() => !e7.isUnmounted && hydrateSubTree()) : hydrateSubTree();
          } else {
            const i6 = e7.subTree = renderComponentRoot$1(e7);
            patch(null, i6, n3, r5, e7, o8, s3), t5.el = i6.el;
          }
          if (u4 && queuePostRenderEffect(u4, o8), !f3 && (i5 = l4 && l4.onVnodeMounted)) {
            const e8 = t5;
            queuePostRenderEffect(() => invokeVNodeHook(i5, p3, e8), o8);
          }
          (256 & t5.shapeFlag || p3 && isAsyncWrapper(p3.vnode) && 256 & p3.vnode.shapeFlag) && e7.a && queuePostRenderEffect(e7.a, o8), e7.isMounted = true, t5 = n3 = r5 = null;
        }
      }, a4 = e7.effect = new ReactiveEffect(componentUpdateFn, NOOP, () => queueJob(l3), e7.scope), l3 = e7.update = () => {
        a4.dirty && a4.run();
      };
      l3.i = e7, l3.id = e7.uid, toggleRecurse(e7, true), l3();
    }, updateComponentPreRender = (e7, t5, n3) => {
      t5.component = e7;
      const r5 = e7.vnode.props;
      e7.vnode = t5, e7.next = null, function(e8, t6, n4, r6) {
        const { props: o8, attrs: s3, vnode: { patchFlag: i4 } } = e8, a4 = toRaw(o8), [l3] = e8.propsOptions;
        let c3 = false;
        if (!(r6 || i4 > 0) || 16 & i4) {
          let r7;
          setFullProps(e8, t6, o8, s3) && (c3 = true);
          for (const s4 in a4)
            t6 && (hasOwn(t6, s4) || (r7 = N(s4)) !== s4 && hasOwn(t6, r7)) || (l3 ? !n4 || void 0 === n4[s4] && void 0 === n4[r7] || (o8[s4] = resolvePropValue(l3, a4, s4, void 0, e8, true)) : delete o8[s4]);
          if (s3 !== a4)
            for (const e9 in s3)
              t6 && hasOwn(t6, e9) || (delete s3[e9], c3 = true);
        } else if (8 & i4) {
          const n5 = e8.vnode.dynamicProps;
          for (let r7 = 0; r7 < n5.length; r7++) {
            let i5 = n5[r7];
            if (isEmitListener(e8.emitsOptions, i5))
              continue;
            const u4 = t6[i5];
            if (l3)
              if (hasOwn(s3, i5))
                u4 !== s3[i5] && (s3[i5] = u4, c3 = true);
              else {
                const t7 = M(i5);
                o8[t7] = resolvePropValue(l3, a4, t7, u4, e8, false);
              }
            else
              u4 !== s3[i5] && (s3[i5] = u4, c3 = true);
          }
        }
        c3 && trigger(e8.attrs, "set", "");
      }(e7, t5.props, r5, n3), updateSlots(e7, t5.children, n3), pauseTracking(), flushPreFlushCbs(e7), resetTracking();
    }, patchChildren = (e7, t5, n3, r5, o8, s3, i4, a4, c3 = false) => {
      const u4 = e7 && e7.children, p3 = e7 ? e7.shapeFlag : 0, f3 = t5.children, { patchFlag: d3, shapeFlag: g3 } = t5;
      if (d3 > 0) {
        if (128 & d3)
          return void patchKeyedChildren(u4, f3, n3, r5, o8, s3, i4, a4, c3);
        if (256 & d3)
          return void patchUnkeyedChildren(u4, f3, n3, r5, o8, s3, i4, a4, c3);
      }
      8 & g3 ? (16 & p3 && unmountChildren(u4, o8, s3), f3 !== u4 && l2(n3, f3)) : 16 & p3 ? 16 & g3 ? patchKeyedChildren(u4, f3, n3, r5, o8, s3, i4, a4, c3) : unmountChildren(u4, o8, s3, true) : (8 & p3 && l2(n3, ""), 16 & g3 && mountChildren(f3, n3, r5, o8, s3, i4, a4, c3));
    }, patchUnkeyedChildren = (e7, t5, n3, r5, o8, s3, i4, a4, l3) => {
      t5 = t5 || O;
      const c3 = (e7 = e7 || O).length, u4 = t5.length, p3 = Math.min(c3, u4);
      let f3;
      for (f3 = 0; f3 < p3; f3++) {
        const r6 = t5[f3] = l3 ? cloneIfMounted(t5[f3]) : normalizeVNode$1(t5[f3]);
        patch(e7[f3], r6, n3, null, o8, s3, i4, a4, l3);
      }
      c3 > u4 ? unmountChildren(e7, o8, s3, true, false, p3) : mountChildren(t5, n3, r5, o8, s3, i4, a4, l3, p3);
    }, patchKeyedChildren = (e7, t5, n3, r5, o8, s3, i4, a4, l3) => {
      let c3 = 0;
      const u4 = t5.length;
      let p3 = e7.length - 1, f3 = u4 - 1;
      for (; c3 <= p3 && c3 <= f3; ) {
        const r6 = e7[c3], u5 = t5[c3] = l3 ? cloneIfMounted(t5[c3]) : normalizeVNode$1(t5[c3]);
        if (!isSameVNodeType(r6, u5))
          break;
        patch(r6, u5, n3, null, o8, s3, i4, a4, l3), c3++;
      }
      for (; c3 <= p3 && c3 <= f3; ) {
        const r6 = e7[p3], c4 = t5[f3] = l3 ? cloneIfMounted(t5[f3]) : normalizeVNode$1(t5[f3]);
        if (!isSameVNodeType(r6, c4))
          break;
        patch(r6, c4, n3, null, o8, s3, i4, a4, l3), p3--, f3--;
      }
      if (c3 > p3) {
        if (c3 <= f3) {
          const e8 = f3 + 1, p4 = e8 < u4 ? t5[e8].el : r5;
          for (; c3 <= f3; )
            patch(null, t5[c3] = l3 ? cloneIfMounted(t5[c3]) : normalizeVNode$1(t5[c3]), n3, p4, o8, s3, i4, a4, l3), c3++;
        }
      } else if (c3 > f3)
        for (; c3 <= p3; )
          unmount(e7[c3], o8, s3, true), c3++;
      else {
        const d3 = c3, g3 = c3, m4 = /* @__PURE__ */ new Map();
        for (c3 = g3; c3 <= f3; c3++) {
          const e8 = t5[c3] = l3 ? cloneIfMounted(t5[c3]) : normalizeVNode$1(t5[c3]);
          null != e8.key && m4.set(e8.key, c3);
        }
        let y4, v3 = 0;
        const _3 = f3 - g3 + 1;
        let b3 = false, k3 = 0;
        const R3 = new Array(_3);
        for (c3 = 0; c3 < _3; c3++)
          R3[c3] = 0;
        for (c3 = d3; c3 <= p3; c3++) {
          const r6 = e7[c3];
          if (v3 >= _3) {
            unmount(r6, o8, s3, true);
            continue;
          }
          let u5;
          if (null != r6.key)
            u5 = m4.get(r6.key);
          else
            for (y4 = g3; y4 <= f3; y4++)
              if (0 === R3[y4 - g3] && isSameVNodeType(r6, t5[y4])) {
                u5 = y4;
                break;
              }
          void 0 === u5 ? unmount(r6, o8, s3, true) : (R3[u5 - g3] = c3 + 1, u5 >= k3 ? k3 = u5 : b3 = true, patch(r6, t5[u5], n3, null, o8, s3, i4, a4, l3), v3++);
        }
        const w3 = b3 ? function(e8) {
          const t6 = e8.slice(), n4 = [0];
          let r6, o9, s4, i5, a5;
          const l4 = e8.length;
          for (r6 = 0; r6 < l4; r6++) {
            const l5 = e8[r6];
            if (0 !== l5) {
              if (o9 = n4[n4.length - 1], e8[o9] < l5) {
                t6[r6] = o9, n4.push(r6);
                continue;
              }
              for (s4 = 0, i5 = n4.length - 1; s4 < i5; )
                a5 = s4 + i5 >> 1, e8[n4[a5]] < l5 ? s4 = a5 + 1 : i5 = a5;
              l5 < e8[n4[s4]] && (s4 > 0 && (t6[r6] = n4[s4 - 1]), n4[s4] = r6);
            }
          }
          s4 = n4.length, i5 = n4[s4 - 1];
          for (; s4-- > 0; )
            n4[s4] = i5, i5 = t6[i5];
          return n4;
        }(R3) : O;
        for (y4 = w3.length - 1, c3 = _3 - 1; c3 >= 0; c3--) {
          const e8 = g3 + c3, p4 = t5[e8], f4 = e8 + 1 < u4 ? t5[e8 + 1].el : r5;
          0 === R3[c3] ? patch(null, p4, n3, f4, o8, s3, i4, a4, l3) : b3 && (y4 < 0 || c3 !== w3[y4] ? move(p4, n3, f4, 2) : y4--);
        }
      }
    }, move = (e7, n3, r5, o8, s3 = null) => {
      const { el: i4, type: a4, transition: l3, children: c3, shapeFlag: u4 } = e7;
      if (6 & u4)
        return void move(e7.component.subTree, n3, r5, o8);
      if (128 & u4)
        return void e7.suspense.move(n3, r5, o8);
      if (64 & u4)
        return void a4.move(e7, n3, r5, g2);
      if (a4 === it) {
        t4(i4, n3, r5);
        for (let e8 = 0; e8 < c3.length; e8++)
          move(c3[e8], n3, r5, o8);
        return void t4(e7.anchor, n3, r5);
      }
      if (a4 === ct)
        return void moveStaticNode(e7, n3, r5);
      if (2 !== o8 && 1 & u4 && l3)
        if (0 === o8)
          l3.beforeEnter(i4), t4(i4, n3, r5), queuePostRenderEffect(() => l3.enter(i4), s3);
        else {
          const { leave: e8, delayLeave: o9, afterLeave: s4 } = l3, remove22 = () => t4(i4, n3, r5), performLeave = () => {
            e8(i4, () => {
              remove22(), s4 && s4();
            });
          };
          o9 ? o9(i4, remove22, performLeave) : performLeave();
        }
      else
        t4(i4, n3, r5);
    }, unmount = (e7, t5, n3, r5 = false, o8 = false) => {
      const { type: s3, props: i4, ref: a4, children: l3, dynamicChildren: c3, shapeFlag: u4, patchFlag: p3, dirs: f3, cacheIndex: d3 } = e7;
      if (-2 === p3 && (o8 = false), null != a4 && setRef(a4, null, n3, e7, true), null != d3 && (t5.renderCache[d3] = void 0), 256 & u4)
        return void t5.ctx.deactivate(e7);
      const m4 = 1 & u4 && f3, y4 = !isAsyncWrapper(e7);
      let v3;
      if (y4 && (v3 = i4 && i4.onVnodeBeforeUnmount) && invokeVNodeHook(v3, t5, e7), 6 & u4)
        unmountComponent(e7.component, n3, r5);
      else {
        if (128 & u4)
          return void e7.suspense.unmount(n3, r5);
        m4 && invokeDirectiveHook(e7, null, t5, "beforeUnmount"), 64 & u4 ? e7.type.remove(e7, t5, n3, g2, r5) : c3 && !c3.hasOnce && (s3 !== it || p3 > 0 && 64 & p3) ? unmountChildren(c3, t5, n3, false, true) : (s3 === it && 384 & p3 || !o8 && 16 & u4) && unmountChildren(l3, t5, n3), r5 && remove2(e7);
      }
      (y4 && (v3 = i4 && i4.onVnodeUnmounted) || m4) && queuePostRenderEffect(() => {
        v3 && invokeVNodeHook(v3, t5, e7), m4 && invokeDirectiveHook(e7, null, t5, "unmounted");
      }, n3);
    }, remove2 = (e7) => {
      const { type: t5, el: r5, anchor: o8, transition: s3 } = e7;
      if (t5 === it)
        return void removeFragment(r5, o8);
      if (t5 === ct)
        return void removeStaticNode(e7);
      const performRemove = () => {
        n2(r5), s3 && !s3.persisted && s3.afterLeave && s3.afterLeave();
      };
      if (1 & e7.shapeFlag && s3 && !s3.persisted) {
        const { leave: t6, delayLeave: n3 } = s3, performLeave = () => t6(r5, performRemove);
        n3 ? n3(e7.el, performRemove, performLeave) : performLeave();
      } else
        performRemove();
    }, removeFragment = (e7, t5) => {
      let r5;
      for (; e7 !== t5; )
        r5 = u3(e7), n2(e7), e7 = r5;
      n2(t5);
    }, unmountComponent = (e7, t5, n3) => {
      const { bum: r5, scope: o8, update: s3, subTree: i4, um: a4, m: l3, a: c3 } = e7;
      invalidateMount(l3), invalidateMount(c3), r5 && invokeArrayFns(r5), o8.stop(), s3 && (s3.active = false, unmount(i4, e7, t5, n3)), a4 && queuePostRenderEffect(a4, t5), queuePostRenderEffect(() => {
        e7.isUnmounted = true;
      }, t5), t5 && t5.pendingBranch && !t5.isUnmounted && e7.asyncDep && !e7.asyncResolved && e7.suspenseId === t5.pendingId && (t5.deps--, 0 === t5.deps && t5.resolve());
    }, unmountChildren = (e7, t5, n3, r5 = false, o8 = false, s3 = 0) => {
      for (let i4 = s3; i4 < e7.length; i4++)
        unmount(e7[i4], t5, n3, r5, o8);
    }, getNextHostNode = (e7) => {
      if (6 & e7.shapeFlag)
        return getNextHostNode(e7.component.subTree);
      if (128 & e7.shapeFlag)
        return e7.suspense.next();
      const t5 = u3(e7.anchor || e7.el), n3 = t5 && t5[rt];
      return n3 ? u3(n3) : t5;
    };
    let d2 = false;
    const render = (e7, t5, n3) => {
      null == e7 ? t5._vnode && unmount(t5._vnode, null, null, true) : patch(t5._vnode || null, e7, t5, null, null, null, n3), t5._vnode = e7, d2 || (d2 = true, flushPreFlushCbs(), flushPostFlushCbs(), d2 = false);
    }, g2 = { p: patch, um: unmount, m: move, r: remove2, mt: mountComponent, mc: mountChildren, pc: patchChildren, pbc: patchBlockChildren, n: getNextHostNode, o: e6 };
    let m3, y3;
    return { render, hydrate: m3, createApp: createAppAPI(render, m3) };
  }(e5);
}
function resolveChildrenNamespace({ type: e5, props: t4 }, n2) {
  return "svg" === n2 && "foreignObject" === e5 || "mathml" === n2 && "annotation-xml" === e5 && t4 && t4.encoding && t4.encoding.includes("html") ? void 0 : n2;
}
function toggleRecurse({ effect: e5, update: t4 }, n2) {
  e5.allowRecurse = t4.allowRecurse = n2;
}
function traverseStaticChildren(e5, t4, n2 = false) {
  const r4 = e5.children, o7 = t4.children;
  if (E(r4) && E(o7))
    for (let e6 = 0; e6 < r4.length; e6++) {
      const t5 = r4[e6];
      let s2 = o7[e6];
      1 & s2.shapeFlag && !s2.dynamicChildren && ((s2.patchFlag <= 0 || 32 === s2.patchFlag) && (s2 = o7[e6] = cloneIfMounted(o7[e6]), s2.el = t5.el), n2 || -2 === s2.patchFlag || traverseStaticChildren(t5, s2)), s2.type === at && (s2.el = t5.el);
    }
}
function locateNonHydratedAsyncRoot(e5) {
  const t4 = e5.subTree.component;
  if (t4)
    return t4.asyncDep && !t4.asyncResolved ? t4 : locateNonHydratedAsyncRoot(t4);
}
function invalidateMount(e5) {
  if (e5)
    for (let t4 = 0; t4 < e5.length; t4++)
      e5[t4].active = false;
}
function watchEffect(e5, t4) {
  return doWatch(e5, null, t4);
}
function watch(e5, t4, n2) {
  return doWatch(e5, t4, n2);
}
function doWatch(e5, t4, { immediate: n2, deep: r4, flush: o7, once: s2, onTrack: i3, onTrigger: a3 } = A2) {
  if (t4 && s2) {
    const e6 = t4;
    t4 = (...t5) => {
      e6(...t5), unwatch();
    };
  }
  const l2 = ht, reactiveGetter = (e6) => true === r4 ? e6 : traverse(e6, false === r4 ? 1 : void 0);
  let c2, u3, p2 = false, f2 = false;
  if (isRef(e5) ? (c2 = () => e5.value, p2 = isShallow(e5)) : isReactive(e5) ? (c2 = () => reactiveGetter(e5), p2 = true) : E(e5) ? (f2 = true, p2 = e5.some((e6) => isReactive(e6) || isShallow(e6)), c2 = () => e5.map((e6) => isRef(e6) ? e6.value : isReactive(e6) ? reactiveGetter(e6) : isFunction(e6) ? callWithErrorHandling(e6, l2, 2) : void 0)) : c2 = isFunction(e5) ? t4 ? () => callWithErrorHandling(e5, l2, 2) : () => (u3 && u3(), callWithAsyncErrorHandling(e5, l2, 3, [onCleanup])) : NOOP, t4 && r4) {
    const e6 = c2;
    c2 = () => traverse(e6());
  }
  let d2, onCleanup = (e6) => {
    u3 = y3.onStop = () => {
      callWithErrorHandling(e6, l2, 4), u3 = y3.onStop = void 0;
    };
  };
  if (vt) {
    if (onCleanup = NOOP, t4 ? n2 && callWithAsyncErrorHandling(t4, l2, 3, [c2(), f2 ? [] : void 0, onCleanup]) : c2(), "sync" !== o7)
      return NOOP;
    {
      const e6 = useSSRContext();
      d2 = e6.__watcherHandles || (e6.__watcherHandles = []);
    }
  }
  let g2 = f2 ? new Array(e5.length).fill(st) : st;
  const job = () => {
    if (y3.active && y3.dirty)
      if (t4) {
        const e6 = y3.run();
        (r4 || p2 || (f2 ? e6.some((e7, t5) => hasChanged(e7, g2[t5])) : hasChanged(e6, g2))) && (u3 && u3(), callWithAsyncErrorHandling(t4, l2, 3, [e6, g2 === st ? void 0 : f2 && g2[0] === st ? [] : g2, onCleanup]), g2 = e6);
      } else
        y3.run();
  };
  let m3;
  job.allowRecurse = !!t4, "sync" === o7 ? m3 = job : "post" === o7 ? m3 = () => queuePostRenderEffect(job, l2 && l2.suspense) : (job.pre = true, l2 && (job.id = l2.uid), m3 = () => queueJob(job));
  const y3 = new ReactiveEffect(c2, NOOP, m3), v3 = getCurrentScope(), unwatch = () => {
    y3.stop(), v3 && remove(v3.effects, y3);
  };
  return t4 ? n2 ? job() : g2 = y3.run() : "post" === o7 ? queuePostRenderEffect(y3.run.bind(y3), l2 && l2.suspense) : y3.run(), d2 && d2.push(unwatch), unwatch;
}
function instanceWatch(e5, t4, n2) {
  const r4 = this.proxy, o7 = isString(e5) ? e5.includes(".") ? createPathGetter(r4, e5) : () => r4[e5] : e5.bind(r4, r4);
  let s2;
  isFunction(t4) ? s2 = t4 : (s2 = t4.handler, n2 = t4);
  const i3 = setCurrentInstance(this), a3 = doWatch(o7, s2.bind(r4), n2);
  return i3(), a3;
}
function createPathGetter(e5, t4) {
  const n2 = t4.split(".");
  return () => {
    let t5 = e5;
    for (let e6 = 0; e6 < n2.length && t5; e6++)
      t5 = t5[n2[e6]];
    return t5;
  };
}
function traverse(e5, t4 = 1 / 0, n2) {
  if (t4 <= 0 || !isObject(e5) || e5.__v_skip)
    return e5;
  if ((n2 = n2 || /* @__PURE__ */ new Set()).has(e5))
    return e5;
  if (n2.add(e5), t4--, isRef(e5))
    traverse(e5.value, t4, n2);
  else if (E(e5))
    for (let r4 = 0; r4 < e5.length; r4++)
      traverse(e5[r4], t4, n2);
  else if (isSet(e5) || isMap(e5))
    e5.forEach((e6) => {
      traverse(e6, t4, n2);
    });
  else if (isPlainObject(e5)) {
    for (const r4 in e5)
      traverse(e5[r4], t4, n2);
    for (const r4 of Object.getOwnPropertySymbols(e5))
      Object.prototype.propertyIsEnumerable.call(e5, r4) && traverse(e5[r4], t4, n2);
  }
  return e5;
}
function emit(e5, t4, ...n2) {
  if (e5.isUnmounted)
    return;
  const r4 = e5.vnode.props || A2;
  let o7 = n2;
  const s2 = t4.startsWith("update:"), i3 = s2 && getModelModifiers(r4, t4.slice(7));
  let a3;
  i3 && (i3.trim && (o7 = n2.map((e6) => isString(e6) ? e6.trim() : e6)), i3.number && (o7 = n2.map(looseToNumber)));
  let l2 = r4[a3 = V(t4)] || r4[a3 = V(M(t4))];
  !l2 && s2 && (l2 = r4[a3 = V(N(t4))]), l2 && callWithAsyncErrorHandling(l2, e5, 6, o7);
  const c2 = r4[a3 + "Once"];
  if (c2) {
    if (e5.emitted) {
      if (e5.emitted[a3])
        return;
    } else
      e5.emitted = {};
    e5.emitted[a3] = true, callWithAsyncErrorHandling(c2, e5, 6, o7);
  }
}
function normalizeEmitsOptions(e5, t4, n2 = false) {
  const r4 = t4.emitsCache, o7 = r4.get(e5);
  if (void 0 !== o7)
    return o7;
  const s2 = e5.emits;
  let i3 = {}, a3 = false;
  if (__VUE_OPTIONS_API__ && !isFunction(e5)) {
    const extendEmits = (e6) => {
      const n3 = normalizeEmitsOptions(e6, t4, true);
      n3 && (a3 = true, $(i3, n3));
    };
    !n2 && t4.mixins.length && t4.mixins.forEach(extendEmits), e5.extends && extendEmits(e5.extends), e5.mixins && e5.mixins.forEach(extendEmits);
  }
  return s2 || a3 ? (E(s2) ? s2.forEach((e6) => i3[e6] = null) : $(i3, s2), isObject(e5) && r4.set(e5, i3), i3) : (isObject(e5) && r4.set(e5, null), null);
}
function isEmitListener(e5, t4) {
  return !(!e5 || !isOn(t4)) && (t4 = t4.slice(2).replace(/Once$/, ""), hasOwn(e5, t4[0].toLowerCase() + t4.slice(1)) || hasOwn(e5, N(t4)) || hasOwn(e5, t4));
}
function renderComponentRoot$1(e5) {
  const { type: t4, vnode: n2, proxy: r4, withProxy: o7, propsOptions: [s2], slots: i3, attrs: a3, emit: l2, render: c2, renderCache: u3, props: p2, data: f2, setupState: d2, ctx: g2, inheritAttrs: m3 } = e5, y3 = setCurrentRenderingInstance$1(e5);
  let v3, _3;
  try {
    if (4 & n2.shapeFlag) {
      const e6 = o7 || r4, t5 = e6;
      v3 = normalizeVNode$1(c2.call(t5, e6, u3, p2, d2, f2, g2)), _3 = a3;
    } else {
      const e6 = t4;
      0, v3 = normalizeVNode$1(e6.length > 1 ? e6(p2, { attrs: a3, slots: i3, emit: l2 }) : e6(p2, null)), _3 = t4.props ? a3 : getFunctionalFallthrough(a3);
    }
  } catch (t5) {
    handleError(t5, e5, 1), v3 = createVNode(lt);
  }
  let b3 = v3;
  if (_3 && false !== m3) {
    const e6 = Object.keys(_3), { shapeFlag: t5 } = b3;
    e6.length && 7 & t5 && (s2 && e6.some(isModelListener) && (_3 = filterModelListeners(_3, s2)), b3 = cloneVNode(b3, _3, false, true));
  }
  return n2.dirs && (b3 = cloneVNode(b3, null, false, true), b3.dirs = b3.dirs ? b3.dirs.concat(n2.dirs) : n2.dirs), n2.transition && (b3.transition = n2.transition), v3 = b3, setCurrentRenderingInstance$1(y3), v3;
}
function hasPropsChanged(e5, t4, n2) {
  const r4 = Object.keys(t4);
  if (r4.length !== Object.keys(e5).length)
    return true;
  for (let o7 = 0; o7 < r4.length; o7++) {
    const s2 = r4[o7];
    if (t4[s2] !== e5[s2] && !isEmitListener(n2, s2))
      return true;
  }
  return false;
}
function setBlockTracking(e5) {
  pt += e5, e5 < 0 && ut && (ut.hasOnce = true);
}
function isVNode(e5) {
  return !!e5 && true === e5.__v_isVNode;
}
function isSameVNodeType(e5, t4) {
  return e5.type === t4.type && e5.key === t4.key;
}
function cloneVNode(e5, t4, n2 = false, r4 = false) {
  const { props: o7, ref: s2, patchFlag: i3, children: a3, transition: l2 } = e5, c2 = t4 ? mergeProps(o7 || {}, t4) : o7, u3 = { __v_isVNode: true, __v_skip: true, type: e5.type, props: c2, key: c2 && normalizeKey(c2), ref: t4 && t4.ref ? n2 && s2 ? E(s2) ? s2.concat(normalizeRef(t4)) : [s2, normalizeRef(t4)] : normalizeRef(t4) : s2, scopeId: e5.scopeId, slotScopeIds: e5.slotScopeIds, children: a3, target: e5.target, targetStart: e5.targetStart, targetAnchor: e5.targetAnchor, staticCount: e5.staticCount, shapeFlag: e5.shapeFlag, patchFlag: t4 && e5.type !== it ? -1 === i3 ? 16 : 16 | i3 : i3, dynamicProps: e5.dynamicProps, dynamicChildren: e5.dynamicChildren, appContext: e5.appContext, dirs: e5.dirs, transition: l2, component: e5.component, suspense: e5.suspense, ssContent: e5.ssContent && cloneVNode(e5.ssContent), ssFallback: e5.ssFallback && cloneVNode(e5.ssFallback), el: e5.el, anchor: e5.anchor, ctx: e5.ctx, ce: e5.ce };
  return l2 && r4 && setTransitionHooks(u3, l2.clone(u3)), u3;
}
function createTextVNode(e5 = " ", t4 = 0) {
  return createVNode(at, null, e5, t4);
}
function normalizeVNode$1(e5) {
  return null == e5 || "boolean" == typeof e5 ? createVNode(lt) : E(e5) ? createVNode(it, null, e5.slice()) : "object" == typeof e5 ? cloneIfMounted(e5) : createVNode(at, null, String(e5));
}
function cloneIfMounted(e5) {
  return null === e5.el && -1 !== e5.patchFlag || e5.memo ? e5 : cloneVNode(e5);
}
function normalizeChildren(e5, t4) {
  let n2 = 0;
  const { shapeFlag: r4 } = e5;
  if (null == t4)
    t4 = null;
  else if (E(t4))
    n2 = 16;
  else if ("object" == typeof t4) {
    if (65 & r4) {
      const n3 = t4.default;
      return void (n3 && (n3._c && (n3._d = false), normalizeChildren(e5, n3()), n3._c && (n3._d = true)));
    }
    {
      n2 = 32;
      const r5 = t4._;
      r5 || isInternalObject(t4) ? 3 === r5 && Ie && (1 === Ie.slots._ ? t4._ = 1 : (t4._ = 2, e5.patchFlag |= 1024)) : t4._ctx = Ie;
    }
  } else
    isFunction(t4) ? (t4 = { default: t4, _ctx: Ie }, n2 = 32) : (t4 = String(t4), 64 & r4 ? (n2 = 16, t4 = [createTextVNode(t4)]) : n2 = 8);
  e5.children = t4, e5.shapeFlag |= n2;
}
function mergeProps(...e5) {
  const t4 = {};
  for (let n2 = 0; n2 < e5.length; n2++) {
    const r4 = e5[n2];
    for (const e6 in r4)
      if ("class" === e6)
        t4.class !== r4.class && (t4.class = normalizeClass([t4.class, r4.class]));
      else if ("style" === e6)
        t4.style = normalizeStyle([t4.style, r4.style]);
      else if (isOn(e6)) {
        const n3 = t4[e6], o7 = r4[e6];
        !o7 || n3 === o7 || E(n3) && n3.includes(o7) || (t4[e6] = n3 ? [].concat(n3, o7) : o7);
      } else
        "" !== e6 && (t4[e6] = r4[e6]);
  }
  return t4;
}
function invokeVNodeHook(e5, t4, n2, r4 = null) {
  callWithAsyncErrorHandling(e5, t4, 7, [n2, r4]);
}
function createComponentInstance$1(e5, t4, n2) {
  const r4 = e5.type, o7 = (t4 ? t4.appContext : e5.appContext) || ft, s2 = { uid: dt++, vnode: e5, type: r4, parent: t4, appContext: o7, root: null, next: null, subTree: null, effect: null, update: null, scope: new EffectScope(true), render: null, proxy: null, exposed: null, exposeProxy: null, withProxy: null, provides: t4 ? t4.provides : Object.create(o7.provides), accessCache: null, renderCache: [], components: null, directives: null, propsOptions: normalizePropsOptions(r4, o7), emitsOptions: normalizeEmitsOptions(r4, o7), emit: null, emitted: null, propsDefaults: A2, inheritAttrs: r4.inheritAttrs, ctx: A2, data: A2, props: A2, attrs: A2, slots: A2, refs: A2, setupState: A2, setupContext: null, suspense: n2, suspenseId: n2 ? n2.pendingId : 0, asyncDep: null, asyncResolved: false, isMounted: false, isUnmounted: false, isDeactivated: false, bc: null, c: null, bm: null, m: null, bu: null, u: null, um: null, bum: null, da: null, a: null, rtg: null, rtc: null, ec: null, sp: null };
  return s2.ctx = { _: s2 }, s2.root = t4 ? t4.root : s2, s2.emit = emit.bind(null, s2), e5.ce && e5.ce(s2), s2;
}
function isStatefulComponent(e5) {
  return 4 & e5.vnode.shapeFlag;
}
function setupComponent$1(e5, t4 = false, n2 = false) {
  t4 && mt(t4);
  const { props: r4, children: o7 } = e5.vnode, s2 = isStatefulComponent(e5);
  !function(e6, t5, n3, r5 = false) {
    const o8 = {}, s3 = createInternalObject();
    e6.propsDefaults = /* @__PURE__ */ Object.create(null), setFullProps(e6, t5, o8, s3);
    for (const t6 in e6.propsOptions[0])
      t6 in o8 || (o8[t6] = void 0);
    n3 ? e6.props = r5 ? o8 : shallowReactive(o8) : e6.type.props ? e6.props = o8 : e6.props = s3, e6.attrs = s3;
  }(e5, r4, s2, t4), initSlots(e5, o7, n2);
  const i3 = s2 ? function(e6, t5) {
    const n3 = e6.type;
    e6.accessCache = /* @__PURE__ */ Object.create(null), e6.proxy = new Proxy(e6.ctx, Ze);
    const { setup: r5 } = n3;
    if (r5) {
      const n4 = e6.setupContext = r5.length > 1 ? function(e7) {
        const expose = (t6) => {
          e7.exposed = t6 || {};
        };
        return { attrs: new Proxy(e7.attrs, _t), slots: e7.slots, emit: e7.emit, expose };
      }(e6) : null, o8 = setCurrentInstance(e6);
      pauseTracking();
      const s3 = callWithErrorHandling(r5, e6, 0, [e6.props, n4]);
      if (resetTracking(), o8(), isPromise(s3)) {
        if (s3.then(unsetCurrentInstance, unsetCurrentInstance), t5)
          return s3.then((n5) => {
            handleSetupResult(e6, n5, t5);
          }).catch((t6) => {
            handleError(t6, e6, 0);
          });
        e6.asyncDep = s3;
      } else
        handleSetupResult(e6, s3, t5);
    } else
      finishComponentSetup(e6, t5);
  }(e5, t4) : void 0;
  return t4 && mt(false), i3;
}
function handleSetupResult(e5, t4, n2) {
  isFunction(t4) ? e5.type.__ssrInlineRender ? e5.ssrRender = t4 : e5.render = t4 : isObject(t4) && (e5.setupState = proxyRefs(t4)), finishComponentSetup(e5, n2);
}
function finishComponentSetup(e5, t4, n2) {
  const r4 = e5.type;
  if (!e5.render) {
    if (!t4 && yt && !r4.render) {
      const t5 = r4.template || resolveMergedOptions(e5).template;
      if (t5) {
        const { isCustomElement: n3, compilerOptions: o7 } = e5.appContext.config, { delimiters: s2, compilerOptions: i3 } = r4, a3 = $($({ isCustomElement: n3, delimiters: s2 }, o7), i3);
        r4.render = yt(t5, a3);
      }
    }
    e5.render = r4.render || NOOP;
  }
  if (__VUE_OPTIONS_API__) {
    const t5 = setCurrentInstance(e5);
    pauseTracking();
    try {
      applyOptions(e5);
    } finally {
      resetTracking(), t5();
    }
  }
}
function getComponentPublicInstance(e5) {
  return e5.exposed ? e5.exposeProxy || (e5.exposeProxy = new Proxy(proxyRefs((t4 = e5.exposed, Object.isExtensible(t4) && def(t4, "__v_skip", true), t4)), { get: (t5, n2) => n2 in t5 ? t5[n2] : n2 in Ke ? Ke[n2](e5) : void 0, has: (e6, t5) => t5 in e6 || t5 in Ke })) : e5.proxy;
  var t4;
}
function getComponentName(e5, t4 = true) {
  return isFunction(e5) ? e5.displayName || e5.name : e5.name || t4 && e5.__name;
}
function h(e5, t4, n2) {
  const r4 = arguments.length;
  return 2 === r4 ? isObject(t4) && !E(t4) ? isVNode(t4) ? createVNode(e5, null, [t4]) : createVNode(e5, t4) : createVNode(e5, null, t4) : (r4 > 3 ? n2 = Array.prototype.slice.call(arguments, 2) : 3 === r4 && isVNode(n2) && (n2 = [n2]), createVNode(e5, t4, n2));
}
function setStyle(e5, t4, n2) {
  if (E(n2))
    n2.forEach((n3) => setStyle(e5, t4, n3));
  else if (null == n2 && (n2 = ""), t4.startsWith("--"))
    e5.setProperty(t4, n2);
  else {
    const r4 = function(e6, t5) {
      const n3 = jt[t5];
      if (n3)
        return n3;
      let r5 = M(t5);
      if ("filter" !== r5 && r5 in e6)
        return jt[t5] = r5;
      r5 = L(r5);
      for (let n4 = 0; n4 < Pt.length; n4++) {
        const o7 = Pt[n4] + r5;
        if (o7 in e6)
          return jt[t5] = o7;
      }
      return t5;
    }(e5, t4);
    Et.test(n2) ? e5.setProperty(N(r4), n2.replace(Et, ""), "important") : e5[r4] = n2;
  }
}
function patchAttr(e5, t4, n2, r4, o7, s2 = J(t4)) {
  r4 && t4.startsWith("xlink:") ? null == n2 ? e5.removeAttributeNS(Ht, t4.slice(6, t4.length)) : e5.setAttributeNS(Ht, t4, n2) : null == n2 || s2 && !includeBooleanAttr(n2) ? e5.removeAttribute(t4) : e5.setAttribute(t4, s2 ? "" : isSymbol(n2) ? String(n2) : n2);
}
function patchEvent(e5, t4, n2, r4, o7 = null) {
  const s2 = e5[Mt] || (e5[Mt] = {}), i3 = s2[t4];
  if (r4 && i3)
    i3.value = r4;
  else {
    const [n3, a3] = function(e6) {
      let t5;
      if (It.test(e6)) {
        let n5;
        for (t5 = {}; n5 = e6.match(It); )
          e6 = e6.slice(0, e6.length - n5[0].length), t5[n5[0].toLowerCase()] = true;
      }
      const n4 = ":" === e6[2] ? e6.slice(3) : N(e6.slice(2));
      return [n4, t5];
    }(t4);
    if (r4) {
      const i4 = s2[t4] = function(e6, t5) {
        const invoker = (e7) => {
          if (e7._vts) {
            if (e7._vts <= invoker.attached)
              return;
          } else
            e7._vts = Date.now();
          callWithAsyncErrorHandling(function(e8, t6) {
            if (E(t6)) {
              const n4 = e8.stopImmediatePropagation;
              return e8.stopImmediatePropagation = () => {
                n4.call(e8), e8._stopped = true;
              }, t6.map((e9) => (t7) => !t7._stopped && e9 && e9(t7));
            }
            return t6;
          }(e7, invoker.value), t5, 5, [e7]);
        };
        return invoker.value = e6, invoker.attached = getNow(), invoker;
      }(r4, o7);
      !function(e6, t5, n4, r5) {
        e6.addEventListener(t5, n4, r5);
      }(e5, n3, i4, a3);
    } else
      i3 && (!function(e6, t5, n4, r5) {
        e6.removeEventListener(t5, n4, r5);
      }(e5, n3, i3, a3), s2[t4] = void 0);
  }
}
function ssrRenderAttrs(e5, t4) {
  let n2 = "";
  for (const o7 in e5) {
    if (Dt(o7) || isOn(o7) || "textarea" === t4 && "value" === o7)
      continue;
    const s2 = e5[o7];
    n2 += "class" === o7 ? ` class="${r4 = s2, escapeHtml$1(normalizeClass(r4))}"` : "style" === o7 ? ` style="${ssrRenderStyle(s2)}"` : ssrRenderDynamicAttr(o7, s2, t4);
  }
  var r4;
  return n2;
}
function ssrRenderDynamicAttr(e5, t4, n2) {
  if (!function(e6) {
    if (null == e6)
      return false;
    const t5 = typeof e6;
    return "string" === t5 || "number" === t5 || "boolean" === t5;
  }(t4))
    return "";
  const r4 = n2 && (n2.indexOf("-") > 0 || B(n2)) ? e5 : X[e5] || e5.toLowerCase();
  return G(r4) ? includeBooleanAttr(t4) ? ` ${r4}` : "" : function(e6) {
    if (Z2.hasOwnProperty(e6))
      return Z2[e6];
    const t5 = K.test(e6);
    return t5 && console.error(`unsafe attribute name: ${e6}`), Z2[e6] = !t5;
  }(r4) ? "" === t4 ? ` ${r4}` : ` ${r4}="${escapeHtml$1(t4)}"` : (console.warn(`[@vue/server-renderer] Skipped rendering unsafe attribute name: ${r4}`), "");
}
function ssrRenderStyle(e5) {
  if (!e5)
    return "";
  if (isString(e5))
    return escapeHtml$1(e5);
  return escapeHtml$1(function(e6) {
    let t4 = "";
    if (!e6 || isString(e6))
      return t4;
    for (const n2 in e6) {
      const r4 = e6[n2];
      (isString(r4) || "number" == typeof r4) && (t4 += `${n2.startsWith("--") ? n2 : N(n2)}:${r4};`);
    }
    return t4;
  }(normalizeStyle(e5)));
}
function ssrRenderComponent(e5, t4 = null, n2 = null, r4 = null, o7) {
  return renderComponentVNode(createVNode(e5, t4, n2), r4, o7);
}
function ssrInterpolate(e5) {
  return escapeHtml$1(toDisplayString(e5));
}
async function ssrRenderSuspense(e5, { default: t4 }) {
  t4 ? t4() : e5("<!---->");
}
function createBuffer() {
  let e5 = false;
  const t4 = [];
  return { getBuffer: () => t4, push(n2) {
    const r4 = isString(n2);
    e5 && r4 ? t4[t4.length - 1] += n2 : (t4.push(n2), e5 = r4, (isPromise(n2) || E(n2) && n2.hasAsync) && (t4.hasAsync = true));
  } };
}
function renderComponentVNode(e5, t4 = null, n2) {
  const r4 = Ut(e5, t4, null), o7 = Bt(r4, true), s2 = isPromise(o7), i3 = r4.sp;
  if (s2 || i3) {
    let e6 = s2 ? o7 : Promise.resolve();
    return i3 && (e6 = e6.then(() => Promise.all(i3.map((e7) => e7.call(r4.proxy)))).catch(NOOP)), e6.then(() => renderComponentSubTree(r4, n2));
  }
  return renderComponentSubTree(r4, n2);
}
function renderComponentSubTree(e5, t4) {
  const n2 = e5.type, { getBuffer: r4, push: o7 } = createBuffer();
  if (isFunction(n2)) {
    let r5 = Wt(e5);
    if (!n2.props)
      for (const t5 in e5.attrs)
        t5.startsWith("data-v-") && ((r5.props || (r5.props = {}))[t5] = "");
    renderVNode(o7, e5.subTree = r5, e5, t4);
  } else {
    e5.render && e5.render !== NOOP || e5.ssrRender || n2.ssrRender || !isString(n2.template) || (n2.ssrRender = function() {
      throw new Error("On-the-fly template compilation is not supported in the ESM build of @vue/server-renderer. All templates must be pre-compiled into render functions.");
    }(n2.template));
    for (const t5 of e5.scope.effects)
      t5.computed && (t5.computed._dirty = true, t5.computed._cacheable = true);
    const r5 = e5.ssrRender || n2.ssrRender;
    if (r5) {
      let n3 = false !== e5.inheritAttrs ? e5.attrs : void 0, s2 = false, i3 = e5;
      for (; ; ) {
        const e6 = i3.vnode.scopeId;
        e6 && (s2 || (n3 = { ...n3 }, s2 = true), n3[e6] = "");
        const t5 = i3.parent;
        if (!t5 || !t5.subTree || t5.subTree !== i3.vnode)
          break;
        i3 = t5;
      }
      if (t4) {
        s2 || (n3 = { ...n3 });
        const e6 = t4.trim().split(" ");
        for (let t5 = 0; t5 < e6.length; t5++)
          n3[e6[t5]] = "";
      }
      const a3 = zt(e5);
      try {
        r5(e5.proxy, o7, e5, n3, e5.props, e5.setupState, e5.data, e5.ctx);
      } finally {
        zt(a3);
      }
    } else
      e5.render && e5.render !== NOOP ? renderVNode(o7, e5.subTree = Wt(e5), e5, t4) : (n2.name || n2.__file, o7("<!---->"));
  }
  return r4();
}
function renderVNode(e5, t4, n2, r4) {
  const { type: o7, shapeFlag: s2, children: i3 } = t4;
  switch (o7) {
    case at:
      e5(escapeHtml$1(i3));
      break;
    case lt:
      e5(i3 ? `<!--${a3 = i3, a3.replace(Q, "")}-->` : "<!---->");
      break;
    case ct:
      e5(i3);
      break;
    case it:
      t4.slotScopeIds && (r4 = (r4 ? r4 + " " : "") + t4.slotScopeIds.join(" ")), e5("<!--[-->"), renderVNodeChildren(e5, i3, n2, r4), e5("<!--]-->");
      break;
    default:
      1 & s2 ? function(e6, t5, n3, r5) {
        const o8 = t5.type;
        let { props: s3, children: i4, shapeFlag: a4, scopeId: l2, dirs: c2 } = t5, u3 = `<${o8}`;
        c2 && (s3 = function(e7, t6, n4) {
          const r6 = [];
          for (let t7 = 0; t7 < n4.length; t7++) {
            const o9 = n4[t7], { dir: { getSSRProps: s4 } } = o9;
            if (s4) {
              const t8 = s4(o9, e7);
              t8 && r6.push(t8);
            }
          }
          return mergeProps(t6 || {}, ...r6);
        }(t5, s3, c2));
        s3 && (u3 += ssrRenderAttrs(s3, o8));
        l2 && (u3 += ` ${l2}`);
        let p2 = n3, f2 = t5;
        for (; p2 && f2 === p2.subTree; )
          f2 = p2.vnode, f2.scopeId && (u3 += ` ${f2.scopeId}`), p2 = p2.parent;
        r5 && (u3 += ` ${r5}`);
        if (e6(u3 + ">"), !W(o8)) {
          let t6 = false;
          s3 && (s3.innerHTML ? (t6 = true, e6(s3.innerHTML)) : s3.textContent ? (t6 = true, e6(escapeHtml$1(s3.textContent))) : "textarea" === o8 && s3.value && (t6 = true, e6(escapeHtml$1(s3.value)))), t6 || (8 & a4 ? e6(escapeHtml$1(i4)) : 16 & a4 && renderVNodeChildren(e6, i4, n3, r5)), e6(`</${o8}>`);
        }
      }(e5, t4, n2, r4) : 6 & s2 ? e5(renderComponentVNode(t4, n2, r4)) : 64 & s2 ? function(e6, t5, n3, r5) {
        const o8 = t5.props && t5.props.to, s3 = t5.props && t5.props.disabled;
        if (!o8)
          return [];
        if (!isString(o8))
          return [];
        !function(e7, t6, n4, r6, o9) {
          e7("<!--teleport start-->");
          const s4 = o9.appContext.provides[ot], i4 = s4.__teleportBuffers || (s4.__teleportBuffers = {}), a4 = i4[n4] || (i4[n4] = []), l2 = a4.length;
          let c2;
          if (r6)
            t6(e7), c2 = "<!--teleport start anchor--><!--teleport anchor-->";
          else {
            const { getBuffer: e8, push: n5 } = createBuffer();
            n5("<!--teleport start anchor-->"), t6(n5), n5("<!--teleport anchor-->"), c2 = e8();
          }
          a4.splice(l2, 0, c2), e7("<!--teleport end-->");
        }(e6, (e7) => {
          renderVNodeChildren(e7, t5.children, n3, r5);
        }, o8, s3 || "" === s3, n3);
      }(e5, t4, n2, r4) : 128 & s2 && renderVNode(e5, t4.ssContent, n2, r4);
  }
  var a3;
}
function renderVNodeChildren(e5, t4, n2, r4) {
  for (let o7 = 0; o7 < t4.length; o7++)
    renderVNode(e5, qt(t4[o7]), n2, r4);
}
function nestedUnrollBuffer(e5, t4, n2) {
  if (!e5.hasAsync)
    return t4 + unrollBufferSync$1(e5);
  let r4 = t4;
  for (let t5 = n2; t5 < e5.length; t5 += 1) {
    const n3 = e5[t5];
    if (isString(n3)) {
      r4 += n3;
      continue;
    }
    if (isPromise(n3))
      return n3.then((n4) => (e5[t5] = n4, nestedUnrollBuffer(e5, r4, t5)));
    const o7 = nestedUnrollBuffer(n3, r4, 0);
    if (isPromise(o7))
      return o7.then((n4) => (e5[t5] = n4, nestedUnrollBuffer(e5, "", t5)));
    r4 = o7;
  }
  return r4;
}
function unrollBuffer$1(e5) {
  return nestedUnrollBuffer(e5, "", 0);
}
function unrollBufferSync$1(e5) {
  let t4 = "";
  for (let n2 = 0; n2 < e5.length; n2++) {
    let r4 = e5[n2];
    isString(r4) ? t4 += r4 : t4 += unrollBufferSync$1(r4);
  }
  return t4;
}
async function renderToString(e5, t4 = {}) {
  if (Jt(e5))
    return renderToString(createApp({ render: () => e5 }), t4);
  const n2 = createVNode(e5._component, e5._props);
  n2.appContext = e5._context, e5.provide(ot, t4);
  const r4 = await renderComponentVNode(n2), o7 = await unrollBuffer$1(r4);
  if (await async function(e6) {
    if (e6.__teleportBuffers) {
      e6.teleports = e6.teleports || {};
      for (const t5 in e6.__teleportBuffers)
        e6.teleports[t5] = await unrollBuffer$1(await Promise.all([e6.__teleportBuffers[t5]]));
    }
  }(t4), t4.__watcherHandles)
    for (const e6 of t4.__watcherHandles)
      e6();
  return o7;
}
function hashCode(e5) {
  let t4 = 9;
  for (let n2 = 0; n2 < e5.length; )
    t4 = Math.imul(t4 ^ e5.charCodeAt(n2++), 9 ** 9);
  return (65536 + (t4 ^ t4 >>> 9)).toString(16).substring(1, 8).toLowerCase();
}
function resolveTitleTemplate(e5, t4) {
  return null == e5 ? t4 || null : "function" == typeof e5 ? e5(t4) : e5;
}
function normaliseStyleClassProps(e5, t4) {
  const n2 = "class" === e5 ? " " : ";";
  return "object" != typeof t4 || Array.isArray(t4) || (t4 = Object.entries(t4).filter(([, e6]) => e6).map(([t5, n3]) => "style" === e5 ? `${t5}:${n3}` : t5)), String(Array.isArray(t4) ? t4.join(n2) : t4)?.split(n2).filter((e6) => e6.trim()).filter(Boolean).join(n2);
}
async function normaliseProps(e5, t4) {
  for (const n2 of Object.keys(e5))
    if (["class", "style"].includes(n2))
      e5[n2] = normaliseStyleClassProps(n2, e5[n2]);
    else if (e5[n2] instanceof Promise && (e5[n2] = await e5[n2]), !t4 && !Qt.includes(n2)) {
      const t5 = String(e5[n2]), r4 = n2.startsWith("data-");
      "true" === t5 || "" === t5 ? e5[n2] = !r4 || "true" : e5[n2] || (r4 && "false" === t5 ? e5[n2] = "false" : delete e5[n2]);
    }
  return e5;
}
async function normaliseEntryTags(e5) {
  const t4 = [];
  return Object.entries(e5.resolvedInput).filter(([e6, t5]) => void 0 !== t5 && Xt.includes(e6)).forEach(([n2, r4]) => {
    const o7 = function(e6) {
      return Array.isArray(e6) ? e6 : [e6];
    }(r4);
    t4.push(...o7.map((t5) => async function(e6, t6, n3) {
      const r5 = { tag: e6, props: await normaliseProps("object" != typeof t6 || "function" == typeof t6 || t6 instanceof Promise ? { [["script", "noscript", "style"].includes(e6) ? "innerHTML" : "textContent"]: t6 } : { ...t6 }, ["templateParams", "titleTemplate"].includes(e6)) };
      return Qt.forEach((e7) => {
        const t7 = void 0 !== r5.props[e7] ? r5.props[e7] : n3[e7];
        void 0 !== t7 && (["innerHTML", "textContent", "children"].includes(e7) && !Kt.includes(r5.tag) || (r5["children" === e7 ? "innerHTML" : e7] = t7), delete r5.props[e7]);
      }), r5.props.body && (r5.tagPosition = "bodyClose", delete r5.props.body), "script" === r5.tag && "object" == typeof r5.innerHTML && (r5.innerHTML = JSON.stringify(r5.innerHTML), r5.props.type = r5.props.type || "application/json"), Array.isArray(r5.props.content) ? r5.props.content.map((e7) => ({ ...r5, props: { ...r5.props, content: e7 } })) : r5;
    }(n2, t5, e5)).flat());
  }), (await Promise.all(t4)).flat().filter(Boolean).map((t5, n2) => (t5._e = e5._i, e5.mode && (t5._m = e5.mode), t5._p = (e5._i << en) + n2, t5));
}
function tagWeight(e5) {
  let t4 = 100;
  const n2 = e5.tagPriority;
  return "number" == typeof n2 ? n2 : ("meta" === e5.tag ? ("content-security-policy" === e5.props["http-equiv"] && (t4 = -30), e5.props.charset && (t4 = -20), "viewport" === e5.props.name && (t4 = -15)) : "link" === e5.tag && "preconnect" === e5.props.rel ? t4 = 20 : e5.tag in tn && (t4 = tn[e5.tag]), "string" == typeof n2 && n2 in nn ? t4 + nn[n2] : t4);
}
function processTemplateParams(e5, t4, n2) {
  if ("string" != typeof e5 || !e5.includes("%"))
    return e5;
  let r4 = e5;
  try {
    r4 = decodeURI(e5);
  } catch {
  }
  return (r4.match(/%(\w+\.+\w+)|%(\w+)/g) || []).sort().reverse().forEach((n3) => {
    const r5 = function(e6) {
      let n4;
      return n4 = ["s", "pageTitle"].includes(e6) ? t4.pageTitle : e6.includes(".") ? e6.split(".").reduce((e7, t5) => e7 && e7[t5] || void 0, t4) : t4[e6], void 0 !== n4 && (n4 || "").replace(/"/g, '\\"');
    }(n3.slice(1));
    "string" == typeof r5 && (e5 = e5.replace(new RegExp(`\\${n3}(\\W|$)`, "g"), (e6, t5) => `${r5}${t5}`).trim());
  }), e5.includes(sn) && (e5.endsWith(sn) && (e5 = e5.slice(0, -10).trim()), e5.startsWith(sn) && (e5 = e5.slice(10).trim()), e5 = processTemplateParams(e5 = e5.replace(new RegExp(`\\${sn}\\s*\\${sn}`, "g"), sn), { separator: n2 }, n2)), e5;
}
function encodeAttribute(e5) {
  return String(e5).replace(/"/g, "&quot;");
}
function propsToString(e5) {
  const t4 = [];
  for (const [n2, r4] of Object.entries(e5))
    false !== r4 && null !== r4 && t4.push(true === r4 ? n2 : `${n2}="${encodeAttribute(r4)}"`);
  return `${t4.length > 0 ? " " : ""}${t4.join(" ")}`;
}
function tagToString(e5) {
  const t4 = propsToString(e5.props), n2 = `<${e5.tag}${t4}>`;
  if (!Kt.includes(e5.tag))
    return Gt.includes(e5.tag) ? n2 : `${n2}</${e5.tag}>`;
  let r4 = String(e5.innerHTML || "");
  return e5.textContent && (r4 = String(e5.textContent).replace(/[&<>"'/]/g, (e6) => {
    switch (e6) {
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
        return e6;
    }
  })), Gt.includes(e5.tag) ? n2 : `${n2}${r4}</${e5.tag}>`;
}
async function renderSSRHead(e5, t4) {
  const n2 = { shouldRender: true };
  if (await e5.hooks.callHook("ssr:beforeRender", n2), !n2.shouldRender)
    return { headTags: "", bodyTags: "", bodyTagsOpen: "", htmlAttrs: "", bodyAttrs: "" };
  const r4 = { tags: await e5.resolveTags() };
  await e5.hooks.callHook("ssr:render", r4);
  const o7 = function(e6) {
    const t5 = { htmlAttrs: {}, bodyAttrs: {}, tags: { head: [], bodyClose: [], bodyOpen: [] } };
    for (const n3 of e6)
      "htmlAttrs" !== n3.tag && "bodyAttrs" !== n3.tag ? t5.tags[n3.tagPosition || "head"].push(tagToString(n3)) : t5[n3.tag] = { ...t5[n3.tag], ...n3.props };
    return { headTags: t5.tags.head.join("\n"), bodyTags: t5.tags.bodyClose.join("\n"), bodyTagsOpen: t5.tags.bodyOpen.join("\n"), htmlAttrs: propsToString(t5.htmlAttrs), bodyAttrs: propsToString(t5.bodyAttrs) };
  }(r4.tags), s2 = { tags: r4.tags, html: o7 };
  return await e5.hooks.callHook("ssr:rendered", s2), s2.html;
}
function createServerHead$1(e5 = {}) {
  return yn = function(e6 = {}) {
    const t4 = createHooks();
    t4.addHooks(e6.hooks || {}), e6.document = e6.document || void 0;
    const n2 = !e6.document, updated = () => {
      i3.dirty = true, t4.callHook("entries:updated", i3);
    };
    let r4 = 0, o7 = [];
    const s2 = [], i3 = { plugins: s2, dirty: false, resolvedOptions: e6, hooks: t4, headEntries: () => o7, use(e7) {
      const r5 = "function" == typeof e7 ? e7(i3) : e7;
      r5.key && s2.some((e8) => e8.key === r5.key) || (s2.push(r5), filterMode(r5.mode, n2) && t4.addHooks(r5.hooks || {}));
    }, push(e7, s3) {
      delete s3?.head;
      const a3 = { _i: r4++, input: e7, ...s3 };
      return filterMode(a3.mode, n2) && (o7.push(a3), updated()), { dispose() {
        o7 = o7.filter((e8) => e8._i !== a3._i), t4.callHook("entries:updated", i3), updated();
      }, patch(e8) {
        o7 = o7.map((t5) => (t5._i === a3._i && (t5.input = a3.input = e8), t5)), updated();
      } };
    }, async resolveTags() {
      const e7 = { tags: [], entries: [...o7] };
      await t4.callHook("entries:resolve", e7);
      for (const n3 of e7.entries) {
        const r5 = n3.resolvedInput || n3.input;
        if (n3.resolvedInput = await (n3.transform ? n3.transform(r5) : r5), n3.resolvedInput)
          for (const r6 of await normaliseEntryTags(n3)) {
            const o8 = { tag: r6, entry: n3, resolvedOptions: i3.resolvedOptions };
            await t4.callHook("tag:normalise", o8), e7.tags.push(o8.tag);
          }
      }
      return await t4.callHook("tags:beforeResolve", e7), await t4.callHook("tags:resolve", e7), await t4.callHook("tags:afterResolve", e7), e7.tags;
    }, ssr: n2 };
    return [ln, cn, EventHandlersPlugin, fn, dn, TemplateParamsPlugin, gn, mn, ...e6?.plugins || []].forEach((e7) => i3.use(e7)), i3.hooks.callHook("init", i3), i3;
  }(e5);
}
function filterMode(e5, t4) {
  return !e5 || "server" === e5 && t4 || "client" === e5 && !t4;
}
function getActiveHead() {
  return yn;
}
function resolveUnrefHeadInput2(e5, t4 = "") {
  if (e5 instanceof Promise)
    return e5;
  const n2 = "function" == typeof (r4 = e5) ? r4() : unref(r4);
  var r4;
  return e5 && n2 ? Array.isArray(n2) ? n2.map((e6) => resolveUnrefHeadInput2(e6, t4)) : "object" == typeof n2 ? Object.fromEntries(Object.entries(n2).map(([e6, t5]) => "titleTemplate" === e6 || e6.startsWith("on") ? [e6, unref(t5)] : [e6, resolveUnrefHeadInput2(t5, e6)])) : n2 : n2;
}
function createServerHead(e5 = {}) {
  const t4 = createServerHead$1(e5);
  return t4.use(bn), t4.install = function(e6) {
    return { install(t5) {
      _n && (t5.config.globalProperties.$unhead = e6, t5.config.globalProperties.$head = e6, t5.provide(kn, e6));
    } }.install;
  }(t4), t4;
}
function baseURL() {
  return useRuntimeConfig2().app.baseURL;
}
function buildAssetsURL(...t4) {
  return joinRelativeURL(publicAssetsURL(), useRuntimeConfig2().app.buildAssetsDir, ...t4);
}
function publicAssetsURL(...t4) {
  const n2 = useRuntimeConfig2().app, r4 = n2.cdnURL || n2.baseURL;
  return t4.length ? joinRelativeURL(r4, ...t4) : r4;
}
function lazyCachedFunction(e5) {
  let t4 = null;
  return () => (null === t4 && (t4 = e5().catch((e6) => {
    throw t4 = null, e6;
  })), t4);
}
function normalizeChunks(e5) {
  return e5.filter(Boolean).map((e6) => e6.trim());
}
function joinTags(e5) {
  return e5.join("");
}
function joinAttrs(e5) {
  return 0 === e5.length ? "" : " " + e5.join(" ");
}
function renderPayloadJsonScript(e5) {
  const t4 = e5.data ? stringify(e5.data, e5.ssrContext._payloadReducers) : "", n2 = { type: "application/json", id: e5.id, innerHTML: t4, "data-ssr": !e5.ssrContext.noSSR };
  return e5.src && (n2["data-src"] = e5.src), [n2, { innerHTML: `window.__NUXT__={};window.__NUXT__.config=${uneval(e5.ssrContext.config)}` }];
}
function splitPayload(e5) {
  const { data: t4, prerenderedAt: n2, ...r4 } = e5.payload;
  return { initial: { ...r4, prerenderedAt: n2 }, payload: { data: t4, prerenderedAt: n2 } };
}
var m, DevalueError, y, v, _, b, k, R, w, S, C, x, A2, O, NOOP, NO, isOn, isModelListener, $, remove, T, hasOwn, E, isMap, isSet, isFunction, isString, isSymbol, isObject, isPromise, P, toTypeString, toRawType, isPlainObject, isIntegerKey, j2, cacheStringFunction, H, M, I, N, L, V, hasChanged, invokeArrayFns, def, looseToNumber, F, getGlobalThis, D, U, z2, B, W, q2, J, G, K, Z2, X, Y, Q, isRef$1, toDisplayString, replacer, stringifySymbol, ee2, te3, EffectScope, ReactiveEffect, ne2, re2, oe2, se2, createDep, ie2, ae2, le2, ce2, ue2, pe2, BaseReactiveHandler, MutableReactiveHandler, ReadonlyReactiveHandler, fe2, de2, he2, toShallow, getProto, ge2, me2, ye2, ve3, _e2, be2, ke2, Re2, we2, Se, Ce3, toReactive, toReadonly, ComputedRefImpl, RefImpl, xe2, ObjectRefImpl, GetterRefImpl, Ae2, Oe, $e, Te, Ee, Pe2, je, He, Me, getId, comparator, Ie, Ne, isAsyncWrapper, isKeepAlive, createHook, Le, Ve, Fe, De, Ue, ze, Be, We, qe, Je, Ge, getPublicInstance, Ke, hasSetupBinding, Ze, Xe, Ye, Qe, et, tt, createInternalObject, isInternalObject, nt, isInternalKey, normalizeSlotValue, normalizeSlot, normalizeObjectSlots, normalizeVNodeSlots, assignSlots, initSlots, updateSlots, rt, queuePostRenderEffect, ot, useSSRContext, st, getModelModifiers, getFunctionalFallthrough, filterModelListeners, it, at, lt, ct, ut, pt, normalizeKey, normalizeRef, createVNode, ft, dt, ht, getCurrentInstance, gt, mt, setCurrentInstance, unsetCurrentInstance, yt, vt, _t, computed, bt, kt, Rt, wt, St, Ct, xt, At, Ot, $t, Tt, Et, Pt, jt, Ht, Mt, It, Nt, Lt, getNow, isNativeOn, Vt, Ft, createApp, Dt, Ut, zt, Bt, Wt, qt, Jt, Gt, Kt, Zt, Xt, Yt, Qt, en, tn, nn, rn, on, sn, an, ln, cn, un, EventHandlersPlugin, pn, fn, dn, hn, TemplateParamsPlugin, gn, mn, yn, vn, _n, bn, kn, Rn, wn, Sn, Cn, getClientManifest, xn, An, On, $n, Tn, En, Pn, jn, Hn;
var init_renderer = __esm({
  ".wrangler/tmp/pages-FEt2Fg/chunks/routes/renderer.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    init_runtime();
    globalThis._importMeta_ = globalThis._importMeta_ || { url: "file:///_entry.js", env: {} };
    m = { "<": "\\u003C", "\\": "\\\\", "\b": "\\b", "\f": "\\f", "\n": "\\n", "\r": "\\r", "	": "\\t", "\u2028": "\\u2028", "\u2029": "\\u2029" };
    DevalueError = class extends Error {
      constructor(e5, t4) {
        super(e5), this.name = "DevalueError", this.path = t4.join("");
      }
    };
    y = Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
    v = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_$";
    _ = /[<\b\f\n\r\t\0\u2028\u2029]/g;
    b = /^(?:do|if|in|for|int|let|new|try|var|byte|case|char|else|enum|goto|long|this|void|with|await|break|catch|class|const|final|float|short|super|throw|while|yield|delete|double|export|import|native|return|switch|throws|typeof|boolean|default|extends|finally|package|private|abstract|continue|debugger|function|volatile|interface|protected|transient|implements|instanceof|synchronized)$/;
    k = -1;
    R = -2;
    w = -3;
    S = -4;
    C = -5;
    x = -6;
    A2 = {};
    O = [];
    NOOP = () => {
    };
    NO = () => false;
    isOn = (e5) => 111 === e5.charCodeAt(0) && 110 === e5.charCodeAt(1) && (e5.charCodeAt(2) > 122 || e5.charCodeAt(2) < 97);
    isModelListener = (e5) => e5.startsWith("onUpdate:");
    $ = Object.assign;
    remove = (e5, t4) => {
      const n2 = e5.indexOf(t4);
      n2 > -1 && e5.splice(n2, 1);
    };
    T = Object.prototype.hasOwnProperty;
    hasOwn = (e5, t4) => T.call(e5, t4);
    E = Array.isArray;
    isMap = (e5) => "[object Map]" === toTypeString(e5);
    isSet = (e5) => "[object Set]" === toTypeString(e5);
    isFunction = (e5) => "function" == typeof e5;
    isString = (e5) => "string" == typeof e5;
    isSymbol = (e5) => "symbol" == typeof e5;
    isObject = (e5) => null !== e5 && "object" == typeof e5;
    isPromise = (e5) => (isObject(e5) || isFunction(e5)) && isFunction(e5.then) && isFunction(e5.catch);
    P = Object.prototype.toString;
    toTypeString = (e5) => P.call(e5);
    toRawType = (e5) => toTypeString(e5).slice(8, -1);
    isPlainObject = (e5) => "[object Object]" === toTypeString(e5);
    isIntegerKey = (e5) => isString(e5) && "NaN" !== e5 && "-" !== e5[0] && "" + parseInt(e5, 10) === e5;
    j2 = makeMap(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted");
    cacheStringFunction = (e5) => {
      const t4 = /* @__PURE__ */ Object.create(null);
      return (n2) => t4[n2] || (t4[n2] = e5(n2));
    };
    H = /-(\w)/g;
    M = cacheStringFunction((e5) => e5.replace(H, (e6, t4) => t4 ? t4.toUpperCase() : ""));
    I = /\B([A-Z])/g;
    N = cacheStringFunction((e5) => e5.replace(I, "-$1").toLowerCase());
    L = cacheStringFunction((e5) => e5.charAt(0).toUpperCase() + e5.slice(1));
    V = cacheStringFunction((e5) => e5 ? `on${L(e5)}` : "");
    hasChanged = (e5, t4) => !Object.is(e5, t4);
    invokeArrayFns = (e5, ...t4) => {
      for (let n2 = 0; n2 < e5.length; n2++)
        e5[n2](...t4);
    };
    def = (e5, t4, n2, r4 = false) => {
      Object.defineProperty(e5, t4, { configurable: true, enumerable: false, writable: r4, value: n2 });
    };
    looseToNumber = (e5) => {
      const t4 = parseFloat(e5);
      return isNaN(t4) ? e5 : t4;
    };
    getGlobalThis = () => F || (F = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof global ? global : {});
    D = /;(?![^(]*\))/g;
    U = /:([^]+)/;
    z2 = /\/\*[^]*?\*\//g;
    B = makeMap("svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view");
    W = makeMap("area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr");
    q2 = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly";
    J = makeMap(q2);
    G = makeMap(q2 + ",async,autofocus,autoplay,controls,default,defer,disabled,hidden,inert,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected");
    K = /[>/="'\u0009\u000a\u000c\u0020]/;
    Z2 = {};
    X = { acceptCharset: "accept-charset", className: "class", htmlFor: "for", httpEquiv: "http-equiv" };
    Y = /["'&<>]/;
    Q = /^-?>|<!--|-->|--!>|<!-$/g;
    isRef$1 = (e5) => !(!e5 || true !== e5.__v_isRef);
    toDisplayString = (e5) => isString(e5) ? e5 : null == e5 ? "" : E(e5) || isObject(e5) && (e5.toString === P || !isFunction(e5.toString)) ? isRef$1(e5) ? toDisplayString(e5.value) : JSON.stringify(e5, replacer, 2) : String(e5);
    replacer = (e5, t4) => isRef$1(t4) ? replacer(e5, t4.value) : isMap(t4) ? { [`Map(${t4.size})`]: [...t4.entries()].reduce((e6, [t5, n2], r4) => (e6[stringifySymbol(t5, r4) + " =>"] = n2, e6), {}) } : isSet(t4) ? { [`Set(${t4.size})`]: [...t4.values()].map((e6) => stringifySymbol(e6)) } : isSymbol(t4) ? stringifySymbol(t4) : !isObject(t4) || E(t4) || isPlainObject(t4) ? t4 : String(t4);
    stringifySymbol = (e5, t4 = "") => {
      var n2;
      return isSymbol(e5) ? `Symbol(${null != (n2 = e5.description) ? n2 : t4})` : e5;
    };
    EffectScope = class {
      constructor(e5 = false) {
        this.detached = e5, this._active = true, this.effects = [], this.cleanups = [], this.parent = ee2, !e5 && ee2 && (this.index = (ee2.scopes || (ee2.scopes = [])).push(this) - 1);
      }
      get active() {
        return this._active;
      }
      run(e5) {
        if (this._active) {
          const t4 = ee2;
          try {
            return ee2 = this, e5();
          } finally {
            ee2 = t4;
          }
        }
      }
      on() {
        ee2 = this;
      }
      off() {
        ee2 = this.parent;
      }
      stop(e5) {
        if (this._active) {
          let t4, n2;
          for (t4 = 0, n2 = this.effects.length; t4 < n2; t4++)
            this.effects[t4].stop();
          for (t4 = 0, n2 = this.cleanups.length; t4 < n2; t4++)
            this.cleanups[t4]();
          if (this.scopes)
            for (t4 = 0, n2 = this.scopes.length; t4 < n2; t4++)
              this.scopes[t4].stop(true);
          if (!this.detached && this.parent && !e5) {
            const e6 = this.parent.scopes.pop();
            e6 && e6 !== this && (this.parent.scopes[this.index] = e6, e6.index = this.index);
          }
          this.parent = void 0, this._active = false;
        }
      }
    };
    ReactiveEffect = class {
      constructor(e5, t4, n2, r4) {
        this.fn = e5, this.trigger = t4, this.scheduler = n2, this.active = true, this.deps = [], this._dirtyLevel = 4, this._trackId = 0, this._runnings = 0, this._shouldSchedule = false, this._depsLength = 0, function(e6, t5 = ee2) {
          t5 && t5.active && t5.effects.push(e6);
        }(this, r4);
      }
      get dirty() {
        if (2 === this._dirtyLevel || 3 === this._dirtyLevel) {
          this._dirtyLevel = 1, pauseTracking();
          for (let e5 = 0; e5 < this._depsLength; e5++) {
            const t4 = this.deps[e5];
            if (t4.computed && (triggerComputed(t4.computed), this._dirtyLevel >= 4))
              break;
          }
          1 === this._dirtyLevel && (this._dirtyLevel = 0), resetTracking();
        }
        return this._dirtyLevel >= 4;
      }
      set dirty(e5) {
        this._dirtyLevel = e5 ? 4 : 0;
      }
      run() {
        if (this._dirtyLevel = 0, !this.active)
          return this.fn();
        let e5 = ne2, t4 = te3;
        try {
          return ne2 = true, te3 = this, this._runnings++, preCleanupEffect(this), this.fn();
        } finally {
          postCleanupEffect(this), this._runnings--, te3 = t4, ne2 = e5;
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
    createDep = (e5, t4) => {
      const n2 = /* @__PURE__ */ new Map();
      return n2.cleanup = e5, n2.computed = t4, n2;
    };
    ie2 = /* @__PURE__ */ new WeakMap();
    ae2 = Symbol("");
    le2 = Symbol("");
    ce2 = makeMap("__proto__,__v_isRef,__isVue");
    ue2 = new Set(Object.getOwnPropertyNames(Symbol).filter((e5) => "arguments" !== e5 && "caller" !== e5).map((e5) => Symbol[e5]).filter(isSymbol));
    pe2 = createArrayInstrumentations();
    BaseReactiveHandler = class {
      constructor(e5 = false, t4 = false) {
        this._isReadonly = e5, this._isShallow = t4;
      }
      get(e5, t4, n2) {
        const r4 = this._isReadonly, o7 = this._isShallow;
        if ("__v_isReactive" === t4)
          return !r4;
        if ("__v_isReadonly" === t4)
          return r4;
        if ("__v_isShallow" === t4)
          return o7;
        if ("__v_raw" === t4)
          return n2 === (r4 ? o7 ? Ce3 : Se : o7 ? we2 : Re2).get(e5) || Object.getPrototypeOf(e5) === Object.getPrototypeOf(n2) ? e5 : void 0;
        const s2 = E(e5);
        if (!r4) {
          if (s2 && hasOwn(pe2, t4))
            return Reflect.get(pe2, t4, n2);
          if ("hasOwnProperty" === t4)
            return hasOwnProperty;
        }
        const i3 = Reflect.get(e5, t4, n2);
        return (isSymbol(t4) ? ue2.has(t4) : ce2(t4)) ? i3 : (r4 || track(e5, 0, t4), o7 ? i3 : isRef(i3) ? s2 && isIntegerKey(t4) ? i3 : i3.value : isObject(i3) ? r4 ? readonly(i3) : reactive(i3) : i3);
      }
    };
    MutableReactiveHandler = class extends BaseReactiveHandler {
      constructor(e5 = false) {
        super(false, e5);
      }
      set(e5, t4, n2, r4) {
        let o7 = e5[t4];
        if (!this._isShallow) {
          const t5 = isReadonly(o7);
          if (isShallow(n2) || isReadonly(n2) || (o7 = toRaw(o7), n2 = toRaw(n2)), !E(e5) && isRef(o7) && !isRef(n2))
            return !t5 && (o7.value = n2, true);
        }
        const s2 = E(e5) && isIntegerKey(t4) ? Number(t4) < e5.length : hasOwn(e5, t4), i3 = Reflect.set(e5, t4, n2, r4);
        return e5 === toRaw(r4) && (s2 ? hasChanged(n2, o7) && trigger(e5, "set", t4, n2) : trigger(e5, "add", t4, n2)), i3;
      }
      deleteProperty(e5, t4) {
        const n2 = hasOwn(e5, t4);
        e5[t4];
        const r4 = Reflect.deleteProperty(e5, t4);
        return r4 && n2 && trigger(e5, "delete", t4, void 0), r4;
      }
      has(e5, t4) {
        const n2 = Reflect.has(e5, t4);
        return isSymbol(t4) && ue2.has(t4) || track(e5, 0, t4), n2;
      }
      ownKeys(e5) {
        return track(e5, 0, E(e5) ? "length" : ae2), Reflect.ownKeys(e5);
      }
    };
    ReadonlyReactiveHandler = class extends BaseReactiveHandler {
      constructor(e5 = false) {
        super(true, e5);
      }
      set(e5, t4) {
        return true;
      }
      deleteProperty(e5, t4) {
        return true;
      }
    };
    fe2 = new MutableReactiveHandler();
    de2 = new ReadonlyReactiveHandler();
    he2 = new MutableReactiveHandler(true);
    toShallow = (e5) => e5;
    getProto = (e5) => Reflect.getPrototypeOf(e5);
    [ge2, me2, ye2, ve3] = createInstrumentations();
    _e2 = { get: createInstrumentationGetter(false, false) };
    be2 = { get: createInstrumentationGetter(false, true) };
    ke2 = { get: createInstrumentationGetter(true, false) };
    Re2 = /* @__PURE__ */ new WeakMap();
    we2 = /* @__PURE__ */ new WeakMap();
    Se = /* @__PURE__ */ new WeakMap();
    Ce3 = /* @__PURE__ */ new WeakMap();
    toReactive = (e5) => isObject(e5) ? reactive(e5) : e5;
    toReadonly = (e5) => isObject(e5) ? readonly(e5) : e5;
    ComputedRefImpl = class {
      constructor(e5, t4, n2, r4) {
        this.getter = e5, this._setter = t4, this.dep = void 0, this.__v_isRef = true, this.__v_isReadonly = false, this.effect = new ReactiveEffect(() => e5(this._value), () => triggerRefValue(this, 2 === this.effect._dirtyLevel ? 2 : 3)), this.effect.computed = this, this.effect.active = this._cacheable = !r4, this.__v_isReadonly = n2;
      }
      get value() {
        const e5 = toRaw(this);
        return e5._cacheable && !e5.effect.dirty || !hasChanged(e5._value, e5._value = e5.effect.run()) || triggerRefValue(e5, 4), trackRefValue(e5), e5.effect._dirtyLevel >= 2 && triggerRefValue(e5, 2), e5._value;
      }
      set value(e5) {
        this._setter(e5);
      }
      get _dirty() {
        return this.effect.dirty;
      }
      set _dirty(e5) {
        this.effect.dirty = e5;
      }
    };
    RefImpl = class {
      constructor(e5, t4) {
        this.__v_isShallow = t4, this.dep = void 0, this.__v_isRef = true, this._rawValue = t4 ? e5 : toRaw(e5), this._value = t4 ? e5 : toReactive(e5);
      }
      get value() {
        return trackRefValue(this), this._value;
      }
      set value(e5) {
        const t4 = this.__v_isShallow || isShallow(e5) || isReadonly(e5);
        e5 = t4 ? e5 : toRaw(e5), hasChanged(e5, this._rawValue) && (this._rawValue, this._rawValue = e5, this._value = t4 ? e5 : toReactive(e5), triggerRefValue(this, 4));
      }
    };
    xe2 = { get: (e5, t4, n2) => unref(Reflect.get(e5, t4, n2)), set: (e5, t4, n2, r4) => {
      const o7 = e5[t4];
      return isRef(o7) && !isRef(n2) ? (o7.value = n2, true) : Reflect.set(e5, t4, n2, r4);
    } };
    ObjectRefImpl = class {
      constructor(e5, t4, n2) {
        this._object = e5, this._key = t4, this._defaultValue = n2, this.__v_isRef = true;
      }
      get value() {
        const e5 = this._object[this._key];
        return void 0 === e5 ? this._defaultValue : e5;
      }
      set value(e5) {
        this._object[this._key] = e5;
      }
      get dep() {
        return function(e5, t4) {
          const n2 = ie2.get(e5);
          return n2 && n2.get(t4);
        }(toRaw(this._object), this._key);
      }
    };
    GetterRefImpl = class {
      constructor(e5) {
        this._getter = e5, this.__v_isRef = true, this.__v_isReadonly = true;
      }
      get value() {
        return this._getter();
      }
    };
    Ae2 = false;
    Oe = false;
    $e = [];
    Te = 0;
    Ee = [];
    Pe2 = null;
    je = 0;
    He = Promise.resolve();
    Me = null;
    getId = (e5) => null == e5.id ? 1 / 0 : e5.id;
    comparator = (e5, t4) => {
      const n2 = getId(e5) - getId(t4);
      if (0 === n2) {
        if (e5.pre && !t4.pre)
          return -1;
        if (t4.pre && !e5.pre)
          return 1;
      }
      return n2;
    };
    Ie = null;
    Ne = null;
    isAsyncWrapper = (e5) => !!e5.type.__asyncLoader;
    isKeepAlive = (e5) => e5.type.__isKeepAlive;
    createHook = (e5) => (t4, n2 = ht) => {
      vt && "sp" !== e5 || injectHook(e5, (...e6) => t4(...e6), n2);
    };
    Le = createHook("bm");
    Ve = createHook("m");
    Fe = createHook("bu");
    De = createHook("u");
    Ue = createHook("bum");
    ze = createHook("um");
    Be = createHook("sp");
    We = createHook("rtg");
    qe = createHook("rtc");
    Je = "components";
    Ge = Symbol.for("v-ndc");
    getPublicInstance = (e5) => e5 ? isStatefulComponent(e5) ? getComponentPublicInstance(e5) : getPublicInstance(e5.parent) : null;
    Ke = $(/* @__PURE__ */ Object.create(null), { $: (e5) => e5, $el: (e5) => e5.vnode.el, $data: (e5) => e5.data, $props: (e5) => e5.props, $attrs: (e5) => e5.attrs, $slots: (e5) => e5.slots, $refs: (e5) => e5.refs, $parent: (e5) => getPublicInstance(e5.parent), $root: (e5) => getPublicInstance(e5.root), $emit: (e5) => e5.emit, $options: (e5) => __VUE_OPTIONS_API__ ? resolveMergedOptions(e5) : e5.type, $forceUpdate: (e5) => e5.f || (e5.f = () => {
      e5.effect.dirty = true, queueJob(e5.update);
    }), $nextTick: (e5) => e5.n || (e5.n = nextTick.bind(e5.proxy)), $watch: (e5) => __VUE_OPTIONS_API__ ? instanceWatch.bind(e5) : NOOP });
    hasSetupBinding = (e5, t4) => e5 !== A2 && !e5.__isScriptSetup && hasOwn(e5, t4);
    Ze = { get({ _: e5 }, t4) {
      if ("__v_skip" === t4)
        return true;
      const { ctx: n2, setupState: r4, data: o7, props: s2, accessCache: i3, type: a3, appContext: l2 } = e5;
      let c2;
      if ("$" !== t4[0]) {
        const a4 = i3[t4];
        if (void 0 !== a4)
          switch (a4) {
            case 1:
              return r4[t4];
            case 2:
              return o7[t4];
            case 4:
              return n2[t4];
            case 3:
              return s2[t4];
          }
        else {
          if (hasSetupBinding(r4, t4))
            return i3[t4] = 1, r4[t4];
          if (o7 !== A2 && hasOwn(o7, t4))
            return i3[t4] = 2, o7[t4];
          if ((c2 = e5.propsOptions[0]) && hasOwn(c2, t4))
            return i3[t4] = 3, s2[t4];
          if (n2 !== A2 && hasOwn(n2, t4))
            return i3[t4] = 4, n2[t4];
          __VUE_OPTIONS_API__ && !Xe || (i3[t4] = 0);
        }
      }
      const u3 = Ke[t4];
      let p2, f2;
      return u3 ? ("$attrs" === t4 && track(e5.attrs, 0, ""), u3(e5)) : (p2 = a3.__cssModules) && (p2 = p2[t4]) ? p2 : n2 !== A2 && hasOwn(n2, t4) ? (i3[t4] = 4, n2[t4]) : (f2 = l2.config.globalProperties, hasOwn(f2, t4) ? f2[t4] : void 0);
    }, set({ _: e5 }, t4, n2) {
      const { data: r4, setupState: o7, ctx: s2 } = e5;
      return hasSetupBinding(o7, t4) ? (o7[t4] = n2, true) : r4 !== A2 && hasOwn(r4, t4) ? (r4[t4] = n2, true) : !hasOwn(e5.props, t4) && (("$" !== t4[0] || !(t4.slice(1) in e5)) && (s2[t4] = n2, true));
    }, has({ _: { data: e5, setupState: t4, accessCache: n2, ctx: r4, appContext: o7, propsOptions: s2 } }, i3) {
      let a3;
      return !!n2[i3] || e5 !== A2 && hasOwn(e5, i3) || hasSetupBinding(t4, i3) || (a3 = s2[0]) && hasOwn(a3, i3) || hasOwn(r4, i3) || hasOwn(Ke, i3) || hasOwn(o7.config.globalProperties, i3);
    }, defineProperty(e5, t4, n2) {
      return null != n2.get ? e5._.accessCache[t4] = 0 : hasOwn(n2, "value") && this.set(e5, t4, n2.value, null), Reflect.defineProperty(e5, t4, n2);
    } };
    Xe = true;
    Ye = { data: mergeDataFn, props: mergeEmitsOrPropsOptions, emits: mergeEmitsOrPropsOptions, methods: mergeObjectOptions, computed: mergeObjectOptions, beforeCreate: mergeAsArray, created: mergeAsArray, beforeMount: mergeAsArray, mounted: mergeAsArray, beforeUpdate: mergeAsArray, updated: mergeAsArray, beforeDestroy: mergeAsArray, beforeUnmount: mergeAsArray, destroyed: mergeAsArray, unmounted: mergeAsArray, activated: mergeAsArray, deactivated: mergeAsArray, errorCaptured: mergeAsArray, serverPrefetch: mergeAsArray, components: mergeObjectOptions, directives: mergeObjectOptions, watch: function(e5, t4) {
      if (!e5)
        return t4;
      if (!t4)
        return e5;
      const n2 = $(/* @__PURE__ */ Object.create(null), e5);
      for (const r4 in t4)
        n2[r4] = mergeAsArray(e5[r4], t4[r4]);
      return n2;
    }, provide: mergeDataFn, inject: function(e5, t4) {
      return mergeObjectOptions(normalizeInject(e5), normalizeInject(t4));
    } };
    Qe = 0;
    et = null;
    tt = {};
    createInternalObject = () => Object.create(tt);
    isInternalObject = (e5) => Object.getPrototypeOf(e5) === tt;
    nt = /* @__PURE__ */ new WeakMap();
    isInternalKey = (e5) => "_" === e5[0] || "$stable" === e5;
    normalizeSlotValue = (e5) => E(e5) ? e5.map(normalizeVNode$1) : [normalizeVNode$1(e5)];
    normalizeSlot = (e5, t4, n2) => {
      if (t4._n)
        return t4;
      const r4 = withCtx((...e6) => normalizeSlotValue(t4(...e6)), n2);
      return r4._c = false, r4;
    };
    normalizeObjectSlots = (e5, t4, n2) => {
      const r4 = e5._ctx;
      for (const n3 in e5) {
        if (isInternalKey(n3))
          continue;
        const o7 = e5[n3];
        if (isFunction(o7))
          t4[n3] = normalizeSlot(0, o7, r4);
        else if (null != o7) {
          const e6 = normalizeSlotValue(o7);
          t4[n3] = () => e6;
        }
      }
    };
    normalizeVNodeSlots = (e5, t4) => {
      const n2 = normalizeSlotValue(t4);
      e5.slots.default = () => n2;
    };
    assignSlots = (e5, t4, n2) => {
      for (const r4 in t4)
        (n2 || "_" !== r4) && (e5[r4] = t4[r4]);
    };
    initSlots = (e5, t4, n2) => {
      const r4 = e5.slots = createInternalObject();
      if (32 & e5.vnode.shapeFlag) {
        const e6 = t4._;
        e6 ? (assignSlots(r4, t4, n2), n2 && def(r4, "_", e6, true)) : normalizeObjectSlots(t4, r4);
      } else
        t4 && normalizeVNodeSlots(e5, t4);
    };
    updateSlots = (e5, t4, n2) => {
      const { vnode: r4, slots: o7 } = e5;
      let s2 = true, i3 = A2;
      if (32 & r4.shapeFlag) {
        const e6 = t4._;
        e6 ? n2 && 1 === e6 ? s2 = false : assignSlots(o7, t4, n2) : (s2 = !t4.$stable, normalizeObjectSlots(t4, o7)), i3 = t4;
      } else
        t4 && (normalizeVNodeSlots(e5, t4), i3 = { default: 1 });
      if (s2)
        for (const e6 in o7)
          isInternalKey(e6) || null != i3[e6] || delete o7[e6];
    };
    rt = Symbol("_vte");
    queuePostRenderEffect = function(e5, t4) {
      t4 && t4.pendingBranch ? E(e5) ? t4.effects.push(...e5) : t4.effects.push(e5) : (E(n2 = e5) ? Ee.push(...n2) : Pe2 && Pe2.includes(n2, n2.allowRecurse ? je + 1 : je) || Ee.push(n2), queueFlush());
      var n2;
    };
    ot = Symbol.for("v-scx");
    useSSRContext = () => inject(ot);
    st = {};
    getModelModifiers = (e5, t4) => "modelValue" === t4 || "model-value" === t4 ? e5.modelModifiers : e5[`${t4}Modifiers`] || e5[`${M(t4)}Modifiers`] || e5[`${N(t4)}Modifiers`];
    getFunctionalFallthrough = (e5) => {
      let t4;
      for (const n2 in e5)
        ("class" === n2 || "style" === n2 || isOn(n2)) && ((t4 || (t4 = {}))[n2] = e5[n2]);
      return t4;
    };
    filterModelListeners = (e5, t4) => {
      const n2 = {};
      for (const r4 in e5)
        isModelListener(r4) && r4.slice(9) in t4 || (n2[r4] = e5[r4]);
      return n2;
    };
    it = Symbol.for("v-fgt");
    at = Symbol.for("v-txt");
    lt = Symbol.for("v-cmt");
    ct = Symbol.for("v-stc");
    ut = null;
    pt = 1;
    normalizeKey = ({ key: e5 }) => null != e5 ? e5 : null;
    normalizeRef = ({ ref: e5, ref_key: t4, ref_for: n2 }) => ("number" == typeof e5 && (e5 = "" + e5), null != e5 ? isString(e5) || isRef(e5) || isFunction(e5) ? { i: Ie, r: e5, k: t4, f: !!n2 } : e5 : null);
    createVNode = function(e5, t4 = null, n2 = null, r4 = 0, o7 = null, s2 = false) {
      e5 && e5 !== Ge || (e5 = lt);
      if (isVNode(e5)) {
        const r5 = cloneVNode(e5, t4, true);
        return n2 && normalizeChildren(r5, n2), pt > 0 && !s2 && ut && (6 & r5.shapeFlag ? ut[ut.indexOf(e5)] = r5 : ut.push(r5)), r5.patchFlag = -2, r5;
      }
      i3 = e5, isFunction(i3) && "__vccOpts" in i3 && (e5 = e5.__vccOpts);
      var i3;
      if (t4) {
        t4 = function(e7) {
          return e7 ? isProxy(e7) || isInternalObject(e7) ? $({}, e7) : e7 : null;
        }(t4);
        let { class: e6, style: n3 } = t4;
        e6 && !isString(e6) && (t4.class = normalizeClass(e6)), isObject(n3) && (isProxy(n3) && !E(n3) && (n3 = $({}, n3)), t4.style = normalizeStyle(n3));
      }
      const a3 = isString(e5) ? 1 : ((e6) => e6.__isSuspense)(e5) ? 128 : ((e6) => e6.__isTeleport)(e5) ? 64 : isObject(e5) ? 4 : isFunction(e5) ? 2 : 0;
      return function(e6, t5 = null, n3 = null, r5 = 0, o8 = null, s3 = e6 === it ? 0 : 1, i4 = false, a4 = false) {
        const l2 = { __v_isVNode: true, __v_skip: true, type: e6, props: t5, key: t5 && normalizeKey(t5), ref: t5 && normalizeRef(t5), scopeId: Ne, slotScopeIds: null, children: n3, component: null, suspense: null, ssContent: null, ssFallback: null, dirs: null, transition: null, el: null, anchor: null, target: null, targetStart: null, targetAnchor: null, staticCount: 0, shapeFlag: s3, patchFlag: r5, dynamicProps: o8, dynamicChildren: null, appContext: null, ctx: Ie };
        return a4 ? (normalizeChildren(l2, n3), 128 & s3 && e6.normalize(l2)) : n3 && (l2.shapeFlag |= isString(n3) ? 8 : 16), pt > 0 && !i4 && ut && (l2.patchFlag > 0 || 6 & s3) && 32 !== l2.patchFlag && ut.push(l2), l2;
      }(e5, t4, n2, r4, o7, a3, s2, true);
    };
    ft = createAppContext();
    dt = 0;
    ht = null;
    getCurrentInstance = () => ht || Ie;
    {
      const e5 = getGlobalThis(), registerGlobalSetter = (t4, n2) => {
        let r4;
        return (r4 = e5[t4]) || (r4 = e5[t4] = []), r4.push(n2), (e6) => {
          r4.length > 1 ? r4.forEach((t5) => t5(e6)) : r4[0](e6);
        };
      };
      gt = registerGlobalSetter("__VUE_INSTANCE_SETTERS__", (e6) => ht = e6), mt = registerGlobalSetter("__VUE_SSR_SETTERS__", (e6) => vt = e6);
    }
    setCurrentInstance = (e5) => {
      const t4 = ht;
      return gt(e5), e5.scope.on(), () => {
        e5.scope.off(), gt(t4);
      };
    };
    unsetCurrentInstance = () => {
      ht && ht.scope.off(), gt(null);
    };
    vt = false;
    _t = { get: (e5, t4) => (track(e5, 0, ""), e5[t4]) };
    computed = (e5, t4) => {
      const n2 = function(e6, t5, n3 = false) {
        let r4, o7;
        const s2 = isFunction(e6);
        return s2 ? (r4 = e6, o7 = NOOP) : (r4 = e6.get, o7 = e6.set), new ComputedRefImpl(r4, o7, s2 || !o7, n3);
      }(e5, 0, vt);
      return n2;
    };
    bt = "3.4.38";
    kt = { createComponentInstance: createComponentInstance$1, setupComponent: setupComponent$1, renderComponentRoot: renderComponentRoot$1, setCurrentRenderingInstance: setCurrentRenderingInstance$1, isVNode, normalizeVNode: normalizeVNode$1, getComponentPublicInstance, ensureValidVNode: function ensureValidVNode(e5) {
      return e5.some((e6) => !isVNode(e6) || e6.type !== lt && !(e6.type === it && !ensureValidVNode(e6.children))) ? e5 : null;
    } };
    Rt = kt;
    wt = "undefined" != typeof document ? document : null;
    St = wt && wt.createElement("template");
    Ct = { insert: (e5, t4, n2) => {
      t4.insertBefore(e5, n2 || null);
    }, remove: (e5) => {
      const t4 = e5.parentNode;
      t4 && t4.removeChild(e5);
    }, createElement: (e5, t4, n2, r4) => {
      const o7 = "svg" === t4 ? wt.createElementNS("http://www.w3.org/2000/svg", e5) : "mathml" === t4 ? wt.createElementNS("http://www.w3.org/1998/Math/MathML", e5) : n2 ? wt.createElement(e5, { is: n2 }) : wt.createElement(e5);
      return "select" === e5 && r4 && null != r4.multiple && o7.setAttribute("multiple", r4.multiple), o7;
    }, createText: (e5) => wt.createTextNode(e5), createComment: (e5) => wt.createComment(e5), setText: (e5, t4) => {
      e5.nodeValue = t4;
    }, setElementText: (e5, t4) => {
      e5.textContent = t4;
    }, parentNode: (e5) => e5.parentNode, nextSibling: (e5) => e5.nextSibling, querySelector: (e5) => wt.querySelector(e5), setScopeId(e5, t4) {
      e5.setAttribute(t4, "");
    }, insertStaticContent(e5, t4, n2, r4, o7, s2) {
      const i3 = n2 ? n2.previousSibling : t4.lastChild;
      if (o7 && (o7 === s2 || o7.nextSibling))
        for (; t4.insertBefore(o7.cloneNode(true), n2), o7 !== s2 && (o7 = o7.nextSibling); )
          ;
      else {
        St.innerHTML = "svg" === r4 ? `<svg>${e5}</svg>` : "mathml" === r4 ? `<math>${e5}</math>` : e5;
        const o8 = St.content;
        if ("svg" === r4 || "mathml" === r4) {
          const e6 = o8.firstChild;
          for (; e6.firstChild; )
            o8.appendChild(e6.firstChild);
          o8.removeChild(e6);
        }
        t4.insertBefore(o8, n2);
      }
      return [i3 ? i3.nextSibling : t4.firstChild, n2 ? n2.previousSibling : t4.lastChild];
    } };
    xt = Symbol("_vtc");
    At = Symbol("_vod");
    Ot = Symbol("_vsh");
    $t = Symbol("");
    Tt = /(^|;)\s*display\s*:/;
    Et = /\s*!important$/;
    Pt = ["Webkit", "Moz", "ms"];
    jt = {};
    Ht = "http://www.w3.org/1999/xlink";
    Mt = Symbol("_vei");
    It = /(?:Once|Passive|Capture)$/;
    Nt = 0;
    Lt = Promise.resolve();
    getNow = () => Nt || (Lt.then(() => Nt = 0), Nt = Date.now());
    isNativeOn = (e5) => 111 === e5.charCodeAt(0) && 110 === e5.charCodeAt(1) && e5.charCodeAt(2) > 96 && e5.charCodeAt(2) < 123;
    Vt = $({ patchProp: (e5, t4, n2, r4, o7, s2) => {
      const i3 = "svg" === o7;
      "class" === t4 ? function(e6, t5, n3) {
        const r5 = e6[xt];
        r5 && (t5 = (t5 ? [t5, ...r5] : [...r5]).join(" ")), null == t5 ? e6.removeAttribute("class") : n3 ? e6.setAttribute("class", t5) : e6.className = t5;
      }(e5, r4, i3) : "style" === t4 ? function(e6, t5, n3) {
        const r5 = e6.style, o8 = isString(n3);
        let s3 = false;
        if (n3 && !o8) {
          if (t5)
            if (isString(t5))
              for (const e7 of t5.split(";")) {
                const t6 = e7.slice(0, e7.indexOf(":")).trim();
                null == n3[t6] && setStyle(r5, t6, "");
              }
            else
              for (const e7 in t5)
                null == n3[e7] && setStyle(r5, e7, "");
          for (const e7 in n3)
            "display" === e7 && (s3 = true), setStyle(r5, e7, n3[e7]);
        } else if (o8) {
          if (t5 !== n3) {
            const e7 = r5[$t];
            e7 && (n3 += ";" + e7), r5.cssText = n3, s3 = Tt.test(n3);
          }
        } else
          t5 && e6.removeAttribute("style");
        At in e6 && (e6[At] = s3 ? r5.display : "", e6[Ot] && (r5.display = "none"));
      }(e5, n2, r4) : isOn(t4) ? isModelListener(t4) || patchEvent(e5, t4, 0, r4, s2) : ("." === t4[0] ? (t4 = t4.slice(1), 1) : "^" === t4[0] ? (t4 = t4.slice(1), 0) : function(e6, t5, n3, r5) {
        if (r5)
          return "innerHTML" === t5 || "textContent" === t5 || !!(t5 in e6 && isNativeOn(t5) && isFunction(n3));
        if ("spellcheck" === t5 || "draggable" === t5 || "translate" === t5)
          return false;
        if ("form" === t5)
          return false;
        if ("list" === t5 && "INPUT" === e6.tagName)
          return false;
        if ("type" === t5 && "TEXTAREA" === e6.tagName)
          return false;
        if ("width" === t5 || "height" === t5) {
          const t6 = e6.tagName;
          if ("IMG" === t6 || "VIDEO" === t6 || "CANVAS" === t6 || "SOURCE" === t6)
            return false;
        }
        if (isNativeOn(t5) && isString(n3))
          return false;
        return t5 in e6;
      }(e5, t4, r4, i3)) ? (!function(e6, t5, n3) {
        if ("innerHTML" === t5 || "textContent" === t5) {
          if (null == n3)
            return;
          return void (e6[t5] = n3);
        }
        const r5 = e6.tagName;
        if ("value" === t5 && "PROGRESS" !== r5 && !r5.includes("-")) {
          const o9 = "OPTION" === r5 ? e6.getAttribute("value") || "" : e6.value, s3 = null == n3 ? "" : String(n3);
          return o9 === s3 && "_value" in e6 || (e6.value = s3), null == n3 && e6.removeAttribute(t5), void (e6._value = n3);
        }
        let o8 = false;
        if ("" === n3 || null == n3) {
          const r6 = typeof e6[t5];
          "boolean" === r6 ? n3 = includeBooleanAttr(n3) : null == n3 && "string" === r6 ? (n3 = "", o8 = true) : "number" === r6 && (n3 = 0, o8 = true);
        }
        try {
          e6[t5] = n3;
        } catch (e7) {
        }
        o8 && e6.removeAttribute(t5);
      }(e5, t4, r4), e5.tagName.includes("-") || "value" !== t4 && "checked" !== t4 && "selected" !== t4 || patchAttr(e5, t4, r4, i3, 0, "value" !== t4)) : ("true-value" === t4 ? e5._trueValue = r4 : "false-value" === t4 && (e5._falseValue = r4), patchAttr(e5, t4, r4, i3));
    } }, Ct);
    createApp = (...e5) => {
      const t4 = (Ft || (Ft = createRenderer(Vt))).createApp(...e5), { mount: n2 } = t4;
      return t4.mount = (e6) => {
        const r4 = function(e7) {
          if (isString(e7)) {
            return document.querySelector(e7);
          }
          return e7;
        }(e6);
        if (!r4)
          return;
        const o7 = t4._component;
        isFunction(o7) || o7.render || o7.template || (o7.template = r4.innerHTML), r4.innerHTML = "";
        const s2 = n2(r4, false, function(e7) {
          if (e7 instanceof SVGElement)
            return "svg";
          if ("function" == typeof MathMLElement && e7 instanceof MathMLElement)
            return "mathml";
        }(r4));
        return r4 instanceof Element && (r4.removeAttribute("v-cloak"), r4.setAttribute("data-v-app", "")), s2;
      }, t4;
    };
    Dt = makeMap(",key,ref,innerHTML,textContent,ref_key,ref_for");
    {
      const e5 = getGlobalThis(), registerGlobalSetter = (t4, n2) => {
        let r4;
        return (r4 = e5[t4]) || (r4 = e5[t4] = []), r4.push(n2), (e6) => {
          r4.length > 1 ? r4.forEach((t5) => t5(e6)) : r4[0](e6);
        };
      };
      registerGlobalSetter("__VUE_INSTANCE_SETTERS__", (e6) => e6), registerGlobalSetter("__VUE_SSR_SETTERS__", (e6) => e6);
    }
    ({ createComponentInstance: Ut, setCurrentRenderingInstance: zt, setupComponent: Bt, renderComponentRoot: Wt, normalizeVNode: qt } = Rt);
    ({ isVNode: Jt } = Rt);
    Gt = ["meta", "link", "base"];
    Kt = ["title", "titleTemplate", "script", "style", "noscript"];
    Zt = ["base", "meta", "link", "style", "script", "noscript"];
    Xt = ["title", "titleTemplate", "templateParams", "base", "htmlAttrs", "bodyAttrs", "meta", "link", "style", "script", "noscript"];
    Yt = ["base", "title", "titleTemplate", "bodyAttrs", "htmlAttrs", "templateParams"];
    Qt = ["tagPosition", "tagPriority", "tagDuplicateStrategy", "children", "innerHTML", "textContent", "processTemplateParams"];
    en = 10;
    tn = { base: -10, title: 10 };
    nn = { critical: -80, high: -10, low: 20 };
    rn = [{ prefix: "before:", offset: -1 }, { prefix: "after:", offset: 1 }];
    on = ["onload", "onerror", "onabort", "onprogress", "onloadstart"];
    sn = "%separator";
    an = ["templateParams", "htmlAttrs", "bodyAttrs"];
    ln = { hooks: { "tag:normalise": function({ tag: e5 }) {
      ["hid", "vmid", "key"].forEach((t5) => {
        e5.props[t5] && (e5.key = e5.props[t5], delete e5.props[t5]);
      });
      const t4 = function(e6) {
        const { props: t5, tag: n3 } = e6;
        if (Yt.includes(n3))
          return n3;
        if ("link" === n3 && "canonical" === t5.rel)
          return "canonical";
        if (t5.charset)
          return "charset";
        const r4 = ["id"];
        "meta" === n3 && r4.push("name", "property", "http-equiv");
        for (const e7 of r4)
          if (void 0 !== t5[e7])
            return `${n3}:${e7}:${String(t5[e7])}`;
        return false;
      }(e5), n2 = t4 || !!e5.key && `${e5.tag}:${e5.key}`;
      n2 && (e5._d = n2);
    }, "tags:resolve": function(e5) {
      const t4 = {};
      e5.tags.forEach((e6) => {
        const n3 = (e6.key ? `${e6.tag}:${e6.key}` : e6._d) || e6._p, r4 = t4[n3];
        if (r4) {
          let o8 = e6?.tagDuplicateStrategy;
          if (!o8 && an.includes(e6.tag) && (o8 = "merge"), "merge" === o8) {
            const o9 = r4.props;
            return ["class", "style"].forEach((t5) => {
              o9[t5] && (e6.props[t5] ? ("style" !== t5 || o9[t5].endsWith(";") || (o9[t5] += ";"), e6.props[t5] = `${o9[t5]} ${e6.props[t5]}`) : e6.props[t5] = o9[t5]);
            }), void (t4[n3].props = { ...o9, ...e6.props });
          }
          if (e6._e === r4._e)
            return r4._duped = r4._duped || [], e6._d = `${r4._d}:${r4._duped.length + 1}`, void r4._duped.push(e6);
          if (tagWeight(e6) > tagWeight(r4))
            return;
        }
        const o7 = Object.keys(e6.props).length + (e6.innerHTML ? 1 : 0) + (e6.textContent ? 1 : 0);
        Zt.includes(e6.tag) && 0 === o7 ? delete t4[n3] : t4[n3] = e6;
      });
      const n2 = [];
      Object.values(t4).forEach((e6) => {
        const t5 = e6._duped;
        delete e6._duped, n2.push(e6), t5 && n2.push(...t5);
      }), e5.tags = n2, e5.tags = e5.tags.filter((e6) => !("meta" === e6.tag && (e6.props.name || e6.props.property) && !e6.props.content));
    } } };
    cn = { mode: "server", hooks: { "tags:resolve": function(e5) {
      const t4 = {};
      e5.tags.filter((e6) => ["titleTemplate", "templateParams", "title"].includes(e6.tag) && "server" === e6._m).forEach((e6) => {
        t4[e6.tag] = e6.tag.startsWith("title") ? e6.textContent : e6.props;
      }), Object.keys(t4).length && e5.tags.push({ tag: "script", innerHTML: JSON.stringify(t4), props: { id: "unhead:payload", type: "application/json" } });
    } } };
    un = ["script", "link", "bodyAttrs"];
    EventHandlersPlugin = (e5) => ({ hooks: { "tags:resolve": function(t4) {
      for (const n2 of t4.tags.filter((e6) => un.includes(e6.tag)))
        Object.entries(n2.props).forEach(([t5, r4]) => {
          t5.startsWith("on") && "function" == typeof r4 && (e5.ssr && on.includes(t5) ? n2.props[t5] = `this.dataset.${t5}fired = true` : delete n2.props[t5], n2._eventHandlers = n2._eventHandlers || {}, n2._eventHandlers[t5] = r4);
        }), e5.ssr && n2._eventHandlers && (n2.props.src || n2.props.href) && (n2.key = n2.key || hashCode(n2.props.src || n2.props.href));
    }, "dom:renderTag": function({ $el: e6, tag: t4 }) {
      for (const n2 of Object.keys(e6?.dataset || {}).filter((e7) => on.some((t5) => `${t5}fired` === e7))) {
        const r4 = n2.replace("fired", "");
        t4._eventHandlers?.[r4]?.call(e6, new Event(r4.replace("on", "")));
      }
    } } });
    pn = ["link", "style", "script", "noscript"];
    fn = { hooks: { "tag:normalise": ({ tag: e5 }) => {
      e5.key && pn.includes(e5.tag) && (e5.props["data-hid"] = e5._h = hashCode(e5.key));
    } } };
    dn = { hooks: { "tags:resolve": (e5) => {
      const tagPositionForKey = (t4) => e5.tags.find((e6) => e6._d === t4)?._p;
      for (const { prefix: t4, offset: n2 } of rn)
        for (const r4 of e5.tags.filter((e6) => "string" == typeof e6.tagPriority && e6.tagPriority.startsWith(t4))) {
          const e6 = tagPositionForKey(r4.tagPriority.replace(t4, ""));
          void 0 !== e6 && (r4._p = e6 + n2);
        }
      e5.tags.sort((e6, t4) => e6._p - t4._p).sort((e6, t4) => tagWeight(e6) - tagWeight(t4));
    } } };
    hn = { meta: "content", link: "href", htmlAttrs: "lang" };
    TemplateParamsPlugin = (e5) => ({ hooks: { "tags:resolve": (t4) => {
      const { tags: n2 } = t4, r4 = n2.find((e6) => "title" === e6.tag)?.textContent, o7 = n2.findIndex((e6) => "templateParams" === e6.tag), s2 = -1 !== o7 ? n2[o7].props : {}, i3 = s2.separator || "|";
      delete s2.separator, s2.pageTitle = processTemplateParams(s2.pageTitle || r4 || "", s2, i3);
      for (const e6 of n2.filter((e7) => false !== e7.processTemplateParams)) {
        const t5 = hn[e6.tag];
        t5 && "string" == typeof e6.props[t5] ? e6.props[t5] = processTemplateParams(e6.props[t5], s2, i3) : (true === e6.processTemplateParams || ["titleTemplate", "title"].includes(e6.tag)) && ["innerHTML", "textContent"].forEach((t6) => {
          "string" == typeof e6[t6] && (e6[t6] = processTemplateParams(e6[t6], s2, i3));
        });
      }
      e5._templateParams = s2, e5._separator = i3, t4.tags = n2.filter((e6) => "templateParams" !== e6.tag);
    } } });
    gn = { hooks: { "tags:resolve": (e5) => {
      const { tags: t4 } = e5;
      let n2 = t4.findIndex((e6) => "titleTemplate" === e6.tag);
      const r4 = t4.findIndex((e6) => "title" === e6.tag);
      if (-1 !== r4 && -1 !== n2) {
        const e6 = resolveTitleTemplate(t4[n2].textContent, t4[r4].textContent);
        null !== e6 ? t4[r4].textContent = e6 || t4[r4].textContent : delete t4[r4];
      } else if (-1 !== n2) {
        const e6 = resolveTitleTemplate(t4[n2].textContent);
        null !== e6 && (t4[n2].textContent = e6, t4[n2].tag = "title", n2 = -1);
      }
      -1 !== n2 && delete t4[n2], e5.tags = t4.filter(Boolean);
    } } };
    mn = { hooks: { "tags:afterResolve": function(e5) {
      for (const t4 of e5.tags)
        "string" == typeof t4.innerHTML && (t4.innerHTML && ["application/ld+json", "application/json"].includes(t4.props.type) ? t4.innerHTML = t4.innerHTML.replace(/</g, "\\u003C") : t4.innerHTML = t4.innerHTML.replace(new RegExp(`</${t4.tag}`, "g"), `<\\/${t4.tag}`));
    } } };
    vn = /@import/;
    _n = bt.startsWith("3");
    bn = { hooks: { "entries:resolve": function(e5) {
      for (const t4 of e5.entries)
        t4.resolvedInput = resolveUnrefHeadInput2(t4.input);
    } } };
    kn = "usehead";
    Rn = [(wn = { track: true }, { hooks: { "tags:beforeResolve": function({ tags: e5 }) {
      for (const t4 of e5) {
        if (t4.tagPosition && "head" !== t4.tagPosition)
          continue;
        if (t4.tagPriority = t4.tagPriority || tagWeight(t4), 100 !== t4.tagPriority)
          continue;
        const isTruthy = (e7) => "" === e7 || true === e7, e6 = "script" === t4.tag, n2 = "link" === t4.tag;
        e6 && isTruthy(t4.props.async) ? t4.tagPriority = 30 : "style" === t4.tag && t4.innerHTML && vn.test(t4.innerHTML) ? t4.tagPriority = 40 : !e6 || !t4.props.src || isTruthy(t4.props.defer) || isTruthy(t4.props.async) || "module" === t4.props.type || t4.props.type?.endsWith("json") ? n2 && "stylesheet" === t4.props.rel || "style" === t4.tag ? t4.tagPriority = 60 : n2 && ["preload", "modulepreload"].includes(t4.props.rel) ? t4.tagPriority = 70 : e6 && isTruthy(t4.props.defer) && t4.props.src && !isTruthy(t4.props.async) ? t4.tagPriority = 80 : n2 && ["prefetch", "dns-prefetch", "prerender"].includes(t4.props.rel) && (t4.tagPriority = 90) : t4.tagPriority = 50;
      }
      wn?.track && e5.push({ tag: "htmlAttrs", props: { "data-capo": "" } });
    } } })];
    Sn = { meta: [{ name: "viewport", content: "width=device-width, initial-scale=1" }, { charset: "utf-8" }], link: [], style: [], script: [], noscript: [] };
    Cn = { id: "teleports" };
    globalThis.__buildAssetsURL = buildAssetsURL, globalThis.__publicAssetsURL = publicAssetsURL;
    getClientManifest = () => Promise.resolve().then(() => (init_client_manifest(), client_manifest_exports)).then((e5) => e5.default || e5).then((e5) => "function" == typeof e5 ? e5() : e5);
    xn = lazyCachedFunction(() => Promise.resolve().then(() => (init_styles(), styles_exports)).then((e5) => e5.default || e5));
    An = lazyCachedFunction(async () => {
      const e5 = await getClientManifest();
      if (!e5)
        throw new Error("client.manifest is not available");
      const t4 = await Promise.resolve().then(() => (init_server(), server_exports)).then((e6) => e6.default || e6);
      if (!t4)
        throw new Error("Server bundle is not available");
      return createRenderer$1(t4, { manifest: e5, renderToString: async function(e6, t5) {
        const n2 = await renderToString(e6, t5);
        return Tn + n2 + En;
      }, buildAssetsURL });
    });
    On = lazyCachedFunction(async () => {
      const t4 = await getClientManifest(), n2 = await Promise.resolve().then(() => (init_virtual_spa_template(), virtual_spa_template_exports)).then((e5) => e5.template).catch(() => "").then((e5) => Tn + e5 + En), r4 = createRenderer$1(() => () => {
      }, { manifest: t4, renderToString: () => n2, buildAssetsURL }), o7 = await r4.renderToString({});
      return { rendererContext: r4.rendererContext, renderToString: (t5) => {
        const n3 = useRuntimeConfig2(t5.event);
        return t5.modules = t5.modules || /* @__PURE__ */ new Set(), t5.payload = { serverRendered: false }, t5.config = { public: n3.public, app: n3.app }, Promise.resolve(o7);
      } };
    });
    $n = `<div${propsToString(Cn)}>`;
    Tn = `<div${propsToString({ id: "__nuxt" })}>`;
    En = "</div>";
    Pn = /\/_payload.json(\?.*)?$/;
    jn = function(l2) {
      const c2 = useRuntimeConfig2();
      return ve2(async (e5) => {
        if (e5.path === `${c2.app.baseURL}favicon.ico`)
          return setResponseHeader(e5, "Content-Type", "image/x-icon"), send(e5, "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");
        const t4 = await l2(e5);
        if (!t4) {
          const t5 = getResponseStatus(e5);
          return setResponseStatus(e5, 200 === t5 ? 500 : t5), send(e5, "No response returned from render handler: " + e5.path);
        }
        const u3 = useNitroApp();
        return await u3.hooks.callHook("render:response", t4, { event: e5 }), t4.headers && setResponseHeaders(e5, t4.headers), (t4.statusCode || t4.statusMessage) && setResponseStatus(e5, t4.statusCode, t4.statusMessage), t4.body;
      });
    }(async (t4) => {
      const n2 = useNitroApp(), r4 = t4.path.startsWith("/__nuxt_error") ? getQuery(t4) : null;
      if (r4 && r4.statusCode && (r4.statusCode = Number.parseInt(r4.statusCode)), r4 && !("__unenv__" in t4.node.req))
        throw createError({ statusCode: 404, statusMessage: "Page Not Found: /__nuxt_error" });
      const s2 = false, i3 = void 0;
      let l2 = r4?.url || t4.path;
      const c2 = Pn.test(l2) && true;
      c2 && (l2 = l2.substring(0, l2.lastIndexOf("/")) || "/", t4._path = l2, t4.node.req.url = l2);
      const u3 = getRouteRules(t4), m3 = createServerHead({ plugins: Rn }), y3 = { mode: "server" };
      m3.push(Sn, y3);
      const v3 = { url: l2, event: t4, runtimeConfig: useRuntimeConfig2(t4), noSSR: t4.context.nuxt?.noSSR || false === u3.ssr && true || false, head: m3, error: !!r4, nuxt: void 0, payload: r4 ? { error: r4 } : {}, _payloadReducers: {}, modules: /* @__PURE__ */ new Set(), islandContext: i3 }, _3 = v3.noSSR ? await On() : await An();
      for (const e5 of await getClientManifest().then((e6) => Object.values(e6).filter((e7) => e7._globalCSS).map((e7) => e7.src)))
        v3.modules.add(e5);
      const b3 = await _3.renderToString(v3).catch(async (e5) => {
        if (v3._renderResponse && "skipping render" === e5.message)
          return {};
        const t5 = !r4 && v3.payload?.error || e5;
        throw await v3.nuxt?.hooks.callHook("app:error", t5), t5;
      });
      if (await v3.nuxt?.hooks.callHook("app:rendered", { ssrContext: v3, renderResult: b3 }), v3._renderResponse)
        return v3._renderResponse;
      if (v3.payload?.error && !r4)
        throw v3.payload.error;
      if (c2) {
        const e5 = function(e6) {
          return { body: stringify(splitPayload(e6).payload, e6._payloadReducers), statusCode: getResponseStatus(e6.event), statusMessage: getResponseStatusText(e6.event), headers: { "content-type": "application/json;charset=utf-8", "x-powered-by": "Nuxt" } };
        }(v3);
        return e5;
      }
      const k3 = await async function(e5) {
        const t5 = await xn(), n3 = /* @__PURE__ */ new Set();
        for (const r5 of e5)
          if (r5 in t5)
            for (const e6 of await t5[r5]())
              n3.add(e6);
        return Array.from(n3).map((e6) => ({ innerHTML: e6 }));
      }(v3.modules ?? []), R3 = u3.experimentalNoScripts, { styles: w3, scripts: S3 } = getRequestDependencies(v3, _3.rendererContext);
      m3.push({ style: k3 });
      {
        const e5 = [];
        for (const t5 in w3) {
          const n3 = w3[t5];
          e5.push({ rel: "stylesheet", href: _3.rendererContext.buildAssetsURL(n3.file) });
        }
        m3.push({ link: e5 }, y3);
      }
      R3 || (m3.push({ link: getPreloadLinks(v3, _3.rendererContext) }, y3), m3.push({ link: getPrefetchLinks(v3, _3.rendererContext) }, y3), m3.push({ script: renderPayloadJsonScript({ id: "__NUXT_DATA__", ssrContext: v3, data: v3.payload }) }, { ...y3, tagPosition: "bodyClose", tagPriority: "high" })), u3.experimentalNoScripts || m3.push({ script: Object.values(S3).map((e5) => ({ type: e5.module ? "module" : null, src: _3.rendererContext.buildAssetsURL(e5.file), defer: !e5.module || null, tagPosition: "head", crossorigin: "" })) }, y3);
      const { headTags: C3, bodyTags: x3, bodyTagsOpen: A4, htmlAttrs: O3, bodyAttrs: $3 } = await renderSSRHead(m3), T3 = { island: s2, htmlAttrs: O3 ? [O3] : [], head: normalizeChunks([C3]), bodyAttrs: $3 ? [$3] : [], bodyPrepend: normalizeChunks([A4, v3.teleports?.body]), body: [b3.html, $n + joinTags([v3.teleports?.[`#${Cn.id}`]]) + "</div>"], bodyAppend: [x3] };
      await n2.hooks.callHook("render:html", T3, { event: t4 });
      var E3;
      return { body: (E3 = T3, `<!DOCTYPE html><html${joinAttrs(E3.htmlAttrs)}><head>${joinTags(E3.head)}</head><body${joinAttrs(E3.bodyAttrs)}>${joinTags(E3.bodyPrepend)}${joinTags(E3.body)}${joinTags(E3.bodyAppend)}</body></html>`), statusCode: getResponseStatus(t4), statusMessage: getResponseStatusText(t4), headers: { "content-type": "text/html;charset=utf-8", "x-powered-by": "Nuxt" } };
    });
    Hn = Object.freeze(Object.defineProperty({ __proto__: null, default: jn }, Symbol.toStringTag, { value: "Module" }));
  }
});

// .wrangler/tmp/pages-FEt2Fg/chunks/routes/api/teste.get.mjs
var teste_get_exports = {};
__export(teste_get_exports, {
  default: () => o5
});
var o5;
var init_teste_get = __esm({
  ".wrangler/tmp/pages-FEt2Fg/chunks/routes/api/teste.get.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    init_runtime();
    o5 = defineEventHandler(async ({ context: e5 }) => {
      e5.cloudflare.env;
      const o7 = e5.cloudflare.env.DB.prepare("SELECT * FROM comments LIMIT 3"), t4 = await o7.all();
      return console.log("antes"), console.log(t4), console.log("depois"), { data: "teste" };
    });
  }
});

// .wrangler/tmp/pages-FEt2Fg/chunks/runtime.mjs
function createNotImplementedError(e5) {
  throw new Error(`[unenv] ${e5} is not implemented yet!`);
}
function notImplemented(e5) {
  return Object.assign(() => {
    throw createNotImplementedError(e5);
  }, { __unenv__: true });
}
function toByteArray(e5) {
  let n2;
  const o7 = function(e6) {
    const t4 = e6.length;
    if (t4 % 4 > 0)
      throw new Error("Invalid string. Length must be a multiple of 4");
    let r4 = e6.indexOf("=");
    return -1 === r4 && (r4 = t4), [r4, r4 === t4 ? 0 : 4 - r4 % 4];
  }(e5), s2 = o7[0], i3 = o7[1], a3 = new r3(function(e6, t4, r4) {
    return 3 * (t4 + r4) / 4 - r4;
  }(0, s2, i3));
  let u3 = 0;
  const c2 = i3 > 0 ? s2 - 4 : s2;
  let f2;
  for (f2 = 0; f2 < c2; f2 += 4)
    n2 = t3[e5.charCodeAt(f2)] << 18 | t3[e5.charCodeAt(f2 + 1)] << 12 | t3[e5.charCodeAt(f2 + 2)] << 6 | t3[e5.charCodeAt(f2 + 3)], a3[u3++] = n2 >> 16 & 255, a3[u3++] = n2 >> 8 & 255, a3[u3++] = 255 & n2;
  return 2 === i3 && (n2 = t3[e5.charCodeAt(f2)] << 2 | t3[e5.charCodeAt(f2 + 1)] >> 4, a3[u3++] = 255 & n2), 1 === i3 && (n2 = t3[e5.charCodeAt(f2)] << 10 | t3[e5.charCodeAt(f2 + 1)] << 4 | t3[e5.charCodeAt(f2 + 2)] >> 2, a3[u3++] = n2 >> 8 & 255, a3[u3++] = 255 & n2), a3;
}
function encodeChunk(t4, r4, n2) {
  let o7;
  const s2 = [];
  for (let a3 = r4; a3 < n2; a3 += 3)
    o7 = (t4[a3] << 16 & 16711680) + (t4[a3 + 1] << 8 & 65280) + (255 & t4[a3 + 2]), s2.push(e4[(i3 = o7) >> 18 & 63] + e4[i3 >> 12 & 63] + e4[i3 >> 6 & 63] + e4[63 & i3]);
  var i3;
  return s2.join("");
}
function fromByteArray(t4) {
  let r4;
  const n2 = t4.length, o7 = n2 % 3, s2 = [], i3 = 16383;
  for (let e5 = 0, r5 = n2 - o7; e5 < r5; e5 += i3)
    s2.push(encodeChunk(t4, e5, e5 + i3 > r5 ? r5 : e5 + i3));
  return 1 === o7 ? (r4 = t4[n2 - 1], s2.push(e4[r4 >> 2] + e4[r4 << 4 & 63] + "==")) : 2 === o7 && (r4 = (t4[n2 - 2] << 8) + t4[n2 - 1], s2.push(e4[r4 >> 10] + e4[r4 >> 4 & 63] + e4[r4 << 2 & 63] + "=")), s2.join("");
}
function read(e5, t4, r4, n2, o7) {
  let s2, i3;
  const a3 = 8 * o7 - n2 - 1, u3 = (1 << a3) - 1, c2 = u3 >> 1;
  let f2 = -7, l2 = r4 ? o7 - 1 : 0;
  const h3 = r4 ? -1 : 1;
  let d2 = e5[t4 + l2];
  for (l2 += h3, s2 = d2 & (1 << -f2) - 1, d2 >>= -f2, f2 += a3; f2 > 0; )
    s2 = 256 * s2 + e5[t4 + l2], l2 += h3, f2 -= 8;
  for (i3 = s2 & (1 << -f2) - 1, s2 >>= -f2, f2 += n2; f2 > 0; )
    i3 = 256 * i3 + e5[t4 + l2], l2 += h3, f2 -= 8;
  if (0 === s2)
    s2 = 1 - c2;
  else {
    if (s2 === u3)
      return i3 ? Number.NaN : (d2 ? -1 : 1) * Number.POSITIVE_INFINITY;
    i3 += Math.pow(2, n2), s2 -= c2;
  }
  return (d2 ? -1 : 1) * i3 * Math.pow(2, s2 - n2);
}
function write(e5, t4, r4, n2, o7, s2) {
  let i3, a3, u3, c2 = 8 * s2 - o7 - 1;
  const f2 = (1 << c2) - 1, l2 = f2 >> 1, h3 = 23 === o7 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
  let d2 = n2 ? 0 : s2 - 1;
  const p2 = n2 ? 1 : -1, y3 = t4 < 0 || 0 === t4 && 1 / t4 < 0 ? 1 : 0;
  for (t4 = Math.abs(t4), Number.isNaN(t4) || t4 === Number.POSITIVE_INFINITY ? (a3 = Number.isNaN(t4) ? 1 : 0, i3 = f2) : (i3 = Math.floor(Math.log2(t4)), t4 * (u3 = Math.pow(2, -i3)) < 1 && (i3--, u3 *= 2), (t4 += i3 + l2 >= 1 ? h3 / u3 : h3 * Math.pow(2, 1 - l2)) * u3 >= 2 && (i3++, u3 /= 2), i3 + l2 >= f2 ? (a3 = 0, i3 = f2) : i3 + l2 >= 1 ? (a3 = (t4 * u3 - 1) * Math.pow(2, o7), i3 += l2) : (a3 = t4 * Math.pow(2, l2 - 1) * Math.pow(2, o7), i3 = 0)); o7 >= 8; )
    e5[r4 + d2] = 255 & a3, d2 += p2, a3 /= 256, o7 -= 8;
  for (i3 = i3 << o7 | a3, c2 += o7; c2 > 0; )
    e5[r4 + d2] = 255 & i3, d2 += p2, i3 /= 256, c2 -= 8;
  e5[r4 + d2 - p2] |= 128 * y3;
}
function createBuffer2(e5) {
  if (e5 > s)
    throw new RangeError('The value "' + e5 + '" is invalid for option "size"');
  const t4 = new Uint8Array(e5);
  return Object.setPrototypeOf(t4, Buffer$1.prototype), t4;
}
function Buffer$1(e5, t4, r4) {
  if ("number" == typeof e5) {
    if ("string" == typeof t4)
      throw new TypeError('The "string" argument must be of type string. Received type number');
    return allocUnsafe(e5);
  }
  return from(e5, t4, r4);
}
function from(e5, t4, r4) {
  if ("string" == typeof e5)
    return function(e6, t5) {
      "string" == typeof t5 && "" !== t5 || (t5 = "utf8");
      if (!Buffer$1.isEncoding(t5))
        throw new TypeError("Unknown encoding: " + t5);
      const r5 = 0 | byteLength(e6, t5);
      let n3 = createBuffer2(r5);
      const o8 = n3.write(e6, t5);
      o8 !== r5 && (n3 = n3.slice(0, o8));
      return n3;
    }(e5, t4);
  if (ArrayBuffer.isView(e5))
    return function(e6) {
      if (isInstance(e6, Uint8Array)) {
        const t5 = new Uint8Array(e6);
        return fromArrayBuffer(t5.buffer, t5.byteOffset, t5.byteLength);
      }
      return fromArrayLike(e6);
    }(e5);
  if (null == e5)
    throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e5);
  if (isInstance(e5, ArrayBuffer) || e5 && isInstance(e5.buffer, ArrayBuffer))
    return fromArrayBuffer(e5, t4, r4);
  if ("undefined" != typeof SharedArrayBuffer && (isInstance(e5, SharedArrayBuffer) || e5 && isInstance(e5.buffer, SharedArrayBuffer)))
    return fromArrayBuffer(e5, t4, r4);
  if ("number" == typeof e5)
    throw new TypeError('The "value" argument must not be of type number. Received type number');
  const n2 = e5.valueOf && e5.valueOf();
  if (null != n2 && n2 !== e5)
    return Buffer$1.from(n2, t4, r4);
  const o7 = function(e6) {
    if (Buffer$1.isBuffer(e6)) {
      const t5 = 0 | checked(e6.length), r5 = createBuffer2(t5);
      return 0 === r5.length || e6.copy(r5, 0, 0, t5), r5;
    }
    if (void 0 !== e6.length)
      return "number" != typeof e6.length || numberIsNaN(e6.length) ? createBuffer2(0) : fromArrayLike(e6);
    if ("Buffer" === e6.type && Array.isArray(e6.data))
      return fromArrayLike(e6.data);
  }(e5);
  if (o7)
    return o7;
  if ("undefined" != typeof Symbol && null != Symbol.toPrimitive && "function" == typeof e5[Symbol.toPrimitive])
    return Buffer$1.from(e5[Symbol.toPrimitive]("string"), t4, r4);
  throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e5);
}
function assertSize(e5) {
  if ("number" != typeof e5)
    throw new TypeError('"size" argument must be of type number');
  if (e5 < 0)
    throw new RangeError('The value "' + e5 + '" is invalid for option "size"');
}
function allocUnsafe(e5) {
  return assertSize(e5), createBuffer2(e5 < 0 ? 0 : 0 | checked(e5));
}
function fromArrayLike(e5) {
  const t4 = e5.length < 0 ? 0 : 0 | checked(e5.length), r4 = createBuffer2(t4);
  for (let n2 = 0; n2 < t4; n2 += 1)
    r4[n2] = 255 & e5[n2];
  return r4;
}
function fromArrayBuffer(e5, t4, r4) {
  if (t4 < 0 || e5.byteLength < t4)
    throw new RangeError('"offset" is outside of buffer bounds');
  if (e5.byteLength < t4 + (r4 || 0))
    throw new RangeError('"length" is outside of buffer bounds');
  let n2;
  return n2 = void 0 === t4 && void 0 === r4 ? new Uint8Array(e5) : void 0 === r4 ? new Uint8Array(e5, t4) : new Uint8Array(e5, t4, r4), Object.setPrototypeOf(n2, Buffer$1.prototype), n2;
}
function checked(e5) {
  if (e5 >= s)
    throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + s.toString(16) + " bytes");
  return 0 | e5;
}
function byteLength(e5, t4) {
  if (Buffer$1.isBuffer(e5))
    return e5.length;
  if (ArrayBuffer.isView(e5) || isInstance(e5, ArrayBuffer))
    return e5.byteLength;
  if ("string" != typeof e5)
    throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof e5);
  const r4 = e5.length, n2 = arguments.length > 2 && true === arguments[2];
  if (!n2 && 0 === r4)
    return 0;
  let o7 = false;
  for (; ; )
    switch (t4) {
      case "ascii":
      case "latin1":
      case "binary":
        return r4;
      case "utf8":
      case "utf-8":
        return utf8ToBytes(e5).length;
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return 2 * r4;
      case "hex":
        return r4 >>> 1;
      case "base64":
        return base64ToBytes(e5).length;
      default:
        if (o7)
          return n2 ? -1 : utf8ToBytes(e5).length;
        t4 = ("" + t4).toLowerCase(), o7 = true;
    }
}
function slowToString(e5, t4, r4) {
  let n2 = false;
  if ((void 0 === t4 || t4 < 0) && (t4 = 0), t4 > this.length)
    return "";
  if ((void 0 === r4 || r4 > this.length) && (r4 = this.length), r4 <= 0)
    return "";
  if ((r4 >>>= 0) <= (t4 >>>= 0))
    return "";
  for (e5 || (e5 = "utf8"); ; )
    switch (e5) {
      case "hex":
        return hexSlice(this, t4, r4);
      case "utf8":
      case "utf-8":
        return utf8Slice(this, t4, r4);
      case "ascii":
        return asciiSlice(this, t4, r4);
      case "latin1":
      case "binary":
        return latin1Slice(this, t4, r4);
      case "base64":
        return base64Slice(this, t4, r4);
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return utf16leSlice(this, t4, r4);
      default:
        if (n2)
          throw new TypeError("Unknown encoding: " + e5);
        e5 = (e5 + "").toLowerCase(), n2 = true;
    }
}
function swap(e5, t4, r4) {
  const n2 = e5[t4];
  e5[t4] = e5[r4], e5[r4] = n2;
}
function bidirectionalIndexOf(e5, t4, r4, n2, o7) {
  if (0 === e5.length)
    return -1;
  if ("string" == typeof r4 ? (n2 = r4, r4 = 0) : r4 > 2147483647 ? r4 = 2147483647 : r4 < -2147483648 && (r4 = -2147483648), numberIsNaN(r4 = +r4) && (r4 = o7 ? 0 : e5.length - 1), r4 < 0 && (r4 = e5.length + r4), r4 >= e5.length) {
    if (o7)
      return -1;
    r4 = e5.length - 1;
  } else if (r4 < 0) {
    if (!o7)
      return -1;
    r4 = 0;
  }
  if ("string" == typeof t4 && (t4 = Buffer$1.from(t4, n2)), Buffer$1.isBuffer(t4))
    return 0 === t4.length ? -1 : arrayIndexOf(e5, t4, r4, n2, o7);
  if ("number" == typeof t4)
    return t4 &= 255, "function" == typeof Uint8Array.prototype.indexOf ? o7 ? Uint8Array.prototype.indexOf.call(e5, t4, r4) : Uint8Array.prototype.lastIndexOf.call(e5, t4, r4) : arrayIndexOf(e5, [t4], r4, n2, o7);
  throw new TypeError("val must be string, number or Buffer");
}
function arrayIndexOf(e5, t4, r4, n2, o7) {
  let s2, i3 = 1, a3 = e5.length, u3 = t4.length;
  if (void 0 !== n2 && ("ucs2" === (n2 = String(n2).toLowerCase()) || "ucs-2" === n2 || "utf16le" === n2 || "utf-16le" === n2)) {
    if (e5.length < 2 || t4.length < 2)
      return -1;
    i3 = 2, a3 /= 2, u3 /= 2, r4 /= 2;
  }
  function read2(e6, t5) {
    return 1 === i3 ? e6[t5] : e6.readUInt16BE(t5 * i3);
  }
  if (o7) {
    let n3 = -1;
    for (s2 = r4; s2 < a3; s2++)
      if (read2(e5, s2) === read2(t4, -1 === n3 ? 0 : s2 - n3)) {
        if (-1 === n3 && (n3 = s2), s2 - n3 + 1 === u3)
          return n3 * i3;
      } else
        -1 !== n3 && (s2 -= s2 - n3), n3 = -1;
  } else
    for (r4 + u3 > a3 && (r4 = a3 - u3), s2 = r4; s2 >= 0; s2--) {
      let r5 = true;
      for (let n3 = 0; n3 < u3; n3++)
        if (read2(e5, s2 + n3) !== read2(t4, n3)) {
          r5 = false;
          break;
        }
      if (r5)
        return s2;
    }
  return -1;
}
function hexWrite(e5, t4, r4, n2) {
  r4 = Number(r4) || 0;
  const o7 = e5.length - r4;
  n2 ? (n2 = Number(n2)) > o7 && (n2 = o7) : n2 = o7;
  const s2 = t4.length;
  let i3;
  for (n2 > s2 / 2 && (n2 = s2 / 2), i3 = 0; i3 < n2; ++i3) {
    const n3 = Number.parseInt(t4.slice(2 * i3, 2 * i3 + 2), 16);
    if (numberIsNaN(n3))
      return i3;
    e5[r4 + i3] = n3;
  }
  return i3;
}
function utf8Write(e5, t4, r4, n2) {
  return blitBuffer(utf8ToBytes(t4, e5.length - r4), e5, r4, n2);
}
function asciiWrite(e5, t4, r4, n2) {
  return blitBuffer(function(e6) {
    const t5 = [];
    for (let r5 = 0; r5 < e6.length; ++r5)
      t5.push(255 & e6.charCodeAt(r5));
    return t5;
  }(t4), e5, r4, n2);
}
function base64Write(e5, t4, r4, n2) {
  return blitBuffer(base64ToBytes(t4), e5, r4, n2);
}
function ucs2Write(e5, t4, r4, n2) {
  return blitBuffer(function(e6, t5) {
    let r5, n3, o7;
    const s2 = [];
    for (let i3 = 0; i3 < e6.length && !((t5 -= 2) < 0); ++i3)
      r5 = e6.charCodeAt(i3), n3 = r5 >> 8, o7 = r5 % 256, s2.push(o7, n3);
    return s2;
  }(t4, e5.length - r4), e5, r4, n2);
}
function base64Slice(e5, t4, r4) {
  return 0 === t4 && r4 === e5.length ? fromByteArray(e5) : fromByteArray(e5.slice(t4, r4));
}
function utf8Slice(e5, t4, r4) {
  r4 = Math.min(e5.length, r4);
  const n2 = [];
  let o7 = t4;
  for (; o7 < r4; ) {
    const t5 = e5[o7];
    let s2 = null, i3 = t5 > 239 ? 4 : t5 > 223 ? 3 : t5 > 191 ? 2 : 1;
    if (o7 + i3 <= r4) {
      let r5, n3, a3, u3;
      switch (i3) {
        case 1:
          t5 < 128 && (s2 = t5);
          break;
        case 2:
          r5 = e5[o7 + 1], 128 == (192 & r5) && (u3 = (31 & t5) << 6 | 63 & r5, u3 > 127 && (s2 = u3));
          break;
        case 3:
          r5 = e5[o7 + 1], n3 = e5[o7 + 2], 128 == (192 & r5) && 128 == (192 & n3) && (u3 = (15 & t5) << 12 | (63 & r5) << 6 | 63 & n3, u3 > 2047 && (u3 < 55296 || u3 > 57343) && (s2 = u3));
          break;
        case 4:
          r5 = e5[o7 + 1], n3 = e5[o7 + 2], a3 = e5[o7 + 3], 128 == (192 & r5) && 128 == (192 & n3) && 128 == (192 & a3) && (u3 = (15 & t5) << 18 | (63 & r5) << 12 | (63 & n3) << 6 | 63 & a3, u3 > 65535 && u3 < 1114112 && (s2 = u3));
      }
    }
    null === s2 ? (s2 = 65533, i3 = 1) : s2 > 65535 && (s2 -= 65536, n2.push(s2 >>> 10 & 1023 | 55296), s2 = 56320 | 1023 & s2), n2.push(s2), o7 += i3;
  }
  return function(e6) {
    const t5 = e6.length;
    if (t5 <= i2)
      return String.fromCharCode.apply(String, e6);
    let r5 = "", n3 = 0;
    for (; n3 < t5; )
      r5 += String.fromCharCode.apply(String, e6.slice(n3, n3 += i2));
    return r5;
  }(n2);
}
function asciiSlice(e5, t4, r4) {
  let n2 = "";
  r4 = Math.min(e5.length, r4);
  for (let o7 = t4; o7 < r4; ++o7)
    n2 += String.fromCharCode(127 & e5[o7]);
  return n2;
}
function latin1Slice(e5, t4, r4) {
  let n2 = "";
  r4 = Math.min(e5.length, r4);
  for (let o7 = t4; o7 < r4; ++o7)
    n2 += String.fromCharCode(e5[o7]);
  return n2;
}
function hexSlice(e5, t4, r4) {
  const n2 = e5.length;
  (!t4 || t4 < 0) && (t4 = 0), (!r4 || r4 < 0 || r4 > n2) && (r4 = n2);
  let o7 = "";
  for (let n3 = t4; n3 < r4; ++n3)
    o7 += c[e5[n3]];
  return o7;
}
function utf16leSlice(e5, t4, r4) {
  const n2 = e5.slice(t4, r4);
  let o7 = "";
  for (let e6 = 0; e6 < n2.length - 1; e6 += 2)
    o7 += String.fromCharCode(n2[e6] + 256 * n2[e6 + 1]);
  return o7;
}
function checkOffset(e5, t4, r4) {
  if (e5 % 1 != 0 || e5 < 0)
    throw new RangeError("offset is not uint");
  if (e5 + t4 > r4)
    throw new RangeError("Trying to access beyond buffer length");
}
function checkInt(e5, t4, r4, n2, o7, s2) {
  if (!Buffer$1.isBuffer(e5))
    throw new TypeError('"buffer" argument must be a Buffer instance');
  if (t4 > o7 || t4 < s2)
    throw new RangeError('"value" argument is out of bounds');
  if (r4 + n2 > e5.length)
    throw new RangeError("Index out of range");
}
function wrtBigUInt64LE(e5, t4, r4, n2, o7) {
  checkIntBI(t4, n2, o7, e5, r4, 7);
  let s2 = Number(t4 & BigInt(4294967295));
  e5[r4++] = s2, s2 >>= 8, e5[r4++] = s2, s2 >>= 8, e5[r4++] = s2, s2 >>= 8, e5[r4++] = s2;
  let i3 = Number(t4 >> BigInt(32) & BigInt(4294967295));
  return e5[r4++] = i3, i3 >>= 8, e5[r4++] = i3, i3 >>= 8, e5[r4++] = i3, i3 >>= 8, e5[r4++] = i3, r4;
}
function wrtBigUInt64BE(e5, t4, r4, n2, o7) {
  checkIntBI(t4, n2, o7, e5, r4, 7);
  let s2 = Number(t4 & BigInt(4294967295));
  e5[r4 + 7] = s2, s2 >>= 8, e5[r4 + 6] = s2, s2 >>= 8, e5[r4 + 5] = s2, s2 >>= 8, e5[r4 + 4] = s2;
  let i3 = Number(t4 >> BigInt(32) & BigInt(4294967295));
  return e5[r4 + 3] = i3, i3 >>= 8, e5[r4 + 2] = i3, i3 >>= 8, e5[r4 + 1] = i3, i3 >>= 8, e5[r4] = i3, r4 + 8;
}
function checkIEEE754(e5, t4, r4, n2, o7, s2) {
  if (r4 + n2 > e5.length)
    throw new RangeError("Index out of range");
  if (r4 < 0)
    throw new RangeError("Index out of range");
}
function writeFloat(e5, t4, r4, n2, o7) {
  return t4 = +t4, r4 >>>= 0, o7 || checkIEEE754(e5, 0, r4, 4), write(e5, t4, r4, n2, 23, 4), r4 + 4;
}
function writeDouble(e5, t4, r4, n2, o7) {
  return t4 = +t4, r4 >>>= 0, o7 || checkIEEE754(e5, 0, r4, 8), write(e5, t4, r4, n2, 52, 8), r4 + 8;
}
function E2(e5, t4, r4) {
  a2[e5] = class extends r4 {
    constructor() {
      super(), Object.defineProperty(this, "message", { value: Reflect.apply(t4, this, arguments), writable: true, configurable: true }), this.name = `${this.name} [${e5}]`, this.stack, delete this.name;
    }
    get code() {
      return e5;
    }
    set code(e6) {
      Object.defineProperty(this, "code", { configurable: true, enumerable: true, value: e6, writable: true });
    }
    toString() {
      return `${this.name} [${e5}]: ${this.message}`;
    }
  };
}
function addNumericalSeparator(e5) {
  let t4 = "", r4 = e5.length;
  const n2 = "-" === e5[0] ? 1 : 0;
  for (; r4 >= n2 + 4; r4 -= 3)
    t4 = `_${e5.slice(r4 - 3, r4)}${t4}`;
  return `${e5.slice(0, r4)}${t4}`;
}
function checkIntBI(e5, t4, r4, n2, o7, s2) {
  if (e5 > r4 || e5 < t4) {
    const r5 = "bigint" == typeof t4 ? "n" : "";
    let n3;
    throw n3 = 0 === t4 || t4 === BigInt(0) ? `>= 0${r5} and < 2${r5} ** ${8 * (s2 + 1)}${r5}` : `>= -(2${r5} ** ${8 * (s2 + 1) - 1}${r5}) and < 2 ** ${8 * (s2 + 1) - 1}${r5}`, new a2.ERR_OUT_OF_RANGE("value", n3, e5);
  }
  !function(e6, t5, r5) {
    validateNumber(t5, "offset"), void 0 !== e6[t5] && void 0 !== e6[t5 + r5] || boundsError(t5, e6.length - (r5 + 1));
  }(n2, o7, s2);
}
function validateNumber(e5, t4) {
  if ("number" != typeof e5)
    throw new a2.ERR_INVALID_ARG_TYPE(t4, "number", e5);
}
function boundsError(e5, t4, r4) {
  if (Math.floor(e5) !== e5)
    throw validateNumber(e5, r4), new a2.ERR_OUT_OF_RANGE("offset", "an integer", e5);
  if (t4 < 0)
    throw new a2.ERR_BUFFER_OUT_OF_BOUNDS();
  throw new a2.ERR_OUT_OF_RANGE("offset", `>= 0 and <= ${t4}`, e5);
}
function utf8ToBytes(e5, t4) {
  let r4;
  t4 = t4 || Number.POSITIVE_INFINITY;
  const n2 = e5.length;
  let o7 = null;
  const s2 = [];
  for (let i3 = 0; i3 < n2; ++i3) {
    if (r4 = e5.charCodeAt(i3), r4 > 55295 && r4 < 57344) {
      if (!o7) {
        if (r4 > 56319) {
          (t4 -= 3) > -1 && s2.push(239, 191, 189);
          continue;
        }
        if (i3 + 1 === n2) {
          (t4 -= 3) > -1 && s2.push(239, 191, 189);
          continue;
        }
        o7 = r4;
        continue;
      }
      if (r4 < 56320) {
        (t4 -= 3) > -1 && s2.push(239, 191, 189), o7 = r4;
        continue;
      }
      r4 = 65536 + (o7 - 55296 << 10 | r4 - 56320);
    } else
      o7 && (t4 -= 3) > -1 && s2.push(239, 191, 189);
    if (o7 = null, r4 < 128) {
      if ((t4 -= 1) < 0)
        break;
      s2.push(r4);
    } else if (r4 < 2048) {
      if ((t4 -= 2) < 0)
        break;
      s2.push(r4 >> 6 | 192, 63 & r4 | 128);
    } else if (r4 < 65536) {
      if ((t4 -= 3) < 0)
        break;
      s2.push(r4 >> 12 | 224, r4 >> 6 & 63 | 128, 63 & r4 | 128);
    } else {
      if (!(r4 < 1114112))
        throw new Error("Invalid code point");
      if ((t4 -= 4) < 0)
        break;
      s2.push(r4 >> 18 | 240, r4 >> 12 & 63 | 128, r4 >> 6 & 63 | 128, 63 & r4 | 128);
    }
  }
  return s2;
}
function base64ToBytes(e5) {
  return toByteArray(function(e6) {
    if ((e6 = (e6 = e6.split("=")[0]).trim().replace(u2, "")).length < 2)
      return "";
    for (; e6.length % 4 != 0; )
      e6 += "=";
    return e6;
  }(e5));
}
function blitBuffer(e5, t4, r4, n2) {
  let o7;
  for (o7 = 0; o7 < n2 && !(o7 + r4 >= t4.length || o7 >= e5.length); ++o7)
    t4[o7 + r4] = e5[o7];
  return o7;
}
function isInstance(e5, t4) {
  return e5 instanceof t4 || null != e5 && null != e5.constructor && null != e5.constructor.name && e5.constructor.name === t4.name;
}
function numberIsNaN(e5) {
  return e5 != e5;
}
function defineBigIntMethod(e5) {
  return "undefined" == typeof BigInt ? BufferBigIntNotDefined : e5;
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
function runTimeout(e5) {
  if (h2 === setTimeout)
    return setTimeout(e5, 0);
  if ((h2 === defaultSetTimeout || !h2) && setTimeout)
    return h2 = setTimeout, setTimeout(e5, 0);
  try {
    return h2(e5, 0);
  } catch {
    try {
      return h2.call(null, e5, 0);
    } catch {
      return h2.call(this, e5, 0);
    }
  }
}
function cleanUpNextTick() {
  g && p && (g = false, p.length > 0 ? y2 = [...p, ...y2] : m2 = -1, y2.length > 0 && drainQueue());
}
function drainQueue() {
  if (g)
    return;
  const e5 = runTimeout(cleanUpNextTick);
  g = true;
  let t4 = y2.length;
  for (; t4; ) {
    for (p = y2, y2 = []; ++m2 < t4; )
      p && p[m2].run();
    m2 = -1, t4 = y2.length;
  }
  p = null, g = false, function(e6) {
    if (d === clearTimeout)
      return clearTimeout(e6);
    if ((d === defaultClearTimeout || !d) && clearTimeout)
      return d = clearTimeout, clearTimeout(e6);
    try {
      return d(e6);
    } catch {
      try {
        return d.call(null, e6);
      } catch {
        return d.call(this, e6);
      }
    }
  }(e5);
}
function Item(e5, t4) {
  this.fun = e5, this.array = t4;
}
function noop() {
  return l;
}
function encodeQueryValue(e5) {
  return (t4 = "string" == typeof e5 ? e5 : JSON.stringify(e5), encodeURI("" + t4).replace($2, "|")).replace(A3, "%2B").replace(C2, "+").replace(R2, "%23").replace(I2, "%26").replace(T2, "`").replace(S2, "^").replace(x2, "%2F");
  var t4;
}
function encodeQueryKey(e5) {
  return encodeQueryValue(e5).replace(k2, "%3D");
}
function decode(e5 = "") {
  try {
    return decodeURIComponent("" + e5);
  } catch {
    return "" + e5;
  }
}
function decodeQueryValue(e5) {
  return decode(e5.replace(A3, " "));
}
function parseQuery(e5 = "") {
  const t4 = {};
  "?" === e5[0] && (e5 = e5.slice(1));
  for (const r4 of e5.split("&")) {
    const e6 = r4.match(/([^=]+)=?(.*)/) || [];
    if (e6.length < 2)
      continue;
    const n2 = decode(e6[1].replace(A3, " "));
    if ("__proto__" === n2 || "constructor" === n2)
      continue;
    const o7 = decodeQueryValue(e6[2] || "");
    void 0 === t4[n2] ? t4[n2] = o7 : Array.isArray(t4[n2]) ? t4[n2].push(o7) : t4[n2] = [t4[n2], o7];
  }
  return t4;
}
function stringifyQuery(e5) {
  return Object.keys(e5).filter((t4) => void 0 !== e5[t4]).map((t4) => {
    return r4 = t4, "number" != typeof (n2 = e5[t4]) && "boolean" != typeof n2 || (n2 = String(n2)), n2 ? Array.isArray(n2) ? n2.map((e6) => `${encodeQueryKey(r4)}=${encodeQueryValue(e6)}`).join("&") : `${encodeQueryKey(r4)}=${encodeQueryValue(n2)}` : encodeQueryKey(r4);
    var r4, n2;
  }).filter(Boolean).join("&");
}
function hasProtocol(e5, t4 = {}) {
  return "boolean" == typeof t4 && (t4 = { acceptRelative: t4 }), t4.strict ? O2.test(e5) : j3.test(e5) || !!t4.acceptRelative && L2.test(e5);
}
function isScriptProtocol(e5) {
  return !!e5 && N2.test(e5);
}
function hasTrailingSlash(e5 = "", t4) {
  return t4 ? M2.test(e5) : e5.endsWith("/");
}
function withoutTrailingSlash(e5 = "", t4) {
  if (!t4)
    return (hasTrailingSlash(e5) ? e5.slice(0, -1) : e5) || "/";
  if (!hasTrailingSlash(e5, true))
    return e5 || "/";
  let r4 = e5, n2 = "";
  const o7 = e5.indexOf("#");
  o7 >= 0 && (r4 = e5.slice(0, o7), n2 = e5.slice(o7));
  const [s2, ...i3] = r4.split("?");
  return ((s2.endsWith("/") ? s2.slice(0, -1) : s2) || "/") + (i3.length > 0 ? `?${i3.join("?")}` : "") + n2;
}
function withTrailingSlash(e5 = "", t4) {
  if (!t4)
    return e5.endsWith("/") ? e5 : e5 + "/";
  if (hasTrailingSlash(e5, true))
    return e5 || "/";
  let r4 = e5, n2 = "";
  const o7 = e5.indexOf("#");
  if (o7 >= 0 && (r4 = e5.slice(0, o7), n2 = e5.slice(o7), !r4))
    return n2;
  const [s2, ...i3] = r4.split("?");
  return s2 + "/" + (i3.length > 0 ? `?${i3.join("?")}` : "") + n2;
}
function withLeadingSlash(e5 = "") {
  return function(e6 = "") {
    return e6.startsWith("/");
  }(e5) ? e5 : "/" + e5;
}
function withoutBase(e5, t4) {
  if (isEmptyURL(t4))
    return e5;
  const r4 = withoutTrailingSlash(t4);
  if (!e5.startsWith(r4))
    return e5;
  const n2 = e5.slice(r4.length);
  return "/" === n2[0] ? n2 : "/" + n2;
}
function withQuery(e5, t4) {
  const r4 = parseURL(e5), n2 = { ...parseQuery(r4.search), ...t4 };
  return r4.search = stringifyQuery(n2), stringifyParsedURL(r4);
}
function getQuery$1(e5) {
  return parseQuery(parseURL(e5).search);
}
function isEmptyURL(e5) {
  return !e5 || "/" === e5;
}
function joinURL(e5, ...t4) {
  let r4 = e5 || "";
  for (const e6 of t4.filter((e7) => function(e8) {
    return e8 && "/" !== e8;
  }(e7)))
    if (r4) {
      const t5 = e6.replace(U2, "");
      r4 = withTrailingSlash(r4) + t5;
    } else
      r4 = e6;
  return r4;
}
function joinRelativeURL(...e5) {
  const t4 = /\/(?!\/)/, r4 = e5.filter(Boolean), n2 = [];
  let o7 = 0;
  for (const e6 of r4)
    if (e6 && "/" !== e6) {
      for (const [r5, s3] of e6.split(t4).entries())
        if (s3 && "." !== s3)
          if (".." !== s3)
            1 === r5 && n2[n2.length - 1]?.endsWith(":/") ? n2[n2.length - 1] += "/" + s3 : (n2.push(s3), o7++);
          else {
            if (1 === n2.length && hasProtocol(n2[0]))
              continue;
            n2.pop(), o7--;
          }
    }
  let s2 = n2.join("/");
  return o7 >= 0 ? r4[0]?.startsWith("/") && !s2.startsWith("/") ? s2 = "/" + s2 : r4[0]?.startsWith("./") && !s2.startsWith("./") && (s2 = "./" + s2) : s2 = "../".repeat(-1 * o7) + s2, r4[r4.length - 1]?.endsWith("/") && !s2.endsWith("/") && (s2 += "/"), s2;
}
function isEqual(e5, t4, r4 = {}) {
  return r4.trailingSlash || (e5 = withTrailingSlash(e5), t4 = withTrailingSlash(t4)), r4.leadingSlash || (e5 = withLeadingSlash(e5), t4 = withLeadingSlash(t4)), r4.encoding || (e5 = decode(e5), t4 = decode(t4)), e5 === t4;
}
function parseURL(e5 = "", t4) {
  const r4 = e5.match(/^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i);
  if (r4) {
    const [, e6, t5 = ""] = r4;
    return { protocol: e6.toLowerCase(), pathname: t5, href: e6 + t5, auth: "", host: "", search: "", hash: "" };
  }
  if (!hasProtocol(e5, { acceptRelative: true }))
    return parsePath(e5);
  const [, n2 = "", o7, s2 = ""] = e5.replace(/\\/g, "/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/) || [];
  let [, i3 = "", a3 = ""] = s2.match(/([^#/?]*)(.*)?/) || [];
  "file:" === n2 && (a3 = a3.replace(/\/(?=[A-Za-z]:)/, ""));
  const { pathname: u3, search: c2, hash: f2 } = parsePath(a3);
  return { protocol: n2.toLowerCase(), auth: o7 ? o7.slice(0, Math.max(0, o7.length - 1)) : "", host: i3, pathname: u3, search: c2, hash: f2, [P2]: !n2 };
}
function parsePath(e5 = "") {
  const [t4 = "", r4 = "", n2 = ""] = (e5.match(/([^#?]*)(\?[^#]*)?(#.*)?/) || []).splice(1);
  return { pathname: t4, search: r4, hash: n2 };
}
function stringifyParsedURL(e5) {
  const t4 = e5.pathname || "", r4 = e5.search ? (e5.search.startsWith("?") ? "" : "?") + e5.search : "", n2 = e5.hash || "", o7 = e5.auth ? e5.auth + "@" : "", s2 = e5.host || "";
  return (e5.protocol || e5[P2] ? (e5.protocol || "") + "//" : "") + o7 + s2 + t4 + r4 + n2;
}
function objectHash(e5, t4) {
  const r4 = createHasher(t4 = t4 ? { ...H2, ...t4 } : H2);
  return r4.dispatch(e5), r4.toString();
}
function createHasher(e5) {
  let t4 = "", r4 = /* @__PURE__ */ new Map();
  const write2 = (e6) => {
    t4 += e6;
  };
  return { toString: () => t4, getContext: () => r4, dispatch(t5) {
    e5.replacer && (t5 = e5.replacer(t5));
    return this[null === t5 ? "null" : typeof t5](t5);
  }, object(t5) {
    if (t5 && "function" == typeof t5.toJSON)
      return this.object(t5.toJSON());
    const n2 = Object.prototype.toString.call(t5);
    let o7 = "";
    const s2 = n2.length;
    o7 = s2 < 10 ? "unknown:[" + n2 + "]" : n2.slice(8, s2 - 1), o7 = o7.toLowerCase();
    let i3 = null;
    if (void 0 !== (i3 = r4.get(t5)))
      return this.dispatch("[CIRCULAR:" + i3 + "]");
    if (r4.set(t5, r4.size), void 0 !== f && f.isBuffer && f.isBuffer(t5))
      return write2("buffer:"), write2(t5.toString("utf8"));
    if ("object" !== o7 && "function" !== o7 && "asyncfunction" !== o7)
      this[o7] ? this[o7](t5) : e5.ignoreUnknown || this.unkown(t5, o7);
    else {
      let r5 = Object.keys(t5);
      e5.unorderedObjects && (r5 = r5.sort());
      let n3 = [];
      false === e5.respectType || isNativeFunction(t5) || (n3 = q3), e5.excludeKeys && (r5 = r5.filter((t6) => !e5.excludeKeys(t6)), n3 = n3.filter((t6) => !e5.excludeKeys(t6))), write2("object:" + (r5.length + n3.length) + ":");
      const dispatchForKey = (r6) => {
        this.dispatch(r6), write2(":"), e5.excludeValues || this.dispatch(t5[r6]), write2(",");
      };
      for (const e6 of r5)
        dispatchForKey(e6);
      for (const e6 of n3)
        dispatchForKey(e6);
    }
  }, array(t5, n2) {
    if (n2 = void 0 === n2 ? false !== e5.unorderedArrays : n2, write2("array:" + t5.length + ":"), !n2 || t5.length <= 1) {
      for (const e6 of t5)
        this.dispatch(e6);
      return;
    }
    const o7 = /* @__PURE__ */ new Map(), s2 = t5.map((t6) => {
      const r5 = createHasher(e5);
      r5.dispatch(t6);
      for (const [e6, t7] of r5.getContext())
        o7.set(e6, t7);
      return r5.toString();
    });
    return r4 = o7, s2.sort(), this.array(s2, false);
  }, date: (e6) => write2("date:" + e6.toJSON()), symbol: (e6) => write2("symbol:" + e6.toString()), unkown(e6, t5) {
    if (write2(t5), e6)
      return write2(":"), e6 && "function" == typeof e6.entries ? this.array(Array.from(e6.entries()), true) : void 0;
  }, error: (e6) => write2("error:" + e6.toString()), boolean: (e6) => write2("bool:" + e6), string(e6) {
    write2("string:" + e6.length + ":"), write2(e6);
  }, function(t5) {
    write2("fn:"), isNativeFunction(t5) ? this.dispatch("[native]") : this.dispatch(t5.toString()), false !== e5.respectFunctionNames && this.dispatch("function-name:" + String(t5.name)), e5.respectFunctionProperties && this.object(t5);
  }, number: (e6) => write2("number:" + e6), xml: (e6) => write2("xml:" + e6.toString()), null: () => write2("Null"), undefined: () => write2("Undefined"), regexp: (e6) => write2("regex:" + e6.toString()), uint8array(e6) {
    return write2("uint8array:"), this.dispatch(Array.prototype.slice.call(e6));
  }, uint8clampedarray(e6) {
    return write2("uint8clampedarray:"), this.dispatch(Array.prototype.slice.call(e6));
  }, int8array(e6) {
    return write2("int8array:"), this.dispatch(Array.prototype.slice.call(e6));
  }, uint16array(e6) {
    return write2("uint16array:"), this.dispatch(Array.prototype.slice.call(e6));
  }, int16array(e6) {
    return write2("int16array:"), this.dispatch(Array.prototype.slice.call(e6));
  }, uint32array(e6) {
    return write2("uint32array:"), this.dispatch(Array.prototype.slice.call(e6));
  }, int32array(e6) {
    return write2("int32array:"), this.dispatch(Array.prototype.slice.call(e6));
  }, float32array(e6) {
    return write2("float32array:"), this.dispatch(Array.prototype.slice.call(e6));
  }, float64array(e6) {
    return write2("float64array:"), this.dispatch(Array.prototype.slice.call(e6));
  }, arraybuffer(e6) {
    return write2("arraybuffer:"), this.dispatch(new Uint8Array(e6));
  }, url: (e6) => write2("url:" + e6.toString()), map(t5) {
    write2("map:");
    const r5 = [...t5];
    return this.array(r5, false !== e5.unorderedSets);
  }, set(t5) {
    write2("set:");
    const r5 = [...t5];
    return this.array(r5, false !== e5.unorderedSets);
  }, file(e6) {
    return write2("file:"), this.dispatch([e6.name, e6.size, e6.type, e6.lastModfied]);
  }, blob() {
    if (e5.ignoreUnknown)
      return write2("[blob]");
    throw new Error('Hashing Blob objects is currently not supported\nUse "options.replacer" or "options.ignoreUnknown"\n');
  }, domwindow: () => write2("domwindow"), bigint: (e6) => write2("bigint:" + e6.toString()), process: () => write2("process"), timer: () => write2("timer"), pipe: () => write2("pipe"), tcp: () => write2("tcp"), udp: () => write2("udp"), tty: () => write2("tty"), statwatcher: () => write2("statwatcher"), securecontext: () => write2("securecontext"), connection: () => write2("connection"), zlib: () => write2("zlib"), context: () => write2("context"), nodescript: () => write2("nodescript"), httpparser: () => write2("httpparser"), dataview: () => write2("dataview"), signal: () => write2("signal"), fsevent: () => write2("fsevent"), tlswrap: () => write2("tlswrap") };
}
function isNativeFunction(e5) {
  return "function" == typeof e5 && Function.prototype.toString.call(e5).slice(-W2) === z3;
}
function hash(e5, t4 = {}) {
  const r4 = "string" == typeof e5 ? e5 : objectHash(e5, t4);
  return (n2 = r4, new SHA256().finalize(n2).toString(K2)).slice(0, 10);
  var n2;
}
function createRouter$1(e5 = {}) {
  const t4 = { options: e5, rootNode: createRadixNode(), staticRoutesMap: {} }, normalizeTrailingSlash = (t5) => e5.strictTrailingSlash ? t5 : t5.replace(/\/$/, "") || "/";
  if (e5.routes)
    for (const r4 in e5.routes)
      insert(t4, normalizeTrailingSlash(r4), e5.routes[r4]);
  return { ctx: t4, lookup: (e6) => function(e7, t5) {
    const r4 = e7.staticRoutesMap[t5];
    if (r4)
      return r4.data;
    const n2 = t5.split("/"), o7 = {};
    let s2 = false, i3 = null, a3 = e7.rootNode, u3 = null;
    for (let e8 = 0; e8 < n2.length; e8++) {
      const t6 = n2[e8];
      null !== a3.wildcardChildNode && (i3 = a3.wildcardChildNode, u3 = n2.slice(e8).join("/"));
      const r5 = a3.children.get(t6);
      if (void 0 === r5) {
        if (a3 && a3.placeholderChildren.length > 1) {
          const t7 = n2.length - e8;
          a3 = a3.placeholderChildren.find((e9) => e9.maxDepth === t7) || null;
        } else
          a3 = a3.placeholderChildren[0] || null;
        if (!a3)
          break;
        a3.paramName && (o7[a3.paramName] = t6), s2 = true;
      } else
        a3 = r5;
    }
    null !== a3 && null !== a3.data || null === i3 || (a3 = i3, o7[a3.paramName || "_"] = u3, s2 = true);
    if (!a3)
      return null;
    if (s2)
      return { ...a3.data, params: s2 ? o7 : void 0 };
    return a3.data;
  }(t4, normalizeTrailingSlash(e6)), insert: (e6, r4) => insert(t4, normalizeTrailingSlash(e6), r4), remove: (e6) => function(e7, t5) {
    let r4 = false;
    const n2 = t5.split("/");
    let o7 = e7.rootNode;
    for (const e8 of n2)
      if (o7 = o7.children.get(e8), !o7)
        return r4;
    if (o7.data) {
      const e8 = n2.at(-1) || "";
      o7.data = null, 0 === Object.keys(o7.children).length && o7.parent && (o7.parent.children.delete(e8), o7.parent.wildcardChildNode = null, o7.parent.placeholderChildren = []), r4 = true;
    }
    return r4;
  }(t4, normalizeTrailingSlash(e6)) };
}
function insert(e5, t4, r4) {
  let n2 = true;
  const o7 = t4.split("/");
  let s2 = e5.rootNode, i3 = 0;
  const a3 = [s2];
  for (const e6 of o7) {
    let t5;
    if (t5 = s2.children.get(e6))
      s2 = t5;
    else {
      const r5 = getNodeType(e6);
      t5 = createRadixNode({ type: r5, parent: s2 }), s2.children.set(e6, t5), r5 === Y2.PLACEHOLDER ? (t5.paramName = "*" === e6 ? "_" + i3++ : e6.slice(1), s2.placeholderChildren.push(t5), n2 = false) : r5 === Y2.WILDCARD && (s2.wildcardChildNode = t5, t5.paramName = e6.slice(3) || "_", n2 = false), a3.push(t5), s2 = t5;
    }
  }
  for (const [e6, t5] of a3.entries())
    t5.maxDepth = Math.max(a3.length - e6, t5.maxDepth || 0);
  return s2.data = r4, true === n2 && (e5.staticRoutesMap[t4] = s2), s2;
}
function createRadixNode(e5 = {}) {
  return { type: e5.type || Y2.NORMAL, maxDepth: 0, parent: e5.parent || null, children: /* @__PURE__ */ new Map(), data: e5.data || null, paramName: e5.paramName || null, wildcardChildNode: null, placeholderChildren: [] };
}
function getNodeType(e5) {
  return e5.startsWith("**") ? Y2.WILDCARD : ":" === e5[0] || "*" === e5 ? Y2.PLACEHOLDER : Y2.NORMAL;
}
function toRouteMatcher(e5) {
  return function(e6, t4) {
    return { ctx: { table: e6 }, matchAll: (r4) => _matchRoutes(r4, e6, t4) };
  }(_routerNodeToTable("", e5.ctx.rootNode), e5.ctx.options.strictTrailingSlash);
}
function _matchRoutes(e5, t4, r4) {
  true !== r4 && e5.endsWith("/") && (e5 = e5.slice(0, -1) || "/");
  const n2 = [];
  for (const [r5, o8] of _sortRoutesMap(t4.wildcard))
    (e5 === r5 || e5.startsWith(r5 + "/")) && n2.push(o8);
  for (const [r5, o8] of _sortRoutesMap(t4.dynamic))
    if (e5.startsWith(r5 + "/")) {
      const t5 = "/" + e5.slice(r5.length).split("/").splice(2).join("/");
      n2.push(..._matchRoutes(t5, o8));
    }
  const o7 = t4.static.get(e5);
  return o7 && n2.push(o7), n2.filter(Boolean);
}
function _sortRoutesMap(e5) {
  return [...e5.entries()].sort((e6, t4) => e6[0].length - t4[0].length);
}
function _routerNodeToTable(e5, t4) {
  const r4 = { static: /* @__PURE__ */ new Map(), wildcard: /* @__PURE__ */ new Map(), dynamic: /* @__PURE__ */ new Map() };
  return function _addNode(e6, t5) {
    if (e6)
      if (t5.type !== Y2.NORMAL || e6.includes("*") || e6.includes(":")) {
        if (t5.type === Y2.WILDCARD)
          r4.wildcard.set(e6.replace("/**", ""), t5.data);
        else if (t5.type === Y2.PLACEHOLDER) {
          const n2 = _routerNodeToTable("", t5);
          return t5.data && n2.static.set("/", t5.data), void r4.dynamic.set(e6.replace(/\/\*|\/:\w+/, ""), n2);
        }
      } else
        t5.data && r4.static.set(e6, t5.data);
    for (const [r5, n2] of t5.children.entries())
      _addNode(`${e6}/${r5}`.replace("//", "/"), n2);
  }(e5, t4), r4;
}
function jsonParseTransform(e5, t4) {
  if (!("__proto__" === e5 || "constructor" === e5 && t4 && "object" == typeof t4 && "prototype" in t4))
    return t4;
  !function(e6) {
    console.warn(`[destr] Dropping "${e6}" key to prevent prototype pollution.`);
  }(e5);
}
function destr(e5, t4 = {}) {
  if ("string" != typeof e5)
    return e5;
  const r4 = e5.trim();
  if ('"' === e5[0] && e5.endsWith('"') && !e5.includes("\\"))
    return r4.slice(1, -1);
  if (r4.length <= 9) {
    const e6 = r4.toLowerCase();
    if ("true" === e6)
      return true;
    if ("false" === e6)
      return false;
    if ("undefined" === e6)
      return;
    if ("null" === e6)
      return null;
    if ("nan" === e6)
      return Number.NaN;
    if ("infinity" === e6)
      return Number.POSITIVE_INFINITY;
    if ("-infinity" === e6)
      return Number.NEGATIVE_INFINITY;
  }
  if (!ee3.test(e5)) {
    if (t4.strict)
      throw new SyntaxError("[destr] Invalid JSON");
    return e5;
  }
  try {
    if (Z3.test(e5) || X2.test(e5)) {
      if (t4.strict)
        throw new Error("[destr] Possible prototype pollution");
      return JSON.parse(e5, jsonParseTransform);
    }
    return JSON.parse(e5);
  } catch (r5) {
    if (t4.strict)
      throw r5;
    return e5;
  }
}
function isPlainObject2(e5) {
  if (null === e5 || "object" != typeof e5)
    return false;
  const t4 = Object.getPrototypeOf(e5);
  return (null === t4 || t4 === Object.prototype || null === Object.getPrototypeOf(t4)) && (!(Symbol.iterator in e5) && (!(Symbol.toStringTag in e5) || "[object Module]" === Object.prototype.toString.call(e5)));
}
function _defu(e5, t4, r4 = ".", n2) {
  if (!isPlainObject2(t4))
    return _defu(e5, {}, r4, n2);
  const o7 = Object.assign({}, t4);
  for (const t5 in e5) {
    if ("__proto__" === t5 || "constructor" === t5)
      continue;
    const s2 = e5[t5];
    null != s2 && (n2 && n2(o7, t5, s2, r4) || (Array.isArray(s2) && Array.isArray(o7[t5]) ? o7[t5] = [...s2, ...o7[t5]] : isPlainObject2(s2) && isPlainObject2(o7[t5]) ? o7[t5] = _defu(s2, o7[t5], (r4 ? `${r4}.` : "") + t5.toString(), n2) : o7[t5] = s2));
  }
  return o7;
}
function createDefu(e5) {
  return (...t4) => t4.reduce((t5, r4) => _defu(t5, r4, "", e5), {});
}
function _addListener(e5, t4, r4, n2) {
  _checkListener(r4), void 0 !== e5._events.newListener && e5.emit("newListener", t4, r4.listener || r4), e5._events[t4] || (e5._events[t4] = []), n2 ? e5._events[t4].unshift(r4) : e5._events[t4].push(r4);
  const o7 = _getMaxListeners(e5);
  if (o7 > 0 && e5._events[t4].length > o7 && !e5._events[t4].warned) {
    e5._events[t4].warned = true;
    const r5 = new Error(`[unenv] Possible EventEmitter memory leak detected. ${e5._events[t4].length} ${t4} listeners added. Use emitter.setMaxListeners() to increase limit`);
    r5.name = "MaxListenersExceededWarning", r5.emitter = e5, r5.type = t4, r5.count = e5._events[t4]?.length, console.warn(r5);
  }
  return e5;
}
function _wrapOnce(e5, t4, r4) {
  let n2 = false;
  const wrapper = (...o7) => {
    if (!n2)
      return e5.removeListener(t4, wrapper), n2 = true, 0 === o7.length ? r4.call(e5) : r4.apply(e5, o7);
  };
  return wrapper.listener = r4, wrapper;
}
function _getMaxListeners(e5) {
  return e5._maxListeners ?? oe3.defaultMaxListeners;
}
function _listeners(e5, t4, r4) {
  let n2 = e5._events[t4];
  return "function" == typeof n2 && (n2 = [n2]), r4 ? n2.map((e6) => e6.listener || e6) : n2;
}
function _checkListener(e5) {
  if ("function" != typeof e5)
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e5);
}
function getDuplex() {
  return Object.assign(ue3.prototype, ie3.prototype), Object.assign(ue3.prototype, ae3.prototype), ue3;
}
function _distinct(e5) {
  const t4 = {};
  for (const [r4, n2] of Object.entries(e5))
    r4 && (t4[r4] = (Array.isArray(n2) ? n2 : [n2]).filter(Boolean));
  return t4;
}
function hasProp(e5, t4) {
  try {
    return t4 in e5;
  } catch {
    return false;
  }
}
function createError(e5) {
  if ("string" == typeof e5)
    return new H3Error(e5);
  if (isError(e5))
    return e5;
  const t4 = new H3Error(e5.message ?? e5.statusMessage ?? "", { cause: e5.cause || e5 });
  if (hasProp(e5, "stack"))
    try {
      Object.defineProperty(t4, "stack", { get: () => e5.stack });
    } catch {
      try {
        t4.stack = e5.stack;
      } catch {
      }
    }
  if (e5.data && (t4.data = e5.data), e5.statusCode ? t4.statusCode = sanitizeStatusCode(e5.statusCode, t4.statusCode) : e5.status && (t4.statusCode = sanitizeStatusCode(e5.status, t4.statusCode)), e5.statusMessage ? t4.statusMessage = e5.statusMessage : e5.statusText && (t4.statusMessage = e5.statusText), t4.statusMessage) {
    const e6 = t4.statusMessage;
    sanitizeStatusMessage(t4.statusMessage) !== e6 && console.warn("[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default.");
  }
  return void 0 !== e5.fatal && (t4.fatal = e5.fatal), void 0 !== e5.unhandled && (t4.unhandled = e5.unhandled), t4;
}
function isError(e5) {
  return true === e5?.constructor?.__h3_error__;
}
function getQuery(e5) {
  return getQuery$1(e5.path || "");
}
function getRequestHeaders(e5) {
  const t4 = {};
  for (const r4 in e5.node.req.headers) {
    const n2 = e5.node.req.headers[r4];
    t4[r4] = Array.isArray(n2) ? n2.filter(Boolean).join(", ") : n2;
  }
  return t4;
}
function readRawBody(e5, t4 = "utf8") {
  !function(e6, t5) {
    if (!function(e7, t6) {
      if ("string" == typeof t6) {
        if (e7.method === t6)
          return true;
      } else if (t6.includes(e7.method))
        return true;
      return false;
    }(e6, t5))
      throw createError({ statusCode: 405, statusMessage: "HTTP method is not allowed." });
  }(e5, de3);
  const r4 = e5._requestBody || e5.web?.request?.body || e5.node.req[he3] || e5.node.req.rawBody || e5.node.req.body;
  if (r4) {
    const e6 = Promise.resolve(r4).then((e7) => f.isBuffer(e7) ? e7 : "function" == typeof e7.pipeTo ? new Promise((t5, r5) => {
      const n3 = [];
      e7.pipeTo(new WritableStream({ write(e8) {
        n3.push(e8);
      }, close() {
        t5(f.concat(n3));
      }, abort(e8) {
        r5(e8);
      } })).catch(r5);
    }) : "function" == typeof e7.pipe ? new Promise((t5, r5) => {
      const n3 = [];
      e7.on("data", (e8) => {
        n3.push(e8);
      }).on("end", () => {
        t5(f.concat(n3));
      }).on("error", r5);
    }) : e7.constructor === Object ? f.from(JSON.stringify(e7)) : f.from(e7));
    return t4 ? e6.then((e7) => e7.toString(t4)) : e6;
  }
  if (!Number.parseInt(e5.node.req.headers["content-length"] || "") && !String(e5.node.req.headers["transfer-encoding"] ?? "").split(",").map((e6) => e6.trim()).filter(Boolean).includes("chunked"))
    return Promise.resolve(void 0);
  const n2 = e5.node.req[he3] = new Promise((t5, r5) => {
    const n3 = [];
    e5.node.req.on("error", (e6) => {
      r5(e6);
    }).on("data", (e6) => {
      n3.push(e6);
    }).on("end", () => {
      t5(f.concat(n3));
    });
  });
  return t4 ? n2.then((e6) => e6.toString(t4)) : n2;
}
function handleCacheHeaders(e5, t4) {
  const r4 = ["public", ...t4.cacheControls || []];
  let n2 = false;
  if (void 0 !== t4.maxAge && r4.push("max-age=" + +t4.maxAge, "s-maxage=" + +t4.maxAge), t4.modifiedTime) {
    const r5 = new Date(t4.modifiedTime), o7 = e5.node.req.headers["if-modified-since"];
    e5.node.res.setHeader("last-modified", r5.toUTCString()), o7 && new Date(o7) >= t4.modifiedTime && (n2 = true);
  }
  if (t4.etag) {
    e5.node.res.setHeader("etag", t4.etag);
    e5.node.req.headers["if-none-match"] === t4.etag && (n2 = true);
  }
  return e5.node.res.setHeader("cache-control", r4.join(", ")), !!n2 && (e5.node.res.statusCode = 304, e5.handled || e5.node.res.end(), true);
}
function sanitizeStatusMessage(e5 = "") {
  return e5.replace(ye3, "");
}
function sanitizeStatusCode(e5, t4 = 200) {
  return e5 ? ("string" == typeof e5 && (e5 = Number.parseInt(e5, 10)), e5 < 100 || e5 > 999 ? t4 : e5) : t4;
}
function splitCookiesString(e5) {
  if (Array.isArray(e5))
    return e5.flatMap((e6) => splitCookiesString(e6));
  if ("string" != typeof e5)
    return [];
  const t4 = [];
  let r4, n2, o7, s2, i3, a3 = 0;
  const skipWhitespace = () => {
    for (; a3 < e5.length && /\s/.test(e5.charAt(a3)); )
      a3 += 1;
    return a3 < e5.length;
  };
  for (; a3 < e5.length; ) {
    for (r4 = a3, i3 = false; skipWhitespace(); )
      if (n2 = e5.charAt(a3), "," === n2) {
        for (o7 = a3, a3 += 1, skipWhitespace(), s2 = a3; a3 < e5.length && (n2 = e5.charAt(a3), "=" !== n2 && ";" !== n2 && "," !== n2); )
          a3 += 1;
        a3 < e5.length && "=" === e5.charAt(a3) ? (i3 = true, a3 = s2, t4.push(e5.slice(r4, o7)), r4 = a3) : a3 = o7 + 1;
      } else
        a3 += 1;
    (!i3 || a3 >= e5.length) && t4.push(e5.slice(r4, e5.length));
  }
  return t4;
}
function send(e5, t4, r4) {
  return r4 && function(e6, t5) {
    t5 && 304 !== e6.node.res.statusCode && !e6.node.res.getHeader("content-type") && e6.node.res.setHeader("content-type", t5);
  }(e5, r4), new Promise((r5) => {
    ge3(() => {
      e5.handled || e5.node.res.end(t4), r5();
    });
  });
}
function setResponseStatus(e5, t4, r4) {
  t4 && (e5.node.res.statusCode = sanitizeStatusCode(t4, e5.node.res.statusCode)), r4 && (e5.node.res.statusMessage = sanitizeStatusMessage(r4));
}
function getResponseStatus(e5) {
  return e5.node.res.statusCode;
}
function getResponseStatusText(e5) {
  return e5.node.res.statusMessage;
}
function setResponseHeaders(e5, t4) {
  for (const [r4, n2] of Object.entries(t4))
    e5.node.res.setHeader(r4, n2);
}
function setResponseHeader(e5, t4, r4) {
  e5.node.res.setHeader(t4, r4);
}
function sendStream(e5, t4) {
  if (!t4 || "object" != typeof t4)
    throw new Error("[h3] Invalid stream provided.");
  if (e5.node.res._data = t4, !e5.node.res.socket)
    return e5._handled = true, Promise.resolve();
  if (hasProp(t4, "pipeTo") && "function" == typeof t4.pipeTo)
    return t4.pipeTo(new WritableStream({ write(t5) {
      e5.node.res.write(t5);
    } })).then(() => {
      e5.node.res.end();
    });
  if (hasProp(t4, "pipe") && "function" == typeof t4.pipe)
    return new Promise((r4, n2) => {
      t4.pipe(e5.node.res), t4.on && (t4.on("end", () => {
        e5.node.res.end(), r4();
      }), t4.on("error", (e6) => {
        n2(e6);
      })), e5.node.res.on("close", () => {
        t4.abort && t4.abort();
      });
    });
  throw new Error("[h3] Invalid or incompatible stream provided.");
}
function sendWebResponse(e5, t4) {
  for (const [r4, n2] of t4.headers)
    "set-cookie" === r4 ? e5.node.res.appendHeader(r4, splitCookiesString(n2)) : e5.node.res.setHeader(r4, n2);
  if (t4.status && (e5.node.res.statusCode = sanitizeStatusCode(t4.status, e5.node.res.statusCode)), t4.statusText && (e5.node.res.statusMessage = sanitizeStatusMessage(t4.statusText)), t4.redirected && e5.node.res.setHeader("location", t4.url), t4.body)
    return sendStream(e5, t4.body);
  e5.node.res.end();
}
async function proxyRequest(e5, t4, r4 = {}) {
  let n2, o7;
  we3.has(e5.method) && (r4.streamRequest ? (n2 = function(e6) {
    if (!de3.includes(e6.method))
      return;
    const t5 = e6.web?.request?.body || e6._requestBody;
    return t5 || (he3 in e6.node.req || "rawBody" in e6.node.req || "body" in e6.node.req || "__unenv__" in e6.node.req ? new ReadableStream({ async start(t6) {
      const r5 = await readRawBody(e6, false);
      r5 && t6.enqueue(r5), t6.close();
    } }) : new ReadableStream({ start: (t6) => {
      e6.node.req.on("data", (e7) => {
        t6.enqueue(e7);
      }), e6.node.req.on("end", () => {
        t6.close();
      }), e6.node.req.on("error", (e7) => {
        t6.error(e7);
      });
    } }));
  }(e5), o7 = "half") : n2 = await readRawBody(e5, false).catch(() => {
  }));
  const s2 = r4.fetchOptions?.method || e5.method, i3 = function(e6, ...t5) {
    const r5 = t5.filter(Boolean);
    if (0 === r5.length)
      return e6;
    const n3 = new Headers(e6);
    for (const e7 of r5)
      for (const [t6, r6] of Object.entries(e7))
        void 0 !== r6 && n3.set(t6, r6);
    return n3;
  }(getProxyRequestHeaders(e5), r4.fetchOptions?.headers, r4.headers);
  return async function(e6, t5, r5 = {}) {
    let n3;
    try {
      n3 = await _getFetch(r5.fetch)(t5, { headers: r5.headers, ignoreResponseError: true, ...r5.fetchOptions });
    } catch (e7) {
      throw createError({ status: 502, statusMessage: "Bad Gateway", cause: e7 });
    }
    e6.node.res.statusCode = sanitizeStatusCode(n3.status, e6.node.res.statusCode), e6.node.res.statusMessage = sanitizeStatusMessage(n3.statusText);
    const o8 = [];
    for (const [t6, r6] of n3.headers.entries())
      "content-encoding" !== t6 && "content-length" !== t6 && ("set-cookie" !== t6 ? e6.node.res.setHeader(t6, r6) : o8.push(...splitCookiesString(r6)));
    o8.length > 0 && e6.node.res.setHeader("set-cookie", o8.map((e7) => (r5.cookieDomainRewrite && (e7 = rewriteCookieProperty(e7, r5.cookieDomainRewrite, "domain")), r5.cookiePathRewrite && (e7 = rewriteCookieProperty(e7, r5.cookiePathRewrite, "path")), e7)));
    r5.onResponse && await r5.onResponse(e6, n3);
    if (void 0 !== n3._data)
      return n3._data;
    if (e6.handled)
      return;
    if (false === r5.sendStream) {
      const t6 = new Uint8Array(await n3.arrayBuffer());
      return e6.node.res.end(t6);
    }
    if (n3.body)
      for await (const t6 of n3.body)
        e6.node.res.write(t6);
    return e6.node.res.end();
  }(e5, t4, { ...r4, fetchOptions: { method: s2, body: n2, duplex: o7, ...r4.fetchOptions, headers: i3 } });
}
function getProxyRequestHeaders(e5) {
  const t4 = /* @__PURE__ */ Object.create(null), r4 = getRequestHeaders(e5);
  for (const e6 in r4)
    be3.has(e6) || (t4[e6] = r4[e6]);
  return t4;
}
function fetchWithEvent(e5, t4, r4, n2) {
  return _getFetch(n2?.fetch)(t4, { ...r4, context: r4?.context || e5.context, headers: { ...getProxyRequestHeaders(e5), ...r4?.headers } });
}
function _getFetch(e5) {
  if (e5)
    return e5;
  if (globalThis.fetch)
    return globalThis.fetch;
  throw new Error("fetch is not available. Try importing `node-fetch-native/polyfill` for Node.js.");
}
function rewriteCookieProperty(e5, t4, r4) {
  const n2 = "string" == typeof t4 ? { "*": t4 } : t4;
  return e5.replace(new RegExp(`(;\\s*${r4}=)([^;]+)`, "gi"), (e6, t5, r5) => {
    let o7;
    if (r5 in n2)
      o7 = n2[r5];
    else {
      if (!("*" in n2))
        return e6;
      o7 = n2["*"];
    }
    return o7 ? t5 + o7 : "";
  });
}
function isEvent(e5) {
  return hasProp(e5, "__is_event__");
}
function createEvent(e5, t4) {
  return new H3Event(e5, t4);
}
function defineEventHandler(e5) {
  if ("function" == typeof e5)
    return e5.__is_handler__ = true, e5;
  const t4 = { onRequest: _normalizeArray(e5.onRequest), onBeforeResponse: _normalizeArray(e5.onBeforeResponse) }, _handler = (r4) => async function(e6, t5, r5) {
    if (r5.onRequest) {
      for (const t6 of r5.onRequest)
        if (await t6(e6), e6.handled)
          return;
    }
    const n2 = await t5(e6), o7 = { body: n2 };
    if (r5.onBeforeResponse)
      for (const t6 of r5.onBeforeResponse)
        await t6(e6, o7);
    return o7.body;
  }(r4, e5.handler, t4);
  return _handler.__is_handler__ = true, _handler.__resolve__ = e5.handler.__resolve__, _handler.__websocket__ = e5.websocket, _handler;
}
function _normalizeArray(e5) {
  return e5 ? Array.isArray(e5) ? e5 : [e5] : void 0;
}
function isEventHandler(e5) {
  return hasProp(e5, "__is_handler__");
}
function toEventHandler(e5, t4, r4) {
  return isEventHandler(e5) || console.warn("[h3] Implicit event handler conversion is deprecated. Use `eventHandler()` or `fromNodeMiddleware()` to define event handlers.", r4 && "/" !== r4 ? `
     Route: ${r4}` : "", `
     Handler: ${e5}`), e5;
}
function createApp2(e5 = {}) {
  const t4 = [], r4 = function(e6, t5) {
    const r5 = t5.debug ? 2 : void 0;
    return ve2(async (n3) => {
      n3.node.req.originalUrl = n3.node.req.originalUrl || n3.node.req.url || "/";
      const o8 = n3._path || n3.node.req.url || "/";
      let s3;
      t5.onRequest && await t5.onRequest(n3);
      for (const i3 of e6) {
        if (i3.route.length > 1) {
          if (!o8.startsWith(i3.route))
            continue;
          s3 = o8.slice(i3.route.length) || "/";
        } else
          s3 = o8;
        if (i3.match && !i3.match(s3, n3))
          continue;
        n3._path = s3, n3.node.req.url = s3;
        const e7 = await i3.handler(n3), a3 = void 0 === e7 ? void 0 : await e7;
        if (void 0 !== a3) {
          const e8 = { body: a3 };
          return t5.onBeforeResponse && (n3._onBeforeResponseCalled = true, await t5.onBeforeResponse(n3, e8)), await handleHandlerResponse(n3, e8.body, r5), void (t5.onAfterResponse && (n3._onAfterResponseCalled = true, await t5.onAfterResponse(n3, e8)));
        }
        if (n3.handled)
          return void (t5.onAfterResponse && (n3._onAfterResponseCalled = true, await t5.onAfterResponse(n3, void 0)));
      }
      if (!n3.handled)
        throw createError({ statusCode: 404, statusMessage: `Cannot find any path matching ${n3.path || "/"}.` });
      t5.onAfterResponse && (n3._onAfterResponseCalled = true, await t5.onAfterResponse(n3, void 0));
    });
  }(t4, e5), n2 = function(e6) {
    return async (t5) => {
      let r5;
      for (const n3 of e6) {
        if ("/" === n3.route && !n3.handler.__resolve__)
          continue;
        if (!t5.startsWith(n3.route))
          continue;
        if (r5 = t5.slice(n3.route.length) || "/", n3.match && !n3.match(r5, void 0))
          continue;
        let e7 = { route: n3.route, handler: n3.handler };
        if (e7.handler.__resolve__) {
          const t6 = await e7.handler.__resolve__(r5);
          if (!t6)
            continue;
          e7 = { ...e7, ...t6, route: joinURL(e7.route || "/", t6.route || "/") };
        }
        return e7;
      }
    };
  }(t4);
  r4.__resolve__ = n2;
  const o7 = function(e6) {
    let t5;
    return () => (t5 || (t5 = e6()), t5);
  }(() => {
    return t5 = n2, { ...e5.websocket, async resolve(e6) {
      const { pathname: r5 } = parseURL(e6.url || "/"), n3 = await t5(r5);
      return n3?.handler?.__websocket__ || {};
    } };
    var t5;
  }), s2 = { use: (e6, t5, r5) => use(s2, e6, t5, r5), resolve: n2, handler: r4, stack: t4, options: e5, get websocket() {
    return o7();
  } };
  return s2;
}
function use(e5, t4, r4, n2) {
  if (Array.isArray(t4))
    for (const o7 of t4)
      use(e5, o7, r4, n2);
  else if (Array.isArray(r4))
    for (const o7 of r4)
      use(e5, t4, o7, n2);
  else
    "string" == typeof t4 ? e5.stack.push(normalizeLayer({ ...n2, route: t4, handler: r4 })) : "function" == typeof t4 ? e5.stack.push(normalizeLayer({ ...r4, handler: t4 })) : e5.stack.push(normalizeLayer({ ...t4 }));
  return e5;
}
function normalizeLayer(e5) {
  let t4 = e5.handler;
  return t4.handler && (t4 = t4.handler), e5.lazy ? t4 = lazyEventHandler(t4) : isEventHandler(t4) || (t4 = toEventHandler(t4, 0, e5.route)), { route: withoutTrailingSlash(e5.route), match: e5.match, handler: t4 };
}
function handleHandlerResponse(e5, t4, r4) {
  if (null === t4)
    return function(e6, t5) {
      if (e6.handled)
        return;
      t5 || 200 === e6.node.res.statusCode || (t5 = e6.node.res.statusCode);
      const r5 = sanitizeStatusCode(t5, 204);
      204 === r5 && e6.node.res.removeHeader("content-length"), e6.node.res.writeHead(r5), e6.node.res.end();
    }(e5);
  if (t4) {
    if (n2 = t4, "undefined" != typeof Response && n2 instanceof Response)
      return sendWebResponse(e5, t4);
    if (function(e6) {
      if (!e6 || "object" != typeof e6)
        return false;
      if ("function" == typeof e6.pipe) {
        if ("function" == typeof e6._read)
          return true;
        if ("function" == typeof e6.abort)
          return true;
      }
      return "function" == typeof e6.pipeTo;
    }(t4))
      return sendStream(e5, t4);
    if (t4.buffer)
      return send(e5, t4);
    if (t4.arrayBuffer && "function" == typeof t4.arrayBuffer)
      return t4.arrayBuffer().then((r5) => send(e5, f.from(r5), t4.type));
    if (t4 instanceof Error)
      throw createError(t4);
    if ("function" == typeof t4.end)
      return true;
  }
  var n2;
  const o7 = typeof t4;
  if ("string" === o7)
    return send(e5, t4, pe3.html);
  if ("object" === o7 || "boolean" === o7 || "number" === o7)
    return send(e5, JSON.stringify(t4, void 0, r4), pe3.json);
  if ("bigint" === o7)
    return send(e5, t4.toString(), pe3.json);
  throw createError({ statusCode: 500, statusMessage: `[h3] Cannot send ${o7} as response.` });
}
function toNodeListener(e5) {
  return async function(t4, r4) {
    const n2 = createEvent(t4, r4);
    try {
      await e5.handler(n2);
    } catch (t5) {
      const r5 = createError(t5);
      if (isError(t5) || (r5.unhandled = true), setResponseStatus(n2, r5.statusCode, r5.statusMessage), e5.options.onError && await e5.options.onError(r5, n2), n2.handled)
        return;
      (r5.unhandled || r5.fatal) && console.error("[h3]", r5.fatal ? "[fatal]" : "[unhandled]", r5), e5.options.onBeforeResponse && !n2._onBeforeResponseCalled && await e5.options.onBeforeResponse(n2, { body: r5 }), await function(e6, t6, r6) {
        if (e6.handled)
          return;
        const n3 = isError(t6) ? t6 : createError(t6), o7 = { statusCode: n3.statusCode, statusMessage: n3.statusMessage, stack: [], data: n3.data };
        if (r6 && (o7.stack = (n3.stack || "").split("\n").map((e7) => e7.trim())), e6.handled)
          return;
        setResponseStatus(e6, Number.parseInt(n3.statusCode), n3.statusMessage), e6.node.res.setHeader("content-type", pe3.json), e6.node.res.end(JSON.stringify(o7, void 0, 2));
      }(n2, r5, !!e5.options.debug), e5.options.onAfterResponse && !n2._onAfterResponseCalled && await e5.options.onAfterResponse(n2, { body: r5 });
    }
  };
}
function isPayloadMethod(e5 = "GET") {
  return Ee2.has(e5.toUpperCase());
}
function mergeFetchOptions(e5, t4, r4 = globalThis.Headers) {
  const n2 = { ...t4, ...e5 };
  if (t4?.params && e5?.params && (n2.params = { ...t4?.params, ...e5?.params }), t4?.query && e5?.query && (n2.query = { ...t4?.query, ...e5?.query }), t4?.headers && e5?.headers) {
    n2.headers = new r4(t4?.headers || {});
    for (const [t5, o7] of new r4(e5?.headers || {}))
      n2.headers.set(t5, o7);
  }
  return n2;
}
function createFetch$1(e5 = {}) {
  const { fetch: t4 = globalThis.fetch, Headers: r4 = globalThis.Headers, AbortController: n2 = globalThis.AbortController } = e5;
  async function onError(e6) {
    const t5 = e6.error && "AbortError" === e6.error.name && !e6.options.timeout || false;
    if (false !== e6.options.retry && !t5) {
      let t6;
      t6 = "number" == typeof e6.options.retry ? e6.options.retry : isPayloadMethod(e6.options.method) ? 0 : 1;
      const r6 = e6.response && e6.response.status || 500;
      if (t6 > 0 && (Array.isArray(e6.options.retryStatusCodes) ? e6.options.retryStatusCodes.includes(r6) : xe3.has(r6))) {
        const r7 = e6.options.retryDelay || 0;
        return r7 > 0 && await new Promise((e7) => setTimeout(e7, r7)), $fetchRaw(e6.request, { ...e6.options, retry: t6 - 1 });
      }
    }
    const r5 = function(e7) {
      const t6 = e7.error?.message || e7.error?.toString() || "", r6 = e7.request?.method || e7.options?.method || "GET", n3 = e7.request?.url || String(e7.request) || "/", o7 = `[${r6}] ${JSON.stringify(n3)}`, s2 = e7.response ? `${e7.response.status} ${e7.response.statusText}` : "<no response>", i3 = new FetchError(`${o7}: ${s2}${t6 ? ` ${t6}` : ""}`, e7.error ? { cause: e7.error } : void 0);
      for (const t7 of ["request", "options", "response"])
        Object.defineProperty(i3, t7, { get: () => e7[t7] });
      for (const [t7, r7] of [["data", "_data"], ["status", "status"], ["statusCode", "status"], ["statusText", "statusText"], ["statusMessage", "statusText"]])
        Object.defineProperty(i3, t7, { get: () => e7.response && e7.response[r7] });
      return i3;
    }(e6);
    throw Error.captureStackTrace && Error.captureStackTrace(r5, $fetchRaw), r5;
  }
  const $fetchRaw = async function(o7, s2 = {}) {
    const i3 = { request: o7, options: mergeFetchOptions(s2, e5.defaults, r4), response: void 0, error: void 0 };
    let a3;
    if (i3.options.method = i3.options.method?.toUpperCase(), i3.options.onRequest && await i3.options.onRequest(i3), "string" == typeof i3.request && (i3.options.baseURL && (i3.request = function(e6, t5) {
      if (isEmptyURL(t5) || hasProtocol(e6))
        return e6;
      const r5 = withoutTrailingSlash(t5);
      return e6.startsWith(r5) ? e6 : joinURL(r5, e6);
    }(i3.request, i3.options.baseURL)), (i3.options.query || i3.options.params) && (i3.request = withQuery(i3.request, { ...i3.options.params, ...i3.options.query }))), i3.options.body && isPayloadMethod(i3.options.method) && (!function(e6) {
      if (void 0 === e6)
        return false;
      const t5 = typeof e6;
      return "string" === t5 || "number" === t5 || "boolean" === t5 || null === t5 || "object" === t5 && (!!Array.isArray(e6) || !e6.buffer && (e6.constructor && "Object" === e6.constructor.name || "function" == typeof e6.toJSON));
    }(i3.options.body) ? ("pipeTo" in i3.options.body && "function" == typeof i3.options.body.pipeTo || "function" == typeof i3.options.body.pipe) && ("duplex" in i3.options || (i3.options.duplex = "half")) : (i3.options.body = "string" == typeof i3.options.body ? i3.options.body : JSON.stringify(i3.options.body), i3.options.headers = new r4(i3.options.headers || {}), i3.options.headers.has("content-type") || i3.options.headers.set("content-type", "application/json"), i3.options.headers.has("accept") || i3.options.headers.set("accept", "application/json"))), !i3.options.signal && i3.options.timeout) {
      const e6 = new n2();
      a3 = setTimeout(() => e6.abort(), i3.options.timeout), i3.options.signal = e6.signal;
    }
    try {
      i3.response = await t4(i3.request, i3.options);
    } catch (e6) {
      return i3.error = e6, i3.options.onRequestError && await i3.options.onRequestError(i3), await onError(i3);
    } finally {
      a3 && clearTimeout(a3);
    }
    if (i3.response.body && !ke3.has(i3.response.status) && "HEAD" !== i3.options.method) {
      const e6 = (i3.options.parseResponse ? "json" : i3.options.responseType) || function(e7 = "") {
        if (!e7)
          return "json";
        const t5 = e7.split(";").shift() || "";
        return Ie2.test(t5) ? "json" : Re3.has(t5) || t5.startsWith("text/") ? "text" : "blob";
      }(i3.response.headers.get("content-type") || "");
      switch (e6) {
        case "json": {
          const e7 = await i3.response.text(), t5 = i3.options.parseResponse || destr;
          i3.response._data = t5(e7);
          break;
        }
        case "stream":
          i3.response._data = i3.response.body;
          break;
        default:
          i3.response._data = await i3.response[e6]();
      }
    }
    return i3.options.onResponse && await i3.options.onResponse(i3), !i3.options.ignoreResponseError && i3.response.status >= 400 && i3.response.status < 600 ? (i3.options.onResponseError && await i3.options.onResponseError(i3), await onError(i3)) : i3.response;
  }, $fetch = async function(e6, t5) {
    return (await $fetchRaw(e6, t5))._data;
  };
  return $fetch.raw = $fetchRaw, $fetch.native = (...e6) => t4(...e6), $fetch.create = (t5 = {}) => createFetch$1({ ...e5, defaults: { ...e5.defaults, ...t5 } }), $fetch;
}
function flatHooks(e5, t4 = {}, r4) {
  for (const n2 in e5) {
    const o7 = e5[n2], s2 = r4 ? `${r4}:${n2}` : n2;
    "object" == typeof o7 && null !== o7 ? flatHooks(o7, t4, s2) : "function" == typeof o7 && (t4[s2] = o7);
  }
  return t4;
}
function serialTaskCaller(e5, t4) {
  const r4 = t4.shift(), n2 = Le2(r4);
  return e5.reduce((e6, r5) => e6.then(() => n2.run(() => r5(...t4))), Promise.resolve());
}
function parallelTaskCaller(e5, t4) {
  const r4 = t4.shift(), n2 = Le2(r4);
  return Promise.all(e5.map((e6) => n2.run(() => e6(...t4))));
}
function callEachWith(e5, t4) {
  for (const r4 of [...e5])
    r4(t4);
}
function createHooks() {
  return new Hookable();
}
function klona(e5) {
  if ("object" != typeof e5)
    return e5;
  var t4, r4, n2 = Object.prototype.toString.call(e5);
  if ("[object Object]" === n2) {
    if (e5.constructor !== Object && "function" == typeof e5.constructor)
      for (t4 in r4 = new e5.constructor(), e5)
        e5.hasOwnProperty(t4) && r4[t4] !== e5[t4] && (r4[t4] = klona(e5[t4]));
    else
      for (t4 in r4 = {}, e5)
        "__proto__" === t4 ? Object.defineProperty(r4, t4, { value: klona(e5[t4]), configurable: true, enumerable: true, writable: true }) : r4[t4] = klona(e5[t4]);
    return r4;
  }
  if ("[object Array]" === n2) {
    for (t4 = e5.length, r4 = Array(t4); t4--; )
      r4[t4] = klona(e5[t4]);
    return r4;
  }
  return "[object Set]" === n2 ? (r4 = /* @__PURE__ */ new Set(), e5.forEach(function(e6) {
    r4.add(klona(e6));
  }), r4) : "[object Map]" === n2 ? (r4 = /* @__PURE__ */ new Map(), e5.forEach(function(e6, t5) {
    r4.set(klona(t5), klona(e6));
  }), r4) : "[object Date]" === n2 ? /* @__PURE__ */ new Date(+e5) : "[object RegExp]" === n2 ? ((r4 = new RegExp(e5.source, e5.flags)).lastIndex = e5.lastIndex, r4) : "[object DataView]" === n2 ? new e5.constructor(klona(e5.buffer)) : "[object ArrayBuffer]" === n2 ? e5.slice(0) : "Array]" === n2.slice(-6) ? new e5.constructor(e5) : e5;
}
function isUppercase(e5 = "") {
  if (!Ne2.test(e5))
    return e5 !== e5.toLowerCase();
}
function kebabCase(e5, t4) {
  return e5 ? (Array.isArray(e5) ? e5 : function(e6) {
    const t5 = Me2, r4 = [];
    if (!e6 || "string" != typeof e6)
      return r4;
    let n2, o7, s2 = "";
    for (const i3 of e6) {
      const e7 = t5.includes(i3);
      if (true === e7) {
        r4.push(s2), s2 = "", n2 = void 0;
        continue;
      }
      const a3 = isUppercase(i3);
      if (false === o7) {
        if (false === n2 && true === a3) {
          r4.push(s2), s2 = i3, n2 = a3;
          continue;
        }
        if (true === n2 && false === a3 && s2.length > 1) {
          const e8 = s2.at(-1);
          r4.push(s2.slice(0, Math.max(0, s2.length - 1))), s2 = e8 + i3, n2 = a3;
          continue;
        }
      }
      s2 += i3, n2 = a3, o7 = e7;
    }
    return r4.push(s2), r4;
  }(e5)).map((e6) => e6.toLowerCase()).join(t4) : "";
}
function getEnv(e5, t4) {
  const r4 = (n2 = e5, kebabCase(n2 || "", "_")).toUpperCase();
  var n2;
  return destr(B2.env[t4.prefix + r4] ?? B2.env[t4.altPrefix + r4]);
}
function _isObject(e5) {
  return "object" == typeof e5 && !Array.isArray(e5);
}
function applyEnv(e5, t4, r4 = "") {
  for (const n2 in e5) {
    const o7 = r4 ? `${r4}_${n2}` : n2, s2 = getEnv(o7, t4);
    _isObject(e5[n2]) ? _isObject(s2) ? (e5[n2] = { ...e5[n2], ...s2 }, applyEnv(e5[n2], t4, o7)) : void 0 === s2 ? applyEnv(e5[n2], t4, o7) : e5[n2] = s2 ?? e5[n2] : e5[n2] = s2 ?? e5[n2], t4.envExpansion && "string" == typeof e5[n2] && (e5[n2] = e5[n2].replace(Ue2, (e6, t5) => B2.env[t5] || e6));
  }
  return e5;
}
function useRuntimeConfig2(e5) {
  if (!e5)
    return ze2;
  if (e5.context.nitro.runtimeConfig)
    return e5.context.nitro.runtimeConfig;
  const t4 = klona(He2);
  return applyEnv(t4, qe2), e5.context.nitro.runtimeConfig = t4, t4;
}
function _deepFreeze(e5) {
  const t4 = Object.getOwnPropertyNames(e5);
  for (const r4 of t4) {
    const t5 = e5[r4];
    t5 && "object" == typeof t5 && _deepFreeze(t5);
  }
  return Object.freeze(e5);
}
function asyncCall(e5, ...t4) {
  try {
    return (r4 = e5(...t4)) && "function" == typeof r4.then ? r4 : Promise.resolve(r4);
  } catch (e6) {
    return Promise.reject(e6);
  }
  var r4;
}
function stringify2(e5) {
  if (function(e6) {
    const t4 = typeof e6;
    return null === e6 || "object" !== t4 && "function" !== t4;
  }(e5))
    return String(e5);
  if (function(e6) {
    const t4 = Object.getPrototypeOf(e6);
    return !t4 || t4.isPrototypeOf(Object);
  }(e5) || Array.isArray(e5))
    return JSON.stringify(e5);
  if ("function" == typeof e5.toJSON)
    return stringify2(e5.toJSON());
  throw new Error("[unstorage] Cannot stringify value!");
}
function checkBufferSupport() {
  if (void 0 === typeof f)
    throw new TypeError("[unstorage] Buffer is not supported!");
}
function normalizeKey$1(e5) {
  return e5 ? e5.split("?")[0].replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "") : "";
}
function joinKeys(...e5) {
  return normalizeKey$1(e5.join(":"));
}
function normalizeBaseKey(e5) {
  return (e5 = normalizeKey$1(e5)) ? e5 + ":" : "";
}
function watch2(e5, t4, r4) {
  return e5.watch ? e5.watch((e6, n2) => t4(e6, r4 + n2)) : () => {
  };
}
async function dispose(e5) {
  "function" == typeof e5.dispose && await asyncCall(e5.dispose);
}
function useStorage(e5 = "") {
  return e5 ? function(e6, t4) {
    if (!(t4 = normalizeBaseKey(t4)))
      return e6;
    const r4 = { ...e6 };
    for (const n2 of De2)
      r4[n2] = (r5 = "", ...o7) => e6[n2](t4 + r5, ...o7);
    return r4.getKeys = (r5 = "", ...n2) => e6.getKeys(t4 + r5, ...n2).then((e7) => e7.map((e8) => e8.slice(t4.length))), r4;
  }(Qe2, e5) : Qe2;
}
function getKey(...e5) {
  return e5.length > 0 ? hash(e5, {}) : "";
}
function escapeKey(e5) {
  return String(e5).replace(/\W/g, "");
}
function cloneWithProxy(e5, t4) {
  return new Proxy(e5, { get: (e6, r4, n2) => r4 in t4 ? t4[r4] : Reflect.get(e6, r4, n2), set: (e6, r4, n2, o7) => r4 in t4 ? (t4[r4] = n2, true) : Reflect.set(e6, r4, n2, o7) });
}
function createRouteRulesHandler(e5) {
  return ve2((t4) => {
    const r4 = getRouteRules(t4);
    if (r4.headers && me3(t4, r4.headers), r4.redirect) {
      let e6 = r4.redirect.to;
      if (e6.endsWith("/**")) {
        let n2 = t4.path;
        const o7 = r4.redirect._redirectStripBase;
        o7 && (n2 = withoutBase(n2, o7)), e6 = joinURL(e6.slice(0, -3), n2);
      } else if (t4.path.includes("?")) {
        e6 = withQuery(e6, getQuery$1(t4.path));
      }
      return function(e7, t5, r5 = 302) {
        return e7.node.res.statusCode = sanitizeStatusCode(r5, e7.node.res.statusCode), e7.node.res.setHeader("location", t5), send(e7, `<!DOCTYPE html><html><head><meta http-equiv="refresh" content="0; url=${t5.replace(/"/g, "%22")}"></head></html>`, pe3.html);
      }(t4, e6, r4.redirect.statusCode);
    }
    if (r4.proxy) {
      let n2 = r4.proxy.to;
      if (n2.endsWith("/**")) {
        let e6 = t4.path;
        const o7 = r4.proxy._proxyStripBase;
        o7 && (e6 = withoutBase(e6, o7)), n2 = joinURL(n2.slice(0, -3), e6);
      } else if (t4.path.includes("?")) {
        n2 = withQuery(n2, getQuery$1(t4.path));
      }
      return proxyRequest(t4, n2, { fetch: e5.localFetch, ...r4.proxy });
    }
  });
}
function getRouteRules(e5) {
  return e5.context._nitro = e5.context._nitro || {}, e5.context._nitro.routeRules || (e5.context._nitro.routeRules = getRouteRulesForPath(withoutBase(e5.path.split("?")[0], useRuntimeConfig2().app.baseURL))), e5.context._nitro.routeRules;
}
function getRouteRulesForPath(e5) {
  return te({}, ...Ge2.matchAll(e5).reverse());
}
function hasReqHeader(e5, t4, r4) {
  const n2 = function(e6, t5) {
    return getRequestHeaders(e6)[t5.toLowerCase()];
  }(e5, t4);
  return n2 && "string" == typeof n2 && n2.toLowerCase().includes(r4);
}
function joinHeaders(e5) {
  return Array.isArray(e5) ? e5.join(", ") : String(e5);
}
function normalizeCookieHeader(e5 = "") {
  return splitCookiesString(joinHeaders(e5));
}
function normalizeCookieHeaders(e5) {
  const t4 = new Headers();
  for (const [r4, n2] of e5)
    if ("set-cookie" === r4)
      for (const e6 of normalizeCookieHeader(n2))
        t4.append("set-cookie", e6);
    else
      t4.set(r4, joinHeaders(n2));
  return t4;
}
var e4, t3, r3, n, o6, s, i2, a2, u2, c, f, l, h2, d, p, y2, g, m2, w2, b2, _getEnv, _2, v2, B2, R2, I2, x2, k2, A3, S2, T2, $2, C2, O2, j3, L2, N2, M2, U2, P2, H2, q3, z3, W2, WordArray, D2, K2, F2, Q2, BufferedBlockAlgorithm, Hasher, V2, G2, J2, SHA256, Y2, Z3, X2, ee3, te, re3, ne3, oe3, se3, _Readable, ie3, ae3, ue3, ce3, fe3, Socket, IncomingMessage, ServerResponse, le3, __publicField$2, H3Error, he3, de3, pe3, ye3, ge3, me3, we3, be3, _e3, __publicField, H3Event, ve2, lazyEventHandler, Be2, FetchError, Ee2, Re3, Ie2, xe3, ke3, Ae3, Se2, Te2, $e2, Ce, Oe2, je2, Le2, Hookable, Ne2, Me2, Ue2, Pe3, He2, qe2, ze2, We2, De2, memory, Ke2, normalizeKey2, Fe2, Qe2, Ve2, cachedFunction, cachedEventHandler, Ge2, Je2, errorHandler, _lazy_lFs6nj, Ye2, Ze2, useNitroApp, Xe2, et2, tt2, rt2;
var init_runtime = __esm({
  ".wrangler/tmp/pages-FEt2Fg/chunks/runtime.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    e4 = [];
    t3 = [];
    r3 = "undefined" == typeof Uint8Array ? Array : Uint8Array;
    n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    for (let r4 = 0, o7 = 64; r4 < o7; ++r4)
      e4[r4] = n[r4], t3[n.charCodeAt(r4)] = r4;
    t3["-".charCodeAt(0)] = 62, t3["_".charCodeAt(0)] = 63;
    o6 = "function" == typeof Symbol && "function" == typeof Symbol.for ? Symbol.for("nodejs.util.inspect.custom") : null;
    s = 2147483647;
    Buffer$1.TYPED_ARRAY_SUPPORT = function() {
      try {
        const e5 = new Uint8Array(1), t4 = { foo: function() {
          return 42;
        } };
        return Object.setPrototypeOf(t4, Uint8Array.prototype), Object.setPrototypeOf(e5, t4), 42 === e5.foo();
      } catch {
        return false;
      }
    }(), Buffer$1.TYPED_ARRAY_SUPPORT || "undefined" == typeof console || "function" != typeof console.error || console.error("This environment lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."), Object.defineProperty(Buffer$1.prototype, "parent", { enumerable: true, get: function() {
      if (Buffer$1.isBuffer(this))
        return this.buffer;
    } }), Object.defineProperty(Buffer$1.prototype, "offset", { enumerable: true, get: function() {
      if (Buffer$1.isBuffer(this))
        return this.byteOffset;
    } }), Buffer$1.poolSize = 8192, Buffer$1.from = function(e5, t4, r4) {
      return from(e5, t4, r4);
    }, Object.setPrototypeOf(Buffer$1.prototype, Uint8Array.prototype), Object.setPrototypeOf(Buffer$1, Uint8Array), Buffer$1.alloc = function(e5, t4, r4) {
      return function(e6, t5, r5) {
        return assertSize(e6), e6 <= 0 ? createBuffer2(e6) : void 0 !== t5 ? "string" == typeof r5 ? createBuffer2(e6).fill(t5, r5) : createBuffer2(e6).fill(t5) : createBuffer2(e6);
      }(e5, t4, r4);
    }, Buffer$1.allocUnsafe = function(e5) {
      return allocUnsafe(e5);
    }, Buffer$1.allocUnsafeSlow = function(e5) {
      return allocUnsafe(e5);
    }, Buffer$1.isBuffer = function(e5) {
      return null != e5 && true === e5._isBuffer && e5 !== Buffer$1.prototype;
    }, Buffer$1.compare = function(e5, t4) {
      if (isInstance(e5, Uint8Array) && (e5 = Buffer$1.from(e5, e5.offset, e5.byteLength)), isInstance(t4, Uint8Array) && (t4 = Buffer$1.from(t4, t4.offset, t4.byteLength)), !Buffer$1.isBuffer(e5) || !Buffer$1.isBuffer(t4))
        throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
      if (e5 === t4)
        return 0;
      let r4 = e5.length, n2 = t4.length;
      for (let o7 = 0, s2 = Math.min(r4, n2); o7 < s2; ++o7)
        if (e5[o7] !== t4[o7]) {
          r4 = e5[o7], n2 = t4[o7];
          break;
        }
      return r4 < n2 ? -1 : n2 < r4 ? 1 : 0;
    }, Buffer$1.isEncoding = function(e5) {
      switch (String(e5).toLowerCase()) {
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
    }, Buffer$1.concat = function(e5, t4) {
      if (!Array.isArray(e5))
        throw new TypeError('"list" argument must be an Array of Buffers');
      if (0 === e5.length)
        return Buffer$1.alloc(0);
      let r4;
      if (void 0 === t4)
        for (t4 = 0, r4 = 0; r4 < e5.length; ++r4)
          t4 += e5[r4].length;
      const n2 = Buffer$1.allocUnsafe(t4);
      let o7 = 0;
      for (r4 = 0; r4 < e5.length; ++r4) {
        let t5 = e5[r4];
        if (isInstance(t5, Uint8Array))
          o7 + t5.length > n2.length ? (Buffer$1.isBuffer(t5) || (t5 = Buffer$1.from(t5.buffer, t5.byteOffset, t5.byteLength)), t5.copy(n2, o7)) : Uint8Array.prototype.set.call(n2, t5, o7);
        else {
          if (!Buffer$1.isBuffer(t5))
            throw new TypeError('"list" argument must be an Array of Buffers');
          t5.copy(n2, o7);
        }
        o7 += t5.length;
      }
      return n2;
    }, Buffer$1.byteLength = byteLength, Buffer$1.prototype._isBuffer = true, Buffer$1.prototype.swap16 = function() {
      const e5 = this.length;
      if (e5 % 2 != 0)
        throw new RangeError("Buffer size must be a multiple of 16-bits");
      for (let t4 = 0; t4 < e5; t4 += 2)
        swap(this, t4, t4 + 1);
      return this;
    }, Buffer$1.prototype.swap32 = function() {
      const e5 = this.length;
      if (e5 % 4 != 0)
        throw new RangeError("Buffer size must be a multiple of 32-bits");
      for (let t4 = 0; t4 < e5; t4 += 4)
        swap(this, t4, t4 + 3), swap(this, t4 + 1, t4 + 2);
      return this;
    }, Buffer$1.prototype.swap64 = function() {
      const e5 = this.length;
      if (e5 % 8 != 0)
        throw new RangeError("Buffer size must be a multiple of 64-bits");
      for (let t4 = 0; t4 < e5; t4 += 8)
        swap(this, t4, t4 + 7), swap(this, t4 + 1, t4 + 6), swap(this, t4 + 2, t4 + 5), swap(this, t4 + 3, t4 + 4);
      return this;
    }, Buffer$1.prototype.toString = function() {
      const e5 = this.length;
      return 0 === e5 ? "" : 0 === arguments.length ? utf8Slice(this, 0, e5) : Reflect.apply(slowToString, this, arguments);
    }, Buffer$1.prototype.toLocaleString = Buffer$1.prototype.toString, Buffer$1.prototype.equals = function(e5) {
      if (!Buffer$1.isBuffer(e5))
        throw new TypeError("Argument must be a Buffer");
      return this === e5 || 0 === Buffer$1.compare(this, e5);
    }, Buffer$1.prototype.inspect = function() {
      let e5 = "";
      return e5 = this.toString("hex", 0, 50).replace(/(.{2})/g, "$1 ").trim(), this.length > 50 && (e5 += " ... "), "<Buffer " + e5 + ">";
    }, o6 && (Buffer$1.prototype[o6] = Buffer$1.prototype.inspect), Buffer$1.prototype.compare = function(e5, t4, r4, n2, o7) {
      if (isInstance(e5, Uint8Array) && (e5 = Buffer$1.from(e5, e5.offset, e5.byteLength)), !Buffer$1.isBuffer(e5))
        throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof e5);
      if (void 0 === t4 && (t4 = 0), void 0 === r4 && (r4 = e5 ? e5.length : 0), void 0 === n2 && (n2 = 0), void 0 === o7 && (o7 = this.length), t4 < 0 || r4 > e5.length || n2 < 0 || o7 > this.length)
        throw new RangeError("out of range index");
      if (n2 >= o7 && t4 >= r4)
        return 0;
      if (n2 >= o7)
        return -1;
      if (t4 >= r4)
        return 1;
      if (this === e5)
        return 0;
      let s2 = (o7 >>>= 0) - (n2 >>>= 0), i3 = (r4 >>>= 0) - (t4 >>>= 0);
      const a3 = Math.min(s2, i3), u3 = this.slice(n2, o7), c2 = e5.slice(t4, r4);
      for (let e6 = 0; e6 < a3; ++e6)
        if (u3[e6] !== c2[e6]) {
          s2 = u3[e6], i3 = c2[e6];
          break;
        }
      return s2 < i3 ? -1 : i3 < s2 ? 1 : 0;
    }, Buffer$1.prototype.includes = function(e5, t4, r4) {
      return -1 !== this.indexOf(e5, t4, r4);
    }, Buffer$1.prototype.indexOf = function(e5, t4, r4) {
      return bidirectionalIndexOf(this, e5, t4, r4, true);
    }, Buffer$1.prototype.lastIndexOf = function(e5, t4, r4) {
      return bidirectionalIndexOf(this, e5, t4, r4, false);
    }, Buffer$1.prototype.write = function(e5, t4, r4, n2) {
      if (void 0 === t4)
        n2 = "utf8", r4 = this.length, t4 = 0;
      else if (void 0 === r4 && "string" == typeof t4)
        n2 = t4, r4 = this.length, t4 = 0;
      else {
        if (!Number.isFinite(t4))
          throw new TypeError("Buffer.write(string, encoding, offset[, length]) is no longer supported");
        t4 >>>= 0, Number.isFinite(r4) ? (r4 >>>= 0, void 0 === n2 && (n2 = "utf8")) : (n2 = r4, r4 = void 0);
      }
      const o7 = this.length - t4;
      if ((void 0 === r4 || r4 > o7) && (r4 = o7), e5.length > 0 && (r4 < 0 || t4 < 0) || t4 > this.length)
        throw new RangeError("Attempt to write outside buffer bounds");
      n2 || (n2 = "utf8");
      let s2 = false;
      for (; ; )
        switch (n2) {
          case "hex":
            return hexWrite(this, e5, t4, r4);
          case "utf8":
          case "utf-8":
            return utf8Write(this, e5, t4, r4);
          case "ascii":
          case "latin1":
          case "binary":
            return asciiWrite(this, e5, t4, r4);
          case "base64":
            return base64Write(this, e5, t4, r4);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return ucs2Write(this, e5, t4, r4);
          default:
            if (s2)
              throw new TypeError("Unknown encoding: " + n2);
            n2 = ("" + n2).toLowerCase(), s2 = true;
        }
    }, Buffer$1.prototype.toJSON = function() {
      return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) };
    };
    i2 = 4096;
    Buffer$1.prototype.slice = function(e5, t4) {
      const r4 = this.length;
      (e5 = Math.trunc(e5)) < 0 ? (e5 += r4) < 0 && (e5 = 0) : e5 > r4 && (e5 = r4), (t4 = void 0 === t4 ? r4 : Math.trunc(t4)) < 0 ? (t4 += r4) < 0 && (t4 = 0) : t4 > r4 && (t4 = r4), t4 < e5 && (t4 = e5);
      const n2 = this.subarray(e5, t4);
      return Object.setPrototypeOf(n2, Buffer$1.prototype), n2;
    }, Buffer$1.prototype.readUintLE = Buffer$1.prototype.readUIntLE = function(e5, t4, r4) {
      e5 >>>= 0, t4 >>>= 0, r4 || checkOffset(e5, t4, this.length);
      let n2 = this[e5], o7 = 1, s2 = 0;
      for (; ++s2 < t4 && (o7 *= 256); )
        n2 += this[e5 + s2] * o7;
      return n2;
    }, Buffer$1.prototype.readUintBE = Buffer$1.prototype.readUIntBE = function(e5, t4, r4) {
      e5 >>>= 0, t4 >>>= 0, r4 || checkOffset(e5, t4, this.length);
      let n2 = this[e5 + --t4], o7 = 1;
      for (; t4 > 0 && (o7 *= 256); )
        n2 += this[e5 + --t4] * o7;
      return n2;
    }, Buffer$1.prototype.readUint8 = Buffer$1.prototype.readUInt8 = function(e5, t4) {
      return e5 >>>= 0, t4 || checkOffset(e5, 1, this.length), this[e5];
    }, Buffer$1.prototype.readUint16LE = Buffer$1.prototype.readUInt16LE = function(e5, t4) {
      return e5 >>>= 0, t4 || checkOffset(e5, 2, this.length), this[e5] | this[e5 + 1] << 8;
    }, Buffer$1.prototype.readUint16BE = Buffer$1.prototype.readUInt16BE = function(e5, t4) {
      return e5 >>>= 0, t4 || checkOffset(e5, 2, this.length), this[e5] << 8 | this[e5 + 1];
    }, Buffer$1.prototype.readUint32LE = Buffer$1.prototype.readUInt32LE = function(e5, t4) {
      return e5 >>>= 0, t4 || checkOffset(e5, 4, this.length), (this[e5] | this[e5 + 1] << 8 | this[e5 + 2] << 16) + 16777216 * this[e5 + 3];
    }, Buffer$1.prototype.readUint32BE = Buffer$1.prototype.readUInt32BE = function(e5, t4) {
      return e5 >>>= 0, t4 || checkOffset(e5, 4, this.length), 16777216 * this[e5] + (this[e5 + 1] << 16 | this[e5 + 2] << 8 | this[e5 + 3]);
    }, Buffer$1.prototype.readBigUInt64LE = defineBigIntMethod(function(e5) {
      validateNumber(e5 >>>= 0, "offset");
      const t4 = this[e5], r4 = this[e5 + 7];
      void 0 !== t4 && void 0 !== r4 || boundsError(e5, this.length - 8);
      const n2 = t4 + 256 * this[++e5] + 65536 * this[++e5] + this[++e5] * 2 ** 24, o7 = this[++e5] + 256 * this[++e5] + 65536 * this[++e5] + r4 * 2 ** 24;
      return BigInt(n2) + (BigInt(o7) << BigInt(32));
    }), Buffer$1.prototype.readBigUInt64BE = defineBigIntMethod(function(e5) {
      validateNumber(e5 >>>= 0, "offset");
      const t4 = this[e5], r4 = this[e5 + 7];
      void 0 !== t4 && void 0 !== r4 || boundsError(e5, this.length - 8);
      const n2 = t4 * 2 ** 24 + 65536 * this[++e5] + 256 * this[++e5] + this[++e5], o7 = this[++e5] * 2 ** 24 + 65536 * this[++e5] + 256 * this[++e5] + r4;
      return (BigInt(n2) << BigInt(32)) + BigInt(o7);
    }), Buffer$1.prototype.readIntLE = function(e5, t4, r4) {
      e5 >>>= 0, t4 >>>= 0, r4 || checkOffset(e5, t4, this.length);
      let n2 = this[e5], o7 = 1, s2 = 0;
      for (; ++s2 < t4 && (o7 *= 256); )
        n2 += this[e5 + s2] * o7;
      return o7 *= 128, n2 >= o7 && (n2 -= Math.pow(2, 8 * t4)), n2;
    }, Buffer$1.prototype.readIntBE = function(e5, t4, r4) {
      e5 >>>= 0, t4 >>>= 0, r4 || checkOffset(e5, t4, this.length);
      let n2 = t4, o7 = 1, s2 = this[e5 + --n2];
      for (; n2 > 0 && (o7 *= 256); )
        s2 += this[e5 + --n2] * o7;
      return o7 *= 128, s2 >= o7 && (s2 -= Math.pow(2, 8 * t4)), s2;
    }, Buffer$1.prototype.readInt8 = function(e5, t4) {
      return e5 >>>= 0, t4 || checkOffset(e5, 1, this.length), 128 & this[e5] ? -1 * (255 - this[e5] + 1) : this[e5];
    }, Buffer$1.prototype.readInt16LE = function(e5, t4) {
      e5 >>>= 0, t4 || checkOffset(e5, 2, this.length);
      const r4 = this[e5] | this[e5 + 1] << 8;
      return 32768 & r4 ? 4294901760 | r4 : r4;
    }, Buffer$1.prototype.readInt16BE = function(e5, t4) {
      e5 >>>= 0, t4 || checkOffset(e5, 2, this.length);
      const r4 = this[e5 + 1] | this[e5] << 8;
      return 32768 & r4 ? 4294901760 | r4 : r4;
    }, Buffer$1.prototype.readInt32LE = function(e5, t4) {
      return e5 >>>= 0, t4 || checkOffset(e5, 4, this.length), this[e5] | this[e5 + 1] << 8 | this[e5 + 2] << 16 | this[e5 + 3] << 24;
    }, Buffer$1.prototype.readInt32BE = function(e5, t4) {
      return e5 >>>= 0, t4 || checkOffset(e5, 4, this.length), this[e5] << 24 | this[e5 + 1] << 16 | this[e5 + 2] << 8 | this[e5 + 3];
    }, Buffer$1.prototype.readBigInt64LE = defineBigIntMethod(function(e5) {
      validateNumber(e5 >>>= 0, "offset");
      const t4 = this[e5], r4 = this[e5 + 7];
      void 0 !== t4 && void 0 !== r4 || boundsError(e5, this.length - 8);
      const n2 = this[e5 + 4] + 256 * this[e5 + 5] + 65536 * this[e5 + 6] + (r4 << 24);
      return (BigInt(n2) << BigInt(32)) + BigInt(t4 + 256 * this[++e5] + 65536 * this[++e5] + this[++e5] * 2 ** 24);
    }), Buffer$1.prototype.readBigInt64BE = defineBigIntMethod(function(e5) {
      validateNumber(e5 >>>= 0, "offset");
      const t4 = this[e5], r4 = this[e5 + 7];
      void 0 !== t4 && void 0 !== r4 || boundsError(e5, this.length - 8);
      const n2 = (t4 << 24) + 65536 * this[++e5] + 256 * this[++e5] + this[++e5];
      return (BigInt(n2) << BigInt(32)) + BigInt(this[++e5] * 2 ** 24 + 65536 * this[++e5] + 256 * this[++e5] + r4);
    }), Buffer$1.prototype.readFloatLE = function(e5, t4) {
      return e5 >>>= 0, t4 || checkOffset(e5, 4, this.length), read(this, e5, true, 23, 4);
    }, Buffer$1.prototype.readFloatBE = function(e5, t4) {
      return e5 >>>= 0, t4 || checkOffset(e5, 4, this.length), read(this, e5, false, 23, 4);
    }, Buffer$1.prototype.readDoubleLE = function(e5, t4) {
      return e5 >>>= 0, t4 || checkOffset(e5, 8, this.length), read(this, e5, true, 52, 8);
    }, Buffer$1.prototype.readDoubleBE = function(e5, t4) {
      return e5 >>>= 0, t4 || checkOffset(e5, 8, this.length), read(this, e5, false, 52, 8);
    }, Buffer$1.prototype.writeUintLE = Buffer$1.prototype.writeUIntLE = function(e5, t4, r4, n2) {
      if (e5 = +e5, t4 >>>= 0, r4 >>>= 0, !n2) {
        checkInt(this, e5, t4, r4, Math.pow(2, 8 * r4) - 1, 0);
      }
      let o7 = 1, s2 = 0;
      for (this[t4] = 255 & e5; ++s2 < r4 && (o7 *= 256); )
        this[t4 + s2] = e5 / o7 & 255;
      return t4 + r4;
    }, Buffer$1.prototype.writeUintBE = Buffer$1.prototype.writeUIntBE = function(e5, t4, r4, n2) {
      if (e5 = +e5, t4 >>>= 0, r4 >>>= 0, !n2) {
        checkInt(this, e5, t4, r4, Math.pow(2, 8 * r4) - 1, 0);
      }
      let o7 = r4 - 1, s2 = 1;
      for (this[t4 + o7] = 255 & e5; --o7 >= 0 && (s2 *= 256); )
        this[t4 + o7] = e5 / s2 & 255;
      return t4 + r4;
    }, Buffer$1.prototype.writeUint8 = Buffer$1.prototype.writeUInt8 = function(e5, t4, r4) {
      return e5 = +e5, t4 >>>= 0, r4 || checkInt(this, e5, t4, 1, 255, 0), this[t4] = 255 & e5, t4 + 1;
    }, Buffer$1.prototype.writeUint16LE = Buffer$1.prototype.writeUInt16LE = function(e5, t4, r4) {
      return e5 = +e5, t4 >>>= 0, r4 || checkInt(this, e5, t4, 2, 65535, 0), this[t4] = 255 & e5, this[t4 + 1] = e5 >>> 8, t4 + 2;
    }, Buffer$1.prototype.writeUint16BE = Buffer$1.prototype.writeUInt16BE = function(e5, t4, r4) {
      return e5 = +e5, t4 >>>= 0, r4 || checkInt(this, e5, t4, 2, 65535, 0), this[t4] = e5 >>> 8, this[t4 + 1] = 255 & e5, t4 + 2;
    }, Buffer$1.prototype.writeUint32LE = Buffer$1.prototype.writeUInt32LE = function(e5, t4, r4) {
      return e5 = +e5, t4 >>>= 0, r4 || checkInt(this, e5, t4, 4, 4294967295, 0), this[t4 + 3] = e5 >>> 24, this[t4 + 2] = e5 >>> 16, this[t4 + 1] = e5 >>> 8, this[t4] = 255 & e5, t4 + 4;
    }, Buffer$1.prototype.writeUint32BE = Buffer$1.prototype.writeUInt32BE = function(e5, t4, r4) {
      return e5 = +e5, t4 >>>= 0, r4 || checkInt(this, e5, t4, 4, 4294967295, 0), this[t4] = e5 >>> 24, this[t4 + 1] = e5 >>> 16, this[t4 + 2] = e5 >>> 8, this[t4 + 3] = 255 & e5, t4 + 4;
    }, Buffer$1.prototype.writeBigUInt64LE = defineBigIntMethod(function(e5, t4 = 0) {
      return wrtBigUInt64LE(this, e5, t4, BigInt(0), BigInt("0xffffffffffffffff"));
    }), Buffer$1.prototype.writeBigUInt64BE = defineBigIntMethod(function(e5, t4 = 0) {
      return wrtBigUInt64BE(this, e5, t4, BigInt(0), BigInt("0xffffffffffffffff"));
    }), Buffer$1.prototype.writeIntLE = function(e5, t4, r4, n2) {
      if (e5 = +e5, t4 >>>= 0, !n2) {
        const n3 = Math.pow(2, 8 * r4 - 1);
        checkInt(this, e5, t4, r4, n3 - 1, -n3);
      }
      let o7 = 0, s2 = 1, i3 = 0;
      for (this[t4] = 255 & e5; ++o7 < r4 && (s2 *= 256); )
        e5 < 0 && 0 === i3 && 0 !== this[t4 + o7 - 1] && (i3 = 1), this[t4 + o7] = Math.trunc(e5 / s2) - i3 & 255;
      return t4 + r4;
    }, Buffer$1.prototype.writeIntBE = function(e5, t4, r4, n2) {
      if (e5 = +e5, t4 >>>= 0, !n2) {
        const n3 = Math.pow(2, 8 * r4 - 1);
        checkInt(this, e5, t4, r4, n3 - 1, -n3);
      }
      let o7 = r4 - 1, s2 = 1, i3 = 0;
      for (this[t4 + o7] = 255 & e5; --o7 >= 0 && (s2 *= 256); )
        e5 < 0 && 0 === i3 && 0 !== this[t4 + o7 + 1] && (i3 = 1), this[t4 + o7] = Math.trunc(e5 / s2) - i3 & 255;
      return t4 + r4;
    }, Buffer$1.prototype.writeInt8 = function(e5, t4, r4) {
      return e5 = +e5, t4 >>>= 0, r4 || checkInt(this, e5, t4, 1, 127, -128), e5 < 0 && (e5 = 255 + e5 + 1), this[t4] = 255 & e5, t4 + 1;
    }, Buffer$1.prototype.writeInt16LE = function(e5, t4, r4) {
      return e5 = +e5, t4 >>>= 0, r4 || checkInt(this, e5, t4, 2, 32767, -32768), this[t4] = 255 & e5, this[t4 + 1] = e5 >>> 8, t4 + 2;
    }, Buffer$1.prototype.writeInt16BE = function(e5, t4, r4) {
      return e5 = +e5, t4 >>>= 0, r4 || checkInt(this, e5, t4, 2, 32767, -32768), this[t4] = e5 >>> 8, this[t4 + 1] = 255 & e5, t4 + 2;
    }, Buffer$1.prototype.writeInt32LE = function(e5, t4, r4) {
      return e5 = +e5, t4 >>>= 0, r4 || checkInt(this, e5, t4, 4, 2147483647, -2147483648), this[t4] = 255 & e5, this[t4 + 1] = e5 >>> 8, this[t4 + 2] = e5 >>> 16, this[t4 + 3] = e5 >>> 24, t4 + 4;
    }, Buffer$1.prototype.writeInt32BE = function(e5, t4, r4) {
      return e5 = +e5, t4 >>>= 0, r4 || checkInt(this, e5, t4, 4, 2147483647, -2147483648), e5 < 0 && (e5 = 4294967295 + e5 + 1), this[t4] = e5 >>> 24, this[t4 + 1] = e5 >>> 16, this[t4 + 2] = e5 >>> 8, this[t4 + 3] = 255 & e5, t4 + 4;
    }, Buffer$1.prototype.writeBigInt64LE = defineBigIntMethod(function(e5, t4 = 0) {
      return wrtBigUInt64LE(this, e5, t4, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
    }), Buffer$1.prototype.writeBigInt64BE = defineBigIntMethod(function(e5, t4 = 0) {
      return wrtBigUInt64BE(this, e5, t4, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
    }), Buffer$1.prototype.writeFloatLE = function(e5, t4, r4) {
      return writeFloat(this, e5, t4, true, r4);
    }, Buffer$1.prototype.writeFloatBE = function(e5, t4, r4) {
      return writeFloat(this, e5, t4, false, r4);
    }, Buffer$1.prototype.writeDoubleLE = function(e5, t4, r4) {
      return writeDouble(this, e5, t4, true, r4);
    }, Buffer$1.prototype.writeDoubleBE = function(e5, t4, r4) {
      return writeDouble(this, e5, t4, false, r4);
    }, Buffer$1.prototype.copy = function(e5, t4, r4, n2) {
      if (!Buffer$1.isBuffer(e5))
        throw new TypeError("argument should be a Buffer");
      if (r4 || (r4 = 0), n2 || 0 === n2 || (n2 = this.length), t4 >= e5.length && (t4 = e5.length), t4 || (t4 = 0), n2 > 0 && n2 < r4 && (n2 = r4), n2 === r4)
        return 0;
      if (0 === e5.length || 0 === this.length)
        return 0;
      if (t4 < 0)
        throw new RangeError("targetStart out of bounds");
      if (r4 < 0 || r4 >= this.length)
        throw new RangeError("Index out of range");
      if (n2 < 0)
        throw new RangeError("sourceEnd out of bounds");
      n2 > this.length && (n2 = this.length), e5.length - t4 < n2 - r4 && (n2 = e5.length - t4 + r4);
      const o7 = n2 - r4;
      return this === e5 && "function" == typeof Uint8Array.prototype.copyWithin ? this.copyWithin(t4, r4, n2) : Uint8Array.prototype.set.call(e5, this.subarray(r4, n2), t4), o7;
    }, Buffer$1.prototype.fill = function(e5, t4, r4, n2) {
      if ("string" == typeof e5) {
        if ("string" == typeof t4 ? (n2 = t4, t4 = 0, r4 = this.length) : "string" == typeof r4 && (n2 = r4, r4 = this.length), void 0 !== n2 && "string" != typeof n2)
          throw new TypeError("encoding must be a string");
        if ("string" == typeof n2 && !Buffer$1.isEncoding(n2))
          throw new TypeError("Unknown encoding: " + n2);
        if (1 === e5.length) {
          const t5 = e5.charCodeAt(0);
          ("utf8" === n2 && t5 < 128 || "latin1" === n2) && (e5 = t5);
        }
      } else
        "number" == typeof e5 ? e5 &= 255 : "boolean" == typeof e5 && (e5 = Number(e5));
      if (t4 < 0 || this.length < t4 || this.length < r4)
        throw new RangeError("Out of range index");
      if (r4 <= t4)
        return this;
      let o7;
      if (t4 >>>= 0, r4 = void 0 === r4 ? this.length : r4 >>> 0, e5 || (e5 = 0), "number" == typeof e5)
        for (o7 = t4; o7 < r4; ++o7)
          this[o7] = e5;
      else {
        const s2 = Buffer$1.isBuffer(e5) ? e5 : Buffer$1.from(e5, n2), i3 = s2.length;
        if (0 === i3)
          throw new TypeError('The value "' + e5 + '" is invalid for argument "value"');
        for (o7 = 0; o7 < r4 - t4; ++o7)
          this[o7 + t4] = s2[o7 % i3];
      }
      return this;
    };
    a2 = {};
    E2("ERR_BUFFER_OUT_OF_BOUNDS", function(e5) {
      return e5 ? `${e5} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
    }, RangeError), E2("ERR_INVALID_ARG_TYPE", function(e5, t4) {
      return `The "${e5}" argument must be of type number. Received type ${typeof t4}`;
    }, TypeError), E2("ERR_OUT_OF_RANGE", function(e5, t4, r4) {
      let n2 = `The value of "${e5}" is out of range.`, o7 = r4;
      return Number.isInteger(r4) && Math.abs(r4) > 2 ** 32 ? o7 = addNumericalSeparator(String(r4)) : "bigint" == typeof r4 && (o7 = String(r4), (r4 > BigInt(2) ** BigInt(32) || r4 < -(BigInt(2) ** BigInt(32))) && (o7 = addNumericalSeparator(o7)), o7 += "n"), n2 += ` It must be ${t4}. Received ${o7}`, n2;
    }, RangeError);
    u2 = /[^\w+/-]/g;
    c = function() {
      const e5 = "0123456789abcdef", t4 = Array.from({ length: 256 });
      for (let r4 = 0; r4 < 16; ++r4) {
        const n2 = 16 * r4;
        for (let o7 = 0; o7 < 16; ++o7)
          t4[n2 + o7] = e5[r4] + e5[o7];
      }
      return t4;
    }();
    f = globalThis.Buffer || Buffer$1;
    notImplemented("buffer.resolveObjectURL"), notImplemented("buffer.transcode"), notImplemented("buffer.isUtf8"), notImplemented("buffer.isAscii");
    l = {};
    !function() {
      try {
        h2 = "function" == typeof setTimeout ? setTimeout : defaultSetTimeout;
      } catch {
        h2 = defaultSetTimeout;
      }
      try {
        d = "function" == typeof clearTimeout ? clearTimeout : defaultClearTimeout;
      } catch {
        d = defaultClearTimeout;
      }
    }();
    y2 = [];
    g = false;
    m2 = -1;
    l.nextTick = function(e5) {
      const t4 = Array.from({ length: arguments.length - 1 });
      if (arguments.length > 1)
        for (let e6 = 1; e6 < arguments.length; e6++)
          t4[e6 - 1] = arguments[e6];
      y2.push(new Item(e5, t4)), 1 !== y2.length || g || runTimeout(drainQueue);
    }, Item.prototype.run = function() {
      this.fun.apply(null, this.array);
    }, l.title = "unenv";
    w2 = /* @__PURE__ */ Object.create(null);
    b2 = globalThis.process?.env;
    _getEnv = (e5) => b2 || globalThis.__env__ || (e5 ? w2 : globalThis);
    l.env = new Proxy(w2, { get: (e5, t4) => _getEnv()[t4] ?? w2[t4], has: (e5, t4) => t4 in _getEnv() || t4 in w2, set: (e5, t4, r4) => (_getEnv(true)[t4] = r4, true), deleteProperty(e5, t4) {
      delete _getEnv(true)[t4];
    }, ownKeys() {
      const e5 = _getEnv();
      return Object.keys(e5);
    } }), l.argv = [], l.version = "", l.versions = {}, l.on = noop, l.addListener = noop, l.once = noop, l.off = noop, l.removeListener = noop, l.removeAllListeners = noop, l.emit = noop, l.prependListener = noop, l.prependOnceListener = noop, l.listeners = function(e5) {
      return [];
    }, l.binding = function(e5) {
      throw new Error("[unenv] process.binding is not supported");
    };
    _2 = "/";
    l.cwd = function() {
      return _2;
    }, l.chdir = function(e5) {
      _2 = e5;
    }, l.umask = function() {
      return 0;
    };
    v2 = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof global ? global : {};
    v2.process = v2.process || l;
    B2 = v2.process;
    R2 = /#/g;
    I2 = /&/g;
    x2 = /\//g;
    k2 = /=/g;
    A3 = /\+/g;
    S2 = /%5e/gi;
    T2 = /%60/gi;
    $2 = /%7c/gi;
    C2 = /%20/gi;
    O2 = /^[\s\w\0+.-]{2,}:([/\\]{1,2})/;
    j3 = /^[\s\w\0+.-]{2,}:([/\\]{2})?/;
    L2 = /^([/\\]\s*){2,}[^/\\]/;
    N2 = /^[\s\0]*(blob|data|javascript|vbscript):$/i;
    M2 = /\/$|\/\?|\/#/;
    U2 = /^\.?\//;
    P2 = Symbol.for("ufo:protocolRelative");
    H2 = Object.freeze({ ignoreUnknown: false, respectType: false, respectFunctionNames: false, respectFunctionProperties: false, unorderedObjects: true, unorderedArrays: false, unorderedSets: false, excludeKeys: void 0, excludeValues: void 0, replacer: void 0 });
    q3 = Object.freeze(["prototype", "__proto__", "constructor"]);
    z3 = "[native code] }";
    W2 = z3.length;
    WordArray = class {
      constructor(e5, t4) {
        e5 = this.words = e5 || [], this.sigBytes = void 0 === t4 ? 4 * e5.length : t4;
      }
      toString(e5) {
        return (e5 || D2).stringify(this);
      }
      concat(e5) {
        if (this.clamp(), this.sigBytes % 4)
          for (let t4 = 0; t4 < e5.sigBytes; t4++) {
            const r4 = e5.words[t4 >>> 2] >>> 24 - t4 % 4 * 8 & 255;
            this.words[this.sigBytes + t4 >>> 2] |= r4 << 24 - (this.sigBytes + t4) % 4 * 8;
          }
        else
          for (let t4 = 0; t4 < e5.sigBytes; t4 += 4)
            this.words[this.sigBytes + t4 >>> 2] = e5.words[t4 >>> 2];
        return this.sigBytes += e5.sigBytes, this;
      }
      clamp() {
        this.words[this.sigBytes >>> 2] &= 4294967295 << 32 - this.sigBytes % 4 * 8, this.words.length = Math.ceil(this.sigBytes / 4);
      }
      clone() {
        return new WordArray([...this.words]);
      }
    };
    D2 = { stringify(e5) {
      const t4 = [];
      for (let r4 = 0; r4 < e5.sigBytes; r4++) {
        const n2 = e5.words[r4 >>> 2] >>> 24 - r4 % 4 * 8 & 255;
        t4.push((n2 >>> 4).toString(16), (15 & n2).toString(16));
      }
      return t4.join("");
    } };
    K2 = { stringify(e5) {
      const t4 = [];
      for (let r4 = 0; r4 < e5.sigBytes; r4 += 3) {
        const n2 = (e5.words[r4 >>> 2] >>> 24 - r4 % 4 * 8 & 255) << 16 | (e5.words[r4 + 1 >>> 2] >>> 24 - (r4 + 1) % 4 * 8 & 255) << 8 | e5.words[r4 + 2 >>> 2] >>> 24 - (r4 + 2) % 4 * 8 & 255;
        for (let o7 = 0; o7 < 4 && 8 * r4 + 6 * o7 < 8 * e5.sigBytes; o7++)
          t4.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(n2 >>> 6 * (3 - o7) & 63));
      }
      return t4.join("");
    } };
    F2 = { parse(e5) {
      const t4 = e5.length, r4 = [];
      for (let n2 = 0; n2 < t4; n2++)
        r4[n2 >>> 2] |= (255 & e5.charCodeAt(n2)) << 24 - n2 % 4 * 8;
      return new WordArray(r4, t4);
    } };
    Q2 = { parse: (e5) => F2.parse(unescape(encodeURIComponent(e5))) };
    BufferedBlockAlgorithm = class {
      constructor() {
        this._data = new WordArray(), this._nDataBytes = 0, this._minBufferSize = 0, this.blockSize = 16;
      }
      reset() {
        this._data = new WordArray(), this._nDataBytes = 0;
      }
      _append(e5) {
        "string" == typeof e5 && (e5 = Q2.parse(e5)), this._data.concat(e5), this._nDataBytes += e5.sigBytes;
      }
      _doProcessBlock(e5, t4) {
      }
      _process(e5) {
        let t4, r4 = this._data.sigBytes / (4 * this.blockSize);
        r4 = e5 ? Math.ceil(r4) : Math.max((0 | r4) - this._minBufferSize, 0);
        const n2 = r4 * this.blockSize, o7 = Math.min(4 * n2, this._data.sigBytes);
        if (n2) {
          for (let e6 = 0; e6 < n2; e6 += this.blockSize)
            this._doProcessBlock(this._data.words, e6);
          t4 = this._data.words.splice(0, n2), this._data.sigBytes -= o7;
        }
        return new WordArray(t4, o7);
      }
    };
    Hasher = class extends BufferedBlockAlgorithm {
      update(e5) {
        return this._append(e5), this._process(), this;
      }
      finalize(e5) {
        e5 && this._append(e5);
      }
    };
    V2 = [1779033703, -1150833019, 1013904242, -1521486534, 1359893119, -1694144372, 528734635, 1541459225];
    G2 = [1116352408, 1899447441, -1245643825, -373957723, 961987163, 1508970993, -1841331548, -1424204075, -670586216, 310598401, 607225278, 1426881987, 1925078388, -2132889090, -1680079193, -1046744716, -459576895, -272742522, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, -1740746414, -1473132947, -1341970488, -1084653625, -958395405, -710438585, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, -2117940946, -1838011259, -1564481375, -1474664885, -1035236496, -949202525, -778901479, -694614492, -200395387, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, -2067236844, -1933114872, -1866530822, -1538233109, -1090935817, -965641998];
    J2 = [];
    SHA256 = class extends Hasher {
      constructor() {
        super(...arguments), this._hash = new WordArray([...V2]);
      }
      reset() {
        super.reset(), this._hash = new WordArray([...V2]);
      }
      _doProcessBlock(e5, t4) {
        const r4 = this._hash.words;
        let n2 = r4[0], o7 = r4[1], s2 = r4[2], i3 = r4[3], a3 = r4[4], u3 = r4[5], c2 = r4[6], f2 = r4[7];
        for (let r5 = 0; r5 < 64; r5++) {
          if (r5 < 16)
            J2[r5] = 0 | e5[t4 + r5];
          else {
            const e6 = J2[r5 - 15], t5 = (e6 << 25 | e6 >>> 7) ^ (e6 << 14 | e6 >>> 18) ^ e6 >>> 3, n3 = J2[r5 - 2], o8 = (n3 << 15 | n3 >>> 17) ^ (n3 << 13 | n3 >>> 19) ^ n3 >>> 10;
            J2[r5] = t5 + J2[r5 - 7] + o8 + J2[r5 - 16];
          }
          const l2 = n2 & o7 ^ n2 & s2 ^ o7 & s2, h3 = (n2 << 30 | n2 >>> 2) ^ (n2 << 19 | n2 >>> 13) ^ (n2 << 10 | n2 >>> 22), d2 = f2 + ((a3 << 26 | a3 >>> 6) ^ (a3 << 21 | a3 >>> 11) ^ (a3 << 7 | a3 >>> 25)) + (a3 & u3 ^ ~a3 & c2) + G2[r5] + J2[r5];
          f2 = c2, c2 = u3, u3 = a3, a3 = i3 + d2 | 0, i3 = s2, s2 = o7, o7 = n2, n2 = d2 + (h3 + l2) | 0;
        }
        r4[0] = r4[0] + n2 | 0, r4[1] = r4[1] + o7 | 0, r4[2] = r4[2] + s2 | 0, r4[3] = r4[3] + i3 | 0, r4[4] = r4[4] + a3 | 0, r4[5] = r4[5] + u3 | 0, r4[6] = r4[6] + c2 | 0, r4[7] = r4[7] + f2 | 0;
      }
      finalize(e5) {
        super.finalize(e5);
        const t4 = 8 * this._nDataBytes, r4 = 8 * this._data.sigBytes;
        return this._data.words[r4 >>> 5] |= 128 << 24 - r4 % 32, this._data.words[14 + (r4 + 64 >>> 9 << 4)] = Math.floor(t4 / 4294967296), this._data.words[15 + (r4 + 64 >>> 9 << 4)] = t4, this._data.sigBytes = 4 * this._data.words.length, this._process(), this._hash;
      }
    };
    Y2 = { NORMAL: 0, WILDCARD: 1, PLACEHOLDER: 2 };
    Z3 = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/;
    X2 = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/;
    ee3 = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;
    te = createDefu();
    re3 = createDefu((e5, t4, r4) => {
      if (void 0 !== e5[t4] && "function" == typeof r4)
        return e5[t4] = r4(e5[t4]), true;
    });
    ne3 = 10;
    oe3 = class {
      __unenv__ = true;
      _events = /* @__PURE__ */ Object.create(null);
      _maxListeners;
      static get defaultMaxListeners() {
        return ne3;
      }
      static set defaultMaxListeners(e5) {
        if ("number" != typeof e5 || e5 < 0 || Number.isNaN(e5))
          throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e5 + ".");
        ne3 = e5;
      }
      setMaxListeners(e5) {
        if ("number" != typeof e5 || e5 < 0 || Number.isNaN(e5))
          throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e5 + ".");
        return this._maxListeners = e5, this;
      }
      getMaxListeners() {
        return _getMaxListeners(this);
      }
      emit(e5, ...t4) {
        if (!this._events[e5] || 0 === this._events[e5].length)
          return false;
        if ("error" === e5) {
          let e6;
          if (t4.length > 0 && (e6 = t4[0]), e6 instanceof Error)
            throw e6;
          const r4 = new Error("Unhandled error." + (e6 ? " (" + e6.message + ")" : ""));
          throw r4.context = e6, r4;
        }
        for (const r4 of this._events[e5])
          (r4.listener || r4).apply(this, t4);
        return true;
      }
      addListener(e5, t4) {
        return _addListener(this, e5, t4, false);
      }
      on(e5, t4) {
        return _addListener(this, e5, t4, false);
      }
      prependListener(e5, t4) {
        return _addListener(this, e5, t4, true);
      }
      once(e5, t4) {
        return this.on(e5, _wrapOnce(this, e5, t4));
      }
      prependOnceListener(e5, t4) {
        return this.prependListener(e5, _wrapOnce(this, e5, t4));
      }
      removeListener(e5, t4) {
        return function(e6, t5, r4) {
          if (_checkListener(r4), !e6._events[t5] || 0 === e6._events[t5].length)
            return e6;
          const n2 = e6._events[t5].length;
          if (e6._events[t5] = e6._events[t5].filter((e7) => e7 !== r4), n2 === e6._events[t5].length)
            return e6;
          e6._events.removeListener && e6.emit("removeListener", t5, r4.listener || r4);
          0 === e6._events[t5].length && delete e6._events[t5];
          return e6;
        }(this, e5, t4);
      }
      off(e5, t4) {
        return this.removeListener(e5, t4);
      }
      removeAllListeners(e5) {
        return function(e6, t4) {
          if (!e6._events[t4] || 0 === e6._events[t4].length)
            return e6;
          if (e6._events.removeListener)
            for (const r4 of e6._events[t4])
              e6.emit("removeListener", t4, r4.listener || r4);
          return delete e6._events[t4], e6;
        }(this, e5);
      }
      listeners(e5) {
        return _listeners(this, e5, true);
      }
      rawListeners(e5) {
        return _listeners(this, e5, false);
      }
      listenerCount(e5) {
        return this.rawListeners(e5).length;
      }
      eventNames() {
        return Object.keys(this._events);
      }
    };
    se3 = globalThis.EventEmitter || oe3;
    _Readable = class extends se3 {
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
      static from(e5, t4) {
        return new _Readable(t4);
      }
      constructor(e5) {
        super();
      }
      _read(e5) {
      }
      read(e5) {
      }
      setEncoding(e5) {
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
      unpipe(e5) {
        return this;
      }
      unshift(e5, t4) {
      }
      wrap(e5) {
        return this;
      }
      push(e5, t4) {
        return false;
      }
      _destroy(e5, t4) {
        this.removeAllListeners();
      }
      destroy(e5) {
        return this.destroyed = true, this._destroy(e5), this;
      }
      pipe(e5, t4) {
        return {};
      }
      compose(e5, t4) {
        throw new Error("[unenv] Method not implemented.");
      }
      [Symbol.asyncDispose]() {
        return this.destroy(), Promise.resolve();
      }
      async *[Symbol.asyncIterator]() {
        throw createNotImplementedError("Readable.asyncIterator");
      }
      iterator(e5) {
        throw createNotImplementedError("Readable.iterator");
      }
      map(e5, t4) {
        throw createNotImplementedError("Readable.map");
      }
      filter(e5, t4) {
        throw createNotImplementedError("Readable.filter");
      }
      forEach(e5, t4) {
        throw createNotImplementedError("Readable.forEach");
      }
      reduce(e5, t4, r4) {
        throw createNotImplementedError("Readable.reduce");
      }
      find(e5, t4) {
        throw createNotImplementedError("Readable.find");
      }
      findIndex(e5, t4) {
        throw createNotImplementedError("Readable.findIndex");
      }
      some(e5, t4) {
        throw createNotImplementedError("Readable.some");
      }
      toArray(e5) {
        throw createNotImplementedError("Readable.toArray");
      }
      every(e5, t4) {
        throw createNotImplementedError("Readable.every");
      }
      flatMap(e5, t4) {
        throw createNotImplementedError("Readable.flatMap");
      }
      drop(e5, t4) {
        throw createNotImplementedError("Readable.drop");
      }
      take(e5, t4) {
        throw createNotImplementedError("Readable.take");
      }
      asIndexedPairs(e5) {
        throw createNotImplementedError("Readable.asIndexedPairs");
      }
    };
    ie3 = globalThis.Readable || _Readable;
    ae3 = globalThis.Writable || class extends se3 {
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
      constructor(e5) {
        super();
      }
      pipe(e5, t4) {
        return {};
      }
      _write(e5, t4, r4) {
        if (this.writableEnded)
          r4 && r4();
        else {
          if (void 0 === this._data)
            this._data = e5;
          else {
            const r5 = "string" == typeof this._data ? f.from(this._data, this._encoding || t4 || "utf8") : this._data, n2 = "string" == typeof e5 ? f.from(e5, t4 || this._encoding || "utf8") : e5;
            this._data = f.concat([r5, n2]);
          }
          this._encoding = t4, r4 && r4();
        }
      }
      _writev(e5, t4) {
      }
      _destroy(e5, t4) {
      }
      _final(e5) {
      }
      write(e5, t4, r4) {
        const n2 = "string" == typeof t4 ? this._encoding : "utf-8", o7 = "function" == typeof t4 ? t4 : "function" == typeof r4 ? r4 : void 0;
        return this._write(e5, n2, o7), true;
      }
      setDefaultEncoding(e5) {
        return this;
      }
      end(e5, t4, r4) {
        const n2 = "function" == typeof e5 ? e5 : "function" == typeof t4 ? t4 : "function" == typeof r4 ? r4 : void 0;
        if (this.writableEnded)
          return n2 && n2(), this;
        const o7 = e5 === n2 ? void 0 : e5;
        if (o7) {
          const e6 = t4 === n2 ? void 0 : t4;
          this.write(o7, e6, n2);
        }
        return this.writableEnded = true, this.writableFinished = true, this.emit("close"), this.emit("finish"), this;
      }
      cork() {
      }
      uncork() {
      }
      destroy(e5) {
        return this.destroyed = true, delete this._data, this.removeAllListeners(), this;
      }
      compose(e5, t4) {
        throw new Error("[h3] Method not implemented.");
      }
    };
    ue3 = class {
      allowHalfOpen = true;
      _destroy;
      constructor(e5 = new ie3(), t4 = new ae3()) {
        Object.assign(this, e5), Object.assign(this, t4), this._destroy = function(...e6) {
          return function(...t5) {
            for (const r4 of e6)
              r4(...t5);
          };
        }(e5._destroy, t4._destroy);
      }
    };
    ce3 = getDuplex();
    fe3 = globalThis.Duplex || ce3;
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
      constructor(e5) {
        super();
      }
      write(e5, t4, r4) {
        return false;
      }
      connect(e5, t4, r4) {
        return this;
      }
      end(e5, t4, r4) {
        return this;
      }
      setEncoding(e5) {
        return this;
      }
      pause() {
        return this;
      }
      resume() {
        return this;
      }
      setTimeout(e5, t4) {
        return this;
      }
      setNoDelay(e5) {
        return this;
      }
      setKeepAlive(e5, t4) {
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
        const e5 = new Error("ERR_SOCKET_CLOSED");
        return e5.code = "ERR_SOCKET_CLOSED", this.destroy(e5), this;
      }
    };
    IncomingMessage = class extends ie3 {
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
      constructor(e5) {
        super(), this.socket = this.connection = e5 || new Socket();
      }
      get rawHeaders() {
        return function(e5) {
          const t4 = [];
          for (const r4 in e5)
            if (Array.isArray(e5[r4]))
              for (const n2 of e5[r4])
                t4.push(r4, n2);
            else
              t4.push(r4, e5[r4]);
          return t4;
        }(this.headers);
      }
      get rawTrailers() {
        return [];
      }
      setTimeout(e5, t4) {
        return this;
      }
      get headersDistinct() {
        return _distinct(this.headers);
      }
      get trailersDistinct() {
        return _distinct(this.trailers);
      }
    };
    ServerResponse = class extends ae3 {
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
      constructor(e5) {
        super(), this.req = e5;
      }
      assignSocket(e5) {
        e5._httpMessage = this, this.socket = e5, this.connection = e5, this.emit("socket", e5), this._flush();
      }
      _flush() {
        this.flushHeaders();
      }
      detachSocket(e5) {
      }
      writeContinue(e5) {
      }
      writeHead(e5, t4, r4) {
        e5 && (this.statusCode = e5), "string" == typeof t4 && (this.statusMessage = t4, t4 = void 0);
        const n2 = r4 || t4;
        if (n2)
          if (Array.isArray(n2))
            ;
          else
            for (const e6 in n2)
              this.setHeader(e6, n2[e6]);
        return this.headersSent = true, this;
      }
      writeProcessing() {
      }
      setTimeout(e5, t4) {
        return this;
      }
      appendHeader(e5, t4) {
        e5 = e5.toLowerCase();
        const r4 = this._headers[e5], n2 = [...Array.isArray(r4) ? r4 : [r4], ...Array.isArray(t4) ? t4 : [t4]].filter(Boolean);
        return this._headers[e5] = n2.length > 1 ? n2 : n2[0], this;
      }
      setHeader(e5, t4) {
        return this._headers[e5.toLowerCase()] = t4, this;
      }
      getHeader(e5) {
        return this._headers[e5.toLowerCase()];
      }
      getHeaders() {
        return this._headers;
      }
      getHeaderNames() {
        return Object.keys(this._headers);
      }
      hasHeader(e5) {
        return e5.toLowerCase() in this._headers;
      }
      removeHeader(e5) {
        delete this._headers[e5.toLowerCase()];
      }
      addTrailers(e5) {
      }
      flushHeaders() {
      }
      writeEarlyHints(e5, t4) {
        "function" == typeof t4 && t4();
      }
    };
    le3 = Object.defineProperty;
    __publicField$2 = (e5, t4, r4) => (((e6, t5, r5) => {
      t5 in e6 ? le3(e6, t5, { enumerable: true, configurable: true, writable: true, value: r5 }) : e6[t5] = r5;
    })(e5, "symbol" != typeof t4 ? t4 + "" : t4, r4), r4);
    H3Error = class extends Error {
      constructor(e5, t4 = {}) {
        super(e5, t4), __publicField$2(this, "statusCode", 500), __publicField$2(this, "fatal", false), __publicField$2(this, "unhandled", false), __publicField$2(this, "statusMessage"), __publicField$2(this, "data"), __publicField$2(this, "cause"), t4.cause && !this.cause && (this.cause = t4.cause);
      }
      toJSON() {
        const e5 = { message: this.message, statusCode: sanitizeStatusCode(this.statusCode, 500) };
        return this.statusMessage && (e5.statusMessage = sanitizeStatusMessage(this.statusMessage)), void 0 !== this.data && (e5.data = this.data), e5;
      }
    };
    __publicField$2(H3Error, "__h3_error__", true);
    he3 = Symbol.for("h3RawBody");
    de3 = ["PATCH", "POST", "PUT", "DELETE"];
    pe3 = { html: "text/html", json: "application/json" };
    ye3 = /[^\u0009\u0020-\u007E]/g;
    ge3 = "undefined" == typeof setImmediate ? (e5) => e5() : setImmediate;
    me3 = setResponseHeaders;
    we3 = /* @__PURE__ */ new Set(["PATCH", "POST", "PUT", "DELETE"]);
    be3 = /* @__PURE__ */ new Set(["transfer-encoding", "connection", "keep-alive", "upgrade", "expect", "host", "accept"]);
    _e3 = Object.defineProperty;
    __publicField = (e5, t4, r4) => (((e6, t5, r5) => {
      t5 in e6 ? _e3(e6, t5, { enumerable: true, configurable: true, writable: true, value: r5 }) : e6[t5] = r5;
    })(e5, "symbol" != typeof t4 ? t4 + "" : t4, r4), r4);
    H3Event = class {
      constructor(e5, t4) {
        __publicField(this, "__is_event__", true), __publicField(this, "node"), __publicField(this, "web"), __publicField(this, "context", {}), __publicField(this, "_method"), __publicField(this, "_path"), __publicField(this, "_headers"), __publicField(this, "_requestBody"), __publicField(this, "_handled", false), __publicField(this, "_onBeforeResponseCalled"), __publicField(this, "_onAfterResponseCalled"), this.node = { req: e5, res: t4 };
      }
      get method() {
        return this._method || (this._method = (this.node.req.method || "GET").toUpperCase()), this._method;
      }
      get path() {
        return this._path || this.node.req.url || "/";
      }
      get headers() {
        return this._headers || (this._headers = function(e5) {
          const t4 = new Headers();
          for (const [r4, n2] of Object.entries(e5))
            if (Array.isArray(n2))
              for (const e6 of n2)
                t4.append(r4, e6);
            else
              n2 && t4.set(r4, n2);
          return t4;
        }(this.node.req.headers)), this._headers;
      }
      get handled() {
        return this._handled || this.node.res.writableEnded || this.node.res.headersSent;
      }
      respondWith(e5) {
        return Promise.resolve(e5).then((e6) => sendWebResponse(this, e6));
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
    ve2 = defineEventHandler;
    lazyEventHandler = function(e5) {
      let t4, r4;
      const resolveHandler = () => r4 ? Promise.resolve(r4) : (t4 || (t4 = Promise.resolve(e5()).then((e6) => {
        const t5 = e6.default || e6;
        if ("function" != typeof t5)
          throw new TypeError("Invalid lazy handler result. It should be a function:", t5);
        return r4 = { handler: toEventHandler(e6.default || e6) }, r4;
      })), t4), n2 = ve2((e6) => r4 ? r4.handler(e6) : resolveHandler().then((t5) => t5.handler(e6)));
      return n2.__resolve__ = resolveHandler, n2;
    };
    Be2 = ["connect", "delete", "get", "head", "options", "post", "put", "trace", "patch"];
    FetchError = class extends Error {
      constructor(e5, t4) {
        super(e5, t4), this.name = "FetchError", t4?.cause && !this.cause && (this.cause = t4.cause);
      }
    };
    Ee2 = new Set(Object.freeze(["PATCH", "POST", "PUT", "DELETE"]));
    Re3 = /* @__PURE__ */ new Set(["image/svg", "application/xml", "application/xhtml", "application/html"]);
    Ie2 = /^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;
    xe3 = /* @__PURE__ */ new Set([408, 409, 425, 429, 500, 502, 503, 504]);
    ke3 = /* @__PURE__ */ new Set([101, 204, 205, 304]);
    Ae3 = function() {
      if ("undefined" != typeof globalThis)
        return globalThis;
      if ("undefined" != typeof self)
        return self;
      if ("undefined" != typeof global)
        return global;
      throw new Error("unable to locate global object");
    }();
    Se2 = Ae3.fetch || (() => Promise.reject(new Error("[ofetch] global.fetch is not supported!")));
    Te2 = Ae3.Headers;
    $e2 = Ae3.AbortController;
    Ce = createFetch$1({ fetch: Se2, Headers: Te2, AbortController: $e2 });
    Oe2 = /* @__PURE__ */ new Set([101, 204, 205, 304]);
    je2 = { run: (e5) => e5() };
    Le2 = void 0 !== console.createTask ? console.createTask : () => je2;
    Hookable = class {
      constructor() {
        this._hooks = {}, this._before = void 0, this._after = void 0, this._deprecatedMessages = void 0, this._deprecatedHooks = {}, this.hook = this.hook.bind(this), this.callHook = this.callHook.bind(this), this.callHookWith = this.callHookWith.bind(this);
      }
      hook(e5, t4, r4 = {}) {
        if (!e5 || "function" != typeof t4)
          return () => {
          };
        const n2 = e5;
        let o7;
        for (; this._deprecatedHooks[e5]; )
          o7 = this._deprecatedHooks[e5], e5 = o7.to;
        if (o7 && !r4.allowDeprecated) {
          let e6 = o7.message;
          e6 || (e6 = `${n2} hook has been deprecated` + (o7.to ? `, please use ${o7.to}` : "")), this._deprecatedMessages || (this._deprecatedMessages = /* @__PURE__ */ new Set()), this._deprecatedMessages.has(e6) || (console.warn(e6), this._deprecatedMessages.add(e6));
        }
        if (!t4.name)
          try {
            Object.defineProperty(t4, "name", { get: () => "_" + e5.replace(/\W+/g, "_") + "_hook_cb", configurable: true });
          } catch {
          }
        return this._hooks[e5] = this._hooks[e5] || [], this._hooks[e5].push(t4), () => {
          t4 && (this.removeHook(e5, t4), t4 = void 0);
        };
      }
      hookOnce(e5, t4) {
        let r4, _function = (...e6) => ("function" == typeof r4 && r4(), r4 = void 0, _function = void 0, t4(...e6));
        return r4 = this.hook(e5, _function), r4;
      }
      removeHook(e5, t4) {
        if (this._hooks[e5]) {
          const r4 = this._hooks[e5].indexOf(t4);
          -1 !== r4 && this._hooks[e5].splice(r4, 1), 0 === this._hooks[e5].length && delete this._hooks[e5];
        }
      }
      deprecateHook(e5, t4) {
        this._deprecatedHooks[e5] = "string" == typeof t4 ? { to: t4 } : t4;
        const r4 = this._hooks[e5] || [];
        delete this._hooks[e5];
        for (const t5 of r4)
          this.hook(e5, t5);
      }
      deprecateHooks(e5) {
        Object.assign(this._deprecatedHooks, e5);
        for (const t4 in e5)
          this.deprecateHook(t4, e5[t4]);
      }
      addHooks(e5) {
        const t4 = flatHooks(e5), r4 = Object.keys(t4).map((e6) => this.hook(e6, t4[e6]));
        return () => {
          for (const e6 of r4.splice(0, r4.length))
            e6();
        };
      }
      removeHooks(e5) {
        const t4 = flatHooks(e5);
        for (const e6 in t4)
          this.removeHook(e6, t4[e6]);
      }
      removeAllHooks() {
        for (const e5 in this._hooks)
          delete this._hooks[e5];
      }
      callHook(e5, ...t4) {
        return t4.unshift(e5), this.callHookWith(serialTaskCaller, e5, ...t4);
      }
      callHookParallel(e5, ...t4) {
        return t4.unshift(e5), this.callHookWith(parallelTaskCaller, e5, ...t4);
      }
      callHookWith(e5, t4, ...r4) {
        const n2 = this._before || this._after ? { name: t4, args: r4, context: {} } : void 0;
        this._before && callEachWith(this._before, n2);
        const o7 = e5(t4 in this._hooks ? [...this._hooks[t4]] : [], r4);
        return o7 instanceof Promise ? o7.finally(() => {
          this._after && n2 && callEachWith(this._after, n2);
        }) : (this._after && n2 && callEachWith(this._after, n2), o7);
      }
      beforeEach(e5) {
        return this._before = this._before || [], this._before.push(e5), () => {
          if (void 0 !== this._before) {
            const t4 = this._before.indexOf(e5);
            -1 !== t4 && this._before.splice(t4, 1);
          }
        };
      }
      afterEach(e5) {
        return this._after = this._after || [], this._after.push(e5), () => {
          if (void 0 !== this._after) {
            const t4 = this._after.indexOf(e5);
            -1 !== t4 && this._after.splice(t4, 1);
          }
        };
      }
    };
    Ne2 = /\d/;
    Me2 = ["-", "_", "/", "."];
    Ue2 = /{{(.*?)}}/g;
    Pe3 = re3({ nuxt: {} });
    He2 = { app: { baseURL: "/", buildId: "9047960d-3c36-4595-a11f-1eb5395da7ce", buildAssetsDir: "/_nuxt/", cdnURL: "" }, nitro: { envPrefix: "NUXT_", routeRules: { "/__nuxt_error": { cache: false }, "/_nuxt/builds/meta/**": { headers: { "cache-control": "public, max-age=31536000, immutable" } }, "/_nuxt/builds/**": { headers: { "cache-control": "public, max-age=1, immutable" } }, "/_nuxt/**": { headers: { "cache-control": "public, max-age=31536000, immutable" } } } }, public: {} };
    qe2 = { prefix: "NITRO_", altPrefix: He2.nitro.envPrefix ?? B2.env.NITRO_ENV_PREFIX ?? "_", envExpansion: He2.nitro.envExpansion ?? B2.env.NITRO_ENV_EXPANSION ?? false };
    ze2 = _deepFreeze(applyEnv(klona(He2), qe2));
    _deepFreeze(klona(Pe3)), new Proxy(/* @__PURE__ */ Object.create(null), { get: (e5, t4) => {
      console.warn("Please use `useRuntimeConfig()` instead of accessing config directly.");
      const r4 = useRuntimeConfig2();
      if (t4 in r4)
        return r4[t4];
    } });
    We2 = "base64:";
    De2 = ["hasItem", "getItem", "getItemRaw", "setItem", "setItemRaw", "removeItem", "getMeta", "setMeta", "removeMeta", "getKeys", "clear", "mount", "unmount"];
    memory = () => {
      const e5 = /* @__PURE__ */ new Map();
      return { name: "memory", options: {}, hasItem: (t4) => e5.has(t4), getItem: (t4) => e5.get(t4) ?? null, getItemRaw: (t4) => e5.get(t4) ?? null, setItem(t4, r4) {
        e5.set(t4, r4);
      }, setItemRaw(t4, r4) {
        e5.set(t4, r4);
      }, removeItem(t4) {
        e5.delete(t4);
      }, getKeys: () => Array.from(e5.keys()), clear() {
        e5.clear();
      }, dispose() {
        e5.clear();
      } };
    };
    Ke2 = {};
    normalizeKey2 = function(e5) {
      return e5 ? e5.split("?")[0].replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "") : "";
    };
    Fe2 = { getKeys: () => Promise.resolve(Object.keys(Ke2)), hasItem: (e5) => (e5 = normalizeKey2(e5), Promise.resolve(e5 in Ke2)), getItem: (e5) => (e5 = normalizeKey2(e5), Promise.resolve(Ke2[e5] ? Ke2[e5].import() : null)), getMeta: (e5) => (e5 = normalizeKey2(e5), Promise.resolve(Ke2[e5] ? Ke2[e5].meta : {})) };
    Qe2 = function(e5 = {}) {
      const t4 = { mounts: { "": e5.driver || memory() }, mountpoints: [""], watching: false, watchListeners: [], unwatch: {} }, getMount = (e6) => {
        for (const r5 of t4.mountpoints)
          if (e6.startsWith(r5))
            return { base: r5, relativeKey: e6.slice(r5.length), driver: t4.mounts[r5] };
        return { base: "", relativeKey: e6, driver: t4.mounts[""] };
      }, getMounts = (e6, r5) => t4.mountpoints.filter((t5) => t5.startsWith(e6) || r5 && e6.startsWith(t5)).map((r6) => ({ relativeBase: e6.length > r6.length ? e6.slice(r6.length) : void 0, mountpoint: r6, driver: t4.mounts[r6] })), onChange = (e6, r5) => {
        if (t4.watching) {
          r5 = normalizeKey$1(r5);
          for (const n2 of t4.watchListeners)
            n2(e6, r5);
        }
      }, stopWatch = async () => {
        if (t4.watching) {
          for (const e6 in t4.unwatch)
            await t4.unwatch[e6]();
          t4.unwatch = {}, t4.watching = false;
        }
      }, runBatch = (e6, t5, r5) => {
        const n2 = /* @__PURE__ */ new Map(), getBatch = (e7) => {
          let t6 = n2.get(e7.base);
          return t6 || (t6 = { driver: e7.driver, base: e7.base, items: [] }, n2.set(e7.base, t6)), t6;
        };
        for (const r6 of e6) {
          const e7 = "string" == typeof r6, n3 = normalizeKey$1(e7 ? r6 : r6.key), o7 = e7 ? void 0 : r6.value, s2 = e7 || !r6.options ? t5 : { ...t5, ...r6.options }, i3 = getMount(n3);
          getBatch(i3).items.push({ key: n3, value: o7, relativeKey: i3.relativeKey, options: s2 });
        }
        return Promise.all([...n2.values()].map((e7) => r5(e7))).then((e7) => e7.flat());
      }, r4 = { hasItem(e6, t5 = {}) {
        e6 = normalizeKey$1(e6);
        const { relativeKey: r5, driver: n2 } = getMount(e6);
        return asyncCall(n2.hasItem, r5, t5);
      }, getItem(e6, t5 = {}) {
        e6 = normalizeKey$1(e6);
        const { relativeKey: r5, driver: n2 } = getMount(e6);
        return asyncCall(n2.getItem, r5, t5).then((e7) => destr(e7));
      }, getItems: (e6, t5) => runBatch(e6, t5, (e7) => e7.driver.getItems ? asyncCall(e7.driver.getItems, e7.items.map((e8) => ({ key: e8.relativeKey, options: e8.options })), t5).then((t6) => t6.map((t7) => ({ key: joinKeys(e7.base, t7.key), value: destr(t7.value) }))) : Promise.all(e7.items.map((t6) => asyncCall(e7.driver.getItem, t6.relativeKey, t6.options).then((e8) => ({ key: t6.key, value: destr(e8) }))))), getItemRaw(e6, t5 = {}) {
        e6 = normalizeKey$1(e6);
        const { relativeKey: r5, driver: n2 } = getMount(e6);
        return n2.getItemRaw ? asyncCall(n2.getItemRaw, r5, t5) : asyncCall(n2.getItem, r5, t5).then((e7) => function(e8) {
          return "string" != typeof e8 ? e8 : e8.startsWith(We2) ? (checkBufferSupport(), f.from(e8.slice(We2.length), "base64")) : e8;
        }(e7));
      }, async setItem(e6, t5, n2 = {}) {
        if (void 0 === t5)
          return r4.removeItem(e6);
        e6 = normalizeKey$1(e6);
        const { relativeKey: o7, driver: s2 } = getMount(e6);
        s2.setItem && (await asyncCall(s2.setItem, o7, stringify2(t5), n2), s2.watch || onChange("update", e6));
      }, async setItems(e6, t5) {
        await runBatch(e6, t5, async (e7) => {
          if (e7.driver.setItems)
            return asyncCall(e7.driver.setItems, e7.items.map((e8) => ({ key: e8.relativeKey, value: stringify2(e8.value), options: e8.options })), t5);
          e7.driver.setItem && await Promise.all(e7.items.map((t6) => asyncCall(e7.driver.setItem, t6.relativeKey, stringify2(t6.value), t6.options)));
        });
      }, async setItemRaw(e6, t5, n2 = {}) {
        if (void 0 === t5)
          return r4.removeItem(e6, n2);
        e6 = normalizeKey$1(e6);
        const { relativeKey: o7, driver: s2 } = getMount(e6);
        if (s2.setItemRaw)
          await asyncCall(s2.setItemRaw, o7, t5, n2);
        else {
          if (!s2.setItem)
            return;
          await asyncCall(s2.setItem, o7, function(e7) {
            if ("string" == typeof e7)
              return e7;
            checkBufferSupport();
            const t6 = f.from(e7).toString("base64");
            return We2 + t6;
          }(t5), n2);
        }
        s2.watch || onChange("update", e6);
      }, async removeItem(e6, t5 = {}) {
        "boolean" == typeof t5 && (t5 = { removeMeta: t5 }), e6 = normalizeKey$1(e6);
        const { relativeKey: r5, driver: n2 } = getMount(e6);
        n2.removeItem && (await asyncCall(n2.removeItem, r5, t5), (t5.removeMeta || t5.removeMata) && await asyncCall(n2.removeItem, r5 + "$", t5), n2.watch || onChange("remove", e6));
      }, async getMeta(e6, t5 = {}) {
        "boolean" == typeof t5 && (t5 = { nativeOnly: t5 }), e6 = normalizeKey$1(e6);
        const { relativeKey: r5, driver: n2 } = getMount(e6), o7 = /* @__PURE__ */ Object.create(null);
        if (n2.getMeta && Object.assign(o7, await asyncCall(n2.getMeta, r5, t5)), !t5.nativeOnly) {
          const e7 = await asyncCall(n2.getItem, r5 + "$", t5).then((e8) => destr(e8));
          e7 && "object" == typeof e7 && ("string" == typeof e7.atime && (e7.atime = new Date(e7.atime)), "string" == typeof e7.mtime && (e7.mtime = new Date(e7.mtime)), Object.assign(o7, e7));
        }
        return o7;
      }, setMeta(e6, t5, r5 = {}) {
        return this.setItem(e6 + "$", t5, r5);
      }, removeMeta(e6, t5 = {}) {
        return this.removeItem(e6 + "$", t5);
      }, async getKeys(e6, t5 = {}) {
        e6 = normalizeBaseKey(e6);
        const r5 = getMounts(e6, true);
        let n2 = [];
        const o7 = [];
        for (const e7 of r5) {
          const r6 = (await asyncCall(e7.driver.getKeys, e7.relativeBase, t5)).map((t6) => e7.mountpoint + normalizeKey$1(t6)).filter((e8) => !n2.some((t6) => e8.startsWith(t6)));
          o7.push(...r6), n2 = [e7.mountpoint, ...n2.filter((t6) => !t6.startsWith(e7.mountpoint))];
        }
        return e6 ? o7.filter((t6) => t6.startsWith(e6) && !t6.endsWith("$")) : o7.filter((e7) => !e7.endsWith("$"));
      }, async clear(e6, t5 = {}) {
        e6 = normalizeBaseKey(e6), await Promise.all(getMounts(e6, false).map(async (e7) => {
          if (e7.driver.clear)
            return asyncCall(e7.driver.clear, e7.relativeBase, t5);
          if (e7.driver.removeItem) {
            const r5 = await e7.driver.getKeys(e7.relativeBase || "", t5);
            return Promise.all(r5.map((r6) => e7.driver.removeItem(r6, t5)));
          }
        }));
      }, async dispose() {
        await Promise.all(Object.values(t4.mounts).map((e6) => dispose(e6)));
      }, watch: async (e6) => (await (async () => {
        if (!t4.watching) {
          t4.watching = true;
          for (const e7 in t4.mounts)
            t4.unwatch[e7] = await watch2(t4.mounts[e7], onChange, e7);
        }
      })(), t4.watchListeners.push(e6), async () => {
        t4.watchListeners = t4.watchListeners.filter((t5) => t5 !== e6), 0 === t4.watchListeners.length && await stopWatch();
      }), async unwatch() {
        t4.watchListeners = [], await stopWatch();
      }, mount(e6, n2) {
        if ((e6 = normalizeBaseKey(e6)) && t4.mounts[e6])
          throw new Error(`already mounted at ${e6}`);
        return e6 && (t4.mountpoints.push(e6), t4.mountpoints.sort((e7, t5) => t5.length - e7.length)), t4.mounts[e6] = n2, t4.watching && Promise.resolve(watch2(n2, onChange, e6)).then((r5) => {
          t4.unwatch[e6] = r5;
        }).catch(console.error), r4;
      }, async unmount(e6, r5 = true) {
        (e6 = normalizeBaseKey(e6)) && t4.mounts[e6] && (t4.watching && e6 in t4.unwatch && (t4.unwatch[e6](), delete t4.unwatch[e6]), r5 && await dispose(t4.mounts[e6]), t4.mountpoints = t4.mountpoints.filter((t5) => t5 !== e6), delete t4.mounts[e6]);
      }, getMount(e6 = "") {
        e6 = normalizeKey$1(e6) + ":";
        const t5 = getMount(e6);
        return { driver: t5.driver, base: t5.base };
      }, getMounts(e6 = "", t5 = {}) {
        e6 = normalizeKey$1(e6);
        return getMounts(e6, t5.parents).map((e7) => ({ driver: e7.driver, base: e7.mountpoint }));
      } };
      return r4;
    }({});
    Qe2.mount("/assets", Fe2);
    Ve2 = { name: "_", base: "/cache", swr: true, maxAge: 1 };
    cachedFunction = function(e5, t4 = {}) {
      t4 = { ...Ve2, ...t4 };
      const r4 = {}, n2 = t4.group || "nitro/functions", o7 = t4.name || e5.name || "_", s2 = t4.integrity || hash([e5, t4]), i3 = t4.validate || ((e6) => void 0 !== e6.value);
      return async (...a3) => {
        if (await t4.shouldBypassCache?.(...a3))
          return e5(...a3);
        const u3 = await (t4.getKey || getKey)(...a3), c2 = await t4.shouldInvalidateCache?.(...a3), f2 = await async function(e6, a4, u4, c3) {
          const f3 = [t4.base, n2, o7, e6 + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
          let l3 = await useStorage().getItem(f3) || {};
          if ("object" != typeof l3) {
            l3 = {};
            const e7 = new Error("Malformed data read from cache.");
            console.error("[nitro] [cache]", e7), useNitroApp().captureError(e7, { event: c3, tags: ["cache"] });
          }
          const h3 = 1e3 * (t4.maxAge ?? t4.maxAge ?? 0);
          h3 && (l3.expires = Date.now() + h3);
          const d2 = u4 || l3.integrity !== s2 || h3 && Date.now() - (l3.mtime || 0) > h3 || false === i3(l3), p2 = d2 ? (async () => {
            const n3 = r4[e6];
            n3 || (void 0 !== l3.value && (t4.staleMaxAge || 0) >= 0 && false === t4.swr && (l3.value = void 0, l3.integrity = void 0, l3.mtime = void 0, l3.expires = void 0), r4[e6] = Promise.resolve(a4()));
            try {
              l3.value = await r4[e6];
            } catch (t5) {
              throw n3 || delete r4[e6], t5;
            }
            if (!n3 && (l3.mtime = Date.now(), l3.integrity = s2, delete r4[e6], false !== i3(l3))) {
              const e7 = useStorage().setItem(f3, l3).catch((e8) => {
                console.error("[nitro] [cache] Cache write error.", e8), useNitroApp().captureError(e8, { event: c3, tags: ["cache"] });
              });
              c3 && c3.waitUntil && c3.waitUntil(e7);
            }
          })() : Promise.resolve();
          return void 0 === l3.value ? await p2 : d2 && c3 && c3.waitUntil && c3.waitUntil(p2), t4.swr && false !== i3(l3) ? (p2.catch((e7) => {
            console.error("[nitro] [cache] SWR handler error.", e7), useNitroApp().captureError(e7, { event: c3, tags: ["cache"] });
          }), l3) : p2.then(() => l3);
        }(u3, () => e5(...a3), c2, a3[0] && isEvent(a3[0]) ? a3[0] : void 0);
        let l2 = f2.value;
        return t4.transform && (l2 = await t4.transform(f2, ...a3) || l2), l2;
      };
    };
    cachedEventHandler = function(e5, t4 = Ve2) {
      const r4 = (t4.varies || []).filter(Boolean).map((e6) => e6.toLowerCase()).sort(), n2 = { ...t4, getKey: async (e6) => {
        const n3 = await t4.getKey?.(e6);
        if (n3)
          return escapeKey(n3);
        const o8 = e6.node.req.originalUrl || e6.node.req.url || e6.path;
        return [`${escapeKey(decodeURI(parseURL(o8).pathname)).slice(0, 16) || "index"}.${hash(o8)}`, ...r4.map((t5) => [t5, e6.node.req.headers[t5]]).map(([e7, t5]) => `${escapeKey(e7)}.${hash(t5)}`)].join(":");
      }, validate: (e6) => !!e6.value && (!(e6.value.code >= 400) && (void 0 !== e6.value.body && ("undefined" !== e6.value.headers.etag && "undefined" !== e6.value.headers["last-modified"]))), group: t4.group || "nitro/handlers", integrity: t4.integrity || hash([e5, t4]) }, o7 = cachedFunction(async (o8) => {
        const s2 = {};
        for (const e6 of r4)
          s2[e6] = o8.node.req.headers[e6];
        const i3 = cloneWithProxy(o8.node.req, { headers: s2 }), a3 = {};
        let u3;
        const c2 = createEvent(i3, cloneWithProxy(o8.node.res, { statusCode: 200, writableEnded: false, writableFinished: false, headersSent: false, closed: false, getHeader: (e6) => a3[e6], setHeader(e6, t5) {
          return a3[e6] = t5, this;
        }, getHeaderNames: () => Object.keys(a3), hasHeader: (e6) => e6 in a3, removeHeader(e6) {
          delete a3[e6];
        }, getHeaders: () => a3, end(e6, t5, r5) {
          return "string" == typeof e6 && (u3 = e6), "function" == typeof t5 && t5(), "function" == typeof r5 && r5(), this;
        }, write(e6, t5, r5) {
          return "string" == typeof e6 && (u3 = e6), "function" == typeof t5 && t5(), "function" == typeof r5 && r5(), this;
        }, writeHead(e6, t5) {
          if (this.statusCode = e6, t5)
            for (const e7 in t5)
              this.setHeader(e7, t5[e7]);
          return this;
        } }));
        c2.fetch = (e6, t5) => fetchWithEvent(c2, e6, t5, { fetch: useNitroApp().localFetch }), c2.$fetch = (e6, t5) => fetchWithEvent(c2, e6, t5, { fetch: globalThis.$fetch }), c2.context = o8.context, c2.context.cache = { options: n2 };
        const f2 = await e5(c2) || u3, l2 = c2.node.res.getHeaders();
        l2.etag = String(l2.Etag || l2.etag || `W/"${hash(f2)}"`), l2["last-modified"] = String(l2["Last-Modified"] || l2["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString());
        const h3 = [];
        t4.swr ? (t4.maxAge && h3.push(`s-maxage=${t4.maxAge}`), t4.staleMaxAge ? h3.push(`stale-while-revalidate=${t4.staleMaxAge}`) : h3.push("stale-while-revalidate")) : t4.maxAge && h3.push(`max-age=${t4.maxAge}`), h3.length > 0 && (l2["cache-control"] = h3.join(", "));
        return { code: c2.node.res.statusCode, headers: l2, body: f2 };
      }, n2);
      return defineEventHandler(async (r5) => {
        if (t4.headersOnly) {
          if (handleCacheHeaders(r5, { maxAge: t4.maxAge }))
            return;
          return e5(r5);
        }
        const n3 = await o7(r5);
        if (r5.node.res.headersSent || r5.node.res.writableEnded)
          return n3.body;
        if (!handleCacheHeaders(r5, { modifiedTime: new Date(n3.headers["last-modified"]), etag: n3.headers.etag, maxAge: t4.maxAge })) {
          r5.node.res.statusCode = n3.code;
          for (const e6 in n3.headers) {
            const t5 = n3.headers[e6];
            "set-cookie" === e6 ? r5.node.res.appendHeader(e6, splitCookiesString(t5)) : r5.node.res.setHeader(e6, t5);
          }
          return n3.body;
        }
      });
    };
    Ge2 = toRouteMatcher(createRouter$1({ routes: useRuntimeConfig2().nitro.routeRules }));
    Je2 = [];
    errorHandler = async function(e5, t4) {
      const { stack: r4, statusCode: n2, statusMessage: o7, message: s2 } = function(e6) {
        const t5 = "function" == typeof B2.cwd ? B2.cwd() : "/", r5 = (e6.stack || "").split("\n").splice(1).filter((e7) => e7.includes("at ")).map((e7) => ({ text: e7.replace(t5 + "/", "./").replace("webpack:/", "").replace("file://", "").trim(), internal: e7.includes("node_modules") && !e7.includes(".cache") || e7.includes("internal") || e7.includes("new Promise") })), n3 = e6.statusCode || 500, o8 = e6.statusMessage ?? (404 === n3 ? "Not Found" : ""), s3 = e6.message || e6.toString();
        return { stack: r5, statusCode: n3, statusMessage: o8, message: s3 };
      }(e5), i3 = { url: t4.path, statusCode: n2, statusMessage: o7, message: s2, stack: "", data: e5.data };
      if (e5.unhandled || e5.fatal) {
        const t5 = ["[nuxt]", "[request error]", e5.unhandled && "[unhandled]", e5.fatal && "[fatal]", 200 !== Number(i3.statusCode) && `[${i3.statusCode}]`].filter(Boolean).join(" ");
        console.error(t5, i3.message + "\n" + r4.map((e6) => "  " + e6.text).join("  \n"));
      }
      if (t4.handled)
        return;
      if (setResponseStatus(t4, 200 !== i3.statusCode && i3.statusCode || 500, i3.statusMessage), function(e6) {
        if (hasReqHeader(e6, "accept", "text/html"))
          return false;
        return hasReqHeader(e6, "accept", "application/json") || hasReqHeader(e6, "user-agent", "curl/") || hasReqHeader(e6, "user-agent", "httpie/") || hasReqHeader(e6, "sec-fetch-mode", "cors") || e6.path.startsWith("/api/") || e6.path.endsWith(".json");
      }(t4))
        return setResponseHeader(t4, "Content-Type", "application/json"), send(t4, JSON.stringify(i3));
      const a3 = getRequestHeaders(t4), u3 = t4.path.startsWith("/__nuxt_error") || !!a3["x-nuxt-error"] ? null : await useNitroApp().localFetch(withQuery(joinURL(useRuntimeConfig2(t4).app.baseURL, "/__nuxt_error"), i3), { headers: { ...a3, "x-nuxt-error": "true" }, redirect: "manual" }).catch(() => null);
      if (!u3) {
        const { template: e6 } = await Promise.resolve().then(() => (init_error_500(), error_500_exports));
        if (t4.handled)
          return;
        return setResponseHeader(t4, "Content-Type", "text/html;charset=UTF-8"), send(t4, e6(i3));
      }
      const c2 = await u3.text();
      if (!t4.handled) {
        for (const [e6, r5] of u3.headers.entries())
          setResponseHeader(t4, e6, r5);
        return setResponseStatus(t4, u3.status && 200 !== u3.status ? u3.status : void 0, u3.statusText), send(t4, c2);
      }
    };
    _lazy_lFs6nj = () => Promise.resolve().then(() => (init_renderer(), renderer_exports)).then(function(e5) {
      return e5.R;
    });
    Ye2 = [{ route: "/api/teste", handler: () => Promise.resolve().then(() => (init_teste_get(), teste_get_exports)), lazy: true, middleware: false, method: "get" }, { route: "/__nuxt_error", handler: _lazy_lFs6nj, lazy: true, middleware: false, method: void 0 }, { route: "/**", handler: _lazy_lFs6nj, lazy: true, middleware: false, method: void 0 }];
    Ze2 = function() {
      const e5 = useRuntimeConfig2(), t4 = createHooks(), captureError = (e6, r5 = {}) => {
        const n3 = t4.callHookParallel("error", e6, r5).catch((e7) => {
          console.error("Error while capturing another error", e7);
        });
        if (r5.event && isEvent(r5.event)) {
          const t5 = r5.event.context.nitro?.errors;
          t5 && t5.push({ error: e6, context: r5 }), r5.event.waitUntil && r5.event.waitUntil(n3);
        }
      }, r4 = createApp2({ debug: destr(false), onError: (e6, t5) => (captureError(e6, { event: t5, tags: ["request"] }), errorHandler(e6, t5)), onRequest: async (e6) => {
        await Ze2.hooks.callHook("request", e6).catch((t5) => {
          captureError(t5, { event: e6, tags: ["request"] });
        });
      }, onBeforeResponse: async (e6, t5) => {
        await Ze2.hooks.callHook("beforeResponse", e6, t5).catch((t6) => {
          captureError(t6, { event: e6, tags: ["request", "response"] });
        });
      }, onAfterResponse: async (e6, t5) => {
        await Ze2.hooks.callHook("afterResponse", e6, t5).catch((t6) => {
          captureError(t6, { event: e6, tags: ["request", "response"] });
        });
      } }), n2 = function(e6 = {}) {
        const t5 = createRouter$1({}), r5 = {};
        let n3;
        const o8 = {}, addRoute = (e7, n4, s4) => {
          let i4 = r5[e7];
          if (i4 || (r5[e7] = i4 = { path: e7, handlers: {} }, t5.insert(e7, i4)), Array.isArray(s4))
            for (const t6 of s4)
              addRoute(e7, n4, t6);
          else
            i4.handlers[s4] = toEventHandler(n4, 0, e7);
          return o8;
        };
        o8.use = o8.add = (e7, t6, r6) => addRoute(e7, t6, r6 || "all");
        for (const e7 of Be2)
          o8[e7] = (t6, r6) => o8.add(t6, r6, e7);
        const matchHandler = (e7 = "/", r6 = "get") => {
          const o9 = e7.indexOf("?");
          -1 !== o9 && (e7 = e7.slice(0, Math.max(0, o9)));
          const s4 = t5.lookup(e7);
          if (!s4 || !s4.handlers)
            return { error: createError({ statusCode: 404, name: "Not Found", statusMessage: `Cannot find any route matching ${e7 || "/"}.` }) };
          let i4 = s4.handlers[r6] || s4.handlers.all;
          if (!i4) {
            n3 || (n3 = toRouteMatcher(t5));
            const o10 = n3.matchAll(e7).reverse();
            for (const e8 of o10) {
              if (e8.handlers[r6]) {
                i4 = e8.handlers[r6], s4.handlers[r6] = s4.handlers[r6] || i4;
                break;
              }
              if (e8.handlers.all) {
                i4 = e8.handlers.all, s4.handlers.all = s4.handlers.all || i4;
                break;
              }
            }
          }
          return i4 ? { matched: s4, handler: i4 } : { error: createError({ statusCode: 405, name: "Method Not Allowed", statusMessage: `Method ${r6} is not allowed on this route.` }) };
        }, s3 = e6.preemptive || e6.preemtive;
        return o8.handler = ve2((e7) => {
          const t6 = matchHandler(e7.path, e7.method.toLowerCase());
          if ("error" in t6) {
            if (s3)
              throw t6.error;
            return;
          }
          e7.context.matchedRoute = t6.matched;
          const r6 = t6.matched.params || {};
          return e7.context.params = r6, Promise.resolve(t6.handler(e7)).then((e8) => void 0 === e8 && s3 ? null : e8);
        }), o8.handler.__resolve__ = async (e7) => {
          e7 = withLeadingSlash(e7);
          const t6 = matchHandler(e7);
          if ("error" in t6)
            return;
          let r6 = { route: t6.matched.path, handler: t6.handler };
          if (t6.handler.__resolve__) {
            const n4 = await t6.handler.__resolve__(e7);
            if (!n4)
              return;
            r6 = { ...r6, ...n4 };
          }
          return r6;
        }, o8;
      }({ preemptive: true }), o7 = (s2 = toNodeListener(r4), function(e6) {
        const t5 = new IncomingMessage(), r5 = new ServerResponse(t5);
        if (t5.url = e6.url || "/", t5.method = e6.method || "GET", t5.headers = {}, e6.headers) {
          const r6 = "function" == typeof e6.headers.entries ? e6.headers.entries() : Object.entries(e6.headers);
          for (const [e7, n3] of r6)
            n3 && (t5.headers[e7.toLowerCase()] = n3);
        }
        return t5.headers.host = t5.headers.host || e6.host || "localhost", t5.connection.encrypted = t5.connection.encrypted || "https" === e6.protocol, t5.body = e6.body || null, t5.__unenv__ = e6.context, s2(t5, r5).then(() => {
          let e7 = r5._data;
          (Oe2.has(r5.statusCode) || "HEAD" === t5.method.toUpperCase()) && (e7 = null, delete r5._headers["content-length"]);
          const n3 = { body: e7, headers: r5._headers, status: r5.statusCode, statusText: r5.statusMessage };
          return t5.destroy(), r5.destroy(), n3;
        });
      });
      var s2;
      const i3 = function(e6, t5 = global.fetch) {
        return async function(r5, n3) {
          const o8 = r5.toString();
          if (!o8.startsWith("/"))
            return t5(o8, n3);
          try {
            const t6 = await e6({ url: o8, ...n3 });
            return new Response(t6.body, { status: t6.status, statusText: t6.statusText, headers: Object.fromEntries(Object.entries(t6.headers).map(([e7, t7]) => [e7, Array.isArray(t7) ? t7.join(",") : String(t7) || ""])) });
          } catch (e7) {
            return new Response(e7.toString(), { status: Number.parseInt(e7.statusCode || e7.code) || 500, statusText: e7.statusText });
          }
        };
      }(o7, globalThis.fetch), localFetch = (e6, t5) => i3(e6, t5).then((e7) => function(e8) {
        if (!e8.headers.has("set-cookie"))
          return e8;
        return new Response(e8.body, { status: e8.status, statusText: e8.statusText, headers: normalizeCookieHeaders(e8.headers) });
      }(e7)), a3 = createFetch$1({ fetch: localFetch, Headers: Te2, defaults: { baseURL: e5.app.baseURL } });
      globalThis.$fetch = a3, r4.use(createRouteRulesHandler({ localFetch })), r4.use(ve2((e6) => {
        e6.context.nitro = e6.context.nitro || { errors: [] };
        const t5 = e6.node.req?.__unenv__;
        t5 && Object.assign(e6.context, t5), e6.fetch = (t6, r5) => fetchWithEvent(e6, t6, r5, { fetch: localFetch }), e6.$fetch = (t6, r5) => fetchWithEvent(e6, t6, r5, { fetch: a3 }), e6.waitUntil = (r5) => {
          e6.context.nitro._waitUntilPromises || (e6.context.nitro._waitUntilPromises = []), e6.context.nitro._waitUntilPromises.push(r5), t5?.waitUntil && t5.waitUntil(r5);
        }, e6.captureError = (t6, r5) => {
          captureError(t6, { event: e6, ...r5 });
        };
      }));
      for (const t5 of Ye2) {
        let o8 = t5.lazy ? lazyEventHandler(t5.handler) : t5.handler;
        if (t5.middleware || !t5.route) {
          const n3 = (e5.app.baseURL + (t5.route || "/")).replace(/\/+/g, "/");
          r4.use(n3, o8);
        } else {
          const e6 = getRouteRulesForPath(t5.route.replace(/:\w+|\*\*/g, "_"));
          e6.cache && (o8 = cachedEventHandler(o8, { group: "nitro/routes", ...e6.cache })), n2.use(t5.route, o8, t5.method);
        }
      }
      r4.use(e5.app.baseURL, n2.handler);
      const u3 = { hooks: t4, h3App: r4, router: n2, localCall: o7, localFetch, captureError };
      for (const e6 of Je2)
        try {
          e6(u3);
        } catch (e7) {
          throw captureError(e7, { tags: ["plugin"] }), e7;
        }
      return u3;
    }();
    useNitroApp = () => Ze2;
    Xe2 = /post|put|patch/i;
    et2 = { "/favicon.ico": { type: "image/vnd.microsoft.icon", etag: '"10be-n8egyE9tcb7sKGr/pYCaQ4uWqxI"', mtime: "2024-08-09T08:56:21.000Z", size: 4286, path: "../favicon.ico" }, "/robots.txt": { type: "text/plain; charset=utf-8", etag: '"1-rcg7GeeTSRscbqD9i0bNnzLlkvw"', mtime: "2024-08-09T08:56:21.000Z", size: 1, path: "../robots.txt" }, "/_nuxt/BAKNzro0.js": { type: "text/javascript; charset=utf-8", etag: '"1d2-2pLdl012GjKu9IfMUteD+cglMVQ"', mtime: "2024-08-20T01:15:42.533Z", size: 466, path: "../_nuxt/BAKNzro0.js" }, "/_nuxt/BT_PhuNT.js": { type: "text/javascript; charset=utf-8", etag: '"1f233-AOc+Xq2K40sSjUrgYtP1OJZ+I9g"', mtime: "2024-08-20T01:15:42.532Z", size: 127539, path: "../_nuxt/BT_PhuNT.js" }, "/_nuxt/BWTkOzGX.js": { type: "text/javascript; charset=utf-8", etag: '"2029-rM9nBb04tSeGo6gKgXZvJ0NgsWU"', mtime: "2024-08-20T01:15:42.533Z", size: 8233, path: "../_nuxt/BWTkOzGX.js" }, "/_nuxt/COS2-k3p.js": { type: "text/javascript; charset=utf-8", etag: '"ace-SbBxsvrYhgOrhwVXM6AOGdP05iY"', mtime: "2024-08-20T01:15:42.534Z", size: 2766, path: "../_nuxt/COS2-k3p.js" }, "/_nuxt/error-404.CjGVuf6H.css": { type: "text/css; charset=utf-8", etag: '"de4-SLOwa5sHvQIi2t5fYZEgfDusMUc"', mtime: "2024-08-20T01:15:42.533Z", size: 3556, path: "../_nuxt/error-404.CjGVuf6H.css" }, "/_nuxt/error-500.DFBAsgKS.css": { type: "text/css; charset=utf-8", etag: '"75c-I8wgoT19gdl/gPtizNKXfkn+TtQ"', mtime: "2024-08-20T01:15:42.533Z", size: 1884, path: "../_nuxt/error-500.DFBAsgKS.css" }, "/_nuxt/builds/latest.json": { type: "application/json", etag: '"47-etNkQfw3Si0nGv8p52KaPPbTKu4"', mtime: "2024-08-20T01:15:43.641Z", size: 71, path: "../_nuxt/builds/latest.json" }, "/_nuxt/builds/meta/9047960d-3c36-4595-a11f-1eb5395da7ce.json": { type: "application/json", etag: '"8b-mVOiKK2di8KqnPdNcCA7G0nLYaM"', mtime: "2024-08-20T01:15:43.642Z", size: 139, path: "../_nuxt/builds/meta/9047960d-3c36-4595-a11f-1eb5395da7ce.json" } };
    tt2 = { "/_nuxt/builds/meta/": { maxAge: 31536e3 }, "/_nuxt/builds/": { maxAge: 1 }, "/_nuxt/": { maxAge: 31536e3 } };
    rt2 = { async fetch(e5, t4, r4) {
      const n2 = new URL(e5.url);
      if (t4.ASSETS && function(e6 = "") {
        if (et2[e6])
          return true;
        for (const t5 in tt2)
          if (e6.startsWith(t5))
            return true;
        return false;
      }(n2.pathname))
        return t4.ASSETS.fetch(e5);
      let o7;
      return function(e6) {
        return Xe2.test(e6.method);
      }(e5) && (o7 = f.from(await e5.arrayBuffer())), globalThis.__env__ = t4, Ze2.localFetch(n2.pathname + n2.search, { context: { cf: e5.cf, waitUntil: (e6) => r4.waitUntil(e6), cloudflare: { request: e5, env: t4, context: r4 } }, host: n2.hostname, protocol: n2.protocol, method: e5.method, headers: e5.headers, body: o7 });
    }, scheduled(e5, t4, r4) {
    } };
  }
});

// .wrangler/tmp/bundle-VlRZIB/middleware-loader.entry.ts
init_checked_fetch();
init_modules_watch_stub();

// .wrangler/tmp/bundle-VlRZIB/middleware-insertion-facade.js
init_checked_fetch();
init_modules_watch_stub();

// .wrangler/tmp/pages-FEt2Fg/dq12u0p5byw.js
init_checked_fetch();
init_modules_watch_stub();

// .wrangler/tmp/pages-FEt2Fg/bundledWorker-0.6142147270499372.mjs
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

// .wrangler/tmp/pages-FEt2Fg/dq12u0p5byw.js
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
        if (rt2.fetch === void 0) {
          throw new TypeError("Entry point missing `fetch` handler");
        }
        return rt2.fetch(request, env, context);
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
    } catch (e5) {
      console.error("Failed to drain the unused request body.", e5);
    }
  }
};
var middleware_ensure_req_body_drained_default = drainBody;

// node_modules/wrangler/templates/middleware/middleware-miniflare3-json-error.ts
init_checked_fetch();
init_modules_watch_stub();
function reduceError(e5) {
  return {
    name: e5?.name,
    message: e5?.message ?? String(e5),
    stack: e5?.stack,
    cause: e5?.cause === void 0 ? void 0 : reduceError(e5.cause)
  };
}
var jsonError = async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } catch (e5) {
    const error = reduceError(e5);
    return Response.json(error, {
      status: 500,
      headers: { "MF-Experimental-Error-Stack": "true" }
    });
  }
};
var middleware_miniflare3_json_error_default = jsonError;

// .wrangler/tmp/bundle-VlRZIB/middleware-insertion-facade.js
pages_dev_pipeline_default.middleware = [
  middleware_ensure_req_body_drained_default,
  middleware_miniflare3_json_error_default,
  ...pages_dev_pipeline_default.middleware ?? []
].filter(Boolean);
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

// .wrangler/tmp/bundle-VlRZIB/middleware-loader.entry.ts
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
  if (worker.middleware === void 0 || worker.middleware.length === 0) {
    return worker;
  }
  for (const middleware of worker.middleware) {
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
  if (klass.middleware === void 0 || klass.middleware.length === 0) {
    return klass;
  }
  for (const middleware of klass.middleware) {
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
  middleware_loader_entry_default as default
};
//# sourceMappingURL=dq12u0p5byw.js.map
