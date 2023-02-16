import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { todoState } from "../atom";

interface ITodo {
  todo: string;
}

function CreateTodo() {
  const setTodos = useSetRecoilState(todoState);
  const { register, handleSubmit, setValue } = useForm<ITodo>();
  const handleValid = ({ todo }: ITodo) => {
    console.log(todo);
    setTodos((prevTodo) => [{ text: todo, id: Date.now() }, ...prevTodo]);
    setValue("todo", "");
  };
  return (
    <form onSubmit={handleSubmit(handleValid)}>
      <input
        {...register("todo", {
          required: "write a to do",
        })}
        placeholder="write a to do"
        data-testid="new-todo-input"
      />
      <button data-testid="new-todo-add-button">추가</button>
    </form>
  );
}

export default CreateTodo;
