import { atom } from "recoil";

export interface ITodo {
  text: string;
  id: number;
}

export const todoState = atom<ITodo[]>({
  key: "todo",
  default: [],
});
