import { useNavigate } from "react-router-dom";
import { signIn } from "../api/auth";
import { useForm } from "react-hook-form";
import token from "../api/token";
import { ACCESS_TOKEN_KEY } from "./../const";
import { useEffect } from "react";
import "../style/css/Sign.css";

interface IForm {
  email: string;
  password: string;
}

function SignInPage() {
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    watch,
  } = useForm<IForm>({
    defaultValues: {
      email: "@naver.com",
    },
  });

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
    <div className="wrapper">
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={onSignIn}
      >
        <div className="inputBox">
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
        </div>
        <div className="inputBox">
          <span>{errors?.email?.message}</span>
          <input
            {...register("password", { required: "write here", minLength: 8 })}
            placeholder="Password"
          />
          <span>{errors?.password?.message}</span>
        </div>
        <button className="check-button">Sign In</button>
      </form>
    </div>
  );
}

export default SignInPage;
