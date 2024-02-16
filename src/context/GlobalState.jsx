import { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [recipeList, setRecipeList] = useState([]);
  const [favoriteList, setFavoriteList] = useState([]);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const res = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${search}`
      );

      const data = await res.json();
      // console.log(data);
      if (data?.data?.recipes) {
        setRecipeList(data.data.recipes);
        setLoading(false);
        setSearch('');
        navigate('/');
      }
    } catch (e) {
      console.log(e);
      setLoading(false);
      setSearch('');
    }
  }

  //TODO: DEV function, remove once done
  function checkFav(e) {
    let favList = [...favoriteList];
    console.log(favList);
    const index = favList.findIndex(i => i.id === e.id);
    console.log(index);
  }

  function handleFavList(e) {
    const fav = [...favoriteList];
    const index = favoriteList.findIndex(i => i.id === e.id);
    if (index === -1) {
      fav.push(e);
    } else {
      fav.splice(index, 1);
    }
    setFavoriteList(fav);
  }

  return (
    <GlobalContext.Provider
      value={{
        search,
        setSearch,
        handleSubmit,
        handleFavList,
        loading,
        recipeList,
        checkFav,
        favoriteList,
        setFavoriteList,
        setRecipeList,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
