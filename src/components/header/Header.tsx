import imgPro from '../../assets/img/imgPro.jpg'
import Navbar from "../navbar/Navbar"
import { useState } from "react"

const Header = () => {
    const [navOpen, setNavOpen] = useState<boolean>(false)

    const toggleNav = () => setNavOpen(!navOpen)
    return (
        <header className="fixed top-0 left-0 w-full h-20 flex items-center z-40 bg-gradient-to-b from-zinc-900 to-zinc-900/0">
            <div className="max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center md:px-6 md:grid md:grid-cols-[1fr,3fr,1fr]">
                <h1>
                    {/*<Link to="/" className="logo">*/}
                    {/* <img src="" width={40} height={40} alt="teshan_kalhara"/>*/}
                    {/*IMG*/}
                    {/*</Link>*/}
                    <a href="/" className="logo">
                        <img src={imgPro} width={40} height={40} alt="teshan_kalhara" />
                    </a>
                </h1>

                <div className="relative md:justify-self-center">
                    <button onClick={toggleNav} className="menu-btn md:hidden">
                        <div className="material-symbols-rounded">
                            {navOpen?'close':'menu'}
                        </div>
                    </button>
                    <Navbar navOpen={navOpen} />
                </div>

                <a href="#contact" className="btn btn-secondary max-md:hidden md:justify-self-end">
                    contact me
                </a>
            </div>
        </header>
    )
}

export default Header