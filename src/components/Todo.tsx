import { useSetRecoilState } from "recoil";
import { todoState } from "../atom";
import { ITodo } from "../atom";

function Todo({ id, todo, isCompleted, userId }: ITodo) {
  const setTodos = useSetRecoilState(todoState);
  return (
    <li>
      <label>
        <input type="checkbox" />
        <span>{todo}</span>
      </label>
      <button data-testid="modify-button">수정</button>
      <button data-testid="delete-button">삭제</button>
    </li>
  );
}

export default Todo;
