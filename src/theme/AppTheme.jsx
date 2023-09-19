import { ThemeProvider } from "@emotion/react"
import { CssBaseline } from "@mui/material"
import { purpleTheme } from "./"
import PropTypes from 'prop-types'
export const AppTheme = ({children}) => {
  return (
    <ThemeProvider theme={purpleTheme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline/>
      {children}
    </ThemeProvider>
  )
}

AppTheme.propTypes = {
  children: PropTypes.object,
}