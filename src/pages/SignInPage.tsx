import { useNavigate } from "react-router-dom";
import { signIn } from "../api/auth";
import { useForm } from "react-hook-form";
import token from "../api/token";
import { ACCESS_TOKEN_KEY } from "./../const";
import { useEffect } from "react";

interface IForm {
  email: string;
  password: string;
}

function SignInPage() {
  const navigate = useNavigate();
  const {
    register,
    // handleSubmit,
    formState: { errors },
    watch,
  } = useForm<IForm>({
    defaultValues: {
      email: "@naver.com",
    },
  });
  // const { email } = watch();
  // const onValid = (data: IForm) => {
  //   console.log(data);
  //   console.log(watch);
  // };

  const onSignIn = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    signIn(watch())
      .then((response) => {
        token.setToken(ACCESS_TOKEN_KEY, response.data.access_token);
        navigate("/todo");
        window.location.reload();
      })
      .catch((error) => {
        alert(error.response.data.log || error.log);
      });
  };

  useEffect(() => {
    if (token.getToken(ACCESS_TOKEN_KEY)) {
      navigate("/todo");
    }
  }, []);

  return (
    <div>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        // onSubmit={handleSubmit(onValid)}
        onSubmit={onSignIn}
      >
        <input
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@$/,
              message: "Only emails allowed",
            },
          })}
          placeholder="Email"
        />
        <span>{errors?.email?.message}</span>
        <input
          {...register("password", { required: "write here", minLength: 8 })}
          placeholder="Password"
        />
        <span>{errors?.password?.message}</span>
        <button>Add</button>
      </form>
    </div>
  );
}

export default SignInPage;
