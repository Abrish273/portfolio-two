import {
  Android,
  Email,
  GitHub,
  LinkedIn,
  ViewQuilt,
  Web,
} from "@mui/icons-material";
import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";

const myServices = [
  {
    image: <Web sx={{ color: "#3cefab" }} />,
    title: "Web Development",
    description:
      "Building modern and responsive websites tailored to your needs.",
    work: "12 projects",
  },
  {
    image: <Android sx={{ color: "#3cefab" }} />,
    title: "Mobile App Development",
    description:
      "Creating cross-platform mobile applications for iOS and Android.",
    work: "5 projects",
  },
  {
    image: <ViewQuilt sx={{ color: "#3cefab" }} />,
    title: "Backend development",
    description:
      "Developing different backend apps which are secure, reliable and scalable.",
    work: "10 projects",
  },
  {
    image: <ViewQuilt sx={{ color: "#3cefab" }} />,
    title: "Automation Expert",
    description:
      "Crafting different bots which are helpful in handling day to day repetitive tasks.",
    work: "7 projects",
  },
];
const Services = () => {
  return (
    <div
      className="text-[#FFFFFF]"
      style={{
        // height: "100%",
        background: "#272727",
        // flex: 1,
      }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-start p-4 gap-2 flex-col mt-12"
      >
        <h1 className="text-3xl font-bold mb-4 ml-4 text-[#3cefab]">
          Services
        </h1>
        <div
          className="p-4 gap-4 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 w-full"
          style={{
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          <div className="flex gap-6 flex-col items-start justify-start w-[500px]">
            <motion.p
              className="text-[#3cefab] text-[16px]"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0 * 0.5, duration: 0.7 }}
            >
              introduction
            </motion.p>
            <motion.h1
              className="text-[#FFFFFF] text-[36px] font-bold"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1 * 0.5, duration: 0.7 }}
            >
              Hello! I'M <br /> Abreham Tilahun
            </motion.h1>
            <motion.p
              className="text-[#FFFFFF] text-[20px]"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 2 * 0.5, duration: 0.7 }}
            >
              Every great design being with an even better story
            </motion.p>
            <motion.p
              className="text-[#8d8d8d] text-[15px]"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 3 * 0.5, duration: 0.7 }}
            >
              I am Abreham Tilahun, a highly skilled full-stack developer with
              expertise in MERN stack and Automation Expert and React Native mobile app development.
              With over more than one year of experience, I have successfully completed
              numerous projects that have involved both front-end and back-end
              development.
            </motion.p>
          </div>
          <div className=" flex gap-4 flex-col w-[500px] justify-between">
            {myServices.map((service, index) => (
              <motion.div
                key={index}
                className="bg-[#222222] p-5 flex justify-between items-start"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.5, duration: 0.7 }}
              >
                <div className="flex gap-3 flex-col items-start justify-start">
                  <div className="flex items-start justify-start flex-col">
                    <h2 className="text-[#3cefab] text-[20px] font-bold">
                      {service.title}
                    </h2>
                    <p className="text-[#8d8d8d] text-[14px]">
                      {service.description}
                    </p>
                  </div>
                  <p>{service.work}</p>
                </div>
                <i>{service.image}</i>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Services;
