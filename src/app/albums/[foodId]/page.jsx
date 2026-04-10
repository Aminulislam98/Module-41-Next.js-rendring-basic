import Image from "next/image";
import Link from "next/link";

const FoodDetails = async ({ params }) => {
  const { foodId } = await params;
  const foodRes = await fetch(
    `https://phi-lab-server.vercel.app/api/v1/lab/foods/${foodId}`,
  );
  const foodData = await foodRes.json();
  const food = foodData.data;
  const { image_link, dish_name, category } = food;
  return (
    <div className="p-3 rounded-xl  flex flex-col w-100">
      <div className="flex flex-col justify-center items-center h-auto">
        <Image
          width={200}
          height={200}
          alt={image_link}
          src={image_link}
        ></Image>
      </div>
      <div>
        <h1 className="font-semibold text-2xl">{dish_name}</h1>
        <p>userId:{category}</p>
      </div>
      <div className="flex flex-col gap-2 mt-auto">
        <button className=" py-2 px-3 bg-yellow-500 rounded w-full text-black">
          Buy now
        </button>
        <button className=" py-2 px-3 bg-green-500 rounded w-full text-white">
          Show Details
        </button>
      </div>
    </div>
  );
};

export default FoodDetails;
