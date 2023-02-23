import { useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { todoState } from "../atom";
import { ITodo } from "../atom";
import { useForm } from "react-hook-form";
import { updateTodo } from "./../api/todo";

interface ITodoProps {
  todo: ITodo;
  loadTodos: () => void;
  onCheck: (checkTodo: ITodo) => void;
  onClickDelete: (id: number) => void;
}

interface IUpdate {
  id: number;
  todo: string;
  isCompleted: boolean;
}

function Todo({ todo, loadTodos, onCheck, onClickDelete }: ITodoProps) {
  const [isUpdate, setIsUpdate] = useState(false);
  const todos = useRecoilValue(todoState);
  const setTodos = useSetRecoilState(todoState);
  const { register, handleSubmit, setValue, watch } = useForm<IUpdate>();
  // console.log(watch("todo"));
  //   const onUpdate = (event: React.FormEvent<HTMLFormElement>) => {
  //     event.preventDefault();
  //     setIsUpdate(false);
  //   };

  const handleValid = ({ id, todo, isCompleted }: IUpdate) => {
    // console.log(todo);
    setIsUpdate(false);
    setTodos((prevTodos) => [
      { todo: todo, id: Date.now(), isCompleted: isCompleted },
      ...prevTodos,
    ]);

    updateTodo({ id, todo, isCompleted }).then(() => {
      loadTodos();
    });
  };

  return (
    <li>
      {isUpdate ? (
        <form onSubmit={handleSubmit(handleValid)}>
          <label>
            <input type="checkbox" />
            <input
              {...register("todo")}
              // value={todo.todo}
              onChange={() => onCheck(todo)}
              data-testid="new-todo-input"
            />
          </label>
          <button data-testid="submit-button">제출</button>
          <button
            data-testid="cancel-button"
            onClick={() => setIsUpdate(false)}
          >
            취소
          </button>
        </form>
      ) : (
        <>
          <label>
            <input
              type="checkbox"
              checked={todo.isCompleted}
              onChange={() => onCheck(todo)}
            />
            <span>{todo.todo}</span>
          </label>
          <button data-testid="modify-button" onClick={() => setIsUpdate(true)}>
            수정
          </button>
          <button
            data-testid="delete-button"
            onClick={() => onClickDelete(todo.id)}
          >
            삭제
          </button>
        </>
      )}
    </li>
  );
}

export default Todo;
