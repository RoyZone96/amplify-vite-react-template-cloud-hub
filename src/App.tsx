import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopNav from "./Components/TopNav";
import Landing from "./Routes/Landing";
import Profile from "./Routes/Profile";
import ProjGallery from "./Routes/ProjGallery";
import Tracker from "./Routes/Tracker";
import Footer from "./Components/Footer";
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
          <Route path="/projgallery" element={<ProjGallery />} />
          <Route path="/tracker" element={<Tracker />} />
        </Routes>
        <Footer />
      </Router>
      
    </main>
  );
}

export default App;