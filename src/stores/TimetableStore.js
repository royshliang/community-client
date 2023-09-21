import { defineStore } from 'pinia'
import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL;

export const useTimetableStore = defineStore('TimetableStore', {
    state: () => ({
        timetable: []
    }),
    getters: {
        getTimetable: (state) => {
            return state.timetable
        },
        getTimetableByDay: (state) => {
            debugger;
            let timetableDays = [
                {id: 1, name: 'Monday',    events:[]},
                {id: 2, name: 'Tuesday',   events:[]},
                {id: 3, name: 'Wednesday', events:[]},
                {id: 4, name: 'Thursday',  events:[]},
                {id: 5, name: 'Friday',    events:[]}
            ]

            for(var i=0;i < state.timetable.length; i++) {
                let timetable = timetableDays.find(x => x.id == state.timetable[i].classDay)
                if(timetable) {
                    timetable.events.push({
                        id              : state.timetable[i].id,
                        subjectName     : state.timetable[i].subjectName,
                        startTime       : state.timetable[i].startTime,
                        endTime         : state.timetable[i].endTime,
                        locationCode    : state.timetable[i].locationCode
                    })
                }
            }

            timetableDays.forEach(x => {
                console.log(JSON.stringify(x))
            })

            return timetableDays;
        }
    },
    actions: {
        async retrieveTimetableByCourse(courseId) {
            await axios.get(`${API_URL}/timetable/course/${courseId}`)
                .then(res => {
                    this.timetable = res.data
                })
                .catch(err => {
                    throw err
                })
        },
        async insertAttendance() {
            
        }
    }
});
