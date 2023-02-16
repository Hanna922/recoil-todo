import { useSetRecoilState } from "recoil";
import { todoState } from "../atom";
import { ITodo } from "../atom";

function Todo({ id, text }: ITodo) {
  const setTodos = useSetRecoilState(todoState);
  //   const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
  //     const {
  //       currentTarget: { name },
  //     } = event;
  //   };
  //   setTodos((prevTodos) => {
  //     return prevTodos.map((todo) => {
  //         todo.id ===
  //     })
  //   })
  return (
    <li>
      <label>
        <input type="checkbox" />
        <span>{text}</span>
      </label>
    </li>
  );
}

export default Todo;
