// import React, { useEffect, useState } from "react";
// import logo from "../assets/logo.svg";
// import { Link } from "react-router-dom";
// const Hero = () => {
//     useEffect(() => {
//         const words = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//         const h2 = document.getElementById("h2");

//         const handleMouseOver = (e) => {
//             let iteration = 0;
//             const interval = setInterval(() => {
//                 h2.innerText = h2.innerText
//                     .split("")
//                     .map((item, index) => {
//                         if (index < iteration) {
//                             return h2.dataset.value[index];
//                         }
//                         return words[Math.floor(Math.random() * 26)];
//                     })
//                     .join("");

//                 if (iteration >= h2.dataset.value.length) {
//                     clearInterval(interval);
//                 }
//                 iteration += 1 / 3;
//             }, 30);
//         };

//         h2.addEventListener("mouseover", handleMouseOver);

//         return () => {
//             h2.removeEventListener("mouseover", handleMouseOver);
//         };
//     }, []);
//     const [portfolioItems] = useState([
//         {
//             id: 1,
//             title: "Edirr / Life Insurance",
//             description:
//                 "Think of life insurance like a safety net. It could pay out a cash sum if you were to pass away while covered by the policy. Or if you're diagnosed with a terminal illness where life expectancy is 12 months or less. Choose between Life Insurance, where the amount of cover stays the same, or Decreasing Life Insurance where the cover reduces roughly inline with how a repayment mortgage reduces.",
//         },
//         {
//             id: 2,
//             title: "Leave management System",
//             description:
//                 "A Leave Management System is a digital tool that automates the process of requesting, approving, and tracking employee leave within an organization. It provides an efficient way for employees to submit leave requests, enables managers to review and approve them, and maintains accurate records of leave balances and usage. The system streamlines workflows, reduces paperwork, and ensures compliance with company leave policies.",
//         },
//         {
//             id: 3,
//             title: "NeuroGen AI",
//             description:
//                 "NeuroGen AI is more than a risk identification tool – it's an action-oriented web app. Following your risk assessment, we deliver actionable insights through clear charts, tracking your health journey over time. Our platform empowers you to turn knowledge into empowerment, providing personalized recommendations and engaging visual representations. Take the first step in understanding your stroke risk and join us in the fight against stroke.",
//         },
//         {
//             id: 4,
//             title: "Asquala School Management System",
//             description:
//                 "Developed a comprehensive school management software to automate administrative tasks, enhance communication between teachers and students, and manage classes, exams, and study materials. Enabled teachers to create classes, send materials, and interact with students. Students could join classes, view materials, participate in Q&A, and receive notifications.",
//         },
//         {
//             id: 5,
//             title: "Ge'ez Bank website",
//             description:
//                 "The Ge'ez Bank website stands as a multifaceted platform, offering a suite of features to enhance user experience. With dedicated uploaders for Vacancies, Tenders, News, Gallery, and Annual Reports, it provides a streamlined approach to disseminate and access crucial information. The platform extends beyond, incorporating sections for services like loans, presenting a comprehensive and user-centric web environment that caters to the diverse needs of both visitors and stakeholders.",
//         },
//         {
//             id: 5,
//             title: "Generator Management System",
//             description:
//                 "The Generator Management System facilitates seamless uploading of generator details, including model, serial number, capacity, and more. With map and table views, it enhances visual tracking and data organization. Tailored for multiple user types, it ensures diverse stakeholders can efficiently access and manage generator information, contributing to streamlined operations and maintenance oversight.",
//         },
//     ]);

//     return (
//         <div className="w-full bg-[#495464] flex flex-col gap-16">
//             <div
//                 className="py-10 flex items-center"
//                 style={{ paddingLeft: "10%", paddingRight: "10%" }}
//             >
//                 <img src={logo} alt="logo" />
//                 <div className=" flex-grow"></div>
//                 <div className=" flex items-center gap-3">
//                     <Link className="text-[#F6B17A] hover:text-gray-400">About Me</Link>
//                     <Link className="text-[#E8E8E8] hover:text-gray-400">Portfolio</Link>
//                     <Link className="text-[#E8E8E8] hover:text-gray-400">Resume</Link>
//                     <Link className="text-[#E8E8E8] hover:text-gray-400">Skills</Link>
//                     <Link className="text-[#E8E8E8] hover:text-gray-400">Services</Link>
//                     <Link className="text-[#E8E8E8] hover:text-gray-400">Contact</Link>
//                 </div>
//             </div>
//             <div
//                 className="flex items-center flex-col"
//                 style={{ paddingLeft: "10%", paddingRight: "10%" }}
//             >
//                 <div className="sm:w-fit flex flex-col gap-4 md:w-1/2 lg:w-1/3 items-start">
//                     <h2
//                         className=" font-medium text-3xl text-[#BBBFCA] "
//                         id="h2"
//                         data-value={"About Me"}
//                     >
//                         About Me
//                     </h2>
//                     <p className=" text-[#cdcdcb]">
//                         Hello! I'm Beka Tegene, a passionate Software Developer based in
//                         Addis Ababa, Ethiopia. I have a strong background in website
//                         development and specialize in Frontend. As a dedicated Information
//                         Systems graduate with a robust academic foundation from Addis Ababa
//                         University, I am passionate about leveraging technology to solve
//                         real-world challenges. Explore my portfolio to see my work and
//                         skills in action
//                     </p>
//                     <button className=" py-1 px-2 rounded bg-[#F6B17A] outline-none text-[#F4F4F2] uppercase shadow-md hover:-translate-y-1">
//                         Download My CV
//                     </button>
//                 </div>
//             </div>
//             <div
//                 className="container mx-auto py-8"
//                 style={{ paddingLeft: "10%", paddingRight: "10%" }}
//             >
//                 <h2 className=" font-medium text-3xl text-[#BBBFCA] mb-4">Portfolio</h2>
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                     {portfolioItems.map((item) => (
//                         <div key={item.id} className="bg-[#495464] p-6 rounded shadow-md">
//                             <h3 className="text-xl font-semibold mb-2  text-[#F6B17A]">
//                                 {item.title}
//                             </h3>
//                             <p className="text-[#E8E8E8]">{item.description}</p>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//             <div
//                 className="container mx-auto py-8"
//                 style={{ paddingLeft: "10%", paddingRight: "10%" }}
//             >
//                 <h2 className=" font-medium text-3xl text-[#BBBFCA] mb-4">Resume</h2>
//                 <div className="ml-4">
//                     <div className="mb-4">
//                         <h3 className="text-xl font-semibold text-[#E8E8E8]">
//                             Bachelor Degree of Information System
//                         </h3>
//                         <p className="text-[#F6B17A]">2018 - 2022</p>
//                         <p className="text-[#cdcdcb]">Addis Ababa University</p>
//                     </div>
//                     <div>
//                         <h3 className="text-xl font-semibold text-[#E8E8E8]">
//                             SOFTWARE ENGINEER
//                         </h3>
//                         <p className="text-[#F6B17A]">2022 - present</p>
//                         <p className="text-[#cdcdcb]">Dan Energy R & D Company</p>
//                     </div>
//                 </div>
//             </div>
//             <div
//                 className="container mx-auto py-8"
//                 style={{ paddingLeft: "10%", paddingRight: "10%" }}
//             >
//                 <h2 className="font-medium text-3xl text-[#BBBFCA] mb-4">Skills</h2>
//                 <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//                     <div className="bg-[#495464] p-6 rounded shadow-md">
//                         <h3 className="text-xl font-semibold mb-2 text-[#F6B17A]"></h3>
//                         <p className="text-[#E8E8E8]"></p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Hero;

// // F6B17A
// // E8E8E8
// // BBBFCA

