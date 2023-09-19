import { Autocomplete, Button, Typography, Box, Grid, TextField } from "@mui/material"
import * as React from 'react';
import { useState, useEffect } from "react";
import { useForm, usePagoBancoStore, usePagoOnlineStore, useEspecialidadStore } from '../../hooks';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import styled from '@emotion/styled';
import Swal from 'sweetalert2';

const dniNumero = {
  dni:""
}

const validarPago = {
  nrodni:"",
  secuencia:"",
  monto:"",
  mes:"",
}


const top100Films = [
  { label: "INGLES", id: 1 },
  { label: "PORTUGUES", id: 2 },
  { label: "QUECHUA", id: 3 },
  { label: "AYMARA", id: 4 },
  { label: "ITALIANO", id: 5 },
  { label: "FRANCES", id: 6 },
  { label: "CHINO MANDARIN", id: 7 },
];

const top100Films1 = [
  { label: "abcThe Shawshank Redemption", id: 1 },
  { label: "abcThe Godfather", id: 2 },
  { label: "abcThe Godfather: Part II", id: 3 },
  { label: "abcThe Dark Knight", id: 4 },
  { label: "abc12 Angry Men", id: 5 },
  { label: "abcSchindler's List", id: 6 },
  { label: "abcPulp Fiction", id: 7 },
];



export const General = () => {
  
  const [step1Data, setStep1Data] = useState({ label: '' });
  const [step2Data, setStep2Data] = useState({ label: ""} );
  const { especialidades } = useEspecialidadStore();
  // const { especialidades, startOnLoadingEspecialidad, startOnLoadingSpecialitiesEstudent } = useEspecialidadStore();
  const { startPagoOnline, pagoOnline, confirmandoPagoOnline, errorPagoOnlineMessage, initialValueState } = usePagoOnlineStore();
  const {dni, onInputChange, onResetForm } = useForm(dniNumero);
  const { nrodni, secuencia, monto, mes, onInputChange: validarPagoOnInputchange, onResetForm: onResetFormBn } = useForm(validarPago);
  const { startPagoBanco, pagoBanco, confirmarPagoBancoNacion, errorBancoMessage, initialValueStateBanco } = usePagoBancoStore();
  const [value, setValue] = React.useState('1');
  
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


  const handleStep1Change = (event, newValue) => {
    setStep1Data({ ...step1Data, label: newValue?.label || '' });
  };

  const handleStep2Change = (event, newValue) => {
    setStep2Data({ ...step2Data, label: newValue?.label || '' });
  };

  const handleSubmitRegisterMatricula = (event) => {
    event.preventDefault();
    console.log({step1Data:step1Data.label, step2Data: step2Data.label})
    Swal.fire("Correcto","la matricula que realizo fue exitosa", "success");
  } 

  // const [errorAutocomplete, setErrorAutocomplete] = useState(false);

  // const handleInputChangeAutocomplete = (event, value) => {
  //   if (!value) {
  //     setErrorAutocomplete(true);
  //   } else {
  //     setErrorAutocomplete(false);
  //   }
  // };

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
      // errors2: false,
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
    }

    if(isNaN(dni)) {
      setError({
        error: true,
        message: 'Ingrese solo numeros'
      })
      return;
    }

    if(dni.trim() === ""){
      setError({
        error: true,
        message: 'ingrese numero dni valido'
      })
      return;
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


  // const [formSubmited, setFormSubmited] = useState(false);s

  // const idiomaValue = () => {
  //   if(!formSubmited) return '';
  //   return (step1Data.label.length > 0)
  //     ? ''
  //     :'ingrese el campo'
  // } 


  // const startdata =  async() => {
  //   await startOnLoadingEspecialidad();
  // }

  // useEffect(() => {
  //   startdata();  
  // }, [])

  // useEffect(() => {
  //   startOnLoadingSpecialitiesEstudent();
  // }, []);
  

  return (
    
    <Grid container component={'form'}>
      <Grid item sx={{
          width:{xs:300, sm:440, md: 768, lg:1024},
          backgroundColor: '#fff',
          padding: 3, 
          borderRadius: 2,
          textAlign:"center"
      }}>
        <Box>
          <Typography variant="h4" component={"h2"}>Iniciar matricula</Typography>
        </Box>
      </Grid>
      <Grid item
        sx={{
          width:{xs:300, sm:440, md: 768, lg:1024},
          backgroundColor: '#fff',
          padding: 3, 
          borderRadius: 2
        }}
      >
        <Box
          // sx={{ width: "100%", margin: "0 auto", padding: "100px 100px" }}
        >
        <Autocomplete
              disablePortal
              id="autocomplete"
              options={top100Films}
              sx={{ width: "100%" }}
              renderInput={(params) => (
                <TextField {...params} 
                  label="Selecciona Idioma" 
                  // error={errorAutocomplete}
                  // helperText={ errorAutocomplete ? 'Debes seleccionar una opción' : ''}
                />
              )}
              
              value={
                top100Films.find(
                  (option) => option.cod_esp === step1Data.cod_esp
                ) || null
              }

              getOptionLabel={(option) => option.nom_esp}
              onChange={handleStep1Change}
            />
        </Box>
      </Grid>
      
      <Grid
        item
        sx={{
          width:{xs:300, sm:440, md: 768, lg:1024},
          backgroundColor: '#fff',
          padding: 3, 
          borderRadius: 2
        }}
      >
        <Box>
        <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={top100Films1}
              sx={{ width: "100%" }}
              renderInput={(params) => (
                <TextField {...params} label="seleccione Horario" />
              )}

              value={
                top100Films1.find(
                  (option) => option.label === step2Data.label
                ) || null
              }
              onChange={handleStep2Change}
            />
        </Box>
      </Grid>


      <Grid
        item
        sx={{
          width:{xs:300, sm:440, md: 768, lg:1024},
          backgroundColor: '#fff',
          padding: 3, 
          borderRadius: 2
        }}
      >
        <Box>
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
                      {/* <Img src="../public/fotoPrueba2.jpg" alt='imagen'/> */}
                      <Img src="http://unapvirtual.unap.edu.pe/siu/idiomas/assets/img/boletabn.jpg"
                        alt="styled image"
                      />
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
        </Box>
      </Grid>
      
      <Grid
        item
        sx={{
          width:{xs:300, sm:440, md: 768, lg:1024},
          backgroundColor: '#fff',
          padding: 3, 
          borderRadius: 2,
          textAlign: "center"
        }}
      >
        <Box>
          <Button variant="contained" onClick={handleSubmitRegisterMatricula}>Finalizar Matricula</Button>
        </Box>
      </Grid>
    </Grid>
  )
}
