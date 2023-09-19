import {Link as RouterLink} from 'react-router-dom'
// import { Google } from "@mui/icons-material"
import { Alert, Button, Grid, IconButton, InputAdornment, Link, OutlinedInput, TextField, Typography } from "@mui/material"
// import { AuthLayout } from '../layout/AuthLayout'
import { useAuthStore, useForm } from '../../hooks'
import Swal from 'sweetalert2'
import { AccountCircle, Email, PhoneAndroid, Visibility, VisibilityOff } from '@mui/icons-material'
import { useState } from 'react'
// import Swal from 'sweetalert2/dist/sweetalert2.js'
// import 'sweetalert2/src/sweetalert2.scss's
const register =  {
  apellidoPaterno: '',
  apellidoMaterno: '',
  nombres: '',
  email: '',
  celular: '',
  password: '',
  repetirPassword:''
}

export const RegisterPage = () => { 
  
  const {apellidoPaterno, apellidoMaterno, nombres, email, celular, password, repetirPassword, onInputChange} = useForm(register);
  const {startSavingUser} = useAuthStore();

  const handleSubmitRegister = (event) => {
    event.preventDefault();
    if(password !== repetirPassword){
      // console.log('la contraseña son incorectas');
      Swal.fire("error", "error en la contraseña", "error");
      return;
    }

    Swal.fire('correcto', 'datos registrados correctamente', 'success');
    startSavingUser({apellidoPaterno, apellidoMaterno, nombres, email, celular, password})
  }

  const [showPassword, setShowPassword] = useState(false);


  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  
  return (
    <Grid
      container
      spacing={0}
      direction='column'
      alignItems="center"
      justifyContent='center'
      sx={{minHeight :'100vh', backgroundColor:'primary.main', padding: 4}}
    >

    <Grid
      item
      className="box-shadow"
        
        sx={{
          width:{xs:300, sm:440, md: 768, lg:1024},
          backgroundColor: '#fff',
          padding: 3, 
          borderRadius: 2
        }} 
    >
      <form onSubmit={handleSubmitRegister}>
          <Grid container spacing={1} >
            <Grid item xs = {12} sx={{mt:2, textAlign:"center"}}>
              {/* <img src='http://unapvirtual.unap.edu.pe/siu/idiomas/assets/img/logo.jpg' alt='imagen logo'/> */}
              <img src='https://celen.unap.edu.pe/academico/assets/dist/img/logo-celen-small.png' alt='imagen logo'/>
            </Grid>
            <Grid item xs={12}>
              <Alert variant="filled" severity="info" color='error'>
                <strong>Muy Importante:</strong> Debe tener como minimo 15 años de edad, el pago al banco de la nación es personal
              </Alert>
            </Grid>
            <Grid item xs = {12}
              sm = {12}
              md = {6}
              lg = {4} sx={{mt:2}}>
              <TextField
                label='Apellido Paterno'
                type="text"
                placeholder="Apellido Paterno"
                name="apellidoPaterno"
                value={apellidoPaterno}
                onChange={onInputChange}
                fullWidth = {true}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <AccountCircle />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>

            <Grid item xs = {12}
              sm = {12}
              md = {6}
              lg = {4} sx={{mt:2}}>
              <TextField
                label='Apellido Materno'
                type="text"
                placeholder="Apellido Materno"
                fullWidth = {true}
                name="apellidoMaterno"
                value={apellidoMaterno}
                onChange={onInputChange}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <AccountCircle />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs = {12}
              sm = {12}
              md = {6}
              lg = {4} sx={{mt:2}}>
              <TextField
                label='Nombres'
                type="text"
                placeholder="Nombres"
                fullWidth = {true}
                name="nombres"
                value={nombres}
                onChange={onInputChange}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <AccountCircle />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid> 
            <Grid item xs = {12}
              sm = {12}
              md = {6}
              lg = {4} sx={{mt:2}}>
              <TextField
                label='Correo Electronico'
                type="email"
                placeholder="Correo Electrónico"
                fullWidth = {true}
                name="email"
                value={email}
                onChange={onInputChange}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <Email />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>

            <Grid item xs = {12}
              sm = {12}
              md = {6}
              lg = {4} sx={{mt:2}}>
              <TextField
                label='Numero Celular'
                type="text"
                placeholder="Numero Celular"
                fullWidth = {true}
                name="celular"
                value={celular}
                onChange={onInputChange}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <PhoneAndroid />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs = {12}
              sm = {12}
              md = {6}
              lg = {4} sx={{mt:2}}>
              <OutlinedInput
                id="outlined-adornment-password"
                fullWidth={true}
                type={showPassword ? 'text' : 'password'}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="password"
                value={password}
                name='password'
                
              />
            </Grid>

            <Grid item xs = {12}
              sm = {12}
              md = {6}
              lg = {4} sx={{mt:2}}>
              <OutlinedInput
                id="outlined-adornment-password"
                fullWidth={true}
                type={showPassword ? 'text' : 'password'}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </Grid>

            <Grid container spacing={2} sx={{mb:2, mt:1}}>
              <Grid item sx={{width:"35%"}} >
                <Button variant="contained" fullWidth type='submit'>
                  Regitrar
                </Button>
              </Grid>

              <Grid container direction='row' justifyContent='end' >
              <Typography sx={{mr:1}}>¿Ya tienes cuenta?</Typography>
                <Link component={RouterLink} color='inherit' to='/auth/login'>
                  Ingresar
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </form>
    </Grid>
    </Grid>
  )
}

