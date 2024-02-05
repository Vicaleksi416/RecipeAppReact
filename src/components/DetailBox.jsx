import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export default function DetialBox() {
  const { recipeDetail, setRecipeDetail, addToFav, favoriteList } =
    useContext(GlobalContext);

  function closeModal() {
    setRecipeDetail(null);
    const modal = document.querySelector('.detail-modal');
    const overlay = document.querySelector('.overlay');
    modal.classList.add('hide');
    overlay.classList.add('hide');
  }

  return (
    <div>
      <div>
        <button
          onClick={() => addToFav(recipeDetail?.recipe)}
          className="detail-button"
        >
          {favoriteList.findIndex(i => i.id === recipeDetail?.recipe?.id) !== -1
            ? 'Remove from favorite'
            : 'Add to favorite'}
          {/* TODO: toggle save & remove using state*/}
        </button>
        <button onClick={closeModal} className="close-modal-button">
          &times;
        </button>
      </div>
    </div>
  );
}
