

const Navbar = () => {
 
  return (
    <nav className="bg-gray-800 text-white">
      <div className="flex justify-between  px-4 py-3">
        <h1 className="text-2xl font-bold">Navbar</h1>
        <input
          type="text"
          placeholder="Search..."
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="flex justify-between items-center "></div>
    </nav>
  );
};

export default Navbar;
