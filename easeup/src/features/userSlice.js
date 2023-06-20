import {createSlice} from '@reduxjs/toolkit';
import appApi from '../services/appApi';
import React from 'react'

export const userSlice = createSlice({
    name:"user",
    initialState:null,
    reducers:{
        addNotifications:(state,{payload})=>{},
        resetNotifications:(state,{payload})=>{},

    },

 extraReducers:(builder)=>{
//save user after signup
builder.addMatcher(appApi.endpoints.signupUser.matchFulfilled,(state,{payload})=>payload);

builder.addMatcher(appApi.endpoints.loginUser.matchFulfilled,(state,{payload})=>payload);

builder.addMatcher(appApi.endpoints.logoutUser.matchFulfilled,()=>null);



 }
  
});


export const {addNotifications,resetNotifications}=userSlice.actions; 

export default userSlice.reducer;