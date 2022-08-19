import React from "react";
import { BiLike, BiDislike } from "react-icons/bi";
import { useDispatch } from "react-redux";

import { likeAndDislike } from "./postSlice";

const PostReaction = ({ reactionObj, postId }) => {
  const dispatch = useDispatch();

  return (
    <>
      {Object.keys(reactionObj).map((value, index) => {
        return (
          <button
            className="flex flex-row gap-[10px] text-slate-800 justify-center items-center px-2"
            key={index}
            onClick={() => dispatch(likeAndDislike({ postId, value }))}
          >
            {value == "like" ? <BiLike size={22} /> : <BiDislike size={22} />}

            <p className="-mt-[3px] font-bold text-gray-100"> {reactionObj[value] || 0}</p>
          </button>
        );
      })}
    </>
  );
};

export default PostReaction;
