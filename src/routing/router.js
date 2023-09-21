import { createRouter, createWebHistory, createWebHashHistory } from "vue-router"

import { useAuthStore } from '@/stores/AuthStore'

import TimetablePage from '@/pages/TimetablePage.vue'
import LoginPage from '@/pages/LoginPage.vue'

const router = new createRouter({
	history: createWebHashHistory(),
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


// // ----- security authentication
// router.beforeEach(async (to) => {
//     if (to.fullPath != "/login") {
// 		if (to.fullPath == "/timetable") {
// 			const authStore = useAuthStore()

//             if (!authStore.getUser) {
// 				await router.push("/login")
// 			}
// 		}
// 	}
// })
// ----- security authentication
router.beforeEach(to => {
	if (to.fullPath != "/login") {
        const authStore = useAuthStore()

        if (!authStore.getUser) {
            return "/login"
		}
	}
})


export default router
