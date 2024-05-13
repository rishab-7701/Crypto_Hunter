import { AppBar, Container, MenuItem, Select, ThemeProvider, Toolbar, Typography, createTheme, makeStyles } from '@material-ui/core'
import React from 'react'
import { useNavigate} from 'react-router-dom';
import { CryptoState } from '../CryptoContext';


const useStyles = makeStyles(()=>({
   title:{
    flex:1,
    color:"gold",
    fontFamily:"Montserrat",
    fontWeight:"bold",
    cursor:"pointer",
   }, 
}));

function Header() {
    
    const navigate = useNavigate();
    const classes = useStyles();

    const {currency,setCurrency} = CryptoState()

    console.log(currency);

    const darkTheme = createTheme({
        palette:{
            primary:{
                main:"#000",
            },
            type : "dark", // for dark theme of our app
        }
    })

  return (
    <ThemeProvider theme={darkTheme}>
    <AppBar color='primary' position='static'>
      <Container>
        <Toolbar>
           <Typography onClick={()=> navigate("/")} className={classes.title}> Crypto Hunter</Typography> 
           <Select variant='outlined' style={{
            width:100,
            height:40,
            marginLeft:15,
           }} 
           value ={currency}
           onChange={(e)=> setCurrency(e.target.value)}
           
           >
            <MenuItem value={"USD"}>USD</MenuItem>
            <MenuItem value={"INR"}>INR</MenuItem>
           </Select>
        </Toolbar>
      </Container>
    </AppBar>
    </ThemeProvider>
  )
}

export default Header
Header