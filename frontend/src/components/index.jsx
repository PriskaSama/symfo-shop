import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav>
      <ul>
        <li className="bg-pink-500 uppercase">
          <Link to={`/`}>Accueil</Link>
        </li>
        <li>
          <Link to={`/clients`}>Clients</Link>
        </li>

        <li>
          <Link to={`/products`}>Produits</Link>
        </li>
      </ul>
    </nav>
  );
};
