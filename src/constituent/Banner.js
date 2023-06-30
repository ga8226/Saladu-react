import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
export default function Banner(props) {  
    return (
        <>
        <div className="" id="banner">
            <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper container mt-5"
      >
        <SwiperSlide><div className="bg1"></div></SwiperSlide>
        <SwiperSlide><div className="bg2"></div></SwiperSlide>
        <SwiperSlide><div className="bg3"></div></SwiperSlide>
        <SwiperSlide><div className="bg4"></div></SwiperSlide>
      </Swiper>
            
         </div>
        </>
    )
}