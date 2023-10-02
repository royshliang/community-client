import { defineStore } from 'pinia'
import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL;

export const useCourseStore = defineStore('CourseStore', {
    state: () => ({
        courses: []
    }),
    getters: {
        getCourses: (state) => {
            return state.courses
        }
    },
    actions: {
        retrieveCourses: async function() {
            await axios.get(`${API_URL}/courses`)
                .then(res => {
                    this.courses = res.data
                })
                .catch(err => {
                    throw err
                })
        }
    }
});
