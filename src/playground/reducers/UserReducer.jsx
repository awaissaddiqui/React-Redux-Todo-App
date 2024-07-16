import { createSlice } from "@reduxjs/toolkit";
import { userList } from "../Data";

const userSlice = createSlice({
    name:"Users",
    initialState: userList,
    reducers:{
        addUser:(state, action)=>{
            
            state.push(action.payload)
        },
        updateUser:(state, action)=>{
            const {id,editName, editEmail} = action.payload;
            const findUser = state.find(user => user.id== id);
            if(findUser){
                findUser.name = editName;
                findUser.email= editEmail;
            }
            console.log(findUser);
        },
        deleteUser:(state, action)=>{
            const {id} = action.payload;
            const uu = state.find(user => user.id === id)
            console.log(uu);
            if(uu){
               return state.filter(k => k.id !== id)
            }
            console.log(id);
            
        }
    }
})
export const {addUser, deleteUser, updateUser} = userSlice.actions;
export default userSlice.reducer;