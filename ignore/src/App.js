import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MainPage from "./components/mainPage/mainPage";
import { Route, Routes } from "react-router-dom";
import Catalog from "./components/Catalog/Catalog";
import ProductPage from "./components/ProductPage/ProductPage";
import LogIn from "./components/LogIn/LogIn";
import Register from "./components/Register/Register";



function App() {
  return (
    <div className="App">

      <Header />
      <Routes>
        <Route path="/Home" element={<MainPage />} />
        <Route path="/Catalog" element={<Catalog />} />
        <Route path="/Catalog/:id" element={<ProductPage />} />
        <Route path="/Pricing" element={<LogIn />}/>
        <Route path="/FAQs" element={<Register />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
