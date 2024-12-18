const Newsletter = () => {
    return (
      <div className="text-center mb-12 px-4 sm:px-8 md:px-16 lg:px-28 py-8">
        <h2 className="text-2xl font-semibold mb-6">Or Subscribe To The Newsletter</h2>
        <div className="flex items-center justify-center border-b border-gray-400 max-w-lg mx-auto">
          <input
            type="email"
            placeholder="Email Address..."
            className="flex-1 bg-transparent outline-none py-2 px-4 text-gray-700"
          />
          <button
            className="text-gray-600 font-semibold uppercase tracking-wider hover:text-black"
          >
            Submit
          </button>
        </div>
      </div>
    );
  };
  
  export default Newsletter;  