import React, { useState, useEffect } from "react";
import { Form, Button } from 'react-bootstrap';
import { login, register } from "./api";
import { useNavigate } from "react-router-dom";
import { NavLink, Routes, Route } from "react-router-dom";


function Register() {
    const [username, setUsername] = useState(''); 
    const [name, setName] = useState(''); 
    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState('');
    const [repass, setRepass] = useState('');   
    const [user, setUser] = useState('');   

    
    const navigate = useNavigate(); 

    const handleSubmit = (event) => {
        event.preventDefault(); 
        
        if (password == repass) {
            const user = {
                'username': username,
                'password': password,
                'name': name,
                'email': email,
            };
            
            register(user).then(data => {
                window.location.reload()
                navigate("/home")
                console.log(data["data"])
            })
        }

        

    }

    useEffect(() => { 
        if (localStorage.getItem('user') != null) { 
            navigate("/home")
        }
     }, [])
    
    const back = {
        backgroundColor: '#F6DDDD',
        margin: '70px',
        paddingTop: '50px',
        width: '40%',
        boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
        borderRadius : '10px'
        
    }

    return (
      <>
        <center>
          <div class="login-section pt-120 pb-120">
            <div class="container">
              <div class="row d-flex justify-content-center g-4">
                <div class="col-xl-6 col-lg-8 col-md-10">
                  <div
                    class="form-wrapper wow fadeInUp"
                    data-wow-duration="1.5s"
                    data-wow-delay=".2s"
                  >
                    <div class="form-title">
                      <h3>Log In</h3>
                      <p>
                        Already a Member? <NavLink to="/Register"> Sign Up</NavLink>
                      </p>
                    </div>
                    <form class="w-100" onSubmit={handleSubmit}>
                      <div class="row">
                        <div class="col-12">
                          <div class="form-inner">
                            <label style={{ float: "left" }}>Username </label>
                            <input
                              type="text"
                              placeholder="Enter Your Username..."
                              value={username}
                              onChange={(e) => setUsername(e.target.value)}
                            />
                          </div>
                        </div>
                        <div class="col-12">
                          <div class="form-inner">
                            <label style={{ float: "left" }}>Password </label>
                            <input
                              type="password"
                              name="password"
                              id="password"
                              placeholder="Enter Password..."
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                            />
                            <i class="bi bi-eye-slash" id="togglePassword"></i>
                          </div>
                        </div>
                        <div class="col-12">
                          <div class="form-agreement form-inner d-flex justify-content-between flex-wrap">
                            <div class="form-group">
                              <input type="checkbox" id="html" />
                              <label for="html">
                                I agree to the <a href="#">Terms & Policy</a>
                              </label>
                            </div>
                            <a href="#" class="forgot-pass">
                              Forgotten Password
                            </a>
                          </div>
                        </div>
                      </div>
                      <button class="account-btn">
                        {" "}
                        <i class="fa fa-paw" aria-hidden="true"></i>
                        &nbsp;Log in
                      </button>
                    </form>
                    <div class="alternate-signup-box">
                      <h6>or signup WITH</h6>
                      <div class="btn-group gap-4">
                        <a
                          href="#"
                          class="eg-btn google-btn d-flex align-items-center"
                        >
                          <i class="bx bxl-google"></i>
                          <span>signup whit google</span>
                        </a>
                        <a
                          href="#"
                          class="eg-btn facebook-btn d-flex align-items-center"
                        >
                          <i class="bx bxl-facebook"></i>signup whit facebook
                        </a>
                      </div>
                    </div>
                    <div class="form-poicy-area">
                      <p>
                        By clicking the "signup" button, you create a Cobiro
                        account, and you agree to Cobiro's{" "}
                        <a href="#">Terms & Conditions</a> &{" "}
                        <a href="#">Privacy Policy.</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div style={back}>
            <h2 style={{ "margin-bottom": "30px", color: "black" }}>
              Register
            </h2>
            <div style={{ width: "60%", "margin-bottom": "200px" }}>
              <Form onSubmit={handleSubmit}>
                <Form.Group>
                  <Form.Label style={{ float: "left", color: "black" }}>
                    Username
                  </Form.Label>
                  <Form.Control
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label style={{ float: "left", color: "black" }}>
                    Full Name
                  </Form.Label>
                  <Form.Control
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label style={{ float: "left", color: "black" }}>
                    Email
                  </Form.Label>
                  <Form.Control
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label style={{ float: "left", color: "black" }}>
                    Password
                  </Form.Label>
                  <Form.Control
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label style={{ float: "left", color: "black" }}>
                    Retype Password
                  </Form.Label>
                  <Form.Control
                    type="password"
                    value={repass}
                    onChange={(e) => setRepass(e.target.value)}
                  />
                </Form.Group>

                <br></br>
                <p>
                  You have an account already?
                  <NavLink to="/Login">Login</NavLink>
                </p>
                <Button
                  variant="primary"
                  type="submit"
                  style={{ marginBottom: "60px" }}
                >
                  <i class="fa fa-paw" aria-hidden="true"></i>
                  &nbsp; Register
                </Button>
              </Form>
            </div>
          </div>
        </center>
      </>
    );
}

export default Register;