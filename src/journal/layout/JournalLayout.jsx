import { Box, Toolbar } from "@mui/material"
import PropTypes from 'prop-types'
import { NavBar, SideBar } from "../components"
import { useState } from "react"
import StudentNotes from "../views/StudentNotes"
import RegisterNote from "../views/RegisterNote"
import Registro from "../views/Registro"
const drawerWidth = 240

export const JournalLayout = ({children}) => {
   const [menus, setMenus] = useState('inicio');
  return (
    <Box sx={{display: 'flex'}}>
 
      <NavBar drawerWidth = {drawerWidth} />
      <SideBar drawerWidth = {drawerWidth} setMenus = {setMenus} />

      <Box
        component='main'
        sx={{flexGrow: 1, p:3}}
      >


        <Toolbar/>
          
          {menus == "inicio" && <StudentNotes/> }
          {menus == "matricula" && <RegisterNote/> }
          {menus == "registro" && <Registro/> } 

        {/* {children} */} 

      </Box>
    </Box>
  )
}

JournalLayout.propTypes = {
  children: PropTypes.object
}
