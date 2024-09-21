import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import icon from "../assets/imgs/Ellipse 1.png";

function createData(section, manager, date, type) {
  return { section, manager, date, type };
}

const rows = [
  createData("الموارد البشرية", "محمود نوح", "12/05", "جهاز إلكتروني"),
  createData("الموارد البشرية", "محمود نوح", "12/05", "جهاز إلكتروني"),
  createData("الموارد البشرية", "محمود نوح", "12/05", "جهاز إلكتروني"),
  createData("الموارد البشرية", "محمود نوح", "12/05", "جهاز إلكتروني"),
  createData("الموارد البشرية", "محمود نوح", "12/05", "جهاز إلكتروني"),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>إجرائي</TableCell>
            <TableCell align="right">القسم</TableCell>
            <TableCell align="center">المدير المسؤول</TableCell>
            <TableCell align="right">تاريخ التسلبم</TableCell>
            <TableCell align="right">نوع العهدة</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row,index) => (
            <TableRow
              key={index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <button className="edit">تعديل</button>
                <button className="status">الحالة</button>
              </TableCell>
              <TableCell align="right" className=" flex-container-row cell sec">
                {row.section}
              </TableCell>
              <TableCell align="right" className=" flex-container-row cell img">
                <img src={icon} />
                {row.manager}
              </TableCell>
              <TableCell
                align="right"
                className=" flex-container-row cell date"
              >
                {row.date}
              </TableCell>
              <TableCell
                align="right"
                className=" flex-container-row cell type"
              >
                {row.type}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
