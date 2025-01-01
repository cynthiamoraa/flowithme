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
          {/* Right Side Icons */}
        <div className="flex items-center space-x-4">
          <div className="relative">
            <button className="text-gray-600 hover:text-blue-500">
              <FaShoppingCart className="h-6 w-6" />
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1">3</span>
            </button>
          </div>
       
        </div>
      
      </nav>
    );
}

export default Navbar