if(!self.define){let e,i={};const n=(n,r)=>(n=new URL(n+".js",r).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(r,c)=>{const f=e||("document"in self?document.currentScript.src:"")||location.href;if(i[f])return;let s={};const o=e=>n(e,f),a={module:{uri:f},exports:s,require:o};i[f]=Promise.all(r.map((e=>a[e]||o(e)))).then((e=>(c(...e),s)))}}define(["./workbox-8f82f6f2"],(function(e){"use strict";importScripts("firebase-messaging-sw.js"),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-257812f7.css",revision:null},{url:"checkmark.svg",revision:"55ee8a0f8b6c24e9659ed205584ff203"},{url:"firebase-messaging-sw.js",revision:"c42f8753bf51d6c6b3865dd910f9a2cd"},{url:"icon-128x128.png",revision:"e9eb4de106b0529dfe6f162d426befd4"},{url:"icon-144x144.png",revision:"171cc71c0656e9f745fb133b45f27178"},{url:"icon-152x152.png",revision:"865f462ba5197f4314395d0d1b0929e4"},{url:"icon-192x192.png",revision:"1b3d4d5ba8a8a1b3295f9a0685d0e096"},{url:"icon-384x384.png",revision:"afbb20fd89df6b1357ff2cf9fc0019db"},{url:"icon-48x48.png",revision:"fe4c767e92b30faec875fa4d2d73393b"},{url:"icon-512x512.png",revision:"7ee5af437c0b367af5baa972d29ac4cb"},{url:"icon-72x72.png",revision:"e2b379c96291b06db5442d60cbf63f8f"},{url:"icon-96x96.png",revision:"50872f49b4ae6a4e5b2e169f9391703f"},{url:"index.html",revision:"65ad6a36237a501ecf4cfb5ec47df707"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"vite.svg",revision:"8e3a10e157f75ada21ab742c022d5430"},{url:"icon-48x48.png",revision:"fe4c767e92b30faec875fa4d2d73393b"},{url:"icon-96x96.png",revision:"50872f49b4ae6a4e5b2e169f9391703f"},{url:"icon-192x192.png",revision:"1b3d4d5ba8a8a1b3295f9a0685d0e096"},{url:"icon-512x512.png",revision:"7ee5af437c0b367af5baa972d29ac4cb"},{url:"manifest.webmanifest",revision:"8de80b1f9cbb189ebc7bd6f509467088"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute(/^https:\/\/community-api-c7kj.onrender.com/,new e.NetworkFirst({cacheName:"api-cache",plugins:[new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));
