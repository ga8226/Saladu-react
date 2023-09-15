import React, { useState } from 'react';

export default function Form(props) {
    const [showEmailInput, setShowEmailInput] = useState(false);
    const [hideselect , sethideselect] = useState(true);

    const handleSelectChange = (e) => {
        const selectedValue = e.target.value;
        if(selectedValue === 'show'){
            sethideselect(false)
        }
        setShowEmailInput(selectedValue === 'show');
    };

    return (
        <>
             <form id={props.useid} className="position-relative mb-5" action="https://saladu.co.kr/" method="GET">
                <div className="pt-3 pt-lg-5 position-relative">
                    <div className="container">
                        <div className='mb-3'>
                            <h3 className="pt-2">샐러드유 알림받고 선물 받자! 🎁</h3>
                        </div>
                        <div>
                            <h5>이메일로 알림받기 🔔</h5>
                            <div className={` pt-2 ${showEmailInput ? 'act' : ''}`} id="emailsection">
                                <input type="text" name="email"></input><span>@</span>
                                { hideselect &&  <select name="email" className="email-select" onChange={handleSelectChange}>
                                    <option value="naver.com" selected>naver.com</option>
                                    <option value="google.com">google.com</option>
                                    <option value="daum.net">daum.net</option>
                                    <option value="show">직접입력</option>
                                </select> }
                               
                                {showEmailInput && (
                                    <input className="show" type="text" name="email" placeholder="직접입력"></input>
                                )}
                            </div>
                            <div className=' kakao pt-4'>
                                <a href="http://pf.kakao.com/_xjflLxj/chat" target="_blank">
                                <h5 >카카오톡으로 알림받기 📣</h5>
                                </a>
                                <div className="submit">
                                    <div className='mb-3'>
                                         <input type="checkbox" id="agree"></input>
                                         <label for="agree">개인정보정책동의</label>
                                    </div>
                                    <input type="submit" value="제출하기"></input>
                        </div>
                            </div>
                        </div>
                        
                    </div>                   
                    
                </div>

            </form>
        </>
    )
}