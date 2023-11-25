import "./style.scss";
import { useState, useEffect } from "react";
import images from "../../assets/images";
import { fetchData } from "../../utils";
import { SearchForm } from "../../components/header/form";
import { GoBook } from "react-icons/go";
import { CiSettings } from "react-icons/ci";
import { IoMdHeartEmpty } from "react-icons/io";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Header = () => {
  const [banner, setBannerData] = useState({});

  useEffect(() => {
    fetchData("/banner")
      .then((data) => {
        // text; // => 'Page not found'
        setBannerData(data);
      })
      .catch((error) => {
        setBannerData({});
        // error.message; // 'An error has occurred: 404'
      });
  }, []);

  return (
    <section>
      <div className="header">
        <div className="header__banner">
          <img src={banner.data?.imageUrl ?? images.banner} alt="Banner"></img>
        </div>
        <div className="container__header">
          <div className="title">
            <h1>{banner.data?.title}</h1>
            <h3>{banner.data?.description}</h3>
          </div>
          <SearchForm />
        </div>
        <div className="option__btn">
          <div className="icon__setting">
            <a className="tooltip">
              <CiSettings />
              <span className="text">Choose Theme Styling</span>
            </a>
          </div>
          <div className="icon__heart">
            <a className="tooltip">
              <IoMdHeartEmpty />
              <span className="text">Show Case</span>
            </a>
          </div>
          <div className="icon__book">
            <a className="tooltip">
              <GoBook />
              <span className="text">Theme Documentation</span>
            </a>
          </div>
          <div className="icon__cart">
            <a className="tooltip">
              <AiOutlineShoppingCart />
              <span className="text">Purchase Theme</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
