import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-left">𝓿𝓳𝓹</div>
      <ul className="nav-right">
        <li>
          <HashLink smooth to="/#home">Home</HashLink>
        </li>
        <li>
          <HashLink smooth to="/#about">About Me</HashLink>
        </li>
        <li>
          <Link to="/project">Projects</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
