import { useRecoilState, useRecoilValue } from "recoil";
import { Categories, categoryState, todoSelector } from "../atomsPractice";
import CreateTodoPractice from "./CreateTodoPractice";
import TodoPractice from "./TodoPractice";

function TodoList() {
  // const [todo, doing, done] = useRecoilValue(todoSelector);
  const todos = useRecoilValue(todoSelector);
  const [category, setCategory] = useRecoilState(categoryState);
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value as Categories);
  };
  console.log(todos);
  return (
    <div>
      <h1>todo app</h1>
      <hr />
      <select value={category} onInput={onInput}>
        <option value={Categories.TODO}>Todo</option>
        <option value={Categories.DOING}>Doing</option>
        <option value={Categories.DONE}>Done</option>
      </select>
      <CreateTodoPractice />
      {/* <h2>Todo</h2>
      <ul>
        {todo.map((todo) => (
          <Todo key={todo.id} {...todo} />
        ))}
      </ul>
      <hr />
      <h2>Doing</h2>
      <ul>
        {doing.map((todo) => (
          <Todo key={todo.id} {...todo} />
        ))}
      </ul>
      <hr />
      <h2>Done</h2>
      <ul>
        {done.map((todo) => (
          <Todo key={todo.id} {...todo} />
        ))}
      </ul>
      <hr /> */}
      {todos?.map((todo) => (
        <TodoPractice key={todo.id} {...todo} />
      ))}
    </div>
  );
}

export default TodoList;
