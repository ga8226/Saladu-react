import Hd from './layout/Hd'
import Content from './layout/Content'
import Ft from './layout/Ft';
import dbnavi from './db/db'

export default function Saladu(props) {  
    return (
        <>
          <Hd usedb={dbnavi}></Hd>  
          <Content cid="content" usedb={dbnavi}></Content>
          <Ft></Ft>
        </>
    )
}