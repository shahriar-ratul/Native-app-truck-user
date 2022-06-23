import create from 'zustand';
import axios from 'axios'
import Cookies from 'js-cookie'
import {devtools, persist} from 'zustand/middleware'



const userStore = (set) => ({
    user: null,
    
})


const createUserStore = create(
    devtools(
        persist(userStore, {
            name: "User",
        })
    )
)


export default createUserStore;