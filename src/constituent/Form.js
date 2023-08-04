import db from '../data/db.json'
import React,{ useState } from 'react'
export default function Form(props) {  
 const [openp, openSet] = useState(false); 

    return (
        <>
            <form id={props.useid} className='py-5'>
                <div className="py-5 container my-5">
                    
                        <h2 className="center">{db.Form.Ftitle}</h2>
                   
                    <ul className='col-md-10 mx-auto'>
                        {
                            db.Form.Qlist.map((v,i)=>{
                                return(
                                    <li className='center'>
                                        <h3 id='Qbox' onClick={()=>{ openSet(!openp);  }}><div className='number'></div>{v.Q}</h3>
                                        { openp && <p>{v.A}</p> }
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

