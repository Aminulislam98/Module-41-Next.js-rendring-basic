import Album from "@/components/Album";

const AlbumsPage = async () => {
  const promiseAlbum = await fetch(
    "https://jsonplaceholder.typicode.com/albums",
  );
  const albums = await promiseAlbum.json();
  console.log(albums);
  return (
    <div className="max-w-7xl w-full mx-auto grid grid-cols-1 md:grid-cols-4 gap-3 py-10">
      {albums.map((album) => (
        <Album key={album.id} album={album}></Album>
      ))}
    </div>
  );
};

export default AlbumsPage;
