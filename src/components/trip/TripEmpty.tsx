const TripEmpty = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full py-32">
      <p className="text-2xl font-bold">{`No results found`}</p>
      <p className="text-sm text-gray-500">{`Please try again with different filters.`}</p>
    </div>
  );
};

export default TripEmpty;
