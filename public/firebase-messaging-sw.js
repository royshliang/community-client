importScripts('https://www.gstatic.com/firebasejs/8.1.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.1.1/firebase-messaging.js');

var firebaseConfig = {
    apiKey: "AIzaSyD61Gsz3cx_8afusV3dArJzu7D6UEP7K8Q",
    authDomain: "vue-community-fcm.firebaseapp.com",
    projectId: "vue-community-fcm",
    storageBucket: "vue-community-fcm.appspot.com",
    messagingSenderId: "880762543904",
    appId: "1:880762543904:web:b50de0d276a2e0f0bbc145",
    measurementId: "G-QFD66SWDVQ"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
    };

    return self.registration.showNotification(notificationTitle, notificationOptions);
});

self.addEventListener('notificationclick', event => {
    console.log(event)
});