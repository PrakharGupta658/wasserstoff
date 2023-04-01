import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./Component/Dashboard/Dashboard";
import Footer from "./Component/Footer";
import Header from "./Component/Header/Header";
import Overview from "./Component/Overview/Overview";
import ModelComponent from "./Component/Overview/ReactModal/ModelComponent";
import DemoGridMap from "./Component/AntComponents/WorldMap";




function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <ModelComponent/>
        <Routes>
          <Route exact path="/overview" element={<Overview />} />
          <Route exact path="/" element={<Dashboard />} />
          <Route exact path="/statics" element={<ModelComponent />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      
    </>
  );
}

export default App;
