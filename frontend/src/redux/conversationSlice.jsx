import {createSlice} from "@reduxjs/toolkit"

const conversationSlice = new createSlice({
    name:"conversation",
    initialState:{
        selectedConversation:null,
        messages:[],
        activeConversation:[]
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
        },
        clearMessages: (state) => {
            state.messages = [];
        },
        addActiveConversation:(state,action) => {
            state.activeConversation = action.payload
        },
        removeActiveConversation:(state,action) =>{
            state.activeConversation = state.activeConversation.filter(
                (user) => user._id !== action.payload);
        }
    }
})

export const {selectConversation,addNewMessage,setMessages,clearMessages,addActiveConversation,removeActiveConversation} = conversationSlice.actions

export default conversationSlice.reducer