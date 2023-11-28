import { BiLogoTwitter } from "react-icons/bi";
import { IoLogoFacebook } from "react-icons/io";
import { AiFillYoutube } from "react-icons/ai";
import { FaPinterest, FaInstagram } from "react-icons/fa";
import "../../pages/footer/style.scss";

export function SocialMenuBar() {
  return (
    <>
      <ul className="socialMenuBar__icon">
        <li className="facebook">
          <a href="">
          <IoLogoFacebook />
          </a>
        </li>
        <li className="twitter">
          <a href="">
            <BiLogoTwitter />
          </a>
        </li>
        <li className="youtube">
          <a href="">
            <AiFillYoutube />
          </a>
        </li>
        <li className="pinterest">
          <a href="">
            <FaPinterest />
          </a>
        </li>
        <li className="instagram">
          <a href="">
            <FaInstagram />
          </a>
        </li>
      </ul>
    </>
  );
}
