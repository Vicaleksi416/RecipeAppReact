import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export default function RecipeItems({ item }) {
  const { hadleDetail } = useContext(GlobalContext);

  return (
    <div className="item-box">
      <div className="flex h-auto overflow-hidden rounded-xl">
        <img
          src={item?.image_url}
          alt="recipe items"
          className="w-40 object-cover ease-in-out duration-300"
        />
      </div>
      <div className="flex-row">
        <h3 className="w-[280px] font-bold text-2xl truncate text-black">
          {item.title}
        </h3>
        <p className="text-base my-2 text-gray-600 font-medium">
          Recipe by {item.publisher}
        </p>
        <span>
          <button onClick={hadleDetail} className="detail-button">
            Recipe Details
          </button>
        </span>
      </div>
    </div>
  );
}
