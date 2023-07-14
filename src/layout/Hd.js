import { useState } from "react"
import { Nav, Navbar} from 'react-bootstrap';
import Scrollspy from 'react-scrollspy';

export default function Hd(props) {
    const [topAD, settopAD ] = useState(true); 
    const rwdstyle = "d-none d-md-inline";

    
    return (
        <>

<header className="fixed-top border-bottom">
{ topAD &&  <div className="text-center py-2 px-lg-5  d-flex jusitfy-content-between" id="event">
                    <a href={props.usedb.topad.adlink} className="text-white flex-grow-1">{

                    props.usedb.topad.adtitle.map((v, x)=>{ 
                       return(
                       <span className={ x !== 1 && rwdstyle } key={x}>
                       
                          {v}
                       </span>
                       )
                    })
                    }</a>
                    <button onClick={ () =>{ 
                        settopAD(false)
                    }}><i className="bi bi-x-lg d-block" ></i></button>
                  
                </div>
             }
        <Navbar className="d-flex justify-content-between align-items-center mx-lg-5 ">
       <Navbar.Brand as="h1" className="mb-0 me-0  me-md-4 ">
                        <a href="#top" className="d-block"><img src="./img/logo.svg" alt="" /></a>
       </Navbar.Brand>
               
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
       
          <Scrollspy id="navbar-nav" className="navbar-nav" items={[ props.usedb.navi[0].href, props.usedb.navi[1].href, props.usedb.navi[2].href,props.usedb.navi[3].href]} currentClassName="active">
          {
                        props.usedb.navi.map(( val, idx) => {
                                return(
                                    <li className={val.cls}  key={idx}>  
                                        <Nav.Link href={"#"+val.href}>{val.nm}</Nav.Link>          
                                    </li>
                                    
                                    );
                                })}
                                 <li className="ms-md-auto">
                                        <a href="https://saladu.co.kr/">
                                            <i className="bi bi-rocket-takeoff ms-auto p-2 d-block"></i>
                                        </a>
                                </li>
            
          </Scrollspy>
        </Navbar.Collapse>
      </Navbar>
      

    </header>
      
      
            
        </>
    )
}
