import React, { use } from "react";

const Album = ({ album }) => {
  return (
    <div className="p-3 border border-black rounded bg-rose-100 text-rose-700">
      <h1>Title:{album.title}</h1>
      <p>userId:{album.id}</p>
    </div>
  );
};

export default Album;
