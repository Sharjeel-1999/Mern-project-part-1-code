import Home from "./components/Home";
import Navbar from "./components/Navber";
// import { Route } from "react-router-dom";
import Signup from "./components/Signup";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";
// import { Router } from "express";

// yaha per route ko import krengy taky app .js ko ye bta sakein kee is path per is page ko show krwana he

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* yaha per hamein pta kese chalegaa kee hm jb click krengy tww konsa page render hoga iske liy hm yaha per path dengy r navbar mee hm ne jo path dya usko same copy krengy r home kee slash ke sath exact lgayngy */}
      {/* <Router>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Router> */}
    </div>
  );
}

export default App;
