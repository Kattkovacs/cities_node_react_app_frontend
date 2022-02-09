import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { isLogged } from "../actions";
import Axios from "axios";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [psw, setPsw] = useState("");

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const inputValues = { email, name, psw };

    Axios.post("http://localhost:4000/login", {
      inputValues,
    }).then(() => {
      console.log("OK");
    });
    dispatch(isLogged());
  };

  return (
    <div>
      <div className="wrapper fadeInDown">
        <div id="formContent">
          <div className="fadeIn first">
            <i
              className="fas fa-map-marked-alt fa-5x m-4"
              style={{ color: "#56baed" }}
            ></i>
          </div>
          <form>
            <input
              type="text"
              id="name"
              className="fadeIn second"
              value={name}
              placeholder="name"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <input
              type="text"
              id="email"
              className="fadeIn second"
              value={email}
              placeholder="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input
              type="text"
              id="password"
              className="fadeIn third"
              value={psw}
              placeholder="password"
              onChange={(e) => {
                setPsw(e.target.value);
              }}
            />
            <input
              type="submit"
              className="fadeIn fourth"
              value="Log In"
              onClick={handleSubmit}
            />
          </form>

          <div id="formFooter">
            <Link to="/password/reset/">Forgot Password?</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
