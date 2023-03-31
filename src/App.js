import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./Component/Dashboard/Dashboard";
import Footer from "./Component/Footer";
import Header from "./Component/Header/Header";
import Overview from "./Component/Overview/Overview";
import ModelComponent from "./Component/Overview/ReactModal/ModelComponent";




function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Overview />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/statics" element={<ModelComponent />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      
    </>
  );
}

export default App;
