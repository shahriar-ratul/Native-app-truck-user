import create from 'zustand'
import { persist,devtools } from 'zustand/middleware'
import AsyncStorage from '@react-native-async-storage/async-storage';


const authStore = (set) => ({
    isLogin: false,
    successLogin: () => set({ isLogin: true }),
    successLogout: () => set({ isLogin: false }),
})


const createAuthStore = create(
    devtools(
        persist(authStore, {
            name: "Auth",
            getStorage: () => AsyncStorage, // Add this here!
              
        })
    )
)

export default createAuthStore;