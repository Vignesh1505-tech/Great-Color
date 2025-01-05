import Footer from "../Footer";
import Header from "../Header";
import PropTypes from "prop-types";

const Layout = ({ children }) => (
  <div className="">
    <Header />
    <main className="">{children}</main>
    <Footer />
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Layout;
