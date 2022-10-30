import HeaderComponent from "../HeaderComponent/HeaderComponent";

function ShopComponent() {
    return (
        <>
            <HeaderComponent></HeaderComponent>
            {/* <!-- End Top Search -->

            <!-- Start All Title Box --> */}
            <div className="all-title-box">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2>Shop</h2>
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item"><a href="#">Home</a></li>
                                <li className="breadcrumb-item active">Shop</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- End All Title Box -->

            <!-- Start Shop Page  --> */}
            <div className="shop-box-inner">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-9 col-lg-9 col-sm-12 col-xs-12 shop-content-right">
                            <div className="right-product-box">
                                <div className="product-item-filter row">
                                    <div className="col-12 col-sm-8 text-center text-sm-left">
                                        <div className="toolbar-sorter-right">
                                            <span>Sort by </span>
                                            <select id="basic" className="selectpicker show-tick form-control" data-placeholder="$ USD">
                                                <option data-display="Select">Nothing</option>
                                                <option value="1">Popularity</option>
                                                <option value="2">High Price → High Price</option>
                                                <option value="3">Low Price → High Price</option>
                                                <option value="4">Best Selling</option>
                                            </select>
                                        </div>
                                        <p>Showing all 4 results</p>
                                    </div>
                                    <div className="col-12 col-sm-4 text-center text-sm-right">
                                        <ul className="nav nav-tabs ml-auto">
                                            <li>
                                                <a className="nav-link active" href="#grid-view" data-toggle="tab"> <i className="fa fa-th"></i> </a>
                                            </li>
                                            <li>
                                                <a className="nav-link" href="#list-view" data-toggle="tab"> <i className="fa fa-list-ul"></i> </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="product-categorie-box">
                                    <div className="tab-content">
                                        <div role="tabpanel" className="tab-pane fade show active" id="grid-view">
                                            <div className="row">
                                                <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4">
                                                    <div className="products-single fix">
                                                        <div className="box-img-hover">
                                                            <div className="type-lb">
                                                                <p className="sale">Sale</p>
                                                            </div>
                                                            <img src="assets/images/img-pro-01.jpg" className="img-fluid" alt="Image"/>
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
                                                <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4">
                                                    <div className="products-single fix">
                                                        <div className="box-img-hover">
                                                            <div className="type-lb">
                                                                <p className="new">New</p>
                                                            </div>
                                                            <img src="assets/images/img-pro-02.jpg" className="img-fluid" alt="Image"/>
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
                                                <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4">
                                                    <div className="products-single fix">
                                                        <div className="box-img-hover">
                                                            <div className="type-lb">
                                                                <p className="sale">Sale</p>
                                                            </div>
                                                            <img src="assets/images/img-pro-03.jpg" className="img-fluid" alt="Image"/>
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
                                                <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4">
                                                    <div className="products-single fix">
                                                        <div className="box-img-hover">
                                                            <div className="type-lb">
                                                                <p className="new">New</p>
                                                            </div>
                                                            <img src="assets/images/img-pro-01.jpg" className="img-fluid" alt="Image"/>
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
                                                <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4">
                                                    <div className="products-single fix">
                                                        <div className="box-img-hover">
                                                            <div className="type-lb">
                                                                <p className="sale">Sale</p>
                                                            </div>
                                                            <img src="assets/images/img-pro-02.jpg" className="img-fluid" alt="Image"/>
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
                                                <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4">
                                                    <div className="products-single fix">
                                                        <div className="box-img-hover">
                                                            <div className="type-lb">
                                                                <p className="sale">Sale</p>
                                                            </div>
                                                            <img src="assets/images/img-pro-03.jpg" className="img-fluid" alt="Image"/>
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
                                                <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4">
                                                    <div className="products-single fix">
                                                        <div className="box-img-hover">
                                                            <div className="type-lb">
                                                                <p className="sale">Sale</p>
                                                            </div>
                                                            <img src="assets/images/img-pro-01.jpg" className="img-fluid" alt="Image"/>
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
                                                <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4">
                                                    <div className="products-single fix">
                                                        <div className="box-img-hover">
                                                            <div className="type-lb">
                                                                <p className="sale">Sale</p>
                                                            </div>
                                                            <img src="assets/images/img-pro-02.jpg" className="img-fluid" alt="Image"/>
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
                                                <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4">
                                                    <div className="products-single fix">
                                                        <div className="box-img-hover">
                                                            <div className="type-lb">
                                                                <p className="new">New</p>
                                                            </div>
                                                            <img src="assets/images/img-pro-03.jpg" className="img-fluid" alt="Image"/>
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
                                        <div role="tabpanel" className="tab-pane fade" id="list-view">
                                            <div className="list-view-box">
                                                <div className="row">
                                                    <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4">
                                                        <div className="products-single fix">
                                                            <div className="box-img-hover">
                                                                <div className="type-lb">
                                                                    <p className="new">New</p>
                                                                </div>
                                                                <img src="assets/images/img-pro-01.jpg" className="img-fluid" alt="Image"/>
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
                                                    <div className="col-sm-6 col-md-6 col-lg-8 col-xl-8">
                                                        <div className="why-text full-width">
                                                            <h4>Lorem ipsum dolor sit amet</h4>
                                                            <h5> <del>$ 60.00</del> $40.79</h5>
                                                            <p>Integer tincidunt aliquet nibh vitae dictum. In turpis sapien, imperdiet quis magna nec, iaculis ultrices ante. Integer vitae suscipit nisi. Morbi dignissim risus sit amet orci porta, eget aliquam purus
                                                                sollicitudin. Cras eu metus felis. Sed arcu arcu, sagittis in blandit eu, imperdiet sit amet eros. Donec accumsan nisi purus, quis euismod ex volutpat in. Vestibulum eleifend eros ac lobortis aliquet.
                                                                Suspendisse at ipsum vel lacus vehicula blandit et sollicitudin quam. Praesent vulputate semper libero pulvinar consequat. Etiam ut placerat lectus.</p>
                                                            <a className="btn hvr-hover" href="#">Add to Cart</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="list-view-box">
                                                <div className="row">
                                                    <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4">
                                                        <div className="products-single fix">
                                                            <div className="box-img-hover">
                                                                <div className="type-lb">
                                                                    <p className="sale">Sale</p>
                                                                </div>
                                                                <img src="assets/images/img-pro-02.jpg" className="img-fluid" alt="Image"/>
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
                                                    <div className="col-sm-6 col-md-6 col-lg-8 col-xl-8">
                                                        <div className="why-text full-width">
                                                            <h4>Lorem ipsum dolor sit amet</h4>
                                                            <h5> <del>$ 60.00</del> $40.79</h5>
                                                            <p>Integer tincidunt aliquet nibh vitae dictum. In turpis sapien, imperdiet quis magna nec, iaculis ultrices ante. Integer vitae suscipit nisi. Morbi dignissim risus sit amet orci porta, eget aliquam purus
                                                                sollicitudin. Cras eu metus felis. Sed arcu arcu, sagittis in blandit eu, imperdiet sit amet eros. Donec accumsan nisi purus, quis euismod ex volutpat in. Vestibulum eleifend eros ac lobortis aliquet.
                                                                Suspendisse at ipsum vel lacus vehicula blandit et sollicitudin quam. Praesent vulputate semper libero pulvinar consequat. Etiam ut placerat lectus.</p>
                                                            <a className="btn hvr-hover" href="#">Add to Cart</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="list-view-box">
                                                <div className="row">
                                                    <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4">
                                                        <div className="products-single fix">
                                                            <div className="box-img-hover">
                                                                <div className="type-lb">
                                                                    <p className="sale">Sale</p>
                                                                </div>
                                                                <img src="assets/images/img-pro-03.jpg" className="img-fluid" alt="Image"/>
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
                                                    <div className="col-sm-6 col-md-6 col-lg-8 col-xl-8">
                                                        <div className="why-text full-width">
                                                            <h4>Lorem ipsum dolor sit amet</h4>
                                                            <h5> <del>$ 60.00</del> $40.79</h5>
                                                            <p>Integer tincidunt aliquet nibh vitae dictum. In turpis sapien, imperdiet quis magna nec, iaculis ultrices ante. Integer vitae suscipit nisi. Morbi dignissim risus sit amet orci porta, eget aliquam purus
                                                                sollicitudin. Cras eu metus felis. Sed arcu arcu, sagittis in blandit eu, imperdiet sit amet eros. Donec accumsan nisi purus, quis euismod ex volutpat in. Vestibulum eleifend eros ac lobortis aliquet.
                                                                Suspendisse at ipsum vel lacus vehicula blandit et sollicitudin quam. Praesent vulputate semper libero pulvinar consequat. Etiam ut placerat lectus.</p>
                                                            <a className="btn hvr-hover" href="#">Add to Cart</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-sm-12 col-xs-12 sidebar-shop-left">
                            <div className="product-categori">
                                <div className="search-product">
                                    <form action="#">
                                        <input className="form-control" placeholder="Search here..." type="text"/>
                                            <button type="submit"> <i className="fa fa-search"></i> </button>
                                    </form>
                                </div>
                                <div className="filter-sidebar-left">
                                    <div className="title-left">
                                        <h3>Categories</h3>
                                    </div>
                                    <div className="list-group list-group-collapse list-group-sm list-group-tree" id="list-group-men" data-children=".sub-men">
                                        <div className="list-group-collapse sub-men">
                                            <a className="list-group-item list-group-item-action" href="#sub-men1" data-toggle="collapse" aria-expanded="true" aria-controls="sub-men1">Fruits & Drinks <small className="text-muted">(100)</small>
                                            </a>
                                            <div className="collapse show" id="sub-men1" data-parent="#list-group-men">
                                                <div className="list-group">
                                                    <a href="#" className="list-group-item list-group-item-action active">Fruits 1 <small className="text-muted">(50)</small></a>
                                                    <a href="#" className="list-group-item list-group-item-action">Fruits 2 <small className="text-muted">(10)</small></a>
                                                    <a href="#" className="list-group-item list-group-item-action">Fruits 3 <small className="text-muted">(10)</small></a>
                                                    <a href="#" className="list-group-item list-group-item-action">Fruits 4 <small className="text-muted">(10)</small></a>
                                                    <a href="#" className="list-group-item list-group-item-action">Fruits 5 <small className="text-muted">(20)</small></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="list-group-collapse sub-men">
                                            <a className="list-group-item list-group-item-action" href="#sub-men2" data-toggle="collapse" aria-expanded="false" aria-controls="sub-men2">Vegetables
                                                <small className="text-muted">(50)</small>
                                            </a>
                                            <div className="collapse" id="sub-men2" data-parent="#list-group-men">
                                                <div className="list-group">
                                                    <a href="#" className="list-group-item list-group-item-action">Vegetables 1 <small className="text-muted">(10)</small></a>
                                                    <a href="#" className="list-group-item list-group-item-action">Vegetables 2 <small className="text-muted">(20)</small></a>
                                                    <a href="#" className="list-group-item list-group-item-action">Vegetables 3 <small className="text-muted">(20)</small></a>
                                                </div>
                                            </div>
                                        </div>
                                        <a href="#" className="list-group-item list-group-item-action"> Grocery  <small className="text-muted">(150) </small></a>
                                        <a href="#" className="list-group-item list-group-item-action"> Grocery <small className="text-muted">(11)</small></a>
                                        <a href="#" className="list-group-item list-group-item-action"> Grocery <small className="text-muted">(22)</small></a>
                                    </div>
                                </div>
                                <div className="filter-price-left">
                                    <div className="title-left">
                                        <h3>Price</h3>
                                    </div>
                                    <div className="price-box-slider">
                                        <div id="slider-range"></div>
                                        <p>
                                            <input type="text" id="amount" readonly style={{border: "0", color: "#fbb714", fontWeight: "bold"}} />
                                                <button className="btn hvr-hover" type="submit">Filter</button>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- End Shop Page -->

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

export default ShopComponent;