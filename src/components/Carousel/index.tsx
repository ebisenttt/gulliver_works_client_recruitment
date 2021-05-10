import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './style.module.scss';

interface CarouselProps {
  isInfinite?: boolean;
}

const Carousel: React.FC<CarouselProps> = ({children, isInfinite = true}) => {
  const settings = {
    centerMode: true,
    variableWidth: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false
  };
  return <Slider {...settings} className={styles.carousel}>{children}</Slider>
} 

export default Carousel;