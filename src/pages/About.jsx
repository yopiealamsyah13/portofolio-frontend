import React from "react";
import LinkedinIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";

const About = () => {
  return (
    <section id="about" className="flex flex-col min-h-screen ml-64 p-8 border-b-1">
      <div className="my-auto">
      <h2 className="text-7xl font-bold text-gray-700 mb-4">YOPIE <span className=" text-blue-600">ALAMSYAH</span></h2>
      <div className="uppercase font-medium text-base text-gray-500 mb-12">
        Pondok Ranji Tangerang Selatan · 0821-1001-2366 ·
        <a href="" className="text-blue-500"> yopiealamsyah13@gmail.com</a>
      </div>
      <p className="text-gray-500 text-md mb-12">
        I am an honest, cheerful, and humble individual who is always eager to learn and grow. My passion for web programming drives me to continuously explore new technologies and improve my skills. I enjoy collaborating with others, sharing knowledge, and finding creative solutions to challenges. With a positive attitude and a strong commitment to self-improvement, I strive to contribute meaningfully to every project I undertake.
      </p>
      <ul className="flex gap-2">
        <li className="inline">
            <a href="" className="text">
            <InstagramIcon className="w-10 h-10"/>
            </a>
        </li>
        <li className="inline">
            <TwitterIcon/>
        </li>
        <li className="inline">
            <LinkedinIcon/>
        </li>
        <li className="inline">
            <GitHubIcon/>
        </li>
      </ul>
      </div>
    </section>
  );
};

export default About;