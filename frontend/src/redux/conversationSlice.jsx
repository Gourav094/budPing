import {createSlice} from "@reduxjs/toolkit"

const conversationSlice = new createSlice({
    name:"conversation",
    initialState:{
        selectedConversation:null,
        users:[]
    },
    reducers:{
        selectConversation: (state,action) => {
            state.selectedConversation = action.payload
        }
    }
})

export const {selectConversation} = conversationSlice.actions

export default conversationSlice.reducer