import React from 'react'
import Slider from "react-slick";
import {makeStyles, createStyles, Theme} from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => 
  createStyles({
    root: {
      margin: '30px 10px',
      position: 'relative',
    },
    slider: {
      position: 'absolute',
      left: 0, right: 0,
    }
  })
)
let settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
}
const SliderShow: React.FC = ({children}) => {
  const classes = useStyles();
    return (
        <div className={classes.root}>
            <Slider {...settings} className={classes.slider}>
                {children}
            </Slider>
        </div>
    )
}

export default SliderShow