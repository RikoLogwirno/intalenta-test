import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const darkThemeStore = atom<boolean>({
  key: "darkTheme",
  default: true,
  effects_UNSTABLE: [persistAtom]
});