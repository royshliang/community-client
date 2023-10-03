import { createRouter, createWebHistory, createWebHashHistory } from "vue-router"

import { useStudentStore } from '@/stores/StudentStore'

import TimetablePage from '@/pages/TimetablePage.vue'
import LoginPage from '@/pages/LoginPage.vue'

const router = new createRouter({
	history: createWebHistory(),
	routes: [
        {
            path: '/',
            redirect: '/login',
        },
        {
            path:'/login',
            name: 'Login',
            component: LoginPage
        },
        {
            path: '/timetable',
            name: 'Timetable',
            component: TimetablePage,
        },
	],
})


// ----- security authentication
router.beforeEach(to => {
    const studentStore = useStudentStore()

    debugger;

    if (to.fullPath != "/login" && !studentStore.getStudent) {
        return "/login"
	}
})


export default router
