import { Box, Typography } from '@material-ui/core';
import Typed from 'react-typed'
import React from 'react';
import Welcome from '../Image/welcome-thumb.png'
import  './header.css'
import Demo from './test'
const Header = () => {
    return ( 

    <Box  id="marginTop"  display="flex" flexDirection="column" className="header" style={{overflow:"hidden", height:"97vh"}}>



        
        
        
        <Box   style={{width:"100%", height:"100vh", overflow:'hidden'}}>

        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 2353.6 1500" >
        <path className="wave"  fill="white" d="M2353.6,0v1112.5H0c132.1-171.4,350.7-231.4,655.9-179.9c474,79.9,637.1-23.3,882.7-262.4
        C1802.7,413,1870,54.1,2353.6,0z" />
        </svg>



        </Box>
        <Box  display="flex" flexDirection="column"  style={{ overflow:'hidden', marginTop:"-150vh", marginLeft:30}} >
    
    <Typography variant='h2' style={{color:'pink'}}>
                <Typed strings={['Forbit']} 
                typeSpeed = {100} backSpeed={600} showCursor={false} />
            </Typography>

            <Typography variant='h3' style={{color:'lightgray'}}>
                <Typed strings= {['Feasible Orientation of Radical, ']}
                 typeSpeed = {200} backSpeed={300} showCursor={false}  />
            </Typography>
                       
            <Typography variant='h4' style={{color:'lightgray'}}>
                <Typed strings={['Blooming and Innovative Technology.']} typeSpeed={1000} startDelay={200} showCursor={false}   />
            </Typography>
            <Demo style={{ marginTop:50 ,padding:10}}/>
      </Box>


            <Box className="Welcome"  display="flex" flexDirection="row-reverse" style={{width:"100%", height:"100vh", overflow:'hidden', marginTop:"-100vh"}}>
               <img src={Welcome} style={{ overflow:"hidden", maxHeight:500, marginRight:150 ,marginTop:10}}/>
            </Box>
                        
                   
    </Box>

 



   

     );
}
 
export default Header;