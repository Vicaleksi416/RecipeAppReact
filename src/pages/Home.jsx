import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import RecipeItems from '../components/RecipeItems';

export default function Home() {
  const { recipeList, loading } = useContext(GlobalContext);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {recipeList && recipeList.length > 0 ? (
        recipeList.map(item => <RecipeItems item={item} key={item.id} />)
      ) : (
        <div>
          <p className="lg:text-4xl text-xl text-center text-black font-extrabold">
            Nothing from the search.
          </p>
        </div>
      )}
    </div>
  );
}
