import { useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import Alert from "../components/Alert";
import { useNavigate } from "react-router-dom";
import axios from "axios";

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
      .post("http://localhost:3001/register", formValues)
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
        placeholder="Enter Name"
        type="text"
        value={formValues.name}
        onChange={handleChange}
      />
      <br />
      <Input
        name="email"
        placeholder="Enter Email"
        type="email"
        value={formValues.email}
        onChange={handleChange}
      />
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
      <Button text="Create Account" onClick={handleSubmit} />
      <br />
      {failureMessage && (
        <Alert message={failureMessage} />
      )}
    </div>
  );
}

export default Register;
