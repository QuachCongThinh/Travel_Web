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
                <div className="image">
                  <img src={item.imageUrl}></img>
                  <h3 className="price">{item.price}</h3>
                  <h3 className="discount">{item.discount}</h3>
                  <p className="sale">Sale</p>
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
