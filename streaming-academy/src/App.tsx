import React from "react";
import "./App.css";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import { Home } from "./pages/Home/";
import { Movies } from "./pages/Movies/";
import { Series } from "./pages/Series/";
import { Footer } from "./pages/Footer/";
import {Menu} from "./components/Menu"

function App() {
  return (
    <div className="App">
      <React.StrictMode>
      <>
        <BrowserRouter>
        <Menu/>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/movies" element={<Movies/>}></Route>
            <Route path="/series" element={<Series/>}></Route>
            <Route path="/contatos" element={<Footer/>}></Route>
          </Routes>
      </BrowserRouter>
  </>
      </React.StrictMode>
    </div>
  );
}

export default App;
