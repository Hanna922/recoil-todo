import { Categories, ITodo, todoState } from "./../atoms";
import { useSetRecoilState } from "recoil";

function Todo({ text, category, id }: ITodo) {
  const setTodos = useSetRecoilState(todoState);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    // ES6, event의 currentTarget의 name을 꺼내옴
    setTodos((prevTodos) => {
      return prevTodos.map((todo) =>
        todo.id === id ? { ...todo, category: name as ITodo["category"] } : todo
      );
      // const targetIndex = prevTodos.findIndex((todo) => todo.id === id);
      // const newToDo = { text, id, category: name as ITodo["category"] };
      // return [
      //   ...oldToDos.slice(0, targetIndex),
      //   newToDo,
      //   ...oldToDos.slice(targetIndex + 1),
      // ];
    });
  };
  return (
    <li>
      <span>{text}</span>
      {category !== Categories.DOING && (
        <button name={Categories.DOING} onClick={onClick}>
          Doing
        </button>
      )}
      {category !== Categories.TODO && (
        <button name={Categories.TODO} onClick={onClick}>
          To Do
        </button>
      )}
      {category !== Categories.DONE && (
        <button name={Categories.DONE} onClick={onClick}>
          Done
        </button>
      )}
    </li>
  );
}

export default Todo;
