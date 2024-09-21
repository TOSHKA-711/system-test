import React, { useState } from "react";
import "./SideBar.css";
import logo from "../../assets/side bar/new logo V.2 white 22.png";
import logo2 from "../../assets/side bar/logo white 2.png";
import icon1 from "../../assets/side bar/apps 1.png";
import icon2 from "../../assets/side bar/users 1.png";
import icon3 from "../../assets/side bar/money.png";
import icon4 from "../../assets/side bar/calendar-clock 1.png";
import icon5 from "../../assets/side bar/chart-simple 1.png";
import icon6 from "../../assets/side bar/bank 1.png";
import icon7 from "../../assets/side bar/form 1.png";
import icon8 from "../../assets/side bar/computer 1.png";
import icon9 from "../../assets/side bar/settings.png";
import icon10 from "../../assets/side bar/info.png";

export default function SideBar() {
  const [isOpen, setIsOpen] = useState(false);

const handleOpen=()=>{
  setIsOpen(!isOpen)
}


  return (
    <div
      className={` ${isOpen && "open"} side-bar flex-container-col transition`}
    >
      {isOpen ? (
        <div className="logo logo2 flex-container-col" onClick={handleOpen}>
          <img src={logo2} alt="logo " />
        </div>
      ) : (
        <div className="logo flex-container-col" onClick={handleOpen}>
          <img src={logo} alt="logo" />
        </div>
      )}

      <div className={` ${isOpen && "open"} sections flex-container-col`}>
        <span className="flex-container-row">
          {isOpen && <p> الإعدادات العامة</p>}
          <img className="icon" src={icon1}></img>
        </span>
        <span className="flex-container-row">
          {isOpen && <p>الخدمة الذاتية</p>}

          <img className="icon" src={icon2}></img>
        </span>
        <span className="flex-container-row">
          {isOpen && <p>الموظفين</p>}

          <img className="icon" src={icon3}></img>
        </span>
        <span className="flex-container-row">
          {isOpen && <p>الرواتب</p>}

          <img className="icon" src={icon4}></img>
        </span>
        <span className="flex-container-row">
          {isOpen && <p>التقارير</p>}

          <img className="icon" src={icon5}></img>
        </span>
        <span className="flex-container-row">
          {isOpen && <p>الخطابات الوثائق</p>}
          <img className="icon" src={icon6}></img>
        </span>
        <span className="flex-container-row">
          {isOpen && <p>متابعة الطلبات</p>}
          <img className="icon" src={icon7}></img>
        </span>
        <span className="flex-container-row">
          {isOpen && <p>أنظمة أخري</p>}
          <img className="icon" src={icon8}></img>
        </span>
      </div>
      <div className={` ${isOpen && "open"} info flex-container-col`}>
        <span className="flex-container-row">
          {isOpen && <p> الإعدادات</p>}
          <img className="icon" src={icon9}></img>
        </span>
        <span className="flex-container-row">
          {isOpen && <p> الدعم والمساعدة</p>}
          <img className="icon" src={icon10}></img>
        </span>
      </div>
    </div>
  );
}
