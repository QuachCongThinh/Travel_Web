import { AiOutlineMobile } from "react-icons/ai";
import { FiMapPin } from "react-icons/fi";
import { CgAlarm } from "react-icons/cg";
import "../../pages/footer/style.scss";
import { Social } from "./social";

export function Contact({ data, social }) {
  return (
    <li className="widget-2">
      <h2 className="widget_title">{data.data?.title}</h2>
      <div className="text_widget">
        <p className="phone">
          <AiOutlineMobile />
          {data.data?.phone}
        </p>
        <p className="address">
          <FiMapPin />
          {data.data?.address}
        </p>
        <p className="time">
          <CgAlarm />
          {data.data?.time}
        </p>
      </div>
      <Social data={social} />
    </li>
  );
}
