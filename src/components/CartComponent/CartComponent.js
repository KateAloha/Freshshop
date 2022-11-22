import FooterComponent from "../FooterComponent/FooterComponent";
import HeaderComponent from "../HeaderComponent/HeaderComponent";
import BreadcrumbComponent from "../BreadcrumbComponent/BreadcrumbComponent";
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useEffect, useState } from "react";
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';


function CartComponent() {

    const allCart = JSON.parse(localStorage.getItem("allCart"))
    const user = JSON.parse(localStorage.getItem("user"))
    

    const [updateData, setUpdateData] = useState(0)
    const [updateCart, setUpdateCart] = useState(false)
    const [subTotal, setSubTotal] = useState(0)
    const [discount, setDiscount] = useState(0)
    const [couponDiscount, setCouponDiscount] = useState(0)
    const [tax, setTax] = useState(0)
    const [shippingCost, setShippingCost] = useState("Free")
    const [grandTotal, setGrandTotal] = useState(0)

    const onAddClick = (productDetail) => {
        const checkCartExisted = allCart.find((cartProduct) => productDetail._id === cartProduct._id)
        if (checkCartExisted) {
            const allCartNew = allCart.map((cartProduct) => productDetail._id === cartProduct._id ? { ...checkCartExisted, qtyBuy: checkCartExisted.qtyBuy + 1 } : cartProduct)
            localStorage.setItem("allCart", JSON.stringify(allCartNew))
            setUpdateData(updateData + 1)
        }
    }

    const onMinusClick = (productDetail) => {
        const checkCartExisted = allCart.find((cartProduct) => productDetail._id === cartProduct._id)
        if (checkCartExisted.qtyBuy == 1) {
            const allCartNew = allCart.filter((cartProduct) => productDetail._id != cartProduct._id)
            localStorage.setItem("allCart", JSON.stringify(allCartNew))
            setUpdateData(updateData + 1)
        } else {
            const allCartNew = allCart.map((cartProduct) => productDetail._id === cartProduct._id ? { ...checkCartExisted, qtyBuy: checkCartExisted.qtyBuy - 1 } : cartProduct)
            localStorage.setItem("allCart", JSON.stringify(allCartNew))
            setUpdateData(updateData + 1)
        }
    }

    const onRemoveClick = (productDetail) => {
        const allCartNew = allCart.filter((cartProduct) => productDetail._id != cartProduct._id)
        localStorage.setItem("allCart", JSON.stringify(allCartNew))
        setUpdateData(updateData + 1)
    }

    const onUpdateCartClick = () => {

        setUpdateCart(true)

        let productTotal = 0
        let discountTotal = 0
        let couponTotal = 0
        let taxTotal = 0
        let grandTotalCost = 0

        if (allCart.length > 0) {
            allCart.forEach((cartProduct) => {
                productTotal += cartProduct.promotionPrice * cartProduct.qtyBuy

            })

            let taxTotal = productTotal * 0.1
            let grandTotalCost = productTotal - discountTotal - couponTotal + taxTotal

            setSubTotal(productTotal)
            setDiscount(discountTotal)
            setCouponDiscount(couponTotal)
            setTax(taxTotal)
            setGrandTotal(grandTotalCost)
        }
    }

    const onCheckOutClick = () => {
        var checkoutProducts = {
            products: allCart,
            subTotal: subTotal,
            discount: discount,
            couponDiscount: couponDiscount,
            tax: tax,
            shippingCost:shippingCost,
            grandTotal: grandTotal
        }
        localStorage.setItem("checkout", JSON.stringify(checkoutProducts))
    }

    useEffect(() => {
        const allCart = JSON.parse(localStorage.getItem("allCart"))
    }, [updateData])
    return (
        <>
            <HeaderComponent></HeaderComponent>

            {/* <!-- Start All Title Box --> */}
            <BreadcrumbComponent BreadcrumbChild={"CART"}></BreadcrumbComponent>
            {/* <!-- End All Title Box -->

            <!-- Start Cart  --> */}
            <div className="cart-box-main">
                <div className="container">
                    <div className="row text-center">
                        <div className="col-sm-12">
                            {allCart.length > 0 ?
                                <div className="table-main table-responsive">
                                    <table className="table text-center">
                                        <thead>
                                            <tr>
                                                <th>Images</th>
                                                <th>Product Name</th>
                                                <th>Price</th>
                                                <th>Quantity</th>
                                                <th>Total</th>
                                                <th>Remove</th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                            {allCart.map((cartProduct, index) => {
                                                return (
                                                    <tr key={index}>
                                                        <td className="thumbnail-img">
                                                            <a href="#">
                                                                <img className="img-fluid" src={cartProduct.imageURl} alt="" />
                                                            </a>
                                                        </td>
                                                        <td className="name-pr">
                                                            <a href="#">
                                                                {cartProduct.name}
                                                            </a>
                                                        </td>
                                                        <td className="price-pr">
                                                            <p><del>{cartProduct.buyPrice}</del> {cartProduct.promotionPrice} VNĐ</p>
                                                        </td>
                                                        <td className="row" style={{ margin: "auto" }}>
                                                            <div className="col-sm-4">
                                                                <RemoveCircleIcon style={{ marginTop: "25px", marginBottom: "32px" }} onClick={() => { onMinusClick(cartProduct) }}></RemoveCircleIcon>
                                                            </div>
                                                            <div className="col-sm-4">
                                                                <p style={{ marginTop: "25px", marginBottom: "32px" }}>{cartProduct.qtyBuy}</p>
                                                            </div>
                                                            <div className="col-sm-4">
                                                                <AddCircleIcon style={{ marginTop: "25px", marginBottom: "32px" }} onClick={() => { onAddClick(cartProduct) }}></AddCircleIcon>
                                                            </div>
                                                        </td>
                                                        <td className="total-pr">
                                                            <p>{Number(cartProduct.promotionPrice) * Number(cartProduct.qtyBuy)} VNĐ</p>
                                                        </td>
                                                        <td className="remove-pr">
                                                            <a href="#" onClick={() => { onRemoveClick(cartProduct) }}>
                                                                <i className="fas fa-times"></i>
                                                            </a>
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                            }
                                        </tbody>
                                    </table>
                                </div>
                                :
                                <>
                                    <div>
                                        <div className="row ">
                                            <div className="col-sm-12">
                                                <RemoveShoppingCartIcon fontSize="large"></RemoveShoppingCartIcon>
                                                <p>Your cart is empty, shopping now</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-12">
                                                <p><a className="btn btn-warning hvr-hover" href="/product-list" style={{ color: "white", marginTop: "20px", width: "100px" }} >Buy Now</a></p>
                                            </div>
                                        </div>

                                    </div>
                                </>
                            }

                        </div>
                    </div>

                    <div className="row my-5">
                        <div className="col-lg-6 col-sm-6">
                            <div className="coupon-box">
                                <div className="input-group input-group-sm">
                                    <input className="form-control" placeholder="Enter your coupon code" aria-label="Coupon code" type="text" />
                                    <div className="input-group-append">
                                        <button className="btn btn-theme" type="button">Apply Coupon</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-sm-6">
                            <div className="update-box">
                                <input value="Update Cart" type="submit" onClick={onUpdateCartClick} />
                            </div>
                        </div>
                    </div>


                    {(updateCart && allCart.length > 0 ) ?
                        <div className="row my-5">
                        <div className="col-lg-8 col-sm-12"></div>
                        <div className="col-lg-4 col-sm-12">
                            <div className="order-box">
                                <h3>Order summary</h3>
                                <div className="d-flex">
                                    <h4>Sub Total</h4>
                                    <div className="ml-auto font-weight-bold"> {subTotal} </div>
                                </div>
                                <div className="d-flex">
                                    <h4>Discount</h4>
                                    <div className="ml-auto font-weight-bold"> {discount} </div>
                                </div>
                                <hr className="my-1" />
                                <div className="d-flex">
                                    <h4>Coupon Discount</h4>
                                    <div className="ml-auto font-weight-bold"> {couponDiscount} </div>
                                </div>
                                <div className="d-flex">
                                    <h4>Tax</h4>
                                    <div className="ml-auto font-weight-bold"> {tax} </div>
                                </div>
                                <div className="d-flex">
                                    <h4>Shipping Cost</h4>
                                    <div className="ml-auto font-weight-bold"> {shippingCost} </div>
                                </div>
                                <hr />
                                <div className="d-flex gr-total">
                                    <h5>Grand Total</h5>
                                    <div className="ml-auto h5"> {grandTotal} </div>
                                </div>
                                <hr /> </div>
                        </div>
                        <div className="col-12 d-flex"><a href={user ? "checkout" : "login"} className="ml-auto btn btn-warning hvr-hover" style={{color: "white", fontWeight: "bold"}} onClick={onCheckOutClick}>Checkout</a> </div>
                    </div>
                        :
                        <></>
                    }


                </div>
            </div>

            {/* <!-- End Instagram Feed  -->


            <!-- Start Footer  --> */}
            <FooterComponent></FooterComponent>
        </>
    )
}

export default CartComponent;