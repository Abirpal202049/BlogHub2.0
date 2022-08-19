import React from "react";

import AddPostForm from '../features/post/AddPostForm'
import PostList from '../features/post/PostList';

const HomePage = () => {
  return (
    <div>
      <AddPostForm />
      <PostList />
    </div>
  );
};

export default HomePage;
