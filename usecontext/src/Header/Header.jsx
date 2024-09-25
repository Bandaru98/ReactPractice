
import { useContext } from 'react'
import { linkcontext } from '../App'


const Header = () => {
    const { links } = useContext(linkcontext)
    return (
        <>
            <ul>
                <li>
                    <h1>data:{links}</h1>
                </li>
            </ul>
        </>
    )
}

export default Header