import { Navigate, Route, Routes } from "react-router-dom"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
// import { JournalRoutes } from "../journal/routes/JournalRoutes"
import { useAuthStore } from "../hooks"
import MiniDrawer from "../journal/pages/MiniDrawer"
// import { LanguageInfo } from "../journal/views"

export const AppRouter = () => {
  const { status } = useAuthStore();
  
  return (
    <Routes>
      {
        (status === 'not-authenticated')
        ?
          <>
            <Route path="/auth/*" element = {<AuthRoutes/>}/>
            <Route path="/*" element= {<Navigate to="/auth/login"/>} />
          </>
        :
          <>
            {/* <Route path="/" element = {<JournalRoutes/>}/> */}
            <Route path="/drawer" element={<MiniDrawer/>} /> 
              {/* <Route path="/info" element={<LanguageInfo/>}></Route> */}
            <Route path="/*" element = { <Navigate to={'/drawer'} /> } />
          </>
      }
    </Routes>
  )
}

