import db from '../data/db.json';
import React,{ useState , useEffect } from 'react';
import Aos from 'aos';
export default function  Menu(props) { 
    useEffect(() => {
      Aos.init();
    }, [])
    const [dbTabsMenu, setdbTabsMenu2 ] = useState(0);
  
        
    
   
    return (
      
  
        <>
        <section id={props.useid} className="pt-3 pt-lg-5 mx-0 mx-lg-auto">
              <div className="pt-3 container ">
                <h2 id="muti" className='mb-5 ps-5'><img src={process.env.PUBLIC_URL+db.youtube.Ytitle} alt={db.youtube.Yalt} className="mb-4 img-fluid" /></h2>
                <div className="d-lg-flex jusitfy-content-between align-items-center mb-5">
                    <div className="col-lg-7  youtubebox ps-md-5 ps-5">
                        <div className="position-relative overflow-hidden">
                        <iframe width="100%" className="position-absolute" src={`https://www.youtube.com/embed/${db.youtube.vlink}`} title="youtube"></iframe>
                        </div>
                  </div>                    
                  <div className="text-center  col ps-lg-5 pe-lg-0 text-lg-start  py-5" id='metitle'>
                  <h3 className='mb-4'>{db.youtube.maintitle} 🔥<span className="d-block">{db.youtube.subtitle}</span></h3>
                      <ul id="menulist" className="pb-3">
                        {
                          db.youtube.adlist.map((v,i)=>{
                            return(
                              <li className="py-3"><span className="ift pe-3">💪</span>{v.listext}</li> 
                              )
                          })
                          
                        }  
                      </ul>
                      <button><a href="https://saladu.co.kr/">지금 바로 구매하기</a></button>
                  </div>
              </div>
              <div>
                <div className='pb-4'>
                  <div className='pb-4'>
                      <div id='metab'>
                          <ul className='d-flex tablist'>
                          {
                            db.Tab.map((v,i)=>{
                              return(
                                <li className='px-3'>
                                  <button onClick={()=>{ setdbTabsMenu2(i) }}>{v.btstiltle.bt}</button>
                                </li>
                              )
                            })
                          }
                        </ul>
                      </div>
                    <span id='deco'>                                                                
                            <strong>{db.Tab[dbTabsMenu].btstiltle.btsspan}</strong>                        
                      </span>
                  </div>     
                  <ul className="row">
                    {

                      db.Tab[dbTabsMenu].menulist.map((v,i)=>{
                        return(
                          <li className="col-md-4 col-4">
                      <div id='mepick' >
                        <a href={v.Mhref} className='d-block position-relative'>
                          <img src={v.Mpic} className="img-fluid pt-md-2 pt-2" alt={v.Malt} />
                          <span className="view"><storng className="px-md-2 px-0">{v.Mstorng}</storng><em>{v.Mem}</em></span>
                        </a>
                        <div id="explain"><p className='pt-md-2 pt-1'>{v.Mdeco}<span className='px-md-2 px-1'>{v.Mnm}</span></p><span  className='nonsale'>{v.Mnone}</span><strong data-aos="zoom-in-down" data-aos-once="false" className='ps-3'>{v.Msale}</strong></div> 
                      </div> 
                      </li>
                        )
                      })
                    }
                  </ul >                                    
                </div>
              </div>        
              </div>
         
        </section>
        </>
    )
}
