import HeaderComponent from "../HeaderComponent/HeaderComponent"

function MyAccountComponent() {
    return (
        <>
            <HeaderComponent></HeaderComponent>

            {/* <!-- Start All Title Box --> */} 
            <div className="all-title-box">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2>My Account</h2>
                            <ul className="breadcrumb" style={{padding: "10px"}}>
                                <li className="breadcrumb-item"><a href="#">Shop</a></li>
                                <li className="breadcrumb-item active">My Account</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- End All Title Box -->

            <!-- Start My Account  --> */}
            <div className="my-account-box-main">
                <div className="container">
                    <div className="my-account-page">
                        <div className="row">
                            <div className="col-lg-4 col-md-12">
                                <div className="account-box">
                                    <div className="service-box">
                                        <div className="service-icon">
                                            <a href="#"> <i className="fa fa-gift"></i> </a>
                                        </div>
                                        <div className="service-desc">
                                            <h4>Your Orders</h4>
                                            <p>Track, return, or buy things again</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12">
                                <div className="account-box">
                                    <div className="service-box">
                                        <div className="service-icon">
                                            <a href="#"><i className="fa fa-lock"></i> </a>
                                        </div>
                                        <div className="service-desc">
                                            <h4>Login &amp; security</h4>
                                            <p>Edit login, name, and mobile number</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12">
                                <div className="account-box">
                                    <div className="service-box">
                                        <div className="service-icon">
                                            <a href="#"> <i className="fa fa-location-arrow"></i> </a>
                                        </div>
                                        <div className="service-desc">
                                            <h4>Your Addresses</h4>
                                            <p>Edit addresses for orders and gifts</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12">
                                <div className="account-box">
                                    <div className="service-box">
                                        <div className="service-icon">
                                            <a href="#"> <i className="fa fa-credit-card"></i> </a>
                                        </div>
                                        <div className="service-desc">
                                            <h4>Payment options</h4>
                                            <p>Edit or add payment methods</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12">
                                <div className="account-box">
                                    <div className="service-box">
                                        <div className="service-icon">
                                            <a href="#"> <i className="fab fa-paypal"></i> </a>
                                        </div>
                                        <div className="service-desc">
                                            <h4>PayPal</h4>
                                            <p>View benefits and payment settings</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12">
                                <div className="account-box">
                                    <div className="service-box">
                                        <div className="service-icon">
                                            <a href="#"> <i className="fab fa-amazon"></i> </a>
                                        </div>
                                        <div className="service-desc">
                                            <h4>Amazon Pay balance</h4>
                                            <p>Add money to your balance</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bottom-box">
                            <div className="row">
                                <div className="col-lg-4 col-md-12">
                                    <div className="account-box">
                                        <div className="service-box">
                                            <div className="service-desc">
                                                <h4>Gold &amp; Diamond Jewellery</h4>
                                                <ul>
                                                    <li> <a href="#">Apps and more</a> </li>
                                                    <li> <a href="#">Content and devices</a> </li>
                                                    <li> <a href="#">Music settings</a> </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-12">
                                    <div className="account-box">
                                        <div className="service-box">
                                            <div className="service-desc">
                                                <h4>Handloom &amp; Handicraft Store</h4>
                                                <ul>
                                                    <li> <a href="#">Advertising preferences </a> </li>
                                                    <li> <a href="#">Communication preferences</a> </li>
                                                    <li> <a href="#">SMS alert preferences</a> </li>
                                                    <li> <a href="#">Message center</a> </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-12">
                                    <div className="account-box">
                                        <div className="service-box">
                                            <div className="service-desc">
                                                <h4>The Designer Boutique</h4>
                                                <ul>
                                                    <li> <a href="#">Amazon Pay</a> </li>
                                                    <li> <a href="#">Bank accounts for refunds</a> </li>
                                                    <li> <a href="#">Coupons</a> </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-12">
                                    <div className="account-box">
                                        <div className="service-box">
                                            <div className="service-desc">
                                                <h4>Gift Boxes, Gift Tags, Greeting Cards</h4>
                                                <ul>
                                                    <li> <a href="#">Leave delivery feedback</a> </li>
                                                    <li> <a href="#">Lists</a> </li>
                                                    <li> <a href="#">Photo ID proofs</a> </li>
                                                    <li> <a href="#">Profile</a> </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-12">
                                    <div className="account-box">
                                        <div className="service-box">
                                            <div className="service-desc">
                                                <h4>Other accounts</h4>
                                                <ul>
                                                    <li> <a href="#">Amazon Business registration</a> </li>
                                                    <li> <a href="#">Seller account</a> </li>
                                                    <li> <a href="#">Amazon Web Services</a> </li>
                                                    <li> <a href="#">Login with Amazon</a> </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-12">
                                    <div className="account-box">
                                        <div className="service-box">
                                            <div className="service-desc">
                                                <h4>Shopping programs and rentals</h4>
                                                <ul>
                                                    <li> <a href="#">Subscribe &amp; Save</a> </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- End My Account -->

            <!-- Start Instagram Feed  --> */}
            <div className="instagram-box">
                <div className="main-instagram owl-carousel owl-theme">
                    <div className="item">
                        <div className="ins-inner-box">
                            <img src="assets/images/instagram-img-01.jpg" alt="" />
                            <div className="hov-in">
                                <a href="#"><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="ins-inner-box">
                            <img src="assets/images/instagram-img-02.jpg" alt="" />
                            <div className="hov-in">
                                <a href="#"><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="ins-inner-box">
                            <img src="assets/images/instagram-img-03.jpg" alt="" />
                            <div className="hov-in">
                                <a href="#"><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="ins-inner-box">
                            <img src="assets/images/instagram-img-04.jpg" alt="" />
                            <div className="hov-in">
                                <a href="#"><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="ins-inner-box">
                            <img src="assets/images/instagram-img-05.jpg" alt="" />
                            <div className="hov-in">
                                <a href="#"><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="ins-inner-box">
                            <img src="assets/images/instagram-img-06.jpg" alt="" />
                            <div className="hov-in">
                                <a href="#"><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="ins-inner-box">
                            <img src="assets/images/instagram-img-07.jpg" alt="" />
                            <div className="hov-in">
                                <a href="#"><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="ins-inner-box">
                            <img src="assets/images/instagram-img-08.jpg" alt="" />
                            <div className="hov-in">
                                <a href="#"><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="ins-inner-box">
                            <img src="assets/images/instagram-img-09.jpg" alt="" />
                            <div className="hov-in">
                                <a href="#"><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="ins-inner-box">
                            <img src="assets/images/instagram-img-05.jpg" alt="" />
                            <div className="hov-in">
                                <a href="#"><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- End Instagram Feed  -->


            <!-- Start Footer  --> */}
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
                        <hr/>
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
                                                <p><i className="fas fa-map-marker-alt"></i>Address: Michael I. Days 3756 <br/>Preston Street Wichita,<br/> KS 67213 </p>
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
            {/* <!-- End Footer  -->

            <!-- Start copyright  --> */}
            <div className="footer-copyright">
                <p className="footer-company">All Rights Reserved. &copy; 2018 <a href="#">ThewayShop</a> Design By :
                    <a href="https://html.design/">html design</a></p>
            </div>
            {/* <!-- End copyright  --> */}

            <a href="#" id="back-to-top" title="Back to top" style={{display: "none"}}>&uarr;</a>
        </>
    )
}

export default MyAccountComponent