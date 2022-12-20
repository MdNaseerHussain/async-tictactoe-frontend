import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import "../index.css";

function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <p className="app-name app-name-small">async</p>
      <p className="app-name">tic tac <br/>toe</p>
      <div className="btn-wrapper">
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
