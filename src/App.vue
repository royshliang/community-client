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

                <a class="navbar-brand">0.7.0</a>
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

    <!-- <button type="button" @click="installApp" v-if="deferredPrompt != null">INSTALL PROMPT MEH6?</button> -->
</template>

<script setup>
    import { ref, onMounted } from 'vue'
    import { useRouter } from 'vue-router'
    import { useAuthStore } from '@/stores/AuthStore'

    const authStore = useAuthStore()
    const router = useRouter()

    // --- 1. pwa installation prompt
    // import { getMessaging, getToken, onMessage } from "firebase/messaging";
    // const deferredPrompt = ref(null)
    // window.addEventListener("beforeinstallprompt", (e) => {
    // //     e.preventDefault();
    // //     deferredPrompt.value = e;
    // // });
    // // async function installApp() {
    // //     deferredPrompt.value.prompt()
    // //     deferredPrompt.value = null
    // // }

    // // --- 2. foreground notification display
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
</script>

<style scoped></style>