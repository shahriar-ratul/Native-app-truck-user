import create from 'zustand'
import { persist,devtools } from 'zustand/middleware'
import AsyncStorage from '@react-native-async-storage/async-storage';


const authStore = (set) => ({
    isLogin: true,
    token : null,
    user : null,
    setToken : (token) => set(state => ({...state,token})),
    setUser : (user) => set(state => ({...state,user})),
    successLogin: () => set({ isLogin: true }),
    successLogout: () => set({ isLogin: false }),
})


const createAuthStore = create(
    devtools(
        persist(authStore, {
            name: "Auth",
            getStorage: () => AsyncStorage,
              
        })
    )
)

export default createAuthStore;