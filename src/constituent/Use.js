import db from '../data/db.json'
export default function Use(props) {  
    return (
        <>
            <section  id={props.useid} className="container pt-3 pt-lg-5 px-0 px-lg-3 mx-0 mx-lg-auto">
            <div className="pt-3">
                <h3 className='mb-5 center'>💚 이용방법 💚</h3>
                <div className="jusitfy-content-between align-items-center pt-5">
                    <ul className="d-flex">
                    {
                        db.Use.explain.map((v,i)=>{
                            return(
                                <li className='col-4 px-4'>
                                    <div className='center'><img src={v.useicon} alt="" className="img-fluid" /></div>
                                    <div>
                                    <strong>{v.usenum}</strong>
                                    <p>{v.usedeco}</p>
                                    </div>
                                </li>
                            )
                        })   
                    }
                    </ul>
                    <p>🌿샐러드와 샌드위치는 구성된 상품만 판매합니다🌿✨👑👍</p>
                </div>
                
                
            </div>
            
            </section>
        </>
    )
}