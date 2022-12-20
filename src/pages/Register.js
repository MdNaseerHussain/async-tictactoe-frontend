import { useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import Alert from "../components/Alert";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { SERVER_ROUTE } from "../utils";
import "../index.css";

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
      <p className="title title-small">Create Account</p>
      <p className="title">Let's get to know you better!</p>
      <Input
        name="name"
        placeholder="Type your name here"
        type="text"
        label="Your Name"
        value={formValues.name}
        onChange={handleChange}
      />
      <Input
        name="username"
        placeholder="Type your username here"
        type="text"
        label="Username"
        value={formValues.username}
        onChange={handleChange}
      />
      <Input
        name="email"
        placeholder="Type your email here"
        type="email"
        label="Email"
        value={formValues.email}
        onChange={handleChange}
      />
      <Input
        name="password"
        placeholder="Type your password here"
        type="password"
        label="Password"
        value={formValues.password}
        onChange={handleChange}
      />
      <div className="btn-wrapper">
        <Button text="Create Account" onClick={handleSubmit} styling="btn" />
      </div>
      {failureMessage && <Alert message={failureMessage} />}
    </div>
  );
}

export default Register;
