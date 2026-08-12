import { useState } from "react"
import FormInput from "../components/FormInput.jsx"
import Table from "../components/Table.jsx"

function Form() {
    const [products, setProduct] = useState([])
  return (
    <div
    className="border flex flex-col items-center gap-4 p-5"
    >
        <FormInput props={setProduct}/>
        <Table props={products}/>
    </div>
  )
}

export default Form