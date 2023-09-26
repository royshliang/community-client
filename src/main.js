import { createApp } from 'vue'
import { createPinia } from 'pinia'

import Toast from 'vue-toastification'
import { POSITION } from 'vue-toastification'
import router from './routing/router'

import { VueQrcodeReader } from "vue-qrcode-reader";

import './styles/bootstrap.scss'
import '@sweet/dist/sweetalert2.min.css';
import '@vueloader/dist/css/index.css'
import '@vuetoasty/dist/index.css'

// ===================================================================================== //



// --- ======================= P W A   F E A T U R E S ============================ --- //
// --- 1. this is require for notifications
import { initializeApp } from 'firebase/app';
const fb = initializeApp({
    apiKey: "AIzaSyD61Gsz3cx_8afusV3dArJzu7D6UEP7K8Q",
    authDomain: "vue-community-fcm.firebaseapp.com",
    projectId: "vue-community-fcm",
    storageBucket: "vue-community-fcm.appspot.com",
    messagingSenderId: "880762543904",
    appId: "1:880762543904:web:b50de0d276a2e0f0bbc145",
    measurementId: "G-QFD66SWDVQ"
});
// // --- 2. for capturing sw events
// import { registerSW } from 'virtual:pwa-register'
// const updateSW = registerSW({
//     onNeedRefresh() {
//         alert('New Updates available !!!')
//         updateSW(true)
//     },
//     onRegisteredSW(swUrl, r) {
//         console.log("registered service worker")
//     },
// })
// --- ======================= /P W A   F E A T U R E S ============================ --- //

import App from './App.vue'
createApp(App)
    .use(router)
    .use(Toast,  { position: POSITION.TOP_CENTER, timeout: 2100 })
    .use(VueQrcodeReader)
    .use(createPinia())
    .mount('#app')

import 'bootstrap/dist/js/bootstrap'