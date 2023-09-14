import { defineStore } from 'pinia'
import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL

export const useAuthStore= defineStore('AuthStore', {
    state: () => ({
        user: {}
    }),
    getters: {
        getUser: (state) => {
            return state.user
        }
    },
    actions: {
        validate: async function(vm) {
            await axios.post(`${API_URL}/student/validate`, vm)
                .then(res => {
                    if(res.data == 1) {
                        this.user = vm
                    }
                    else this.user = {}
                })
                .catch(err => {
                    throw err
                })
        }
    }
});

