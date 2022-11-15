import "bootstrap/dist/css/bootstrap.min.css"
import { Route, Routes } from "react-router-dom";
import AboutComponent from "./components/AboutComponent/AboutComponent";
import CartComponent from "./components/CartComponent/CartComponent";
import CheckoutComponent from "./components/CheckoutComponent/CheckoutComponent";
import ContactComponent from "./components/ContactComponent/ContactComponent";
import GalleryComponent from "./components/ProductListComponent/ProductListComponent.js";
import HeaderComponent from "./components/HeaderComponent/HeaderComponent";
import HomePageComponent from './components/HomePageComponent/HomePageComponent';
import LoginForm from "./components/LoginForm/LoginForm";
import MyAccountComponent from "./components/MyAccountComponent/MyAccountComponent";
import ShopDetailComponent from "./components/ShopDetailComponent/ShopDetailComponent";
import ProductList from "./components/ProductListComponent/ProductListComponent.js";
import OrderHistory from "./components/OrderHistoryComponent.js/OrderHistoryComponent";
import OrderHistoryDetail from "./components/OrderHistoryComponent.js/OrderHistoryDetailComponent";
import ShopListComponent from "./components/ShopListComponent/ShopListComponent";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<HomePageComponent />}></Route>
        <Route exact path="/about" element={<AboutComponent></AboutComponent>}></Route>
        <Route exact path="/cart" element={<CartComponent></CartComponent>}></Route>
        <Route exact path="/checkout" element={<CheckoutComponent></CheckoutComponent>}></Route>
        <Route exact path="/contact" element={<ContactComponent></ContactComponent>}></Route>
        <Route exact path="/gallery" element={<GalleryComponent></GalleryComponent>}></Route>
        <Route exact path="/my-account" element={<MyAccountComponent></MyAccountComponent>}></Route>
        <Route exact path="/shop-detail/:paramId" element={<ShopDetailComponent></ShopDetailComponent>}></Route>
        <Route exact path="/product-list" element={<ProductList></ProductList>}></Route>
        <Route exact path="/shop-list" element={<ShopListComponent></ShopListComponent>}></Route>
        <Route exact path="/order-history" element={<OrderHistory></OrderHistory>}></Route>
        <Route exact path="/order-history/:paramId" element={<OrderHistoryDetail></OrderHistoryDetail>}></Route>
        <Route path="*" element={<HomePageComponent></HomePageComponent>}></Route>
        <Route exact path="/login" element={<LoginForm></LoginForm>}></Route>
        <Route exact path="/header" element={<HeaderComponent></HeaderComponent>}></Route>
      </Routes>
    </div>
  );
}




export default App;
