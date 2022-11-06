import login from "../../assets/images/login.jpg";
import { Button, Col, Row, Input } from "reactstrap"
import { Grid } from "@mui/material";
import "./LoginForm.css"
import { GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import auth from "../../firebase";

//import react
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { GoogleLogin } from "../../actions/CustomerAction";
import HeaderComponent from "../HeaderComponent/HeaderComponent";
const provider = new GoogleAuthProvider();


function LoginForm() {

    const dispatch = useDispatch();
    const { user } = useSelector((reduxData) => reduxData.LoginReducer)
    const [login, setLogin] = useState(true)
    console.log(user)

    const loginGoogle = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                // console.log(result);
                dispatch(GoogleLogin(result.user));
            })
            .catch((error) => {
                console.error(error);
            })
    }

    const logoutGoogle = () => {
        signOut(auth)
            .then(() => {
                dispatch(GoogleLogin(null));
            })
            .catch((error) => {
                console.error(error);
            })
    }

    const onBtnSignUp = () => {
        setLogin(false)
    }

    const onBtnLogin = () => {
        setLogin(true)
    }

    return (
        <>
            <HeaderComponent></HeaderComponent>

            <div className="container" >
                <section className="login_box_area section_gap">
                    <div className="container">
                        <div className="row">

                            <div className="col-lg-12 text-center">
                                <div style={{ marginBottom: "150px" }}>
                                    {
                                        login ?
                                            <div className="largeBackGround">
                                                <div className="smallBackGround">
                                                    <Row>
                                                        <Col>
                                                            <Button className="signUpButton" onClick={onBtnSignUp}>Sign Up</Button>
                                                            <Button className="loginButton">Log In</Button>
                                                        </Col>
                                                    </Row>
                                                    <Row>
                                                        <h2 className="textWelcome">Welcome Back!</h2>
                                                    </Row>
                                                    <Row>
                                                        <Input placeholder="Email Address*" className="input" ></Input>
                                                    </Row>
                                                    <Row>
                                                        <Input placeholder="Passwords*" className="input" ></Input>
                                                    </Row>
                                                    <Row>
                                                        <p className="textForgotPassword">Forgot Passwords</p>
                                                    </Row>
                                                    <Row>
                                                        <Button className="loginButtonLarge" >Log In</Button>
                                                    </Row>
                                                    <Row>
                                                        <Button className="loginGoogleButton" onClick={loginGoogle}>Log In Google</Button>
                                                    </Row>
                                                </div>
                                            </div>
                                            :
                                            <div className="largeBackGroundSignUp">
                                                <div className="smallBackGroundSignUp">
                                                    <Row>
                                                        <Col>
                                                            <Button className="loginButton" >Sign Up</Button>
                                                            <Button className="signUpButton" onClick={onBtnLogin}>Log In</Button>
                                                        </Col>
                                                    </Row>
                                                    <Row>
                                                        <h2 className="textWelcome">Sign Up For Free</h2>
                                                    </Row>
                                                    <Row>
                                                        <Input placeholder="Full Name*" className="input" ></Input>
                                                    </Row>
                                                    <Row>
                                                        <Input placeholder="Phone Number*" className="input" ></Input>
                                                    </Row>
                                                    <Row>
                                                        <Input placeholder="Email Address*" className="input" ></Input>
                                                    </Row>
                                                    <Row>
                                                        <Input placeholder="Address*" className="input" ></Input>
                                                    </Row>
                                                    <Row>
                                                        <Input placeholder="City*" className="input" ></Input>
                                                    </Row>
                                                    <Row>
                                                        <Input placeholder="Country*" className="input" ></Input>
                                                    </Row>
                                                    <Row>
                                                        <Input placeholder="Set A Password*" className="input" ></Input>
                                                    </Row>
                                                    <Row>
                                                        <Button className="loginButtonLarge" >Get Started</Button>
                                                    </Row>
                                                </div>
                                            </div>
                                    }

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>



            <footer>
                <div className="footer-main">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-12 col-sm-12">
                                <div className="footer-top-box">
                                    <h3>Business Time</h3>
                                    <ul className="list-time">
                                        <li>Monday - Friday: 08.00am to 05.00pm</li> <li>Saturday: 10.00am to 08.00pm</li> <li>Sunday: <span>Closed</span></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12 col-sm-12">
                                <div className="footer-top-box">
                                    <h3>Newsletter</h3>
                                    <form className="newsletter-box">
                                        <div className="form-group">
                                            <input className="" type="email" name="Email" placeholder="Email Address*" />
                                            <i className="fa fa-envelope"></i>
                                        </div>
                                        <button className="btn hvr-hover" type="submit">Submit</button>
                                    </form>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12 col-sm-12">
                                <div className="footer-top-box">
                                    <h3>Social Media</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    <ul>
                                        <li><a href="#"><i className="fab fa-facebook" aria-hidden="true"></i></a></li>
                                        <li><a href="#"><i className="fab fa-twitter" aria-hidden="true"></i></a></li>
                                        <li><a href="#"><i className="fab fa-linkedin" aria-hidden="true"></i></a></li>
                                        <li><a href="#"><i className="fab fa-google-plus" aria-hidden="true"></i></a></li>
                                        <li><a href="#"><i className="fa fa-rss" aria-hidden="true"></i></a></li>
                                        <li><a href="#"><i className="fab fa-pinterest-p" aria-hidden="true"></i></a></li>
                                        <li><a href="#"><i className="fab fa-whatsapp" aria-hidden="true"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col-lg-4 col-md-12 col-sm-12">
                                <div className="footer-widget">
                                    <h4>About Freshshop</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12 col-sm-12">
                                <div className="footer-link">
                                    <h4>Information</h4>
                                    <ul>
                                        <li><a href="#">About Us</a></li>
                                        <li><a href="#">Customer Service</a></li>
                                        <li><a href="#">Our Sitemap</a></li>
                                        <li><a href="#">Terms &amp; Conditions</a></li>
                                        <li><a href="#">Privacy Policy</a></li>
                                        <li><a href="#">Delivery Information</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12 col-sm-12">
                                <div className="footer-link-contact">
                                    <h4>Contact Us</h4>
                                    <ul>
                                        <li>
                                            <p><i className="fas fa-map-marker-alt"></i>Address: Michael I. Days 3756 <br />Preston Street Wichita,<br /> KS 67213 </p>
                                        </li>
                                        <li>
                                            <p><i className="fas fa-phone-square"></i>Phone: <a href="tel:+1-888705770">+1-888 705 770</a></p>
                                        </li>
                                        <li>
                                            <p><i className="fas fa-envelope"></i>Email: <a href="mailto:contactinfo@gmail.com">contactinfo@gmail.com</a></p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

            <div className="footer-copyright">
                <p className="footer-company">All Rights Reserved. &copy; 2018 <a href="#">ThewayShop</a> Design By :
                    <a href="https://html.design/">html design</a></p>
            </div>

            <a href="/" id="back-to-top" title="Back to top" style={{ display: "none" }}>&uarr;</a>
        </>

    )
}

export default LoginForm