import { useRecoilValue, useSetRecoilState } from "recoil";
import { todoState } from "../atom";
import CreateTodo from "../components/CreateTodo";
import Todo from "../components/Todo";

function TodoPage() {
  const todos = useRecoilValue(todoState);
  const setTodos = useSetRecoilState(todoState);
  console.log(todos);
  return (
    <div>
      <h1>todo app</h1>
      <hr />
      <CreateTodo />
      {todos?.map((todo) => (
        <Todo key={todo.id} {...todo} />
      ))}
    </div>
  );
}

export default TodoPage;
