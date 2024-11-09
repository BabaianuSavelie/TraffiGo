import hero from '../assets/heroo.png';

export default function Home() {
    return (
      <div className="container p-3 min-h-screen min-w-screen flex items-center justify-center bg-gray-100">
        <div className="flex w-full max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="w-1/2 hidden md:block">
            <img 
              src={hero}
              className="object-cover w-full h-full opacity-50 px-2"
            />
          </div>
  
          <div className="w-full md:w-1/2 p-8 space-y-6 flex flex-col justify-center">
            <h1 className="text-2xl font-bold text-center text-blue-600">TraffiGo</h1>
            <p className="text-center text-gray-600">Împreună pentru o societate mai sigură.</p>
            
            <form className="space-y-4">
              <div>
                <label htmlFor="fullname" className="block text-sm font-medium text-gray-700">Nume Prenume</label>
                <input
                  id="fullname"
                  name="fullname"
                  type="text"
                  required
                  className="text-black mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
              </div>
  
              <div>
                <label htmlFor="institution" className="block text-sm font-medium text-gray-700">Instituția</label>
                <input
                  id="institution"
                  name="institution"
                  type="text"
                  required
                  className="text-black mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
  
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Adresă de Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="text-black mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
  
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Parola</label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="text-black mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
  
              <div className="flex items-center">
                <input
                  id="remember_me"
                  name="remember_me"
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-900">Ține-mă minte</label>
              </div>
  
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                Autentificare
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
  