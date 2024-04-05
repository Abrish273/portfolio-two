import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import anonyms from "../assets/pngtree.png";
import reactIcon from "../assets/React.png";
import flutterIcon from "../assets/flutter.png";
import figmaIcon from "../assets/Figma.png";
import materialIcon from "../assets/material.png";
import laravelIcon from "../assets/express.png";
import tailwindIcon from "../assets/tailwind.png";
import jsIcon from "../assets/js.png";
import cssIcon from "../assets/css.png";
import htmlIcon from "../assets/html.png";
import { Link } from "react-router-dom";
import { Email, GitHub, LinkedIn } from "@mui/icons-material";
import CV from "../assets/abrehamcv.pdf";

const Homes = () => {
  const [counterValue, setCounterValue] = useState(0);
  const [serviceValue, setServiceValue] = useState(0);
  useEffect(() => {
    const targetValue = 11;
    const duration = 2000;
    const interval = Math.max(duration / targetValue, 50);

    const updateCounter = () => {
      setCounterValue((prevValue) =>
        prevValue < targetValue ? prevValue + 1 : targetValue
      );
    };
    const intervalId = setInterval(updateCounter, interval);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const targetValue = 5;
    const duration = 1000;
    const interval = Math.max(duration / targetValue, 50);

    const updateCounter = () => {
      setServiceValue((prevValue) =>
        prevValue < targetValue ? prevValue + 1 : targetValue
      );
    };
    const intervalId = setInterval(updateCounter, interval);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        gap: 5,
      }}
    >
      {/* <div className="md:h-[89vh] grid grid-cols-1 md:grid-cols-2 "> */}
      <div className="flex items-start flex-col gap-6 flex-grow  h-[89vh]">
        <div className="flex items-center justify-start flex-col gap-4 w-full  p-4">
          <div className="flex items-start justify-start flex-col gap-4 md:w-[500px] p-4">
            <motion.p
              className=" text-2xl bg-[#3cefab] text-[#272727] font-bold px-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.5, type: "spinner" }}
            >
              FullStack Developer
            </motion.p>
            <div>
              <motion.h1
                className=" text-[40px] font-medium"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.9, type: "spinner" }}
                style={{ fontSize: "2rem" }}
              >
                Coding is my passion
              </motion.h1>
              <motion.h1
                className=" text-[40px] font-medium"
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.9, type: "spinner" }}
                style={{ fontSize: "2rem" }}
              >
                Show me your code...
              </motion.h1>
            </div>
            <motion.p
              className="text-[gray]"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.5, duration: 1.2, type: "spinner" }}
              // style={{ marginRight: "10rem" }}
            >
              I create and build things with an emphasis on details. I'm
              passionate about what I am doing.
            </motion.p>
            <div className="flex items-start justify-start gap-2 overflow-hidden">
              <motion.div
                className="w-[3px] h-[30px] bg-[#3cefab]"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.5, type: "spinner" }}
              ></motion.div>
              <motion.span
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 2, duration: 1.5, type: "spinner" }}
              >
                <Link to={"/"} className=" text-2xl text-[#3cefab] font-bold">
                  SEE MY WORK
                </Link>
              </motion.span>
            </div>
            <motion.span
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 2, duration: 1.5, type: "spinner" }}
            >
              <Link to={CV} target="_blank" download>
                <button>Download my CV</button>
              </Link>
            </motion.span>
            <div
              className=" flex items-center flex-grow-[.6] gap-6 "
              //   style={{ display: display }}
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
                    const urlToOpen =
                      "https://linkedin.com/in/abrehamtilahun2027";
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
            {/* </div> */}
            <div className="flex gap-4">
              <div className="flex items-end gap-2 bg-[#373737] p-2 rounded-[4px]">
                <span className="text-6xl font-medium">
                  {serviceValue.toString().padStart(2, "0")}
                </span>
                <span>services</span>
              </div>
              <div className="flex items-end gap-2 bg-[#373737] p-2 rounded-[4px]">
                <span className="text-6xl font-medium">
                  {counterValue.toString().padStart(3, "0")}
                </span>
                <span>works</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 flex-grow flex items-center mt-12  flex-col relative h-[89vh] overflow-hidden">
        <motion.div
          className="w-[400px] h-[400px] rounded-[50%]"
          style={{
            background:
              "linear-gradient(180deg, #373737 0%, rgba(27, 27, 27, 0.49) 50%, rgba(255, 255, 255, 0) 100%)",
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1, duration: 0.5, type: "spinner" }}
        >
          <motion.img
            src={anonyms}
            alt="anonyms"
            style={{ objectFit: "cover" }}
            className=" absolute bottom-0 right-auto left-auto h-[60vh]"
            initial={{ y: 1000, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 2, duration: 1.5, type: "spinner" }}
          />
          <motion.img
            src={reactIcon}
            alt="reactIcon"
            className=" w-[30px] absolute  top-auto left-[30%] "
            initial={{ rotateZ: 0, opacity: 0 }}
            animate={{ rotateZ: 360, opacity: 1 }}
            transition={{
              delay: 2,
              duration: 1.5,
              type: "spinner",
              repeat: Infinity,
            }}
          />
          <motion.img
            src={flutterIcon}
            alt="flutterIcon"
            className=" w-[30px] absolute right-[30%] "
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 0.8, opacity: 1 }}
            transition={{
              delay: 2,
              duration: 1,
              type: "spinner",
              repeat: Infinity,
            }}
          />
          <motion.img
            src={figmaIcon}
            alt="figmaIcon"
            className=" w-[30px] absolute  left-[15%] top-[50%]"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              delay: 2,
              duration: 1.5,
              type: "spinner",
              stiffness: 700,
              damping: 30,
            }}
          />
          <motion.img
            src={materialIcon}
            alt="materialIcon"
            className=" w-[30px] absolute  bottom-[50%] right-[15%]"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              delay: 2,
              duration: 1.5,
              type: "spinner",
              stiffness: 700,
              damping: 30,
            }}
          />
          <motion.img
            src={laravelIcon}
            alt="laravelIcon"
            className=" w-[60px] absolute  bottom-[20%] right-[24%]"
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              delay: 2,
              duration: 1.5,
              type: "tween",
              repeat: Infinity,
            }}
          />
          <motion.img
            src={tailwindIcon}
            alt="tailwindIcon"
            className=" w-[30px] absolute bottom-[20%] left-[25%]"
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              delay: 2,
              duration: 1.5,
              type: "tween",
              repeat: Infinity,
            }}
          />

          <motion.img
            src={htmlIcon}
            alt="tailwindIcon"
            className=" w-[30px] absolute top-[50%] left-[30%]"
            initial={{ rotateZ: 0, opacity: 0 }}
            animate={{ rotateZ: 360, opacity: 1 }}
            transition={{ delay: 2, duration: 1.5, type: "tween" }}
          />
          <motion.img
            src={cssIcon}
            alt="tailwindIcon"
            className=" w-[30px] absolute top-[25%] left-[50%]"
            initial={{ rotateZ: 0, opacity: 0 }}
            animate={{ rotateZ: -360, opacity: 1 }}
            transition={{ delay: 2, duration: 1.5, type: "tween" }}
          />
          <motion.img
            src={jsIcon}
            alt="tailwindIcon"
            className=" w-[40px] absolute bottom-[45%] right-[30%]"
            initial={{ rotateZ: 0, opacity: 0 }}
            animate={{ rotateZ: 360, opacity: 1 }}
            transition={{ delay: 2, duration: 1.5, type: "tween" }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Homes;
