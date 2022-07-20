import React from "react";
import "./app-header.css";

const Header = ({ likes, allPosts }) => {
  return (
    <div className="app-header d-flex">
      <h1>Ivan Pronchenko</h1>
      <h2>
        {allPosts} posts of which {likes} liked{" "}
      </h2>
    </div>
  );
};

export default Header;
