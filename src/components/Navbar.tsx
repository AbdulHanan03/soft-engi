import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="relative h-20 pl-20 flex w-full shadow-lg mb-2 ">
        <Link to="/" className="p-2 hover:text-blue-600"><img className = "h-16 p-2 self-center" src="src/images/logo.png"/></Link>
        <div className="self-center absolute right-1/4 ">
          
        <input type="text" placeholder="Search" className="shadow-md shadow-slate-200 w-96 rounded-3xl border-2 p-4"/>
        </div>
        <div className="self-center absolute right-8 flex space-x-4">
        <Link to="/contact" className="p-2 hover:text-blue-600">Contact</Link>
      </div>
    </nav>
  )
}

export default Navbar;