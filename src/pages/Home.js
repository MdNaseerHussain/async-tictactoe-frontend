import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <p>async</p>
      <p>tic tac toe</p>
      <div style={{ position: "fixed", bottom: 0 }}>
        <Button onClick={() => navigate("/login")} text="Login" styling="btn" />
        <Button
          onClick={() => navigate("/register")}
          text="Register"
          styling="btn btn-secondary"
        />
      </div>
    </div>
  );
}

export default Home;
