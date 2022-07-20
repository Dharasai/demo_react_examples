

import { createSlice } from "@reduxjs/toolkit";
import { userData } from "./FakeData";



const UserSlice = createSlice({
    name : "userSlice",
    initialState:{  value : userData},
    // UserData is the fakedata by using [{}] format 
    reducers:{
        addUser: (state, action)=>{
            state.value.push(action.payload)
        },
        DELETEUSER: (state,action)=>{
            state.value = action.payload
        },
        EDITUSER: (state,action)=>{
            state.value = action.payload
        }
    }
})

//  here state is initialState and .value is the  value [array] .push we are pushing the previous data to action.payload data

export  const {addUser, DELETEUSER, EDITUSER} = UserSlice.actions;
// actions created we can dispatch this actions in component

export default UserSlice.reducer


