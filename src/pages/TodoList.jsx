import { useState } from "react"
import { IoIosCreate } from "react-icons/io"
import { IoClose, IoCreateOutline } from "react-icons/io5"
import { useDispatch, useSelector } from "react-redux"
import { NavLink } from "react-router"
import { createTask } from "../redux/slice/todoList.js"

function TodoList() {
    const task = useDispatch()
    const dataTask = useSelector((state)=> state.task)
    const [create, setCreate] = useState(false)
    const tab = [
        {
            link: "#",
            name: "All"
        },
        {
            link: "#",
            name: "Todo"
        },
        {
            link: "#",
            name: "Complete"
        }
    ]
  return (
    <main className="h-screen w-full bg-amber-100 px-16 md:px-24 pt-20">
        <secction className="mx-auto max-w-5xl flex">
            <h1 className="text-2xl font-bold text-primary border-b-2 w-fit py-8">Today's Task</h1>
        </secction>

        <section className="mx-auto max-w-5xl mt-16 md:mt-20 flex items-end justify-between">
            <ul className="flex gap-20 pl-16 items-end">
                {tab.map((e, index)=> {
                    return (
                        <NavLink key={index} className={({isActive})=>`${isActive ? "border-b border-primary text-primary" : "text-dark-primary"} relative w-fit`}>
                            <li className={`f-14 text-dark-primary font-bold px-12 py-8`}>{e.name}
                            </li>
                        </NavLink>
                    )
                })}
                {create && <form 
                onSubmit={(e)=> {
                    e.preventDefault()
                    e.stopPropagation()
                    const data = Object.fromEntries(new FormData(e.target))
                    e.id = `${Date.now()}`
                    e.isComplete = false
                    console.log(dataTask.task)
                    console.log(data)
                    task(createTask(e))
                }}
                className="fixed inset-0 w-full h-screen bg-black/10 justify-center flex pl-24 pr-88 z-50"
                >
                    <div className="flex max-w-5xl mx-auto w-full max-h-300 h-fit mt-90 rounded-xl py-20">
                        <textarea
                            type="text"
                            name="task"
                            className="bg-font-thirty w-full outline-none border border-primary rounded-lg p-8 text-secondary min-h-150"
                            placeholder="Create new task..."
                        ></textarea>
                        <div className="right-10 bottom-2 flex flex-col items-start gap-10  mt-8 ml-8 ">
                            <div 
                                type="button"
                                onClick={(e)=> {
                                    e.preventDefault()
                                    e.stopPropagation()
                                    setCreate(!create)
                                }} 
                                className="flex items-center gap-5 px-8 py-2 rounded-sm w-90 hover:text-font-error bg-light font-bold text-md text-font-forthy cursor-pointer">
                                <IoClose className="border rounded-full"/>
                                <span>Close</span>
                            </div>
                            <button className="flex items-center gap-8 text-md font-bold border px-8 py-2 rounded-sm bg-font-thirty cursor-pointer hover:text-secondary text-primary hover:bg-text-secondary w-90">
                                <IoIosCreate className=""/>
                                <span>Create</span>
                            </button>
                        </div>
                    </div>
                </form>}
            </ul>

            <div 
                onClick={(e)=> {
                    e.stopPropagation()
                    setCreate(!create)
                }}
                className={`${create && "opacity-0"} text-xl font-bold flex items-center gap-12 py-12 px-16 border round-8 text-primary mb-30 cursor-pointer`}>
                <IoCreateOutline/>
                <span>New Task</span>
            </div>
        </section>

        <section className="mx-auto max-w-5xl border border-border-header h-500 bg-dark/20 rounded-xl mt-30">
                {/* <Outlet/> */}

        </section>
    </main>
  )
}

export default TodoList