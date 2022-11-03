import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MainPage from "./components/mainPage/mainPage";
import {Route, Routes} from "react-router-dom";
import Catalog from "./components/Catalog/Catalog";
import ProductPage from "./components/ProductPage/ProductPage";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/Home" element={<MainPage/>} />
        <Route path="/Catalog" element={<Catalog/>} />
        <Route path="/Catalog/:id" element={<ProductPage/>} />
        
      </Routes>
      {/* <MainPage/> */}
      <Footer/>
    </div>
  );
}

export default App;
