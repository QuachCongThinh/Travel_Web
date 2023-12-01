import "../../pages/footer/style.scss";

export function RecentTrips({ data }) {

  return (
    <section>
      <li className="widget-3">
        <h2 className="widget_title">{data.data?.title}</h2>
        <ul className="flick">
          {data.data?.recentTrips.map((item, recentKey) => (
            <li key={recentKey}>
              <img src={item.imageUrl} alt={item.title}></img>
            </li>
          ))}
        </ul>
      </li>
    </section>
  );
}
