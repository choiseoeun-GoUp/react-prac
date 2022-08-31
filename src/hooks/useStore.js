import create from "zustand";
import { devtools } from "zustand/middleware";

const useStore = create((set) => ({
  isLogin: false,
  logInfo: localStorage.getItem("logInfo"),
  idValue: "",
  setLogin() {
    set((state) => ({ isLogin: true }));
  },
  setLoginout() {
    set((state) => ({ isLogin: false }));
  },
  setLogId(input) {
    set((state) => ({ idValue: input }));
  },
}));

export default useStore;
