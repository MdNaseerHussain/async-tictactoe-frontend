import { useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import Alert from "../components/Alert";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { SERVER_ROUTE } from "../utils";
import "../index.css";
import BackArrow from "../arrow_back_ios.svg";
import Loader from "../components/Loader";

function Register() {
  const navigate = useNavigate();

  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const [failureMessage, setMessage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    axios
      .post(`${SERVER_ROUTE}/register`, formValues)
      .then((res) => {
        if (res.data && res.data.accessToken) {
          localStorage.setItem("token", res.data.accessToken);
          localStorage.setItem("username", formValues.username);
          navigate("/games");
        } else {
          setMessage("Account Creation Failed");
          setLoading(false);
        }
      })
      .catch((err) => {
        setMessage(err.response.data);
        setLoading(false);
      });
  };

  return loading ? (
    <Loader />
  ) : (
    <div>
      <img
        src={BackArrow}
        alt="Back"
        className="back-arrow"
        onClick={() => navigate("/")}
      />
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
        {failureMessage && <Alert message={failureMessage} type="error" />}
        <Button text="Create Account" onClick={handleSubmit} styling="btn" />
      </div>
    </div>
  );
}

export default Register;
