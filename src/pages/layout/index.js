import Footer from "../../pages/footer/index";
import Header from "../../pages/header/index";
import HomePage from "../home/index";
import MobileMenu from "../menubar";
import Navbar from "../navbar";
import Option from "../option";

const Layout = () => {
  return (
    <>
      <MobileMenu />
      <Option/>
      <div id="wrapper">
        <Navbar />
        <Header />
        <HomePage />
        <Footer />
      </div>
    </>
  );
};

export default Layout;
