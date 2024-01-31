import React, { useEffect, useState } from 'react'
import { useSwiper } from 'swiper/react'
import {ReactComponent as LeftArrow} from '../../assets/Left_Arrow.svg'

const CarouselLeftNavigation = () => {
    const swiper = useSwiper();
    const [isBegining, setIsBegining] = useState(swiper.isBeginning);

    useEffect(() => {
        swiper.on("slideChange", function(){
            setIsBegining(swiper.isBeginning);
        })
    },[])

  return (
    <div>
        {!isBegining && <LeftArrow onClick={() => swiper.slidePrev()} />}
    </div>
  )
}

export default CarouselLeftNavigation