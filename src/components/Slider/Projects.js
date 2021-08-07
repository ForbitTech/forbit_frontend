import { Box, Typography } from '@material-ui/core';
import React from 'react';
import { ProjectData } from "../../data";
import Project from "./project"
import {
  grey,green
  
} from "@material-ui/core/colors";


const Projects = () => {
    return ( 
        <Box   id="Project" style={{backgroundColor: grey[300]}}  >
        
        <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Typography variant="h4" color="initial">
          Projects
        </Typography>
      </Box>
        {Object.keys(ProjectData).map((key,i)=><Project key ={key} data={ProjectData[key]} title={key} direction={i}/>)}
    
        </Box>
     );
}
 
export default Projects;