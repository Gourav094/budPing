import {createSlice} from "@reduxjs/toolkit"

const conversationSlice = new createSlice({
    name:"conversation",
    initialState:{
        selectedConversation:null,
        messages:[],
    },
    reducers:{
        selectConversation: (state,action) => {
            state.selectedConversation = action.payload
        },  
        addNewMessage: (state, action) => {
            // state.messages = [...state.messages, action.payload]
            state.messages.push(action.payload) 
        },
        setMessages:(state,action) => {
            state.messages = action.payload
        } 
    }
})

export const {selectConversation,addNewMessage,setMessages} = conversationSlice.actions

export default conversationSlice.reducer