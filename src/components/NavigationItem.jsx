import React from "react";

const NavigationItem = ({ name, href }) => {
  return (
    <li>
      <a
        href={href}
        className="text-blue-100 hover:text-white text-2xl font-medium transition-colors"
      >
        {name}
      </a>
    </li>
  );
};

export default NavigationItem;