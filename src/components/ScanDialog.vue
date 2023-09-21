<template>
    <div class="overlay">
        <div class="modal-display">

            <div class="text-center">
                <h6>Scan your Attendance</h6>
            </div>

            <div class="container-fluid p-3">
                <div class="row mb-3">
                    <div class="col-12 text-center">
                        <h5>{{ attendance.subjectName }}</h5>
                    </div>
                </div>
                <div class="row mb-3">
                    <div class="col-12">
                        <loading :active='isLoading' :is-full-page='false' />

                        <qrcode-stream :paused="paused" @detect="onDetect" @camera-on="onCameraOn" @camera-off="onCameraOff" @error="onError">
                            <div v-show="showScanConfirmation" class="scan-confirmation">
                                <!-- <img v-if="showlah" src="./../assets/checkmark.svg" alt="Checkmark" width="128" /> -->
                            </div>
                        </qrcode-stream>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="d-flex justify-content-end">
                    <button type="button" class="btn btn-secondary" @click="closeDialog">Close</button>
                    &nbsp;&nbsp;
                    <button type="button" class="btn btn-primary" @click="saveDialog">Save</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { onMounted, ref, toRef } from 'vue'

    import Swal from 'sweetalert2'
    import Loading from 'vue-loading-overlay'
    import { useToast } from 'vue-toastification'

    const props = defineProps(['model'])
    const emit = defineEmits(['dialogClosed'])

    const attendance = toRef(props.model)
    const isLoading = ref(false)

    function closeDialog() {
        emit('dialogClosed')
    }
    async function saveDialog() {
        emit('dialogClosed')
    }

    // --- ====================== Q R   C O D E   R E A D E R ================== -- //
    const showScanConfirmation = ref(false)
    const paused = ref(false)

    function onCameraOn() {
        debugger;
        isLoading.value = false;
        showScanConfirmation.value = false
    }
    function onCameraOff() {
        debugger;
        showScanConfirmation.value = true
    }
    async function onDetect(detectedCodes) {
        let result = JSON.stringify(detectedCodes.map(code => code.rawValue))

        await delayStream(500)
    }
    function delayStream(ms) {
        paused.value = true

        return new Promise((res) => {
            window.setTimeout(res, ms)
            paused.value = false
        })
    }


    onMounted(() => {
        isLoading.value = true
    })

</script>

