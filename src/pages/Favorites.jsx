import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import RecipeItems from '../components/subpages/RecipeItems';
import Modal from '../components/subpages/Modal';

export default function Favorties() {
  const { favoriteList } = useContext(GlobalContext);

  return (
    <>
      <Modal />
      <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
        {favoriteList && favoriteList.length > 0 ? (
          favoriteList.map(item => <RecipeItems item={item} key={item.id} />)
        ) : (
          <div>
            <p className="md:text-4xl text-2xl text-center text-black font-bold duration-300">
              Nothing in the favorite list.
            </p>
          </div>
        )}
      </div>
    </>
  );
}
