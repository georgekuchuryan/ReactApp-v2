import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MainPage from "./components/mainPage/mainPage";
import { Route, Routes } from "react-router-dom";
import Catalog from "./components/Catalog/Catalog";
import ProductPage from "./components/ProductPage/ProductPage";
import LogIn from "./components/LogIn/LogIn";
import Register from "./components/Register/Register";
import SingUp from "./components/SingUp/SingUp";
import PrivateRoutes from "./utils/PrivateRoutes";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path="/FAQs" element={<Register />} />
        </Route>
        <Route path="/Catalog" element={<Catalog />} />
        <Route path="/Home" element={<MainPage />} />
        <Route path="/Catalog/:id" element={<ProductPage />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/SingUp" element={<SingUp />} />
      </Routes>
      <Footer />
      
    </div>
  );
}

export default App;
