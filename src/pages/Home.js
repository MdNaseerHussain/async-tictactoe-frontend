import Button from "../components/Button"
import { useNavigate } from "react-router-dom"

function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <p>async</p>
      <p>tic tac toe</p>
      <Button onClick={() => navigate("/login")} text="Login" />
      <Button onClick={() => navigate("/register")} text="Register" />
    </div>
  )
}

export default Home