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

                <a class="navbar-brand">0.9.5</a>
                <div class="d-flex justify-content-between gap-3" v-if="studentStore.getStudent">
                    <div class="text-light">{{ studentStore.getStudent.email }}</div>
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

    <!-- --- ======================= P W A   F E A T U R E S ====================== --- -->
    <!-- 
    <footer class="footer mt-auto py-3 bg-light" v-if="deferredPrompt && authStore.getUser">
        <div class="container text-center">
            <button type="button" @click="installApp">Install App on your device</button>
        </div>
    </footer> 
    -->
    <!-- --- ======================= /P W A   F E A T U R E S ===================== --- -->

</template>

<script setup>
    import { useRouter } from 'vue-router'
    import { useStudentStore } from '@/stores/StudentStore'

    const studentStore = useStudentStore()
    const router = useRouter()

    // --- ======================= P W A   F E A T U R E S ====================== --- //
    // --- 1. pwa installation prompt
    // const deferredPrompt = ref(null)
    // window.addEventListener("beforeinstallprompt", (e) => {
    //     e.preventDefault();
    //     deferredPrompt.value = e;
    // });
    // async function installApp() {
    //     deferredPrompt.value.prompt()
    //     deferredPrompt.value = null
    // }
    //
    //  --- 2. foreground notification display
    import { getMessaging, getToken, onMessage } from "firebase/messaging";
    const messaging = getMessaging();
    onMessage(messaging, (payload) => {
        console.log('Message received. ', JSON.stringify(payload))
        let msgData = payload.notification || payload.data
        alert(msgData.title)
    });    
    // --- ======================= /P W A   F E A T U R E S ====================== --- //


    // --- =================== O P T I O N A L   F E A T U R E S ================ --- //
    // --- 1. offline / online events
    // window.addEventListener('online', () => {
    //    console.log('Became online')
    //});
    // window.addEventListener('offline', () => { 
    //    console.log('Became offline')
    //});
    // --- =================== /O P T I O N A L   F E A T U R E S ================ --- //

    function logout() {
        studentStore.logout()
        router.push("/login")
    }
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