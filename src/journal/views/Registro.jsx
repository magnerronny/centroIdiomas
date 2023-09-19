import * as React from 'react';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Button, Grid, TextField, Typography } from '@mui/material';
import Swal from 'sweetalert2';
import styled from '@emotion/styled';
import { useForm, usePagoBancoStore } from '../../hooks';
import { usePagoOnlineStore } from '../../hooks/usePagoOnlineStore';

const dniNumero = {
  dni:""
}


const validarPago = {
  nrodni:"",
  secuencia:"",
  monto:"",
  mes:"",
}

export default function Registro() {

  const { startPagoOnline, pagoOnline, confirmandoPagoOnline, errorPagoOnlineMessage, initialValueState } = usePagoOnlineStore();
  const {dni, onInputChange, onResetForm } = useForm(dniNumero);
  const { nrodni, secuencia, monto, mes, onInputChange: validarPagoOnInputchange, onResetForm: onResetFormBn } = useForm(validarPago);
  const { startPagoBanco, pagoBanco, confirmarPagoBancoNacion, errorBancoMessage, initialValueStateBanco } = usePagoBancoStore();

  const [error , setError ] = useState({
    error: false,
    errorMessage: ""
  })
  

  const [errors, setErrors] = useState({
    errors: false,
    nrodni:"",
    secuencia:"", 
    monto:"",
    mes:""
  })


  const [value, setValue] = React.useState('1');
  // const [estado, setEstado] = useState(0);

  const handleSubmitValidarPago = (event) => {
    event.preventDefault();
    Swal.fire('Correcto',' se registro correctamente', 'success');
    confirmandoPagoOnline();
  }
  
  const handleSubmitValidarPagoBanco = (event) => {
    event.preventDefault();
    Swal.fire("Correcto", "el pago del banco se valido correctamente", 'success');
    confirmarPagoBancoNacion();
  }
  
  const handleSubmitPagoBN = async(event) => {
    setErrors({
      errors: false,
      errors1: false,
      errors2: false,
      errors3: false,
      nrodni:"",
      secuencia:"", 
      monto:"",
      mes:""
    });

    event.preventDefault();

    if(!nrodni.trim()) {
      setErrors({
        errors: true,
        nrodni:"el numero dni es obligatorio"
      });
      return;
    }

    if(!secuencia.trim()) {
      setErrors({
        errors1: true,
        secuencia: "el numero de secuencia es obligatorio"
      });
      return;

    }

    if(!monto.trim()) {
      setErrors({
        errors2: true,
        monto:"el monto es obligatorio"
      });

      return;
    }

    if(!mes.trim()) {
      setErrors({
        errors3: true,
        mes:"el mes es obligatorio"
      });

      return;
    }

    // if(errors.errors || errors.errors1 || errors.errors2 || errors.error3){
    //   return;
    // } 

    await startPagoBanco(nrodni, secuencia, monto, mes);
  } 

  

  const handleSubmit = async(event) => {
    event.preventDefault();
    
    setError({
      error: false,
      message: ""
    })

    if(dni.length < 8  || dni.length > 8){
      setError({
        error: true,
        message: 'ingrese dni con 8 digitos'
      })
      return;
      // console.log('ingrese dni con 8 digitos');
    }

    if(isNaN(dni)) {
      setError({
        error: true,
        message: 'Ingrese solo numeros'
      })
      return;
      // console.log('Ingrese solo numeros');
      // return;
    }

    if(dni.trim() === ""){
      setError({
        error: true,
        message: 'ingrese numero dni valido'
      })
      return;
      // console.log("ingrese numero dni valido");
      // return;
    }

   await startPagoOnline(dni);
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    if(errorPagoOnlineMessage !== undefined){
      Swal.fire('error', errorPagoOnlineMessage, 'error');
      return;
    }
  }, [errorPagoOnlineMessage])


  useEffect(() => {
    if(errorBancoMessage !== undefined) {
      Swal.fire('error', errorBancoMessage, 'error');
      return;
    }
  }, [errorBancoMessage])
  
  const handleSubmitTab1 = (event) => {
    event.preventDefault();
    initialValueStateBanco();
    onResetFormBn();
  }

  const handleSubmitTab2 = (event) => {
    event.preventDefault();
    initialValueState();
    onResetForm();
  }
  
  const Img = styled ("img")({
    width: 400,
    height: "100%",
    objectFit: "cover",
    objectPosition:"center"
  })

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Pago Online" value="1" onClick={ handleSubmitTab1 } />
            <Tab label="Pago Banco de la Nacion" value="2" onClick={ handleSubmitTab2 }/>
          </TabList>
        </Box>

        <TabPanel value="1">
          <Box>
            <Box
              component="form"
              sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
                border:2, borderRadius:3, p:3, borderColor:"primary.main"
              }}
              noValidate
              autoComplete="off"
              onSubmit={handleSubmit}
            >
              <TextField 
                id="outlined-basic" 
                label="Ingrese dni personal" 
                variant="outlined"
                name="dni"
                value={dni}
                onChange={onInputChange}
                error={error.error}
                helperText={error.message}
              />
              <Box sx={{
                textAlign: "center"
              }}>
                <Button variant='contained' type="submit" size='large' sx={{width:"100%"}} >validar</Button>
              </Box>
            </Box>
          </Box>
          <Box grid container >
                {
                  pagoOnline.map(item => (
                  <Box grid item key = {item.codigo_transaccion} sx={{border:2, mt:2, borderRadius:2, p:3, borderColor:"primary.main"}} >
                    <Typography>nombre_completo: {item.nombre_completo}</Typography>
                    <Typography>monto: {item.monto}</Typography>
                    <Typography>monto_proveedor: {item.monto_proveedor}</Typography>
                    <Typography>fecha_pago: {item.fecha_pago}</Typography>
                    <Typography>fecha_pago_proveedor: {item.fecha_pago_proveedor}</Typography>
                    <Typography>concepto_pago: {item.concepto_pago}</Typography>
                    <Typography>estado: {item.estado}</Typography>
                    <Button onClick={handleSubmitValidarPago} variant='contained' color='success'>Registrar</Button>
                  </Box>  
                  ))
                }
            </Box>
        </TabPanel>

{/* //********************* TAB PANEL 2 ************************/}

        <TabPanel value="2">
          <Box >
            <Box
              component="form"
              sx={{
                '& > :not(style)': { m: 1, width: '45ch' },
                border:2, borderRadius:3, borderColor:"primary.main" 
              }}
              noValidate
              autoComplete="off"
              onSubmit={handleSubmitPagoBN}
              grid
              container
            >
              <Grid container rowSpacing={5} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={8}>
                  <Box
                    sx={{mb:2}}
                  >
                    <TextField 
                      id="outlined-basic" 
                      label="Ingrese dni personal" 
                      variant="outlined"
                      name="nrodni"
                      value={nrodni}
                      onChange={validarPagoOnInputchange}
                      error={errors.errors}
                      helperText={errors.nrodni}
                      />
                  </Box>
                
                  <Box
                    sx={{mb:2}}
                  >
                    <TextField 
                      id="outlined-basic" 
                      label="Ingrese nro de secuencia" 
                      variant="outlined"
                      name="secuencia"
                      value={secuencia}
                      onChange={validarPagoOnInputchange}
                      error={errors.errors1}
                      helperText={errors.secuencia}
                    />
                  </Box>

                  <Box
                    sx={{mb:2}}
                  >
                    <TextField 
                      id="outlined-basic" 
                      label="monto de Pago" 
                      variant="outlined"
                      name="monto"
                      value={monto}
                      onChange={validarPagoOnInputchange}
                      error={errors.errors2}
                      helperText={errors.monto}
                    />
                  </Box>

                  <Box
                    sx={{mb:2}}
                  >
                    <TextField 
                      id="outlined-basic" 
                      label="mes de pago en numero 00" 
                      variant="outlined"
                      name="mes"
                      value={mes}
                      onChange={validarPagoOnInputchange}
                      error={errors.errors3}
                      helperText={errors.mes}
                    />
                  </Box>
                  <Box sx={{mt:3}}>
                    <Button variant='contained' type="submit" sx={{width:"80%" }} size='md' >validar</Button>
                  </Box>
                </Grid>
                <Grid item xs={4} sx={{mb:10}} >
                  {/* <Img src="https://via.placeholder.com/200" */}
                  <Img src="../public/fotoPrueba2.jpg" alt='imagen'/>
                  {/* <Img src="https://www.registro22.transportespuno.gob.pe/img/dni/voucher.jpg"
                    alt="styled image"
                  /> */}
                </Grid>
              </Grid>
              {/* <Button variant='contained' type="submit" sx={{maxWidth:"200px"}}>validar</Button> */}
            </Box>
          </Box>
          <Box grid container>
              {
                pagoBanco.map(item => (
                <Box grid item key = {item.paymentId} sx={{border:2, mt:2, borderColor:"primary.main", borderRadius:2, p:3 }} >
                    <Typography>client: {item.client}</Typography>
                    <Typography>universityId: {item.universityId}</Typography>
                    <Typography>descr: {item.descr}</Typography>
                    <Typography>amount: {item.amount}</Typography>
                    <Typography>status: {item.status}</Typography>
                    <Typography>dte: {item.dte}</Typography>
                    <Button color='success' variant='contained' onClick={handleSubmitValidarPagoBanco}>Registrar</Button>
                </Box>
                ))
              }
          </Box>
        </TabPanel>
      </TabContext>
    </Box>
  );
}
