import db from '../data/db.json'
import React,{ useState } from 'react'
export default function Form(props) {  
 const [openp, openSet] = useState(false); 

    return (
        <>
            <form id={props.useid} className='py-5'>
                <div className="py-5 container my-5">
                    
                        <h2 className="center">{db.Form.Ftitle}</h2>
                   
                    <ul className='col-md-10 mx-auto' id='qna'>
                        {
                            db.Form.Qlist.map((v,i)=>{
                                return(
                                    <li >
                                      <a href="#none">
                                        <div>{v.Q}</div>
                                      </a>
                                        <div className='pa10'>
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
            </form>
        </>
    )
}

