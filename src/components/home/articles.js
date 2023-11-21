import "../../pages/home/style.scss";
import { RiArrowRightSLine } from "react-icons/ri";

export function Articles({ data }) {
  return (
    <section>
      <div className="articles">
        <div className="articles__content">
          <h2>{data.data?.title}</h2>
          <p>{data.data?.description}</p>
        </div>
        <div className="articles__details">
          <ul>
            {data.data?.articles.map((item) => (
              <li>
                <img src={item.imageUrl}></img>
                <p className="date">{item.date}</p>
                <p className="title">{item.title}</p>
                <p className="description">{item.description}</p>
                <p>
                  Read More <RiArrowRightSLine />
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
