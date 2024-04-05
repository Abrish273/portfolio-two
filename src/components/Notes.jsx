import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Email, GitHub, LinkedIn } from "@mui/icons-material";
import A2SV from "../assets/a2sv.jpg";
import AA from "../assets/aa.png";
import Aris from "../assets/aris.png";

// const notes = [
//   {
//     id: 1,
//     title: "Meeting Notes",
//     content:
//       "Discussed the project roadmap and assigned tasks to team members. The next meeting is scheduled for Friday at 3 PM.",
//   },
//   {
//     id: 2,
//     title: "Project Ideas",
//     content:
//       "Brainstormed ideas for the upcoming project. We are considering implementing new features and improving user experience.",
//   },
//   {
//     id: 3,
//     title: "Client Feedback",
//     content:
//       "Received positive feedback from the client about the latest prototype. They are impressed with the design and functionality.",
//   },
// ];
const certificates = [
  {
    id: 1,
    title: "A2SV certificate",
    description:
      "Certificate of recognition for GenerativeAI competition as a semi finalist",
    image: A2SV,
  },
  {
    id: 2,
    title: "Automation Anywhere certificate",
    description: "Certificate for Certified Automation RPA professional",
    image: AA,
  },
  {
    id: 3,
    title: "Aris professional certificate",
    description:
      "Certification for Software AG Certified ARIS Administrator Professional",
    image: Aris,
  },
];
const Notes = () => {
  return (
    <div style={{ height: "100%" }}>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-8 text-[#3cefab]">
          My Portofolio
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-24 gap-8">
          {certificates.map((c) => (
            <motion.div
              key={c.id}
              className="bg-[#222222] rounded-lg overflow-hidden shadow-md"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5 }}
            >
              <img
                src={c.image}
                alt={c.title}
                className="w-full h-48 object-cover cursor-pointer"
              />
              <div className="p-4">
                <h2 className="text-xl font-bold mb-2 text-[#3cefab]">
                  {c.title}
                </h2>
                <p className="text-gray-600">{c.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <div
          style={{ backgroundColor: "#272727", width: "100%", height: "36px" }}
        />
        <div
          style={{ backgroundColor: "#272727", width: "100%", height: "7px" }}
        />
      </div>
    </div>
  );
};

export default Notes;
