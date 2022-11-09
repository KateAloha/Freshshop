import HeaderComponent from "../HeaderComponent/HeaderComponent"

function ContactComponent() {
    return (
        <>
           <HeaderComponent></HeaderComponent>


            <div className="all-title-box">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2>Contact Us</h2>
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item"><a href="/">Home</a></li>
                                <li className="breadcrumb-item active"> Contact Us </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- End All Title Box -->

            <!-- Start Contact Us  --> */}
            <div className="contact-box-main">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-sm-12">
                            <div className="contact-form-right">
                                <h2>GET IN TOUCH</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed odio justo, ultrices ac nisl sed, lobortis porta elit. Fusce in metus ac ex venenatis ultricies at cursus mauris.</p>
                                <form id="contactForm">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <input type="text" className="form-control" id="name" name="name" placeholder="Your Name" required data-error="Please enter your name"/>
                                                    <div className="help-block with-errors"></div>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <input type="text" placeholder="Your Email" id="email" className="form-control" name="name" required data-error="Please enter your email"/>
                                                    <div className="help-block with-errors"></div>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <input type="text" className="form-control" id="subject" name="name" placeholder="Subject" required data-error="Please enter your Subject"/>
                                                    <div className="help-block with-errors"></div>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <textarea className="form-control" id="message" placeholder="Your Message" rows="4" data-error="Write your message" required></textarea>
                                                <div className="help-block with-errors"></div>
                                            </div>
                                            <div className="submit-button text-center">
                                                <button className="btn hvr-hover" id="submit" type="submit">Send Message</button>
                                                <div id="msgSubmit" className="h3 text-center hidden"></div>
                                                <div className="clearfix"></div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-12">
                            <div className="contact-info-left">
                                <h2>CONTACT INFO</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent urna diam, maximus ut ullamcorper quis, placerat id eros. Duis semper justo sed condimentum rutrum. Nunc tristique purus turpis. Maecenas vulputate. </p>
                                <ul>
                                    <li>
                                        <p><i className="fas fa-map-marker-alt"></i>Address: Michael I. Days 9000 <br/>Preston Street Wichita,<br/> KS 87213 </p>
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

                <a href="/" id="back-to-top" title="Back to top" style={{display: "none"}}>&uarr;</a>
            </>
            )
}

export default ContactComponent