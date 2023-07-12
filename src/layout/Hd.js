import { useState } from "react"
import { Nav, Navbar } from 'react-bootstrap';
import Scrollspy from 'react-scrollspy';

export default function Hd(props) {
    const [topAD, settopAD ] = useState(true); 

    
    return (
        <>

<header className="fixed-top border-bottom bg-white">
{ topAD &&  <div className="ad text-center py-2 px-lg-5 px-3 d-flex jusitfy-content-between" id="event">
                    <a href={props.usedb.topad.adlink} className="text-white flex-grow-1">{props.usedb.topad.adtitle}</a>
                    <button className="justify-content-end" onClick={ () =>{ 
                        settopAD(false)
                    }}><i class="bi bi-x-lg" ></i></button>
                  
                </div>
             }
      <Navbar className="d-flex justify-content-between align-items-center mx-lg-5 px-3">
       <Navbar.Brand as="h1">
                        <a href="#top"><img src="./img/logo.svg" alt="" /></a>
       </Navbar.Brand>
               
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Scrollspy id="navbar-nav" className="navbar-nav" items={['section1', 'section2', 'section3']} currentClassName="active">
          {
                        props.usedb.navi.map(( val, idx) => {
                                return(
                                    <li className={val.cls}>
                                        <Nav.Link href={"#"+val.href}>{val.nm}</Nav.Link>          
                                    </li>
                                )
                        })
                        } 
            
          </Scrollspy>
        </Navbar.Collapse>
      </Navbar>
      

    </header>
      
          
                
            
        </>
    )
}