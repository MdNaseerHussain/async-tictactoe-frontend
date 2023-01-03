import { useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import Alert from "../components/Alert";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { SERVER_ROUTE } from "../utils";
import "../index.css";
import BackArrow from "../arrow_back_ios.svg";
import Loader from "../components/Loader";

function Login() {
  const navigate = useNavigate();

  const [formValues, setFormValues] = useState({
    username: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const [loginFailureMessage, setLoginFailureMessage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    axios
      .post(`${SERVER_ROUTE}/login`, formValues)
      .then((res) => {
        if (res.data && res.data.accessToken) {
          localStorage.setItem("token", res.data.accessToken);
          localStorage.setItem("username", formValues.username);
          navigate("/games");
        } else {
          setLoginFailureMessage("Login Failed");
          setLoading(false);
        }
      })
      .catch((err) => {
        setLoginFailureMessage(err.response.data);
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
      <p className="title title-small">Login</p>
      <p className="title">Please enter your details</p>
      <Input
        name="username"
        placeholder="Type your username here"
        type="text"
        label="Username"
        value={formValues.username}
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
        {loginFailureMessage && (
          <Alert message={loginFailureMessage} type="error" />
        )}
        <Button text="Login" onClick={handleSubmit} styling="btn" />
      </div>
    </div>
  );
}

export default Login;
