import HeaderComponent from "../HeaderComponent/HeaderComponent"

function CheckoutComponent() {
    return (
        <>
            <HeaderComponent></HeaderComponent>

            <div className="all-title-box">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2>Checkout</h2>
                            <ul className="breadcrumb" style={{padding: "10px"}}>
                                <li className="breadcrumb-item"><a href="/shop">Shop</a></li>
                                <li className="breadcrumb-item active">Checkout</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- End All Title Box -->

            <!-- Start Cart  --> */}
            <div className="cart-box-main">
                <div className="container">
                    <div className="row new-account-login">
                        <div className="col-sm-6 col-lg-6 mb-3">
                            <div className="title-left">
                                <h3>Account Login</h3>
                            </div>
                            <h5><a data-toggle="collapse" href="#formLogin" role="button" aria-expanded="false">Click here to Login</a></h5>
                            <form className="mt-3 collapse review-form-box" id="formLogin">
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label for="InputEmail" className="mb-0">Email Address</label>
                                        <input type="email" className="form-control" id="InputEmail" placeholder="Enter Email" /> </div>
                                    <div className="form-group col-md-6">
                                        <label for="InputPassword" className="mb-0">Password</label>
                                        <input type="password" className="form-control" id="InputPassword" placeholder="Password" /> </div>
                                </div>
                                <button type="submit" className="btn hvr-hover">Login</button>
                            </form>
                        </div>
                        <div className="col-sm-6 col-lg-6 mb-3">
                            <div className="title-left">
                                <h3>Create New Account</h3>
                            </div>
                            <h5><a data-toggle="collapse" href="#formRegister" role="button" aria-expanded="false">Click here to Register</a></h5>
                            <form className="mt-3 collapse review-form-box" id="formRegister">
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label for="InputName" className="mb-0">First Name</label>
                                        <input type="text" className="form-control" id="InputName" placeholder="First Name" /> </div>
                                    <div className="form-group col-md-6">
                                        <label for="InputLastname" className="mb-0">Last Name</label>
                                        <input type="text" className="form-control" id="InputLastname" placeholder="Last Name" /> </div>
                                    <div className="form-group col-md-6">
                                        <label for="InputEmail1" className="mb-0">Email Address</label>
                                        <input type="email" className="form-control" id="InputEmail1" placeholder="Enter Email" /> </div>
                                    <div className="form-group col-md-6">
                                        <label for="InputPassword1" className="mb-0">Password</label>
                                        <input type="password" className="form-control" id="InputPassword1" placeholder="Password" /> </div>
                                </div>
                                <button type="submit" className="btn hvr-hover">Register</button>
                            </form>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6 col-lg-6 mb-3">
                            <div className="checkout-address">
                                <div className="title-left">
                                    <h3>Billing address</h3>
                                </div>
                                <form className="needs-validation" novalidate>
                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            <label for="firstName">First name *</label>
                                            <input type="text" className="form-control" id="firstName" placeholder="" value="" required />
                                            <div className="invalid-feedback"> Valid first name is required. </div>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label for="lastName">Last name *</label>
                                            <input type="text" className="form-control" id="lastName" placeholder="" value="" required />
                                            <div className="invalid-feedback"> Valid last name is required. </div>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label for="username">Username *</label>
                                        <div className="input-group">
                                            <input type="text" className="form-control" id="username" placeholder="" required />
                                            <div className="invalid-feedback" style={{width: "100%"}}> Your username is required. </div>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label for="email">Email Address *</label>
                                        <input type="email" className="form-control" id="email" placeholder="" />
                                        <div className="invalid-feedback"> Please enter a valid email address for shipping updates. </div>
                                    </div>
                                    <div className="mb-3">
                                        <label for="address">Address *</label>
                                        <input type="text" className="form-control" id="address" placeholder="" required />
                                        <div className="invalid-feedback"> Please enter your shipping address. </div>
                                    </div>
                                    <div className="mb-3">
                                        <label for="address2">Address 2 *</label>
                                        <input type="text" className="form-control" id="address2" placeholder="" /> </div>
                                    <div className="row">
                                        <div className="col-md-5 mb-3">
                                            <label for="country">Country *</label>
                                            <select className="wide w-100" id="country">
                                                <option value="Choose..." data-display="Select">Choose...</option>
                                                <option value="United States">United States</option>
                                            </select>
                                            <div className="invalid-feedback"> Please select a valid country. </div>
                                        </div>
                                        <div className="col-md-4 mb-3">
                                            <label for="state">State *</label>
                                            <select className="wide w-100" id="state">
                                                <option data-display="Select">Choose...</option>
                                                <option>California</option>
                                            </select>
                                            <div className="invalid-feedback"> Please provide a valid state. </div>
                                        </div>
                                        <div className="col-md-3 mb-3">
                                            <label for="zip">Zip *</label>
                                            <input type="text" className="form-control" id="zip" placeholder="" required />
                                            <div className="invalid-feedback"> Zip code required. </div>
                                        </div>
                                    </div>
                                    <hr className="mb-4" />
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="same-address" />
                                        <label className="custom-control-label" for="same-address">Shipping address is the same as my billing address</label>
                                    </div>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="save-info" />
                                        <label className="custom-control-label" for="save-info">Save this information for next time</label>
                                    </div>
                                    <hr className="mb-4" />
                                    <div className="title"> <span>Payment</span> </div>
                                    <div className="d-block my-3">
                                        <div className="custom-control custom-radio">
                                            <input id="credit" name="paymentMethod" type="radio" className="custom-control-input" checked required />
                                            <label className="custom-control-label" for="credit">Credit card</label>
                                        </div>
                                        <div className="custom-control custom-radio">
                                            <input id="debit" name="paymentMethod" type="radio" className="custom-control-input" required />
                                            <label className="custom-control-label" for="debit">Debit card</label>
                                        </div>
                                        <div className="custom-control custom-radio">
                                            <input id="paypal" name="paymentMethod" type="radio" className="custom-control-input" required />
                                            <label className="custom-control-label" for="paypal">Paypal</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            <label for="cc-name">Name on card</label>
                                            <input type="text" className="form-control" id="cc-name" placeholder="" required /> <small className="text-muted">Full name as displayed on card</small>
                                            <div className="invalid-feedback"> Name on card is required </div>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label for="cc-number">Credit card number</label>
                                            <input type="text" className="form-control" id="cc-number" placeholder="" required />
                                            <div className="invalid-feedback"> Credit card number is required </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-3 mb-3">
                                            <label for="cc-expiration">Expiration</label>
                                            <input type="text" className="form-control" id="cc-expiration" placeholder="" required />
                                            <div className="invalid-feedback"> Expiration date required </div>
                                        </div>
                                        <div className="col-md-3 mb-3">
                                            <label for="cc-expiration">CVV</label>
                                            <input type="text" className="form-control" id="cc-cvv" placeholder="" required />
                                            <div className="invalid-feedback"> Security code required </div>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <div className="payment-icon">
                                                <ul>
                                                    <li><img className="img-fluid" src="assets/images/payment-icon/1.png" alt="" /></li>
                                                    <li><img className="img-fluid" src="assets/images/payment-icon/2.png" alt="" /></li>
                                                    <li><img className="img-fluid" src="assets/images/payment-icon/3.png" alt="" /></li>
                                                    <li><img className="img-fluid" src="assets/images/payment-icon/5.png" alt="" /></li>
                                                    <li><img className="img-fluid" src="assets/images/payment-icon/7.png" alt="" /></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <hr className="mb-1" />
                                </form>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-6 mb-3">
                            <div className="row">
                                <div className="col-md-12 col-lg-12">
                                    <div className="shipping-method-box">
                                        <div className="title-left">
                                            <h3>Shipping Method</h3>
                                        </div>
                                        <div className="mb-4">
                                            <div className="custom-control custom-radio">
                                                <input id="shippingOption1" name="shipping-option" className="custom-control-input" checked="checked" type="radio" />
                                                <label className="custom-control-label" for="shippingOption1">Standard Delivery</label> <span className="float-right font-weight-bold">FREE</span> </div>
                                            <div className="ml-4 mb-2 small">(3-7 business days)</div>
                                            <div className="custom-control custom-radio">
                                                <input id="shippingOption2" name="shipping-option" className="custom-control-input" type="radio" />
                                                <label className="custom-control-label" for="shippingOption2">Express Delivery</label> <span className="float-right font-weight-bold">$10.00</span> </div>
                                            <div className="ml-4 mb-2 small">(2-4 business days)</div>
                                            <div className="custom-control custom-radio">
                                                <input id="shippingOption3" name="shipping-option" className="custom-control-input" type="radio" />
                                                <label className="custom-control-label" for="shippingOption3">Next Business day</label> <span className="float-right font-weight-bold">$20.00</span> </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12 col-lg-12">
                                    <div className="odr-box">
                                        <div className="title-left">
                                            <h3>Shopping cart</h3>
                                        </div>
                                        <div className="rounded p-2 bg-light">
                                            <div className="media mb-2 border-bottom">
                                                <div className="media-body"> <a href="detail.html"> Lorem ipsum dolor sit amet</a>
                                                    <div className="small text-muted">Price: $80.00 <span className="mx-2">|</span> Qty: 1 <span className="mx-2">|</span> Subtotal: $80.00</div>
                                                </div>
                                            </div>
                                            <div className="media mb-2 border-bottom">
                                                <div className="media-body"> <a href="detail.html"> Lorem ipsum dolor sit amet</a>
                                                    <div className="small text-muted">Price: $60.00 <span className="mx-2">|</span> Qty: 1 <span className="mx-2">|</span> Subtotal: $60.00</div>
                                                </div>
                                            </div>
                                            <div className="media mb-2">
                                                <div className="media-body"> <a href="detail.html"> Lorem ipsum dolor sit amet</a>
                                                    <div className="small text-muted">Price: $40.00 <span className="mx-2">|</span> Qty: 1 <span className="mx-2">|</span> Subtotal: $40.00</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12 col-lg-12">
                                    <div className="order-box">
                                        <div className="title-left">
                                            <h3>Your order</h3>
                                        </div>
                                        <div className="d-flex">
                                            <div className="font-weight-bold">Product</div>
                                            <div className="ml-auto font-weight-bold">Total</div>
                                        </div>
                                        <hr className="my-1" />
                                        <div className="d-flex">
                                            <h4>Sub Total</h4>
                                            <div className="ml-auto font-weight-bold"> $ 440 </div>
                                        </div>
                                        <div className="d-flex">
                                            <h4>Discount</h4>
                                            <div className="ml-auto font-weight-bold"> $ 40 </div>
                                        </div>
                                        <hr className="my-1" />
                                        <div className="d-flex">
                                            <h4>Coupon Discount</h4>
                                            <div className="ml-auto font-weight-bold"> $ 10 </div>
                                        </div>
                                        <div className="d-flex">
                                            <h4>Tax</h4>
                                            <div className="ml-auto font-weight-bold"> $ 2 </div>
                                        </div>
                                        <div className="d-flex">
                                            <h4>Shipping Cost</h4>
                                            <div className="ml-auto font-weight-bold"> Free </div>
                                        </div>
                                        <hr />
                                        <div className="d-flex gr-total">
                                            <h5>Grand Total</h5>
                                            <div className="ml-auto h5"> $ 388 </div>
                                        </div>
                                        <hr /> </div>
                                </div>
                                <div className="col-12 d-flex shopping-box"> <a href="checkout.html" className="ml-auto btn hvr-hover">Place Order</a> </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            {/* <!-- End Cart -->

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
            {/* <!-- End Footer  -->

                                    <!-- Start copyright  --> */}
            <div className="footer-copyright">
                <p className="footer-company">All Rights Reserved. &copy; 2018 <a href="#">ThewayShop</a> Design By :
                    <a href="https://html.design/">html design</a></p>
            </div>
            {/* <!-- End copyright  --> */}

            <a href="/" id="back-to-top" title="Back to top" style={{display: "none"}}>&uarr;</a>

        </>
    )
}

export default CheckoutComponent