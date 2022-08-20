import React from "react";
import { useSelector } from "react-redux";
import { allPosts } from "./postSlice";
import PostAuthor from "./PostAuthorDisplay";
import PostTimeDisplay from "./PostTimeDisplay";
import PostReaction from "./PostReaction ";



const PostList = () => {
  const posts = useSelector(allPosts);
  // const rev_post = posts.slice().reverse()
  // console.log(rev_post);

  // ? https://bobbyhadz.com/blog/react-reverse-array#:~:text=Call%20the%20slice()%20method,the%20result%20in%20a%20variable. 
  return (
    <>
      <h1 className="max-w-[1200px] container mx-auto text-[43px] font-bold">
        Posts
      </h1>
      <div className="flex max-w-[1200px] flex-wrap container mx-auto">
        {posts.slice().reverse().map((post, index) => {
          return (
            <div
              key={index}
              className="border-2 border-gray-700 m-5 p-5 text-white w-[45%] rounded-md shadow bg-red-400 font-semibold flex-col flex justify-between"
            >
              <div className="text-[30px] text-gray-800 shadow-lg p-2 rounded-full px-5 leading-[30px]">
                {post.title}
              </div>
              <p className="font-mono mt-5 m-10">{post.content}</p>
              <p className="text-[14px] flex justify-between text-slate-700 font-bold text-right">
                <PostTimeDisplay timestamp={post.date} />

                <PostAuthor userUniqueId={post.userId} />
              </p>
              <div className="flex justify-between mt-3 px-10">
                <PostReaction reactionObj={post.reaction} postId={post.id} />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default PostList;
