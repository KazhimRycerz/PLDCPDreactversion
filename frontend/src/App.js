import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./scss/App.scss";
import Home from "./pages/Home/Home.jsx";
import KnowledgeAccount from "./pages/KnowledgeAccount/KnowledgeAccount.jsx";
import PersonalAccount from "./pages/PersonalAccount/PersonalAccount.jsx";
import CareerPlanning from "./pages/CareerPlanning/CareerPlanning.jsx";
import RegisterLogin from "./pages/RegisterLogin/RegisterLogin.jsx";
import AboutTheProfession from "./pages/AboutTheProfession/AboutTheProfession.jsx";
import Page404 from "./pages/Page404/Page404.jsx";
import HeaderContext from "./context/HeaderContext.js";

function App() {
  return (
    <div className="App">
      <Router>
        <HeaderContext.Provider>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/knowledgeaccount" element={<KnowledgeAccount />} />
          <Route path="/personalaccount" element={<PersonalAccount />} />
          <Route path="/careerplanning" element={<CareerPlanning />} />
          <Route path="/abouttheprofession" element={<AboutTheProfession />} />
          <Route path="/registerlogin" element={<RegisterLogin />} />
          <Route path="/*" element={<Page404 />} />
        </Routes>
        </HeaderContext.Provider>
      </Router>
    </div>
  );
}

export default App;
