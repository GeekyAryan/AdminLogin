import './App.css';
import { BrowserRouter as Router, Switch, Route,Routes } from "react-router-dom"

import NavBar from './Components/NavBar';
import Home from './Components/Home';
import AboutUs from './Components/AboutUs';
import ContactUs from './Components/ContactUs';
import AdminLogin from './Components/AdminLogin';
import  Address from './Components/Address';
import StaticMapView from './Components/StaticMapView';
import OurProducts from './Components/OurProducts';

function App() {
  return (


<div>
 
  <Router>
  <NavBar />
    <Routes>
    {/* <Route element={<NavBar/>} path="/" /> */}
    <Route element={<Home/>} path="/home" />
    <Route element={<AboutUs/>} path="/aboutus" />
    <Route element={<OurProducts/>} path="/ourproducts" />
           <Route element={<ContactUs/>} path={"/contactus"} />
           <Route element={<AdminLogin/>} path={"/adminlogin"} />
           <Route element={<Address/>} path={"/address"} />
           {/* <Route element={<StaticMapView/>} path={"/staticmapview"} /> */}
        
    </Routes>
  </Router>
</div>

  )}

export default App;


