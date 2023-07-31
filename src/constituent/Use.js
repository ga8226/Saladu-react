import db from '../data/db.json'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay} from "swiper";
export default function Use(props) {  
    return (
        <>
            <section  id={props.useid} className="container pt-3 pt-lg-5 px-0 px-lg-3 mx-0 mx-lg-auto">
            <div className="pt-3">
                <h2 className='mb-5 center'>💚 이용방법 💚</h2>
                <div className="jusitfy-content-between align-items-center pt-5">
                    <ul className="d-flex mb-5">
                    {
                        db.Use.explain.map((v,i)=>{
                            return(
                                <li className='col-4 px-4 center'>
                                    <div className='center mb-4'><img src={v.useicon} alt="" id='useimg' className='img-fluid'/></div>
                                    <div className='py-4'>
                                    <strong>{v.usenum}</strong>
                                    <p className='pt-5 mb-0'>{v.usedeco}</p>
                                    </div>
                                </li>
                            )
                        })   
                    }
                    </ul>
                    <p className='center mb-5 pt-4'>{db.Use.useFT}</p>
                </div>
                <h2 className='mb-5 center pt-3'><img className='review mt-3 mb-4' src={db.Use.reicon} alt="별이미지"/>✨ 샐러드유 고객들의 별별리뷰 ✨</h2>
                <div>
                    <Swiper
                    spaceBetween={50}
                    slidesPerView={3}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                      }}
             
                      modules={[Autoplay]}
                      loop={true}
                    >
                    {
                         db.Use.reviewbox.map(function(v, i){
                            return(
                               <SwiperSlide><p key={i}><span id="reslide">{v.reid}</span>{v.realview}</p></SwiperSlide>
                            )
                         })
                       

                    }
                    </Swiper>
                    
                </div>
                  
            </div>
            
            </section>
        </>
    )
}