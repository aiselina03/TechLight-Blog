import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style.scss";
import { UserContext } from "../../context/userContext";

function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const { addToken } = useContext(UserContext);
  const navigate = useNavigate();

  function handleSubmit(values) {
    const { username, email, password } = values;
    fetch("http://localhost:3000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        email: email,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        addToken(data);
        navigate("/login");
      })
      .catch((error) => {
        console.error("Error during registration:", error.message);
      });
  }
  return (
    <>
    
      <div className="signUpPage">
        <div className="signUp">
          <div className="signUpContent">
            <h2>Sign Up</h2>
            <Formik
              initialValues={{
                username: "",
                email: "",
                password: "",
              }}
              validationSchema={Yup.object({
                username: Yup.string()
                  .min(8, "Must be 8 characters at least")
                  .required("Required"),
                email: Yup.string()
                  .email("Invalid email address")
                  .required("Required"),
                password: Yup.string()
                  .min(8, "Must be 8 characters at least")
                  .required("Required"),
              })}
              onSubmit={(values, { setSubmitting }) => {
                console.log(values);
                handleSubmit(values);
                setSubmitting(false);
              }}
            >
              <Form className="form">
                <div className="input">
                  <label htmlFor="username" className="label">
                    Username <span>*</span>
                  </label>
                  <Field name="username" type="text" className="field" />
                  <ErrorMessage name="username" component={"span"} />
                </div>
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
                <div className="signUpText">
                  <div className="privacy">
                    <p>
                      Your personal data will be used to support your experience
                      throughout this website, to manage access to your account,
                      and for other purposes described in our
         
                    </p>
                  </div>
                </div>
                <button type="submit">Sign Up</button>
              </Form>
            </Formik>

            <div className="haveAccount">
              <p>
                Already have an account? <Link to={"/login"}> Log In</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
     
    </>
  );
}

export default SignUp;