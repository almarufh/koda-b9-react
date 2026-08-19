import { useReducer } from "react"
import users from "./usersContext.js"
import { load, save } from "../utils/localStorage.js"

const initialState = {
    actived: {},
    users: [{}]
}

function UsersProvider({children}) {
    const [state, dispatch] = useReducer((prevState, actions) => {
        switch (actions.type) {
            case "LOGIN":

                return {
                    ...prevState,
                    actived: actions.payload
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
                    actived: initialState.actived
                }
            default:
                break;
        }
    }, initialState)

    return(
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