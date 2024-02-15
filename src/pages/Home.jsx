import { useContext, useState } from 'react';
import { GlobalContext } from '../context/GlobalState';
import RecipeItems from '../components/subpages/RecipeItems';
import Modal from '../components/subpages/Modal';

export default function Home() {
  const { recipeList, loading, search, setSearch, handleSubmit } =
    useContext(GlobalContext);

  //these two controll if the modal is open or not
  const [viewingID, setViewingID] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleCloseModal = function () {
    setViewingID(null);
    setIsOpen(false);
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <Modal onClose={handleCloseModal} id={viewingID} isOpen={isOpen} />
      <div className="flex justify-center items-center container p-2 lg:p-6 mx-auto duration-300">
        <form onSubmit={handleSubmit} className="flex flex-wrap justify-center">
          <input
            type="text"
            name="search"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Enter Items..."
            className="search-input"
          />
          <button className="search-button">Search</button>
        </form>
      </div>
      <div className="py-8 container mx-auto flex flex-wrap justify-center gap-5">
        {recipeList && recipeList.length > 0 ? (
          recipeList.map(item => (
            <RecipeItems
              item={item}
              key={item.id}
              setViewingID={setViewingID}
              setIsOpen={setIsOpen}
            />
          ))
        ) : (
          <div>
            <p className="md:text-4xl text-2xl text-center text-black font-bold duration-300">
              Start by searching for a recipe or an ingredient.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
