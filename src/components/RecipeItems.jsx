import { Link } from 'react-router-dom';

export default function RecipeItems({ item }) {
  return (
    <div className="flex flex-col w-80 overflow-hidden p-5 bg-white/75 shadow-xl gap-5 rounded-2xl border-2 border-white">
      <div className="flex h-40 justify-center overflow-hidden items-center rounded-xl">
        <img
          src={item?.image_url}
          alt="recipe items"
          className="block w-full"
        />
      </div>
      <div>
        <span className="text-sm text-gray-600 font-medium">
          {item.publisher}
        </span>
        <h3 className="font-bold text-2xl truncate text-black">{item.title}</h3>
        <Link
          to={`/recipe-item/${item?.id}`}
          className="text-sm p-2 px-6 mt-5 rounded-lg font-medium tracking-wider inline-block shadow-md bg-black text-white"
        >
          Recipe Details
        </Link>
      </div>
    </div>
  );
}
