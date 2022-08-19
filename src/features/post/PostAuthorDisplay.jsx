import React from "react";
import { useSelector } from "react-redux";
import { allUserArray } from "../user/userSlice";

import { Link } from "react-router-dom";

const PostAuthorDisplay = ({ userUniqueId }) => {
  const user = useSelector(allUserArray);

  const userDetail = user.filter((user) => user.userId === userUniqueId);

  return (
    <Link
      to={`/author/${userDetail[0]?.userId || "unknown-user"}`}
      className="hover:underline transition-all duration-200 hover:underline-offset-auto"
    >
      By - {userDetail[0]?.name || "Unknown Author"}
    </Link>
  );
};

export default PostAuthorDisplay;
