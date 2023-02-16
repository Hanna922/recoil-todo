import { useRecoilValue, useSetRecoilState } from "recoil";
import { todoState } from "../atom";
import CreateTodo from "../components/CreateTodo";
import Todo from "../components/Todo";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import token from "../api/token";
import { ACCESS_TOKEN_KEY } from "./../const";
import { getTodo } from "./../api/todo";

function TodoPage() {
  const navigate = useNavigate();
  const todos = useRecoilValue(todoState);
  const setTodos = useSetRecoilState(todoState);
  console.log(todos);

  useEffect(() => {
    if (!token.getToken(ACCESS_TOKEN_KEY)) {
      navigate("/signin");
    }
  }, []);

  const loadTodos = () => {
    getTodo().then((response) => {
      setTodos(response.data);
    });
  };

  useEffect(() => {
    loadTodos();
  }, []);

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
