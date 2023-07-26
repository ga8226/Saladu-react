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

                [1,2,3,4,5,6].map(()=>{
                  return(
                    <li className="col-md-4 position-relative">
                <div>
                <a href="" className='d-block position-relative'>
                  <img src="https://atowertr6856.cdn-nhncommerce.com/data/goods/16/07/14/71/71_detail_019.jpg" className="img-fluid" alt="" />
                  <span className="view"><storng className="px-2">1050명</storng><em>주문폭주중</em></span>
                </a>
                <div><p>치즈샐러드</p><strong>6500원</strong><span>8100원</span></div>
                </div> 
                </li>


                  )
                })
              }
              
              {/* <li className="col-md-4">
                <div>
                <a href=""><img src="https://atowertr6856.cdn-nhncommerce.com/data/goods/20/10/43/1000000060/1000000060_detail_012.jpg" className="img-fluid"  alt="" /></a>
                <div><p><storng className="px-2">234명</storng>주문중</p></div>
                <div><p>닭가슴살 비엔나 소시지</p><strong>7100원</strong><span>9000원</span></div>
                </div>
                  </li>
              <li className="col-md-4">
                <div>
                <a href=""><img src="https://atowertr6856.cdn-nhncommerce.com/data/goods/70/01/01/117/117_detail_063.jpg" className="img-fluid"  alt="" /></a>
                <div><p><storng className="px-2">105명</storng>주문중</p></div>
                <div><p>파스타샐러드</p><strong>7100원</strong><span>9300원</span></div>
                </div>
                </li>
              <li className="col-md-4">
                <div>
                <a href=""><img src="https://atowertr6856.cdn-nhncommerce.com/data/goods/16/07/14/74/74_detail_091.jpg" className="img-fluid"  alt="" /></a>
                <div><p><storng className="px-2">58명</storng>보는중</p></div>
                <div><p>닭가슴살볼 옥수수톡 샐러드</p><strong>6900원</strong><span>9000원</span></div>
                </div>
                </li>
              <li className="col-md-4">
                <div>
                <a href=""><img src="https://atowertr6856.cdn-nhncommerce.com/data/goods/16/07/14/73/73_detail_015.jpg" className="img-fluid"  alt="" /></a>
                <div><p><storng className="px-2">589명</storng>주문폭주중</p></div>
                <div><p>닭가슴살볼 깻잎가득 샐러드</p><strong>6900원</strong><span>9000원</span></div>
                </div>
             </li>
              <li className="col-md-4">
                <div>
                <a href=""><img src="https://atowertr6856.cdn-nhncommerce.com/data/goods/22/05/19/1000000404/1000000404_detail_02.jpg" className="img-fluid"  alt="" /></a>
                <div><p><storng className="px-2">44명</storng>보는중</p></div>
                <div><p>갈릭페퍼 로스트 닭다리살 샐러드</p><strong>8900원</strong><span>11000원</span></div>
                </div>
               </li>   */}
            </ul >                                    
          </div>
         </div>
        
          </div>
         
        </section>
        </>
    )
}