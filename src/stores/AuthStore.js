import { defineStore } from 'pinia'
import axios from 'axios'

const API_URL   = import.meta.env.VITE_API_URL
const AUTH_KEY  = import.meta.env.VITE_APP_AUTH_KEY

export const useAuthStore= defineStore('AuthStore', {
    state: () => ({
        user: null
    }),
    getters: {
        getUser: (state) => {
            return state.user || JSON.parse(localStorage.getItem(AUTH_KEY))
        }
    },
    actions: {
        authenticate: async function(vm) {
            this.user = null
            await axios.post(`${API_URL}/student/authenticate`, vm)
                .then(res => {
                    if(res.data == 1) {
                        this.user = vm
                        localStorage.setItem(AUTH_KEY, JSON.stringify(vm)) // caching logic
                    }
                    else throw new Error("unable to register user")
                })
                .catch(err => {
                    throw err
                })
        },
        logout: function() {
            this.user = null
            window.localStorage.removeItem(AUTH_KEY)                        // caching logic
        }
    }
});
