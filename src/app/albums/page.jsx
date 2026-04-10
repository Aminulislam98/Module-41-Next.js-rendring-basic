import Album from "@/components/Album";

const AlbumsPage = () => {
  const promiseAlbum = fetch(
    "https://jsonplaceholder.typicode.com/albums",
  ).then((res) => res.json());

  return (
    <div>
      This id data
      <Album promiseAlbum={promiseAlbum}></Album>
    </div>
  );
};

export default AlbumsPage;
