export default function  Menu(props) {  
    return (
        <>
        <section id={props.useid} style={{height : "100vh"}} className="container pt-3 pt-lg-5 px-0 px-lg-3 mx-0 mx-lg-auto">
          <div className="pt-3">
          <h2 id="menu"><img src="../img/youtubetitle.gif" alt="타이틀" className="mb-4" /></h2>
          <div className="d-lg-flex jusitfy-content-between align-items-center">
            <div className="col-lg-7  youtubebox">
              <div className="position-relative overflow-hidden">
              <iframe width="100%" className="position-absolute" src="https://www.youtube.com/embed/eMkIoyUk3Lk?start=299" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              </div>
            </div>
                     
          <div className="text-center  col ps-lg-5 pe-lg-0 text-lg-start">
            <h3 className="">요즘 누가 안 먹고 관리하나요?<span className="d-block">쉽게 질리는 식단은 bye 🔥</span></h3>
            <ul id="menulist">
                <li className="py-3"><span className="ift pe-3">💪</span>건강과 맛을 동시에!</li>
                <li className="py-3"><span className="ift pe-3">💪</span>짜여진맛? no! 내가 만드는 나만의 주스</li>
                <li className="py-3"><span className="ift pe-3">💪</span>오직 샐러드유에서만!</li>                 
            </ul>
            <button><a href="https://saladu.co.kr/">지금 바로 구매하기</a></button>
          </div>
         </div>
         <div>

         </div>

          </div>
         
        </section>
        </>
    )
}