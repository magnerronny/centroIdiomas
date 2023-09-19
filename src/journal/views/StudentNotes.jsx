import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Divider, Typography } from '@mui/material';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(name, calories, fat) {
  return { name, calories, fat};
}

const rows = [
  createData('aaaaaaaaa', 159, 6.0),
  createData('bbbbbbbbb', 237, 9.0),
  createData('ccccccccc', 262, 16.0),
  createData('ddddddddd', 305, 3.7),
  createData('eeeeeeeee', 356, 16.0),
];

export default function StudentNotes() {
  
  const fechaActual = new Date();
  const options = { year: 'numeric', month: 'long', day: 'numeric'};
  const fechaFormateada = fechaActual.toLocaleDateString('es-ES', options);
  
  return (
    <>
      <Box>
        <Typography variant='h6' align='center'>Información del Estudiante: {fechaFormateada}</Typography>
        <Divider sx={{mb:6}} />
        <Typography><strong>Estudiante:</strong> -------------------- </Typography>
        <Typography><strong>Documento:</strong> -------------------- </Typography>
        <Typography><strong>Correo Electronico:</strong> --------------------- </Typography>
        <Typography><strong>Celular:</strong> ----------------------- </Typography>
        <Typography><strong>Tipo de Estudiante:</strong> ------------------ </Typography>
      </Box>

      <Divider sx={{mb:6}}/>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 400 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align=''>Nombres y Apellidos</StyledTableCell>
              <StyledTableCell align="right">Idioma</StyledTableCell>
              <StyledTableCell align="right">Notas</StyledTableCell>
              {/* <StyledTableCell align="right">Carbs&nbsp;(g)</StyledTableCell> */}
              {/* <StyledTableCell align="right">Protein&nbsp;(g)</StyledTableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="right">{row.calories}</StyledTableCell>
                <StyledTableCell align="right">{row.fat}</StyledTableCell>
                {/* <StyledTableCell align="right">{row.carbs}</StyledTableCell> */}
                {/* <StyledTableCell align="right">{row.protein}</StyledTableCell> */}
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}