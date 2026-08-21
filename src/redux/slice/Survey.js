import { createSlice } from "@reduxjs/toolkit";

const data = {
    survey: []
}

const surveySlice = createSlice({
    name: "surveyMovies",
    initialState: data,
    reducers: {
        add: (prevState, {payload}) => {
            return {
                ...prevState,
                survey : [
                    ...prevState.survey,
                    payload
                ]
            }
        },
        del: (prevState, {payload}) => {

            return {
                ...prevState,
                survey: prevState.survey.filter((e)=> e.id !== payload.id)
            }
        }
    }
    

})

export const {add, del} = surveySlice.actions

export default surveySlice.reducer