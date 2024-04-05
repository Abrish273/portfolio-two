import React from "react";
import { Route, Routes } from "react-router-dom";
import Services from "./components/Services";
import Works from "./components/Works";
import Notes from "./components/Notes";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Homes from "./components/Homes";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<Homes />} />
        <Route path="services" element={<Services />} />
        <Route path="works" element={<Works />} />
        <Route path="portfolio" element={<Notes />} />
        <Route path="contacts" element={<Contact />} />
      </Route>
    </Routes>
  );
};

export default App;
