const Item = () => (
  <div className="border border-gray-100 shadow rounded-md p-4 w-full mx-auto bg-gray-300 space-x-4 space-y-4">
    <div className="animate-pulse flex flex-col space-y-2">
      <div className="rounded-lg bg-gray-400 h-40 w-full"></div>
      <div className="space-y-6 py-1">
        <div className="h-2 bg-gray-400 rounded"></div>
        <div className="space-y-3">
          <div className="grid grid-cols-3 gap-4">
            <div className="h-2 bg-gray-400 rounded col-span-2"></div>
            <div className="h-2 bg-gray-400 rounded col-span-1"></div>
          </div>
          <div className="h-2 bg-gray-400 rounded"></div>
        </div>
      </div>
    </div>
  </div>
);

const Skeleton = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xlg:grid-cols-4 gap-4">
      {Array.from([1, 2, 3, 4, 5, 6]).map((item) => (
        <Item key={`item-${item}`} />
      ))}
    </div>
  );
};

export default Skeleton;
