if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,r)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let f={};const o=e=>n(e,c),d={module:{uri:c},exports:f,require:o};i[c]=Promise.all(s.map((e=>d[e]||o(e)))).then((e=>(r(...e),f)))}}define(["./workbox-8f82f6f2"],(function(e){"use strict";importScripts("firebase-messaging-sw.js"),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-1fb23fc7.css",revision:null},{url:"assets/index-d2ed88f2.js",revision:null},{url:"firebase-messaging-sw.js",revision:"c1ee11d6d9bd75426084817636e65d5f"},{url:"icon-128x128.png",revision:"e9eb4de106b0529dfe6f162d426befd4"},{url:"icon-144x144.png",revision:"171cc71c0656e9f745fb133b45f27178"},{url:"icon-152x152.png",revision:"865f462ba5197f4314395d0d1b0929e4"},{url:"icon-192x192.png",revision:"1b3d4d5ba8a8a1b3295f9a0685d0e096"},{url:"icon-384x384.png",revision:"afbb20fd89df6b1357ff2cf9fc0019db"},{url:"icon-48x48.png",revision:"fe4c767e92b30faec875fa4d2d73393b"},{url:"icon-512x512.png",revision:"7ee5af437c0b367af5baa972d29ac4cb"},{url:"icon-72x72.png",revision:"e2b379c96291b06db5442d60cbf63f8f"},{url:"icon-96x96.png",revision:"50872f49b4ae6a4e5b2e169f9391703f"},{url:"index.html",revision:"a7434a747264f7e4bf288c06a16c5479"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"vite.svg",revision:"8e3a10e157f75ada21ab742c022d5430"},{url:"icon-192x192.png",revision:"1b3d4d5ba8a8a1b3295f9a0685d0e096"},{url:"icon-512x512.png",revision:"7ee5af437c0b367af5baa972d29ac4cb"},{url:"manifest.webmanifest",revision:"00cf61652adc7ec716af753b160c2c4b"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute(/^https:\/\/community-api-c7kj.onrender.com/,new e.NetworkFirst({cacheName:"api-cache",plugins:[new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));
