import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Collapse, Grid } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import { AppRegistrationOutlined, ExpandLess, ExpandMore, LogoutOutlined, TextSnippet } from '@mui/icons-material';
const drawerWidth = 240;
import SettingsIcon from '@mui/icons-material/Settings';
// import StudentNotes from '../views/StudentNotes';
import RegisterNote from '../views/RegisterNote';
import Registro from '../views/Registro';
import { useAuthStore } from '../../hooks';
import { LanguageInfo, General } from '../views';
import { EstudianteEspecialidad } from '../views/EstudianteEspecialidad';
const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function MiniDrawer() {

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [menus, setMenus] = React.useState('inicio');
  const {startOnLogout} = useAuthStore();
  const [openn, setOpenn] = React.useState(true);

  const handleClick = () => {
    setOpenn(!openn);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };


  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          {/* <Typography variant="h6" noWrap component="div">CELEN</Typography> */}
          <Grid container direction='row' justifyContent='space-between' alignItems='center'>
          <Typography variant="h6" noWrap component='div'>CELEN</Typography>
          <IconButton color="error" onClick={startOnLogout}>
            <LogoutOutlined/><Typography variant="h6" noWrap component='div'>Salir</Typography>
          </IconButton>
        </Grid>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>

          <ListItemButton onClick={handleClick}>
            <ListItemIcon>
              <HomeIcon/>
            </ListItemIcon>
            <ListItemText primary="Inicio" />
            {openn ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={openn} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }} onClick={() => setMenus('general')} >
                <ListItemIcon>
                  <TextSnippet/>
                </ListItemIcon>
                <ListItemText primary="Notas" />
              </ListItemButton>
            </List>
          </Collapse>

          <ListItem disablePadding>
            <ListItemButton component="button" onClick={ () => setMenus('inicio')}>
              <ListItemIcon>
                <HomeIcon/>
              </ListItemIcon>
              <Grid container>
                <ListItemText primary= {"inicio"}/>
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
              </Grid>
            </ListItemButton>
          </ListItem>
        </List>
        <Divider/>
        
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        {/* {menus == "inicio" && <StudentNotes/> } */}
        {menus == "inicio" && <LanguageInfo setMenus = {setMenus}/> }
        {menus == "matricula" && <RegisterNote/> }
        {menus == "registro" && <Registro/> }
        {menus == "general" && <General/> }
        {menus == "estudianteEspecialidad" && <EstudianteEspecialidad/>}
      </Box>
    </Box>
  );
}