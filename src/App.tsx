import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopNav from "./Components/TopNav/TopNav";
import Landing from "./Routes/Landing";
import Profile from "./Routes/Profile";
import Portfolio from "./Routes/Portfolio";
import Tracker from "./Routes/Tracker";
import Footer from "./Components/Footer/Footer";
import type { Schema } from "../amplify/data/resources";
import { generateClient } from "aws-amplify/data";



function App() {
 

  return (
    <main>
      <Router>
        <TopNav />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/tracker" element={<Tracker />} />
        </Routes>
        <Footer />
      </Router>
      
    </main>
  );
}

export default App;