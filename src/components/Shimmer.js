const Ui = () => {
  return (
    <div className="p-4 m-4 w-56 bg-white rounded-lg shadow-lg animate-pulse">
      <div className="h-32 bg-gray-300 rounded-md mb-4"></div>
      <div className="h-4 w-20 bg-gray-300 mb-2"></div>
      <div className="h-4 w-32 bg-gray-300 mb-2"></div>
      <div className="h-4 w-24 bg-gray-300 mb-2"></div>
      <div className="h-4 w-16 bg-gray-300"></div>
    </div>
  );
};

const Shimmer = () => {
  const number = Array.from({ length: 15 });

  return (
    <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {number.map((_, index) => (
        <Ui key={index} />
      ))}
    </div>
  );
};

export default Shimmer;
