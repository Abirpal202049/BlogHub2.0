import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { postAdded } from "./postSlice";

import { allUserArray } from "../user/userSlice";

const Addform = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [userId, setUserId] = useState("");

  const users = useSelector(allUserArray);

  const dispatch = useDispatch();

  const onSavePost = (e) => {
    e.preventDefault();
    if (title && body && userId) {
      dispatch(postAdded(title, body, Number(userId)));
      setUserId("")
      setTitle("");
      setBody("");
    }
  };

  // console.log("User : ", userId);

  return (
    <div className="max-w-[1200px] container mx-auto flex flex-col m-3 ">
      <h1 className=" text-[43px] font-bold">Add a New Post</h1>
      <form className="flex flex-col gap-[10px]">
        {/* Post Title */}
        <div>
          <label htmlFor="postTitle"></label>
          <input
            type="text"
            name="postTitle"
            id="postTitle"
            placeholder="Enter Your Post Title..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="focus:outline-none border-2 border-slate-300 rounded py-2  px-3 w-full"
          />
        </div>

        {/* Select Users */}
        <select
          className="border-2 border-slate-300 rounded py-2  px-3 w-full focus:outline-none"
          name="postUser"
          id="userId"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        >
          <option value="">Choose a user...</option>
          {users.map((user, index) => {
            return (
              <option key={user.userId} value={user.userId}>
                {user.name}
              </option>
            );
          })}
        </select>

        {/* Post Body */}
        <div>
          <label htmlFor="postBody"></label>
          <textarea
            className="border-2 border-slate-300 rounded py-2  px-3 w-full focus:outline-none"
            placeholder="Write Your Content Of The Post Here..."
            name="postBody"
            id="postBody"
            cols="30"
            rows="10"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
        </div>

        {/* Button */}
        <button
          className="bg-green-500 hover:bg-green-400 w-fit text-white font-semibold px-10 py-2 rounded shadow hover:shadow-none hover:text-slate-700 transition-all duration-500 disabled:bg-slate-400"
          // disabled
          onClick={onSavePost}
        >
          Save Post
        </button>
      </form>
    </div>
  );
};

export default Addform;
