import React from 'react'
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Header = () => {
  return (
    <nav>
      <h1>⚡ShopEase.</h1>
      <main>
        <HashLink to={"/#home"}>Home</HashLink>
        <Link to={"/contact"}>Contact</Link>
        <HashLink to={"/#todo"}>To-do</HashLink>
        <HashLink to={"/#cart"}>Shop Now</HashLink>
        <HashLink to={"/#weather"}>Weather</HashLink>
      </main>
    </nav>
  );
}

export default Header;