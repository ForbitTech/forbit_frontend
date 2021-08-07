import { Box } from '@material-ui/core';
import React from 'react'
import Icon1 from '../Image/icon/icon1.png'
import Icon2 from '../Image/icon/icon2.png'
import Icon3 from '../Image/icon/icon3.png'
import Icon4 from '../Image/icon/icon4.png'


import './styles.css'



const Demo = () => {
   
    return ( 
      
      <Box display="flex"  style={{marginLeft:200,marginTop:50, padding:5}}  >
      <img className="icon" src={Icon1}  />
        <img  className="icon2" src={Icon2} />  
         <img className="icon" src={Icon3} />
        <img  className="icon2" src={Icon4} />
      </Box>
     
        
     );
}
 
export default Demo;