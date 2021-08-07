import React from 'react';
import { Box,Typography } from '@material-ui/core';
import Card from "@material-ui/core/Card";
import Fade from '@material-ui/core/Fade';

import{grey} from "@material-ui/core/colors"
import "../header.css"
const Content = ({item,title}) => {
    const [checked, setChecked] = React.useState(true);

    return ( 
       <Fade in={checked} >

<Card  style={{ backgroundColor: " #fafafa",  width: "100%", height: 300, overflow: "hidden", marginTop:20}}>
            <Box display="flex" flexDirection="column"  style={{padding:20}} >
            
            <Typography variant="h5"  style={{marginLeft:200,fontWeight:"bold"}} >{title}</Typography>
            <Typography variant="h6" style={{fontWeight:"bold"}} >{item.name}</Typography>

            <Typography variant="body1" style={{ marginTop:10}}>{item.description}</Typography>


            {/* <h1 style={{co}}> </h1>

            <p></p> */}
        </Box>
        </Card>
       </Fade>
     );
}
 
export default Content;