import React, { useState } from 'react';

export default function Form(props) {
    const [showEmailInput, setShowEmailInput] = useState(false);

    const handleSelectChange = (e) => {
        const selectedValue = e.target.value;
        setShowEmailInput(selectedValue === 'show');
    };

    return (
        <>
            <form id={props.useid} className="mb-5" action="https://saladu.co.kr/" method="GET">
                <div>
                    <div className='mb-3'>
                        <h3 className="text-center pt-2">샐러드유 알림받고 선물 받자! 🎁</h3>
                    </div>
                    <div className="d-md-flex pt-3">
                        <div className="col-12 col-md-6">
                            <h5 className="text-center">이메일로 알림받기 🔔</h5>
                            <div className={`d-flex justify-content-center pt-2 ${showEmailInput ? 'act' : ''}`} id="emailsection">
                                <input type="text" name="email"></input><span>@</span>
                                <select name="email" className="email-select" onChange={handleSelectChange}>
                                    <option value="naver.com" selected>naver.com</option>
                                    <option value="google.com">google.com</option>
                                    <option value="daum.net">daum.net</option>
                                    <option value="show">직접입력</option>
                                </select>
                                {showEmailInput && (
                                    <input className="show" type="text" name="email" placeholder="직접입력"></input>
                                )}
                            </div>
                        </div>
                        <div className="col-12 col-md-6 kakao">
                            <h5 className="text-center">카카오톡으로 알림받기 📣</h5>
                            <a href="http://pf.kakao.com/_xjflLxj/chat" target="_blank"></a>
                        </div>
                    </div>
                    <div className="submit text-center">
                            <div className='mb-3'>
                                <input type="checkbox" id="agree"></input>
                                <label for="agree">개인정보정책동의</label>
                            </div>
                            <input type="submit" value="제출하기" className="text-center"></input>
                        </div>
                </div>
            </form>
        </>
    )
}