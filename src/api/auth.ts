import api from "./api";

interface signParam {
  email: string;
  password: string;
}

export const signUp = async ({ email, password }: signParam) => {
  return await api({
    method: "post",
    url: "/auth/signup",
    data: {
      email,
      password,
    },
  });
};

export const signIn = async ({ email, password }: signParam) => {
  return await api({
    method: "post",
    url: "/auth/signin",
    data: {
      email,
      password,
    },
  });
};
