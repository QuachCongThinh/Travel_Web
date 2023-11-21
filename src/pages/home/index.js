import { useEffect, useState } from "react";
import "../../pages/home/style.scss";
import { fetchData } from "../../utils";
import { Destinations } from "../../components/home/destination";
import { BestTrips } from "../../components/home/trips";
import { Choose } from "../../components/home/choose";

const HomePage = () => {
  const [destination, setDestination] = useState({});
  const [bestTrips, setBesttrips] = useState({});
  const [choose, setChoose] = useState({});

  useEffect(() => {
    fetchData("/destinations")
      .then((data) => {
        // text; // => 'Page not found'
        setDestination(data);
      })
      .catch((error) => {
        setDestination({});
        // error.message; // 'An error has occurred: 404'
      });
    fetchData("/value-trips")
      .then((data) => {
        // text; // => 'Page not found'
        setBesttrips(data);
      })
      .catch((error) => {
        setBesttrips({});
        // error.message; // 'An error has occurred: 404'
      });
    fetchData("/why-choose-us")
      .then((data) => {
        // text; // => 'Page not found'
        setChoose(data);
      })
      .catch((error) => {
        setChoose({});
        // error.message; // 'An error has occurred: 404'
      });
  }, []);
  return (
    <section>
      <div className="homepage">
        <Destinations data={destination} />
        <BestTrips data={bestTrips} />
        <Choose data={choose} />
      </div>
    </section>
  );
};
export default HomePage;
