import React from "react";
import NavigationItem from "./NavigationItem";
import RoundedFoto from'../assets/FOTO_BULAT_YOPIE_ALAMSYAH.png';

const Navbar = () => {
  const navItems = [
    { name: "ABOUT", href: "#about" },
    { name: "EXPERIENCE", href: "#experience" },
    { name: "EDUCATION", href: "#education" },
    { name: "SKILLS", href: "#skill" },
    { name: "INTEREST", href: "#interest" },
  ];

  return (
    <div className="fixed flex flex-col bg-blue-500 left-0 top-0 h-full w-64">
        <div className="flex flex-col h-full p-4 items-center">
          <div className="w-32 h-32 mt-70 mb-6 border-red-100">
              <img src={RoundedFoto} alt="Profile" className="w-32 h-32 border-none rounded-full ring-8 ring-blue-200 border-blue-200"/>
          </div>
          <ul className="flex flex-col gap-3 text-center">
            {navItems.map((item) => (
              <NavigationItem key={item.name} {...item} />
            ))}
          </ul>
        </div>
    </div>
  );
};


export default Navbar;