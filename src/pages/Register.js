import { useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import Alert from "../components/Alert";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { SERVER_ROUTE } from "../utils";

function Register() {
  const navigate = useNavigate();

  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
  });

  const [failureMessage, setMessage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${SERVER_ROUTE}/register`, formValues)
      .then((res) => {
        if (res.data && res.data.accessToken) {
          localStorage.setItem("token", res.data.token);
          navigate("/games");
        } else {
          setMessage("Account Creation Failed");
        }
      })
      .catch((err) => {
        setMessage(err.response.data);
      });
  };

  return (
    <div>
      Create Account
      <br />
      Let's get to know you better
      <br />
      <Input
        name="name"
        placeholder="Type your name here"
        type="text"
        value={formValues.name}
        onChange={handleChange}
      />
      <br />
      <Input
        name="email"
        placeholder="Type your email here"
        type="email"
        value={formValues.email}
        onChange={handleChange}
      />
      <br />
      <Input
        name="username"
        placeholder="Type your username here"
        type="text"
        value={formValues.username}
        onChange={handleChange}
      />
      <br />
      <Input
        name="password"
        placeholder="Type your password here"
        type="password"
        value={formValues.password}
        onChange={handleChange}
      />
      <br />
      <div style={{ position: "fixed", bottom: 0 }}>
        <Button text="Create Account" onClick={handleSubmit} styling="btn" />
      </div>
      <br />
      {failureMessage && <Alert message={failureMessage} />}
    </div>
  );
}

export default Register;
