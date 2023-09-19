import {Link as RouterLink} from 'react-router-dom'
import { Email, Google, Lock} from "@mui/icons-material"
import { Button, Grid, InputAdornment, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from '../layout/AuthLayout'
import { useAuthStore, useForm } from '../../hooks'
import { useEffect } from 'react'
import Swal from 'sweetalert2'


const log = {
  email: '',
  password: ''
}
export const LoginPage = () => {

  const {email, password, onInputChange} = useForm(log);
  const { startLoginUser, errorMessage } =  useAuthStore();  

  const handleSubmit = (event) => {
    event.preventDefault();
    startLoginUser({email, password});
  }

  useEffect(() => {
    if(errorMessage!== undefined){
      Swal.fire("error", errorMessage, 'error')
      return;
    }
  
  }, [errorMessage])
  
  
  return (
    <AuthLayout title='Login'>
      <form onSubmit={handleSubmit}>
          <Grid container>
            <Grid item xs = {12} sx={{mt:2, textAlign:"center"}}>
              {/* <img src='http://unapvirtual.unap.edu.pe/siu/idiomas/assets/img/logo.jpg' alt='imagen logo'/> */}
              <img src='https://celen.unap.edu.pe/academico/assets/dist/img/logo-celen-small.png' alt='imagen logo'/>
            </Grid>
            <Grid item xs = {12} sx={{mt:2}}>
              <TextField
                label='Correo'
                type="text"
                placeholder="correo@gmail.com"
                name="email"
                value={email}
                onChange={onInputChange}
                fullWidth
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <Email />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs = {12} sx={{mt:2}}>
              <TextField
                label='Contraseña'
                type="password"
                placeholder="Contraseña"
                name="password"
                value={password}
                onChange={onInputChange}
                fullWidth
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <Lock />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>

            <Grid container spacing={2} sx={{mb:2, mt:1}}>
              <Grid item xs = {12} sm={ 6}>
                <Button variant="contained" fullWidth type='submit' sx={{backgroundColor:"secondary.main"}}>
                  Login
                </Button>
              </Grid>

              <Grid item xs = {12} sm={ 6}>
                <Button variant="contained" fullWidth sx={{backgroundColor:"secondary.main"}} >
                  <Google/>
                  <Typography sx={{ml:1}}>Google</Typography>
                </Button>
              </Grid>

              <Grid container direction='row' justifyContent='end' >
                <Link component={RouterLink} color='inherit' to='/auth/register'>
                  Usuario Nuevo
                </Link>
              </Grid>
            </Grid>

          </Grid>
        </form>
    </AuthLayout>
  )
}

