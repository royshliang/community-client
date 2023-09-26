<template>
    <div class="container pt-5">
        <div class="row text-center justify-content-center">
            <div class="col-12 col-md-6 col-xl-5">
                <div class="card border-0 rounded-4">
                    <div class="card-body p-3 p-md-4 p-xl-5">
                        <div class="row">
                            <div class="col-12">
                                <div class="mb-4">
                                    <h3>My Timetable</h3>
                                </div>
                            </div>
                        </div>

                        <div class="row gy-3 overflow-hidden">
                            <div class="col-12">
                                <div class="form-floating mb-1">
                                    <input type="email" class="form-control" name="email" id="email" v-model="email" :disabled="isLoading">
                                    <label for="email" class="form-label">Email</label>
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="d-grid">
                                    <button class="btn btn-primary btn-lg" @click="login" :disabled="isLoading">
                                        <span v-if="!isLoading">Log in</span>
                                        <span v-if="isLoading" class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { ref, onMounted } from 'vue'
    import { useRouter } from 'vue-router';
    import { useToast } from 'vue-toastification'
    import Swal from 'sweetalert2'

    import { useAuthStore } from '@/stores/AuthStore'

    import { getMessaging, getToken, onMessage } from "firebase/messaging";

    const email = ref('')
    const isLoading = ref(false)

    const authStore = useAuthStore()
    const toast = useToast()
    const router = useRouter()

    async function login() {
        let fbToken = null;

        // 1. ======================== F I R E B A S E   T O K E N =========================== //
        try
        {
            isLoading.value = true

            const messaging = getMessaging();
            await getToken(messaging, { vapidKey: 'BAybJDScOTCYPQAVYCSnqkVbpiAyQyJALWxe23NRHzRbofv5qDql2p1rxwrxuTpcqngTiCO9o5HToxhWGWdmFcg'})
                .then(async (result) => {
                    console.log("currentToken:" + result)

                    toast.info('Firebase Token received ! Notifications Enabled !')
                    fbToken = result
                })
                .catch((err) => {
                    //Swal.fire({ icon: 'error', text: 'An error occurred while retrieving notification token.'})
                });
        }
        catch(err) {
            //Swal.fire({ icon: 'error', text: err.message })
        }
        finally {
            isLoading.value = false
        }

        // 2. ============================ S T U D E N T   L O G I N =========================== // 
        try {
             isLoading.value = true

            await authStore.authenticate({email: email.value, token: fbToken});
            if(authStore.getUser != null) {
                toast.success("login successful");
            }            
        }
        catch(err) {
            Swal.fire({ icon: 'error', text: err.message })
        }
        finally {
            isLoading.value = false
        }

        // ----- this is just for info. App will still proceed
        if(!fbToken) {
            toast.warning("No tokens available. Notifications not enabled")
        }

        router.push("/timetable")
    }

    onMounted(() => {
        if(authStore.getUser != null) {
            router.push("/timetable")
        }
    })
</script>

<style scoped>
    .scan-confirmation {
        position: absolute;
        width: 100%;
        height: 100%;

        background-color: rgba(255, 255, 255, 0.8);

        display: flex;
        flex-flow: row nowrap;
        justify-content: center;
    }
</style>