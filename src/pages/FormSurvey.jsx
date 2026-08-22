import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import { add, del } from "../redux/slice/Survey"
import { MdOutlineDelete } from "react-icons/md"



function FormSurvey() {
    const dispatch = useDispatch()
    const {survey} = useSelector((state) => state.survey )
    const {register, handleSubmit} = useForm()

    function submitForm(e) {
        e.id = `${Date.now()}`
        dispatch(add(e))
    }
  return (
    <main className="pt-20 px-5">
        <div className="mx-auto gap-8 grid grid-cols-[1fr_2fr] max-w-7xl px-12">
            <form
                onSubmit={handleSubmit(submitForm)}
                className="flex flex-col max-w-xl gap-8"
            >
                <span className="text-2xl font-bold text-primary mb-20">Form Survey Penonton</span>
                <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="f-14">Nama Lengkap</label>
                    <input
                        {...register("fullName", {required: "Nama Lengkap is required"})}
                        type="text"
                        id="name"
                        className="outline-none border border-border-header rounded-sm"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="umur" className="f-14">Umur</label>
                    <input
                        {...register("umur", {required: "Umur is required"})}
                        type="number"
                        id="umur"
                        className="outline-none border border-border-header rounded-sm"
                    />
                </div>
                <span className="f-14 mt-16">Jenis Kelamin</span>
                <div className="flex items-center gap-8 f-14">
                    <input
                        type="radio"
                        id="gender"
                        value="Laki-laki"
                        {...register("gender", { required: true })}
                    />
                    <label htmlFor="">Laki-Laki</label>
                </div>
                <div className="flex items-center gap-8 f-14">
                    <input
                        type="radio"
                        id="gender"
                        value="Perempuan"
                        {...register("gender", { required: true })}
                    />
                    <label htmlFor="gender">Perempuan</label>
                </div>
                <span className="f-14 mt-16">Apakah anda hobi menonton film?</span>
                <select
                  id="hoby"
                  defaultValue=""
                  {...register("hoby", { required: true })}
                  className="f-14"
                >
                  <option value="" disabled className="text-border-header">
                    Please choose an option
                  </option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
                <span className="f-14 mt-16">Genre film yang disukai ?</span>
                <div className="flex items-center gap-8 f-14">
                    <input
                        type="checkbox"
                        id="gender"
                        value="Action"
                        {...register("genre")}
                    />
                    <label htmlFor="gender">Action</label>
                </div>
                <div className="flex items-center gap-8 f-14">
                    <input
                        type="checkbox"
                        id="gender"
                        value="Comedy"
                        {...register("genre")}
                    />
                    <label htmlFor="gender">Comedy</label>
                </div>
                <div className="flex items-center gap-8 f-14">
                    <input
                        type="checkbox"
                        id="gender"
                        value="Horor"
                        {...register("genre")}
                    />
                    <label htmlFor="gender">Horor</label>
                </div>
                <div className="flex items-center gap-8 f-14">
                    <input
                        type="checkbox"
                        id="gender"
                        value="Romance"
                        {...register("genre")}
                    />
                    <label htmlFor="gender">Romance</label>
                </div>
                <button className="border mt-12 rounded-md w-fit px-8 py-2 f-14 bg-primary border-border-header text-light font-bold cursor-pointer">Submit</button>
            </form>
            <section className="text-sm">
                <span className="text-2xl font-bold text-primary">Table Data Survey</span>
                <table className="w-full mt-20">
                    <thead>
                        <tr className="[&_th]:border [&_th]:py-8 [&_th]:text-lg">
                            <th scope="col">No</th>
                            <th scope="col">Nama</th>
                            <th scope="col">Umur</th>
                            <th scope="col">Gender</th>
                            <th scope="col">Hoby</th>
                            <th scope="col">Genre</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {survey?.map((data, index)=> {
                            return (
                                <tr key={index} className="[&_td]:border [&_td]:py-16 jus" >
                                    <td scope="col" className="text-center">{index+1}</td>
                                    <td scope="col" className="pl-8">{data.fullName}</td>
                                    <td scope="col" className="text-center">{data.umur}</td>
                                    <td scope="col" className="text-center">{data.gender}</td>
                                    <td scope="col" className="text-center">{data.hoby}</td>
                                    <td scope="col" className="text-center text-wrap">{data.genre.join(", ")}</td>
                                    <td scope="col">{
                                        <div className="cursor-pointer" onClick={(e)=> {
                                            e.preventDefault()
                                            dispatch(del(data))
                                        }}>
                                            <MdOutlineDelete
                                                className="w-full text-4xl text-font-error"/>
                                        </div>
                                        }</td>
                                </tr>
                            )
                        })
                        }
                    </tbody>
                </table>
            </section>
        </div>
    </main>
  )
}
export default FormSurvey