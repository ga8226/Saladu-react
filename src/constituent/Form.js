import db from '../data/db.json'
import React,{ useState } from 'react'
  export default function Form(props) {
    const [activeQuestion, setActiveQuestion] = useState(null);

    const toggleAnswer = (index) => {
        if (activeQuestion === index) {
            setActiveQuestion(null);
        } else {
            setActiveQuestion(index);
        }
    };
       
    return (
        <>
            <form id={props.useid} className='py-5'>
                <div className="py-5 container my-5">
                    
                        <h2 className="center">{db.Form.Ftitle}</h2>
                   
                    <ul className='col-md-10 mx-auto' id='qna'>
                        {
                            db.Form.Qlist.map((v,i)=>{
                                return(
                                    <li key={i}>
                                      <a href="#none" onClick={() => toggleAnswer(i)}>
                                        <div>{v.Q}</div>
                                      </a>
                                        <div className={`answer ${activeQuestion === i ? 'active' : ''}`}>
                                            <div>
                                                <p>{v.A}</p>
                                            </div>
                                        </div>
                                  
                                </li>
                                )
                            })
                        }
                    </ul>
                    <form action="">

                    </form>
                
                </div> 
            </form>
        </>
    )

                }
