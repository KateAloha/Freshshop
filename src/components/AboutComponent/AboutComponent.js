import HeaderComponent from "../HeaderComponent/HeaderComponent"

function AboutComponent() {
    return (
        <>
            <HeaderComponent></HeaderComponent>

            {/* <!-- Start All Title Box --> */}
            <div className="all-title-box">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2>ABOUT US</h2>
                            <ul className="breadcrumb" style={{padding: "10px"}}>
                                <li className="breadcrumb-item"><a href="/">Home</a></li>
                                <li className="breadcrumb-item active">ABOUT US</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- End All Title Box -->

            <!-- Start About Page  --> */}
            <div className="about-box-main">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="banner-frame"> <img className="img-fluid" src="assets/images/about-img.jpg" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <h2 className="noo-sh-title-top">We are <span>Freshshop</span></h2>
                            <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
                                voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
                                sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
                                Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <a className="btn hvr-hover" href="#">Read More</a>
                        </div>
                    </div>
                    <div className="row my-5">
                        <div className="col-sm-6 col-lg-4">
                            <div className="service-block-inner">
                                <h3>We are Trusted</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4">
                            <div className="service-block-inner">
                                <h3>We are Professional</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4">
                            <div className="service-block-inner">
                                <h3>We are Expert</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                            </div>
                        </div>
                    </div>
                    <div className="row my-4">
                        <div className="col-12">
                            <h2 className="noo-sh-title">Meet Our Team</h2>
                        </div>
                        <div className="col-sm-6 col-lg-3">
                            <div className="hover-team">
                                <div className="our-team"> <img src="assets/images/img-1.jpg" alt="" />
                                    <div className="team-content">
                                        <h3 className="title">Williamson</h3> <span className="post">Web Developer</span> </div>
                                    <ul className="social">
                                        <li>
                                            <a href="#" className="fab fa-facebook"></a>
                                        </li>
                                        <li>
                                            <a href="#" className="fab fa-twitter"></a>
                                        </li>
                                        <li>
                                            <a href="#" className="fab fa-google-plus"></a>
                                        </li>
                                        <li>
                                            <a href="#" className="fab fa-youtube"></a>
                                        </li>
                                    </ul>
                                    <div className="icon"> <i className="fa fa-plus" aria-hidden="true"></i> </div>
                                </div>
                                <div className="team-description">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent urna diam, maximus ut ullamcorper quis, placerat id eros. Duis semper justo sed condimentum rutrum. Nunc tristique purus turpis. Maecenas vulputate. </p>
                                </div>
                                <hr className="my-0" /> </div>
                        </div>
                        <div className="col-sm-6 col-lg-3">
                            <div className="hover-team">
                                <div className="our-team"> <img src="assets/images/img-2.jpg" alt="" />
                                    <div className="team-content">
                                        <h3 className="title">Kristiana</h3> <span className="post">Web Developer</span> </div>
                                    <ul className="social">
                                        <li>
                                            <a href="#" className="fab fa-facebook"></a>
                                        </li>
                                        <li>
                                            <a href="#" className="fab fa-twitter"></a>
                                        </li>
                                        <li>
                                            <a href="#" className="fab fa-google-plus"></a>
                                        </li>
                                        <li>
                                            <a href="#" className="fab fa-youtube"></a>
                                        </li>
                                    </ul>
                                    <div className="icon"> <i className="fa fa-plus" aria-hidden="true"></i> </div>
                                </div>
                                <div className="team-description">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent urna diam, maximus ut ullamcorper quis, placerat id eros. Duis semper justo sed condimentum rutrum. Nunc tristique purus turpis. Maecenas vulputate. </p>
                                </div>
                                <hr className="my-0" /> </div>
                        </div>
                        <div className="col-sm-6 col-lg-3">
                            <div className="hover-team">
                                <div className="our-team"> <img src="assets/images/img-3.jpg" alt="" />
                                    <div className="team-content">
                                        <h3 className="title">Steve Thomas</h3> <span className="post">Web Developer</span> </div>
                                    <ul className="social">
                                        <li>
                                            <a href="#" className="fab fa-facebook"></a>
                                        </li>
                                        <li>
                                            <a href="#" className="fab fa-twitter"></a>
                                        </li>
                                        <li>
                                            <a href="#" className="fab fa-google-plus"></a>
                                        </li>
                                        <li>
                                            <a href="#" className="fab fa-youtube"></a>
                                        </li>
                                    </ul>
                                    <div className="icon"> <i className="fa fa-plus" aria-hidden="true"></i> </div>
                                </div>
                                <div className="team-description">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent urna diam, maximus ut ullamcorper quis, placerat id eros. Duis semper justo sed condimentum rutrum. Nunc tristique purus turpis. Maecenas vulputate. </p>
                                </div>
                                <hr className="my-0" /> </div>
                        </div>
                        <div className="col-sm-6 col-lg-3">
                            <div className="hover-team">
                                <div className="our-team"> <img src="assets/images/img-1.jpg" alt="" />
                                    <div className="team-content">
                                        <h3 className="title">Williamson</h3> <span className="post">Web Developer</span> </div>
                                    <ul className="social">
                                        <li>
                                            <a href="#" className="fab fa-facebook"></a>
                                        </li>
                                        <li>
                                            <a href="#" className="fab fa-twitter"></a>
                                        </li>
                                        <li>
                                            <a href="#" className="fab fa-google-plus"></a>
                                        </li>
                                        <li>
                                            <a href="#" className="fab fa-youtube"></a>
                                        </li>
                                    </ul>
                                    <div className="icon"> <i className="fa fa-plus" aria-hidden="true"></i> </div>
                                </div>
                                <div className="team-description">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent urna diam, maximus ut ullamcorper quis, placerat id eros. Duis semper justo sed condimentum rutrum. Nunc tristique purus turpis. Maecenas vulputate. </p>
                                </div>
                                <hr className="my-0" /> </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- End About Page -->

            


            <!-- Start Footer  --> */}
            <footer  style={{backgroundColor: "black"}}>
                <div className="footer-main" />
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

export default AboutComponent