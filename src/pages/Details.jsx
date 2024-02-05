import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalState';

export default function Detials() {
  const { id } = useParams();
  const { recipeDetail, setRecipeDetail, addToFav, favoriteList } =
    useContext(GlobalContext);

  useEffect(() => {
    async function getRecipeDetail() {
      const res = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
      );
      const { data } = await res.json();
      // console.log(data);

      if (data) {
        setRecipeDetail(data);
        // console.log(data);
      }
    }

    getRecipeDetail();
  }, [id, setRecipeDetail]);

  // console.log(recipeDetail);

  return (
    <div className="container mx-auto py-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div className="row-start-2 lg:row-start-auto">
        <div className="h-96 overflow-hidden rounded-xl group">
          <img
            src={recipeDetail?.recipe?.image_url}
            alt=""
            className="w-full h-full object-cover block group-hover:scale-105 duration-300"
          />
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <h3 className="font-bold text-2xl truncate text-black">
          {recipeDetail?.recipe?.title}
        </h3>
        <span className='"text-sm text-gray-600 font-medium"'>
          by {recipeDetail?.recipe?.publisher}
        </span>
        <div>
          <button
            onClick={() => addToFav(recipeDetail?.recipe)}
            className="p-3 px-8 rounded-lg text-sm font-medium uppercase tracking-wider mt-3 inline-block shadow-md bg-black text-white"
          >
            {favoriteList.findIndex(i => i.id === recipeDetail?.recipe?.id) !==
            -1
              ? 'Remove from favorite'
              : 'Add to favorite'}
            {/* TODO: toggle save & remove using state*/}
          </button>
        </div>
        <div>
          <span className="text-2xl font-semibold text-black">
            Ingredients:
          </span>
          <ul className="flex flex-col gap-3">
            {recipeDetail?.recipe?.ingredients.map(i => (
              <li>
                <span className="text-2xl font-semibold text-black">
                  {i.quantitiy} {i.unit}
                </span>
                <span className="text-2xl font-semibold text-black">
                  {i.description}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
