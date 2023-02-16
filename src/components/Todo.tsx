import { useSetRecoilState } from "recoil";
import { todoState } from "../atom";
import { ITodo } from "../atom";

interface ITodoProps {
  todo: ITodo;
  loadTodos: () => void;
  onClickDelete: (id: number) => void;
}

function Todo({ todo, loadTodos, onClickDelete }: ITodoProps) {
  const setTodos = useSetRecoilState(todoState);

  return (
    <li>
      <label>
        <input type="checkbox" />
        <span>{todo.todo}</span>
      </label>
      <button data-testid="modify-button">수정</button>
      <button
        data-testid="delete-button"
        onClick={() => onClickDelete(todo.id)}
      >
        삭제
      </button>
    </li>
  );
}

export default Todo;
