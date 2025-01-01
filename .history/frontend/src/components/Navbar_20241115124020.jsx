function Navbar (){
    return (
      <nav className="bg-white shadow-md top-1">
        <div className="container mx-auto flex justify-between items-center p-4">
          {/* Logo */}
          <div className="flex items-center">
            <img src="/path/to/logo.png" alt="flowithme" className="h-8" />
          </div>
        </div>
        {/* Search Bar */}
        <div className="flex-grow mx-4">
          <input
            type="text"
            placeholder="Search..."
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </nav>
    );
}

export default Navbar