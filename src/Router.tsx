import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import SignUpPage from "./pages/Sign/SignUp";
import SignInPage from "./pages/Sign/SignIn";
import TodoPage from "./pages/Todo";
import Navigation from "./components/Navigation/Navigation";

function Router() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/todo" element={<TodoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
