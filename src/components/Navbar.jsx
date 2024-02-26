import{AppBar,Toolbar,Button,Typography,Box} from "@mui/material"
import React from 'react'
import {Link} from 'react-router-dom'


const Navbar=()=>{
    return(
        <div><Box sx={{flexGrow:1}}>
            <AppBar position='static' color='primary'>
                <Toolbar>
                    <Typography sx={{flexGrow:1}} align='left' variant='h6'>BLOG_APP</Typography>
                    
                        
                        
                    <Link to="/addblog" style={{color:"white"}}Addblog>AddBLog </Link><Button/>
                        <br /><br />
                        <Link to="/dashboard" style={{color:"white"}}Dashboard>Dashboard
                          </Link><Button/>
                        <br /><br />
                </Toolbar>
            </AppBar>
            </Box>
        </div>
        
    )
}
export default Navbar;