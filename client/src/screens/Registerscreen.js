import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../actions/userActions";
import Error from "../Components/Error";
import Loading from "../Components/Loading";
import  Success  from "../Components/Success";

const Registerscreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const registerState = useSelector(state =>state.userReducer)
  const {error , loading , success} = registerState

  console.log(registerState)

  let regEx = /\S+@\S+\.\S+/;

  const dispatch = useDispatch()

  const registerData = (e) => {
    e.preventDefault();
    if (
      name !== "" &&
      regEx.test(email) &&
      password !== "" &&
      password === cpassword
    ) {
      const user = {
        name,
        email,
        password,
        cpassword,
      };

      dispatch(registerUser(user))

    } else {
      alert("Enter correct details");
    }
  };

  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-5 shadow-lg p-3 mb-5 bg-white rounded">
          {loading && (<Loading/>)}
          {success && (<Success success="user registered successfully"/>)}
          {error && (<Error error="Email already exists"/>)}
          <h2 className="text-center " style={{ fontSize: "30px" }}>
            Register
          </h2>
          <form>
            <input
              type="text"
              placeholder="name"
              className="form-control mt-3"
              id="name"
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="email"
              className="form-control mt-3"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="password"
              className="form-control mt-3"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="confirm password"
              className="form-control mt-3"
              id="cpassword"
              onChange={(e) => setCpassword(e.target.value)}
              required
            />
            <button
              type="submit"
              className="btn mt-3 text-uppercase"
              style={{ width: "100%" }}
              onClick={registerData}
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registerscreen;
