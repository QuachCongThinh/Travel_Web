
export function RecentTrips({data}) {
  return (
    <section>
      <ul>
        <li className="widget-3">
          <h2 class="widget_title">{data.data?.title}</h2>
          <ul className="flick">
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
          </ul>
        </li>
      </ul>
    </section>
  );
}
