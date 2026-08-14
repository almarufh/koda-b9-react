import { Link} from "react-router"

function Header() {
    let navLink = [
        {
            link: "/reviews",
            name: "Reviews"
        },
        {
            link: "/pokemon",
            name: "Pokemon"
        },
        {
            link: "/products",
            name: "Products"
        },
        {
            link: "/counter",
            name: "Counter"
        },
        {
            link: "/control",
            name: "Controled"
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
                        <li key={res.id}>
                            <Link to={res.link}>{res.name}</Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
    </header>
  )
}

export default Header