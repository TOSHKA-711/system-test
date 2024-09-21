import React from "react";
import "./Page2.css";
import icon1 from "../../assets/page2 icons/cross 1.png";
import icon2 from "../../assets/page2 icons/pdf 1.png";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileCircleXmark,
  faFilePdf,
} from "@fortawesome/free-solid-svg-icons"; // Example icon
import BasicTable from "../../items/Table";
import NavBar from "../navBar/NavBar";

export default function Page2() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <>
      <NavBar />
      <div className="page2 flex-parent">
        <div className="container flex-container-col">
          <div className="first flex-container-row">
            <div className="first-child child flex-container-col">
              <div className="btns flex-container-row">
                <button className="one flex-container-row">إضافة جديد</button>
                <button className="two flex-container-row">تعديل</button>
              </div>
              <div className="icons flex-container-row">
                <FontAwesomeIcon
                  icon={faFileCircleXmark}
                  className="one icon flex-container-row"
                />
                <FontAwesomeIcon
                  icon={faFilePdf}
                  className="two icon flex-container-row"
                />
              </div>
            </div>
            <div className="second-child child flex-container-col">
              <h1 className="title">عهد الموظفين</h1>
              <span className=" flex-container-row">
                <p>الإثنين</p>
                <p>8 يوليو 2024</p>
              </span>
              <div className="btns flex-container-row">
                <button className="one"> بحث</button>
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                  <Select
                    className="select"
                    value={age}
                    onChange={handleChange}
                    displayEmpty
                    inputProps={{ "aria-label": "Without label" }}
                  >
                    <MenuItem className="menu" value="">
                      <em>test</em>
                    </MenuItem>
                    <MenuItem className="menu" value={10}>
                      Ten
                    </MenuItem>
                    <MenuItem className="menu" value={20}>
                      Twenty
                    </MenuItem>
                    <MenuItem className="menu" value={30}>
                      Thirty
                    </MenuItem>
                  </Select>
                </FormControl>
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                  <Select
                    className="select"
                    value={age}
                    onChange={handleChange}
                    displayEmpty
                    inputProps={{ "aria-label": "Without label" }}
                  >
                    <MenuItem className="menu" value="">
                      <em>test</em>
                    </MenuItem>
                    <MenuItem className="menu" value={10}>
                      Ten
                    </MenuItem>
                    <MenuItem className="menu" value={20}>
                      Twenty
                    </MenuItem>
                    <MenuItem className="menu" value={30}>
                      Thirty
                    </MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>
          </div>
          <div className="second flex-container-col">
            <div className="tabs flex-container-row">
              <button className="one">إضافة عهدة</button>
              <button className="two">المهام الوظيفية</button>
              <button className="three active">عهد الموظفين</button>
            </div>
            <BasicTable />
          </div>
        </div>
      </div>
    </>
  );
}
