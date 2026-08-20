import { Link } from "react-router"
import { LuEye, LuEyeClosed } from 'react-icons/lu'
import { useContext, useState } from "react"
import { useForm } from "react-hook-form"
import users from "../../context/usersContext"


function Login() {
  const {state, dispatch} = useContext(users)
  const [show, setShow] = useState({value: false, type: "password"})
  const {register, handleSubmit, formState: { errors }} = useForm()

  const login = (e) => {
    const newUser = {
      id: `${Date.now()}`,
      email: "hidayatmaruf99@gmail.com",
      name: e.email,
      password: btoa(e.password),
      role: "admin",
      profile: "image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTEiIGhlaWdodD0iMTEiIHZpZXdCb3g9IjAgMCAxMSAxMSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTUuNSAxLjM3NUw2LjE4NzUgMy40Mzc1TDguMjUgNC4xMjVMNi4xODc1IDQuODEyNUw1LjUgNi44NzVMNC44MTI1IDQuODEyNUwyLjc1IDQuMTI1TDQuODEyNSAzLjQzNzVMNS41IDEuMzc1WiIgc3Ryb2tlPSIjRkY1RjIyIiBzdHJva2Utd2lkdGg9IjAuOTE2NjY3IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTguNzA4MzcgMS4zNzVMOS4wNTIxMiAyLjQwNjI1TDEwLjA4MzQgMi43NUw5LjA1MjEyIDMuMDkzNzVMOC43MDgzNyA0LjEyNUw4LjM2NDYyIDMuMDkzNzVMNy4zMzMzNyAyLjc1TDguMzY0NjIgMi40MDYyNUw4LjcwODM3IDEuMzc1WiIgc3Ryb2tlPSIjRkY1RjIyIiBzdHJva2Utd2lkdGg9IjAuOTE2NjY3IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg=="
    }  
    dispatch({type: "LOGIN", payload: newUser})
    console.log(state.actived)
  }

    const passwordShow = () => {
    setShow((prevState) => ({
      ...prevState,
      ...{
        value: !prevState.value,
        type: prevState.value ? "password" : "text"
      }
    }));
  };
  return (
    <main className="flex w-full h-screen items-center justify-center">
        <form 
        onSubmit={handleSubmit(login)}
          className='pt-20'
        >
          <div className='flex flex-col gap-6'>
            <label 
              className='f-14 text-font-fivethy' 
              htmlFor="email"
            >Nama Lengkap</label>
            <input 
              className='bg-light border border-border-header py-10 px-12 f-14 text-font-secondary outline-none rounded-lg'
              type="text"  
              {...register("email", { 
                required: "Email is required"
              })} 
              id="email" 
              placeholder="Alma'ruf Hidayat" 
              defaultValue={"Alma'ruf Hidayat"}
            />
          </div>

          <div className='flex flex-col gap-6 py-12'>
            <div className="flex justify-between items-center">
              <label
                className='f-14 text-font-fivethy'
                htmlFor="password"
              >Password</label>

            </div>
            <div className="flex border border-border-header items-center justify-between rounded-lg overflow-hidden px-12">
              <input
                className='bg-light py-10 f-14 text-font-secondary w-full outline-none'
                type={show.type}
                {...register("password", {
                  required: "Password is required", minLength:{
                  value: 8,
                  message: "Password minimal 8 karakter"
                }
              }
              )}
                defaultValue={"12345678"}
                id="password"
                placeholder="********"
              />
              <div 
                onClick={passwordShow}
                className='cursor-pointer'
              >{show.value ? (<LuEye/>) : (<LuEyeClosed/>)}</div>
            </div>
          </div>
          <button
            className='bg-primary py-12 w-full my-center rounded-lg f-14 text-light font-semibold cursor-pointer'
          >Sign in</button>
        </form>
    </main>
  )
}

export default Login