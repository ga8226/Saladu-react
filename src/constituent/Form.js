
export default function Form(props) {  
    return (
        <>
            <form id={props.useid} className="mb-5" action="https://saladu.co.kr/" method="GET">
                <div>
                    <div>
                        <h3 className="text-center pt-2">샐러드유 알림받고 선물 받자! 🎁</h3>
                    </div>
                    <div className="d-flex">
                        <div className="col-6">
                            <h5 className="text-center">이메일로 알림받기 🔔</h5>
                            <div>
                            <input type="text" name="email"></input><span>@</span>
                            <input type="email" name="user-email" placeholder="이메일을 선택해주세요" id="user-email" required=""></input>
                            </div>
                        </div>
                        <div className="col-6">
                            <h5 className="text-center">카카오톡으로 알림받기 📣</h5>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}