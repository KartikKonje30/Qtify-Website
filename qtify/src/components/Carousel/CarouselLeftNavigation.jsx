import React, { useEffect, useState } from 'react'
import { useSwiper } from 'swiper/react'
import {ReactComponent as LeftArrow} from '../../assets/Left_Arrow.svg'
import styles from './Carousel.module.css'

const CarouselLeftNavigation = () => {
    const swiper = useSwiper();
    const [isBegining, setIsBegining] = useState(swiper.isBeginning);

    useEffect(() => {
        swiper.on("slideChange", function(){
            setIsBegining(swiper.isBeginning);
        })
    },[swiper])

  return (
    <div className={styles.leftNavigation}>
        {!isBegining ? <LeftArrow onClick={() => swiper.slidePrev()} />: null}
    </div>
  )
}

export default CarouselLeftNavigation