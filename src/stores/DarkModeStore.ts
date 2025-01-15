import { create } from "zustand";

interface DarkModeState {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
  toggle: () => void;
}

const useDarkModeStore = create<DarkModeState>()((set) => ({
  darkMode: false,
  setDarkMode: (value) => set((state) => ({ darkMode: value })),
  toggle: () => set((state) => ({ darkMode: !state.darkMode })),
}));

export default useDarkModeStore;
