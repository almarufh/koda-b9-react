import { useReducer, useEffect } from "react"
import users from "./usersContext.js"
import { load, save } from "../utils/localStorage.js"

const initialState = {
    actived: load("actived") || {},
    users: load("users") || []
}

function UsersProvider({ children }) {
    const [state, dispatch] = useReducer((prevState, actions) => {
        switch (actions.type) {
            case "LOGIN":
                return {
                    ...prevState,
                    actived: actions.payload
                }
            case "UPDATE":
                return {
                    ...prevState,
                    actived: {
                        ...prevState.actived,
                        name: actions.payload.name || actions.payload.email,
                        profile: actions.payload.profile
                    }
                }
            case "REGISTER":
                return {
                    ...prevState,
                    users: [
                        ...prevState.users,
                        actions.payload
                    ]
                }
            case "LOGOUT":
                return {
                    ...prevState,
                    actived: {}
                }
            default:
                return prevState
        }
    }, initialState)

    useEffect(() => {
        save("users", state.users)
        save("actived", state.actived)
    }, [state.users, state.actived])

    return (
        <users.Provider
            value={{
                state,
                dispatch
            }}
        >
            {children}
        </users.Provider>
    )
}

export default UsersProvider