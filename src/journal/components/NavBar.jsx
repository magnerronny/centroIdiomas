import { LogoutOutlined, MenuOutlined } from "@mui/icons-material"
import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material"
import PropTypes from 'prop-types'
import { useAuthStore } from "../../hooks"

export const NavBar = ({ drawerWidth}) => {
  const { startOnLogout } = useAuthStore();

  return (
    <AppBar
      position="fixed"
      sx={{ 
        width: { sm:` calc(100% - ${drawerWidth}px)`},
        ml: {sm: `${drawerWidth}px`}
        }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          edge="start"
          sx={{mr:2, display: {sm:'none'}}}
        >
          <MenuOutlined/>
        </IconButton>

        <Grid container direction='row' justifyContent='space-between' alignItems='center'>
          <Typography variant="h6" noWrap component='div'>App</Typography>
          <IconButton color="error" onClick={startOnLogout}>
            <LogoutOutlined/><Typography variant="h6" noWrap component='div'>Salir</Typography>
          </IconButton>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}

NavBar.propTypes = {
  drawerWidth: PropTypes.number
}