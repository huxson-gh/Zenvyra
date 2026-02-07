import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
      <img
        src="https://illustrations.popsy.co/gray/falling.svg"
        alt="Page not found"
        className="w-full max-w-[320px] mb-6"
      />

      <h1 className="text-6xl m-0 text-gray-900">404</h1>
      <p className="text-[1.1rem] text-gray-500 mb-6">
        Oops! The page you’re looking for doesn’t exist.
      </p>

      <Link
        to="/"
        className="px-5 py-2 rounded-lg no-underline bg-pink-600 text-white font-medium hover:bg-pink-500"
      >
        Go Home
      </Link>
    </div>
  );
};


export default NotFound;
