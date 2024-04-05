import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { Email, GitHub, LinkedIn, Menu } from "@mui/icons-material";

import { motion } from "framer-motion";
import { Stack, SwipeableDrawer } from "@mui/material";
const Home = () => {
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

  // Function to update screen width state
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  // Effect hook to handle window resize
  React.useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [state, setState] = React.useState({ right: false });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  // Define gap value based on screen width
  const gapValue = windowWidth < 1035 ? 8 : 12;
  const display = windowWidth < 907 ? "none" : "flex";
  const displayTwo = windowWidth < 842 ? "none" : "flex";
  return (
    <div className="md:h-full w-full bg-[#272727] text-[#FFFFFF]">
      <nav
        className="flex items-center p-4"
        style={{ position: "sticky", top: 0, background: "#272727" }}
      >
        <div>
          <motion.h2
            className=" text-4xl"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0, duration: 0.3, type: "spinner" }}
          >
            <Link to={"/"} className=" font-serif">
              Abreham Tilahun
            </Link>
          </motion.h2>
        </div>
        <div className=" flex-grow"></div>
        <ul
          className="flex items-center justify-start gap-${gapValue} max-sm:hidden"
          style={{ display: displayTwo }}
        >
          <motion.li
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0, duration: 0.6, type: "spinner" }}
          >
            <Link to={"/services"} className=" text-lg">
              &lt; Services &gt;
            </Link>
          </motion.li>
          <motion.li
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0, duration: 0.9, type: "spinner" }}
          >
            <Link to={"/works"} className=" text-lg">
              &lt; Works &gt;
            </Link>
          </motion.li>
          <motion.li
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0, duration: 1.2, type: "spinner" }}
          >
            <Link to={"/portfolio"} className=" text-lg">
              &lt; Portfolio &gt;
            </Link>
          </motion.li>
          <motion.li
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0, duration: 1.5, type: "spinner" }}
          >
            <Link to={"/contacts"} className=" text-lg">
              &lt; Contacts &gt;
            </Link>
          </motion.li>
        </ul>
        <div className=" flex-grow"></div>
        <div
          className=" flex items-center flex-grow-[.6] max-sm:hidden"
          style={{ display: display }}
        >
          <motion.span
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0, duration: 1.8, type: "spinner" }}
          >
            <div
              onClick={() =>
                window.open("mailto:abreham.tilahun2027@gmail.com")
              }
              className="flex items-center text-sm gap-1 cursor-pointer"
            >
              <Email sx={{ fontSize: "18px" }} />
              <span>Gmail</span>
            </div>
          </motion.span>
          <div className=" flex-grow"></div>
          <motion.span
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0, duration: 2.1, type: "spinner" }}
          >
            <div
              onClick={() => {
                const linkedinUrl =
                  "https://linkedin.com/in/abrehamtilahun2027";
                const urlToOpen = "https://linkedin.com/in/abrehamtilahun2027";
                if (urlToOpen === linkedinUrl) {
                  window.open(urlToOpen, "_blank");
                } else {
                  window.location.href = urlToOpen;
                }
              }}
              className="flex items-center text-sm gap-1 cursor-pointer"
            >
              <LinkedIn sx={{ fontSize: "18px" }} />
              <span>Linkedin</span>
            </div>
          </motion.span>
          <div className=" flex-grow"></div>
          <motion.span
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0, duration: 2.4, type: "spinner" }}
          >
            <div
              onClick={() => window.open("https://github.com/Abrish273")}
              className="flex items-center text-sm gap-1 cursor-pointer"
            >
              <GitHub sx={{ fontSize: "18px" }} />
              <span>Github</span>
            </div>
          </motion.span>
        </div>
        <Menu
          sx={{ color: "white", display: windowWidth > 840 ? "none" : "flex" }}
          onClick={toggleDrawer("right", true)}
        />
      </nav>
      <div
        style={{
          // display: !isTablet ? 'none' : 'hidden',
          background: "#1f1f1f",
        }}
      >
        <SwipeableDrawer
          anchor="right"
          open={state.right}
          onClose={toggleDrawer("right", false)}
          onOpen={toggleDrawer("right", true)}
          sx={{ zIndex: 999 }}
        >
          <Stack
            gap={2}
            sx={{
              background: "black",
              height: "100%",
            }}
          >
            <Stack
              direction="column"
              sx={{
                margin: "20px 25px",
                color: "white",
              }}
              gap={2}
            >
              <Link to={"/services"} className=" text-lg">
                &lt; Services &gt;
              </Link>

              <Link to={"/works"} className=" text-lg">
                &lt; Works &gt;
              </Link>

              <Link to={"/portfolio"} className=" text-lg">
                &lt; Portfolio &gt;
              </Link>

              <Link to={"/contacts"} className=" text-lg">
                &lt; Contacts &gt;
              </Link>
            </Stack>
          </Stack>
        </SwipeableDrawer>
      </div>
      {<Outlet />}
    </div>
  );
};

export default Home;
