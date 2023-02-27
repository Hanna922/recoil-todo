import { useState } from "react";
import { ITodo } from "../../atom";
import { updateTodo } from "../../api/todo";
import useInput from "../../hooks/useInput";
import React from "react";
// 상대경로 => 절대경로

interface ITodoProps {
  todo: ITodo;
  loadTodos: () => void;
  onCheck: (checkTodo: ITodo) => void;
  onClickDelete: (id: number) => void;
}

function Todo({ todo, loadTodos, onCheck, onClickDelete }: ITodoProps) {
  const [isUpdate, setIsUpdate] = useState(false);
  const [isEdit, setIsEdit] = useInput(todo);

  // update 구현 시 input에 원래 있던 todo value를 설정해주어야 하는데
  // 이럴 경우 실시간으로 입력되는 값을 얻는 방법을 찾지 못함
  // => update 기능의 경우 react hook form 대신 일반 코드로 작성

  const editTodo = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsUpdate(false);

    const { id, todo, isCompleted } = isEdit;
    // console.log(isCompleted);
    updateTodo({ id, todo, isCompleted }).then(() => {
      loadTodos();
    });
  };

  return (
    <li className="todo-li">
      {isUpdate ? (
        <form onSubmit={editTodo}>
          <label>
            <input
              type="checkbox"
              checked={todo.isCompleted}
              onChange={() => onCheck(todo)}
            />
            <input
              name="todo"
              // https://velog.io/@hyemison/%EB%A6%AC%EC%95%A1%ED%8A%B8-input-%EC%9E%85%EB%A0%A5-%EC%95%88-%EB%90%A8
              value={isEdit.todo}
              onChange={setIsEdit}
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
            <span className="todo-span">{todo.todo}</span>
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

export default React.memo(Todo);
