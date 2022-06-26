import create from "zustand";
import { persist, devtools } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LocationStore =(set,get) => ({
  startLocation: null,
  endLocation: null,
  distance: 0,
  price: 0,
  startDescription : null,
  endDescription : null,
  setStartLocation: (startLocation) => set({ startLocation: startLocation }),
  setEndLocation: (endLocation) => set({ endLocation: endLocation }),
  setDistance: (distance) => set({ distance: distance }),
  setPrice: (price) => {
    set({ price: price });
  },
  setStartDescription: (startDescription) => set({ startDescription: startDescription }),
  setEndDescription: (endDescription) => set({ endDescription: endDescription }),
  clearState: () =>
    set({
      startLocation: null,
      endLocation: null,
      distance: 0,
      price: 0,
      description: null,
    }),
})

// const userLocationStore = create(
//     persist(LocationStore, {
//         name: "Location",
//         getStorage: () => AsyncStorage,
//     })
// )
const userLocationStore = create(
    LocationStore, {
        name: "Location",
        getStorage: () => AsyncStorage,
    }
)
// const createUserLocationStore = create(userLocationStore);

export default userLocationStore;
