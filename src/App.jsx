import { useState } from "react"
import Review from "./pages/Review.jsx"
import Pokemon from "./pages/Pokemon.jsx"
import Form from "./pages/Form.jsx"
import Counter from "./pages/Counter.jsx"
import { Navigate, Route, Routes } from "react-router"
import Layout from "./pages/Layout.jsx"
import FromControlend from "./pages/FromControlend.jsx"
import Detail from "./pages/Detail.jsx"
import NewPokemon from "./pages/NewPokemon.jsx"
import Login from "./pages/auth/Login.jsx"
import FormSurvey from "./pages/FormSurvey.jsx"
import TodoList from "./pages/TodoList.jsx"

function App() {
  const [counter, setCounter] = useState(5)
  return (
    <Routes>
      <Route path="/" element={<Layout /> }> 
        <Route index element={<Navigate to="/reviews" /> } replace />
        <Route path="reviews" element={<Review/>}/>
        <Route path="newpokemon" element={<NewPokemon />}/>
        <Route path="pokemon">
          <Route index element={<Pokemon/>}/>
          <Route path=":id" element={<Detail/>}/>
        </Route>
        <Route path="auth">
          <Route index element={<Navigate to="/auth/login" />} replace />
          <Route path="login" element={<Login/>}/>
        </Route>
        <Route path="products" element={<Form/>}/>
        <Route path="survey-movie" element={<FormSurvey/>} />
        <Route path="todo-list" element={<TodoList />} />
        <Route path="counter" element={<Counter set={setCounter} get={counter} />}/>
        <Route path="control" element={<FromControlend/>}/>
      </Route>
    </Routes>
  )
}

export default App