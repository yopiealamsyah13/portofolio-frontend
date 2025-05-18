import React from "react";

const NavigationItem = ({ name, href }) => {
  return (
    <li>
      <a
        href={href}
        className="text-blue-200 hover:text-white text-sm font-medium transition-colors"
      >
        {name}
      </a>
    </li>
  );
};

export default NavigationItem;