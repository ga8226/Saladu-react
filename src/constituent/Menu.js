import db from '../data/db.json'
export default function  Menu(props) {  
    return (
        <>
        <section id={props.useid} className="container pt-3 pt-lg-5 px-0 px-lg-3 mx-0 mx-lg-auto">
          <div className="pt-3">
          <h2 id="menu"><img src={db.youtube.Ytitle} alt={db.youtube.Yalt} className="mb-4" /></h2>
          <div className="d-lg-flex jusitfy-content-between align-items-center">
            <div className="col-lg-7  youtubebox">
              <div className="position-relative overflow-hidden">
              <iframe width="100%" className="position-absolute" src={`https://www.youtube.com/embed/${db.youtube.vlink}`} ></iframe>

              </div>
            </div>
                     
          <div className="text-center  col ps-lg-5 pe-lg-0 text-lg-start  py-md-5">
            <h3 className='px-3'>{db.youtube.maintitle}<span className="d-block">{db.youtube.subtitle}</span></h3>
            <ul id="menulist" className="pb-3">
              {
                db.youtube.adlist.map((v,i)=>{
                  return(
                    <li className="py-3"><span className="ift pe-3">{v.adspan}</span>{v.listext}</li> 
                    )
                })
                
              }  
            </ul>
            <button><a href="https://saladu.co.kr/">지금 바로 구매하기</a></button>
          </div>
         </div>
         <div>
          <div className="mt-3">
            <div className='pb-5'>
              <span><a href="#"># 올 여름 다이어트 격파식단</a></span>
            </div>     
            <ul className="row">
              {

                db.Menu.map((v,i)=>{
                  return(
                    <li className="col-md-4">
                <div>
                <a href={v.Mhref} className='d-block position-relative'>
                  <img src={v.Mpic} className="img-fluid" alt={v.Malt} />
                  <span className="view"><storng className="px-2">{v.Mstorng}</storng><em>{v.Mem}</em></span>
                </a>
                <div><p>{v.Mnm}</p><strong>{v.Msale}</strong><span>{v.Mnone}</span></div>
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