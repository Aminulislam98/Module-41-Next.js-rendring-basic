import Album from "@/components/Album";

const AlbumsPage = async () => {
  const promiseFoods = await fetch(
    "https://phi-lab-server.vercel.app/api/v1/lab/foods",
  );
  const dataFoods = await promiseFoods.json();
  const foods = dataFoods.data;
  return (
    <div className="max-w-7xl w-full mx-auto grid grid-cols-1 md:grid-cols-4 gap-3 py-10">
      {foods.map((food) => (
        <Album key={food.id} food={food}></Album>
      ))}
    </div>
  );
};

export default AlbumsPage;
