import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import React, { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import "./style.scss";
import { UserContext } from "../../context/userContext";

function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState(""); 
  const { addToken, decode } = useContext(UserContext);

  async function handleSubmit(values) {
    const { email, password } = values;
    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      
      const data = await response.json();
      addToken(data);
  
    } catch (error) {
      console.log("Error:", error);
      setLoginError("Incorrect email or password"); 
    }
  }

  return (
    <>

      <div className="loginPage">
        <div className="login">
          {decode ? (
            <Navigate to={"/"} />
          ) : (
            <div className="loginContent">
              <h2>Login</h2>
              <Formik
                initialValues={{ password: "", email: "" }}
                validationSchema={Yup.object({
                  password: Yup.string()
                    .min(8, "Must be 8 characters at least")
                    .required("Required"),
                  email: Yup.string()
                    .email("Invalid email address")
                    .required("Required"),
                })}
                onSubmit={(values, { setSubmitting }) => {
                  handleSubmit(values);
                  setSubmitting(false);
                }}
              >
                <Form className="form">
                  <div className="input">
                    <label htmlFor="email" className="label">
                      Email address <span>*</span>
                    </label>
                    <Field
                      name="email"
                      type="email"
                      id="email"
                      className="field"
                    />
                    <ErrorMessage name="email" component={"span"} />
                  </div>
                  <div className="input2">
                    <label htmlFor="password" className="label">
                      Password <span>*</span>
                    </label>
                    <div className="fields">
                      <Field
                        className="field"
                        name="password"
                        id="password"
                        type={showPassword ? "text" : "password"}
                      />
                      {showPassword ? (
                        <i
                          className="fa-sharp fa-light fa-eye"
                          onClick={() => setShowPassword(false)}
                        ></i>
                      ) : (
                        <i
                          className="fa-sharp fa-light fa-eye-slash"
                          onClick={() => setShowPassword(true)}
                        ></i>
                      )}
                    </div>
                    <ErrorMessage name="password" component={"span"} />
                  </div>
                  {loginError && <div className="error">{loginError}</div>} 
                  <div className="loginText">
                    <div className="checkbox">
                      <div className="checkbox-input">
                        <Field type="checkbox" name="toggle" id="toggle" />
                        <label htmlFor="toggle" className="label">
                          Remember me
                        </label>
                      </div>
                      <ErrorMessage name="toggle" component={"span2"} />
                    </div>
                  </div>
                  <button type="submit">Log In</button>
                 
             
               
                </Form>
              </Formik>
              <div className="haveAccount">
                <p>
                  Don't have account? <Link to={"/signUp"}> Sign Up</Link>
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
  
    </>
  );
}

export default LoginPage;