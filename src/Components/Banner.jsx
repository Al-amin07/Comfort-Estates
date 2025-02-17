import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

 import "swiper/css/navigation";
 import "swiper/css/pagination";
 import "swiper/css/scrollbar";
 import 'swiper/css/effect-fade';
 import 'animate.css';
import { EffectFade } from 'swiper/modules';

const Banner = () => {
  return (
    <Swiper
      className="h-[300px] md:h-[460px] lg:h-[650px]  mb-24  rounded-2xl animate__animated animate__bounceInLeft z-[1]"
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade]}
      spaceBetween={50}
      slidesPerView={1}
      effect="fade"
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}

      
      // onSwiper={(swiper) => console.log(swiper)}
      // onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide className="z-0">
        <img src="/lux6.png" alt="" className="w-full" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/lux2.png" alt="" className="w-full" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/lux3.png" alt="" className="w-full" />
      </SwiperSlide>
      
      ...
    </Swiper>
  );
};

export default Banner;
