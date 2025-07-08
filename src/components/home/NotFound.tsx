
export const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center px-4">
      <h1 className="text-6xl font-bold text-blue-600">404</h1>
      <h2 className="mt-4 text-2xl font-semibold text-gray-800">Page Not Found</h2>
      <p className="mt-2 text-gray-600">
        Sorry, the page you are looking for doesn't exist or has been moved.
      </p>
      <a
        href="/portfolio"
        className="mt-6 inline-block px-4 py-2 bg-[#001A4B] text-white rounded-md hover:bg-blue-700 transition"
      >
        View Porfolio Page
      </a>
    </div>
  );
}
