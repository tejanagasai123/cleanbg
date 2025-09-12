import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Result from "./pages/Result";
import Buycredit from "./pages/Buycredit";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className=" mt-5 mx-8 md:mx-10 lg:mx-20 p-2 md:p-5">
<Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/result" element={<Result/>} />
        <Route path="/buycredit" element={<Buycredit/>} />
      </Routes>
      <Footer></Footer>
    </div>
  );
};

export default App;
