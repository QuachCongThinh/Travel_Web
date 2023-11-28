import "../../pages/home/style.scss";
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
                <div className="tour__image">
                  <img src={item.imageUrl}></img>
                  <p className="sale">{item.sale}</p>
                  <div className="tour__price">
                    <span className={`${item.discount ? "discount" : ""}`}>{item.discount}</span>
                    <span className="normal__price">{item.price}</span>
                  </div>
                </div>
                <div className="text">
                  <h1 className="name">{item.title}</h1>
                  <p className="address">{item.excerpt}</p>

                  <div className="evaluate">
                    <div className="start"></div>
                    <div className="start"></div>
                    <div className="start"></div>
                    <div className="start"></div>
                    <div className="start"></div>

                    <p className="quantity">{item.stars} reviews</p>
                    <p className="day">
                      <CiClock2 />
                      {item.days} days
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
