import Footer from "../../pages/footer/index";
import Header from "../../pages/header/index";
import HomePage from "../home/index";
import Navbar from "../navbar";

const Layout = () => {
  return (
    <div id="wrapper">
      <Navbar/>
      <Header />
      <HomePage/>
      <Footer />
    </div>
  );
};

export default Layout;