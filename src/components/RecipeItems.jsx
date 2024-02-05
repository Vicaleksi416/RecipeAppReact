import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export default function RecipeItems({ item }) {
  const { hadleDetail } = useContext(GlobalContext);
  const id = item.id;

  function openModal() {
    hadleDetail(id);
    const modal = document.querySelector('.detail-modal');
    const overlay = document.querySelector('.overlay');
    modal.classList.remove('hide');
    overlay.classList.remove('hide');
    // console.log(modal);
  }

  return (
    <div className="item-box" id={item.id} key={item.id}>
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
          <button onClick={openModal} className="detail-button">
            Recipe Details
          </button>
        </span>
      </div>
    </div>
  );
}
