import create from 'zustand'
import { persist,devtools } from 'zustand/middleware'


const appStore = (set,get) => ({
    isLoading: false,
    setLoading: () => set({ isLoading: true }),
    unsetLoading: () => set({ isLoading: false }),
})


const createAppStore = create(
    devtools(
        persist(appStore, {
            name: "App",
            getStorage: () => AsyncStorage, // Add this here!
        })
    )
)

export default createAppStore;