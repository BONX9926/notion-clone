import { create } from "zustand";

type CoverImageStore = {
  url?: string;
  isOpnen: boolean;
  onOpen: () => void;
  onClose: () => void;
  onReplace: (url: string) => void;
};

export const useCoverImage = create<CoverImageStore>((set) => ({
  url: undefined,
  isOpnen: false,
  onOpen: () => set({ isOpnen: true, url: undefined }),
  onClose: () => set({ isOpnen: false, url: undefined }),
  onReplace: (url: string) => set({ isOpnen: true, url }),
}));
