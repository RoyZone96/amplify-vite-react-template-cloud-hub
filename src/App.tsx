import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopNav from "./Components/TopNav/TopNav";
import Landing from "./Routes/Landing/Landing";
import Profile from "./Routes/Profile/Profile";
import Tracker from "./Routes/Tracker/Tracker";
import Login from "./Routes/Login/Login";
import Registration from "./Routes/Registration/Registration";
import "./App.css";
import Footer from "./Components/Footer/Footer";
// import type { Schema } from "../amplify/data/resources";
// import { generateClient } from "aws-amplify/data";



function App() {
 

  return (
    <main>
      <Router>
        <TopNav />
        <section className="app-body">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/signup" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/tracker" element={<Tracker />} />
        </Routes>
        </section>
        <Footer />
      </Router>
      
    </main>
  );
}

export default App;