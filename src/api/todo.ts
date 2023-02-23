import api from "./api";

interface CreateTodoParam {
  todo: string;
}

interface UpdateTodoParam {
  id: number;
  todo: string;
  isCompleted: boolean;
}

interface DeleteTodoParam {
  id: number;
}

export const createTodo = async ({ todo }: CreateTodoParam) => {
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
}: UpdateTodoParam) => {
  return await api({
    method: "put",
    url: `/todos/${id}`,
    data: {
      todo,
      isCompleted,
    },
  });
};

export const deleteTodo = async ({ id }: DeleteTodoParam) => {
  return await api({
    method: "delete",
    url: `/todos/${id}`,
  });
};
