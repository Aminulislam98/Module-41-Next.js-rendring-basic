import React, { use } from "react";

const Album = ({ promiseAlbum }) => {
  const albums = use(promiseAlbum);

  return <div>{albums.length}</div>;
};

export default Album;
