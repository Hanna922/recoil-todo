import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();
  const startApp = () => {
    navigate("/todo");
  };
  return (
    <div>
      <h1>2023 원티드 프리온보딩</h1>
      <h2>개인 연습 !</h2>
      <button onClick={startApp}>start</button>
    </div>
  );
}

export default HomePage;
