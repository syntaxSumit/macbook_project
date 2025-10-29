import { texture } from "three/tsl";
import { create } from "zustand";

const useMacbookStore = create((set) => ({
  color: "#2e2c2e",

  setColor: (color) => set({ color }),

  scale: 0.08,
  setScale: (scale) => set({ scale }),

  texture: "/videos//feeature-1.mp4",
  setTexture: (texture) => set({ texture }),

  reset: () =>
    set({ color: "#2e2c2e", scale: 0.08, texture: "/videos//feeature-1.mp4" }),
}));

export default useMacbookStore;
