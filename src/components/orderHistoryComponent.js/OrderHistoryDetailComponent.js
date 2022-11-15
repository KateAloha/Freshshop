import { useState } from "react"
import { useParams } from "react-router-dom"
import BreadcrumbComponent from "../BreadcrumbComponent/BreadcrumbComponent"
import FooterComponent from "../FooterComponent/FooterComponent"
import HeaderComponent from "../HeaderComponent/HeaderComponent"

function OrderHistoryDetail() {

    const { paramId } = useParams()
    const user = JSON.parse(localStorage.getItem('user'))
    const [displayBill, setDisplayBill] = useState(false)
    let shippingFee = 0
    let subTotal = 0
     

    const orders = user.orders.filter((order, index) => {
        return order._id == paramId 
    })
    const ordersDetail = orders[0].orderDetails

    const onDisplayTotalBill = () => {
        setDisplayBill(true)
    }

    if (orders[0].shipping == "Standard Delivery - (3-7 business days)") {
        shippingFee = 20000
    } else if (orders[0].shipping == "Next Business day") {
        shippingFee = 40000
    } else {
        shippingFee = 0
    }

    ordersDetail.map((orderDetail, index) => {
        return subTotal = subTotal + (orderDetail.product.promotionPrice * orderDetail.quantity)
    })

    return (
        <>
            <HeaderComponent></HeaderComponent>

            <BreadcrumbComponent BreadcrumbChild={"ORDER DETAIL"}></BreadcrumbComponent>

            <div className="cart-box-main">
                <div className="container">
                    <div className="row text-center">
                        <div className="col-sm-12">
                            <div className="table-main table-responsive">
                                <table className="table text-center">
                                    <thead>
                                        <tr>
                                            <th>Images</th>
                                            <th>Product Name</th>
                                            <th>Price</th>
                                            <th>Quantity</th>
                                            <th>Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        {ordersDetail.map((orderDetail, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td className="thumbnail-img">
                                                        <a href="#">
                                                            <img className="img-fluid" src={orderDetail.product.imageURl} alt="" />
                                                        </a>
                                                    </td>
                                                    <td className="name-pr">
                                                        <a href="#">
                                                            {orderDetail.product.name}
                                                        </a>
                                                    </td>
                                                    <td className="price-pr">
                                                        <p><del>{orderDetail.product.buyPrice}</del> {orderDetail.product.promotionPrice} VNĐ</p>
                                                    </td>
                                                    <td className="row" style={{ margin: "auto" }}>
                                                        <p style={{ marginTop: "25px", marginBottom: "32px" }}>{orderDetail.quantity}</p>
                                                    </td>
                                                    <td className="total-pr">
                                                        <p>{Number(orderDetail.product.promotionPrice) * Number(orderDetail.quantity)} VNĐ</p>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <div className="row my-5">
                        <div className="col-lg-6 col-sm-6">
                        </div>
                        <div className="col-lg-6 col-sm-6">
                            <div className="update-box">
                                <input value="Total Bill" type="submit" onClick={onDisplayTotalBill} />
                            </div>
                        </div>
                    </div>


                    {(displayBill && ordersDetail.length > 0) ?
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
                                        <div className="ml-auto font-weight-bold"> 0 </div>
                                    </div>
                                    <hr className="my-1" />
                                    <div className="d-flex">
                                        <h4>Coupon Discount</h4>
                                        <div className="ml-auto font-weight-bold"> 0 </div>
                                    </div>
                                    <div className="d-flex">
                                        <h4>Tax</h4>
                                        <div className="ml-auto font-weight-bold"> {subTotal*0.1} </div>
                                    </div>
                                    <div className="d-flex">
                                        <h4>Shipping Cost</h4>
                                        <div className="ml-auto font-weight-bold"> {shippingFee} </div>
                                    </div>
                                    <hr />
                                    <div className="d-flex gr-total">
                                        <h5>Grand Total</h5>
                                        <div className="ml-auto h5"> {orders[0].cost} </div>
                                    </div>
                                    <hr /> </div>
                            </div>
                            <div className="col-12 d-flex"><a href="/order-history" className="ml-auto btn btn-warning hvr-hover" style={{color: "white", fontWeight: "bold"}}>Go Back</a> </div>
                        </div>
                        :
                        <></>
                    }

                </div>
            </div>

            <FooterComponent></FooterComponent>
        </>
    )
}

export default OrderHistoryDetail