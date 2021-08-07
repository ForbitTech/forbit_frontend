import React, { Fragment,useState,useEffect } from "react";
import { Box, Typography } from "@material-ui/core";
import AOS from "aos";
import "aos/dist/aos.css";
import { grey } from "@material-ui/core/colors";
import Slider from "./projectslider"


AOS.init();
const Projects = () => {

  const [data,tttt] = useState({title:"",description:""})



  
  return (
    <Fragment style={{ marginTop: 50 }}>
      <Box
        id="Project"
        display="flex"
        flexDirection="column"
        alignItems="center"
        style={{ padding: 10 }}
      >

        <Typography variant="h4" color="textPrimary">
          Projects
        </Typography>
      </Box>

      <Box display="flex">
        <Box display="flex" style={{width:"50%",padding:10}}>
          <Slider setData={tttt} />
        </Box>
      
        <Box display="flex" flexDirection="column" style={{width:"50%",padding:10}}>

        

          <h1>{"title"}</h1>
          <p>{"description"}</p>

        </Box>
      </Box>
     {/*  {ProjectData.map((item, index) => (

      
                
        <Box
          key={index}
          id={item.title}
          data-aos={item.animation}
          display="flex"
          style={{
            padding: 10,
            backgroundColor: index % 2 === 0 ? grey[50] : grey[300],
          }}
        >
         {setindex(ProjectData)}
          <Box
            display="flex"
            flexGrow="1"
            style={{ maxWidth: "50%", minWidth: "50%" }}
            order={2}
            justifyContent="center"
            alignItems="center"
          >
            <Box display="flex" style={{ width: "100%" }}>
      
              
              <Slider  />
            </Box>
            
          </Box>
          
          <Box
            display="flex"
            flexDirection="column"
            flexGrow="1"
            alignItems="center"
            justifyContent="center"
            style={{ padding: 10 }}
            order={index % 2 === 0 ? 3 : 1}
          >
            <Typography
              variant="h6"
              style={{ color: index % 2 === 0 ? grey[600] : grey[800] }}
            >
              {item.title}
            </Typography>

            <Typography
              variant="body1"
              style={{
                marginTop: 10,
                color: index % 2 === 0 ? grey[600] : grey[800],
              }}
            >
              {item.slide1}
            </Typography>
          </Box>
        </Box>
      ))} */}
    </Fragment>
  );
};

export default Projects;
