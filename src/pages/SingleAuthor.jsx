import React from "react";
import { useParams } from "react-router-dom";

import { useSelector } from "react-redux";
import { allUserArray } from "../features/user/userSlice";

const SingleAuthor = () => {
  const params = useParams();
  const allUser = useSelector(allUserArray);
  const singleUser = allUser.filter((user) => user.userId === params.authSlug);
  console.log("All user", allUser);
  console.log(singleUser);
  console.log(params.authSlug);

  return (
    <div className="container max-w-[1200px] mx-auto my-5 ">
      Single Author Page - {singleUser[0]?.name}
    </div>
  );
};

export default SingleAuthor;
