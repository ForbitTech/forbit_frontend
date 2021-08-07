import { Box , Typography} from '@material-ui/core';
import React,{useState} from 'react';
import ProjectSlider from "../projectslider"
import Content from "./content"

const Project = ({data,title,direction}) => {
    
    const [index, setIndex]= useState(0)

    console.log(direction)
  
    return ( 
      

        <Box display="flex" flexDirection={direction% 2 ===0 ? "row":"row-reverse"} >
        
        
            <Box display="flex"  flexGrow="1"  style={{ maxWidth: "50%", minWidth: "50%", marginTop:20 }}  justifyContent="center" alignItems="center"  >
            <ProjectSlider data = {data} setIndex={setIndex}/>
            </Box>

            <Box display="flex"  flexGrow="1"  flexDirection="column" alignItems="center"  justifyContent="center" style={{ padding: 10 }}>
                        <Content item ={data[index]} title={title}/>
                </Box>
            </Box>
        
     );
}
 
export default Project;