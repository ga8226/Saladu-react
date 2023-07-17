export default function  Menu(props) {  
    return (
        <>
        <section id={props.useid} style={{height : "100vh"}} className="container pt-5">
          <h2 className="text-center">지금 가장 HOT 해요</h2>
          <div className="d-flex jusitfy-content-between">
          <iframe width="700" height="360" src="https://www.youtube.com/embed/eMkIoyUk3Lk?start=299" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <div className="px-3">
            <h3>제이제이가 pick!한 주스</h3>
            <ul>
                <li className="py-3"><i className="bi bi-check2"></i>건강과 맛을 동시에!</li>
                <li className="py-3"><i className="bi bi-check2"></i>짜여진맛? no! 내가 만드는 나만의 주스</li>
                <li className="py-3"><i className="bi bi-check2"></i>오직 샐러드유에서만</li>
                <button><a href="https://saladu.co.kr/">지금 바로 구매하기</a></button>
            </ul>
          </div>
         </div>
        </section>
        </>
    )
}