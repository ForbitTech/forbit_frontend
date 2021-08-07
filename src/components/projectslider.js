import React  from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



import { ProjectData } from "../data";

const  ProjectSlider =  ({data,setIndex})=> {








    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 5000,
      slidesToShow: 1,
      slidesToScroll: 1,
      afterChange: current => {
        if(setIndex){
          setIndex(current);
        }
      }
    };
    



    return (
      <div
       
        style={{ width: "100%", height: 300, overflow: "hidden" }}
      >
        <Slider {...settings}>
          {/* {Object.keys(ProjectData).map(key=>console.log(ProjectData[key]))} */}
        
          {data.map(item=>(
            <div
            style={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
            }}
          >

            <img src={item.image} style={{ height: 300, width: "100%" }} justifyContent="center" />
          </div>
          ))}
        </Slider>
      </div>
    );
  }
export default ProjectSlider;
