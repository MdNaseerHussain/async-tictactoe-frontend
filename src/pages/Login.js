import { useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import Alert from "../components/Alert";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [formValues, setFormValues] = useState({
    username: "",
    password: "",
  });

  const [loginFailureMessage, setLoginFailureMessage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/login", formValues)
      .then((res) => {
        if (res.data && res.data.accessToken) {
          localStorage.setItem("token", res.data.token);
          navigate("/games");
        } else {
          setLoginFailureMessage("Login Failed");
        }
      })
      .catch((err) => {
        setLoginFailureMessage(err.response.data);
      });
  };

  return (
    <div>
      Login 
      <br />
      Please enter your details
      <br />
      <Input
        name="username"
        placeholder="Enter Username"
        type="text"
        value={formValues.username}
        onChange={handleChange}
      />
      <br />
      <Input
        name="password"
        placeholder="Enter Password"
        type="password"
        value={formValues.password}
        onChange={handleChange}
      />
      <br />
      <Button text="Login" onClick={handleSubmit} />
      <br />
      {loginFailureMessage && <Alert message={loginFailureMessage} />}
    </div>
  );
}

export default Login;
