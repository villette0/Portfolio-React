import React, {useState} from "react";

import Sidebar from './components/Sidebar';

import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
// For alerts
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import "./style.css"

function App() {
  const [currentPage, setCurrentPage] = useState("About");
  const handleChange = () => {
    if (currentPage === "About") {
      return <AboutMe/>
    }
    if (currentPage === "Contact") {
      return <Contact/>
    } 
    if (currentPage === "Portfolio") {
      return <Portfolio/>
    }
    if (currentPage === "Resume") {
      return <Resume/>
    }
  };
  return (
    <div>
        <Sidebar setCurrentPage={setCurrentPage}/>
        <ToastContainer 
        position="top-center"
        autoClose={5000}
        hideProgressBar={true}
        closeOnClick={true}
        pauseOnHover={true}
        draggable={true}
        progress={undefined}
        theme="light"/>
        {handleChange()}
    </div>
  );
}

export default App;
