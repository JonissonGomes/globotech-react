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
import {Menu} from "./components/Menu"
import Contact from "./pages/Contact";

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
            <Route path="/contatos" element={<Contact/>}></Route>
          </Routes>
      </BrowserRouter>
  </>
      </React.StrictMode>
    </div>
  );
}

export default App;
