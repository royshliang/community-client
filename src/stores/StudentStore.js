import { defineStore } from 'pinia'
import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL;

export const useStudentStore = defineStore('StudentStore', {
    state: () => ({
        students: [],
        student: {},
    }),
    getters: {
        getStudent: (state) => {
            return state.student
        }
    },
    actions: {
        getById: async function(id) {
            await axios.get(`${API_URL}/student/id/${id}`)
                .then(res => {
                    this.student = res.data
                })
                .catch(err => {
                    throw err
                })
        },
        getByEmail: async function(email) {
            await axios.get(`${API_URL}/student/email/${email}`)
                .then(res => {
                    this.student = res.data
                })
                .catch(err => {
                    throw err
                })
        },
        getByToken: async function(token) {
            await axios.get(`${API_URL}/student/token/${token}`)
                .then(res => {
                    this.student = res.data
                })
                .catch(err => {
                    throw err
                })
        },
        // upsert: async function() {
        //     await axios.post(`${API_URL}/student`)
        //         .then(res => {
        //             return res.data
        //         })
        //         .catch(err => {
        //             throw err
        //         })
        // },
        // insert: async function(vm) {
        //     await axios.post(`${API_URL}/student`, vm)
        //         .then(res => {
        //             return res.data
        //         })
        //         .catch(err => {
        //             throw err
        //         })
        // }
    }
});
