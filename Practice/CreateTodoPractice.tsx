import React from "react";
import { useForm } from "react-hook-form";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { categoryState, todoState } from "./atomsPractice";

interface IForm {
  todo: string;
}

function CreateTodoPractice() {
  const setTodos = useSetRecoilState(todoState);
  const currentCategory = useRecoilValue(categoryState);
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const handleValid = ({ todo }: IForm) => {
    // console.log(todo);
    setTodos((oldTodos) => [
      { text: todo, id: Date.now(), category: currentCategory },
      ...oldTodos,
    ]);
    setValue("todo", "");
  };
  return (
    <form onSubmit={handleSubmit(handleValid)}>
      <input
        {...register("todo", {
          required: "please write a to do",
        })}
        placeholder="write a to do"
      />
      <button>add</button>
    </form>
  );
}

export default CreateTodoPractice;
