import React from 'react';
import { Box , Typography} from '@material-ui/core';
import { pink } from '@material-ui/core/colors';
import Divider from '@material-ui/core/Divider';

import './footer.css'
const Footer = () => {
    return ( 


<Box id="contact" display="flex" flexDirection="column" className="shape-top" style={{overflow:"hidden", height:"70vh"}}>


    <Box  style={{overflow:"hidden"}}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
    <path fill="White" fill-opacity="1"d="M0,96L48,85.3C96,75,192,53,288,58.7C384,64,480,96,576,101.3C672,107,768,85,864,90.7C960,96,1056,128,1152,144C1248,160,1344,160,1392,160L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
    </svg>
    </Box>
           

       <Box style={{marginLeft:30, marginTop:"-20vh"}} >
            <Typography variant="h4" style={{color:'pink'}}>
                Forbit
            </Typography>
            <Typography style={{color:'white'}}>
            Feasible Orientation of Radical,
            </Typography>
            <Typography style={{color:'white'}}>
            Blooming and Innovative Technology.
            </Typography>
            <Box display="flex"  className="social-icons"  >
            
            <a href="https://www.facebook.com/official.forbit" class="fa fa-facebook"></a>
            <a href="#" class="fa fa-twitter"></a>
            <a href="https://www.youtube.com/channel/UCxIrxt-lY36xmvPFzgEUgTw/videos" class="fa fa-youtube"></a>
            <a href="https://www.instagram.com/rongbuzz.app/" class="fa fa-instagram"></a>

            </Box>
            
           
            </Box>
            <Box display="flex" flexDirection="row-reverse"   >
          <Box display="flex" flexDirection="column" style={{marginTop:"-20vh", marginRight:55}} >

        <Typography style={{color:'white'}}>
        <i class="fas fa-home"></i>
        House No: #09, Shah Ali Bagh
        </Typography>
         

          <Typography style={{color:'white'}}>
       
          <i class="fas fa-mobile"></i>
            01822222222
        </Typography>
         
          </Box>

            </Box>

            <Divider style={{ backgroundColor:"white"}} />
            <Typography variant="subtitle1" style={{color:"whitesmoke"}}>&#169;Copyrights 2021 Forbit All rights reserved</Typography>

</Box>
     );
}
 
export default Footer;