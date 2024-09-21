import "./App.css";
import Page1 from "./components/page1/Page1";
import Page2 from "./components/Page2/Page2";
import SideBar from "./components/sideBar/SideBar";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { MyContext } from "./Context Api/MyProvider";
import { useContext, useEffect, useState } from "react";

function App() {
  const { sideBar, setSideBar } = useContext(MyContext);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  let hideSidebarTimeout;

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    
    window.addEventListener("resize", handleResize);
    
    // Clean up event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Function to hide sidebar after 2 seconds of inactivity or when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      // Check if the click is outside the sidebar
      if (sideBar && !e.target.closest(".dynamic-sidebar")) {
        startHideSidebarTimer();
      }
    };

    const handleInteraction = () => {
      // Reset the timer if there is any interaction with the sidebar
      clearTimeout(hideSidebarTimeout);
    };

    // Start the timer when user clicks outside the sidebar or no interaction
    const startHideSidebarTimer = () => {
      hideSidebarTimeout = setTimeout(() => {
        setSideBar(false); // Hide the sidebar
      }, 4000);
    };

    // Add event listeners
    document.addEventListener("click", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside); // For mobile
    document.querySelector(".dynamic-sidebar")?.addEventListener("mouseenter", handleInteraction); // Sidebar interactions

    // Cleanup the event listeners
    return () => {
      document.removeEventListener("click", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
      document.querySelector(".dynamic-sidebar")?.removeEventListener("mouseenter", handleInteraction);
      clearTimeout(hideSidebarTimeout);
    };
  }, [sideBar]);

  return (
 
      <BrowserRouter>
        {/* Conditionally render static sidebar based on screen width */}
        {windowWidth > 1262 && <SideBar id="sideBarOne" />}

        {/* Dynamic sidebar based on context */}
        {sideBar && <SideBar className="dynamic-sidebar" />}

        <Routes>
          <Route path="/" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
        </Routes>
      </BrowserRouter>

  );
}

export default App;
