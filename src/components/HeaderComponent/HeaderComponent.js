import { GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import auth from "../../firebase";

//import react
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { GoogleLogin } from "../../actions/CustomerAction";
import { blueGrey, red } from "@mui/material/colors";

function HeaderComponent() {
    const dispatch = useDispatch()

    const { userGoogle } = useSelector((reduxData) => reduxData.CustomerReducer)
    const user = JSON.parse(localStorage.getItem("user"))
    const allCart = JSON.parse(localStorage.getItem("allCart"))


    useEffect(() => {
        onAuthStateChanged(auth, (result) => {
            if (result) {
                dispatch(GoogleLogin(result));

            } else {
                dispatch(GoogleLogin(null));
            }
        })
    }, [])


    const logoutGoogle = () => {
        signOut(auth)
            .then(() => {
                dispatch(GoogleLogin(null));
            })
            .catch((error) => {
                console.error(error);
            })
        localStorage.setItem("user", null)
    }

    return (
        <>
            <div className="main-top">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <div className="our-link">
                                <ul>
                                    {user && user != null ?
                                        <>
                                            <li><a href="/my-account"><i className="fa fa-user s_color"></i> {user.fullName.split(" ")[0]}</a></li>
                                            <li><a href="/login" onClick={logoutGoogle}> Log Out</a></li>
                                            <li><a href="#"><i className="fas fa-location-arrow"></i> Our location</a></li>
                                            <li><a href="#"><i className="fas fa-headset"></i> Contact Us</a></li>
                                        </>
                                        :
                                        <>
                                            <li><a href="/login"><i className="fa fa-user s_color"></i> Login</a></li>
                                            <li><a href="#"><i className="fas fa-location-arrow"></i> Our location</a></li>
                                            <li><a href="#"><i className="fas fa-headset"></i> Contact Us</a></li>
                                        </>

                                    }
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">

                            <div className="text-slid-box">
                                <div id="offer-box" className="carouselTicker">
                                    <ul className="offer-box">
                                        <li>
                                            <i className="fab fa-opencart"></i> 20% off Entire Purchase Promo code: offT80
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <header className="main-header">
                {/* <!-- Start Navigation --> */}
                <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-default bootsnav">
                    <div className="container">
                        {/* <!-- Start Header Navigation --> */}
                        <div className="navbar-header">
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-menu" aria-controls="navbars-rs-food" aria-expanded="false" aria-label="Toggle navigation">
                                <i className="fa fa-bars"></i>
                            </button>
                            <a className="navbar-brand" href="index.html"><img src="assets/images/logo.png" className="logo" alt="" /></a>
                        </div>
                        {/* <!-- End Header Navigation -->

                        <!-- Collect the nav links, forms, and other content for toggling --> */}
                        <div className="collapse navbar-collapse" id="navbar-menu">
                            <ul className="nav navbar-nav ml-auto" data-in="fadeInDown" data-out="fadeOutUp">
                                <li className="nav-item"><a className="nav-link" href="/">Home</a></li>
                                <li className="nav-item"><a className="nav-link" href="/about">About Us</a></li>
                                <li className="dropdown">
                                    <a href="/shop" className="nav-link" data-toggle="dropdown">SHOP</a>
                                    <ul className="dropdown-menu">
                                        <li><a href="/product-list">Product List</a></li>
                                        <li><a href="/cart">Cart</a></li>
                                        <li><a href="/checkout">Checkout</a></li>
                                        <li><a href="/my-account">My Account</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item"><a className="nav-link" href="/contact">Contact Us</a></li>
                            </ul>
                        </div>
                        {/* <!-- /.navbar-collapse -->

                        <!-- Start Atribute Navigation --> */}
                        <div className="attr-nav">
                            <ul>
                                <li className="search"><a href="#"><i className="fa fa-search"></i></a></li>
                                <li className="side-menu">
                                    <a href="/cart">
                                        <i className="fa fa-shopping-bag"></i>
                                        <span className="badge" style={{ color: "red" }}> {allCart && allCart.length > 0 ? allCart.length : 0}</span>
                                        <p >My Cart </p>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        {/* <!-- End Atribute Navigation --> */}
                    </div>
                    {/* <!-- Start Side Menu --> */}
                    <div className="side">
                        <a href="#" className="close-side"><i className="fa fa-times"></i></a>
                        <li className="cart-box">
                            <ul className="cart-list">
                                <li>
                                    <a href="#" className="photo"><img src="assets/images/img-pro-01.jpg" className="cart-thumb" alt="" /></a>
                                    <h6><a href="#">Delica omtantur </a></h6>
                                    <p>1x - <span className="price">$80.00</span></p>
                                </li>
                                <li>
                                    <a href="#" className="photo"><img src="assets/images/img-pro-02.jpg" className="cart-thumb" alt="" /></a>
                                    <h6><a href="#">Omnes ocurreret</a></h6>
                                    <p>1x - <span className="price">$60.00</span></p>
                                </li>
                                <li>
                                    <a href="#" className="photo"><img src="assets/images/img-pro-03.jpg" className="cart-thumb" alt="" /></a>
                                    <h6><a href="#">Agam facilisis</a></h6>
                                    <p>1x - <span className="price">$40.00</span></p>
                                </li>
                                <li className="total">
                                    <a href="#" className="btn btn-default hvr-hover btn-cart">VIEW CART</a>
                                    <span className="float-right"><strong>Total</strong>: $180.00</span>
                                </li>
                            </ul>
                        </li>
                    </div>
                    {/* <!-- End Side Menu --> */}
                </nav>
                {/* <!-- End Navigation --> */}
            </header>

            <div className="top-search">
                <div className="container">
                    <div className="input-group">
                        <span className="input-group-addon"><i className="fa fa-search"></i></span>
                        <input type="text" className="form-control" placeholder="Search" />
                        <span className="input-group-addon close-search"><i className="fa fa-times"></i></span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeaderComponent