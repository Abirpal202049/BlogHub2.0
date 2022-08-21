import React from "react";

import AddPostForm from '../features/post/AddPostForm'
import PostList from '../features/post/PostList';

import {useDispatch, useSelector} from 'react-redux'
import {fetchPost, allPosts, postStatus } from '../features/post/postSlice';

const HomePage = () => {

  const dispatch = useDispatch();
  const posts = useSelector(allPosts);
  const status = useSelector(postStatus);


  console.log("All Post : ", posts);
  console.log("Current Status : ", status);


  const fetchAllPostAndRender = () => {
    dispatch(fetchPost())
  }
  // fetchAllPostAndRender()

  return (
    <div>
      <AddPostForm />
      <PostList />
    </div>
  );
};

export default HomePage;
