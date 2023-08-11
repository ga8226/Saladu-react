import db from '../data/db.json'
import { Swiper, SwiperSlide } from 'swiper/react';

import { Autoplay, Navigation } from "swiper";

export default function Use(props) {  
    return (
        <>
            <section  id={props.useid} className="pt-3 pt-lg-5">
                <div className="pt-3" id="use1">
                     <div className='pt-5 container mx-auto'>
                            <h2 className='mb-5 center'>💚 이용방법 💚</h2>
                            <div className="jusitfy-content-between align-items-center pt-lg-4 pt-md-3">
                                <ul className="d-lg-flex mb-4">
                                 {
                                     db.Use.explain.map((v,i)=>{
                                           return(
                                             <li className='col-lg-4 col-12 px-4  py-md-3 py-lg-0 center' id="usede">
                                                 <div className='center'><img src={v.useicon} alt=""  className='img-fluid'/></div>
                                                   <div className='py-4'>
                                                   <strong>{v.usenum}</strong>
                                                   <p className='pt-3'>{v.usedeco}</p>
                                                   </div>
                                            </li>
                                         )
                                     })   
                                  }
                                </ul>
                                 <p className='center pt-4 f19'>{db.Use.useFT}</p>
                             </div>                    
                        </div>
                       
                </div>
                <div id='use2' className='md-bg'>
                    <div className='container'>
                       <h2 className='mb-4 center'><img className='review mt-3 mb-5' src={process.env.PUBLIC_URL+db.Use.reicon} alt="별이미지"/>✨ 샐러드유 고객들의 별별리뷰 ✨</h2>
                            <div className='d-flex justify-content-between pt-lg-4 pt-md-3'>
                                 {/* <div id='reviewtext'>
                                       <span><img src={process.env.PUBLIC_URL+db.Use.reicon2} alt="함께한이미지" className='review2'/></span>                      
                                       <p className='px-4'>만족스러운 고객들과 함께한 <strong className='recolor'>2년</strong>이상의 세월</p>                       
                                 </div> */}
                            
                                  <Swiper
                                    modules={[Autoplay, Navigation]}
                                    spaceBetween={50}
                                    slidesPerView={2}
                                    autoplay={{
                                        delay: 100000,
                                        disableOnInteraction: false,
                                    }}
                            
                                    
                                    navigation
                                    loop={true}
                                    >
                                    {
                                       db.Use.reviewbox.map(function(v, i){
                                        return(
                                        <SwiperSlide id='reviewswiper'>
                                            <div>
                                                <div className='d-flex align-items-center re1'>
                                                    <img src={process.env.PUBLIC_URL+v.reimg} alt="" />
                                                    <div>
                                                        <p>
                                                        {v.rename}
                                                        </p>
                                                        <span className='d-block'>
                                                        {v.resubde}
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className='re2'>
                                                    <h4>{v.retitle}</h4>
                                                    <p className='pt-md-3 pt-lg-2'>{v.realview}</p>
                                                </div>
                                            </div>
                                            
                                        </SwiperSlide>
                                        )
                                    })
                                    
                                    }
                                    </Swiper>
                            </div>
                     </div> 
                    
                </div>
             
            </section>
        </>
    )
}