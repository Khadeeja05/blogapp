import {Button,TextField,Typography} from '@mui/material'
import React from 'react'
const Addblog=()=>{
    return(
        <div>
            <br />
            <Typography variant='h2'>Addblog</Typography>
            <br /><br />
            <TextField variant='outlined' label='Blogname'>Blogname</TextField>
            <br /><br />
            <TextField variant="outlined" label="Description">Description</TextField>
            <br /><br />
            <TextField variant="outlined" label="Author name">Author name</TextField>
             <br /><br />
            <Button variant='contained'>Submit</Button><br />
        </div>
    )
}
export default Addblog;