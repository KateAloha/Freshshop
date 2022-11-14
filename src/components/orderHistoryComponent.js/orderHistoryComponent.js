import BreadcrumbComponent from "../BreadcrumbComponent/BreadcrumbComponent"
import FooterComponent from "../FooterComponent/FooterComponent"
import HeaderComponent from "../HeaderComponent/HeaderComponent"
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import { useNavigate } from "react-router-dom";
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';


function OrderHistory() {

    const navigate = useNavigate()

    const today = new Date()
    const user = JSON.parse(localStorage.getItem('user'))
    const ordersHistory = user.orders

    const onOrderDetailClick = (orderDetail) => {
        navigate(`/order-history/${orderDetail._id}`)
    }


    return (
        <>
            <HeaderComponent></HeaderComponent>

            <BreadcrumbComponent BreadcrumbChild={"ORDER HISTORY"}></BreadcrumbComponent>

            <div className="wishlist-box-main">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            {ordersHistory.length > 0 ?
                                <>
                                    <div className="table-main table-responsive">
                                        <table className="table text-center">
                                            <thead>
                                                <tr>
                                                    <th>Order Date</th>
                                                    <th>Ship Date</th>
                                                    <th>Total Cost</th>
                                                    <th>Shipping Method</th>
                                                    <th>Payment</th>
                                                    <th>Status</th>
                                                    <th>Order Detail</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {ordersHistory.map((orderHistory, index) => {
                                                    return (
                                                        <tr>
                                                            <td>
                                                                <p>{orderHistory.orderDate}</p>
                                                            </td>
                                                            <td>
                                                                <p>{orderHistory.shippedDate}</p>
                                                            </td>
                                                            <td >
                                                                <p>{orderHistory.cost}</p>
                                                            </td>
                                                            <td>
                                                                <p>{orderHistory.shipping}</p>
                                                            </td>
                                                            <td>
                                                                <p>{orderHistory.payment}</p>
                                                            </td>
                                                            <td className="price-pr">
                                                                {(today > new Date(orderHistory.shippedDate) || today == new Date(orderHistory.shippedDate))
                                                                    ?
                                                                    <p style={{color: "green", fontWeight: "bold"}}><CheckCircleOutlineOutlinedIcon></CheckCircleOutlineOutlinedIcon> Done </p>
                                                                    :
                                                                    <p style={{color: "red", fontWeight: "bold"}}><LocalShippingOutlinedIcon></LocalShippingOutlinedIcon> Processing ... </p>
                                                                }
                                                            </td>
                                                            <td>
                                                                <p><a className="btn btn-warning hvr-hover" href="#" onClick={() => onOrderDetailClick(orderHistory)} style={{ color: "white", width: "100px"}}>View</a></p>
                                                            </td>
                                                        </tr>
                                                    )

                                                })}

                                            </tbody>
                                        </table>
                                    </div>
                                </>
                                :
                                <>
                                    <div>
                                        <div className="row ">
                                            <div className="col-sm-12">
                                                <RemoveShoppingCartIcon fontSize="large"></RemoveShoppingCartIcon>
                                                <p>Your order is empty, shopping now</p>
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
                </div>
            </div>

            <FooterComponent></FooterComponent>
        </>

    )
}

export default OrderHistory