import HeaderComponent from "../HeaderComponent/HeaderComponent"

function GalleryComponent() {
    return (
        <>
           <HeaderComponent></HeaderComponent>

            {/* <!-- Start All Title Box --> */}
            <div className="all-title-box">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2>Services</h2>
                            <ul className="breadcrumb" style={{padding: "10px"}}>
                                <li className="breadcrumb-item"><a href="/">Home</a></li>
                                <li className="breadcrumb-item active">Services</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- End All Title Box -->

            <!-- Start Gallery  --> */}
            <div className="products-box">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="title-all text-center">
                                <h1>Our Gallery</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet lacus enim.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="special-menu text-center">
                                <div className="button-group filter-button-group">
                                    <button className="active" data-filter="*">All</button>
                                    <button data-filter=".bulbs">Bulbs</button>
                                    <button data-filter=".fruits">Fruits</button>
                                    <button data-filter=".podded-vegetables">Podded vegetables</button>
                                    <button data-filter=".root-and-tuberous">Root and tuberous</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row special-list">
                        <div className="col-lg-3 col-md-6 special-grid bulbs">
                            <div className="products-single fix">
                                <div className="box-img-hover">
                                    <div className="type-lb">
                                        <p className="sale">Sale</p>
                                    </div>
                                    <img src="assets/images/gallery-img-01.jpg" className="img-fluid" alt="Image"/>
                                        <div className="mask-icon">
                                            <ul>
                                                <li><a href="#" data-toggle="tooltip" data-placement="right" title="View"><i className="fas fa-eye"></i></a></li>
                                                <li><a href="#" data-toggle="tooltip" data-placement="right" title="Compare"><i className="fas fa-sync-alt"></i></a></li>
                                                <li><a href="#" data-toggle="tooltip" data-placement="right" title="Add to Wishlist"><i className="far fa-heart"></i></a></li>
                                            </ul>
                                            <a className="cart" href="#">Add to Cart</a>
                                        </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 special-grid fruits">
                            <div className="products-single fix">
                                <div className="box-img-hover">
                                    <img src="assets/images/gallery-img-02.jpg" className="img-fluid" alt="Image"/>
                                        <div className="mask-icon">
                                            <ul>
                                                <li><a href="#" data-toggle="tooltip" data-placement="right" title="View"><i className="fas fa-eye"></i></a></li>
                                                <li><a href="#" data-toggle="tooltip" data-placement="right" title="Compare"><i className="fas fa-sync-alt"></i></a></li>
                                                <li><a href="#" data-toggle="tooltip" data-placement="right" title="Add to Wishlist"><i className="far fa-heart"></i></a></li>
                                            </ul>
                                        </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 special-grid bulbs">
                            <div className="products-single fix">
                                <div className="box-img-hover">
                                    <img src="assets/images/gallery-img-03.jpg" className="img-fluid" alt="Image"/>
                                        <div className="mask-icon">
                                            <ul>
                                                <li><a href="#" data-toggle="tooltip" data-placement="right" title="View"><i className="fas fa-eye"></i></a></li>
                                                <li><a href="#" data-toggle="tooltip" data-placement="right" title="Compare"><i className="fas fa-sync-alt"></i></a></li>
                                                <li><a href="#" data-toggle="tooltip" data-placement="right" title="Add to Wishlist"><i className="far fa-heart"></i></a></li>
                                            </ul>
                                        </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 special-grid fruits">
                            <div className="products-single fix">
                                <div className="box-img-hover">
                                    <img src="assets/images/gallery-img-04.jpg" className="img-fluid" alt="Image"/>
                                        <div className="mask-icon">
                                            <ul>
                                                <li><a href="#" data-toggle="tooltip" data-placement="right" title="View"><i className="fas fa-eye"></i></a></li>
                                                <li><a href="#" data-toggle="tooltip" data-placement="right" title="Compare"><i className="fas fa-sync-alt"></i></a></li>
                                                <li><a href="#" data-toggle="tooltip" data-placement="right" title="Add to Wishlist"><i className="far fa-heart"></i></a></li>
                                            </ul>
                                        </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 special-grid bulbs">
                            <div className="products-single fix">
                                <div className="box-img-hover">
                                    <img src="assets/images/gallery-img-05.jpg" className="img-fluid" alt="Image"/>
                                        <div className="mask-icon">
                                            <ul>
                                                <li><a href="#" data-toggle="tooltip" data-placement="right" title="View"><i className="fas fa-eye"></i></a></li>
                                                <li><a href="#" data-toggle="tooltip" data-placement="right" title="Compare"><i className="fas fa-sync-alt"></i></a></li>
                                                <li><a href="#" data-toggle="tooltip" data-placement="right" title="Add to Wishlist"><i className="far fa-heart"></i></a></li>
                                            </ul>
                                        </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 special-grid fruits">
                            <div className="products-single fix">
                                <div className="box-img-hover">
                                    <img src="assets/images/gallery-img-06.jpg" className="img-fluid" alt="Image"/>
                                        <div className="mask-icon">
                                            <ul>
                                                <li><a href="#" data-toggle="tooltip" data-placement="right" title="View"><i className="fas fa-eye"></i></a></li>
                                                <li><a href="#" data-toggle="tooltip" data-placement="right" title="Compare"><i className="fas fa-sync-alt"></i></a></li>
                                                <li><a href="#" data-toggle="tooltip" data-placement="right" title="Add to Wishlist"><i className="far fa-heart"></i></a></li>
                                            </ul>
                                        </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 special-grid podded-vegetables">
                            <div className="products-single fix">
                                <div className="box-img-hover">
                                    <img src="assets/images/gallery-img-07.jpg" className="img-fluid" alt="Image"/>
                                        <div className="mask-icon">
                                            <ul>
                                                <li><a href="#" data-toggle="tooltip" data-placement="right" title="View"><i className="fas fa-eye"></i></a></li>
                                                <li><a href="#" data-toggle="tooltip" data-placement="right" title="Compare"><i className="fas fa-sync-alt"></i></a></li>
                                                <li><a href="#" data-toggle="tooltip" data-placement="right" title="Add to Wishlist"><i className="far fa-heart"></i></a></li>
                                            </ul>
                                        </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 special-grid root-and-tuberous">
                            <div className="products-single fix">
                                <div className="box-img-hover">
                                    <img src="assets/images/gallery-img-08.jpg" className="img-fluid" alt="Image"/>
                                        <div className="mask-icon">
                                            <ul>
                                                <li><a href="#" data-toggle="tooltip" data-placement="right" title="View"><i className="fas fa-eye"></i></a></li>
                                                <li><a href="#" data-toggle="tooltip" data-placement="right" title="Compare"><i className="fas fa-sync-alt"></i></a></li>
                                                <li><a href="#" data-toggle="tooltip" data-placement="right" title="Add to Wishlist"><i className="far fa-heart"></i></a></li>
                                            </ul>
                                        </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 special-grid root-and-tuberous">
                            <div className="products-single fix">
                                <div className="box-img-hover">
                                    <img src="assets/images/gallery-img-09.jpg" className="img-fluid" alt="Image"/>
                                        <div className="mask-icon">
                                            <ul>
                                                <li><a href="#" data-toggle="tooltip" data-placement="right" title="View"><i className="fas fa-eye"></i></a></li>
                                                <li><a href="#" data-toggle="tooltip" data-placement="right" title="Compare"><i className="fas fa-sync-alt"></i></a></li>
                                                <li><a href="#" data-toggle="tooltip" data-placement="right" title="Add to Wishlist"><i className="far fa-heart"></i></a></li>
                                            </ul>
                                        </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 special-grid podded-vegetables">
                            <div className="products-single fix">
                                <div className="box-img-hover">
                                    <img src="assets/images/gallery-img-10.jpg" className="img-fluid" alt="Image"/>
                                        <div className="mask-icon">
                                            <ul>
                                                <li><a href="#" data-toggle="tooltip" data-placement="right" title="View"><i className="fas fa-eye"></i></a></li>
                                                <li><a href="#" data-toggle="tooltip" data-placement="right" title="Compare"><i className="fas fa-sync-alt"></i></a></li>
                                                <li><a href="#" data-toggle="tooltip" data-placement="right" title="Add to Wishlist"><i className="far fa-heart"></i></a></li>
                                            </ul>
                                        </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 special-grid root-and-tuberous">
                            <div className="products-single fix">
                                <div className="box-img-hover">
                                    <img src="assets/images/gallery-img-11.jpg" className="img-fluid" alt="Image"/>
                                        <div className="mask-icon">
                                            <ul>
                                                <li><a href="#" data-toggle="tooltip" data-placement="right" title="View"><i className="fas fa-eye"></i></a></li>
                                                <li><a href="#" data-toggle="tooltip" data-placement="right" title="Compare"><i className="fas fa-sync-alt"></i></a></li>
                                                <li><a href="#" data-toggle="tooltip" data-placement="right" title="Add to Wishlist"><i className="far fa-heart"></i></a></li>
                                            </ul>
                                        </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 special-grid podded-vegetables">
                            <div className="products-single fix">
                                <div className="box-img-hover">
                                    <img src="assets/images/gallery-img-12.jpg" className="img-fluid" alt="Image"/>
                                        <div className="mask-icon">
                                            <ul>
                                                <li><a href="#" data-toggle="tooltip" data-placement="right" title="View"><i className="fas fa-eye"></i></a></li>
                                                <li><a href="#" data-toggle="tooltip" data-placement="right" title="Compare"><i className="fas fa-sync-alt"></i></a></li>
                                                <li><a href="#" data-toggle="tooltip" data-placement="right" title="Add to Wishlist"><i className="far fa-heart"></i></a></li>
                                            </ul>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- End Gallery  -->

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

            <a href="/" id="back-to-top" title="Back to top" style={{display: "none"}}>&uarr;</a>
        </>
    )
}

export default GalleryComponent