import "./App.css";
import Page1 from "./components/page1/Page1";
import Page2 from "./components/Page2/Page2";
import SideBar from "./components/sideBar/SideBar";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <SideBar />

        <Routes>
          <Route path="/" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
