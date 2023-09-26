<template>
    <loading :active='isLoading' :is-full-page="true" />
    <transition name="fade">
        <scan-dialog v-if="isDialogVisible" :model="attendance" @dialog-closed="dialogClosed"></scan-dialog>
    </transition>

    <div class="text-center pt-3">
        <h2>Timetable</h2>
        <ul class="nav navbar-nav pt-4">
            <li class="nav-item">
                <select v-model="selectedCourse" class="form-select">
                    <option disabled value="0">Please select a course</option>
                    <option v-for="(course, index) in courses" :key="index" :value="course.id">{{course.courseName}}</option>
                </select>
            </li>
        </ul>
    </div>

    <button type="button" class="btn btn-primart" @click="animateAccordion(4)">Check</button>


    <div class="accordion pt-3" id="accordionExample">
        <div class="accordion-item" v-for="dayTable in timetable">
            <h2 class="accordion-header" :id="dayTable.name">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" :data-bs-target="`#collapse${dayTable.name}`" aria-expanded="true" :aria-controls="`collapse${dayTable.name}`" :disabled="dayTable.events.length == 0">
                    <span v-if="dayTable.events.length > 0" class="badge rounded-pill bg-success">{{ dayTable.events.length }}</span>
                    &nbsp;{{ dayTable.name }}
                </button>
            </h2>
            <div :id="`collapse${dayTable.name}`" class="accordion-collapse collapse" :aria-labelledby="dayTable.name" data-bs-parent="#accordionExample" ref="accordion">
                <div class="accordion-body">
                    <div class="row d-flex justify-content-center">
                        <div class="col-12 col-md-10">
                            <div class="main-card card">
                                <div class="text-center">
                                    <p class="small text-warning">click on subject to scan attendance</p>
                                </div>
                                <div class="card-body">
                                    <!-- <h5 class="card-title">User Timeline</h5> -->
                                    <div class="scroll-area">
                                        <div class="vertical-timeline vertical-timeline--animate vertical-timeline--one-column">
                                            <div class="vertical-timeline-item vertical-timeline-element" v-for="evt in dayTable.events" :key="evt.id">
                                                <div class="vertical-timeline-element-content" @click="scanAttendance(evt)"> 
                                                    <h6 class="timeline-title">{{ evt.subjectName }}</h6>
                                                    <p>{{ evt.endTime }}</p>
                                                    <p>{{ evt.locationCode }}</p>
                                                    <span class="vertical-timeline-element-date">{{ evt.startTime }}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> 
                    </div> 
                </div>
            </div>
        </div>
    </div>

    <div v-if="selectedCourse == 0" class="text-center p-5">
        <p class="text-black-50"><i>please select a course to view</i></p>
    </div>
</template>

<script setup>
    import { ref, onMounted, watch } from 'vue'
    import Swal from 'sweetalert2'
    import Loading from 'vue-loading-overlay'
    import bootstrap from '@bootstrap/dist/js/bootstrap.js'

    import ScanDialog from '../components/ScanDialog.vue'
 
    import { useTimetableStore } from '@/stores/TimetableStore'
    import { useCourseStore } from '@/stores/CourseStore'
    import { useAuthStore } from '@/stores/AuthStore'

    const selectedCourse = ref(0)
    const isLoading = ref(false)
    const isDialogVisible = ref(false)

    const courses = ref([])
    const attendance = ref({})
    const timetable = ref([])

    const authStore = useAuthStore()
    const courseStore = useCourseStore()
    const timetableStore = useTimetableStore()

    // ================================================================================= //
    const SpeechRecognition       = window.SpeechRecognition || window.webkitSpeechRecognition
    const SpeechGrammarList       = window.SpeechGrammarList || window.webkitSpeechGrammarList
    const SpeechRecognitionEvent  = window.SpeechRecognitionEvent || window.webkitSpeechRecognitionEvent;

    const colors = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
    const grammar = `#JSGF V1.0; grammar colors; public <color> = ${colors.join(" | ",)};`;

    const recognition = new SpeechRecognition()
    const speechRecognitionList = new SpeechGrammarList()
    speechRecognitionList.addFromString(grammar, 1);

    recognition.grammars = speechRecognitionList;
    recognition.continuous = true;
    recognition.lang = "en-US";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.start()

    recognition.onresult = (event) => {
        let lastIndex = event.results.length == 0 ? 0 : event.results.length - 1;
        const color = event.results[lastIndex][0].transcript;
        const confidence = event.results[lastIndex][0].confidence;

        if(confidence > 0) {
            let found = colors.findIndex(x => x == color.trim())
            if(found >= 0) {
                animateAccordion(found)
            }
        }
        else console.log("bad bad bad")
        // console.log(`Confidence: ${event.results[lastIndex][0].confidence} :: ${color}`);
    };
    recognition.onnomatch = (event) => {
        debugger;
    };
    recognition.onerror = (event) => {
        debugger;
    };
    // ================================================================================== //

    const accordion = ref(null)
    function redisplayAccordion(selectedIndex) {
        accordion.value.forEach(element => {
            element.classList.remove('show')
        });
        accordion.value[selectedIndex].classList.add('show');
    }
    function animateAccordion(selectedIndex) {
        var collapseElementList = accordion.value.slice.call(document.querySelectorAll('.show'))
        var collapseList = collapseElementList.map(function (collapseEl) {
            return new bootstrap.Collapse(collapseEl)
        })

        var openElement = accordion.value[selectedIndex];
        return new bootstrap.Collapse(openElement, 'show')
    }


    async function loadCourses() {
        try {
            isLoading.value = true
            await courseStore.retrieveCourses()
            courses.value = courseStore.getCourses
        }
        catch(err) {
            Swal.fire({ icon: 'error', text: err.message })
        }
        finally {
            isLoading.value = false
        }
    }
    async function loadTimetable(courseId) {
        try {
            isLoading.value = true
            await timetableStore.retrieveTimetableByCourse(courseId)
            timetable.value = timetableStore.getTimetableByDay
        }
        catch(err) {
            Swal.fire({ icon: 'error', text: err.message })
        }
        finally {
            isLoading.value = false
        }
    }

    function dialogClosed() {
        isDialogVisible.value = false
    }
    function scanAttendance(evt) {
        attendance.value = {
            subjectId     : evt.id,
            subjectName   : evt.subjectName,
            studentEmail  : authStore.getUser.email
        }
        isDialogVisible.value  = true
    }

    watch(selectedCourse, async (n, o) => {
        await loadTimetable(n)
    })

    onMounted(async () => {
        await loadCourses()
    })
</script>

<style scoped lang="scss">
    .small {
        font-size: 12px;
    }
    .scroll-area {
        overflow-x: hidden;
        height: auto;
    }

    .vertical-timeline {
        width: 100%;
        position: relative;
        padding: 1rem 0 0rem;
    }
    .vertical-timeline::before {
        content: '';
        position: absolute;
        top: 0;
        left: 78px;
        height: 100%;
        width: 4px;
        background: #e9ecef;
        border-radius: .25rem;
    }
    .vertical-timeline-element {
        position: relative;
        margin: 0;
    }
    .vertical-timeline-element-content {
        position: relative;
        margin-left: 90px;
        font-size: .8rem;
        > p:nth-child(3) {
            color: darkorange;
            font-weight: 700;
            float: right;
        }
    }

    .vertical-timeline-element-content .timeline-title {
        font-size: .73rem;
        text-transform: uppercase;
        margin: 0 0 0rem;
        padding: 2px 0 0;
        font-weight: bold;
    }

    .vertical-timeline-element-content .vertical-timeline-element-date {
        display: block;
        position: absolute;
        left: -90px;
        top: 0;
        padding-right: 10px;
        text-align: right;
        color: #adb5bd;
        font-size: 1.08rem;
        white-space: nowrap;
    }

    .vertical-timeline-element-content:after {
        content: "";
        display: table;
        clear: both;
    }
</style>