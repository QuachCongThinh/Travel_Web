import { useEffect, useState } from "react";
import "../../pages/home/style.scss";
import { fetchData } from "../../utils";
import { Destinations } from "../../components/home/destination";
import { BestTrips } from "../../components/home/trips";

const HomePage = () => {
  const [destination, setDestination] = useState({});
  const [bestTrips, setBesttrips] = useState({});
  console.log(bestTrips);

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
  }, []);
  return (
    <section>
      <div className="homepage">
        <Destinations data={destination} />
        <BestTrips data={bestTrips}/>
      </div>
    </section>
  );
};
export default HomePage;
