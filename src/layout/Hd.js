export default function Hd(props) {
    let dbnavi = {     
        topad : {
            adtitle : "지금 가입하면 주스 0원 & 정기배송 15%할인",
            adlink : ""
        },
        navi : [
            {
                nm : ['이용방법','company.html'],
                cls : 'navi use'
            },
            {
                nm : ['메뉴','show.html'],
                cls : 'navi menu'
            },
            {
                nm : ['내 몸의소리','center.html'],
                cls : 'navi form'
            },
            {
                nm : ['창업안내','center.html'],
                cls : 'navi setup'
            }
        ],
        
    }
    return (
        <>
            <header className="fixed-top border-bottom bg-white">
                <div className="ad text-center py-2" id="event">
                    <a href={dbnavi.topad.adlink} className="text-white">{dbnavi.topad.adtitle}</a>
                </div>
                <div className="d-flex justify-content-between align-items-center mx-lg-5 px-3">
                    <h1>
                        <a href=""><img src="./img/logo.svg" alt="" /></a>
                    </h1>
                    <ul id="gnb" className="d-flex">
                        {
                        dbnavi.navi.map(( val, idx) => {
                                return(
                                    <li className={val.cls} id={'navilist'+idx}>
                                        <a href={val.nm[1]}>{val.nm[0]}</a>
                                    </li>
                                )
                        })
                        } 
                    </ul>
                </div>                
            </header>           
        </>
    )
}