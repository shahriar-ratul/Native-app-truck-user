import create from 'zustand'
import { persist,devtools } from 'zustand/middleware'
import AsyncStorage from '@react-native-async-storage/async-storage';


const authStore = (set) => ({
    isLogin: false,
    token : null,
    user : null,
    phone: null,
    OtpVerify: false,
    setPhone : (phone) => set({phone:phone}),
    setToken : (token) => set({token: token}),
    setUser : (user) => set({user:user}),
    successLogin: () => set({isLogin: true }),
    successOtpVerify: () => set({ OtpVerify: true }),
    removeOtpVerify: () => set({ OtpVerify: false }),
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