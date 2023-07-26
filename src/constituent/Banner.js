import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import db from '../data/db.json'
export default function Banner(props) {  
    return (
        <>
   
            <Swiper
            id={props.id}
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
        db.swiperbanner.map(function(v, i){
     return(
        <SwiperSlide className={`bg${v.bcls}`} key={i}></SwiperSlide>
     )
  })


        }
      
        
      </Swiper>
            
       
        </>
    )
}