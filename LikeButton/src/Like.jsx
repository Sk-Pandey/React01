import React, { useState } from "react";

const Like = () => {
  const [isLiked, setIsLiked] = useState(false);
  return (
    <>
      <div
        className="text-8xl cursor-pointer active:scale-95"
        onClick={() => setIsLiked(!isLiked)}
      >
        <i
          className={`${
            isLiked ? "fa-solid text-rose-500" : "fa-regular"
          } fa-heart transition-all duration-300`}
        ></i>
      </div>
    </>
  );
};

export default Like;
