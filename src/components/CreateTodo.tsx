import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { todoState } from "../atom";
import { createTodo, getTodo } from "./../api/todo";
// import "../style/css/TodoPage.css";

interface ITodo {
  todo: string;
}

function CreateTodo() {
  const setTodos = useSetRecoilState(todoState);
  const { register, handleSubmit, setValue } = useForm<ITodo>();

  const loadTodos = () => {
    getTodo().then((response) => {
      setTodos(response.data);
    });
  };

  const handleValid = ({ todo }: ITodo) => {
    console.log(todo);
    // setTodos((prevTodo) => [{ text: todo, id: Date.now() }, ...prevTodo]);
    createTodo({ todo }).then(() => {
      loadTodos();
      setValue("todo", "");
    });
  };

  return (
    <form onSubmit={handleSubmit(handleValid)}>
      <div className="todo-inputBox">
        <input
          {...register("todo", {
            required: "write a to do",
          })}
          placeholder="write a to do"
          data-testid="new-todo-input"
        />
        <button data-testid="new-todo-add-button">추가</button>
      </div>
    </form>
  );
}

export default CreateTodo;
