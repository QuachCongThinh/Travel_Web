import "../../pages/footer/style.scss";

export function RecentTrips({ data }) {

  return (
    <section>
      <li className="widget-3">
        <h2 class="widget_title">{data.data?.title}</h2>
        <ul className="flick">
          {data.data?.recentTrips.map((item) => (
            <li>
              <img src={item.imageUrl} alt={item.title}></img>
            </li>
          ))}
        </ul>
      </li>
    </section>
  );
}
