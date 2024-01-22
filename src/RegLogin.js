import { useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import "./App.css";
import { auth } from "./firebase-config";
import "./RegLogin.css";
import { MDBCollapse, MDBBtn, MDBRow, MDBCol } from "mdb-react-ui-kit";
import { MDBInput } from "mdb-react-ui-kit";
import { MDBTypography } from "mdb-react-ui-kit";

function RegLogin() {
  const [showFirst, setShowFirst] = useState(false);
  const [showSecond, setShowSecond] = useState(false);

  const [signIn, toggle] = useState(true);
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [user, setUser] = useState({});

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const logout = async () => {
    await signOut(auth);
  };

  return (
    <>
      <div className="submission-form">
{/* 
        <div>
          <MDBTypography
            tag="div"
            className="display-5 pb-3 mb-3 border-bottom"
          >
            Register User
          </MDBTypography>
          <MDBInput
            label="Email input"
            id="typeEmail"
            type="email"
            onChange={(event) => {
              setRegisterEmail(event.target.value);
            }}
          />
          <MDBInput
            label="Password input"
            id="typePassword"
            type="password"
            onChange={(event) => {
              setRegisterPassword(event.target.value);
            }}
          />
          <MDBBtn id="reg-log-btn" onClick={register}>
            Register
          </MDBBtn>
        </div>

        <div>
          <MDBTypography
            tag="div"
            className="display-5 pb-3 mb-3 border-bottom"
          >
            Login
          </MDBTypography>
          <MDBInput
            label="Email input"
            id="typeEmail"
            type="email"
            onChange={(event) => {
              setLoginEmail(event.target.value);
            }}
          />
          <MDBInput
            label="Password input"
            id="typePassword"
            type="password"
            onChange={(event) => {
              setLoginPassword(event.target.value);
            }}
          />
          <MDBBtn id="reg-log-btn" onClick={login}>
            Login
          </MDBBtn>
        </div>

        {/* <h4 className="user-logged-in"> User Logged In: </h4>
        {user ? user.email : "Not Logged In"}

        <button onClick={logout}> Sign Out </button> */}
      </div>

      <div className="login-wrap">
        <div className="login-html">
          <input
            id="tab-1"
            type="radio"
            name="tab"
            className="sign-in"
          />
          <label for="tab-1" className="tab">
            Login
          </label>
          <input id="tab-2" type="radio" name="tab" className="sign-up"/>
          <label for="tab-2" className="tab">
            Register
          </label>
          <div className="login-form">
            <div className="sign-in-htm">
              <div className="group">
                <label for="email" className="label">
                  Email
                </label>
                <input
                  id="user"
                  type="text"
                  className="input"
                  onChange={(event) => {
              setRegisterEmail(event.target.value);
            }}
                />
              </div>
              <div className="group">
                <label for="pass" className="label">
                  Password
                </label>
                <input
                  id="pass"
                  type="password"
                  className="input"
                  data-type="password"
                  onChange={(event) => {
              setRegisterPassword(event.target.value);
            }}
                />
              </div>
              <div className="group">
                <input type="submit" className="button" value="Sign In" onClick={register}/>
                {/* button that logs in */}
              </div>
              <div className="hr"></div>
            </div>

            {/* REGISTRATION SECTION */}

            <div className="sign-up-htm">
              <div className="group">
                <label for="pass" className="label">
                  Email Address
                </label>
                <input
                  id="pass"
                  type="text"
                  className="input"
                  onChange={(event) => {
                    setRegisterEmail(event.target.value);
                  }}
                />
                {/* email registration input field */}
              </div>
              <div className="group">
                <label for="pass" className="label">
                  Password
                </label>
                <input
                  id="pass"
                  type="password"
                  className="input"
                  data-type="password"
                  onChange={(event) => {
                    setRegisterPassword(event.target.value);
                  }}
                />
              </div>
              <div className="group">
                <input
                  type="submit"
                  className="button"
                  value="Sign Up"
                  onClick={register}
                />
              </div>
              <div className="hr"></div>
            </div>
          </div>
        </div>
      </div>
              <h4 className="user-logged-in"> User Logged In: <br/></h4>
        {user ? user.email : "Not Logged In"}
        <br/>
        {/* <button onClick={logout}> Sign Out </button> */}
        <br/>
        <button className="btn-raised" onClick={logout}>Sign out!!!</button>
    </>
  );
}

export default RegLogin;
