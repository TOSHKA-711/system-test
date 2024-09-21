import React, { useContext } from "react";
import "./NavBar.css";
import arrow from "../../assets/icons/arrow-down.png";
import notifications from "../../assets/icons/notification.png";
import add from "../../assets/icons/add 1.png";
import adminImg from "../../assets/imgs/photo-1564564321837-a57b7070ac4f.avif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { MyContext } from "../../Context Api/MyProvider";
export default function NavBar({ title }) {
  const { sideBar, setSideBar } = useContext(MyContext);

  const ToggleSideBar = () => {
    setSideBar(!sideBar);
  };

  return (
    <div className="nav-bar flex-parent">
      <div className="container flex-container-row">
        <div className="list flex-container-row">
          <img src={arrow} alt="arrow-down" className="icon arrow"></img>
          <p className="name">محمد الغريب</p>
          <img src={adminImg} alt="admin" className="admin-img"></img>
          <div className="hover-list flex-container-col transition">
            <p>test</p>
            <p>test</p>
            <p>test</p>
          </div>
        </div>
        <img src={notifications} alt="arrow-down" className="icon"></img>
        <img src={add} alt="arrow-down" className="icon"></img>
        <div
          className="side-bar-icon flex-container-row"
          onClick={ToggleSideBar}
        >
          <FontAwesomeIcon icon={faEllipsis} className="icon" />
        </div>
      </div>
      {title && (
        <div className="nav-title">
          <p>{title}</p>
        </div>
      )}
    </div>
  );
}
