import { Email, GitHub, LinkedIn } from "@mui/icons-material";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import neurogen from "../assets/neurogen.png";
import recipe from "../assets/recipe.png";
import geez from "../assets/geez.png";
import music from "../assets/music.png";
const projects = [
  {
    id: 1,
    title: "Recipe",
    description:
      "Welcome to our Recipe App! Explore diverse recipes, choose your favorites, and enjoy seamless interaction between customers and businesses. Discover easy navigation, stunning visuals, and expert tips for a delightful cooking experience. Get cooking with us today!",
    technologies: ["React", "express", "Node.js", "MongoDB"],
    image: recipe,
    link: "https://recipe-opal-nine.vercel.app/",
  },
  {
    id: 2,
    title: "NeuroGen AI",
    description:
      "NeuroGenAI is an AI-powered platform dedicated to health assessment, focusing particularly on stroke vulnerability. Users can swiftly evaluate their health status and receive personalized feedback aimed at enhancing their well-being. Leveraging cutting-edge technology, NeuroGenAI empowers individuals to take proactive steps towards healthier lives by providing actionable insights and guidance. Take control of your health journey with NeuroGenAI today.",
    technologies: [
      "React",
      "express",
      "flask",
      "machine learning",
      "Node.js",
      "MongoDB",
    ],
    image: neurogen,
    link: "https://neurogenai.vercel.app/",
  },
  {
    id: 3,
    title: "Geez Bank",
    description:
      "Geez Bank is a streamlined banking application offering essential financial services. Seamlessly manage your accounts, transfer funds, and monitor transactions with ease. With a user-friendly interface and robust security features, Geez Bank ensures convenient and secure banking at your fingertips. Experience hassle-free banking and take control of your finances with Geez Bank today.",
    technologies: ["React", "express", "Node.js", "MongoDB"],
    image: geez,
    link: "https://geezbank.vercel.app/",
  },
  {
    id: 4,
    title: "Music Website",
    description:
      "Welcome to our Music App Website, your gateway to a world of melodies and rhythms! Dive into an immersive musical experience where you can discover, stream, and enjoy your favorite tunes anytime, anywhere. From trending hits to timeless classics, our platform offers a vast library of songs catering to every mood and taste. Whether you're a music aficionado or just looking to groove to the latest beats, our user-friendly interface and seamless navigation make it easy to find the perfect soundtrack for any moment. Join us on a musical journey and let the rhythm move you",
    technologies: ["React", "express", "Node.js", "MongoDB"],
    image: music,
    link: "https://song-beka-7e17a0.netlify.app/",
  },
];
const Works = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openFullImage = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  const closeFullImage = () => {
    setSelectedImage(null);
  };
  return (
    <div className=" w-full bg-[#272727] text-[#FFFFFF]">
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-8 text-[#3cefab]">My Work</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="bg-[#222222] rounded-lg overflow-hidden shadow-md"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover cursor-pointer"
                onClick={() => openFullImage(project.image)}
              />
              <div className="p-4">
                <h2 className="text-xl font-bold mb-2 text-[#3cefab]">
                  {project.title}
                </h2>
                <p className="text-gray-600">{project.description}</p>
                <p className="text-gray-700 mt-2">
                  Technologies: {project.technologies.join(", ")}
                </p>
                <div
                  className="text-blue-500 mt-4 inline-block cursor-pointer"
                  onClick={() => window.open(project.link)}
                >
                  View Details
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="max-w-screen-md max-h-screen-md overflow-hidden"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
            >
              <img
                src={selectedImage}
                alt="Full Image"
                className="w-full h-full object-contain"
              />
              <button
                className="absolute top-4 right-4 text-[#ff4949]"
                onClick={closeFullImage}
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Works;
