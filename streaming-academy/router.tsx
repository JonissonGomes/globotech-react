import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home } from "./src/pages/Home/";

export const RouterApplication = () => {
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/param/:id" element={"Caminhos"}></Route>
      <Route path="/query" element={"Caminhos"}></Route>
      <Route path="/about" element={"Caminhos"}></Route>
    </Routes>
  </BrowserRouter>;
};
