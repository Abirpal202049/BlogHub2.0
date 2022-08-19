import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
  { name: "Abir Pal", userId: 1 },
  { name: "Rupam Bhattacharya", userId: 2 },
  { name: "Saikat Mukherjee", userId: 3 },
];

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const {} = userSlice.actions;

export const allUserArray  = (state) => state.users;

export default userSlice.reducer;
