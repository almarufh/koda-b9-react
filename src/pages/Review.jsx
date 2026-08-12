import { useEffect, useState } from "react"
import { load, save } from "../utils/localStorage.js"
import Header from "../components/Header.jsx"
import Footer from "../components/Footer.jsx"

function Review() {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        const data = load("reviews")
        if (data) {
            setReviews(data)
        }
    }, [])


    function createReview (e) {
        e.preventDefault()
        const data = new FormData(e.target)
        const message =  {
            id: Date.now(),
            sender: data.get("name"),
            message: data.get("message")
        }

        setReviews((prevReview) => {
            const data = [
                ...prevReview,
                message
            ]
            return data
        })

        save("reviews", reviews)
    }
  return (
    <>
    <Header/>
    <main className='grid grid-cols-2 gap-5 p-5 items-start'>
        <section className='w-full flex justify-start'>
            <form 
                className='w-full flex flex-col gap-4'
                onSubmit={createReview}
            >
                <div className="flex flex-col gap-2 w-full">
                    <label 
                        htmlFor="nama"
                        className='text-md'
                    >Nama Lengkap</label>
                    <input 
                        type="text"
                        placeholder='Nama Lengkap' 
                        name="name"
                        className='border px-2 py-1 w-full rounded-md outline-none text-md'
                    />
                </div>
                <div 
                    className="flex flex-col gap-2 w-full"
                >
                    <label 
                        htmlFor="message"
                        className="text-md"
                    >Message</label>
                    <textarea 
                        name="message" 
                        id="message"
                        className='border px-2 py-1 w-full rounded-md outline-none text-md h-80'
                        placeholder='Your message'
                    ></textarea>
                </div>
                <button
                    type='submit'
                    className='self-end border text-md px-2 py-1 rounded-md cursor-pointer'
                >SUBMIT</button>
            </form>
        </section>

        <section
            className="w-full flex flex-col gap-5"
        >
            {reviews.map((r) => {
                return (
                    <article 
                        key={r.id}
                        className="flex flex-col border p-2 rounded-md"
                    >
                        <span>{r.sender}</span>
                        <span>{r.message}</span>
                    </article>
                )
            })}
        </section>
    </main>
    <Footer/>
    </>
  )
}

export default Review