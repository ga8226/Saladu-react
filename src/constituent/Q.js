import db from '../data/db.json'
import React,{ useState } from 'react'
  export default function Q(props) {
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
            <section id={props.useid} className='py-5'>
                <div className="py-lg-5 py-4 container my-lg-5 my-3">
                    
                        <h2 className="center">{db.Q.Qtitle}</h2>
                   
                    <ul className='col-md-10 mx-auto' id='qna'>
                        {
                            db.Q.Qlist.map((v,i)=>{
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
                
                </div> 
            </section>
        </>
    )

                }
