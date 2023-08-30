
export default function Form(props) {  
    return (
        <>
            <form id={props.useid} className="mb-5" action="https://saladu.co.kr/" method="GET">
            <div>
              <div>
                    <h3 className="text-center pt-2">샐러드유 알림받고 선물 받자! 🎁</h3>
                    <div className="pt-3">
                       <ul>
                       <li className="d-flex">
                            <label>전화번호<span className="frdeco">필수</span></label>
                            <input type="text" placeholder="000-0000-0000형식으로 기입해주세요."></input>
                        </li>
                        <div>
                        <input type="text" name="email[0]"></input><span>@</span>
                        <select name="email" id="email">
                                <option value="naver" selected>naver.com</option>
                                <option value="gmail">gmail.com</option>
                                <option value="daum.net">daum.net</option>
                                <option value="">직접입력</option> 
                        </select>
                        <input  type="text" class="emailact"  name="email" placeholder="직접입력"></input>
                        </div>  
                       </ul>
                    </div>
              </div>
            </div>
            </form>
        </>
    )
}








