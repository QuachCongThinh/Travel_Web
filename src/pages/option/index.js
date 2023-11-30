import { GoBook } from "react-icons/go";
import { CiSettings } from "react-icons/ci";
import { IoMdHeartEmpty } from "react-icons/io";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "../../pages/option/style.scss";

const Option = () => {
  return (
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
  );
};
export default Option;
