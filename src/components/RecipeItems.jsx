export default function RecipeItems({ item, setViewingID, setIsOpen }) {
  const id = item.id;

  function openModal() {
    setViewingID(id);
    setIsOpen(true);
    // console.log(id);
  }

  return (
    <div className="item-box" id={item.id} key={item.id}>
      <div className="flex h-auto overflow-hidden rounded-xl">
        <img
          src={item?.image_url}
          alt="recipe items"
          className="w-40 object-cover ease-in-out duration-300"
        />
      </div>
      <div className="flex-row">
        <h3 className="w-[280px] font-bold text-2xl truncate text-black">
          {item.title}
        </h3>
        <p className="text-base my-2 text-gray-600 font-medium">
          Recipe by {item.publisher}
        </p>
        <span>
          <button onClick={openModal} className="detail-button">
            Recipe Details
          </button>
        </span>
      </div>
    </div>
  );
}
