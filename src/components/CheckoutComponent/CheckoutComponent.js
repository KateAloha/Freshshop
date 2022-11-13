import { async } from "@firebase/util"
import { useEffect, useState } from "react"
import { json, useNavigate } from "react-router-dom"
import { Snackbar, Alert, Grid, Modal } from "@mui/material"
import BreadcrumbComponent from "../BreadcrumbComponent/BreadcrumbComponent"
import FooterComponent from "../FooterComponent/FooterComponent"
import HeaderComponent from "../HeaderComponent/HeaderComponent"
import { Container, Row } from "reactstrap"
import { Box } from "@mui/system"
import ThankyouImg from "../../assets/images/thank-you.jpg"
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined'
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined'
import ForwardOutlinedIcon from '@mui/icons-material/ForwardOutlined';

function CheckoutComponent() {

    const navigate = useNavigate()

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 600,
        bgcolor: "white",
        boxShadow: "black 0px 10px 29px 10px",
        p: 4,
        borderRadius: "10%"
    };

    //Create Const variable
    const [payment, setPayment] = useState('')
    const [shipping, setShipping] = useState('')
    const [updateData, setUpdateData] = useState(0)
    const [alert, setAlert] = useState(false);
    const [textAlert, setTextAlert] = useState("");
    const [alertColor, setAlertColor] = useState("error");
    const [openModal, setOpenModal] = useState(false)

    const checkout = JSON.parse(localStorage.getItem('checkout'))
    const user = JSON.parse(localStorage.getItem('user'))

    //Navigate to Product Detail Page
    const onProductClick = (product) => {
        navigate(`/shop-detail/${product._id}`)
    }

    //Payment Selection 
    const onMomoPayClick = () => {
        setPayment('Momo')
    }

    const onZaloPayClick = () => {
        setPayment('Zalo')
    }

    const onCashPayClick = () => {
        setPayment('Cash')
    }

    //On Close Alert
    const handleCloseAlert = () => {
        setAlert(false)
    }

    //Call API function
    const createData = async (url, body) => {
        const response = await fetch(url, body)
        const data = await response.json()
        return data
    }

    //Create Shipping Date based on Shipping Method Selection
    const shippingDateValue = (today, dayAdd) => {
        // let today = new Date().toLocaleDateString()
        let result = new Date(today)
        result.setDate(result.getDate() + dayAdd);
        let finalResult = result.toLocaleDateString()
        return finalResult
    }

    //Shipping Method Selection
    const onStandardShipClick = () => {
        if (!isNaN(checkout.shippingCost)) {
            const newShippingCost = "Free"
            let newGrandTotal = checkout.grandTotal - checkout.shippingCost
            const newCheckout = {
                ...checkout,
                shippingCost: newShippingCost,
                grandTotal: newGrandTotal
            }
            localStorage.setItem('checkout', JSON.stringify(newCheckout))
            setUpdateData(updateData + 1)
            setShipping('Express Delivery - (2-4 business days)')
        }

    }

    const onExpressShipClick = () => {
        const newShippingCost = 20000
        let newGrandTotal = checkout.grandTotal
        if (isNaN(checkout.shippingCost)) {
            newGrandTotal = newGrandTotal + 20000
        } else {
            newGrandTotal = newGrandTotal - checkout.shippingCost + 20000
        }
        const newCheckout = {
            ...checkout,
            shippingCost: newShippingCost,
            grandTotal: newGrandTotal
        }
        localStorage.setItem('checkout', JSON.stringify(newCheckout))
        setUpdateData(updateData + 1)
        setShipping('Standard Delivery - (3-7 business days)')
    }

    const onNextDayShipClick = () => {

        const newShippingCost = 40000
        let newGrandTotal = checkout.grandTotal
        if (isNaN(checkout.shippingCost)) {
            newGrandTotal = newGrandTotal + 40000
        } else {
            newGrandTotal = newGrandTotal - checkout.shippingCost + 40000
        }
        const newCheckout = {
            ...checkout,
            shippingCost: newShippingCost,
            grandTotal: newGrandTotal
        }
        localStorage.setItem('checkout', JSON.stringify(newCheckout))
        setUpdateData(updateData + 1)
        setShipping('Next Business day')
    }

    //On Btn place order click
    const onBtnPlaceOrderClick = () => {
        //Create orderDate & shippedDate variable
        let orderDateData = new Date().toLocaleDateString()
        let shippedDateData = new Date()

        //Check Shipping Method Selection to create shippedDate
        if (checkout.shippingCost == "Free") {
            shippedDateData = shippingDateValue(orderDateData, 7)
        } else if (checkout.shippingCost == 20000) {
            shippedDateData = shippingDateValue(orderDateData, 4)
        } else {
            shippedDateData = shippingDateValue(orderDateData, 1)
        }

        //Create orderCheck variable
        const orderCheck = {
            orderDate: orderDateData,
            shippedDate: shippedDateData,
            city: user.city,
            district: user.district,
            ward: user.ward,
            address: user.address,
            buyer: user._id,
            payment: payment,
            shipping: shipping,
            cost: checkout.grandTotal,
        }

        //Validate OrderCheck
        const orderValidate = validateOrder(orderCheck)

        // if orderCheck is valid, call API to post new orderModel
        if (orderValidate) {
            const orderNewBody = {
                method: 'POST',
                body: JSON.stringify({
                    orderDate: orderCheck.orderDate,
                    shippedDate: orderCheck.shippedDate,
                    city: orderCheck.city,
                    district: orderCheck.district,
                    ward: orderCheck.ward,
                    address: orderCheck.address,
                    buyer: orderCheck.buyer,
                    payment: orderCheck.payment,
                    shipping: orderCheck.shipping,
                    cost: Number(orderCheck.cost)

                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8'
                }

            }
            createData('http://localhost:8000/orders', orderNewBody)
                .then((orderData) => {

                    //Create OrderDetail variable
                    const productsDetail = checkout.products

                    //Create each orderDetail in the products list, call API to post orderDetail
                    productsDetail.map((productDetail, index) => {
                        const orderDetailBody = {
                            method: 'POST',
                            body: JSON.stringify({
                                product: productDetail._id,
                                quantity: Number(productDetail.qtyBuy),
                                order: orderData.newOrderInput._id
                            }),
                            headers: {
                                'Content-type': 'application/json; charset=UTF-8'
                            }

                        }
                        createData('http://localhost:8000/order-details', orderDetailBody)
                            .then((orderDataDetail) => {
                            }).catch((error) => {
                                setAlert(true);
                                setTextAlert(`Can not load the Product number ${index + 1} in the Products list, error: `, error);
                                setAlertColor("error");
                            })

                    })
                    setAlert(true);
                    setTextAlert("Create order successfully!");
                    setAlertColor("success")
                    setOpenModal(true)
                    localStorage.setItem('allCart', JSON.stringify([]))

                }).catch((error) => {
                    setAlert(true);
                    setTextAlert(`Can not load your Order, error: ${error}`,);
                    setAlertColor("error");
                })
        }

    }

    const validateOrder = (paramOrder) => {
        if (paramOrder.payment == "") {
            setAlert(true)
            setAlertColor("error")
            setTextAlert("Please select your payment")
            return false
        }
        return true
    }

    useEffect(() => {
        const checkout = JSON.parse(localStorage.getItem('checkout'))
    }, [updateData])
    return (
        <>
            <HeaderComponent></HeaderComponent>

            <BreadcrumbComponent BreadcrumbChild={"CHECK OUT"}></BreadcrumbComponent>
            {/* <!-- End All Title Box -->

            <!-- Start Cart  --> */}
            <div className="cart-box-main">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-lg-6 mb-3">
                            <div className="checkout-address">
                                <div className="title-left">
                                    <h3>Billing address</h3>
                                </div>
                                <form className="needs-validation" novalidate>
                                    <div className="mb-3">
                                        <label for="fullname">Fullname *</label>
                                        <div className="input-group">
                                            <input type="text" className="form-control" id="fullname" placeholder="" value={user.fullName} />
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label for="email">Email Address *</label>
                                        <input type="email" className="form-control" id="email" value={user.email} />
                                    </div>
                                    <div className="mb-3">
                                        <label for="phone">Phone *</label>
                                        <input type="text" className="form-control" id="phone" value={user.phone} required />
                                    </div>
                                    <div className="mb-3">
                                        <label for="city">City *</label>
                                        <input type="text" className="form-control" id="city" value={user.city} required />
                                    </div>
                                    <div className="mb-3">
                                        <label for="district">District *</label>
                                        <input type="text" className="form-control" id="district" value={user.district} required />
                                    </div>
                                    <div className="mb-3">
                                        <label for="ward">Ward *</label>
                                        <input type="text" className="form-control" id="ward" value={user.ward} required />
                                    </div>
                                    <div className="mb-3">
                                        <label for="address">Address *</label>
                                        <input type="text" className="form-control" id="address" value={user.address} required />
                                    </div>
                                    <hr className="mb-4" />
                                    <div className="title"> <span>Payment</span> </div>
                                    <div className="d-block my-3">
                                        <div className="custom-control custom-radio">
                                            <input id="Momo" name="paymentMethod" type="radio" className="custom-control-input" required onChange={onMomoPayClick} />
                                            <label className="custom-control-label" for="Momo">Momo</label>
                                        </div>
                                        <div className="custom-control custom-radio">
                                            <input id="Zalopay" name="paymentMethod" type="radio" className="custom-control-input" required onChange={onZaloPayClick} />
                                            <label className="custom-control-label" for="Zalopay">Zalo Pay</label>
                                        </div>
                                        <div className="custom-control custom-radio">
                                            <input id="Cash" name="paymentMethod" type="radio" className="custom-control-input" required onChange={onCashPayClick} />
                                            <label className="custom-control-label" for="Cash">COD</label>
                                        </div>
                                    </div>
                                    <div className="row">
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
                                                <input id="shippingOption1" name="shipping-option" className="custom-control-input" type="radio" onChange={onStandardShipClick} />
                                                <label className="custom-control-label" for="shippingOption1">Standard Delivery</label> <span className="float-right font-weight-bold">FREE</span> </div>
                                            <div className="ml-4 mb-2 small">(3-7 business days)</div>
                                            <div className="custom-control custom-radio">
                                                <input id="shippingOption2" name="shipping-option" className="custom-control-input" type="radio" onChange={onExpressShipClick} />
                                                <label className="custom-control-label" for="shippingOption2">Express Delivery</label> <span className="float-right font-weight-bold">20000 VNĐ</span> </div>
                                            <div className="ml-4 mb-2 small">(2-4 business days)</div>
                                            <div className="custom-control custom-radio">
                                                <input id="shippingOption3" name="shipping-option" className="custom-control-input" type="radio" onChange={onNextDayShipClick} />
                                                <label className="custom-control-label" for="shippingOption3">Next Business day</label> <span className="float-right font-weight-bold">40000 VNĐ</span> </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12 col-lg-12">
                                    <div className="odr-box">
                                        <div className="title-left">
                                            <h3>Shopping cart</h3>
                                        </div>
                                        <div className="rounded p-2 bg-light">
                                            {checkout.products.map((product, index) => {
                                                return (
                                                    <div className="media mb-2 border-bottom" key={index}>
                                                        <div className="media-body"> <a href="#" onClick={() => onProductClick(product)}> {product.name}</a>
                                                            <div className="small text-muted">Price: {product.promotionPrice} VNĐ<span className="mx-2">|</span> Qty: {product.qtyBuy} <span className="mx-2">|</span> Subtotal: {Number(product.promotionPrice) * Number(product.qtyBuy)} VNĐ</div>
                                                        </div>
                                                    </div>
                                                )
                                            })}
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
                                            <div className="ml-auto font-weight-bold"> {checkout.subTotal} VNĐ</div>
                                        </div>
                                        <div className="d-flex">
                                            <h4>Discount</h4>
                                            <div className="ml-auto font-weight-bold"> {checkout.discount} VNĐ</div>
                                        </div>
                                        <hr className="my-1" />
                                        <div className="d-flex">
                                            <h4>Coupon Discount</h4>
                                            <div className="ml-auto font-weight-bold"> {checkout.couponDiscount} VNĐ</div>
                                        </div>
                                        <div className="d-flex">
                                            <h4>Tax</h4>
                                            <div className="ml-auto font-weight-bold"> {checkout.tax} VNĐ</div>
                                        </div>
                                        <div className="d-flex">
                                            <h4>Shipping Cost</h4>
                                            <div className="ml-auto font-weight-bold"> {checkout.shippingCost} VNĐ</div>
                                        </div>
                                        <hr />
                                        <div className="d-flex gr-total">
                                            <h5>Grand Total</h5>
                                            <div className="ml-auto h5"> {checkout.grandTotal} VNĐ</div>
                                        </div>
                                        <hr /> </div>
                                </div>
                                <div className="col-12 d-flex"><a href="#" className="ml-auto btn btn-warning hvr-hover" style={{ color: "white", fontWeight: "bold" }} onClick={onBtnPlaceOrderClick}>Place Order</a> </div>
                            </div>
                        </div>
                    </div>

                </div>

                <Snackbar
                    open={alert}
                    autoHideDuration={5000}
                    onClose={handleCloseAlert}
                >
                    <Alert onClose={handleCloseAlert} severity={alertColor}>{textAlert}</Alert>
                </Snackbar>
                <Container>
                    <Grid container>
                        <Grid item xs={12} sm={12} md={12} lg={12}>
                            <Modal open={openModal}>
                                <Box sx={style}>
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <img src={ThankyouImg} style={{ objectFit: "cover" }}></img>
                                        </div>
                                    </div>
                                    <div className="row text-center">
                                        <div className="col-sm-12">
                                            <div >
                                                <a href="/" className=" btn btn-success hvr-hover" style={{ color: "white", fontWeight: "bold", marginRight: "10px" }}>Go Home</a>
                                                <a href="/order-history" className=" btn btn-warning hvr-hover" style={{ color: "white", fontWeight: "bold" }}>View Order</a>
                                            </div>
                                        </div>
                                    </div>
                                </Box>
                            </Modal>
                        </Grid>
                    </Grid>
                </Container>
            </div>

            {/* <!-- End Instagram Feed  -->
            <!-- Start Footer  --> */}
            <FooterComponent></FooterComponent>
        </>
    )
}

export default CheckoutComponent