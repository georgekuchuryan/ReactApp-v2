import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MainPage from "./components/mainPage/mainPage";

function App() {
  return (
    <div className="App">
      <Header />
      <MainPage/>
      <Footer/>
    </div>
  );
}

export default App;