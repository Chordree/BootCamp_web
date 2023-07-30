import '../styles/navbar.css'
import { AiOutlineMenu } from "react-icons/ai"
import {useNavigate} from 'react-router-dom'

const NavBar=()=>{
    const navigate = useNavigate()
    return (
        <>
        <section className='bar'>
            <section className="navBar">
                <div>
                    Logo
                </div>
                <div >
                    <ul className='menu-list'>
                        <li>HTml</li>
                        <li>HTml</li>
                        <li>HTml</li>
                        <li>HTml</li>
                        <li>HTml</li>
                        </ul>
                </div>
                <button onClick={()=>{navigate("/")}}>home</button>
                <div>
                <AiOutlineMenu/>
                </div>

            </section>

        </section>
        </>
    )
}

export default NavBar