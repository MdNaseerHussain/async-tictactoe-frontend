import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Input from "../components/Input";
import Alert from "../components/Alert";
import "../index.css";
import BackArrow from "../arrow_back_ios.svg";

function NewGame() {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    email: "",
  });
  const [failureMessage, setFailureMessage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
    if(formValues.email === "") {
        setFailureMessage("Please enter a valid email");
    }
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
        name="email"
        placeholder="Type the email here"
        type="text"
        label="Username"
        value={formValues.email}
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
