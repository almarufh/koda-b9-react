import { useState } from "react"
import Review from "./pages/Review.jsx"
import Pokemon from "./pages/Pokemon.jsx"
import Form from "./pages/Form.jsx"
import Counter from "./pages/Counter.jsx"
import { Route, Routes } from "react-router"
import Layout from "./pages/Layout.jsx"

function App() {
  const [counter, setCounter] = useState(5)
  return (
    <Routes>
      <Route element={<Layout/> }> 
        <Route path="/" element={<Review/>}/>
        <Route path="/pokemon" element={<Pokemon/>}/>
        <Route path="/products" element={<Form/>}/>
        <Route path="/counter" element={<Counter set={setCounter} get={counter} />}/>
      </Route>
    </Routes>
  )
}

export default App