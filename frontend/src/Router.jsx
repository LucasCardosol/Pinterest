import React from "react";
import { BrowserRouter , Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Header from "./components/Header";
import PhotoUnique from "./pages/PhotoUnique";
import User from "./pages/User";

const Router = () => {
  return (
    <BrowserRouter>
      <Header/>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/pin/:id" element={<PhotoUnique />}/>
            <Route path="/User" element={<User/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default Router;

