import React, { Fragment } from "react";
import { Typography, Box } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import { Link, animateScroll as scroll } from "react-scroll";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import  './service.css'
import {
  grey,green
  
} from "@material-ui/core/colors";

import AOS from "aos";
import "aos/dist/aos.css";
import { ServiceData } from "../data";

AOS.init();
const OurService = () => {
  const theme = useTheme();
  return (
    <Fragment>
      <Box
      
        id="Service"
        display="flex"
        flexDirection="column"
        alignItems="center"
        style={{ padding: 10 }}
      >
        <Typography variant="h4" color="initial">
          {" "}
          Services{" "}
        </Typography>
      </Box>

      <Box>
        <Grid
        
          container
          style={{
            padding:20,
            marginTop:20,
            width: "100%",
            overflow: "hidden",
            backgroundColor: grey[300],
            height: 800,
            
          }}
        >
          {ServiceData.map((item, index) => {
            return (
              <Grid
              className="Card"
                item
                xs={3}
                key={index}
                data-aos="fade-up"
                // style={{ padding: 15 }}
              >
                <Link
                  style={{ activeClass: "1px solid #333" }}
                  activeClass="active"
                  to={item.title}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  <Box
                  
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    style={{ cursor: "pointer", marginTop:20 }}
                  >
                    <Avatar
                     className="Service"
                      src={item.image}
                      style={{ width: 80, height: 80 }}
                    ></Avatar>

                    <Card
                   
                      style={{
                        
                        marginTop: -40,
                        height: 300,
                        width: 300,
                        paddingTop: 40,
                        backgroundColor: " #fafafa",
                        
                      }}
                    >
                      <Box display="flex" justifyContent="center">
                        <Typography variant="overline">{item.title}</Typography>
                      </Box>

                      <Box display="flex" justifyContent="center">
                        <Typography variant="subtitle1" align="left" style={{padding:10}}>
                          {" "}
                          Though it is an art of expression in digital media, we
                          redefine graphic as a placeholder of branding.
                          Nevertheless, we care about perceiving your
                          imagination and bringing to life effectively.
                        </Typography>
                      </Box>
                    </Card>
                  </Box>
                </Link>
              </Grid>
            );
          })}
        </Grid>
      </Box>
   
    </Fragment>
  );
};

export default OurService;
