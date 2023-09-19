import { AppRegistrationOutlined } from "@mui/icons-material"
import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material"
import PropTypes from 'prop-types'
// import { useState } from "react"
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';

export const SideBar = ({ drawerWidth = 240, setMenus}) => {
  
  return (
    <Box
      component='nav'
      sx={{width: { sm: drawerWidth}, flexShrink : {sm:0}}}
    >

      <Drawer
        variant="permanent"
        open
        sx={{
          display: {xs:'block'},
          '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth}
        }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component='div'>
            Rommy
          </Typography>
        </Toolbar>
        <Divider/>

        <List>
          {/* {['Incio','Matricula','salir'].map(text => ( ))} */}

          <ListItem disablePadding>
            <ListItemButton component="button" onClick={ () => setMenus('inicio')}>
              <ListItemIcon>
                <HomeIcon/>
              </ListItemIcon>
              <Grid container>
                <ListItemText primary= {"inicio"}/>
                <ListItemText secondary = {''}/>
              </Grid>
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="button" onClick={() => setMenus('matricula')}>
              <ListItemIcon>
                <AppRegistrationOutlined/>
              </ListItemIcon>
              <Grid container>
                <ListItemText primary= {"matricula"}/>
                <ListItemText secondary = {''}/>
              </Grid>
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="button" onClick={() => setMenus('registro')}>
              <ListItemIcon>
                <SettingsIcon/>
              </ListItemIcon>
              <Grid container>
                <ListItemText primary= {"registro"}/>
                <ListItemText secondary = {''}/>
              </Grid>
            </ListItemButton>
          </ListItem>
        </List>
        <Divider sx={{mt:2}}/>
      </Drawer>
    </Box>
  )
}

SideBar.propTypes = {
  drawerWidth: PropTypes.number,
  setMenus: PropTypes.func
}
