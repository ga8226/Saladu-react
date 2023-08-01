export default function Ft(props) {  
    return (
        <>
            <footer id="ft">
                <div className="container pt-lg-4 px-lg-3  mx-lg-auto">
                    <div className="d-flex justify-content-between align-items-center">
                         <img src="../img/logo.svg" alt="푸터로고" className="img-fluid"/>
                         <div>
                            <ul className="d-lg-flex mb-0 d-md-none">
                                <li><a href="#none">고객문의</a></li>
                                <li className="px-3"><a href="#none">창업문의</a></li>
                            </ul>
                    </div>
                    </div>
                    <div className="pt-4">
                        <div>
                            <ul className="d-flex">
                                <li><span>(주) 샐러드유</span>대전광역시 유성구 문지로 291,206호</li>
                                <li className="px-3"><span>사업자 등록번호</span>831-81-02134</li>
                                <li className="px-3"><span>대표</span>유미정</li>                                
                            </ul>
                            <ul className="d-md-flex d-lg-none">
                                <li><a href="#none">고객문의</a></li>
                                <li className="px-3"><a href="#none">창업문의</a></li>
                            </ul>
                            <ul className="d-flex">
                                <li><span>Tel</span>1544-7386</li>
                                <li className="px-3"><span>E-mail</span>epfree@naver.com</li>
                            </ul>
                        </div>
                    </div>
                    
                </div>
            </footer>
        
        </>
    )
}