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

                <div class="row mb-3">
                    <div class="col-12" style="position: relative;">
                        <loading :active="isLoading" :is-full-page="false" />
                        <qrcode-stream @detect="onDetect" @camera-on="onCameraOn" @error="onError"></qrcode-stream>
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
    import { VueQrcodeReader } from 'vue-qrcode-reader'
    import { useToast } from 'vue-toastification'

    import { useAttendanceStore } from '@/stores/AttendanceStore'
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
    function onCameraOn() {
        isLoading.value = false;
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
    }
    // --- ====================== /Q R   C O D E   R E A D E R ================== -- //


    onMounted(() => {
        isLoading.value = true  // -- wait for camera to be ready
    })
</script>

<style scoped></style>
