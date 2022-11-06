import React, { useState, useEffect, useRef } from "react";
// import { useRef } from "react";

// import comps
import Nav from "./Nav";
import Socials from "./Socials";

// import logo
import LogoWhite from "../assets/header/logo-white.png";

// import motion
import { motion } from "framer-motion";

// import variants
import { fadeIn, staggerContainer } from "../variants";

// header variants
const headerVariants = {
  hidden: {
    padding: "24px 0 18px 0",
    background: "none",
  },
  show: {
    padding: "14px 0 14px 0",
    background: "rgba(0,0,0,0.92)",
    transition: {
      type: "spring",
    },
  },
};

// nav variants
export const navVariants = {
  hidden: {
    clipPath: "circle(5.8% at 50% 0)",
    opacity: 0,
    transition: {
      type: "spring",
      delay: 0.2,
      stiffness: 300,
      damping: 140,
    },
  },
  show: {
    opacity: 1,
    clipPath: "circle(130% at 50% 0)",
    transition: {
      type: "spring",
      stiffness: 80,
    },
  },
};

const Header = () => {
  // header state
  const [isActive, setIsActive] = useState(false);

  // nav state
  const [nav, setNav] = useState(false);

  // menu btn
  const btnRef = useRef();

  // event listener
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setIsActive(true) : setIsActive(false);
    });
  });

  // click outside to close menu
  useEffect(() => {
    const closeDropdown = (e) => {
      if (e.path[0] !== btnRef.current) {
        setNav(false);
      }
    };

    document.body.addEventListener("click", closeDropdown);

    return () => document.body.removeEventListener("click", closeDropdown);
  }, []);

  return (
    <motion.header
      variants={headerVariants}
      initial="hidden"
      animate={isActive ? "show" : ""}
      className="fixed w-full z-50 py-4"
    >
      <motion.div
        variants={staggerContainer(0.3, 1)}
        initial="hidden"
        animate={"show"}
        className="container mx-auto"
      >
        <div className="flex justify-between items-center px-4 lg:px-0 relative text-white">
          {/* menu button */}
          <motion.div
            variants={fadeIn("down", "tween", 1, 1.4)}
            className={`${
              nav ? "gap-y-0" : "gap-y-2"
            } flex flex-col items-center justify-center w-12 h-12 p-3 order-2 lg:order-none cursor-pointer border-2 rounded-full`}
            onClick={() => setNav((prev) => !prev)}
            ref={btnRef}
          >
            {/* bar 1 */}
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: nav ? -45 : 0, translateY: nav ? 2 : 0 }}
              className="w-full h-[2px] bg-white"
            />

            {/* bar 2 */}
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: nav ? 45 : 0 }}
              className="w-full h-[2px] bg-white"
            />
          </motion.div>

          {/* logo */}
          <motion.div
            className="order-1 lg:order-none lg:ml-[14rem]"
            variants={fadeIn("down", "tween", 1.4, 1.4)}
          >
            <a href="#">
              <img
                className={`${
                  isActive
                    ? "w-[50px] h-[50px]"
                    : "w-[80px] h-[80px] lg:w-[100px] lg:h-[100px]"
                } duration-300`}
                src={LogoWhite}
                alt="logo"
              />
            </a>
          </motion.div>

          {/* socials icons */}
          <motion.div
            variants={fadeIn("down", "tween", 1.6, 1.4)}
            className="hidden lg:flex"
          >
            <Socials />
          </motion.div>

          {/* nav */}
          <motion.div
            variants={navVariants}
            initial="hidden"
            animate={nav ? "show" : ""}
            className="absolute bg-accent w-[310px] h-[50vh] right-0 lg:left-0 top-[80px] rounded-lg shadow-xl"
          >
            <Nav click={() => setNav(!nav)} />
          </motion.div>
        </div>
      </motion.div>
    </motion.header>
  );
};

export default Header;
