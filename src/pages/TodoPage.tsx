import { useRecoilValue, useSetRecoilState } from "recoil";
import { todoState } from "../atom";
import CreateTodo from "../components/CreateTodo";
import Todo from "../components/Todo";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import token from "../api/token";
import { ACCESS_TOKEN_KEY } from "./../const";
import { getTodo, updateTodo, deleteTodo } from "./../api/todo";
import { ITodo } from "./../atom";
import "../style/css/TodoPage.css";

function TodoPage() {
  const navigate = useNavigate();
  const todos = useRecoilValue(todoState);
  const setTodos = useSetRecoilState(todoState);

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

  const onCheck = (checkTodo: ITodo) => {
    let { id, todo, isCompleted } = checkTodo;
    console.log(isCompleted);
    isCompleted = !isCompleted;
    // 서버에서 취급하는 isCompleted boolean 값과 반대인 상태
    updateTodo({ id, todo, isCompleted }).then(() => {
      loadTodos();
    });
  };

  const onClickDelete = (id: number) => {
    deleteTodo({ id }).then(() => {
      loadTodos();
    });
  };

  return (
    <div className="wrapper">
      <CreateTodo />
      {todos?.map((todo) => (
        // <Todo key={todo.id} {...todo} />
        <Todo
          key={todo.id}
          todo={todo}
          loadTodos={loadTodos}
          onCheck={onCheck}
          onClickDelete={onClickDelete}
        />
      ))}
    </div>
  );
}

export default TodoPage;
