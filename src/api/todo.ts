import api from "./api";

interface createTodoParam {
  todo: string;
}

interface updateTodoParam {
  id: number;
  todo: string;
  isCompleted: boolean;
}

interface deleteTodoParam {
  id: number;
}

export const createTodo = async ({ todo }: createTodoParam) => {
  return await api({
    method: "post",
    url: "/todos",
    data: {
      todo,
    },
  });
};

export const getTodo = async () => {
  return await api({
    method: "get",
    url: "/todos",
  });
};

export const updateTodo = async ({
  id,
  todo,
  isCompleted,
}: updateTodoParam) => {
  return await api({
    method: "put",
    url: `/todos/${id}`,
    data: {
      todo,
      isCompleted,
    },
  });
};

export const deleteTodo = async ({ id }: deleteTodoParam) => {
  return await api({
    method: "delete",
    url: `/todos/${id}`,
  });
};
