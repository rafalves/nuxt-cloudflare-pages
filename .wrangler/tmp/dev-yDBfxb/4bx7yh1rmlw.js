var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __esm = (fn2, res) => function __init() {
  return fn2 && (res = (0, fn2[__getOwnPropNames(fn2)[0]])(fn2 = 0)), res;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// .wrangler/tmp/bundle-SA88yO/checked-fetch.js
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
  ".wrangler/tmp/bundle-SA88yO/checked-fetch.js"() {
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

// .wrangler/tmp/pages-brm1ok/chunks/_/error-500.mjs
var error_500_exports = {};
__export(error_500_exports, {
  template: () => template
});
var e, template;
var init_error_500 = __esm({
  ".wrangler/tmp/pages-brm1ok/chunks/_/error-500.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    e = { appName: "Nuxt", version: "", statusCode: 500, statusMessage: "Server error", description: "This page is temporarily unavailable." };
    template = (t4) => '<!DOCTYPE html><html lang="en"><head><title>' + (t4 = { ...e, ...t4 }).statusCode + " - " + t4.statusMessage + " | " + t4.appName + `</title><meta charset="utf-8"><meta content="width=device-width,initial-scale=1,minimum-scale=1" name="viewport"><style>.spotlight{background:linear-gradient(45deg, #00DC82 0%, #36E4DA 50%, #0047E1 100%);filter:blur(20vh)}*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:var(--un-default-border-color, #e5e7eb)}:before,:after{--un-content:""}html{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{margin:0;line-height:inherit}h1{font-size:inherit;font-weight:inherit}h1,p{margin:0}*,:before,:after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / .5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }.fixed{position:fixed}.-bottom-1\\/2{bottom:-50%}.left-0{left:0}.right-0{right:0}.grid{display:grid}.mb-16{margin-bottom:4rem}.mb-8{margin-bottom:2rem}.h-1\\/2{height:50%}.max-w-520px{max-width:520px}.min-h-screen{min-height:100vh}.place-content-center{place-content:center}.overflow-hidden{overflow:hidden}.bg-white{--un-bg-opacity:1;background-color:rgb(255 255 255 / var(--un-bg-opacity))}.px-8{padding-left:2rem;padding-right:2rem}.text-center{text-align:center}.text-8xl{font-size:6rem;line-height:1}.text-xl{font-size:1.25rem;line-height:1.75rem}.text-black{--un-text-opacity:1;color:rgb(0 0 0 / var(--un-text-opacity))}.font-light{font-weight:300}.font-medium{font-weight:500}.leading-tight{line-height:1.25}.font-sans{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji"}.antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}@media (prefers-color-scheme: dark){.dark\\:bg-black{--un-bg-opacity:1;background-color:rgb(0 0 0 / var(--un-bg-opacity))}.dark\\:text-white{--un-text-opacity:1;color:rgb(255 255 255 / var(--un-text-opacity))}}@media (min-width: 640px){.sm\\:px-0{padding-left:0;padding-right:0}.sm\\:text-4xl{font-size:2.25rem;line-height:2.5rem}}</style><script>(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();<\/script></head><body class="font-sans antialiased bg-white dark:bg-black text-black dark:text-white grid min-h-screen place-content-center overflow-hidden"><div class="fixed -bottom-1/2 left-0 right-0 h-1/2 spotlight"></div><div class="max-w-520px text-center"><h1 class="text-8xl sm:text-10xl font-medium mb-8">` + t4.statusCode + '</h1><p class="text-xl px-8 sm:px-0 sm:text-4xl font-light mb-16 leading-tight">' + t4.description + "</p></div></body></html>";
  }
});

// .wrangler/tmp/pages-brm1ok/chunks/build/client.manifest.mjs
var client_manifest_exports = {};
__export(client_manifest_exports, {
  default: () => e2
});
var e2;
var init_client_manifest = __esm({
  ".wrangler/tmp/pages-brm1ok/chunks/build/client.manifest.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    e2 = { "_BAKNzro0.js": { resourceType: "script", module: true, prefetch: true, preload: true, file: "BAKNzro0.js", name: "_plugin-vue_export-helper", imports: ["node_modules/nuxt/dist/app/entry.js"] }, "node_modules/nuxt/dist/app/components/error-404.vue": { resourceType: "script", module: true, prefetch: true, preload: true, file: "BWTkOzGX.js", name: "error-404", src: "node_modules/nuxt/dist/app/components/error-404.vue", isDynamicEntry: true, imports: ["node_modules/nuxt/dist/app/entry.js", "_BAKNzro0.js"], css: [] }, "error-404.CjGVuf6H.css": { file: "error-404.CjGVuf6H.css", resourceType: "style", prefetch: true, preload: true }, "node_modules/nuxt/dist/app/components/error-500.vue": { resourceType: "script", module: true, prefetch: true, preload: true, file: "COS2-k3p.js", name: "error-500", src: "node_modules/nuxt/dist/app/components/error-500.vue", isDynamicEntry: true, imports: ["_BAKNzro0.js", "node_modules/nuxt/dist/app/entry.js"], css: [] }, "error-500.DFBAsgKS.css": { file: "error-500.DFBAsgKS.css", resourceType: "style", prefetch: true, preload: true }, "node_modules/nuxt/dist/app/entry.js": { resourceType: "script", module: true, prefetch: true, preload: true, file: "BT_PhuNT.js", name: "entry", src: "node_modules/nuxt/dist/app/entry.js", isEntry: true, dynamicImports: ["node_modules/nuxt/dist/app/components/error-404.vue", "node_modules/nuxt/dist/app/components/error-500.vue"], _globalCSS: true } };
  }
});

// .wrangler/tmp/pages-brm1ok/chunks/build/entry-styles.C-NqyOLw.mjs
var entry_styles_C_NqyOLw_exports = {};
__export(entry_styles_C_NqyOLw_exports, {
  default: () => t
});
var t;
var init_entry_styles_C_NqyOLw = __esm({
  ".wrangler/tmp/pages-brm1ok/chunks/build/entry-styles.C-NqyOLw.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    t = ['/*! tailwindcss v3.4.10 | MIT License | https://tailwindcss.com*/*,:after,:before{border:0 solid #e5e7eb;box-sizing:border-box}:after,:before{--tw-content:""}:host,html{line-height:1.5;-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-feature-settings:normal;font-variation-settings:normal;tab-size:4;-webkit-tap-highlight-color:transparent}body{line-height:inherit;margin:0}hr{border-top-width:1px;color:inherit;height:0}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-feature-settings:normal;font-size:1em;font-variation-settings:normal}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:initial}sub{bottom:-.25em}sup{top:-.5em}table{border-collapse:collapse;border-color:inherit;text-indent:0}button,input,optgroup,select,textarea{color:inherit;font-family:inherit;font-feature-settings:inherit;font-size:100%;font-variation-settings:inherit;font-weight:inherit;letter-spacing:inherit;line-height:inherit;margin:0;padding:0}button,select{text-transform:none}button,input:where([type=button]),input:where([type=reset]),input:where([type=submit]){-webkit-appearance:button;background-color:initial;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:initial}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset{margin:0}fieldset,legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::placeholder,textarea::placeholder{color:#9ca3af;opacity:1}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{height:auto;max-width:100%}[hidden]{display:none}*,::backdrop,:after,:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:#3b82f680;--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }.mt-32{margin-top:8rem}.flex{display:flex}.h-96{height:24rem}.flex-col{flex-direction:column}.items-center{align-items:center}.justify-center{justify-content:center}.text-4xl{font-size:2.25rem;line-height:2.5rem}.font-semibold{font-weight:600}.text-red-600{--tw-text-opacity:1;color:rgb(220 38 38/var(--tw-text-opacity))}.underline{text-decoration-line:underline}'];
  }
});

// .wrangler/tmp/pages-brm1ok/chunks/build/error-404-styles-1.mjs-DaBoFDuU.mjs
var a;
var init_error_404_styles_1_mjs_DaBoFDuU = __esm({
  ".wrangler/tmp/pages-brm1ok/chunks/build/error-404-styles-1.mjs-DaBoFDuU.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    a = '.spotlight[data-v-922baad2]{background:linear-gradient(45deg,#00dc82,#36e4da 50%,#0047e1);bottom:-30vh;filter:blur(20vh);height:40vh}.gradient-border[data-v-922baad2]{-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);border-radius:.5rem;position:relative}@media (prefers-color-scheme:light){.gradient-border[data-v-922baad2]{background-color:hsla(0,0%,100%,.3)}.gradient-border[data-v-922baad2]:before{background:linear-gradient(90deg,#e2e2e2,#e2e2e2 25%,#00dc82 50%,#36e4da 75%,#0047e1)}}@media (prefers-color-scheme:dark){.gradient-border[data-v-922baad2]{background-color:hsla(0,0%,8%,.3)}.gradient-border[data-v-922baad2]:before{background:linear-gradient(90deg,#303030,#303030 25%,#00dc82 50%,#36e4da 75%,#0047e1)}}.gradient-border[data-v-922baad2]:before{background-size:400% auto;border-radius:.5rem;bottom:0;content:"";left:0;-webkit-mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);-webkit-mask-composite:xor;mask-composite:exclude;opacity:.5;padding:2px;position:absolute;right:0;top:0;transition:background-position .3s ease-in-out,opacity .2s ease-in-out;width:100%}.gradient-border[data-v-922baad2]:hover:before{background-position:-50% 0;opacity:1}.fixed[data-v-922baad2]{position:fixed}.left-0[data-v-922baad2]{left:0}.right-0[data-v-922baad2]{right:0}.z-10[data-v-922baad2]{z-index:10}.z-20[data-v-922baad2]{z-index:20}.grid[data-v-922baad2]{display:grid}.mb-16[data-v-922baad2]{margin-bottom:4rem}.mb-8[data-v-922baad2]{margin-bottom:2rem}.max-w-520px[data-v-922baad2]{max-width:520px}.min-h-screen[data-v-922baad2]{min-height:100vh}.w-full[data-v-922baad2]{width:100%}.flex[data-v-922baad2]{display:flex}.cursor-pointer[data-v-922baad2]{cursor:pointer}.place-content-center[data-v-922baad2]{place-content:center}.items-center[data-v-922baad2]{align-items:center}.justify-center[data-v-922baad2]{justify-content:center}.overflow-hidden[data-v-922baad2]{overflow:hidden}.bg-white[data-v-922baad2]{--un-bg-opacity:1;background-color:rgb(255 255 255/var(--un-bg-opacity))}.px-4[data-v-922baad2]{padding-left:1rem;padding-right:1rem}.px-8[data-v-922baad2]{padding-left:2rem;padding-right:2rem}.py-2[data-v-922baad2]{padding-bottom:.5rem;padding-top:.5rem}.text-center[data-v-922baad2]{text-align:center}.text-8xl[data-v-922baad2]{font-size:6rem;line-height:1}.text-xl[data-v-922baad2]{font-size:1.25rem;line-height:1.75rem}.text-black[data-v-922baad2]{--un-text-opacity:1;color:rgb(0 0 0/var(--un-text-opacity))}.font-light[data-v-922baad2]{font-weight:300}.font-medium[data-v-922baad2]{font-weight:500}.leading-tight[data-v-922baad2]{line-height:1.25}.font-sans[data-v-922baad2]{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji}.antialiased[data-v-922baad2]{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}@media (prefers-color-scheme:dark){.dark\\:bg-black[data-v-922baad2]{--un-bg-opacity:1;background-color:rgb(0 0 0/var(--un-bg-opacity))}.dark\\:text-white[data-v-922baad2]{--un-text-opacity:1;color:rgb(255 255 255/var(--un-text-opacity))}}@media (min-width:640px){.sm\\:px-0[data-v-922baad2]{padding-left:0;padding-right:0}.sm\\:px-6[data-v-922baad2]{padding-left:1.5rem;padding-right:1.5rem}.sm\\:py-3[data-v-922baad2]{padding-bottom:.75rem;padding-top:.75rem}.sm\\:text-4xl[data-v-922baad2]{font-size:2.25rem;line-height:2.5rem}.sm\\:text-xl[data-v-922baad2]{font-size:1.25rem;line-height:1.75rem}}';
  }
});

// .wrangler/tmp/pages-brm1ok/chunks/build/error-404-styles.WpyeoFtc.mjs
var error_404_styles_WpyeoFtc_exports = {};
__export(error_404_styles_WpyeoFtc_exports, {
  default: () => o
});
var o;
var init_error_404_styles_WpyeoFtc = __esm({
  ".wrangler/tmp/pages-brm1ok/chunks/build/error-404-styles.WpyeoFtc.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    init_error_404_styles_1_mjs_DaBoFDuU();
    o = [a, a];
  }
});

// .wrangler/tmp/pages-brm1ok/chunks/build/error-500-styles-1.mjs-D_pjx06j.mjs
var t2;
var init_error_500_styles_1_mjs_D_pjx06j = __esm({
  ".wrangler/tmp/pages-brm1ok/chunks/build/error-500-styles-1.mjs-D_pjx06j.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    t2 = ".spotlight[data-v-1e3620c9]{background:linear-gradient(45deg,#00dc82,#36e4da 50%,#0047e1);filter:blur(20vh)}.fixed[data-v-1e3620c9]{position:fixed}.-bottom-1\\/2[data-v-1e3620c9]{bottom:-50%}.left-0[data-v-1e3620c9]{left:0}.right-0[data-v-1e3620c9]{right:0}.grid[data-v-1e3620c9]{display:grid}.mb-16[data-v-1e3620c9]{margin-bottom:4rem}.mb-8[data-v-1e3620c9]{margin-bottom:2rem}.h-1\\/2[data-v-1e3620c9]{height:50%}.max-w-520px[data-v-1e3620c9]{max-width:520px}.min-h-screen[data-v-1e3620c9]{min-height:100vh}.place-content-center[data-v-1e3620c9]{place-content:center}.overflow-hidden[data-v-1e3620c9]{overflow:hidden}.bg-white[data-v-1e3620c9]{--un-bg-opacity:1;background-color:rgb(255 255 255/var(--un-bg-opacity))}.px-8[data-v-1e3620c9]{padding-left:2rem;padding-right:2rem}.text-center[data-v-1e3620c9]{text-align:center}.text-8xl[data-v-1e3620c9]{font-size:6rem;line-height:1}.text-xl[data-v-1e3620c9]{font-size:1.25rem;line-height:1.75rem}.text-black[data-v-1e3620c9]{--un-text-opacity:1;color:rgb(0 0 0/var(--un-text-opacity))}.font-light[data-v-1e3620c9]{font-weight:300}.font-medium[data-v-1e3620c9]{font-weight:500}.leading-tight[data-v-1e3620c9]{line-height:1.25}.font-sans[data-v-1e3620c9]{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji}.antialiased[data-v-1e3620c9]{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}@media (prefers-color-scheme:dark){.dark\\:bg-black[data-v-1e3620c9]{--un-bg-opacity:1;background-color:rgb(0 0 0/var(--un-bg-opacity))}.dark\\:text-white[data-v-1e3620c9]{--un-text-opacity:1;color:rgb(255 255 255/var(--un-text-opacity))}}@media (min-width:640px){.sm\\:px-0[data-v-1e3620c9]{padding-left:0;padding-right:0}.sm\\:text-4xl[data-v-1e3620c9]{font-size:2.25rem;line-height:2.5rem}}";
  }
});

// .wrangler/tmp/pages-brm1ok/chunks/build/error-500-styles.BFuVBFDJ.mjs
var error_500_styles_BFuVBFDJ_exports = {};
__export(error_500_styles_BFuVBFDJ_exports, {
  default: () => r
});
var r;
var init_error_500_styles_BFuVBFDJ = __esm({
  ".wrangler/tmp/pages-brm1ok/chunks/build/error-500-styles.BFuVBFDJ.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    init_error_500_styles_1_mjs_D_pjx06j();
    r = [t2, t2];
  }
});

// .wrangler/tmp/pages-brm1ok/chunks/build/error-404-styles.CibK9Qn2.mjs
var error_404_styles_CibK9Qn2_exports = {};
__export(error_404_styles_CibK9Qn2_exports, {
  default: () => o2
});
var o2;
var init_error_404_styles_CibK9Qn2 = __esm({
  ".wrangler/tmp/pages-brm1ok/chunks/build/error-404-styles.CibK9Qn2.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    init_error_404_styles_1_mjs_DaBoFDuU();
    o2 = [a];
  }
});

// .wrangler/tmp/pages-brm1ok/chunks/build/error-500-styles.JhxDD0mW.mjs
var error_500_styles_JhxDD0mW_exports = {};
__export(error_500_styles_JhxDD0mW_exports, {
  default: () => r2
});
var r2;
var init_error_500_styles_JhxDD0mW = __esm({
  ".wrangler/tmp/pages-brm1ok/chunks/build/error-500-styles.JhxDD0mW.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    init_error_500_styles_1_mjs_D_pjx06j();
    r2 = [t2];
  }
});

// .wrangler/tmp/pages-brm1ok/chunks/build/styles.mjs
var styles_exports = {};
__export(styles_exports, {
  default: () => e3
});
var interopDefault, e3;
var init_styles = __esm({
  ".wrangler/tmp/pages-brm1ok/chunks/build/styles.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    interopDefault = (e6) => e6.default || e6 || [];
    e3 = { "node_modules/nuxt/dist/app/entry.js": () => Promise.resolve().then(() => (init_entry_styles_C_NqyOLw(), entry_styles_C_NqyOLw_exports)).then(interopDefault), "node_modules/nuxt/dist/app/components/error-404.vue": () => Promise.resolve().then(() => (init_error_404_styles_WpyeoFtc(), error_404_styles_WpyeoFtc_exports)).then(interopDefault), "node_modules/nuxt/dist/app/components/error-500.vue": () => Promise.resolve().then(() => (init_error_500_styles_BFuVBFDJ(), error_500_styles_BFuVBFDJ_exports)).then(interopDefault), "node_modules/nuxt/dist/app/components/error-404.vue?vue&type=style&index=0&scoped=922baad2&lang.css": () => Promise.resolve().then(() => (init_error_404_styles_CibK9Qn2(), error_404_styles_CibK9Qn2_exports)).then(interopDefault), "node_modules/nuxt/dist/app/components/error-500.vue?vue&type=style&index=0&scoped=1e3620c9&lang.css": () => Promise.resolve().then(() => (init_error_500_styles_JhxDD0mW(), error_500_styles_JhxDD0mW_exports)).then(interopDefault) };
  }
});

// .wrangler/tmp/pages-brm1ok/chunks/build/_plugin-vue_export-helper-rOXEZKYo.mjs
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
  ".wrangler/tmp/pages-brm1ok/chunks/build/_plugin-vue_export-helper-rOXEZKYo.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    init_server();
    init_renderer();
    _export_sfc = (s2, r4) => {
      const e6 = s2.__vccOpts || s2;
      for (const [s3, t4] of r4)
        e6[s3] = t4;
      return e6;
    };
  }
});

// .wrangler/tmp/pages-brm1ok/chunks/build/error-404-CcUH1itg.mjs
var error_404_CcUH1itg_exports = {};
__export(error_404_CcUH1itg_exports, {
  default: () => A
});
function defineNuxtLink(r4) {
  const n2 = r4.componentName || "NuxtLink";
  function resolveTrailingSlashBehavior(e6, t4) {
    if (!e6 || "append" !== r4.trailingSlash && "remove" !== r4.trailingSlash)
      return e6;
    if ("string" == typeof e6)
      return applyTrailingSlashBehavior(e6, r4.trailingSlash);
    const a3 = "path" in e6 && void 0 !== e6.path ? e6.path : t4(e6).path;
    return { ...e6, name: void 0, path: applyTrailingSlashBehavior(a3, r4.trailingSlash) };
  }
  function useNuxtLink(e6) {
    var r5, n3, o6;
    const d2 = useRouter(), c2 = useRuntimeConfig(), p2 = computed(() => !!e6.target && "_self" !== e6.target), v3 = computed(() => {
      const a3 = e6.to || e6.href || "";
      return "string" == typeof a3 && hasProtocol(a3, { acceptRelative: true });
    }), f2 = resolveComponent("RouterLink"), h3 = f2 && "string" != typeof f2 ? f2.useLink : void 0, g2 = computed(() => {
      if (e6.external)
        return true;
      const t4 = e6.to || e6.href || "";
      return "object" != typeof t4 && ("" === t4 || v3.value);
    }), m3 = computed(() => {
      const t4 = e6.to || e6.href || "";
      return g2.value ? t4 : resolveTrailingSlashBehavior(t4, d2.resolve);
    }), b3 = g2.value || null == h3 ? void 0 : h3({ ...e6, to: m3 }), x3 = computed(() => {
      var e7, t4;
      if (!m3.value || v3.value)
        return m3.value;
      if (g2.value) {
        const e8 = "object" == typeof m3.value && "path" in m3.value ? resolveRouteObject(m3.value) : m3.value;
        return resolveTrailingSlashBehavior("object" == typeof e8 ? d2.resolve(e8).href : e8, d2.resolve);
      }
      return "object" == typeof m3.value ? null != (e7 = null == (t4 = d2.resolve(m3.value)) ? void 0 : t4.href) ? e7 : null : resolveTrailingSlashBehavior(joinURL(c2.app.baseURL, m3.value), d2.resolve);
    });
    return { to: m3, hasTarget: p2, isAbsoluteUrl: v3, isExternal: g2, href: x3, isActive: null != (r5 = null == b3 ? void 0 : b3.isActive) ? r5 : computed(() => m3.value === d2.currentRoute.value.path), isExactActive: null != (n3 = null == b3 ? void 0 : b3.isExactActive) ? n3 : computed(() => m3.value === d2.currentRoute.value.path), route: null != (o6 = null == b3 ? void 0 : b3.route) ? o6 : computed(() => d2.resolve(m3.value)), async navigate() {
      await navigateTo(x3.value, { replace: e6.replace, external: g2.value || p2.value });
    } };
  }
  return defineComponent({ name: n2, props: { to: { type: [String, Object], default: void 0, required: false }, href: { type: [String, Object], default: void 0, required: false }, target: { type: String, default: void 0, required: false }, rel: { type: String, default: void 0, required: false }, noRel: { type: Boolean, default: void 0, required: false }, prefetch: { type: Boolean, default: void 0, required: false }, noPrefetch: { type: Boolean, default: void 0, required: false }, activeClass: { type: String, default: void 0, required: false }, exactActiveClass: { type: String, default: void 0, required: false }, prefetchedClass: { type: String, default: void 0, required: false }, replace: { type: Boolean, default: void 0, required: false }, ariaCurrentValue: { type: String, default: void 0, required: false }, external: { type: Boolean, default: void 0, required: false }, custom: { type: Boolean, default: void 0, required: false } }, useLink: useNuxtLink, setup(t4, { slots: a3 }) {
    useRouter();
    const { to: n3, href: o6, navigate: s2, isExternal: u3, hasTarget: l2, isAbsoluteUrl: d2 } = useNuxtLink(t4), c2 = ref(false);
    return () => {
      var i3;
      if (!u3.value && !l2.value) {
        const e6 = { ref: void 0, to: n3.value, activeClass: t4.activeClass || r4.activeClass, exactActiveClass: t4.exactActiveClass || r4.exactActiveClass, replace: t4.replace, ariaCurrentValue: t4.ariaCurrentValue, custom: t4.custom };
        return t4.custom || (c2.value && (e6.class = t4.prefetchedClass || r4.prefetchedClass), e6.rel = t4.rel || void 0), h(resolveComponent("RouterLink"), e6, a3.default);
      }
      const p2 = t4.target || null, v3 = ((...e6) => e6.find((e7) => void 0 !== e7))(t4.noRel ? "" : t4.rel, r4.externalRelAttribute, d2.value || l2.value ? "noopener noreferrer" : "") || null;
      return t4.custom ? a3.default ? a3.default({ href: o6.value, navigate: s2, get route() {
        if (!o6.value)
          return;
        const t5 = new URL(o6.value, "http://localhost");
        return { path: t5.pathname, fullPath: t5.pathname, get query() {
          return parseQuery(t5.search);
        }, hash: t5.hash, params: {}, name: void 0, matched: [], redirectedFrom: void 0, meta: {}, href: o6.value };
      }, rel: v3, target: p2, isExternal: u3.value || l2.value, isActive: false, isExactActive: false }) : null : h("a", { ref: void 0, href: o6.value || null, rel: v3, target: p2 }, null == (i3 = a3.default) ? void 0 : i3.call(a3));
    };
  } });
}
function applyTrailingSlashBehavior(e6, a3) {
  const i3 = "append" === a3 ? withTrailingSlash : withoutTrailingSlash;
  return hasProtocol(e6) && !e6.startsWith("http") ? e6 : i3(e6, true);
}
var j, q, z, A;
var init_error_404_CcUH1itg = __esm({
  ".wrangler/tmp/pages-brm1ok/chunks/build/error-404-CcUH1itg.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    init_runtime();
    init_server();
    init_plugin_vue_export_helper_rOXEZKYo();
    init_renderer();
    j = defineNuxtLink(oe);
    q = { __name: "error-404", __ssrInlineRender: true, props: { appName: { type: String, default: "Nuxt" }, version: { type: String, default: "" }, statusCode: { type: Number, default: 404 }, statusMessage: { type: String, default: "Not Found" }, description: { type: String, default: "Sorry, the page you are looking for could not be found." }, backHome: { type: String, default: "Go back home" } }, setup(e6) {
      const t4 = e6;
      return useHead({ title: `${t4.statusCode} - ${t4.statusMessage} | ${t4.appName}`, script: [], style: [{ children: '*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:var(--un-default-border-color, #e5e7eb)}:before,:after{--un-content:""}html{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{margin:0;line-height:inherit}h1{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}h1,p{margin:0}*,:before,:after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / .5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }' }] }), (t5, a3, r4, n2) => {
        const i3 = j;
        a3(`<div${ssrRenderAttrs(mergeProps({ class: "font-sans antialiased bg-white dark:bg-black text-black dark:text-white grid min-h-screen place-content-center overflow-hidden" }, n2))} data-v-922baad2><div class="fixed left-0 right-0 spotlight z-10" data-v-922baad2></div><div class="max-w-520px text-center z-20" data-v-922baad2><h1 class="text-8xl sm:text-10xl font-medium mb-8" data-v-922baad2>${ssrInterpolate(e6.statusCode)}</h1><p class="text-xl px-8 sm:px-0 sm:text-4xl font-light mb-16 leading-tight" data-v-922baad2>${ssrInterpolate(e6.description)}</p><div class="w-full flex items-center justify-center" data-v-922baad2>`), a3(ssrRenderComponent(i3, { to: "/", class: "gradient-border text-md sm:text-xl py-2 px-4 sm:py-3 sm:px-6 cursor-pointer" }, { default: withCtx((t6, a4, r5, n3) => {
          if (!a4)
            return [createTextVNode(toDisplayString(e6.backHome), 1)];
          a4(`${ssrInterpolate(e6.backHome)}`);
        }), _: 1 }, r4)), a3("</div></div></div>");
      };
    } };
    z = q.setup;
    q.setup = (e6, t4) => {
      const a3 = useSSRContext();
      return (a3.modules || (a3.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt/dist/app/components/error-404.vue"), z ? z(e6, t4) : void 0;
    };
    A = _export_sfc(q, [["__scopeId", "data-v-922baad2"]]);
  }
});

// .wrangler/tmp/pages-brm1ok/chunks/build/error-500-CTl04f3M.mjs
var error_500_CTl04f3M_exports = {};
__export(error_500_CTl04f3M_exports, {
  default: () => u
});
var o3, i, u;
var init_error_500_CTl04f3M = __esm({
  ".wrangler/tmp/pages-brm1ok/chunks/build/error-500-CTl04f3M.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    init_plugin_vue_export_helper_rOXEZKYo();
    init_renderer();
    init_server();
    init_runtime();
    o3 = { __name: "error-500", __ssrInlineRender: true, props: { appName: { type: String, default: "Nuxt" }, version: { type: String, default: "" }, statusCode: { type: Number, default: 500 }, statusMessage: { type: String, default: "Server error" }, description: { type: String, default: "This page is temporarily unavailable." } }, setup(e6) {
      const r4 = e6;
      return useHead({ title: `${r4.statusCode} - ${r4.statusMessage} | ${r4.appName}`, script: [], style: [{ children: '*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:var(--un-default-border-color, #e5e7eb)}:before,:after{--un-content:""}html{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{margin:0;line-height:inherit}h1{font-size:inherit;font-weight:inherit}h1,p{margin:0}*,:before,:after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / .5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }' }] }), (t4, r5, o6, i3) => {
        r5(`<div${ssrRenderAttrs(mergeProps({ class: "font-sans antialiased bg-white dark:bg-black text-black dark:text-white grid min-h-screen place-content-center overflow-hidden" }, i3))} data-v-1e3620c9><div class="fixed -bottom-1/2 left-0 right-0 h-1/2 spotlight" data-v-1e3620c9></div><div class="max-w-520px text-center" data-v-1e3620c9><h1 class="text-8xl sm:text-10xl font-medium mb-8" data-v-1e3620c9>${ssrInterpolate(e6.statusCode)}</h1><p class="text-xl px-8 sm:px-0 sm:text-4xl font-light mb-16 leading-tight" data-v-1e3620c9>${ssrInterpolate(e6.description)}</p></div></div>`);
      };
    } };
    i = o3.setup;
    o3.setup = (e6, t4) => {
      const n2 = useSSRContext();
      return (n2.modules || (n2.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt/dist/app/components/error-500.vue"), i ? i(e6, t4) : void 0;
    };
    u = _export_sfc(o3, [["__scopeId", "data-v-1e3620c9"]]);
  }
});

// .wrangler/tmp/pages-brm1ok/chunks/build/server.mjs
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
function getNuxtAppCtx(e6 = ie) {
  return getContext(e6, { asyncContext: false });
}
function registerPluginHooks(e6, t4) {
  t4.hooks && e6.hooks.addHooks(t4.hooks);
}
function defineNuxtPlugin(e6) {
  if ("function" == typeof e6)
    return e6;
  const t4 = e6._name || e6.name;
  return delete e6.name, Object.assign(e6.setup || (() => {
  }), e6, { [le]: true, _name: t4 });
}
function callWithNuxt(e6, t4, n2) {
  const fn2 = () => t4(), a3 = getNuxtAppCtx(e6._name);
  return e6.vueApp.runWithContext(() => a3.callAsync(e6, fn2));
}
function useNuxtApp(e6) {
  const t4 = function(e7) {
    var t5;
    let n2;
    return hasInjectionContext() && (n2 = null == (t5 = getCurrentInstance()) ? void 0 : t5.appContext.app.$nuxt), n2 = n2 || getNuxtAppCtx(e7).tryUse(), n2 || null;
  }(e6);
  if (!t4)
    throw new Error("[nuxt] instance unavailable");
  return t4;
}
function useRuntimeConfig(e6) {
  return useNuxtApp().$config;
}
function defineGetter(e6, t4, n2) {
  Object.defineProperty(e6, t4, { get: () => n2 });
}
function defineNuxtRouteMiddleware(e6) {
  return e6;
}
function resolveRouteObject(e6) {
  return withQuery(e6.path || "", e6.query || {}) + (e6.hash || "");
}
function resolveUnrefHeadInput(e6, t4 = "") {
  if (e6 instanceof Promise)
    return e6;
  const n2 = "function" == typeof (a3 = e6) ? a3() : unref(a3);
  var a3;
  return e6 && n2 ? Array.isArray(n2) ? n2.map((e7) => resolveUnrefHeadInput(e7, t4)) : "object" == typeof n2 ? Object.fromEntries(Object.entries(n2).map(([e7, t5]) => "titleTemplate" === e7 || e7.startsWith("on") ? [e7, unref(t5)] : [e7, resolveUnrefHeadInput(t5, e7)])) : n2 : n2;
}
function injectHead() {
  if (pe in de)
    return de[pe]();
  const e6 = inject("usehead");
  return e6 || getActiveHead();
}
function getRouteFromPath(e6) {
  "object" == typeof e6 && (e6 = stringifyParsedURL({ pathname: e6.path || "", search: stringifyQuery(e6.query || {}), hash: e6.hash || "" }));
  const t4 = new URL(e6.toString(), "http://localhost");
  return { path: t4.pathname, fullPath: e6, query: parseQuery(t4.search), hash: t4.hash, params: {}, name: void 0, matched: [], redirectedFrom: void 0, meta: {}, href: e6 };
}
function useRequestFetch() {
  var e6;
  return (null == (e6 = function(e7 = useNuxtApp()) {
    var t4;
    return null == (t4 = e7.ssrContext) ? void 0 : t4.event;
  }()) ? void 0 : e6.$fetch) || globalThis.$fetch;
}
function useAsyncData(...e6) {
  var t4;
  const n2 = "string" == typeof e6[e6.length - 1] ? e6.pop() : void 0;
  "string" != typeof e6[0] && e6.unshift(n2);
  let [a3, o6, r4 = {}] = e6;
  if ("string" != typeof a3)
    throw new TypeError("[nuxt] [asyncData] key must be a string.");
  if ("function" != typeof o6)
    throw new TypeError("[nuxt] [asyncData] handler must be a function.");
  const s2 = useNuxtApp(), i3 = o6;
  r4.server = r4.server ?? true, r4.default = r4.default ?? (() => re.value), r4.getCachedData = r4.getCachedData ?? (() => s2.isHydrating ? s2.payload.data[a3] : s2.static.data[a3]), r4.lazy = r4.lazy ?? false, r4.immediate = r4.immediate ?? true, r4.deep = r4.deep ?? re.deep, r4.dedupe = r4.dedupe ?? "cancel";
  const hasCachedData = () => null != r4.getCachedData(a3, s2);
  if (!s2._asyncData[a3] || !r4.immediate) {
    (t4 = s2.payload._errors)[a3] ?? (t4[a3] = re.errorValue);
    const e7 = r4.deep ? ref : shallowRef;
    s2._asyncData[a3] = { data: e7(r4.getCachedData(a3, s2) ?? r4.default()), pending: ref(!hasCachedData()), error: toRef(s2.payload._errors, a3), status: ref("idle"), _default: r4.default };
  }
  const l2 = { ...s2._asyncData[a3] };
  delete l2._default, l2.refresh = l2.execute = (e7 = {}) => {
    if (s2._asyncDataPromises[a3]) {
      if (isDefer(e7.dedupe ?? r4.dedupe))
        return s2._asyncDataPromises[a3];
      s2._asyncDataPromises[a3].cancelled = true;
    }
    if ((e7._initial || s2.isHydrating && false !== e7._initial) && hasCachedData())
      return Promise.resolve(r4.getCachedData(a3, s2));
    l2.pending.value = true, l2.status.value = "pending";
    const t5 = new Promise((e8, t6) => {
      try {
        e8(i3(s2));
      } catch (e9) {
        t6(e9);
      }
    }).then(async (e8) => {
      if (t5.cancelled)
        return s2._asyncDataPromises[a3];
      let n3 = e8;
      r4.transform && (n3 = await r4.transform(e8)), r4.pick && (n3 = function(e9, t6) {
        const n4 = {};
        for (const a4 of t6)
          n4[a4] = e9[a4];
        return n4;
      }(n3, r4.pick)), s2.payload.data[a3] = n3, l2.data.value = n3, l2.error.value = re.errorValue, l2.status.value = "success";
    }).catch((e8) => {
      if (t5.cancelled)
        return s2._asyncDataPromises[a3];
      l2.error.value = createError2(e8), l2.data.value = unref(r4.default()), l2.status.value = "error";
    }).finally(() => {
      t5.cancelled || (l2.pending.value = false, delete s2._asyncDataPromises[a3]);
    });
    return s2._asyncDataPromises[a3] = t5, s2._asyncDataPromises[a3];
  }, l2.clear = () => function(e7, t5) {
    t5 in e7.payload.data && (e7.payload.data[t5] = void 0);
    t5 in e7.payload._errors && (e7.payload._errors[t5] = re.errorValue);
    e7._asyncData[t5] && (e7._asyncData[t5].data.value = void 0, e7._asyncData[t5].error.value = re.errorValue, e7._asyncData[t5].pending.value = false, e7._asyncData[t5].status.value = "idle");
    t5 in e7._asyncDataPromises && (e7._asyncDataPromises[t5] && (e7._asyncDataPromises[t5].cancelled = true), e7._asyncDataPromises[t5] = void 0);
  }(s2, a3);
  if (false !== r4.server && s2.payload.serverRendered && r4.immediate) {
    const e7 = l2.refresh({ _initial: true });
    getCurrentInstance() ? Be(() => e7) : s2.hook("app:created", async () => {
      await e7;
    });
  }
  const u3 = Promise.resolve(s2._asyncDataPromises[a3]).then(() => l2);
  return Object.assign(u3, l2), u3;
}
function generateOptionSegments(e6) {
  var t4;
  const n2 = [(null == (t4 = toValue(e6.method)) ? void 0 : t4.toUpperCase()) || "GET", toValue(e6.baseURL)];
  for (const t5 of [e6.params || e6.query]) {
    const e7 = toValue(t5);
    if (!e7)
      continue;
    const a3 = {};
    for (const [t6, n3] of Object.entries(e7))
      a3[toValue(t6)] = toValue(n3);
    n2.push(a3);
  }
  return n2;
}
var Z, ee, te2, getContext, ne, ae, oe, re, se, ie, le, ue, useRouter, navigateTo, ce, useError, showError, createError2, de, pe, fe, ve, he, ye, ge, me, xe, _e, isDefer, we, be, Ce2, Re, Pe, ke, Ae, entry$1;
var init_server = __esm({
  ".wrangler/tmp/pages-brm1ok/chunks/build/server.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    init_runtime();
    init_renderer();
    Z = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof global ? global : {};
    ee = "__unctx__";
    te2 = Z[ee] || (Z[ee] = function(e6 = {}) {
      const t4 = {};
      return { get: (n2, a3 = {}) => (t4[n2] || (t4[n2] = function(e7 = {}) {
        let t5, n3 = false;
        const checkConflict = (e8) => {
          if (t5 && t5 !== e8)
            throw new Error("Context conflict");
        };
        let a4;
        if (e7.asyncContext) {
          const t6 = e7.AsyncLocalStorage || globalThis.AsyncLocalStorage;
          t6 ? a4 = new t6() : console.warn("[unctx] `AsyncLocalStorage` is not provided.");
        }
        const _getCurrentInstance = () => {
          if (a4 && void 0 === t5) {
            const e8 = a4.getStore();
            if (void 0 !== e8)
              return e8;
          }
          return t5;
        };
        return { use: () => {
          const e8 = _getCurrentInstance();
          if (void 0 === e8)
            throw new Error("Context is not available");
          return e8;
        }, tryUse: () => _getCurrentInstance(), set: (e8, a5) => {
          a5 || checkConflict(e8), t5 = e8, n3 = true;
        }, unset: () => {
          t5 = void 0, n3 = false;
        }, call: (e8, o6) => {
          checkConflict(e8), t5 = e8;
          try {
            return a4 ? a4.run(e8, o6) : o6();
          } finally {
            n3 || (t5 = void 0);
          }
        }, async callAsync(e8, o6) {
          t5 = e8;
          const onRestore = () => {
            t5 = e8;
          }, onLeave = () => t5 === e8 ? onRestore : void 0;
          ae.add(onLeave);
          try {
            const r4 = a4 ? a4.run(e8, o6) : o6();
            return n3 || (t5 = void 0), await r4;
          } finally {
            ae.delete(onLeave);
          }
        } };
      }({ ...e6, ...a3 })), t4[n2], t4[n2]) };
    }());
    getContext = (e6, t4 = {}) => te2.get(e6, t4);
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
      var e6;
      return null == (e6 = useNuxtApp()) ? void 0 : e6.$router;
    };
    navigateTo = (e6, o6) => {
      e6 || (e6 = "/");
      const s2 = "string" == typeof e6 ? e6 : "path" in e6 ? resolveRouteObject(e6) : useRouter().resolve(e6).href, i3 = hasProtocol(s2, { acceptRelative: true }), l2 = (null == o6 ? void 0 : o6.external) || i3;
      if (l2) {
        if (!(null == o6 ? void 0 : o6.external))
          throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");
        const { protocol: e7 } = new URL(s2, "http://localhost");
        if (e7 && isScriptProtocol(e7))
          throw new Error(`Cannot navigate to a URL with '${e7}' protocol.`);
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
        const t4 = "string" == typeof e6 || l2 ? s2 : c2.resolve(e6).fullPath || "/", n2 = l2 ? s2 : joinURL(useRuntimeConfig().app.baseURL, t4), redirect = async function(e7) {
          await d2.callHook("app:redirected");
          const t5 = n2.replace(/"/g, "%22"), a3 = function(e8, t6 = false) {
            const n3 = new URL(e8, "http://localhost");
            if (!t6)
              return n3.pathname + n3.search + n3.hash;
            if (e8.startsWith("//"))
              return n3.toString().replace(n3.protocol, "");
            return n3.toString();
          }(n2, i3);
          return d2.ssrContext._renderResponse = { statusCode: sanitizeStatusCode((null == o6 ? void 0 : o6.redirectCode) || 302, 302), body: `<!DOCTYPE html><html><head><meta http-equiv="refresh" content="0; url=${t5}"></head></html>`, headers: { location: a3 } }, e7;
        };
        return !l2 && u3 ? (c2.afterEach((e7) => e7.fullPath === t4 ? redirect(false) : void 0), e6) : redirect(!u3 && void 0);
      }
      return l2 ? (d2._scope.stop(), (null == o6 ? void 0 : o6.replace) ? (void 0).replace(s2) : (void 0).href = s2, u3 ? !!d2.isHydrating && new Promise(() => {
      }) : Promise.resolve()) : (null == o6 ? void 0 : o6.replace) ? c2.replace(e6) : c2.push(e6);
    };
    ce = "__nuxt_error";
    useError = () => toRef(useNuxtApp().payload, "error");
    showError = (e6) => {
      const t4 = createError2(e6);
      try {
        useNuxtApp();
        const e7 = useError();
        0, e7.value = e7.value || t4;
      } catch {
        throw t4;
      }
      return t4;
    };
    createError2 = (e6) => {
      const t4 = createError(e6);
      return Object.defineProperty(t4, ce, { value: true, configurable: false, writable: false }), t4;
    };
    de = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
    pe = "__unhead_injection_handler__";
    fe = defineNuxtPlugin({ name: "nuxt:head", enforce: "pre", setup(e6) {
      const t4 = e6.ssrContext.head;
      var n2;
      n2 = () => useNuxtApp().vueApp._context.provides.usehead, de[pe] = n2, e6.vueApp.use(t4);
    } });
    ve = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof global ? global : {};
    he = "__unctx__";
    ve[he] || (ve[he] = function(e6 = {}) {
      const t4 = {};
      return { get: (n2, a3 = {}) => (t4[n2] || (t4[n2] = function(e7 = {}) {
        let t5, n3 = false;
        const checkConflict = (e8) => {
          if (t5 && t5 !== e8)
            throw new Error("Context conflict");
        };
        let a4;
        if (e7.asyncContext) {
          const t6 = e7.AsyncLocalStorage || globalThis.AsyncLocalStorage;
          t6 ? a4 = new t6() : console.warn("[unctx] `AsyncLocalStorage` is not provided.");
        }
        const _getCurrentInstance = () => {
          if (a4 && void 0 === t5) {
            const e8 = a4.getStore();
            if (void 0 !== e8)
              return e8;
          }
          return t5;
        };
        return { use: () => {
          const e8 = _getCurrentInstance();
          if (void 0 === e8)
            throw new Error("Context is not available");
          return e8;
        }, tryUse: () => _getCurrentInstance(), set: (e8, a5) => {
          a5 || checkConflict(e8), t5 = e8, n3 = true;
        }, unset: () => {
          t5 = void 0, n3 = false;
        }, call: (e8, o6) => {
          checkConflict(e8), t5 = e8;
          try {
            return a4 ? a4.run(e8, o6) : o6();
          } finally {
            n3 || (t5 = void 0);
          }
        }, async callAsync(e8, o6) {
          t5 = e8;
          const onRestore = () => {
            t5 = e8;
          }, onLeave = () => t5 === e8 ? onRestore : void 0;
          ge.add(onLeave);
          try {
            const r4 = a4 ? a4.run(e8, o6) : o6();
            return n3 || (t5 = void 0), await r4;
          } finally {
            ge.delete(onLeave);
          }
        } };
      }({ ...e6, ...a3 })), t4[n2], t4[n2]) };
    }());
    ye = "__unctx_async_handlers__";
    ge = ve[ye] || (ve[ye] = /* @__PURE__ */ new Set());
    me = [defineNuxtRouteMiddleware(async (e6) => {
    })];
    xe = { NuxtError: (e6) => {
      return !!(t4 = e6) && "object" == typeof t4 && ce in t4 && e6.toJSON();
      var t4;
    }, EmptyShallowRef: (e6) => isRef(e6) && isShallow(e6) && !e6.value && ("bigint" == typeof e6.value ? "0n" : JSON.stringify(e6.value) || "_"), EmptyRef: (e6) => isRef(e6) && !e6.value && ("bigint" == typeof e6.value ? "0n" : JSON.stringify(e6.value) || "_"), ShallowRef: (e6) => isRef(e6) && isShallow(e6) && e6.value, ShallowReactive: (e6) => isReactive(e6) && isShallow(e6) && toRaw(e6), Ref: (e6) => isRef(e6) && e6.value, Reactive: (e6) => isReactive(e6) && toRaw(e6) };
    _e = [fe, defineNuxtPlugin({ name: "nuxt:router", enforce: "pre", setup(e6) {
      const t4 = e6.ssrContext.url, n2 = [], a3 = { "navigate:before": [], "resolve:before": [], "navigate:after": [], error: [] }, registerHook = (e7, t5) => (a3[e7].push(t5), () => a3[e7].splice(a3[e7].indexOf(t5), 1));
      useRuntimeConfig().app.baseURL;
      const o6 = reactive(getRouteFromPath(t4));
      async function handleNavigation(e7, t5) {
        try {
          const t6 = getRouteFromPath(e7);
          for (const e8 of a3["navigate:before"]) {
            const n3 = await e8(t6, o6);
            if (false === n3 || n3 instanceof Error)
              return;
            if ("string" == typeof n3 && n3.length)
              return handleNavigation(n3, true);
          }
          for (const e8 of a3["resolve:before"])
            await e8(t6, o6);
          Object.assign(o6, t6);
          for (const e8 of a3["navigate:after"])
            await e8(t6, o6);
        } catch (e8) {
          for (const t6 of a3.error)
            await t6(e8);
        }
      }
      const r4 = { currentRoute: computed(() => o6), isReady: () => Promise.resolve(), options: {}, install: () => Promise.resolve(), push: (e7) => handleNavigation(e7), replace: (e7) => handleNavigation(e7), back: () => (void 0).history.go(-1), go: (e7) => (void 0).history.go(e7), forward: () => (void 0).history.go(1), beforeResolve: (e7) => registerHook("resolve:before", e7), beforeEach: (e7) => registerHook("navigate:before", e7), afterEach: (e7) => registerHook("navigate:after", e7), onError: (e7) => registerHook("error", e7), resolve: getRouteFromPath, addRoute: (e7, t5) => {
        n2.push(t5);
      }, getRoutes: () => n2, hasRoute: (e7) => n2.some((t5) => t5.name === e7), removeRoute: (e7) => {
        const t5 = n2.findIndex((t6) => t6.name === e7);
        -1 !== t5 && n2.splice(t5, 1);
      } };
      e6.vueApp.component("RouterLink", defineComponent({ functional: true, props: { to: { type: String, required: true }, custom: Boolean, replace: Boolean, activeClass: String, exactActiveClass: String, ariaCurrentValue: String }, setup: (e7, { slots: t5 }) => {
        const navigate = () => handleNavigation(e7.to, e7.replace);
        return () => {
          var n3;
          const a4 = r4.resolve(e7.to);
          return e7.custom ? null == (n3 = t5.default) ? void 0 : n3.call(t5, { href: e7.to, navigate, route: a4 }) : h("a", { href: e7.to, onClick: (e8) => (e8.preventDefault(), navigate()) }, t5);
        };
      } })), e6._route = o6, e6._middleware = e6._middleware || { global: [], named: {} };
      const s2 = e6.payload.state._layout;
      return e6.hooks.hookOnce("app:created", async () => {
        r4.beforeEach(async (n3, a4) => {
          var o7;
          if (n3.meta = reactive(n3.meta || {}), e6.isHydrating && s2 && !isReadonly(n3.meta.layout) && (n3.meta.layout = s2), e6._processingMiddleware = true, !(null == (o7 = e6.ssrContext) ? void 0 : o7.islandContext)) {
            const o8 = /* @__PURE__ */ new Set([...me, ...e6._middleware.global]);
            {
              const t5 = await e6.runWithContext(() => async function(e7) {
                {
                  const t6 = toRouteMatcher(createRouter$1({ routes: useRuntimeConfig().nitro.routeRules }));
                  return te({}, ...t6.matchAll(e7).reverse());
                }
              }(n3.path));
              if (t5.appMiddleware)
                for (const n4 in t5.appMiddleware) {
                  const a5 = e6._middleware.named[n4];
                  if (!a5)
                    return;
                  t5.appMiddleware[n4] ? o8.add(a5) : o8.delete(a5);
                }
            }
            for (const r5 of o8) {
              const o9 = await e6.runWithContext(() => r5(n3, a4));
              if (false === o9 || o9 instanceof Error) {
                const n4 = o9 || createError({ statusCode: 404, statusMessage: `Page Not Found: ${t4}`, data: { path: t4 } });
                return delete e6._processingMiddleware, e6.runWithContext(() => showError(n4));
              }
              if (true !== o9 && (o9 || false === o9))
                return o9;
            }
          }
        }), r4.afterEach(() => {
          delete e6._processingMiddleware;
        }), await r4.replace(t4), isEqual(o6.fullPath, t4) || await e6.runWithContext(() => navigateTo(o6.fullPath));
      }), { provide: { route: o6, router: r4 } };
    } }), defineNuxtPlugin({ name: "nuxt:revive-payload:server", setup() {
      for (const n2 in xe)
        e6 = n2, t4 = xe[n2], useNuxtApp().ssrContext._payloadReducers[e6] = t4;
      var e6, t4;
    } }), defineNuxtPlugin({ name: "nuxt:global-components" })];
    isDefer = (e6) => "defer" === e6 || false === e6;
    we = defineComponent({ __name: "app", __ssrInlineRender: true, async setup(e6) {
      let t4, n2;
      const { data: a3 } = ([t4, n2] = withAsyncContext(() => function(e7, t5) {
        const [n3 = {}, a4] = [{}, t5], o6 = computed(() => toValue(e7)), r4 = n3.key || hash([a4, "string" == typeof o6.value ? o6.value : "", ...generateOptionSegments(n3)]);
        if (!r4 || "string" != typeof r4)
          throw new TypeError("[nuxt] [useFetch] key must be a string: " + r4);
        const s2 = r4 === a4 ? "$f" + r4 : r4;
        if (!n3.baseURL && "string" == typeof o6.value && "/" === o6.value[0] && "/" === o6.value[1])
          throw new Error('[nuxt] [useFetch] the request URL must not start with "//".');
        const { server: i3, lazy: l2, default: c2, transform: d2, pick: p2, watch: f2, immediate: v3, getCachedData: h3, deep: y3, dedupe: g2, ...m3 } = n3, x3 = reactive({ ...se, ...m3, cache: "boolean" == typeof n3.cache ? void 0 : n3.cache });
        let _3;
        return useAsyncData(s2, () => {
          var e8;
          null == (e8 = null == _3 ? void 0 : _3.abort) || e8.call(_3), _3 = "undefined" != typeof AbortController ? new AbortController() : {};
          const t6 = toValue(n3.timeout);
          let a5;
          t6 && (a5 = setTimeout(() => _3.abort(), t6), _3.signal.onabort = () => clearTimeout(a5));
          let r5 = n3.$fetch || globalThis.$fetch;
          return n3.$fetch || "string" == typeof o6.value && "/" === o6.value[0] && (!toValue(n3.baseURL) || "/" === toValue(n3.baseURL)[0]) && (r5 = useRequestFetch()), r5(o6.value, { signal: _3.signal, ...x3 }).finally(() => {
            clearTimeout(a5);
          });
        }, { server: i3, lazy: l2, default: c2, transform: d2, pick: p2, immediate: v3, getCachedData: h3, deep: y3, dedupe: g2, watch: false === f2 ? [] : [x3, o6, ...f2 || []] });
      }("/api/teste", "$siNM9WAguS")), t4 = await t4, n2(), t4);
      return (e7, t5, n3, o6) => {
        t5(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col h-96 justify-center items-center" }, o6))}><div class="text-4xl font-semibold">Hi with <span class="underline text-red-600">TailwindCSS</span></div><pre class="mt-32"><code> ${ssrInterpolate(unref(a3) || "vazio")}</code></pre></div>`);
      };
    } });
    be = we.setup;
    we.setup = (e6, t4) => {
      const n2 = useSSRContext();
      return (n2.modules || (n2.modules = /* @__PURE__ */ new Set())).add("app.vue"), be ? be(e6, t4) : void 0;
    };
    Ce2 = { __name: "nuxt-error-page", __ssrInlineRender: true, props: { error: Object }, setup(e6) {
      const t4 = e6.error;
      t4.stack && t4.stack.split("\n").splice(1).map((e7) => ({ text: e7.replace("webpack:/", "").replace(".vue", ".js").trim(), internal: e7.includes("node_modules") && !e7.includes(".cache") || e7.includes("internal") || e7.includes("new Promise") })).map((e7) => `<span class="stack${e7.internal ? " internal" : ""}">${e7.text}</span>`).join("\n");
      const n2 = Number(t4.statusCode || 500), a3 = 404 === n2, o6 = t4.statusMessage ?? (a3 ? "Page Not Found" : "Internal Server Error"), r4 = t4.message || t4.toString(), s2 = defineAsyncComponent(() => Promise.resolve().then(() => (init_error_404_CcUH1itg(), error_404_CcUH1itg_exports)).then((e7) => e7.default || e7)), i3 = defineAsyncComponent(() => Promise.resolve().then(() => (init_error_500_CTl04f3M(), error_500_CTl04f3M_exports)).then((e7) => e7.default || e7)), l2 = a3 ? s2 : i3;
      return (e7, t5, a4, s3) => {
        t5(ssrRenderComponent(unref(l2), mergeProps({ statusCode: unref(n2), statusMessage: unref(o6), description: unref(r4), stack: unref(void 0) }, s3), null, a4));
      };
    } };
    Re = Ce2.setup;
    Ce2.setup = (e6, t4) => {
      const n2 = useSSRContext();
      return (n2.modules || (n2.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt/dist/app/components/nuxt-error-page.vue"), Re ? Re(e6, t4) : void 0;
    };
    Pe = { __name: "nuxt-root", __ssrInlineRender: true, setup(e6) {
      const IslandRenderer = () => null, t4 = useNuxtApp();
      t4.deferHydration(), t4.ssrContext.url;
      const n2 = false;
      provide(ue, hasInjectionContext() ? inject(ue, useNuxtApp()._route) : useNuxtApp()._route), t4.hooks.callHookWith((e7) => e7.map((e8) => e8()), "vue:setup");
      const a3 = useError(), o6 = a3.value && !t4.ssrContext.error;
      onErrorCaptured((e7, n3, a4) => {
        t4.hooks.callHook("vue:error", e7, n3, a4).catch((e8) => console.error("[nuxt] Error in `vue:error` hook", e8));
        {
          const n4 = t4.runWithContext(() => showError(e7));
          return Be(() => n4), false;
        }
      });
      const r4 = t4.ssrContext.islandContext;
      return (e7, t5, s2, i3) => {
        ssrRenderSuspense(t5, { default: () => {
          unref(o6) ? t5("<div></div>") : unref(a3) ? t5(ssrRenderComponent(unref(Ce2), { error: unref(a3) }, null, s2)) : unref(r4) ? t5(ssrRenderComponent(unref(IslandRenderer), { context: unref(r4) }, null, s2)) : unref(n2) ? renderVNode(t5, createVNode(resolveDynamicComponent(unref(n2)), null, null), s2) : t5(ssrRenderComponent(unref(we), null, null, s2));
        }, _: 1 });
      };
    } };
    ke = Pe.setup;
    Pe.setup = (e6, t4) => {
      const n2 = useSSRContext();
      return (n2.modules || (n2.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt/dist/app/components/nuxt-root.vue"), ke ? ke(e6, t4) : void 0;
    }, Ae = async function(e6) {
      const t4 = createApp(Pe), n2 = function(e7) {
        let t5 = 0;
        const n3 = { _name: ie, _scope: effectScope(), provide: void 0, globalName: "nuxt", versions: { get nuxt() {
          return "3.12.4";
        }, get vue() {
          return n3.vueApp.version;
        } }, payload: shallowReactive({ data: shallowReactive({}), state: reactive({}), once: /* @__PURE__ */ new Set(), _errors: shallowReactive({}) }), static: { data: {} }, runWithContext: (e8) => n3._scope.active && !getCurrentScope() ? n3._scope.run(() => callWithNuxt(n3, e8)) : callWithNuxt(n3, e8), isHydrating: false, deferHydration() {
          if (!n3.isHydrating)
            return () => {
            };
          t5++;
          let e8 = false;
          return () => {
            if (!e8)
              return e8 = true, t5--, 0 === t5 ? (n3.isHydrating = false, n3.callHook("app:suspense:resolve")) : void 0;
          };
        }, _asyncDataPromises: {}, _asyncData: shallowReactive({}), _payloadRevivers: {}, ...e7 };
        n3.payload.serverRendered = true, n3.hooks = createHooks(), n3.hook = n3.hooks.hook;
        {
          const contextCaller = async function(e8, t6) {
            for (const a4 of e8)
              await n3.runWithContext(() => a4(...t6));
          };
          n3.hooks.callHook = (e8, ...t6) => n3.hooks.callHookWith(contextCaller, e8, ...t6);
        }
        n3.callHook = n3.hooks.callHook, n3.provide = (e8, t6) => {
          const a4 = "$" + e8;
          defineGetter(n3, a4, t6), defineGetter(n3.vueApp.config.globalProperties, a4, t6);
        }, defineGetter(n3.vueApp, "$nuxt", n3), defineGetter(n3.vueApp.config.globalProperties, "$nuxt", n3), n3.ssrContext && (n3.ssrContext.nuxt = n3, n3.ssrContext._payloadReducers = {}, n3.payload.path = n3.ssrContext.url), n3.ssrContext = n3.ssrContext || {}, n3.ssrContext.payload && Object.assign(n3.payload, n3.ssrContext.payload), n3.ssrContext.payload = n3.payload, n3.ssrContext.config = { public: e7.ssrContext.runtimeConfig.public, app: e7.ssrContext.runtimeConfig.app };
        const a3 = e7.ssrContext.runtimeConfig;
        return n3.provide("config", a3), n3;
      }({ vueApp: t4, ssrContext: e6 });
      try {
        await async function(e7, t5) {
          var n3, a3, o6, r4;
          const s2 = [], i3 = [], l2 = [], u3 = [];
          let c2 = 0;
          async function executePlugin(n4) {
            var a4;
            const o7 = (null == (a4 = n4.dependsOn) ? void 0 : a4.filter((e8) => t5.some((t6) => t6._name === e8) && !s2.includes(e8))) ?? [];
            if (o7.length > 0)
              i3.push([new Set(o7), n4]);
            else {
              const t6 = async function(e8, t7) {
                if ("function" == typeof t7) {
                  const { provide: n5 } = await e8.runWithContext(() => t7(e8)) || {};
                  if (n5 && "object" == typeof n5)
                    for (const t8 in n5)
                      e8.provide(t8, n5[t8]);
                }
              }(e7, n4).then(async () => {
                n4._name && (s2.push(n4._name), await Promise.all(i3.map(async ([e8, t7]) => {
                  e8.has(n4._name) && (e8.delete(n4._name), 0 === e8.size && (c2++, await executePlugin(t7)));
                })));
              });
              n4.parallel ? l2.push(t6.catch((e8) => u3.push(e8))) : await t6;
            }
          }
          for (const o7 of t5)
            (null == (n3 = e7.ssrContext) ? void 0 : n3.islandContext) && false === (null == (a3 = o7.env) ? void 0 : a3.islands) || registerPluginHooks(e7, o7);
          for (const n4 of t5)
            (null == (o6 = e7.ssrContext) ? void 0 : o6.islandContext) && false === (null == (r4 = n4.env) ? void 0 : r4.islands) || await executePlugin(n4);
          if (await Promise.all(l2), c2)
            for (let e8 = 0; e8 < c2; e8++)
              await Promise.all(l2);
          if (u3.length)
            throw u3[0];
        }(n2, _e), await n2.hooks.callHook("app:created", t4);
      } catch (e7) {
        await n2.hooks.callHook("app:error", e7), n2.payload.error = n2.payload.error || createError2(e7);
      }
      if (null == e6 ? void 0 : e6._renderResponse)
        throw new Error("skipping render");
      return t4;
    };
    entry$1 = (e6) => Ae(e6);
  }
});

// .wrangler/tmp/pages-brm1ok/chunks/virtual/_virtual_spa-template.mjs
var virtual_spa_template_exports = {};
__export(virtual_spa_template_exports, {
  template: () => o4
});
var o4;
var init_virtual_spa_template = __esm({
  ".wrangler/tmp/pages-brm1ok/chunks/virtual/_virtual_spa-template.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    o4 = "";
  }
});

// .wrangler/tmp/pages-brm1ok/chunks/routes/renderer.mjs
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
function getModuleDependencies(e6, t4) {
  if (t4._dependencies[e6])
    return t4._dependencies[e6];
  const n2 = t4._dependencies[e6] = { scripts: {}, styles: {}, preload: {}, prefetch: {} }, r4 = t4.manifest[e6];
  if (!r4)
    return n2;
  r4.file && (n2.preload[e6] = r4, (r4.isEntry || r4.sideEffects) && (n2.scripts[e6] = r4));
  for (const e7 of r4.css || [])
    n2.styles[e7] = n2.preload[e7] = n2.prefetch[e7] = t4.manifest[e7];
  for (const e7 of r4.assets || [])
    n2.preload[e7] = n2.prefetch[e7] = t4.manifest[e7];
  for (const e7 of r4.imports || []) {
    const r5 = getModuleDependencies(e7, t4);
    Object.assign(n2.styles, r5.styles), Object.assign(n2.preload, r5.preload), Object.assign(n2.prefetch, r5.prefetch);
  }
  const o6 = {};
  for (const e7 in n2.preload) {
    const t5 = n2.preload[e7];
    t5.preload && (o6[e7] = t5);
  }
  return n2.preload = o6, n2;
}
function getRequestDependencies(e6, t4) {
  if (e6._requestDependencies)
    return e6._requestDependencies;
  const n2 = function(e7, t5) {
    const n3 = Array.from(e7).sort().join(",");
    if (t5._dependencySets[n3])
      return t5._dependencySets[n3];
    const r4 = { scripts: {}, styles: {}, preload: {}, prefetch: {} };
    for (const n4 of e7) {
      const e8 = getModuleDependencies(n4, t5);
      Object.assign(r4.scripts, e8.scripts), Object.assign(r4.styles, e8.styles), Object.assign(r4.preload, e8.preload), Object.assign(r4.prefetch, e8.prefetch);
      for (const e9 of t5.manifest[n4]?.dynamicImports || []) {
        const n5 = getModuleDependencies(e9, t5);
        Object.assign(r4.prefetch, n5.scripts), Object.assign(r4.prefetch, n5.styles), Object.assign(r4.prefetch, n5.preload);
      }
    }
    const o6 = {};
    for (const e8 in r4.prefetch) {
      const t6 = r4.prefetch[e8];
      t6.prefetch && (o6[e8] = t6);
    }
    r4.prefetch = o6;
    for (const e8 in r4.preload)
      delete r4.prefetch[e8];
    for (const e8 in r4.styles)
      delete r4.preload[e8], delete r4.prefetch[e8];
    return t5._dependencySets[n3] = r4, r4;
  }(new Set(Array.from([...t4._entrypoints, ...e6.modules || e6._registeredComponents || []])), t4);
  return e6._requestDependencies = n2, n2;
}
function renderStyles(e6, t4) {
  const { styles: n2 } = getRequestDependencies(e6, t4);
  return Object.values(n2).map((e7) => renderLinkToString({ rel: "stylesheet", href: t4.buildAssetsURL(e7.file) })).join("");
}
function getResources(e6, t4) {
  return [...getPreloadLinks(e6, t4), ...getPrefetchLinks(e6, t4)];
}
function renderResourceHints(e6, t4) {
  return getResources(e6, t4).map(renderLinkToString).join("");
}
function renderResourceHeaders(e6, t4) {
  return { link: getResources(e6, t4).map(renderLinkToHeader).join(", ") };
}
function getPreloadLinks(e6, t4) {
  const { preload: n2 } = getRequestDependencies(e6, t4);
  return Object.values(n2).map((e7) => ({ rel: e7.module ? "modulepreload" : "preload", as: e7.resourceType, type: e7.mimeType ?? null, crossorigin: "font" === e7.resourceType || "script" === e7.resourceType || e7.module ? "" : null, href: t4.buildAssetsURL(e7.file) }));
}
function getPrefetchLinks(e6, t4) {
  const { prefetch: n2 } = getRequestDependencies(e6, t4);
  return Object.values(n2).map((e7) => ({ rel: "prefetch", as: e7.resourceType, type: e7.mimeType ?? null, crossorigin: "font" === e7.resourceType || "script" === e7.resourceType || e7.module ? "" : null, href: t4.buildAssetsURL(e7.file) }));
}
function renderScripts(e6, t4) {
  const { scripts: n2 } = getRequestDependencies(e6, t4);
  return Object.values(n2).map((e7) => {
    return n3 = { type: e7.module ? "module" : null, src: t4.buildAssetsURL(e7.file), defer: e7.module ? null : "", crossorigin: "" }, `<script${Object.entries(n3).map(([e8, t5]) => null === t5 ? "" : t5 ? ` ${e8}="${t5}"` : " " + e8).join("")}><\/script>`;
    var n3;
  }).join("");
}
function createRenderer$1(e6, t4) {
  const n2 = function({ manifest: e7, buildAssetsURL: t5 }) {
    const n3 = { buildAssetsURL: t5 || withLeadingSlash, manifest: void 0, updateManifest, _dependencies: void 0, _dependencySets: void 0, _entrypoints: void 0 };
    function updateManifest(e8) {
      const t6 = Object.entries(e8);
      n3.manifest = e8, n3._dependencies = {}, n3._dependencySets = {}, n3._entrypoints = t6.filter((e9) => e9[1].isEntry).map(([e9]) => e9);
    }
    return updateManifest(e7), n3;
  }(t4);
  return { rendererContext: n2, async renderToString(r4) {
    r4._registeredComponents = r4._registeredComponents || /* @__PURE__ */ new Set();
    const o6 = await Promise.resolve(e6).then((e7) => "default" in e7 ? e7.default : e7), s2 = await o6(r4), wrap = (e7) => () => e7(r4, n2);
    return { html: await t4.renderToString(s2, r4), renderResourceHeaders: wrap(renderResourceHeaders), renderResourceHints: wrap(renderResourceHints), renderStyles: wrap(renderStyles), renderScripts: wrap(renderScripts) };
  } };
}
function renderLinkToString(e6) {
  return `<link${Object.entries(e6).map(([e7, t4]) => null === t4 ? "" : t4 ? ` ${e7}="${t4}"` : " " + e7).join("")}>`;
}
function renderLinkToHeader(e6) {
  return `<${e6.href}>${Object.entries(e6).map(([e7, t4]) => "href" === e7 || null === t4 ? "" : t4 ? `; ${e7}="${t4}"` : `; ${e7}`).join("")}`;
}
function is_primitive(e6) {
  return Object(e6) !== e6;
}
function is_plain_object(e6) {
  const t4 = Object.getPrototypeOf(e6);
  return t4 === Object.prototype || null === t4 || Object.getOwnPropertyNames(t4).sort().join("\0") === y;
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
  let t4 = "", n2 = 0;
  const r4 = e6.length;
  for (let o6 = 0; o6 < r4; o6 += 1) {
    const r5 = get_escaped_char(e6[o6]);
    r5 && (t4 += e6.slice(n2, o6) + r5, n2 = o6 + 1);
  }
  return `"${0 === n2 ? e6 : t4 + e6.slice(n2)}"`;
}
function enumerable_symbols(e6) {
  return Object.getOwnPropertySymbols(e6).filter((t4) => Object.getOwnPropertyDescriptor(e6, t4).enumerable);
}
function uneval(e6, t4) {
  const n2 = /* @__PURE__ */ new Map(), r4 = [], o6 = /* @__PURE__ */ new Map();
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
          e7.forEach((e8, t5) => {
            r4.push(`[${t5}]`), walk(e8), r4.pop();
          });
          break;
        case "Set":
          Array.from(e7).forEach(walk);
          break;
        case "Map":
          for (const [t5, n3] of e7)
            r4.push(`.get(${is_primitive(t5) ? stringify_primitive$1(t5) : "..."})`), walk(n3), r4.pop();
          break;
        default:
          if (!is_plain_object(e7))
            throw new DevalueError("Cannot stringify arbitrary non-POJOs", r4);
          if (enumerable_symbols(e7).length > 0)
            throw new DevalueError("Cannot stringify POJOs with symbolic keys", r4);
          for (const t5 in e7)
            r4.push(`.${t5}`), walk(e7[t5]), r4.pop();
      }
    }
  }(e6);
  const s2 = /* @__PURE__ */ new Map();
  function stringify3(e7) {
    if (s2.has(e7))
      return s2.get(e7);
    if (is_primitive(e7))
      return stringify_primitive$1(e7);
    if (o6.has(e7))
      return o6.get(e7);
    const t5 = get_type(e7);
    switch (t5) {
      case "Number":
      case "String":
      case "Boolean":
        return `Object(${stringify3(e7.valueOf())})`;
      case "RegExp":
        return `new RegExp(${stringify_string(e7.source)}, "${e7.flags}")`;
      case "Date":
        return `new Date(${e7.getTime()})`;
      case "Array":
        const n3 = e7.map((t6, n4) => n4 in e7 ? stringify3(t6) : ""), r5 = 0 === e7.length || e7.length - 1 in e7 ? "" : ",";
        return `[${n3.join(",")}${r5}]`;
      case "Set":
      case "Map":
        return `new ${t5}([${Array.from(e7).map(stringify3).join(",")}])`;
      default:
        const o7 = `{${Object.keys(e7).map((t6) => `${function(e8) {
          return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(e8) ? e8 : escape_unsafe_chars(JSON.stringify(e8));
        }(t6)}:${stringify3(e7[t6])}`).join(",")}}`;
        return null === Object.getPrototypeOf(e7) ? Object.keys(e7).length > 0 ? `Object.assign(Object.create(null),${o7})` : "Object.create(null)" : o7;
    }
  }
  Array.from(n2).filter((e7) => e7[1] > 1).sort((e7, t5) => t5[1] - e7[1]).forEach((e7, t5) => {
    s2.set(e7[0], function(e8) {
      let t6 = "";
      do {
        t6 = v[e8 % v.length] + t6, e8 = ~~(e8 / v.length) - 1;
      } while (e8 >= 0);
      return b.test(t6) ? `${t6}0` : t6;
    }(t5));
  });
  const i3 = stringify3(e6);
  if (s2.size) {
    const e7 = [], t5 = [], n3 = [];
    return s2.forEach((r5, s3) => {
      if (e7.push(r5), o6.has(s3))
        return void n3.push(o6.get(s3));
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
          n3.push(`Array(${s3.length})`), s3.forEach((e8, n4) => {
            t5.push(`${r5}[${n4}]=${stringify3(e8)}`);
          });
          break;
        case "Set":
          n3.push("new Set"), t5.push(`${r5}.${Array.from(s3).map((e8) => `add(${stringify3(e8)})`).join(".")}`);
          break;
        case "Map":
          n3.push("new Map"), t5.push(`${r5}.${Array.from(s3).map(([e8, t6]) => `set(${stringify3(e8)}, ${stringify3(t6)})`).join(".")}`);
          break;
        default:
          n3.push(null === Object.getPrototypeOf(s3) ? "Object.create(null)" : "{}"), Object.keys(s3).forEach((e8) => {
            t5.push(`${r5}${function(e9) {
              return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(e9) ? `.${e9}` : `[${escape_unsafe_chars(JSON.stringify(e9))}]`;
            }(e8)}=${stringify3(s3[e8])}`);
          });
      }
    }), t5.push(`return ${i3}`), `(function(${e7.join(",")}){${t5.join(";")}}(${n3.join(",")}))`;
  }
  return i3;
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
  const t4 = String(e6);
  return "number" == typeof e6 ? t4.replace(/^(-)?0\./, "$1.") : "bigint" == typeof e6 ? e6 + "n" : t4;
}
function stringify(e6, t4) {
  const n2 = [], r4 = /* @__PURE__ */ new Map(), o6 = [];
  for (const e7 in t4)
    o6.push({ key: e7, fn: t4[e7] });
  const s2 = [];
  let i3 = 0;
  const a3 = function flatten(e7) {
    if ("function" == typeof e7)
      throw new DevalueError("Cannot stringify a function", s2);
    if (r4.has(e7))
      return r4.get(e7);
    if (void 0 === e7)
      return k;
    if (Number.isNaN(e7))
      return w;
    if (e7 === 1 / 0)
      return S;
    if (e7 === -1 / 0)
      return C;
    if (0 === e7 && 1 / e7 < 0)
      return x;
    const t5 = i3++;
    r4.set(e7, t5);
    for (const { key: r5, fn: s3 } of o6) {
      const o7 = s3(e7);
      if (o7)
        return n2[t5] = `["${r5}",${flatten(o7)}]`, t5;
    }
    let a4 = "";
    if (is_primitive(e7))
      a4 = stringify_primitive(e7);
    else {
      switch (get_type(e7)) {
        case "Number":
        case "String":
        case "Boolean":
          a4 = `["Object",${stringify_primitive(e7)}]`;
          break;
        case "BigInt":
          a4 = `["BigInt",${e7}]`;
          break;
        case "Date":
          a4 = `["Date","${!isNaN(e7.getDate()) ? e7.toISOString() : ""}"]`;
          break;
        case "RegExp":
          const { source: t6, flags: n3 } = e7;
          a4 = n3 ? `["RegExp",${stringify_string(t6)},"${n3}"]` : `["RegExp",${stringify_string(t6)}]`;
          break;
        case "Array":
          a4 = "[";
          for (let t7 = 0; t7 < e7.length; t7 += 1)
            t7 > 0 && (a4 += ","), t7 in e7 ? (s2.push(`[${t7}]`), a4 += flatten(e7[t7]), s2.pop()) : a4 += R;
          a4 += "]";
          break;
        case "Set":
          a4 = '["Set"';
          for (const t7 of e7)
            a4 += `,${flatten(t7)}`;
          a4 += "]";
          break;
        case "Map":
          a4 = '["Map"';
          for (const [t7, n4] of e7)
            s2.push(`.get(${is_primitive(t7) ? stringify_primitive(t7) : "..."})`), a4 += `,${flatten(t7)},${flatten(n4)}`, s2.pop();
          a4 += "]";
          break;
        default:
          if (!is_plain_object(e7))
            throw new DevalueError("Cannot stringify arbitrary non-POJOs", s2);
          if (enumerable_symbols(e7).length > 0)
            throw new DevalueError("Cannot stringify POJOs with symbolic keys", s2);
          if (null === Object.getPrototypeOf(e7)) {
            a4 = '["null"';
            for (const t7 in e7)
              s2.push(`.${t7}`), a4 += `,${stringify_string(t7)},${flatten(e7[t7])}`, s2.pop();
            a4 += "]";
          } else {
            a4 = "{";
            let t7 = false;
            for (const n4 in e7)
              t7 && (a4 += ","), t7 = true, s2.push(`.${n4}`), a4 += `${stringify_string(n4)}:${flatten(e7[n4])}`, s2.pop();
            a4 += "}";
          }
      }
    }
    return n2[t5] = a4, t5;
  }(e6);
  return a3 < 0 ? `${a3}` : `[${n2.join(",")}]`;
}
function stringify_primitive(e6) {
  const t4 = typeof e6;
  return "string" === t4 ? stringify_string(e6) : e6 instanceof String ? stringify_string(e6.toString()) : void 0 === e6 ? k.toString() : 0 === e6 && 1 / e6 < 0 ? x.toString() : "bigint" === t4 ? `["BigInt","${e6}"]` : String(e6);
}
function makeMap(e6, t4) {
  const n2 = new Set(e6.split(","));
  return (e7) => n2.has(e7);
}
function normalizeStyle(e6) {
  if (E(e6)) {
    const t4 = {};
    for (let n2 = 0; n2 < e6.length; n2++) {
      const r4 = e6[n2], o6 = isString(r4) ? parseStringStyle(r4) : normalizeStyle(r4);
      if (o6)
        for (const e7 in o6)
          t4[e7] = o6[e7];
    }
    return t4;
  }
  if (isString(e6) || isObject(e6))
    return e6;
}
function parseStringStyle(e6) {
  const t4 = {};
  return e6.replace(z2, "").split(D).forEach((e7) => {
    if (e7) {
      const n2 = e7.split(U);
      n2.length > 1 && (t4[n2[0].trim()] = n2[1].trim());
    }
  }), t4;
}
function normalizeClass(e6) {
  let t4 = "";
  if (isString(e6))
    t4 = e6;
  else if (E(e6))
    for (let n2 = 0; n2 < e6.length; n2++) {
      const r4 = normalizeClass(e6[n2]);
      r4 && (t4 += r4 + " ");
    }
  else if (isObject(e6))
    for (const n2 in e6)
      e6[n2] && (t4 += n2 + " ");
  return t4.trim();
}
function includeBooleanAttr(e6) {
  return !!e6 || "" === e6;
}
function escapeHtml$1(e6) {
  const t4 = "" + e6, n2 = Y.exec(t4);
  if (!n2)
    return t4;
  let r4, o6, s2 = "", i3 = 0;
  for (o6 = n2.index; o6 < t4.length; o6++) {
    switch (t4.charCodeAt(o6)) {
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
    i3 !== o6 && (s2 += t4.slice(i3, o6)), i3 = o6 + 1, s2 += r4;
  }
  return i3 !== o6 ? s2 + t4.slice(i3, o6) : s2;
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
    for (let t4 = e6._depsLength; t4 < e6.deps.length; t4++)
      cleanupDepEffect(e6.deps[t4], e6);
    e6.deps.length = e6._depsLength;
  }
}
function cleanupDepEffect(e6, t4) {
  const n2 = e6.get(t4);
  void 0 !== n2 && t4._trackId !== n2 && (e6.delete(t4), 0 === e6.size && e6.cleanup());
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
function trackEffect(e6, t4, n2) {
  if (t4.get(e6) !== e6._trackId) {
    t4.set(e6, e6._trackId);
    const n3 = e6.deps[e6._depsLength];
    n3 !== t4 ? (n3 && cleanupDepEffect(n3, e6), e6.deps[e6._depsLength++] = t4) : e6._depsLength++;
  }
}
function triggerEffects(e6, t4, n2) {
  pauseScheduling();
  for (const n3 of e6.keys()) {
    let r4;
    n3._dirtyLevel < t4 && (null != r4 ? r4 : r4 = e6.get(n3) === n3._trackId) && (n3._shouldSchedule || (n3._shouldSchedule = 0 === n3._dirtyLevel), n3._dirtyLevel = t4), n3._shouldSchedule && (null != r4 ? r4 : r4 = e6.get(n3) === n3._trackId) && (n3.trigger(), n3._runnings && !n3.allowRecurse || 2 === n3._dirtyLevel || (n3._shouldSchedule = false, n3.scheduler && se2.push(n3.scheduler)));
  }
  resetScheduling();
}
function track(e6, t4, n2) {
  if (ne2 && te3) {
    let t5 = ie2.get(e6);
    t5 || ie2.set(e6, t5 = /* @__PURE__ */ new Map());
    let r4 = t5.get(n2);
    r4 || t5.set(n2, r4 = createDep(() => t5.delete(n2))), trackEffect(te3, r4);
  }
}
function trigger(e6, t4, n2, r4, o6, s2) {
  const i3 = ie2.get(e6);
  if (!i3)
    return;
  let a3 = [];
  if ("clear" === t4)
    a3 = [...i3.values()];
  else if ("length" === n2 && E(e6)) {
    const e7 = Number(r4);
    i3.forEach((t5, n3) => {
      ("length" === n3 || !isSymbol(n3) && n3 >= e7) && a3.push(t5);
    });
  } else
    switch (void 0 !== n2 && a3.push(i3.get(n2)), t4) {
      case "add":
        E(e6) ? isIntegerKey(n2) && a3.push(i3.get("length")) : (a3.push(i3.get(ae2)), isMap(e6) && a3.push(i3.get(le2)));
        break;
      case "delete":
        E(e6) || (a3.push(i3.get(ae2)), isMap(e6) && a3.push(i3.get(le2)));
        break;
      case "set":
        isMap(e6) && a3.push(i3.get(ae2));
    }
  pauseScheduling();
  for (const e7 of a3)
    e7 && triggerEffects(e7, 4);
  resetScheduling();
}
function createArrayInstrumentations() {
  const e6 = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t4) => {
    e6[t4] = function(...e7) {
      const n2 = toRaw(this);
      for (let e8 = 0, t5 = this.length; e8 < t5; e8++)
        track(n2, 0, e8 + "");
      const r4 = n2[t4](...e7);
      return -1 === r4 || false === r4 ? n2[t4](...e7.map(toRaw)) : r4;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((t4) => {
    e6[t4] = function(...e7) {
      pauseTracking(), pauseScheduling();
      const n2 = toRaw(this)[t4].apply(this, e7);
      return resetScheduling(), resetTracking(), n2;
    };
  }), e6;
}
function hasOwnProperty(e6) {
  isSymbol(e6) || (e6 = String(e6));
  const t4 = toRaw(this);
  return track(t4, 0, e6), t4.hasOwnProperty(e6);
}
function get(e6, t4, n2 = false, r4 = false) {
  const o6 = toRaw(e6 = e6.__v_raw), s2 = toRaw(t4);
  n2 || (hasChanged(t4, s2) && track(o6, 0, t4), track(o6, 0, s2));
  const { has: i3 } = getProto(o6), a3 = r4 ? toShallow : n2 ? toReadonly : toReactive;
  return i3.call(o6, t4) ? a3(e6.get(t4)) : i3.call(o6, s2) ? a3(e6.get(s2)) : void (e6 !== o6 && e6.get(t4));
}
function has(e6, t4 = false) {
  const n2 = this.__v_raw, r4 = toRaw(n2), o6 = toRaw(e6);
  return t4 || (hasChanged(e6, o6) && track(r4, 0, e6), track(r4, 0, o6)), e6 === o6 ? n2.has(e6) : n2.has(e6) || n2.has(o6);
}
function size(e6, t4 = false) {
  return e6 = e6.__v_raw, !t4 && track(toRaw(e6), 0, ae2), Reflect.get(e6, "size", e6);
}
function add(e6, t4 = false) {
  t4 || isShallow(e6) || isReadonly(e6) || (e6 = toRaw(e6));
  const n2 = toRaw(this);
  return getProto(n2).has.call(n2, e6) || (n2.add(e6), trigger(n2, "add", e6, e6)), this;
}
function set(e6, t4, n2 = false) {
  n2 || isShallow(t4) || isReadonly(t4) || (t4 = toRaw(t4));
  const r4 = toRaw(this), { has: o6, get: s2 } = getProto(r4);
  let i3 = o6.call(r4, e6);
  i3 || (e6 = toRaw(e6), i3 = o6.call(r4, e6));
  const a3 = s2.call(r4, e6);
  return r4.set(e6, t4), i3 ? hasChanged(t4, a3) && trigger(r4, "set", e6, t4) : trigger(r4, "add", e6, t4), this;
}
function deleteEntry(e6) {
  const t4 = toRaw(this), { has: n2, get: r4 } = getProto(t4);
  let o6 = n2.call(t4, e6);
  o6 || (e6 = toRaw(e6), o6 = n2.call(t4, e6)), r4 && r4.call(t4, e6);
  const s2 = t4.delete(e6);
  return o6 && trigger(t4, "delete", e6, void 0), s2;
}
function clear() {
  const e6 = toRaw(this), t4 = 0 !== e6.size, n2 = e6.clear();
  return t4 && trigger(e6, "clear", void 0, void 0), n2;
}
function createForEach(e6, t4) {
  return function(n2, r4) {
    const o6 = this, s2 = o6.__v_raw, i3 = toRaw(s2), a3 = t4 ? toShallow : e6 ? toReadonly : toReactive;
    return !e6 && track(i3, 0, ae2), s2.forEach((e7, t5) => n2.call(r4, a3(e7), a3(t5), o6));
  };
}
function createIterableMethod(e6, t4, n2) {
  return function(...r4) {
    const o6 = this.__v_raw, s2 = toRaw(o6), i3 = isMap(s2), a3 = "entries" === e6 || e6 === Symbol.iterator && i3, l2 = "keys" === e6 && i3, c2 = o6[e6](...r4), u3 = n2 ? toShallow : t4 ? toReadonly : toReactive;
    return !t4 && track(s2, 0, l2 ? le2 : ae2), { next() {
      const { value: e7, done: t5 } = c2.next();
      return t5 ? { value: e7, done: t5 } : { value: a3 ? [u3(e7[0]), u3(e7[1])] : u3(e7), done: t5 };
    }, [Symbol.iterator]() {
      return this;
    } };
  };
}
function createReadonlyMethod(e6) {
  return function(...t4) {
    return "delete" !== e6 && ("clear" === e6 ? void 0 : this);
  };
}
function createInstrumentations() {
  const e6 = { get(e7) {
    return get(this, e7);
  }, get size() {
    return size(this);
  }, has, add, set, delete: deleteEntry, clear, forEach: createForEach(false, false) }, t4 = { get(e7) {
    return get(this, e7, false, true);
  }, get size() {
    return size(this);
  }, has, add(e7) {
    return add.call(this, e7, true);
  }, set(e7, t5) {
    return set.call(this, e7, t5, true);
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
  return ["keys", "values", "entries", Symbol.iterator].forEach((o6) => {
    e6[o6] = createIterableMethod(o6, false, false), n2[o6] = createIterableMethod(o6, true, false), t4[o6] = createIterableMethod(o6, false, true), r4[o6] = createIterableMethod(o6, true, true);
  }), [e6, n2, t4, r4];
}
function createInstrumentationGetter(e6, t4) {
  const n2 = t4 ? e6 ? ve3 : ye2 : e6 ? me2 : ge2;
  return (t5, r4, o6) => "__v_isReactive" === r4 ? !e6 : "__v_isReadonly" === r4 ? e6 : "__v_raw" === r4 ? t5 : Reflect.get(hasOwn(n2, r4) && r4 in t5 ? n2 : t5, r4, o6);
}
function reactive(e6) {
  return isReadonly(e6) ? e6 : createReactiveObject(e6, false, fe2, _e2, Re2);
}
function shallowReactive(e6) {
  return createReactiveObject(e6, false, he2, be2, we2);
}
function readonly(e6) {
  return createReactiveObject(e6, true, de2, ke2, Se);
}
function createReactiveObject(e6, t4, n2, r4, o6) {
  if (!isObject(e6))
    return e6;
  if (e6.__v_raw && (!t4 || !e6.__v_isReactive))
    return e6;
  const s2 = o6.get(e6);
  if (s2)
    return s2;
  const i3 = (a3 = e6).__v_skip || !Object.isExtensible(a3) ? 0 : function(e7) {
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
  }(toRawType(a3));
  var a3;
  if (0 === i3)
    return e6;
  const l2 = new Proxy(e6, 2 === i3 ? r4 : n2);
  return o6.set(e6, l2), l2;
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
  const t4 = e6 && e6.__v_raw;
  return t4 ? toRaw(t4) : e6;
}
function trackRefValue(e6) {
  var t4;
  ne2 && te3 && (e6 = toRaw(e6), trackEffect(te3, null != (t4 = e6.dep) ? t4 : e6.dep = createDep(() => e6.dep = void 0, e6 instanceof ComputedRefImpl ? e6 : void 0)));
}
function triggerRefValue(e6, t4 = 4, n2, r4) {
  const o6 = (e6 = toRaw(e6)).dep;
  o6 && triggerEffects(o6, t4);
}
function isRef(e6) {
  return !(!e6 || true !== e6.__v_isRef);
}
function ref(e6) {
  return createRef(e6, false);
}
function shallowRef(e6) {
  return createRef(e6, true);
}
function createRef(e6, t4) {
  return isRef(e6) ? e6 : new RefImpl(e6, t4);
}
function unref(e6) {
  return isRef(e6) ? e6.value : e6;
}
function toValue(e6) {
  return isFunction(e6) ? e6() : unref(e6);
}
function proxyRefs(e6) {
  return isReactive(e6) ? e6 : new Proxy(e6, xe2);
}
function toRef(e6, t4, n2) {
  return isRef(e6) ? e6 : isFunction(e6) ? new GetterRefImpl(e6) : isObject(e6) && arguments.length > 1 ? function(e7, t5, n3) {
    const r4 = e7[t5];
    return isRef(r4) ? r4 : new ObjectRefImpl(e7, t5, n3);
  }(e6, t4, n2) : ref(e6);
}
function callWithErrorHandling(e6, t4, n2, r4) {
  try {
    return r4 ? e6(...r4) : e6();
  } catch (e7) {
    handleError(e7, t4, n2);
  }
}
function callWithAsyncErrorHandling(e6, t4, n2, r4) {
  if (isFunction(e6)) {
    const o6 = callWithErrorHandling(e6, t4, n2, r4);
    return o6 && isPromise(o6) && o6.catch((e7) => {
      handleError(e7, t4, n2);
    }), o6;
  }
  if (E(e6)) {
    const o6 = [];
    for (let s2 = 0; s2 < e6.length; s2++)
      o6.push(callWithAsyncErrorHandling(e6[s2], t4, n2, r4));
    return o6;
  }
}
function handleError(e6, t4, n2, r4 = true) {
  t4 && t4.vnode;
  if (t4) {
    let r5 = t4.parent;
    const o6 = t4.proxy, s2 = `https://vuejs.org/error-reference/#runtime-${n2}`;
    for (; r5; ) {
      const t5 = r5.ec;
      if (t5) {
        for (let n3 = 0; n3 < t5.length; n3++)
          if (false === t5[n3](e6, o6, s2))
            return;
      }
      r5 = r5.parent;
    }
    const i3 = t4.appContext.config.errorHandler;
    if (i3)
      return pauseTracking(), callWithErrorHandling(i3, null, 10, [e6, o6, s2]), void resetTracking();
  }
  !function(e7) {
    console.error(e7);
  }(e6, 0, 0, r4);
}
function nextTick(e6) {
  const t4 = Me || He;
  return e6 ? t4.then(this ? e6.bind(this) : e6) : t4;
}
function queueJob(e6) {
  $e.length && $e.includes(e6, Ae2 && e6.allowRecurse ? Te + 1 : Te) || (null == e6.id ? $e.push(e6) : $e.splice(function(e7) {
    let t4 = Te + 1, n2 = $e.length;
    for (; t4 < n2; ) {
      const r4 = t4 + n2 >>> 1, o6 = $e[r4], s2 = getId(o6);
      s2 < e7 || s2 === e7 && o6.pre ? t4 = r4 + 1 : n2 = r4;
    }
    return t4;
  }(e6.id), 0, e6), queueFlush());
}
function queueFlush() {
  Ae2 || Oe || (Oe = true, Me = He.then(flushJobs));
}
function flushPreFlushCbs(e6, t4, n2 = Ae2 ? Te + 1 : 0) {
  for (; n2 < $e.length; n2++) {
    const t5 = $e[n2];
    if (t5 && t5.pre) {
      if (e6 && t5.id !== e6.uid)
        continue;
      $e.splice(n2, 1), n2--, t5();
    }
  }
}
function flushPostFlushCbs(e6) {
  if (Ee.length) {
    const e7 = [...new Set(Ee)].sort((e8, t4) => getId(e8) - getId(t4));
    if (Ee.length = 0, Pe2)
      return void Pe2.push(...e7);
    for (Pe2 = e7, je = 0; je < Pe2.length; je++) {
      const e8 = Pe2[je];
      false !== e8.active && e8();
    }
    Pe2 = null, je = 0;
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
    Te = 0, $e.length = 0, flushPostFlushCbs(), Ae2 = false, Me = null, ($e.length || Ee.length) && flushJobs();
  }
}
function setCurrentRenderingInstance$1(e6) {
  const t4 = Ie;
  return Ie = e6, Ne = e6 && e6.type.__scopeId || null, t4;
}
function withCtx(e6, t4 = Ie, n2) {
  if (!t4)
    return e6;
  if (e6._n)
    return e6;
  const renderFnWithContext = (...n3) => {
    renderFnWithContext._d && setBlockTracking(-1);
    const r4 = setCurrentRenderingInstance$1(t4);
    let o6;
    try {
      o6 = e6(...n3);
    } finally {
      setCurrentRenderingInstance$1(r4), renderFnWithContext._d && setBlockTracking(1);
    }
    return o6;
  };
  return renderFnWithContext._n = true, renderFnWithContext._c = true, renderFnWithContext._d = true, renderFnWithContext;
}
function invokeDirectiveHook(e6, t4, n2, r4) {
  const o6 = e6.dirs, s2 = t4 && t4.dirs;
  for (let i3 = 0; i3 < o6.length; i3++) {
    const a3 = o6[i3];
    s2 && (a3.oldValue = s2[i3].value);
    let l2 = a3.dir[r4];
    l2 && (pauseTracking(), callWithAsyncErrorHandling(l2, n2, 8, [e6.el, a3, e6, t4]), resetTracking());
  }
}
function setTransitionHooks(e6, t4) {
  6 & e6.shapeFlag && e6.component ? setTransitionHooks(e6.component.subTree, t4) : 128 & e6.shapeFlag ? (e6.ssContent.transition = t4.clone(e6.ssContent), e6.ssFallback.transition = t4.clone(e6.ssFallback)) : e6.transition = t4;
}
function defineComponent(e6, t4) {
  return isFunction(e6) ? (() => $({ name: e6.name }, t4, { setup: e6 }))() : e6;
}
function defineAsyncComponent(e6) {
  isFunction(e6) && (e6 = { loader: e6 });
  const { loader: t4, loadingComponent: n2, errorComponent: r4, delay: o6 = 200, timeout: s2, suspensible: i3 = true, onError: a3 } = e6;
  let l2, c2 = null, u3 = 0;
  const load = () => {
    let e7;
    return c2 || (e7 = c2 = t4().catch((e8) => {
      if (e8 = e8 instanceof Error ? e8 : new Error(String(e8)), a3)
        return new Promise((t5, n3) => {
          a3(e8, () => t5((u3++, c2 = null, load())), () => n3(e8), u3 + 1);
        });
      throw e8;
    }).then((t5) => e7 !== c2 && c2 ? c2 : (t5 && (t5.__esModule || "Module" === t5[Symbol.toStringTag]) && (t5 = t5.default), l2 = t5, t5)));
  };
  return defineComponent({ name: "AsyncComponentWrapper", __asyncLoader: load, get __asyncResolved() {
    return l2;
  }, setup() {
    const e7 = ht;
    if (l2)
      return () => createInnerComp(l2, e7);
    const onError = (t6) => {
      c2 = null, handleError(t6, e7, 13, !r4);
    };
    if (i3 && e7.suspense || vt)
      return load().then((t6) => () => createInnerComp(t6, e7)).catch((e8) => (onError(e8), () => r4 ? createVNode(r4, { error: e8 }) : null));
    const t5 = ref(false), a4 = ref(), u4 = ref(!!o6);
    return o6 && setTimeout(() => {
      u4.value = false;
    }, o6), null != s2 && setTimeout(() => {
      if (!t5.value && !a4.value) {
        const e8 = new Error(`Async component timed out after ${s2}ms.`);
        onError(e8), a4.value = e8;
      }
    }, s2), load().then(() => {
      t5.value = true, e7.parent && isKeepAlive(e7.parent.vnode) && (e7.parent.effect.dirty = true, queueJob(e7.parent.update));
    }).catch((e8) => {
      onError(e8), a4.value = e8;
    }), () => t5.value && l2 ? createInnerComp(l2, e7) : a4.value && r4 ? createVNode(r4, { error: a4.value }) : n2 && !u4.value ? createVNode(n2) : void 0;
  } });
}
function createInnerComp(e6, t4) {
  const { ref: n2, props: r4, children: o6, ce: s2 } = t4.vnode, i3 = createVNode(e6, r4, o6);
  return i3.ref = n2, i3.ce = s2, delete t4.vnode.ce, i3;
}
function onActivated(e6, t4) {
  registerKeepAliveHook(e6, "a", t4);
}
function onDeactivated(e6, t4) {
  registerKeepAliveHook(e6, "da", t4);
}
function registerKeepAliveHook(e6, t4, n2 = ht) {
  const r4 = e6.__wdc || (e6.__wdc = () => {
    let t5 = n2;
    for (; t5; ) {
      if (t5.isDeactivated)
        return;
      t5 = t5.parent;
    }
    return e6();
  });
  if (injectHook(t4, r4, n2), n2) {
    let e7 = n2.parent;
    for (; e7 && e7.parent; )
      isKeepAlive(e7.parent.vnode) && injectToKeepAliveRoot(r4, t4, n2, e7), e7 = e7.parent;
  }
}
function injectToKeepAliveRoot(e6, t4, n2, r4) {
  const o6 = injectHook(t4, e6, r4, true);
  ze(() => {
    remove(r4[t4], o6);
  }, n2);
}
function injectHook(e6, t4, n2 = ht, r4 = false) {
  if (n2) {
    const o6 = n2[e6] || (n2[e6] = []), s2 = t4.__weh || (t4.__weh = (...r5) => {
      pauseTracking();
      const o7 = setCurrentInstance(n2), s3 = callWithAsyncErrorHandling(t4, n2, e6, r5);
      return o7(), resetTracking(), s3;
    });
    return r4 ? o6.unshift(s2) : o6.push(s2), s2;
  }
}
function onErrorCaptured(e6, t4 = ht) {
  injectHook("ec", e6, t4);
}
function resolveComponent(e6, t4) {
  return resolveAsset(Je, e6, true, t4) || e6;
}
function resolveDynamicComponent(e6) {
  return isString(e6) ? resolveAsset(Je, e6, false) || e6 : e6 || Ge;
}
function resolveAsset(e6, t4, n2 = true, r4 = false) {
  const o6 = Ie || ht;
  if (o6) {
    const n3 = o6.type;
    {
      const e7 = getComponentName(n3, false);
      if (e7 && (e7 === t4 || e7 === M(t4) || e7 === L(M(t4))))
        return n3;
    }
    const s2 = resolve(o6[e6] || n3[e6], t4) || resolve(o6.appContext[e6], t4);
    return !s2 && r4 ? n3 : s2;
  }
}
function resolve(e6, t4) {
  return e6 && (e6[t4] || e6[M(t4)] || e6[L(M(t4))]);
}
function normalizePropsOrEmits(e6) {
  return E(e6) ? e6.reduce((e7, t4) => (e7[t4] = null, e7), {}) : e6;
}
function withAsyncContext(e6) {
  const t4 = getCurrentInstance();
  let n2 = e6();
  return unsetCurrentInstance(), isPromise(n2) && (n2 = n2.catch((e7) => {
    throw setCurrentInstance(t4), e7;
  })), [n2, () => setCurrentInstance(t4)];
}
function applyOptions(e6) {
  const t4 = resolveMergedOptions(e6), n2 = e6.proxy, r4 = e6.ctx;
  Xe = false, t4.beforeCreate && callHook(t4.beforeCreate, e6, "bc");
  const { data: o6, computed: s2, methods: i3, watch: a3, provide: l2, inject: c2, created: u3, beforeMount: p2, mounted: f2, beforeUpdate: d2, updated: g2, activated: m3, deactivated: y3, beforeDestroy: v3, beforeUnmount: _3, destroyed: b3, unmounted: k3, render: R3, renderTracked: w3, renderTriggered: S3, errorCaptured: C3, serverPrefetch: x3, expose: A4, inheritAttrs: O3, components: $3, directives: T3, filters: P3 } = t4;
  if (c2 && function(e7, t5) {
    E(e7) && (e7 = normalizeInject(e7));
    for (const n3 in e7) {
      const r5 = e7[n3];
      let o7;
      o7 = isObject(r5) ? "default" in r5 ? inject(r5.from || n3, r5.default, true) : inject(r5.from || n3) : inject(r5), isRef(o7) ? Object.defineProperty(t5, n3, { enumerable: true, configurable: true, get: () => o7.value, set: (e8) => o7.value = e8 }) : t5[n3] = o7;
    }
  }(c2, r4, null), i3)
    for (const e7 in i3) {
      const t5 = i3[e7];
      isFunction(t5) && (r4[e7] = t5.bind(n2));
    }
  if (o6) {
    const t5 = o6.call(n2, n2);
    isObject(t5) && (e6.data = reactive(t5));
  }
  if (Xe = true, s2)
    for (const e7 in s2) {
      const t5 = s2[e7], o7 = isFunction(t5) ? t5.bind(n2, n2) : isFunction(t5.get) ? t5.get.bind(n2, n2) : NOOP, i4 = !isFunction(t5) && isFunction(t5.set) ? t5.set.bind(n2) : NOOP, a4 = computed({ get: o7, set: i4 });
      Object.defineProperty(r4, e7, { enumerable: true, configurable: true, get: () => a4.value, set: (e8) => a4.value = e8 });
    }
  if (a3)
    for (const e7 in a3)
      createWatcher(a3[e7], r4, n2, e7);
  if (l2) {
    const e7 = isFunction(l2) ? l2.call(n2) : l2;
    Reflect.ownKeys(e7).forEach((t5) => {
      provide(t5, e7[t5]);
    });
  }
  function registerLifecycleHook(e7, t5) {
    E(t5) ? t5.forEach((t6) => e7(t6.bind(n2))) : t5 && e7(t5.bind(n2));
  }
  if (u3 && callHook(u3, e6, "c"), registerLifecycleHook(Le, p2), registerLifecycleHook(Ve, f2), registerLifecycleHook(Fe, d2), registerLifecycleHook(De, g2), registerLifecycleHook(onActivated, m3), registerLifecycleHook(onDeactivated, y3), registerLifecycleHook(onErrorCaptured, C3), registerLifecycleHook(qe, w3), registerLifecycleHook(We, S3), registerLifecycleHook(Ue, _3), registerLifecycleHook(ze, k3), registerLifecycleHook(Be, x3), E(A4))
    if (A4.length) {
      const t5 = e6.exposed || (e6.exposed = {});
      A4.forEach((e7) => {
        Object.defineProperty(t5, e7, { get: () => n2[e7], set: (t6) => n2[e7] = t6 });
      });
    } else
      e6.exposed || (e6.exposed = {});
  R3 && e6.render === NOOP && (e6.render = R3), null != O3 && (e6.inheritAttrs = O3), $3 && (e6.components = $3), T3 && (e6.directives = T3);
}
function callHook(e6, t4, n2) {
  callWithAsyncErrorHandling(E(e6) ? e6.map((e7) => e7.bind(t4.proxy)) : e6.bind(t4.proxy), t4, n2);
}
function createWatcher(e6, t4, n2, r4) {
  const o6 = r4.includes(".") ? createPathGetter(n2, r4) : () => n2[r4];
  if (isString(e6)) {
    const n3 = t4[e6];
    isFunction(n3) && watch(o6, n3);
  } else if (isFunction(e6))
    watch(o6, e6.bind(n2));
  else if (isObject(e6))
    if (E(e6))
      e6.forEach((e7) => createWatcher(e7, t4, n2, r4));
    else {
      const r5 = isFunction(e6.handler) ? e6.handler.bind(n2) : t4[e6.handler];
      isFunction(r5) && watch(o6, r5, e6);
    }
}
function resolveMergedOptions(e6) {
  const t4 = e6.type, { mixins: n2, extends: r4 } = t4, { mixins: o6, optionsCache: s2, config: { optionMergeStrategies: i3 } } = e6.appContext, a3 = s2.get(t4);
  let l2;
  return a3 ? l2 = a3 : o6.length || n2 || r4 ? (l2 = {}, o6.length && o6.forEach((e7) => mergeOptions(l2, e7, i3, true)), mergeOptions(l2, t4, i3)) : l2 = t4, isObject(t4) && s2.set(t4, l2), l2;
}
function mergeOptions(e6, t4, n2, r4 = false) {
  const { mixins: o6, extends: s2 } = t4;
  s2 && mergeOptions(e6, s2, n2, true), o6 && o6.forEach((t5) => mergeOptions(e6, t5, n2, true));
  for (const o7 in t4)
    if (r4 && "expose" === o7)
      ;
    else {
      const r5 = Ye[o7] || n2 && n2[o7];
      e6[o7] = r5 ? r5(e6[o7], t4[o7]) : t4[o7];
    }
  return e6;
}
function mergeDataFn(e6, t4) {
  return t4 ? e6 ? function() {
    return $(isFunction(e6) ? e6.call(this, this) : e6, isFunction(t4) ? t4.call(this, this) : t4);
  } : t4 : e6;
}
function normalizeInject(e6) {
  if (E(e6)) {
    const t4 = {};
    for (let n2 = 0; n2 < e6.length; n2++)
      t4[e6[n2]] = e6[n2];
    return t4;
  }
  return e6;
}
function mergeAsArray(e6, t4) {
  return e6 ? [...new Set([].concat(e6, t4))] : t4;
}
function mergeObjectOptions(e6, t4) {
  return e6 ? $(/* @__PURE__ */ Object.create(null), e6, t4) : t4;
}
function mergeEmitsOrPropsOptions(e6, t4) {
  return e6 ? E(e6) && E(t4) ? [.../* @__PURE__ */ new Set([...e6, ...t4])] : $(/* @__PURE__ */ Object.create(null), normalizePropsOrEmits(e6), normalizePropsOrEmits(null != t4 ? t4 : {})) : t4;
}
function createAppContext() {
  return { app: null, config: { isNativeTag: NO, performance: false, globalProperties: {}, optionMergeStrategies: {}, errorHandler: void 0, warnHandler: void 0, compilerOptions: {} }, mixins: [], components: {}, directives: {}, provides: /* @__PURE__ */ Object.create(null), optionsCache: /* @__PURE__ */ new WeakMap(), propsCache: /* @__PURE__ */ new WeakMap(), emitsCache: /* @__PURE__ */ new WeakMap() };
}
function createAppAPI(e6, t4) {
  return function(n2, r4 = null) {
    isFunction(n2) || (n2 = $({}, n2)), null == r4 || isObject(r4) || (r4 = null);
    const o6 = createAppContext(), s2 = /* @__PURE__ */ new WeakSet();
    let i3 = false;
    const a3 = o6.app = { _uid: Qe++, _component: n2, _props: r4, _container: null, _context: o6, _instance: null, version: bt, get config() {
      return o6.config;
    }, set config(e7) {
    }, use: (e7, ...t5) => (s2.has(e7) || (e7 && isFunction(e7.install) ? (s2.add(e7), e7.install(a3, ...t5)) : isFunction(e7) && (s2.add(e7), e7(a3, ...t5))), a3), mixin: (e7) => (__VUE_OPTIONS_API__ && (o6.mixins.includes(e7) || o6.mixins.push(e7)), a3), component: (e7, t5) => t5 ? (o6.components[e7] = t5, a3) : o6.components[e7], directive: (e7, t5) => t5 ? (o6.directives[e7] = t5, a3) : o6.directives[e7], mount(s3, l2, c2) {
      if (!i3) {
        const u3 = createVNode(n2, r4);
        return u3.appContext = o6, true === c2 ? c2 = "svg" : false === c2 && (c2 = void 0), l2 && t4 ? t4(u3, s3) : e6(u3, s3, c2), i3 = true, a3._container = s3, s3.__vue_app__ = a3, getComponentPublicInstance(u3.component);
      }
    }, unmount() {
      i3 && (e6(null, a3._container), delete a3._container.__vue_app__);
    }, provide: (e7, t5) => (o6.provides[e7] = t5, a3), runWithContext(e7) {
      const t5 = et;
      et = a3;
      try {
        return e7();
      } finally {
        et = t5;
      }
    } };
    return a3;
  };
}
function provide(e6, t4) {
  if (ht) {
    let n2 = ht.provides;
    const r4 = ht.parent && ht.parent.provides;
    r4 === n2 && (n2 = ht.provides = Object.create(r4)), n2[e6] = t4;
  } else
    ;
}
function inject(e6, t4, n2 = false) {
  const r4 = ht || Ie;
  if (r4 || et) {
    const o6 = et ? et._context.provides : r4 ? null == r4.parent ? r4.vnode.appContext && r4.vnode.appContext.provides : r4.parent.provides : void 0;
    if (o6 && e6 in o6)
      return o6[e6];
    if (arguments.length > 1)
      return n2 && isFunction(t4) ? t4.call(r4 && r4.proxy) : t4;
  }
}
function hasInjectionContext() {
  return !!(ht || Ie || et);
}
function setFullProps(e6, t4, n2, r4) {
  const [o6, s2] = e6.propsOptions;
  let i3, a3 = false;
  if (t4)
    for (let l2 in t4) {
      if (j2(l2))
        continue;
      const c2 = t4[l2];
      let u3;
      o6 && hasOwn(o6, u3 = M(l2)) ? s2 && s2.includes(u3) ? (i3 || (i3 = {}))[u3] = c2 : n2[u3] = c2 : isEmitListener(e6.emitsOptions, l2) || l2 in r4 && c2 === r4[l2] || (r4[l2] = c2, a3 = true);
    }
  if (s2) {
    const t5 = toRaw(n2), r5 = i3 || A2;
    for (let i4 = 0; i4 < s2.length; i4++) {
      const a4 = s2[i4];
      n2[a4] = resolvePropValue(o6, t5, a4, r5[a4], e6, !hasOwn(r5, a4));
    }
  }
  return a3;
}
function resolvePropValue(e6, t4, n2, r4, o6, s2) {
  const i3 = e6[n2];
  if (null != i3) {
    const e7 = hasOwn(i3, "default");
    if (e7 && void 0 === r4) {
      const e8 = i3.default;
      if (i3.type !== Function && !i3.skipFactory && isFunction(e8)) {
        const { propsDefaults: s3 } = o6;
        if (n2 in s3)
          r4 = s3[n2];
        else {
          const i4 = setCurrentInstance(o6);
          r4 = s3[n2] = e8.call(null, t4), i4();
        }
      } else
        r4 = e8;
    }
    i3[0] && (s2 && !e7 ? r4 = false : !i3[1] || "" !== r4 && r4 !== N(n2) || (r4 = true));
  }
  return r4;
}
function normalizePropsOptions(e6, t4, n2 = false) {
  const r4 = __VUE_OPTIONS_API__ && n2 ? nt : t4.propsCache, o6 = r4.get(e6);
  if (o6)
    return o6;
  const s2 = e6.props, i3 = {}, a3 = [];
  let l2 = false;
  if (__VUE_OPTIONS_API__ && !isFunction(e6)) {
    const extendProps = (e7) => {
      l2 = true;
      const [n3, r5] = normalizePropsOptions(e7, t4, true);
      $(i3, n3), r5 && a3.push(...r5);
    };
    !n2 && t4.mixins.length && t4.mixins.forEach(extendProps), e6.extends && extendProps(e6.extends), e6.mixins && e6.mixins.forEach(extendProps);
  }
  if (!s2 && !l2)
    return isObject(e6) && r4.set(e6, O), O;
  if (E(s2))
    for (let e7 = 0; e7 < s2.length; e7++) {
      const t5 = M(s2[e7]);
      validatePropName(t5) && (i3[t5] = A2);
    }
  else if (s2)
    for (const e7 in s2) {
      const t5 = M(e7);
      if (validatePropName(t5)) {
        const n3 = s2[e7], r5 = i3[t5] = E(n3) || isFunction(n3) ? { type: n3 } : $({}, n3), o7 = r5.type;
        let l3 = false, c3 = true;
        if (E(o7))
          for (let e8 = 0; e8 < o7.length; ++e8) {
            const t6 = o7[e8], n4 = isFunction(t6) && t6.name;
            if ("Boolean" === n4) {
              l3 = true;
              break;
            }
            "String" === n4 && (c3 = false);
          }
        else
          l3 = isFunction(o7) && "Boolean" === o7.name;
        r5[0] = l3, r5[1] = c3, (l3 || hasOwn(r5, "default")) && a3.push(t5);
      }
    }
  const c2 = [i3, a3];
  return isObject(e6) && r4.set(e6, c2), c2;
}
function validatePropName(e6) {
  return "$" !== e6[0] && !j2(e6);
}
function setRef(e6, t4, n2, r4, o6 = false) {
  if (E(e6))
    return void e6.forEach((e7, s3) => setRef(e7, t4 && (E(t4) ? t4[s3] : t4), n2, r4, o6));
  if (isAsyncWrapper(r4) && !o6)
    return;
  const s2 = 4 & r4.shapeFlag ? getComponentPublicInstance(r4.component) : r4.el, i3 = o6 ? null : s2, { i: a3, r: l2 } = e6, c2 = t4 && t4.r, u3 = a3.refs === A2 ? a3.refs = {} : a3.refs, p2 = a3.setupState;
  if (null != c2 && c2 !== l2 && (isString(c2) ? (u3[c2] = null, hasOwn(p2, c2) && (p2[c2] = null)) : isRef(c2) && (c2.value = null)), isFunction(l2))
    callWithErrorHandling(l2, a3, 12, [i3, u3]);
  else {
    const t5 = isString(l2), r5 = isRef(l2);
    if (t5 || r5) {
      const doSet = () => {
        if (e6.f) {
          const n3 = t5 ? hasOwn(p2, l2) ? p2[l2] : u3[l2] : l2.value;
          o6 ? E(n3) && remove(n3, s2) : E(n3) ? n3.includes(s2) || n3.push(s2) : t5 ? (u3[l2] = [s2], hasOwn(p2, l2) && (p2[l2] = u3[l2])) : (l2.value = [s2], e6.k && (u3[e6.k] = l2.value));
        } else
          t5 ? (u3[l2] = i3, hasOwn(p2, l2) && (p2[l2] = i3)) : r5 && (l2.value = i3, e6.k && (u3[e6.k] = i3));
      };
      i3 ? (doSet.id = -1, queuePostRenderEffect(doSet, n2)) : doSet();
    }
  }
}
function createRenderer(e6) {
  return function(e7) {
    "boolean" != typeof __VUE_OPTIONS_API__ && (getGlobalThis().__VUE_OPTIONS_API__ = true), "boolean" != typeof __VUE_PROD_HYDRATION_MISMATCH_DETAILS__ && (getGlobalThis().__VUE_PROD_HYDRATION_MISMATCH_DETAILS__ = false);
    getGlobalThis().__VUE__ = true;
    const { insert: t4, remove: n2, patchProp: r4, createElement: o6, createText: s2, createComment: i3, setText: a3, setElementText: l2, parentNode: c2, nextSibling: u3, setScopeId: p2 = NOOP, insertStaticContent: f2 } = e7, patch = (e8, t5, n3, r5 = null, o7 = null, s3 = null, i4 = void 0, a4 = null, l3 = !!t5.dynamicChildren) => {
      if (e8 === t5)
        return;
      e8 && !isSameVNodeType(e8, t5) && (r5 = getNextHostNode(e8), unmount(e8, o7, s3, true), e8 = null), -2 === t5.patchFlag && (l3 = false, t5.dynamicChildren = null);
      const { type: c3, ref: u4, shapeFlag: p3 } = t5;
      switch (c3) {
        case at:
          processText(e8, t5, n3, r5);
          break;
        case lt:
          processCommentNode(e8, t5, n3, r5);
          break;
        case ct:
          null == e8 && mountStaticNode(t5, n3, r5, i4);
          break;
        case it:
          processFragment(e8, t5, n3, r5, o7, s3, i4, a4, l3);
          break;
        default:
          1 & p3 ? processElement(e8, t5, n3, r5, o7, s3, i4, a4, l3) : 6 & p3 ? processComponent(e8, t5, n3, r5, o7, s3, i4, a4, l3) : (64 & p3 || 128 & p3) && c3.process(e8, t5, n3, r5, o7, s3, i4, a4, l3, g2);
      }
      null != u4 && o7 && setRef(u4, e8 && e8.ref, s3, t5 || e8, !t5);
    }, processText = (e8, n3, r5, o7) => {
      if (null == e8)
        t4(n3.el = s2(n3.children), r5, o7);
      else {
        const t5 = n3.el = e8.el;
        n3.children !== e8.children && a3(t5, n3.children);
      }
    }, processCommentNode = (e8, n3, r5, o7) => {
      null == e8 ? t4(n3.el = i3(n3.children || ""), r5, o7) : n3.el = e8.el;
    }, mountStaticNode = (e8, t5, n3, r5) => {
      [e8.el, e8.anchor] = f2(e8.children, t5, n3, r5, e8.el, e8.anchor);
    }, moveStaticNode = ({ el: e8, anchor: n3 }, r5, o7) => {
      let s3;
      for (; e8 && e8 !== n3; )
        s3 = u3(e8), t4(e8, r5, o7), e8 = s3;
      t4(n3, r5, o7);
    }, removeStaticNode = ({ el: e8, anchor: t5 }) => {
      let r5;
      for (; e8 && e8 !== t5; )
        r5 = u3(e8), n2(e8), e8 = r5;
      n2(t5);
    }, processElement = (e8, t5, n3, r5, o7, s3, i4, a4, l3) => {
      "svg" === t5.type ? i4 = "svg" : "math" === t5.type && (i4 = "mathml"), null == e8 ? mountElement(t5, n3, r5, o7, s3, i4, a4, l3) : patchElement(e8, t5, o7, s3, i4, a4, l3);
    }, mountElement = (e8, n3, s3, i4, a4, c3, u4, p3) => {
      let f3, d3;
      const { props: g3, shapeFlag: m4, transition: y4, dirs: v3 } = e8;
      if (f3 = e8.el = o6(e8.type, c3, g3 && g3.is, g3), 8 & m4 ? l2(f3, e8.children) : 16 & m4 && mountChildren(e8.children, f3, null, i4, a4, resolveChildrenNamespace(e8, c3), u4, p3), v3 && invokeDirectiveHook(e8, null, i4, "created"), setScopeId(f3, e8, e8.scopeId, u4, i4), g3) {
        for (const e9 in g3)
          "value" === e9 || j2(e9) || r4(f3, e9, null, g3[e9], c3, i4);
        "value" in g3 && r4(f3, "value", null, g3.value, c3), (d3 = g3.onVnodeBeforeMount) && invokeVNodeHook(d3, i4, e8);
      }
      v3 && invokeDirectiveHook(e8, null, i4, "beforeMount");
      const _3 = function(e9, t5) {
        return (!e9 || e9 && !e9.pendingBranch) && t5 && !t5.persisted;
      }(a4, y4);
      _3 && y4.beforeEnter(f3), t4(f3, n3, s3), ((d3 = g3 && g3.onVnodeMounted) || _3 || v3) && queuePostRenderEffect(() => {
        d3 && invokeVNodeHook(d3, i4, e8), _3 && y4.enter(f3), v3 && invokeDirectiveHook(e8, null, i4, "mounted");
      }, a4);
    }, setScopeId = (e8, t5, n3, r5, o7) => {
      if (n3 && p2(e8, n3), r5)
        for (let t6 = 0; t6 < r5.length; t6++)
          p2(e8, r5[t6]);
      if (o7) {
        if (t5 === o7.subTree) {
          const t6 = o7.vnode;
          setScopeId(e8, t6, t6.scopeId, t6.slotScopeIds, o7.parent);
        }
      }
    }, mountChildren = (e8, t5, n3, r5, o7, s3, i4, a4, l3 = 0) => {
      for (let c3 = l3; c3 < e8.length; c3++) {
        const l4 = e8[c3] = a4 ? cloneIfMounted(e8[c3]) : normalizeVNode$1(e8[c3]);
        patch(null, l4, t5, n3, r5, o7, s3, i4, a4);
      }
    }, patchElement = (e8, t5, n3, o7, s3, i4, a4) => {
      const c3 = t5.el = e8.el;
      let { patchFlag: u4, dynamicChildren: p3, dirs: f3 } = t5;
      u4 |= 16 & e8.patchFlag;
      const d3 = e8.props || A2, g3 = t5.props || A2;
      let m4;
      if (n3 && toggleRecurse(n3, false), (m4 = g3.onVnodeBeforeUpdate) && invokeVNodeHook(m4, n3, t5, e8), f3 && invokeDirectiveHook(t5, e8, n3, "beforeUpdate"), n3 && toggleRecurse(n3, true), (d3.innerHTML && null == g3.innerHTML || d3.textContent && null == g3.textContent) && l2(c3, ""), p3 ? patchBlockChildren(e8.dynamicChildren, p3, c3, n3, o7, resolveChildrenNamespace(t5, s3), i4) : a4 || patchChildren(e8, t5, c3, null, n3, o7, resolveChildrenNamespace(t5, s3), i4, false), u4 > 0) {
        if (16 & u4)
          patchProps(c3, d3, g3, n3, s3);
        else if (2 & u4 && d3.class !== g3.class && r4(c3, "class", null, g3.class, s3), 4 & u4 && r4(c3, "style", d3.style, g3.style, s3), 8 & u4) {
          const e9 = t5.dynamicProps;
          for (let t6 = 0; t6 < e9.length; t6++) {
            const o8 = e9[t6], i5 = d3[o8], a5 = g3[o8];
            a5 === i5 && "value" !== o8 || r4(c3, o8, i5, a5, s3, n3);
          }
        }
        1 & u4 && e8.children !== t5.children && l2(c3, t5.children);
      } else
        a4 || null != p3 || patchProps(c3, d3, g3, n3, s3);
      ((m4 = g3.onVnodeUpdated) || f3) && queuePostRenderEffect(() => {
        m4 && invokeVNodeHook(m4, n3, t5, e8), f3 && invokeDirectiveHook(t5, e8, n3, "updated");
      }, o7);
    }, patchBlockChildren = (e8, t5, n3, r5, o7, s3, i4) => {
      for (let a4 = 0; a4 < t5.length; a4++) {
        const l3 = e8[a4], u4 = t5[a4], p3 = l3.el && (l3.type === it || !isSameVNodeType(l3, u4) || 70 & l3.shapeFlag) ? c2(l3.el) : n3;
        patch(l3, u4, p3, null, r5, o7, s3, i4, true);
      }
    }, patchProps = (e8, t5, n3, o7, s3) => {
      if (t5 !== n3) {
        if (t5 !== A2)
          for (const i4 in t5)
            j2(i4) || i4 in n3 || r4(e8, i4, t5[i4], null, s3, o7);
        for (const i4 in n3) {
          if (j2(i4))
            continue;
          const a4 = n3[i4], l3 = t5[i4];
          a4 !== l3 && "value" !== i4 && r4(e8, i4, l3, a4, s3, o7);
        }
        "value" in n3 && r4(e8, "value", t5.value, n3.value, s3);
      }
    }, processFragment = (e8, n3, r5, o7, i4, a4, l3, c3, u4) => {
      const p3 = n3.el = e8 ? e8.el : s2(""), f3 = n3.anchor = e8 ? e8.anchor : s2("");
      let { patchFlag: d3, dynamicChildren: g3, slotScopeIds: m4 } = n3;
      m4 && (c3 = c3 ? c3.concat(m4) : m4), null == e8 ? (t4(p3, r5, o7), t4(f3, r5, o7), mountChildren(n3.children || [], r5, f3, i4, a4, l3, c3, u4)) : d3 > 0 && 64 & d3 && g3 && e8.dynamicChildren ? (patchBlockChildren(e8.dynamicChildren, g3, r5, i4, a4, l3, c3), (null != n3.key || i4 && n3 === i4.subTree) && traverseStaticChildren(e8, n3, true)) : patchChildren(e8, n3, r5, f3, i4, a4, l3, c3, u4);
    }, processComponent = (e8, t5, n3, r5, o7, s3, i4, a4, l3) => {
      t5.slotScopeIds = a4, null == e8 ? 512 & t5.shapeFlag ? o7.ctx.activate(t5, n3, r5, i4, l3) : mountComponent(t5, n3, r5, o7, s3, i4, l3) : updateComponent(e8, t5, l3);
    }, mountComponent = (e8, t5, n3, r5, o7, s3, i4) => {
      const a4 = e8.component = createComponentInstance$1(e8, r5, o7);
      if (isKeepAlive(e8) && (a4.ctx.renderer = g2), setupComponent$1(a4, false, i4), a4.asyncDep) {
        if (o7 && o7.registerDep(a4, setupRenderEffect, i4), !e8.el) {
          const e9 = a4.subTree = createVNode(lt);
          processCommentNode(null, e9, t5, n3);
        }
      } else
        setupRenderEffect(a4, e8, t5, n3, o7, s3, i4);
    }, updateComponent = (e8, t5, n3) => {
      const r5 = t5.component = e8.component;
      if (function(e9, t6, n4) {
        const { props: r6, children: o7, component: s3 } = e9, { props: i4, children: a4, patchFlag: l3 } = t6, c3 = s3.emitsOptions;
        if (t6.dirs || t6.transition)
          return true;
        if (!(n4 && l3 >= 0))
          return !(!o7 && !a4 || a4 && a4.$stable) || r6 !== i4 && (r6 ? !i4 || hasPropsChanged(r6, i4, c3) : !!i4);
        if (1024 & l3)
          return true;
        if (16 & l3)
          return r6 ? hasPropsChanged(r6, i4, c3) : !!i4;
        if (8 & l3) {
          const e10 = t6.dynamicProps;
          for (let t7 = 0; t7 < e10.length; t7++) {
            const n5 = e10[t7];
            if (i4[n5] !== r6[n5] && !isEmitListener(c3, n5))
              return true;
          }
        }
        return false;
      }(e8, t5, n3)) {
        if (r5.asyncDep && !r5.asyncResolved)
          return void updateComponentPreRender(r5, t5, n3);
        r5.next = t5, function(e9) {
          const t6 = $e.indexOf(e9);
          t6 > Te && $e.splice(t6, 1);
        }(r5.update), r5.effect.dirty = true, r5.update();
      } else
        t5.el = e8.el, r5.vnode = t5;
    }, setupRenderEffect = (e8, t5, n3, r5, o7, s3, i4) => {
      const componentUpdateFn = () => {
        if (e8.isMounted) {
          let { next: t6, bu: n4, u: r6, parent: a5, vnode: l4 } = e8;
          {
            const n5 = locateNonHydratedAsyncRoot(e8);
            if (n5)
              return t6 && (t6.el = l4.el, updateComponentPreRender(e8, t6, i4)), void n5.asyncDep.then(() => {
                e8.isUnmounted || componentUpdateFn();
              });
          }
          let u4, p3 = t6;
          toggleRecurse(e8, false), t6 ? (t6.el = l4.el, updateComponentPreRender(e8, t6, i4)) : t6 = l4, n4 && invokeArrayFns(n4), (u4 = t6.props && t6.props.onVnodeBeforeUpdate) && invokeVNodeHook(u4, a5, t6, l4), toggleRecurse(e8, true);
          const f3 = renderComponentRoot$1(e8), d3 = e8.subTree;
          e8.subTree = f3, patch(d3, f3, c2(d3.el), getNextHostNode(d3), e8, o7, s3), t6.el = f3.el, null === p3 && function({ vnode: e9, parent: t7 }, n5) {
            for (; t7; ) {
              const r7 = t7.subTree;
              if (r7.suspense && r7.suspense.activeBranch === e9 && (r7.el = e9.el), r7 !== e9)
                break;
              (e9 = t7.vnode).el = n5, t7 = t7.parent;
            }
          }(e8, f3.el), r6 && queuePostRenderEffect(r6, o7), (u4 = t6.props && t6.props.onVnodeUpdated) && queuePostRenderEffect(() => invokeVNodeHook(u4, a5, t6, l4), o7);
        } else {
          let i5;
          const { el: a5, props: l4 } = t5, { bm: c3, m: u4, parent: p3 } = e8, f3 = isAsyncWrapper(t5);
          if (toggleRecurse(e8, false), c3 && invokeArrayFns(c3), !f3 && (i5 = l4 && l4.onVnodeBeforeMount) && invokeVNodeHook(i5, p3, t5), toggleRecurse(e8, true), a5 && y3) {
            const hydrateSubTree = () => {
              e8.subTree = renderComponentRoot$1(e8), y3(a5, e8.subTree, e8, o7, null);
            };
            f3 ? t5.type.__asyncLoader().then(() => !e8.isUnmounted && hydrateSubTree()) : hydrateSubTree();
          } else {
            const i6 = e8.subTree = renderComponentRoot$1(e8);
            patch(null, i6, n3, r5, e8, o7, s3), t5.el = i6.el;
          }
          if (u4 && queuePostRenderEffect(u4, o7), !f3 && (i5 = l4 && l4.onVnodeMounted)) {
            const e9 = t5;
            queuePostRenderEffect(() => invokeVNodeHook(i5, p3, e9), o7);
          }
          (256 & t5.shapeFlag || p3 && isAsyncWrapper(p3.vnode) && 256 & p3.vnode.shapeFlag) && e8.a && queuePostRenderEffect(e8.a, o7), e8.isMounted = true, t5 = n3 = r5 = null;
        }
      }, a4 = e8.effect = new ReactiveEffect(componentUpdateFn, NOOP, () => queueJob(l3), e8.scope), l3 = e8.update = () => {
        a4.dirty && a4.run();
      };
      l3.i = e8, l3.id = e8.uid, toggleRecurse(e8, true), l3();
    }, updateComponentPreRender = (e8, t5, n3) => {
      t5.component = e8;
      const r5 = e8.vnode.props;
      e8.vnode = t5, e8.next = null, function(e9, t6, n4, r6) {
        const { props: o7, attrs: s3, vnode: { patchFlag: i4 } } = e9, a4 = toRaw(o7), [l3] = e9.propsOptions;
        let c3 = false;
        if (!(r6 || i4 > 0) || 16 & i4) {
          let r7;
          setFullProps(e9, t6, o7, s3) && (c3 = true);
          for (const s4 in a4)
            t6 && (hasOwn(t6, s4) || (r7 = N(s4)) !== s4 && hasOwn(t6, r7)) || (l3 ? !n4 || void 0 === n4[s4] && void 0 === n4[r7] || (o7[s4] = resolvePropValue(l3, a4, s4, void 0, e9, true)) : delete o7[s4]);
          if (s3 !== a4)
            for (const e10 in s3)
              t6 && hasOwn(t6, e10) || (delete s3[e10], c3 = true);
        } else if (8 & i4) {
          const n5 = e9.vnode.dynamicProps;
          for (let r7 = 0; r7 < n5.length; r7++) {
            let i5 = n5[r7];
            if (isEmitListener(e9.emitsOptions, i5))
              continue;
            const u4 = t6[i5];
            if (l3)
              if (hasOwn(s3, i5))
                u4 !== s3[i5] && (s3[i5] = u4, c3 = true);
              else {
                const t7 = M(i5);
                o7[t7] = resolvePropValue(l3, a4, t7, u4, e9, false);
              }
            else
              u4 !== s3[i5] && (s3[i5] = u4, c3 = true);
          }
        }
        c3 && trigger(e9.attrs, "set", "");
      }(e8, t5.props, r5, n3), updateSlots(e8, t5.children, n3), pauseTracking(), flushPreFlushCbs(e8), resetTracking();
    }, patchChildren = (e8, t5, n3, r5, o7, s3, i4, a4, c3 = false) => {
      const u4 = e8 && e8.children, p3 = e8 ? e8.shapeFlag : 0, f3 = t5.children, { patchFlag: d3, shapeFlag: g3 } = t5;
      if (d3 > 0) {
        if (128 & d3)
          return void patchKeyedChildren(u4, f3, n3, r5, o7, s3, i4, a4, c3);
        if (256 & d3)
          return void patchUnkeyedChildren(u4, f3, n3, r5, o7, s3, i4, a4, c3);
      }
      8 & g3 ? (16 & p3 && unmountChildren(u4, o7, s3), f3 !== u4 && l2(n3, f3)) : 16 & p3 ? 16 & g3 ? patchKeyedChildren(u4, f3, n3, r5, o7, s3, i4, a4, c3) : unmountChildren(u4, o7, s3, true) : (8 & p3 && l2(n3, ""), 16 & g3 && mountChildren(f3, n3, r5, o7, s3, i4, a4, c3));
    }, patchUnkeyedChildren = (e8, t5, n3, r5, o7, s3, i4, a4, l3) => {
      t5 = t5 || O;
      const c3 = (e8 = e8 || O).length, u4 = t5.length, p3 = Math.min(c3, u4);
      let f3;
      for (f3 = 0; f3 < p3; f3++) {
        const r6 = t5[f3] = l3 ? cloneIfMounted(t5[f3]) : normalizeVNode$1(t5[f3]);
        patch(e8[f3], r6, n3, null, o7, s3, i4, a4, l3);
      }
      c3 > u4 ? unmountChildren(e8, o7, s3, true, false, p3) : mountChildren(t5, n3, r5, o7, s3, i4, a4, l3, p3);
    }, patchKeyedChildren = (e8, t5, n3, r5, o7, s3, i4, a4, l3) => {
      let c3 = 0;
      const u4 = t5.length;
      let p3 = e8.length - 1, f3 = u4 - 1;
      for (; c3 <= p3 && c3 <= f3; ) {
        const r6 = e8[c3], u5 = t5[c3] = l3 ? cloneIfMounted(t5[c3]) : normalizeVNode$1(t5[c3]);
        if (!isSameVNodeType(r6, u5))
          break;
        patch(r6, u5, n3, null, o7, s3, i4, a4, l3), c3++;
      }
      for (; c3 <= p3 && c3 <= f3; ) {
        const r6 = e8[p3], c4 = t5[f3] = l3 ? cloneIfMounted(t5[f3]) : normalizeVNode$1(t5[f3]);
        if (!isSameVNodeType(r6, c4))
          break;
        patch(r6, c4, n3, null, o7, s3, i4, a4, l3), p3--, f3--;
      }
      if (c3 > p3) {
        if (c3 <= f3) {
          const e9 = f3 + 1, p4 = e9 < u4 ? t5[e9].el : r5;
          for (; c3 <= f3; )
            patch(null, t5[c3] = l3 ? cloneIfMounted(t5[c3]) : normalizeVNode$1(t5[c3]), n3, p4, o7, s3, i4, a4, l3), c3++;
        }
      } else if (c3 > f3)
        for (; c3 <= p3; )
          unmount(e8[c3], o7, s3, true), c3++;
      else {
        const d3 = c3, g3 = c3, m4 = /* @__PURE__ */ new Map();
        for (c3 = g3; c3 <= f3; c3++) {
          const e9 = t5[c3] = l3 ? cloneIfMounted(t5[c3]) : normalizeVNode$1(t5[c3]);
          null != e9.key && m4.set(e9.key, c3);
        }
        let y4, v3 = 0;
        const _3 = f3 - g3 + 1;
        let b3 = false, k3 = 0;
        const R3 = new Array(_3);
        for (c3 = 0; c3 < _3; c3++)
          R3[c3] = 0;
        for (c3 = d3; c3 <= p3; c3++) {
          const r6 = e8[c3];
          if (v3 >= _3) {
            unmount(r6, o7, s3, true);
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
          void 0 === u5 ? unmount(r6, o7, s3, true) : (R3[u5 - g3] = c3 + 1, u5 >= k3 ? k3 = u5 : b3 = true, patch(r6, t5[u5], n3, null, o7, s3, i4, a4, l3), v3++);
        }
        const w3 = b3 ? function(e9) {
          const t6 = e9.slice(), n4 = [0];
          let r6, o8, s4, i5, a5;
          const l4 = e9.length;
          for (r6 = 0; r6 < l4; r6++) {
            const l5 = e9[r6];
            if (0 !== l5) {
              if (o8 = n4[n4.length - 1], e9[o8] < l5) {
                t6[r6] = o8, n4.push(r6);
                continue;
              }
              for (s4 = 0, i5 = n4.length - 1; s4 < i5; )
                a5 = s4 + i5 >> 1, e9[n4[a5]] < l5 ? s4 = a5 + 1 : i5 = a5;
              l5 < e9[n4[s4]] && (s4 > 0 && (t6[r6] = n4[s4 - 1]), n4[s4] = r6);
            }
          }
          s4 = n4.length, i5 = n4[s4 - 1];
          for (; s4-- > 0; )
            n4[s4] = i5, i5 = t6[i5];
          return n4;
        }(R3) : O;
        for (y4 = w3.length - 1, c3 = _3 - 1; c3 >= 0; c3--) {
          const e9 = g3 + c3, p4 = t5[e9], f4 = e9 + 1 < u4 ? t5[e9 + 1].el : r5;
          0 === R3[c3] ? patch(null, p4, n3, f4, o7, s3, i4, a4, l3) : b3 && (y4 < 0 || c3 !== w3[y4] ? move(p4, n3, f4, 2) : y4--);
        }
      }
    }, move = (e8, n3, r5, o7, s3 = null) => {
      const { el: i4, type: a4, transition: l3, children: c3, shapeFlag: u4 } = e8;
      if (6 & u4)
        return void move(e8.component.subTree, n3, r5, o7);
      if (128 & u4)
        return void e8.suspense.move(n3, r5, o7);
      if (64 & u4)
        return void a4.move(e8, n3, r5, g2);
      if (a4 === it) {
        t4(i4, n3, r5);
        for (let e9 = 0; e9 < c3.length; e9++)
          move(c3[e9], n3, r5, o7);
        return void t4(e8.anchor, n3, r5);
      }
      if (a4 === ct)
        return void moveStaticNode(e8, n3, r5);
      if (2 !== o7 && 1 & u4 && l3)
        if (0 === o7)
          l3.beforeEnter(i4), t4(i4, n3, r5), queuePostRenderEffect(() => l3.enter(i4), s3);
        else {
          const { leave: e9, delayLeave: o8, afterLeave: s4 } = l3, remove22 = () => t4(i4, n3, r5), performLeave = () => {
            e9(i4, () => {
              remove22(), s4 && s4();
            });
          };
          o8 ? o8(i4, remove22, performLeave) : performLeave();
        }
      else
        t4(i4, n3, r5);
    }, unmount = (e8, t5, n3, r5 = false, o7 = false) => {
      const { type: s3, props: i4, ref: a4, children: l3, dynamicChildren: c3, shapeFlag: u4, patchFlag: p3, dirs: f3, cacheIndex: d3 } = e8;
      if (-2 === p3 && (o7 = false), null != a4 && setRef(a4, null, n3, e8, true), null != d3 && (t5.renderCache[d3] = void 0), 256 & u4)
        return void t5.ctx.deactivate(e8);
      const m4 = 1 & u4 && f3, y4 = !isAsyncWrapper(e8);
      let v3;
      if (y4 && (v3 = i4 && i4.onVnodeBeforeUnmount) && invokeVNodeHook(v3, t5, e8), 6 & u4)
        unmountComponent(e8.component, n3, r5);
      else {
        if (128 & u4)
          return void e8.suspense.unmount(n3, r5);
        m4 && invokeDirectiveHook(e8, null, t5, "beforeUnmount"), 64 & u4 ? e8.type.remove(e8, t5, n3, g2, r5) : c3 && !c3.hasOnce && (s3 !== it || p3 > 0 && 64 & p3) ? unmountChildren(c3, t5, n3, false, true) : (s3 === it && 384 & p3 || !o7 && 16 & u4) && unmountChildren(l3, t5, n3), r5 && remove2(e8);
      }
      (y4 && (v3 = i4 && i4.onVnodeUnmounted) || m4) && queuePostRenderEffect(() => {
        v3 && invokeVNodeHook(v3, t5, e8), m4 && invokeDirectiveHook(e8, null, t5, "unmounted");
      }, n3);
    }, remove2 = (e8) => {
      const { type: t5, el: r5, anchor: o7, transition: s3 } = e8;
      if (t5 === it)
        return void removeFragment(r5, o7);
      if (t5 === ct)
        return void removeStaticNode(e8);
      const performRemove = () => {
        n2(r5), s3 && !s3.persisted && s3.afterLeave && s3.afterLeave();
      };
      if (1 & e8.shapeFlag && s3 && !s3.persisted) {
        const { leave: t6, delayLeave: n3 } = s3, performLeave = () => t6(r5, performRemove);
        n3 ? n3(e8.el, performRemove, performLeave) : performLeave();
      } else
        performRemove();
    }, removeFragment = (e8, t5) => {
      let r5;
      for (; e8 !== t5; )
        r5 = u3(e8), n2(e8), e8 = r5;
      n2(t5);
    }, unmountComponent = (e8, t5, n3) => {
      const { bum: r5, scope: o7, update: s3, subTree: i4, um: a4, m: l3, a: c3 } = e8;
      invalidateMount(l3), invalidateMount(c3), r5 && invokeArrayFns(r5), o7.stop(), s3 && (s3.active = false, unmount(i4, e8, t5, n3)), a4 && queuePostRenderEffect(a4, t5), queuePostRenderEffect(() => {
        e8.isUnmounted = true;
      }, t5), t5 && t5.pendingBranch && !t5.isUnmounted && e8.asyncDep && !e8.asyncResolved && e8.suspenseId === t5.pendingId && (t5.deps--, 0 === t5.deps && t5.resolve());
    }, unmountChildren = (e8, t5, n3, r5 = false, o7 = false, s3 = 0) => {
      for (let i4 = s3; i4 < e8.length; i4++)
        unmount(e8[i4], t5, n3, r5, o7);
    }, getNextHostNode = (e8) => {
      if (6 & e8.shapeFlag)
        return getNextHostNode(e8.component.subTree);
      if (128 & e8.shapeFlag)
        return e8.suspense.next();
      const t5 = u3(e8.anchor || e8.el), n3 = t5 && t5[rt];
      return n3 ? u3(n3) : t5;
    };
    let d2 = false;
    const render = (e8, t5, n3) => {
      null == e8 ? t5._vnode && unmount(t5._vnode, null, null, true) : patch(t5._vnode || null, e8, t5, null, null, null, n3), t5._vnode = e8, d2 || (d2 = true, flushPreFlushCbs(), flushPostFlushCbs(), d2 = false);
    }, g2 = { p: patch, um: unmount, m: move, r: remove2, mt: mountComponent, mc: mountChildren, pc: patchChildren, pbc: patchBlockChildren, n: getNextHostNode, o: e7 };
    let m3, y3;
    return { render, hydrate: m3, createApp: createAppAPI(render, m3) };
  }(e6);
}
function resolveChildrenNamespace({ type: e6, props: t4 }, n2) {
  return "svg" === n2 && "foreignObject" === e6 || "mathml" === n2 && "annotation-xml" === e6 && t4 && t4.encoding && t4.encoding.includes("html") ? void 0 : n2;
}
function toggleRecurse({ effect: e6, update: t4 }, n2) {
  e6.allowRecurse = t4.allowRecurse = n2;
}
function traverseStaticChildren(e6, t4, n2 = false) {
  const r4 = e6.children, o6 = t4.children;
  if (E(r4) && E(o6))
    for (let e7 = 0; e7 < r4.length; e7++) {
      const t5 = r4[e7];
      let s2 = o6[e7];
      1 & s2.shapeFlag && !s2.dynamicChildren && ((s2.patchFlag <= 0 || 32 === s2.patchFlag) && (s2 = o6[e7] = cloneIfMounted(o6[e7]), s2.el = t5.el), n2 || -2 === s2.patchFlag || traverseStaticChildren(t5, s2)), s2.type === at && (s2.el = t5.el);
    }
}
function locateNonHydratedAsyncRoot(e6) {
  const t4 = e6.subTree.component;
  if (t4)
    return t4.asyncDep && !t4.asyncResolved ? t4 : locateNonHydratedAsyncRoot(t4);
}
function invalidateMount(e6) {
  if (e6)
    for (let t4 = 0; t4 < e6.length; t4++)
      e6[t4].active = false;
}
function watchEffect(e6, t4) {
  return doWatch(e6, null, t4);
}
function watch(e6, t4, n2) {
  return doWatch(e6, t4, n2);
}
function doWatch(e6, t4, { immediate: n2, deep: r4, flush: o6, once: s2, onTrack: i3, onTrigger: a3 } = A2) {
  if (t4 && s2) {
    const e7 = t4;
    t4 = (...t5) => {
      e7(...t5), unwatch();
    };
  }
  const l2 = ht, reactiveGetter = (e7) => true === r4 ? e7 : traverse(e7, false === r4 ? 1 : void 0);
  let c2, u3, p2 = false, f2 = false;
  if (isRef(e6) ? (c2 = () => e6.value, p2 = isShallow(e6)) : isReactive(e6) ? (c2 = () => reactiveGetter(e6), p2 = true) : E(e6) ? (f2 = true, p2 = e6.some((e7) => isReactive(e7) || isShallow(e7)), c2 = () => e6.map((e7) => isRef(e7) ? e7.value : isReactive(e7) ? reactiveGetter(e7) : isFunction(e7) ? callWithErrorHandling(e7, l2, 2) : void 0)) : c2 = isFunction(e6) ? t4 ? () => callWithErrorHandling(e6, l2, 2) : () => (u3 && u3(), callWithAsyncErrorHandling(e6, l2, 3, [onCleanup])) : NOOP, t4 && r4) {
    const e7 = c2;
    c2 = () => traverse(e7());
  }
  let d2, onCleanup = (e7) => {
    u3 = y3.onStop = () => {
      callWithErrorHandling(e7, l2, 4), u3 = y3.onStop = void 0;
    };
  };
  if (vt) {
    if (onCleanup = NOOP, t4 ? n2 && callWithAsyncErrorHandling(t4, l2, 3, [c2(), f2 ? [] : void 0, onCleanup]) : c2(), "sync" !== o6)
      return NOOP;
    {
      const e7 = useSSRContext();
      d2 = e7.__watcherHandles || (e7.__watcherHandles = []);
    }
  }
  let g2 = f2 ? new Array(e6.length).fill(st) : st;
  const job = () => {
    if (y3.active && y3.dirty)
      if (t4) {
        const e7 = y3.run();
        (r4 || p2 || (f2 ? e7.some((e8, t5) => hasChanged(e8, g2[t5])) : hasChanged(e7, g2))) && (u3 && u3(), callWithAsyncErrorHandling(t4, l2, 3, [e7, g2 === st ? void 0 : f2 && g2[0] === st ? [] : g2, onCleanup]), g2 = e7);
      } else
        y3.run();
  };
  let m3;
  job.allowRecurse = !!t4, "sync" === o6 ? m3 = job : "post" === o6 ? m3 = () => queuePostRenderEffect(job, l2 && l2.suspense) : (job.pre = true, l2 && (job.id = l2.uid), m3 = () => queueJob(job));
  const y3 = new ReactiveEffect(c2, NOOP, m3), v3 = getCurrentScope(), unwatch = () => {
    y3.stop(), v3 && remove(v3.effects, y3);
  };
  return t4 ? n2 ? job() : g2 = y3.run() : "post" === o6 ? queuePostRenderEffect(y3.run.bind(y3), l2 && l2.suspense) : y3.run(), d2 && d2.push(unwatch), unwatch;
}
function instanceWatch(e6, t4, n2) {
  const r4 = this.proxy, o6 = isString(e6) ? e6.includes(".") ? createPathGetter(r4, e6) : () => r4[e6] : e6.bind(r4, r4);
  let s2;
  isFunction(t4) ? s2 = t4 : (s2 = t4.handler, n2 = t4);
  const i3 = setCurrentInstance(this), a3 = doWatch(o6, s2.bind(r4), n2);
  return i3(), a3;
}
function createPathGetter(e6, t4) {
  const n2 = t4.split(".");
  return () => {
    let t5 = e6;
    for (let e7 = 0; e7 < n2.length && t5; e7++)
      t5 = t5[n2[e7]];
    return t5;
  };
}
function traverse(e6, t4 = 1 / 0, n2) {
  if (t4 <= 0 || !isObject(e6) || e6.__v_skip)
    return e6;
  if ((n2 = n2 || /* @__PURE__ */ new Set()).has(e6))
    return e6;
  if (n2.add(e6), t4--, isRef(e6))
    traverse(e6.value, t4, n2);
  else if (E(e6))
    for (let r4 = 0; r4 < e6.length; r4++)
      traverse(e6[r4], t4, n2);
  else if (isSet(e6) || isMap(e6))
    e6.forEach((e7) => {
      traverse(e7, t4, n2);
    });
  else if (isPlainObject(e6)) {
    for (const r4 in e6)
      traverse(e6[r4], t4, n2);
    for (const r4 of Object.getOwnPropertySymbols(e6))
      Object.prototype.propertyIsEnumerable.call(e6, r4) && traverse(e6[r4], t4, n2);
  }
  return e6;
}
function emit(e6, t4, ...n2) {
  if (e6.isUnmounted)
    return;
  const r4 = e6.vnode.props || A2;
  let o6 = n2;
  const s2 = t4.startsWith("update:"), i3 = s2 && getModelModifiers(r4, t4.slice(7));
  let a3;
  i3 && (i3.trim && (o6 = n2.map((e7) => isString(e7) ? e7.trim() : e7)), i3.number && (o6 = n2.map(looseToNumber)));
  let l2 = r4[a3 = V(t4)] || r4[a3 = V(M(t4))];
  !l2 && s2 && (l2 = r4[a3 = V(N(t4))]), l2 && callWithAsyncErrorHandling(l2, e6, 6, o6);
  const c2 = r4[a3 + "Once"];
  if (c2) {
    if (e6.emitted) {
      if (e6.emitted[a3])
        return;
    } else
      e6.emitted = {};
    e6.emitted[a3] = true, callWithAsyncErrorHandling(c2, e6, 6, o6);
  }
}
function normalizeEmitsOptions(e6, t4, n2 = false) {
  const r4 = t4.emitsCache, o6 = r4.get(e6);
  if (void 0 !== o6)
    return o6;
  const s2 = e6.emits;
  let i3 = {}, a3 = false;
  if (__VUE_OPTIONS_API__ && !isFunction(e6)) {
    const extendEmits = (e7) => {
      const n3 = normalizeEmitsOptions(e7, t4, true);
      n3 && (a3 = true, $(i3, n3));
    };
    !n2 && t4.mixins.length && t4.mixins.forEach(extendEmits), e6.extends && extendEmits(e6.extends), e6.mixins && e6.mixins.forEach(extendEmits);
  }
  return s2 || a3 ? (E(s2) ? s2.forEach((e7) => i3[e7] = null) : $(i3, s2), isObject(e6) && r4.set(e6, i3), i3) : (isObject(e6) && r4.set(e6, null), null);
}
function isEmitListener(e6, t4) {
  return !(!e6 || !isOn(t4)) && (t4 = t4.slice(2).replace(/Once$/, ""), hasOwn(e6, t4[0].toLowerCase() + t4.slice(1)) || hasOwn(e6, N(t4)) || hasOwn(e6, t4));
}
function renderComponentRoot$1(e6) {
  const { type: t4, vnode: n2, proxy: r4, withProxy: o6, propsOptions: [s2], slots: i3, attrs: a3, emit: l2, render: c2, renderCache: u3, props: p2, data: f2, setupState: d2, ctx: g2, inheritAttrs: m3 } = e6, y3 = setCurrentRenderingInstance$1(e6);
  let v3, _3;
  try {
    if (4 & n2.shapeFlag) {
      const e7 = o6 || r4, t5 = e7;
      v3 = normalizeVNode$1(c2.call(t5, e7, u3, p2, d2, f2, g2)), _3 = a3;
    } else {
      const e7 = t4;
      0, v3 = normalizeVNode$1(e7.length > 1 ? e7(p2, { attrs: a3, slots: i3, emit: l2 }) : e7(p2, null)), _3 = t4.props ? a3 : getFunctionalFallthrough(a3);
    }
  } catch (t5) {
    handleError(t5, e6, 1), v3 = createVNode(lt);
  }
  let b3 = v3;
  if (_3 && false !== m3) {
    const e7 = Object.keys(_3), { shapeFlag: t5 } = b3;
    e7.length && 7 & t5 && (s2 && e7.some(isModelListener) && (_3 = filterModelListeners(_3, s2)), b3 = cloneVNode(b3, _3, false, true));
  }
  return n2.dirs && (b3 = cloneVNode(b3, null, false, true), b3.dirs = b3.dirs ? b3.dirs.concat(n2.dirs) : n2.dirs), n2.transition && (b3.transition = n2.transition), v3 = b3, setCurrentRenderingInstance$1(y3), v3;
}
function hasPropsChanged(e6, t4, n2) {
  const r4 = Object.keys(t4);
  if (r4.length !== Object.keys(e6).length)
    return true;
  for (let o6 = 0; o6 < r4.length; o6++) {
    const s2 = r4[o6];
    if (t4[s2] !== e6[s2] && !isEmitListener(n2, s2))
      return true;
  }
  return false;
}
function setBlockTracking(e6) {
  pt += e6, e6 < 0 && ut && (ut.hasOnce = true);
}
function isVNode(e6) {
  return !!e6 && true === e6.__v_isVNode;
}
function isSameVNodeType(e6, t4) {
  return e6.type === t4.type && e6.key === t4.key;
}
function cloneVNode(e6, t4, n2 = false, r4 = false) {
  const { props: o6, ref: s2, patchFlag: i3, children: a3, transition: l2 } = e6, c2 = t4 ? mergeProps(o6 || {}, t4) : o6, u3 = { __v_isVNode: true, __v_skip: true, type: e6.type, props: c2, key: c2 && normalizeKey(c2), ref: t4 && t4.ref ? n2 && s2 ? E(s2) ? s2.concat(normalizeRef(t4)) : [s2, normalizeRef(t4)] : normalizeRef(t4) : s2, scopeId: e6.scopeId, slotScopeIds: e6.slotScopeIds, children: a3, target: e6.target, targetStart: e6.targetStart, targetAnchor: e6.targetAnchor, staticCount: e6.staticCount, shapeFlag: e6.shapeFlag, patchFlag: t4 && e6.type !== it ? -1 === i3 ? 16 : 16 | i3 : i3, dynamicProps: e6.dynamicProps, dynamicChildren: e6.dynamicChildren, appContext: e6.appContext, dirs: e6.dirs, transition: l2, component: e6.component, suspense: e6.suspense, ssContent: e6.ssContent && cloneVNode(e6.ssContent), ssFallback: e6.ssFallback && cloneVNode(e6.ssFallback), el: e6.el, anchor: e6.anchor, ctx: e6.ctx, ce: e6.ce };
  return l2 && r4 && setTransitionHooks(u3, l2.clone(u3)), u3;
}
function createTextVNode(e6 = " ", t4 = 0) {
  return createVNode(at, null, e6, t4);
}
function normalizeVNode$1(e6) {
  return null == e6 || "boolean" == typeof e6 ? createVNode(lt) : E(e6) ? createVNode(it, null, e6.slice()) : "object" == typeof e6 ? cloneIfMounted(e6) : createVNode(at, null, String(e6));
}
function cloneIfMounted(e6) {
  return null === e6.el && -1 !== e6.patchFlag || e6.memo ? e6 : cloneVNode(e6);
}
function normalizeChildren(e6, t4) {
  let n2 = 0;
  const { shapeFlag: r4 } = e6;
  if (null == t4)
    t4 = null;
  else if (E(t4))
    n2 = 16;
  else if ("object" == typeof t4) {
    if (65 & r4) {
      const n3 = t4.default;
      return void (n3 && (n3._c && (n3._d = false), normalizeChildren(e6, n3()), n3._c && (n3._d = true)));
    }
    {
      n2 = 32;
      const r5 = t4._;
      r5 || isInternalObject(t4) ? 3 === r5 && Ie && (1 === Ie.slots._ ? t4._ = 1 : (t4._ = 2, e6.patchFlag |= 1024)) : t4._ctx = Ie;
    }
  } else
    isFunction(t4) ? (t4 = { default: t4, _ctx: Ie }, n2 = 32) : (t4 = String(t4), 64 & r4 ? (n2 = 16, t4 = [createTextVNode(t4)]) : n2 = 8);
  e6.children = t4, e6.shapeFlag |= n2;
}
function mergeProps(...e6) {
  const t4 = {};
  for (let n2 = 0; n2 < e6.length; n2++) {
    const r4 = e6[n2];
    for (const e7 in r4)
      if ("class" === e7)
        t4.class !== r4.class && (t4.class = normalizeClass([t4.class, r4.class]));
      else if ("style" === e7)
        t4.style = normalizeStyle([t4.style, r4.style]);
      else if (isOn(e7)) {
        const n3 = t4[e7], o6 = r4[e7];
        !o6 || n3 === o6 || E(n3) && n3.includes(o6) || (t4[e7] = n3 ? [].concat(n3, o6) : o6);
      } else
        "" !== e7 && (t4[e7] = r4[e7]);
  }
  return t4;
}
function invokeVNodeHook(e6, t4, n2, r4 = null) {
  callWithAsyncErrorHandling(e6, t4, 7, [n2, r4]);
}
function createComponentInstance$1(e6, t4, n2) {
  const r4 = e6.type, o6 = (t4 ? t4.appContext : e6.appContext) || ft, s2 = { uid: dt++, vnode: e6, type: r4, parent: t4, appContext: o6, root: null, next: null, subTree: null, effect: null, update: null, scope: new EffectScope(true), render: null, proxy: null, exposed: null, exposeProxy: null, withProxy: null, provides: t4 ? t4.provides : Object.create(o6.provides), accessCache: null, renderCache: [], components: null, directives: null, propsOptions: normalizePropsOptions(r4, o6), emitsOptions: normalizeEmitsOptions(r4, o6), emit: null, emitted: null, propsDefaults: A2, inheritAttrs: r4.inheritAttrs, ctx: A2, data: A2, props: A2, attrs: A2, slots: A2, refs: A2, setupState: A2, setupContext: null, suspense: n2, suspenseId: n2 ? n2.pendingId : 0, asyncDep: null, asyncResolved: false, isMounted: false, isUnmounted: false, isDeactivated: false, bc: null, c: null, bm: null, m: null, bu: null, u: null, um: null, bum: null, da: null, a: null, rtg: null, rtc: null, ec: null, sp: null };
  return s2.ctx = { _: s2 }, s2.root = t4 ? t4.root : s2, s2.emit = emit.bind(null, s2), e6.ce && e6.ce(s2), s2;
}
function isStatefulComponent(e6) {
  return 4 & e6.vnode.shapeFlag;
}
function setupComponent$1(e6, t4 = false, n2 = false) {
  t4 && mt(t4);
  const { props: r4, children: o6 } = e6.vnode, s2 = isStatefulComponent(e6);
  !function(e7, t5, n3, r5 = false) {
    const o7 = {}, s3 = createInternalObject();
    e7.propsDefaults = /* @__PURE__ */ Object.create(null), setFullProps(e7, t5, o7, s3);
    for (const t6 in e7.propsOptions[0])
      t6 in o7 || (o7[t6] = void 0);
    n3 ? e7.props = r5 ? o7 : shallowReactive(o7) : e7.type.props ? e7.props = o7 : e7.props = s3, e7.attrs = s3;
  }(e6, r4, s2, t4), initSlots(e6, o6, n2);
  const i3 = s2 ? function(e7, t5) {
    const n3 = e7.type;
    e7.accessCache = /* @__PURE__ */ Object.create(null), e7.proxy = new Proxy(e7.ctx, Ze);
    const { setup: r5 } = n3;
    if (r5) {
      const n4 = e7.setupContext = r5.length > 1 ? function(e8) {
        const expose = (t6) => {
          e8.exposed = t6 || {};
        };
        return { attrs: new Proxy(e8.attrs, _t), slots: e8.slots, emit: e8.emit, expose };
      }(e7) : null, o7 = setCurrentInstance(e7);
      pauseTracking();
      const s3 = callWithErrorHandling(r5, e7, 0, [e7.props, n4]);
      if (resetTracking(), o7(), isPromise(s3)) {
        if (s3.then(unsetCurrentInstance, unsetCurrentInstance), t5)
          return s3.then((n5) => {
            handleSetupResult(e7, n5, t5);
          }).catch((t6) => {
            handleError(t6, e7, 0);
          });
        e7.asyncDep = s3;
      } else
        handleSetupResult(e7, s3, t5);
    } else
      finishComponentSetup(e7, t5);
  }(e6, t4) : void 0;
  return t4 && mt(false), i3;
}
function handleSetupResult(e6, t4, n2) {
  isFunction(t4) ? e6.type.__ssrInlineRender ? e6.ssrRender = t4 : e6.render = t4 : isObject(t4) && (e6.setupState = proxyRefs(t4)), finishComponentSetup(e6, n2);
}
function finishComponentSetup(e6, t4, n2) {
  const r4 = e6.type;
  if (!e6.render) {
    if (!t4 && yt && !r4.render) {
      const t5 = r4.template || resolveMergedOptions(e6).template;
      if (t5) {
        const { isCustomElement: n3, compilerOptions: o6 } = e6.appContext.config, { delimiters: s2, compilerOptions: i3 } = r4, a3 = $($({ isCustomElement: n3, delimiters: s2 }, o6), i3);
        r4.render = yt(t5, a3);
      }
    }
    e6.render = r4.render || NOOP;
  }
  if (__VUE_OPTIONS_API__) {
    const t5 = setCurrentInstance(e6);
    pauseTracking();
    try {
      applyOptions(e6);
    } finally {
      resetTracking(), t5();
    }
  }
}
function getComponentPublicInstance(e6) {
  return e6.exposed ? e6.exposeProxy || (e6.exposeProxy = new Proxy(proxyRefs((t4 = e6.exposed, Object.isExtensible(t4) && def(t4, "__v_skip", true), t4)), { get: (t5, n2) => n2 in t5 ? t5[n2] : n2 in Ke ? Ke[n2](e6) : void 0, has: (e7, t5) => t5 in e7 || t5 in Ke })) : e6.proxy;
  var t4;
}
function getComponentName(e6, t4 = true) {
  return isFunction(e6) ? e6.displayName || e6.name : e6.name || t4 && e6.__name;
}
function h(e6, t4, n2) {
  const r4 = arguments.length;
  return 2 === r4 ? isObject(t4) && !E(t4) ? isVNode(t4) ? createVNode(e6, null, [t4]) : createVNode(e6, t4) : createVNode(e6, null, t4) : (r4 > 3 ? n2 = Array.prototype.slice.call(arguments, 2) : 3 === r4 && isVNode(n2) && (n2 = [n2]), createVNode(e6, t4, n2));
}
function setStyle(e6, t4, n2) {
  if (E(n2))
    n2.forEach((n3) => setStyle(e6, t4, n3));
  else if (null == n2 && (n2 = ""), t4.startsWith("--"))
    e6.setProperty(t4, n2);
  else {
    const r4 = function(e7, t5) {
      const n3 = jt[t5];
      if (n3)
        return n3;
      let r5 = M(t5);
      if ("filter" !== r5 && r5 in e7)
        return jt[t5] = r5;
      r5 = L(r5);
      for (let n4 = 0; n4 < Pt.length; n4++) {
        const o6 = Pt[n4] + r5;
        if (o6 in e7)
          return jt[t5] = o6;
      }
      return t5;
    }(e6, t4);
    Et.test(n2) ? e6.setProperty(N(r4), n2.replace(Et, ""), "important") : e6[r4] = n2;
  }
}
function patchAttr(e6, t4, n2, r4, o6, s2 = J(t4)) {
  r4 && t4.startsWith("xlink:") ? null == n2 ? e6.removeAttributeNS(Ht, t4.slice(6, t4.length)) : e6.setAttributeNS(Ht, t4, n2) : null == n2 || s2 && !includeBooleanAttr(n2) ? e6.removeAttribute(t4) : e6.setAttribute(t4, s2 ? "" : isSymbol(n2) ? String(n2) : n2);
}
function patchEvent(e6, t4, n2, r4, o6 = null) {
  const s2 = e6[Mt] || (e6[Mt] = {}), i3 = s2[t4];
  if (r4 && i3)
    i3.value = r4;
  else {
    const [n3, a3] = function(e7) {
      let t5;
      if (It.test(e7)) {
        let n5;
        for (t5 = {}; n5 = e7.match(It); )
          e7 = e7.slice(0, e7.length - n5[0].length), t5[n5[0].toLowerCase()] = true;
      }
      const n4 = ":" === e7[2] ? e7.slice(3) : N(e7.slice(2));
      return [n4, t5];
    }(t4);
    if (r4) {
      const i4 = s2[t4] = function(e7, t5) {
        const invoker = (e8) => {
          if (e8._vts) {
            if (e8._vts <= invoker.attached)
              return;
          } else
            e8._vts = Date.now();
          callWithAsyncErrorHandling(function(e9, t6) {
            if (E(t6)) {
              const n4 = e9.stopImmediatePropagation;
              return e9.stopImmediatePropagation = () => {
                n4.call(e9), e9._stopped = true;
              }, t6.map((e10) => (t7) => !t7._stopped && e10 && e10(t7));
            }
            return t6;
          }(e8, invoker.value), t5, 5, [e8]);
        };
        return invoker.value = e7, invoker.attached = getNow(), invoker;
      }(r4, o6);
      !function(e7, t5, n4, r5) {
        e7.addEventListener(t5, n4, r5);
      }(e6, n3, i4, a3);
    } else
      i3 && (!function(e7, t5, n4, r5) {
        e7.removeEventListener(t5, n4, r5);
      }(e6, n3, i3, a3), s2[t4] = void 0);
  }
}
function ssrRenderAttrs(e6, t4) {
  let n2 = "";
  for (const o6 in e6) {
    if (Dt(o6) || isOn(o6) || "textarea" === t4 && "value" === o6)
      continue;
    const s2 = e6[o6];
    n2 += "class" === o6 ? ` class="${r4 = s2, escapeHtml$1(normalizeClass(r4))}"` : "style" === o6 ? ` style="${ssrRenderStyle(s2)}"` : ssrRenderDynamicAttr(o6, s2, t4);
  }
  var r4;
  return n2;
}
function ssrRenderDynamicAttr(e6, t4, n2) {
  if (!function(e7) {
    if (null == e7)
      return false;
    const t5 = typeof e7;
    return "string" === t5 || "number" === t5 || "boolean" === t5;
  }(t4))
    return "";
  const r4 = n2 && (n2.indexOf("-") > 0 || B(n2)) ? e6 : X[e6] || e6.toLowerCase();
  return G(r4) ? includeBooleanAttr(t4) ? ` ${r4}` : "" : function(e7) {
    if (Z2.hasOwnProperty(e7))
      return Z2[e7];
    const t5 = K.test(e7);
    return t5 && console.error(`unsafe attribute name: ${e7}`), Z2[e7] = !t5;
  }(r4) ? "" === t4 ? ` ${r4}` : ` ${r4}="${escapeHtml$1(t4)}"` : (console.warn(`[@vue/server-renderer] Skipped rendering unsafe attribute name: ${r4}`), "");
}
function ssrRenderStyle(e6) {
  if (!e6)
    return "";
  if (isString(e6))
    return escapeHtml$1(e6);
  return escapeHtml$1(function(e7) {
    let t4 = "";
    if (!e7 || isString(e7))
      return t4;
    for (const n2 in e7) {
      const r4 = e7[n2];
      (isString(r4) || "number" == typeof r4) && (t4 += `${n2.startsWith("--") ? n2 : N(n2)}:${r4};`);
    }
    return t4;
  }(normalizeStyle(e6)));
}
function ssrRenderComponent(e6, t4 = null, n2 = null, r4 = null, o6) {
  return renderComponentVNode(createVNode(e6, t4, n2), r4, o6);
}
function ssrInterpolate(e6) {
  return escapeHtml$1(toDisplayString(e6));
}
async function ssrRenderSuspense(e6, { default: t4 }) {
  t4 ? t4() : e6("<!---->");
}
function createBuffer() {
  let e6 = false;
  const t4 = [];
  return { getBuffer: () => t4, push(n2) {
    const r4 = isString(n2);
    e6 && r4 ? t4[t4.length - 1] += n2 : (t4.push(n2), e6 = r4, (isPromise(n2) || E(n2) && n2.hasAsync) && (t4.hasAsync = true));
  } };
}
function renderComponentVNode(e6, t4 = null, n2) {
  const r4 = Ut(e6, t4, null), o6 = Bt(r4, true), s2 = isPromise(o6), i3 = r4.sp;
  if (s2 || i3) {
    let e7 = s2 ? o6 : Promise.resolve();
    return i3 && (e7 = e7.then(() => Promise.all(i3.map((e8) => e8.call(r4.proxy)))).catch(NOOP)), e7.then(() => renderComponentSubTree(r4, n2));
  }
  return renderComponentSubTree(r4, n2);
}
function renderComponentSubTree(e6, t4) {
  const n2 = e6.type, { getBuffer: r4, push: o6 } = createBuffer();
  if (isFunction(n2)) {
    let r5 = Wt(e6);
    if (!n2.props)
      for (const t5 in e6.attrs)
        t5.startsWith("data-v-") && ((r5.props || (r5.props = {}))[t5] = "");
    renderVNode(o6, e6.subTree = r5, e6, t4);
  } else {
    e6.render && e6.render !== NOOP || e6.ssrRender || n2.ssrRender || !isString(n2.template) || (n2.ssrRender = function() {
      throw new Error("On-the-fly template compilation is not supported in the ESM build of @vue/server-renderer. All templates must be pre-compiled into render functions.");
    }(n2.template));
    for (const t5 of e6.scope.effects)
      t5.computed && (t5.computed._dirty = true, t5.computed._cacheable = true);
    const r5 = e6.ssrRender || n2.ssrRender;
    if (r5) {
      let n3 = false !== e6.inheritAttrs ? e6.attrs : void 0, s2 = false, i3 = e6;
      for (; ; ) {
        const e7 = i3.vnode.scopeId;
        e7 && (s2 || (n3 = { ...n3 }, s2 = true), n3[e7] = "");
        const t5 = i3.parent;
        if (!t5 || !t5.subTree || t5.subTree !== i3.vnode)
          break;
        i3 = t5;
      }
      if (t4) {
        s2 || (n3 = { ...n3 });
        const e7 = t4.trim().split(" ");
        for (let t5 = 0; t5 < e7.length; t5++)
          n3[e7[t5]] = "";
      }
      const a3 = zt(e6);
      try {
        r5(e6.proxy, o6, e6, n3, e6.props, e6.setupState, e6.data, e6.ctx);
      } finally {
        zt(a3);
      }
    } else
      e6.render && e6.render !== NOOP ? renderVNode(o6, e6.subTree = Wt(e6), e6, t4) : (n2.name || n2.__file, o6("<!---->"));
  }
  return r4();
}
function renderVNode(e6, t4, n2, r4) {
  const { type: o6, shapeFlag: s2, children: i3 } = t4;
  switch (o6) {
    case at:
      e6(escapeHtml$1(i3));
      break;
    case lt:
      e6(i3 ? `<!--${a3 = i3, a3.replace(Q, "")}-->` : "<!---->");
      break;
    case ct:
      e6(i3);
      break;
    case it:
      t4.slotScopeIds && (r4 = (r4 ? r4 + " " : "") + t4.slotScopeIds.join(" ")), e6("<!--[-->"), renderVNodeChildren(e6, i3, n2, r4), e6("<!--]-->");
      break;
    default:
      1 & s2 ? function(e7, t5, n3, r5) {
        const o7 = t5.type;
        let { props: s3, children: i4, shapeFlag: a4, scopeId: l2, dirs: c2 } = t5, u3 = `<${o7}`;
        c2 && (s3 = function(e8, t6, n4) {
          const r6 = [];
          for (let t7 = 0; t7 < n4.length; t7++) {
            const o8 = n4[t7], { dir: { getSSRProps: s4 } } = o8;
            if (s4) {
              const t8 = s4(o8, e8);
              t8 && r6.push(t8);
            }
          }
          return mergeProps(t6 || {}, ...r6);
        }(t5, s3, c2));
        s3 && (u3 += ssrRenderAttrs(s3, o7));
        l2 && (u3 += ` ${l2}`);
        let p2 = n3, f2 = t5;
        for (; p2 && f2 === p2.subTree; )
          f2 = p2.vnode, f2.scopeId && (u3 += ` ${f2.scopeId}`), p2 = p2.parent;
        r5 && (u3 += ` ${r5}`);
        if (e7(u3 + ">"), !W(o7)) {
          let t6 = false;
          s3 && (s3.innerHTML ? (t6 = true, e7(s3.innerHTML)) : s3.textContent ? (t6 = true, e7(escapeHtml$1(s3.textContent))) : "textarea" === o7 && s3.value && (t6 = true, e7(escapeHtml$1(s3.value)))), t6 || (8 & a4 ? e7(escapeHtml$1(i4)) : 16 & a4 && renderVNodeChildren(e7, i4, n3, r5)), e7(`</${o7}>`);
        }
      }(e6, t4, n2, r4) : 6 & s2 ? e6(renderComponentVNode(t4, n2, r4)) : 64 & s2 ? function(e7, t5, n3, r5) {
        const o7 = t5.props && t5.props.to, s3 = t5.props && t5.props.disabled;
        if (!o7)
          return [];
        if (!isString(o7))
          return [];
        !function(e8, t6, n4, r6, o8) {
          e8("<!--teleport start-->");
          const s4 = o8.appContext.provides[ot], i4 = s4.__teleportBuffers || (s4.__teleportBuffers = {}), a4 = i4[n4] || (i4[n4] = []), l2 = a4.length;
          let c2;
          if (r6)
            t6(e8), c2 = "<!--teleport start anchor--><!--teleport anchor-->";
          else {
            const { getBuffer: e9, push: n5 } = createBuffer();
            n5("<!--teleport start anchor-->"), t6(n5), n5("<!--teleport anchor-->"), c2 = e9();
          }
          a4.splice(l2, 0, c2), e8("<!--teleport end-->");
        }(e7, (e8) => {
          renderVNodeChildren(e8, t5.children, n3, r5);
        }, o7, s3 || "" === s3, n3);
      }(e6, t4, n2, r4) : 128 & s2 && renderVNode(e6, t4.ssContent, n2, r4);
  }
  var a3;
}
function renderVNodeChildren(e6, t4, n2, r4) {
  for (let o6 = 0; o6 < t4.length; o6++)
    renderVNode(e6, qt(t4[o6]), n2, r4);
}
function nestedUnrollBuffer(e6, t4, n2) {
  if (!e6.hasAsync)
    return t4 + unrollBufferSync$1(e6);
  let r4 = t4;
  for (let t5 = n2; t5 < e6.length; t5 += 1) {
    const n3 = e6[t5];
    if (isString(n3)) {
      r4 += n3;
      continue;
    }
    if (isPromise(n3))
      return n3.then((n4) => (e6[t5] = n4, nestedUnrollBuffer(e6, r4, t5)));
    const o6 = nestedUnrollBuffer(n3, r4, 0);
    if (isPromise(o6))
      return o6.then((n4) => (e6[t5] = n4, nestedUnrollBuffer(e6, "", t5)));
    r4 = o6;
  }
  return r4;
}
function unrollBuffer$1(e6) {
  return nestedUnrollBuffer(e6, "", 0);
}
function unrollBufferSync$1(e6) {
  let t4 = "";
  for (let n2 = 0; n2 < e6.length; n2++) {
    let r4 = e6[n2];
    isString(r4) ? t4 += r4 : t4 += unrollBufferSync$1(r4);
  }
  return t4;
}
async function renderToString(e6, t4 = {}) {
  if (Jt(e6))
    return renderToString(createApp({ render: () => e6 }), t4);
  const n2 = createVNode(e6._component, e6._props);
  n2.appContext = e6._context, e6.provide(ot, t4);
  const r4 = await renderComponentVNode(n2), o6 = await unrollBuffer$1(r4);
  if (await async function(e7) {
    if (e7.__teleportBuffers) {
      e7.teleports = e7.teleports || {};
      for (const t5 in e7.__teleportBuffers)
        e7.teleports[t5] = await unrollBuffer$1(await Promise.all([e7.__teleportBuffers[t5]]));
    }
  }(t4), t4.__watcherHandles)
    for (const e7 of t4.__watcherHandles)
      e7();
  return o6;
}
function hashCode(e6) {
  let t4 = 9;
  for (let n2 = 0; n2 < e6.length; )
    t4 = Math.imul(t4 ^ e6.charCodeAt(n2++), 9 ** 9);
  return (65536 + (t4 ^ t4 >>> 9)).toString(16).substring(1, 8).toLowerCase();
}
function resolveTitleTemplate(e6, t4) {
  return null == e6 ? t4 || null : "function" == typeof e6 ? e6(t4) : e6;
}
function normaliseStyleClassProps(e6, t4) {
  const n2 = "class" === e6 ? " " : ";";
  return "object" != typeof t4 || Array.isArray(t4) || (t4 = Object.entries(t4).filter(([, e7]) => e7).map(([t5, n3]) => "style" === e6 ? `${t5}:${n3}` : t5)), String(Array.isArray(t4) ? t4.join(n2) : t4)?.split(n2).filter((e7) => e7.trim()).filter(Boolean).join(n2);
}
async function normaliseProps(e6, t4) {
  for (const n2 of Object.keys(e6))
    if (["class", "style"].includes(n2))
      e6[n2] = normaliseStyleClassProps(n2, e6[n2]);
    else if (e6[n2] instanceof Promise && (e6[n2] = await e6[n2]), !t4 && !Qt.includes(n2)) {
      const t5 = String(e6[n2]), r4 = n2.startsWith("data-");
      "true" === t5 || "" === t5 ? e6[n2] = !r4 || "true" : e6[n2] || (r4 && "false" === t5 ? e6[n2] = "false" : delete e6[n2]);
    }
  return e6;
}
async function normaliseEntryTags(e6) {
  const t4 = [];
  return Object.entries(e6.resolvedInput).filter(([e7, t5]) => void 0 !== t5 && Xt.includes(e7)).forEach(([n2, r4]) => {
    const o6 = function(e7) {
      return Array.isArray(e7) ? e7 : [e7];
    }(r4);
    t4.push(...o6.map((t5) => async function(e7, t6, n3) {
      const r5 = { tag: e7, props: await normaliseProps("object" != typeof t6 || "function" == typeof t6 || t6 instanceof Promise ? { [["script", "noscript", "style"].includes(e7) ? "innerHTML" : "textContent"]: t6 } : { ...t6 }, ["templateParams", "titleTemplate"].includes(e7)) };
      return Qt.forEach((e8) => {
        const t7 = void 0 !== r5.props[e8] ? r5.props[e8] : n3[e8];
        void 0 !== t7 && (["innerHTML", "textContent", "children"].includes(e8) && !Kt.includes(r5.tag) || (r5["children" === e8 ? "innerHTML" : e8] = t7), delete r5.props[e8]);
      }), r5.props.body && (r5.tagPosition = "bodyClose", delete r5.props.body), "script" === r5.tag && "object" == typeof r5.innerHTML && (r5.innerHTML = JSON.stringify(r5.innerHTML), r5.props.type = r5.props.type || "application/json"), Array.isArray(r5.props.content) ? r5.props.content.map((e8) => ({ ...r5, props: { ...r5.props, content: e8 } })) : r5;
    }(n2, t5, e6)).flat());
  }), (await Promise.all(t4)).flat().filter(Boolean).map((t5, n2) => (t5._e = e6._i, e6.mode && (t5._m = e6.mode), t5._p = (e6._i << en) + n2, t5));
}
function tagWeight(e6) {
  let t4 = 100;
  const n2 = e6.tagPriority;
  return "number" == typeof n2 ? n2 : ("meta" === e6.tag ? ("content-security-policy" === e6.props["http-equiv"] && (t4 = -30), e6.props.charset && (t4 = -20), "viewport" === e6.props.name && (t4 = -15)) : "link" === e6.tag && "preconnect" === e6.props.rel ? t4 = 20 : e6.tag in tn && (t4 = tn[e6.tag]), "string" == typeof n2 && n2 in nn ? t4 + nn[n2] : t4);
}
function processTemplateParams(e6, t4, n2) {
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
      return n4 = ["s", "pageTitle"].includes(e7) ? t4.pageTitle : e7.includes(".") ? e7.split(".").reduce((e8, t5) => e8 && e8[t5] || void 0, t4) : t4[e7], void 0 !== n4 && (n4 || "").replace(/"/g, '\\"');
    }(n3.slice(1));
    "string" == typeof r5 && (e6 = e6.replace(new RegExp(`\\${n3}(\\W|$)`, "g"), (e7, t5) => `${r5}${t5}`).trim());
  }), e6.includes(sn) && (e6.endsWith(sn) && (e6 = e6.slice(0, -10).trim()), e6.startsWith(sn) && (e6 = e6.slice(10).trim()), e6 = processTemplateParams(e6 = e6.replace(new RegExp(`\\${sn}\\s*\\${sn}`, "g"), sn), { separator: n2 }, n2)), e6;
}
function encodeAttribute(e6) {
  return String(e6).replace(/"/g, "&quot;");
}
function propsToString(e6) {
  const t4 = [];
  for (const [n2, r4] of Object.entries(e6))
    false !== r4 && null !== r4 && t4.push(true === r4 ? n2 : `${n2}="${encodeAttribute(r4)}"`);
  return `${t4.length > 0 ? " " : ""}${t4.join(" ")}`;
}
function tagToString(e6) {
  const t4 = propsToString(e6.props), n2 = `<${e6.tag}${t4}>`;
  if (!Kt.includes(e6.tag))
    return Gt.includes(e6.tag) ? n2 : `${n2}</${e6.tag}>`;
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
  })), Gt.includes(e6.tag) ? n2 : `${n2}${r4}</${e6.tag}>`;
}
async function renderSSRHead(e6, t4) {
  const n2 = { shouldRender: true };
  if (await e6.hooks.callHook("ssr:beforeRender", n2), !n2.shouldRender)
    return { headTags: "", bodyTags: "", bodyTagsOpen: "", htmlAttrs: "", bodyAttrs: "" };
  const r4 = { tags: await e6.resolveTags() };
  await e6.hooks.callHook("ssr:render", r4);
  const o6 = function(e7) {
    const t5 = { htmlAttrs: {}, bodyAttrs: {}, tags: { head: [], bodyClose: [], bodyOpen: [] } };
    for (const n3 of e7)
      "htmlAttrs" !== n3.tag && "bodyAttrs" !== n3.tag ? t5.tags[n3.tagPosition || "head"].push(tagToString(n3)) : t5[n3.tag] = { ...t5[n3.tag], ...n3.props };
    return { headTags: t5.tags.head.join("\n"), bodyTags: t5.tags.bodyClose.join("\n"), bodyTagsOpen: t5.tags.bodyOpen.join("\n"), htmlAttrs: propsToString(t5.htmlAttrs), bodyAttrs: propsToString(t5.bodyAttrs) };
  }(r4.tags), s2 = { tags: r4.tags, html: o6 };
  return await e6.hooks.callHook("ssr:rendered", s2), s2.html;
}
function createServerHead$1(e6 = {}) {
  return yn = function(e7 = {}) {
    const t4 = createHooks();
    t4.addHooks(e7.hooks || {}), e7.document = e7.document || void 0;
    const n2 = !e7.document, updated = () => {
      i3.dirty = true, t4.callHook("entries:updated", i3);
    };
    let r4 = 0, o6 = [];
    const s2 = [], i3 = { plugins: s2, dirty: false, resolvedOptions: e7, hooks: t4, headEntries: () => o6, use(e8) {
      const r5 = "function" == typeof e8 ? e8(i3) : e8;
      r5.key && s2.some((e9) => e9.key === r5.key) || (s2.push(r5), filterMode(r5.mode, n2) && t4.addHooks(r5.hooks || {}));
    }, push(e8, s3) {
      delete s3?.head;
      const a3 = { _i: r4++, input: e8, ...s3 };
      return filterMode(a3.mode, n2) && (o6.push(a3), updated()), { dispose() {
        o6 = o6.filter((e9) => e9._i !== a3._i), t4.callHook("entries:updated", i3), updated();
      }, patch(e9) {
        o6 = o6.map((t5) => (t5._i === a3._i && (t5.input = a3.input = e9), t5)), updated();
      } };
    }, async resolveTags() {
      const e8 = { tags: [], entries: [...o6] };
      await t4.callHook("entries:resolve", e8);
      for (const n3 of e8.entries) {
        const r5 = n3.resolvedInput || n3.input;
        if (n3.resolvedInput = await (n3.transform ? n3.transform(r5) : r5), n3.resolvedInput)
          for (const r6 of await normaliseEntryTags(n3)) {
            const o7 = { tag: r6, entry: n3, resolvedOptions: i3.resolvedOptions };
            await t4.callHook("tag:normalise", o7), e8.tags.push(o7.tag);
          }
      }
      return await t4.callHook("tags:beforeResolve", e8), await t4.callHook("tags:resolve", e8), await t4.callHook("tags:afterResolve", e8), e8.tags;
    }, ssr: n2 };
    return [ln, cn, EventHandlersPlugin, fn, dn, TemplateParamsPlugin, gn, mn, ...e7?.plugins || []].forEach((e8) => i3.use(e8)), i3.hooks.callHook("init", i3), i3;
  }(e6);
}
function filterMode(e6, t4) {
  return !e6 || "server" === e6 && t4 || "client" === e6 && !t4;
}
function getActiveHead() {
  return yn;
}
function resolveUnrefHeadInput2(e6, t4 = "") {
  if (e6 instanceof Promise)
    return e6;
  const n2 = "function" == typeof (r4 = e6) ? r4() : unref(r4);
  var r4;
  return e6 && n2 ? Array.isArray(n2) ? n2.map((e7) => resolveUnrefHeadInput2(e7, t4)) : "object" == typeof n2 ? Object.fromEntries(Object.entries(n2).map(([e7, t5]) => "titleTemplate" === e7 || e7.startsWith("on") ? [e7, unref(t5)] : [e7, resolveUnrefHeadInput2(t5, e7)])) : n2 : n2;
}
function createServerHead(e6 = {}) {
  const t4 = createServerHead$1(e6);
  return t4.use(bn), t4.install = function(e7) {
    return { install(t5) {
      _n && (t5.config.globalProperties.$unhead = e7, t5.config.globalProperties.$head = e7, t5.provide(kn, e7));
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
function lazyCachedFunction(e6) {
  let t4 = null;
  return () => (null === t4 && (t4 = e6().catch((e7) => {
    throw t4 = null, e7;
  })), t4);
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
  const t4 = e6.data ? stringify(e6.data, e6.ssrContext._payloadReducers) : "", n2 = { type: "application/json", id: e6.id, innerHTML: t4, "data-ssr": !e6.ssrContext.noSSR };
  return e6.src && (n2["data-src"] = e6.src), [n2, { innerHTML: `window.__NUXT__={};window.__NUXT__.config=${uneval(e6.ssrContext.config)}` }];
}
function splitPayload(e6) {
  const { data: t4, prerenderedAt: n2, ...r4 } = e6.payload;
  return { initial: { ...r4, prerenderedAt: n2 }, payload: { data: t4, prerenderedAt: n2 } };
}
var m, DevalueError, y, v, _, b, k, R, w, S, C, x, A2, O, NOOP, NO, isOn, isModelListener, $, remove, T, hasOwn, E, isMap, isSet, isFunction, isString, isSymbol, isObject, isPromise, P, toTypeString, toRawType, isPlainObject, isIntegerKey, j2, cacheStringFunction, H, M, I, N, L, V, hasChanged, invokeArrayFns, def, looseToNumber, F, getGlobalThis, D, U, z2, B, W, q2, J, G, K, Z2, X, Y, Q, isRef$1, toDisplayString, replacer, stringifySymbol, ee2, te3, EffectScope, ReactiveEffect, ne2, re2, oe2, se2, createDep, ie2, ae2, le2, ce2, ue2, pe2, BaseReactiveHandler, MutableReactiveHandler, ReadonlyReactiveHandler, fe2, de2, he2, toShallow, getProto, ge2, me2, ye2, ve3, _e2, be2, ke2, Re2, we2, Se, Ce3, toReactive, toReadonly, ComputedRefImpl, RefImpl, xe2, ObjectRefImpl, GetterRefImpl, Ae2, Oe, $e, Te, Ee, Pe2, je, He, Me, getId, comparator, Ie, Ne, isAsyncWrapper, isKeepAlive, createHook, Le, Ve, Fe, De, Ue, ze, Be, We, qe, Je, Ge, getPublicInstance, Ke, hasSetupBinding, Ze, Xe, Ye, Qe, et, tt, createInternalObject, isInternalObject, nt, isInternalKey, normalizeSlotValue, normalizeSlot, normalizeObjectSlots, normalizeVNodeSlots, assignSlots, initSlots, updateSlots, rt, queuePostRenderEffect, ot, useSSRContext, st, getModelModifiers, getFunctionalFallthrough, filterModelListeners, it, at, lt, ct, ut, pt, normalizeKey, normalizeRef, createVNode, ft, dt, ht, getCurrentInstance, gt, mt, setCurrentInstance, unsetCurrentInstance, yt, vt, _t, computed, bt, kt, Rt, wt, St, Ct, xt, At, Ot, $t, Tt, Et, Pt, jt, Ht, Mt, It, Nt, Lt, getNow, isNativeOn, Vt, Ft, createApp, Dt, Ut, zt, Bt, Wt, qt, Jt, Gt, Kt, Zt, Xt, Yt, Qt, en, tn, nn, rn, on, sn, an, ln, cn, un, EventHandlersPlugin, pn, fn, dn, hn, TemplateParamsPlugin, gn, mn, yn, vn, _n, bn, kn, Rn, wn, Sn, Cn, getClientManifest, xn, An, On, $n, Tn, En, Pn, jn, Hn;
var init_renderer = __esm({
  ".wrangler/tmp/pages-brm1ok/chunks/routes/renderer.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    init_runtime();
    globalThis._importMeta_ = globalThis._importMeta_ || { url: "file:///_entry.js", env: {} };
    m = { "<": "\\u003C", "\\": "\\\\", "\b": "\\b", "\f": "\\f", "\n": "\\n", "\r": "\\r", "	": "\\t", "\u2028": "\\u2028", "\u2029": "\\u2029" };
    DevalueError = class extends Error {
      constructor(e6, t4) {
        super(e6), this.name = "DevalueError", this.path = t4.join("");
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
    isOn = (e6) => 111 === e6.charCodeAt(0) && 110 === e6.charCodeAt(1) && (e6.charCodeAt(2) > 122 || e6.charCodeAt(2) < 97);
    isModelListener = (e6) => e6.startsWith("onUpdate:");
    $ = Object.assign;
    remove = (e6, t4) => {
      const n2 = e6.indexOf(t4);
      n2 > -1 && e6.splice(n2, 1);
    };
    T = Object.prototype.hasOwnProperty;
    hasOwn = (e6, t4) => T.call(e6, t4);
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
      const t4 = /* @__PURE__ */ Object.create(null);
      return (n2) => t4[n2] || (t4[n2] = e6(n2));
    };
    H = /-(\w)/g;
    M = cacheStringFunction((e6) => e6.replace(H, (e7, t4) => t4 ? t4.toUpperCase() : ""));
    I = /\B([A-Z])/g;
    N = cacheStringFunction((e6) => e6.replace(I, "-$1").toLowerCase());
    L = cacheStringFunction((e6) => e6.charAt(0).toUpperCase() + e6.slice(1));
    V = cacheStringFunction((e6) => e6 ? `on${L(e6)}` : "");
    hasChanged = (e6, t4) => !Object.is(e6, t4);
    invokeArrayFns = (e6, ...t4) => {
      for (let n2 = 0; n2 < e6.length; n2++)
        e6[n2](...t4);
    };
    def = (e6, t4, n2, r4 = false) => {
      Object.defineProperty(e6, t4, { configurable: true, enumerable: false, writable: r4, value: n2 });
    };
    looseToNumber = (e6) => {
      const t4 = parseFloat(e6);
      return isNaN(t4) ? e6 : t4;
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
    isRef$1 = (e6) => !(!e6 || true !== e6.__v_isRef);
    toDisplayString = (e6) => isString(e6) ? e6 : null == e6 ? "" : E(e6) || isObject(e6) && (e6.toString === P || !isFunction(e6.toString)) ? isRef$1(e6) ? toDisplayString(e6.value) : JSON.stringify(e6, replacer, 2) : String(e6);
    replacer = (e6, t4) => isRef$1(t4) ? replacer(e6, t4.value) : isMap(t4) ? { [`Map(${t4.size})`]: [...t4.entries()].reduce((e7, [t5, n2], r4) => (e7[stringifySymbol(t5, r4) + " =>"] = n2, e7), {}) } : isSet(t4) ? { [`Set(${t4.size})`]: [...t4.values()].map((e7) => stringifySymbol(e7)) } : isSymbol(t4) ? stringifySymbol(t4) : !isObject(t4) || E(t4) || isPlainObject(t4) ? t4 : String(t4);
    stringifySymbol = (e6, t4 = "") => {
      var n2;
      return isSymbol(e6) ? `Symbol(${null != (n2 = e6.description) ? n2 : t4})` : e6;
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
          const t4 = ee2;
          try {
            return ee2 = this, e6();
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
      stop(e6) {
        if (this._active) {
          let t4, n2;
          for (t4 = 0, n2 = this.effects.length; t4 < n2; t4++)
            this.effects[t4].stop();
          for (t4 = 0, n2 = this.cleanups.length; t4 < n2; t4++)
            this.cleanups[t4]();
          if (this.scopes)
            for (t4 = 0, n2 = this.scopes.length; t4 < n2; t4++)
              this.scopes[t4].stop(true);
          if (!this.detached && this.parent && !e6) {
            const e7 = this.parent.scopes.pop();
            e7 && e7 !== this && (this.parent.scopes[this.index] = e7, e7.index = this.index);
          }
          this.parent = void 0, this._active = false;
        }
      }
    };
    ReactiveEffect = class {
      constructor(e6, t4, n2, r4) {
        this.fn = e6, this.trigger = t4, this.scheduler = n2, this.active = true, this.deps = [], this._dirtyLevel = 4, this._trackId = 0, this._runnings = 0, this._shouldSchedule = false, this._depsLength = 0, function(e7, t5 = ee2) {
          t5 && t5.active && t5.effects.push(e7);
        }(this, r4);
      }
      get dirty() {
        if (2 === this._dirtyLevel || 3 === this._dirtyLevel) {
          this._dirtyLevel = 1, pauseTracking();
          for (let e6 = 0; e6 < this._depsLength; e6++) {
            const t4 = this.deps[e6];
            if (t4.computed && (triggerComputed(t4.computed), this._dirtyLevel >= 4))
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
        let e6 = ne2, t4 = te3;
        try {
          return ne2 = true, te3 = this, this._runnings++, preCleanupEffect(this), this.fn();
        } finally {
          postCleanupEffect(this), this._runnings--, te3 = t4, ne2 = e6;
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
    createDep = (e6, t4) => {
      const n2 = /* @__PURE__ */ new Map();
      return n2.cleanup = e6, n2.computed = t4, n2;
    };
    ie2 = /* @__PURE__ */ new WeakMap();
    ae2 = Symbol("");
    le2 = Symbol("");
    ce2 = makeMap("__proto__,__v_isRef,__isVue");
    ue2 = new Set(Object.getOwnPropertyNames(Symbol).filter((e6) => "arguments" !== e6 && "caller" !== e6).map((e6) => Symbol[e6]).filter(isSymbol));
    pe2 = createArrayInstrumentations();
    BaseReactiveHandler = class {
      constructor(e6 = false, t4 = false) {
        this._isReadonly = e6, this._isShallow = t4;
      }
      get(e6, t4, n2) {
        const r4 = this._isReadonly, o6 = this._isShallow;
        if ("__v_isReactive" === t4)
          return !r4;
        if ("__v_isReadonly" === t4)
          return r4;
        if ("__v_isShallow" === t4)
          return o6;
        if ("__v_raw" === t4)
          return n2 === (r4 ? o6 ? Ce3 : Se : o6 ? we2 : Re2).get(e6) || Object.getPrototypeOf(e6) === Object.getPrototypeOf(n2) ? e6 : void 0;
        const s2 = E(e6);
        if (!r4) {
          if (s2 && hasOwn(pe2, t4))
            return Reflect.get(pe2, t4, n2);
          if ("hasOwnProperty" === t4)
            return hasOwnProperty;
        }
        const i3 = Reflect.get(e6, t4, n2);
        return (isSymbol(t4) ? ue2.has(t4) : ce2(t4)) ? i3 : (r4 || track(e6, 0, t4), o6 ? i3 : isRef(i3) ? s2 && isIntegerKey(t4) ? i3 : i3.value : isObject(i3) ? r4 ? readonly(i3) : reactive(i3) : i3);
      }
    };
    MutableReactiveHandler = class extends BaseReactiveHandler {
      constructor(e6 = false) {
        super(false, e6);
      }
      set(e6, t4, n2, r4) {
        let o6 = e6[t4];
        if (!this._isShallow) {
          const t5 = isReadonly(o6);
          if (isShallow(n2) || isReadonly(n2) || (o6 = toRaw(o6), n2 = toRaw(n2)), !E(e6) && isRef(o6) && !isRef(n2))
            return !t5 && (o6.value = n2, true);
        }
        const s2 = E(e6) && isIntegerKey(t4) ? Number(t4) < e6.length : hasOwn(e6, t4), i3 = Reflect.set(e6, t4, n2, r4);
        return e6 === toRaw(r4) && (s2 ? hasChanged(n2, o6) && trigger(e6, "set", t4, n2) : trigger(e6, "add", t4, n2)), i3;
      }
      deleteProperty(e6, t4) {
        const n2 = hasOwn(e6, t4);
        e6[t4];
        const r4 = Reflect.deleteProperty(e6, t4);
        return r4 && n2 && trigger(e6, "delete", t4, void 0), r4;
      }
      has(e6, t4) {
        const n2 = Reflect.has(e6, t4);
        return isSymbol(t4) && ue2.has(t4) || track(e6, 0, t4), n2;
      }
      ownKeys(e6) {
        return track(e6, 0, E(e6) ? "length" : ae2), Reflect.ownKeys(e6);
      }
    };
    ReadonlyReactiveHandler = class extends BaseReactiveHandler {
      constructor(e6 = false) {
        super(true, e6);
      }
      set(e6, t4) {
        return true;
      }
      deleteProperty(e6, t4) {
        return true;
      }
    };
    fe2 = new MutableReactiveHandler();
    de2 = new ReadonlyReactiveHandler();
    he2 = new MutableReactiveHandler(true);
    toShallow = (e6) => e6;
    getProto = (e6) => Reflect.getPrototypeOf(e6);
    [ge2, me2, ye2, ve3] = createInstrumentations();
    _e2 = { get: createInstrumentationGetter(false, false) };
    be2 = { get: createInstrumentationGetter(false, true) };
    ke2 = { get: createInstrumentationGetter(true, false) };
    Re2 = /* @__PURE__ */ new WeakMap();
    we2 = /* @__PURE__ */ new WeakMap();
    Se = /* @__PURE__ */ new WeakMap();
    Ce3 = /* @__PURE__ */ new WeakMap();
    toReactive = (e6) => isObject(e6) ? reactive(e6) : e6;
    toReadonly = (e6) => isObject(e6) ? readonly(e6) : e6;
    ComputedRefImpl = class {
      constructor(e6, t4, n2, r4) {
        this.getter = e6, this._setter = t4, this.dep = void 0, this.__v_isRef = true, this.__v_isReadonly = false, this.effect = new ReactiveEffect(() => e6(this._value), () => triggerRefValue(this, 2 === this.effect._dirtyLevel ? 2 : 3)), this.effect.computed = this, this.effect.active = this._cacheable = !r4, this.__v_isReadonly = n2;
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
      constructor(e6, t4) {
        this.__v_isShallow = t4, this.dep = void 0, this.__v_isRef = true, this._rawValue = t4 ? e6 : toRaw(e6), this._value = t4 ? e6 : toReactive(e6);
      }
      get value() {
        return trackRefValue(this), this._value;
      }
      set value(e6) {
        const t4 = this.__v_isShallow || isShallow(e6) || isReadonly(e6);
        e6 = t4 ? e6 : toRaw(e6), hasChanged(e6, this._rawValue) && (this._rawValue, this._rawValue = e6, this._value = t4 ? e6 : toReactive(e6), triggerRefValue(this, 4));
      }
    };
    xe2 = { get: (e6, t4, n2) => unref(Reflect.get(e6, t4, n2)), set: (e6, t4, n2, r4) => {
      const o6 = e6[t4];
      return isRef(o6) && !isRef(n2) ? (o6.value = n2, true) : Reflect.set(e6, t4, n2, r4);
    } };
    ObjectRefImpl = class {
      constructor(e6, t4, n2) {
        this._object = e6, this._key = t4, this._defaultValue = n2, this.__v_isRef = true;
      }
      get value() {
        const e6 = this._object[this._key];
        return void 0 === e6 ? this._defaultValue : e6;
      }
      set value(e6) {
        this._object[this._key] = e6;
      }
      get dep() {
        return function(e6, t4) {
          const n2 = ie2.get(e6);
          return n2 && n2.get(t4);
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
    Ee = [];
    Pe2 = null;
    je = 0;
    He = Promise.resolve();
    Me = null;
    getId = (e6) => null == e6.id ? 1 / 0 : e6.id;
    comparator = (e6, t4) => {
      const n2 = getId(e6) - getId(t4);
      if (0 === n2) {
        if (e6.pre && !t4.pre)
          return -1;
        if (t4.pre && !e6.pre)
          return 1;
      }
      return n2;
    };
    Ie = null;
    Ne = null;
    isAsyncWrapper = (e6) => !!e6.type.__asyncLoader;
    isKeepAlive = (e6) => e6.type.__isKeepAlive;
    createHook = (e6) => (t4, n2 = ht) => {
      vt && "sp" !== e6 || injectHook(e6, (...e7) => t4(...e7), n2);
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
    getPublicInstance = (e6) => e6 ? isStatefulComponent(e6) ? getComponentPublicInstance(e6) : getPublicInstance(e6.parent) : null;
    Ke = $(/* @__PURE__ */ Object.create(null), { $: (e6) => e6, $el: (e6) => e6.vnode.el, $data: (e6) => e6.data, $props: (e6) => e6.props, $attrs: (e6) => e6.attrs, $slots: (e6) => e6.slots, $refs: (e6) => e6.refs, $parent: (e6) => getPublicInstance(e6.parent), $root: (e6) => getPublicInstance(e6.root), $emit: (e6) => e6.emit, $options: (e6) => __VUE_OPTIONS_API__ ? resolveMergedOptions(e6) : e6.type, $forceUpdate: (e6) => e6.f || (e6.f = () => {
      e6.effect.dirty = true, queueJob(e6.update);
    }), $nextTick: (e6) => e6.n || (e6.n = nextTick.bind(e6.proxy)), $watch: (e6) => __VUE_OPTIONS_API__ ? instanceWatch.bind(e6) : NOOP });
    hasSetupBinding = (e6, t4) => e6 !== A2 && !e6.__isScriptSetup && hasOwn(e6, t4);
    Ze = { get({ _: e6 }, t4) {
      if ("__v_skip" === t4)
        return true;
      const { ctx: n2, setupState: r4, data: o6, props: s2, accessCache: i3, type: a3, appContext: l2 } = e6;
      let c2;
      if ("$" !== t4[0]) {
        const a4 = i3[t4];
        if (void 0 !== a4)
          switch (a4) {
            case 1:
              return r4[t4];
            case 2:
              return o6[t4];
            case 4:
              return n2[t4];
            case 3:
              return s2[t4];
          }
        else {
          if (hasSetupBinding(r4, t4))
            return i3[t4] = 1, r4[t4];
          if (o6 !== A2 && hasOwn(o6, t4))
            return i3[t4] = 2, o6[t4];
          if ((c2 = e6.propsOptions[0]) && hasOwn(c2, t4))
            return i3[t4] = 3, s2[t4];
          if (n2 !== A2 && hasOwn(n2, t4))
            return i3[t4] = 4, n2[t4];
          __VUE_OPTIONS_API__ && !Xe || (i3[t4] = 0);
        }
      }
      const u3 = Ke[t4];
      let p2, f2;
      return u3 ? ("$attrs" === t4 && track(e6.attrs, 0, ""), u3(e6)) : (p2 = a3.__cssModules) && (p2 = p2[t4]) ? p2 : n2 !== A2 && hasOwn(n2, t4) ? (i3[t4] = 4, n2[t4]) : (f2 = l2.config.globalProperties, hasOwn(f2, t4) ? f2[t4] : void 0);
    }, set({ _: e6 }, t4, n2) {
      const { data: r4, setupState: o6, ctx: s2 } = e6;
      return hasSetupBinding(o6, t4) ? (o6[t4] = n2, true) : r4 !== A2 && hasOwn(r4, t4) ? (r4[t4] = n2, true) : !hasOwn(e6.props, t4) && (("$" !== t4[0] || !(t4.slice(1) in e6)) && (s2[t4] = n2, true));
    }, has({ _: { data: e6, setupState: t4, accessCache: n2, ctx: r4, appContext: o6, propsOptions: s2 } }, i3) {
      let a3;
      return !!n2[i3] || e6 !== A2 && hasOwn(e6, i3) || hasSetupBinding(t4, i3) || (a3 = s2[0]) && hasOwn(a3, i3) || hasOwn(r4, i3) || hasOwn(Ke, i3) || hasOwn(o6.config.globalProperties, i3);
    }, defineProperty(e6, t4, n2) {
      return null != n2.get ? e6._.accessCache[t4] = 0 : hasOwn(n2, "value") && this.set(e6, t4, n2.value, null), Reflect.defineProperty(e6, t4, n2);
    } };
    Xe = true;
    Ye = { data: mergeDataFn, props: mergeEmitsOrPropsOptions, emits: mergeEmitsOrPropsOptions, methods: mergeObjectOptions, computed: mergeObjectOptions, beforeCreate: mergeAsArray, created: mergeAsArray, beforeMount: mergeAsArray, mounted: mergeAsArray, beforeUpdate: mergeAsArray, updated: mergeAsArray, beforeDestroy: mergeAsArray, beforeUnmount: mergeAsArray, destroyed: mergeAsArray, unmounted: mergeAsArray, activated: mergeAsArray, deactivated: mergeAsArray, errorCaptured: mergeAsArray, serverPrefetch: mergeAsArray, components: mergeObjectOptions, directives: mergeObjectOptions, watch: function(e6, t4) {
      if (!e6)
        return t4;
      if (!t4)
        return e6;
      const n2 = $(/* @__PURE__ */ Object.create(null), e6);
      for (const r4 in t4)
        n2[r4] = mergeAsArray(e6[r4], t4[r4]);
      return n2;
    }, provide: mergeDataFn, inject: function(e6, t4) {
      return mergeObjectOptions(normalizeInject(e6), normalizeInject(t4));
    } };
    Qe = 0;
    et = null;
    tt = {};
    createInternalObject = () => Object.create(tt);
    isInternalObject = (e6) => Object.getPrototypeOf(e6) === tt;
    nt = /* @__PURE__ */ new WeakMap();
    isInternalKey = (e6) => "_" === e6[0] || "$stable" === e6;
    normalizeSlotValue = (e6) => E(e6) ? e6.map(normalizeVNode$1) : [normalizeVNode$1(e6)];
    normalizeSlot = (e6, t4, n2) => {
      if (t4._n)
        return t4;
      const r4 = withCtx((...e7) => normalizeSlotValue(t4(...e7)), n2);
      return r4._c = false, r4;
    };
    normalizeObjectSlots = (e6, t4, n2) => {
      const r4 = e6._ctx;
      for (const n3 in e6) {
        if (isInternalKey(n3))
          continue;
        const o6 = e6[n3];
        if (isFunction(o6))
          t4[n3] = normalizeSlot(0, o6, r4);
        else if (null != o6) {
          const e7 = normalizeSlotValue(o6);
          t4[n3] = () => e7;
        }
      }
    };
    normalizeVNodeSlots = (e6, t4) => {
      const n2 = normalizeSlotValue(t4);
      e6.slots.default = () => n2;
    };
    assignSlots = (e6, t4, n2) => {
      for (const r4 in t4)
        (n2 || "_" !== r4) && (e6[r4] = t4[r4]);
    };
    initSlots = (e6, t4, n2) => {
      const r4 = e6.slots = createInternalObject();
      if (32 & e6.vnode.shapeFlag) {
        const e7 = t4._;
        e7 ? (assignSlots(r4, t4, n2), n2 && def(r4, "_", e7, true)) : normalizeObjectSlots(t4, r4);
      } else
        t4 && normalizeVNodeSlots(e6, t4);
    };
    updateSlots = (e6, t4, n2) => {
      const { vnode: r4, slots: o6 } = e6;
      let s2 = true, i3 = A2;
      if (32 & r4.shapeFlag) {
        const e7 = t4._;
        e7 ? n2 && 1 === e7 ? s2 = false : assignSlots(o6, t4, n2) : (s2 = !t4.$stable, normalizeObjectSlots(t4, o6)), i3 = t4;
      } else
        t4 && (normalizeVNodeSlots(e6, t4), i3 = { default: 1 });
      if (s2)
        for (const e7 in o6)
          isInternalKey(e7) || null != i3[e7] || delete o6[e7];
    };
    rt = Symbol("_vte");
    queuePostRenderEffect = function(e6, t4) {
      t4 && t4.pendingBranch ? E(e6) ? t4.effects.push(...e6) : t4.effects.push(e6) : (E(n2 = e6) ? Ee.push(...n2) : Pe2 && Pe2.includes(n2, n2.allowRecurse ? je + 1 : je) || Ee.push(n2), queueFlush());
      var n2;
    };
    ot = Symbol.for("v-scx");
    useSSRContext = () => inject(ot);
    st = {};
    getModelModifiers = (e6, t4) => "modelValue" === t4 || "model-value" === t4 ? e6.modelModifiers : e6[`${t4}Modifiers`] || e6[`${M(t4)}Modifiers`] || e6[`${N(t4)}Modifiers`];
    getFunctionalFallthrough = (e6) => {
      let t4;
      for (const n2 in e6)
        ("class" === n2 || "style" === n2 || isOn(n2)) && ((t4 || (t4 = {}))[n2] = e6[n2]);
      return t4;
    };
    filterModelListeners = (e6, t4) => {
      const n2 = {};
      for (const r4 in e6)
        isModelListener(r4) && r4.slice(9) in t4 || (n2[r4] = e6[r4]);
      return n2;
    };
    it = Symbol.for("v-fgt");
    at = Symbol.for("v-txt");
    lt = Symbol.for("v-cmt");
    ct = Symbol.for("v-stc");
    ut = null;
    pt = 1;
    normalizeKey = ({ key: e6 }) => null != e6 ? e6 : null;
    normalizeRef = ({ ref: e6, ref_key: t4, ref_for: n2 }) => ("number" == typeof e6 && (e6 = "" + e6), null != e6 ? isString(e6) || isRef(e6) || isFunction(e6) ? { i: Ie, r: e6, k: t4, f: !!n2 } : e6 : null);
    createVNode = function(e6, t4 = null, n2 = null, r4 = 0, o6 = null, s2 = false) {
      e6 && e6 !== Ge || (e6 = lt);
      if (isVNode(e6)) {
        const r5 = cloneVNode(e6, t4, true);
        return n2 && normalizeChildren(r5, n2), pt > 0 && !s2 && ut && (6 & r5.shapeFlag ? ut[ut.indexOf(e6)] = r5 : ut.push(r5)), r5.patchFlag = -2, r5;
      }
      i3 = e6, isFunction(i3) && "__vccOpts" in i3 && (e6 = e6.__vccOpts);
      var i3;
      if (t4) {
        t4 = function(e8) {
          return e8 ? isProxy(e8) || isInternalObject(e8) ? $({}, e8) : e8 : null;
        }(t4);
        let { class: e7, style: n3 } = t4;
        e7 && !isString(e7) && (t4.class = normalizeClass(e7)), isObject(n3) && (isProxy(n3) && !E(n3) && (n3 = $({}, n3)), t4.style = normalizeStyle(n3));
      }
      const a3 = isString(e6) ? 1 : ((e7) => e7.__isSuspense)(e6) ? 128 : ((e7) => e7.__isTeleport)(e6) ? 64 : isObject(e6) ? 4 : isFunction(e6) ? 2 : 0;
      return function(e7, t5 = null, n3 = null, r5 = 0, o7 = null, s3 = e7 === it ? 0 : 1, i4 = false, a4 = false) {
        const l2 = { __v_isVNode: true, __v_skip: true, type: e7, props: t5, key: t5 && normalizeKey(t5), ref: t5 && normalizeRef(t5), scopeId: Ne, slotScopeIds: null, children: n3, component: null, suspense: null, ssContent: null, ssFallback: null, dirs: null, transition: null, el: null, anchor: null, target: null, targetStart: null, targetAnchor: null, staticCount: 0, shapeFlag: s3, patchFlag: r5, dynamicProps: o7, dynamicChildren: null, appContext: null, ctx: Ie };
        return a4 ? (normalizeChildren(l2, n3), 128 & s3 && e7.normalize(l2)) : n3 && (l2.shapeFlag |= isString(n3) ? 8 : 16), pt > 0 && !i4 && ut && (l2.patchFlag > 0 || 6 & s3) && 32 !== l2.patchFlag && ut.push(l2), l2;
      }(e6, t4, n2, r4, o6, a3, s2, true);
    };
    ft = createAppContext();
    dt = 0;
    ht = null;
    getCurrentInstance = () => ht || Ie;
    {
      const e6 = getGlobalThis(), registerGlobalSetter = (t4, n2) => {
        let r4;
        return (r4 = e6[t4]) || (r4 = e6[t4] = []), r4.push(n2), (e7) => {
          r4.length > 1 ? r4.forEach((t5) => t5(e7)) : r4[0](e7);
        };
      };
      gt = registerGlobalSetter("__VUE_INSTANCE_SETTERS__", (e7) => ht = e7), mt = registerGlobalSetter("__VUE_SSR_SETTERS__", (e7) => vt = e7);
    }
    setCurrentInstance = (e6) => {
      const t4 = ht;
      return gt(e6), e6.scope.on(), () => {
        e6.scope.off(), gt(t4);
      };
    };
    unsetCurrentInstance = () => {
      ht && ht.scope.off(), gt(null);
    };
    vt = false;
    _t = { get: (e6, t4) => (track(e6, 0, ""), e6[t4]) };
    computed = (e6, t4) => {
      const n2 = function(e7, t5, n3 = false) {
        let r4, o6;
        const s2 = isFunction(e7);
        return s2 ? (r4 = e7, o6 = NOOP) : (r4 = e7.get, o6 = e7.set), new ComputedRefImpl(r4, o6, s2 || !o6, n3);
      }(e6, 0, vt);
      return n2;
    };
    bt = "3.4.38";
    kt = { createComponentInstance: createComponentInstance$1, setupComponent: setupComponent$1, renderComponentRoot: renderComponentRoot$1, setCurrentRenderingInstance: setCurrentRenderingInstance$1, isVNode, normalizeVNode: normalizeVNode$1, getComponentPublicInstance, ensureValidVNode: function ensureValidVNode(e6) {
      return e6.some((e7) => !isVNode(e7) || e7.type !== lt && !(e7.type === it && !ensureValidVNode(e7.children))) ? e6 : null;
    } };
    Rt = kt;
    wt = "undefined" != typeof document ? document : null;
    St = wt && wt.createElement("template");
    Ct = { insert: (e6, t4, n2) => {
      t4.insertBefore(e6, n2 || null);
    }, remove: (e6) => {
      const t4 = e6.parentNode;
      t4 && t4.removeChild(e6);
    }, createElement: (e6, t4, n2, r4) => {
      const o6 = "svg" === t4 ? wt.createElementNS("http://www.w3.org/2000/svg", e6) : "mathml" === t4 ? wt.createElementNS("http://www.w3.org/1998/Math/MathML", e6) : n2 ? wt.createElement(e6, { is: n2 }) : wt.createElement(e6);
      return "select" === e6 && r4 && null != r4.multiple && o6.setAttribute("multiple", r4.multiple), o6;
    }, createText: (e6) => wt.createTextNode(e6), createComment: (e6) => wt.createComment(e6), setText: (e6, t4) => {
      e6.nodeValue = t4;
    }, setElementText: (e6, t4) => {
      e6.textContent = t4;
    }, parentNode: (e6) => e6.parentNode, nextSibling: (e6) => e6.nextSibling, querySelector: (e6) => wt.querySelector(e6), setScopeId(e6, t4) {
      e6.setAttribute(t4, "");
    }, insertStaticContent(e6, t4, n2, r4, o6, s2) {
      const i3 = n2 ? n2.previousSibling : t4.lastChild;
      if (o6 && (o6 === s2 || o6.nextSibling))
        for (; t4.insertBefore(o6.cloneNode(true), n2), o6 !== s2 && (o6 = o6.nextSibling); )
          ;
      else {
        St.innerHTML = "svg" === r4 ? `<svg>${e6}</svg>` : "mathml" === r4 ? `<math>${e6}</math>` : e6;
        const o7 = St.content;
        if ("svg" === r4 || "mathml" === r4) {
          const e7 = o7.firstChild;
          for (; e7.firstChild; )
            o7.appendChild(e7.firstChild);
          o7.removeChild(e7);
        }
        t4.insertBefore(o7, n2);
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
    isNativeOn = (e6) => 111 === e6.charCodeAt(0) && 110 === e6.charCodeAt(1) && e6.charCodeAt(2) > 96 && e6.charCodeAt(2) < 123;
    Vt = $({ patchProp: (e6, t4, n2, r4, o6, s2) => {
      const i3 = "svg" === o6;
      "class" === t4 ? function(e7, t5, n3) {
        const r5 = e7[xt];
        r5 && (t5 = (t5 ? [t5, ...r5] : [...r5]).join(" ")), null == t5 ? e7.removeAttribute("class") : n3 ? e7.setAttribute("class", t5) : e7.className = t5;
      }(e6, r4, i3) : "style" === t4 ? function(e7, t5, n3) {
        const r5 = e7.style, o7 = isString(n3);
        let s3 = false;
        if (n3 && !o7) {
          if (t5)
            if (isString(t5))
              for (const e8 of t5.split(";")) {
                const t6 = e8.slice(0, e8.indexOf(":")).trim();
                null == n3[t6] && setStyle(r5, t6, "");
              }
            else
              for (const e8 in t5)
                null == n3[e8] && setStyle(r5, e8, "");
          for (const e8 in n3)
            "display" === e8 && (s3 = true), setStyle(r5, e8, n3[e8]);
        } else if (o7) {
          if (t5 !== n3) {
            const e8 = r5[$t];
            e8 && (n3 += ";" + e8), r5.cssText = n3, s3 = Tt.test(n3);
          }
        } else
          t5 && e7.removeAttribute("style");
        At in e7 && (e7[At] = s3 ? r5.display : "", e7[Ot] && (r5.display = "none"));
      }(e6, n2, r4) : isOn(t4) ? isModelListener(t4) || patchEvent(e6, t4, 0, r4, s2) : ("." === t4[0] ? (t4 = t4.slice(1), 1) : "^" === t4[0] ? (t4 = t4.slice(1), 0) : function(e7, t5, n3, r5) {
        if (r5)
          return "innerHTML" === t5 || "textContent" === t5 || !!(t5 in e7 && isNativeOn(t5) && isFunction(n3));
        if ("spellcheck" === t5 || "draggable" === t5 || "translate" === t5)
          return false;
        if ("form" === t5)
          return false;
        if ("list" === t5 && "INPUT" === e7.tagName)
          return false;
        if ("type" === t5 && "TEXTAREA" === e7.tagName)
          return false;
        if ("width" === t5 || "height" === t5) {
          const t6 = e7.tagName;
          if ("IMG" === t6 || "VIDEO" === t6 || "CANVAS" === t6 || "SOURCE" === t6)
            return false;
        }
        if (isNativeOn(t5) && isString(n3))
          return false;
        return t5 in e7;
      }(e6, t4, r4, i3)) ? (!function(e7, t5, n3) {
        if ("innerHTML" === t5 || "textContent" === t5) {
          if (null == n3)
            return;
          return void (e7[t5] = n3);
        }
        const r5 = e7.tagName;
        if ("value" === t5 && "PROGRESS" !== r5 && !r5.includes("-")) {
          const o8 = "OPTION" === r5 ? e7.getAttribute("value") || "" : e7.value, s3 = null == n3 ? "" : String(n3);
          return o8 === s3 && "_value" in e7 || (e7.value = s3), null == n3 && e7.removeAttribute(t5), void (e7._value = n3);
        }
        let o7 = false;
        if ("" === n3 || null == n3) {
          const r6 = typeof e7[t5];
          "boolean" === r6 ? n3 = includeBooleanAttr(n3) : null == n3 && "string" === r6 ? (n3 = "", o7 = true) : "number" === r6 && (n3 = 0, o7 = true);
        }
        try {
          e7[t5] = n3;
        } catch (e8) {
        }
        o7 && e7.removeAttribute(t5);
      }(e6, t4, r4), e6.tagName.includes("-") || "value" !== t4 && "checked" !== t4 && "selected" !== t4 || patchAttr(e6, t4, r4, i3, 0, "value" !== t4)) : ("true-value" === t4 ? e6._trueValue = r4 : "false-value" === t4 && (e6._falseValue = r4), patchAttr(e6, t4, r4, i3));
    } }, Ct);
    createApp = (...e6) => {
      const t4 = (Ft || (Ft = createRenderer(Vt))).createApp(...e6), { mount: n2 } = t4;
      return t4.mount = (e7) => {
        const r4 = function(e8) {
          if (isString(e8)) {
            return document.querySelector(e8);
          }
          return e8;
        }(e7);
        if (!r4)
          return;
        const o6 = t4._component;
        isFunction(o6) || o6.render || o6.template || (o6.template = r4.innerHTML), r4.innerHTML = "";
        const s2 = n2(r4, false, function(e8) {
          if (e8 instanceof SVGElement)
            return "svg";
          if ("function" == typeof MathMLElement && e8 instanceof MathMLElement)
            return "mathml";
        }(r4));
        return r4 instanceof Element && (r4.removeAttribute("v-cloak"), r4.setAttribute("data-v-app", "")), s2;
      }, t4;
    };
    Dt = makeMap(",key,ref,innerHTML,textContent,ref_key,ref_for");
    {
      const e6 = getGlobalThis(), registerGlobalSetter = (t4, n2) => {
        let r4;
        return (r4 = e6[t4]) || (r4 = e6[t4] = []), r4.push(n2), (e7) => {
          r4.length > 1 ? r4.forEach((t5) => t5(e7)) : r4[0](e7);
        };
      };
      registerGlobalSetter("__VUE_INSTANCE_SETTERS__", (e7) => e7), registerGlobalSetter("__VUE_SSR_SETTERS__", (e7) => e7);
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
    ln = { hooks: { "tag:normalise": function({ tag: e6 }) {
      ["hid", "vmid", "key"].forEach((t5) => {
        e6.props[t5] && (e6.key = e6.props[t5], delete e6.props[t5]);
      });
      const t4 = function(e7) {
        const { props: t5, tag: n3 } = e7;
        if (Yt.includes(n3))
          return n3;
        if ("link" === n3 && "canonical" === t5.rel)
          return "canonical";
        if (t5.charset)
          return "charset";
        const r4 = ["id"];
        "meta" === n3 && r4.push("name", "property", "http-equiv");
        for (const e8 of r4)
          if (void 0 !== t5[e8])
            return `${n3}:${e8}:${String(t5[e8])}`;
        return false;
      }(e6), n2 = t4 || !!e6.key && `${e6.tag}:${e6.key}`;
      n2 && (e6._d = n2);
    }, "tags:resolve": function(e6) {
      const t4 = {};
      e6.tags.forEach((e7) => {
        const n3 = (e7.key ? `${e7.tag}:${e7.key}` : e7._d) || e7._p, r4 = t4[n3];
        if (r4) {
          let o7 = e7?.tagDuplicateStrategy;
          if (!o7 && an.includes(e7.tag) && (o7 = "merge"), "merge" === o7) {
            const o8 = r4.props;
            return ["class", "style"].forEach((t5) => {
              o8[t5] && (e7.props[t5] ? ("style" !== t5 || o8[t5].endsWith(";") || (o8[t5] += ";"), e7.props[t5] = `${o8[t5]} ${e7.props[t5]}`) : e7.props[t5] = o8[t5]);
            }), void (t4[n3].props = { ...o8, ...e7.props });
          }
          if (e7._e === r4._e)
            return r4._duped = r4._duped || [], e7._d = `${r4._d}:${r4._duped.length + 1}`, void r4._duped.push(e7);
          if (tagWeight(e7) > tagWeight(r4))
            return;
        }
        const o6 = Object.keys(e7.props).length + (e7.innerHTML ? 1 : 0) + (e7.textContent ? 1 : 0);
        Zt.includes(e7.tag) && 0 === o6 ? delete t4[n3] : t4[n3] = e7;
      });
      const n2 = [];
      Object.values(t4).forEach((e7) => {
        const t5 = e7._duped;
        delete e7._duped, n2.push(e7), t5 && n2.push(...t5);
      }), e6.tags = n2, e6.tags = e6.tags.filter((e7) => !("meta" === e7.tag && (e7.props.name || e7.props.property) && !e7.props.content));
    } } };
    cn = { mode: "server", hooks: { "tags:resolve": function(e6) {
      const t4 = {};
      e6.tags.filter((e7) => ["titleTemplate", "templateParams", "title"].includes(e7.tag) && "server" === e7._m).forEach((e7) => {
        t4[e7.tag] = e7.tag.startsWith("title") ? e7.textContent : e7.props;
      }), Object.keys(t4).length && e6.tags.push({ tag: "script", innerHTML: JSON.stringify(t4), props: { id: "unhead:payload", type: "application/json" } });
    } } };
    un = ["script", "link", "bodyAttrs"];
    EventHandlersPlugin = (e6) => ({ hooks: { "tags:resolve": function(t4) {
      for (const n2 of t4.tags.filter((e7) => un.includes(e7.tag)))
        Object.entries(n2.props).forEach(([t5, r4]) => {
          t5.startsWith("on") && "function" == typeof r4 && (e6.ssr && on.includes(t5) ? n2.props[t5] = `this.dataset.${t5}fired = true` : delete n2.props[t5], n2._eventHandlers = n2._eventHandlers || {}, n2._eventHandlers[t5] = r4);
        }), e6.ssr && n2._eventHandlers && (n2.props.src || n2.props.href) && (n2.key = n2.key || hashCode(n2.props.src || n2.props.href));
    }, "dom:renderTag": function({ $el: e7, tag: t4 }) {
      for (const n2 of Object.keys(e7?.dataset || {}).filter((e8) => on.some((t5) => `${t5}fired` === e8))) {
        const r4 = n2.replace("fired", "");
        t4._eventHandlers?.[r4]?.call(e7, new Event(r4.replace("on", "")));
      }
    } } });
    pn = ["link", "style", "script", "noscript"];
    fn = { hooks: { "tag:normalise": ({ tag: e6 }) => {
      e6.key && pn.includes(e6.tag) && (e6.props["data-hid"] = e6._h = hashCode(e6.key));
    } } };
    dn = { hooks: { "tags:resolve": (e6) => {
      const tagPositionForKey = (t4) => e6.tags.find((e7) => e7._d === t4)?._p;
      for (const { prefix: t4, offset: n2 } of rn)
        for (const r4 of e6.tags.filter((e7) => "string" == typeof e7.tagPriority && e7.tagPriority.startsWith(t4))) {
          const e7 = tagPositionForKey(r4.tagPriority.replace(t4, ""));
          void 0 !== e7 && (r4._p = e7 + n2);
        }
      e6.tags.sort((e7, t4) => e7._p - t4._p).sort((e7, t4) => tagWeight(e7) - tagWeight(t4));
    } } };
    hn = { meta: "content", link: "href", htmlAttrs: "lang" };
    TemplateParamsPlugin = (e6) => ({ hooks: { "tags:resolve": (t4) => {
      const { tags: n2 } = t4, r4 = n2.find((e7) => "title" === e7.tag)?.textContent, o6 = n2.findIndex((e7) => "templateParams" === e7.tag), s2 = -1 !== o6 ? n2[o6].props : {}, i3 = s2.separator || "|";
      delete s2.separator, s2.pageTitle = processTemplateParams(s2.pageTitle || r4 || "", s2, i3);
      for (const e7 of n2.filter((e8) => false !== e8.processTemplateParams)) {
        const t5 = hn[e7.tag];
        t5 && "string" == typeof e7.props[t5] ? e7.props[t5] = processTemplateParams(e7.props[t5], s2, i3) : (true === e7.processTemplateParams || ["titleTemplate", "title"].includes(e7.tag)) && ["innerHTML", "textContent"].forEach((t6) => {
          "string" == typeof e7[t6] && (e7[t6] = processTemplateParams(e7[t6], s2, i3));
        });
      }
      e6._templateParams = s2, e6._separator = i3, t4.tags = n2.filter((e7) => "templateParams" !== e7.tag);
    } } });
    gn = { hooks: { "tags:resolve": (e6) => {
      const { tags: t4 } = e6;
      let n2 = t4.findIndex((e7) => "titleTemplate" === e7.tag);
      const r4 = t4.findIndex((e7) => "title" === e7.tag);
      if (-1 !== r4 && -1 !== n2) {
        const e7 = resolveTitleTemplate(t4[n2].textContent, t4[r4].textContent);
        null !== e7 ? t4[r4].textContent = e7 || t4[r4].textContent : delete t4[r4];
      } else if (-1 !== n2) {
        const e7 = resolveTitleTemplate(t4[n2].textContent);
        null !== e7 && (t4[n2].textContent = e7, t4[n2].tag = "title", n2 = -1);
      }
      -1 !== n2 && delete t4[n2], e6.tags = t4.filter(Boolean);
    } } };
    mn = { hooks: { "tags:afterResolve": function(e6) {
      for (const t4 of e6.tags)
        "string" == typeof t4.innerHTML && (t4.innerHTML && ["application/ld+json", "application/json"].includes(t4.props.type) ? t4.innerHTML = t4.innerHTML.replace(/</g, "\\u003C") : t4.innerHTML = t4.innerHTML.replace(new RegExp(`</${t4.tag}`, "g"), `<\\/${t4.tag}`));
    } } };
    vn = /@import/;
    _n = bt.startsWith("3");
    bn = { hooks: { "entries:resolve": function(e6) {
      for (const t4 of e6.entries)
        t4.resolvedInput = resolveUnrefHeadInput2(t4.input);
    } } };
    kn = "usehead";
    Rn = [(wn = { track: true }, { hooks: { "tags:beforeResolve": function({ tags: e6 }) {
      for (const t4 of e6) {
        if (t4.tagPosition && "head" !== t4.tagPosition)
          continue;
        if (t4.tagPriority = t4.tagPriority || tagWeight(t4), 100 !== t4.tagPriority)
          continue;
        const isTruthy = (e8) => "" === e8 || true === e8, e7 = "script" === t4.tag, n2 = "link" === t4.tag;
        e7 && isTruthy(t4.props.async) ? t4.tagPriority = 30 : "style" === t4.tag && t4.innerHTML && vn.test(t4.innerHTML) ? t4.tagPriority = 40 : !e7 || !t4.props.src || isTruthy(t4.props.defer) || isTruthy(t4.props.async) || "module" === t4.props.type || t4.props.type?.endsWith("json") ? n2 && "stylesheet" === t4.props.rel || "style" === t4.tag ? t4.tagPriority = 60 : n2 && ["preload", "modulepreload"].includes(t4.props.rel) ? t4.tagPriority = 70 : e7 && isTruthy(t4.props.defer) && t4.props.src && !isTruthy(t4.props.async) ? t4.tagPriority = 80 : n2 && ["prefetch", "dns-prefetch", "prerender"].includes(t4.props.rel) && (t4.tagPriority = 90) : t4.tagPriority = 50;
      }
      wn?.track && e6.push({ tag: "htmlAttrs", props: { "data-capo": "" } });
    } } })];
    Sn = { meta: [{ name: "viewport", content: "width=device-width, initial-scale=1" }, { charset: "utf-8" }], link: [], style: [], script: [], noscript: [] };
    Cn = { id: "teleports" };
    globalThis.__buildAssetsURL = buildAssetsURL, globalThis.__publicAssetsURL = publicAssetsURL;
    getClientManifest = () => Promise.resolve().then(() => (init_client_manifest(), client_manifest_exports)).then((e6) => e6.default || e6).then((e6) => "function" == typeof e6 ? e6() : e6);
    xn = lazyCachedFunction(() => Promise.resolve().then(() => (init_styles(), styles_exports)).then((e6) => e6.default || e6));
    An = lazyCachedFunction(async () => {
      const e6 = await getClientManifest();
      if (!e6)
        throw new Error("client.manifest is not available");
      const t4 = await Promise.resolve().then(() => (init_server(), server_exports)).then((e7) => e7.default || e7);
      if (!t4)
        throw new Error("Server bundle is not available");
      return createRenderer$1(t4, { manifest: e6, renderToString: async function(e7, t5) {
        const n2 = await renderToString(e7, t5);
        return Tn + n2 + En;
      }, buildAssetsURL });
    });
    On = lazyCachedFunction(async () => {
      const t4 = await getClientManifest(), n2 = await Promise.resolve().then(() => (init_virtual_spa_template(), virtual_spa_template_exports)).then((e6) => e6.template).catch(() => "").then((e6) => Tn + e6 + En), r4 = createRenderer$1(() => () => {
      }, { manifest: t4, renderToString: () => n2, buildAssetsURL }), o6 = await r4.renderToString({});
      return { rendererContext: r4.rendererContext, renderToString: (t5) => {
        const n3 = useRuntimeConfig2(t5.event);
        return t5.modules = t5.modules || /* @__PURE__ */ new Set(), t5.payload = { serverRendered: false }, t5.config = { public: n3.public, app: n3.app }, Promise.resolve(o6);
      } };
    });
    $n = `<div${propsToString(Cn)}>`;
    Tn = `<div${propsToString({ id: "__nuxt" })}>`;
    En = "</div>";
    Pn = /\/_payload.json(\?.*)?$/;
    jn = function(l2) {
      const c2 = useRuntimeConfig2();
      return ve2(async (e6) => {
        if (e6.path === `${c2.app.baseURL}favicon.ico`)
          return setResponseHeader(e6, "Content-Type", "image/x-icon"), send(e6, "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");
        const t4 = await l2(e6);
        if (!t4) {
          const t5 = getResponseStatus(e6);
          return setResponseStatus(e6, 200 === t5 ? 500 : t5), send(e6, "No response returned from render handler: " + e6.path);
        }
        const u3 = useNitroApp();
        return await u3.hooks.callHook("render:response", t4, { event: e6 }), t4.headers && setResponseHeaders(e6, t4.headers), (t4.statusCode || t4.statusMessage) && setResponseStatus(e6, t4.statusCode, t4.statusMessage), t4.body;
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
      for (const e6 of await getClientManifest().then((e7) => Object.values(e7).filter((e8) => e8._globalCSS).map((e8) => e8.src)))
        v3.modules.add(e6);
      const b3 = await _3.renderToString(v3).catch(async (e6) => {
        if (v3._renderResponse && "skipping render" === e6.message)
          return {};
        const t5 = !r4 && v3.payload?.error || e6;
        throw await v3.nuxt?.hooks.callHook("app:error", t5), t5;
      });
      if (await v3.nuxt?.hooks.callHook("app:rendered", { ssrContext: v3, renderResult: b3 }), v3._renderResponse)
        return v3._renderResponse;
      if (v3.payload?.error && !r4)
        throw v3.payload.error;
      if (c2) {
        const e6 = function(e7) {
          return { body: stringify(splitPayload(e7).payload, e7._payloadReducers), statusCode: getResponseStatus(e7.event), statusMessage: getResponseStatusText(e7.event), headers: { "content-type": "application/json;charset=utf-8", "x-powered-by": "Nuxt" } };
        }(v3);
        return e6;
      }
      const k3 = await async function(e6) {
        const t5 = await xn(), n3 = /* @__PURE__ */ new Set();
        for (const r5 of e6)
          if (r5 in t5)
            for (const e7 of await t5[r5]())
              n3.add(e7);
        return Array.from(n3).map((e7) => ({ innerHTML: e7 }));
      }(v3.modules ?? []), R3 = u3.experimentalNoScripts, { styles: w3, scripts: S3 } = getRequestDependencies(v3, _3.rendererContext);
      m3.push({ style: k3 });
      {
        const e6 = [];
        for (const t5 in w3) {
          const n3 = w3[t5];
          e6.push({ rel: "stylesheet", href: _3.rendererContext.buildAssetsURL(n3.file) });
        }
        m3.push({ link: e6 }, y3);
      }
      R3 || (m3.push({ link: getPreloadLinks(v3, _3.rendererContext) }, y3), m3.push({ link: getPrefetchLinks(v3, _3.rendererContext) }, y3), m3.push({ script: renderPayloadJsonScript({ id: "__NUXT_DATA__", ssrContext: v3, data: v3.payload }) }, { ...y3, tagPosition: "bodyClose", tagPriority: "high" })), u3.experimentalNoScripts || m3.push({ script: Object.values(S3).map((e6) => ({ type: e6.module ? "module" : null, src: _3.rendererContext.buildAssetsURL(e6.file), defer: !e6.module || null, tagPosition: "head", crossorigin: "" })) }, y3);
      const { headTags: C3, bodyTags: x3, bodyTagsOpen: A4, htmlAttrs: O3, bodyAttrs: $3 } = await renderSSRHead(m3), T3 = { island: s2, htmlAttrs: O3 ? [O3] : [], head: normalizeChunks([C3]), bodyAttrs: $3 ? [$3] : [], bodyPrepend: normalizeChunks([A4, v3.teleports?.body]), body: [b3.html, $n + joinTags([v3.teleports?.[`#${Cn.id}`]]) + "</div>"], bodyAppend: [x3] };
      await n2.hooks.callHook("render:html", T3, { event: t4 });
      var E3;
      return { body: (E3 = T3, `<!DOCTYPE html><html${joinAttrs(E3.htmlAttrs)}><head>${joinTags(E3.head)}</head><body${joinAttrs(E3.bodyAttrs)}>${joinTags(E3.bodyPrepend)}${joinTags(E3.body)}${joinTags(E3.bodyAppend)}</body></html>`), statusCode: getResponseStatus(t4), statusMessage: getResponseStatusText(t4), headers: { "content-type": "text/html;charset=utf-8", "x-powered-by": "Nuxt" } };
    });
    Hn = Object.freeze(Object.defineProperty({ __proto__: null, default: jn }, Symbol.toStringTag, { value: "Module" }));
  }
});

// .wrangler/tmp/pages-brm1ok/chunks/routes/api/teste.get.mjs
var teste_get_exports = {};
__export(teste_get_exports, {
  default: () => e4
});
var e4;
var init_teste_get = __esm({
  ".wrangler/tmp/pages-brm1ok/chunks/routes/api/teste.get.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    init_runtime();
    e4 = defineEventHandler(async ({ context: o6 }) => {
      const { DB: e6 } = o6.cloudflare.env, t4 = e6.prepare("SELECT * FROM comments LIMIT 3"), s2 = await t4.all();
      return console.log("antes"), console.log(s2), console.log("depois"), { data: "teste" };
    });
  }
});

// .wrangler/tmp/pages-brm1ok/chunks/runtime.mjs
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
  const o6 = function(e7) {
    const t4 = e7.length;
    if (t4 % 4 > 0)
      throw new Error("Invalid string. Length must be a multiple of 4");
    let r4 = e7.indexOf("=");
    return -1 === r4 && (r4 = t4), [r4, r4 === t4 ? 0 : 4 - r4 % 4];
  }(e6), s2 = o6[0], i3 = o6[1], a3 = new r3(function(e7, t4, r4) {
    return 3 * (t4 + r4) / 4 - r4;
  }(0, s2, i3));
  let u3 = 0;
  const c2 = i3 > 0 ? s2 - 4 : s2;
  let f2;
  for (f2 = 0; f2 < c2; f2 += 4)
    n2 = t3[e6.charCodeAt(f2)] << 18 | t3[e6.charCodeAt(f2 + 1)] << 12 | t3[e6.charCodeAt(f2 + 2)] << 6 | t3[e6.charCodeAt(f2 + 3)], a3[u3++] = n2 >> 16 & 255, a3[u3++] = n2 >> 8 & 255, a3[u3++] = 255 & n2;
  return 2 === i3 && (n2 = t3[e6.charCodeAt(f2)] << 2 | t3[e6.charCodeAt(f2 + 1)] >> 4, a3[u3++] = 255 & n2), 1 === i3 && (n2 = t3[e6.charCodeAt(f2)] << 10 | t3[e6.charCodeAt(f2 + 1)] << 4 | t3[e6.charCodeAt(f2 + 2)] >> 2, a3[u3++] = n2 >> 8 & 255, a3[u3++] = 255 & n2), a3;
}
function encodeChunk(t4, r4, n2) {
  let o6;
  const s2 = [];
  for (let a3 = r4; a3 < n2; a3 += 3)
    o6 = (t4[a3] << 16 & 16711680) + (t4[a3 + 1] << 8 & 65280) + (255 & t4[a3 + 2]), s2.push(e5[(i3 = o6) >> 18 & 63] + e5[i3 >> 12 & 63] + e5[i3 >> 6 & 63] + e5[63 & i3]);
  var i3;
  return s2.join("");
}
function fromByteArray(t4) {
  let r4;
  const n2 = t4.length, o6 = n2 % 3, s2 = [], i3 = 16383;
  for (let e6 = 0, r5 = n2 - o6; e6 < r5; e6 += i3)
    s2.push(encodeChunk(t4, e6, e6 + i3 > r5 ? r5 : e6 + i3));
  return 1 === o6 ? (r4 = t4[n2 - 1], s2.push(e5[r4 >> 2] + e5[r4 << 4 & 63] + "==")) : 2 === o6 && (r4 = (t4[n2 - 2] << 8) + t4[n2 - 1], s2.push(e5[r4 >> 10] + e5[r4 >> 4 & 63] + e5[r4 << 2 & 63] + "=")), s2.join("");
}
function read(e6, t4, r4, n2, o6) {
  let s2, i3;
  const a3 = 8 * o6 - n2 - 1, u3 = (1 << a3) - 1, c2 = u3 >> 1;
  let f2 = -7, l2 = r4 ? o6 - 1 : 0;
  const h3 = r4 ? -1 : 1;
  let d2 = e6[t4 + l2];
  for (l2 += h3, s2 = d2 & (1 << -f2) - 1, d2 >>= -f2, f2 += a3; f2 > 0; )
    s2 = 256 * s2 + e6[t4 + l2], l2 += h3, f2 -= 8;
  for (i3 = s2 & (1 << -f2) - 1, s2 >>= -f2, f2 += n2; f2 > 0; )
    i3 = 256 * i3 + e6[t4 + l2], l2 += h3, f2 -= 8;
  if (0 === s2)
    s2 = 1 - c2;
  else {
    if (s2 === u3)
      return i3 ? Number.NaN : (d2 ? -1 : 1) * Number.POSITIVE_INFINITY;
    i3 += Math.pow(2, n2), s2 -= c2;
  }
  return (d2 ? -1 : 1) * i3 * Math.pow(2, s2 - n2);
}
function write(e6, t4, r4, n2, o6, s2) {
  let i3, a3, u3, c2 = 8 * s2 - o6 - 1;
  const f2 = (1 << c2) - 1, l2 = f2 >> 1, h3 = 23 === o6 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
  let d2 = n2 ? 0 : s2 - 1;
  const p2 = n2 ? 1 : -1, y3 = t4 < 0 || 0 === t4 && 1 / t4 < 0 ? 1 : 0;
  for (t4 = Math.abs(t4), Number.isNaN(t4) || t4 === Number.POSITIVE_INFINITY ? (a3 = Number.isNaN(t4) ? 1 : 0, i3 = f2) : (i3 = Math.floor(Math.log2(t4)), t4 * (u3 = Math.pow(2, -i3)) < 1 && (i3--, u3 *= 2), (t4 += i3 + l2 >= 1 ? h3 / u3 : h3 * Math.pow(2, 1 - l2)) * u3 >= 2 && (i3++, u3 /= 2), i3 + l2 >= f2 ? (a3 = 0, i3 = f2) : i3 + l2 >= 1 ? (a3 = (t4 * u3 - 1) * Math.pow(2, o6), i3 += l2) : (a3 = t4 * Math.pow(2, l2 - 1) * Math.pow(2, o6), i3 = 0)); o6 >= 8; )
    e6[r4 + d2] = 255 & a3, d2 += p2, a3 /= 256, o6 -= 8;
  for (i3 = i3 << o6 | a3, c2 += o6; c2 > 0; )
    e6[r4 + d2] = 255 & i3, d2 += p2, i3 /= 256, c2 -= 8;
  e6[r4 + d2 - p2] |= 128 * y3;
}
function createBuffer2(e6) {
  if (e6 > s)
    throw new RangeError('The value "' + e6 + '" is invalid for option "size"');
  const t4 = new Uint8Array(e6);
  return Object.setPrototypeOf(t4, Buffer$1.prototype), t4;
}
function Buffer$1(e6, t4, r4) {
  if ("number" == typeof e6) {
    if ("string" == typeof t4)
      throw new TypeError('The "string" argument must be of type string. Received type number');
    return allocUnsafe(e6);
  }
  return from(e6, t4, r4);
}
function from(e6, t4, r4) {
  if ("string" == typeof e6)
    return function(e7, t5) {
      "string" == typeof t5 && "" !== t5 || (t5 = "utf8");
      if (!Buffer$1.isEncoding(t5))
        throw new TypeError("Unknown encoding: " + t5);
      const r5 = 0 | byteLength(e7, t5);
      let n3 = createBuffer2(r5);
      const o7 = n3.write(e7, t5);
      o7 !== r5 && (n3 = n3.slice(0, o7));
      return n3;
    }(e6, t4);
  if (ArrayBuffer.isView(e6))
    return function(e7) {
      if (isInstance(e7, Uint8Array)) {
        const t5 = new Uint8Array(e7);
        return fromArrayBuffer(t5.buffer, t5.byteOffset, t5.byteLength);
      }
      return fromArrayLike(e7);
    }(e6);
  if (null == e6)
    throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e6);
  if (isInstance(e6, ArrayBuffer) || e6 && isInstance(e6.buffer, ArrayBuffer))
    return fromArrayBuffer(e6, t4, r4);
  if ("undefined" != typeof SharedArrayBuffer && (isInstance(e6, SharedArrayBuffer) || e6 && isInstance(e6.buffer, SharedArrayBuffer)))
    return fromArrayBuffer(e6, t4, r4);
  if ("number" == typeof e6)
    throw new TypeError('The "value" argument must not be of type number. Received type number');
  const n2 = e6.valueOf && e6.valueOf();
  if (null != n2 && n2 !== e6)
    return Buffer$1.from(n2, t4, r4);
  const o6 = function(e7) {
    if (Buffer$1.isBuffer(e7)) {
      const t5 = 0 | checked(e7.length), r5 = createBuffer2(t5);
      return 0 === r5.length || e7.copy(r5, 0, 0, t5), r5;
    }
    if (void 0 !== e7.length)
      return "number" != typeof e7.length || numberIsNaN(e7.length) ? createBuffer2(0) : fromArrayLike(e7);
    if ("Buffer" === e7.type && Array.isArray(e7.data))
      return fromArrayLike(e7.data);
  }(e6);
  if (o6)
    return o6;
  if ("undefined" != typeof Symbol && null != Symbol.toPrimitive && "function" == typeof e6[Symbol.toPrimitive])
    return Buffer$1.from(e6[Symbol.toPrimitive]("string"), t4, r4);
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
  const t4 = e6.length < 0 ? 0 : 0 | checked(e6.length), r4 = createBuffer2(t4);
  for (let n2 = 0; n2 < t4; n2 += 1)
    r4[n2] = 255 & e6[n2];
  return r4;
}
function fromArrayBuffer(e6, t4, r4) {
  if (t4 < 0 || e6.byteLength < t4)
    throw new RangeError('"offset" is outside of buffer bounds');
  if (e6.byteLength < t4 + (r4 || 0))
    throw new RangeError('"length" is outside of buffer bounds');
  let n2;
  return n2 = void 0 === t4 && void 0 === r4 ? new Uint8Array(e6) : void 0 === r4 ? new Uint8Array(e6, t4) : new Uint8Array(e6, t4, r4), Object.setPrototypeOf(n2, Buffer$1.prototype), n2;
}
function checked(e6) {
  if (e6 >= s)
    throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + s.toString(16) + " bytes");
  return 0 | e6;
}
function byteLength(e6, t4) {
  if (Buffer$1.isBuffer(e6))
    return e6.length;
  if (ArrayBuffer.isView(e6) || isInstance(e6, ArrayBuffer))
    return e6.byteLength;
  if ("string" != typeof e6)
    throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof e6);
  const r4 = e6.length, n2 = arguments.length > 2 && true === arguments[2];
  if (!n2 && 0 === r4)
    return 0;
  let o6 = false;
  for (; ; )
    switch (t4) {
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
        if (o6)
          return n2 ? -1 : utf8ToBytes(e6).length;
        t4 = ("" + t4).toLowerCase(), o6 = true;
    }
}
function slowToString(e6, t4, r4) {
  let n2 = false;
  if ((void 0 === t4 || t4 < 0) && (t4 = 0), t4 > this.length)
    return "";
  if ((void 0 === r4 || r4 > this.length) && (r4 = this.length), r4 <= 0)
    return "";
  if ((r4 >>>= 0) <= (t4 >>>= 0))
    return "";
  for (e6 || (e6 = "utf8"); ; )
    switch (e6) {
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
          throw new TypeError("Unknown encoding: " + e6);
        e6 = (e6 + "").toLowerCase(), n2 = true;
    }
}
function swap(e6, t4, r4) {
  const n2 = e6[t4];
  e6[t4] = e6[r4], e6[r4] = n2;
}
function bidirectionalIndexOf(e6, t4, r4, n2, o6) {
  if (0 === e6.length)
    return -1;
  if ("string" == typeof r4 ? (n2 = r4, r4 = 0) : r4 > 2147483647 ? r4 = 2147483647 : r4 < -2147483648 && (r4 = -2147483648), numberIsNaN(r4 = +r4) && (r4 = o6 ? 0 : e6.length - 1), r4 < 0 && (r4 = e6.length + r4), r4 >= e6.length) {
    if (o6)
      return -1;
    r4 = e6.length - 1;
  } else if (r4 < 0) {
    if (!o6)
      return -1;
    r4 = 0;
  }
  if ("string" == typeof t4 && (t4 = Buffer$1.from(t4, n2)), Buffer$1.isBuffer(t4))
    return 0 === t4.length ? -1 : arrayIndexOf(e6, t4, r4, n2, o6);
  if ("number" == typeof t4)
    return t4 &= 255, "function" == typeof Uint8Array.prototype.indexOf ? o6 ? Uint8Array.prototype.indexOf.call(e6, t4, r4) : Uint8Array.prototype.lastIndexOf.call(e6, t4, r4) : arrayIndexOf(e6, [t4], r4, n2, o6);
  throw new TypeError("val must be string, number or Buffer");
}
function arrayIndexOf(e6, t4, r4, n2, o6) {
  let s2, i3 = 1, a3 = e6.length, u3 = t4.length;
  if (void 0 !== n2 && ("ucs2" === (n2 = String(n2).toLowerCase()) || "ucs-2" === n2 || "utf16le" === n2 || "utf-16le" === n2)) {
    if (e6.length < 2 || t4.length < 2)
      return -1;
    i3 = 2, a3 /= 2, u3 /= 2, r4 /= 2;
  }
  function read2(e7, t5) {
    return 1 === i3 ? e7[t5] : e7.readUInt16BE(t5 * i3);
  }
  if (o6) {
    let n3 = -1;
    for (s2 = r4; s2 < a3; s2++)
      if (read2(e6, s2) === read2(t4, -1 === n3 ? 0 : s2 - n3)) {
        if (-1 === n3 && (n3 = s2), s2 - n3 + 1 === u3)
          return n3 * i3;
      } else
        -1 !== n3 && (s2 -= s2 - n3), n3 = -1;
  } else
    for (r4 + u3 > a3 && (r4 = a3 - u3), s2 = r4; s2 >= 0; s2--) {
      let r5 = true;
      for (let n3 = 0; n3 < u3; n3++)
        if (read2(e6, s2 + n3) !== read2(t4, n3)) {
          r5 = false;
          break;
        }
      if (r5)
        return s2;
    }
  return -1;
}
function hexWrite(e6, t4, r4, n2) {
  r4 = Number(r4) || 0;
  const o6 = e6.length - r4;
  n2 ? (n2 = Number(n2)) > o6 && (n2 = o6) : n2 = o6;
  const s2 = t4.length;
  let i3;
  for (n2 > s2 / 2 && (n2 = s2 / 2), i3 = 0; i3 < n2; ++i3) {
    const n3 = Number.parseInt(t4.slice(2 * i3, 2 * i3 + 2), 16);
    if (numberIsNaN(n3))
      return i3;
    e6[r4 + i3] = n3;
  }
  return i3;
}
function utf8Write(e6, t4, r4, n2) {
  return blitBuffer(utf8ToBytes(t4, e6.length - r4), e6, r4, n2);
}
function asciiWrite(e6, t4, r4, n2) {
  return blitBuffer(function(e7) {
    const t5 = [];
    for (let r5 = 0; r5 < e7.length; ++r5)
      t5.push(255 & e7.charCodeAt(r5));
    return t5;
  }(t4), e6, r4, n2);
}
function base64Write(e6, t4, r4, n2) {
  return blitBuffer(base64ToBytes(t4), e6, r4, n2);
}
function ucs2Write(e6, t4, r4, n2) {
  return blitBuffer(function(e7, t5) {
    let r5, n3, o6;
    const s2 = [];
    for (let i3 = 0; i3 < e7.length && !((t5 -= 2) < 0); ++i3)
      r5 = e7.charCodeAt(i3), n3 = r5 >> 8, o6 = r5 % 256, s2.push(o6, n3);
    return s2;
  }(t4, e6.length - r4), e6, r4, n2);
}
function base64Slice(e6, t4, r4) {
  return 0 === t4 && r4 === e6.length ? fromByteArray(e6) : fromByteArray(e6.slice(t4, r4));
}
function utf8Slice(e6, t4, r4) {
  r4 = Math.min(e6.length, r4);
  const n2 = [];
  let o6 = t4;
  for (; o6 < r4; ) {
    const t5 = e6[o6];
    let s2 = null, i3 = t5 > 239 ? 4 : t5 > 223 ? 3 : t5 > 191 ? 2 : 1;
    if (o6 + i3 <= r4) {
      let r5, n3, a3, u3;
      switch (i3) {
        case 1:
          t5 < 128 && (s2 = t5);
          break;
        case 2:
          r5 = e6[o6 + 1], 128 == (192 & r5) && (u3 = (31 & t5) << 6 | 63 & r5, u3 > 127 && (s2 = u3));
          break;
        case 3:
          r5 = e6[o6 + 1], n3 = e6[o6 + 2], 128 == (192 & r5) && 128 == (192 & n3) && (u3 = (15 & t5) << 12 | (63 & r5) << 6 | 63 & n3, u3 > 2047 && (u3 < 55296 || u3 > 57343) && (s2 = u3));
          break;
        case 4:
          r5 = e6[o6 + 1], n3 = e6[o6 + 2], a3 = e6[o6 + 3], 128 == (192 & r5) && 128 == (192 & n3) && 128 == (192 & a3) && (u3 = (15 & t5) << 18 | (63 & r5) << 12 | (63 & n3) << 6 | 63 & a3, u3 > 65535 && u3 < 1114112 && (s2 = u3));
      }
    }
    null === s2 ? (s2 = 65533, i3 = 1) : s2 > 65535 && (s2 -= 65536, n2.push(s2 >>> 10 & 1023 | 55296), s2 = 56320 | 1023 & s2), n2.push(s2), o6 += i3;
  }
  return function(e7) {
    const t5 = e7.length;
    if (t5 <= i2)
      return String.fromCharCode.apply(String, e7);
    let r5 = "", n3 = 0;
    for (; n3 < t5; )
      r5 += String.fromCharCode.apply(String, e7.slice(n3, n3 += i2));
    return r5;
  }(n2);
}
function asciiSlice(e6, t4, r4) {
  let n2 = "";
  r4 = Math.min(e6.length, r4);
  for (let o6 = t4; o6 < r4; ++o6)
    n2 += String.fromCharCode(127 & e6[o6]);
  return n2;
}
function latin1Slice(e6, t4, r4) {
  let n2 = "";
  r4 = Math.min(e6.length, r4);
  for (let o6 = t4; o6 < r4; ++o6)
    n2 += String.fromCharCode(e6[o6]);
  return n2;
}
function hexSlice(e6, t4, r4) {
  const n2 = e6.length;
  (!t4 || t4 < 0) && (t4 = 0), (!r4 || r4 < 0 || r4 > n2) && (r4 = n2);
  let o6 = "";
  for (let n3 = t4; n3 < r4; ++n3)
    o6 += c[e6[n3]];
  return o6;
}
function utf16leSlice(e6, t4, r4) {
  const n2 = e6.slice(t4, r4);
  let o6 = "";
  for (let e7 = 0; e7 < n2.length - 1; e7 += 2)
    o6 += String.fromCharCode(n2[e7] + 256 * n2[e7 + 1]);
  return o6;
}
function checkOffset(e6, t4, r4) {
  if (e6 % 1 != 0 || e6 < 0)
    throw new RangeError("offset is not uint");
  if (e6 + t4 > r4)
    throw new RangeError("Trying to access beyond buffer length");
}
function checkInt(e6, t4, r4, n2, o6, s2) {
  if (!Buffer$1.isBuffer(e6))
    throw new TypeError('"buffer" argument must be a Buffer instance');
  if (t4 > o6 || t4 < s2)
    throw new RangeError('"value" argument is out of bounds');
  if (r4 + n2 > e6.length)
    throw new RangeError("Index out of range");
}
function wrtBigUInt64LE(e6, t4, r4, n2, o6) {
  checkIntBI(t4, n2, o6, e6, r4, 7);
  let s2 = Number(t4 & BigInt(4294967295));
  e6[r4++] = s2, s2 >>= 8, e6[r4++] = s2, s2 >>= 8, e6[r4++] = s2, s2 >>= 8, e6[r4++] = s2;
  let i3 = Number(t4 >> BigInt(32) & BigInt(4294967295));
  return e6[r4++] = i3, i3 >>= 8, e6[r4++] = i3, i3 >>= 8, e6[r4++] = i3, i3 >>= 8, e6[r4++] = i3, r4;
}
function wrtBigUInt64BE(e6, t4, r4, n2, o6) {
  checkIntBI(t4, n2, o6, e6, r4, 7);
  let s2 = Number(t4 & BigInt(4294967295));
  e6[r4 + 7] = s2, s2 >>= 8, e6[r4 + 6] = s2, s2 >>= 8, e6[r4 + 5] = s2, s2 >>= 8, e6[r4 + 4] = s2;
  let i3 = Number(t4 >> BigInt(32) & BigInt(4294967295));
  return e6[r4 + 3] = i3, i3 >>= 8, e6[r4 + 2] = i3, i3 >>= 8, e6[r4 + 1] = i3, i3 >>= 8, e6[r4] = i3, r4 + 8;
}
function checkIEEE754(e6, t4, r4, n2, o6, s2) {
  if (r4 + n2 > e6.length)
    throw new RangeError("Index out of range");
  if (r4 < 0)
    throw new RangeError("Index out of range");
}
function writeFloat(e6, t4, r4, n2, o6) {
  return t4 = +t4, r4 >>>= 0, o6 || checkIEEE754(e6, 0, r4, 4), write(e6, t4, r4, n2, 23, 4), r4 + 4;
}
function writeDouble(e6, t4, r4, n2, o6) {
  return t4 = +t4, r4 >>>= 0, o6 || checkIEEE754(e6, 0, r4, 8), write(e6, t4, r4, n2, 52, 8), r4 + 8;
}
function E2(e6, t4, r4) {
  a2[e6] = class extends r4 {
    constructor() {
      super(), Object.defineProperty(this, "message", { value: Reflect.apply(t4, this, arguments), writable: true, configurable: true }), this.name = `${this.name} [${e6}]`, this.stack, delete this.name;
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
  let t4 = "", r4 = e6.length;
  const n2 = "-" === e6[0] ? 1 : 0;
  for (; r4 >= n2 + 4; r4 -= 3)
    t4 = `_${e6.slice(r4 - 3, r4)}${t4}`;
  return `${e6.slice(0, r4)}${t4}`;
}
function checkIntBI(e6, t4, r4, n2, o6, s2) {
  if (e6 > r4 || e6 < t4) {
    const r5 = "bigint" == typeof t4 ? "n" : "";
    let n3;
    throw n3 = 0 === t4 || t4 === BigInt(0) ? `>= 0${r5} and < 2${r5} ** ${8 * (s2 + 1)}${r5}` : `>= -(2${r5} ** ${8 * (s2 + 1) - 1}${r5}) and < 2 ** ${8 * (s2 + 1) - 1}${r5}`, new a2.ERR_OUT_OF_RANGE("value", n3, e6);
  }
  !function(e7, t5, r5) {
    validateNumber(t5, "offset"), void 0 !== e7[t5] && void 0 !== e7[t5 + r5] || boundsError(t5, e7.length - (r5 + 1));
  }(n2, o6, s2);
}
function validateNumber(e6, t4) {
  if ("number" != typeof e6)
    throw new a2.ERR_INVALID_ARG_TYPE(t4, "number", e6);
}
function boundsError(e6, t4, r4) {
  if (Math.floor(e6) !== e6)
    throw validateNumber(e6, r4), new a2.ERR_OUT_OF_RANGE("offset", "an integer", e6);
  if (t4 < 0)
    throw new a2.ERR_BUFFER_OUT_OF_BOUNDS();
  throw new a2.ERR_OUT_OF_RANGE("offset", `>= 0 and <= ${t4}`, e6);
}
function utf8ToBytes(e6, t4) {
  let r4;
  t4 = t4 || Number.POSITIVE_INFINITY;
  const n2 = e6.length;
  let o6 = null;
  const s2 = [];
  for (let i3 = 0; i3 < n2; ++i3) {
    if (r4 = e6.charCodeAt(i3), r4 > 55295 && r4 < 57344) {
      if (!o6) {
        if (r4 > 56319) {
          (t4 -= 3) > -1 && s2.push(239, 191, 189);
          continue;
        }
        if (i3 + 1 === n2) {
          (t4 -= 3) > -1 && s2.push(239, 191, 189);
          continue;
        }
        o6 = r4;
        continue;
      }
      if (r4 < 56320) {
        (t4 -= 3) > -1 && s2.push(239, 191, 189), o6 = r4;
        continue;
      }
      r4 = 65536 + (o6 - 55296 << 10 | r4 - 56320);
    } else
      o6 && (t4 -= 3) > -1 && s2.push(239, 191, 189);
    if (o6 = null, r4 < 128) {
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
function base64ToBytes(e6) {
  return toByteArray(function(e7) {
    if ((e7 = (e7 = e7.split("=")[0]).trim().replace(u2, "")).length < 2)
      return "";
    for (; e7.length % 4 != 0; )
      e7 += "=";
    return e7;
  }(e6));
}
function blitBuffer(e6, t4, r4, n2) {
  let o6;
  for (o6 = 0; o6 < n2 && !(o6 + r4 >= t4.length || o6 >= e6.length); ++o6)
    t4[o6 + r4] = e6[o6];
  return o6;
}
function isInstance(e6, t4) {
  return e6 instanceof t4 || null != e6 && null != e6.constructor && null != e6.constructor.name && e6.constructor.name === t4.name;
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
  if (h2 === setTimeout)
    return setTimeout(e6, 0);
  if ((h2 === defaultSetTimeout || !h2) && setTimeout)
    return h2 = setTimeout, setTimeout(e6, 0);
  try {
    return h2(e6, 0);
  } catch {
    try {
      return h2.call(null, e6, 0);
    } catch {
      return h2.call(this, e6, 0);
    }
  }
}
function cleanUpNextTick() {
  g && p && (g = false, p.length > 0 ? y2 = [...p, ...y2] : m2 = -1, y2.length > 0 && drainQueue());
}
function drainQueue() {
  if (g)
    return;
  const e6 = runTimeout(cleanUpNextTick);
  g = true;
  let t4 = y2.length;
  for (; t4; ) {
    for (p = y2, y2 = []; ++m2 < t4; )
      p && p[m2].run();
    m2 = -1, t4 = y2.length;
  }
  p = null, g = false, function(e7) {
    if (d === clearTimeout)
      return clearTimeout(e7);
    if ((d === defaultClearTimeout || !d) && clearTimeout)
      return d = clearTimeout, clearTimeout(e7);
    try {
      return d(e7);
    } catch {
      try {
        return d.call(null, e7);
      } catch {
        return d.call(this, e7);
      }
    }
  }(e6);
}
function Item(e6, t4) {
  this.fun = e6, this.array = t4;
}
function noop() {
  return l;
}
function encodeQueryValue(e6) {
  return (t4 = "string" == typeof e6 ? e6 : JSON.stringify(e6), encodeURI("" + t4).replace($2, "|")).replace(A3, "%2B").replace(C2, "+").replace(R2, "%23").replace(I2, "%26").replace(T2, "`").replace(S2, "^").replace(x2, "%2F");
  var t4;
}
function encodeQueryKey(e6) {
  return encodeQueryValue(e6).replace(k2, "%3D");
}
function decode(e6 = "") {
  try {
    return decodeURIComponent("" + e6);
  } catch {
    return "" + e6;
  }
}
function decodeQueryValue(e6) {
  return decode(e6.replace(A3, " "));
}
function parseQuery(e6 = "") {
  const t4 = {};
  "?" === e6[0] && (e6 = e6.slice(1));
  for (const r4 of e6.split("&")) {
    const e7 = r4.match(/([^=]+)=?(.*)/) || [];
    if (e7.length < 2)
      continue;
    const n2 = decode(e7[1].replace(A3, " "));
    if ("__proto__" === n2 || "constructor" === n2)
      continue;
    const o6 = decodeQueryValue(e7[2] || "");
    void 0 === t4[n2] ? t4[n2] = o6 : Array.isArray(t4[n2]) ? t4[n2].push(o6) : t4[n2] = [t4[n2], o6];
  }
  return t4;
}
function stringifyQuery(e6) {
  return Object.keys(e6).filter((t4) => void 0 !== e6[t4]).map((t4) => {
    return r4 = t4, "number" != typeof (n2 = e6[t4]) && "boolean" != typeof n2 || (n2 = String(n2)), n2 ? Array.isArray(n2) ? n2.map((e7) => `${encodeQueryKey(r4)}=${encodeQueryValue(e7)}`).join("&") : `${encodeQueryKey(r4)}=${encodeQueryValue(n2)}` : encodeQueryKey(r4);
    var r4, n2;
  }).filter(Boolean).join("&");
}
function hasProtocol(e6, t4 = {}) {
  return "boolean" == typeof t4 && (t4 = { acceptRelative: t4 }), t4.strict ? O2.test(e6) : j3.test(e6) || !!t4.acceptRelative && L2.test(e6);
}
function isScriptProtocol(e6) {
  return !!e6 && N2.test(e6);
}
function hasTrailingSlash(e6 = "", t4) {
  return t4 ? M2.test(e6) : e6.endsWith("/");
}
function withoutTrailingSlash(e6 = "", t4) {
  if (!t4)
    return (hasTrailingSlash(e6) ? e6.slice(0, -1) : e6) || "/";
  if (!hasTrailingSlash(e6, true))
    return e6 || "/";
  let r4 = e6, n2 = "";
  const o6 = e6.indexOf("#");
  o6 >= 0 && (r4 = e6.slice(0, o6), n2 = e6.slice(o6));
  const [s2, ...i3] = r4.split("?");
  return ((s2.endsWith("/") ? s2.slice(0, -1) : s2) || "/") + (i3.length > 0 ? `?${i3.join("?")}` : "") + n2;
}
function withTrailingSlash(e6 = "", t4) {
  if (!t4)
    return e6.endsWith("/") ? e6 : e6 + "/";
  if (hasTrailingSlash(e6, true))
    return e6 || "/";
  let r4 = e6, n2 = "";
  const o6 = e6.indexOf("#");
  if (o6 >= 0 && (r4 = e6.slice(0, o6), n2 = e6.slice(o6), !r4))
    return n2;
  const [s2, ...i3] = r4.split("?");
  return s2 + "/" + (i3.length > 0 ? `?${i3.join("?")}` : "") + n2;
}
function withLeadingSlash(e6 = "") {
  return function(e7 = "") {
    return e7.startsWith("/");
  }(e6) ? e6 : "/" + e6;
}
function withoutBase(e6, t4) {
  if (isEmptyURL(t4))
    return e6;
  const r4 = withoutTrailingSlash(t4);
  if (!e6.startsWith(r4))
    return e6;
  const n2 = e6.slice(r4.length);
  return "/" === n2[0] ? n2 : "/" + n2;
}
function withQuery(e6, t4) {
  const r4 = parseURL(e6), n2 = { ...parseQuery(r4.search), ...t4 };
  return r4.search = stringifyQuery(n2), stringifyParsedURL(r4);
}
function getQuery$1(e6) {
  return parseQuery(parseURL(e6).search);
}
function isEmptyURL(e6) {
  return !e6 || "/" === e6;
}
function joinURL(e6, ...t4) {
  let r4 = e6 || "";
  for (const e7 of t4.filter((e8) => function(e9) {
    return e9 && "/" !== e9;
  }(e8)))
    if (r4) {
      const t5 = e7.replace(U2, "");
      r4 = withTrailingSlash(r4) + t5;
    } else
      r4 = e7;
  return r4;
}
function joinRelativeURL(...e6) {
  const t4 = /\/(?!\/)/, r4 = e6.filter(Boolean), n2 = [];
  let o6 = 0;
  for (const e7 of r4)
    if (e7 && "/" !== e7) {
      for (const [r5, s3] of e7.split(t4).entries())
        if (s3 && "." !== s3)
          if (".." !== s3)
            1 === r5 && n2[n2.length - 1]?.endsWith(":/") ? n2[n2.length - 1] += "/" + s3 : (n2.push(s3), o6++);
          else {
            if (1 === n2.length && hasProtocol(n2[0]))
              continue;
            n2.pop(), o6--;
          }
    }
  let s2 = n2.join("/");
  return o6 >= 0 ? r4[0]?.startsWith("/") && !s2.startsWith("/") ? s2 = "/" + s2 : r4[0]?.startsWith("./") && !s2.startsWith("./") && (s2 = "./" + s2) : s2 = "../".repeat(-1 * o6) + s2, r4[r4.length - 1]?.endsWith("/") && !s2.endsWith("/") && (s2 += "/"), s2;
}
function isEqual(e6, t4, r4 = {}) {
  return r4.trailingSlash || (e6 = withTrailingSlash(e6), t4 = withTrailingSlash(t4)), r4.leadingSlash || (e6 = withLeadingSlash(e6), t4 = withLeadingSlash(t4)), r4.encoding || (e6 = decode(e6), t4 = decode(t4)), e6 === t4;
}
function parseURL(e6 = "", t4) {
  const r4 = e6.match(/^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i);
  if (r4) {
    const [, e7, t5 = ""] = r4;
    return { protocol: e7.toLowerCase(), pathname: t5, href: e7 + t5, auth: "", host: "", search: "", hash: "" };
  }
  if (!hasProtocol(e6, { acceptRelative: true }))
    return parsePath(e6);
  const [, n2 = "", o6, s2 = ""] = e6.replace(/\\/g, "/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/) || [];
  let [, i3 = "", a3 = ""] = s2.match(/([^#/?]*)(.*)?/) || [];
  "file:" === n2 && (a3 = a3.replace(/\/(?=[A-Za-z]:)/, ""));
  const { pathname: u3, search: c2, hash: f2 } = parsePath(a3);
  return { protocol: n2.toLowerCase(), auth: o6 ? o6.slice(0, Math.max(0, o6.length - 1)) : "", host: i3, pathname: u3, search: c2, hash: f2, [P2]: !n2 };
}
function parsePath(e6 = "") {
  const [t4 = "", r4 = "", n2 = ""] = (e6.match(/([^#?]*)(\?[^#]*)?(#.*)?/) || []).splice(1);
  return { pathname: t4, search: r4, hash: n2 };
}
function stringifyParsedURL(e6) {
  const t4 = e6.pathname || "", r4 = e6.search ? (e6.search.startsWith("?") ? "" : "?") + e6.search : "", n2 = e6.hash || "", o6 = e6.auth ? e6.auth + "@" : "", s2 = e6.host || "";
  return (e6.protocol || e6[P2] ? (e6.protocol || "") + "//" : "") + o6 + s2 + t4 + r4 + n2;
}
function objectHash(e6, t4) {
  const r4 = createHasher(t4 = t4 ? { ...H2, ...t4 } : H2);
  return r4.dispatch(e6), r4.toString();
}
function createHasher(e6) {
  let t4 = "", r4 = /* @__PURE__ */ new Map();
  const write2 = (e7) => {
    t4 += e7;
  };
  return { toString: () => t4, getContext: () => r4, dispatch(t5) {
    e6.replacer && (t5 = e6.replacer(t5));
    return this[null === t5 ? "null" : typeof t5](t5);
  }, object(t5) {
    if (t5 && "function" == typeof t5.toJSON)
      return this.object(t5.toJSON());
    const n2 = Object.prototype.toString.call(t5);
    let o6 = "";
    const s2 = n2.length;
    o6 = s2 < 10 ? "unknown:[" + n2 + "]" : n2.slice(8, s2 - 1), o6 = o6.toLowerCase();
    let i3 = null;
    if (void 0 !== (i3 = r4.get(t5)))
      return this.dispatch("[CIRCULAR:" + i3 + "]");
    if (r4.set(t5, r4.size), void 0 !== f && f.isBuffer && f.isBuffer(t5))
      return write2("buffer:"), write2(t5.toString("utf8"));
    if ("object" !== o6 && "function" !== o6 && "asyncfunction" !== o6)
      this[o6] ? this[o6](t5) : e6.ignoreUnknown || this.unkown(t5, o6);
    else {
      let r5 = Object.keys(t5);
      e6.unorderedObjects && (r5 = r5.sort());
      let n3 = [];
      false === e6.respectType || isNativeFunction(t5) || (n3 = q3), e6.excludeKeys && (r5 = r5.filter((t6) => !e6.excludeKeys(t6)), n3 = n3.filter((t6) => !e6.excludeKeys(t6))), write2("object:" + (r5.length + n3.length) + ":");
      const dispatchForKey = (r6) => {
        this.dispatch(r6), write2(":"), e6.excludeValues || this.dispatch(t5[r6]), write2(",");
      };
      for (const e7 of r5)
        dispatchForKey(e7);
      for (const e7 of n3)
        dispatchForKey(e7);
    }
  }, array(t5, n2) {
    if (n2 = void 0 === n2 ? false !== e6.unorderedArrays : n2, write2("array:" + t5.length + ":"), !n2 || t5.length <= 1) {
      for (const e7 of t5)
        this.dispatch(e7);
      return;
    }
    const o6 = /* @__PURE__ */ new Map(), s2 = t5.map((t6) => {
      const r5 = createHasher(e6);
      r5.dispatch(t6);
      for (const [e7, t7] of r5.getContext())
        o6.set(e7, t7);
      return r5.toString();
    });
    return r4 = o6, s2.sort(), this.array(s2, false);
  }, date: (e7) => write2("date:" + e7.toJSON()), symbol: (e7) => write2("symbol:" + e7.toString()), unkown(e7, t5) {
    if (write2(t5), e7)
      return write2(":"), e7 && "function" == typeof e7.entries ? this.array(Array.from(e7.entries()), true) : void 0;
  }, error: (e7) => write2("error:" + e7.toString()), boolean: (e7) => write2("bool:" + e7), string(e7) {
    write2("string:" + e7.length + ":"), write2(e7);
  }, function(t5) {
    write2("fn:"), isNativeFunction(t5) ? this.dispatch("[native]") : this.dispatch(t5.toString()), false !== e6.respectFunctionNames && this.dispatch("function-name:" + String(t5.name)), e6.respectFunctionProperties && this.object(t5);
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
  }, url: (e7) => write2("url:" + e7.toString()), map(t5) {
    write2("map:");
    const r5 = [...t5];
    return this.array(r5, false !== e6.unorderedSets);
  }, set(t5) {
    write2("set:");
    const r5 = [...t5];
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
  return "function" == typeof e6 && Function.prototype.toString.call(e6).slice(-W2) === z3;
}
function hash(e6, t4 = {}) {
  const r4 = "string" == typeof e6 ? e6 : objectHash(e6, t4);
  return (n2 = r4, new SHA256().finalize(n2).toString(F2)).slice(0, 10);
  var n2;
}
function createRouter$1(e6 = {}) {
  const t4 = { options: e6, rootNode: createRadixNode(), staticRoutesMap: {} }, normalizeTrailingSlash = (t5) => e6.strictTrailingSlash ? t5 : t5.replace(/\/$/, "") || "/";
  if (e6.routes)
    for (const r4 in e6.routes)
      insert(t4, normalizeTrailingSlash(r4), e6.routes[r4]);
  return { ctx: t4, lookup: (e7) => function(e8, t5) {
    const r4 = e8.staticRoutesMap[t5];
    if (r4)
      return r4.data;
    const n2 = t5.split("/"), o6 = {};
    let s2 = false, i3 = null, a3 = e8.rootNode, u3 = null;
    for (let e9 = 0; e9 < n2.length; e9++) {
      const t6 = n2[e9];
      null !== a3.wildcardChildNode && (i3 = a3.wildcardChildNode, u3 = n2.slice(e9).join("/"));
      const r5 = a3.children.get(t6);
      if (void 0 === r5) {
        if (a3 && a3.placeholderChildren.length > 1) {
          const t7 = n2.length - e9;
          a3 = a3.placeholderChildren.find((e10) => e10.maxDepth === t7) || null;
        } else
          a3 = a3.placeholderChildren[0] || null;
        if (!a3)
          break;
        a3.paramName && (o6[a3.paramName] = t6), s2 = true;
      } else
        a3 = r5;
    }
    null !== a3 && null !== a3.data || null === i3 || (a3 = i3, o6[a3.paramName || "_"] = u3, s2 = true);
    if (!a3)
      return null;
    if (s2)
      return { ...a3.data, params: s2 ? o6 : void 0 };
    return a3.data;
  }(t4, normalizeTrailingSlash(e7)), insert: (e7, r4) => insert(t4, normalizeTrailingSlash(e7), r4), remove: (e7) => function(e8, t5) {
    let r4 = false;
    const n2 = t5.split("/");
    let o6 = e8.rootNode;
    for (const e9 of n2)
      if (o6 = o6.children.get(e9), !o6)
        return r4;
    if (o6.data) {
      const e9 = n2.at(-1) || "";
      o6.data = null, 0 === Object.keys(o6.children).length && o6.parent && (o6.parent.children.delete(e9), o6.parent.wildcardChildNode = null, o6.parent.placeholderChildren = []), r4 = true;
    }
    return r4;
  }(t4, normalizeTrailingSlash(e7)) };
}
function insert(e6, t4, r4) {
  let n2 = true;
  const o6 = t4.split("/");
  let s2 = e6.rootNode, i3 = 0;
  const a3 = [s2];
  for (const e7 of o6) {
    let t5;
    if (t5 = s2.children.get(e7))
      s2 = t5;
    else {
      const r5 = getNodeType(e7);
      t5 = createRadixNode({ type: r5, parent: s2 }), s2.children.set(e7, t5), r5 === Y2.PLACEHOLDER ? (t5.paramName = "*" === e7 ? "_" + i3++ : e7.slice(1), s2.placeholderChildren.push(t5), n2 = false) : r5 === Y2.WILDCARD && (s2.wildcardChildNode = t5, t5.paramName = e7.slice(3) || "_", n2 = false), a3.push(t5), s2 = t5;
    }
  }
  for (const [e7, t5] of a3.entries())
    t5.maxDepth = Math.max(a3.length - e7, t5.maxDepth || 0);
  return s2.data = r4, true === n2 && (e6.staticRoutesMap[t4] = s2), s2;
}
function createRadixNode(e6 = {}) {
  return { type: e6.type || Y2.NORMAL, maxDepth: 0, parent: e6.parent || null, children: /* @__PURE__ */ new Map(), data: e6.data || null, paramName: e6.paramName || null, wildcardChildNode: null, placeholderChildren: [] };
}
function getNodeType(e6) {
  return e6.startsWith("**") ? Y2.WILDCARD : ":" === e6[0] || "*" === e6 ? Y2.PLACEHOLDER : Y2.NORMAL;
}
function toRouteMatcher(e6) {
  return function(e7, t4) {
    return { ctx: { table: e7 }, matchAll: (r4) => _matchRoutes(r4, e7, t4) };
  }(_routerNodeToTable("", e6.ctx.rootNode), e6.ctx.options.strictTrailingSlash);
}
function _matchRoutes(e6, t4, r4) {
  true !== r4 && e6.endsWith("/") && (e6 = e6.slice(0, -1) || "/");
  const n2 = [];
  for (const [r5, o7] of _sortRoutesMap(t4.wildcard))
    (e6 === r5 || e6.startsWith(r5 + "/")) && n2.push(o7);
  for (const [r5, o7] of _sortRoutesMap(t4.dynamic))
    if (e6.startsWith(r5 + "/")) {
      const t5 = "/" + e6.slice(r5.length).split("/").splice(2).join("/");
      n2.push(..._matchRoutes(t5, o7));
    }
  const o6 = t4.static.get(e6);
  return o6 && n2.push(o6), n2.filter(Boolean);
}
function _sortRoutesMap(e6) {
  return [...e6.entries()].sort((e7, t4) => e7[0].length - t4[0].length);
}
function _routerNodeToTable(e6, t4) {
  const r4 = { static: /* @__PURE__ */ new Map(), wildcard: /* @__PURE__ */ new Map(), dynamic: /* @__PURE__ */ new Map() };
  return function _addNode(e7, t5) {
    if (e7)
      if (t5.type !== Y2.NORMAL || e7.includes("*") || e7.includes(":")) {
        if (t5.type === Y2.WILDCARD)
          r4.wildcard.set(e7.replace("/**", ""), t5.data);
        else if (t5.type === Y2.PLACEHOLDER) {
          const n2 = _routerNodeToTable("", t5);
          return t5.data && n2.static.set("/", t5.data), void r4.dynamic.set(e7.replace(/\/\*|\/:\w+/, ""), n2);
        }
      } else
        t5.data && r4.static.set(e7, t5.data);
    for (const [r5, n2] of t5.children.entries())
      _addNode(`${e7}/${r5}`.replace("//", "/"), n2);
  }(e6, t4), r4;
}
function jsonParseTransform(e6, t4) {
  if (!("__proto__" === e6 || "constructor" === e6 && t4 && "object" == typeof t4 && "prototype" in t4))
    return t4;
  !function(e7) {
    console.warn(`[destr] Dropping "${e7}" key to prevent prototype pollution.`);
  }(e6);
}
function destr(e6, t4 = {}) {
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
  if (!ee3.test(e6)) {
    if (t4.strict)
      throw new SyntaxError("[destr] Invalid JSON");
    return e6;
  }
  try {
    if (Z3.test(e6) || X2.test(e6)) {
      if (t4.strict)
        throw new Error("[destr] Possible prototype pollution");
      return JSON.parse(e6, jsonParseTransform);
    }
    return JSON.parse(e6);
  } catch (r5) {
    if (t4.strict)
      throw r5;
    return e6;
  }
}
function isPlainObject2(e6) {
  if (null === e6 || "object" != typeof e6)
    return false;
  const t4 = Object.getPrototypeOf(e6);
  return (null === t4 || t4 === Object.prototype || null === Object.getPrototypeOf(t4)) && (!(Symbol.iterator in e6) && (!(Symbol.toStringTag in e6) || "[object Module]" === Object.prototype.toString.call(e6)));
}
function _defu(e6, t4, r4 = ".", n2) {
  if (!isPlainObject2(t4))
    return _defu(e6, {}, r4, n2);
  const o6 = Object.assign({}, t4);
  for (const t5 in e6) {
    if ("__proto__" === t5 || "constructor" === t5)
      continue;
    const s2 = e6[t5];
    null != s2 && (n2 && n2(o6, t5, s2, r4) || (Array.isArray(s2) && Array.isArray(o6[t5]) ? o6[t5] = [...s2, ...o6[t5]] : isPlainObject2(s2) && isPlainObject2(o6[t5]) ? o6[t5] = _defu(s2, o6[t5], (r4 ? `${r4}.` : "") + t5.toString(), n2) : o6[t5] = s2));
  }
  return o6;
}
function createDefu(e6) {
  return (...t4) => t4.reduce((t5, r4) => _defu(t5, r4, "", e6), {});
}
function _addListener(e6, t4, r4, n2) {
  _checkListener(r4), void 0 !== e6._events.newListener && e6.emit("newListener", t4, r4.listener || r4), e6._events[t4] || (e6._events[t4] = []), n2 ? e6._events[t4].unshift(r4) : e6._events[t4].push(r4);
  const o6 = _getMaxListeners(e6);
  if (o6 > 0 && e6._events[t4].length > o6 && !e6._events[t4].warned) {
    e6._events[t4].warned = true;
    const r5 = new Error(`[unenv] Possible EventEmitter memory leak detected. ${e6._events[t4].length} ${t4} listeners added. Use emitter.setMaxListeners() to increase limit`);
    r5.name = "MaxListenersExceededWarning", r5.emitter = e6, r5.type = t4, r5.count = e6._events[t4]?.length, console.warn(r5);
  }
  return e6;
}
function _wrapOnce(e6, t4, r4) {
  let n2 = false;
  const wrapper = (...o6) => {
    if (!n2)
      return e6.removeListener(t4, wrapper), n2 = true, 0 === o6.length ? r4.call(e6) : r4.apply(e6, o6);
  };
  return wrapper.listener = r4, wrapper;
}
function _getMaxListeners(e6) {
  return e6._maxListeners ?? oe3.defaultMaxListeners;
}
function _listeners(e6, t4, r4) {
  let n2 = e6._events[t4];
  return "function" == typeof n2 && (n2 = [n2]), r4 ? n2.map((e7) => e7.listener || e7) : n2;
}
function _checkListener(e6) {
  if ("function" != typeof e6)
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e6);
}
function getDuplex() {
  return Object.assign(ue3.prototype, ie3.prototype), Object.assign(ue3.prototype, ae3.prototype), ue3;
}
function _distinct(e6) {
  const t4 = {};
  for (const [r4, n2] of Object.entries(e6))
    r4 && (t4[r4] = (Array.isArray(n2) ? n2 : [n2]).filter(Boolean));
  return t4;
}
function hasProp(e6, t4) {
  try {
    return t4 in e6;
  } catch {
    return false;
  }
}
function createError(e6) {
  if ("string" == typeof e6)
    return new H3Error(e6);
  if (isError(e6))
    return e6;
  const t4 = new H3Error(e6.message ?? e6.statusMessage ?? "", { cause: e6.cause || e6 });
  if (hasProp(e6, "stack"))
    try {
      Object.defineProperty(t4, "stack", { get: () => e6.stack });
    } catch {
      try {
        t4.stack = e6.stack;
      } catch {
      }
    }
  if (e6.data && (t4.data = e6.data), e6.statusCode ? t4.statusCode = sanitizeStatusCode(e6.statusCode, t4.statusCode) : e6.status && (t4.statusCode = sanitizeStatusCode(e6.status, t4.statusCode)), e6.statusMessage ? t4.statusMessage = e6.statusMessage : e6.statusText && (t4.statusMessage = e6.statusText), t4.statusMessage) {
    const e7 = t4.statusMessage;
    sanitizeStatusMessage(t4.statusMessage) !== e7 && console.warn("[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default.");
  }
  return void 0 !== e6.fatal && (t4.fatal = e6.fatal), void 0 !== e6.unhandled && (t4.unhandled = e6.unhandled), t4;
}
function isError(e6) {
  return true === e6?.constructor?.__h3_error__;
}
function getQuery(e6) {
  return getQuery$1(e6.path || "");
}
function getRequestHeaders(e6) {
  const t4 = {};
  for (const r4 in e6.node.req.headers) {
    const n2 = e6.node.req.headers[r4];
    t4[r4] = Array.isArray(n2) ? n2.filter(Boolean).join(", ") : n2;
  }
  return t4;
}
function readRawBody(e6, t4 = "utf8") {
  !function(e7, t5) {
    if (!function(e8, t6) {
      if ("string" == typeof t6) {
        if (e8.method === t6)
          return true;
      } else if (t6.includes(e8.method))
        return true;
      return false;
    }(e7, t5))
      throw createError({ statusCode: 405, statusMessage: "HTTP method is not allowed." });
  }(e6, de3);
  const r4 = e6._requestBody || e6.web?.request?.body || e6.node.req[he3] || e6.node.req.rawBody || e6.node.req.body;
  if (r4) {
    const e7 = Promise.resolve(r4).then((e8) => f.isBuffer(e8) ? e8 : "function" == typeof e8.pipeTo ? new Promise((t5, r5) => {
      const n3 = [];
      e8.pipeTo(new WritableStream({ write(e9) {
        n3.push(e9);
      }, close() {
        t5(f.concat(n3));
      }, abort(e9) {
        r5(e9);
      } })).catch(r5);
    }) : "function" == typeof e8.pipe ? new Promise((t5, r5) => {
      const n3 = [];
      e8.on("data", (e9) => {
        n3.push(e9);
      }).on("end", () => {
        t5(f.concat(n3));
      }).on("error", r5);
    }) : e8.constructor === Object ? f.from(JSON.stringify(e8)) : f.from(e8));
    return t4 ? e7.then((e8) => e8.toString(t4)) : e7;
  }
  if (!Number.parseInt(e6.node.req.headers["content-length"] || "") && !String(e6.node.req.headers["transfer-encoding"] ?? "").split(",").map((e7) => e7.trim()).filter(Boolean).includes("chunked"))
    return Promise.resolve(void 0);
  const n2 = e6.node.req[he3] = new Promise((t5, r5) => {
    const n3 = [];
    e6.node.req.on("error", (e7) => {
      r5(e7);
    }).on("data", (e7) => {
      n3.push(e7);
    }).on("end", () => {
      t5(f.concat(n3));
    });
  });
  return t4 ? n2.then((e7) => e7.toString(t4)) : n2;
}
function handleCacheHeaders(e6, t4) {
  const r4 = ["public", ...t4.cacheControls || []];
  let n2 = false;
  if (void 0 !== t4.maxAge && r4.push("max-age=" + +t4.maxAge, "s-maxage=" + +t4.maxAge), t4.modifiedTime) {
    const r5 = new Date(t4.modifiedTime), o6 = e6.node.req.headers["if-modified-since"];
    e6.node.res.setHeader("last-modified", r5.toUTCString()), o6 && new Date(o6) >= t4.modifiedTime && (n2 = true);
  }
  if (t4.etag) {
    e6.node.res.setHeader("etag", t4.etag);
    e6.node.req.headers["if-none-match"] === t4.etag && (n2 = true);
  }
  return e6.node.res.setHeader("cache-control", r4.join(", ")), !!n2 && (e6.node.res.statusCode = 304, e6.handled || e6.node.res.end(), true);
}
function sanitizeStatusMessage(e6 = "") {
  return e6.replace(ye3, "");
}
function sanitizeStatusCode(e6, t4 = 200) {
  return e6 ? ("string" == typeof e6 && (e6 = Number.parseInt(e6, 10)), e6 < 100 || e6 > 999 ? t4 : e6) : t4;
}
function splitCookiesString(e6) {
  if (Array.isArray(e6))
    return e6.flatMap((e7) => splitCookiesString(e7));
  if ("string" != typeof e6)
    return [];
  const t4 = [];
  let r4, n2, o6, s2, i3, a3 = 0;
  const skipWhitespace = () => {
    for (; a3 < e6.length && /\s/.test(e6.charAt(a3)); )
      a3 += 1;
    return a3 < e6.length;
  };
  for (; a3 < e6.length; ) {
    for (r4 = a3, i3 = false; skipWhitespace(); )
      if (n2 = e6.charAt(a3), "," === n2) {
        for (o6 = a3, a3 += 1, skipWhitespace(), s2 = a3; a3 < e6.length && (n2 = e6.charAt(a3), "=" !== n2 && ";" !== n2 && "," !== n2); )
          a3 += 1;
        a3 < e6.length && "=" === e6.charAt(a3) ? (i3 = true, a3 = s2, t4.push(e6.slice(r4, o6)), r4 = a3) : a3 = o6 + 1;
      } else
        a3 += 1;
    (!i3 || a3 >= e6.length) && t4.push(e6.slice(r4, e6.length));
  }
  return t4;
}
function send(e6, t4, r4) {
  return r4 && function(e7, t5) {
    t5 && 304 !== e7.node.res.statusCode && !e7.node.res.getHeader("content-type") && e7.node.res.setHeader("content-type", t5);
  }(e6, r4), new Promise((r5) => {
    ge3(() => {
      e6.handled || e6.node.res.end(t4), r5();
    });
  });
}
function setResponseStatus(e6, t4, r4) {
  t4 && (e6.node.res.statusCode = sanitizeStatusCode(t4, e6.node.res.statusCode)), r4 && (e6.node.res.statusMessage = sanitizeStatusMessage(r4));
}
function getResponseStatus(e6) {
  return e6.node.res.statusCode;
}
function getResponseStatusText(e6) {
  return e6.node.res.statusMessage;
}
function setResponseHeaders(e6, t4) {
  for (const [r4, n2] of Object.entries(t4))
    e6.node.res.setHeader(r4, n2);
}
function setResponseHeader(e6, t4, r4) {
  e6.node.res.setHeader(t4, r4);
}
function sendStream(e6, t4) {
  if (!t4 || "object" != typeof t4)
    throw new Error("[h3] Invalid stream provided.");
  if (e6.node.res._data = t4, !e6.node.res.socket)
    return e6._handled = true, Promise.resolve();
  if (hasProp(t4, "pipeTo") && "function" == typeof t4.pipeTo)
    return t4.pipeTo(new WritableStream({ write(t5) {
      e6.node.res.write(t5);
    } })).then(() => {
      e6.node.res.end();
    });
  if (hasProp(t4, "pipe") && "function" == typeof t4.pipe)
    return new Promise((r4, n2) => {
      t4.pipe(e6.node.res), t4.on && (t4.on("end", () => {
        e6.node.res.end(), r4();
      }), t4.on("error", (e7) => {
        n2(e7);
      })), e6.node.res.on("close", () => {
        t4.abort && t4.abort();
      });
    });
  throw new Error("[h3] Invalid or incompatible stream provided.");
}
function sendWebResponse(e6, t4) {
  for (const [r4, n2] of t4.headers)
    "set-cookie" === r4 ? e6.node.res.appendHeader(r4, splitCookiesString(n2)) : e6.node.res.setHeader(r4, n2);
  if (t4.status && (e6.node.res.statusCode = sanitizeStatusCode(t4.status, e6.node.res.statusCode)), t4.statusText && (e6.node.res.statusMessage = sanitizeStatusMessage(t4.statusText)), t4.redirected && e6.node.res.setHeader("location", t4.url), t4.body)
    return sendStream(e6, t4.body);
  e6.node.res.end();
}
async function proxyRequest(e6, t4, r4 = {}) {
  let n2, o6;
  we3.has(e6.method) && (r4.streamRequest ? (n2 = function(e7) {
    if (!de3.includes(e7.method))
      return;
    const t5 = e7.web?.request?.body || e7._requestBody;
    return t5 || (he3 in e7.node.req || "rawBody" in e7.node.req || "body" in e7.node.req || "__unenv__" in e7.node.req ? new ReadableStream({ async start(t6) {
      const r5 = await readRawBody(e7, false);
      r5 && t6.enqueue(r5), t6.close();
    } }) : new ReadableStream({ start: (t6) => {
      e7.node.req.on("data", (e8) => {
        t6.enqueue(e8);
      }), e7.node.req.on("end", () => {
        t6.close();
      }), e7.node.req.on("error", (e8) => {
        t6.error(e8);
      });
    } }));
  }(e6), o6 = "half") : n2 = await readRawBody(e6, false).catch(() => {
  }));
  const s2 = r4.fetchOptions?.method || e6.method, i3 = function(e7, ...t5) {
    const r5 = t5.filter(Boolean);
    if (0 === r5.length)
      return e7;
    const n3 = new Headers(e7);
    for (const e8 of r5)
      for (const [t6, r6] of Object.entries(e8))
        void 0 !== r6 && n3.set(t6, r6);
    return n3;
  }(getProxyRequestHeaders(e6), r4.fetchOptions?.headers, r4.headers);
  return async function(e7, t5, r5 = {}) {
    let n3;
    try {
      n3 = await _getFetch(r5.fetch)(t5, { headers: r5.headers, ignoreResponseError: true, ...r5.fetchOptions });
    } catch (e8) {
      throw createError({ status: 502, statusMessage: "Bad Gateway", cause: e8 });
    }
    e7.node.res.statusCode = sanitizeStatusCode(n3.status, e7.node.res.statusCode), e7.node.res.statusMessage = sanitizeStatusMessage(n3.statusText);
    const o7 = [];
    for (const [t6, r6] of n3.headers.entries())
      "content-encoding" !== t6 && "content-length" !== t6 && ("set-cookie" !== t6 ? e7.node.res.setHeader(t6, r6) : o7.push(...splitCookiesString(r6)));
    o7.length > 0 && e7.node.res.setHeader("set-cookie", o7.map((e8) => (r5.cookieDomainRewrite && (e8 = rewriteCookieProperty(e8, r5.cookieDomainRewrite, "domain")), r5.cookiePathRewrite && (e8 = rewriteCookieProperty(e8, r5.cookiePathRewrite, "path")), e8)));
    r5.onResponse && await r5.onResponse(e7, n3);
    if (void 0 !== n3._data)
      return n3._data;
    if (e7.handled)
      return;
    if (false === r5.sendStream) {
      const t6 = new Uint8Array(await n3.arrayBuffer());
      return e7.node.res.end(t6);
    }
    if (n3.body)
      for await (const t6 of n3.body)
        e7.node.res.write(t6);
    return e7.node.res.end();
  }(e6, t4, { ...r4, fetchOptions: { method: s2, body: n2, duplex: o6, ...r4.fetchOptions, headers: i3 } });
}
function getProxyRequestHeaders(e6) {
  const t4 = /* @__PURE__ */ Object.create(null), r4 = getRequestHeaders(e6);
  for (const e7 in r4)
    be3.has(e7) || (t4[e7] = r4[e7]);
  return t4;
}
function fetchWithEvent(e6, t4, r4, n2) {
  return _getFetch(n2?.fetch)(t4, { ...r4, context: r4?.context || e6.context, headers: { ...getProxyRequestHeaders(e6), ...r4?.headers } });
}
function _getFetch(e6) {
  if (e6)
    return e6;
  if (globalThis.fetch)
    return globalThis.fetch;
  throw new Error("fetch is not available. Try importing `node-fetch-native/polyfill` for Node.js.");
}
function rewriteCookieProperty(e6, t4, r4) {
  const n2 = "string" == typeof t4 ? { "*": t4 } : t4;
  return e6.replace(new RegExp(`(;\\s*${r4}=)([^;]+)`, "gi"), (e7, t5, r5) => {
    let o6;
    if (r5 in n2)
      o6 = n2[r5];
    else {
      if (!("*" in n2))
        return e7;
      o6 = n2["*"];
    }
    return o6 ? t5 + o6 : "";
  });
}
function isEvent(e6) {
  return hasProp(e6, "__is_event__");
}
function createEvent(e6, t4) {
  return new H3Event(e6, t4);
}
function defineEventHandler(e6) {
  if ("function" == typeof e6)
    return e6.__is_handler__ = true, e6;
  const t4 = { onRequest: _normalizeArray(e6.onRequest), onBeforeResponse: _normalizeArray(e6.onBeforeResponse) }, _handler = (r4) => async function(e7, t5, r5) {
    if (r5.onRequest) {
      for (const t6 of r5.onRequest)
        if (await t6(e7), e7.handled)
          return;
    }
    const n2 = await t5(e7), o6 = { body: n2 };
    if (r5.onBeforeResponse)
      for (const t6 of r5.onBeforeResponse)
        await t6(e7, o6);
    return o6.body;
  }(r4, e6.handler, t4);
  return _handler.__is_handler__ = true, _handler.__resolve__ = e6.handler.__resolve__, _handler.__websocket__ = e6.websocket, _handler;
}
function _normalizeArray(e6) {
  return e6 ? Array.isArray(e6) ? e6 : [e6] : void 0;
}
function isEventHandler(e6) {
  return hasProp(e6, "__is_handler__");
}
function toEventHandler(e6, t4, r4) {
  return isEventHandler(e6) || console.warn("[h3] Implicit event handler conversion is deprecated. Use `eventHandler()` or `fromNodeMiddleware()` to define event handlers.", r4 && "/" !== r4 ? `
     Route: ${r4}` : "", `
     Handler: ${e6}`), e6;
}
function createApp2(e6 = {}) {
  const t4 = [], r4 = function(e7, t5) {
    const r5 = t5.debug ? 2 : void 0;
    return ve2(async (n3) => {
      n3.node.req.originalUrl = n3.node.req.originalUrl || n3.node.req.url || "/";
      const o7 = n3._path || n3.node.req.url || "/";
      let s3;
      t5.onRequest && await t5.onRequest(n3);
      for (const i3 of e7) {
        if (i3.route.length > 1) {
          if (!o7.startsWith(i3.route))
            continue;
          s3 = o7.slice(i3.route.length) || "/";
        } else
          s3 = o7;
        if (i3.match && !i3.match(s3, n3))
          continue;
        n3._path = s3, n3.node.req.url = s3;
        const e8 = await i3.handler(n3), a3 = void 0 === e8 ? void 0 : await e8;
        if (void 0 !== a3) {
          const e9 = { body: a3 };
          return t5.onBeforeResponse && (n3._onBeforeResponseCalled = true, await t5.onBeforeResponse(n3, e9)), await handleHandlerResponse(n3, e9.body, r5), void (t5.onAfterResponse && (n3._onAfterResponseCalled = true, await t5.onAfterResponse(n3, e9)));
        }
        if (n3.handled)
          return void (t5.onAfterResponse && (n3._onAfterResponseCalled = true, await t5.onAfterResponse(n3, void 0)));
      }
      if (!n3.handled)
        throw createError({ statusCode: 404, statusMessage: `Cannot find any path matching ${n3.path || "/"}.` });
      t5.onAfterResponse && (n3._onAfterResponseCalled = true, await t5.onAfterResponse(n3, void 0));
    });
  }(t4, e6), n2 = function(e7) {
    return async (t5) => {
      let r5;
      for (const n3 of e7) {
        if ("/" === n3.route && !n3.handler.__resolve__)
          continue;
        if (!t5.startsWith(n3.route))
          continue;
        if (r5 = t5.slice(n3.route.length) || "/", n3.match && !n3.match(r5, void 0))
          continue;
        let e8 = { route: n3.route, handler: n3.handler };
        if (e8.handler.__resolve__) {
          const t6 = await e8.handler.__resolve__(r5);
          if (!t6)
            continue;
          e8 = { ...e8, ...t6, route: joinURL(e8.route || "/", t6.route || "/") };
        }
        return e8;
      }
    };
  }(t4);
  r4.__resolve__ = n2;
  const o6 = function(e7) {
    let t5;
    return () => (t5 || (t5 = e7()), t5);
  }(() => {
    return t5 = n2, { ...e6.websocket, async resolve(e7) {
      const { pathname: r5 } = parseURL(e7.url || "/"), n3 = await t5(r5);
      return n3?.handler?.__websocket__ || {};
    } };
    var t5;
  }), s2 = { use: (e7, t5, r5) => use(s2, e7, t5, r5), resolve: n2, handler: r4, stack: t4, options: e6, get websocket() {
    return o6();
  } };
  return s2;
}
function use(e6, t4, r4, n2) {
  if (Array.isArray(t4))
    for (const o6 of t4)
      use(e6, o6, r4, n2);
  else if (Array.isArray(r4))
    for (const o6 of r4)
      use(e6, t4, o6, n2);
  else
    "string" == typeof t4 ? e6.stack.push(normalizeLayer({ ...n2, route: t4, handler: r4 })) : "function" == typeof t4 ? e6.stack.push(normalizeLayer({ ...r4, handler: t4 })) : e6.stack.push(normalizeLayer({ ...t4 }));
  return e6;
}
function normalizeLayer(e6) {
  let t4 = e6.handler;
  return t4.handler && (t4 = t4.handler), e6.lazy ? t4 = lazyEventHandler(t4) : isEventHandler(t4) || (t4 = toEventHandler(t4, 0, e6.route)), { route: withoutTrailingSlash(e6.route), match: e6.match, handler: t4 };
}
function handleHandlerResponse(e6, t4, r4) {
  if (null === t4)
    return function(e7, t5) {
      if (e7.handled)
        return;
      t5 || 200 === e7.node.res.statusCode || (t5 = e7.node.res.statusCode);
      const r5 = sanitizeStatusCode(t5, 204);
      204 === r5 && e7.node.res.removeHeader("content-length"), e7.node.res.writeHead(r5), e7.node.res.end();
    }(e6);
  if (t4) {
    if (n2 = t4, "undefined" != typeof Response && n2 instanceof Response)
      return sendWebResponse(e6, t4);
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
    }(t4))
      return sendStream(e6, t4);
    if (t4.buffer)
      return send(e6, t4);
    if (t4.arrayBuffer && "function" == typeof t4.arrayBuffer)
      return t4.arrayBuffer().then((r5) => send(e6, f.from(r5), t4.type));
    if (t4 instanceof Error)
      throw createError(t4);
    if ("function" == typeof t4.end)
      return true;
  }
  var n2;
  const o6 = typeof t4;
  if ("string" === o6)
    return send(e6, t4, pe3.html);
  if ("object" === o6 || "boolean" === o6 || "number" === o6)
    return send(e6, JSON.stringify(t4, void 0, r4), pe3.json);
  if ("bigint" === o6)
    return send(e6, t4.toString(), pe3.json);
  throw createError({ statusCode: 500, statusMessage: `[h3] Cannot send ${o6} as response.` });
}
function toNodeListener(e6) {
  return async function(t4, r4) {
    const n2 = createEvent(t4, r4);
    try {
      await e6.handler(n2);
    } catch (t5) {
      const r5 = createError(t5);
      if (isError(t5) || (r5.unhandled = true), setResponseStatus(n2, r5.statusCode, r5.statusMessage), e6.options.onError && await e6.options.onError(r5, n2), n2.handled)
        return;
      (r5.unhandled || r5.fatal) && console.error("[h3]", r5.fatal ? "[fatal]" : "[unhandled]", r5), e6.options.onBeforeResponse && !n2._onBeforeResponseCalled && await e6.options.onBeforeResponse(n2, { body: r5 }), await function(e7, t6, r6) {
        if (e7.handled)
          return;
        const n3 = isError(t6) ? t6 : createError(t6), o6 = { statusCode: n3.statusCode, statusMessage: n3.statusMessage, stack: [], data: n3.data };
        if (r6 && (o6.stack = (n3.stack || "").split("\n").map((e8) => e8.trim())), e7.handled)
          return;
        setResponseStatus(e7, Number.parseInt(n3.statusCode), n3.statusMessage), e7.node.res.setHeader("content-type", pe3.json), e7.node.res.end(JSON.stringify(o6, void 0, 2));
      }(n2, r5, !!e6.options.debug), e6.options.onAfterResponse && !n2._onAfterResponseCalled && await e6.options.onAfterResponse(n2, { body: r5 });
    }
  };
}
function isPayloadMethod(e6 = "GET") {
  return Ee2.has(e6.toUpperCase());
}
function mergeFetchOptions(e6, t4, r4 = globalThis.Headers) {
  const n2 = { ...t4, ...e6 };
  if (t4?.params && e6?.params && (n2.params = { ...t4?.params, ...e6?.params }), t4?.query && e6?.query && (n2.query = { ...t4?.query, ...e6?.query }), t4?.headers && e6?.headers) {
    n2.headers = new r4(t4?.headers || {});
    for (const [t5, o6] of new r4(e6?.headers || {}))
      n2.headers.set(t5, o6);
  }
  return n2;
}
function createFetch$1(e6 = {}) {
  const { fetch: t4 = globalThis.fetch, Headers: r4 = globalThis.Headers, AbortController: n2 = globalThis.AbortController } = e6;
  async function onError(e7) {
    const t5 = e7.error && "AbortError" === e7.error.name && !e7.options.timeout || false;
    if (false !== e7.options.retry && !t5) {
      let t6;
      t6 = "number" == typeof e7.options.retry ? e7.options.retry : isPayloadMethod(e7.options.method) ? 0 : 1;
      const r6 = e7.response && e7.response.status || 500;
      if (t6 > 0 && (Array.isArray(e7.options.retryStatusCodes) ? e7.options.retryStatusCodes.includes(r6) : xe3.has(r6))) {
        const r7 = e7.options.retryDelay || 0;
        return r7 > 0 && await new Promise((e8) => setTimeout(e8, r7)), $fetchRaw(e7.request, { ...e7.options, retry: t6 - 1 });
      }
    }
    const r5 = function(e8) {
      const t6 = e8.error?.message || e8.error?.toString() || "", r6 = e8.request?.method || e8.options?.method || "GET", n3 = e8.request?.url || String(e8.request) || "/", o6 = `[${r6}] ${JSON.stringify(n3)}`, s2 = e8.response ? `${e8.response.status} ${e8.response.statusText}` : "<no response>", i3 = new FetchError(`${o6}: ${s2}${t6 ? ` ${t6}` : ""}`, e8.error ? { cause: e8.error } : void 0);
      for (const t7 of ["request", "options", "response"])
        Object.defineProperty(i3, t7, { get: () => e8[t7] });
      for (const [t7, r7] of [["data", "_data"], ["status", "status"], ["statusCode", "status"], ["statusText", "statusText"], ["statusMessage", "statusText"]])
        Object.defineProperty(i3, t7, { get: () => e8.response && e8.response[r7] });
      return i3;
    }(e7);
    throw Error.captureStackTrace && Error.captureStackTrace(r5, $fetchRaw), r5;
  }
  const $fetchRaw = async function(o6, s2 = {}) {
    const i3 = { request: o6, options: mergeFetchOptions(s2, e6.defaults, r4), response: void 0, error: void 0 };
    let a3;
    if (i3.options.method = i3.options.method?.toUpperCase(), i3.options.onRequest && await i3.options.onRequest(i3), "string" == typeof i3.request && (i3.options.baseURL && (i3.request = function(e7, t5) {
      if (isEmptyURL(t5) || hasProtocol(e7))
        return e7;
      const r5 = withoutTrailingSlash(t5);
      return e7.startsWith(r5) ? e7 : joinURL(r5, e7);
    }(i3.request, i3.options.baseURL)), (i3.options.query || i3.options.params) && (i3.request = withQuery(i3.request, { ...i3.options.params, ...i3.options.query }))), i3.options.body && isPayloadMethod(i3.options.method) && (!function(e7) {
      if (void 0 === e7)
        return false;
      const t5 = typeof e7;
      return "string" === t5 || "number" === t5 || "boolean" === t5 || null === t5 || "object" === t5 && (!!Array.isArray(e7) || !e7.buffer && (e7.constructor && "Object" === e7.constructor.name || "function" == typeof e7.toJSON));
    }(i3.options.body) ? ("pipeTo" in i3.options.body && "function" == typeof i3.options.body.pipeTo || "function" == typeof i3.options.body.pipe) && ("duplex" in i3.options || (i3.options.duplex = "half")) : (i3.options.body = "string" == typeof i3.options.body ? i3.options.body : JSON.stringify(i3.options.body), i3.options.headers = new r4(i3.options.headers || {}), i3.options.headers.has("content-type") || i3.options.headers.set("content-type", "application/json"), i3.options.headers.has("accept") || i3.options.headers.set("accept", "application/json"))), !i3.options.signal && i3.options.timeout) {
      const e7 = new n2();
      a3 = setTimeout(() => e7.abort(), i3.options.timeout), i3.options.signal = e7.signal;
    }
    try {
      i3.response = await t4(i3.request, i3.options);
    } catch (e7) {
      return i3.error = e7, i3.options.onRequestError && await i3.options.onRequestError(i3), await onError(i3);
    } finally {
      a3 && clearTimeout(a3);
    }
    if (i3.response.body && !ke3.has(i3.response.status) && "HEAD" !== i3.options.method) {
      const e7 = (i3.options.parseResponse ? "json" : i3.options.responseType) || function(e8 = "") {
        if (!e8)
          return "json";
        const t5 = e8.split(";").shift() || "";
        return Ie2.test(t5) ? "json" : Re3.has(t5) || t5.startsWith("text/") ? "text" : "blob";
      }(i3.response.headers.get("content-type") || "");
      switch (e7) {
        case "json": {
          const e8 = await i3.response.text(), t5 = i3.options.parseResponse || destr;
          i3.response._data = t5(e8);
          break;
        }
        case "stream":
          i3.response._data = i3.response.body;
          break;
        default:
          i3.response._data = await i3.response[e7]();
      }
    }
    return i3.options.onResponse && await i3.options.onResponse(i3), !i3.options.ignoreResponseError && i3.response.status >= 400 && i3.response.status < 600 ? (i3.options.onResponseError && await i3.options.onResponseError(i3), await onError(i3)) : i3.response;
  }, $fetch = async function(e7, t5) {
    return (await $fetchRaw(e7, t5))._data;
  };
  return $fetch.raw = $fetchRaw, $fetch.native = (...e7) => t4(...e7), $fetch.create = (t5 = {}) => createFetch$1({ ...e6, defaults: { ...e6.defaults, ...t5 } }), $fetch;
}
function flatHooks(e6, t4 = {}, r4) {
  for (const n2 in e6) {
    const o6 = e6[n2], s2 = r4 ? `${r4}:${n2}` : n2;
    "object" == typeof o6 && null !== o6 ? flatHooks(o6, t4, s2) : "function" == typeof o6 && (t4[s2] = o6);
  }
  return t4;
}
function serialTaskCaller(e6, t4) {
  const r4 = t4.shift(), n2 = Le2(r4);
  return e6.reduce((e7, r5) => e7.then(() => n2.run(() => r5(...t4))), Promise.resolve());
}
function parallelTaskCaller(e6, t4) {
  const r4 = t4.shift(), n2 = Le2(r4);
  return Promise.all(e6.map((e7) => n2.run(() => e7(...t4))));
}
function callEachWith(e6, t4) {
  for (const r4 of [...e6])
    r4(t4);
}
function createHooks() {
  return new Hookable();
}
function klona(e6) {
  if ("object" != typeof e6)
    return e6;
  var t4, r4, n2 = Object.prototype.toString.call(e6);
  if ("[object Object]" === n2) {
    if (e6.constructor !== Object && "function" == typeof e6.constructor)
      for (t4 in r4 = new e6.constructor(), e6)
        e6.hasOwnProperty(t4) && r4[t4] !== e6[t4] && (r4[t4] = klona(e6[t4]));
    else
      for (t4 in r4 = {}, e6)
        "__proto__" === t4 ? Object.defineProperty(r4, t4, { value: klona(e6[t4]), configurable: true, enumerable: true, writable: true }) : r4[t4] = klona(e6[t4]);
    return r4;
  }
  if ("[object Array]" === n2) {
    for (t4 = e6.length, r4 = Array(t4); t4--; )
      r4[t4] = klona(e6[t4]);
    return r4;
  }
  return "[object Set]" === n2 ? (r4 = /* @__PURE__ */ new Set(), e6.forEach(function(e7) {
    r4.add(klona(e7));
  }), r4) : "[object Map]" === n2 ? (r4 = /* @__PURE__ */ new Map(), e6.forEach(function(e7, t5) {
    r4.set(klona(t5), klona(e7));
  }), r4) : "[object Date]" === n2 ? /* @__PURE__ */ new Date(+e6) : "[object RegExp]" === n2 ? ((r4 = new RegExp(e6.source, e6.flags)).lastIndex = e6.lastIndex, r4) : "[object DataView]" === n2 ? new e6.constructor(klona(e6.buffer)) : "[object ArrayBuffer]" === n2 ? e6.slice(0) : "Array]" === n2.slice(-6) ? new e6.constructor(e6) : e6;
}
function isUppercase(e6 = "") {
  if (!Ne2.test(e6))
    return e6 !== e6.toLowerCase();
}
function kebabCase(e6, t4) {
  return e6 ? (Array.isArray(e6) ? e6 : function(e7) {
    const t5 = Me2, r4 = [];
    if (!e7 || "string" != typeof e7)
      return r4;
    let n2, o6, s2 = "";
    for (const i3 of e7) {
      const e8 = t5.includes(i3);
      if (true === e8) {
        r4.push(s2), s2 = "", n2 = void 0;
        continue;
      }
      const a3 = isUppercase(i3);
      if (false === o6) {
        if (false === n2 && true === a3) {
          r4.push(s2), s2 = i3, n2 = a3;
          continue;
        }
        if (true === n2 && false === a3 && s2.length > 1) {
          const e9 = s2.at(-1);
          r4.push(s2.slice(0, Math.max(0, s2.length - 1))), s2 = e9 + i3, n2 = a3;
          continue;
        }
      }
      s2 += i3, n2 = a3, o6 = e8;
    }
    return r4.push(s2), r4;
  }(e6)).map((e7) => e7.toLowerCase()).join(t4) : "";
}
function getEnv(e6, t4) {
  const r4 = (n2 = e6, kebabCase(n2 || "", "_")).toUpperCase();
  var n2;
  return destr(B2.env[t4.prefix + r4] ?? B2.env[t4.altPrefix + r4]);
}
function _isObject(e6) {
  return "object" == typeof e6 && !Array.isArray(e6);
}
function applyEnv(e6, t4, r4 = "") {
  for (const n2 in e6) {
    const o6 = r4 ? `${r4}_${n2}` : n2, s2 = getEnv(o6, t4);
    _isObject(e6[n2]) ? _isObject(s2) ? (e6[n2] = { ...e6[n2], ...s2 }, applyEnv(e6[n2], t4, o6)) : void 0 === s2 ? applyEnv(e6[n2], t4, o6) : e6[n2] = s2 ?? e6[n2] : e6[n2] = s2 ?? e6[n2], t4.envExpansion && "string" == typeof e6[n2] && (e6[n2] = e6[n2].replace(Ue2, (e7, t5) => B2.env[t5] || e7));
  }
  return e6;
}
function useRuntimeConfig2(e6) {
  if (!e6)
    return ze2;
  if (e6.context.nitro.runtimeConfig)
    return e6.context.nitro.runtimeConfig;
  const t4 = klona(He2);
  return applyEnv(t4, qe2), e6.context.nitro.runtimeConfig = t4, t4;
}
function _deepFreeze(e6) {
  const t4 = Object.getOwnPropertyNames(e6);
  for (const r4 of t4) {
    const t5 = e6[r4];
    t5 && "object" == typeof t5 && _deepFreeze(t5);
  }
  return Object.freeze(e6);
}
function asyncCall(e6, ...t4) {
  try {
    return (r4 = e6(...t4)) && "function" == typeof r4.then ? r4 : Promise.resolve(r4);
  } catch (e7) {
    return Promise.reject(e7);
  }
  var r4;
}
function stringify2(e6) {
  if (function(e7) {
    const t4 = typeof e7;
    return null === e7 || "object" !== t4 && "function" !== t4;
  }(e6))
    return String(e6);
  if (function(e7) {
    const t4 = Object.getPrototypeOf(e7);
    return !t4 || t4.isPrototypeOf(Object);
  }(e6) || Array.isArray(e6))
    return JSON.stringify(e6);
  if ("function" == typeof e6.toJSON)
    return stringify2(e6.toJSON());
  throw new Error("[unstorage] Cannot stringify value!");
}
function checkBufferSupport() {
  if (void 0 === typeof f)
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
function watch2(e6, t4, r4) {
  return e6.watch ? e6.watch((e7, n2) => t4(e7, r4 + n2)) : () => {
  };
}
async function dispose(e6) {
  "function" == typeof e6.dispose && await asyncCall(e6.dispose);
}
function useStorage(e6 = "") {
  return e6 ? function(e7, t4) {
    if (!(t4 = normalizeBaseKey(t4)))
      return e7;
    const r4 = { ...e7 };
    for (const n2 of De2)
      r4[n2] = (r5 = "", ...o6) => e7[n2](t4 + r5, ...o6);
    return r4.getKeys = (r5 = "", ...n2) => e7.getKeys(t4 + r5, ...n2).then((e8) => e8.map((e9) => e9.slice(t4.length))), r4;
  }(Qe2, e6) : Qe2;
}
function getKey(...e6) {
  return e6.length > 0 ? hash(e6, {}) : "";
}
function escapeKey(e6) {
  return String(e6).replace(/\W/g, "");
}
function cloneWithProxy(e6, t4) {
  return new Proxy(e6, { get: (e7, r4, n2) => r4 in t4 ? t4[r4] : Reflect.get(e7, r4, n2), set: (e7, r4, n2, o6) => r4 in t4 ? (t4[r4] = n2, true) : Reflect.set(e7, r4, n2, o6) });
}
function createRouteRulesHandler(e6) {
  return ve2((t4) => {
    const r4 = getRouteRules(t4);
    if (r4.headers && me3(t4, r4.headers), r4.redirect) {
      let e7 = r4.redirect.to;
      if (e7.endsWith("/**")) {
        let n2 = t4.path;
        const o6 = r4.redirect._redirectStripBase;
        o6 && (n2 = withoutBase(n2, o6)), e7 = joinURL(e7.slice(0, -3), n2);
      } else if (t4.path.includes("?")) {
        e7 = withQuery(e7, getQuery$1(t4.path));
      }
      return function(e8, t5, r5 = 302) {
        return e8.node.res.statusCode = sanitizeStatusCode(r5, e8.node.res.statusCode), e8.node.res.setHeader("location", t5), send(e8, `<!DOCTYPE html><html><head><meta http-equiv="refresh" content="0; url=${t5.replace(/"/g, "%22")}"></head></html>`, pe3.html);
      }(t4, e7, r4.redirect.statusCode);
    }
    if (r4.proxy) {
      let n2 = r4.proxy.to;
      if (n2.endsWith("/**")) {
        let e7 = t4.path;
        const o6 = r4.proxy._proxyStripBase;
        o6 && (e7 = withoutBase(e7, o6)), n2 = joinURL(n2.slice(0, -3), e7);
      } else if (t4.path.includes("?")) {
        n2 = withQuery(n2, getQuery$1(t4.path));
      }
      return proxyRequest(t4, n2, { fetch: e6.localFetch, ...r4.proxy });
    }
  });
}
function getRouteRules(e6) {
  return e6.context._nitro = e6.context._nitro || {}, e6.context._nitro.routeRules || (e6.context._nitro.routeRules = getRouteRulesForPath(withoutBase(e6.path.split("?")[0], useRuntimeConfig2().app.baseURL))), e6.context._nitro.routeRules;
}
function getRouteRulesForPath(e6) {
  return te({}, ...Ge2.matchAll(e6).reverse());
}
function hasReqHeader(e6, t4, r4) {
  const n2 = function(e7, t5) {
    return getRequestHeaders(e7)[t5.toLowerCase()];
  }(e6, t4);
  return n2 && "string" == typeof n2 && n2.toLowerCase().includes(r4);
}
function joinHeaders(e6) {
  return Array.isArray(e6) ? e6.join(", ") : String(e6);
}
function normalizeCookieHeader(e6 = "") {
  return splitCookiesString(joinHeaders(e6));
}
function normalizeCookieHeaders(e6) {
  const t4 = new Headers();
  for (const [r4, n2] of e6)
    if ("set-cookie" === r4)
      for (const e7 of normalizeCookieHeader(n2))
        t4.append("set-cookie", e7);
    else
      t4.set(r4, joinHeaders(n2));
  return t4;
}
var e5, t3, r3, n, o5, s, i2, a2, u2, c, f, l, h2, d, p, y2, g, m2, w2, b2, _getEnv, _2, v2, B2, R2, I2, x2, k2, A3, S2, T2, $2, C2, O2, j3, L2, N2, M2, U2, P2, H2, q3, z3, W2, WordArray, D2, F2, K2, Q2, BufferedBlockAlgorithm, Hasher, V2, G2, J2, SHA256, Y2, Z3, X2, ee3, te, re3, ne3, oe3, se3, _Readable, ie3, ae3, ue3, ce3, fe3, Socket, IncomingMessage, ServerResponse, le3, __publicField$2, H3Error, he3, de3, pe3, ye3, ge3, me3, we3, be3, _e3, __publicField, H3Event, ve2, lazyEventHandler, Be2, FetchError, Ee2, Re3, Ie2, xe3, ke3, Ae3, Se2, Te2, $e2, Ce, Oe2, je2, Le2, Hookable, Ne2, Me2, Ue2, Pe3, He2, qe2, ze2, We2, De2, memory, Fe2, normalizeKey2, Ke2, Qe2, Ve2, cachedFunction, cachedEventHandler, Ge2, Je2, errorHandler, _lazy_lFs6nj, Ye2, Ze2, useNitroApp, Xe2, et2, tt2, rt2;
var init_runtime = __esm({
  ".wrangler/tmp/pages-brm1ok/chunks/runtime.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    e5 = [];
    t3 = [];
    r3 = "undefined" == typeof Uint8Array ? Array : Uint8Array;
    n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    for (let r4 = 0, o6 = 64; r4 < o6; ++r4)
      e5[r4] = n[r4], t3[n.charCodeAt(r4)] = r4;
    t3["-".charCodeAt(0)] = 62, t3["_".charCodeAt(0)] = 63;
    o5 = "function" == typeof Symbol && "function" == typeof Symbol.for ? Symbol.for("nodejs.util.inspect.custom") : null;
    s = 2147483647;
    Buffer$1.TYPED_ARRAY_SUPPORT = function() {
      try {
        const e6 = new Uint8Array(1), t4 = { foo: function() {
          return 42;
        } };
        return Object.setPrototypeOf(t4, Uint8Array.prototype), Object.setPrototypeOf(e6, t4), 42 === e6.foo();
      } catch {
        return false;
      }
    }(), Buffer$1.TYPED_ARRAY_SUPPORT || "undefined" == typeof console || "function" != typeof console.error || console.error("This environment lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."), Object.defineProperty(Buffer$1.prototype, "parent", { enumerable: true, get: function() {
      if (Buffer$1.isBuffer(this))
        return this.buffer;
    } }), Object.defineProperty(Buffer$1.prototype, "offset", { enumerable: true, get: function() {
      if (Buffer$1.isBuffer(this))
        return this.byteOffset;
    } }), Buffer$1.poolSize = 8192, Buffer$1.from = function(e6, t4, r4) {
      return from(e6, t4, r4);
    }, Object.setPrototypeOf(Buffer$1.prototype, Uint8Array.prototype), Object.setPrototypeOf(Buffer$1, Uint8Array), Buffer$1.alloc = function(e6, t4, r4) {
      return function(e7, t5, r5) {
        return assertSize(e7), e7 <= 0 ? createBuffer2(e7) : void 0 !== t5 ? "string" == typeof r5 ? createBuffer2(e7).fill(t5, r5) : createBuffer2(e7).fill(t5) : createBuffer2(e7);
      }(e6, t4, r4);
    }, Buffer$1.allocUnsafe = function(e6) {
      return allocUnsafe(e6);
    }, Buffer$1.allocUnsafeSlow = function(e6) {
      return allocUnsafe(e6);
    }, Buffer$1.isBuffer = function(e6) {
      return null != e6 && true === e6._isBuffer && e6 !== Buffer$1.prototype;
    }, Buffer$1.compare = function(e6, t4) {
      if (isInstance(e6, Uint8Array) && (e6 = Buffer$1.from(e6, e6.offset, e6.byteLength)), isInstance(t4, Uint8Array) && (t4 = Buffer$1.from(t4, t4.offset, t4.byteLength)), !Buffer$1.isBuffer(e6) || !Buffer$1.isBuffer(t4))
        throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
      if (e6 === t4)
        return 0;
      let r4 = e6.length, n2 = t4.length;
      for (let o6 = 0, s2 = Math.min(r4, n2); o6 < s2; ++o6)
        if (e6[o6] !== t4[o6]) {
          r4 = e6[o6], n2 = t4[o6];
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
    }, Buffer$1.concat = function(e6, t4) {
      if (!Array.isArray(e6))
        throw new TypeError('"list" argument must be an Array of Buffers');
      if (0 === e6.length)
        return Buffer$1.alloc(0);
      let r4;
      if (void 0 === t4)
        for (t4 = 0, r4 = 0; r4 < e6.length; ++r4)
          t4 += e6[r4].length;
      const n2 = Buffer$1.allocUnsafe(t4);
      let o6 = 0;
      for (r4 = 0; r4 < e6.length; ++r4) {
        let t5 = e6[r4];
        if (isInstance(t5, Uint8Array))
          o6 + t5.length > n2.length ? (Buffer$1.isBuffer(t5) || (t5 = Buffer$1.from(t5.buffer, t5.byteOffset, t5.byteLength)), t5.copy(n2, o6)) : Uint8Array.prototype.set.call(n2, t5, o6);
        else {
          if (!Buffer$1.isBuffer(t5))
            throw new TypeError('"list" argument must be an Array of Buffers');
          t5.copy(n2, o6);
        }
        o6 += t5.length;
      }
      return n2;
    }, Buffer$1.byteLength = byteLength, Buffer$1.prototype._isBuffer = true, Buffer$1.prototype.swap16 = function() {
      const e6 = this.length;
      if (e6 % 2 != 0)
        throw new RangeError("Buffer size must be a multiple of 16-bits");
      for (let t4 = 0; t4 < e6; t4 += 2)
        swap(this, t4, t4 + 1);
      return this;
    }, Buffer$1.prototype.swap32 = function() {
      const e6 = this.length;
      if (e6 % 4 != 0)
        throw new RangeError("Buffer size must be a multiple of 32-bits");
      for (let t4 = 0; t4 < e6; t4 += 4)
        swap(this, t4, t4 + 3), swap(this, t4 + 1, t4 + 2);
      return this;
    }, Buffer$1.prototype.swap64 = function() {
      const e6 = this.length;
      if (e6 % 8 != 0)
        throw new RangeError("Buffer size must be a multiple of 64-bits");
      for (let t4 = 0; t4 < e6; t4 += 8)
        swap(this, t4, t4 + 7), swap(this, t4 + 1, t4 + 6), swap(this, t4 + 2, t4 + 5), swap(this, t4 + 3, t4 + 4);
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
    }, o5 && (Buffer$1.prototype[o5] = Buffer$1.prototype.inspect), Buffer$1.prototype.compare = function(e6, t4, r4, n2, o6) {
      if (isInstance(e6, Uint8Array) && (e6 = Buffer$1.from(e6, e6.offset, e6.byteLength)), !Buffer$1.isBuffer(e6))
        throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof e6);
      if (void 0 === t4 && (t4 = 0), void 0 === r4 && (r4 = e6 ? e6.length : 0), void 0 === n2 && (n2 = 0), void 0 === o6 && (o6 = this.length), t4 < 0 || r4 > e6.length || n2 < 0 || o6 > this.length)
        throw new RangeError("out of range index");
      if (n2 >= o6 && t4 >= r4)
        return 0;
      if (n2 >= o6)
        return -1;
      if (t4 >= r4)
        return 1;
      if (this === e6)
        return 0;
      let s2 = (o6 >>>= 0) - (n2 >>>= 0), i3 = (r4 >>>= 0) - (t4 >>>= 0);
      const a3 = Math.min(s2, i3), u3 = this.slice(n2, o6), c2 = e6.slice(t4, r4);
      for (let e7 = 0; e7 < a3; ++e7)
        if (u3[e7] !== c2[e7]) {
          s2 = u3[e7], i3 = c2[e7];
          break;
        }
      return s2 < i3 ? -1 : i3 < s2 ? 1 : 0;
    }, Buffer$1.prototype.includes = function(e6, t4, r4) {
      return -1 !== this.indexOf(e6, t4, r4);
    }, Buffer$1.prototype.indexOf = function(e6, t4, r4) {
      return bidirectionalIndexOf(this, e6, t4, r4, true);
    }, Buffer$1.prototype.lastIndexOf = function(e6, t4, r4) {
      return bidirectionalIndexOf(this, e6, t4, r4, false);
    }, Buffer$1.prototype.write = function(e6, t4, r4, n2) {
      if (void 0 === t4)
        n2 = "utf8", r4 = this.length, t4 = 0;
      else if (void 0 === r4 && "string" == typeof t4)
        n2 = t4, r4 = this.length, t4 = 0;
      else {
        if (!Number.isFinite(t4))
          throw new TypeError("Buffer.write(string, encoding, offset[, length]) is no longer supported");
        t4 >>>= 0, Number.isFinite(r4) ? (r4 >>>= 0, void 0 === n2 && (n2 = "utf8")) : (n2 = r4, r4 = void 0);
      }
      const o6 = this.length - t4;
      if ((void 0 === r4 || r4 > o6) && (r4 = o6), e6.length > 0 && (r4 < 0 || t4 < 0) || t4 > this.length)
        throw new RangeError("Attempt to write outside buffer bounds");
      n2 || (n2 = "utf8");
      let s2 = false;
      for (; ; )
        switch (n2) {
          case "hex":
            return hexWrite(this, e6, t4, r4);
          case "utf8":
          case "utf-8":
            return utf8Write(this, e6, t4, r4);
          case "ascii":
          case "latin1":
          case "binary":
            return asciiWrite(this, e6, t4, r4);
          case "base64":
            return base64Write(this, e6, t4, r4);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return ucs2Write(this, e6, t4, r4);
          default:
            if (s2)
              throw new TypeError("Unknown encoding: " + n2);
            n2 = ("" + n2).toLowerCase(), s2 = true;
        }
    }, Buffer$1.prototype.toJSON = function() {
      return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) };
    };
    i2 = 4096;
    Buffer$1.prototype.slice = function(e6, t4) {
      const r4 = this.length;
      (e6 = Math.trunc(e6)) < 0 ? (e6 += r4) < 0 && (e6 = 0) : e6 > r4 && (e6 = r4), (t4 = void 0 === t4 ? r4 : Math.trunc(t4)) < 0 ? (t4 += r4) < 0 && (t4 = 0) : t4 > r4 && (t4 = r4), t4 < e6 && (t4 = e6);
      const n2 = this.subarray(e6, t4);
      return Object.setPrototypeOf(n2, Buffer$1.prototype), n2;
    }, Buffer$1.prototype.readUintLE = Buffer$1.prototype.readUIntLE = function(e6, t4, r4) {
      e6 >>>= 0, t4 >>>= 0, r4 || checkOffset(e6, t4, this.length);
      let n2 = this[e6], o6 = 1, s2 = 0;
      for (; ++s2 < t4 && (o6 *= 256); )
        n2 += this[e6 + s2] * o6;
      return n2;
    }, Buffer$1.prototype.readUintBE = Buffer$1.prototype.readUIntBE = function(e6, t4, r4) {
      e6 >>>= 0, t4 >>>= 0, r4 || checkOffset(e6, t4, this.length);
      let n2 = this[e6 + --t4], o6 = 1;
      for (; t4 > 0 && (o6 *= 256); )
        n2 += this[e6 + --t4] * o6;
      return n2;
    }, Buffer$1.prototype.readUint8 = Buffer$1.prototype.readUInt8 = function(e6, t4) {
      return e6 >>>= 0, t4 || checkOffset(e6, 1, this.length), this[e6];
    }, Buffer$1.prototype.readUint16LE = Buffer$1.prototype.readUInt16LE = function(e6, t4) {
      return e6 >>>= 0, t4 || checkOffset(e6, 2, this.length), this[e6] | this[e6 + 1] << 8;
    }, Buffer$1.prototype.readUint16BE = Buffer$1.prototype.readUInt16BE = function(e6, t4) {
      return e6 >>>= 0, t4 || checkOffset(e6, 2, this.length), this[e6] << 8 | this[e6 + 1];
    }, Buffer$1.prototype.readUint32LE = Buffer$1.prototype.readUInt32LE = function(e6, t4) {
      return e6 >>>= 0, t4 || checkOffset(e6, 4, this.length), (this[e6] | this[e6 + 1] << 8 | this[e6 + 2] << 16) + 16777216 * this[e6 + 3];
    }, Buffer$1.prototype.readUint32BE = Buffer$1.prototype.readUInt32BE = function(e6, t4) {
      return e6 >>>= 0, t4 || checkOffset(e6, 4, this.length), 16777216 * this[e6] + (this[e6 + 1] << 16 | this[e6 + 2] << 8 | this[e6 + 3]);
    }, Buffer$1.prototype.readBigUInt64LE = defineBigIntMethod(function(e6) {
      validateNumber(e6 >>>= 0, "offset");
      const t4 = this[e6], r4 = this[e6 + 7];
      void 0 !== t4 && void 0 !== r4 || boundsError(e6, this.length - 8);
      const n2 = t4 + 256 * this[++e6] + 65536 * this[++e6] + this[++e6] * 2 ** 24, o6 = this[++e6] + 256 * this[++e6] + 65536 * this[++e6] + r4 * 2 ** 24;
      return BigInt(n2) + (BigInt(o6) << BigInt(32));
    }), Buffer$1.prototype.readBigUInt64BE = defineBigIntMethod(function(e6) {
      validateNumber(e6 >>>= 0, "offset");
      const t4 = this[e6], r4 = this[e6 + 7];
      void 0 !== t4 && void 0 !== r4 || boundsError(e6, this.length - 8);
      const n2 = t4 * 2 ** 24 + 65536 * this[++e6] + 256 * this[++e6] + this[++e6], o6 = this[++e6] * 2 ** 24 + 65536 * this[++e6] + 256 * this[++e6] + r4;
      return (BigInt(n2) << BigInt(32)) + BigInt(o6);
    }), Buffer$1.prototype.readIntLE = function(e6, t4, r4) {
      e6 >>>= 0, t4 >>>= 0, r4 || checkOffset(e6, t4, this.length);
      let n2 = this[e6], o6 = 1, s2 = 0;
      for (; ++s2 < t4 && (o6 *= 256); )
        n2 += this[e6 + s2] * o6;
      return o6 *= 128, n2 >= o6 && (n2 -= Math.pow(2, 8 * t4)), n2;
    }, Buffer$1.prototype.readIntBE = function(e6, t4, r4) {
      e6 >>>= 0, t4 >>>= 0, r4 || checkOffset(e6, t4, this.length);
      let n2 = t4, o6 = 1, s2 = this[e6 + --n2];
      for (; n2 > 0 && (o6 *= 256); )
        s2 += this[e6 + --n2] * o6;
      return o6 *= 128, s2 >= o6 && (s2 -= Math.pow(2, 8 * t4)), s2;
    }, Buffer$1.prototype.readInt8 = function(e6, t4) {
      return e6 >>>= 0, t4 || checkOffset(e6, 1, this.length), 128 & this[e6] ? -1 * (255 - this[e6] + 1) : this[e6];
    }, Buffer$1.prototype.readInt16LE = function(e6, t4) {
      e6 >>>= 0, t4 || checkOffset(e6, 2, this.length);
      const r4 = this[e6] | this[e6 + 1] << 8;
      return 32768 & r4 ? 4294901760 | r4 : r4;
    }, Buffer$1.prototype.readInt16BE = function(e6, t4) {
      e6 >>>= 0, t4 || checkOffset(e6, 2, this.length);
      const r4 = this[e6 + 1] | this[e6] << 8;
      return 32768 & r4 ? 4294901760 | r4 : r4;
    }, Buffer$1.prototype.readInt32LE = function(e6, t4) {
      return e6 >>>= 0, t4 || checkOffset(e6, 4, this.length), this[e6] | this[e6 + 1] << 8 | this[e6 + 2] << 16 | this[e6 + 3] << 24;
    }, Buffer$1.prototype.readInt32BE = function(e6, t4) {
      return e6 >>>= 0, t4 || checkOffset(e6, 4, this.length), this[e6] << 24 | this[e6 + 1] << 16 | this[e6 + 2] << 8 | this[e6 + 3];
    }, Buffer$1.prototype.readBigInt64LE = defineBigIntMethod(function(e6) {
      validateNumber(e6 >>>= 0, "offset");
      const t4 = this[e6], r4 = this[e6 + 7];
      void 0 !== t4 && void 0 !== r4 || boundsError(e6, this.length - 8);
      const n2 = this[e6 + 4] + 256 * this[e6 + 5] + 65536 * this[e6 + 6] + (r4 << 24);
      return (BigInt(n2) << BigInt(32)) + BigInt(t4 + 256 * this[++e6] + 65536 * this[++e6] + this[++e6] * 2 ** 24);
    }), Buffer$1.prototype.readBigInt64BE = defineBigIntMethod(function(e6) {
      validateNumber(e6 >>>= 0, "offset");
      const t4 = this[e6], r4 = this[e6 + 7];
      void 0 !== t4 && void 0 !== r4 || boundsError(e6, this.length - 8);
      const n2 = (t4 << 24) + 65536 * this[++e6] + 256 * this[++e6] + this[++e6];
      return (BigInt(n2) << BigInt(32)) + BigInt(this[++e6] * 2 ** 24 + 65536 * this[++e6] + 256 * this[++e6] + r4);
    }), Buffer$1.prototype.readFloatLE = function(e6, t4) {
      return e6 >>>= 0, t4 || checkOffset(e6, 4, this.length), read(this, e6, true, 23, 4);
    }, Buffer$1.prototype.readFloatBE = function(e6, t4) {
      return e6 >>>= 0, t4 || checkOffset(e6, 4, this.length), read(this, e6, false, 23, 4);
    }, Buffer$1.prototype.readDoubleLE = function(e6, t4) {
      return e6 >>>= 0, t4 || checkOffset(e6, 8, this.length), read(this, e6, true, 52, 8);
    }, Buffer$1.prototype.readDoubleBE = function(e6, t4) {
      return e6 >>>= 0, t4 || checkOffset(e6, 8, this.length), read(this, e6, false, 52, 8);
    }, Buffer$1.prototype.writeUintLE = Buffer$1.prototype.writeUIntLE = function(e6, t4, r4, n2) {
      if (e6 = +e6, t4 >>>= 0, r4 >>>= 0, !n2) {
        checkInt(this, e6, t4, r4, Math.pow(2, 8 * r4) - 1, 0);
      }
      let o6 = 1, s2 = 0;
      for (this[t4] = 255 & e6; ++s2 < r4 && (o6 *= 256); )
        this[t4 + s2] = e6 / o6 & 255;
      return t4 + r4;
    }, Buffer$1.prototype.writeUintBE = Buffer$1.prototype.writeUIntBE = function(e6, t4, r4, n2) {
      if (e6 = +e6, t4 >>>= 0, r4 >>>= 0, !n2) {
        checkInt(this, e6, t4, r4, Math.pow(2, 8 * r4) - 1, 0);
      }
      let o6 = r4 - 1, s2 = 1;
      for (this[t4 + o6] = 255 & e6; --o6 >= 0 && (s2 *= 256); )
        this[t4 + o6] = e6 / s2 & 255;
      return t4 + r4;
    }, Buffer$1.prototype.writeUint8 = Buffer$1.prototype.writeUInt8 = function(e6, t4, r4) {
      return e6 = +e6, t4 >>>= 0, r4 || checkInt(this, e6, t4, 1, 255, 0), this[t4] = 255 & e6, t4 + 1;
    }, Buffer$1.prototype.writeUint16LE = Buffer$1.prototype.writeUInt16LE = function(e6, t4, r4) {
      return e6 = +e6, t4 >>>= 0, r4 || checkInt(this, e6, t4, 2, 65535, 0), this[t4] = 255 & e6, this[t4 + 1] = e6 >>> 8, t4 + 2;
    }, Buffer$1.prototype.writeUint16BE = Buffer$1.prototype.writeUInt16BE = function(e6, t4, r4) {
      return e6 = +e6, t4 >>>= 0, r4 || checkInt(this, e6, t4, 2, 65535, 0), this[t4] = e6 >>> 8, this[t4 + 1] = 255 & e6, t4 + 2;
    }, Buffer$1.prototype.writeUint32LE = Buffer$1.prototype.writeUInt32LE = function(e6, t4, r4) {
      return e6 = +e6, t4 >>>= 0, r4 || checkInt(this, e6, t4, 4, 4294967295, 0), this[t4 + 3] = e6 >>> 24, this[t4 + 2] = e6 >>> 16, this[t4 + 1] = e6 >>> 8, this[t4] = 255 & e6, t4 + 4;
    }, Buffer$1.prototype.writeUint32BE = Buffer$1.prototype.writeUInt32BE = function(e6, t4, r4) {
      return e6 = +e6, t4 >>>= 0, r4 || checkInt(this, e6, t4, 4, 4294967295, 0), this[t4] = e6 >>> 24, this[t4 + 1] = e6 >>> 16, this[t4 + 2] = e6 >>> 8, this[t4 + 3] = 255 & e6, t4 + 4;
    }, Buffer$1.prototype.writeBigUInt64LE = defineBigIntMethod(function(e6, t4 = 0) {
      return wrtBigUInt64LE(this, e6, t4, BigInt(0), BigInt("0xffffffffffffffff"));
    }), Buffer$1.prototype.writeBigUInt64BE = defineBigIntMethod(function(e6, t4 = 0) {
      return wrtBigUInt64BE(this, e6, t4, BigInt(0), BigInt("0xffffffffffffffff"));
    }), Buffer$1.prototype.writeIntLE = function(e6, t4, r4, n2) {
      if (e6 = +e6, t4 >>>= 0, !n2) {
        const n3 = Math.pow(2, 8 * r4 - 1);
        checkInt(this, e6, t4, r4, n3 - 1, -n3);
      }
      let o6 = 0, s2 = 1, i3 = 0;
      for (this[t4] = 255 & e6; ++o6 < r4 && (s2 *= 256); )
        e6 < 0 && 0 === i3 && 0 !== this[t4 + o6 - 1] && (i3 = 1), this[t4 + o6] = Math.trunc(e6 / s2) - i3 & 255;
      return t4 + r4;
    }, Buffer$1.prototype.writeIntBE = function(e6, t4, r4, n2) {
      if (e6 = +e6, t4 >>>= 0, !n2) {
        const n3 = Math.pow(2, 8 * r4 - 1);
        checkInt(this, e6, t4, r4, n3 - 1, -n3);
      }
      let o6 = r4 - 1, s2 = 1, i3 = 0;
      for (this[t4 + o6] = 255 & e6; --o6 >= 0 && (s2 *= 256); )
        e6 < 0 && 0 === i3 && 0 !== this[t4 + o6 + 1] && (i3 = 1), this[t4 + o6] = Math.trunc(e6 / s2) - i3 & 255;
      return t4 + r4;
    }, Buffer$1.prototype.writeInt8 = function(e6, t4, r4) {
      return e6 = +e6, t4 >>>= 0, r4 || checkInt(this, e6, t4, 1, 127, -128), e6 < 0 && (e6 = 255 + e6 + 1), this[t4] = 255 & e6, t4 + 1;
    }, Buffer$1.prototype.writeInt16LE = function(e6, t4, r4) {
      return e6 = +e6, t4 >>>= 0, r4 || checkInt(this, e6, t4, 2, 32767, -32768), this[t4] = 255 & e6, this[t4 + 1] = e6 >>> 8, t4 + 2;
    }, Buffer$1.prototype.writeInt16BE = function(e6, t4, r4) {
      return e6 = +e6, t4 >>>= 0, r4 || checkInt(this, e6, t4, 2, 32767, -32768), this[t4] = e6 >>> 8, this[t4 + 1] = 255 & e6, t4 + 2;
    }, Buffer$1.prototype.writeInt32LE = function(e6, t4, r4) {
      return e6 = +e6, t4 >>>= 0, r4 || checkInt(this, e6, t4, 4, 2147483647, -2147483648), this[t4] = 255 & e6, this[t4 + 1] = e6 >>> 8, this[t4 + 2] = e6 >>> 16, this[t4 + 3] = e6 >>> 24, t4 + 4;
    }, Buffer$1.prototype.writeInt32BE = function(e6, t4, r4) {
      return e6 = +e6, t4 >>>= 0, r4 || checkInt(this, e6, t4, 4, 2147483647, -2147483648), e6 < 0 && (e6 = 4294967295 + e6 + 1), this[t4] = e6 >>> 24, this[t4 + 1] = e6 >>> 16, this[t4 + 2] = e6 >>> 8, this[t4 + 3] = 255 & e6, t4 + 4;
    }, Buffer$1.prototype.writeBigInt64LE = defineBigIntMethod(function(e6, t4 = 0) {
      return wrtBigUInt64LE(this, e6, t4, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
    }), Buffer$1.prototype.writeBigInt64BE = defineBigIntMethod(function(e6, t4 = 0) {
      return wrtBigUInt64BE(this, e6, t4, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
    }), Buffer$1.prototype.writeFloatLE = function(e6, t4, r4) {
      return writeFloat(this, e6, t4, true, r4);
    }, Buffer$1.prototype.writeFloatBE = function(e6, t4, r4) {
      return writeFloat(this, e6, t4, false, r4);
    }, Buffer$1.prototype.writeDoubleLE = function(e6, t4, r4) {
      return writeDouble(this, e6, t4, true, r4);
    }, Buffer$1.prototype.writeDoubleBE = function(e6, t4, r4) {
      return writeDouble(this, e6, t4, false, r4);
    }, Buffer$1.prototype.copy = function(e6, t4, r4, n2) {
      if (!Buffer$1.isBuffer(e6))
        throw new TypeError("argument should be a Buffer");
      if (r4 || (r4 = 0), n2 || 0 === n2 || (n2 = this.length), t4 >= e6.length && (t4 = e6.length), t4 || (t4 = 0), n2 > 0 && n2 < r4 && (n2 = r4), n2 === r4)
        return 0;
      if (0 === e6.length || 0 === this.length)
        return 0;
      if (t4 < 0)
        throw new RangeError("targetStart out of bounds");
      if (r4 < 0 || r4 >= this.length)
        throw new RangeError("Index out of range");
      if (n2 < 0)
        throw new RangeError("sourceEnd out of bounds");
      n2 > this.length && (n2 = this.length), e6.length - t4 < n2 - r4 && (n2 = e6.length - t4 + r4);
      const o6 = n2 - r4;
      return this === e6 && "function" == typeof Uint8Array.prototype.copyWithin ? this.copyWithin(t4, r4, n2) : Uint8Array.prototype.set.call(e6, this.subarray(r4, n2), t4), o6;
    }, Buffer$1.prototype.fill = function(e6, t4, r4, n2) {
      if ("string" == typeof e6) {
        if ("string" == typeof t4 ? (n2 = t4, t4 = 0, r4 = this.length) : "string" == typeof r4 && (n2 = r4, r4 = this.length), void 0 !== n2 && "string" != typeof n2)
          throw new TypeError("encoding must be a string");
        if ("string" == typeof n2 && !Buffer$1.isEncoding(n2))
          throw new TypeError("Unknown encoding: " + n2);
        if (1 === e6.length) {
          const t5 = e6.charCodeAt(0);
          ("utf8" === n2 && t5 < 128 || "latin1" === n2) && (e6 = t5);
        }
      } else
        "number" == typeof e6 ? e6 &= 255 : "boolean" == typeof e6 && (e6 = Number(e6));
      if (t4 < 0 || this.length < t4 || this.length < r4)
        throw new RangeError("Out of range index");
      if (r4 <= t4)
        return this;
      let o6;
      if (t4 >>>= 0, r4 = void 0 === r4 ? this.length : r4 >>> 0, e6 || (e6 = 0), "number" == typeof e6)
        for (o6 = t4; o6 < r4; ++o6)
          this[o6] = e6;
      else {
        const s2 = Buffer$1.isBuffer(e6) ? e6 : Buffer$1.from(e6, n2), i3 = s2.length;
        if (0 === i3)
          throw new TypeError('The value "' + e6 + '" is invalid for argument "value"');
        for (o6 = 0; o6 < r4 - t4; ++o6)
          this[o6 + t4] = s2[o6 % i3];
      }
      return this;
    };
    a2 = {};
    E2("ERR_BUFFER_OUT_OF_BOUNDS", function(e6) {
      return e6 ? `${e6} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
    }, RangeError), E2("ERR_INVALID_ARG_TYPE", function(e6, t4) {
      return `The "${e6}" argument must be of type number. Received type ${typeof t4}`;
    }, TypeError), E2("ERR_OUT_OF_RANGE", function(e6, t4, r4) {
      let n2 = `The value of "${e6}" is out of range.`, o6 = r4;
      return Number.isInteger(r4) && Math.abs(r4) > 2 ** 32 ? o6 = addNumericalSeparator(String(r4)) : "bigint" == typeof r4 && (o6 = String(r4), (r4 > BigInt(2) ** BigInt(32) || r4 < -(BigInt(2) ** BigInt(32))) && (o6 = addNumericalSeparator(o6)), o6 += "n"), n2 += ` It must be ${t4}. Received ${o6}`, n2;
    }, RangeError);
    u2 = /[^\w+/-]/g;
    c = function() {
      const e6 = "0123456789abcdef", t4 = Array.from({ length: 256 });
      for (let r4 = 0; r4 < 16; ++r4) {
        const n2 = 16 * r4;
        for (let o6 = 0; o6 < 16; ++o6)
          t4[n2 + o6] = e6[r4] + e6[o6];
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
    l.nextTick = function(e6) {
      const t4 = Array.from({ length: arguments.length - 1 });
      if (arguments.length > 1)
        for (let e7 = 1; e7 < arguments.length; e7++)
          t4[e7 - 1] = arguments[e7];
      y2.push(new Item(e6, t4)), 1 !== y2.length || g || runTimeout(drainQueue);
    }, Item.prototype.run = function() {
      this.fun.apply(null, this.array);
    }, l.title = "unenv";
    w2 = /* @__PURE__ */ Object.create(null);
    b2 = globalThis.process?.env;
    _getEnv = (e6) => b2 || globalThis.__env__ || (e6 ? w2 : globalThis);
    l.env = new Proxy(w2, { get: (e6, t4) => _getEnv()[t4] ?? w2[t4], has: (e6, t4) => t4 in _getEnv() || t4 in w2, set: (e6, t4, r4) => (_getEnv(true)[t4] = r4, true), deleteProperty(e6, t4) {
      delete _getEnv(true)[t4];
    }, ownKeys() {
      const e6 = _getEnv();
      return Object.keys(e6);
    } }), l.argv = [], l.version = "", l.versions = {}, l.on = noop, l.addListener = noop, l.once = noop, l.off = noop, l.removeListener = noop, l.removeAllListeners = noop, l.emit = noop, l.prependListener = noop, l.prependOnceListener = noop, l.listeners = function(e6) {
      return [];
    }, l.binding = function(e6) {
      throw new Error("[unenv] process.binding is not supported");
    };
    _2 = "/";
    l.cwd = function() {
      return _2;
    }, l.chdir = function(e6) {
      _2 = e6;
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
      constructor(e6, t4) {
        e6 = this.words = e6 || [], this.sigBytes = void 0 === t4 ? 4 * e6.length : t4;
      }
      toString(e6) {
        return (e6 || D2).stringify(this);
      }
      concat(e6) {
        if (this.clamp(), this.sigBytes % 4)
          for (let t4 = 0; t4 < e6.sigBytes; t4++) {
            const r4 = e6.words[t4 >>> 2] >>> 24 - t4 % 4 * 8 & 255;
            this.words[this.sigBytes + t4 >>> 2] |= r4 << 24 - (this.sigBytes + t4) % 4 * 8;
          }
        else
          for (let t4 = 0; t4 < e6.sigBytes; t4 += 4)
            this.words[this.sigBytes + t4 >>> 2] = e6.words[t4 >>> 2];
        return this.sigBytes += e6.sigBytes, this;
      }
      clamp() {
        this.words[this.sigBytes >>> 2] &= 4294967295 << 32 - this.sigBytes % 4 * 8, this.words.length = Math.ceil(this.sigBytes / 4);
      }
      clone() {
        return new WordArray([...this.words]);
      }
    };
    D2 = { stringify(e6) {
      const t4 = [];
      for (let r4 = 0; r4 < e6.sigBytes; r4++) {
        const n2 = e6.words[r4 >>> 2] >>> 24 - r4 % 4 * 8 & 255;
        t4.push((n2 >>> 4).toString(16), (15 & n2).toString(16));
      }
      return t4.join("");
    } };
    F2 = { stringify(e6) {
      const t4 = [];
      for (let r4 = 0; r4 < e6.sigBytes; r4 += 3) {
        const n2 = (e6.words[r4 >>> 2] >>> 24 - r4 % 4 * 8 & 255) << 16 | (e6.words[r4 + 1 >>> 2] >>> 24 - (r4 + 1) % 4 * 8 & 255) << 8 | e6.words[r4 + 2 >>> 2] >>> 24 - (r4 + 2) % 4 * 8 & 255;
        for (let o6 = 0; o6 < 4 && 8 * r4 + 6 * o6 < 8 * e6.sigBytes; o6++)
          t4.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(n2 >>> 6 * (3 - o6) & 63));
      }
      return t4.join("");
    } };
    K2 = { parse(e6) {
      const t4 = e6.length, r4 = [];
      for (let n2 = 0; n2 < t4; n2++)
        r4[n2 >>> 2] |= (255 & e6.charCodeAt(n2)) << 24 - n2 % 4 * 8;
      return new WordArray(r4, t4);
    } };
    Q2 = { parse: (e6) => K2.parse(unescape(encodeURIComponent(e6))) };
    BufferedBlockAlgorithm = class {
      constructor() {
        this._data = new WordArray(), this._nDataBytes = 0, this._minBufferSize = 0, this.blockSize = 16;
      }
      reset() {
        this._data = new WordArray(), this._nDataBytes = 0;
      }
      _append(e6) {
        "string" == typeof e6 && (e6 = Q2.parse(e6)), this._data.concat(e6), this._nDataBytes += e6.sigBytes;
      }
      _doProcessBlock(e6, t4) {
      }
      _process(e6) {
        let t4, r4 = this._data.sigBytes / (4 * this.blockSize);
        r4 = e6 ? Math.ceil(r4) : Math.max((0 | r4) - this._minBufferSize, 0);
        const n2 = r4 * this.blockSize, o6 = Math.min(4 * n2, this._data.sigBytes);
        if (n2) {
          for (let e7 = 0; e7 < n2; e7 += this.blockSize)
            this._doProcessBlock(this._data.words, e7);
          t4 = this._data.words.splice(0, n2), this._data.sigBytes -= o6;
        }
        return new WordArray(t4, o6);
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
      _doProcessBlock(e6, t4) {
        const r4 = this._hash.words;
        let n2 = r4[0], o6 = r4[1], s2 = r4[2], i3 = r4[3], a3 = r4[4], u3 = r4[5], c2 = r4[6], f2 = r4[7];
        for (let r5 = 0; r5 < 64; r5++) {
          if (r5 < 16)
            J2[r5] = 0 | e6[t4 + r5];
          else {
            const e7 = J2[r5 - 15], t5 = (e7 << 25 | e7 >>> 7) ^ (e7 << 14 | e7 >>> 18) ^ e7 >>> 3, n3 = J2[r5 - 2], o7 = (n3 << 15 | n3 >>> 17) ^ (n3 << 13 | n3 >>> 19) ^ n3 >>> 10;
            J2[r5] = t5 + J2[r5 - 7] + o7 + J2[r5 - 16];
          }
          const l2 = n2 & o6 ^ n2 & s2 ^ o6 & s2, h3 = (n2 << 30 | n2 >>> 2) ^ (n2 << 19 | n2 >>> 13) ^ (n2 << 10 | n2 >>> 22), d2 = f2 + ((a3 << 26 | a3 >>> 6) ^ (a3 << 21 | a3 >>> 11) ^ (a3 << 7 | a3 >>> 25)) + (a3 & u3 ^ ~a3 & c2) + G2[r5] + J2[r5];
          f2 = c2, c2 = u3, u3 = a3, a3 = i3 + d2 | 0, i3 = s2, s2 = o6, o6 = n2, n2 = d2 + (h3 + l2) | 0;
        }
        r4[0] = r4[0] + n2 | 0, r4[1] = r4[1] + o6 | 0, r4[2] = r4[2] + s2 | 0, r4[3] = r4[3] + i3 | 0, r4[4] = r4[4] + a3 | 0, r4[5] = r4[5] + u3 | 0, r4[6] = r4[6] + c2 | 0, r4[7] = r4[7] + f2 | 0;
      }
      finalize(e6) {
        super.finalize(e6);
        const t4 = 8 * this._nDataBytes, r4 = 8 * this._data.sigBytes;
        return this._data.words[r4 >>> 5] |= 128 << 24 - r4 % 32, this._data.words[14 + (r4 + 64 >>> 9 << 4)] = Math.floor(t4 / 4294967296), this._data.words[15 + (r4 + 64 >>> 9 << 4)] = t4, this._data.sigBytes = 4 * this._data.words.length, this._process(), this._hash;
      }
    };
    Y2 = { NORMAL: 0, WILDCARD: 1, PLACEHOLDER: 2 };
    Z3 = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/;
    X2 = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/;
    ee3 = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;
    te = createDefu();
    re3 = createDefu((e6, t4, r4) => {
      if (void 0 !== e6[t4] && "function" == typeof r4)
        return e6[t4] = r4(e6[t4]), true;
    });
    ne3 = 10;
    oe3 = class {
      __unenv__ = true;
      _events = /* @__PURE__ */ Object.create(null);
      _maxListeners;
      static get defaultMaxListeners() {
        return ne3;
      }
      static set defaultMaxListeners(e6) {
        if ("number" != typeof e6 || e6 < 0 || Number.isNaN(e6))
          throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e6 + ".");
        ne3 = e6;
      }
      setMaxListeners(e6) {
        if ("number" != typeof e6 || e6 < 0 || Number.isNaN(e6))
          throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e6 + ".");
        return this._maxListeners = e6, this;
      }
      getMaxListeners() {
        return _getMaxListeners(this);
      }
      emit(e6, ...t4) {
        if (!this._events[e6] || 0 === this._events[e6].length)
          return false;
        if ("error" === e6) {
          let e7;
          if (t4.length > 0 && (e7 = t4[0]), e7 instanceof Error)
            throw e7;
          const r4 = new Error("Unhandled error." + (e7 ? " (" + e7.message + ")" : ""));
          throw r4.context = e7, r4;
        }
        for (const r4 of this._events[e6])
          (r4.listener || r4).apply(this, t4);
        return true;
      }
      addListener(e6, t4) {
        return _addListener(this, e6, t4, false);
      }
      on(e6, t4) {
        return _addListener(this, e6, t4, false);
      }
      prependListener(e6, t4) {
        return _addListener(this, e6, t4, true);
      }
      once(e6, t4) {
        return this.on(e6, _wrapOnce(this, e6, t4));
      }
      prependOnceListener(e6, t4) {
        return this.prependListener(e6, _wrapOnce(this, e6, t4));
      }
      removeListener(e6, t4) {
        return function(e7, t5, r4) {
          if (_checkListener(r4), !e7._events[t5] || 0 === e7._events[t5].length)
            return e7;
          const n2 = e7._events[t5].length;
          if (e7._events[t5] = e7._events[t5].filter((e8) => e8 !== r4), n2 === e7._events[t5].length)
            return e7;
          e7._events.removeListener && e7.emit("removeListener", t5, r4.listener || r4);
          0 === e7._events[t5].length && delete e7._events[t5];
          return e7;
        }(this, e6, t4);
      }
      off(e6, t4) {
        return this.removeListener(e6, t4);
      }
      removeAllListeners(e6) {
        return function(e7, t4) {
          if (!e7._events[t4] || 0 === e7._events[t4].length)
            return e7;
          if (e7._events.removeListener)
            for (const r4 of e7._events[t4])
              e7.emit("removeListener", t4, r4.listener || r4);
          return delete e7._events[t4], e7;
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
      static from(e6, t4) {
        return new _Readable(t4);
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
      unshift(e6, t4) {
      }
      wrap(e6) {
        return this;
      }
      push(e6, t4) {
        return false;
      }
      _destroy(e6, t4) {
        this.removeAllListeners();
      }
      destroy(e6) {
        return this.destroyed = true, this._destroy(e6), this;
      }
      pipe(e6, t4) {
        return {};
      }
      compose(e6, t4) {
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
      map(e6, t4) {
        throw createNotImplementedError("Readable.map");
      }
      filter(e6, t4) {
        throw createNotImplementedError("Readable.filter");
      }
      forEach(e6, t4) {
        throw createNotImplementedError("Readable.forEach");
      }
      reduce(e6, t4, r4) {
        throw createNotImplementedError("Readable.reduce");
      }
      find(e6, t4) {
        throw createNotImplementedError("Readable.find");
      }
      findIndex(e6, t4) {
        throw createNotImplementedError("Readable.findIndex");
      }
      some(e6, t4) {
        throw createNotImplementedError("Readable.some");
      }
      toArray(e6) {
        throw createNotImplementedError("Readable.toArray");
      }
      every(e6, t4) {
        throw createNotImplementedError("Readable.every");
      }
      flatMap(e6, t4) {
        throw createNotImplementedError("Readable.flatMap");
      }
      drop(e6, t4) {
        throw createNotImplementedError("Readable.drop");
      }
      take(e6, t4) {
        throw createNotImplementedError("Readable.take");
      }
      asIndexedPairs(e6) {
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
      constructor(e6) {
        super();
      }
      pipe(e6, t4) {
        return {};
      }
      _write(e6, t4, r4) {
        if (this.writableEnded)
          r4 && r4();
        else {
          if (void 0 === this._data)
            this._data = e6;
          else {
            const r5 = "string" == typeof this._data ? f.from(this._data, this._encoding || t4 || "utf8") : this._data, n2 = "string" == typeof e6 ? f.from(e6, t4 || this._encoding || "utf8") : e6;
            this._data = f.concat([r5, n2]);
          }
          this._encoding = t4, r4 && r4();
        }
      }
      _writev(e6, t4) {
      }
      _destroy(e6, t4) {
      }
      _final(e6) {
      }
      write(e6, t4, r4) {
        const n2 = "string" == typeof t4 ? this._encoding : "utf-8", o6 = "function" == typeof t4 ? t4 : "function" == typeof r4 ? r4 : void 0;
        return this._write(e6, n2, o6), true;
      }
      setDefaultEncoding(e6) {
        return this;
      }
      end(e6, t4, r4) {
        const n2 = "function" == typeof e6 ? e6 : "function" == typeof t4 ? t4 : "function" == typeof r4 ? r4 : void 0;
        if (this.writableEnded)
          return n2 && n2(), this;
        const o6 = e6 === n2 ? void 0 : e6;
        if (o6) {
          const e7 = t4 === n2 ? void 0 : t4;
          this.write(o6, e7, n2);
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
      compose(e6, t4) {
        throw new Error("[h3] Method not implemented.");
      }
    };
    ue3 = class {
      allowHalfOpen = true;
      _destroy;
      constructor(e6 = new ie3(), t4 = new ae3()) {
        Object.assign(this, e6), Object.assign(this, t4), this._destroy = function(...e7) {
          return function(...t5) {
            for (const r4 of e7)
              r4(...t5);
          };
        }(e6._destroy, t4._destroy);
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
      constructor(e6) {
        super();
      }
      write(e6, t4, r4) {
        return false;
      }
      connect(e6, t4, r4) {
        return this;
      }
      end(e6, t4, r4) {
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
      setTimeout(e6, t4) {
        return this;
      }
      setNoDelay(e6) {
        return this;
      }
      setKeepAlive(e6, t4) {
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
      constructor(e6) {
        super(), this.socket = this.connection = e6 || new Socket();
      }
      get rawHeaders() {
        return function(e6) {
          const t4 = [];
          for (const r4 in e6)
            if (Array.isArray(e6[r4]))
              for (const n2 of e6[r4])
                t4.push(r4, n2);
            else
              t4.push(r4, e6[r4]);
          return t4;
        }(this.headers);
      }
      get rawTrailers() {
        return [];
      }
      setTimeout(e6, t4) {
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
      writeHead(e6, t4, r4) {
        e6 && (this.statusCode = e6), "string" == typeof t4 && (this.statusMessage = t4, t4 = void 0);
        const n2 = r4 || t4;
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
      setTimeout(e6, t4) {
        return this;
      }
      appendHeader(e6, t4) {
        e6 = e6.toLowerCase();
        const r4 = this._headers[e6], n2 = [...Array.isArray(r4) ? r4 : [r4], ...Array.isArray(t4) ? t4 : [t4]].filter(Boolean);
        return this._headers[e6] = n2.length > 1 ? n2 : n2[0], this;
      }
      setHeader(e6, t4) {
        return this._headers[e6.toLowerCase()] = t4, this;
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
      writeEarlyHints(e6, t4) {
        "function" == typeof t4 && t4();
      }
    };
    le3 = Object.defineProperty;
    __publicField$2 = (e6, t4, r4) => (((e7, t5, r5) => {
      t5 in e7 ? le3(e7, t5, { enumerable: true, configurable: true, writable: true, value: r5 }) : e7[t5] = r5;
    })(e6, "symbol" != typeof t4 ? t4 + "" : t4, r4), r4);
    H3Error = class extends Error {
      constructor(e6, t4 = {}) {
        super(e6, t4), __publicField$2(this, "statusCode", 500), __publicField$2(this, "fatal", false), __publicField$2(this, "unhandled", false), __publicField$2(this, "statusMessage"), __publicField$2(this, "data"), __publicField$2(this, "cause"), t4.cause && !this.cause && (this.cause = t4.cause);
      }
      toJSON() {
        const e6 = { message: this.message, statusCode: sanitizeStatusCode(this.statusCode, 500) };
        return this.statusMessage && (e6.statusMessage = sanitizeStatusMessage(this.statusMessage)), void 0 !== this.data && (e6.data = this.data), e6;
      }
    };
    __publicField$2(H3Error, "__h3_error__", true);
    he3 = Symbol.for("h3RawBody");
    de3 = ["PATCH", "POST", "PUT", "DELETE"];
    pe3 = { html: "text/html", json: "application/json" };
    ye3 = /[^\u0009\u0020-\u007E]/g;
    ge3 = "undefined" == typeof setImmediate ? (e6) => e6() : setImmediate;
    me3 = setResponseHeaders;
    we3 = /* @__PURE__ */ new Set(["PATCH", "POST", "PUT", "DELETE"]);
    be3 = /* @__PURE__ */ new Set(["transfer-encoding", "connection", "keep-alive", "upgrade", "expect", "host", "accept"]);
    _e3 = Object.defineProperty;
    __publicField = (e6, t4, r4) => (((e7, t5, r5) => {
      t5 in e7 ? _e3(e7, t5, { enumerable: true, configurable: true, writable: true, value: r5 }) : e7[t5] = r5;
    })(e6, "symbol" != typeof t4 ? t4 + "" : t4, r4), r4);
    H3Event = class {
      constructor(e6, t4) {
        __publicField(this, "__is_event__", true), __publicField(this, "node"), __publicField(this, "web"), __publicField(this, "context", {}), __publicField(this, "_method"), __publicField(this, "_path"), __publicField(this, "_headers"), __publicField(this, "_requestBody"), __publicField(this, "_handled", false), __publicField(this, "_onBeforeResponseCalled"), __publicField(this, "_onAfterResponseCalled"), this.node = { req: e6, res: t4 };
      }
      get method() {
        return this._method || (this._method = (this.node.req.method || "GET").toUpperCase()), this._method;
      }
      get path() {
        return this._path || this.node.req.url || "/";
      }
      get headers() {
        return this._headers || (this._headers = function(e6) {
          const t4 = new Headers();
          for (const [r4, n2] of Object.entries(e6))
            if (Array.isArray(n2))
              for (const e7 of n2)
                t4.append(r4, e7);
            else
              n2 && t4.set(r4, n2);
          return t4;
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
    ve2 = defineEventHandler;
    lazyEventHandler = function(e6) {
      let t4, r4;
      const resolveHandler = () => r4 ? Promise.resolve(r4) : (t4 || (t4 = Promise.resolve(e6()).then((e7) => {
        const t5 = e7.default || e7;
        if ("function" != typeof t5)
          throw new TypeError("Invalid lazy handler result. It should be a function:", t5);
        return r4 = { handler: toEventHandler(e7.default || e7) }, r4;
      })), t4), n2 = ve2((e7) => r4 ? r4.handler(e7) : resolveHandler().then((t5) => t5.handler(e7)));
      return n2.__resolve__ = resolveHandler, n2;
    };
    Be2 = ["connect", "delete", "get", "head", "options", "post", "put", "trace", "patch"];
    FetchError = class extends Error {
      constructor(e6, t4) {
        super(e6, t4), this.name = "FetchError", t4?.cause && !this.cause && (this.cause = t4.cause);
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
    je2 = { run: (e6) => e6() };
    Le2 = void 0 !== console.createTask ? console.createTask : () => je2;
    Hookable = class {
      constructor() {
        this._hooks = {}, this._before = void 0, this._after = void 0, this._deprecatedMessages = void 0, this._deprecatedHooks = {}, this.hook = this.hook.bind(this), this.callHook = this.callHook.bind(this), this.callHookWith = this.callHookWith.bind(this);
      }
      hook(e6, t4, r4 = {}) {
        if (!e6 || "function" != typeof t4)
          return () => {
          };
        const n2 = e6;
        let o6;
        for (; this._deprecatedHooks[e6]; )
          o6 = this._deprecatedHooks[e6], e6 = o6.to;
        if (o6 && !r4.allowDeprecated) {
          let e7 = o6.message;
          e7 || (e7 = `${n2} hook has been deprecated` + (o6.to ? `, please use ${o6.to}` : "")), this._deprecatedMessages || (this._deprecatedMessages = /* @__PURE__ */ new Set()), this._deprecatedMessages.has(e7) || (console.warn(e7), this._deprecatedMessages.add(e7));
        }
        if (!t4.name)
          try {
            Object.defineProperty(t4, "name", { get: () => "_" + e6.replace(/\W+/g, "_") + "_hook_cb", configurable: true });
          } catch {
          }
        return this._hooks[e6] = this._hooks[e6] || [], this._hooks[e6].push(t4), () => {
          t4 && (this.removeHook(e6, t4), t4 = void 0);
        };
      }
      hookOnce(e6, t4) {
        let r4, _function = (...e7) => ("function" == typeof r4 && r4(), r4 = void 0, _function = void 0, t4(...e7));
        return r4 = this.hook(e6, _function), r4;
      }
      removeHook(e6, t4) {
        if (this._hooks[e6]) {
          const r4 = this._hooks[e6].indexOf(t4);
          -1 !== r4 && this._hooks[e6].splice(r4, 1), 0 === this._hooks[e6].length && delete this._hooks[e6];
        }
      }
      deprecateHook(e6, t4) {
        this._deprecatedHooks[e6] = "string" == typeof t4 ? { to: t4 } : t4;
        const r4 = this._hooks[e6] || [];
        delete this._hooks[e6];
        for (const t5 of r4)
          this.hook(e6, t5);
      }
      deprecateHooks(e6) {
        Object.assign(this._deprecatedHooks, e6);
        for (const t4 in e6)
          this.deprecateHook(t4, e6[t4]);
      }
      addHooks(e6) {
        const t4 = flatHooks(e6), r4 = Object.keys(t4).map((e7) => this.hook(e7, t4[e7]));
        return () => {
          for (const e7 of r4.splice(0, r4.length))
            e7();
        };
      }
      removeHooks(e6) {
        const t4 = flatHooks(e6);
        for (const e7 in t4)
          this.removeHook(e7, t4[e7]);
      }
      removeAllHooks() {
        for (const e6 in this._hooks)
          delete this._hooks[e6];
      }
      callHook(e6, ...t4) {
        return t4.unshift(e6), this.callHookWith(serialTaskCaller, e6, ...t4);
      }
      callHookParallel(e6, ...t4) {
        return t4.unshift(e6), this.callHookWith(parallelTaskCaller, e6, ...t4);
      }
      callHookWith(e6, t4, ...r4) {
        const n2 = this._before || this._after ? { name: t4, args: r4, context: {} } : void 0;
        this._before && callEachWith(this._before, n2);
        const o6 = e6(t4 in this._hooks ? [...this._hooks[t4]] : [], r4);
        return o6 instanceof Promise ? o6.finally(() => {
          this._after && n2 && callEachWith(this._after, n2);
        }) : (this._after && n2 && callEachWith(this._after, n2), o6);
      }
      beforeEach(e6) {
        return this._before = this._before || [], this._before.push(e6), () => {
          if (void 0 !== this._before) {
            const t4 = this._before.indexOf(e6);
            -1 !== t4 && this._before.splice(t4, 1);
          }
        };
      }
      afterEach(e6) {
        return this._after = this._after || [], this._after.push(e6), () => {
          if (void 0 !== this._after) {
            const t4 = this._after.indexOf(e6);
            -1 !== t4 && this._after.splice(t4, 1);
          }
        };
      }
    };
    Ne2 = /\d/;
    Me2 = ["-", "_", "/", "."];
    Ue2 = /{{(.*?)}}/g;
    Pe3 = re3({ nuxt: {} });
    He2 = { app: { baseURL: "/", buildId: "8547ad9c-6d98-40ca-b803-7508458638b6", buildAssetsDir: "/_nuxt/", cdnURL: "" }, nitro: { envPrefix: "NUXT_", routeRules: { "/__nuxt_error": { cache: false }, "/_nuxt/builds/meta/**": { headers: { "cache-control": "public, max-age=31536000, immutable" } }, "/_nuxt/builds/**": { headers: { "cache-control": "public, max-age=1, immutable" } }, "/_nuxt/**": { headers: { "cache-control": "public, max-age=31536000, immutable" } } } }, public: {} };
    qe2 = { prefix: "NITRO_", altPrefix: He2.nitro.envPrefix ?? B2.env.NITRO_ENV_PREFIX ?? "_", envExpansion: He2.nitro.envExpansion ?? B2.env.NITRO_ENV_EXPANSION ?? false };
    ze2 = _deepFreeze(applyEnv(klona(He2), qe2));
    _deepFreeze(klona(Pe3)), new Proxy(/* @__PURE__ */ Object.create(null), { get: (e6, t4) => {
      console.warn("Please use `useRuntimeConfig()` instead of accessing config directly.");
      const r4 = useRuntimeConfig2();
      if (t4 in r4)
        return r4[t4];
    } });
    We2 = "base64:";
    De2 = ["hasItem", "getItem", "getItemRaw", "setItem", "setItemRaw", "removeItem", "getMeta", "setMeta", "removeMeta", "getKeys", "clear", "mount", "unmount"];
    memory = () => {
      const e6 = /* @__PURE__ */ new Map();
      return { name: "memory", options: {}, hasItem: (t4) => e6.has(t4), getItem: (t4) => e6.get(t4) ?? null, getItemRaw: (t4) => e6.get(t4) ?? null, setItem(t4, r4) {
        e6.set(t4, r4);
      }, setItemRaw(t4, r4) {
        e6.set(t4, r4);
      }, removeItem(t4) {
        e6.delete(t4);
      }, getKeys: () => Array.from(e6.keys()), clear() {
        e6.clear();
      }, dispose() {
        e6.clear();
      } };
    };
    Fe2 = {};
    normalizeKey2 = function(e6) {
      return e6 ? e6.split("?")[0].replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "") : "";
    };
    Ke2 = { getKeys: () => Promise.resolve(Object.keys(Fe2)), hasItem: (e6) => (e6 = normalizeKey2(e6), Promise.resolve(e6 in Fe2)), getItem: (e6) => (e6 = normalizeKey2(e6), Promise.resolve(Fe2[e6] ? Fe2[e6].import() : null)), getMeta: (e6) => (e6 = normalizeKey2(e6), Promise.resolve(Fe2[e6] ? Fe2[e6].meta : {})) };
    Qe2 = function(e6 = {}) {
      const t4 = { mounts: { "": e6.driver || memory() }, mountpoints: [""], watching: false, watchListeners: [], unwatch: {} }, getMount = (e7) => {
        for (const r5 of t4.mountpoints)
          if (e7.startsWith(r5))
            return { base: r5, relativeKey: e7.slice(r5.length), driver: t4.mounts[r5] };
        return { base: "", relativeKey: e7, driver: t4.mounts[""] };
      }, getMounts = (e7, r5) => t4.mountpoints.filter((t5) => t5.startsWith(e7) || r5 && e7.startsWith(t5)).map((r6) => ({ relativeBase: e7.length > r6.length ? e7.slice(r6.length) : void 0, mountpoint: r6, driver: t4.mounts[r6] })), onChange = (e7, r5) => {
        if (t4.watching) {
          r5 = normalizeKey$1(r5);
          for (const n2 of t4.watchListeners)
            n2(e7, r5);
        }
      }, stopWatch = async () => {
        if (t4.watching) {
          for (const e7 in t4.unwatch)
            await t4.unwatch[e7]();
          t4.unwatch = {}, t4.watching = false;
        }
      }, runBatch = (e7, t5, r5) => {
        const n2 = /* @__PURE__ */ new Map(), getBatch = (e8) => {
          let t6 = n2.get(e8.base);
          return t6 || (t6 = { driver: e8.driver, base: e8.base, items: [] }, n2.set(e8.base, t6)), t6;
        };
        for (const r6 of e7) {
          const e8 = "string" == typeof r6, n3 = normalizeKey$1(e8 ? r6 : r6.key), o6 = e8 ? void 0 : r6.value, s2 = e8 || !r6.options ? t5 : { ...t5, ...r6.options }, i3 = getMount(n3);
          getBatch(i3).items.push({ key: n3, value: o6, relativeKey: i3.relativeKey, options: s2 });
        }
        return Promise.all([...n2.values()].map((e8) => r5(e8))).then((e8) => e8.flat());
      }, r4 = { hasItem(e7, t5 = {}) {
        e7 = normalizeKey$1(e7);
        const { relativeKey: r5, driver: n2 } = getMount(e7);
        return asyncCall(n2.hasItem, r5, t5);
      }, getItem(e7, t5 = {}) {
        e7 = normalizeKey$1(e7);
        const { relativeKey: r5, driver: n2 } = getMount(e7);
        return asyncCall(n2.getItem, r5, t5).then((e8) => destr(e8));
      }, getItems: (e7, t5) => runBatch(e7, t5, (e8) => e8.driver.getItems ? asyncCall(e8.driver.getItems, e8.items.map((e9) => ({ key: e9.relativeKey, options: e9.options })), t5).then((t6) => t6.map((t7) => ({ key: joinKeys(e8.base, t7.key), value: destr(t7.value) }))) : Promise.all(e8.items.map((t6) => asyncCall(e8.driver.getItem, t6.relativeKey, t6.options).then((e9) => ({ key: t6.key, value: destr(e9) }))))), getItemRaw(e7, t5 = {}) {
        e7 = normalizeKey$1(e7);
        const { relativeKey: r5, driver: n2 } = getMount(e7);
        return n2.getItemRaw ? asyncCall(n2.getItemRaw, r5, t5) : asyncCall(n2.getItem, r5, t5).then((e8) => function(e9) {
          return "string" != typeof e9 ? e9 : e9.startsWith(We2) ? (checkBufferSupport(), f.from(e9.slice(We2.length), "base64")) : e9;
        }(e8));
      }, async setItem(e7, t5, n2 = {}) {
        if (void 0 === t5)
          return r4.removeItem(e7);
        e7 = normalizeKey$1(e7);
        const { relativeKey: o6, driver: s2 } = getMount(e7);
        s2.setItem && (await asyncCall(s2.setItem, o6, stringify2(t5), n2), s2.watch || onChange("update", e7));
      }, async setItems(e7, t5) {
        await runBatch(e7, t5, async (e8) => {
          if (e8.driver.setItems)
            return asyncCall(e8.driver.setItems, e8.items.map((e9) => ({ key: e9.relativeKey, value: stringify2(e9.value), options: e9.options })), t5);
          e8.driver.setItem && await Promise.all(e8.items.map((t6) => asyncCall(e8.driver.setItem, t6.relativeKey, stringify2(t6.value), t6.options)));
        });
      }, async setItemRaw(e7, t5, n2 = {}) {
        if (void 0 === t5)
          return r4.removeItem(e7, n2);
        e7 = normalizeKey$1(e7);
        const { relativeKey: o6, driver: s2 } = getMount(e7);
        if (s2.setItemRaw)
          await asyncCall(s2.setItemRaw, o6, t5, n2);
        else {
          if (!s2.setItem)
            return;
          await asyncCall(s2.setItem, o6, function(e8) {
            if ("string" == typeof e8)
              return e8;
            checkBufferSupport();
            const t6 = f.from(e8).toString("base64");
            return We2 + t6;
          }(t5), n2);
        }
        s2.watch || onChange("update", e7);
      }, async removeItem(e7, t5 = {}) {
        "boolean" == typeof t5 && (t5 = { removeMeta: t5 }), e7 = normalizeKey$1(e7);
        const { relativeKey: r5, driver: n2 } = getMount(e7);
        n2.removeItem && (await asyncCall(n2.removeItem, r5, t5), (t5.removeMeta || t5.removeMata) && await asyncCall(n2.removeItem, r5 + "$", t5), n2.watch || onChange("remove", e7));
      }, async getMeta(e7, t5 = {}) {
        "boolean" == typeof t5 && (t5 = { nativeOnly: t5 }), e7 = normalizeKey$1(e7);
        const { relativeKey: r5, driver: n2 } = getMount(e7), o6 = /* @__PURE__ */ Object.create(null);
        if (n2.getMeta && Object.assign(o6, await asyncCall(n2.getMeta, r5, t5)), !t5.nativeOnly) {
          const e8 = await asyncCall(n2.getItem, r5 + "$", t5).then((e9) => destr(e9));
          e8 && "object" == typeof e8 && ("string" == typeof e8.atime && (e8.atime = new Date(e8.atime)), "string" == typeof e8.mtime && (e8.mtime = new Date(e8.mtime)), Object.assign(o6, e8));
        }
        return o6;
      }, setMeta(e7, t5, r5 = {}) {
        return this.setItem(e7 + "$", t5, r5);
      }, removeMeta(e7, t5 = {}) {
        return this.removeItem(e7 + "$", t5);
      }, async getKeys(e7, t5 = {}) {
        e7 = normalizeBaseKey(e7);
        const r5 = getMounts(e7, true);
        let n2 = [];
        const o6 = [];
        for (const e8 of r5) {
          const r6 = (await asyncCall(e8.driver.getKeys, e8.relativeBase, t5)).map((t6) => e8.mountpoint + normalizeKey$1(t6)).filter((e9) => !n2.some((t6) => e9.startsWith(t6)));
          o6.push(...r6), n2 = [e8.mountpoint, ...n2.filter((t6) => !t6.startsWith(e8.mountpoint))];
        }
        return e7 ? o6.filter((t6) => t6.startsWith(e7) && !t6.endsWith("$")) : o6.filter((e8) => !e8.endsWith("$"));
      }, async clear(e7, t5 = {}) {
        e7 = normalizeBaseKey(e7), await Promise.all(getMounts(e7, false).map(async (e8) => {
          if (e8.driver.clear)
            return asyncCall(e8.driver.clear, e8.relativeBase, t5);
          if (e8.driver.removeItem) {
            const r5 = await e8.driver.getKeys(e8.relativeBase || "", t5);
            return Promise.all(r5.map((r6) => e8.driver.removeItem(r6, t5)));
          }
        }));
      }, async dispose() {
        await Promise.all(Object.values(t4.mounts).map((e7) => dispose(e7)));
      }, watch: async (e7) => (await (async () => {
        if (!t4.watching) {
          t4.watching = true;
          for (const e8 in t4.mounts)
            t4.unwatch[e8] = await watch2(t4.mounts[e8], onChange, e8);
        }
      })(), t4.watchListeners.push(e7), async () => {
        t4.watchListeners = t4.watchListeners.filter((t5) => t5 !== e7), 0 === t4.watchListeners.length && await stopWatch();
      }), async unwatch() {
        t4.watchListeners = [], await stopWatch();
      }, mount(e7, n2) {
        if ((e7 = normalizeBaseKey(e7)) && t4.mounts[e7])
          throw new Error(`already mounted at ${e7}`);
        return e7 && (t4.mountpoints.push(e7), t4.mountpoints.sort((e8, t5) => t5.length - e8.length)), t4.mounts[e7] = n2, t4.watching && Promise.resolve(watch2(n2, onChange, e7)).then((r5) => {
          t4.unwatch[e7] = r5;
        }).catch(console.error), r4;
      }, async unmount(e7, r5 = true) {
        (e7 = normalizeBaseKey(e7)) && t4.mounts[e7] && (t4.watching && e7 in t4.unwatch && (t4.unwatch[e7](), delete t4.unwatch[e7]), r5 && await dispose(t4.mounts[e7]), t4.mountpoints = t4.mountpoints.filter((t5) => t5 !== e7), delete t4.mounts[e7]);
      }, getMount(e7 = "") {
        e7 = normalizeKey$1(e7) + ":";
        const t5 = getMount(e7);
        return { driver: t5.driver, base: t5.base };
      }, getMounts(e7 = "", t5 = {}) {
        e7 = normalizeKey$1(e7);
        return getMounts(e7, t5.parents).map((e8) => ({ driver: e8.driver, base: e8.mountpoint }));
      } };
      return r4;
    }({});
    Qe2.mount("/assets", Ke2);
    Ve2 = { name: "_", base: "/cache", swr: true, maxAge: 1 };
    cachedFunction = function(e6, t4 = {}) {
      t4 = { ...Ve2, ...t4 };
      const r4 = {}, n2 = t4.group || "nitro/functions", o6 = t4.name || e6.name || "_", s2 = t4.integrity || hash([e6, t4]), i3 = t4.validate || ((e7) => void 0 !== e7.value);
      return async (...a3) => {
        if (await t4.shouldBypassCache?.(...a3))
          return e6(...a3);
        const u3 = await (t4.getKey || getKey)(...a3), c2 = await t4.shouldInvalidateCache?.(...a3), f2 = await async function(e7, a4, u4, c3) {
          const f3 = [t4.base, n2, o6, e7 + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
          let l3 = await useStorage().getItem(f3) || {};
          if ("object" != typeof l3) {
            l3 = {};
            const e8 = new Error("Malformed data read from cache.");
            console.error("[nitro] [cache]", e8), useNitroApp().captureError(e8, { event: c3, tags: ["cache"] });
          }
          const h3 = 1e3 * (t4.maxAge ?? t4.maxAge ?? 0);
          h3 && (l3.expires = Date.now() + h3);
          const d2 = u4 || l3.integrity !== s2 || h3 && Date.now() - (l3.mtime || 0) > h3 || false === i3(l3), p2 = d2 ? (async () => {
            const n3 = r4[e7];
            n3 || (void 0 !== l3.value && (t4.staleMaxAge || 0) >= 0 && false === t4.swr && (l3.value = void 0, l3.integrity = void 0, l3.mtime = void 0, l3.expires = void 0), r4[e7] = Promise.resolve(a4()));
            try {
              l3.value = await r4[e7];
            } catch (t5) {
              throw n3 || delete r4[e7], t5;
            }
            if (!n3 && (l3.mtime = Date.now(), l3.integrity = s2, delete r4[e7], false !== i3(l3))) {
              const e8 = useStorage().setItem(f3, l3).catch((e9) => {
                console.error("[nitro] [cache] Cache write error.", e9), useNitroApp().captureError(e9, { event: c3, tags: ["cache"] });
              });
              c3 && c3.waitUntil && c3.waitUntil(e8);
            }
          })() : Promise.resolve();
          return void 0 === l3.value ? await p2 : d2 && c3 && c3.waitUntil && c3.waitUntil(p2), t4.swr && false !== i3(l3) ? (p2.catch((e8) => {
            console.error("[nitro] [cache] SWR handler error.", e8), useNitroApp().captureError(e8, { event: c3, tags: ["cache"] });
          }), l3) : p2.then(() => l3);
        }(u3, () => e6(...a3), c2, a3[0] && isEvent(a3[0]) ? a3[0] : void 0);
        let l2 = f2.value;
        return t4.transform && (l2 = await t4.transform(f2, ...a3) || l2), l2;
      };
    };
    cachedEventHandler = function(e6, t4 = Ve2) {
      const r4 = (t4.varies || []).filter(Boolean).map((e7) => e7.toLowerCase()).sort(), n2 = { ...t4, getKey: async (e7) => {
        const n3 = await t4.getKey?.(e7);
        if (n3)
          return escapeKey(n3);
        const o7 = e7.node.req.originalUrl || e7.node.req.url || e7.path;
        return [`${escapeKey(decodeURI(parseURL(o7).pathname)).slice(0, 16) || "index"}.${hash(o7)}`, ...r4.map((t5) => [t5, e7.node.req.headers[t5]]).map(([e8, t5]) => `${escapeKey(e8)}.${hash(t5)}`)].join(":");
      }, validate: (e7) => !!e7.value && (!(e7.value.code >= 400) && (void 0 !== e7.value.body && ("undefined" !== e7.value.headers.etag && "undefined" !== e7.value.headers["last-modified"]))), group: t4.group || "nitro/handlers", integrity: t4.integrity || hash([e6, t4]) }, o6 = cachedFunction(async (o7) => {
        const s2 = {};
        for (const e7 of r4)
          s2[e7] = o7.node.req.headers[e7];
        const i3 = cloneWithProxy(o7.node.req, { headers: s2 }), a3 = {};
        let u3;
        const c2 = createEvent(i3, cloneWithProxy(o7.node.res, { statusCode: 200, writableEnded: false, writableFinished: false, headersSent: false, closed: false, getHeader: (e7) => a3[e7], setHeader(e7, t5) {
          return a3[e7] = t5, this;
        }, getHeaderNames: () => Object.keys(a3), hasHeader: (e7) => e7 in a3, removeHeader(e7) {
          delete a3[e7];
        }, getHeaders: () => a3, end(e7, t5, r5) {
          return "string" == typeof e7 && (u3 = e7), "function" == typeof t5 && t5(), "function" == typeof r5 && r5(), this;
        }, write(e7, t5, r5) {
          return "string" == typeof e7 && (u3 = e7), "function" == typeof t5 && t5(), "function" == typeof r5 && r5(), this;
        }, writeHead(e7, t5) {
          if (this.statusCode = e7, t5)
            for (const e8 in t5)
              this.setHeader(e8, t5[e8]);
          return this;
        } }));
        c2.fetch = (e7, t5) => fetchWithEvent(c2, e7, t5, { fetch: useNitroApp().localFetch }), c2.$fetch = (e7, t5) => fetchWithEvent(c2, e7, t5, { fetch: globalThis.$fetch }), c2.context = o7.context, c2.context.cache = { options: n2 };
        const f2 = await e6(c2) || u3, l2 = c2.node.res.getHeaders();
        l2.etag = String(l2.Etag || l2.etag || `W/"${hash(f2)}"`), l2["last-modified"] = String(l2["Last-Modified"] || l2["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString());
        const h3 = [];
        t4.swr ? (t4.maxAge && h3.push(`s-maxage=${t4.maxAge}`), t4.staleMaxAge ? h3.push(`stale-while-revalidate=${t4.staleMaxAge}`) : h3.push("stale-while-revalidate")) : t4.maxAge && h3.push(`max-age=${t4.maxAge}`), h3.length > 0 && (l2["cache-control"] = h3.join(", "));
        return { code: c2.node.res.statusCode, headers: l2, body: f2 };
      }, n2);
      return defineEventHandler(async (r5) => {
        if (t4.headersOnly) {
          if (handleCacheHeaders(r5, { maxAge: t4.maxAge }))
            return;
          return e6(r5);
        }
        const n3 = await o6(r5);
        if (r5.node.res.headersSent || r5.node.res.writableEnded)
          return n3.body;
        if (!handleCacheHeaders(r5, { modifiedTime: new Date(n3.headers["last-modified"]), etag: n3.headers.etag, maxAge: t4.maxAge })) {
          r5.node.res.statusCode = n3.code;
          for (const e7 in n3.headers) {
            const t5 = n3.headers[e7];
            "set-cookie" === e7 ? r5.node.res.appendHeader(e7, splitCookiesString(t5)) : r5.node.res.setHeader(e7, t5);
          }
          return n3.body;
        }
      });
    };
    Ge2 = toRouteMatcher(createRouter$1({ routes: useRuntimeConfig2().nitro.routeRules }));
    Je2 = [];
    errorHandler = async function(e6, t4) {
      const { stack: r4, statusCode: n2, statusMessage: o6, message: s2 } = function(e7) {
        const t5 = "function" == typeof B2.cwd ? B2.cwd() : "/", r5 = (e7.stack || "").split("\n").splice(1).filter((e8) => e8.includes("at ")).map((e8) => ({ text: e8.replace(t5 + "/", "./").replace("webpack:/", "").replace("file://", "").trim(), internal: e8.includes("node_modules") && !e8.includes(".cache") || e8.includes("internal") || e8.includes("new Promise") })), n3 = e7.statusCode || 500, o7 = e7.statusMessage ?? (404 === n3 ? "Not Found" : ""), s3 = e7.message || e7.toString();
        return { stack: r5, statusCode: n3, statusMessage: o7, message: s3 };
      }(e6), i3 = { url: t4.path, statusCode: n2, statusMessage: o6, message: s2, stack: "", data: e6.data };
      if (e6.unhandled || e6.fatal) {
        const t5 = ["[nuxt]", "[request error]", e6.unhandled && "[unhandled]", e6.fatal && "[fatal]", 200 !== Number(i3.statusCode) && `[${i3.statusCode}]`].filter(Boolean).join(" ");
        console.error(t5, i3.message + "\n" + r4.map((e7) => "  " + e7.text).join("  \n"));
      }
      if (t4.handled)
        return;
      if (setResponseStatus(t4, 200 !== i3.statusCode && i3.statusCode || 500, i3.statusMessage), function(e7) {
        if (hasReqHeader(e7, "accept", "text/html"))
          return false;
        return hasReqHeader(e7, "accept", "application/json") || hasReqHeader(e7, "user-agent", "curl/") || hasReqHeader(e7, "user-agent", "httpie/") || hasReqHeader(e7, "sec-fetch-mode", "cors") || e7.path.startsWith("/api/") || e7.path.endsWith(".json");
      }(t4))
        return setResponseHeader(t4, "Content-Type", "application/json"), send(t4, JSON.stringify(i3));
      const a3 = getRequestHeaders(t4), u3 = t4.path.startsWith("/__nuxt_error") || !!a3["x-nuxt-error"] ? null : await useNitroApp().localFetch(withQuery(joinURL(useRuntimeConfig2(t4).app.baseURL, "/__nuxt_error"), i3), { headers: { ...a3, "x-nuxt-error": "true" }, redirect: "manual" }).catch(() => null);
      if (!u3) {
        const { template: e7 } = await Promise.resolve().then(() => (init_error_500(), error_500_exports));
        if (t4.handled)
          return;
        return setResponseHeader(t4, "Content-Type", "text/html;charset=UTF-8"), send(t4, e7(i3));
      }
      const c2 = await u3.text();
      if (!t4.handled) {
        for (const [e7, r5] of u3.headers.entries())
          setResponseHeader(t4, e7, r5);
        return setResponseStatus(t4, u3.status && 200 !== u3.status ? u3.status : void 0, u3.statusText), send(t4, c2);
      }
    };
    _lazy_lFs6nj = () => Promise.resolve().then(() => (init_renderer(), renderer_exports)).then(function(e6) {
      return e6.R;
    });
    Ye2 = [{ route: "/api/teste", handler: () => Promise.resolve().then(() => (init_teste_get(), teste_get_exports)), lazy: true, middleware: false, method: "get" }, { route: "/__nuxt_error", handler: _lazy_lFs6nj, lazy: true, middleware: false, method: void 0 }, { route: "/**", handler: _lazy_lFs6nj, lazy: true, middleware: false, method: void 0 }];
    Ze2 = function() {
      const e6 = useRuntimeConfig2(), t4 = createHooks(), captureError = (e7, r5 = {}) => {
        const n3 = t4.callHookParallel("error", e7, r5).catch((e8) => {
          console.error("Error while capturing another error", e8);
        });
        if (r5.event && isEvent(r5.event)) {
          const t5 = r5.event.context.nitro?.errors;
          t5 && t5.push({ error: e7, context: r5 }), r5.event.waitUntil && r5.event.waitUntil(n3);
        }
      }, r4 = createApp2({ debug: destr(false), onError: (e7, t5) => (captureError(e7, { event: t5, tags: ["request"] }), errorHandler(e7, t5)), onRequest: async (e7) => {
        await Ze2.hooks.callHook("request", e7).catch((t5) => {
          captureError(t5, { event: e7, tags: ["request"] });
        });
      }, onBeforeResponse: async (e7, t5) => {
        await Ze2.hooks.callHook("beforeResponse", e7, t5).catch((t6) => {
          captureError(t6, { event: e7, tags: ["request", "response"] });
        });
      }, onAfterResponse: async (e7, t5) => {
        await Ze2.hooks.callHook("afterResponse", e7, t5).catch((t6) => {
          captureError(t6, { event: e7, tags: ["request", "response"] });
        });
      } }), n2 = function(e7 = {}) {
        const t5 = createRouter$1({}), r5 = {};
        let n3;
        const o7 = {}, addRoute = (e8, n4, s4) => {
          let i4 = r5[e8];
          if (i4 || (r5[e8] = i4 = { path: e8, handlers: {} }, t5.insert(e8, i4)), Array.isArray(s4))
            for (const t6 of s4)
              addRoute(e8, n4, t6);
          else
            i4.handlers[s4] = toEventHandler(n4, 0, e8);
          return o7;
        };
        o7.use = o7.add = (e8, t6, r6) => addRoute(e8, t6, r6 || "all");
        for (const e8 of Be2)
          o7[e8] = (t6, r6) => o7.add(t6, r6, e8);
        const matchHandler = (e8 = "/", r6 = "get") => {
          const o8 = e8.indexOf("?");
          -1 !== o8 && (e8 = e8.slice(0, Math.max(0, o8)));
          const s4 = t5.lookup(e8);
          if (!s4 || !s4.handlers)
            return { error: createError({ statusCode: 404, name: "Not Found", statusMessage: `Cannot find any route matching ${e8 || "/"}.` }) };
          let i4 = s4.handlers[r6] || s4.handlers.all;
          if (!i4) {
            n3 || (n3 = toRouteMatcher(t5));
            const o9 = n3.matchAll(e8).reverse();
            for (const e9 of o9) {
              if (e9.handlers[r6]) {
                i4 = e9.handlers[r6], s4.handlers[r6] = s4.handlers[r6] || i4;
                break;
              }
              if (e9.handlers.all) {
                i4 = e9.handlers.all, s4.handlers.all = s4.handlers.all || i4;
                break;
              }
            }
          }
          return i4 ? { matched: s4, handler: i4 } : { error: createError({ statusCode: 405, name: "Method Not Allowed", statusMessage: `Method ${r6} is not allowed on this route.` }) };
        }, s3 = e7.preemptive || e7.preemtive;
        return o7.handler = ve2((e8) => {
          const t6 = matchHandler(e8.path, e8.method.toLowerCase());
          if ("error" in t6) {
            if (s3)
              throw t6.error;
            return;
          }
          e8.context.matchedRoute = t6.matched;
          const r6 = t6.matched.params || {};
          return e8.context.params = r6, Promise.resolve(t6.handler(e8)).then((e9) => void 0 === e9 && s3 ? null : e9);
        }), o7.handler.__resolve__ = async (e8) => {
          e8 = withLeadingSlash(e8);
          const t6 = matchHandler(e8);
          if ("error" in t6)
            return;
          let r6 = { route: t6.matched.path, handler: t6.handler };
          if (t6.handler.__resolve__) {
            const n4 = await t6.handler.__resolve__(e8);
            if (!n4)
              return;
            r6 = { ...r6, ...n4 };
          }
          return r6;
        }, o7;
      }({ preemptive: true }), o6 = (s2 = toNodeListener(r4), function(e7) {
        const t5 = new IncomingMessage(), r5 = new ServerResponse(t5);
        if (t5.url = e7.url || "/", t5.method = e7.method || "GET", t5.headers = {}, e7.headers) {
          const r6 = "function" == typeof e7.headers.entries ? e7.headers.entries() : Object.entries(e7.headers);
          for (const [e8, n3] of r6)
            n3 && (t5.headers[e8.toLowerCase()] = n3);
        }
        return t5.headers.host = t5.headers.host || e7.host || "localhost", t5.connection.encrypted = t5.connection.encrypted || "https" === e7.protocol, t5.body = e7.body || null, t5.__unenv__ = e7.context, s2(t5, r5).then(() => {
          let e8 = r5._data;
          (Oe2.has(r5.statusCode) || "HEAD" === t5.method.toUpperCase()) && (e8 = null, delete r5._headers["content-length"]);
          const n3 = { body: e8, headers: r5._headers, status: r5.statusCode, statusText: r5.statusMessage };
          return t5.destroy(), r5.destroy(), n3;
        });
      });
      var s2;
      const i3 = function(e7, t5 = global.fetch) {
        return async function(r5, n3) {
          const o7 = r5.toString();
          if (!o7.startsWith("/"))
            return t5(o7, n3);
          try {
            const t6 = await e7({ url: o7, ...n3 });
            return new Response(t6.body, { status: t6.status, statusText: t6.statusText, headers: Object.fromEntries(Object.entries(t6.headers).map(([e8, t7]) => [e8, Array.isArray(t7) ? t7.join(",") : String(t7) || ""])) });
          } catch (e8) {
            return new Response(e8.toString(), { status: Number.parseInt(e8.statusCode || e8.code) || 500, statusText: e8.statusText });
          }
        };
      }(o6, globalThis.fetch), localFetch = (e7, t5) => i3(e7, t5).then((e8) => function(e9) {
        if (!e9.headers.has("set-cookie"))
          return e9;
        return new Response(e9.body, { status: e9.status, statusText: e9.statusText, headers: normalizeCookieHeaders(e9.headers) });
      }(e8)), a3 = createFetch$1({ fetch: localFetch, Headers: Te2, defaults: { baseURL: e6.app.baseURL } });
      globalThis.$fetch = a3, r4.use(createRouteRulesHandler({ localFetch })), r4.use(ve2((e7) => {
        e7.context.nitro = e7.context.nitro || { errors: [] };
        const t5 = e7.node.req?.__unenv__;
        t5 && Object.assign(e7.context, t5), e7.fetch = (t6, r5) => fetchWithEvent(e7, t6, r5, { fetch: localFetch }), e7.$fetch = (t6, r5) => fetchWithEvent(e7, t6, r5, { fetch: a3 }), e7.waitUntil = (r5) => {
          e7.context.nitro._waitUntilPromises || (e7.context.nitro._waitUntilPromises = []), e7.context.nitro._waitUntilPromises.push(r5), t5?.waitUntil && t5.waitUntil(r5);
        }, e7.captureError = (t6, r5) => {
          captureError(t6, { event: e7, ...r5 });
        };
      }));
      for (const t5 of Ye2) {
        let o7 = t5.lazy ? lazyEventHandler(t5.handler) : t5.handler;
        if (t5.middleware || !t5.route) {
          const n3 = (e6.app.baseURL + (t5.route || "/")).replace(/\/+/g, "/");
          r4.use(n3, o7);
        } else {
          const e7 = getRouteRulesForPath(t5.route.replace(/:\w+|\*\*/g, "_"));
          e7.cache && (o7 = cachedEventHandler(o7, { group: "nitro/routes", ...e7.cache })), n2.use(t5.route, o7, t5.method);
        }
      }
      r4.use(e6.app.baseURL, n2.handler);
      const u3 = { hooks: t4, h3App: r4, router: n2, localCall: o6, localFetch, captureError };
      for (const e7 of Je2)
        try {
          e7(u3);
        } catch (e8) {
          throw captureError(e8, { tags: ["plugin"] }), e8;
        }
      return u3;
    }();
    useNitroApp = () => Ze2;
    Xe2 = /post|put|patch/i;
    et2 = { "/favicon.ico": { type: "image/vnd.microsoft.icon", etag: '"10be-n8egyE9tcb7sKGr/pYCaQ4uWqxI"', mtime: "2024-08-09T08:56:21.000Z", size: 4286, path: "../favicon.ico" }, "/robots.txt": { type: "text/plain; charset=utf-8", etag: '"1-rcg7GeeTSRscbqD9i0bNnzLlkvw"', mtime: "2024-08-09T08:56:21.000Z", size: 1, path: "../robots.txt" }, "/_nuxt/BAKNzro0.js": { type: "text/javascript; charset=utf-8", etag: '"1d2-2pLdl012GjKu9IfMUteD+cglMVQ"', mtime: "2024-08-20T01:22:04.491Z", size: 466, path: "../_nuxt/BAKNzro0.js" }, "/_nuxt/BT_PhuNT.js": { type: "text/javascript; charset=utf-8", etag: '"1f233-AOc+Xq2K40sSjUrgYtP1OJZ+I9g"', mtime: "2024-08-20T01:22:04.492Z", size: 127539, path: "../_nuxt/BT_PhuNT.js" }, "/_nuxt/BWTkOzGX.js": { type: "text/javascript; charset=utf-8", etag: '"2029-rM9nBb04tSeGo6gKgXZvJ0NgsWU"', mtime: "2024-08-20T01:22:04.492Z", size: 8233, path: "../_nuxt/BWTkOzGX.js" }, "/_nuxt/COS2-k3p.js": { type: "text/javascript; charset=utf-8", etag: '"ace-SbBxsvrYhgOrhwVXM6AOGdP05iY"', mtime: "2024-08-20T01:22:04.492Z", size: 2766, path: "../_nuxt/COS2-k3p.js" }, "/_nuxt/error-404.CjGVuf6H.css": { type: "text/css; charset=utf-8", etag: '"de4-SLOwa5sHvQIi2t5fYZEgfDusMUc"', mtime: "2024-08-20T01:22:04.489Z", size: 3556, path: "../_nuxt/error-404.CjGVuf6H.css" }, "/_nuxt/error-500.DFBAsgKS.css": { type: "text/css; charset=utf-8", etag: '"75c-I8wgoT19gdl/gPtizNKXfkn+TtQ"', mtime: "2024-08-20T01:22:04.491Z", size: 1884, path: "../_nuxt/error-500.DFBAsgKS.css" }, "/_nuxt/builds/latest.json": { type: "application/json", etag: '"47-oZF268RlGrdqyAa/dt37BlwDqwU"', mtime: "2024-08-20T01:22:05.942Z", size: 71, path: "../_nuxt/builds/latest.json" }, "/_nuxt/builds/meta/8547ad9c-6d98-40ca-b803-7508458638b6.json": { type: "application/json", etag: '"8b-s6Rh0Y7QhaBwVoAnlvFhaFg3PVs"', mtime: "2024-08-20T01:22:05.942Z", size: 139, path: "../_nuxt/builds/meta/8547ad9c-6d98-40ca-b803-7508458638b6.json" } };
    tt2 = { "/_nuxt/builds/meta/": { maxAge: 31536e3 }, "/_nuxt/builds/": { maxAge: 1 }, "/_nuxt/": { maxAge: 31536e3 } };
    rt2 = { async fetch(e6, t4, r4) {
      const n2 = new URL(e6.url);
      if (t4.ASSETS && function(e7 = "") {
        if (et2[e7])
          return true;
        for (const t5 in tt2)
          if (e7.startsWith(t5))
            return true;
        return false;
      }(n2.pathname))
        return t4.ASSETS.fetch(e6);
      let o6;
      return function(e7) {
        return Xe2.test(e7.method);
      }(e6) && (o6 = f.from(await e6.arrayBuffer())), globalThis.__env__ = t4, Ze2.localFetch(n2.pathname + n2.search, { context: { cf: e6.cf, waitUntil: (e7) => r4.waitUntil(e7), cloudflare: { request: e6, env: t4, context: r4 } }, host: n2.hostname, protocol: n2.protocol, method: e6.method, headers: e6.headers, body: o6 });
    }, scheduled(e6, t4, r4) {
    } };
  }
});

// .wrangler/tmp/bundle-SA88yO/middleware-loader.entry.ts
init_checked_fetch();
init_modules_watch_stub();

// .wrangler/tmp/bundle-SA88yO/middleware-insertion-facade.js
init_checked_fetch();
init_modules_watch_stub();

// .wrangler/tmp/pages-brm1ok/4bx7yh1rmlw.js
init_checked_fetch();
init_modules_watch_stub();

// .wrangler/tmp/pages-brm1ok/bundledWorker-0.5614559709132367.mjs
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

// .wrangler/tmp/pages-brm1ok/4bx7yh1rmlw.js
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

// .wrangler/tmp/bundle-SA88yO/middleware-insertion-facade.js
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

// .wrangler/tmp/bundle-SA88yO/middleware-loader.entry.ts
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
//# sourceMappingURL=4bx7yh1rmlw.js.map
