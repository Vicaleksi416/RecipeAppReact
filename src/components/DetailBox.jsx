import { useState, useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalState';

export default function DetialBox({ onClose, id }) {
  const [recipeDetail, setRecipeDetail] = useState(null);
  const { addToFav, favoriteList } = useContext(GlobalContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
        );
        const { data } = await res.json();

        if (data) {
          setRecipeDetail(data);
        }
      } catch (e) {
        console.log(e);
      }
    };

    if (id) {
      fetchData();
    }
  }, [id, setRecipeDetail]);

  const data = recipeDetail ? recipeDetail.recipe : null;

  return (
    <div className="w-full overflow-hidden">
      <div className="time-tag">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          class="w-5 h-5 inline-block"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
        <span> {data?.cooking_time}</span>
      </div>
      <button onClick={onClose} className="close-modal-button">
        &times;
      </button>
      <main className="flex-col">
        <img
          src={data?.image_url}
          alt={data?.title}
          className="box-content object-cover w-full h-64 rounded-t-lg"
        />
        <div>
          <h1 className="modal-title">
            <span>{data?.title}</span>
          </h1>
          <div className="pt-4 px-8 mb-16">
            <h2 className="text-2xl text-center pb-2">Ingredients:</h2>
            <ul>
              {data?.ingredients.map(i => (
                <li className="text-lg">
                  <span>
                    {i?.quantity}
                    {i.unit ? ` ${i.unit} of ` : null} {i.description}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <button
          onClick={() => addToFav(recipeDetail?.recipe)}
          className="fav-button"
        >
          {favoriteList.findIndex(i => i.id === recipeDetail?.recipe?.id) !== -1
            ? 'Remove from favorite'
            : 'Add to favorite'}
          {/* TODO: toggle save & remove using state*/}
        </button>
      </main>
    </div>
  );
}
