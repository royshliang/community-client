<template>
    <loading :active='isLoading' :is-full-page="true" />

    <div class="text-center pt-3">
        <h2>Timetable</h2>
        <ul class="nav navbar-nav pt-4">
            <li class="nav-item">
                <select v-model="selectedCourse" class="form-select">
                    <option disabled value="0">Please Select</option>
                    <option v-for="(course, index) in courses" :key="index" :value="course.id">{{course.courseName}}</option>
                </select>
            </li>
        </ul>
    </div>
    <div class="accordion pt-3" id="accordionExample">
        <div class="accordion-item" v-for="dayTable in timetable">
            <h2 class="accordion-header" :id="dayTable.name">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" :data-bs-target="`#collapse${dayTable.name}`" aria-expanded="true" :aria-controls="`collapse${dayTable.name}`" :disabled="dayTable.events.length == 0">
                    <span v-if="dayTable.events.length > 0" class="badge rounded-pill bg-success">{{ dayTable.events.length }}</span>
                    &nbsp;{{ dayTable.name }}
                </button>
            </h2>
            <div :id="`collapse${dayTable.name}`" class="accordion-collapse collapse" :aria-labelledby="dayTable.name" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    <div class="row d-flex justify-content-center">
                        <div class="col-12 col-md-10">
                            <div class="main-card card">
                                <div class="card-body">
                                    <!-- <h5 class="card-title">User Timeline</h5> -->
                                    <div class="scroll-area">
                                        <div class="vertical-timeline vertical-timeline--animate vertical-timeline--one-column">
                                            <div class="vertical-timeline-item vertical-timeline-element" v-for="evt in dayTable.events" :key="evt.id">
                                                <div class="vertical-timeline-element-content">
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
</template>

<script setup>
    import { ref, onMounted, watch } from 'vue'
    import Loading from 'vue-loading-overlay'

    import { useTimetableStore } from '@/stores/TimetableStore'
    import { useCourseStore } from '@/stores/CourseStore'

    const selectedCourse = ref(0)
    const isLoading = ref(false)
    const courses = ref([])
    const timetable = ref([])

    const courseStore = useCourseStore()
    const timetableStore = useTimetableStore()


    watch(selectedCourse, async (n, o) => {
        await loadTimetable(n)
    })

    async function loadCourses() {
        try {
            isLoading.value = true
            await courseStore.retrieveCourses()
            courses.value = courseStore.getCourses
        }
        catch(err) {
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

            debugger;
        }
        catch(err) {
        }
        finally {
            isLoading.value = false
        }
    }

    onMounted(async () => {
        await loadCourses()
    })
</script>

<style scoped lang="scss">
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
        margin: 0 0 0.5rem;
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
        font-size: 1.16rem;
        white-space: nowrap;
    }

    .vertical-timeline-element-content:after {
        content: "";
        display: table;
        clear: both;
    }
</style>