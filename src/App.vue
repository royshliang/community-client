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

                <a class="navbar-brand">0.8.6</a>
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

    <footer class="footer">
        <button class="start-button" v-on:click="initEngine">
            Init Porcupine
      </button>
      <button class="start-button" v-on:click="startEngine">
            Start Porcupine
      </button>
      <button class="start-button" v-on:click="stopEngine">
            Stop Porcupine
      </button>            
    </footer>
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

    import { BuiltInKeyword } from '@picovoice/porcupine-web';
    import { usePorcupine } from '@picovoice/porcupine-vue';

    const porcupine = usePorcupine()
    const porcupineModel = {
        publicPath: "./porcupine_params.pv",
    }

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

    watch(() => porcupine.state.keywordDetection,
      keyword => {
        if (keyword !== null) {
            console.log(keyword)
            alert("heard you !!!")
            detections.value.push(keyword.label);
        }
      }
    );
    watch(() => porcupine.state.isLoaded,
      n => {
        alert("watch:isLoaded " + n)
      }
    );
    watch(() => porcupine.state.isListening,
      n => {
        alert("watch:isListening " + n)
      }
    );    

    // watch("porcupine.state.keywordDetection", async (n, o) => {
    //     console.log(n)
    // })
    // watch(porcupine.state.isLoaded, async (n, o) => {
    //     console.log(n)
    // })
    // watch(porcupine.state.isListening, async (n, o) => {
    //     console.log(n)
    // })

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

    async function initEngine() {
      alert("initengine")
    //   if (porcupine.state.isLoaded) {
    //       await porcupine.release();
    //       console.log("release")
    //   }

      await porcupine.release();
      alert("release")
      await porcupine.init("T9Eqi1fhE6XyKizyun8yVbiobm6fKlrDBrPzy1lbU6H8XOaV4xsqpw==", [BuiltInKeyword.Porcupine], porcupineModel)
      alert("init")
    }

    function startEngine() {
        porcupine.start()
    }
    function stopEngine() {
        porcupine.stop()
    }

    function logout() {
        authStore.logout()

        router.push("/login")
    }

    onMounted(() => {
    })
    onBeforeUnmount(() => {
      porcupine.release();
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