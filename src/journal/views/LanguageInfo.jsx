import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography, Button } from "@mui/material"
import { useEffect } from 'react';
import PropTypes from 'prop-types'
import { useEspecialidadStore } from '../../hooks';

export const LanguageInfo = ({setMenus}) => {

  const { startOnLoadingEspecialidadEstudiante, especialidadEstudiante } = useEspecialidadStore();
  console.log(especialidadEstudiante);

  useEffect(() => {
    startOnLoadingEspecialidadEstudiante(); 
  }, [])

  return (
    <>
      <Typography>Listado de Idiomas</Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Codigo</TableCell>
              <TableCell align="right">Apellido Paterno</TableCell>
              <TableCell align="right">Apellido Materno</TableCell>
              <TableCell align="right">Nombres</TableCell>
              <TableCell align="right">Idioma</TableCell>
              <TableCell align="right"> </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {especialidadEstudiante.map((row) => (
              <TableRow
                key={row.codigo}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">{row.codigo}</TableCell>
                <TableCell align='right'>{row.paterno}</TableCell>
                <TableCell align="right">{row.materno}</TableCell>
                <TableCell align="right">{row.nombres}</TableCell>
                <TableCell align="right">{row.nom_esp}</TableCell>
                <TableCell align="right"> <Button variant="contained" onClick={() => setMenus('estudianteEspecialidad') }>ver</Button> </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}

LanguageInfo.propTypes = {
  setMenus: PropTypes.func
}
