import React from "react";
import { navLinks } from "../constants";

const Navbar = () => {
  return (
    <header>
      <nav>
        <a href="/">
          <img src="/logo.svg" alt="Apple logo" className="ml-10" />
        </a>
        <ul className="font-bold">
          {navLinks.map(({ label }) => (
            <a key={label} href="/">
              {label}
            </a>
          ))}
        </ul>
        <div className="flex-center gap-3">
          <button>
            <img src="/search.svg" alt="Search" />
          </button>
          <button>
            <img src="/cart.svg" alt="Cart" />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
