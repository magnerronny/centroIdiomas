import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Typography, Button } from "@mui/material";

import { useEffect, useState } from "react";
import { useEspecialidadStore } from "../../hooks";
import Registro from "./Registro";

export const EstudianteEspecialidad = () => {
  const { startOnLoadingEstadoEstudiante, estadoEstudiante } =useEspecialidadStore();
  const [activeData, setActiveData] = useState(false);

  const handleSubmitEstado = async () => {
    await startOnLoadingEstadoEstudiante();
  };

  useEffect(() => {
    handleSubmitEstado();
  }, []);

  return (
    <>
      <Typography sx={{mb:4}}> Estado del Estudiante </Typography>
      <TableContainer component={Paper} sx={{mb:10}}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {/* <TableCell>Codigo</TableCell> */}
              <TableCell align="right">Nombre Especialidad</TableCell>
              <TableCell align="right">Nivel</TableCell>
              <TableCell align="right">Mes</TableCell>
              <TableCell align="right">Examen</TableCell>
              <TableCell align="right"> </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {estadoEstudiante.map((row) => (
              <TableRow
                key={row.des_cur}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.nom_esp}
                </TableCell>
                <TableCell align="right">{row.des_cur}</TableCell>
                <TableCell align="right">{row.des_mes}</TableCell>
                <TableCell align="right">
                  <Typography sx={(parseInt(row.escrito) <= 70) ? {color:'red', fontWeight : "bold" } : {color:'blue', fontWeight: "bold"}}>
                  {row.escrito}
                  </Typography>
                  
                </TableCell>
                {/* <TableCell align="right">{row.nom_esp}</TableCell> */}
                <TableCell align="right">
                  {" "}
                  <Button
                    variant="contained"
                    onClick={() => setActiveData(!activeData)}
                  >
                    nueva Matricula
                  </Button>{" "}

                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* <Registro/> */}
      {
        ( activeData  && <Registro/>)
      }
    </>
  );
};
