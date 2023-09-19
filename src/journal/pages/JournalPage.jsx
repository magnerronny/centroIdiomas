// import { Typography } from "@mui/material"
import { IconButton } from "@mui/material"
import { JournalLayout } from "../layout/JournalLayout"
import { AddOutlined } from "@mui/icons-material"
// import { RegisterNote } from "../views/RegisterNote"



export const JournalPage = () => {

  return (
    <JournalLayout>
      {/* <Typography>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quis dolorem illo temporibus consequuntur asperiores.
      </Typography> */}
      {/* <Registro/> */}
      {/* <NothingSelectedView/> */}
      {/* <NoteView/> */}
      {/* {(menus === "inicio" && <NoteView/> )} */}
      {/* <RegisterNote/> */}
      {/* <Registro/> */}
      {/* <Routes>
        <Route path="/register" element={ <RegisterNote/> } />
        <Route path="/student" element={<StudentNotes/>} />
      </Routes> */}

      {/* <StudentNotes/> */}

      <IconButton
        size="large"
        sx={{
          color: 'white',
          backgroundColor: 'error.main',
          ':hover': {backgroundColor: 'error.main', opacity: 0.9},
          position: 'fixed',
          right:50,
          bottom:50
        }}
      >
        <AddOutlined sx={{fontSize:30}}/>
      </IconButton>
    </JournalLayout>
    
  )
}
