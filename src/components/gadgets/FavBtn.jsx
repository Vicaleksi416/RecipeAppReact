import { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';

export default function FavBtn({ data }) {
  const { favoriteList, setFavoriteList } = useContext(GlobalContext);
  //   const [isInList, setIsInList] = useState(false);
  /* TODO: toggle save & remove using state*/

  function handleFavList(e) {
    const fav = favoriteList;
    const index = favoriteList.findIndex(i => i.id === e.id);
    if (index === -1) {
      fav.push(e);
    } else {
      fav.splice(index, 1);
    }
    setFavoriteList(fav);
  }

  //   useEffect(() => {
  //     const index = favoriteList.findIndex(i => i.id === data.id);
  //     // console.log(index);

  //     if (index === -1) {
  //       setIsInList(false);
  //     } else {
  //       setIsInList(true);
  //     }
  //   }, [data, favoriteList]);

  return (
    <>
      <button onClick={() => handleFavList(data)} className="fav-button">
        {favoriteList &&
        favoriteList.length > 0 &&
        favoriteList.findIndex(i => i.id === data.id) !== -1
          ? 'Remove from favorite'
          : 'Add to favorite'}
      </button>
    </>
  );
}
