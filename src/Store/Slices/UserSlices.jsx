import { createSlice } from "@reduxjs/toolkit";
const initialState = [];

const usersSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUsers(state, action) {
      state.push(action.payload);
    },
    // here state is belongs to only usersSlice state.

    removeUser(state, action) {
      // state.pop(action.payload);
      // in splice we will give parametr to which one and how many i want to delete.
      state.splice(action.payload, 1);
    },
    clearAllusers(state, action) {
      console.log("hii del");
      return [];
      // state.filter(action.payload ! == value)
    },
  },
});
// console.log("empaty data ",usersSlice.actions);         for checking all the reducers function(addusers, removeuser....etc)
// console.log("empaty data ",usersSlice.actions.addUsers());

export { usersSlice };
export const { addUsers, removeUser, clearAllusers } = usersSlice.actions;

// or we can write like that
//        export default usersSlice.reducer
// and in the store file we can mentioned like          reducer:{ user:usersSlice }
