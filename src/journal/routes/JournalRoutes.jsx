import { Navigate, Route, Routes } from "react-router-dom"
import { JournalPage } from "../pages/JournalPage"
import RegisterNote from "../views/RegisterNote"
import StudentNotes from "../views/StudentNotes"
// import MiniDrawer from "../pages/MiniDrawer"
// import { Drawer } from "@mui/material"

export const JournalRoutes = () => {
  return (
    <Routes>
      <Route path="/" element = {<JournalPage/>}/>
      <Route path="/*" element = {<Navigate to = "/"/>}/>
      {/* <Route path="/register" element={ <RegisterNote/> } /> */}
      {/* <Route path="/student" element={<StudentNotes/>} /> */}
      {/* <Route path="/drawer" element = {<MiniDrawer/>} /> */}
    </Routes>
  )
}
