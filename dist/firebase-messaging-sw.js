importScripts('https://www.gstatic.com/firebasejs/8.1.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.1.1/firebase-messaging.js');

// 1. Initialize Firebase
var firebaseConfig = {
    apiKey: "AIzaSyD61Gsz3cx_8afusV3dArJzu7D6UEP7K8Q",
    authDomain: "vue-community-fcm.firebaseapp.com",
    projectId: "vue-community-fcm",
    storageBucket: "vue-community-fcm.appspot.com",
    messagingSenderId: "880762543904",
    appId: "1:880762543904:web:b50de0d276a2e0f0bbc145",
    measurementId: "G-QFD66SWDVQ"
};
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// 2. ------- handling background notifications
messaging.onBackgroundMessage((payload) => {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);

    const msgData = payload.notification || payload.data;

    const notificationTitle = msgData.title;
    const notificationOptions = {
        body: msgData.body,
        icon: "/icon-48x48.png"
    };
    self.registration.showNotification(notificationTitle, notificationOptions);
});
// 3. ------- handling notification click action
self.addEventListener('notificationclick', event => {
    event.notification.close();

    // event.waitUntil(
    //     clients.matchAll({
    //         includeUncontrolled: true,
    //         type: 'window'
    //     })
    //     .then(function(clientList) {
    //         for(var i=0; i<clientList.length; i++) {
    //             var client = clientList[i];
    //             if(client.url == "/" && 'focus' in client) {
    //                 return client.focus();
    //             }
    //             if(clients.openWindow) {
    //                 return clients.openWindow('/')
    //                             .then(e => {
    //                                 console.log("openWindow okok");
    //                                 console.log(e)
    //                             })
    //                             .catch(err => {
    //                                 console.log("openWindow failed");
    //                                 console.log(JSON.stringify(err))
    //                             })
    //             }
    //         }
    //     })
    // )
    //https://stackoverflow.com/questions/30302636/clients-openwindow-not-allowed-to-open-a-window-on-a-serviceworker-google-c?rq=4
    event.waitUntil(
        //do we have some windows of our app?
        self.clients.matchAll({includeUncontrolled: true, type: 'window'})
            .then(clientList =>{
                if(clientList.length === 0){
                    return self.clients.openWindow('/timetable')
                        .then((windowClient) => {
                            //we should focus new window and return Promise to terminate our event
                            return windowClient ? windowClient.focus() : Promise.resolve()
                        })
                }
                else clientList[0].focus()

                return Promise.resolve()
            }))
});