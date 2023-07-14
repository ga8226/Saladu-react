import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
export default function Banner(props) {  
    return (
        <>
   
            <Swiper
             spaceBetween={0}
             slidesPerView={1}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
             autoplay={{
               delay: 2500,
               disableOnInteraction: false,
             }}
    
            pagination={{
            clickable: true,
             }}

             modules={[Autoplay, Pagination]}
             loop={true}
           
          >
        {
        [1, 2, 3, 4].map(function(v, i){
     return(
        <SwiperSlide className={`bg${v}`} key={i}></SwiperSlide>
     )
  })


        }
      
        
      </Swiper>
            
       
        </>
    )
}