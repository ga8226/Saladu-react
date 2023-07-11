import Banner from '../constituent/Banner'
import Menu from '../constituent/Menu'
import Use from '../constituent/Use'
import Form from '../constituent/Form'
import Setup from '../constituent/Setup'

export default function Content(props) {  
    return (
        <section  id={props.cid}>
            <Banner ></Banner>
            <Menu useid={props.usedb.navi[0].href}></Menu>
            <Use></Use>
            <Form></Form>
            <Setup></Setup>

        </section>
    )
}
