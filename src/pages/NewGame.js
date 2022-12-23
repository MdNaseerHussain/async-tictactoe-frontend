import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Input from "../components/Input";
import Alert from "../components/Alert";
import "../index.css";
import BackArrow from "../arrow_back_ios.svg";
import { SERVER_ROUTE } from "../utils";
import axios from "axios";

function NewGame() {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    username: "",
  });
  const [failureMessage, setFailureMessage] = useState(null);
  const token = localStorage.getItem("token");
  const user = localStorage.getItem("username");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        `${SERVER_ROUTE}/newgame`,
        { player1: user, player2: formValues.username },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        navigate(`/play/${res.data.game.id}`);
      })
      .catch((err) => {
        setFailureMessage(err.response.data.message);
      });
  };

  return (
    <div>
      <img
        src={BackArrow}
        alt="Back"
        className="back-arrow"
        onClick={() => navigate("/games")}
      />
      <p className="title title-small">Start a new game</p>
      <p className="title">Whom do you want to play with?</p>
      <Input
        name="username"
        placeholder="Type the username here"
        type="text"
        label="Username"
        value={formValues.username}
        onChange={handleChange}
      />
      <div className="btn-wrapper">
        {failureMessage && <Alert message={failureMessage} type="error" />}
        <Button text="Start Game" onClick={handleSubmit} styling="btn" />
      </div>
    </div>
  );
}

export default NewGame;
