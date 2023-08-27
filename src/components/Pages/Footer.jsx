import React from "react";
import SElogo from "../../assets/images/SElogo.svg";
import uparrow from "../../assets/images/uparrow.svg";
import { Link } from "react-scroll";
import { FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className="relative z-10 flex flex-col px-4 md:flex-row justify-center items-center gap-16 bg-[#161616] py-4 pr-5">
        <Link
          to="Home"
          spy={true}
          smooth={true}
          offset={-70}
          duration={3000}
          className="hidden transition-all duration-1000 cursor-pointer hover:scale-110 sm:block"
        >
          <img src={uparrow} />
        </Link>
        <div className="flex items-center ">
          <p className="text-lg font-light text-left font-Kanit ">
            Based in Mumbai, India and Colombo, Sri Lanka
          </p>
        </div>
        <div className="mt-1 ml-5">
          <h1 className="whitespace-nowrap gap-4 font-extrabold font-Kanit uppercase flex justify-center text-[28px] ">
            SYNTAX <img src={SElogo} width="50px" /> ERREUR
          </h1>
        </div>

        <div>
          <p className="text-lg font-light text-left font-Kanit ">
            Software Development Company © 2023
          </p>
        </div>
        <div className="flex items-center space-x-4">
          {/* Twitter Icon */}
          <a
            href="YOUR_TWITTER_PROFILE_LINK"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="text-white text-xl cursor-pointer hover:text-blue-400 transition-colors duration-300" />
          </a>

          {/* LinkedIn Icon */}
          <a
            href="YOUR_LINKEDIN_PROFILE_LINK"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-white text-xl cursor-pointer hover:text-blue-400 transition-colors duration-300" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
