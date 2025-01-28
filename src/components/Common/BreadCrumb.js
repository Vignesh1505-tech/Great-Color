import { Link, useLocation } from "react-router-dom";

const Breadcrumb = () => {
  const location = useLocation();

  // If on the home page, don't show breadcrumb
  if (location.pathname.toLowerCase() === "/") {
    return null;
  }

  // Split the pathname into parts and remove empty segments
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <nav className="leading-9 md:my-[30px] text-gray-600">
      {/* Home link */}
      <Link to="/" className="font-semibold text-gray-600">
        Home
      </Link>

      {pathnames.length > 0 && <span className="mx-2">|</span>}

      {pathnames.map((value, index) => {
        const decodedValue = decodeURIComponent(value);
        const isLast = index === pathnames.length - 1;

        return (
          <span key={index} className="text-gray-500">
            {decodedValue}
            {!isLast && <span className="mx-2">|</span>}
          </span>
        );
      })}
    </nav>
  );
};

export default Breadcrumb;
