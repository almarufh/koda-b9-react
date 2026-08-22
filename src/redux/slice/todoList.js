import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

function newTask(payload) {
    function process(resolve, reject) {
        setTimeout(() => {
            if (!payload || !payload.id) {
                reject(new Error("ID task tidak ditemukan"));
                return;
            }
            resolve(payload);
        }, 3000);
    }
    return new Promise(process);
}

const initialState = {
    task: [
        {
            id: "172397965",
            task: "Sarapan Pagi sampai kenyang",
            isComplete: false
        }
    ],
    isPending: false,
    isFulfilled: false,
    isRejected: false,
    error: null,
}

export const createTask = createAsyncThunk(
    "createTask",
    async (payload, { rejectWithValue }) => {
    try {
      const data = await newTask(payload)
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
)

const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        removeTask: (prevState, {payload}) => {
            return {
                ...prevState,
                task: prevState.task.filter((e)=> e.id !== payload.id)
            }
        },
        toggleTask: (prevState, {payload}) => {
            return {
                ...prevState,
                task: prevState.task.map((e)=> {
                    if(e.id === payload.id) {
                        return {
                            ...e,
                            isComplete: !e.isComplete
                        }
                    }
                    return e
                })
            }
        },
    },
    extraReducers: (builder)=> {
        return builder.addAsyncThunk(createTask, {
            pending: (state) => {
                state.isPending = true
                state.isFulfilled = false
                state.isRejected = false
                state.error = null
            },
            fulfilled: (state, {payload}) => {
                state.task.push(payload)
                state.isPending = false
                state.isFulfilled = true
            },
            rejected: (state, {payload}) => {
                state.isFulfilled = false
                state.isRejected = true 
                state.error = payload
            }
        })
    }
})

export const {removeTask, toggleTask} = todoSlice.actions

export default todoSlice.reducer