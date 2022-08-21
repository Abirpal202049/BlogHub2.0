import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";
import { sub } from "date-fns";


const initialState = {
  posts : [],
  status : "ideal"
};


export const fetchPost = createAsyncThunk(
  'fetchPosts',
  async () => {
    const res = await fetch("https://i8c8ztg5.directus.app/items/blog");
    const data = await res.json();
    return data.data
  }
)

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    printState: (state) => {
      console.log("This is the current state : ", state);
    },

    likeAndDislike: (state, action) => {
      const { value, postId } = action.payload;

      const currentpost = state.posts.find((post) => post.id === postId);

      if (currentpost.reaction) {
        currentpost.reaction[value]++;
      }
    },

    postAdded: {
      reducer(state, action) {
        state.posts.push(action.payload);
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


  // pending | fulfilled | rejected
  extraReducers : (builder) => {
    builder
      .addCase(fetchPost.pending , (state, action) => {
        state.status = 'loading...'
      })
      .addCase(fetchPost.fulfilled , (state, action) => {
        state.status = "confirmed.."
        state.posts = action.payload
        console.log("State from Confirm : ", state);
        console.log("Action from Confirm : ", action);
      })
  }
});

export const allPosts = (state) => state.posts.posts;
export const postStatus = (state) => state.posts.status;


export const { postAdded, likeAndDislike } = postSlice.actions;

export default postSlice.reducer;
