import ItemList from "./ItemList";
const RestaurantCategoryList = ({ data, showList, setshowThisIndex }) => {
  const { title, itemCards } = data;

  const handleClick = () => {
    setshowThisIndex();
  };

  return (
    <div
      className="p-4 my-4 shadow-sm bg-white  rounded-md hover: cursor-pointer"
      onClick={handleClick}
    >
      <dev className="flex  justify-between items-center">
        <span className="font-bold">
          {title} ({itemCards.length})
        </span>
        <span className="text-slate-500 text-2xl">⌄</span>
      </dev>
      <div>
        {showList &&
          itemCards.map((items) => {
            return <ItemList key={items?.card?.info?.id} item={items} />;
          })}
      </div>
    </div>
  );
};

export default RestaurantCategoryList;
