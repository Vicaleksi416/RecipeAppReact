import { useState, useContext, useEffect } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import FavBtn from '../gadgets/FavBtn';

export default function Modal({ onClose, id, isOpen }) {
  const [recipeDetail, setRecipeDetail] = useState(null);

  const { checkFav } = useContext(GlobalContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
        );
        const { data } = await res.json();

        if (data) {
          setRecipeDetail(data);
          // console.log(data);
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
    <>
      <div className={`detail-modal ${!isOpen && 'hide'}`}>
        <div className="w-full">
          <div className="time-tag">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5 inline-block"
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
              <div className="pt-4 px-8 mb-16 h-[336px] overflow-auto">
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
            <FavBtn data={data} />
            <button
              className="absolute bottom-0"
              onClick={() => checkFav(data)}
            >
              check fav
            </button>
          </main>
        </div>
      </div>
      <div className={`overlay ${!isOpen && 'hide'}`} onClick={onClose}></div>
    </>
  );
}
