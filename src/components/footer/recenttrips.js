import {useState} from "react";

export function RecentTrips({ data }) {
    const [recentTrips] = useState([]);

  return (
    <section>
      <li className="widget-3">
        <h2 class="widget_title">{data.data?.title}</h2>
        <ul className="flick">
          <li>
              {/*.map*/}
          </li>
          {/* <li>
            <a>
              <img src={data.recentTrips?.imageURL}></img>
            </a>
          </li>
          <li>
            <a>
              <img src={data.recentTrips?.imageURL}></img>
            </a>
          </li>
          <li>
            <a>
              <img src={data.recentTrips?.imageURL}></img>
            </a>
          </li>
          <li>
            <a>
              <img src={data.recentTrips?.imageURL}></img>
            </a>
          </li>
          <li>
            <a>
              <img src={data.recentTrips?.imageURL}></img>
            </a>
          </li> */}
        </ul>
      </li>
    </section>
  );
}
