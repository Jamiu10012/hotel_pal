import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  id: null,
  name: "",
  username: "",
  token: "",
};

const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    storeUser: (state, action) => {
      const { id, name, username, token } = action.payload;
      state.id = id;
      state.name = name;
      state.username = username;
      state.token = token;
    },
    clearUser: (state) => {
      Object.assign(state, initialState);
      // state.id = "";
      // state.name = "";
      // state.username = "";
      // state.token = "";
    },
  },
});

export default user.reducer;
export const { storeUser, clearUser } = user.actions;
