import { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';

export default function FavBtn({ data }) {
  const { favoriteList, handleFavList } = useContext(GlobalContext);

  return (
    <>
      <button onClick={() => handleFavList(data)} className="fav-button">
        {favoriteList.findIndex(i => i.id === data?.id) !== -1
          ? 'Remove from favorite'
          : 'Add to favorite'}
      </button>
    </>
  );
}
