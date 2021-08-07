import React,{useState} from "react";
import { Box} from "@material-ui/core";
import Nav from "./nav";
import OurService from "./our_Service";
import FeatureItem from "./project";
import About from "./about";
import { grey, red } from "@material-ui/core/colors";
import Header from "./header";
import Footer from './footer'
import Projects from "./Slider/Projects";



const Homepage = () => {


  return (
    <Box style={{ maxWidth: "100vw", overflow: "hidden" }}>
      <Nav />
    
   
        <Header/>

      
        <About />
   
     

      <Box display="flex" flexDirection="column" style={{ marginTop: 50 }}>
        <OurService />
      </Box>

      <Box
        display="flex"
        flexDirection="column"
        style={{ backgroundColor: grey[100] }}
      >
        
        <Box display="flex" flexDirection="column" >
         
    <Projects/>
          
        </Box>

        
      </Box>

          <Footer     />
       
    </Box>
  );
};

export default Homepage;
