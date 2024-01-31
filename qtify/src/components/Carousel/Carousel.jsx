import React, { useEffect } from 'react'
import styles from './Carousel.module.css'
import Swiper from 'Swiper';
import { useSwiper } from 'swiper/react'
import { Navigation } from 'swiper/modules';

const Controls = ({data}) => {
  const swiper = useSwiper();
  useEffect(() => {
      swiper.slideTo(0);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[data]);
  return <></>
}

const Carousel = ({data, renderComponent}) => {
  return (
    <div className={styles.wrapper}>
        <Swiper styles={{padding: "0px 20px"}}
        initialSlide={0}
        slidesPerView="auto"
        spaceBetween={40}
        allowTouchMove
        >
          <Controls />
        </Swiper>
    </div>
  )
}

export default Carousel