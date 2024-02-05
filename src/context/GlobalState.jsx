import { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [recipeList, setRecipeList] = useState([]);
  const [recipeDetail, setRecipeDetail] = useState(null);
  const [favoriteList, setFavoriteList] = useState([]);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const res = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${search}`
      );

      const data = await res.json();
      console.log(data);
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

  async function hadleDetail(id) {
    try {
      const res = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
      );
      const { data } = await res.json();
      // console.log(data);

      if (data) {
        setRecipeDetail(data);
        console.log(data);
        // console.log(recipeDetail);
      }
    } catch (e) {
      console.log(e);
    }
  }

  function addToFav(e) {
    // console.log(e);
    let favList = [...favoriteList];
    const index = favList.findIndex(i => i.id === e.id);
    // console.log(index);

    if (index === -1) {
      favList.push(e);
    } else {
      //FIXME: splice more then 1 item
      favList.splice(index, index + 1);
    }

    setFavoriteList(favList);
  }
  // console.log(favoriteList);

  return (
    <GlobalContext.Provider
      value={{
        search,
        setSearch,
        handleSubmit,
        hadleDetail,
        loading,
        recipeList,
        recipeDetail,
        setRecipeDetail,
        addToFav,
        favoriteList,
        setRecipeList,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
