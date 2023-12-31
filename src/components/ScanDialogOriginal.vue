<template>
    <div class="overlay">
        <div class="modal-display">

            <div class="text-center">
                <h6>Scan your Attendance</h6>
            </div>

            <div class="container-fluid p-3">
                <div class="row mb-3">
                    <div class="col-12 text-center">
                        <h5 class="fw-bold">{{ attendance.subjectName }}</h5>
                    </div>
                </div>

                <!-- <img src="./../../public/checkmark.svg" alt="Checkmark" width="128" /> -->
                <!-- <button type="button" class="btn btn-danger">Reload</button> -->

                <div class="row mb-3">
                    <div class="col-12" style="position: relative;">
                        <loading :active="isLoading" :is-full-page="false" />
                        <qrcode-stream :paused="paused" @detect="onDetect" @camera-on="onCameraOn" @camera-off="onCameraOff" @error="onError">
                            <div v-show="showScanConfirmation" class="scan-confirmation">
                                <img src="./../../public/checkmark.svg" alt="Checkmark" width="128" />
                                <div>
                                    <h2>Scan OKOK !. Thank you for attending class !!</h2>
                                </div>
                            </div>
                        </qrcode-stream>
                    </div>
                    <div class="col-12 text-center pt-2">
                        <p>** Scan any qrCode. This is a test</p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="d-flex justify-content-end">
                    <button type="button" class="btn btn-secondary" @click="closeDialog">Close</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { onMounted, ref, toRef } from 'vue'
    import { useAttendanceStore } from '@/stores/AttendanceStore'
    import { useToast } from 'vue-toastification'

    import Loading from 'vue-loading-overlay'
    import Swal from 'sweetalert2'

    const props = defineProps(['model'])
    const emit = defineEmits(['dialogClosed'])

    
    const attendance = toRef(props.model)
    const isLoading = ref(false)

    const toast = useToast()
    const attendanceStore = useAttendanceStore()

    function closeDialog() {
        emit('dialogClosed')
    }
 
    // --- ====================== Q R   C O D E   R E A D E R ================== -- //
    const showScanConfirmation = ref(false)
    const paused = ref(false)

    function onCameraOn() {
        isLoading.value = false;
        showScanConfirmation.value = false
    }
    function onCameraOff() {
        showScanConfirmation.value = true
    }
    function onError(err) {
        isLoading.value = false
        Swal.fire({
            icon: 'error',
            title: `<p>${err.message}</p>`,
            text: 'please make sure the device camera is not open in another application'})

        closeDialog()
    }
    
    async function onDetect(detectedCodes) {
        let result = JSON.stringify(detectedCodes.map(code => code.rawValue))
        if(result) {
            try {
                isLoading.value = true
                await attendanceStore.insert({subjectId: attendance.value.subjectId, email: attendance.value.studentEmail})

                toast.success("Attendance updated successfully") 
            }
            catch(err) {
                Swal.fire({icon: "error", text: err.message})
            }
            finally {
                isLoading.value = false
                closeDialog()
            }
        }

        paused.value = true
        await timeout(800)
        paused.value = false 
    }
    function timeout(ms) {
        return new Promise((resolve) => {
            window.setTimeout(resolve, ms)
        })
    }
    // --- ====================== /Q R   C O D E   R E A D E R ================== -- //


    onMounted(() => {
        isLoading.value = true  // -- wait for camera to be ready
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