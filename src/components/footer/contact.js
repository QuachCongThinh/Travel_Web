import { AiOutlineMobile } from "react-icons/ai";
import { FiMapPin } from "react-icons/fi";
import { CgAlarm } from "react-icons/cg";
import "../../pages/footer/style.scss";
import { Social } from "./social";

export function Contact({ data, social }) {

  return (
    <section>
      <li className="widget-2">
        <h2 class="widget_title">{data.data?.title}</h2>
        <div className="text_widget">
          <p>
            <AiOutlineMobile />
            {data.data?.phone}
          </p>
          <p>
            <FiMapPin />
            {data.data?.address}
          </p>
          <p>
            <CgAlarm />
            {data.data?.time}
          </p>
        </div>
        <Social data={social}  />
      </li>
    </section>
  );
}
