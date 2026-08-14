import { useState } from "react"
import Review from "./pages/Review.jsx"
import Pokemon from "./pages/Pokemon.jsx"
import Form from "./pages/Form.jsx"
import Counter from "./pages/Counter.jsx"
import { Navigate, Route, Routes } from "react-router"
import Layout from "./pages/Layout.jsx"
import FromControlend from "./pages/FromControlend.jsx"
import Detail from "./pages/Detail.jsx"

function App() {
  const [counter, setCounter] = useState(5)
  return (
    <Routes>
      <Route path="/" element={<Layout /> }> 
        <Route index element={<Navigate to={<Review/>}/> } replace />
        <Route path="reviews" element={<Review/>}/>
        <Route path="pokemon">
          <Route index element={<Pokemon/>}/>
          <Route path=":id" element={<Detail/>}/>
        </Route>
        <Route path="products" element={<Form/>}/>
        <Route path="counter" element={<Counter set={setCounter} get={counter} />}/>
        <Route path="control" element={<FromControlend/>}/>
      </Route>
    </Routes>
  )
}

export default App