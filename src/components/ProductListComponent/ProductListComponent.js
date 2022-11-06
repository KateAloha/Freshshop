import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { ChangeNoPage, FilterAction, getAllListData } from "../../actions/ProductListAction";
import { Grid, Pagination, TextField, Box, Typography, List, ListItem, Checkbox } from "@mui/material";
import HeaderComponent from "../HeaderComponent/HeaderComponent"
import { FilterCategoriesAction, FilterMaxPriceAction, FilterMinPriceAction, FilterNameAction } from "../../actions/FilterAction";
import { useNavigate } from "react-router-dom";

function ProductList() {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [filter, setFilter] = useState(false)
    const { filterMaxPrice, filterMinPrice, filterName, filterCategories } = useSelector((reduxData) => reduxData.FilterReducer)
    const { products, productsFilter, currentPage, limitProduct } = useSelector((reduxData) => reduxData.ProductListReducer)

    const price = [20000, 40000, 60000, 80000];
    const productPagination = products.slice((currentPage - 1) * limitProduct, currentPage * limitProduct);
    const productFilterPagination = productsFilter.slice((currentPage - 1) * limitProduct, currentPage * limitProduct)
    const numPagePagination = Math.ceil(products.length / limitProduct)
    const numPageFilterPagination = Math.ceil(productsFilter.length / limitProduct)

    useEffect(() => {
        dispatch(getAllListData())
    }, [currentPage, filter])

    const handlePageChange = (event, value) => {
        dispatch(ChangeNoPage(value));
    }

    const onFilterAllClick = () => {
        setFilter(false)
    }

    const onFilterBulbsClick = () => {
        dispatch(FilterCategoriesAction("Bulbs"))
        dispatch(FilterAction(filterMaxPrice, filterMinPrice, filterName, filterCategories))
        setFilter(true)
    }

    const onFilterFruitsClick = () => {
        dispatch(FilterCategoriesAction("Fruits"))
        dispatch(FilterAction(filterMaxPrice, filterMinPrice, filterName, filterCategories))
        setFilter(true)
    }

    const onFilterVegetablesClick = () => {
        dispatch(FilterCategoriesAction("Podded Vegetable"))
        dispatch(FilterAction(filterMaxPrice, filterMinPrice, filterName, filterCategories))
        setFilter(true)
    }

    const onFilterRaTClick = () => {
        dispatch(FilterCategoriesAction("Root and Tuberous"))
        dispatch(FilterAction(filterMaxPrice, filterMinPrice, filterName, filterCategories))
        setFilter(true)
    }

    const onNameFilter = (event) => {
        console.log(event.target.value)
        dispatch(FilterNameAction((event.target.value).toUpperCase()))
    }

    const onMinPriceFilter = (value) => {
        console.log(value)
        dispatch(FilterMinPriceAction(value))
    }

    const onMaxPriceFilter = (value) => {
        console.log(value)
        dispatch(FilterMaxPriceAction(value))
    }

    const onFilterClick = () => {
        dispatch(FilterAction(filterMaxPrice, filterMinPrice, filterName, filterCategories))
        setFilter(true)
    }

    const onDetailClick = (productDetail) => {
        navigate(`/shop-detail/${productDetail._id}`)
    }
    return (
        <>
            <HeaderComponent></HeaderComponent>

            {/* <!-- Start All Title Box --> */}
            <div className="all-title-box">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2>Services</h2>
                            <ul className="breadcrumb" style={{ padding: "10px" }}>
                                <li className="breadcrumb-item"><a href="/">Home</a></li>
                                <li className="breadcrumb-item active">Services</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>


            <div className="products-box">
                <div className="container">



                    <div className="row ">
                        <div className="col-lg-3 col-md-6">
                            <div className="row title-all">
                                <h1 style={{ marginTop: "200px" }}>PRODUCT FILTER</h1>
                            </div>
                            <div className="row">
                                <TextField label="Name" value={filterName} placeholder="What do you want to buy?" style={{ borderRadius: "10px" }} onChange={onNameFilter}></TextField>
                            </div>
                            <div className="row">
                            </div>
                            <div className="row">
                                <h4 style={{ marginTop: "20px" }}>Min Price</h4>
                                <div >
                                    <form>
                                        {price.map((value, index) => {
                                            return (
                                                <>
                                                    <input type="checkbox" id={`From ${value}`} name={`From ${value}`} value={Number(value)} onChange={() => onMinPriceFilter(value)} />
                                                    <label for={`From ${value}`}>From {value} VND</label><br />
                                                </>
                                            )
                                        })}
                                    </form>
                                </div>
                            </div>
                            <div className="row">
                                <h4 style={{ marginTop: "20px" }}>Max Price</h4>
                                <div >
                                    <form>
                                        {price.map((value, index) => {
                                            return (
                                                <>
                                                    <input type="checkbox" id={`From ${value}`} name={`From ${value}`} value={Number(value)} onChange={() => onMaxPriceFilter(value)} />
                                                    <label for={`From ${value}`}>Under or equal to {value} VND</label><br />
                                                </>
                                            )
                                        })}
                                    </form>
                                </div>
                            </div>

                            <div className="row">
                                <p><a className="btn btn-warning hvr-hover" href="#" style={{ color: "white", marginTop: "20px", width: "100px" }} onClick={onFilterClick}>Filter</a></p>
                            </div>
                        </div>
                        <div className="col-lg-9 col-md-6">
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
                                            <button data-filter="*" onClick={onFilterAllClick}>All</button>
                                            <button data-filter=".bulbs" onClick={onFilterBulbsClick}>Bulbs</button>
                                            <button data-filter=".fruits" onClick={onFilterFruitsClick}>Fruits</button>
                                            <button data-filter=".podded-vegetables" onClick={onFilterVegetablesClick}>Podded vegetables</button>
                                            <button data-filter=".root-and-tuberous" onClick={onFilterRaTClick}>Root and tuberous</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row special-list">
                                {
                                    !filter ?
                                    
                                        productPagination.map((product, index) => {
                                            return (
                                                <div className="col-lg-4 col-md-6 special-grid bulbs">
                                                    <div className="products-single fix">
                                                        <div className="box-img-hover">
                                                            <div className="type-lb">
                                                                <p className="sale">Sale</p>
                                                            </div>
                                                            <img src={product.imageURl} className="img-fluid" alt="Image" />
                                                            <div className="mask-icon">
                                                                <ul>
                                                                    <li><a href="#" data-toggle="tooltip" data-placement="right" title="View" onClick={() => onDetailClick(product)}><i className="fas fa-eye"></i></a></li>
                                                                    <li><a href="#" data-toggle="tooltip" data-placement="right" title="Compare"><i className="fas fa-sync-alt"></i></a></li>
                                                                    <li><a href="#" data-toggle="tooltip" data-placement="right" title="Add to Wishlist"><i className="far fa-heart"></i></a></li>
                                                                </ul>
                                                                <a className="cart" href="#">Add to Cart</a>
                                                            </div>
                                                        </div>
                                                        <div style={{ backgroundColor: "#b0b435", borderRadius: "10px", height: "30px", width: "300px", marginTop: "10px", color: "white", fontWeight: "bold" }} className="text-center">{product.name} : {product.buyPrice}/kg</div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                        :
                                        productFilterPagination.map((productFilter, index) => {
                                            return (
                                                <div className="col-lg-4 col-md-6 special-grid bulbs">
                                                    <div className="products-single fix">
                                                        <div className="box-img-hover">
                                                            <div className="type-lb">
                                                                <p className="sale">Sale</p>
                                                            </div>
                                                            <img src={productFilter.imageURl} className="img-fluid" alt="Image" />
                                                            <div className="mask-icon">
                                                                <ul>
                                                                    <li><a href="#" data-toggle="tooltip" data-placement="right" title="View" ><i className="fas fa-eye"></i></a></li>
                                                                    <li><a href="#" data-toggle="tooltip" data-placement="right" title="Compare"><i className="fas fa-sync-alt"></i></a></li>
                                                                    <li><a href="#" data-toggle="tooltip" data-placement="right" title="Add to Wishlist"><i className="far fa-heart"></i></a></li>
                                                                </ul>
                                                                <a className="cart" href="#">Add to Cart</a>
                                                            </div>
                                                        </div>
                                                        <div style={{ backgroundColor: "#b0b435", borderRadius: "10px", height: "30px", width: "300px", marginTop: "10px", color: "white", fontWeight: "bold" }} className="text-center">{productFilter.name} : {productFilter.buyPrice}/kg</div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                }
                            </div>
                        </div>
                        <Grid container justifyContent='end' className="mt-3 mb-4">
                            <Pagination count={!filter? numPagePagination : numPageFilterPagination} defaultPage={currentPage} onChange={handlePageChange} />
                        </Grid>
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

export default ProductList