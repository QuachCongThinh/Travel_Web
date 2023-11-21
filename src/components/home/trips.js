import "../../pages/home/style.scss";
import { PiStarThin } from "react-icons/pi";
import { CiClock2 } from "react-icons/ci";

export function BestTrips({ data }) {
  return (
    <section>
      <div className="bestTrips">
        <div className="bestTrips__content">
          <h2>{data.data?.title}</h2>
          <p>{data.data?.description}</p>
        </div>
        <div className="bestTrips__details">
          <ul>
            {data.data?.valueTrips.map((item) => (
              <li>
                <h3 className="price">{item.price}</h3>
                <h1 className="name">{item.title}</h1>
                <p className="address">{item.excerpt}</p>
                <p className="start">
                  <PiStarThin />
                  <PiStarThin />
                  <PiStarThin />
                  <PiStarThin />
                  <PiStarThin />
                  {item.stars}
                </p>
                <p className="day">
                  <CiClock2 />
                  {item.days}
                </p>
                <img src={item.imageUrl}></img>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
