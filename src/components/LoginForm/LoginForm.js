import login from "../../assets/images/login.jpg";
import { GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import auth from "../../firebase";

//import react
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { GoogleLogin } from "../../actions/LoginAction";
import HeaderComponent from "../HeaderComponent/HeaderComponent";
const provider = new GoogleAuthProvider();


function LoginForm() {

    const dispatch = useDispatch();
    const { user } = useSelector((reduxData) => reduxData.LoginReducer)
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

    // useEffect(() => {
    //     onAuthStateChanged(auth, (result) => {
    //         if (result) {
    //             dispatch(GoogleLogin(result));
    //         } else {
    //             dispatch(GoogleLogin(null));
    //         }
    //     })
    // }, [])

    return (
        <>
            <HeaderComponent></HeaderComponent>

            <div className="container" style={{ margin: "80px" }}>
                <section className="login_box_area section_gap">
                    <div className="container">
                        <div className="row">

                            <div className="col-lg-6">
                                <div style={{ position: "relative" }}>
                                    <img className="img-fluid" src={login} alt="" style={{ filter: "brightness(50%)" }} />
                                    {/* style={{height: "500px"}} */}
                                    <div className="hover text-center" style={{ position: "absolute", top: "200px", left: "20px", right: "100px", fontSize: "20px" }}>
                                        <h2 style={{ fontWeight: "bold", color: "white" }}>New to our website?</h2>
                                        <p className="my-5" style={{ color: "white" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim nulla, mollis eu metus in, sagittis fringilla tortor. Phasellus purus dignissim convallis.</p>
                                        {" "}
                                        {
                                            user ?
                                                <>
                                                    <h4 style={{ color: "white" }}>Hi, {user.displayName}</h4>
                                                    <img src={user.photoURL} style={{ width: "50px", borderRadius: "50%" }} alt="user-avatar"></img>
                                                    <br></br>
                                                    <button className="btn btn-danger mt-1" onClick={logoutGoogle}><a href="/login" style={{ color: "white" }}>Sign out</a></button>
                                                </>
                                                :
                                                <button className="btn btn-danger " onClick={loginGoogle}><a href="/login" style={{ color: "white" }}>Sign in with Google</a></button>
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 text-center">
                                <div style={{ marginTop: "150px" }}>
                                    <h3>Log in to enter</h3>
                                    <form className="row login_form" id="contactForm">
                                        <div className="col-md-12 form-group">
                                            <input type="text" className="form-control" name="name" placeholder="Username" />
                                        </div>
                                        <div className="col-md-12 form-group">
                                            <input type="password" className="form-control" name="name" placeholder="Password" />
                                        </div>
                                        <div className="col-md-12 form-group">
                                            <div className="creat_account">
                                                <input type="checkbox" id="f-option2" name="selector" />
                                                <label htmlFor="f-option2">Keep me logged in</label>
                                            </div>
                                        </div>
                                        <div className="col-md-12 form-group">
                                            <button className="btn essence-btn">Log In</button>
                                            <a href="/login">Forgot Password?</a>
                                        </div>
                                    </form>
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