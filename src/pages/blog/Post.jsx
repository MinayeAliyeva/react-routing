import React from "react";
import { useParams } from "react-router-dom";
const Post = () => {
  const { id, url } = useParams();
  console.log(id);
  return (
    <>
      <div>id={id}</div>
      <div>url={url}</div>
    </>
  );
};

export default Post;
