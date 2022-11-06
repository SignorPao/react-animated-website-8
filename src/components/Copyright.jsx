import React from "react";

// import logo
import Logo from "../assets/footer/logo-orange.png";

// get current year
const year = new Date().getFullYear();

const Copyright = () => {
  return (
    <div className="border-t border-white/20">
      <div className="container mx-auto">
        <div className="py-6 flex flex-col items-center gap-y-4 lg:gap-y-0 lg:flex-row lg:justify-between lg:pb-12">
          <div className="flex items-center gap-x-3">
            <a href="#">
              <img className="w-[40px]" src={Logo} alt="logo" />
            </a>
            <h5 className="h5">Bistro Cafe</h5>
          </div>
          <p className="text-base text-center">
            {year} &copy; All Rights Resrved
          </p>
          <p className="text-base text-center">
            Created by{" "}
            <a
              href="https://github.com/SignorPao"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-accent transition"
            >
              @signorPao
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Copyright;
