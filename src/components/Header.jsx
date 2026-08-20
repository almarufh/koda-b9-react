import { useContext, useState } from "react"
import { NavLink, useNavigate} from "react-router"
import users from "../context/usersContext.js"
import { HiMenuAlt2 } from "react-icons/hi"
import { useForm } from "react-hook-form"
function Header() {
    const {state, dispatch} = useContext(users)
    const [profile, setProfile] = useState(true)
    const {register, handleSubmit} = useForm()
    const [nav, setNav] = useState(false)
    const navigate = useNavigate()
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
        },
        {
            link: "/newpokemon",
            name: "New Pokemon"
        }
    ]

    const fileToBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = (error) => reject(error);
        });
    };

    async function changeProfile(formData) {
        try {
            let base64Profile = state.actived?.profile || "";

            if (formData.profile && formData.profile[0]) {
                base64Profile = await fileToBase64(formData.profile[0]);
            }

            const payload = {
                name: formData.name,
                profile: base64Profile
            };
            // console.log(payload)

            dispatch({ type: "UPDATE", payload });
            console.log(state)

        } catch (error) {
            console.error("Gagal mengonversi file gambar:", error);
        }
    }

  return (
    <header
        className='fixed w-full h-80 flex items-center justify-between py-18 px-16 bg-primary'
    >
        <div 
            className="order-2 flex items-center gap-16"
        >
            {state.actived.email 
            ? 
            <>
            <span className="flex font-bold text-2xl text-dark">{state.actived?.name?.toUpperCase()}</span> 
            <div className="h-75 w-75 bg-thirty rounded-full overflow-hidden flex items-center justify-center">
                <img src={`data:${state.actived.profile}`} />
            </div>
            {profile && 
            <div className="bg-orange-50 border border-border-header  w-5/10 fixed top-85 right-[1%] flex items-center justify-center py-20 rounded-xl">
            <form
                onSubmit={handleSubmit(changeProfile)}
                className="flex flex-col gap-10"
            >
                <div className="flex flex-col items-center">
                    <label htmlFor="profile" className="">
                        <div className="h-200 w-200 bg-thirty border border-border-header rounded-full overflow-hidden flex items-center justify-center">
                            <img src={`data:${state.actived.profile}`} alt="" className="object-cover" />
                        </div>
                    </label>
                    <input 
                        type="file" 
                        {...register("profile")}
                        className="hidden"
                        id="profile"
                    />
                </div>
                <div className="flex flex-col gap-2 text-primary font-bold">
                    <label htmlFor="name">Nama Lengkap</label>
                    <input 
                        className={`outline-none border border-border-header px-8 py-6 round-8 text-dark`}
                        type="text"
                        {...register("name")}
                        id="name"
                        defaultValue={state.actived.email}
                    />
                </div>
                <button className="text-xl font-bold px-8 py-4 w-fit self-center round-8 bg-primary">Submit</button>
            </form>

            </div>}
            </>
            
            : <span 
                onClick={()=> {
                    navigate("/auth/login")
                }}
                className="text-lg font-bold bg-dark px-16 py-8 round-8 text-light cursor-pointer">LOGIN</span>}
        </div>
        <nav
            className="order-1 flex"
        >
            <HiMenuAlt2 
                className="text-dark text-5xl cursor-pointer"
                onClick={()=> {
                    setNav(!nav)
                }}
            />

            {nav && <ul
                className="flex flex-col fixed top-75 left-16 bg-dark rounded-xl pr-20 py-8"
            >
                {navLink.map((res, idx)=> {
                    return (
                        <li key={idx} className="px-16 py-8 text-md font-bold text-primary">
                            <NavLink 
                                className={({ isActive }) =>
                                   `${
                                   isActive ? "bg-primary6 text-primary" : "text-light"
                                   }`
                               }
                                to={res.link}>{res.name}</NavLink>
                        </li>
                    )
                })}
            </ul>}
        </nav>
    </header>
  )
}

export default Header