import React, { Fragment } from "react";
import { Typography, Box } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import Slide0 from "../Image/service-thumb-1.png";
import AOS from "aos";
import  './about.css'
import "aos/dist/aos.css";
import {AboutData }from '../data'
AOS.init();





const About = () => {
  const theme = useTheme();
  return (
    <Fragment style={{ marginTop: 50 }}>

      {AboutData.map((item,index)=>{
       return(
        <Box
        key={index}
        id="about"
        display="flex"
        style={{
          padding: 10,
        }}
      >
        <Box
          display="flex"
          flexGrow="1"
          style={{ maxWidth: "50%", minWidth: "50%" }}
          justifyContent="center"
          alignItems="center"
        >
          <Box className="About" display="flex" style={{ width: "100%" }}>
            {" "}
            <img src={Slide0} style={{ height: 500, marginLeft: 150 }} />
          </Box>
        </Box>

        <Box
          display="flex"
          flexDirection="column"
          flexGrow="1"
          alignItems="center"
          justifyContent="center"
          style={{ padding: 10 }}
        >
          <Typography variant="h6">About Us</Typography>

          <Typography
            variant="subtitle1"
            style={{
              marginTop: 10,
            }}
          >
          {item.description}
          </Typography>
        </Box>
      </Box>
       )
     
      })}
    </Fragment>
  );
};

export default About;
