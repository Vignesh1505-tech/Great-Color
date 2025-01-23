import { Link, useLocation } from "react-router-dom";
//import { navLinks } from "../../constants";

const Breadcrumb = () => {
  const location = useLocation();

 
  if (location.pathname.toLowerCase() === "/") {
    return null;
  }

  const pathnames = location.pathname.split("/").filter((x) => x);
  const homeLink = navLinks.find((link) => link.id === "home");
  const currentLink = navLinks.find(
    (cLink) => cLink.link.toLowerCase() === location.pathname
  );

  let currentPageTitle = currentLink ? currentLink.title : "page";
  let pageTitle =
    currentPageTitle === "Products" ? "Our Products" : currentPageTitle;

  return (
    <nav className="leading-9 md:my-[30px] md:mx-[100px]">
      <h3 className="text-[32px] font-bold">{pageTitle}</h3>
      <ul className="breadcrumb">
        {homeLink && (
          <li key="home" id="homes">
            <Link to="/">{homeLink.title}</Link>
          </li>
        )}
        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join("/")}`;
          return (
            <li key={to}>
              <Link to={to}>{value}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Breadcrumb;
