// import React from "react";
// import { Link } from "react-router-dom";
// const NavBar = () => {
//   return (
//     <nav className="navbar navbar-expand-lg bg-body-tertiary">
//       <div className="container-fluid">
//         <Link className="navbar-brand" to="/">
//           Navbar
//         </Link>
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarSupportedContent"
//           aria-controls="navbarSupportedContent"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//             <li className="nav-item">
//               <Link className="nav-link active" aria-current="page" to="/">
//                 Home
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/aboutus">
//                 About Us
//               </Link>

//               <Link className="nav-link" to="/contactus">
//                 Contact Us
//               </Link>
//             </li>
//           </ul>
//           <form className="d-flex" role="search">
//             <input
//               className="form-control me-2"
//               type="search"
//               placeholder="Search"
//               aria-label="Search"
//             />
//             <button cclassNameName="btn btn-outline-success" type="submit">
//               Search
//             </button>
//           </form>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default NavBar;

import React, { useState } from "react"
import "./navbar.css"
import { Link } from "react-router-dom"
// import { FaBars } from "react-icons/fa"
// import { ImCross } from "react-icons/im"

const NavBar = () => {
//   const [Mobile, setMobile] = useState(false)
  return (
    <>
      <nav className='navbar'>
        {/* <h3 className='logo'>Logo</h3> */}
        {/*
        if large screen ma xa bhane Mobile add huxa
        if mobile screen ma xa bhane nav-links-mobile add huxa
        */}
        {/* <ul className={Mobile ? "nav-links-mobile" : "nav-links"} onClick={() => setMobile(false)}> */}
          <Link to='/home' className='home'>
            <li>Home</li>
          </Link>
          <Link to='/aboutus' className='aboutus'>
            <li>About Us</li>
          </Link>
          <Link to='/ourproducts' className='ourproducts'>
            <li>OurProducts</li>
          </Link>
         
          <Link to='/contactus' className='contactus'>
            <li>ContactUs</li>
          </Link>

          <Link to='/address' className='address'>
            <li>Address</li>
          </Link>

          {/* <Link to='/staticmapview' className='staticmapview'>
            <li>StaticMapViewMapView</li>
          </Link> */}

          <Link to='/adminlogin' className='adminlogin'>
            <li>Login</li>
          </Link>
        {/* </ul> */}
        {/* 
        whenever we click on button = setMobile(!Mobile) ==  is mobile oppsite to setMobile 
        */}
        {/* <button className='mobile-menu-icon' onClick={() => setMobile(!Mobile)}>
          {Mobile ? <ImCross /> : <FaBars />}
        </button> */}
      </nav>
    </>
  )
}
export default NavBar


         