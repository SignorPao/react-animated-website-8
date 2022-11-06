import React from "react";

// import data
import { navData } from "../data";

const Nav = ({ click }) => {
  return (
    <nav className="w-full h-full py-6">
      <ul className="h-full flex flex-col justify-around items-center">
        {navData.map((item, index) => {
          return (
            <li key={index}>
              <a
                className="text-xl capitalize font-primary italic hover:text-dark transition-all duration-300"
                href={`#${item.href}`}
                onClick={click}
              >
                {item.name}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
