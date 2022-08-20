import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";

const initialState = [
  {
    id: nanoid(),
    title: "Learning moe on Redux Toolkit",
    content:
      "Sonny, and Pedro coder are the 2 teachers from where i get to know about Redux",
    date: sub(new Date(), { minutes: 10 }).toISOString(),
    userId: 3,
    reaction: {
      like: 0,
      dislike: 0,
    },
  },
  {
    id: nanoid(),
    title: "Slices....",
    content: "Slices are the important part of the Redux",
    date: sub(new Date(), { minutes: 5 }).toISOString(),
    reaction: {
      like: 0,
      dislike: 0,
    },
  },
];

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    printState: (state) => {
      console.log("This is the current state : ", state);
    },

    likeAndDislike: (state, action) => {
      const { value, postId } = action.payload;

      const currentpost = state.find((post) => post.id === postId);

      if (currentpost.reaction) {
        currentpost.reaction[value]++;
      }
    },

    postAdded: {
      reducer(state, action) {
        state.push(action.payload);
      },

      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            date: new Date().toISOString(),
            userId,
            reaction: {
              like: 0,
              dislike: 0,
            },
          },
        };
      },
    },
  },
});

export const allPosts = (state) => state.posts;

export const { postAdded, likeAndDislike } = postSlice.actions;

export default postSlice.reducer;
