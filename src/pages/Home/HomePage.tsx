import { useNavigate } from "react-router-dom";
import "../css/HomePage.css";

function HomePage() {
  const navigate = useNavigate();
  const startApp = () => {
    navigate("/todo");
  };
  return (
    <div className="wrapper">
      <h1 className="title">2023 원티드 프리온보딩 개인 연습 !-!</h1>
      <button onClick={startApp}>start</button>
    </div>
  );
}

export default HomePage;
