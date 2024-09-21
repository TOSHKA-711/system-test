import React from "react";
import "./Page1.css";
import icon1 from "../../assets/page1 icons/Vector.png";
import icon2 from "../../assets/page1 icons/user-shield 1.png";
import icon3 from "../../assets/page1 icons/employee-handbook 1.png";
import icon4 from "../../assets/page1 icons/corporate 1.png";
import icon5 from "../../assets/page1 icons/employees-woman-man 1.png";
import NavBar from "../navBar/NavBar";
import { Link } from "react-router-dom";

export default function Page1() {
  return (
    <>
      <NavBar title="الموظفين" />
      <div className="page1 flex-parent">
        <div className="container flex-container-col">
          <div className="child child1 flex-container-row">
            <div className="child-name">
              <p>إدارة الموظفين</p>
            </div>
            <div className="child-icons child1 flex-container-row">
              <span className="flex-container-col">
                <img src={icon1} alt="icon"></img>
                <p>حركات مجملة</p>
              </span>
              <span className="flex-container-col">
                <img src={icon2} alt="icon"></img>
                <p> إدارة التأمينات الإجتماعية</p>
              </span>
              <span className="flex-container-col">
                <img src={icon3} alt="icon"></img>
                <p>طلبات الموظفين</p>
              </span>
              <span className="flex-container-col">
                <img src={icon4} alt="icon"></img>
                <p>دليل الموظفين</p>
              </span>
              <span className="flex-container-col">
                <img src={icon5} alt="icon"></img>
                <p>إدارة الموظفين</p>
              </span>
            </div>
          </div>
          <div className="child child2 flex-container-row">
            <div className="child-name">
              <p> تقييم الموظفين</p>
            </div>
            <div className="child-icons child1 flex-container-row">
              <span className="flex-container-col">
                <img src={icon1} alt="icon"></img>
                <p> مهام الموظفين</p>
              </span>
              <span className="flex-container-col">
                <img src={icon2} alt="icon"></img>
                <p> عهد الموظفين</p>
              </span>
              <span className="flex-container-col">
                <img src={icon3} alt="icon"></img>
                <p> إضافة عهدة جديدة</p>
              </span>
            </div>
          </div>
          <div className="child child3 flex-container-row">
            <div className="child-name">
              <Link className=" flex-container-row" to="/page2">
                <p> عهد الموظفين</p>
              </Link>
            </div>
            <div className="child-icons child1 flex-container-row">
              <span className="flex-container-col">
                <img src={icon1} alt="icon"></img>
                <p> إدارة المهام</p>
              </span>
              <span className="flex-container-col">
                <img src={icon2} alt="icon"></img>
                <p> إدارة الطلبات</p>
              </span>
            </div>
          </div>
          <div className="child child4 flex-container-row">
            <div className="child-name">
              <p> المهام الوظيفية</p>
            </div>
            <div className="child-icons child1 flex-container-row">
              <span className="flex-container-col">
                <img src={icon1} alt="icon"></img>
                <p> طلب شاغر</p>
              </span>
              <span className="flex-container-col">
                <img src={icon2} alt="icon"></img>
                <p> عرص السير الذاتية</p>
              </span>
              <span className="flex-container-col">
                <img src={icon3} alt="icon"></img>
                <p> التعيينات الوظيفية</p>
              </span>
              <span className="flex-container-col">
                <img src={icon4} alt="icon"></img>
                <p> الطلبات الوظيفية</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
