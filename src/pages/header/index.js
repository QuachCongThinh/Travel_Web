import "./style.scss";
import { useState, useEffect } from "react";
import images from "../../assets/images";
import { fetchData } from "../../utils";
import { SearchForm } from "../../components/header/form";

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
    <div className="header">
      <div className="header__banner">
        <img src={banner.data?.imageUrl ?? images.banner} alt="Banner"></img>
      </div>
      <div className="container__header">
        <div id="title">
          <h1>{banner.data?.title}</h1>
          <h3>{banner.data?.description}</h3>
        </div>
        <SearchForm />
      </div>
    </div>
  );
};

export default Header;
