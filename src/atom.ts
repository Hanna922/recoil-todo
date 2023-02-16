import { atom } from "recoil";

export interface ITodo {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId: number;
}

export const todoState = atom<ITodo[]>({
  key: "todo",
  default: [],
});
