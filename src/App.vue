<template>
    <div class="p-2">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                <!-- 
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <a class="navbar-brand" href="#">HELP</a>
                </div> 
                -->

                <a class="navbar-brand">0.9.3</a>
                <div class="d-flex justify-content-between gap-3" v-if="authStore.getUser">
                    <div class="text-light">{{ authStore.getUser.email }}</div>
                    <div>
                        <button type="button" class="btn btn-sm btn-primary" @click="logout">logout</button>
                    </div>
                </div>
            </div>
        </nav>
        
        <div class="container">
            <router-view></router-view>
        </div>
    </div>

    <!-- <footer class="footer mt-auto py-3 bg-light" v-if="deferredPrompt && authStore.getUser">
        <div class="container text-center">
            <button type="button" @click="installApp">Install App on your device</button>
        </div>
    </footer> -->

    <!-- <button type="button" @click="installApp" v-if="deferredPrompt != null">INSTALL PROMPT MEH6?</button> -->
</template>

<script setup>
    import { ref, onMounted, watch, onBeforeUnmount } from 'vue'
    import { useRouter } from 'vue-router'
    import { useAuthStore } from '@/stores/AuthStore'


    // ===================================================== //
    // const SpeechRecognition       = window.SpeechRecognition || window.webkitSpeechRecognition
    // const SpeechGrammarList       = window.SpeechGrammarList || window.webkitSpeechGrammarList
    // const SpeechRecognitionEvent  = window.SpeechRecognitionEvent || window.webkitSpeechRecognitionEvent;

    // const colors = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
    // const grammar = `#JSGF V1.0; grammar colors; public <color> = ${colors.join(" | ",)};`;

    // const recognition = new SpeechRecognition()
    // const speechRecognitionList = new SpeechGrammarList()
    // speechRecognitionList.addFromString(grammar, 1);

    // recognition.grammars = speechRecognitionList;
    // recognition.continuous = true;
    // recognition.lang = "en-US";
    // recognition.interimResults = false;
    // recognition.maxAlternatives = 1;

    // recognition.start()

    // recognition.onresult = (event) => {
    //     debugger;
    //     let lastIndex = event.results.length == 0 ? 0 : event.results.length - 1;
    //     const color = event.results[lastIndex][0].transcript;
    //     const confidence = event.results[lastIndex][0].confidence;

    //     if(confidence > 0) {
    //         let found = colors.findIndex(x => x == color.trim())
    //         if(found >= 0) {
    //             debugger;
    //         }
    //     }
    //     else console.log("bad bad bad")
    //     // console.log(`Confidence: ${event.results[lastIndex][0].confidence} :: ${color}`);
    // };
    // recognition.onnomatch = (event) => {
    //     debugger;
    // };
    // recognition.onerror = (event) => {
    //     debugger;
    // };

    // ===================================================== //

    const authStore = useAuthStore()
    const router = useRouter()

    // --- 1. pwa installation prompt
    const deferredPrompt = ref(null)
    window.addEventListener("beforeinstallprompt", (e) => {
        debugger;
        e.preventDefault();
        deferredPrompt.value = e;
    });
    async function installApp() {
        deferredPrompt.value.prompt()
        deferredPrompt.value = null
    }


    // // --- 2. foreground notification display
    // import { getMessaging, getToken, onMessage } from "firebase/messaging";
    // const messaging = getMessaging();
    // onMessage(messaging, (payload) => {
    //     console.log('Message received. ', JSON.stringify(payload))
    //     let msgData = payload.notification || payload.data
    //     alert(msgData.title)
    // });

    // // --- 3. offline / online events
    // window.addEventListener('online', () => console.log('Became online'));
    // window.addEventListener('offline', () => console.log('Became offline'));


    function logout() {
        authStore.logout()
        router.push("/login")
    }

    onMounted(() => {
    })

    onBeforeUnmount(() => {
    });
</script>

<style scoped>
    .footer {
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        background-color: red;
        color: white;
        text-align: center;
    }
</style>