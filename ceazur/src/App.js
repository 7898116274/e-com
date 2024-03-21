import { BrowserRouter, Routes, Route } from "react-router-dom"

import Header from "./Component/Header/Header";
import Home from "./Pages/Home/Home";
import MybagDetails from "./Pages/MyBag/MybagDetails"; // cart 
import Login from "./Pages/Login/Login";
import Account from "./Pages/Account/Account";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
import Order from "./Pages/Order/Order"
import OrderDetails from "./Pages/Order/OrderDetails";
import CheckOut from "./Pages/checkOut/checkOut";
import Footer from "./Component/Footer/Footer";
// import Mountain from "./Pages/Category/Mountain/Mountain";
import CategoryPage from "./Pages/Category/CategoryPage";




function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<MybagDetails />} />
          <Route path="/account" element={<Account />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path='/orders' element={<Order />} />
          <Route path="/orderDetails" element={<OrderDetails />} />
          <Route path="/checkout" element={<CheckOut />} />
          {/* <Route path="/mountain" element={<Mountain />} /> */}
          <Route path="/category/mountain" element={<CategoryPage />} />
          <Route path="/category/beach" element={<CategoryPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
