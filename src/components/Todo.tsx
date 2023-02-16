import { useSetRecoilState } from "recoil";
import { todoState } from "../atom";
import { ITodo } from "../atom";

function Todo({ id, text }: ITodo) {
  const setTodos = useSetRecoilState(todoState);
  return (
    <li>
      <label>
        <input type="checkbox" />
        <span>{text}</span>
      </label>
      <button data-testid="modify-button">수정</button>
      <button data-testid="delete-button">삭제</button>
    </li>
  );
}

export default Todo;
