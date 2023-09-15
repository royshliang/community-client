import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import path from 'path'

import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),

        VitePWA({
            version: "0.0.7",
            registerType: 'autoUpdate',
            manifest: {
                name: 'My Awesome App',
                short_name: 'MyApp',
                description: 'My Awesome App description',
                theme_color: '#ffffff',
                icons: [
                    {
                        src: 'icon-192x192.png',
                        sizes: '192x192',
                        type: 'image/png'
                    },
                    {
                        src: 'icon-512x512.png',
                        sizes: '512x512',
                        type: 'image/png'
                    }
                ]
            },
            
            workbox: {
                // ...
                importScripts: ["firebase-messaging-sw.js"],
                // ...
                globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
                // ...
                runtimeCaching: [
                    {
                        urlPattern: /^https:\/\/community-api-c7kj.onrender.com/,
                        handler: "NetworkFirst",
                        options: {
                            cacheName: "api-cache",
                            cacheableResponse: {
                                statuses: [0, 200],
                            },
                        },
                    },
                ]
            },

        })
    ],

    resolve: {
        alias: {
            "@":         path.resolve(__dirname, "src"),
            "@sweet"    : path.resolve(__dirname, "node_modules/sweetalert2"),
            "@bootstrap": path.resolve(__dirname, 'node_modules/bootstrap'),
            "@vueloader": path.resolve(__dirname, "node_modules/vue-loading-overlay"),
            "@vuetoasty": path.resolve(__dirname, "node_modules/vue-toastification"),
        }
    }
})
