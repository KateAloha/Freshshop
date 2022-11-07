import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ProductDetailAction } from "../../actions/ProductDetailAction";
import HeaderComponent from "../HeaderComponent/HeaderComponent";
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';

function ShopDetailComponent() {
    const dispatch = useDispatch()
    const { paramId } = useParams()

    const [quantity, setQuantity] = useState(1)
    const { product } = useSelector((reduxData) => reduxData.ProductDetailReducer)

    useEffect(() => {
        dispatch(ProductDetailAction(paramId))
    }, [paramId])

    const onPLusClick = () => {
        setQuantity(quantity + 1)
    }

    const onMinusClick = () => {
        setQuantity(quantity - 1)
    }
    return (
        <>
            <HeaderComponent></HeaderComponent>
            {/* <!-- End Top Search -->

            <!-- Start All Title Box --> */}
            <div className="all-title-box">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2>Shop Detail</h2>
                            <ul className="breadcrumb" style={{ padding: "10px" }}>
                                <li className="breadcrumb-item"><a href="#">Shop</a></li>
                                <li className="breadcrumb-item active">Shop Detail </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- End All Title Box -->

            <!-- Start Shop Detail  --> */}
            <div className="shop-detail-box-main">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-5 col-lg-5 col-md-6">
                            <div id="carousel-example-1" className="single-product-slider carousel slide" data-ride="carousel">
                                <div className="carousel-inner" role="listbox">
                                    <div className="carousel-item active"> <img className="d-block w-100" src={product.imageURl} alt="First slide" /> </div>                                   
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-7 col-md-6">
                            <div className="single-product-details">
                                <h2>{product.name} | {product.description}</h2>
                                <h5> <del>VND {product.buyPrice}</del> VND {product.promotionPrice}</h5>
                                <p className="available-stock"><span> More than 20 available / <a href="#">8 sold </a></span></p>
                                <h4>Short Description:</h4>
                                <p>{product.description} | <span style={{ fontStyle: "italic" }}>One of the Best quality Products that were imported</span></p>
                                <div className="row mt-5" style={{marginBottom: "50px"}}>
                                    <div className="col-sm-2">
                                        <h4 style={{ marginTop: "9px" }}>Quantity </h4>
                                    </div>
                                    <div className="col-sm-1">
                                        <RemoveCircleIcon style={{ marginTop: "10px" }} onClick={onMinusClick}></RemoveCircleIcon>
                                    </div>
                                    <div className="col-sm-1">
                                        <h4 style={{ marginTop: "9px" }}>{quantity}</h4>
                                    </div>
                                    <div className="col-sm-1">
                                        <AddCircleIcon style={{ marginTop: "10px" }} onClick={onPLusClick}></AddCircleIcon>
                                    </div>
                                </div>

                                <div className="price-box-bar">
                                    <div className="cart-and-bay-btn">
                                        <a className="btn hvr-hover" data-fancybox-close="" href="#" style={{ backgroundColor: "#b0b435", marginRight: "10px" }}>Buy New</a>
                                        <a className="btn hvr-hover" data-fancybox-close="" href="#" style={{ backgroundColor: "#b0b435" }}>Add to cart</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row my-5">
                        <div className="card card-outline-secondary my-4">
                            <div className="card-header">
                                <h2>Product Reviews</h2>
                            </div>
                            <div className="card-body">
                                <div className="media mb-3">
                                    <div className="mr-2">
                                        <img className="rounded-circle border p-1" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2264%22%20height%3D%2264%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2064%2064%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_160c142c97c%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_160c142c97c%22%3E%3Crect%20width%3D%2264%22%20height%3D%2264%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2213.5546875%22%20y%3D%2236.5%22%3E64x64%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" alt="Generic placeholder image" />
                                    </div>
                                    <div className="media-body">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis et enim aperiam inventore, similique necessitatibus neque non! Doloribus, modi sapiente laboriosam aperiam fugiat laborum. Sequi mollitia, necessitatibus quae sint natus.</p>
                                        <small className="text-muted">Posted by Anonymous on 3/1/18</small>
                                    </div>
                                </div>
                                <hr />
                                <div className="media mb-3">
                                    <div className="mr-2">
                                        <img className="rounded-circle border p-1" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2264%22%20height%3D%2264%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2064%2064%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_160c142c97c%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_160c142c97c%22%3E%3Crect%20width%3D%2264%22%20height%3D%2264%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2213.5546875%22%20y%3D%2236.5%22%3E64x64%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" alt="Generic placeholder image" />
                                    </div>
                                    <div className="media-body">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis et enim aperiam inventore, similique necessitatibus neque non! Doloribus, modi sapiente laboriosam aperiam fugiat laborum. Sequi mollitia, necessitatibus quae sint natus.</p>
                                        <small className="text-muted">Posted by Anonymous on 3/1/18</small>
                                    </div>
                                </div>
                                <hr />
                                <div className="media mb-3">
                                    <div className="mr-2">
                                        <img className="rounded-circle border p-1" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2264%22%20height%3D%2264%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2064%2064%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_160c142c97c%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_160c142c97c%22%3E%3Crect%20width%3D%2264%22%20height%3D%2264%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2213.5546875%22%20y%3D%2236.5%22%3E64x64%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" alt="Generic placeholder image" />
                                    </div>
                                    <div className="media-body">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis et enim aperiam inventore, similique necessitatibus neque non! Doloribus, modi sapiente laboriosam aperiam fugiat laborum. Sequi mollitia, necessitatibus quae sint natus.</p>
                                        <small className="text-muted">Posted by Anonymous on 3/1/18</small>
                                    </div>
                                </div>
                                <hr />
                                <a href="#" className="btn hvr-hover">Leave a Review</a>
                            </div>
                        </div>
                    </div>

                    <div className="row my-5">
                        <div className="col-lg-12">
                            <div className="title-all text-center">
                                <h1>Featured Products</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet lacus enim.</p>
                            </div>
                            <div className="featured-products-box owl-carousel owl-theme">
                                <div className="item">
                                    <div className="products-single fix">
                                        <div className="box-img-hover">
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
                                            <h5> $9.79</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="products-single fix">
                                        <div className="box-img-hover">
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
                                <div className="item">
                                    <div className="products-single fix">
                                        <div className="box-img-hover">
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
                                            <h5> $9.79</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="products-single fix">
                                        <div className="box-img-hover">
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
                                            <h5> $9.79</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="products-single fix">
                                        <div className="box-img-hover">
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
                                            <h5> $9.79</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="products-single fix">
                                        <div className="box-img-hover">
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
                                <div className="item">
                                    <div className="products-single fix">
                                        <div className="box-img-hover">
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
                                            <h5> $9.79</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="products-single fix">
                                        <div className="box-img-hover">
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
                                            <h5> $9.79</h5>
                                        </div>
                                    </div>
                                </div>
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

            <a href="#" id="back-to-top" title="Back to top" style={{ display: "none" }}>&uarr;</a>
        </>
    )
}


export default ShopDetailComponent;