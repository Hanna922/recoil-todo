import api from "./api";

interface SignParam {
  email: string;
  password: string;
}

export const signUp = async ({ email, password }: SignParam) => {
  return await api({
    method: "post",
    url: "/auth/signup",
    data: {
      email,
      password,
    },
  });
};

export const signIn = async ({ email, password }: SignParam) => {
  return await api({
    method: "post",
    url: "/auth/signin",
    data: {
      email,
      password,
    },
  });
};
