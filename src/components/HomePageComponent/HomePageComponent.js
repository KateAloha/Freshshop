import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { Slide } from "@mui/material";
// import {Link} from "react-router-dom"
import background_1 from "../../assets/images/banner-01.jpg"
import background_2 from "../../assets/images/banner-02.jpg"
import background_3 from "../../assets/images/banner-03.jpg"
import HeaderComponent from "../HeaderComponent/HeaderComponent";

function HomePageComponent() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        lazyLoad: false,
        centerMode: true,
        adaptiveHeight: true,
        fade: false
        // className: 'react__slick__slider__parent'
        // autoplaySpeed: 5000
    }

    return (
        <>
            <HeaderComponent></HeaderComponent>

            {/* <!-- Start Slider --> */} 
            <div className="container-fluid">
                <Slider {...settings}>
                    <div>
                        <div className="container-fluid" >
                            <div className="col-sm-12" >
                                <div className="row" >
                                    <li className="text-center" style={{ backgroundImage: `url(${background_2})`, width: "3000px", height: "500px", filter: "brightness(50%)" }} >
                                        {/* <img src="assets/images/banner-01.jpg" alt="" /> */}
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-md-12" style={{ paddingTop: "100px" }}>
                                                    <h1 className="m-b-20" style={{ color: "white" }}><strong>Welcome To <br /> Freshshop</strong></h1>
                                                    <p className="m-b-40" style={{ color: "white" }}>See how your users experience your website in realtime or view <br /> trends to see any changes in performance over time.</p>
                                                    <p><a className="btn btn-warning hvr-hover" href="#" style={{ color: "white" }}>Shop New</a></p>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="container-fluid" >
                            <div className="col-sm-12" >
                                <div className="row" >
                                    <li className="text-center" style={{ backgroundImage: `url(${background_2})`, width: "3000px", height: "500px", filter: "brightness(50%)" }} >
                                        {/* <img src="assets/images/banner-01.jpg" alt="" /> */}
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-md-12" style={{ paddingTop: "100px" }}>
                                                    <h1 className="m-b-20" style={{ color: "white" }}><strong>Welcome To <br /> Freshshop</strong></h1>
                                                    <p className="m-b-40" style={{ color: "white" }}>See how your users experience your website in realtime or view <br /> trends to see any changes in performance over time.</p>
                                                    <p><a className="btn btn-warning hvr-hover" href="#" style={{ color: "white" }}>Shop New</a></p>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="container-fluid" >
                            <div className="col-sm-12" >
                                <div className="row" >
                                    <li className="text-center" style={{ backgroundImage: `url(${background_3})`, width: "3000px", height: "500px", filter: "brightness(50%)" }} >
                                        {/* <img src="assets/images/banner-01.jpg" alt="" /> */}
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-md-12" style={{ paddingTop: "100px" }}>
                                                    <h1 className="m-b-20" style={{ color: "white" }}><strong>Welcome To <br /> Freshshop</strong></h1>
                                                    <p className="m-b-40" style={{ color: "white" }}>See how your users experience your website in realtime or view <br /> trends to see any changes in performance over time.</p>
                                                    <p><a className="btn btn-warning hvr-hover" href="#" style={{ color: "white" }}>Shop New</a></p>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </div>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
            {/* <div id="slides-shop" className="cover-slides">
                <ul className="slides-container">
                    <li className="text-center">
                        <img src="assets/images/banner-01.jpg" alt=""/>
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12">
                                        <h1 className="m-b-20"><strong>Welcome To <br/> Freshshop</strong></h1>
                                        <p className="m-b-40">See how your users experience your website in realtime or view <br/> trends to see any changes in performance over time.</p>
                                        <p><a className="btn hvr-hover" href="#">Shop New</a></p>
                                    </div>
                                </div>
                            </div>
                    </li>
                    <li className="text-center">
                        <img src="assets/images/banner-02.jpg" alt=""/>
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12">
                                        <h1 className="m-b-20"><strong>Welcome To <br/> Freshshop</strong></h1>
                                        <p className="m-b-40">See how your users experience your website in realtime or view <br/> trends to see any changes in performance over time.</p>
                                        <p><a className="btn hvr-hover" href="#">Shop New</a></p>
                                    </div>
                                </div>
                            </div>
                    </li>
                    <li className="text-center">
                        <img src="assets/images/banner-03.jpg" alt=""/>
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12">
                                        <h1 className="m-b-20"><strong>Welcome To <br/> Freshshop</strong></h1>
                                        <p className="m-b-40">See how your users experience your website in realtime or view <br/> trends to see any changes in performance over time.</p>
                                        <p><a className="btn hvr-hover" href="#">Shop New</a></p>
                                    </div>
                                </div>
                            </div>
                    </li>
                </ul>
                <div className="slides-navigation">
                    <a href="#" className="next"><i className="fa fa-angle-right" aria-hidden="true"></i></a>
                    <a href="#" className="prev"><i className="fa fa-angle-left" aria-hidden="true"></i></a>
                </div>
            </div> */}
            {/* <!-- End Slider -->

            <!-- Start Categories  --> */}
            <div className="categories-shop">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                            <div className="shop-cat-box">
                                <img className="img-fluid" src="assets/images/categories_img_01.jpg" alt="" />
                                <a className="btn hvr-hover" href="#">Lorem ipsum dolor</a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                            <div className="shop-cat-box">
                                <img className="img-fluid" src="assets/images/categories_img_02.jpg" alt="" />
                                <a className="btn hvr-hover" href="#">Lorem ipsum dolor</a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                            <div className="shop-cat-box">
                                <img className="img-fluid" src="assets/images/categories_img_03.jpg" alt="" />
                                <a className="btn hvr-hover" href="#">Lorem ipsum dolor</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- End Categories --> */}

            <div className="box-add-products">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="offer-box-products">
                                <img className="img-fluid" src="assets/images/add-img-01.jpg" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="offer-box-products">
                                <img className="img-fluid" src="assets/images/add-img-02.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Start Products  --> */}
            <div className="products-box">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="title-all text-center">
                                <h1>Fruits & Vegetables</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet lacus enim.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="special-menu text-center">
                                <div className="button-group filter-button-group">
                                    <button className="active" data-filter="*">All</button>
                                    <button data-filter=".top-featured">Top featured</button>
                                    <button data-filter=".best-seller">Best seller</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row special-list">
                        <div className="col-lg-3 col-md-6 special-grid best-seller">
                            <div className="products-single fix">
                                <div className="box-img-hover">
                                    <div className="type-lb">
                                        <p className="sale">Sale</p>
                                    </div>
                                    <img src="assets/images/img-pro-01.jpg" className="img-fluid" alt="Image" />
                                    <div className="mask-icon">
                                        <ul>
                                            <li><a href="#" data-toggle="tooltip" data-placement="right" title="View"><i className="fas fa-eye"></i></a></li>
                                            <li><a href="#" data-toggle="tooltip" data-placement="right" title="Compare"><i className="fas fa-sync-alt"></i></a></li>
                                            <li><a href="#" data-toggle="tooltip" data-placement="right" title="Add to Wishlist"><i className="far fa-heart"></i></a></li>
                                        </ul>
                                        <a className="cart" href="#">Add to Cart</a>
                                    </div>
                                </div>
                                <div className="why-text">
                                    <h4>Lorem ipsum dolor sit amet</h4>
                                    <h5> $7.79</h5>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 special-grid top-featured">
                            <div className="products-single fix">
                                <div className="box-img-hover">
                                    <div className="type-lb">
                                        <p className="new">New</p>
                                    </div>
                                    <img src="assets/images/img-pro-02.jpg" className="img-fluid" alt="Image" />
                                    <div className="mask-icon">
                                        <ul>
                                            <li><a href="#" data-toggle="tooltip" data-placement="right" title="View"><i className="fas fa-eye"></i></a></li>
                                            <li><a href="#" data-toggle="tooltip" data-placement="right" title="Compare"><i className="fas fa-sync-alt"></i></a></li>
                                            <li><a href="#" data-toggle="tooltip" data-placement="right" title="Add to Wishlist"><i className="far fa-heart"></i></a></li>
                                        </ul>
                                        <a className="cart" href="#">Add to Cart</a>
                                    </div>
                                </div>
                                <div className="why-text">
                                    <h4>Lorem ipsum dolor sit amet</h4>
                                    <h5> $9.79</h5>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 special-grid top-featured">
                            <div className="products-single fix">
                                <div className="box-img-hover">
                                    <div className="type-lb">
                                        <p className="sale">Sale</p>
                                    </div>
                                    <img src="assets/images/img-pro-03.jpg" className="img-fluid" alt="Image" />
                                    <div className="mask-icon">
                                        <ul>
                                            <li><a href="#" data-toggle="tooltip" data-placement="right" title="View"><i className="fas fa-eye"></i></a></li>
                                            <li><a href="#" data-toggle="tooltip" data-placement="right" title="Compare"><i className="fas fa-sync-alt"></i></a></li>
                                            <li><a href="#" data-toggle="tooltip" data-placement="right" title="Add to Wishlist"><i className="far fa-heart"></i></a></li>
                                        </ul>
                                        <a className="cart" href="#">Add to Cart</a>
                                    </div>
                                </div>
                                <div className="why-text">
                                    <h4>Lorem ipsum dolor sit amet</h4>
                                    <h5> $10.79</h5>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 special-grid best-seller">
                            <div className="products-single fix">
                                <div className="box-img-hover">
                                    <div className="type-lb">
                                        <p className="sale">Sale</p>
                                    </div>
                                    <img src="assets/images/img-pro-04.jpg" className="img-fluid" alt="Image" />
                                    <div className="mask-icon">
                                        <ul>
                                            <li><a href="#" data-toggle="tooltip" data-placement="right" title="View"><i className="fas fa-eye"></i></a></li>
                                            <li><a href="#" data-toggle="tooltip" data-placement="right" title="Compare"><i className="fas fa-sync-alt"></i></a></li>
                                            <li><a href="#" data-toggle="tooltip" data-placement="right" title="Add to Wishlist"><i className="far fa-heart"></i></a></li>
                                        </ul>
                                        <a className="cart" href="#">Add to Cart</a>
                                    </div>
                                </div>
                                <div className="why-text">
                                    <h4>Lorem ipsum dolor sit amet</h4>
                                    <h5> $15.79</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- End Products  -->

            <!-- Start Blog  --> */}
            <div className="latest-blog">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="title-all text-center">
                                <h1>latest blog</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet lacus enim.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-lg-4 col-xl-4">
                            <div className="blog-box">
                                <div className="blog-img">
                                    <img className="img-fluid" src="assets/images/blog-img.jpg" alt="" />
                                </div>
                                <div className="blog-content">
                                    <div className="title-blog">
                                        <h3>Fusce in augue non nisi fringilla</h3>
                                        <p>Nulla ut urna egestas, porta libero id, suscipit orci. Quisque in lectus sit amet urna dignissim feugiat. Mauris molestie egestas pharetra. Ut finibus cursus nunc sed mollis. Praesent laoreet lacinia elit id lobortis.</p>
                                    </div>
                                    <ul className="option-blog">
                                        <li><a href="#"><i className="far fa-heart"></i></a></li>
                                        <li><a href="#"><i className="fas fa-eye"></i></a></li>
                                        <li><a href="#"><i className="far fa-comments"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 col-xl-4">
                            <div className="blog-box">
                                <div className="blog-img">
                                    <img className="img-fluid" src="assets/images/blog-img-01.jpg" alt="" />
                                </div>
                                <div className="blog-content">
                                    <div className="title-blog">
                                        <h3>Fusce in augue non nisi fringilla</h3>
                                        <p>Nulla ut urna egestas, porta libero id, suscipit orci. Quisque in lectus sit amet urna dignissim feugiat. Mauris molestie egestas pharetra. Ut finibus cursus nunc sed mollis. Praesent laoreet lacinia elit id lobortis.</p>
                                    </div>
                                    <ul className="option-blog">
                                        <li><a href="#"><i className="far fa-heart"></i></a></li>
                                        <li><a href="#"><i className="fas fa-eye"></i></a></li>
                                        <li><a href="#"><i className="far fa-comments"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 col-xl-4">
                            <div className="blog-box">
                                <div className="blog-img">
                                    <img className="img-fluid" src="assets/images/blog-img-02.jpg" alt="" />
                                </div>
                                <div className="blog-content">
                                    <div className="title-blog">
                                        <h3>Fusce in augue non nisi fringilla</h3>
                                        <p>Nulla ut urna egestas, porta libero id, suscipit orci. Quisque in lectus sit amet urna dignissim feugiat. Mauris molestie egestas pharetra. Ut finibus cursus nunc sed mollis. Praesent laoreet lacinia elit id lobortis.</p>
                                    </div>
                                    <ul className="option-blog">
                                        <li><a href="#"><i className="far fa-heart"></i></a></li>
                                        <li><a href="#"><i className="fas fa-eye"></i></a></li>
                                        <li><a href="#"><i className="far fa-comments"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- End Blog  -->


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

            <a href="/" id="back-to-top" title="Back to top" style={{ display: "none" }}>&uarr;</a>
        </>
    )
}

export default HomePageComponent;