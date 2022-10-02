import "./assets/style/index.scss";
import "bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter, Route, Routes} from "react-router-dom"
import HomePage from "./view/home";
import Header from "./components/layouts/hearder";
import Footer from "./components/layouts/footer";


function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Header/>
          <Routes>
            <Route  path="/" element={<HomePage/>}/>
          </Routes>
          <Footer/>
        </BrowserRouter>
    </div>
  );
}

export default App;

