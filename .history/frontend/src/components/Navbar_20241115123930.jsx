function Navbar (){
    return (
      <nav className="bg-white shadow-md top-1">
        <div className="container mx-auto flex justify-between items-center p-4">
          {/* Logo */}
          <div className="flex items-center">
            <img src="/path/to/logo.png" alt="flowithme" className="h-8" />
          </div>
        </div>
      </nav>
    );
}

export default Navbar