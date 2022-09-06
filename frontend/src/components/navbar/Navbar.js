//React
import React from 'react'
import { Link } from 'react-router-dom'
//assets
import whitelogo from '../../assets/logos/iconleftwhite.svg'
//mui
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';

//icon
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
//Styles
import '../../styles/components/logo/_logo.scss'
import '../../styles/components/navbar/_navbar.scss'
//Theme
import { createTheme, ThemeProvider, Button } from '@mui/material'

const theme = createTheme ({
  palette: {
    button: {
      primary: {
        main: '#091D39',
        contrastText: '#FFFFFF', 
      },
      secondary: {
        main: '#D44651',
      },
    },
    appbar: {
      primary: {
        main: '#D44651',
        contrastText: '#FFFFFF'
      }
    }
  },
});

/*unread posts are highlighted in array w/ red outline*/

function Navbar() {
  return (
    <ThemeProvider theme={theme}>
      <div >
        <AppBar sx={{height: 70, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', bgcolor: 'appbar.primary.main'}}  >
          <img src={whitelogo} alt ='groupomania logo in white' className='navbar-logo__home'></img>
          <div className='navbar-parent'>
            <Badge sx ={{ bgcolor: 'transparent'}}>
              <NotificationsNoneOutlinedIcon />
            </Badge>
            <Link className='link-global' to='/profilepage'>
              <Button varient='contained'>
                  <Avatar />
              </Button>
            </Link>
          </div>
        </AppBar>
      </div>
    </ThemeProvider>
  )
}

export default Navbar