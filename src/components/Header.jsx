// import { useNavigate, Link } from "react-router"

import { Link} from "react-router"

function Header() {
    const navLink = [
        {
            link: "#",
            name: "Reviews"
        },
        {
            link: "#",
            name: "Pokemon"
        }
    ]
  return (
    <header
        className='border w-full flex justify-between px-4 py-2'
    >
        <div id="logo">
            <span>LOGO</span>
        </div>
        <nav>
            <ul
                className="flex gap-5"
            >
                {navLink.map((res)=> {
                    return (
                        <li>{res.name}</li>
                    )
                })}
            </ul>
        </nav>
    </header>
  )
}

export default Header