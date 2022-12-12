import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to={`/`}>Accueil</Link>
        </li>
        <li>
          <Link to={`/clients`}>Clients</Link>
        </li>

        <li className="text-red-500">
          <Link to={`/products`}>Produits</Link>
        </li>
      </ul>
    </nav>
  );
};
